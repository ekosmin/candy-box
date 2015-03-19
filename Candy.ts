///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Space.ts"/>
module Main {

    export class Candy extends Phaser.Sprite {

        level: Level;
        pieces: number;

        slotted: boolean = false;

        private static SIZE = 32; // size of a candy (including border)
        private static BORDER_SIZE = 2;
        private static HITBOX_SIZE = 4;

        private static BORDERED_SIZE = Candy.SIZE - Candy.BORDER_SIZE; // Adjacent candies share a border
        private static HITBOX_OFFSET = (Candy.SIZE - Candy.HITBOX_SIZE)/2; // Places hitbox in the candy center

        constructor(level: Level, x: number, y: number, pieces: number){
            super(level.game, x, y, Candy.pickSprite(pieces));
            this.level = level;
            this.pieces = pieces;

            this.inputEnabled = true;
            this.input.enableDrag(false, true);
            this.events.onInputDown.add(this.pickup, this);
            this.events.onInputUp.add(this.release, this);

            this.level.game.physics.enable(this, Phaser.Physics.ARCADE);

            // The hitbox should extend through the center of each candy
            var hitboxWidth: number = Candy.HITBOX_SIZE + Candy.BORDERED_SIZE * (pieces - 1);
            this.body.setSize(hitboxWidth, Candy.HITBOX_SIZE, Candy.HITBOX_OFFSET, Candy.HITBOX_OFFSET);
        }

        private pickup(): void {
            if (!this.slotted) {
                this.level.candies.add(new Candy(this.level, this.x, this.y, this.pieces));
            }
            this.slotted = false;
        }

        protected release(): void {
            var anchorSpace: Space = this.level.box.findAnchorSpace(this);
            if (anchorSpace != null) {
                var globalPoint:PIXI.Rectangle = anchorSpace.getBounds();
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