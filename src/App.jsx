import { BrowserRouter, Link, Route, Routes , NavLink} from "react-router";

import Home from "./Home";
import Javascript from "./Javascript";
import Css from "./Css";
import Html from "./Html";

function App() {
    return (
        <BrowserRouter>
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="javascript" element={<Javascript />} />
                <Route path="html" element={<Html />} />
                <Route path="css" element={<Css />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
