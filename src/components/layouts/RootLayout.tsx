import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useGetUser from "../../hooks/api/useGetUser";
import useUserStore from "../../store/user.store";
import { Footer, Header } from "../home";
import { verifyToken } from "../../utils/verify.token";

interface Props {
  children?: React.ReactNode;
}

const PUBLIC_ROUTES = [
  "/contact",
  "/about",
  "/",
  "/courses",
  "/teachers",
  "/blog",
  "/enroll",
  "/pricing",
  "/faq",
];

const RootLayout = ({}: Props) => {
  const { data, isSuccess } = useGetUser();
  const { setUser, setIsAuthenticated } = useUserStore();
  const location = useLocation();

  useEffect(() => {
    if (isSuccess) {
      const user = data?.data.data;
      setUser(user);
      setIsAuthenticated(true);
    }
  }, [isSuccess]);

  const token = verifyToken();
  const isPublic = PUBLIC_ROUTES.some(
    (route) =>
      location.pathname === route ||
      location.pathname.startsWith(route + "/")
  );

  if (!token && !isPublic) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;