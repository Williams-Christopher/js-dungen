import Phaser from 'phaser';

import LoadScene from './LoadScene';
import MazeScene from './MazeScene';

const config = {
    type: Phaser.AUTO,
    parent: 'dungeon-maze',
    width: 800,
    height: 600,
    render: {
        pixelArt: true,
    },
    scene: [
        LoadScene,
        MazeScene,
    ],
};

const game = new Phaser.Game(config);

console.log(game);
