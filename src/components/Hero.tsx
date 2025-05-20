
import { ArrowRight, Heart, Book, CircleCheck, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative mt-16 md:mt-0 w-full max-w-[100vw]" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-[700px] md:h-[750px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          <img src="https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0002.webp" alt="Derrick Charity Home Children" className={`w-full h-full object-cover opacity-70 ${isMobile ? 'object-right' : 'object-center'}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-21 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white text-3xl md:text-5xl lg:text-6xl font-bold" variants={itemVariants}>Derrick Charity Home</motion.h1>
              <motion.p className="banner-subtitle text-gray-300 mt-4 md:mt-6 text-sm md:text-base max-w-2xl mx-auto" variants={itemVariants}>
                Caring for, educating, and empowering orphans and needy children in Uganda
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 justify-center" variants={itemVariants}>
                {/* Donation Button */}
                <button 
                  className="px-6 md:px-8 py-2 md:py-3 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:shadow-yellow-300/20 flex items-center justify-center group text-sm md:text-base"
                  onClick={e => {
                    e.preventDefault();
                    const donateSection = document.getElementById('contact-info');
                    if (donateSection) {
                      donateSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Donate Now
                  <Heart className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                </button>
                
                {/* Learn More Button */}
                <button 
                  className="px-6 md:px-8 py-2 md:py-3 bg-white text-gray-700 rounded-md hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm md:text-base"
                  onClick={scrollToContact}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 flex items-center justify-center rounded-lg text-yellow-600 mb-2 md:mb-3">
              <Heart className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Food & Nutrition</h3>
            <p className="text-gray-600 text-xs md:text-sm">Providing nutritious daily meals to support healthy development and growth.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 flex items-center justify-center rounded-lg text-yellow-600 mb-2 md:mb-3">
              <Book className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Education</h3>
            <p className="text-gray-600 text-xs md:text-sm">Supporting children with school fees, supplies, and tutoring for a brighter future.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 flex items-center justify-center rounded-lg text-yellow-600 mb-2 md:mb-3">
              <CircleCheck className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Healthcare</h3>
            <p className="text-gray-600 text-xs md:text-sm">Providing medical check-ups, treatment, and preventive care to keep children healthy.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
