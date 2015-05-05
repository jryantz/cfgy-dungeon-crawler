var eneLvl = 0,
    eneXp = 0,
    eneHealth = 0,
    eneStr = 0,
    eneInt = 0,
    eneAgi = 0,
    eneDef = 0;
    eneMoney = 0,
        
    eneWeap = '',

    eneName = '';

/*
 * creates an enemy
 * 
 * something will pass the information necessary to change these variables
 * since the player is only ever fighting one enemy at a time, the same variables should be able to be reused and rewritten
 * only forseeable issue is if the player runs from the current enemy and then walks into another one
 * the enemy regain all of its health when the player runs away from it and just reset
 * weapon is a string for now as a placeholder
 */
function eneConstruct(name, health, str, int, agi, defense, xp, lvl, money, weapon) {
    eneLvl = lvl;
    eneXp = xp;
    eneHealth = health;
    eneStr = str;
    eneInt = int;
    eneAgi = agi;
    eneDef = defense;
    eneMoney = money;
    
    eneWeap = weapon;
    
    eneName = name;
}