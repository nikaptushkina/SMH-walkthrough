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
        bullets: ['Shop floor to top floor connection', 'PDF Solutions embedded in SAP'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%202.mp4',
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
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%204.mp4',
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
        bullets: ['PDF Solutions and SAP partnership', 'Operational and financial data unified', 'Faster use‑case deployment'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%208.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 8.mp3',
        bullets: ['Unified interface for factory systems', 'Centralized operational data layer', 'MES and equipment connected to SAP S/4HANA'],
      },
      {
        mediaUrl: '/Section 1 - Slide 9.png',
        audioUrl: '/Section 1 - Audio 9.mp3',
        mediaType: 'image',
        bullets: ['Manufacturing events standardized', 'Semantic alignment applied', 'Consistent data foundation in SAP'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2010.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 10.mp3',
        bullets: ['Manufacturing workflows are non‑linear', 'Splits, merges, rework are common'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2011.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 11.mp3',
        bullets: ['Production order created in SAP', 'Prepared for shop-floor execution'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2012.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 12.mp3',
        bullets: ['MES events captured during execution', 'Detailed steps aggregated into milestones'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%201%20-%20Slide%2013.mp4',
        mediaType: 'video',
        audioUrl: '/Section 1 - Audio 13.mp3',
        bullets: ['Lower integration cost', 'Faster deployments', 'Improved traceability and throughput'],
      },
      {
        mediaUrl: '/Section 1 - Slide 14.png',
        audioUrl: '/Section 1 - Audio 14.mp3',
        mediaType: 'image',
        bullets: ['Unified manufacturing data foundation', 'Enables multiple business solutions'],
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
        bullets: ['Focus on product costing'],
      },
      {
        mediaUrl: '/Section 2 - Slide 2.png',
        audioUrl: '/Section 2 - Audio 2.mp3',
        mediaType: 'image',
        bullets: ['SMH ensures complete production data', 'Next step is using that data'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%202%20-%20Slide%203.mp4',
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
    watchVideoUrl:
      'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20Video.mp4',
    slides: [
      {
        mediaUrl: '/Section 3 - Slide 1.png',
        mediaType: 'image',
        audioUrl: '/Section 3 - Audio 1.mp3',
        bullets: ['PDF Operational Product Costing module'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20-%20Slide%202.mp4',
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
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20-%20Slide%204.mp4',
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
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20-%20Slide%206.mp4',
        mediaType: 'video',
        audioUrl: '/Section 3 - Audio 6.mp3',
        bullets: ['Select product and fab', 'Drill into cost drivers', 'MES operation variances'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20-%20Slide%207.mp4',
        mediaType: 'video',
        audioUrl: '/Section 3 - Audio 7.mp3',
        bullets: ['Use natural‑language queries', 'Explore cost drivers with Joule'],
      },
      {
        mediaUrl:
          'https://bxqbfoszjka2jfka.public.blob.vercel-storage.com/Section%203%20-%20Slide%208.mp4',
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