import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App.jsx";
import { MyProvider } from "./contexts/MyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <MyProvider>
                <App />
            </MyProvider>
        </Router>
    </React.StrictMode>
);
