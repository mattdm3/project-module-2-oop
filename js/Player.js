// There will only be one instance of this class. This instance will contain the
// data and methods related to the burger that moves at the bottom of your screen

// THESE POSITIONS USED FOR PAPER GUN
let playerPosY;
let playerPosX;


class Player extends Entity {

    // The constructor takes one parameter. This parameter refers to the parent DOM node.
    // We will be adding a DOM element to this parent DOM node.
    constructor(root) {
        super();
        // The x position starts off in the middle of the screen. Since this data is needed every time we move the player, we
        // store the data in a property of the instance. It represents the distance from the left margin of the browsing area to
        // the leftmost x position of the image.
        this.x = 4 * PLAYER_WIDTH;

        // The y position never changes, so we don't need to store it in a property. It represents the y position of the top of the
        // hamburger. The y position is the distance from the top margin of the browsing area.

        // const y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
        // let y = GAME_HEIGHT - PLAYER_HEIGHT - 10;


        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;

        // this.y = this.style.bottom;


        // We create a DOM node. We will be updating the DOM node every time we move the player, so we store a reference to the
        // DOM node in a property.

        this.render("images/michael_scott.png", (`${this.x}px`), ` ${this.y}px`, "10");

        root.appendChild(this.domElement);
    }
    // This method will be called when the user presses the left key. See in Engine.js
    // how we relate the key presses to this method
    moveLeft() {
        if (this.x > 0) {
            this.x = this.x - PLAYER_WIDTH;
        }
        this.domElement.style.left = `${this.x}px`;
        playerPosX = this.x

    }
    // We do the same thing for the right key. See Engine.js to see when this happens.
    moveRight() {
        if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
            this.x = this.x + PLAYER_WIDTH;
        }
        this.domElement.style.left = `${this.x}px`;
        playerPosX = this.x

    }

    moveUp() {

        if (this.y > 0 + PLAYER_HEIGHT) {
            this.y = this.y - PLAYER_HEIGHT;
        }
        this.domElement.style.top = `${this.y}px`;

        playerPosY = this.y



    }

    moveDown() {

        if (this.y + PLAYER_HEIGHT < GAME_HEIGHT - PLAYER_HEIGHT) {
            this.y = this.y + PLAYER_HEIGHT;
        }
        this.domElement.style.top = `${this.y}px`;

        playerPosY = this.y



    }




}



