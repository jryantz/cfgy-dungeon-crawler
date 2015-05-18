//each weapon is saved as an array with "stats" stored in it
//unlabeled indexes are damage
//the dodge chance for the bows is zero according to the document so i will put in values of my own for now 
//feel free to change these values as you see fit. I have done the same for the boss dependant weapons so 
//feel free to change them as well. Also none of the weapons take advantage of the hit chance stat

//id, name, damage, stat name, stat value
//dagger
var i0 = [0, 'Sharpened Stick', 3, 'Agility', null],
    i1 = [1, 'Rusted Dagger', 5, 'Agility', null],
    i2 = [2, 'Steel Dagger', 7, 'Agility', null],
    i3 = [3, 'Sacrificial Dagger', 9, 'Agility', null],
    i4 = [4, 'Shard of Asteria', 12, 'Agility', null];
    
//flail
var i5 = [5, 'Stick with Rock', 2, 'Strength', null],
    i6 = [6, 'Worn Flail', 6, 'Strength', null],
    i7 = [7, 'Iron Flail', 8, 'Strength', null],
    i8 = [8, 'Sacrifial Flail', 11, 'Strength', null],
    i9 = [9, 'Another Fucking Flail', 14, 'Strength', null];

//pole weapon
var i10 = [10, 'Tree Branch',  5, 'Strength', null],
    i11 = [11, 'Stone Spear', 8, 'Strength', null],
    i12 = [12, 'Trident', 11, 'Strength', null],
    i13 = [13, 'Scythe', 13, 'Strength', null],
    i14 = [14, 'Astraeus\'s Splintered Staff', 16, 'Strength', null];

//sword
var i15 = [15, '2x4', 5, 'Strength', null],
    i16 = [16, 'Bronze Sword', 6, 'Strength', null],
    i17 = [17, 'Katana', 8, 'Strength', null],
    i18 = [18, 'Macuahuitl', 10, 'Strength', null],
    i19 = [19, 'Blade of Olymbros', 13, 'Strength', null];

//bow
var i20 = [20, 'Short Bow', 3, 'Dodge Chance', 15],
    i21 = [21, 'Long Bow', 5, 'Dodge Chance', 15],
    i22 = [22, 'Recurve Bow', 7, 'Dodge Chance', 17],
    i23 = [23, 'Compund Bow', 9, 'Dodge Chance', 19],
    i24 = [24, 'Nights Gaze', 12, 'Dodge Chance', 21];

//shield
var i25 = [25, 'Battered Shield', 0, 'Health Bonus', 15],
    i26 = [26, 'Roman Shield', 0, 'Health Bonus', 60],
    i27 = [27, 'Spiked Shield', 4, 'Health Bonus', 35],
    i28 = [28, 'Molten Shield', 5, 'Health Bonus', 45],
    i29 = [29, 'Gaias Crest Shield', 6, 'Health Bonus', 100];

//armor
var i30 = [30, 'Torn Leather Armor', 0, 'Defense', 2],
    i31 = [31, 'Studded Leather Armor', 0, 'Defense', 3],
    i32 = [32, 'Chain Vest', 0, 'Defense', 4],
    i33 = [33, 'Pyrium Suit', 0, 'Defense', 5],
    i34 = [34, 'Armor of the Ancients', 0, 'Defense', 6];


//these functions provide a random item of a certain tier
function randomItemTier1() {
    var choice = Math.round((Math.random() * 6) + 1);
    switch(choice) {
        case 1:
            return i0;
            break;
        case 2: 
            return i5;
            break;
        case 3: 
            return i10;
            break;
        case 4:
            return i15;
            break;
        case 5:
            return i20;
            break;
        case 6:
            return i25;
            break;
        case 7:
            return i30;
            break;
        default:
            break;
    }
} 

function randomItemTier2() {
    var choice = Math.round((Math.random() * 6) + 1);
    switch(choice) {
        case 1:
            return i1;
            break;
        case 2: 
            return i6;
            break;
        case 3: 
            return i11;
            break;
        case 4:
            return i16;
            break;
        case 5:
            return i21;
            break;
        case 6:
            return i26;
            break;
        case 7:
            return i31;
            break;
        default:
            break;
    }
} 

function randomItemTier3() {
    var choice = Math.round((Math.random() * 6) + 1);
    switch(choice) {
        case 1:
            return i2;
            break;
        case 2: 
            return i7;
            break;
        case 3: 
            return i12;
            break;
        case 4:
            return i17;
            break;
        case 5:
            return i22;
            break;
        case 6:
            return i27;
            break;
        case 7:
            return i32;
            break;
        default:
            break;
    }
} 

function randomItemTier4() {
    var choice = Math.round((Math.random() * 6) + 1);
    switch(choice) {
        case 1:
            return i3;
            break;
        case 2: 
            return i8;
            break;
        case 3: 
            return i13;
            break;
        case 4:
            return i18;
            break;
        case 5:
            return i23;
            break;
        case 6:
            return i28;
            break;
        case 7:
            return i33;
            break;
        default:
            break;
    }
} 

function randomItemTier5() {
    var choice = Math.round((Math.random() * 6) + 1);
    switch(choice) {
        case 1:
            return i4;
            break;
        case 2: 
            return i9;
            break;
        case 3: 
            return i14;
            break;
        case 4:
            return i19;
            break;
        case 5:
            return i24;
            break;
        case 6:
            return i29;
            break;
        case 7:
            return i34;
            break;
        default:
            break;
    }
}

//returns item from certain tiers
//1 returns a dagger, 2 returns a flail, 3 returns a pole, 4 returns sword, 5 returns bow, 6 returns shield
//7 returns armor
function tier1Item(x) {
    switch(x) {
        case 1:
            return i0;
            break;
        case 2: 
            return i5;
            break;
        case 3: 
            return i10;
            break;
        case 4:
            return i15;
            break;
        case 5:
            return i20;
            break;
        case 6:
            return i25;
            break;
        case 7:
            return i30;
            break;
        default:
            break;
    }
}

function tier2Item(x) {
    switch(x) {
        case 1:
            return i1;
            break;
        case 2: 
            return i6;
            break;
        case 3: 
            return i11;
            break;
        case 4:
            return i16;
            break;
        case 5:
            return i21;
            break;
        case 6:
            return i26;
            break;
        case 7:
            return i31;
            break;
        default:
            break;
    }
}

function tier3Item(x) {
    switch(x) {
        case 1:
            return i2;
            break;
        case 2: 
            return i7;
            break;
        case 3: 
            return i12;
            break;
        case 4:
            return i17;
            break;
        case 5:
            return i22;
            break;
        case 6:
            return i27;
            break;
        case 7:
            return i32;
            break;
        default:
            break;
    }
}

function tier4Item(x) {
    switch(x) {
        case 1:
            return i3;
            break;
        case 2: 
            return i8;
            break;
        case 3: 
            return i13;
            break;
        case 4:
            return i18;
            break;
        case 5:
            return i23;
            break;
        case 6:
            return i28;
            break;
        case 7:
            return i33;
            break;
        default:
            break;
    }
}

function tier5Item(x) {
    switch(x) {
        case 1:
            return i4;
            break;
        case 2: 
            return i9;
            break;
        case 3: 
            return i14;
            break;
        case 4:
            return i19;
            break;
        case 5:
            return i24;
            break;
        case 6:
            return i29;
            break;
        case 7:
            return i34;
            break;
        default:
            break;
    }
}



        

    
    
//I have some descriptions if we want to use them for some of the boss weapons I named
//Blade of olymbros : This battered blade is the only remnant left of the titan olymbros
//after his assault on olympus
//Shard of asteria : a grisly looking piece of rock said to have been part of the island of Delos which 
//is rumored to be the remains of Asteria
//Nights Gaze : A large luminescent bow that resembles the moon. This bow was said to be to be crafted by //Theia, the goddess of sight, given to her daughter Selene, goddess of the moon.
//daughter
//Gaias Crest Shield : a large wooden lightweight shield. The front depicts an injured man being mended by 
//titan like being presumably Gaia, the entitiy that represents earth.
//Armor of the Ancients : This is the suit of armor was worn by kratos during his battles. While it looks 
//like any common soldiers armor, this particular suit produces bright ripples upon impact that absorb
//most if not all of the attack
