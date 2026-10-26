/**
 * Housr 360 Builders - Master Site Configuration
 * All contact information, social links, and business statistics are centralized here.
 * Modify these values to update them across the entire application.
 */

export const siteConfig = {
  brand: {
    name: "Housr 360 Builders",
    shortName: "Housr 360",
    tagline: "Building Dreams. Creating Timeless Spaces.",
    subTagline: "Turnkey luxury house construction, contemporary architectural 2D/3D elevations, bespoke interior design, and Vastu-compliant spaces.",
    establishedYear: 2009,
  },

  // WhatsApp Configuration (International format without '+')
  whatsapp: {
    number: "917402244144", 
    displayNumber: "+91 74022 44144",
    defaultMessage: "Hello Housr 360 Builders, I would like to enquire about your luxury construction and architectural services.",
  },

  // Contact Information
  contact: {
    phonePrimary: "+91 74022 44144",
    phoneSecondary: "+91 96005 69378",
    email: "contact@housr360builders.com",
    supportEmail: "projects@housr360builders.com",
    address: {
      line1: "PR72+4Q5, Hosur - Thally Rd",
      line2: "SBM Colony, Anthivadi",
      city: "Hosur",
      state: "Tamil Nadu",
      pincode: "635109",
      country: "India",
      googleMapsUrl: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiwiquNmNSXAxUAAAAAHQAAAAAQBQ..i&rlz=1C1GCEA_enRO1062IN1206&udm&fvr=1&pvq=Cg0vZy8xMXpic3hyMjUzIhIKDDM2MCBidWlsZGVycxACGAM&lqi=ChJob3N1ciAzNjAgYnVpbGRlcnNIo5Gujqu-gIAIWiIQARACGAAYAiISaG9zdXIgMzYwIGJ1aWxkZXJzKgQIAxABkgEUY29uc3RydWN0aW9uX2NvbXBhbnmaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjFHZVdOc1drOVNibHB6Vm10b2VtUllWbmRYYkU1YVRXdzVjbVF5WXhBQvoBBAgAECs&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bae7100332dca89:0xab264eeabb3fc609",
    },
    businessHours: {
      weekdays: "Monday – Saturday: 9:00 AM – 7:30 PM",
      sunday: "Sunday: By Prior Appointment",
    },
  },

  // Service Locations
  serviceLocations: [
    "Hosur",
    "Bengaluru",
  ],

  // Verified Business Metrics (Editable factual metrics)
  stats: [
    { label: "Completed Projects", value: "250+", description: "Bespoke residences & commercial spaces" },
    { label: "Years of Excellence", value: "15+", description: "Continuous architectural mastery" },
    { label: "Client Satisfaction", value: "99%", description: "Verified homeowner satisfaction rate" },
    { label: "Active Project Sites", value: "28+", description: "Supervised with on-site engineering" },
  ],

  // Social Media Channels
  socials: {
    instagram: "https://www.instagram.com/hosur360builders?vrfl=MXNpZzdjdXUxd3ZubA==",
    facebook: "https://www.facebook.com/share/1Cm8WNaJC8/",
    youtube: "https://youtube.com/@hosur360builders?si=ODwnbiRQSpF-xi8B",
    google: "https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiwiquNmNSXAxUAAAAAHQAAAAAQBQ..i&rlz=1C1GCEA_enRO1062IN1206&udm&fvr=1&pvq=Cg0vZy8xMXpic3hyMjUzIhIKDDM2MCBidWlsZGVycxACGAM&lqi=ChJob3N1ciAzNjAgYnVpbGRlcnNIo5Gujqu-gIAIWiIQARACGAAYAiISaG9zdXIgMzYwIGJ1aWxkZXJzKgQIAxABkgEUY29uc3RydWN0aW9uX2NvbXBhbnmaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjFHZVdOc1drOVNibHB6Vm10b2VtUllWbmRYYkU1YVRXdzVjbVF5WXhBQvoBBAgAECs&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3bae7100332dca89:0xab264eeabb3fc609",
    linkedin: "https://linkedin.com/company/housr360builders",
    pinterest: "https://pinterest.com/housr360builders",
  },

  // Navigation Links
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "House Construction", path: "/services/house-construction" },
        { name: "2D Plans & 3D Elevation", path: "/services/2d-3d-design" },
        { name: "Interior Design", path: "/services/interior-design" },
        { name: "Renovation", path: "/services/renovation" },
        { name: "Commercial Buildings", path: "/services/commercial-buildings" },
        { name: "Vastu Plans", path: "/services/vastu-plans" },
      ]
    },
    { name: "Projects", path: "/projects" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ],

  // Announcement Bar Banner
  announcement: {
    enabled: true,
    message: "Now scheduling architectural site visits & initial consultations for upcoming luxury residences.",
    ctaText: "Schedule Consultation",
    ctaLink: "/contact",
  },
};
