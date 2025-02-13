import { BrowserRouter, Link, Route, Routes , NavLink } from "react-router";

import Home from "./Home";
import Javascript from "./Javascript";
import Css from "./Css";
import Html from "./Html";
import Navbar from "./Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
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
