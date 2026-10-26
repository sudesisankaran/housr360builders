import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import ScrollToTop from './components/layout/ScrollToTop';
import PageLoader from './components/layout/PageLoader';

// Lazy-loaded route components for high performance and code-splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0A0713] text-white selection:bg-[#A855F7]/30 selection:text-[#DDD6FE]">
        {/* Scroll restoration & back to top */}
        <ScrollToTop />

        {/* Global Announcement Bar */}
        <AnnouncementBar />

        {/* Sticky Navbar */}
        <Navbar />

        {/* Main Content Area with Suspense boundary */}
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* 1. Home */}
              <Route path="/" element={<Home />} />

              {/* 2. About Us */}
              <Route path="/about" element={<About />} />

              {/* 3. Services Overview */}
              <Route path="/services" element={<Services />} />

              {/* 4 to 9. Individual Service Routes */}
              <Route 
                path="/services/house-construction" 
                element={<ServiceDetails explicitSlug="house-construction" />} 
              />
              <Route 
                path="/services/2d-3d-design" 
                element={<ServiceDetails explicitSlug="2d-3d-design" />} 
              />
              <Route 
                path="/services/interior-design" 
                element={<ServiceDetails explicitSlug="interior-design" />} 
              />
              <Route 
                path="/services/renovation" 
                element={<ServiceDetails explicitSlug="renovation" />} 
              />
              <Route 
                path="/services/commercial-buildings" 
                element={<ServiceDetails explicitSlug="commercial-buildings" />} 
              />
              <Route 
                path="/services/vastu-plans" 
                element={<ServiceDetails explicitSlug="vastu-plans" />} 
              />

              {/* Dynamic Service Route */}
              <Route path="/services/:slug" element={<ServiceDetails />} />

              {/* 10. Projects Gallery */}
              <Route path="/projects" element={<Projects />} />

              {/* 11. Project Details */}
              <Route path="/projects/:slug" element={<ProjectDetails />} />

              {/* 12. Testimonials */}
              <Route path="/testimonials" element={<Testimonials />} />

              {/* 13. Contact Us */}
              <Route path="/contact" element={<Contact />} />

              {/* 14. Privacy Policy */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              {/* 15. 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Floating WhatsApp Contact Action */}
        <FloatingWhatsApp />

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
