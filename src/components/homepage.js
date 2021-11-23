import React from "react";
import picture from "./images/fishing.jpeg";
const styles = {
    mainPhoto: {
        width: "75%",
        height: 150,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    Text: {
        color: "black",
        fontSize: 25,
    },
};
export default function homePage() {
    return (
        <section>
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