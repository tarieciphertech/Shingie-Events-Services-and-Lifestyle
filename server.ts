import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const allowedOrigin = process.env.ALLOWED_ORIGIN;
const contactEmail = process.env.CONTACT_EMAIL;
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

const emailEnabled = Boolean(contactEmail && smtpHost && smtpPort && smtpUser && smtpPass);

const quoteSchema = z.object({
  name: z.string().min(2, 'Please provide a valid name.'),
  phone: z.string().min(8, 'Please provide a valid phone number.'),
  email: z.string().email('Please provide a valid email address.').optional().or(z.literal('')),
  eventType: z.string().min(1, 'Event type is required.'),
  eventDate: z.string().optional(),
  location: z.string().optional(),
  guests: z.string().optional(),
  services: z.string().min(1, 'Please select the services you need.'),
  budget: z.string().optional(),
  requirements: z.string().optional(),
});

app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigin || true,
  })
);
app.set('trust proxy', 1);

app.use(
  '/api/',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: 'Too many requests from this IP, please try again in a few minutes.' },
  })
);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/quote', async (req, res) => {
  const parsed = quoteSchema.safeParse(req.body);
  if (!parsed.success) {
    const message = parsed.error.issues.map((issue) => issue.message).join(' ');
    return res.status(400).json({ message });
  }

  const quoteData = parsed.data;

  const formattedMessage = `New quote inquiry from ${quoteData.name}:

Phone: ${quoteData.phone}
Email: ${quoteData.email || 'Not provided'}
Event Type: ${quoteData.eventType}
Event Date: ${quoteData.eventDate || 'Not specified'}
Location: ${quoteData.location || 'Not specified'}
Guests: ${quoteData.guests || 'Not specified'}
Services: ${quoteData.services}
Budget: ${quoteData.budget || 'Not specified'}
Requirements: ${quoteData.requirements || 'None'}
`;

  console.log(formattedMessage);

  if (emailEnabled) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `Shingie Events Services Quote <${smtpUser}>`,
        to: contactEmail,
        subject: `New quote request from ${quoteData.name}`,
        text: formattedMessage,
      });

      return res.json({ message: 'Quote request sent successfully.' });
    } catch (sendError) {
      console.error('Email send failed:', sendError);
      return res.status(500).json({ message: 'Unable to send your quote request right now. Please try again later.' });
    }
  }

  return res.json({ message: 'Quote request received successfully.' });
});

app.listen(port, () => {
  console.log(`Quote API server running on http://localhost:${port}`);
});
