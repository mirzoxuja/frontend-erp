import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useGetUser from "../../hooks/api/useGetUser";
import useUserStore from "../../store/user.store";
import { Footer, Header } from "../home";
import { verifyToken } from "../../utils/verify.token";
import { removeItem } from "../../utils/localstorage";

interface Props {
  children?: React.ReactNode;
}

const RootLayout = ({}: Props) => {
  const { data, isSuccess } = useGetUser();
  const { setUser, setIsAuthenticated } = useUserStore();
  const token = verifyToken();
  if (!token) {
    removeItem("token");
    window.location.href = "/login";
    return;
  }
  useEffect(() => {
    if (isSuccess) {
      const user = data?.data.data;
      setUser(user);
      setIsAuthenticated(true);
    }
  }, [isSuccess]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default RootLayout;
