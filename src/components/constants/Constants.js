const NUM_TILES = 3;
const TOWER_WIDTH = `${30 * NUM_TILES}px`;
const HEADER_HEIGHT = "8rem";
const FOOTER_HEIGHT = "2rem";
const HANOI_HEIGHT = `(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`;
const TOWER_HEIGHT = `(${TOWER_WIDTH} * ${NUM_TILES}) * 1.3`;
const TILE_HEIGHT = `(${TOWER_HEIGHT} / 12)`;

const getWidth = () => {
	switch (NUM_TILES) {
		case 1:
			return 13;
		case 2:
			return 10.5;
		case 3:
			return 8;
		default:
			return 3;
	}
};

const TILE_WIDTH_BASE = getWidth();

export default {
	TOWER_WIDTH,
	HEADER_HEIGHT,
	FOOTER_HEIGHT,
	HANOI_HEIGHT,
	TOWER_HEIGHT,
	TILE_HEIGHT,
	TILE_WIDTH_BASE,
	NUM_TILES
};
