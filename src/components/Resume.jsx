import React from "react";
import Card from "./cards";
import contacts from "./Resume-Detail";

function Resume() {
	return (
		<div className="row">
			<div className="column">
				<div>
					<h1 className="heading">Work Experience</h1>

					{contacts.map((contact) => {
						return <Card name={contact.name} />;
					})}

					{/* <Card
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
					/> */}
				</div>
			</div>
			<div className="column">
				<div>
					<h1 className="heading">Work Experience</h1>

					{/* <Card
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
					/> */}
				</div>
			</div>
		</div>
	);
}
export default Resume;
