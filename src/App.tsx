import { useState, useMemo } from 'react';
import './App.css';
import { mockCandidates } from './mockData';
import type { Filters } from './types';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { CandidateGrid } from './components/CandidateGrid';
import { ProfileDrawer } from './components/ProfileDrawer';
import { CompareModal } from './components/CompareModal';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [filters, setFilters] = useState<Filters>({
    minScore: 0,
    noticePeriod: 'Any',
    minExperience: 0,
    techStack: [],
    searchQuery: '',
  });

  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null);
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const handleToggleCompare = (id: string) => {
    setSelectedForCompare(prev => {
      if (prev.includes(id)) return prev.filter(cId => cId !== id);
      if (prev.length >= 4) {
        alert("You can only compare up to 4 candidates at a time.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const comparedCandidates = useMemo(() => {
    return mockCandidates.filter(c => selectedForCompare.includes(c.id));
  }, [selectedForCompare]);

  // Filter logic
  const filteredCandidates = useMemo(() => {
    return mockCandidates.filter((candidate) => {
      // Search
      const searchMatch =
        candidate.headline.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        candidate.skills.some(s => s.toLowerCase().includes(filters.searchQuery.toLowerCase()));
      if (filters.searchQuery && !searchMatch) return false;

      // Pulse Score
      if (candidate.pulseScore < filters.minScore) return false;

      // Experience
      if (candidate.experienceYears < filters.minExperience) return false;

      // Notice Period
      if (filters.noticePeriod !== 'Any' && candidate.noticePeriod !== filters.noticePeriod) {
        return false;
      }

      // Tech Stack
      if (filters.techStack.length > 0) {
        const hasAllTags = filters.techStack.every((tag) =>
          candidate.skills.includes(tag)
        );
        if (!hasAllTags) return false;
      }

      return true;
    });
  }, [filters]);

  const selectedCandidate = useMemo(
    () => mockCandidates.find((c) => c.id === selectedCandidateId) || null,
    [selectedCandidateId]
  );

  return (
    <div className="app-container">
      <Topbar
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => setFilters(prev => ({ ...prev, searchQuery: q }))}
      />

      <main className="main-content">
        <Sidebar filters={filters} onFilterChange={setFilters} />

        <div className="content-area">
          <div className="content-header">
            <h1 className="text-xl font-semibold">Matched Candidates</h1>
            <span className="text-muted text-sm">{filteredCandidates.length} results</span>
          </div>

          <CandidateGrid
            candidates={filteredCandidates}
            onViewProfile={(id) => setSelectedCandidateId(id)}
            selectedForCompare={selectedForCompare}
            onToggleCompare={handleToggleCompare}
          />
        </div>
      </main>

      <AnimatePresence>
        {selectedCandidate && (
          <ProfileDrawer
            candidate={selectedCandidate}
            onClose={() => setSelectedCandidateId(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCompareModalOpen && (
          <CompareModal 
            candidates={comparedCandidates} 
            onClose={() => setIsCompareModalOpen(false)} 
            onRemove={(id) => handleToggleCompare(id)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedForCompare.length > 0 && (
          <motion.div
            className="compare-fab"
            initial={{ y: 100, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: 100, opacity: 0, x: '-50%' }}
          >
            <span className="font-medium text-sm">{selectedForCompare.length} selected for comparison</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-outline" style={{ padding: '0.375rem 0.75rem' }} onClick={() => setSelectedForCompare([])}>Clear</button>
              <button className="btn btn-primary" style={{ padding: '0.375rem 1rem' }} onClick={() => setIsCompareModalOpen(true)}>Compare Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
