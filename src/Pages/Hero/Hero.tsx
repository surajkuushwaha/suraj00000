import { SocketAddress } from "net";
import React from "react";
import { SocialButton } from "../../Components/Hero/SocialButton";
import "./hero.css";

export const Hero = () => {
  const socialLinks = [
    { link: "", icon: "./icons/github.svg", text: "Github" },
    { link: "", icon: "./icons/linkedin.svg", text: "Send an email" },
    { link: "", icon: "./icons/mail.svg", text: "LinkedIn" },
  ];
  return (
    <>
      <div className="hero">
        <div className="sub-heading">Hi I'm</div>
        <div className="main-heading">Suraj kushwaha</div>
        <div className="hero-description">
          I'm a software engineer based in Ahmedabad, India. I enjoy creating things that
          live on the internet, whether that be websites, applications, or
          anything in between. I have been freelancing for a year now while
          studying at the university and I've manage to gain a decent amount of
          experience and valuable knowledge from all different kinds of fields
          throughout my projects and work.
        </div>
        <div className="links">
          {socialLinks.map((element) => {
            return (
              <SocialButton
                icon={element.icon}
                text={element.text}
                link={element.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
