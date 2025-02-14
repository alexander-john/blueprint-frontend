import Grid from "../Grid";
import SecNavbar from "../SecNavbar";
import { NavLink, Outlet } from "react-router";

export default function Javascript() {
    return (
        <>
            <SecNavbar />
            <div className="javascript">
                <h2>Javascript</h2>
                <Grid />
            </div>

            <main>
                <Outlet />
            </main>
        </>
    );
}
