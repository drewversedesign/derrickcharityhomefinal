
import { ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const Community = () => {
  const communityInitiatives = [
    "Family support and reunification efforts",
    "Local business partnerships and job creation",
    "Community education workshops",
    "Environmental sustainability projects",
    "Cultural preservation activities"
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
        title="Community Engagement Program | Derrick Charity Home" 
        description="We work closely with local communities to develop sustainable solutions and create a supportive environment for children."
        keywords={['charity', 'community engagement', 'sustainability', 'uganda', 'local partnerships', 'family support']}
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
              <h1 className="text-4xl font-bold mb-6">Community Engagement</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  At Derrick Charity Home, we understand that supporting children means supporting the communities they 
                  come from. Our Community Engagement Program works to strengthen local communities, creating a network 
                  of support for vulnerable children and their families.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Through partnerships with local leaders, businesses, and families, we're building sustainable solutions 
                  that address root causes of vulnerability while preserving cultural values and promoting self-sufficiency.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Community Initiatives</h2>
                
                <motion.ul
                  className="space-y-3 mb-6" 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {communityInitiatives.map((initiative, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <Users className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{initiative}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Our Community Approach</h2>
                <p className="text-gray-700 mb-4">
                  We believe in working with communities, not just for them. Our approach includes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Listening to community needs and priorities</li>
                  <li>Including local leaders in decision-making</li>
                  <li>Building capacity within communities</li>
                  <li>Creating sustainable economic opportunities</li>
                  <li>Respecting and preserving cultural traditions</li>
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
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0029.webp" 
                  alt="Community engagement activities" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">12+</h3>
                  <p className="text-gray-600 text-sm">Community partnerships</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">8</h3>
                  <p className="text-gray-600 text-sm">Local businesses supported</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">Monthly</h3>
                  <p className="text-gray-600 text-sm">Community workshops</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">25%</h3>
                  <p className="text-gray-600 text-sm">Family reunification rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Community;
