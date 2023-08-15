import React from "react";
import "./projects.css";
import { LinkButton } from "./Components/LinkButton/LinkButton";

export const Projects = () => {
	return (
		<div className="projects">
			<a href="#projects" id="projects" className="projects__heading">
				Projects
			</a>
			<div className="projects__wrapper">
				{projects.map((project, index) => (
					<div className="project" key={index}>
						<div className="project__image">
							<img
								src="https://blog.knoldus.com/wp-content/uploads/2020/08/git.png"
								alt=""
							/>
						</div>
						<div className="project__content">
							<h3>{project.name}</h3>
							<p>{project.description}</p>
							<div className="project__technologies">
								{project.technologies.join(" - ")}
							</div>
							<div className="project-links">
								<LinkButton
									icon="./icons/link.svg"
									link={project.liveUrl}
									text="Live demo"
								/>
								{
									<a href={project.gitHubUrl} className="project-github">
										<img src="./icons/github.svg" alt="icon" />
									</a>
								}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const projects = [
	{
		name: "E-Commerce Website",
		description:
			"A full-fledged e-commerce website with user authentication, product catalog, and cart functionality.",
		technologies: ["React", "Node.js", "Express", "MongoDB"],
		liveUrl: "https://example.com/ecommerce",
		gitHubUrl: "https://example.com/ecommerce",
		image: "https://example.com/images/ecommerce.png",
	},
	{
		name: "Task Management App",
		description:
			"A task management application to help users organize and track their tasks and to-do lists.",
		technologies: ["Angular", "Firebase", "Bootstrap"],
		liveUrl: "https://example.com/task-app",
		gitHubUrl: "https://example.com/task-app",
		image: "https://example.com/images/task-app.png",
	},
	{
		name: "Weather Forecast App",
		description:
			"An app that displays real-time weather forecasts and conditions for different locations.",
		technologies: ["Vue.js", "Node.js", "Weather API"],
		liveUrl: "https://example.com/weather-app",
		gitHubUrl: "https://example.com/weather-app",
		image: "https://example.com/images/weather-app.png",
	},
	{
		name: "Recipe Sharing Platform",
		description:
			"A platform for users to share and discover cooking recipes, complete with ratings and comments.",
		technologies: ["Ruby on Rails", "PostgreSQL", "AWS S3"],
		liveUrl: "https://example.com/recipe-platform",
		gitHubUrl: "https://example.com/recipe-platform",
		image: "https://example.com/images/recipe-platform.png",
	},
	{
		name: "Fitness Tracking App",
		description:
			"An app designed to help users track their workouts, set fitness goals, and monitor progress.",
		technologies: ["Flutter", "Firebase", "Google Fit API"],
		liveUrl: "https://example.com/fitness-app",
		gitHubUrl: "https://example.com/fitness-app",
		image: "https://example.com/images/fitness-app.png",
	},
	{
		name: "Language Learning Game",
		description:
			"An interactive game that makes language learning engaging and fun for users of all ages.",
		technologies: ["Unity", "C#", "SQLite"],
		liveUrl: "https://example.com/language-game",
		gitHubUrl: "https://example.com/language-game",
		image: "https://example.com/images/language-game.png",
	},
];
