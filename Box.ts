///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Space.ts"/>
module Main {

    export class Box extends Phaser.Group {

        // A 2D array of spaces in the box. The upper left corner is (0,0) and goes to
        // (COLUMNS - 1, ROWS - 1) in the lower right
        private spaces: Space[][] = [];
        private level: Level;

        private static OFFSET = 50;
        private static ROWS: number = 6;
        private static COLUMNS: number = 10;

        constructor(level: Level){
            super(level.game);
            this.x = Box.OFFSET;
            this.y = Box.OFFSET;
            this.level = level;

            for (var column: number = 0; column < Box.COLUMNS; column++) {
                this.spaces[column] = [];
                for (var row: number = 0; row < Box.ROWS; row++) {
                    this.spaces[column][row] = new Space(level, column, row);
                }
                this.addMultiple(this.spaces[column]);
            }
        }

        // Returns a valid spot for a given candy. Returns null if there is no spot
        // beneath the candy, or if the candy would not fit in the box due to length
        // or collisions.
        public findAnchorSpace(candy: Candy): Space {
            for (var column: number = 0; column < Box.COLUMNS; column++) {
                for (var row: number = 0; row < Box.ROWS; row++) {
                    var space: Space = this.spaces[column][row];
                    if (this.checkCollision(space, candy) && this.isRoom(space, candy.pieces)) {
                        return space;
                    }
                }
            }
            return null;
        }

        private checkCollision(space: Space, candy: Candy) {
            return this.level.physics.arcade.overlap(space, candy);
        }

        private isRoom(space: Space, width: number): boolean {
            if (space.column + width >= Box.COLUMNS) {
                // Runs off the side
                return false;
            }

            for (var columnOffset: number = 0; columnOffset < width; columnOffset++) {
                if (this.spaces[space.column + columnOffset][space.row].isFull()) {
                    // There is a candy in the way
                    return false;
                }
            }

            return true;
        }
    }
}