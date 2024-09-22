import NewNavbar from "./NewNavbar";
import NewFooter from "./NewFooter";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content-grid place-content-start">
      <NewNavbar />
      {children}
      <NewFooter />
    </div>
  );
};
export default PageLayout;
