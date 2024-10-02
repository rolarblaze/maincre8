import NewNavbar from "./NewNavbar";
import NewFooter from "./NewFooter";

const PageLayout = ({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) => {
  return (
    <div className="full-width content-grid place-content-start font-manrope">
      <NewNavbar />
      <main className="full-width content-grid mt-[5.5rem] min-h-[calc(100dvh-4rem)] place-content-start">
        {children}
      </main>
      {showFooter && <NewFooter />}
    </div>
  );
};
export default PageLayout;
