import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import AnimatedText from "./AnimatedText";

function App() {
	return (
		<div className="app">
			<AnimatedText />
			<Header />
			<AboutMe />
			<Resume />
			<Footer />
		</div>
	);
}
export default App;
