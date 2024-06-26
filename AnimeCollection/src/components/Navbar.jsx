const Navbar = () => {
    return (
        <nav className="bg-indigo-400 border-b border-indigo-100">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <span className="hidden md:block text-white text-2xl font-bold ml-2">
                            Anime Collection
                        </span>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <div className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                                    Home
                                </div>
                                <div className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                                    Anime Collection
                                </div>
                                <div className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                                    Add Anime
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;