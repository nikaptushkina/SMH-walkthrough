import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Play,
  Pause,
  Maximize,
  Minimize,
  RotateCcw,
  Image as ImageIcon,
  ArrowRight,
  User,
  Info,
  Volume2,
} from 'lucide-react';
import { DEMO_SECTIONS, VIEW_MODES, type DemoSection } from './data/demo-content';
import { cn } from './lib/utils';

export default function App() {
  const [activeSection, setActiveSection] = useState<DemoSection>(DEMO_SECTIONS[0]);
  const [viewMode, setViewMode] = useState<'watch' | 'browse'>('watch');
  const [slideIndexBySection, setSlideIndexBySection] = useState<Record<string, number>>(() =>
    Object.fromEntries(DEMO_SECTIONS.map((section) => [section.id, 0]))
  );
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeAudioUrlRef = useRef<string | null>(null);
  const demoCardRef = useRef<HTMLDivElement | null>(null);
  const mediaFrameRef = useRef<HTMLDivElement | null>(null);

  const activeSlideIndex = slideIndexBySection[activeSection.id] ?? 0;
  const activeSlide = activeSection.slides[activeSlideIndex];
  const isFullscreenBrowse = viewMode === 'browse' && isFullscreen;
  const resolveMediaUrl = (url: string) => {
    if (/^(https?:)?\/\//.test(url) || url.startsWith('data:') || url.startsWith('blob:')) {
      return url;
    }

    const baseUrl = import.meta.env.BASE_URL ?? '/';
    if (url.startsWith('/')) {
      return `${baseUrl}${url.slice(1)}`;
    }

    return `${baseUrl}${url}`;
  };
  const activeSlideMediaUrl = resolveMediaUrl(activeSlide.mediaUrl);
  const activeSectionWatchUrl = resolveMediaUrl(activeSection.watchVideoUrl);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    activeAudioUrlRef.current = null;
    setIsAudioPlaying(false);
  };

  const handleSectionChange = (section: DemoSection) => {
    stopAudio();
    setActiveSection(section);
  };

  const handleSlideChange = (nextIndex: number) => {
    stopAudio();
    setSlideIndexBySection((prev) => ({
      ...prev,
      [activeSection.id]: nextIndex,
    }));
  };

  const handleNextSection = () => {
    const nextSection = DEMO_SECTIONS.find((section) => section.id === activeSection.nextSectionId);
    if (nextSection) {
      handleSectionChange(nextSection);
    }
  };

  const browseProgressLabel = useMemo(
    () => `Slide ${activeSlideIndex + 1} of ${activeSection.slides.length}`,
    [activeSection.slides.length, activeSlideIndex]
  );
    const hasSlideAudio = Boolean(activeSlide?.audioUrl);
  const isEmbeddedWatchUrl = /^https?:\/\/(www\.)?(youtube\.com|player\.vimeo\.com)\//.test(
    activeSectionWatchUrl
  );

  const playSlideAudio = (restart = false) => {
    if (!activeSlide?.audioUrl) {
      return;
    }

    if (
      audioRef.current &&
      !restart &&
      activeAudioUrlRef.current === activeSlide.audioUrl &&
      audioRef.current.paused
    ) {
      void audioRef.current.play();
      setIsAudioPlaying(true);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(activeSlide.audioUrl);
    audioRef.current = audio;
    activeAudioUrlRef.current = activeSlide.audioUrl;
    setIsAudioPlaying(true);

    audio.onended = () => setIsAudioPlaying(false);
    audio.onpause = () => setIsAudioPlaying(false);

    void audio.play();
  };

  const restartSlideAudio = () => {
    playSlideAudio(true);
  };

  const pauseSlideAudio = () => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.pause();
    setIsAudioPlaying(false);
  };

  const toggleFullscreen = async () => {
    const fullscreenTarget = viewMode === 'browse' ? demoCardRef.current : mediaFrameRef.current;
    if (!fullscreenTarget) {
      return;
    }

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await fullscreenTarget.requestFullscreen();
  };

  const exitFullscreen = async () => {
    if (!document.fullscreenElement) {
      return;
    }

    await document.exitFullscreen();
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in">
          {DEMO_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section)}
              className={cn(
                'p-5 text-left rounded-xl border transition-all duration-300 group',
                activeSection.id === section.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]'
                  : 'bg-card text-card-foreground border-border hover:border-primary/50 hover:bg-secondary/50'
              )}
            >
              <div className="flex flex-col gap-2">
                <span
                  className={cn(
                    'text-xs font-bold uppercase tracking-wider',
                    activeSection.id === section.id ? 'text-primary-foreground/80' : 'text-primary'
                  )}
                >
                  Section
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

        <div
          ref={demoCardRef}
          key={activeSection.id}
          className={cn(
            'sap-card p-0 min-h-[600px] flex flex-col lg:flex-row bg-card animate-in',
            viewMode === 'browse' && 'lg:items-stretch'
          )}
        >
          <div
            ref={mediaFrameRef}
            className={cn(
              'flex-1 border-b lg:border-b-0 lg:border-r border-border bg-black/5 relative aspect-video lg:aspect-auto',
              isFullscreenBrowse && 'bg-black',
              isFullscreen && viewMode === 'browse' && 'border-none'
            )}
          >
            {!isFullscreenBrowse && (
              <button
                onClick={() => void toggleFullscreen()}
                className="absolute top-3 right-3 z-10 sap-btn-secondary py-1 text-xs inline-flex items-center gap-1.5"
              >
                {isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
                {isFullscreen ? 'Exit Full Screen' : 'Full Screen'}
              </button>
            )}
            {viewMode === 'browse' ? (
              <div
                className={cn(
                  'h-full flex flex-col items-center justify-center p-4',
                  isFullscreen && 'p-8 items-start justify-start'
                )}
              >
                <div
                  className={cn(
                    'relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl border border-border bg-card',
                    isFullscreen &&
                      'max-w-none h-auto max-h-[calc(100vh-4rem)] aspect-auto rounded-none shadow-none border-none'
                  )}
                >
                  {activeSlide.mediaType === 'video' ? (
                    <video
                      key={activeSlideMediaUrl}
                      src={activeSlideMediaUrl}
                      className="w-full h-full object-contain bg-black"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  ) : (
                    <img
                      src={activeSlideMediaUrl}
                      alt={`${activeSection.title} slide ${activeSlideIndex + 1}`}
                      className="w-full h-full object-contain transition-opacity duration-500"
                    />
                  )}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {activeSection.slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        className={cn(
                          'w-2.5 h-2.5 rounded-full transition-all',
                          activeSlideIndex === index ? 'bg-primary w-6' : 'bg-primary/30'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {!isFullscreenBrowse && (
                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={() =>
                        handleSlideChange(
                          activeSlideIndex > 0 ? activeSlideIndex - 1 : activeSection.slides.length - 1
                        )
                      }
                      className="sap-btn-secondary py-1 text-sm"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() =>
                        handleSlideChange(
                          activeSlideIndex < activeSection.slides.length - 1 ? activeSlideIndex + 1 : 0
                        )
                      }
                      className="sap-btn-primary py-1 text-sm"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            ) : (
              isEmbeddedWatchUrl ? (
                <iframe
                  className="w-full h-full"
                  src={activeSectionWatchUrl}
                  title="Watch demo video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  key={activeSectionWatchUrl}
                  src={activeSectionWatchUrl}
                  className="w-full h-full"
                  controls
                  playsInline
                />
              )
            )}
          </div>

          <div className="w-full lg:w-96 flex flex-col p-8 bg-card">
            <div className="flex-1 space-y-6">
              {!isFullscreenBrowse && (
                <>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{activeSection.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activeSection.description}</p>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                      <Info className="w-3.5 h-3.5" />
                      Select Viewing Option
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {VIEW_MODES.map((mode) => (
                        <button
                          key={mode.id}
                          onClick={() => {
                            stopAudio();
                            setViewMode(mode.id);
                          }}
                          className={cn(
                            'flex items-start gap-3 px-4 py-3 rounded-lg border transition-all text-sm',
                            viewMode === mode.id
                              ? 'bg-primary/5 border-primary text-primary'
                              : 'bg-transparent border-border text-muted-foreground hover:bg-secondary'
                          )}
                        >
                          {mode.id === 'watch' ? (
                            <Play className="w-4 h-4 mt-0.5" />
                          ) : (
                            <ImageIcon className="w-4 h-4 mt-0.5" />
                          )}
                          <span className="text-left">
                            <span className="block font-medium">{mode.label}</span>
                            <span className="block text-xs opacity-90">{mode.description}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {viewMode === 'browse' && (
                <div className="space-y-4 rounded-lg border border-border p-4 bg-secondary/20">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">{browseProgressLabel}</p>
                    <div className="flex items-center gap-2">
                      {hasSlideAudio ? (
                        <>
                          <button
                            onClick={restartSlideAudio}
                            className="sap-btn-secondary py-1.5 px-2.5 text-sm inline-flex items-center"
                            aria-label="Restart slide audio from beginning"
                            title="Restart audio from beginning"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </button>
                          <button
                            onClick={isAudioPlaying ? pauseSlideAudio : () => playSlideAudio()}
                            className="sap-btn-primary py-1.5 text-sm inline-flex items-center gap-2"
                          >
                            {isAudioPlaying ? <Pause className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            {isAudioPlaying ? '⏸ Pause Audio' : '🔊 Play Audio'}
                          </button>
                        </>
                      ) : (
                        <span className="text-xs text-muted-foreground">Audio for this slide is coming soon.</span>
                      )}
                    </div>
                  </div>

                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    {activeSlide.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>

                  <p className="text-xs text-muted-foreground">
                    {!hasSlideAudio
                      ? 'Audio is not uploaded for this slide yet.'
                      : isAudioPlaying
                        ? 'Audio is playing for this slide. You can navigate anytime.'
                        : 'Audio is optional. Click through silently or narrate live as needed.'}
                  </p>
                </div>
              )}
              {viewMode === 'browse' && isFullscreenBrowse && (
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() =>
                        handleSlideChange(
                          activeSlideIndex > 0 ? activeSlideIndex - 1 : activeSection.slides.length - 1
                        )
                      }
                      className="sap-btn-secondary py-1 text-sm"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() =>
                        handleSlideChange(
                          activeSlideIndex < activeSection.slides.length - 1 ? activeSlideIndex + 1 : 0
                        )
                      }
                      className="sap-btn-primary py-1 text-sm"
                    >
                      Next
                    </button>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        stopAudio();
                        setViewMode('watch');
                      }}
                      className="sap-btn-secondary py-1 text-sm"
                    >
                      Back to Video View
                    </button>
                    <button
                      onClick={() => void exitFullscreen()}
                      className="sap-btn-secondary py-1 text-sm inline-flex items-center gap-1.5"
                    >
                      <Minimize className="w-3.5 h-3.5" />
                      Exit Full Screen
                    </button>
                  </div>
                </div>
              )}
            </div>

            {!isFullscreenBrowse && (
              <div className="pt-8 mt-8 border-t border-border">
                <button
                  onClick={handleNextSection}
                  className="w-full group flex items-center justify-between p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Next Section</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {activeSection.nextSectionLabel}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 text-center text-xs text-muted-foreground">
        SAP SMH Interactive Experience Demo &bull; Designed for Enterprise Strategy
      </footer>
    </div>
  );
}