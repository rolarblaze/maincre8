export interface ButtonProps {
  children: React.ReactNode | string;
  isLoading?: boolean;
  onClick?: () => void;
  classNames?: string;
  link?: string;
  type?: "button" | "submit" | "reset";
}
