import { useState, useMemo } from 'react';
import { Sparkles, Search, SlidersHorizontal, Info } from 'lucide-react';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import ProjectCard from '../components/cards/ProjectCard';
import LightboxModal from '../components/gallery/LightboxModal';

export default function Projects() {
  useDocumentTitle('Projects Portfolio | Hosur & Bengaluru', 'Explore our portfolio of luxury residential villas, contemporary commercial landmarks, and bespoke interior transformations in Hosur and Bengaluru.');

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const categories = ['All', 'Residential', 'Commercial', 'Interiors', 'Renovation'];

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        searchQuery.trim() === '' ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenLightbox = (project) => {
    const allImages = [project.coverImage, ...(project.additionalImages || [])];
    setLightboxImages(allImages);
    setLightboxIndex(0);
    setLightboxTitle(project.name);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#0A0713] text-white min-h-screen">
      
      {/* Portfolio Header */}
      <section className="relative py-24 sm:py-32 bg-[#120E22] border-b border-[#A855F7]/20 overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#17122C] border border-[#A855F7]/40 text-xs text-[#DDD6FE] font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>Architectural Showcase • Hosur & Bengaluru</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Landmark Residences & Commercial Spaces
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            A visual documentation of structural balance, material tactility, and contemporary aesthetics across our residential, commercial, and interior disciplines.
          </p>

          {/* Factual Disclaimer Banner */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 max-w-xl text-left">
            <Info className="w-4 h-4 text-[#A855F7] shrink-0" />
            <span>
              <strong>Demonstration Portfolio Notice:</strong> These projects represent architectural prototypes and demonstration concepts illustrating our capability until genuine client archives are attached.
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-[73px] z-30 bg-[#120E22]/95 backdrop-blur-md border-b border-[#A855F7]/20 py-4 shadow-lg shadow-purple-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg shadow-purple-900/40'
                      : 'bg-[#17122C] text-zinc-300 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by city or name..."
                className="w-full bg-[#0A0713] border border-white/10 focus:border-[#A855F7] rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-[#0A0713]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center space-y-4 bg-[#120E22] rounded-3xl border border-white/5 p-8 max-w-lg mx-auto">
              <SlidersHorizontal className="w-12 h-12 text-zinc-500 mx-auto" />
              <h3 className="font-serif text-xl font-bold text-white">No Matching Projects Found</h3>
              <p className="text-xs text-zinc-400">
                We couldn't find any projects matching your search query or selected category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:brightness-110 transition-colors shadow-md shadow-purple-900/40"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenLightbox={handleOpenLightbox}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
        title={lightboxTitle}
      />

    </div>
  );
}
