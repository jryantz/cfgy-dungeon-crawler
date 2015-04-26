var lvl = 2,
    maxXp = 60,
    xp = 54,
    maxHealth = 100,
    health = 50,
    str = 7,
    int = 3,
    agility = 4,
    money = 364;

function setLvl(num) {
    if(!isNaN(num)) {
        lvl = num;
    }
}

function setMaxXp(num) {
    if(!isNaN(num)) {
        maxXp = num;
    }
}

function setXp(num) {
    if(maxXp >= num) {
        if(!isNaN(num)) {
            xp = num;
        }
    }
}

function setMaxHealth(num) {
    if(!isNaN(num)) {
        maxHealth = num;
    }
}

function setHealth(num) {
    if(maxHealth >= num) {
        if(!isNaN(num)) {
            health = num;
        }
    }
}

function setStr(num) {
    if(!isNaN(num)) {
        str = num;
    }
}

function setInt(num) {
    if(!isNaN(num)) {
        int = num;
    }
}

function setAgility(num) {
    if(!isNaN(num)) {
        agility = num;
    }
}

function setMoney(num) {
    if(!isNaN(num)) {
        money = num;
    }
}

function show() {
    output = '<div class="slot"><span>Level: ' + lvl + '</span></div>';
    
    output += '<div class="slot"><div class="progBarContainer gradient">';
    
    output += '<div class="progressbar green" style="width:' + (health/maxHealth)*100 + '%"></div></div>';
    
    output += '<span style="margin-left:10px;">HP: ' + health + '/' + maxHealth + '</span>';
    
    output += '</div><div class="slot"><div class="progBarContainer gradient">';
    
    output += '<div class="progressbar purple" style="width:' + (xp/maxXp)*100 + '%"></div></div>';
    
    output += '<span style="margin-left:10px;">XP: ' + xp + '/' + maxXp + '</span></div>';
    
    output += '<div class="slot"><span>Strength: ' + str + '</span></div>';
    
    output += '<div class="slot"><span>Intelligence: ' + int + '</span></div>';
    
    output += '<div class="slot"><span>Agility: ' + agility + '</span></div>';
    
    output += '<div class="slot"><span>Money: $' + money + '</span></div>';
    
    return output;
}