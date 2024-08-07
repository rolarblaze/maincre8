import WrapperComponent from "../Wrapper";

const BundleBought = () => {
  return (
    <WrapperComponent
      iconFillColor="#1574E5"
      title="Bundle bought"
      description=""
      buttonLabel=""
      buttonClassNames=""
      containerClassNames="border border-grey100 text-black"
      showButton={false}
      showDate={true}
      dateBought="date bought"
    />
  );
};
export default BundleBought;
