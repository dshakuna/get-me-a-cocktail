import { Outlet } from "react-router-dom";
import { HeaderNavbar } from "../../components/HeaderNavbar";

export function BaseLayout() {
    return (
        <>
            <HeaderNavbar/>
            <Outlet />
            <footer>
                <span>footer inc</span>
            </footer>
        </>
    )
}