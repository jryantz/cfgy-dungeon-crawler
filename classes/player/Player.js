var plaLvl = 0,
    plaMaxXp = 0,
    plaXp = 0,
    plaMaxHealth = 0,
    plaHealth = 0,
    plaStr = 0,
    plaVit = 0,
    plaAgi = 0,
    plaMoney = 0,
    
    //[x, y]
    plaCurrCell = [0, 0],
    plaPrevCell = [0, 0],
    
    plaName = '',
    plaRace = '',
    plaBg = [],

    plaWeapon = [0, '', 0],
    plaArmor = [0, '', 0],
    plaShield = [0, '', 0],
    plaDefense;

function plaConstruct() {
    /*
     * the following while + if statements will ensure that the player's stats,
     * at creation, will not dip below 8. This is in the favor of the player,
     * of course, but the negatives you'd get from having a strength of 3, for
     * example, would literally be crippling to the point where you might as well
     * refresh the page.
     */
    checker = false;
    while(checker === false) {
        str = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
        if(str > 8) {
            plaStr = str;
            checker = true;
        }
    }//end of 1st while loop
    
    checker = false;
    while(checker === false) {
        vit = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
        if(vit > 8) {
            plaVit = vit;
            checker = true;
        }
    }//end of 2nd while loop
    
    checker = false; 
    while(checker === false) {
        agi = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
        if(agi > 8) {
            plaAgi = agi;
            checker = true;
        }
    }//end of 3rd while loop
    
    plaLvl = 1;
    
    plaMaxXp = 200;
    
    plaHealth = 100;
    plaMaxHealth = 100;
    
    invUp();
}

function plaLvlUp() {
    if(plaXp >= plaMaxXp) {
        //level up player and make sure any excess rolls over to next level
        plaXp = plaXp - plaMaxXp;
        plaMaxXp += Math.floor(plaMaxXp * 0.75);
        plaLvl += 1;
        
        //add health
        plaMaxHealth += Math.floor(plaMaxHealth * 0.5);
        plaHealth = plaMaxHealth;
        
        //increment 3 special stats
        str = Math.round((Math.random() * 3) + 1);
        plaStr += str;
        
        vit = Math.round((Math.random() * 3) + 1);
        plaVit += vit;
        
        agi = Math.round((Math.random() * 3) + 1);
        plaAgi += agi;
        
        //update inventory level if need be
        invUp();
        
        //refresh
        refresh();
    }
}

function invUp() {
    if(plaStr >= 12 && plaStr <= 14) {
        guiChangeLvl(1);
    } else if(plaStr >= 15 && plaStr <= 17) {
        guiChangeLvl(2);
    } else if(plaStr >= 18 && plaStr <= 20) {
        guiChangeLvl(3);
    } else if(plaStr >= 21 && plaStr <= 23) {
        guiChangeLvl(4);
    } else if(plaStr >= 24 && plaStr <= 26) {
        guiChangeLvl(5);
    } else {}
}

//dir - take direction of movement
//0 - up | 1 - down | 2 - left | 3 - right
function plaMove(dir) {
    plaPrevCell = plaCurrCell;
    
    if(dir == 0) {
        plaCurrCell[0] -= 1;
    } else if(dir == 1) {
        plaCurrCell[0] += 1;
    } else if(dir == 2) {
        plaCurrCell[1] -= 1;
    } else if(dir == 3) {
        plaCurrCell[1] += 1;
    } else {}
    
    canMove(plaCurrCell);
    checkExit(plaCurrCell);
    
    checkContents(plaCurrCell);

    regenLvl();
}

function pickupItem(item, val, spec, specval, id) {
    if(specval == null) {
        specval = '<i style=\"color:palegreen;\">boosted</i>';
    }
    
    if(guiSetSlot(item, val, spec, specval, id)) {
        lvl[plaCurrCell[0]][plaCurrCell[1]][3] = 0;
        lvl[plaCurrCell[0]][plaCurrCell[1]][4][1] = null;
        refresh();
        regenLvl();
    }
    
    defaultButtons();
    canMove(plaCurrCell);
}

function setPlaWeapon(damage, val2name, val2) {
    plaWeapon[0] = damage;
    plaWeapon[1] = val2name;
    plaWeapon[2] = val2;
}

function setPlaShield(damage, val2name, val2) {
    plaShield[0] = damage;
    plaShield[1] = val2name;
    plaShield[2] = val2;
    
    setDefense();
}

function setPlaArmor(damage, val2name, val2) {
    plaArmor[0] = damage;
    plaArmor[1] = val2name;
    plaArmor[2] = val2;
    
    setDefense();
}

function setDefense() {
    plaDefense = plaArmor[2] + plaShield[2] + Math.floor((plaAgi - 10) / 2);
}