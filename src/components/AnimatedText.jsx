import React from "react";
import Typical from "react-typical";
import Images from "./images/profilepic1.png";

function AboutMe() {
	const currentYear = new Date().getFullYear() - 2018;

	return (
		<div className="row">
			<div className="column left">
				<img className="profile-img" src={Images} alt="Girl in a jacket" />
			</div>
			<div className="column animated-text">
				<h1 className="matt-milici"> Matt Milici</h1>
				<p className="im-a">
					I am a{" "}
					<Typical
						className="Typical"
						loop={Infinity}
						wrapper="b"
						steps={[
							"Financial Analyst",
							1000,
							"Web Developer",
							1000,
							"Will Dempster's Agent?",
							1000,
							"Surfer",
							1000,
							"Great Friend",
							1000,
						]}
					/>
				</p>
			</div>
		</div>
	);
}
export default AboutMe;
