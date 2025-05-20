import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import Stories from '@/components/Stories';
import Gallery from '@/components/Gallery';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import FloatingContactButton from '@/components/FloatingContactButton';

// Sample images for the gallery
const sampleImagesForGallery = [
  { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Hands holding a heart made of soil with a sprouting plant, symbolizing care and growth." },
  { src: "https://images.unsplash.com/photo-1593113630405-ea54c8d7d898?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Children in a classroom in Uganda, attentively raising their hands to participate." },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "A group of smiling African children playing together joyfully outdoors." },
  { src: "https://images.unsplash.com/photo-1517088614125-7637e8109142?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "A child gratefully receiving a nutritious meal, highlighting food support programs." },
  { src: "https://images.unsplash.com/photo-1541696432-620602506002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Happy children engaged in an outdoor activity at Derrick Charity Home." },
  { src: "https://images.unsplash.com/photo-1606092195730-dbd0b0d00a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Children in Uganda diligently learning with books, emphasizing educational support." },
  { src: "https://images.unsplash.com/photo-1599008633840-052c7f756085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "A volunteer kindly helping a child with their schoolwork." },
  { src: "https://images.unsplash.com/photo-1504198266287-1659872e6ae7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Community members gathered for an event at Derrick Charity Home, showing community involvement." },
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
      <Gallery images={sampleImagesForGallery} title="Moments at Derrick Charity Home" />
      <FloatingContactButton />
    </PageLayout>
  );
};

export default Index;
