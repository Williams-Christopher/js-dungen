import Tile from './classes/tile';
import Maze from './classes/maze';

// CONSTANTS
const TILE_DIMENSION = 32;
const FLOOR_1 = 89;
const FLOOR_2 = 90;
const FLOOR_3 = 104;

export default class MazeScene extends Phaser.Scene {
    constructor() {
        super('MazeScene');
        this.maze = null;
    }

    preload () {

    }

    create () {
        this.maze = new Maze(this, 10, 10);
        console.log(this.maze);

        this.placeInitialTile();
        // this.walk();
        // this.placeEntry();
        // this.placeExit();
        // this.buildWalls();
        // this.backfillEmptySpace();
    }

    placeInitialTile() {
        // TODO: The initial tile should not be in the first or last column as we want to draw walls around the floor
        // Get a random pixel between 0 and the canvas width
        const initialPixel = Math.floor(Math.random() * 800);

        new Tile(this, this.alignPixelValueToLowerBoundary(initialPixel), TILE_DIMENSION, 'tiles', FLOOR_3);
    }

    walk() {

    }

    // TODO: These boundary functions belong in some sort of utility library / class
    alignCellValueToLowerBoundary(value) {
        return this.alignPixelValueToLowerBoundary(column * TILE_DIMENSION);
    }

    alignCellValueToUpperBoundary(column) {
        return this.alignPixelValueToUpperBoundary(value * TILE_DIMENSION);
    }

    alignPixelValueToLowerBoundary(value) {
        return this.calculateBaseTileBoundary(value);
    }

    alignPixelValueToUpperBoundary(value) {
        return this.calculateBaseTileBoundary(value + TILE_DIMENSION);
    }

    calculateBaseTileBoundary(value) {
        // return value & ~31;
        return value & ~(TILE_DIMENSION - 1);
    }
}
