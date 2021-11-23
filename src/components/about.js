import React from "react";

export default function About() {
    return (
        <section className="container">
            <h1 style={{ color: "lightcyan" }}>About</h1>
            <div>
                <p className="m-10" style={{ color: "black", fontSize: 25, textAlign: "center" }}>
                    I am a junior software developer, currently enrolled in the 
                    Full Stack Web Development Bootcamp at Georgia Tech!  My favorite
                    languages to work with are JavaScript and Python.  While I am 
                    trained to work in web development and full stack applications, 
                    I would eventually like to transition into artificial intelligence,
                    and maybe even robotics or data engineering!
                </p>
                <br>
                </br>
                <p>
                    When I'm not coding, I can usually by found in the garden or at the gym.
                    I am a classically trained cellist, and I am able to make, varnish, and
                    set up violins, violas, and of course, cellos.  My favorite composers are 
                    Johannes Brahms, Richard Strauss, and Gustav Mahler...with a little Beethoven, 
                    every now and then.
                </p>
            </div>
        </section>
    )
}