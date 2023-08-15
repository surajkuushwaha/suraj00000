import React from "react";
import "./linkButton.css";
type LinkData = {
  text: string;
  icon: string;
  link: string;
};

export const LinkButton = (props: LinkData) => {
  const { text, icon, link } = props;
  return (
    <a id="projects-links" target="_blank" rel="noreferrer" href={link}>
      <div className="links-icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="links-text">{text}</div>
    </a>
  );
};
