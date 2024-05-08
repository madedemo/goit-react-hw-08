import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/auth/operations"
import { NavLink, useNavigate } from "react-router-dom"
import { selectEmail } from "../../redux/auth/slice"


const UserMenu = ({ buildLinkClass }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userEmail = useSelector(selectEmail);

    function handleLogout() {
        dispatch(logout())
        navigate('/')
    }

  return (
      <div>
          <NavLink className={buildLinkClass} to="/contacts">Contacts</NavLink>
          <p className={buildLinkClass}>Welcome, {userEmail}</p>
          <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserMenu