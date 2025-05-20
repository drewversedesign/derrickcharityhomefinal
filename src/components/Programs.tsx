
import { useState, useRef } from 'react';
import { Heart, Book, CircleCheck, Users, ArrowRight, MessageSquare } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const programs = [
    {
      icon: <Heart className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Food & Nutrition",
      description: "Our nutrition program ensures children receive balanced, nutritious meals daily to support healthy growth and development.",
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0033.webp"
    }, 
    {
      icon: <Book className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Education Support",
      description: "We provide school fees, supplies, and tutoring to ensure every child has access to quality education and a brighter future.",
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0030.webp"
    }, 
    {
      icon: <CircleCheck className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Healthcare Access",
      description: "Regular medical check-ups, treatment, and preventive care are provided to ensure children remain healthy and thrive.",
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0028.webp"
    }, 
    {
      icon: <Users className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Community Engagement",
      description: "We work closely with local communities to develop sustainable solutions and create a supportive environment for children.",
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0029.webp"
    }
  ];
  
  const successStories = [
    {
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0031.webp",
      title: "Sarah's Education Journey",
      description: "Sarah joined us at age 8 and is now pursuing her dream of becoming a teacher through our education support program."
    }, 
    {
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0032.webp",
      title: "David's Healthcare Success",
      description: "Regular healthcare provided by our program helped David overcome chronic health issues and thrive in school."
    }, 
    {
      image: "https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0021.webp",
      title: "Community Food Initiative",
      description: "Our nutrition program has expanded to support 40+ children with daily nutritious meals, improving health outcomes."
    }
  ];

  return (
    <section id="programs" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8" ref={programsRef}> 
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-block mb-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Our Programs
          </div>
          <h2 className="text-3xl font-bold mb-4">How We Help</h2>
          <p className="text-gray-600 mt-4">
            At Derrick Charity Home, we offer comprehensive programs to support children's physical, educational, and emotional needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 h-[280px] relative shadow-lg" 
              onMouseEnter={() => setHoveredProgram(index)} 
              onMouseLeave={() => setHoveredProgram(null)}
            >
              <div className="absolute inset-0 w-full h-full">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                <div className={cn("absolute inset-0 bg-black/60 transition-opacity duration-300", hoveredProgram === index ? "opacity-50" : "opacity-70")}></div>
              </div>
              
              <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-4 inline-block p-3 bg-yellow-500/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform hover:scale-110">
                    <div className={`transform transition-transform duration-300 ${hoveredProgram === index ? 'rotate-12' : ''}`}>
                      {program.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{program.title}</h3>
                  <p className="text-white/90 text-sm">{program.description}</p>
                </div>
                <div className={`h-0.5 bg-yellow-400/70 mt-3 transition-all duration-500 ${hoveredProgram === index ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-8">
          <div className="text-center mb-8">
            <div className="inline-block mb-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Success Stories
            </div>
            <h3 className="text-2xl font-bold">Making a Difference</h3>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              See how our programs have positively impacted the lives of children and communities in Uganda.
              <span className="block text-sm mt-1 text-yellow-600">Scroll horizontally to see more stories →</span>
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden bg-white p-4">
            <Carousel className="w-full max-w-7xl mx-auto">
              <CarouselContent className="flex">
                {successStories.map((story, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 flex-shrink-0">
                    <Card className="border border-gray-100 shadow-md">
                      <CardContent className="p-0">
                        <div className="w-full h-full">
                          <img src={story.image} alt={story.title} className="w-full h-auto object-cover aspect-video" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-lg">{story.title}</h4>
                          <p className="text-sm text-gray-600 mt-2">{story.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-2">
                <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-yellow-100" />
                <CarouselNext className="relative static right-auto translate-y-0 hover:bg-yellow-100" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
          Support Our Work
          <Heart className="ml-2 w-4 h-4 group-hover:animate-pulse" />
        </Button>
        
        <Button onClick={() => {
          const aboutSection = document.getElementById('impact');
          if (aboutSection) {
            aboutSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }} className="inline-flex items-center px-4 sm:px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group w-full sm:w-auto">
          See Our Impact
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Programs;
