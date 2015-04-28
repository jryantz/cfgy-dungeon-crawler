var guiLvl = 2,
    guiMaxXp = 60,
    guiXp = 54,
    guiMaxHealth = 100,
    guiHealth = 50,
    guiStr = 7,
    guiInt = 3,
    guiAgi = 4,
    guiMoney = 364;

function guiSetLvl(num) {
    if(!isNaN(num)) {
        guiLvl = num;
    }
}

function guiSetMaxXp(num) {
    if(!isNaN(num)) {
        guiMaxXp = num;
    }
}

function guiSetXp(num) {
    if(guiMaxXp >= num) {
        if(!isNaN(num)) {
            guiXp = num;
        }
    }
}

function guiSetMaxHealth(num) {
    if(!isNaN(num)) {
        guiMaxHealth = num;
    }
}

function guiSetHealth(num) {
    if(guiMaxHealth >= num) {
        if(!isNaN(num)) {
            guiHealth = num;
        }
    }
}

function guiSetStr(num) {
    if(!isNaN(num)) {
        guiStr = num;
    }
}

function guiSetInt(num) {
    if(!isNaN(num)) {
        guiInt = num;
    }
}

function guiSetAgility(num) {
    if(!isNaN(num)) {
        guiAgility = num;
    }
}

function guiSetMoney(num) {
    if(!isNaN(num)) {
        guiMoney = num;
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