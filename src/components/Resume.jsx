import React from "react";
import WorkCard from "./cards";
import workExperiences from "./Resume-Detail";
import Images from "./images/viasatlogo.png";
import Education from "./Education";
import EducationExperiences from "./Education-Detail";

function Resume() {
	return (
		<div className="row resume">
			<div className="column">
				<div>
					<h1 className="header-tags">Work Experience</h1>

					{workExperiences.map((workExperience) => {
						return (
							<WorkCard
								name={workExperience.name}
								time={workExperience.time}
								title={workExperience.title}
								jobDescription={workExperience.jobDescription}
							/>
						);
					})}
				</div>
			</div>
			<div className="column">
				<div>
					<h1 className="header-tags">Education</h1>

					{EducationExperiences.map((EducationExperience) => {
						return (
							<Education
								school={EducationExperience.school}
								minor={EducationExperience.minor}
								time={EducationExperience.time}
								degree={EducationExperience.degree}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
export default Resume;

{
	/* <Card
						name={contacts[0].name}
						img={contacts[0].imgURL}
						tel={contacts[0].phone}
						email={contacts[0].email}
						jobDescription={contacts[0].jobDescription}
					/>
					<Card
						name={contacts[1].name}
						img={contacts[1].imgURL}
						tel={contacts[1].phone}
						email={contacts[1].email}
					/>
					<Card
						name={contacts[2].name}
						img={contacts[2].imgURL}
						tel={contacts[2].phone}
						email={contacts[2].email}
					/> */
}
