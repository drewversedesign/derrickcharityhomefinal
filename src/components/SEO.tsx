
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Derrick Charity Home - Hope and Support for Children in Uganda',
  description = 'Derrick Charity Home provides care, education, and empowerment for orphans and vulnerable children in Uganda. Join us in making a difference.',
  type = 'website',
  name = 'Derrick Charity Home',
  imageUrl = 'https://github.com/drewversedesign/Derrick-Charity-Home/blob/main/IMG-20250518-WA0045.jpg?raw=true', // Generic placeholder
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['charity', 'orphanage', 'uganda', 'children support', 'education', 'healthcare', 'non-profit', 'community development'],
  isBlogPost = false
}) => {
  const location = useLocation();
  // Assuming the production URL will be derrickcharityhome.org. Adjust if different.
  const siteUrl = 'https://www.derrickcharityhome.org'; 
  const currentUrl = `${siteUrl}${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `${siteUrl}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Derrick Charity Home',
    url: siteUrl,
    logo: `${siteUrl}/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png`, // TODO: Update with actual logo URL
    description: 'Providing care, education, and empowerment for orphans and vulnerable children in Uganda.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support', // Or 'general inquiries'
      email: 'info@derrickcharityhome.org' // Placeholder email
    },
    sameAs: [ // Add actual social media links if available
      // 'https://www.facebook.com/derrickcharityhome',
      // 'https://www.twitter.com/derrickcharity',
      // 'https://www.instagram.com/derrickcharityhome'
    ]
  };

  // Create BlogPosting JSON-LD structured data if it's a blog post
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: absoluteImageUrl,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization', // Can be Person if specific authors
      name: author || 'Derrick Charity Home'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Derrick Charity Home',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png` // TODO: Update with actual logo URL
      }
    },
    description: description,
    keywords: keywords.join(', ')
  } : null;

  // Combine keywords with any additional category terms
  const keywordString = category 
    ? [...keywords, category.toLowerCase()].join(', ') 
    : keywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
