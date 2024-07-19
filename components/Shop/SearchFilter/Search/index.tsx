import { SearchIcon } from "@/public/icons";
import { Button, InputField } from "@/components";

const SearchComp = () => {
  return (
    <div className="max-w-[33.375rem]  mx-auto flex justify-center items-center gap-4.5">
      <InputField
        type="text"
        icon={<SearchIcon className="size-5" />}
        classNames="flex-row-reverse py-3.5 placeholder:text-sm text-grey900 border-[#D0D5DD]"
        placeholder="Search for services"
      />
      <Button
        label="Search"
        classNames="max-w-[8.8125rem] rounded-md py-3.5 bg-transparent border border-primary500 text-primary500"
      />
    </div>
  );
};
export default SearchComp;