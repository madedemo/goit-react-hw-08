import css from "./Navigation.module.css"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/slice"
import AuthNav  from "../AuthNav/AuthNav"
import UserMenu  from "../UserMenu/UserMenu"
import clsx from "clsx"

const buildLinkClass = ({isActive}) => {
    return clsx({
        link: true,
        active: isActive
    })
}

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
          <nav className={css.nav}>
              <NavLink className={buildLinkClass} to="/">Home</NavLink>
              {isLoggedIn ? <UserMenu className={buildLinkClass} />
                  : <AuthNav buildLinkClass={buildLinkClass} />}
          </nav>
  )
}

export default Navigation