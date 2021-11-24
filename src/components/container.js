import React, {useState} from "react";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Navigation from "./navigation";


export default function AppContainer() {
    const [currentPage, setCurrentPage] = useState("Home");
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
    const changePage = (page) => setCurrentPage(page);
    return (
        <div>
            <Navigation currentPage={currentPage} changePage={changePage} />
            {makePage()}
            <Footer />
        </div>
    )
}

