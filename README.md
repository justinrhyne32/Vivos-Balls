# Vivo's Balls - Premium Used Golf Balls Website

A sleek, modern, high-tech Next.js 14 website for Vivo's Balls, featuring dark luxury aesthetics with neon accents, smooth animations, and fully interactive components.

## Features

- **Modern Design**: Dark luxury theme with electric green/neon accents
- **Smooth Animations**: Scroll-triggered animations, parallax effects, and interactive hover states
- **3D Golf Ball**: Animated rotating golf ball in the hero section
- **Product Showcase**: Interactive product cards with hover effects
- **Premium Products**: Special sections for Titleist Pro V1 and Pro V1x
- **Interactive Widget**: "Spin the Golf Ball" discount code generator
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Fast Performance**: Built with Next.js 14 for optimal speed

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll-triggered animations
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── shop/           # Shop page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── Navigation.tsx  # Floating navigation bar
│   ├── Footer.tsx      # Footer with newsletter
│   ├── Hero.tsx        # Hero section with 3D ball
│   ├── ProductShowcase.tsx  # Product showcase
│   ├── ProductCard.tsx      # Individual product card
│   ├── ProductGrid.tsx      # Full product grid
│   ├── BrandStory.tsx       # Brand story section
│   ├── Timeline.tsx         # Company timeline
│   ├── CTA.tsx              # Call-to-action section
│   ├── ContactForm.tsx      # Contact form
│   ├── OwnerInfo.tsx        # Owner contact info
│   └── SpinWidget.tsx       # Spin for discount widget
└── public/             # Static assets
```

## Pages

- **Home** (`/`) - Hero section, product showcase, brand story, and CTA
- **Shop** (`/shop`) - Full product catalog with standard and premium options
- **About** (`/about`) - Brand story and company timeline
- **Contact** (`/contact`) - Contact form and owner information

## Contact Information

- **Owner**: Matt Vivona
- **Email**: mattyv313@gmail.com
- **Phone**: 203-536-4533

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- `neon-green`: #00ff88
- `electric-green`: #39ff14
- `metallic`: #c0c0c0
- `dark-bg`: #0a0a0a
- `dark-surface`: #1a1a1a

### Products

Update product data in:
- `components/ProductShowcase.tsx` - Homepage products
- `components/ProductGrid.tsx` - Shop page products

## License

This project is private and proprietary.



