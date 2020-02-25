import React, { Component } from "react";

class Footer extends Component {
	render() {
		const defaultStyle = {
			color: "#764abc",
			fontWeight: "bold"
		};

		return (
			<footer
				style={{
					padding: "0.5em",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					fontSize: "14px",
					backgroundColor: "white"
				}}
			>
				<p>
					<span style={defaultStyle}>React-DND Example</span>
				</p>
				<p>
					<span style={defaultStyle}>LogRocket</span>
				</p>
			</footer>
		);
	}
}

export default Footer;
