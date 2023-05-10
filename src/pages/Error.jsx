import Error404 from "../assets/404-error.svg";

export function Error() {
    return (
        <section
            className="section notfound flex justify-center items-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="notfound-container container">
                <img
                    className="notfound-img"
                    src={Error404}
                    alt="Page not founded"
                />
                <p className="fs-400 capitalize fw-bold">
                    something went wrong!
                </p>
            </div>
        </section>
    );
}
