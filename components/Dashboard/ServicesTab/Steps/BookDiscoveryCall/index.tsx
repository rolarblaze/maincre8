import WrapperComponent from "../Wrapper";

const BookDiscoveryCall = () => {
  return (
    <WrapperComponent
      iconFillColor="#D0D5DD"
      iconUnchecked={true}
      title="Book a Discovery Call:"
      description="Schedule your Discovery Call to discuss project details, starting from 48 hours after purchase"
      buttonLabel="Book a discovery call"
      buttonClassNames="text-white bg-grey300 w-fit !text-xs px-3"
    />
  );
};

export default BookDiscoveryCall;
