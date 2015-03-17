///<reference path="build/typescript/phaser.d.ts"/>
module Main {

    export class Preloader extends Phaser.State {

        preload() {
            this.load.image('space', 'assets/boxSpace.png');
            this.load.image('redCandy1', 'assets/redCandy1.png');
            this.load.image('redCandy5', 'assets/redCandy5.png');
            this.load.image('level1', 'assets/level1.png');
        }

        create() {
            this.game.state.start('Level', true, false);
        }

    }

}