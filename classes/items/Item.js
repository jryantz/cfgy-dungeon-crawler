//each weapon is saved as an array with "stats" stored in it
//unlabeled indexes are damage
//the dodge chance for the bows is zero according to the document so i will put in values of my own for now //feel free to change these values as you see fit. I have done the same for the boss dependant weapons so //feel free to change them as well. Also none of the weapons take advantage of the hit chance stat

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



//JON - DONT NEED GET OR SET FUNCTIONS

//function getRandomitem{} : not implemented yet

    
    
//I have some descriptions if we want to use them for some of the boss weapons I named
//Blade of olymbros : This battered blade is the only remnant left of the titan olymbros
//after his assault on olympus
//Shard of asteria : a grisly looking piece of rock said to have been part of the island of Delos which 
//is rumored to be the remains of Asteria
//Nights Gaze : A large luminescent bow that resembles the moon. This bow was said to be to be crafted by //Theia, the goddess of sight, given to her daughter Selene, goddess of the moon.
//daughter
//Gaias Crest Shield : a large wooden lightweight shield. The front depicts an injured man being mended by 
//titan like being presumably Gaia, the entitiy that represents earth.