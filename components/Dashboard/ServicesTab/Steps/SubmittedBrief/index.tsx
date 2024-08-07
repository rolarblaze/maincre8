import WrapperComponent from "../Wrapper";

const SubmittedBrief = () => {
  return (
    <WrapperComponent
      iconFillColor="#D0D5DD"
      iconUnchecked={true}
      title="Submit a Brief"
      description="Kickstart your project by submitting a detailed brief immediately"
      buttonLabel="Upload a brief"
      buttonClassNames="text-white bg-grey300 w-fit !text-xs px-3"
    />
  );
};

export default SubmittedBrief;
