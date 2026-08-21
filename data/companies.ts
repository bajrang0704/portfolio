export type Company = {
  name: string;
  // Drop the logo file in public/logos/ and set the path here, e.g.
  // "/logos/syncai.png". Leave unset to show the name as text until
  // the logo is ready — CompaniesMarquee falls back automatically.
  logo?: string;
};

export const companies: Company[] = [
  { name: "SyncAI", logo: "/logos/syncai.jpg" },
  { name: "Resonira Technologies", logo: "/logos/Resonira.png" },
  { name: "Web3Today", logo: "/logos/web3today.jpg" },
  { name: "Cognito Advisory", logo: "/logos/CognitoAdvisory.png" },
  { name: "Cognito Energy", logo: "/logos/CognitoEnergy.png" },
  { name: "Houspire", logo: "/logos/Houspire.png" },
  { name: "Capabl", logo: "/logos/cabapl.jpg" }
];
