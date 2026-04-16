import type { Candidate } from '../types';
import { CandidateCard } from './CandidateCard';
import './CandidateGrid.css';

interface CandidateGridProps {
  candidates: Candidate[];
  onViewProfile: (id: string) => void;
  selectedForCompare: string[];
  onToggleCompare: (id: string) => void;
}

export function CandidateGrid({ candidates, onViewProfile, selectedForCompare, onToggleCompare }: CandidateGridProps) {
  if (candidates.length === 0) {
    return (
      <div className="empty-state">
        <p className="text-secondary">No candidates found matching your filters.</p>
        <p className="text-muted text-sm mt-2">Try relaxing some constraints.</p>
      </div>
    );
  }

  return (
    <div className="candidate-grid">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          onViewProfile={() => onViewProfile(candidate.id)}
          isSelectedForCompare={selectedForCompare.includes(candidate.id)}
          onToggleCompare={() => onToggleCompare(candidate.id)}
        />
      ))}
    </div>
  );
}
