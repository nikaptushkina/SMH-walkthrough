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
  watchCaptionsUrl?: string;
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
    watchVideoUrl: 'https://drive.google.com/file/d/13q868RzAlQJY0wuoqdqiDtso-9hfmZJ6/view?usp=drive_link',
    watchCaptionsUrl: '/section-1-en-US.vtt',
    slides: [
      {
        mediaUrl: '/Section 1 - Slide 1.png',
        audioUrl: '/Section 1 - Audio 1.mp3',
        mediaType: 'image',
        bullets: ['Shop floor to top floor connection', 'PDF Solutions & SAP'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/19X-7SFSyg5uQC49-EnSIBoHZN0Gu8GjD/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 2.mp3',
        bullets: ['Yield, materials, and cycle time drive cost', 'Manufacturing impacts finance'],
      },
      {
        mediaUrl: '/Section 1 - Slide 3.png',
        audioUrl: '/Section 1 - Audio 3.mp3',
        mediaType: 'image',
        bullets: ['Visibility gap between operations and finance', 'Speed of action matters'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/1CnZePzXubh0Y2k2hcMECh0Hosf57-DrJ/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 4.mp3',
        bullets: ['Highly complex semiconductor manufacturing', 'ERP captures summarized data only'],
      },
      {
        mediaUrl: '/Section 1 - Slide 5.png',
        audioUrl: '/Section 1 - Audio 5.mp3',
        mediaType: 'image',
        bullets: ['Data spread across many systems', 'Equipment, MES, test, supply chain'],
      },
      {
        mediaUrl: '/Section 1 - Slide 6.png',
        audioUrl: '/Section 1 - Audio 6.mp3',
        mediaType: 'image',
        bullets: ['Signals not connected or standardized', 'ERP receives incomplete information'],
      },
      {
        mediaUrl: '/Section 1 - Slide 7.png',
        audioUrl: '/Section 1 - Audio 7.mp3',
        mediaType: 'image',
        bullets: ['PDF Solutions and SAP partnership', 'Financial and operational data unified', 'Faster deployment of proven use cases', 'ROI from day one', 'SMH introduced as unified data layer'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/1kEEN7WVskEJzsmiGNqC_pfMGA96KT7fl/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 8.mp3',
        bullets: ['Enterprise integration platform', 'Connects factory systems to SAP', 'Manufacturing events standardized', 'Finance‑ready milestones created', 'Granularity differences reconciled', 'Single consistent source of truth'],
      },
      {
        mediaUrl: '/Section 1 - Slide 9.png',
        audioUrl: '/Section 1 - Audio 9.mp3',
        mediaType: 'image',
        bullets: ['Manufacturing flows are non‑linear', 'Splits, merges, and rework are common', 'SAP production consistency maintained'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/1ZEjD_y7pLzTmkG1ls7v7dk9vNeTHMH3h/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 10.mp3',
        bullets: ['End‑to‑end process example', 'SAP creates production order', 'Order ready for shop‑floor execution'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/1nOKbJy_gXjR4X_gxeEkmAUWorzptwLyO/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 11.mp3',
        bullets: ['SMH orchestrates production order', 'Manufacturing lot created', 'Operational data routed to MES', 'Execution begins'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/1ZlOvm6A_D_wvA4HTkb2IAA6AfCW_SAjx/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 12.mp3',
        bullets: ['MES events captured during execution', 'Thousands of steps aggregated', 'Clean milestone updates sent to SAP', 'Reusable integration routes'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/1OX_X6z4mmZ_hmFyXr7ZePp4ApwDDKeiI/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 13.mp3',
        bullets: ['Reduced interface build and maintenance cost', 'Faster deployments', 'Improved traceability', 'Higher operational throughput', 'Consistent manufacturing data across sites and MES'],
      },
      {
        mediaUrl: '/Section 1 - Slide 14.png',
        audioUrl: '/Section 1 - Audio 14.mp3',
        mediaType: 'image',
        bullets: ['Unified manufacturing data foundation', 'Enables high‑value business solutions'],
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
    watchVideoUrl: 'https://drive.google.com/file/d/1ry8Mi31PG3ezEeUbwFJqbNephfHrOZD_/view?usp=drive_link',
    watchCaptionsUrl: '/section-2-en-US.vtt',
    slides: [
      {
        mediaUrl: '/Section 2 - Slide 1.png',
        audioUrl: '/Section 2 - Audio 1.mp3',
        mediaType: 'image',
        bullets: ['Focus on product costing'],
      },
      {
        mediaUrl: '/Section 2 - Slide 2.png',
        audioUrl: '/Section 2 - Audio 2.mp3',
        mediaType: 'image',
        bullets: ['SMH ensures complete production data', 'Next step is using that data'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/1Jg4ZS_cBJDwnPZbhaUOsbmawUngoBCQ_/view?usp=drive_link',
        audioUrl: '/Section 2 - Audio 3.mp3',
        mediaType: 'video',
        bullets: ['SAP Joule introduced', 'Turning data into insight'],
      },
      {
        mediaUrl: '/Section 2 - Slide 4.png',
        audioUrl: '/Section 2 - Audio 4.mp3',
        mediaType: 'image',
        bullets: ['Joule integrated with PDF OPC analytics', 'Manufacturing and financial context combined'],
      },
      {
        mediaUrl: '/Section 2 - Slide 5.png',
        audioUrl: '/Section 2 - Audio 5.mp3',
        mediaType: 'image',
        bullets: ['Start product costing demo', 'Real prompts and responses'],
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
    watchVideoUrl: 'https://drive.google.com/file/d/1l8YU6MdeYV2zMbm9mjA7bHg7dQc5Rzjz/view?usp=drive_link',
    watchCaptionsUrl: '/section-3-en-US.vtt',
    slides: [
      {
        mediaUrl: '/Section 3 - Slide 1.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 1.mp3',
        bullets: ['PDF Operational Product Costing module'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/13jslTuLQaKQ-ZNonB09NnJzxqrqcpWM5/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 3 - Audio 2.mp3',
        bullets: ['End‑to‑end finance and operations visibility', 'Real‑time cost awareness'],
      },
      {
        mediaUrl: '/Section 3 - Slide 3.png',
        mediaType: 'image',
        bullets: ['OPC dashboards and reports', 'Platform overview'],
        audioUrl: '/Section 3 - Audio 3.mp3',
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/187Q1kpYUjN5G-hPlNEgRrDxeF9g1sYxm/view?usp=drive_link',
        audioUrl: '/Section 3 - Audio 4.mp3',
        mediaType: 'video',
        bullets: ['Multiple analytical dashboards', 'Finance and operations perspectives'],
      },
      {
        mediaUrl: '/Section 3 - Slide 5.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 5.mp3',
        bullets: ['Identify issues by technology node'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/1fRn7W7MGgAk306MRRU8muWCMYhugZ2kF/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 3 - Audio 6.mp3',
        bullets: ['Select product and fab', 'Drill into cost drivers', 'MES operation variances'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/16h-w4i09RIZAZ6yLJNUFo3Q9rZUhEnHI/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 3 - Audio 7.mp3',
        bullets: ['Use natural‑language queries', 'Explore cost drivers with Joule'],
      },
      {
        mediaUrl: 'https://drive.google.com/file/d/1iZx8RVCSMSq4yUFQ7dfXEIT6z7Fe-V3M/view?usp=drive_link',
        mediaType: 'video',
        audioUrl: '/Section 3 - Audio 8.mp3',
        bullets: ['Prioritize top cost issues', 'Rank by impact and risk'],
      },
      {
        mediaUrl: '/Section 3 - Slide 9.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 9.mp3',
        bullets: ['SAP Joule with PDF OPC analytics', 'Powered by SMH data integration'],
      },
      {
        mediaUrl: '/Section 3 - Slide 10.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 10.mp3',
        bullets: ['Faster insights', 'Clear drivers', 'Recommended actions'],
      },
      {
        mediaUrl: '/Section 3 - Slide 11.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 11.mp3',
        bullets: ['Connect fab activity to business outcomes', 'Confident enterprise decisions'],
      },
      {
        mediaUrl: '/Section 3 - Slide 12.png',
        mediaType: 'image',
        bullets: ['Thank you'],
      },
    ],
    nextSectionId: 'overview',
    nextSectionLabel: 'Return to SMH Overview',
  },
];