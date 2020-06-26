import React from "react";

function Card(props) {
	return (
		<div className="card">
			<div className="top">
				<h2 className="name">{props.name}</h2>
			</div>
			<div className="bottom">
				<p className="info">{props.tel}</p>
				<p className="info">{props.email}</p>
				<p className="info">{props.jobDescription}</p>
			</div>
		</div>
	);
}

export default Card;