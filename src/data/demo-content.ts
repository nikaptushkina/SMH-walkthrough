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
      'Understand the manufacturing data challenge and how Sapience Manufacturing Hub creates a consistent, finance‑ready data foundation for SAP.',
    watchVideoUrl: 'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20Video.mp4',
    slides: [
      {
        mediaUrl: '/Section 1 - Slide 1.png',
        audioUrl: '/Section 1 - Audio 1.mp3',
        mediaType: 'image',
        bullets: ['Connecting shop‑floor operations to enterprise decision‑making', 'PDF Solutions integrated with SAP'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%202.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 2.mp3',
        bullets: ['Yield outcomes affect financial results', 'Material choices drive cost', 'Cycle time influences profitability'],
      },
      {
        mediaUrl: '/Section 1 - Slide 3.png',
        audioUrl: '/Section 1 - Audio 3.mp3',
        mediaType: 'image',
        bullets: ['Visibility between operations and finance is critical', 'Timing matters for business decisions'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%204.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 4.mp3',
        bullets: ['Semiconductor manufacturing is highly complex', 'Thousands of steps across many tools', 'ERP systems see only summarized representations'],
      },
      {
        mediaUrl: '/Section 1 - Slide 5.png',
        audioUrl: '/Section 1 - Audio 5.mp3',
        mediaType: 'image',
        bullets: ['Manufacturing data exists in many systems', 'Equipment and MES data is separate', 'Manufacturing repositories, test, and supply chain are isolated'],
      },
      {
        mediaUrl: '/Section 1 - Slide 6.png',
        audioUrl: '/Section 1 - Audio 6.mp3',
        mediaType: 'image',
        bullets: ['Manufacturing data is not standardized', 'Systems are not connected end‑to‑end', 'ERP receives incomplete information', 'Financial impact is hard to assess'],
      },
      {
        mediaUrl: '/Section 1 - Slide 7.png',
        audioUrl: '/Section 1 - Audio 7.mp3',
        mediaType: 'image',
        bullets: ['PDF Solutions and SAP working together', 'Bridging operational and financial data', 'Enabling faster business outcomes'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%208.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 8.mp3',
        bullets: ['Sapience Manufacturing Hub at the core', 'Unified interface for factory systems', 'Centralized operational data layer', 'Connects MES and factory systems to SAP S/4HANA'],
      },
      {
        mediaUrl: '/Section 1 - Slide 9.png',
        audioUrl: '/Section 1 - Audio 9.mp3',
        mediaType: 'image',
        bullets: ['Manufacturing events standardized', 'Semantic alignment applied', 'Events aggregated across sources', 'Single, consistent data foundation in SAP'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2010.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 10.mp3',
        bullets: ['Manufacturing workflows are non‑linear', 'Lots routinely split and merge', 'Rework is common in semiconductor fabs', 'ERP consistency must be maintained'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2011.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 11.mp3',
        bullets: ['Production order originates in SAP S/4HANA', 'Order prepared for shop‑floor execution', 'SMH orchestrates the handoff'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2012.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 12.mp3',
        bullets: ['Manufacturing execution creates many events', 'MES events captured continuously', 'Thousands of steps aggregated into milestones'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2013.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 13.mp3',
        bullets: ['Reduced integration build and maintenance effort', 'Faster deployments across sites', 'Improved traceability and throughput', 'Consistent manufacturing data for SAP'],
      },
      {
        mediaUrl: '/Section 1 - Slide 14.png',
        audioUrl: '/Section 1 - Audio 14.mp3',
        mediaType: 'image',
        bullets: ['Unified manufacturing data foundation', 'Enables product costing', 'Supports sustainability analytics', 'Powers lot genealogy and cost of yield'],
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
      'See how the manufacturing data foundation created by SMH is applied to Product Costing using SAP Joule and PDF Operational Product Costing analytics.',
    watchVideoUrl:
      'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%202%20Video.mp4',
    slides: [
      {
        mediaUrl: '/Section 2 - Slide 1.png',
        audioUrl: '/Section 2 - Audio 1.mp3',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 2 - Slide 2.png',
        audioUrl: '/Section 2 - Audio 2.mp3',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%202%20-%20Slide%203.mp4',
        audioUrl: '/Section 2 - Audio 3.mp3',
        mediaType: 'video',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 2 - Slide 4.png',
        audioUrl: '/Section 2 - Audio 4.mp3',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 2 - Slide 5.png',
        audioUrl: '/Section 2 - Audio 5.mp3',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
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
      'Explore the end‑to‑end flow between SAP, Sapience Manufacturing Hub, and PDF Operational Product Costing in a detailed demo walkthrough.',
    watchVideoUrl:
      'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20Video.mp4',
    slides: [
      {
        mediaUrl: '/Section 3 - Slide 1.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 1.mp3',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20-%20Slide%202.mp4',
        mediaType: 'video',
        audioUrl: '/Section 3 - Audio 2.mp3',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 3 - Slide 3.png',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
        audioUrl: '/Section 3 - Audio 3.mp3',
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20-%20Slide%204.mp4',
        audioUrl: '/Section 3 - Audio 4.mp3',
        mediaType: 'video',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 3 - Slide 5.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 5.mp3',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20-%20Slide%206.mp4',
        mediaType: 'video',
        audioUrl: '/Section 3 - Audio 6.mp3',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20-%20Slide%207.mp4',
        mediaType: 'video',
        audioUrl: '/Section 3 - Audio 7.mp3',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20-%20Slide%208.mp4',
        mediaType: 'video',
        audioUrl: '/Section 3 - Audio 8.mp3',
        bullets: ['Video slide plays automatically when this slide is active.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 3 - Slide 9.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 9.mp3',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 3 - Slide 10.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 10.mp3',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 3 - Slide 11.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 11.mp3',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
      {
        mediaUrl: '/Section 3 - Slide 12.png',
        mediaType: 'image',
        bullets: ['Slide content uploaded.', 'Narration notes pending.'],
      },
    ],
    nextSectionId: 'overview',
    nextSectionLabel: 'Return to SMH Overview',
  },
];