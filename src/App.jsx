import {
    createBrowserRouter,
    Route,
    NavLink,
    createRoutesFromElements,
    RouterProvider,
} from "react-router";

import Home from "./pages/Home";
import Javascript from "./pages/Javascript";
import Css from "./pages/Css";
import Html from "./pages/Html";
import Navbar from "./Navbar";
import MultipleChoice from "./pages/MultipleChoice";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />

            <Route path="/javascript" element={<Javascript />} />
            <Route path="/javascript/multiple-choice" element={<MultipleChoice />} />
            
            <Route path="/html" element={<Html />} />

            <Route path="/css" element={<Css />} />
            
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
