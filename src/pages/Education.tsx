
import { ArrowLeft, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const Education = () => {
  const educationSupport = [
    "School fees and tuition support",
    "Uniforms, books, and school supplies",
    "After-school tutoring and homework help",
    "Computer and technology education",
    "Vocational training for older children"
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
        title="Education Program | Derrick Charity Home" 
        description="We provide school fees, supplies, and tutoring to ensure every child has access to quality education and a brighter future."
        keywords={['charity', 'education', 'school support', 'uganda', 'children education', 'tutoring', 'academic support']}
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
              <h1 className="text-4xl font-bold mb-6">Education Program</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Education is the key to breaking the cycle of poverty. Our Education Program ensures that all children 
                  at Derrick Charity Home have access to quality education, from primary school through secondary education 
                  and beyond.
                </p>
                
                <p className="text-gray-700 mb-4">
                  We believe that every child deserves the opportunity to learn, grow, and develop the skills they need 
                  to build a better future for themselves and their communities. Through our comprehensive education 
                  support, we're empowering the next generation of Ugandan leaders.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">What We Provide</h2>
                
                <motion.ul
                  className="space-y-3 mb-6" 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {educationSupport.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <Book className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach to Education</h2>
                <p className="text-gray-700 mb-4">
                  We take a holistic approach to education, focusing not just on academic performance but on the 
                  whole child. Our program includes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Regular assessment of learning needs</li>
                  <li>Individualized academic support plans</li>
                  <li>Collaboration with local schools and teachers</li>
                  <li>Celebration of educational achievements</li>
                  <li>Creative and extracurricular activities</li>
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
                  <Book className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0030.webp" 
                  alt="Children in school uniforms learning" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">100%</h3>
                  <p className="text-gray-600 text-sm">School enrollment rate</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">85%</h3>
                  <p className="text-gray-600 text-sm">Academic improvement after support</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">15+</h3>
                  <p className="text-gray-600 text-sm">Partner schools in the region</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">3 hrs</h3>
                  <p className="text-gray-600 text-sm">Daily tutoring support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Education;
