import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import AnimeCollection from "./components/AnimeCollection";
import Navbar from "./components/Navbar";
import ViewCollection from "./components/ViewCollection";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};
export default App;
