import React from "react";

function Resume() {
	return (
		<div className="Resume row">
			<div className="column ">
				<div className="resume-header">
					<h2>Work Experience</h2>
				</div>
				<div className="work-experience">
					<ul>
						<div className="resumue-header-description row">
							<div className="resumue-header-description column">
								<li>
									<h4>Viasat</h4>
								</li>
							</div>
							<div className="resumue-header-description column">
								<p className="work-dates">(Feb '19 - Present)</p>
							</div>
						</div>

						<li>
							<h4>Viasat</h4>
						</li>
					</ul>
				</div>
			</div>
			<div className="column ">
				<div className="resume-header">
					<h2>Education</h2>
				</div>
				<div className="work-experience">
					<ul>
						<li>
							<h4>The Pennsylvania State University</h4>
						</li>
						<li>
							<h4>Viasat</h4>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Resume;
