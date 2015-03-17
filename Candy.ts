///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Space.ts"/>
module Main {

    export class Candy extends Phaser.Sprite {

        level: Level;

        constructor(level: Level, x: number, y: number){
            super(level.game, x, y, 'redCandy1');
            this.level = level;

            this.inputEnabled = true;
            this.input.enableDrag();
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
    }
}