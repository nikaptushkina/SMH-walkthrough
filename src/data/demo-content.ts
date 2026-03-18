export interface VideoMode {
  id: string;
  label: string;
}

export const VIDEO_MODES: VideoMode[] = [
  { id: 'voiceover', label: 'Play with Voiceover' },
  { id: 'no-voiceover', label: 'Play without Voiceover' },
  { id: 'screenshots', label: 'View Click-Through Screenshots' },
];

export interface DemoSection {
  id: string;
  title: string;
  audience: string;
  description: string;
  videoUrls: {
    voiceover: string;
    noVoiceover: string;
  };
  screenshots: string[];
  nextSectionId?: string;
  nextSectionLabel?: string;
}

export const DEMO_SECTIONS: DemoSection[] = [
  {
    id: 'joule',
    title: 'Product Costing with SAP Joule',
    audience: 'Executives & Financial Controllers',
    description: 'Experience how SAP Joule provides conversational insights into production costs, enabling rapid decision-making for executive leadership.',
    videoUrls: {
      voiceover: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      noVoiceover: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    },
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=1200',
    ],
    nextSectionId: 'smh',
    nextSectionLabel: 'Learn how this data is created',
  },
  {
    id: 'smh',
    title: 'Sapience Manufacturing Hub Overview',
    audience: 'Plant Managers & Operations Teams',
    description: 'A deep dive into SMH—the bridge between shop floor data and enterprise strategy, providing real-time visibility into manufacturing processes.',
    videoUrls: {
      voiceover: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      noVoiceover: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    },
    screenshots: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    ],
    nextSectionId: 'integration',
    nextSectionLabel: 'Explore the underlying integration',
  },
  {
    id: 'integration',
    title: 'SAP and SMH: Deep Integration',
    audience: 'Architects & IT Strategy Teams',
    description: 'Understand the technical architecture that enables seamless data flow between SMH and SAP S/4HANA, powering intelligent manufacturing.',
    videoUrls: {
      voiceover: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
      noVoiceover: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    },
    screenshots: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200',
    ],
    nextSectionId: 'joule',
    nextSectionLabel: 'Return to Executive Insights',
  },
];
