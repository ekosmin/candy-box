///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Space.ts"/>
module Main {

    export class Candy extends Phaser.Sprite {

        level: Level;
        pieces: number;

        constructor(level: Level, x: number, y: number, pieces: number){
            super(level.game, x, y, Candy.pickSprite(pieces));
            this.level = level;
            this.pieces = pieces;

            this.inputEnabled = true;
            this.input.enableDrag(false, true);
            this.events.onInputUp.add(this.release, this);
        }

        private release(): void {
            var anchorSpace: Space = this.level.box.findAnchorSpace(this);
            if (anchorSpace != null) {
                var globalPoint = anchorSpace.getBounds();
                this.x = globalPoint.x;
                this.y = globalPoint.y;
            }
        }

        private static pickSprite(pieces: number): String {
            switch (pieces) {
                case 1:
                    return 'redCandy1';
                case 5:
                    return 'redCandy5';
                default:
                    throw new TypeError("Unexpected number of pieces for candy: " + pieces);
            }
        }
    }
}