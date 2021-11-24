import React from "react";
import cards from "./cards";
// will import json project information later

const styles = {
    projectPic: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
    wrapper: {
      justifyContent: "space-around",
      height: "100%",
      display: "flex",
    //   overflow: "auto",
      flexFlow: "row wrap",
      alignContent: "flex-start",
    },
  };
  function wrapper(props) {
    return (
      <div className="wrapper" style={styles.wrapper}>
        {props.children}
      </div>
    );
  }
  
  function Portfolio() {
    return (
      <section className="container">
        <div className="project">
          <h1 style={{ color: "black" }}>Portfolio</h1>
          <br></br>
        </div>
  
        <wrapper>
          {Portfolio.map((project) => (
            <cards
              key={project.id}
              image={project.image}
              name={project.name}
              deploy={project.deploy}
            />
          ))}
        </wrapper>
      </section>
    );
  }
  
  export default Portfolio;