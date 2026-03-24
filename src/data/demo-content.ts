export interface ViewMode {
  id: 'watch' | 'browse';
  label: string;
  description: string;
}

export const VIEW_MODES: ViewMode[] = [
  {
    id: 'watch',
    label: 'Watch Demo',
    description: 'Watch the full narrated experience',
  },
  {
    id: 'browse',
    label: 'Browse Slides',
    description: 'Click through slides with optional audio narration',
  },
];

export interface Slide {
  imageUrl: string;
  bullets: string[];
  audioUrl: string;
}

export interface DemoSection {
  id: string;
  title: string;
  audience: string;
  description: string;
  watchVideoUrl: string;
  slides: Slide[];
  nextSectionId?: string;
  nextSectionLabel?: string;
}

export const DEMO_SECTIONS: DemoSection[] = [
  {
    id: 'overview',
    title: 'SMH Overview',
    audience: 'Plant Managers & Operations Teams',
    description:
      'A deep dive into SMH—the bridge between shop floor data and enterprise strategy, with real-time visibility into manufacturing operations.',
    watchVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    slides: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
        bullets: [
          'SMH unifies machine, quality, and production data into one operational view.',
          'Teams can monitor throughput and downtime from a single dashboard.',
          'Insights are available in near real time for faster plant-level decisions.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1200',
        bullets: [
          'Line supervisors can compare current shift performance against targets.',
          'Exception highlights surface bottlenecks before they escalate.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
        bullets: [
          'Operational KPIs are captured in a standard model for enterprise reporting.',
          'Teams can align production execution with strategic business priorities.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      },
    ],
    nextSectionId: 'costing',
    nextSectionLabel: 'Continue to Product Costing',
  },
  {
    id: 'costing',
    title: 'Product Costing',
    audience: 'Executives & Financial Controllers',
    description:
      'Explore how cost drivers from manufacturing operations can be evaluated quickly to support confident pricing and margin decisions.',
    watchVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    slides: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        bullets: [
          'Cost rollups combine labor, material, and overhead by product family.',
          'Users can analyze cost variance between planned and actual production.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        bullets: [
          'Scenario comparisons reveal margin impact before changing production mix.',
          'Finance and operations teams share the same costing assumptions.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=1200',
        bullets: [
          'Leaders can prioritize orders based on profitability and capacity constraints.',
          'Cost transparency supports strategic negotiation with suppliers and customers.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
      },
    ],
    nextSectionId: 'deep-dive',
    nextSectionLabel: 'Explore SAP + SMH Deep Dive',
  },
  {
    id: 'deep-dive',
    title: 'SAP + SMH Deep Dive',
    audience: 'Architects & IT Strategy Teams',
    description:
      'Understand the integration architecture between SAP and SMH that powers end-to-end visibility from shop floor execution to enterprise planning.',
    watchVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    slides: [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
        bullets: [
          'Event pipelines move production data into SAP-aligned business objects.',
          'Integration safeguards data quality, traceability, and consistency.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
        bullets: [
          'Reference architecture supports modular deployment across sites.',
          'Security controls are enforced from edge systems through enterprise APIs.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200',
        bullets: [
          'Integration telemetry helps teams detect latency and synchronization risks.',
          'Architecture choices can be tuned to business-critical manufacturing flows.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      },
    ],
    nextSectionId: 'overview',
    nextSectionLabel: 'Return to SMH Overview',
  },
];
