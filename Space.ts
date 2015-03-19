///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
module Main {

    export class Space extends Phaser.Sprite {

        row: number;
        column: number;
        level: Level;

        private static SIZE = 32;
        private static BORDER_SIZE = 2;

        private static BORDERED_SIZE = Space.SIZE - Space.BORDER_SIZE;

        constructor(level: Level, column: number, row: number){
            super(level.game, column * Space.BORDERED_SIZE, row * Space.BORDERED_SIZE, 'space');
            this.row = row;
            this.column = column;
            this.level = level;

            this.level.game.physics.enable(this, Phaser.Physics.ARCADE);
        }

        public isFull(): boolean {
            for (var i: number = 0; i < this.level.candies.length; i++) {
                if (this.level.physics.arcade.overlap(this, this.level.candies.getAt(i)) && this.level.candies.getAt(i).slotted) {
                    return true;
                }
            }
            return false;
        }
    }
}