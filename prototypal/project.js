Function.prototype.inherits = function(SuperClass) {
    let Surrogate = function () {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;

}

//Ship.inherits(MovingObject)


Function.prototype.inherits2 = function (SuperClass) {
    this.prototype = Object.create(SuperClass.prototype);
    this.prototype.constructor = this;
}


function MovingObject () {};
MovingObject.prototype.move = function () {
    console.log("moving");
}

function Ship () {};

function Asteroid () {};

function Blasteroid () {};


Ship.inherits(MovingObject);
Asteroid.inherits2(MovingObject);

let s = new Ship();
let a = new Asteroid();

s.move();
a.move();