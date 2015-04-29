function guiShowStats() {
    output = '<div class="slot"><span>Level: ' + plaLvl + '</span></div>';
    
    output += '<div class="slot"><div class="progBarContainer gradient">';
    
    output += '<div class="progressbar green" style="width:' + (plaHealth/plaMaxHealth)*100 + '%"></div></div>';
    
    output += '<span style="margin-left:10px;">HP: ' + plaHealth + '/' + plaMaxHealth + '</span>';
    
    output += '</div><div class="slot"><div class="progBarContainer gradient">';
    
    output += '<div class="progressbar purple" style="width:' + (plaXp/plaMaxXp)*100 + '%"></div></div>';
    
    output += '<span style="margin-left:10px;">XP: ' + plaXp + '/' + plaMaxXp + '</span></div>';
    
    output += '<div class="slot"><span>Strength: ' + plaStr + '</span></div>';
    
    output += '<div class="slot"><span>Intelligence: ' + plaInt + '</span></div>';
    
    output += '<div class="slot"><span>Agility: ' + plaAgi + '</span></div>';
    
    output += '<div class="slot"><span>Money: $' + plaMoney + '</span></div>';
    
    return output;
}