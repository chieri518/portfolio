import asahi from "../assets/cad/asahi.jpg";
import jinro from "../assets/cad/jinro.jpg";
import sapporo from "../assets/cad/sapporo.JPG";

export const cadHero = {
  eyebrow: "Making · CAD · 3D printing",
  title: "Designed & Printed",
  tagline:
    "Things I've designed in CAD and brought to life on my 3D printer — with links to the models I've shared.",
};

export const cadPrints = [
  {
    id: "coasters",
    title: "Coasters",
    status: "",
    blurb:
      "My first set of original CAD designs — a family of coasters I modeled from scratch and printed at home.",
    tags: ["CAD", "Original design"],
    image: null,
    link: null,
    variants: [
      {
        name: "Asahi Coaster",
        note: "",
        image: asahi,
        link: {
          url: "https://makerworld.com/en/models/3021036-asahi-beer-coaster#profileId-3394182",
          label: "View on MakerWorld →",
        },
      },
      {
        name: "Jinro Coaster",
        note: "",
        image: jinro,
        link: null,
      },
      {
        name: "Sapporo Coaster",
        note: "",
        image: sapporo,
        link: null,
      },
    ],
  },
];

export const cadWorkflow = {
  cad: "Fusion 360",
  printer: "Bambu Lab A1 (with AMS Lite)",
  note: "Design → slice → print, all in-house.",
};

export const cadProfile = {
  url: "https://makerworld.com/en/@cherry.zip",
  label: "See all my models →",
  platform: "MakerWorld",
};
