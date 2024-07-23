"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/public/icons/arrow-drawing.svg";
import TwitterIcon from "@/public/icons/team-x.svg";
import LinkedInIcon from "@/public/icons/team-linkedin.svg";
import FacebookIcon from "@/public/icons/team-fb.svg";
import teamMembers from "./teamData";

const Team = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 md:text-5xl">
            Team{" "}
            <span className="text-2xl text-blue-600 md:text-5xl">
              SellCrea8
            </span>
          </h2>
          <div className="self-start">
            <Arrow />
          </div>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="flex flex-nowrap gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-72 flex-shrink-0 bg-white flex flex-col gap-2 text-left"
              >
                <div className="relative h-[200px] w-[280px] mx-auto">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>

                <h3 className="text-lg font-semibold text-grey900">
                  {member.name}
                </h3>
                <p className="text-sm text-grey900">{member.title}</p>
                <div className="flex items-center gap-3">
                  {member.twitter && (
                    <Link href={member.twitter}>
                      <div className="cursor-pointer">
                        <TwitterIcon />
                      </div>
                    </Link>
                  )}
                  {member.linkedin && (
                    <Link href={member.linkedin}>
                      <div className="cursor-pointer">
                        <LinkedInIcon />
                      </div>
                    </Link>
                  )}
                  {member.facebook && (
                    <Link href={member.facebook}>
                      <div className="cursor-pointer">
                        <FacebookIcon />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
