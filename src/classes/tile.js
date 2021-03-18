
export default class Tile extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        this.setOrigin(0, 0);
        this.scene.add.existing(this);
    }
}
