import AnimeItem from "./AnimeItem";
import { useEffect, useState } from "react";

const AnimeCollection = () => {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                const res = await fetch("http://localhost:8000/collection");
                const data = await res.json();
                setCollection(data);
            } catch {
                console.log("Error fetching data", error);
            }
        };

        fetchCollection();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Anime Collection
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {collection.map((anime) => (
                        <AnimeItem key={anime.id} anime={anime} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default AnimeCollection;
