import React from "react";
import "./socialbutton.css";
type socialData = {
  text: string;
  icon: string;
  link: string;
};

export const SocialButton = (props: socialData) => {
  const { text, icon, link } = props;
  return (
    <a className="hero-social" target="_blank" rel="noreferrer" href={link}>
      <div className="social-icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="social-text">{text}</div>
    </a>
  );
};
