import FilterComp from "./Filter";
import SearchComp from "./Search";

const SearchFilterSection = () => {
  return (
    <div className="space-y-9 -mt-10 pb-10">
      <SearchComp />
      <FilterComp />
    </div>
  );
};
export default SearchFilterSection;