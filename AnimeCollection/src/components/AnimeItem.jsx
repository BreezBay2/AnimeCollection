const AnimeItem = ({ anime }) => {
    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <h3 className="text-xl text-gray-600 font-bold">
                        {anime.title}
                    </h3>
                </div>
            </div>
        </div>
    );
};
export default AnimeItem;
