var inventoryLvl = 0,
    slots = [
        ['', null, null, null, 0],
        ['', null, null, null, 0],
        ['', null, null, null, 0],
        ['', null, null, null, 0],
        ['', null, null, null, 1],
        ['', null, null, null, 1],
        ['', null, null, null, 1],
        ['', null, null, null, 1],
        ['', null, null, null, 1],
    ];

function changeLvl(num) {
    if(!isNaN(num) && num <= 6 && num >= 0) {
        inventoryLvl = num;
        slotCheck(num);
    }
}

function setSlot(num, item, stat1v, stat2n, stat2v) {
    slots[num][0] = item;
    slots[num][1] = stat1v;
    slots[num][2] = stat2n;
    slots[num][3] = stat2v;
    
    slotCheck(num);
}

function unsetSlot(num) {
    slots[num][0] = '';
    slots[num][1] = null;
    slots[num][2] = null;
    slots[num][3] = null;
    
    for(i = num; i <= 8; i++) {
        if(slots[i][0] != null && slots[i][0] != 'locked') {
            for(j = 0; j < 5; j++) {
                slots[i - 1][j] = slots[i][j];
                slots[i][j] = null;
            }
        }
    }
    
    slotCheck(num);
}

function slotCheck(num) {
    if(slots[num][0] == '') {
        slots[num][0] = 'empty';
        slots[num][1] = null;
        slots[num][2] = null;
        slots[num][3] = null;
    }
    
    switch(inventoryLvl) {
        case 5:
            slots[8][4] = 0;
        case 4:
            slots[7][4] = 0;
        case 3: 
            slots[6][4] = 0;
        case 2:
            slots[5][4] = 0;
        case 1:
            slots[4][4] = 0;
            break;
        default:
            break;
    }
    
    for(i = 4; i < 9; i++) {
        if(slots[i][4] == 1) {
            slots[i][0] = 'locked';
            slots[i][1] = null;
            slots[i][2] = null;
            slots[i][3] = null;
        }
    }
}

function show(num) {
    slotCheck(num);
    
    output = '<a href="#" onclick="toolDesc(\'slot' + num + '\');" class="slot';
    
    if(slots[num][4] == 1) {
        output += ' locked';
    }
    
    if(slots[num][0] == 'empty') {
        output += ' dropOff';
    }
    
    output += '"><span';
    
    if(slots[num][0] == 'empty') {
        output += ' style="font-style:italic;"';
    }
    
    output += '>' + slots[num][0] + '</span>';
        
    output += '</a>';
        
    output += '<div class="drop" id="slot' + num + '" style="display:none; height:0px; font-size:0px;">';
            
    output += '<span>Damage: ' + slots[num][1] + '</span>';
    
    output += '<span>' + slots[num][2] + ': ' + slots[num][3] + '</span>';
    
    output += '</div>';
    
    return output;
}