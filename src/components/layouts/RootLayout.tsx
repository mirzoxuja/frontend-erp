import { Outlet } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

const RootLayout = ({}: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default RootLayout;
