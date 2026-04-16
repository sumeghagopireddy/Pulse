import { Search, Sparkles } from 'lucide-react';
import './Topbar.css';

interface TopbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function Topbar({ searchQuery, onSearchChange }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="logo text-xl font-semibold">Pulse</div>
      </div>
      
      <div className="topbar-center">
        <div className="search-container">
          <Search className="search-icon text-muted" size={18} />
          <input 
            type="text" 
            placeholder="Search candidates, skills..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      
      <div className="topbar-right">
        <div className="ai-banner">
          <Sparkles size={16} className="text-accent" />
          <span className="text-sm font-medium">AI Parsed JD: Senior Frontend Engineer | React, TypeScript, 4+ years</span>
        </div>
      </div>
    </header>
  );
}
