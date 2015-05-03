//each weapon is saved as an array with "stats" stored in it
//unlabeled indexes are damage
//the dodge chance for the bows is zero according to the document so i will put in values of my own for now //feel free to change these values as you see fit. I have done the same for the boss dependant weapons so //feel free to change them as well. Also none of the weapons take advantage of the hit chance stat

<<<<<<< HEAD
var tier1Dagger = ["Sharpened Stick", 1];
var tier2Dagger = ["Rusted Dagger", 3];
var tier3Dagger = ["Steel Dagger", 5];
var tier4Dagger = ["Sacrificial Dagger", 7];
var tier5Dagger = ["Shard of Asteria", 10];
var tier1Flail = ["Stick with Rock", 1];
var tier2Flail = ["Worn Flail", 4];
var tier3Flail = ["Iron Flail", 6];
var tier4Flail = ["Sacrifial Flail", 9];
var tier5Flail = ["Another Fucking Flail", 12];
var tier1Pole = ["Tree Branch",  4];
var tier2Pole = ["Stone Spear", 6];
var tier3Pole = ["Trident", 9];
var tier4Pole = ["Scythe", 11];
var tier5Pole = ["Astraeus's Splintered Staff", 14];
var tier1Sword = ["2x4", 2];
var tier2Sword = ["Bronze Sword", 4];
var tier3Sword = ["Katana", 6];
var tier4Sword = ["Aztec Sword", 8];
var tier5Sword = ["Blade of Olymbros", 11];
var tier1Bow = ["Short Bow", 1, "Dodge Chance", 15];
var tier2Bow = ["Long Bow", 3, "Dodge Chance", 15];
var tier3Bow = ["Recurve Bow", 5, "Dodge Chance", 17];
var tier4Bow = ["Compund Bow", 7,  "Dodge Chance", 19];
var tier5Bow = ["Nights Gaze", 10, "Dodge Chance", 21];
var tier1shield = ["Battered Shield", "Health Bonus", 15];
var tier2shield = ["Roman Shield", "Health Bonus", 60];
var tier3shield = ["Spiked Shield", 2, "Health Bonus", 35];
var tier4shield = ["Molten Shield", 3, "Health Bonus", 45];
var tier5shield = ["Gaias Crest Shield", 4, "Health Bonus", 100];
var tier1Armor = ["Torn Leather Armor", "Defense", 2];
var tier2Armor = ["Studded Leather Armor", "Defense", 3];
var tier3Armor = ["Chain Vest", "Defense", 4];
var tier4Armor = ["pyrium suit", 5];
var tier5Armor = ["Armor of the Ancients", 6];


//these functions provide a random item of a certain tier
=======
var tier1Dagger = ["Sharpened Stick", 1],
    tier2Dagger = ["Rusted Dagger", 3],
    tier3Dagger = ["Steel Dagger", 5],
    tier4Dagger = ["Sacrificial Dagger", 7],
    tier5Dagger = ["Shard of Asteria", 10],
    tier1Flail = ["Stick with Rock", 1],
    tier2Flail = ["Worn Flail", 4],
    tier3Flail = ["Iron Flail", 6],
    tier4Flail = ["Sacrifial Flail", 9],
    tier5Flail = ["Another Fucking Flail", 12],
    tier1Pole = ["Tree Branch",  4],
    tier2Pole = ["Stone Spear", 6],
    tier3Pole = ["Trident", 9],
    tier4Pole = ["Scythe", 11],
    tier5Pole = ["Astraeus's Splintered Staff", 14],
    tier1Sword = ["2x4", 2],
    tier2Sword = ["Bronze Sword", 4],
    tier3Sword = ["Katana", 6],
    tier4Sword = ["Aztec Sword", 8],
    tier5Sword = ["Blade of Olymbros", 11],
    tier1Bow = ["Short Bow", 1, "Dodge Chance", 15],
    tier2Bow = ["Long Bow", 3, "Dodge Chance", 15],
    tier3Bow = ["Recurve Bow", 5, "Dodge Chance", 17],
    tier4Bow = ["Compund Bow", 7,  "Dodge Chance", 19],
    tier5Bow = ["Nights Gaze", 10, "Dodge Chance", 21],
    tier1shield = ["Battered Shield", "Health Bonus", 15],
    tier2shield = ["Roman Shield", "Health Bonus", 60],
    tier3shield = ["Spiked Shield", 2, "Health Bonus", 35],
    tier4shield = ["Molten Shield", 3, "Health Bonus", 45],
    tier5shield = ["Gaias Crest Shield", 4, "Health Bonus", 100],
    tier1Armor = ["Torn Leather Armor", "Defense", 2],
    tier2Armor = ["Studded Leather Armor", "Defense", 3],
    tier3Armor = ["Chain Vest", "Defense", 4],
    tier4Armor = ["pyrium suit", 5],
    tier5Armor = ["Armor of the Ancients", 6];
>>>>>>> origin/master

function randomItemTier1() {
    var choice = Math.round((Math.random() * 6) + 1);
    Switch(choice) {
        case 1:
            return tier1Dagger;
            break;
        case 2: 
            return tier1Flail;
            break;
        case 3: 
            return tier1Pole;
            break;
        case 4:
            return tier1sword;
            break;
        case 5:
            return tier1Bow;
            break;
        case 6:
            return tier1shield;
            break;
        case 7:
            return tier1Armor;
            break;
        default:
<<<<<<< HEAD
            return "YO HO YO HO NEAR THE BOOTS I'LL NEVER GO!"
=======
            return "YOHOHO NEAR THE BOOTS I'LL NEVER GO!";
>>>>>>> origin/master
    }
} 

function randomItemTier2() {
    var choice = Math.round((Math.random() * 6) + 1);
    Switch(choice) {
        case 1:
            return tier2Dagger;
            break;
        case 2: 
            return tier2Flail;
            break;
        case 3: 
            return tier2Pole;
            break;
        case 4:
            return tier2sword;
            break;
        case 5:
            return tier2Bow;
            break;
        case 6:
            return tier2shield;
            break;
        case 7:
            return tier2Armor;
            break;
        default:
<<<<<<< HEAD
            return "YO HO YO HO NEAR THE BOOTS I'LL NEVER GO!"
=======
            return "YOHOHO NEAR THE BOOTS I'LL NEVER GO!";
>>>>>>> origin/master
    }
} 

function randomItemTier3() {
    var choice = Math.round((Math.random() * 6) + 1);
    Switch(choice) {
        case 1:
            return tier3Dagger;
            break;
        case 2: 
            return tier3Flail;
            break;
        case 3: 
            return tier3Pole;
            break;
        case 4:
            return tier3sword;
            break;
        case 5:
            return tier3Bow;
            break;
        case 6:
            return tier3shield;
            break;
        case 7:
            return tier3Armor;
            break;
        default:
<<<<<<< HEAD
            return "YO HO YO HO NEAR THE BOOTS I'LL NEVER GO!"
=======
            return "YOHOHO NEAR THE BOOTS I'LL NEVER GO!";
>>>>>>> origin/master
    }
} 

function randomItemTier4() {
    var choice = Math.round((Math.random() * 6) + 1);
    Switch(choice) {
        case 1:
            return tier4Dagger;
            break;
        case 2: 
            return tier4Flail;
            break;
        case 3: 
            return tier4Pole;
            break;
        case 4:
            return tier4sword;
            break;
        case 5:
            return tier4Bow;
            break;
        case 6:
            return tier4shield;
            break;
        case 7:
            return tier4Armor;
            break;
        default:
            return "YOHOHO NEAR THE BOOTS I'LL NEVER GO!";
    }
} 

function randomItemTier5() {
    var choice = Math.round((Math.random() * 6) + 1);
    Switch(choice) {
        case 1:
            return tier5Dagger;
            break;
        case 2: 
            return tier5Flail;
            break;
        case 3: 
            return tier5Pole;
            break;
        case 4:
            return tier5sword;
            break;
        case 5:
            return tier5Bow;
            break;
        case 6:
            return tier5shield;
            break;
        case 7:
            return tier5Armor;
            break;
        default:
<<<<<<< HEAD
            return "YO HO YO HO NEAR THE BOOTS I'LL NEVER GO!"
=======
            return "YOHOHO NEAR THE BOOTS I'LL NEVER GO!";
>>>>>>> origin/master
    }
}

//returns item from certain tiers
//1 returns a dagger, 2 returns a flail, 3 returns a pole, 4 returns sword, 5 returns bow, 6 returns shield
//7 returns armor

function tier1Item(x) {
    Switch(x) {
        case 1:
            return tier1Dagger
            break;
        case 2: 
            return tier1Flail
            break;
        case 3: 
            return tier1Pole
            break;
        case 4:
            return tier1sword
            break;
        case 5:
            return tier1Bow
            break;
        case 6:
            return tier1shield
            break;
        case 7:
            return tier1Armor
            break;
        default:
            return "YO HO YO HO NEAR THE BOOTS I'LL NEVER GO!"
    }
}

function tier2Item(x) {
    Switch(x) {
        case 1:
            return tier2Dagger
            break;
        case 2: 
            return tier2Flail
            break;
        case 3: 
            return tier2Pole
            break;
        case 4:
            return tier2sword
            break;
        case 5:
            return tier2Bow
            break;
        case 6:
            return tier2shield
            break;
        case 7:
            return tier2Armor
            break;
        default:
            return "YO HO YO HO NEAR THE BOOTS I'LL NEVER GO!"
    }
}

function tier3Item(x) {
    Switch(x) {
        case 1:
            return tier3Dagger
            break;
        case 2: 
            return tier3Flail
            break;
        case 3: 
            return tier3Pole
            break;
        case 4:
            return tier3sword
            break;
        case 5:
            return tier3Bow
            break;
        case 6:
            return tier3shield
            break;
        case 7:
            return tier3Armor
            break;
        default:
            return "YO HO YO HO NEAR THE BOOTS I'LL NEVER GO!"
    }
}

function tier4Item(x) {
    Switch(x) {
        case 1:
            return tier4Dagger
            break;
        case 2: 
            return tier4Flail
            break;
        case 3: 
            return tier4Pole
            break;
        case 4:
            return tier4sword
            break;
        case 5:
            return tier4Bow
            break;
        case 6:
            return tier4shield
            break;
        case 7:
            return tier4Armor
            break;
        default:
            return "YO HO YO HO NEAR THE BOOTS I'LL NEVER GO!"
    }
}

function tier5Item(x) {
    Switch(x) {
        case 1:
            return tier5Dagger
            break;
        case 2: 
            return tier5Flail
            break;
        case 3: 
            return tier5Pole
            break;
        case 4:
            return tier5sword
            break;
        case 5:
            return tier5Bow
            break;
        case 6:
            return tier5shield
            break;
        case 7:
            return tier5Armor
            break;
        default:
            return "YO HO YO HO NEAR THE BOOTS I'LL NEVER GO!"
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
