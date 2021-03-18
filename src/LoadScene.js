
export default class LoadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoadScene' });
    }

    preload() {
        console.log('LoadScene preload()');
        this.load.spritesheet('tiles', 'src/assets/Dungeon_Tileset.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        console.log('LoadScene create()');
        this.scene.start('MazeScene');
    }
}
