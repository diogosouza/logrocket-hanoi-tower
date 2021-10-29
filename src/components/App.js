import React, { Component } from "react";
import HanoiTower from "./hanoi/HanoiTower";
import Header from "./structure/Header";
import Footer from "./structure/Footer";
import Constants from "./constants/Constants";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      towers: [
        { id: 1, tiles: [] },
        { id: 2, tiles: [] },
        { id: 3, tiles: [] },
      ],
    };
  }

  componentDidMount = () => {
    const tiles = [];
    for (let id = 1; id <= Constants.NUM_TILES; id++) {
      tiles.push({ id: id });
    }

    this.setState({
      towers: [
        { id: 1, tiles: tiles },
        { id: 2, tiles: [] },
        { id: 3, tiles: [] },
      ],
    });
  };

  removeTile = (tileId) => {
    var towerId = null;
    this.setState((prevState) => {
      prevState.towers.forEach((tower) => {
        tower.tiles = tower.tiles.filter((tile) => {
          if (tile.id === tileId) {
            towerId = tower.id;
            return false;
          } else {
            return true;
          }
        });
      });

      return {
        towers: prevState.towers,
      };
    });
    return towerId;
  };

  addTile = (tileId, towerId) => {
    this.setState((prevState) => ({
      towers: prevState.towers.map((tower) => {
        tower.id === towerId && tower.tiles.unshift({ id: tileId });

        return tower;
      }),
    }));
  };

  isMoveValid = (tileId, towerId) => {
    var tower = this.state.towers[towerId - 1];
    if (tower.tiles.length === 0 || tileId < tower.tiles[0].id) {
      return true;
    } else if (tileId > tower.tiles[0].id || tileId === tower.tiles[0].id) {
      return false;
    }
  };

  isTheLatter = (tileId) => {
    let tileIsTheLatter = false;
    this.state.towers.forEach((tower) => {
      if (tower.tiles.length !== 0 && tower.tiles[0].id === tileId) {
        tileIsTheLatter = true;
      }
    });
    return tileIsTheLatter;
  };

  isVictory = () => {
    const { towers } = this.state;
    return (
      towers[1].tiles.length === Constants.NUM_TILES ||
      towers[2].tiles.length === Constants.NUM_TILES
    );
  };

  render() {
    return (
      <div style={layoutStyle}>
        <DndProvider backend={HTML5Backend}>
          <Header />
          <HanoiTower
            towers={this.state.towers}
            removeTile={this.removeTile}
            addTile={this.addTile}
            isMoveValid={this.isMoveValid}
            isTheLatter={this.isTheLatter}
          />
          {this.isVictory() && alert("Victory!")}
          <Footer />
        </DndProvider>
      </div>
    );
  }
}

const layoutStyle = {
  display: "grid",
  gridTemplateRows: `
    ${Constants.HEADER_HEIGHT}
    calc(${Constants.HANOI_HEIGHT})
    ${Constants.FOOTER_HEIGHT}
  `,
};

export default App;
