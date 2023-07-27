import React from "react";
import "./experience.css";

const exprience = [
  {
    title: "Software Developer (Remote)",
    date: "Jun 2021 - Present",
    company: "Selfbook",
    location: " Selfbook / US - New York",
    description: [
      "Developing screens and UI components for the web application using React and Tailwind.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
    ],
  },
  {
    title: "Software Developer",
    date: "Jun 2022 - Present",
    company: "CultureX",
    location: " Ahmedabad - Gujarat",
    description: [
      "Developing screens and UI components for the web application using React and Tailwind.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
    ],
  },
  {
    title: "Software Developer",
    date: "Jun 2022 - Present",
    company: "CultureX",
    location: " Ahmedabad - Gujarat",
    description: [
      "Developing screens and UI components for the web application using React and Tailwind.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
      "Fixing UI issues and integrating backend APIs with Redux Saga.",
    ],
  },
];

interface CompanyCardProps {
  company: string;
  selected?: boolean;
  onClick?: (index: number) => void;
}

const CompanyCard = ({ company, selected, onClick }: CompanyCardProps) => {
  return (
    <div
      className={`company-card ${selected && "selected"}`}
      onClick={() => onClick?.(0)}
    >
      <div className="company-card-title">{company}</div>
    </div>
  );
};

export const Experience = () => {
  const [selected, setSelected] = React.useState(0);

  const handleSelect = (index: number): void | undefined => {
    setSelected(index);
  };
  console.log(selected);
  return (
    <div className="experience">
      <a href="#experience" id="experience" className="heading">
        experience
      </a>
      <div className="main">
        <div className="right">
          {exprience.map((item, index) => (
            <CompanyCard
              key={index}
              company={item.company}
              onClick={() => handleSelect(index)} // Pass the function reference
              selected={index === selected}
            />
          ))}
        </div>
        <div className="left"></div>
      </div>
    </div>
  );
};
