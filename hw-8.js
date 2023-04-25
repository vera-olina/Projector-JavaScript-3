'use strict';

function Universe(creator, location) {
    this.creator = 'J. R. R. Tolkien';
    this.location = 'Middle-earth';
}
Universe.prototype.getUniverse = function () {
    return 'Universe set in ' + this.location + ' created by ' + this.creator;
}

function Race(habitat, specialty) {
    Universe.call(this)
    this.habitat = habitat;
    this.specialty = specialty;
}
Race.prototype = Object.create(Universe.prototype);
Race.prototype.getSpecialty = function () {
    return this.specialty;
}

function Hobbit(habitat, specialty, name, region, height) {
    Race.call(this, habitat, specialty);
    this.name = name;
    this.region = region;
    this.height=height;
}
Hobbit.prototype = Object.create(Race.prototype);
Hobbit.prototype.getHeight = function () {
    return this.height + 'm'
}
Hobbit.prototype.destroyTheRing = function () {
    alert('The Ring is successfully destroyed!')
}
Hobbit.prototype.returnHome = function () {
    return this.name + ' is returning to ' + this.region
}

function Dwarves(habitat, specialty, enemy, skill) {
    Race.call(this, habitat, specialty);
    this.enemy = enemy;
    this.skill = skill;
}
Dwarves.prototype = Object.create(Race.prototype);
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

function Elves(leader, weapon, power) {
    Universe.call(this);
    this.leader = leader;
    this.weapon = weapon;
    this.power = power;
}
Elves.prototype = Object.create(Universe.prototype);
Elves.prototype.attack = function () {
    return 'Elves attack with ' + this.weapon + '!'
}
Elves.prototype.isLeader = function () {
    return this.leader? true : false;
}
Elves.prototype.setWeapon = function (weapon) {
    if(['sword', 'bow', 'dagger'].includes(weapon)) {
        this.weapon=weapon;
    } else {
        throw new Error ('Leader is disarmed!')
    }
}

function Men(fullName, group, king) {
    Universe.call(this);
    this.fullName = fullName;
    this.group = group;
    this.king = king;
}
Men.prototype = Object.create(Universe.prototype);
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

const hobbit1 = new Hobbit('Hill', 'farming', 'Bilbo Baggins', 'the Shire', 1.1);
const dwarf1 = new Dwarves ('Mountain', 'metalwork', true, 'crafting')
const elf1 = new Elves('Tranduil', 'sword', 'immortal');
const men1 = new Men('Aragorn', 'The Fellowship of the Ring', true);
