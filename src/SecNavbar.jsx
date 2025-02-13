import { NavLink } from "react-router";

const SecNavbar = () => {
    return (
        <header>
            <nav>
                <nav id="desktop-nav">
                    <ul class="nav-options">
                        <li class="btn flex-center">
                            <NavLink to="/">Multiple Choice</NavLink>
                        </li>
                        <li class="btn flex-center">
                            <NavLink to="/">Drag and Drop</NavLink>
                        </li>
                        <li class="btn flex-center">
                            <NavLink to="/">True or False</NavLink>
                        </li>
                        <li class="btn flex-center">
                            <NavLink to="/">Coding Challenges</NavLink>
                        </li>
                    </ul>
                </nav>
            </nav>
        </header>
    );
};

export default SecNavbar;
