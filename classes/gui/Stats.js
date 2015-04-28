var guiLvl = 2,
    guiMaxXp = 60,
    guiXp = 54,
    guiMaxHealth = 100,
    guiHealth = 50,
    guiStr = 7,
    guiInt = 3,
    guiAgility = 4,
    guiMoney = 364;

function guiSetLvl(num) {
    if(!isNaN(num)) {
        lvl = num;
    }
}

function guiSetMaxXp(num) {
    if(!isNaN(num)) {
        maxXp = num;
    }
}

function guiSetXp(num) {
    if(maxXp >= num) {
        if(!isNaN(num)) {
            xp = num;
        }
    }
}

function guiSetMaxHealth(num) {
    if(!isNaN(num)) {
        maxHealth = num;
    }
}

function guiSetHealth(num) {
    if(maxHealth >= num) {
        if(!isNaN(num)) {
            health = num;
        }
    }
}

function guiSetStr(num) {
    if(!isNaN(num)) {
        str = num;
    }
}

function guiSetInt(num) {
    if(!isNaN(num)) {
        int = num;
    }
}

function guiSetAgility(num) {
    if(!isNaN(num)) {
        agility = num;
    }
}

function guiSetMoney(num) {
    if(!isNaN(num)) {
        money = num;
    }
}

function guiShowStats() {
    output = '<div class="slot"><span>Level: ' + guiLvl + '</span></div>';
    
    output += '<div class="slot"><div class="progBarContainer gradient">';
    
    output += '<div class="progressbar green" style="width:' + (guiHealth/guiMaxHealth)*100 + '%"></div></div>';
    
    output += '<span style="margin-left:10px;">HP: ' + guiHealth + '/' + guiMaxHealth + '</span>';
    
    output += '</div><div class="slot"><div class="progBarContainer gradient">';
    
    output += '<div class="progressbar purple" style="width:' + (guiXp/guiMaxXp)*100 + '%"></div></div>';
    
    output += '<span style="margin-left:10px;">XP: ' + guiXp + '/' + guiMaxXp + '</span></div>';
    
    output += '<div class="slot"><span>Strength: ' + guiStr + '</span></div>';
    
    output += '<div class="slot"><span>Intelligence: ' + guiInt + '</span></div>';
    
    output += '<div class="slot"><span>Agility: ' + guiAgility + '</span></div>';
    
    output += '<div class="slot"><span>Money: $' + guiMoney + '</span></div>';
    
    return output;
}