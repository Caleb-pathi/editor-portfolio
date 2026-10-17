/* ============================================================================
   PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
   ----------------------------------------------------------------------------
   Everything you may want to change lives in this file:
     · identity / bio / email / socials
     · image URLs
     · video projects (title, category, description, thumbnail, embed URL)
     · skills, services, collaborators, metrics, testimonials
   No other file needs editing to update the content of the site.
   ========================================================================== */

import heroImg from "./hero.png";

/* ---------------------------------------------------------------------------
   IMAGES — REPLACE IMAGE URL HERE
   Every image on the site is referenced from this object.
   ------------------------------------------------------------------------- */
export const images = {
  // Hero profile image
  hero: heroImg,

  // Project thumbnails — REPLACE IMAGE URL HERE (one per project)
  project01:
    "https://lh3.googleusercontent.com/d/191xk6PPQdCJzi9cQxxUiszzq_Zh_e9Fn=w1200",
  project02:
    "https://img.youtube.com/vi/Rdo8t3CA4F0/maxresdefault.jpg",
  project03:
    "https://img.youtube.com/vi/wIz5i_Md8uM/maxresdefault.jpg",
  project04:
    "https://lh3.googleusercontent.com/d/1TbOi_FzxtQuhlHHtc_buuWWpwCT2fxoH=w1200",
  project05:
    "https://images.pexels.com/photos/6253568/pexels-photo-6253568.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  project06:
    "https://images.pexels.com/photos/14806282/pexels-photo-14806282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
} as const;

/* ---------------------------------------------------------------------------
   IDENTITY
   ------------------------------------------------------------------------- */
export const identity = {
  name: "CALEB PATHI",
  fullName: "Caleb Pathi",
  role: "Video Editor & Motion Designer",
  roleSplit: ["Video Editor", "Motion Designer"],
  location: "India / Available Worldwide",
  availability: "Available for projects",
  heroHeadline: [
    "Editing that makes",
    "creators impossible",
    "to ignore.",
  ],
  intro:
    "I craft cinematic edits and motion-driven visuals that capture attention, build emotion, and turn ideas into compelling stories.",
  contactHeadline: ["Have something", "Worth watching?"],
  contactSupport: "Let's turn your next idea into something people remember.",
} as const;

/* ---------------------------------------------------------------------------
   CONTACT — REPLACE EMAIL HERE
   ------------------------------------------------------------------------- */
export const contact = {
  // REPLACE EMAIL HERE
  email: "pathicaleb2050@gmail.com",
  subject: "Project enquiry — via portfolio",
  // REPLACE SOCIAL LINK HERE (one per entry)
  socials: [
    {
      label: "Instagram",
      handle: "@caleb_pathi",
      url: "https://www.instagram.com/caleb_pathi/",
    },
    {
      label: "X / Twitter",
      handle: "@CalebPathi",
      url: "https://x.com/CalebPathi",
    },
    {
      label: "YouTube",
      handle: "@PathiCaleb",
      url: "https://www.youtube.com/@PathiCaleb",
    },
  ],
} as const;

/* ---------------------------------------------------------------------------
   NAVIGATION
   ------------------------------------------------------------------------- */
export const navLinks = [
  { label: "Work", href: "#work", index: "01" },
  { label: "Services", href: "#services", index: "02" },
  { label: "Contact", href: "#contact", index: "03" },
] as const;

export const sections = [
  { id: "work", index: "01", label: "Selected Work" },
  { id: "services", index: "02", label: "What I Do" },
  { id: "testimonials", index: "03", label: "What People Say" },
  { id: "contact", index: "04", label: "Contact" },
] as const;

/* ---------------------------------------------------------------------------
   FEATURED WORK
   videoUrl accepts a full embed URL:
     https://www.youtube.com/embed/VIDEO_ID
     https://player.vimeo.com/video/VIDEO_ID
   ------------------------------------------------------------------------- */
export type VideoProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  year: string;
  thumbnail: string;
  videoUrl: string;
};

export const videos: VideoProject[] = [
  {
    id: "01",
    title: "Cinematic Visual Edit",
    category: "Short Form & Motion",
    description:
      "High-impact cinematic edit with rhythm-based cuts, immersive sound design, and custom visual pacing.",
    duration: "01:49",
    year: "2026",
    thumbnail: images.project01, // REPLACE IMAGE URL HERE
    videoUrl: "https://drive.google.com/file/d/191xk6PPQdCJzi9cQxxUiszzq_Zh_e9Fn/preview", // REPLACE VIDEO URL HERE
  },
  {
    id: "02",
    title: "VP+ Marketplace",
    category: "Winning Competition Edit",
    description:
      "Winner of a video editing competition, earning a $299 VP+ Marketplace subscription through cinematic visuals, dynamic motion design, and compelling storytelling.",
    duration: "00:35",
    year: "2026",
    thumbnail: images.project02, // REPLACE IMAGE URL HERE
    videoUrl: "https://www.youtube.com/embed/Rdo8t3CA4F0", // REPLACE VIDEO URL HERE
  },
  {
    id: "03",
    title: "Cinematic Short Form",
    category: "Short Form Editing",
    description:
      "Fast-paced storytelling, cinematic pacing, and visual rhythm designed for maximum retention.",
    duration: "00:47",
    year: "2026",
    thumbnail: images.project03, // REPLACE IMAGE URL HERE
    videoUrl: "https://www.youtube.com/embed/wIz5i_Md8uM", // REPLACE VIDEO URL HERE
  },
  {
    id: "04",
    title: "Brand Motion Edit",
    category: "Motion & Social",
    description:
      "Dynamic promo edit crafted with crisp motion graphics, sound design, and rhythm-driven cuts.",
    duration: "00:07",
    year: "2026",
    thumbnail: images.project04, // REPLACE IMAGE URL HERE
    videoUrl: "https://drive.google.com/file/d/1TbOi_FzxtQuhlHHtc_buuWWpwCT2fxoH/preview", // REPLACE VIDEO URL HERE
  },
  /* Placeholders 05 & 06 saved here to add back anytime on request:
  {
    id: "05",
    title: "High Retention Edit",
    category: "Social Media",
    description: "Short-form editing engineered around attention, pacing, and strong visual hooks.",
    duration: "00:28",
    year: "2026",
    thumbnail: images.project05,
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    id: "06",
    title: "Visual Experiment",
    category: "Creative Experiment",
    description: "An experimental motion and editing project exploring visual storytelling.",
    duration: "00:56",
    year: "2026",
    thumbnail: images.project06,
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  */
];

export const featuredWork = {
  heading: "Selected Work",
  subheading:
    "A selection of edits, motion pieces, experiments, and projects built to move people and hold attention.",
  count: videos.length,
} as const;

/* ---------------------------------------------------------------------------
   CAPABILITIES & SOFTWARE I USE
   ------------------------------------------------------------------------- */
export type Capability = { name: string; note: string; code: string };

export const capabilities: Capability[] = [
  {
    name: "Video Editing",
    note: "Narrative structure, pacing, rhythm, and rhythm-based cutting.",
    code: "VE",
  },
  {
    name: "Motion Design",
    note: "Kinetic type, transitions, title systems, and visual identity.",
    code: "MD",
  },
  {
    name: "Sound Design",
    note: "Layered SFX, mix balance, and music-driven edit pacing.",
    code: "SD",
  },
];

export const skills = capabilities;

export type SoftwareTool = { name: string; note: string; code: string };

export const softwareTools: SoftwareTool[] = [
  {
    name: "Adobe After Effects",
    note: "Motion graphics, visual effects, compositing, and tracking.",
    code: "AE",
  },
  {
    name: "Adobe Premiere Pro",
    note: "Timeline editing, multi-cam sync, audio sync, and color grading.",
    code: "PR",
  },
  {
    name: "Adobe Photoshop",
    note: "Asset preparation, texture work, graphic treatments, and stills.",
    code: "PS",
  },
];

/* ---------------------------------------------------------------------------
   SERVICES
   ------------------------------------------------------------------------- */
export type Service = {
  index: string;
  name: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    index: "01",
    name: "Short-Form Editing",
    description: "For Reels, Shorts, and high-retention social content.",
    tags: ["Reels", "Shorts"],
  },
  {
    index: "02",
    name: "Motion Design",
    description:
      "Typography animation, explainer visuals, transitions, and motion systems.",
    tags: ["Typography", "Explainers"],
  },
  {
    index: "03",
    name: "Creative Experiments",
    description:
      "Custom visual projects, 3D experiments, AI-assisted visuals, and unique concepts.",
    tags: ["3D", "AI-assisted"],
  },
];

/* ---------------------------------------------------------------------------
   EXPERIENCE / COLLABORATORS
   Swap the `logo` string for an <img> or inline SVG whenever you have real marks.
   ------------------------------------------------------------------------- */
export type Collaborator = { name: string; sector: string };

export const collaborators: Collaborator[] = [
  { name: "Project Alpha", sector: "Creator Series" },
  { name: "Creator Studio", sector: "YouTube" },
  { name: "Vision Lab", sector: "Brand Film" },
  { name: "Northframe", sector: "Documentary" },
  { name: "Motion House", sector: "Motion System" },
  { name: "Story Lab", sector: "Short Form" },
];

/* REPLACE METRICS WITH REAL NUMBERS */
export const metrics = [
  { value: "30+", label: "Projects Edited" },
  { value: "03", label: "Years Creating" },
];

/* ---------------------------------------------------------------------------
   TESTIMONIALS — REPLACE WITH REAL TESTIMONIALS
   ------------------------------------------------------------------------- */
export type Testimonial = { quote: string; author: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Caleb Pathi truly exceeded our expectations with the NearU promotional video. The realistic visuals, cinematic storytelling, and incredible attention to detail brought our vision to life in a way we hadn't imagined. The final result was beyond anything we expected.",
    author: "Akash", // REPLACE WITH REAL TESTIMONIALS
    role: "CEO of NearU",
  },
  {
    quote:
      "I'm so happy to have secured 1st prize in the IQST-2025 video-making competition. Thank you for your amazing work and contribution to making this achievement possible!",
    author: "Prachi Sharma", // REPLACE WITH REAL TESTIMONIALS
    role: "1st Prize Winner, IQST-2025",
  },
  {
    quote:
      "The technical execution is on another level. This was easily a potential top-five entry out of hundreds of submissions. Awarded a $299 VP+ Marketplace subscription for outstanding visual design.",
    author: "Jack Cole", // REPLACE WITH REAL TESTIMONIALS
    role: "VP+ Marketplace",
  },
];

/* ---------------------------------------------------------------------------
   MARQUEE STRIP — kinetic type band under the hero
   ------------------------------------------------------------------------- */
export const marqueeItems = [
  "Short Form",
  "Motion Design",
  "Cinematic Editing",
  "Sound Design",
  "Colour Grading",
  "Title Systems",
  "Story Structure",
];

export const heroMeta = {
  leftRail: "Portfolio — Vol. 01",
  timecode: "00:00:01:00",
  frameRate: "23.976 FPS",
  format: "4K DCI",
  scroll: "Scroll to explore",
};
