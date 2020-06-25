import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import NavImg from "./images/navimg.png";

function Header() {
	return (
		<div className="header">
			<>
				<Navbar bg="black" variant="dark">
					<Navbar.Brand href="#home">
						<img
							src={NavImg}
							width="40"
							height="40"
							className="d-inline-block align-top"
							alt="MM Logo"
						/>
					</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#home">About Me</Nav.Link>
						<Nav.Link href="#features">Experience</Nav.Link>
						<Nav.Link href="#pricing">Resume</Nav.Link>
						<Nav.Link href="#pricing">Articles</Nav.Link>
						<Nav.Link href="#pricing">Contact Me</Nav.Link>
					</Nav>
				</Navbar>
			</>
		</div>
	);
}
export default Header;
