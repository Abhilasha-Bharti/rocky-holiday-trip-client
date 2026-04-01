export const navLinks = [
  { name: "Home", path: "/" },

   {
    name: "Destinations",
    type: "dropdown",
    items: [
      { name: "Kashmir", path: "destinations/kashmir" },
      { name: "Ladakh", path: "destinations/ladakh" },
    ],
  },

  {
    name: "Experiences",
    type: "dropdown",
    items: [
      { name: "Trekking", path: "/trekking" },
      { name: "Bike Trips", path: "/bike-trips" },
      { name: "Camping", path: "/camping" },
      { name: "Snow Adventures", path: "/snow" },
      { name: "River Rafting", path: "/rafting" },
    ],
  },

  { name: "Packages", path: "/packages" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];