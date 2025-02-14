import { NavLink, Outlet } from "react-router";

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <nav id="desktop-nav">
                        <ul className="nav-options">
                            <li className="btn flex-center">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="btn flex-center">
                                <NavLink to="javascript">JavaScript</NavLink>
                            </li>
                            <li className="btn flex-center">
                                <NavLink to="html">HTML</NavLink>
                            </li>
                            <li className="btn flex-center">
                                <NavLink to="css">CSS</NavLink>
                            </li>
                        </ul>
                    </nav>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Navbar;
