var plaLvl = 0,
    plaMaxXp = 0,
    plaXp = 0,
    plaMaxHealth = 0,
    plaHealth = 0,
    plaStr = 0,
    plaInt = 0,
    plaAgi = 0,
    plaMoney = 0,
    
    plaMaxInv = 0,
    plaInv = [],
    
    plaName = '',
    plaRace = '',
    plaBg = [];

function plaConstruct() {
    plaStr = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
    plaInt = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
    plaAgi = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
    
    plaLvl = 1;
    
    plaMaxXp = 200;
    
    plaHealth = 100;
    plaMaxHealth = 100;
}

function plaLvlUp() {
    if(plaXp >= plaMaxXp) {
        plaXp = plaXp - plaMaxXp;
        plaMaxXp += Math.floor(plaMaxXp * 0.75);
        plaLvl += 1;
    }
}