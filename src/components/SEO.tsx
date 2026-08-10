import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

const defaultTitle = 'Shingie Events Services and Lifestyle';
const defaultDescription = 'Elegant event planning, décor, catering, and custom cakes for memorable celebrations.';

export default function SEO({ title = defaultTitle, description = defaultDescription }: SEOProps) {
  const pageTitle = title === defaultTitle ? title : `${title} | ${defaultTitle}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
