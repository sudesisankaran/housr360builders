# Housr 360 Builders — Premium Construction Website

A production-grade, fully responsive, luxury architectural and construction website built with **React**, **Vite**, **Tailwind CSS**, **React Router**, **Framer Motion**, and **React Hook Form**.

---

## 🏛️ Brand Overview

**Housr 360 Builders** is a premier luxury construction, architecture, and interior design studio specializing in turnkey residential villas, contemporary 2D/3D elevations, commercial infrastructure, and Vastu-compliant spaces.

### 🎨 Brand Color Palette
- **Primary Background**: `#111111` (Deep Charcoal Black)
- **Secondary Background**: `#1A1A1A` (Rich Slate Surface)
- **Card Background**: `#161616`
- **Gold Accent**: `#D4AF37` (Metallic Architectural Gold)
- **Light Gold Accent**: `#F1D98A` (Champagne Highlight)
- **Primary Text**: `#FFFFFF` (Crisp Optical White)
- **Secondary Text**: `#B8B8B8` (Muted Architectural Gray)
- **Light Accent Background**: `#F6F4EF`

---

## ⚡ Technology Stack

- **Core**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 with custom theme tokens & Vanilla CSS architectural grid utilities
- **Navigation**: React Router v7 with route-level code splitting (`React.lazy` + `Suspense`)
- **Animations**: Framer Motion for entrance animations, hover states, modals, and drawers
- **Icons**: Lucide React + custom inline SVGs
- **Form Validation**: React Hook Form with Indian mobile phone validation (`/^[6-9]\d{9}$/`)
- **SEO & Metatags**: Dynamic page title and meta description updates with `useDocumentTitle` hook
- **Integrations**: Contextual WhatsApp direct consultation links (`wa.me`)

---

## 🗺️ Routes & Pages

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Hero, Trust metrics, Services, Featured Projects, Why Us, Work Process, 2D/3D Showcase, Testimonials, FAQs, CTA |
| `/about` | **About Us** | Company history, 4 pillars of excellence, 200+ quality inspection protocols |
| `/services` | **Services Overview** | All six disciplines with turnkey benefits and comparison |
| `/services/house-construction` | **House Construction** | Turnkey luxury villa construction, RCC framing, and MEP details |
| `/services/2d-3d-design` | **2D Plans & 3D Elevation** | Space planning, daylight simulation, and 4K photorealistic renders |
| `/services/interior-design` | **Interior Design** | Bespoke woodwork, German modular kitchens, and lighting design |
| `/services/renovation` | **Renovation** | Structural retrofitting, I-beam insertions, and facade modernization |
| `/services/commercial-buildings` | **Commercial Buildings** | Post-tensioned column-free plates and curtain wall glazing |
| `/services/vastu-plans` | **Vastu Plans** | Scientific 16-zone spatial alignment balanced with modern luxury |
| `/projects` | **Projects Gallery** | Filterable gallery (Residential, Commercial, Interiors, Renovation), search & lightbox |
| `/projects/:slug` | **Project Details** | Project specifications, architectural narrative, multi-image lightbox, and enquiry CTA |
| `/testimonials` | **Testimonials** | Verified homeowner feedback, ratings breakdown, and client stories |
| `/contact` | **Contact Us** | Full consultation enquiry form, corporate office information, and WhatsApp desk |
| `/privacy-policy` | **Privacy Policy** | Official data privacy, consent terms, and communication policies |
| `*` | **404 Not Found** | Architectural blueprint 404 page with navigation redirects |

---

## 📁 Project Directory Structure

```
housr360buliders/
├── public/
│   ├── favicon.svg             # Luxury gold monogram SVG favicon
│   ├── robots.txt              # Search engine crawler permissions
│   └── sitemap.xml             # XML sitemap covering all 15 routes
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── ProcessCard.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   └── TestimonialCard.jsx
│   │   ├── forms/
│   │   │   └── EnquiryForm.jsx     # Validated form with WhatsApp forwarder
│   │   ├── gallery/
│   │   │   └── LightboxModal.jsx   # Fullscreen gallery modal with keyboard navigation
│   │   └── layout/
│   │       ├── AnnouncementBar.jsx # Dismissible top advisory bar
│   │       ├── FloatingWhatsApp.jsx# Bottom-right pulse button with contextual link
│   │       ├── Footer.jsx          # Editable company footer & social channels
│   │       ├── Navbar.jsx          # Sticky header with services dropdown & mobile drawer
│   │       ├── PageLoader.jsx      # Luxury architectural suspense loader
│   │       └── ScrollToTop.jsx     # Route change scroll restoration & back-to-top button
│   ├── config/
│   │   └── siteConfig.js       # Central source of truth for company contact details & stats
│   ├── data/
│   │   ├── faqs.js             # Categorized FAQs
│   │   ├── projects.js         # Showcase projects with demo indicators
│   │   ├── services.js         # Comprehensive service scopes & workflows
│   │   └── testimonials.js     # Client reviews & ratings
│   ├── hooks/
│   │   ├── useDocumentTitle.js # Dynamic SEO page titles
│   │   └── useScrollPosition.js# Scroll monitor for sticky navbar
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Projects.jsx
│   │   ├── ServiceDetails.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   ├── utils/
│   │   └── whatsapp.js         # wa.me URL generator with contextual message templates
│   ├── App.jsx                 # Lazy-loaded route architecture
│   ├── index.css               # Tailwind v4 theme tokens & architectural styles
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ How to Update Business Information

All contact details, phone numbers, WhatsApp numbers, email addresses, office locations, and trust metrics are centralized in a single file:

```javascript
// src/config/siteConfig.js
export const siteConfig = {
  brand: {
    name: "Housr 360 Builders",
    ...
  },
  whatsapp: {
    number: "919876543210", // International format without '+'
    displayNumber: "+91 98765 43210",
  },
  contact: {
    phonePrimary: "+91 98765 43210",
    email: "contact@housr360builders.com",
    address: { ... },
    businessHours: { ... }
  },
  stats: [
    { label: "Completed Projects", value: "50+", ... },
    ...
  ]
};
```

---

## 🚀 Running the Project Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment to Vercel

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset will automatically detect **Vite**.
5. Build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. For client-side routing on Vercel, add a `vercel.json` if needed:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```
7. Click **Deploy**. Your site will be live on an SSL-secured URL with fast CDN delivery worldwide!
