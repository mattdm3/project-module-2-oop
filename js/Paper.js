let paperPosition = [];

class Paper {

    constructor(posX, posY) {


        this.x = posX || 300;
        this.y = posY || 650;

        this.domElement = document.createElement("img");
        document.getElementById("app").appendChild(this.domElement);

        this.domElement.style.position = 'absolute';
        this.domElement.src = "images/paper.png";
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        this.domElement.style.zIndex = "100";
    }
    shoot = () => {
        if (this.y > -150) {
            this.domElement.style.top = `${this.y -= 10}px`;

            paperPosition[0] = this.x;
            paperPosition[1] = this.y;
            // console.log(paperPosition);

        }



        setTimeout(this.shoot, 10);


    }


    // isEnemyDead = () => {

    //     // check position of paper bullets by making an array? Start with one paper, track its position 


    //     // ENEMY X AXIS IS MORE THAN OR EQUAL TO paperPosition[0]
    //     //  + PAPER_WIDTH - paperPosition[0]

    //     console.log(Engine.enemies)

    //     // let paperYPosition = this.domElement.style.left;
    //     // let paperXPosition = this.domElement.style.top;
    //     // let enemyDead = false;

    //     // Engine.enemies.forEach(function (enemy) {
    //     //     if (enemy.y + ENEMY_HEIGHT >= paperYPosition &&
    //     //         enemy.y <= paperYPosition + PLAYER_HEIGHT &&
    //     //         enemy.x === paperXPosition) {
    //     //         enemyDead = true;
    //     //     }
    //     // })
    //     // if (enemyDead) {
    //     //     // Make enemy disappear. 

    //     //     console.log("GOT EM!")
    //     // }

    // }





}

