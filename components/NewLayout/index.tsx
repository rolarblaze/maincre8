import NewNavbar from "./NewNavbar";
import NewFooter from "./NewFooter";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="full-width content-grid place-content-start font-manrope">
      <NewNavbar />
      <main className="full-width content-grid mt-[5.5rem] xs:max-md:mt-0 min-h-[calc(100dvh-4rem)] place-content-start">
        {children}
      </main>
      <NewFooter />
    </div>
  );
};
export default PageLayout;
