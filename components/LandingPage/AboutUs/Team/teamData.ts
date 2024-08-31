// data/teamData.ts

interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Lekan Oganla",
    title: "Head of Creative",
    imageUrl: "/images/team-1.svg",
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
  },
  {
    name: "Lekan Adejayan",
    title: "Head of Digital",
    imageUrl: "/images/team-2.svg",
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
  },
  {
    name: "Tayewo Osiyemi",
    title: "Account Manager",
    imageUrl: "/images/team-3.svg",
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
  },
  {
    name: "Lateepha Abdulsalam",
    title: "Content Lead",
    imageUrl: "/images/team-4.svg",
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
  },
];

export default teamMembers;
export type { TeamMember };
