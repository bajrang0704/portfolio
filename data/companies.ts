export type Company = {
  name: string;
  // Drop the logo file in public/logos/ and set the path here, e.g.
  // "/logos/syncai.png". Leave unset to show the name as text until
  // the logo is ready — CompaniesMarquee falls back automatically.
  logo?: string;
  // The company's website. When set, clicking the logo opens it in a
  // new tab. Leave unset to keep the logo non-clickable.
  url?: string;
};

export const companies: Company[] = [
  { name: "SyncAI", logo: "/logos/syncai.jpg", url: "https://www.syncai.company/" },
  { name: "Resonira Technologies", logo: "/logos/Resonira.png", url: "https://resonira.com/" },
  { name: "Web3Today", logo: "/logos/web3today.jpg", url: "https://www.web3today.io/" },
  { name: "Cognito Advisory", logo: "/logos/CognitoAdvisory.png", url: "https://cognitoadvisory.com/about/" },
  { name: "Cognito Energy", logo: "/logos/CognitoEnergy.png", url: "https://cognitoenergy.com/" },
  { name: "Houspire", logo: "/logos/Houspire.png", url: "https://houspire.ai/" },
  { name: "Capabl", logo: "/logos/capabl.jpg", url: "https://www.capabl.in/" },
];
