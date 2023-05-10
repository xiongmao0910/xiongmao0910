import { Link } from "react-router-dom";
import Error404 from "../assets/404-error.svg";

export function NotFound() {
    return (
        <section className="section notfound flex justify-center items-center">
            <div className="notfound-container container">
                <img
                    className="notfound-img"
                    src={Error404}
                    alt="Page not founded"
                />
                <p className="fs-400 capitalize fw-bold">page not found</p>
                <Link
                    to="/"
                    className="button"
                    button-variant="contained"
                    button-color="primary"
                >
                    back to homepage
                </Link>
            </div>
        </section>
    );
}
