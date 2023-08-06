import React from "react";
import "./experience.css";
import { Line } from "../../Components/Line/Line";

const experience = [
  {
    title: "Full Stack Software Developer (MERN)",
    date: "july 2022 - Present",
    company: "CultureX",
    location: "Ahmedabad - Gujarat",
    description: [
      "Build and design a multi step form in react for generating leads.",
      "Help to integrate multiple social media platform on a single application",
      "Created a NPM icon package to be used by team members",
    ],
  },
  {
    title: "Summer Internship in React",
    date: "June 2022 - July 2022",
    company: "INFOLABZ",
    location: " Ahmedabad - Gujarat",
    description: [
      "Learn about the basic of ReactJS Framework",
      "Improve my javascript skills and logic building.",
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
  onClick?: () => void;
}

const CompanyCard = ({ company, selected, onClick }: CompanyCardProps) => {
  return (
    <div
      className={`company-card ${selected && "selected"} text-primary`}
      onClick={() => onClick?.()}
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
  return (
    <>
      <div className="experience">
        <a href="#experience" id="experience" className="heading text-primary">
          experience
        </a>
        <div className="main">
          <div className="right">
            {experience.map((item, index) => (
              <CompanyCard
                key={index}
                company={item.company}
                onClick={() => handleSelect(index)} // Pass the function reference
                selected={index === selected}
              />
            ))}
          </div>
          <div className="left">
            <div className="company-description text-primary">
              <div className="company-heading">
                <div className="heading-title">
                  {experience[selected].title}
                </div>
                <div className="heading-date">{experience[selected].date}</div>
              </div>
              <div className="location">{experience[selected].location}</div>
              {experience[selected].description.map((item, index) => (
                <div key={index} className="description-item">
                  - {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Line />
      </div>
    </>
  );
};
