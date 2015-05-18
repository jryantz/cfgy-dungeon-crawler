function defaultButtons() {
    document.getElementById('interactionPane').innerHTML = '<a href="#" class="debug" onclick="flip(\'mainPane\', \'debugPane\');"></a>';
    document.getElementById('interactionPane').innerHTML += '<a href="#" class="button" onclick="enterBase();">Enter Base</a>';
    
    document.getElementById('interactionPane').innerHTML += '<div class="dirKeys"><a class="button key locked"></a><a href="#" onclick="plaMove(0);" id="up" class="button key">&uarr;</a><a class="button key locked"></a><a href="#" onclick="plaMove(2);" id="le" class="button key">&larr;</a><a href="#" onclick="plaMove(1);" id="do" class="button key">&darr;</a><a href="#" onclick="plaMove(3);" id="ri" class="button key">&rarr;</a></div>';
}

function baseButtons() {
    document.getElementById('interactionPane').innerHTML = '<a href="#" class="debug" onclick="flip(\'mainPane\', \'debugPane\');"></a>';
    document.getElementById('interactionPane').innerHTML += '<a href="#" class="button" onclick="leaveBase();">Leave Base</a>';
    document.getElementById('interactionPane').innerHTML += '<a href="#" class="button" onclick="showMerch();">Visit Merchant</a>';
    
    if(plaLvl > 1 && baseLvl < 1) {
        document.getElementById('interactionPane').innerHTML += '<a href="#" class="button" onclick="upgradeBase();">Upgrade Base</a>';
    }
}

function enemyButtons(column, row) {
    document.getElementById('interactionPane').innerHTML = '<a href="#" class="debug" onclick="flip(\'mainPane\', \'debugPane\');"></a>';
    //weapon
    document.getElementById('interactionPane').innerHTML += '<div class="enemySec" id="weapon"><span style="display:block;">Weapons<span></div>';
    for(i = 0; i <= 8; i++) {
        if(guiSlots[i][4] == 0 && guiSlots[i][0] != 'empty') {
            if(guiSlots[i][5] >= 0 && guiSlots[i][5] <= 24) {
                if(isNaN(guiSlots[i][3])) {
                    guiSloti3 = 0;
                } else {
                    guiSloti3 = guiSlots[i][3];
                }
                
                document.getElementById('weapon').innerHTML += '<a href="#" class="button" onclick="addMain(\'Attack weapon: ' + guiSlots[i][0] + '\', \'combat\'); showMain(); setPlaWeapon(' + guiSlots[i][1] + ', \'' + guiSlots[i][2] + '\', ' + guiSloti3 + ');">' + guiSlots[i][0] + '</a>';
            }
        }
    }
    
    //shield
    document.getElementById('interactionPane').innerHTML += '<div class="enemySec" id="shield"><span style="display:block;">Shields</span></div>';
    for(i = 0; i <= 8; i++) {
        if(guiSlots[i][4] == 0 && guiSlots[i][0] != 'empty') {
            if(guiSlots[i][5] >= 25 && guiSlots[i][5] <= 29) {
                document.getElementById('shield').innerHTML += '<a href="#" class="button" onclick="addMain(\'Shield: ' + guiSlots[i][0] + '\', \'combat\'); showMain(); setPlaShield(' + guiSlots[i][1] + ', \'' + guiSlots[i][2] + '\', ' + guiSlots[i][3] + ');">' + guiSlots[i][0] + '</a>';
            }
        }
    }
    
    //armor
    document.getElementById('interactionPane').innerHTML += '<div class="enemySec" id="armor"><span style="display:block;">Armor</span></div>';
    for(i = 0; i <= 8; i++) {
        if(guiSlots[i][4] == 0 && guiSlots[i][0] != 'empty') {
            if(guiSlots[i][5] >= 30 && guiSlots[i][5] <= 34) {
                document.getElementById('armor').innerHTML += '<a href="#" class="button" onclick="addMain(\'Armor: ' + guiSlots[i][0] + '\', \'combat\'); showMain(); setPlaArmor(' + guiSlots[i][1] + ', \'' + guiSlots[i][2] + '\', ' + guiSlots[i][3] + ');">' + guiSlots[i][0] + '</a>';
            }
        }
    }
    
    document.getElementById('interactionPane').innerHTML += '<a href="#" class="button" style="position:absolute; right:10px; bottom:10px;" onclick="startCombat(' + lvl[column][row][4][0][0] + ');">Start Combat</a>';
}

function combatButtons() {
    document.getElementById('interactionPane').innerHTML = '<a href="#" class="button" onclick"">Keep Fighting</a>';
    document.getElementById('interactionPane').innerHTML += '<a href="#" class="button" onclick"">Run</a>';
}

function itemButtons(column, row) {
    document.getElementById('interactionPane').innerHTML = '<a href="#" class="debug" onclick="flip(\'mainPane\', \'debugPane\');"></a>';
    document.getElementById('interactionPane').innerHTML += '<a href="#" class="button" onclick="pickupItem(\'' + lvl[column][row][4][1][1] + '\', ' + lvl[column][row][4][1][2] + ', \'' + lvl[column][row][4][1][3] + '\', ' + lvl[column][row][4][1][4] + ', ' + lvl[column][row][4][1][0] + ');">Pickup Item</a>';
    document.getElementById('interactionPane').innerHTML += '<a href="#" class="button" onclick="defaultButtons();">Ignore Item</a>';
    document.getElementById('interactionPane').innerHTML += '<br><br>Item: ' + lvl[column][row][4][1][1];
}

function blank() {
    document.getElementById('interactionPane').innerHTML = '<a href="#" class="debug" onclick="flip(\'mainPane\', \'debugPane\');"></a>';
}