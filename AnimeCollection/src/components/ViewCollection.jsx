import { Link } from "react-router-dom";

const ViewCollection = () => {
    return (
        <section className="m-auto max-w-lg my-10 px-6">
            <Link
                to="/collection"
                className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-600"
            >
                View Your Collection
            </Link>
        </section>
    );
};
export default ViewCollection;
