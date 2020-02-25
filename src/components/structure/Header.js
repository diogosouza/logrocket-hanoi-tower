import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<header
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-end"
				}}
			>
				<h1
					style={{
						color: "#764abc",
						fontSize: "3em",
						fontWeight: "bold",
						textShadow: "2px 2px 2px black"
					}}
				>
					THE TOWER OF HANOI
				</h1>
			</header>
		);
	}
}

export default Header;
