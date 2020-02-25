import React, { Component, Fragment } from "react";
import Tower from "./Tower";
import Constants from "../constants/Constants";

class HanoiTower extends Component {
	render() {
		return (
			<div style={style}>
				{this.props.towers.map(curr => {
					return (
						<Fragment key={curr.id}>
							<div />
							<Tower
								tiles={curr.tiles}
								removeTile={tileId => this.props.removeTile(tileId)}
								addTile={(tileId, towerId) =>
									this.props.addTile(tileId, towerId)
								}
								isMoveValid={(tileId, towerId) =>
									this.props.isMoveValid(tileId, towerId)
								}
								isTheLatter={tileId => this.props.isTheLatter(tileId)}
							/>
						</Fragment>
					);
				})}
			</div>
		);
	}
}

const style = {
	height: Constants.HANOI_HEIGHT,
	display: "grid",
	gridTemplateColumns: `
    1fr 
    ${Constants.TOWER_WIDTH}
    2fr
    ${Constants.TOWER_WIDTH}
    2fr
    ${Constants.TOWER_WIDTH}
    1fr
  `,
	alignItems: "flex-end"
};

export default HanoiTower;
