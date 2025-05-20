
import { ArrowLeft, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const FoodNutrition = () => {
  const programGoals = [
    "Provide three nutritious meals daily to all children in our care",
    "Ensure balanced diets with proper vitamins and minerals",
    "Support children with special dietary needs",
    "Teach children about nutrition and healthy eating habits",
    "Partner with local farmers for sustainable food sources"
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
        title="Food & Nutrition Program | Derrick Charity Home" 
        description="Our nutrition program ensures children receive balanced, nutritious meals daily to support healthy growth and development."
        keywords={['charity', 'food program', 'nutrition', 'uganda', 'children support', 'healthy meals']}
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
              <h1 className="text-4xl font-bold mb-6">Food & Nutrition Program</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  At Derrick Charity Home, we believe that proper nutrition is the foundation for children's health, 
                  development, and ability to learn. Our Food & Nutrition Program ensures that all children in our 
                  care receive regular, nutritious meals that provide the energy and nutrients they need to thrive.
                </p>
                
                <p className="text-gray-700 mb-4">
                  We provide three balanced meals daily, with special attention to dietary diversity, 
                  ensuring children receive adequate proteins, carbohydrates, vitamins, and minerals. 
                  Our meals incorporate local, fresh ingredients, many grown in our own garden.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Program Goals</h2>
                
                <motion.ul
                  className="space-y-3 mb-6" 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {programGoals.map((goal, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <Heart className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{goal}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Impact of Proper Nutrition</h2>
                <p className="text-gray-700 mb-4">
                  Our nutrition program has shown significant impacts on children's health, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Reduced rates of malnutrition</li>
                  <li>Improved concentration and learning outcomes</li>
                  <li>Better physical development</li>
                  <li>Fewer illnesses and faster recovery</li>
                  <li>Increased energy levels for play and activities</li>
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
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0033.webp" 
                  alt="Children enjoying nutritious meals" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">30+</h3>
                  <p className="text-gray-600 text-sm">Children receiving daily meals</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">90%</h3>
                  <p className="text-gray-600 text-sm">Reduction in malnutrition cases</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">3 meals</h3>
                  <p className="text-gray-600 text-sm">Provided daily per child</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
                  <h3 className="font-semibold text-lg mb-2">Local</h3>
                  <p className="text-gray-600 text-sm">Food sources supporting community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FoodNutrition;
