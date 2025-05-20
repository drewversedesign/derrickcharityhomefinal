
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const SuccessStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const featuredStories = [
    {
      title: "Sarah's Journey to Education",
      description: "Sarah joined Derrick Charity Home at age 8 after losing both parents. Through our education program, she excelled in school and is now pursuing her dream of becoming a teacher at a local college.",
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0031.webp",
      category: "Education"
    },
    {
      title: "David's Health Transformation",
      description: "When David arrived at our home, he was suffering from malnutrition and frequent illnesses. After receiving consistent healthcare and nutrition, he's now thriving as a healthy, active child with dreams of becoming a doctor.",
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0032.webp",
      category: "Healthcare"
    },
    {
      title: "The Nutrition Initiative Success",
      description: "Our nutrition program has expanded to support over 40 children with daily nutritious meals, significantly improving health outcomes and academic performance across all age groups.",
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0021.webp",
      category: "Food & Nutrition"
    }
  ];
  
  const additionalStories = [
    {
      title: "Village Garden Project",
      description: "Working with the local community, we established a sustainable garden that now provides fresh vegetables for our meals and creates income opportunities for families.",
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0007.jpg",
      category: "Community"
    },
    {
      title: "Computer Skills Program",
      description: "With donated computers, we launched a digital literacy program that has equipped 25 children with valuable technology skills, opening new opportunities for their future.",
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0008.webp",
      category: "Education"
    },
    {
      title: "Family Reunification Success",
      description: "After providing emergency support and family counseling, we were able to reunite five children with their extended families who now have the resources to care for them.",
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0024.webp",
      category: "Community"
    }
  ];
  
  return (
    <PageLayout>
      <SEO 
        title="Success Stories | Derrick Charity Home" 
        description="Read inspiring stories of how our programs have positively impacted the lives of children and communities in Uganda."
        keywords={['charity success stories', 'orphanage impact', 'uganda', 'children testimonials', 'community transformation']}
      />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Stories of Impact & Hope</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every child at Derrick Charity Home has a unique story. Here we share some of the inspiring 
              journeys that show the real impact of your support.
            </p>
          </div>
          
          {/* Featured Stories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredStories.map((story, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-yellow-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{story.description}</p>
                  <div className="flex items-center mt-4">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-2 text-sm text-gray-500">Featured Story</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">More Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalStories.map((story, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-gray-800/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        {story.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2">{story.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{story.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-yellow-50 rounded-xl p-8 md:p-12 border border-yellow-100 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:pr-6">
                <h3 className="text-2xl font-bold mb-3">Be Part of More Success Stories</h3>
                <p className="text-gray-700">
                  Your support makes these transformational stories possible. Join us in creating more 
                  opportunities for vulnerable children in Uganda.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => {
                  const contactSection = document.getElementById('contact-info');
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }
                }} className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8">
                  Donate Now
                </Button>
                <Link to="/donate">
                  <Button variant="outline" className="border-gray-300">
                    Learn How to Help
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SuccessStories;
