import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [techs] = useState([
    { name: "ReactJS", progress: 100, className: "react-progress", years: 3 },
    { name: "PostgreSQL", progress: 75, className: "postgre-progress", years: 1.5 },
    { name: "Spring Boot", progress: 75, className: "springboot-progress", years: 2 },
    { name: "NextJS", progress: 50, className: "node-progress", years: 1 },

  ]);

  return (
    <div>
      <h2>Libraries / Frameworks:</h2>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <span>{tech.name}: {`${tech.years} years`}</span>
            <ProgressBar progress={tech.progress} className={tech.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
