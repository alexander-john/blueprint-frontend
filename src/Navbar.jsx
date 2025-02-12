import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <header>
            <nav>
                <nav id="desktop-nav">
                    <ul class="nav-options">
                        <li class="btn flex-center">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li class="btn flex-center">
                            <NavLink to="javascript">JavaScript</NavLink>
                        </li>
                        <li class="btn flex-center">
                            <NavLink to="html">HTML</NavLink>
                        </li>
                        <li class="btn flex-center">
                            <NavLink to="css">CSS</NavLink>
                        </li>
                    </ul>
                </nav>
            </nav>
        </header>
    );
};

export default Navbar;
