import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        function windowResize() {
            const width = window.innerWidth;
            if (width < 720) {
                return;
            }

            setIsOpen((prev) => false);
        }

        function windowClick(e) {
            const role = e.target.getAttribute("role");

            if (role === "navigation-menu") {
                return;
            }

            if (role) {
                setIsOpen((prev) => false);
            }
        }

        window.addEventListener("resize", windowResize);
        window.addEventListener("click", windowClick);

        return () => {
            window.removeEventListener("resize", windowResize);
            window.removeEventListener("click", windowClick);
        };
    }, []);

    return (
        <header className="header">
            <div
                className="header-container container flex items-center justify-between py-4"
                data-size="xxl"
            >
                <Link to="/" className="header-logo inline-block">
                    <img
                        src={Logo}
                        alt="Jun Official Website Logo"
                        className="img-fluid"
                    />
                </Link>

                <div
                    onClick={handleClick}
                    className="header-hamburger md:none"
                    data-open={isOpen}
                >
                    <span className="w-full"></span>
                    <span className="w-full"></span>
                    <span className="w-full"></span>
                </div>

                <nav className="nav" role="navigation" data-open={isOpen}>
                    <ul className="nav-menu" role="navigation-menu">
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className="nav-link inline-block"
                                onClick={() => setIsOpen((prev) => false)}
                            >
                                about
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/projects"
                                className="nav-link inline-block"
                                onClick={() => setIsOpen((prev) => false)}
                            >
                                projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                className="nav-link inline-block"
                                onClick={() => setIsOpen((prev) => false)}
                            >
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
