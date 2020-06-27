import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Typist from "react-typist";
import Typist1 from "./typistExample";

function App() {
	return (
		<div className="app">
			<Header />
			<AboutMe />
			<Resume />
			<Footer />
			<Typist1 />
		</div>
	);
}
export default App;
