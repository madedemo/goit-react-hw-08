import { Outlet } from "react-router-dom"
import AppBar from "../Appbar/AppBar"

const Layout = () => {
    return (
        <>
            <AppBar />
            <Outlet />
        </>
    )
}

export default Layout; 