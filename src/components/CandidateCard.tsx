import type { Candidate } from '../types';
import { motion } from 'framer-motion';
import { CheckCircle, Code2, Video, Clock, Briefcase } from 'lucide-react';
import './CandidateCard.css';

const GithubIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

interface CandidateCardProps {
  candidate: Candidate;
  onViewProfile: () => void;
  isSelectedForCompare: boolean;
  onToggleCompare: () => void;
}

export function CandidateCard({ candidate, onViewProfile, isSelectedForCompare, onToggleCompare }: CandidateCardProps) {
  const isHighMatch = candidate.pulseScore >= 90;

  return (
    <motion.div
      className="candidate-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="card-header">
        <h3 className="headline text-lg font-semibold">{candidate.headline}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
          <motion.div
            className={`score-badge ${isHighMatch ? 'score-high' : candidate.pulseScore >= 70 ? 'score-med' : 'score-low'}`}
            animate={isHighMatch ? { scale: [1, 1.05, 1] } : {}}
            transition={isHighMatch ? { duration: 2, repeat: Infinity } : {}}
            title="Pulse Match Score"
          >
            {candidate.pulseScore}
          </motion.div>
          <span className="text-muted" style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pulse Score</span>
        </div>
      </div>

      <div className="meta-info">
        <div className="meta-item">
          <Briefcase size={14} className="text-muted" />
          <span className="text-sm text-secondary">{candidate.experienceYears} YOE</span>
        </div>
        <div className="meta-item">
          <Clock size={14} className="text-muted" />
          <span className="text-sm text-secondary">{candidate.noticePeriod}</span>
        </div>
      </div>

      <div className="skills-tags">
        {candidate.skills.slice(0, 4).map(skill => (
          <span key={skill} className="badge">
            {skill}
          </span>
        ))}
        {candidate.skills.length > 4 && (
          <span className="badge text-muted">+{candidate.skills.length - 4}</span>
        )}
      </div>

      <div className="verification-badges">
        {candidate.isGithubVerified && (
          <div className="v-badge" title="GitHub Verified">
            <GithubIcon size={14} />
          </div>
        )}
        {candidate.isLeetcodeVerified && (
          <div className="v-badge" title="LeetCode Verified">
            <Code2 size={14} />
          </div>
        )}
        {candidate.hasVideoPitch && (
          <div className="v-badge v-badge-video" title="Video Pitch Available">
            <Video size={14} />
          </div>
        )}
      </div>

      <div className="card-footer" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button className="btn btn-outline" style={{ flex: 1 }} onClick={onViewProfile}>
          View Profile
        </button>
        <button 
          className={`btn ${isSelectedForCompare ? 'btn-primary' : 'btn-outline'}`}
          style={{ width: '40px', padding: 0, display: 'flex', justifyContent: 'center' }}
          onClick={onToggleCompare}
          title={isSelectedForCompare ? "Remove from Compare" : "Add to Compare"}
        >
          {isSelectedForCompare ? <CheckCircle size={18} /> : <div style={{width: 18, height: 18, border: '2px solid currentColor', borderRadius: '3px'}} />}
        </button>
      </div>
    </motion.div>
  );
}
