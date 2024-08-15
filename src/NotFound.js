import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">
                <button>
                    Homepage
                </button>
            </Link>
        </div>
    );
}
 
export default NotFound;