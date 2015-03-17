///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
module Main {

    export class Space extends Phaser.Sprite {

        row: number;
        column: number;

        constructor(level: Level, row: number, column: number){
            super(level.game, row * 30, column * 30, 'space');
            this.row = row;
            this.column = column;
        }
    }
}