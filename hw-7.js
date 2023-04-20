'use strict';

class Universe {
    constructor() {
        this.location='Seven Kingdoms';
        this.creator='George R. R. Martin';
    }
    setHomeland() {
        return console.log('My homeland is ' + this.location + ' created by ' + this.creator)
    }
}

class TheNorth extends Universe {
    constructor(logo, leader) {
        super();
        this.logo = logo;
        this.leader = leader;
    }
    isLeader(){
        return this.isLeader? true : false;
    }
    setLeader(leader) {
        if (['Eddard Stark', 'Ramsay Boltone'].includes(leader)) {
            this.leader=leader;
        } else {
            throw new Error('This Leader is not from the North');
        }
    }
    greetLeader() {
        if (this.leader) {
            console.log(this.leader + ' is in the North of ' + this.location);
        } else {
            console.log('Leader is not in the North');
        }
    }

}

class Stark extends TheNorth {
    #animal;
    constructor(logo, leader, castle, brotherhood, animal) {
        super(logo, leader);
        this.castle = castle;
        this.brotherhoor = brotherhood;
        this.#animal = animal;
    }
    sayMotto() {
        console.log('Winter is coming')
    }
    callLeader() {
        console.log(this.leader + ', Lord of ' + this.castle)
    }
    setBrotherhood(brotherhood) {
        if(['Night`s Watch'].includes(brotherhood)) {
            this.brotherhoor=brotherhood;
        } else {
            throw new Error('White Walkers attack!')
        }
    }

}

class Lannister extends Universe {
    #phrase;
    constructor(king, realm, enemy) {
        super();
        this.king=king;
        this.realm=realm;
        this.enemy=enemy;
        this.#phrase = ' A Lannister always pays their debts';
    }
    yell() {
        console.log('Hear me roar!')
    }
    sayPhrase() {
        console.log(this.#phrase)
    }
    greetEnemy() {
        if (this.enemy) {
            console.log(this.realm + 'is enemy');
        } else {
            console.log(this.realm + 'is friend');
        }
    }
}

class Bolton extends TheNorth {
    #country
    constructor(logo, leader, bastard, weapon, country) {
        super(logo, leader);
        this.bastard=bastard;
        this.weapon=weapon;
        this.character='cruel';
        this.#country=country;
    }
    greetBastard() {
        if (this.bastard) {
            console.log(this.leader + ' is bastard');
        } else {
            console.log(this.leader + ' is not bastard');
        }
    }
    getCharakter() {
        console.log(this.leader + ' is ' + this.character);
    }
    isWeapon(){
        return this.weapon? true : false;
    }
    setWeapon(weapon) {
        if(['sword', 'crossbow', 'dagger'].includes(weapon)) {
            this.weapon=weapon;
        } else {
            throw new Error ('This is not a weapon!')
        }
    }
    attack() {
        if (this.isWeapon()) {
            alert('Attack!!');
        } console.log (this.leader + ' is disarmed');
    }

}

class Greyjoy extends Universe {
    #motto
    constructor(sigil, nature, prince, age) {
        super();
        this.sigil=sigil;
        this.#motto='We do not sow';
        this.prince=prince;
        this.age=age;
        this.nature=nature;
    }
    houseHabitat() {
        console.log('House Greyjoy attacks from the ' + this.nature.toLowerCase())
    }
    howOld() {
        console.log(this.prince + ' is' + this.age + ' years old')
    }
    getSigil() {
        console.log('House Greyjoy`s sigil is traditionally a ' + this.sigil)
    }

}

const stark1 = new Stark ('Direwolf','Eddard Stark','Winterfell','Night`s Watch','wolf');
const lannister1 = new Lannister ('Joffrey Baratheon','House Stark', true)
const bolton1 = new Bolton ('Our blades are sharp', 'Ramsay Bolton', true, 'sword','Westeros');
const greyjoy = new Greyjoy ('Kraken','Sea','Theon Greyjoy',24);

