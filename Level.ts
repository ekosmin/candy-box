///<reference path="build/typescript/phaser.d.ts"/>
///<reference path="Box.ts"/>
///<reference path="Candy.ts"/>
module Main {

    export class Level extends Phaser.State {

        background: Phaser.Sprite;
        box: Box;
        candies: Phaser.Group;

        create() {
            this.background = this.add.sprite(0, 0, 'level1');
            this.background.width = this.game.world.width;
            this.background.height = this.game.world.height;

            var levelGroup: Phaser.Group = this.game.add.group();

            this.box = new Box(this);
            levelGroup.add(this.box);

            this.candies = this.game.add.group();
            this.candies.add(new Candy(this, 400, 100, 1));
            this.candies.add(new Candy(this, 400, 200, 5));
        }

    }

}