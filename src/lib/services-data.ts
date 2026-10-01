// LEGACY / UNUSED — manufacturing-era content (CNC machining, sheet metal,
// etc.) from the project's incorrect initial positioning. Not imported
// anywhere. Do not reuse as current Coonex content.
export interface ServiceItem {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  benefits: string[];
}

// TODO: REAL CONTENT REQUIRED — confirm Coonex's actual service lineup,
// capabilities, and benefit copy before launch. Draft content below is
// generic, structural placeholder text for layout purposes only.
export const SERVICES: ServiceItem[] = [
  {
    id: "cnc-machining",
    name: "CNC Machining",
    eyebrow: "Precision machining",
    description:
      "Coonex sources CNC milling and turning from vetted manufacturing partners, for prototypes through production volumes in metals and plastics.",
    benefits: [
      "Milling and turning",
      "Metals and engineering plastics",
      "Prototype through production volume",
      "Specs reviewed before quoting",
    ],
  },
  {
    id: "sheet-metal",
    name: "Sheet Metal Fabrication",
    eyebrow: "Sheet metal",
    description:
      "Laser cutting, forming, and welding for brackets, enclosures, and structural parts, sourced from partners across the Coonex network.",
    benefits: [
      "Laser cutting and forming",
      "Welding and finishing",
      "Enclosures and structural parts",
      "Design-for-manufacturability feedback",
    ],
  },
  {
    id: "3d-printing",
    name: "3D Printing",
    eyebrow: "Additive manufacturing",
    description:
      "Rapid prototypes and low-volume production parts across a range of 3D printing processes and materials.",
    benefits: [
      "Multiple print processes and materials",
      "Rapid prototyping turnaround",
      "Low-volume production runs",
      "Material selection support",
    ],
  },
  {
    id: "injection-molding",
    name: "Injection Molding",
    eyebrow: "Injection molding",
    description:
      "Tooling and molded production parts for medium- to high-volume plastic components.",
    benefits: [
      "Tooling sourced and managed",
      "Medium- to high-volume runs",
      "Engineering-grade plastics",
      "Mold flow and design feedback",
    ],
  },
  {
    id: "custom-manufacturing",
    name: "Custom Manufacturing",
    eyebrow: "Custom projects",
    description:
      "For parts and assemblies that fall outside standard processes, Coonex works with partners on custom manufacturing requirements.",
    benefits: [
      "Custom process matching",
      "Assemblies and multi-part projects",
      "Engineering consultation",
      "Scoped case by case",
    ],
  },
];
