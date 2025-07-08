import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Amazon Web Services (AWS)", progress: 15, className: "aws-progress", years: 0.2 },
    { name: "Postman", progress: 15, className: "postman-progress", years: 0.2 },
    { name: "Git", progress: 35, className: "github-progress", years: 1 },
    { name: "Docker", progress: 20, className: "docker-progress", years: 0.4 },
    
  ]);

  return (
    <div>
      <h2>Developer Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>{dev.name}: {`${dev.years} years`}</span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
