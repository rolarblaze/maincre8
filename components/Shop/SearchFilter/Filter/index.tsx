"use client";
import { useState } from "react";
import { ArrowDown } from "@/public/icons";
import { filters, filterPopUp } from "./constants";

const FilterComp = () => {
  const [selectedFilters, setSelectedFilters] = useState<String[]>([]);

  const handleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      let filters = selectedFilters.filter((el) => el !== filter);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([filter]);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mx-auto">
      <span>Filter By:</span>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {filters.map((filter, idx) => (
          <div className="relative"  key={`filter-${idx}`}>
            <button
             
              onClick={() => handleFilter(filter)}
              className={`flex justify-center items-center gap-2 py-1.5 px-2 pl-3 text-grey500 font-medium text-sm border-2 border-ash rounded-lg`}
            >
              <span>{filter}</span>
              <ArrowDown className={`pt-px *:fill-grey500`} />
            </button>

            {selectedFilters[0] === filter && (
              <div className="absolute top-full z-20 left-0 bg-white w-max max-w-[24rem] shadow-lg rounded-lg p-10">
                {filterPopUp.map(({ id, filter, nav }) => {
                  if (filter === selectedFilters[0]) {
                    return (
                      <div key={id} className="space-y-5 text-grey600">
                        {nav.map((pop, popIdx) => (
                          <p key={`pop-${popIdx}`} className="cursor-pointer">{pop}</p>
                        ))}
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FilterComp;