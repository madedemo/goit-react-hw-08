import { NavLink } from "react-router-dom";

const AuthNav = ({ buildLinkClass}) => {
    return (
        <nav>
            <NavLink className={buildLinkClass} to="/register">Register</NavLink>
            <NavLink className={buildLinkClass} to="/login">Login</NavLink>
        </nav>
    )
}

export default AuthNav