import React from "react";
import "./projects.css";
import { SocialButton } from "../../Components/Hero/SocialButton";

export const Projects = () => {
	return (
		<div className="projects text-primary">
			<a href="#projects" id="projects" className="projects-heading">
				Projects
			</a>
			<div className="projects-wrapper">
				{[...projects,...projects,...projects,...projects,...projects].map((project, index) => (
					<div className="project" key={index}>
						<div className="project-image">
							<img src="https://blog.knoldus.com/wp-content/uploads/2020/08/git.png" alt="" />
						</div>
						<div className="project-content">
							<h3>{project.name}</h3>
							<p>{project.description}</p>
							<div className="project-technologies">
								{project.technologies.join(" - ")}
							</div>
							<SocialButton icon="./icons/link.svg" link={project.link} text="Live demo"/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const projects = [
	{
		name: "Project 1",
		description: "This is a project",
		technologies: ["React", "Typescript", "NodeJS"],
		link: "",
		image: "",
	},
	{
		name: "Project 2",
		description: "This is a project",
		technologies: ["React", "Typescript", "NodeJS"],
		link: "",
		image: "",
	},
	{
		name: "Project 3",
		description: "This is a project",
		technologies: ["React", "Typescript", "NodeJS"],
		link: "",
		image: "",
	},
];
