import { verifyLogin, verifyRole } from "@/utils/login";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = ({ children, roles }) => {
  return (
    <>
      {verifyLogin() && verifyRole(roles) ? (
        children
      ) : verifyLogin() && !verifyRole(roles) ? (
        <Navigate replace to="/login" />
      ) : (
        <Navigate replace to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
