"use client";
import UserImage from "@/public/images/user-image.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Tab } from "./types";
import { Logo, Logout } from "@/public/icons";
import { CalendarIcon, HistoryIcon, NotificationsIcon, OverviewIcon, ServicesIcon, SettingsIcon, SupportIcon } from "@/public/svgs";

type SidebarProps = {
  setActiveTab: (tab: Tab) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setActiveTab }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <aside className="max-w-[272px] w-full h-screen flex flex-col justify-between px-2 bg-white border-r border-grey200">
      <section className="flex flex-col gap-3 ">
        <Link href="/">
          <Logo className="w-full h-full px-2 py-6" />
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

          <Link href="/dashboard/support">
            <div
              className={`flex items-center gap-3 py-3 px-4 ${
                isActive("/dashboard/support")
                  ? "bg-primary50 rounded-sm text-primary600"
                  : ""
              }`}
              onClick={() => setActiveTab("Support")}
            >
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
          </Link>
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
            <p className="text-grey900 text-sm font-bold">Peace Ojo</p>
            <p className="text-grey600 text-sm">peaceojo@smg.com</p>
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
