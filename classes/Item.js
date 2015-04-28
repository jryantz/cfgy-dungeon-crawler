//each weapon is saved as an array with "stats" stored in it
//index 1 = weapon name
//index 2 = Damage
//index 3 = Hit Chance
//index 4 = Dodge Chance
//index 5 = Health Boost
//the dodge chance for the bows is zero according to the document so i will put in values of my own for now //feel free to change these values as you see fit. I have done the same for the boss dependant weapons so //feel free to change them as well. Also none of the weapons take advantage of the hit chance stat


var tier1Dagger = ["sharpened Stick", 1, 0, 0, 0];
var tier2Dagger = ["Rusted Dagger", 3, 0, 0, 0];
var tier3Dagger = ["Steel Dagger", 5, 0, 0, 0];
var tier4Dagger = ["Sacrificial Dagger", 7, 0, 0, 0];
var tier5Dagger = ["Shard of Asteria", 10, 0, 0, 0];
var tier1Flail = ["Stick with rock", 1, 0, 0, 0];
var tier2Flail = ["Worn Flail", 4, 0, 0, 0];
var tier3Flail = ["Iron Flail", 6, 0, 0, 0];
var tier4Flail = ["Sacrifial Flail", 9, 0, 0, 0];
var tier5Flail = ["Another Fucking Flail", 12, 0, 0, 0];
var tier1Pole = ["Tree Branch",  4, 0, 0, 0];
var tier2Pole = ["Stone Spear", 6, 0, 0, 0];
var tier3Pole = ["Trident", 9, 0, 0, 0];
var tier4Pole = ["Scythe", 11, 0, 0, 0];
var tier5Pole = ["Astraeus's Splintered staff", 14, 0, 0, 0];
var tier1Sword = ["2x4", 2, 0, 0, 0];
var tier2Sword = ["Bronze Sword", 4, 0, 0, 0];
var tier3Sword = ["Katana", 6, 0, 0, 0];
var tier4Sword = ["Aztec Sword", 8, 0, 0, 0];
var tier5Sword = ["Blade of Olymbros", 11, 0, 0, 0];
var tier1Bow = ["Short Bow", 1, 0, 15, 0];
var tier2Bow = ["Long Bow", 3, 0, 15, 0];
var tier3Bow = ["Recurve Bow", 5, 0, 17, 0];
var tier4Bow = ["Compund Bow", 7, 0, 19, 0];
var tier5Bow = ["Nights Gaze", 10, 0, 21, 0];

    
    
//I have some descriptions if we want to use them for some of the boss weapons I named
//Blade of olymbros : This battered blade is the only remnant left of the titan olymbros
//after his assault on olympus
//Shard of asteria : a grisly looking piece of rock said to have been part of the island of Delso which 
//is rumored to be the remains of Asteria
//Nights Gaze : A large luminescent bow that resembles the moon. This bow was said to be to be crafted by //Theia, the goddess of sight, given to her daughter Selene, goddess of the moon.
//daughter 