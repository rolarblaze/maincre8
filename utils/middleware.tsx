import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { getUserProfile, renewRefreshToken } from "@/redux/auth/features";
import { getUserTokenCookie } from "@/utils/helpers/auth/cookieUtility";
import DashboardLoader from "@/components/LoadingPage";

interface MiddlewareProps {
  children?: ReactNode;
}

const Middleware: React.FC<MiddlewareProps> = ({ children }) => {
  const { isAuthenticated, isLoadingProfile } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = getUserTokenCookie();

    if (!token) {
      router.push("/login");
    } else {
      // Fetch user profile if authenticated
      dispatch(getUserProfile());
    }
  }, [isAuthenticated, router, dispatch]);

  useEffect(() => {
    const handleTokenRenewal = async () => {
      try {
        // Attempt to renew the token
        await dispatch(renewRefreshToken()).unwrap();
        // Fetch user profile if token renewal is successful
        dispatch(getUserProfile());
      } catch (error) {
        // If token renewal fails, redirect to login
        router.push("/login");
      }
    };

    // Add event listener to handle token expiry
    document.addEventListener("tokenExpired", handleTokenRenewal);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("tokenExpired", handleTokenRenewal);
    };
  }, [dispatch, router]);

  if (isLoadingProfile) {
    return <DashboardLoader />;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return null;
};

export default Middleware;
