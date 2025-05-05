import React from 'react';
import { Building2, Home, Trash2, ArrowRight, HardHat, Truck, FileText, Clock } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600">
            From small residential cleanups to major commercial demolitions, we handle projects of all sizes with the same level of professionalism and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCard 
            icon={<Building2 size={40} />}
            title="Commercial Demolition"
            description="Complete and partial commercial building demolition with eco-friendly debris disposal and recycling options."
            features={[
              "Office buildings & retail spaces",
              "Warehouses & industrial facilities",
              "Structural modifications & interior demolition",
              "Safe hazardous material removal"
            ]}
          />

          <ServiceCard 
            icon={<Home size={40} />}
            title="Residential Demolition"
            description="Expert home demolition services with careful planning and execution to minimize neighborhood disruption."
            features={[
              "Whole house demolition",
              "Kitchen & bathroom remodels",
              "Garage & shed removal",
              "Selective interior demolition"
            ]}
          />

          <ServiceCard 
            icon={<Trash2 size={40} />}
            title="Commercial Junk Removal"
            description="Fast and efficient cleanout services for businesses, offices, and commercial properties."
            features={[
              "Office cleanouts & furniture removal",
              "Construction debris disposal",
              "Warehouse & inventory liquidation",
              "Recyclable material sorting"
            ]}
          />

          <ServiceCard 
            icon={<Truck size={40} />}
            title="Residential Junk Removal"
            description="Comprehensive home cleanout services with responsible disposal and recycling options."
            features={[
              "Whole home cleanouts",
              "Appliance & furniture removal",
              "Yard debris & landscaping waste",
              "Basement & attic cleanups"
            ]}
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-navy-900 rounded-xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose All in One?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<HardHat className="text-orange-500" size={32} />}
                title="20+ Years Experience"
                description="Decades of industry knowledge and expertise at your service"
              />
              <FeatureCard 
                icon={<FileText className="text-orange-500" size={32} />}
                title="Free Estimates"
                description="Detailed, no-obligation quotes for all your project needs"
              />
              <FeatureCard 
                icon={<Clock className="text-orange-500" size={32} />}
                title="Fast Turnaround"
                description="Efficient service with minimal disruption to your schedule"
              />
              <FeatureCard 
                icon={<Truck className="text-orange-500" size={32} />}
                title="Full Service"
                description="From demolition to cleanup, we handle everything"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="p-8">
        <div className="text-orange-600 mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-navy-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-600 mr-2 mt-1">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <a 
          href="#contact" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group"
        >
          Get a Free Quote 
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default Services;