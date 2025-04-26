
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {

   const {user} = useAuth();
   const location = useLocation();

   if(!user){
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
   }
    return children;
};

export default PrivateRoute;


///iska use nhi kar raha Pri
