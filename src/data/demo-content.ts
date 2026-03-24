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
  mediaUrl: string;
  mediaType: 'image' | 'video';
  bullets: string[];
  audioUrl?: string;
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
    title: 'Sapience Manufacturing Hub Overview',
    audience: 'Connecting the Shop Floor to the Top Floor',
    description:
      'Explore the manufacturing data challenge and how Sapience Manufacturing Hub brings operational data from the shop floor into SAP as a consistent, standardized foundation. This section explains why traditional ERP falls short and how SMH enables trusted, finance‑ready manufacturing data across complex semiconductor environments.',
    watchVideoUrl: 'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20Video.mp4',
    slides: [
      {
        mediaUrl: '/Section 1 - Slide 1.png',
        mediaType: 'image',
        bullets: [
          'Slide content uploaded.',
          'Narration notes pending.',
        ],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%202.mp4',
        mediaType: 'video',
        bullets: [
          'Video slide plays automatically when this slide is active.',
          'Narration notes pending.',
        ],
      },
      {
        mediaUrl: '/Section 1 - Slide 3.png',
        mediaType: 'image',
        bullets: [
          'Slide content uploaded.',
          'Narration notes pending.',
        ],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%204.mp4',
        mediaType: 'video',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 1 - Slide 5.png',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 1 - Slide 6.png',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 1 - Slide 7.png',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%208.mp4',
        mediaType: 'video',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 1 - Slide 9.png',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2010.mp4',
        mediaType: 'video',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2011.mp4',
        mediaType: 'video',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2012.mp4',
        mediaType: 'video',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2013.mp4',
        mediaType: 'video',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 1 - Slide 14.png',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
    ],
    nextSectionId: 'costing',
    nextSectionLabel: 'Continue to Product Costing',
  },
  {
    id: 'costing',
    title: 'Product Costing with SAP Joule',
    audience: 'Turning manufacturing data into cost insight',
    description:
      'See how the manufacturing data foundation created by SMH is applied to Product Costing. This section introduces SAP Joule as a natural‑language interface, working with PDF Operational Product Costing analytics, to help users understand cost drivers, variances, and business impact more quickly.',
    watchVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    slides: [
      {
        mediaUrl:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        mediaType: 'image',
        bullets: [
          'Cost rollups combine labor, material, and overhead by product family.',
          'Users can analyze cost variance between planned and actual production.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      },
      {
        mediaUrl:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        mediaType: 'image',
        bullets: [
          'Scenario comparisons reveal margin impact before changing production mix.',
          'Finance and operations teams share the same costing assumptions.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      },
      {
        mediaUrl:
          'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=1200',
        mediaType: 'image',
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
    title: 'Deep Dive: How SAP, SMH, and Operational Product Costing Work Together',
    audience: 'An in‑depth look at data, analytics, and AI in action',
    description:
      'Dive deeper into the end‑to‑end flow between SAP, Sapience Manufacturing Hub, and PDF Operational Product Costing. This section walks through the detailed demo experience, showing how manufacturing events are aggregated, analyzed, and transformed into actionable insights using SAP Joule.',
    watchVideoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    slides: [
      {
        mediaUrl:
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
        mediaType: 'image',
        bullets: [
          'Event pipelines move production data into SAP-aligned business objects.',
          'Integration safeguards data quality, traceability, and consistency.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
      },
      {
        mediaUrl:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
        mediaType: 'image',
        bullets: [
          'Reference architecture supports modular deployment across sites.',
          'Security controls are enforced from edge systems through enterprise APIs.',
        ],
        audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      },
      {
        mediaUrl:
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200',
        mediaType: 'image',
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