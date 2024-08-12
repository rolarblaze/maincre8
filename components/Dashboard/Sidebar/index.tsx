"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Tab } from "./types";
import { useAppSelector } from "@/redux/store";
import UserImage from "@/public/images/user-image.svg";
import ArrowUp from "@/public/icons/arrow-up.svg";
import { LogoBlue, Logout } from "@/public/icons";
import {
  BulbIcon,
  CalendarIcon,
  HistoryIcon,
  NotificationsIcon,
  OverviewIcon,
  ServicesIcon,
  SettingsIcon,
  SupportIcon,
} from "@/public/svgs";

type SidebarProps = {
  setActiveTab: (tab: Tab) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setActiveTab }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { profile } = useAppSelector((state) => state.auth);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    router.push("/login");
  };

  const toggleSupport = () => {
    setIsSupportOpen(!isSupportOpen);
  };

  return (
    <aside className="max-w-[272px] w-full h-full flex flex-col justify-between px-2 bg-white border-r border-grey200">
      <section className="flex flex-col gap-3 ">
        <Link href="/">
          <LogoBlue className="w-full h-full px-2 py-6" />
        </Link>

        <nav className="flex flex-col gap-1  pb-4 border-b border-grey200">
          <Link href="/dashboard">
            <div
              className={`flex items-center gap-3 py-3 px-4 ${
                isActive("/dashboard")
                  ? "bg-primary50 rounded-sm text-primary600 "
                  : ""
              }`}
              onClick={() => setActiveTab("Overview")}
            >
              <OverviewIcon
                fillColor={isActive("/dashboard") ? "#136AD0" : "#667185"}
              />
              <span
                className={`text-sm ${
                  isActive("/dashboard")
                    ? "text-primary600 text-medium"
                    : "grey700"
                }`}
              >
                Overview
              </span>
            </div>
          </Link>

          <Link href="/dashboard/services">
            <div
              className={`flex items-center gap-3 py-3 px-4 ${
                isActive("/dashboard/services")
                  ? "bg-primary50 rounded-sm text-primary600"
                  : ""
              }`}
              onClick={() => setActiveTab("Services")}
            >
              <ServicesIcon
                fillColor={
                  isActive("/dashboard/services") ? "#136AD0" : "#667185"
                }
              />
              <span
                className={`text-sm ${
                  isActive("/dashboard/services")
                    ? "text-primary600 text-medium"
                    : "grey700"
                }`}
              >
                Services
              </span>
            </div>
          </Link>

          {/* CUSTOM RECOMMENDATIONS */}
          <Link href="/dashboard/custom-recommendation">
            <div
              className={`flex items-center gap-3 py-3 px-4 ${
                isActive("/dashboard/custom-recommendation")
                  ? "bg-primary50 rounded-sm text-primary600"
                  : ""
              }`}
              onClick={() => setActiveTab("Services")}
            >
              <BulbIcon
                fillColor={
                  isActive("/dashboard/custom-recommendation") ? "#136AD0" : "#667185"
                }
              />
              <span
                className={`text-sm ${
                  isActive("/dashboard/custom-recommendation")
                    ? "text-primary600 text-medium"
                    : "grey700"
                }`}
              >
                Custom Recommendation
              </span>
            </div>
          </Link>

          <Link href="/dashboard/calendar">
            <div
              className={`flex items-center gap-3 py-3 px-4 ${
                isActive("/dashboard/calendar")
                  ? "bg-primary50 rounded-sm text-primary600"
                  : ""
              }`}
              onClick={() => setActiveTab("Calendar")}
            >
              <CalendarIcon
                fillColor={
                  isActive("/dashboard/calendar") ? "#136AD0" : "#667185"
                }
              />
              <span
                className={`text-sm ${
                  isActive("/dashboard/calendar")
                    ? "text-primary600 text-medium"
                    : "grey700"
                }`}
              >
                Calendar
              </span>
            </div>
          </Link>

          <Link href="/dashboard/order-history">
            <div
              className={`flex items-center gap-3 py-3 px-4 ${
                isActive("/dashboard/order-history")
                  ? "bg-primary50 rounded-sm text-primary600"
                  : ""
              }`}
              onClick={() => setActiveTab("History")}
            >
              <HistoryIcon
                fillColor={
                  isActive("/dashboard/order-history") ? "#136AD0" : "#667185"
                }
              />
              <span
                className={`text-sm ${
                  isActive("/dashboard/order-history")
                    ? "text-primary600 text-medium"
                    : "grey700"
                }`}
              >
                History
              </span>
            </div>
          </Link>

          <div onClick={toggleSupport}>
            <div
              className={`flex items-center justify-between gap-3 py-3 px-4 cursor-pointer ${
                isActive("/dashboard/support") ? " text-primary600" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <SupportIcon
                  fillColor={
                    isActive("/dashboard/support") ? "#136AD0" : "#667185"
                  }
                />
                <span
                  className={`text-sm ${
                    isActive("/dashboard/support")
                      ? "text-primary600 text-medium"
                      : "grey700"
                  }`}
                >
                  Support
                </span>
              </div>
              <div
                className={`transition-transform duration-300 ${
                  isSupportOpen ? "rotate-180" : ""
                }`}
              >
                <ArrowUp />
              </div>
            </div>
            {isSupportOpen && (
              <div className="flex flex-col gap-2 fadeInDown">
                <Link
                  href="/dashboard/support"
                  onClick={() => setActiveTab("Support")}
                >
                  <div
                    className={`py-2 pl-4 pr-2 text-sm rounded-sm cursor-pointer ${
                      isActive("/dashboard/support")
                        ? "bg-primary50 text-grey900"
                        : "text-grey700"
                    }`}
                  >
                    Support Info
                  </div>
                </Link>
                <div className="flex items-center justify-between py-2 pl-4 pr-2 text-sm rounded-sm cursor-pointer text-grey700">
                  Support Inbox
                  <span className="text-white bg-primary500 px-1 py-0.5 rounded-full text-xs">
                    Coming soon
                  </span>
                </div>
              </div>
            )}
          </div>
        </nav>
      </section>

      <section className="flex flex-col gap-3 ">
        <div className="flex flex-col gap-1 pb-3">
          <Link href="/dashboard/notifications">
            <div
              className={`flex items-center gap-3 py-3 px-4 ${
                isActive("/dashboard/notifications")
                  ? "bg-primary50 rounded-sm text-primary600"
                  : ""
              }`}
              onClick={() => setActiveTab("Notifications")}
            >
              <NotificationsIcon
                fillColor={
                  isActive("/dashboard/notifications") ? "#136AD0" : "#667185"
                }
              />
              <span
                className={`text-sm ${
                  isActive("/dashboard/notifications")
                    ? "text-primary600 text-medium"
                    : "grey700"
                }`}
              >
                Notifications
              </span>
            </div>
          </Link>

          <Link href="/dashboard/settings">
            <div
              className={`flex items-center gap-3 py-3 px-4 ${
                isActive("/dashboard/settings")
                  ? "bg-primary50 rounded-sm text-primary600"
                  : ""
              }`}
              onClick={() => setActiveTab("Settings")}
            >
              <SettingsIcon
                fillColor={
                  isActive("/dashboard/settings") ? "#136AD0" : "#667185"
                }
              />
              <span
                className={`text-sm ${
                  isActive("/dashboard/settings")
                    ? "text-primary600 text-medium"
                    : "grey700"
                }`}
              >
                Settings
              </span>
            </div>
          </Link>
        </div>
      </section>

      <div className="flex items-center gap-5 py-5 px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full relative">
            {/* <Image
              src={UserImage}
              alt="User Image"
              objectFit="cover"
              className="rounded-full"
            /> */}
            <UserImage />
          </div>
          <div>
            <p className="text-grey900 text-sm font-bold">
              {" "}
              {profile.user.is_business
                ? profile?.business_name
                : `${profile?.first_name} ${profile?.last_name}`}
            </p>
            <p className="text-grey600 text-sm">
              {profile?.user?.profile?.user_email || " "}
            </p>
          </div>
        </div>

        {/* will implement later */}
        <div onClick={handleLogout} className="cursor-pointer">
          <Logout />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
