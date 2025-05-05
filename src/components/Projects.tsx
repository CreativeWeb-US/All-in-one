import React, { useState } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'commercial' | 'residential';
  type: 'demolition' | 'junk-removal';
  imageUrl: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Office Building Demolition',
    category: 'commercial',
    type: 'demolition',
    imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete demolition of a 3-story office building with careful waste management and recycling.'
  },
  {
    id: 2,
    title: 'Residential Home Teardown',
    category: 'residential',
    type: 'demolition',
    imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Full home demolition to make way for new construction with minimal neighborhood disruption.'
  },
  {
    id: 3,
    title: 'Warehouse Cleanout',
    category: 'commercial',
    type: 'junk-removal',
    imageUrl: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Large-scale warehouse cleanout with sorting and proper disposal of materials.'
  },
  {
    id: 4,
    title: 'Residential Garage Demolition',
    category: 'residential',
    type: 'demolition',
    imageUrl: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Detached garage demolition with foundation removal and site preparation for new construction.'
  },
  {
    id: 5,
    title: 'Retail Store Renovation',
    category: 'commercial',
    type: 'demolition',
    imageUrl: 'https://images.pexels.com/photos/2068475/pexels-photo-2068475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Interior demolition for a retail space renovation with careful preservation of the building structure.'
  },
  {
    id: 6,
    title: 'Estate Cleanout',
    category: 'residential',
    type: 'junk-removal',
    imageUrl: 'https://images.pexels.com/photos/4792480/pexels-photo-4792480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete estate cleanout with sorting, donation of usable items, and proper disposal of waste.'
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'commercial') return project.category === 'commercial';
    if (filter === 'residential') return project.category === 'residential';
    if (filter === 'demolition') return project.type === 'demolition';
    if (filter === 'junk-removal') return project.type === 'junk-removal';
    return true;
  });

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Recent Projects</h2>
          <p className="text-lg text-gray-600">
            Take a look at some of our recent demolition and junk removal projects for both commercial and residential clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <FilterButton active={filter === 'all'} onClick={() => { setFilter('all'); setCurrentPage(1); }}>
            All Projects
          </FilterButton>
          <FilterButton active={filter === 'commercial'} onClick={() => { setFilter('commercial'); setCurrentPage(1); }}>
            Commercial
          </FilterButton>
          <FilterButton active={filter === 'residential'} onClick={() => { setFilter('residential'); setCurrentPage(1); }}>
            Residential
          </FilterButton>
          <FilterButton active={filter === 'demolition'} onClick={() => { setFilter('demolition'); setCurrentPage(1); }}>
            Demolition
          </FilterButton>
          <FilterButton active={filter === 'junk-removal'} onClick={() => { setFilter('junk-removal'); setCurrentPage(1); }}>
            Junk Removal
          </FilterButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {pageCount > 1 && (
          <div className="flex justify-center mt-10">
            <button 
              onClick={() => paginate(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="text-navy-900 disabled:text-gray-400 mr-4"
              aria-label="Previous page"
            >
              <ArrowLeftCircle size={24} />
            </button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentPage === index + 1
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-navy-900 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => paginate(Math.min(currentPage + 1, pageCount))}
              disabled={currentPage === pageCount}
              className="text-navy-900 disabled:text-gray-400 ml-4"
              aria-label="Next page"
            >
              <ArrowRightCircle size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const FilterButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? 'bg-orange-600 text-white'
          : 'bg-gray-200 text-navy-900 hover:bg-gray-300'
      }`}
    >
      {children}
    </button>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="h-64 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          <span className="text-xs font-medium bg-navy-100 text-navy-800 px-3 py-1 rounded-full">
            {project.category === 'commercial' ? 'Commercial' : 'Residential'}
          </span>
          <span className="text-xs font-medium bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
            {project.type === 'demolition' ? 'Demolition' : 'Junk Removal'}
          </span>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default Projects;