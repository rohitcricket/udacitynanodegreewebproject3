// GAME DESIGN:
// Keep scores, change levels, lose lives and collect Gems. Save Princess.
// Update one level when player reaches water.
// Player loses one life if it collides with the enemy.
// Player gets 1000 points for saving the pricess, which means a collision with the princess,
// and both the player and princess together moving as one entity towards the water.
// Player gets 10 points for completing a level.
// Player gets 100 points for oollecting gems, which means a collision but with Player not dying, 
// and the gem disappearing.
// The game resets everytime the player collides with an enemy or when it reaches the water.


// Initialize game variables 
var score = 0;
var lives = 3;
var level = 0;
var gemsCollected = 0;

// Enemies our player must avoid
var Enemy = function(x,y,speed) { 
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = 100 *(Math.floor(Math.random()*4));
    this.speed = 100 *(Math.floor(Math.random()*4));
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (this.speed * dt);
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our players, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = 20 + 120*(Math.floor(Math.random()*4)); //randomize x position
    this.y = 350;
    this.speed = 10;
}

// Update the players's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * (dt);
    this.y * (dt);
}



// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Draw the Princess

var Princess = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our players, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-princess-girl.png';
    this.x = 200;
    this.y = 30;
    this.speed = 10;
}

// Update the players's position, required method for game
// Parameter: dt, a time delta between ticks
Princess.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * (dt);
    this.y * (dt);
}

// Draw the player on the screen, required method for game
Princess.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// End draw the Princess

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();
var princess = new Princess();

var Darth = new Enemy(-100,50,20);
var Vader = new Enemy(-100,200,400);
var Joker = new Enemy(-100,350, 150);
allEnemies = [Darth, Vader, Joker];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// This function is for moving the player.

Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        this.x -= this.x;
    }

    else if (key === 'right') {
        this.x += this.x;
    }
    else if (key === 'up') {
        this.y -= this.y;
    }

    else if (key === 'down') {
        this.y += this.y;
    }
}