import type { Candidate } from '../types';
import { motion } from 'framer-motion';
import { X, Play, Star, CheckCircle, Plus } from 'lucide-react';
import './ProfileDrawer.css';

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

interface ProfileDrawerProps {
  candidate: Candidate;
  onClose: () => void;
}

export function ProfileDrawer({ candidate, onClose }: ProfileDrawerProps) {
  return (
    <>
      <motion.div
        className="drawer-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="profile-drawer"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div className="drawer-header">
          <div>
            <h2 className="text-xl font-semibold mb-1">Candidate Profile</h2>
            <div className="text-sm text-secondary">ID: {candidate.id} (Anonymized)</div>
          </div>
          <button className="btn-icon" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-content">
          {/* Match Reasons */}
          <div className="card match-reasons-card">
            <h4 className="card-title text-success flex items-center gap-2">
              <CheckCircle size={16} /> Why they align
            </h4>
            <ul className="text-sm text-secondary mt-3 flex-col gap-2">
              {candidate.matchReasons.map((reason, i) => (
                <li key={i} className="list-disc ml-4">{reason}</li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h3 className="section-title">Professional Headline</h3>
            <p className="text-primary text-lg">{candidate.headline}</p>
            <p className="text-muted text-sm mt-1">{candidate.currentRole} • {candidate.location}</p>
          </div>

          <div className="section">
            <h3 className="section-title">About</h3>
            <p className="text-secondary text-sm leading-relaxed">{candidate.about}</p>
          </div>

          <div className="section">
            <h3 className="section-title">Full Tech Stack</h3>
            <div className="skills-tags">
              {candidate.skills.map(skill => (
                <span key={skill} className="badge">{skill}</span>
              ))}
            </div>
          </div>

          {candidate.hasVideoPitch && (
            <div className="section">
              <h3 className="section-title">Video Pitch</h3>
              <div className="video-placeholder">
                <div className="play-button">
                  <Play size={24} fill="currentColor" />
                </div>
                <p className="text-sm font-medium mt-3">Watch 60s Intro</p>
              </div>
            </div>
          )}

          {candidate.mockProjects.length > 0 && (
            <div className="section">
              <h3 className="section-title">Verified Open Source (Mock)</h3>
              <div className="projects-list">
                {candidate.mockProjects.map((project, i) => (
                  <div key={i} className="project-card">
                    <div className="project-header">
                      <div className="flex items-center gap-2 font-medium">
                        <GithubIcon size={16} /> {project.name}
                      </div>
                      <div className="flex items-center gap-1 text-muted text-sm">
                        <Star size={14} /> {project.stars}
                      </div>
                    </div>
                    <p className="text-secondary text-sm my-2">{project.description}</p>
                    <div className="skills-tags mt-auto pt-2">
                      {project.techStack.map(t => (
                        <span key={t} className="badge text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="drawer-footer">
          <button className="btn btn-primary w-full" onClick={() => alert('Added to Pipeline!')}>
            <Plus size={18} /> Add to Pipeline
          </button>
        </div>
      </motion.div>
    </>
  );
}
