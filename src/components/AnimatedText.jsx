import React from "react";
import Typical from "react-typical";

function AnimatedText() {
	return (
		<div className="AnimatedTest">
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
	);
}
export default AnimatedText;
