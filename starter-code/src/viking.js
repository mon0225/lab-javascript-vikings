// Soldier
function Soldier(health, strenght) {
    this.health= health;
    this.strenght= strenght;
    

    var attack = function (){
        return strenght;
    }

    var receiveDamage = function (damage){    
        health--;
    }

}

var soldier2 = new Soldier (2, 4);
console.log(soldier2);


// Viking
function Viking(name, health, strenght) {
    Soldier.call(this, name);
    this.name = "Victor";

    this.isAlive = true;

    var battleCry = function (){    
        return "Odin Owns You All!";
    }
    
    Viking.prototype.receiveDamage = function(damage){
        // console.log("Received damage from the health property");
        health--;

        if(this.isAlive = true){
            return this.name + "has received" + this.damage + "points of damage";
        }else{
            return this.name + "has died";
        }

    }
    

}

// Saxon
function Saxon(health, strenght) {

    Soldier.call(this);

    Saxon.prototype.receiveDamage = function(damage){
        // console.log("Received damage from the health property");
        health--;

        if(this.isAlive = true){
            return "Saxon has received" + this.damage + "points of damage";
        }else{
            return  "has died";
        }
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];


var addViking = function (obj){
    var viking1 = new Viking("victor", 3,4);
    vikingArmy.push(viking1);
}
}

var addSaxon = function (){    
   
}

var vikingAttack = function (){    
    
}

var SaxonAttack = function (){    
    
}

var showStatus = function (){    
    
    }