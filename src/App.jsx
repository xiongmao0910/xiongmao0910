import { MyRoutes } from "./routes";
import { Header } from "./components";

import "./sass/styles.scss";

export function App() {
    return (
        <main className="main">
            <Header />
            <MyRoutes />
        </main>
    );
}
