import React from "react";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Navigation from "./navigation";
import { useState } from "react/cjs/react.development";

export default function appContainer() {
    const [currentPage, setPage] = useState("Home");
    const makePage = () => {
        if (currentPage === "Home") {
            return <Home />;
        }
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
    };
    const changePage = (page) = setPage(page);
    return (
        <div>
            <Navigation currentPage={currentPage} changePage={changePage} />
            {makePage()}
            <Footer />
        </div>
    )
}

