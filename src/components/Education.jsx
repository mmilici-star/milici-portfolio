import React from "react";

function Education(props) {
	return (
		<div className="work-experience-div">
			<div className="">
				<h2 className="color title">{props.school}</h2>
			</div>
			<div className="company-time">
				<h3 className="color company">{props.degree}</h3>
				<p className="color date">
					<i>{props.time}</i>
				</p>
			</div>
		</div>
	);
}
export default Education;
// 	import React from "react";

// function Education(props) {
// 	return (
// 		<div className="Card row">
// 			<div className="workcolumns">
// 				<h2 className="name">
// 					<li>{props.school}</li>
// 				</h2>
// 			</div>
// 			<div className="workcolumn">
// 				<h3 className="name dates">{props.degree}</h3>
// 			</div>
// 			<div>
// 				<p className="time">
// 					<i>{props.time}</i>
// 				</p>
// 				<p className="name">{props.minor}</p>
// 			</div>
// 		</div>
// 	);
// }

// export default Education;
