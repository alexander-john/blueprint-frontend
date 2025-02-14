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
import NotFound from "./pages/NotFound";
import SecNavbar from "./SecNavbar";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />

            {/* JavaScript Section with Secondary Navigation */}
            <Route path="/javascript" element={<SecNavbar />}>
                <Route index element={<Javascript />} />
                <Route
                    path="multiple-choice"
                    element={<MultipleChoice category="javascript" />}
                />
                {/* <Route
                    path="drag-and-drop"
                    element={<DragAndDrop category="javascript" />}
                />
                <Route
                    path="true-or-false"
                    element={<TrueOrFalse category="javascript" />}
                />
                <Route
                    path="coding-challenges"
                    element={<CodingChallenges category="javascript" />}
                /> */}
            </Route>

            {/* HTML Section with Secondary Navigation */}
            <Route path="/html" element={<SecNavbar />}>
                <Route index element={<Html />} />
                <Route
                    path="multiple-choice"
                    element={<MultipleChoice category="html" />}
                />
                {/* <Route
                    path="drag-and-drop"
                    element={<DragAndDrop category="html" />}
                />
                <Route
                    path="true-or-false"
                    element={<TrueOrFalse category="html" />}
                />
                <Route
                    path="coding-challenges"
                    element={<CodingChallenges category="html" />}
                /> */}
            </Route>

            {/* CSS Section with Secondary Navigation */}
            <Route path="/css" element={<SecNavbar />}>
                <Route index element={<Css />} />
                <Route
                    path="multiple-choice"
                    element={<MultipleChoice category="css" />}
                />
                {/* <Route
                    path="drag-and-drop"
                    element={<DragAndDrop category="css" />}
                />
                <Route
                    path="true-or-false"
                    element={<TrueOrFalse category="css" />}
                />
                <Route
                    path="coding-challenges"
                    element={<CodingChallenges category="css" />}
                /> */}
            </Route>

            <Route path="*" element={<NotFound />} />
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
