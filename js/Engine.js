
class Engine {

    constructor(theRoot) {
        // We need the DOM element every time we create a new enemy so we
        // store a reference to it in a property of the instance.
        this.root = theRoot;
        // We create our hamburger.
        // Please refer to Player.js for more information about what happens when you create a player
        this.player = new Player(this.root);
        // Initially, we have no enemies in the game. The enemies property refers to an array
        // that contains instances of the Enemy class
        this.enemies = [];
        // We add the background image to the game
        addBackground(this.root);

    }

    // The gameLoop will run every few milliseconds. It does several things
    //  - Updates the enemy positions
    //  - Detects a collision between the player and any enemy
    //  - Removes enemies that are too low from the enemies array
    gameLoop = () => {
        // This code is to see how much time, in milliseconds, has elapsed since the last
        // time this method was called.
        // (new Date).getTime() evaluates to the number of milliseconds since January 1st, 1970 at midnight.
        if (this.lastFrame === undefined) this.lastFrame = (new Date).getTime();
        let timeDiff = (new Date).getTime() - this.lastFrame;
        this.lastFrame = (new Date).getTime();
        // We use the number of milliseconds since the last call to gameLoop to update the enemy positions.
        // Furthermore, if any enemy is below the bottom of our game, its destroyed property will be set. (See Enemy.js)
        this.enemies.forEach(enemy => {
            enemy.update(timeDiff);
        });
        // We remove all the destroyed enemies from the array referred to by \`this.enemies\`.
        // We use filter to accomplish this.
        // Remember: this.enemies only contains instances of the Enemy class.
        this.enemies = this.enemies.filter(enemy => {
            return !enemy.destroyed;
        });
        // We need to perform the addition of enemies until we have enough enemies.
        while (this.enemies.length < MAX_ENEMIES) {
            // We find the next available spot and, using this spot, we create an enemy.
            // We add this enemy to the enemies array 
            const spot = nextEnemySpot(this.enemies);
            this.enemies.push(new Enemy(this.root, spot));
        }
        // We check if the player is dead. If he is, we alert the user
        // and return from the method (Why is the return statement important?)
        if (this.isPlayerDead()) {

            // CREATE GAME OVER 

            // console.log(this.root);
            let newText = new NewText();

            // REMOVED ALERT
            // window.alert("Game over");
            return;
        }

        // TRYING TO ADD ENEMY DEAD HERE! ******* 

        if (this.isEnemyDead()) {
            console.log("GOT EM");


        }
        // If the player is not dead, then we put a setTimeout to run the gameLoop in 20 milliseconds
        setTimeout(this.gameLoop, 20);
    }
    // This method is not implemented correctly, which is why
    // the burger never dies. In your exercises you will fix this method.
    isPlayerDead = () => {

        let playerYPosition = this.player.y;
        let playerXPosition = this.player.x;
        let playerDead = false;

        // console.log(playerYPosition);

        this.enemies.forEach(function (enemy) {


            if (enemy.domElement.style.left != "-1000px" && enemy.y + ENEMY_HEIGHT >= playerYPosition &&
                enemy.y <= playerYPosition + PLAYER_HEIGHT &&
                enemy.x === playerXPosition) {
                playerDead = true;
            }
        })
        if (playerDead) {
            document.removeEventListener("keydown", keydownHandler);
            return true
        }

    }

    // TRYING TO ADD BULLETS KILLING FUNCTINO HERE 

    isEnemyDead = () => {
        // check position of paper bullets by making an array? Start with one paper, track its position 

        // ENEMY X AXIS IS MORE THAN OR EQUAL TO paperPosition[0]
        //  + PAPER_WIDTH - paperPosition[0]
        let paperYPosition = paperPosition[1];
        let paperXPosition = paperPosition[0];
        let enemyDead = false;

        this.enemies.forEach(function (enemy) {
            // console.log(enemy.domElement.style);
            if (enemy.y + ENEMY_HEIGHT >= paperYPosition &&
                enemy.y <= paperYPosition + PLAYER_HEIGHT &&
                enemy.x === paperXPosition && enemy.y > 5) {
                enemy.domElement.style.left = "-1000px";
                enemyDead = true;

            }
        })

        if (enemyDead) {

            return true
        }


    }

}

