import { NavLink } from "react-router";

const SecNavbar = () => {
    return (
        <header>
            <nav>
                <nav id="desktop-nav">
                    <ul className="nav-options">
                        <li className="btn flex-center">
                            <NavLink to="/javascript/multiple-choice">Multiple Choice</NavLink>
                        </li>
                        <li className="btn flex-center">
                            <NavLink to="/">Drag and Drop</NavLink>
                        </li>
                        <li className="btn flex-center">
                            <NavLink to="/">True or False</NavLink>
                        </li>
                        <li className="btn flex-center">
                            <NavLink to="/">Coding Challenges</NavLink>
                        </li>
                    </ul>
                </nav>
            </nav>
        </header>
    );
};

export default SecNavbar;
