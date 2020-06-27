import React from "react";

function WorkCard(props) {
	return (
		<div className="Card row">
			<div className="workcolumns">
				<h2 className="name">
					<li>{props.title}</li>
				</h2>
			</div>
			<div className="workcolumn">
				<h3 className="name dates">{props.name}</h3>
			</div>
			<div>
				<p className="time">
					<i>{props.time}</i>
				</p>
				<p className="name">{props.jobDescription}</p>
			</div>
		</div>
	);
}
export default WorkCard;

// import React from "react";

// function WorkCard(props) {
// 	return (
// 		<div className="Card">
// 			<div className="top">
// 				<div className="float">
// 					<h2 className="name">{props.name}</h2>
// 					<h4 className="info">{props.title}</h4>
// 				</div>
// 			</div>
// 			<div className="bottom">
// 				<ul>
// 					<p className="time">
// 						<i>{props.time}</i>
// 					</p>
// 					<p className="info">{props.jobDescription}</p>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }
// export default WorkCard;
