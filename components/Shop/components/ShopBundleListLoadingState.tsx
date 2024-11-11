const ShopBundleListLoadingState = () => {
  return [1, 2, 3, 4, 5].map((bundle) => {
    return (
      <li
        key={bundle}
        className="shimmer h-24 min-w-[12rem] rounded-2xl border xl:min-w-[13.5rem] border-slate-200 "
      >
        <button
          className={`group flex size-full items-center justify-between rounded-2xl p-2`}
        >
          <ul
            className={`w-1/2 space-y-2 px-2 text-left text-base`}
          >
            {[1, 2].map((text) => (
              <li key={text}>
                <p className="shimmer rounded-md text-transparent border border-slate-200">{text}</p>
              </li>
            ))}
          </ul>
          <figure
            className={`shimmer relative h-full w-[40%] rounded-lg border border-slate-200`}
          ></figure>
        </button>
      </li>
    );
  });
};

export default ShopBundleListLoadingState;
