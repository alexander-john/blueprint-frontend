import { NavLink, Outlet, useLocation } from "react-router";

const SecNavbar = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[1]; // Extracts "javascript", "html", or "css"

    return (
        <>
            <nav>
                <ul className="nav-options">
                    <li className="btn flex-center">
                        <NavLink to={`/${category}/multiple-choice`}>
                            Multiple Choice
                        </NavLink>
                    </li>
                    <li className="btn flex-center">
                        <NavLink to={`/${category}/drag-and-drop`}>
                            Drag and Drop
                        </NavLink>
                    </li>
                    <li className="btn flex-center">
                        <NavLink to={`/${category}/true-or-false`}>
                            True or False
                        </NavLink>
                    </li>
                    <li className="btn flex-center">
                        <NavLink to={`/${category}/coding-challenges`}>
                            Coding Challenges
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default SecNavbar;
