import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";

const UserLayout = () => {
  return (
    <div>
      <UserNavbar />
      <Outlet />
      <UserFooter />
    </div>
  );
};

export default UserLayout;
