import React from "react";
import picture from "./images/fishing.jpeg";
const styles = {
    mainPhoto: {
        width: "auto",
        height: 400,
        backgroundPosition: "center",
        backgroundSize: "cover",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        alignItems: "center",

      },
    Text: {
        color: "black",
        fontSize: 25,
    },
};
export default function Home() {
    return (
        <section style={{display: "flex", justifyContent: "center"}}>
            <img style={styles.mainPhoto} src={picture} alt="fishing photo"/>
            <div className="m-5">
                <h1 className="text-center" style={{ color: "black"}}> Zac Goad </h1>
                <br></br>
                <p className="text-center" style={styles.Text}>
                    Junior Software Engineer
                </p>
            </div>
        </section>
    );
}