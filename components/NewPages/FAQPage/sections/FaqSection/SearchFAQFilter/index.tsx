import InputField from "@/components/Forms/InputField";
import { SearchIcon } from "@/public/icons";
import React from "react";

function SearchFAQFilter() {
  return (
    <div>
      <InputField
        type="text"
        icon={<SearchIcon className="size-5" />}
        classNames="flex-row-reverse py-3.5 placeholder:text-sm text-grey900 border-[#D0D5DD]"
        placeholder="Search for services"
      />
    </div>
  );
}

export default SearchFAQFilter;
