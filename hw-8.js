'use strict';

function Race(creator, location, race) {
    this.creator = 'J. R. R. Tolkien';
    this.location = 'Middle-earth';
    this.race = race;
}
Race.prototype.getRaceUniverse = function () {
    return 'Universe set in ' + this.location + ' created by ' + this.creator;
}

function Origins(race, habitat, specialty) {
    Race.call(this, race)
    this.habitat = habitat;
    this.specialty = specialty;
}
Origins.prototype = Object.create(Race.prototype);
Origins.prototype.getSpecialty = function () {
    return this.specialty;
}

function Hobbit(race, habitat, specialty, name, region, height) {
    Origins.call(this, race, habitat, specialty);
    this.name = name;
    this.region = region;
    this.height=height;
}
Hobbit.prototype = Object.create(Origins.prototype);
Hobbit.prototype.getHeight = function () {
    return this.height + 'm'
}
Hobbit.prototype.destroyTheRing = function () {
    alert('The Ring is successfully destroyed!')
}
Hobbit.prototype.returnHome = function () {
    return this.name + ' is returning to ' + this.region
}

function Dwarves(race, habitat, specialty, enemy, skill) {
    Origins.call(this, race, habitat, specialty);
    this.enemy = enemy;
    this.skill = skill;
}
Dwarves.prototype = Object.create(Origins.prototype);
Dwarves.prototype.greetEnemy = function () {
    if (this.enemy) {
        alert('Smaug attacks Erebor!')
    } else {
        return console.log('Drarg-kingdom is safe')
    }
}
Dwarves.prototype.getCreator = function () {
    return 'My creator is ' + this.creator
}
Dwarves.prototype.getSkill = function () {
    return this.skill
}

function Elves(race, leader, weapon, power) {
    Race.call(this, race);
    this.leader = leader;
    this.weapon = weapon;
    this.power = power;
}
Elves.prototype = Object.create(Race.prototype);
Elves.prototype.attack = function () {
    return 'Elves attack with ' + this.weapon + '!'
}
Elves.prototype.isLeader = function () {
    return this.leader? true : false;
}
Elves.prototype.setWeapon = function (weaponValue) {
    this.weapon=weaponValue;
}
Elves.prototype.isWeapon = function() {
    const weaponSet = ['sword', 'bow', 'dagger'].includes(this.weapon);
    if (weaponSet == false) {
        throw new Error ('Leader is disarmed!')
    } console.log('Attack with ' + this.weapon + '!')
}

function Men(race, fullName, group, king) {
    Race.call(this, race);
    this.fullName = fullName;
    this.group = group;
    this.king = king;
}
Men.prototype = Object.create(Race.prototype);
Men.prototype.isKing = function () {
    if (this.king) {
        return this.fullName + ' is the King of Arnor and Gondor.'
    } else {
        return this.fullName + ' is not the King.'
    }
}
Men.prototype.greetKing = function () {
    if (this.king) {
        console.log('Greet Aragorn son of Arathorn!');
    } else {
        console.log('King is not set.');
    }
}
Men.prototype.joinGroup = function () {
    return this.fullName + ' has joined' + this.group
}

const hobbit1 = new Hobbit('Hobbit','hill', 'farming', 'Bilbo Baggins', 'the Shire', 1.1);
const dwarf1 = new Dwarves ('Dwarves','mountain', 'metalwork', true, 'crafting')
const elf1 = new Elves('Elves','Tranduil', 'sword', 'immortal');
const men1 = new Men('Humans','Aragorn', 'The Fellowship of the Ring', true);