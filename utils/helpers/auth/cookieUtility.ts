import Cookies from "js-cookie";

export const USER_TOKEN_KEY =
  process.env.NEXT_PUBLIC_USER_TOKEN_KEY || "defaultToken";

/**
 * Set the userToken cookie.
 *
 * @param value - The cookie's value.
 * @param options - Optional settings for the cookie.
 */
export const setUserTokenCookie = (
  value: any,
  options?: Cookies.CookieAttributes
): void => {
  const isSecure = window.location.protocol === "https:";

  Cookies.set(USER_TOKEN_KEY, value, {
    ...options,
    secure: isSecure, // Ensure secure transmission if running on https
  });
};

/**
 * Remove the userToken cookie.
 *
 * @param options - Optional settings for removal.
 */
export const removeUserTokenCookie = (
  options?: Cookies.CookieAttributes
): void => {
  Cookies.remove(USER_TOKEN_KEY, options);
};

/**
 * Get the userToken from cookies.
 *
 * @return The value of the userToken cookie or undefined.
 */
export const getUserTokenCookie = (): string | undefined => {
  return Cookies.get(USER_TOKEN_KEY);
};
