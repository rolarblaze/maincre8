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
        title: "Group CEO",
        imageUrl: "/images/team-1.svg",
        twitter: "#",
        linkedin: "#",
        facebook: "#",
    },
    {
        name: "Lekan Adejayan",
        title: "Group CIO",
        imageUrl: "/images/team-2.svg",
        twitter: "#",
        linkedin: "#",
        facebook: "#",
    },
    {
        name: "Tayewo Osiyemi",
        title: "Country Director",
        imageUrl: "/images/team-3.svg",
        twitter: "#",
        linkedin: "#",
        facebook: "#",
    },
    {
        name: "Lateepha Abdulsalam",
        title: "Country Manager",
        imageUrl: "/images/team-4.svg",
        twitter: "#",
        linkedin: "#",
        facebook: "#",
    },
];

export default teamMembers;
export type { TeamMember };
