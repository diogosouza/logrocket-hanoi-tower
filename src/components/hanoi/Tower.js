import React, { Component } from "react";
import { DropTarget } from "react-dnd";

import Tile from "./Tile";
import Constants from "../constants/Constants";
import { TILE } from "../constants/Types";

const towerTarget = {
	canDrop({ isMoveValid, isTheLatter }, monitor) {
		const isOver = monitor.isOver();
		const position = monitor.getItem().position;
		const tileIsTheLatter = isTheLatter(position);
    const target = parseInt(monitor.targetId.substr(1)) + 1;
    
		return isOver && tileIsTheLatter ? isMoveValid(position, target) : false;
	},

	drop({ removeTile, addTile }, monitor) {
		const position = monitor.getItem().position;
		const target = parseInt(monitor.targetId.substr(1)) + 1;
		removeTile(position);
		addTile(position, target);
	}
};

const collect = (connect, monitor) => ({
	dropTarget: connect.dropTarget(),
	canDrop: monitor.canDrop(),
	isOver: monitor.isOver()
});

class Tower extends Component {
	render() {
		const background = this.props.isOver ? `#800` : `#764abc`;
		const style = {
      height: `calc(${Constants.TOWER_HEIGHT})`,
      border: "4px solid white",
			borderRadius: "20px 20px 0 0",
			display: "grid",
			alignContent: "flex-end",
			background: background
		};

		return this.props.dropTarget(
			<div style={style}>
				{this.props.tiles && this.props.tiles.map(tile => <Tile key={tile.id} position={tile.id} />)}
			</div>
		);
	}
}

export default DropTarget(TILE, towerTarget, collect)(Tower);
