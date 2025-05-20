
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import Stories from '@/components/Stories';
import Gallery from '@/components/Gallery';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import FloatingContactButton from '@/components/FloatingContactButton';

// Updated images for the gallery with the provided links
const galleryImages = [
  { 
    src: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0002.webp", 
    alt: "Children from Derrick Charity Home gathered together" 
  },
  { 
    src: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0033.webp", 
    alt: "Children enjoying a nutritious meal at Derrick Charity Home" 
  },
  { 
    src: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0030.webp", 
    alt: "Education support program at Derrick Charity Home" 
  },
  { 
    src: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0024.webp", 
    alt: "Children participating in community activities" 
  },
  { 
    src: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0028.webp", 
    alt: "Healthcare initiatives for children at Derrick Charity Home" 
  },
  { 
    src: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0029.webp", 
    alt: "Community engagement and development activities" 
  },
  { 
    src: "https://github.com/drewversedesign/Derrick-Charity-Home/blob/main/elite_foundation_uganda-18-05-2025-0002.jpg?raw=true", 
    alt: "Group of children supported by Derrick Charity Home" 
  },
  { 
    src: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0031.webp", 
    alt: "Success stories from Derrick Charity Home beneficiaries" 
  },
];

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
        imageUrl="https://github.com/drewversedesign/Derrick-Charity-Home/blob/main/IMG-20250518-WA0045.jpg?raw=true"
        keywords={['charity', 'orphanage', 'uganda', 'children support', 'education', 'healthcare', 'nutrition', 'donation', 'community', 'derrick charity home']}
      />
      <Hero />
      <Programs />
      <Impact />
      <Stories />
      <Gallery images={galleryImages} title="Moments at Derrick Charity Home" />
      <FloatingContactButton />
    </PageLayout>
  );
};

export default Index;
