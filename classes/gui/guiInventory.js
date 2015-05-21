//guiSlots = [name, damage value, stat 2 name, stat 2 value, locked/unlocked, item#]

var guiInventoryLvl = 0,
    guiSlots = [
        ['', null, null, null, 0, null],
        ['', null, null, null, 0, null],
        ['', null, null, null, 0, null],
        ['', null, null, null, 0, null],
        ['', null, null, null, 1, null],
        ['', null, null, null, 1, null],
        ['', null, null, null, 1, null],
        ['', null, null, null, 1, null],
        ['', null, null, null, 1, null]
    ];

function guiChangeLvl(num) {
    if(!isNaN(num) && num < 6 && num >= 0) {
        guiInventoryLvl = num;
        switch(num) {
            case 5:
                guiSlots[8][0] = '';
                break;
            case 4:
                guiSlots[7][0] = '';
                break;
            case 3:
                guiSlots[6][0] = '';
                break;
            case 2:
                guiSlots[5][0] = '';
                break;
            case 1:
                guiSlots[4][0] = '';
                break;
            default:
                break;
        }
        guiSlotCheck(num);
    }
}

function guiSetSlot(item, stat1v, stat2n, stat2v, id) {
    for(i = 0; i <= 8; i++) {
        if(guiSlots[i][0] == 'empty' && guiSlots[i][4] == 0) {
            num = i;
            break;
        }
    }
        
    if(guiSlots[num][0] != 'empty' && guiSlots[num][4] == 0) {
        document.getElementById('alertCont').innerHTML = '<div id="alert" class="alert">There are no more slots available.</div>';
        setTimeout(function() {
            display('alertCont');
        }, 5000);
        display('alertCont');
        
        return false;
    }
    
    guiSlots[num][0] = item;
    guiSlots[num][1] = stat1v;
    guiSlots[num][2] = stat2n;
    
    if(stat2v <= 1) {
        stat2v = stat2v * 100;
    }
    
    guiSlots[num][3] = stat2v;
    guiSlots[num][5] = id;
    
    guiSlotCheck(num);
    return true;
}

function guiUnsetSlot(num) {
    guiSlots[num][0] = '';
    guiSlots[num][1] = null;
    guiSlots[num][2] = null;
    guiSlots[num][3] = null;
    
    guiSlotCheck(num);
    
    for(i = num += 1; i <= 8; i++) {
        if(guiSlots[i][0] != null && guiSlots[i][0] != 'locked') {
            for(j = 0; j < 6; j++) {
                guiSlots[i - 1][j] = guiSlots[i][j];
                if(j == 0) {
                    guiSlots[i][j] = 'empty';
                } else {
                    guiSlots[i][j] = null;
                }
            }
        }
    }
    
    plaWeapon = [0, '', 0],
    plaArmor = [0, '', 0],
    plaShield = [0, '', 0],
    plaDefense = 0;
    
    guiSlotCheck(num);
    refresh();
}

function guiSlotCheck(num) {
    if(guiSlots[num][0] == '') {
        guiSlots[num][0] = 'empty';
        guiSlots[num][1] = null;
        guiSlots[num][2] = null;
        guiSlots[num][3] = null;
    }
    
    switch(guiInventoryLvl) {
        case 5:
            guiSlots[8][4] = 0;
        case 4:
            guiSlots[7][4] = 0;
        case 3: 
            guiSlots[6][4] = 0;
        case 2:
            guiSlots[5][4] = 0;
        case 1:
            guiSlots[4][4] = 0;
            break;
        default:
            break;
    }
    
    for(i = 4; i < 9; i++) {
        if(guiSlots[i][4] == 1) {
            guiSlots[i][0] = 'locked';
            guiSlots[i][1] = null;
            guiSlots[i][2] = null;
            guiSlots[i][3] = null;
        }
    }
}

function guiShowInv(num) {
    guiSlotCheck(num);
    
    output = '<a href="#" onclick="toolDesc(\'slot' + num + '\');" class="slot';
    
    if(guiSlots[num][4] == 1) {
        output += ' locked';
    }
    
    if(guiSlots[num][0] == 'empty') {
        output += ' dropOff';
    }
    
    output += '"><span';
    
    if(guiSlots[num][0] == 'empty') {
        output += ' style="font-style:italic;"';
    }
    
    output += '>' + guiSlots[num][0] + '</span>';
        
    output += '</a>';
        
    output += '<div class="drop" id="slot' + num + '" style="display:none; height:0px; font-size:0px;">';
            
    output += '<span>Damage: ' + guiSlots[num][1] + '</span>';
    
    output += '<span>' + guiSlots[num][2] + ': ' + guiSlots[num][3] + '</span>';
    
    output += '<a href="#" onclick="guiUnsetSlot(' + num + ');" style="position:absolute; bottom:8px; right:10px; color:white;">Delete</a>'
    
    output += '</div>';
    
    return output;
}