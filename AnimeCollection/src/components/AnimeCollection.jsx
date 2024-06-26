import AnimeItem from "./AnimeItem";

const AnimeCollection = () => {
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Anime Collection
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnimeItem />
                    <AnimeItem />
                    <AnimeItem />
                </div>
            </div>
        </section>
    );
};
export default AnimeCollection;
