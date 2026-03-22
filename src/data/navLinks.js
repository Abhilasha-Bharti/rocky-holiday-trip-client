export const navLinks = [
  { name: "Home", path: "/" },
  { 
    name: "Destinations", 
    path: "/packages",
    // Nested structure for the dropdown
    subCategories: [
      {
        name: "Domestic",
        locations: [
          { name: "Leh Ladakh", path: "packages/destinations/leh-ladakh" },
          { name: "Himachal Pradesh", path: "packages/destinations/himachal" },
          { name: "Kashmir", path: "packages/destinations/kashmir" },
          { name: "Rajasthan", path: "packages/destinations/rajasthan" }
        ]
      },
      {
        name: "International",
        locations: [
          { name: "Dubai", path: "/destinations/dubai" },
          { name: "Thailand", path: "/destinations/thailand" },
          { name: "Bali", path: "/destinations/bali" }
        ]
      }
    ]
  },
  { 
    name: "Bike Trips", 
    path: "/bike-trips",
    // These match your specific requested labels
    subItems: [
      { name: "Ladakh 2026 Bike Trip Via Umling La", path: "/bike-trips/ladakh-2026" },
      { name: "Thailand", path: "/bike-trips/thailand" },
      { name: "Ladakh Bike Trip for 6 Days", path: "/bike-trips/ladakh-6-days" }
    ]
  },
  { name: "Luxury Tours", path: "/luxury-tours" },
  { name: "Corporate Bookings", path: "/corporate" },
  { name: "Contact Us", path: "/contact" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Luxury Tours", href: "/luxury" },
    { name: "Corporate Bookings", href: "/corporate" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ],
  bikeTrips: [
    { name: "Leh Ladakh Circuit", href: "/trips/leh" },
    { name: "Ladakh-Umling La Trip", href: "/trips/umling" },
  ],
  popularTrips: [
    { name: "Dubai", href: "/trips/dubai" },
    { name: "Ladakh SUV", href: "/trips/ladakh-suv" },
    { name: "Rajasthan", href: "/trips/rajasthan" },
    { name: "Thailand Grand Adventure", href: "/trips/thailand" },
  ],
  usefulLinks: [
    { name: "Cancellation Policy and T&Cs", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Trip Payments", href: "/payments" },
  ]
};

export const CONTACT_INFO = {
  address: "J-1 Sgarpur West New Delhi 110046",
  phones: ["+91 97790 60099", "+91 97793 20099"],
  email: "info@rockyholidaytrips.com",
};