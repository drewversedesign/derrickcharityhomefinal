
import { ArrowLeft, CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const Healthcare = () => {
  const healthcareServices = [
    "Regular medical check-ups and screenings",
    "Treatment for illnesses and injuries",
    "Vaccination and immunization programs",
    "Health education and disease prevention",
    "Mental health support and counseling"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <PageLayout>
      <SEO 
        title="Healthcare Program | Derrick Charity Home" 
        description="Regular medical check-ups, treatment, and preventive care are provided to ensure children remain healthy and thrive."
        keywords={['charity', 'healthcare', 'medical support', 'uganda', 'children health', 'preventive care']}
      />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full md:w-1/2">
              <div className="inline-block mb-3 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Our Programs
              </div>
              <h1 className="text-4xl font-bold mb-6">Healthcare Program</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Good health is essential for children to learn, play, and develop to their full potential. Our Healthcare 
                  Program ensures that all children at Derrick Charity Home receive the medical care they need to stay healthy 
                  and thrive.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Through partnerships with local healthcare providers and regular check-ups, we focus on both preventive 
                  care and treatment of illnesses and conditions. Our approach emphasizes both physical and mental health, 
                  creating a foundation for lifelong wellbeing.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Healthcare Services</h2>
                
                <motion.ul
                  className="space-y-3 mb-6" 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {healthcareServices.map((service, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <CircleCheck className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{service}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Health Challenges We Address</h2>
                <p className="text-gray-700 mb-4">
                  Children in our care often face various health challenges that we address through our program:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Malnutrition and vitamin deficiencies</li>
                  <li>Common childhood illnesses</li>
                  <li>Dental health issues</li>
                  <li>Vision and hearing problems</li>
                  <li>Trauma and psychological support needs</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <Button onClick={() => {
                  const contactSection = document.getElementById('contact-info');
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }
                }} className="bg-yellow-500 hover:bg-yellow-400 text-gray-900">
                  Support This Program
                  <CircleCheck className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0028.webp" 
                  alt="Children receiving medical care" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">Quarterly</h3>
                  <p className="text-gray-600 text-sm">Health check-ups for all children</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">75%</h3>
                  <p className="text-gray-600 text-sm">Reduction in common illnesses</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">100%</h3>
                  <p className="text-gray-600 text-sm">Vaccination coverage</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">5+</h3>
                  <p className="text-gray-600 text-sm">Healthcare partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Healthcare;
