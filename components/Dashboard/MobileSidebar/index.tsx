import React, { useState } from "react";
import Tab from "../Sidebar/types";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
import { CameraIcon, CancelIcon, LogoBlue, Logout } from "@/public/icons";
import {
  BulbIcon,
  CalendarIcon,
  HistoryIcon,
  MobileBlueLogo,
  NotificationsIcon,
  OverviewIcon,
  ServicesIcon,
  SettingsIcon,
  SupportIcon,
} from "@/public/svgs";
import Link from "next/link";
import UserImage from "@/public/images/user-image.svg";
import MyServicesIcon from "@/public/svgs/MyServicesIcon";
import ArrowUp from "@/public/icons/arrow-up.svg";
import Image from "next/image";
import assetLibrary from "@/library";
import NewLogo from "@/public/optimised/NewLogo";

type MobileSidebarProps = {
  setActiveTab: (tab: Tab) => void;
  onClick?: () => void;
};

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  setActiveTab,
  onClick,
}) => {
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
    <aside
      className={`fixed inset-x-0 top-0 z-50 box-border flex h-full w-[100vw] flex-col gap-7 overflow-y-auto overflow-x-hidden border-r border-grey200 bg-white px-6 py-8 md:hidden`}
    >
      {/* Logo section */}
      <section className="flex flex-col gap-14">
        {/* Mobile Logo */}
        <div className="flex w-full justify-between md:hidden">
          <Link href={"/"} className="">
            {/* <MobileBlueLogo /> */}
            <NewLogo />
          </Link>
          <button className="h-fit w-fit" onClick={onClick}>
            <CancelIcon />
          </button>
        </div>

        {/* Navigations */}
        <nav className="flex flex-col gap-1 border-b border-grey200 pb-6">
          <Link href="/dashboard" onClick={onClick}>
            <div
              className={`flex items-center gap-3 px-4 py-3 ${
                isActive("/dashboard")
                  ? "rounded-sm bg-primary50 text-primary600"
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
                    ? "text-medium text-primary600"
                    : "grey700"
                }`}
              >
                Overview
              </span>
            </div>
          </Link>

          <Link href="/dashboard/services" onClick={onClick}>
            <div
              className={`flex items-center gap-3 px-4 py-3 ${
                isActive("/dashboard/services")
                  ? "rounded-sm bg-primary50 text-primary600"
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
                    ? "text-medium text-primary600"
                    : "grey700"
                }`}
              >
                Services
              </span>
            </div>
          </Link>

          <Link href="/dashboard/my-services" onClick={onClick}>
            <div
              className={`flex items-center gap-3 px-4 py-3 ${
                isActive("/dashboard/my-services")
                  ? "rounded-sm bg-primary50 text-primary600"
                  : ""
              }`}
              onClick={() => setActiveTab("MyServices")}
            >
              <MyServicesIcon
                fillColor={
                  isActive("/dashboard/my-services") ? "#136AD0" : "#667185"
                }
              />
              <span
                className={`text-sm ${
                  isActive("/dashboard/my-services")
                    ? "text-medium text-primary600"
                    : "grey700"
                }`}
              >
                My Services
              </span>
            </div>
          </Link>

          {/* CUSTOM RECOMMENDATIONS */}
          <Link href="/dashboard/custom-recommendation" onClick={onClick}>
            <div
              className={`flex items-center gap-3 px-4 py-3 ${
                isActive("/dashboard/custom-recommendation")
                  ? "rounded-sm bg-primary50 text-primary600"
                  : ""
              }`}
              onClick={() => setActiveTab("Services")}
            >
              <BulbIcon
                fillColor={
                  isActive("/dashboard/my-services") ? "#136AD0" : "#667185"
                }
              />
              <span
                className={`text-sm ${
                  isActive("/dashboard/custom-recommendation")
                    ? "text-medium text-primary600"
                    : "grey700"
                }`}
              >
                Custom Recommendation
              </span>
            </div>
          </Link>

          {/* <Link href="/dashboard/calendar" onClick={onClick}>
            <div
              className={`flex items-center gap-3 px-4 py-3 ${
                isActive("/dashboard/calendar")
                  ? "rounded-sm bg-primary50 text-primary600"
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
                    ? "text-medium text-primary600"
                    : "grey700"
                }`}
              >
                Calendar
              </span>
            </div>
          </Link> */}

          <Link href="/dashboard/order-history" onClick={onClick}>
            <div
              className={`flex items-center gap-3 px-4 py-3 ${
                isActive("/dashboard/order-history")
                  ? "rounded-sm bg-primary50 text-primary600"
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
                    ? "text-medium text-primary600"
                    : "grey700"
                }`}
              >
                History
              </span>
            </div>
          </Link>

          <div onClick={toggleSupport}>
            <div
              className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-3 ${
                isActive("/dashboard/support") ? "text-primary600" : ""
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
                      ? "text-medium text-primary600"
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
              <div className="fadeInDown flex flex-col gap-2">
                <Link
                  href="/dashboard/support"
                  onClick={() => {
                    setActiveTab("Support");
                  }}
                >
                  <div
                    className={`cursor-pointer rounded-sm py-2 pl-4 pr-2 text-sm ${
                      isActive("/dashboard/support")
                        ? "bg-primary50 text-grey900"
                        : "text-grey700"
                    }`}
                  >
                    Support Info
                  </div>
                </Link>
                {/* <div className="flex cursor-pointer items-center justify-between rounded-sm py-2 pl-4 pr-2 text-sm text-grey700">
                  Support Inbox
                  <span className="rounded-full bg-primary500 px-1 py-0.5 text-xs text-white">
                    Coming soon
                  </span>
                  <span className="rounded-full bg-primary500 px-1 py-0.5 text-xs text-white">
                    Coming soon
                  </span>
                </div> */}
              </div>
            )}
          </div>
        </nav>
      </section>

      {/* Notification and Settings */}
      <section className="flex flex-col gap-3 pt-2">
        <div className="flex flex-col gap-1 pb-3">
          <Link href="/dashboard/notifications" onClick={onClick}>
            <div
              className={`flex items-center gap-3 px-4 py-3 ${
                isActive("/dashboard/notifications")
                  ? "rounded-sm bg-primary50 text-primary600"
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
                    ? "text-medium text-primary600"
                    : "grey700"
                }`}
              >
                Notifications
              </span>
            </div>
          </Link>

          <Link href="/dashboard/settings" onClick={onClick}>
            <div
              className={`flex items-center gap-3 px-4 py-3 ${
                isActive("/dashboard/settings")
                  ? "rounded-sm bg-primary50 text-primary600"
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
                    ? "text-medium text-primary600"
                    : "grey700"
                }`}
              >
                Settings
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Profile */}
      <div className="flex flex-wrap items-center gap-8 px-6 xs:max-md:max-w-72 xs:max-md:justify-between xs:max-md:gap-0 xs:max-md:px-0">
        <div className="flex items-center gap-3 xs:max-md:gap-2">
          {/* Profile Avatar */}
          <div className="relative h-14 w-14 rounded-full xs:max-md:size-10">
            <Image
              src={assetLibrary.defaultAvatar}
              alt="User Image"
              objectFit="cover"
              width={56}
              height={56}
              className="h-full w-full rounded-full"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 p-0.5">
              {" "}
            </div>
            {/* <UserImage /> */}
          </div>
          {/* Name, Email */}
          <div>
            <p className="text-sm font-bold text-grey900">
              {" "}
              {profile.user.is_business
                ? profile?.business_name
                : `${profile?.first_name} ${profile?.last_name}`}
            </p>
            <p className="text-sm text-grey600 xs:max-md:text-xs">
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

export default MobileSidebar;
