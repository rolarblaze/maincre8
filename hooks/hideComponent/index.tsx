const hideComponent = (pathname: string): boolean => {
  return [
    "/cart",
    "/checkout",
    "/signup",
    "/login",
    "/email-verify",
    "/forgot-pasword",
    "/new-password",
  ].includes(pathname);
};

export default hideComponent;
