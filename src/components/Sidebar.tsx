import type { Filters, NoticePeriod } from '../types';
import './Sidebar.css';
import { SlidersHorizontal } from 'lucide-react';

interface SidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

const TECH_OPTIONS = ['React', 'Node.js', 'Python', 'TypeScript', 'System Design'];
const NOTICE_OPTIONS: (NoticePeriod | 'Any')[] = ['Any', 'Immediate', '<15 days', '<30 days', '<60 days', '90+ days'];
const EXP_OPTIONS = [
  { label: 'Any', value: 0 },
  { label: '1+ Years', value: 1 },
  { label: '2+ Years', value: 2 },
  { label: '3+ Years', value: 3 },
  { label: '4+ Years', value: 4 },
  { label: '5+ Years', value: 5 },
  { label: '7+ Years', value: 7 },
  { label: '10+ Years', value: 10 }
];

export function Sidebar({ filters, onFilterChange }: SidebarProps) {

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, minScore: parseInt(e.target.value) });
  };

  const handleTechToggle = (tech: string) => {
    const newStack = filters.techStack.includes(tech)
      ? filters.techStack.filter(t => t !== tech)
      : [...filters.techStack, tech];
    onFilterChange({ ...filters, techStack: newStack });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <SlidersHorizontal size={18} />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="filter-group">
        <label className="filter-label">
          <span>Min Pulse Score</span>
          <span className="text-accent font-medium">{filters.minScore}</span>
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={filters.minScore}
          onChange={handleScoreChange}
          className="range-slider"
        />
        <div className="flex justify-between text-xs text-muted w-full">
          <span>0</span>
          <span>100</span>
        </div>
      </div>

      <div className="filter-group">
        <label className="filter-label">Notice Period</label>
        <select
          className="filter-select"
          value={filters.noticePeriod}
          onChange={(e) => onFilterChange({ ...filters, noticePeriod: e.target.value as NoticePeriod | 'Any' })}
        >
          {NOTICE_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Min Experience</label>
        <select
          className="filter-select"
          value={filters.minExperience}
          onChange={(e) => onFilterChange({ ...filters, minExperience: parseInt(e.target.value) })}
        >
          {EXP_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Required Tech Stack</label>
        <div className="tech-stack-list">
          {TECH_OPTIONS.map(tech => (
            <label key={tech} className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.techStack.includes(tech)}
                onChange={() => handleTechToggle(tech)}
              />
              <span className="checkbox-text">{tech}</span>
            </label>
          ))}
        </div>
      </div>

      <button 
        className="btn btn-outline" 
        style={{ marginTop: 'auto' }}
        onClick={() => onFilterChange({
          minScore: 0,
          noticePeriod: 'Any',
          minExperience: 0,
          techStack: [],
          searchQuery: ''
        })}
      >
        Reset All Filters
      </button>
    </aside>
  );
}
