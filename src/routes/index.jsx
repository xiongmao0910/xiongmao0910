import { Routes, Route } from "react-router-dom";

import { Home, About, Projects, Contact, NotFound } from "../pages";

export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
