export const navLinks = [
  { name: "Home", path: "/" },

  {
    name: "Destinations",
    type: "nested",
    items: [
      {
        name: "Kashmir",
        children: [
          { name: "Srinagar", path: "/kashmir/srinagar" },
          { name: "Gulmarg", path: "/kashmir/gulmarg" },
          { name: "Pahalgam", path: "/kashmir/pahalgam" },
          { name: "Sonmarg", path: "/kashmir/sonmarg" },
        ],
      },
      {
        name: "Ladakh",
        children: [
          { name: "Leh", path: "/ladakh/leh" },
          { name: "Nubra Valley", path: "/ladakh/nubra" },
          { name: "Pangong Lake", path: "/ladakh/pangong" },
          { name: "Tso Moriri", path: "/ladakh/tso-moriri" },
        ],
      },
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