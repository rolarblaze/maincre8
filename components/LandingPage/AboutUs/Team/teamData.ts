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
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Lekan Adejayan",
    title: "Head of Digital",
    imageUrl: "/images/team-2.svg",
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Tayewo Osiyemi",
    title: "Account Manager",
    imageUrl: "/images/team-3.svg",
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
  {
    name: "Lateepha Abdulsalam",
    title: "Content Lead",
    imageUrl: "/images/team-4.svg",
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
];

export default teamMembers;
export type { TeamMember };
