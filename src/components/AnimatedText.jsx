import React from "react";
import Typical from "react-typical";
import Images from "./images/profilepic1.png";

function AboutMe() {
	const currentYear = new Date().getFullYear() - 2018;

	return (
		<div className="aboutMe row">
			<div className="column left">
				<img className="profile-img" src={Images} alt="Girl in a jacket" />
			</div>
			<div className="AnimatedTest column right about-me about-me-description">
				<h1>Hello my name is Matt Milici</h1>
				<p>
					I am a{" "}
					<Typical
						className="Typical"
						loop={Infinity}
						wrapper="b"
						steps={[
							"developer",
							1000,
							"Friend",
							1000,
							"Financial Analyst",
							1000,
							"Will Dempster Agent",
							1000,
							"Best Friend",
							1000,
						]}
					/>
				</p>
			</div>
		</div>
	);
}
export default AboutMe;
