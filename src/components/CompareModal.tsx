import type { Candidate } from '../types';
import { motion } from 'framer-motion';
import { X, CheckCircle, Trophy } from 'lucide-react';
import './CompareModal.css';

interface CompareModalProps {
  candidates: Candidate[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export function CompareModal({ candidates, onClose, onRemove }: CompareModalProps) {
  if (candidates.length === 0) {
    onClose();
    return null;
  }

  let bestCandidateId: string | null = null;
  let bestMatchReason: string | null = null;
  if (candidates.length > 1) {
    const sorted = [...candidates].sort((a, b) => {
      if (b.pulseScore !== a.pulseScore) return b.pulseScore - a.pulseScore;
      if (b.experienceYears !== a.experienceYears) return b.experienceYears - a.experienceYears;
      return 0;
    });
    
    bestCandidateId = sorted[0].id;
    const winner = sorted[0];
    const secondPlace = sorted[1];
    
    if (winner.pulseScore > secondPlace.pulseScore) {
      bestMatchReason = "Highest Pulse Match Score";
    } else if (winner.experienceYears > secondPlace.experienceYears) {
      bestMatchReason = "Tie-breaker: More Experience";
    } else {
      bestMatchReason = "Selected as top tie-breaker";
    }
  }

  return (
    <>
      <motion.div
        className="drawer-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ zIndex: 100 }}
      />
      <motion.div
        className="compare-modal"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
      >
        <div className="compare-header">
          <div>
            <h2 className="text-xl font-semibold">Compare Candidates</h2>
            <p className="text-sm text-secondary">Comparing {candidates.length} profiles</p>
          </div>
          <button className="btn-icon" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="compare-content">
          <div className="compare-grid" style={{ gridTemplateColumns: `repeat(${candidates.length}, 1fr)` }}>
            {candidates.map(candidate => (
              <div key={candidate.id} className="compare-column">
                <div className="compare-col-header">
                  <button className="remove-btn" onClick={() => onRemove(candidate.id)} title="Remove from comparison">
                    <X size={14} />
                  </button>
                  {candidate.id === bestCandidateId && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '8px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(16,185,129,0.15)', color: 'var(--score-high)', fontSize: '10px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid rgba(16,185,129,0.3)', marginBottom: '4px' }}>
                        <Trophy size={12} /> Best Match
                      </div>
                      <span style={{ fontSize: '10px', color: 'var(--text-muted)', opacity: 0.8 }}>{bestMatchReason}</span>
                    </div>
                  )}
                  <div className="text-lg font-semibold mb-1">{candidate.headline}</div>
                  <div className="text-sm text-muted">{candidate.currentRole}</div>
                  <div className="compare-score-wrapper mt-4">
                    <div className={`score-badge ${candidate.pulseScore >= 90 ? 'score-high' : candidate.pulseScore >= 70 ? 'score-med' : 'score-low'}`} style={{ width: '56px', height: '56px', fontSize: '1.25rem' }}>
                      {candidate.pulseScore}
                    </div>
                    <span className="text-[10px] text-muted font-bold mt-2 inline-block uppercase tracking-wider">Pulse Score</span>
                  </div>
                </div>

                <div className="compare-section">
                  <h4 className="compare-section-title">Overview</h4>
                  <div className="compare-item">
                    <span className="compare-label">Experience</span>
                    <span className="compare-value">{candidate.experienceYears} Years</span>
                  </div>
                  <div className="compare-item">
                    <span className="compare-label">Notice Period</span>
                    <span className="compare-value">{candidate.noticePeriod}</span>
                  </div>
                  <div className="compare-item">
                    <span className="compare-label">Location</span>
                    <span className="compare-value">{candidate.location}</span>
                  </div>
                </div>

                <div className="compare-section">
                  <h4 className="compare-section-title">Tech Stack</h4>
                  <div className="skills-tags">
                    {candidate.skills.map(skill => (
                      <span key={skill} className="badge bg-main">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="compare-section">
                  <h4 className="compare-section-title">Verifications</h4>
                  <div className="verification-list">
                    <div className={`v-item ${candidate.isGithubVerified ? 'verified' : 'unverified'}`}>
                       Github
                      {candidate.isGithubVerified && <CheckCircle size={14} className="text-success ml-auto" />}
                    </div>
                    <div className={`v-item ${candidate.isLeetcodeVerified ? 'verified' : 'unverified'}`}>
                       LeetCode
                      {candidate.isLeetcodeVerified && <CheckCircle size={14} className="text-success ml-auto" />}
                    </div>
                    <div className={`v-item ${candidate.hasVideoPitch ? 'verified' : 'unverified'}`}>
                       Video Pitch
                      {candidate.hasVideoPitch && <CheckCircle size={14} className="text-success ml-auto" />}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
