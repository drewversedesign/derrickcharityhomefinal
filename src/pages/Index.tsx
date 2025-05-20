
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import Stories from '@/components/Stories';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import FloatingContactButton from '@/components/FloatingContactButton';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Derrick Charity Home - Supporting Orphans in Uganda" 
        description="Derrick Charity Home provides care, education, and empowerment for orphans and needy children in Uganda, offering food, healthcare, and a loving environment."
        imageUrl="https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0002.webp"
        keywords={['charity', 'orphanage', 'uganda', 'children support', 'education', 'healthcare', 'nutrition', 'donation', 'community']}
      />
      <Hero />
      <Programs />
      <Impact />
      <Stories />
      <BlogPreview />
      <FloatingContactButton />
    </PageLayout>
  );
};

export default Index;
