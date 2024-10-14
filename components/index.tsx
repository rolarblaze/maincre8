// NEW COMPONENTS
// NEW LAYOUT COMPONENTS
export { default as Navbar } from "./NewLayout/NewNavbar";
export { default as Footer } from "./NewLayout/NewFooter";
export { default as PageLayout } from "./NewLayout";

// GLOBAL COMPONENTS
export { default as SocialSignUp } from "./Auth/SocialSignUp";
export { default as Tabs } from "./Auth/Tabs";
export { default as Button } from "./Button";
export { default as TabsToggle } from "./Dashboard/ServicesTab/TabToggle";
export { default as CheckBoxField } from "./Forms/Checkbox";
export { default as InputField } from "./Forms/InputField";
export { default as DropdownSelect } from "./Forms/Select";
export { default as Textarea } from "./Forms/Textarea";
export { default as ProjectForm } from "./ProjectForm";
export { default as Spinner } from "./Spinner";
export { default as FullLoader } from "./Spinner/Loader";
export { default as AlertWrapper } from "./AlertWrapper";
export { default as Loader } from "./Spinner/Loader";
export { default as ShopSections } from "./Shop";
export { default as Alert } from "./Alert";
export { default as SalesPopUp } from "./SalesPopUp";
export { default as PhoneNumberInput } from "./PhoneInput";
export { default as EmptyState } from "./EmptyState";
export { default as FormatDate } from "./FormatDates";

// MODALS
export { default as DropdownWrapper } from "./UI/Modals/DropdownWrapper";
export { default as Modal } from "./UI/Modals/CustomModal";

// LANDING PAGE SECTION IMPORTS
export { default as AppWrapper } from "./LandingPage/AppWrapper";
export { default as HomepageBenefits } from "./LandingPage/Sections/Benefits";
export { default as HomepageBrand } from "./LandingPage/Sections/BrandSection";
export { default as HomepageBundles } from "./LandingPage/Sections/Bundles";
export { default as HomepageCTA } from "./LandingPage/Sections/CTASection";
export { default as CustomerReviews } from "./NewPages/LandingPage/sections/CustomerReviews";
export { default as HomepageDashboard } from "./LandingPage/Sections/DashboardSection";
export { default as FAQ } from "./LandingPage/Sections/FAQ/index";
export { default as HomepageHero } from "./LandingPage/Sections/HeroSection";
export { default as HomepageServices } from "./LandingPage/Sections/Services";
export { default as HomepageSubscribe } from "./LandingPage/Sections/SubscribeSection";
export { default as CTASection } from "./LandingPage/Sections/CTASection";
export { default as HelpCenter } from "./LandingPage/HelpCenter";
export { default as BreadCrumb } from "./BreadCrumb";

// NEW PAGES SECTION COMPONENTS
// LANDING PAGE SECTION COMPONENTS
export {
  HeroSection,
  PackagesSection,
  ProofSection,
  FeatureSection,
  LearnMoreSection,
  BrandSection,
  TestimonialSection,
  ExpertSection,
  CtaSection,
} from "./NewPages/LandingPage/sections";

// PRIVACY POLICY PAGE SECTION COMPONENTS
export {
  PPHeaderTabSection,
  PPContentSection,
} from "./NewPages/PrivacyPolicyPage/sections";

// TERMS & CONDITIONS PAGE SECTION COMPONENTS
export {
  TCHeaderTabSection,
  TCContentSection,
} from "./NewPages/TermsConditionPage/sections";

// CART PAGE SECTION COMPONENTS
export { CartSection, AddOnSection } from "./NewPages/CartPage/sections";

// CHECKOUT PAGE SECTION COMPONENTS
export {
  CheckoutSection,
  SummarySection,
} from "./NewPages/CheckoutPage/sections";

// UI COMPONENTS
export { default as AvatarIcon } from "./UI/AvatarIcon";
export { default as PillDiv } from "./UI/PillDiv";
export { default as UploadFile } from "./Forms/UploadFile";
export { default as Marquee } from "./UI/Marquee";
export { default as ResizablePanel } from "./UI/ResizablePanel";
export { default as DemoVideo } from "./UI/DemoVideo";
export { default as FadeUpDiv } from "./UI/FadeUpDiv";

// SHOP PAGE SECTION IMPORTS
export { default as ServicesSection } from "./Shop";
export { default as SearchFilterSection } from "./Shop/SearchFilter";

//ABOUT US
export { default as CoreValues } from "./LandingPage/AboutUs/CoreValues";
export { default as CreativeApproach } from "./LandingPage/AboutUs/CreativeApproach";
export { default as Statement } from "./LandingPage/AboutUs/Statement";
export { default as Team } from "./LandingPage/AboutUs/Team";
export { default as WhoWeAre } from "./LandingPage/AboutUs/WhoWeAre";

//SERVICES
export { default as AllServices } from "./LandingPage/ServicesPage/AllServices";
export { default as GetStarted } from "./LandingPage/ServicesPage/GetStarted";
export { default as HowWeDeliver } from "./LandingPage/ServicesPage/HowWeDeliver";

// DASHBOARD
export { default as Header } from "./Dashboard/Header";
export { default as Sidebar } from "./Dashboard/Sidebar";
export type { default as Tab } from "./Dashboard/Sidebar/types";
export { default as Order } from "./Dashboard/Order";
export { default as ServiceCard } from "./Dashboard/ServiceCard";
export { default as Profile } from "./Dashboard/Profile";
export { default as Security } from "./Dashboard/Security";
export { default as Payment } from "./Dashboard/Payment";
export { default as BusinessBriefForm } from "./Dashboard/BusinessBriefForm";
