import React from "react";
import Images from "./images/profilepic1.png";

function AboutMe() {
	const currentYear = new Date().getFullYear() - 2018;

	return (
		<div className="aboutMe row">
			<div className="column left">
				<img className="profile-img" src={Images} alt="Girl in a jacket" />
			</div>
			<div className="column right about-me">
				<p className="about-me-description">Hey, What's up!</p>
				<p className="about-me-description">
					My name is Matt Milici and welcome to my personal site!
				</p>
				<p className="about-me-description">
					Currently, I am a Financial Analyst for a telecommunications company
					based out of San Diego. I graduated from Penn State {currentYear}{" "}
					years ago with a degree in Finance and Minor in Information Science
					and Technology. I recently started a 6 month Web Development bootcamp
					and will be using this site to showcase my work as well as sharpen my
					skills!
				</p>
			</div>
		</div>
	);
}
export default AboutMe;
