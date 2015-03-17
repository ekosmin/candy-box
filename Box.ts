///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Space.ts"/>
module Main {

    export class Box extends Phaser.Group {

        // A 2D array of spaces in the box. The upper left corner is (0,0) and goes to
        // (COLUMNS, ROWS) in the lower right
        spaces: Space[][] = [];

        private static ROWS: number = 6;
        private static COLUMNS: number = 10;

        constructor(level: Level){
            super(level.game);
            this.x = 50;
            this.y = 50;

            for (var column: number = 0; column < Box.COLUMNS; column++) {
                this.spaces[column] = [];
                for (var row: number = 0; row < Box.ROWS; row++) {
                    this.spaces[column][row] = new Space(level, column, row);
                }
                this.addMultiple(this.spaces[column]);
            }
        }
    }
}