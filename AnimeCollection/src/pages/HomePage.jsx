import AnimeCollection from "../components/AnimeCollection";
import ViewCollection from "../components/ViewCollection";

const HomePage = () => {
    return (
        <>
            <AnimeCollection isHome={true} />
            <ViewCollection />
        </>
    );
};
export default HomePage;
