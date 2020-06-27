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
