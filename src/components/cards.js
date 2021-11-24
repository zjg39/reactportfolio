import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { projects } from "./projects";
const style = {
    image: {
        width: "100%",
        marginBottom: 20
    },
    imageContainer: {
        height: "65%",
        textAlign: "center",
        backgroundColor: "white",
        overflow: "hidden"
    },
    card: {
        height: 500,
        width: 500,
        position: "relative"
        }
    };
export default function Cards(props) {
    return (
        <div className="card m-3 border-dark" style={style.card}>
      <div style={style.imageContainer}>
        <img style={style.image} alt={props.name} src={props.image} />
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: 25,
          color: "black",

        }}
      >
        <p className="card-title">{props.name}</p>
        <p>
        <a href={props.github}>
            <img
              src="https://img.icons8.com/fluent/48/000000/github.png"
              alt="GitHub Repo"
            />
          </a>
          <a href={props.deploy}>
            <img
              src="https://img.icons8.com/fluent/48/000000/web.png"
              alt="Deploy"
            />
          </a>
        </p>
      </div>
    </div>

    );
}
