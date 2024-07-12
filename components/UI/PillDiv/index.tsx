const PillDiv = ({ children }: { children: string }) => {
  return (
    <div className="mb-4.5 border w-fit p-2 border-primary500 text-grey900 rounded-[0.625rem]">
      <span className="text-grey900 text-lg font-semibold leading-7">
        {children}
      </span>
    </div>
  );
};
export default PillDiv;
