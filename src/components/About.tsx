import React from 'react';
import { CheckCircle as CircleCheck, Award, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">About All in One</h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 20 years of experience in the demolition and junk removal industry, All in One has established itself as a leading facilitator, providing efficient, safe, and environmentally responsible solutions to both commercial and residential clients.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team of expert facilitators is committed to managing every project with precision, ensuring smooth execution from planning to completion. We take pride in our strategic approach, commitment to safety, and dedication to exceeding client expectations.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              As one of the fastest growing facilitators in the industry, we continue to expand our services while maintaining the personalized approach that has earned us the trust of countless clients throughout the years.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <CircleCheck className="text-orange-600 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">Licensed & Insured</h4>
                  <p className="text-gray-600 text-sm">Fully compliant project facilitation</p>
                </div>
              </div>
              <div className="flex items-start">
                <CircleCheck className="text-orange-600 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">Eco-Friendly</h4>
                  <p className="text-gray-600 text-sm">Sustainable waste management</p>
                </div>
              </div>
              <div className="flex items-start">
                <CircleCheck className="text-orange-600 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">Expert Facilitators</h4>
                  <p className="text-gray-600 text-sm">Experienced project managers</p>
                </div>
              </div>
              <div className="flex items-start">
                <CircleCheck className="text-orange-600 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">Competitive Pricing</h4>
                  <p className="text-gray-600 text-sm">Transparent project costs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatCard 
                icon={<Award className="text-orange-600" size={32} />}
                value="20+"
                label="Years Experience"
              />
              <StatCard 
                icon={<Users className="text-orange-600" size={32} />}
                value="1,000+"
                label="Projects Facilitated"
              />
              <StatCard 
                icon={<TrendingUp className="text-orange-600" size={32} />}
                value="500+"
                label="Satisfied Clients"
              />
              <div className="bg-navy-900 rounded-xl p-6 md:p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-300">
                  To facilitate exceptional demolition and junk removal projects with a focus on efficiency, sustainability, and client satisfaction.
                </p>
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string;
  label: string;
}> = ({ icon, value, label }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <div className="mb-4">{icon}</div>
      <h3 className="text-3xl font-bold text-navy-900 mb-1">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default About;