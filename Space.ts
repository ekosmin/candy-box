///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
module Main {

    export class Space extends Phaser.Sprite {

        row: number;
        column: number;

        constructor(level: Level, column: number, row: number){
            super(level.game, column * 30, row * 30, 'space');
            this.row = row;
            this.column = column;

        }
    }
}