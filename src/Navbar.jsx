const Navbar = () => {
    return (
        <nav id="desktop-nav">
            <ul class="nav-options">
                <li class="btn">
                    <a href="#">Home</a>
                </li>
                <li class="btn">
                    <div class="dropdown-container">
                        <a href="#">JavaScript</a>
                        <span class="material-symbols-outlined">
                            arrow_drop_up
                        </span>
                    </div>
                    <div class="dropdown-menu">
                        <ul>
                            <li>test 1</li>
                            <li>test 2</li>
                        </ul>
                    </div>
                </li>
                <li class="btn dropdown-item">
                    <div class="dropdown-container">
                        <a href="#">HTML</a>
                        <span class="material-symbols-outlined">
                            arrow_drop_up
                        </span>
                    </div>
                </li>
                <li class="btn dropdown-item">
                    <div class="dropdown-container">
                        <a href="#">CSS</a>
                        <span class="material-symbols-outlined">
                            arrow_drop_up
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
