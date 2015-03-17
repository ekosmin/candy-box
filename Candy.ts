///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
module Main {

    export class Candy extends Phaser.Sprite {

        constructor(level: Level, x: number, y: number){
            super(level.game, x, y, 'redCandy1');

            this.inputEnabled = true;
            this.input.enableDrag(true);
        }
    }
}