import type { ProjectDetail } from '@/data/projectTypes';

export const projectsEn: ProjectDetail[] = [
  {
    title: 'Fire & Smoke Detection System',
    slug: 'fire-detection',
    featured: true,
    role: 'Computer Vision Intern',
    timeline: 'Aug 2024 - Sep 2024',
    summary:
      'At AFAC Tech I built a real-time fire and smoke detector. I started from OpenCV basics, tried YOLOv5, then moved to YOLOv8 when it was clearly the better fit, and trained on consumer hardware with pretty tight resource limits.',
    stack: ['Python', 'YOLOv8', 'YOLOv5', 'OpenCV', 'Roboflow', 'Google Colab', 'NVIDIA CUDA'],
    highlights: [
      { label: 'Peak detection confidence', value: '~90%' },
      { label: 'Operational confidence range', value: '65 - 80%' },
      { label: 'Max training duration', value: '12+ hrs / run' },
      { label: 'Hardware', value: 'RTX 3060 (99% utilization)' },
    ],
    problem:
      'AFAC Tech needed fire and smoke detection that was affordable enough for industrial or warehouse use, in places where you cannot assume a big GPU is available. The tension is always accuracy versus hardware budget, because capable real-time models usually want more compute than you realistically have at the edge.',
    approach: [
      'I started with OpenCV (grayscale, blur, edges, dilation and erosion, contours, simple transforms) so I actually understood the images before jumping into deep learning.',
      'I built a first fire prototype with YOLOv5, hit a ceiling on speed and accuracy, then benchmarked against YOLOv8 and moved once the gap was worth the migration.',
      'I rebuilt on YOLOv8, added smoke as a second class, and pulled separate public Roboflow datasets for each class. Fire and smoke were imbalanced, so augmentation had to be careful so I did not wreck the training distribution.',
      'I added email alerts on top of the model: when fire or smoke crossed the confidence threshold, Gmail got a message with the frame attached, so detection was not just a demo on screen.',
      'I began training on Google Colab for free GPU, hit quota limits, then moved to a local RTX 3060. That meant CUDA setup, drivers, and adapting scripts that assumed a Colab-style Linux setup to Windows.',
      'I ran long multi-epoch jobs (up to about 16 hours) with GPU use near 99%, and iterated on settings to keep overfitting under control on 6 GB VRAM.',
    ],
    outcome: [
      'A working real-time fire and smoke model on a live camera feed.',
      'A full loop, not only weights in a notebook: detections could trigger Gmail alerts with the frame attached, which is closer to unattended monitoring.',
      'Fire confidence peaked around 90%; day to day it often sat between about 65 and 80% depending on conditions.',
      'A relatively lightweight setup that could make sense for smaller industrial sites or storage areas without dedicated inference hardware.',
    ],
    challenges: [
      'Smoke data from Roboflow was not very diverse, so augmentation helped, but too much would have hurt quality.',
      'Colab GPU quota ran out mid-project, so I had to finish the environment move locally without CUDA already in place.',
      'Consumer hardware (RTX 3060, 6 GB VRAM) capped batch size and model choices, so every run felt like a budgeting exercise.',
      '12 to 16 hour runs without early stopping meant one bad hyperparameter could waste a full day.',
      'I tried building a custom dataset first, then stopped when public Roboflow sets gave better coverage for the time I had.',
    ],
    gallery: [
      {
        src: '/fire-detection-matches.webp',
        alt: 'Fire detection inference showing 0.89 confidence on a clean fire scene',
        caption: 'Strong fire detection on a clean scene (confidence 0.89).',
      },
      {
        src: '/fire-detection-factory.webp',
        alt: 'Real-world fire detection on factory CCTV footage at 0.79 confidence',
        caption: 'Test on factory CCTV from my supervisor (confidence 0.79).',
      },
      {
        src: '/fire-detection-smoke.webp',
        alt: 'Smoke detection on vehicle exhaust scene demonstrating dual-class capability',
        caption: 'Smoke class on a vehicle exhaust scene.',
      },
      {
        src: '/fire-detection-alert.webp',
        alt: 'Gmail alert email sent when smoke was detected with a captured frame attached',
        caption: 'Gmail alert with the captured frame when smoke was detected.',
      },
    ],
    links: [
      { label: 'YouTube presentation', href: 'https://youtu.be/zky8htvPG0o' },
      { label: 'Roboflow fire dataset', href: 'https://universe.roboflow.com/-jwzpw/continuous_fire/dataset/6' },
      { label: 'Roboflow smoke dataset', href: 'https://universe.roboflow.com/orbit-w0l5f/smoke-detection-orbit/dataset/2' },
    ],
  },
  {
    title: 'Qwen2.5 Customer Support Chatbot',
    slug: 'qwen-chatbot',
    role: 'AI Research Intern',
    timeline: 'Jun 2025 - Aug 2025',
    summary:
      'I fine-tuned Qwen2.5 with LoRA as a customer support assistant, added a Gradio UI for trying it out, and kept the whole thing on local consumer hardware.',
    stack: ['Python', 'PyTorch', 'Qwen2.5', 'LoRA', 'bitsandbytes', 'Gradio', 'Hugging Face'],
    highlights: [
      { label: 'Base model', value: 'Qwen2.5-1.5B-Instruct' },
      { label: 'Fine-tuning method', value: 'LoRA (r=64, alpha=16)' },
      { label: 'Quantization', value: '4-bit + FP16 (bitsandbytes)' },
      { label: 'Dataset', value: 'Bitext (8,175 examples)' },
    ],
    problem:
      "AGU's research line needed a customer support style LLM that stayed local, with no paid cloud inference. The hard part was getting modern instruction-tuned behavior on about 6 GB VRAM without the model falling apart in training or at inference.",
    approach: [
      'Training, inference, and merge scripts; I fixed bitsandbytes issues on Windows that had me stuck on CPU at first.',
      'I stopped hand-labeling a tiny custom set and used the Bitext customer support CSV from Kaggle instead, with a converter that handled UTF-8 BOM, missing assistant turns, and messy column names.',
      'LoRA training with tuning for batch size, gradient accumulation, learning rate, and 4-bit versus FP16 versus FP32 fallbacks so the run actually fit in VRAM.',
      'Short smoke tests before long runs so bad settings failed fast instead of after a day.',
      'A Gradio UI for manual testing, defaulting to CPU so it did not fight the GPU during training.',
    ],
    outcome: [
      'A working LoRA-tuned Qwen2.5 assistant that ran fully on local hardware.',
      'A reusable CSV to JSONL pipeline for noisy public data, reusable for similar Hugging Face workflows.',
      'Gradio on CPU so demos and training could coexist.',
      'A habit of quick validation runs before committing to long training.',
    ],
    challenges: [
      'VRAM forced 4-bit quantization, gradient accumulation, and tight batch choices to keep Qwen2.5 in 6 GB.',
      'bitsandbytes on Windows initially meant CPU-only training until I sorted environment, build, and CUDA mismatches.',
      'Bitext shipped with BOM noise, missing replies, and inconsistent columns that broke naive CSV reads.',
      'Long runs needed careful LR scheduling and FP16 or FP32 fallbacks to avoid divergence on the 4-bit base.',
      'Gradio and training both wanted the GPU; defaulting Gradio to CPU removed most contention.',
      'I dropped the hand-built dataset for the same reason as at AFAC: public data won on time versus coverage.',
    ],
    gallery: [
      {
        src: '/qwen-chatbot-ui.webp',
        alt: 'Gradio interface for the customer support chatbot',
        caption: 'Gradio UI on the merged LoRA adapter.',
      },
      {
        src: '/qwen-chatbot-training.webp',
        alt: 'Qwen2.5 LoRA training run output',
        caption: 'LoRA run on Qwen2.5-1.5B-Instruct (r=64, alpha=16, 4-bit plus FP16).',
      },
    ],
    links: [{ label: 'YouTube presentation', href: 'https://youtu.be/12e_yhELeQ4', external: true }],
  },
  {
    title: 'miRKeggGSM',
    slug: 'mirkegggsm',
    role: 'Student Researcher - Capstone Project',
    timeline: 'Sep 2024 - Jan 2025',
    summary:
      'I contributed to a bioinformatics capstone: a machine learning pipeline for cancer classification from miRNA expression data plus KEGG pathway structure. Supervised by Prof. Burcu Bakir Gungor and Prof. Malik Yousef.',
    stack: ['Python', 'R', 'KNIME', 'Random Forest', 'scikit-learn'],
    highlights: [
      { label: 'Cancer datasets', value: '12 (GEO)' },
      { label: 'Classification method', value: 'Random Forest' },
      { label: 'Best AUC', value: '>0.99' },
      { label: 'Framework', value: 'G-S-M (KEGG pathways)' },
    ],
    problem:
      'miRNA expression data is high dimensional and noisy. Many methods skip the biology that links miRNAs, genes, and pathways, so the models are harder to read and trust.',
    approach: [
      'Python scripts to download and preprocess 12 miRNA datasets from GEO across several cancer types.',
      'Debugged existing KNIME nodes until the full G-S-M workflow ran end to end.',
      'Ran the evaluation pipeline on all 12 datasets and collected the numbers.',
      'Wrote the capstone report on methods, results, and takeaways.',
    ],
    outcome: [
      'The pipeline ran across 12 cancer datasets (lung, breast, gastric, esophageal, and others).',
      'AUC above 0.99 on several datasets, with accuracy near 96% in some cases.',
      'KEGG-based disease grouping sometimes cut hundreds of features down to fewer than ten miRNAs while performance stayed strong.',
    ],
    challenges: [
      'The KNIME workflow already had broken nodes, so experiments could not start until those were fixed.',
      'GEO sources needed custom scripts because formats were inconsistent.',
      'Large runs pushed KNIME hard; some jobs took full days.',
    ],
    gallery: [
      {
        src: '/mirkegggsm-architecture.webp',
        alt: 'miRKeggGSM G-S-M pipeline architecture diagram',
        caption: 'G-S-M pipeline: grouping, scoring, and modeling.',
      },
      {
        src: '/mirkegggsm-workflow.webp',
        alt: 'KNIME workflow implementing the G-S-M pipeline',
        caption: 'KNIME workflow for the G-S-M pipeline.',
      },
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/malikyousef/Groups-Filtering-Scoring-in-G-S-M-',
        external: true,
      },
    ],
  },
  {
    title: 'Pixie',
    slug: 'pixie',
    role: 'Student developer · Group project',
    timeline: '2023 (Abdullah Gül University)',
    summary:
      'A Flutter Android image editor with Firebase sign-in, 43 in-app filters, and Cutout Pro for AI extras (background removal, color work, enhancement, cartoon selfies).',
    stack: ['Flutter', 'Dart', 'Firebase', 'Cutout Pro API'],
    highlights: [
      { label: 'Filters', value: '43' },
      { label: 'Auth', value: 'Firebase Authentication' },
      { label: 'Special features', value: 'Cutout Pro API' },
      { label: 'Platform', value: 'Android (Flutter)' },
    ],
    problem:
      'We needed a mobile editor with real auth, gallery and camera entry, a serious filter set, and a few AI-powered extras, as a graded group project in Flutter while the team was still learning the framework.',
    approach: [
      'Firebase email and password auth with register, login with errors handled, and logout from settings.',
      'Image picker for gallery and camera as the two ways into editing.',
      '43 filter presets with save back to the device gallery.',
      'Cutout Pro for background removal, face cutout, color correction, enhancement, and cartoon selfie with 11 styles.',
      'A small test screen with before and after to validate API output before wiring it into the main flow.',
    ],
    outcome: [
      'End to end Android flow: auth, pick a photo, edit, save to gallery.',
      '43 filters plus four Cutout features in the build we shipped: remove background, color correction, enhancement, cartoon selfie.',
      'Auth worked end to end; language switching in settings stayed out of scope and is noted as a future add-on.',
    ],
    challenges: [
      'Cutout Pro is paid, so we had to ration test calls during development.',
      'Stateful editing without a heavy state library meant careful widget layout (filters, API results, save confirmation).',
      'Gallery, camera, and special-feature screens were separate routes, so keeping editing context consistent took care.',
    ],
    gallery: [
      {
        src: '/pixie-welcome.webp',
        alt: 'Pixie welcome screen with Gallery and Camera entry buttons',
        caption: 'Welcome screen with two entry points: gallery and camera.',
      },
      {
        src: '/pixie-editing.webp',
        alt: 'Pixie editing page showing Cutout Pro API toolbar at the bottom',
        caption: 'Editing view with the Cutout toolbar (remove BG, face cutout, color, passport).',
      },
      {
        src: '/pixie-colorizer.webp',
        alt: 'Photo colorizer showing a black and white photo alongside the colorized result',
        caption: 'Colorizer: black and white input next to the colorized output.',
      },
      {
        src: '/pixie-gallery.webp',
        alt: 'Pixie gallery picker with directory browser open',
        caption: 'Gallery picker with folders (recent, images, drive, SD card).',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Pixie', external: true }],
  },
  // URL slug stays `music-app` by design; the product name in the UI is "Musing".
  {
    title: 'Musing',
    slug: 'music-app',
    role: 'Student developer · Group project',
    timeline: 'Jun 2023 (Abdullah Gül University)',
    summary:
      'A Spotify-backed music web app from a university group project. Signed-in users can browse artists and tracks, manage playlists, search six catalog types, and control playback, all in a custom dark purple UI.',
    stack: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'Node.js', 'Express.js', 'EJS', 'Spotify API'],
    highlights: [
      { label: 'Team size', value: '3 members' },
      { label: 'Auth method', value: 'Spotify OAuth 2.0' },
      { label: 'Search scope', value: '6 content types' },
      { label: 'Rendering', value: 'Server-side (EJS)' },
    ],
    problem:
      'The course asked for a full-stack app built as a team. We picked a custom Spotify front end, which meant OAuth 2.0, server-rendered pages without a modern component framework, and a third-party API on a real deadline.',
    approach: [
      'We picked Spotify over YouTube Music after reading the docs: Spotify had clearer JavaScript-oriented material and broader support, while YouTube Music was thin on official guidance and leaned Python in examples.',
      'Express handled OAuth (authorize, token exchange, authenticated calls for profile, playlists, and playback).',
      'EJS templates, Bootstrap 5, and custom CSS in a deep purple theme. We trimmed unnecessary API calls to stay near a three second feel.',
      'Search covered six Spotify types (tracks, artists, albums, shows, episodes, audiobooks) plus a home feed from favorites and recommendations.',
      'Responsive layout with Bootstrap grid and a hamburger menu on small screens.',
    ],
    outcome: [
      'Working profile, public and private playlists, full catalog search, and playback with previous and next.',
      'Same purple look on desktop and mobile.',
      'We documented Spotify limits we could not fix: playback needs the desktop app open, and full playback features need Premium.',
    ],
    challenges: [
      'OAuth refresh and re-auth in Express without a dedicated auth library.',
      'Stateful pages with only EJS meant careful routing and request design.',
      'Hitting several Spotify endpoints per view while keeping load time reasonable.',
    ],
    gallery: [
      {
        src: '/musing-home.webp',
        alt: 'Musing home page showing favorite artists and mood filter chips',
        caption: 'Home feed with favorites and mood chips.',
      },
      {
        src: '/musing-playlists.webp',
        alt: 'Musing playlists page showing user playlist cards',
        caption: 'Playlists with song counts.',
      },
      {
        src: '/musing-profile.webp',
        alt: 'Musing profile page showing followed artists',
        caption: 'Profile with followed artists and account info.',
      },
      {
        src: '/musing-search.webp',
        alt: 'Musing search results page showing artist results',
        caption: 'Search results (one of six content types).',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Music-App', external: true }],
  },
  {
    title: 'Chat App',
    slug: 'chat-app',
    summary: 'Real-time chat in Flutter with AES-256 on the wire and MySQL for history.',
    stack: ['Flutter', 'MySQL', 'AES-256'],
    highlights: [
      { label: 'Realtime chat', value: 'Live messaging' },
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Storage', value: 'MySQL' },
      { label: 'Mobile', value: 'Flutter UI' },
    ],
    problem:
      'Build a chat experience that feels instant but still respects privacy, with messages stored reliably on the server.',
    approach: [
      'Flutter client focused on clear send and receive flows.',
      'AES-256 on message payloads.',
      'MySQL for durable conversation history.',
    ],
    outcome: [
      'End-to-end encrypted payloads with near real-time delivery.',
      'History stayed consistent across sessions.',
    ],
    challenges: [
      'Keeping latency acceptable with crypto work on each message.',
      'Keeping the client view in sync with what is stored in MySQL.',
    ],
    gallery: [
      {
        src: '/project-placeholder-3.svg',
        alt: 'Chat app conversation placeholder',
        caption: 'Placeholder for the conversation layout.',
      },
      {
        src: '/project-placeholder-1.svg',
        alt: 'Chat app security placeholder',
        caption: 'Placeholder for encryption status.',
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/TalhaKarakoyunlu/Chat-App', external: true }],
  },
];
