# **App Name**: BuildTrack Pro

## Core Features:

- User Authentication: Secure login/register functionality with JWT via Node.js backend, and Firebase Authentication.
- Multi-Tenant Dashboard: Dashboard displaying project-specific data, ensuring each contractor views only their projects. Stats overview cards with graphs based on total budget, material usage, worker's payments, and daily expenses log.
- Project Management: Create, select, and manage construction projects within the platform, each linked to a specific tenant (contractor).
- Material Tracking: Add, edit, and delete construction materials, tracking usage per project to prevent losses, recorded in Firestore.
- Worker Payment Tracking: Log worker payments associated with each project, ensuring accurate record-keeping for labor costs, and AI tooling for overtime hour auditing.
- Budget Monitoring: Track total expenses, monitor remaining budget, and set alerts for overspending to prevent financial losses.
- Report Generation: Generate and export reports (PDF, CSV) summarizing expenses, material usage, and labor costs for each project, sourced from Firestore.

## Style Guidelines:

- Primary color: Blue (#007BFF) to inspire trust and reflect dependability.
- Background color: Light gray (#F8F9FA) to ensure readability and a neutral base.
- Accent color: Orange (#FF9933) for CTAs, progress bars, and key highlights that draw user attention.
- Headline font: 'Space Grotesk' (sans-serif) for headlines and short amounts of body text; body font: 'Inter' (sans-serif) for longer text.
- Use clean, simple icons representing materials, workers, and financial elements for intuitive navigation.
- Dashboard layout inspired by NexGen template: modular cards, sections with stats, responsive design for mobile, tablet, and desktop.
- Subtle transitions and animations for loading states, data updates, and user interactions to enhance engagement.