var maxHealth = 0,
    health = 0,
    race = '',
    str = 0,
    vitality = 0,
    agi = 0,
    maxInv = 0,
    inv = [],
    maxXp = 0,
    xp = 0,
    lvl = 0,
    wallet = 0,
    name = '',
    bg = [];

function() {
    str = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
    vitality = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
    agi = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
    lvl = 1;
    
    maxXp = 200;
}

function getMaxHealth() {
    
}