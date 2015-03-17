///<reference path="build/typescript/phaser.d.ts"/>
module Main {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {

            //  Set-up our preloader sprite
            //this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            //this.load.setPreloadSprite(this.preloadBar);

            //  Load our actual games assets
            this.load.image('orange', 'assets/critters/orange.png');
            this.load.image('pink', 'assets/critters/pink.png');
            this.load.image('gray', 'assets/critters/gray.png');
            this.load.image('blue', 'assets/critters/blue.png');
            this.load.image('green', 'assets/critters/green.png');
            this.load.image('gold', 'assets/critters/gold.png');

            this.load.image('orange_slot', 'assets/colorSlots/orange.png');
            this.load.image('pink_slot', 'assets/colorSlots/pink.png');
            this.load.image('gray_slot', 'assets/colorSlots/gray.png');
            this.load.image('blue_slot', 'assets/colorSlots/blue.png');
            this.load.image('green_slot', 'assets/colorSlots/green.png');
            this.load.image('gold_slot', 'assets/colorSlots/gold.png');

            this.load.image('star', 'assets/star.png');
            this.load.image('level1', 'assets/level1.png');
            this.load.image('machine', 'assets/machine.png');
            this.load.image('machine_winning', 'assets/winningMachine.png');
        }

        create() {
            this.game.state.start('Level', true, false);
        }

    }

}