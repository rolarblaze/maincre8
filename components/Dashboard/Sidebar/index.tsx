"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { signOut } from "@/redux/auth/index";
import ArrowUp from "@/public/icons/arrow-up.svg";
import { Logout } from "@/public/icons";
import {
  BulbIcon,
  HistoryIcon,
  LogoIcon,
  OverviewIcon,
  ServicesIcon,
  SettingsIcon,
  SupportIcon,
} from "@/public/svgs";
import MyServicesIcon from "@/public/svgs/MyServicesIcon";
import assetLibrary from "@/library";
import { Tab } from "./types";

type SidebarProps = {
  setActiveTab: (tab: Tab) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ setActiveTab }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, profile } = useAppSelector((state) => state.auth);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    // Dispatch the signOut action
    dispatch(signOut());
    // Redirect to the login page
    router.push("/login");
  };

  const toggleSupport = () => {
    setIsSupportOpen(!isSupportOpen);
  };

  const checkProfileLoaded = useCallback(() => {
    if (profile && !isLoading) {
      setIsProfileLoaded(true);
    }
  }, [profile, isLoading]);

  useEffect(() => {
    checkProfileLoaded();
  }, [checkProfileLoaded]);

  return (
    <aside
      className={`hidden h-full w-full max-w-[17rem] flex-col justify-between overflow-y-auto border-r border-grey200 bg-white px-2 font-manrope md:flex`}
    >
      {/* Upper section */}
      <section className="flex flex-col gap-3">
        {/* LOGO */}
        <Link href={"/"} className={`my-10 ml-4 flex items-center gap-2.5`}>
          <LogoIcon />
          <span className="font-schibsted text-2xl font-bold text-black">
            SellCrea8
          </span>
        </Link>

        <nav className="flex flex-col gap-1 border-b border-grey200 pb-4">
          {/* OVERVIEW */}
          <Link href="/dashboard">
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

          {/* SERVICES */}
          <Link href="/dashboard/services">
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

          {/* MY SERVICES */}
          <Link href="/dashboard/my-services">
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
          <Link href="/dashboard/custom-recommendation">
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

          {/* CALNEDER */}
          {/* <Link href="/dashboard/calendar">
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
          </Link> */}

          {/* HISTORY */}
          <Link href="/dashboard/order-history">
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

          {/* SUPPORT */}
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
                  onClick={() => setActiveTab("Support")}
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
                <div className="flex cursor-pointer items-center justify-between rounded-sm py-2 pl-4 pr-2 text-sm text-grey700">
                  Support Inbox
                  <span className="rounded-full bg-primary500 px-1 py-0.5 text-xs text-white">
                    Coming soon
                  </span>
                </div>
              </div>
            )}
          </div>
        </nav>
      </section>

      {/* Notification and settings */}
      <div className="mt-auto flex flex-col gap-1 pb-3">
        {/* <Link href="/dashboard/notifications">
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
          </Link> */}

        {/* COMPLETE PROFILE */}
        <div className="justify mb-2 mt-4 flex">
          <div className="h-full w-3 rounded-l bg-secondary-500" />

          <div className="pt- rounded-r border border-l-0 border-grey200 p-5">
            <h3 className="mb-1 text-base font-semibold">Welcome</h3>
            <p className="mb-4 text-sm leading-5">
              Please provide a few more details to tailor the experience to your
              needs and preferences.
            </p>
            <button className="rounded-lg border-[1.5px] border-primary600 px-4 py-2 text-sm font-semibold text-primary600">
              Complete profile
            </button>
          </div>
        </div>

        {/* SETTINGS */}
        <Link href="/dashboard/settings">
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

      {/* PROFILE */}
      <div className="flex items-center gap-5 py-5 pl-3">
        <div className="flex items-center gap-3">
          {/* Profile Avatar */}
          <div className="relative h-10 w-10 rounded-full">
            <Image
              src={assetLibrary.defaultAvatar}
              alt="User Image"
              objectFit="cover"
              width={40}
              height={40}
              className="h-full w-full rounded-full"
            />
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 p-0.5">
              {" "}
            </div>
          </div>
          {/* <div className="w-10 h-10 rounded-full relative">
            <UserImage />
          </div> */}
          {isLoading || !isProfileLoaded ? (
            <p>Loading...</p>
          ) : (
            <div>
              <p className="text-sm font-bold text-grey900">
                {" "}
                {profile?.user?.is_business
                  ? profile?.business_name
                  : `${profile?.first_name} ${profile?.last_name}`}
              </p>
              <p className="text-sm text-grey600">
                {profile?.user?.profile?.user_email || " "}
              </p>
            </div>
          )}
        </div>

        <div onClick={handleLogout} className="h-fit cursor-pointer">
          <Logout />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
