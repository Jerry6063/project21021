import React, { useState, useEffect } from 'react';
import { GARDEN_ENTRIES } from './constants';
import { GardenEntry, EntryCategory } from './types';
import { 
  Sun, 
  Moon, 
  Leaf, 
  ArrowLeft, 
  Sprout, 
  Wind, 
  Info 
} from 'lucide-react';

// --- Sub-components defined internally for file simplicity, 
// strictly adhering to the "Functional Components" and "Props" pattern ---

// 1. Navigation Component
interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  goHome: () => void;
  goAbout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, goHome, goAbout }) => (
  <nav className="sticky top-0 z-50 w-full bg-garden-50/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-garden-200 dark:border-slate-800 transition-colors duration-300">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div 
          onClick={goHome} 
          className="flex items-center cursor-pointer group"
        >
          <Leaf className="h-6 w-6 text-garden-600 dark:text-garden-400 mr-2 transition-transform group-hover:rotate-12" />
          <span className="font-serif text-xl font-bold text-slate-800 dark:text-slate-100 tracking-wide">
            Botany of Optics
          </span>
        </div>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={goHome}
            className="hidden sm:block text-sm font-medium text-slate-600 hover:text-garden-600 dark:text-slate-300 dark:hover:text-garden-400 transition-colors"
          >
            Garden Bed
          </button>
          <button 
            onClick={goAbout}
            className="hidden sm:block text-sm font-medium text-slate-600 hover:text-garden-600 dark:text-slate-300 dark:hover:text-garden-400 transition-colors"
          >
            Process Note
          </button>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-garden-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-garden-500"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

// 2. Entry Card Component (Index View)
interface EntryCardProps {
  entry: GardenEntry;
  onClick: (id: string) => void;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry, onClick }) => (
  <div 
    onClick={() => onClick(entry.id)}
    className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-garden-100 dark:border-slate-700 animate-fade-in"
  >
    <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
      <img 
        src={entry.image} 
        alt={entry.name}
        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white text-sm font-medium flex items-center">
          <Sprout className="w-4 h-4 mr-1" /> View Specimen
        </span>
      </div>
    </div>
    
    <div className="p-5">
      <p className="text-xs font-bold text-garden-600 dark:text-garden-400 uppercase tracking-wider mb-1">
        {entry.category}
      </p>
      <h3 className="text-xl font-serif font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-garden-700 dark:group-hover:text-garden-300 transition-colors">
        {entry.name}
      </h3>
      <p className="text-xs italic text-slate-500 dark:text-slate-400 mb-3 font-serif">
        "{entry.botanicalName}"
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
        {entry.description}
      </p>
    </div>
  </div>
);

// 3. Detail View Component (Full Page)
interface DetailViewProps {
  entry: GardenEntry;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ entry, onBack }) => (
  <div className="max-w-4xl mx-auto px-4 py-8 animate-bloom">
    <button 
      onClick={onBack}
      className="flex items-center text-sm font-medium text-slate-500 hover:text-garden-600 dark:text-slate-400 dark:hover:text-garden-400 mb-6 transition-colors group"
    >
      <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
      Back to Garden
    </button>

    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-garden-100 dark:border-slate-700">
      <div className="relative h-64 sm:h-96 w-full">
        <img 
          src={entry.image} 
          alt={entry.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          Est. {entry.year}
        </div>
      </div>
      
      <div className="p-6 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-700 pb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-2">
              {entry.name}
            </h1>
            <p className="text-lg italic text-garden-600 dark:text-garden-400 font-serif">
              {entry.botanicalName}
            </p>
          </div>
          <div className="mt-4 sm:mt-0 px-4 py-2 bg-garden-50 dark:bg-slate-700/50 rounded-lg border border-garden-100 dark:border-slate-600">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block text-center sm:text-right">
              Family
            </span>
            <span className="font-medium text-slate-800 dark:text-slate-200">
              {entry.category}
            </span>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3 className="text-lg font-bold flex items-center mb-3">
            <Info className="w-5 h-5 mr-2 text-garden-500" />
            Specimen Analysis
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-lg">
            {entry.details}
          </p>

          <div className="flex flex-wrap gap-2">
            {entry.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 4. About View Component
const AboutView: React.FC = () => (
  <div className="max-w-2xl mx-auto px-4 py-12 animate-fade-in">
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-garden-200 dark:border-slate-700">
      <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-6">
        Process Note
      </h1>
      
      <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-garden-700 dark:text-garden-400 mb-2">Garden Identity</h2>
          <p>
            I chose the metaphor "The Botany of Optics" to explore my collection of vintage cameras. 
            Often, technology is presented as cold and industrial. By framing these mechanical objects 
            with botanical names (e.g., <em>Precisionis Germanicus</em>) and organic colors (greens, earthy slates), 
            I highlight their "organic" growth in history and the distinct "life" they capture.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-garden-700 dark:text-garden-400 mb-2">Interactivity & Knowledge</h2>
          <p>
            The interactivity—specifically the filtering mechanism—supports knowledge cultivation by allowing 
            the user to identify patterns in camera evolution (e.g., grouping all SLRs vs. Rangefinders). 
            The Dark/Light mode toggle is a nod to the photographic process itself: capturing light (Daylight mode) 
            and developing in the dark (Darkroom mode).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-garden-700 dark:text-garden-400 mb-2">Motion</h2>
          <p>
            The bloom animation on page load mimics the opening of a shutter or a flower. 
            The hover states invite touch, making the digital archive feel tactile, like handling the physical objects.
          </p>
        </section>
      </div>
    </div>
  </div>
);

// --- Main App Logic ---

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  // Using URL hash for simple routing without a server
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash);
  const [filter, setFilter] = useState<EntryCategory | 'All'>('All');

  // Theme Handling
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Route Handling
  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Derived State for Current View
  const getActiveEntry = (): GardenEntry | undefined => {
    const id = currentHash.replace('#entry/', '');
    return GARDEN_ENTRIES.find(e => e.id === id);
  };

  const isAbout = currentHash === '#about';
  const isEntry = currentHash.startsWith('#entry/');
  const activeEntry = getActiveEntry();

  // Filter Logic
  const filteredEntries = filter === 'All' 
    ? GARDEN_ENTRIES 
    : GARDEN_ENTRIES.filter(e => e.category === filter);

  const categories = ['All', ...Object.values(EntryCategory)];

  // Render
  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        toggleTheme={toggleTheme}
        goHome={() => window.location.hash = ''}
        goAbout={() => window.location.hash = '#about'}
      />

      <main className="flex-grow">
        {isAbout ? (
          <AboutView />
        ) : isEntry && activeEntry ? (
          <DetailView 
            entry={activeEntry} 
            onBack={() => window.location.hash = ''} 
          />
        ) : (
          // Index View
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                The Lens Garden
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                A digital arboretum of vintage optical mechanics. 
                Wander through the beds to discover the evolution of photography.
              </p>
            </div>

            {/* Filter Interactivity */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in" style={{animationDelay: '0.1s'}}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as EntryCategory | 'All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? 'bg-garden-600 text-white shadow-md transform scale-105'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-garden-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat === 'All' ? 'All Species' : cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            {filteredEntries.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEntries.map((entry) => (
                  <EntryCard 
                    key={entry.id} 
                    entry={entry} 
                    onClick={(id) => window.location.hash = `#entry/${id}`} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Wind className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                <p className="text-slate-500">No specimens found in this category.</p>
                <button 
                   onClick={() => setFilter('All')}
                   className="mt-4 text-garden-600 font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm font-serif italic">
            "To photograph is to hold one's breath, when all faculties converge to capture fleeting reality."
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="w-2 h-2 rounded-full bg-garden-300"></div>
            <div className="w-2 h-2 rounded-full bg-garden-500"></div>
            <div className="w-2 h-2 rounded-full bg-garden-700"></div>
          </div>
          <p className="text-slate-400 text-xs mt-4">
            Project 02: Digital Garden • Built with React & Tailwind
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;