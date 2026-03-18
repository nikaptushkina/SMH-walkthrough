import React, { useState } from 'react';
import { Play, PlayCircle, Image as ImageIcon, ArrowRight, User, Info } from 'lucide-react';
import { DEMO_SECTIONS, VIDEO_MODES, type DemoSection } from './data/demo-content';
import { cn } from './lib/utils';

export default function App() {
  const [activeSection, setActiveSection] = useState<DemoSection>(DEMO_SECTIONS[0]);
  const [viewMode, setViewMode] = useState<string>('voiceover');
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  const handleSectionChange = (section: DemoSection) => {
    setActiveSection(section);
    setViewMode('voiceover');
    setScreenshotIndex(0);
  };

  const handleNextSection = () => {
    const nextSection = DEMO_SECTIONS.find(s => s.id === activeSection.nextSectionId);
    if (nextSection) {
      handleSectionChange(nextSection);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="h-16 bg-card border-b border-border flex items-center px-6 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">SAP</span>
          </div>
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            From Shop Floor to Enterprise Decisions: SMH, SAP, and Joule
          </h1>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-6 lg:p-10 space-y-8">
        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in">
          {DEMO_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section)}
              className={cn(
                "p-5 text-left rounded-xl border transition-all duration-300 group",
                activeSection.id === section.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]"
                  : "bg-card text-card-foreground border-border hover:border-primary/50 hover:bg-secondary/50"
              )}
            >
              <div className="flex flex-col gap-2">
                <span className={cn(
                  "text-xs font-bold uppercase tracking-wider",
                  activeSection.id === section.id ? "text-primary-foreground/80" : "text-primary"
                )}>
                  {section.id === 'joule' ? 'Step 1' : section.id === 'smh' ? 'Step 2' : 'Step 3'}
                </span>
                <h2 className="font-semibold text-base">{section.title}</h2>
                <div className="flex items-center gap-1.5 mt-1">
                  <User className="w-3.5 h-3.5" />
                  <span className="text-xs opacity-90">{section.audience}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div 
          key={activeSection.id}
          className="sap-card p-0 min-h-[600px] flex flex-col lg:flex-row bg-card animate-in"
        >
          {/* Main Display */}
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-border bg-black/5 relative aspect-video lg:aspect-auto">
            {viewMode === 'screenshots' ? (
              <div className="h-full flex flex-col items-center justify-center p-4">
                <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl border border-border bg-card">
                  <img
                    src={activeSection.screenshots[screenshotIndex]}
                    alt={`Screenshot ${screenshotIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {activeSection.screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setScreenshotIndex(i)}
                        className={cn(
                          "w-2.5 h-2.5 rounded-full transition-all",
                          screenshotIndex === i ? "bg-primary w-6" : "bg-primary/30"
                        )}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => setScreenshotIndex((prev) => (prev > 0 ? prev - 1 : activeSection.screenshots.length - 1))}
                    className="sap-btn-secondary py-1 text-sm"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setScreenshotIndex((prev) => (prev < activeSection.screenshots.length - 1 ? prev + 1 : 0))}
                    className="sap-btn-primary py-1 text-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={viewMode === 'voiceover' ? activeSection.videoUrls.voiceover : activeSection.videoUrls.noVoiceover}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Controls & Details */}
          <div className="w-full lg:w-96 flex flex-col p-8 bg-card">
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{activeSection.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeSection.description}
                </p>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                  <Info className="w-3.5 h-3.5" />
                  Select Viewing Option
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {VIDEO_MODES.map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setViewMode(mode.id)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg border transition-all text-sm font-medium",
                        viewMode === mode.id
                          ? "bg-primary/5 border-primary text-primary"
                          : "bg-transparent border-border text-muted-foreground hover:bg-secondary"
                      )}
                    >
                      {mode.id === 'voiceover' ? <Play className="w-4 h-4" /> : 
                       mode.id === 'no-voiceover' ? <PlayCircle className="w-4 h-4" /> : 
                       <ImageIcon className="w-4 h-4" />}
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Nav */}
            <div className="pt-8 mt-8 border-t border-border">
              <button
                onClick={handleNextSection}
                className="w-full group flex items-center justify-between p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
              >
                <div className="text-left">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Next Phase</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {activeSection.nextSectionLabel}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Info */}
      <footer className="py-8 px-6 text-center text-xs text-muted-foreground">
        SAP SMH Interactive Experience Demo &bull; Designed for Enterprise Strategy
      </footer>
    </div>
  );
}
