///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Space.ts"/>
module Main {

    export class Candy extends Phaser.Sprite {

        level: Level;
        pieces: number;

        slotted: boolean = false;

        constructor(level: Level, x: number, y: number, pieces: number){
            super(level.game, x, y, Candy.pickSprite(pieces));
            this.level = level;
            this.pieces = pieces;

            this.inputEnabled = true;
            this.input.enableDrag(false, true);
            this.events.onInputDown.add(this.pickup, this);
            this.events.onInputUp.add(this.release, this);
        }

        private pickup(): void {
            if (!this.slotted) {
                this.level.game.world.add(new Candy(this.level, this.x, this.y, this.pieces));
            }
        }

        protected release(): void {
            var anchorSpace: Space = this.level.box.findAnchorSpace(this);
            if (anchorSpace != null) {
                var globalPoint = anchorSpace.getBounds();
                this.x = globalPoint.x;
                this.y = globalPoint.y;
                this.slotted = true;
            } else {
                this.destroy();
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