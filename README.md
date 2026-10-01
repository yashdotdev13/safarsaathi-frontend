# 🌍 SafarSaathi — AI-Powered Travel Companion

> Travel Together. Travel Smarter.

SafarSaathi is an AI-powered travel companion platform designed to make travel planning more intelligent, personalized, and social.

The frontend provides a modern travel experience where users can discover destinations, plan trips, explore AI-powered recommendations, find compatible travel companions, manage their travel preferences, and interact with personalized AI memory.

This repository contains the **SafarSaathi frontend**, built with modern React and Next.js technologies.

---

## ✨ Overview

Travel planning often requires switching between multiple platforms for:

- Trip planning
- Destination discovery
- Itinerary creation
- Finding travel companions
- Personalized recommendations
- Managing travel preferences

SafarSaathi brings these experiences together into a single AI-centric travel platform.

The frontend is designed around a modern **dark SaaS / travel interface** with:

- Cinematic travel imagery
- Glassmorphism-inspired cards
- Indigo, cyan, and purple accents
- Responsive layouts
- AI-focused interactions
- Sidebar-based application navigation
- Personalized travel dashboards

---

# 🚀 Features

## 🏠 Landing Page

The landing page introduces SafarSaathi and communicates the core product experience.

### Includes

- Cinematic travel hero section
- AI-powered travel messaging
- SafarSaathi branding
- Feature highlights
- Travel planning introduction
- How-it-works section
- Call-to-action buttons
- Responsive navigation
- Footer

---

## 🔐 Authentication UI

### Login

A dedicated login experience with:

- Cinematic travel image
- SafarSaathi branding
- Email/password login form
- Back-to-home navigation
- Responsive authentication layout

### Register

A matching registration experience with:

- Travel imagery
- User registration form
- SafarSaathi branding
- Responsive layout
- Consistent authentication styling

> Authentication API integration will be connected separately.

---

# 📊 Dashboard

The dashboard acts as the main application home after authentication.

It provides a centralized view of the user's travel activity and SafarSaathi experience.

### Includes

- Personalized greeting
- Travel overview
- Upcoming trips
- Destination cards
- AI travel assistant entry point
- Travel statistics
- Quick actions
- Dark SaaS dashboard layout

---

# 🤖 AI Travel

SafarSaathi includes an AI Travel interface designed around conversational travel assistance.

The interface is intended to support:

- Travel questions
- Destination discovery
- Trip planning
- Personalized recommendations
- AI-assisted travel decisions

The frontend provides the UI foundation for connecting the AI service.

---

# 🗺️ Trips

The Trips section provides an overview of the user's travel plans.

### Includes

- Upcoming trips
- Destination cards
- Trip status
- Travel dates
- Trip summaries
- Trip navigation
- Create Trip action

---

# ✈️ Create Trip

The Create Trip experience allows users to describe their upcoming journey.

### Current UI includes

- Destination
- Start date
- End date
- Number of travelers
- Travel style
- Budget
- Travel interests
- AI planning assistance panel

### Travel styles

- Adventure
- Culture
- Food & Leisure

### Budget options

- Budget
- Moderate
- Premium

### Interests

- Nature
- Mountains
- Beaches
- Food
- Photography
- Adventure
- Culture
- Nightlife
- Spirituality
- Shopping

The current implementation uses frontend state and mock interactions.

---

# 🏔️ Trip Details

The Trip Details page provides a detailed view of a selected journey.

### Includes

- Destination hero image
- Trip status
- Travel dates
- Location
- Duration
- Number of travelers
- Travel style
- Budget
- Day-by-day itinerary
- Activities
- AI Travel Assistant panel
- Personalized recommendations

The current implementation uses mock trip data and is ready for API integration.

---

# 🤝 Companion Matching

SafarSaathi includes a dedicated travel companion discovery experience.

### Includes

- AI-powered companion matching UI
- Traveler cards
- Compatibility percentage
- Destination matching
- Travel dates
- Travel interests
- Travel style
- Search
- Interest filters
- Favorite/like interaction
- Traveler profile actions

The current page uses frontend mock data.

---

# 👤 Profile

The Profile page allows users to manage their travel identity.

### Includes

- Profile avatar
- Name
- Location
- Email
- Account type
- Travel statistics
- Travel style
- About section
- Travel interests
- Favorite destinations
- Edit profile mode
- Save / cancel interactions

---

# 🧠 AI Memory

The AI Memory Dashboard represents the information SafarSaathi can use to personalize the user's travel experience.

### Includes

- AI memory overview
- Travel preference insights
- Travel style analysis
- Destination preferences
- Food preferences
- Activity preferences
- Travel interest tags
- Destination recommendations
- Recent memories
- Memory management UI
- Privacy controls

The current implementation uses frontend mock data and provides the UI foundation for the future AI memory service.

---

# 🔔 Notifications

The Notifications page provides a centralized activity center.

### Includes

- Notification count
- Unread notifications
- Trip updates
- AI recommendations
- Companion notifications
- Travel reminders
- Notification history UI
- Mark-as-read actions
- Dismiss actions
- Notification preferences

---

# ⚙️ Settings

The Settings page provides application and account configuration.

### Includes

### Account

- Name
- Email
- Location
- Account type

### Experience Preferences

- Appearance
- Language
- AI personalization
- Travel notifications

### Security

- Change password
- Login & security

### Account Management

- Delete account
- Sign out

The current UI provides the frontend foundation for connecting these settings to backend services.

---

# 🧭 Application Navigation

SafarSaathi uses a persistent application sidebar for authenticated pages.

### Workspace

- Dashboard
- AI Travel
- Trips
- Create Trip
- Companions

### Personal

- Profile
- AI Memory
- Notifications

### Application

- Settings
- Logout

The sidebar also supports responsive mobile navigation.

---

# 🎨 Design System

SafarSaathi follows a dark cinematic travel/SaaS visual language.

### Primary Colors

| Purpose | Color |
|---|---|
| Background | `#050b14` |
| Card | `#0b1422` |
| Secondary Background | `#07101c` |
| Primary | Indigo |
| AI Accent | Cyan |
| Secondary Accent | Purple |
| Success | Emerald |
| Warning | Amber |

### Visual Style

- Dark-first UI
- Glassmorphism
- Rounded cards
- Subtle borders
- Soft gradients
- Cinematic imagery
- AI-focused visual accents
- Responsive layouts
- Micro-interactions

---

# 🛠️ Tech Stack

## Frontend

- **Next.js**
- **React**
- **TypeScript**

## Styling

- **Tailwind CSS**
- **shadcn/ui**
- **Base UI**
- **Lucide React**

## State & Data

- **TanStack Query**
- **React Hook Form**
- **Zod**

## HTTP

- **Axios**

## Animation

- **Framer Motion**

## Notifications

- **Sonner**

---

# 📦 Project Structure

```text
safarsaathi-frontend/
│
├── app/
│   ├── (app)/
│   │   ├── dashboard/
│   │   ├── ai-chat/
│   │   ├── trips/
│   │   │   ├── page.tsx
│   │   │   ├── create/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── companions/
│   │   ├── profile/
│   │   ├── memory/
│   │   ├── notifications/
│   │   └── settings/
│   │
│   ├── login/
│   ├── register/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── auth/
│   ├── dashboard/
│   ├── landing/
│   ├── layout/
│   ├── trips/
│   ├── companions/
│   ├── ui/
│   └── ...
│
├── hooks/
│
├── lib/
│   ├── api/
│   ├── auth/
│   └── utils.ts
│
├── providers/
│
├── types/
│
├── public/
│   └── images/
│       ├── auth/
│       └── dashboard/
│
├── components.json
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
└── README.md