import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (!isLoggedIn) {
        return children
    }
  return <Navigate to="/contacts" />
}

export default RestrictedRoute