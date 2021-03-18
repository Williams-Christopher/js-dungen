
export default class Maze extends Phaser.GameObjects.GameObject {
    constructor(scene, maxColumns, maxRows) {
        super(scene);

        this.maxColumn = maxColumns;
        this.maxRow = maxRows;
        this.row = 0;
        this.column = 0;
        this.maze = this.initEmptyMaze(maxColumns, maxRows);
    }

    initEmptyMaze(maxColumns, maxRows) {
        const m = [];
        for (let r = 0; r < maxRows; r++) {
            if (m[r] == undefined) {
                m[r] = [];
            }

            for (let c = 0; c < maxColumns; c++) {
                m[r][c] = 0;
            }
        }

        return m;
    }

    setCell(x, y, type) {
        // TODO: Need bounds and type checking
        this.maze[x][y] = type;
    }

    getTile(x, y) {
        // TODO: Need bounds checking
        return this.maze[x][y];
    }

    toConsole() {
        console.table(this.maze);
    }
}
