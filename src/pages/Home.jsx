import { Link } from "react-router-dom";

export function Home() {
    return (
        <section className="section home flex items-center">
            <div className="home-container container" data-size="xxl">
                <div className="home-content flow">
                    <p className="text-primary-500 fw-semibold">
                        Hi, my name is
                    </p>
                    <div className="fs-700 fw-bold text-white capitalize">
                        hoang hieu trung
                    </div>
                    <p>
                        I recently received my engineering degree from Water
                        Resource University in information technology. I have a
                        keen interest in learning about web programming. My most
                        immediate objective is to work as a professional web
                        developer.
                    </p>
                    <Link
                        to="/contact"
                        className="button"
                        button-variant="contained"
                        button-color="primary"
                    >
                        contact me
                    </Link>
                </div>
            </div>
        </section>
    );
}
