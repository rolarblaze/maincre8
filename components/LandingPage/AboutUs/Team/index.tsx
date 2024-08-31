"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import teamMembers from "./teamData";

import { TeamFacebook, TeamLinkedIn, TwitterIcon } from "@/public/icons";

const Team = () => {
  return (
    <section className="w-full py-10 md:py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 md:text-5xl">
            Team{" "}
            <span className="text-2xl text-blue-600 md:text-5xl">
              SellCrea8
            </span>
          </h2>
          <div className="self-start">
            {/* <ArrowDrawing /> */}
            {/* <Image
              alt={"arrow drawing"}
              src={assetLibrary.arrowDrawing}
              width={76}
              height={76}
              quality={100}
              className="w-full h-full object-contain"
            /> */}
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
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* <h3 className="text-lg font-semibold text-grey900">
                  {member.name}
                </h3> */}
                <p className="text-sm text-grey900">{member.title}</p>
                <div className="flex items-center gap-3">
                  {member.twitter && (
                    <a href={member.twitter} target="_blank">
                      <div className="cursor-pointer">
                        <TwitterIcon />
                      </div>
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank">
                      <div className="cursor-pointer">
                        <TeamLinkedIn />
                      </div>
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} target="_blank">
                      <div className="cursor-pointer">
                        <TeamFacebook />
                      </div>
                    </a>
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
