# Personal Portfolio — Labish Bardiya

My portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). This is a single-page application that showcases my projects, skills, and experience, with a working contact form that saves messages to MongoDB.

**Live Demo:** https://labishbardiya.com (Hosting: Vercel)

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, GSAP
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas with Mongoose
- **Routing:** React Router DOM

## Project Structure

```
├── client/              # React frontend
│   ├── src/
│   │   ├── sections/    # Hero, About, Skills, Projects, etc.
│   │   ├── components/  # Navigation
│   │   ├── context/     # ThemeContext (dark/light mode)
│   │   └── main.tsx     # Entry point with React Router
│   ├── public/          # Images and static assets
│   └── vite.config.ts   # Vite config + API proxy
├── server/              # Express backend
│   ├── models/          # Mongoose schemas
│   ├── resume/          # CV files (PDF + DOCX)
│   ├── server.js        # API routes
│   └── .env             # MongoDB URI (not committed)
└── README.md
```

## How to Run Locally

**Prerequisites:** Node.js 18+, a MongoDB Atlas cluster (or local MongoDB)

### Backend

```bash
cd server
npm install
```

Create a `server/.env` file:

```
MONGODB_URI=your_mongodb_uri_here
PORT=3001
```

```bash
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173 in your browser. The Vite dev server proxies `/api` requests to the Express backend on port 3001.

## Features

- Dark/light mode with localStorage persistence
- GSAP scroll-triggered animations throughout
- Typewriter effect on hero subtitle
- Contact form → Express API → MongoDB
- CV download (PDF and DOCX) via backend routes
- Animated skill bars with proficiency tooltips
- Responsive layout for mobile, tablet, and desktop

## Sections

1. Hero — animated name reveal, typewriter roles, social links
2. About — bio, profile photo, animated stat counters
3. Experience — vertical timeline
4. Projects — interactive cards with tech stacks and GitHub links
5. Skills — categorized skill cloud, progress bars, contest ratings
6. Achievements — awards, certifications, scholarships
7. Contact — form with backend submission

## Author

Labish Bardiya — B.Tech CSE, JK Lakshmipat University
