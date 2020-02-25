import React, { Component } from "react";
import { DragSource } from "react-dnd";

import Constants from "../constants/Constants";
import { TILE } from "../constants/Types";

const tile = {
	beginDrag({ position }) {
		return { position };
	}
};

const collect = (connect, monitor) => ({
	dragSource: connect.dragSource(),
	dragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging()
});

class Tile extends Component {
	render() {
		const { position, dragSource, isDragging } = this.props;
		const display = isDragging ? "none" : "block";
		const opacity = isDragging ? 0.5 : 1;
		const width = `(${Constants.TOWER_WIDTH} + ${position * 100}px)`;
		const offset = `${(position * Constants.TILE_WIDTH_BASE) / 2}vw`;

		const tileStyle = {
			display: display,
			opacity: opacity,
			height: "60px",
			width: `calc(${width})`,
			transform: `translateX(calc(${offset} * -1))`,
			border: "4px solid white",
			borderRadius: "10px",
			background: "#764abc"
		};
		
		return dragSource(<div style={tileStyle} position={position} />);
	}
}

export default DragSource(TILE, tile, collect)(Tile);
