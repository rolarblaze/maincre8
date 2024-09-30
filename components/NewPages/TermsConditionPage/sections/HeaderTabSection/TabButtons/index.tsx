"use client";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setOrToggleActiveTab } from "@/redux/legal";

const TabButtons = () => {
  const dispatch = useDispatch();

  const { activeTab, tabs } = useSelector((state: RootState) => state.tabs);

  const handleTabClick = (id: string) => {
    dispatch(setOrToggleActiveTab(id));
  };

  return (
    <div className="flex gap-2 rounded-full bg-primary50 p-1">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => handleTabClick(id)}
          className={`relative rounded-full px-6 py-2.5 transition-all delay-100 duration-300 ${activeTab === id ? "font-medium text-white" : "text-black"}`}
        >
          {activeTab === id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-primary500"
              style={{ borderRadius: 9999 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </button>
      ))}
    </div>
  );
};
export default TabButtons;
