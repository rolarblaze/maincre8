const HomeBundleListLoadingState = () => {
  return [1, 2, 3, 4, 5].map((dummy) => {
    return (
      <div
        key={dummy}
        className={`group flex gap-4 size-fit h-full w-[20%] cursor-pointer flex-col justify-between rounded-2xl shimmer border border-slate-100 px-2 pb-2 pt-3.5 xs:max-md:h-auto xs:max-md:w-[48%] `}
      >
        <h3 className="box-content text-wrap bg-opacity-30 px-2.5 pb-5 text-xl font-bold leading-[1.6875rem] text-grey900 xs:max-lg:text-lg shimmer border border-slate-100 text-transparent">
          {dummy}
        </h3>

        <div>
          <figure
            className={`relative aspect-square w-full overflow-hidden rounded-[0.625rem] shimmer border border-slate-100`}
          ></figure>
        </div>
      </div>
    );
  });
};

export default HomeBundleListLoadingState;
