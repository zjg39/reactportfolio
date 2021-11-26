import React from "react";
import Cards from "./cards";
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
  const portfolio = [
    {
      "id": 1,
      "name": "PokéBattle!",
      "image": "/images/pokebattle.png",
      "github": "https://github.com/caitlinw29/pokeBattle",
      "deploy": "https://caitlinw29.github.io/pokeBattle/"
  },
  {
      "id": 2,
      "name": "Mirum",
      "image": "",
      "github": "https://github.com/darionthetech/Mirum",
      "deploy": "https://quiet-oasis-10226.herokuapp.com/"
  },
  {
      "id": 3,
      "name": "Pump Haus",
      "image": "",
      "github": ""
  },


  {
      "id": 4,
      "name": "Password Generator",
      "image": "",
      "github": "https://github.com/zjg39/JS-PasswordGenerator",
      "deploy": "https://zjg39.github.io/JS-PasswordGenerator/"
  },
  {
      "id": 5,
      "name": "Coding Quiz Game!",
      "image": "",
      "github": "https://github.com/zjg39/CodingQuizGame",
      "deploy": "https://zjg39.github.io/CodingQuizGame/"
  },
  {
      "id": 6,
      "name": "Workday Scheduler",
      "image": "",
      "github": "https://github.com/zjg39/workdayScheduler",
      "deploy": "https://zjg39.github.io/workdayScheduler/"
  }
  ];
  function Portfolio() {
    return (
      <section className="container" style={{display: "flex", justifyContent: "center"}}>
        <div className="project">
          <h1 style={{ color: "black" }}>Portfolio</h1>
          <br></br>
        </div>
  
        <div className="col-md-4">
          {portfolio.map((project) => (
            <Cards
              key={project.id}
              image={project.image}
              name={project.name}
              github={project.github}
              deploy={project.deploy}
            />
          ))}
        </div>
      </section>
    );
  }
  
  export default Portfolio;