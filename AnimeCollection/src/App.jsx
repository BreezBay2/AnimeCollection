import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import AnimeCollection from "./components/AnimeCollection";
import Navbar from "./components/Navbar";
import ViewCollection from "./components/ViewCollection";

const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<h1>App</h1>} />)
);

const App = () => {
    return (
        <>
            <Navbar />
            <AnimeCollection />
            <ViewCollection />
        </>
    );
};
export default App;
