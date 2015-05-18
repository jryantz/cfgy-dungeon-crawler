var baseActive = false, //if true - the player is in the base
    baseLvl = 0,
    baseExt1 = false,
    merchantInv = [];

function enterBase() {
    baseActive = true;
    createBase();
    if(baseLvl == 0) {
        lvl[1][2][0] = -1;
    }
    regenLvl();
    flip('mainPane', 'basePane');
    baseButtons();
    plaHealth = plaMaxHealth;
    refresh();
}

function leaveBase() {
    baseActive = false;
    makeLvl(1);
    plaCurrCell = [1, 2];
    regenLvl();
    flip('mainPane', 'basePane');
    document.getElementById("merch").innerHTML = '';
    defaultButtons();
    canMove(plaCurrCell);
}

function upgradeBase() {
    if(plaMoney >= 200 && plaLvl > 1) {
        plaMoney -= 200;
        refresh();
        baseLvl = 1;
        baseExt1 = true;
        lvl[1][2][0] = 1;
        regenLvl();
        leaveBase();
        enterBase();
        
        document.getElementById('alertCont').innerHTML = '<div id="alert" class="alert">Congratulations, your base has been expanded allowing a merchant to occupy the new area.</div>';
        setTimeout(function() {
            display('alertCont');
        }, 5000);
        display('alertCont');
    } else {
        document.getElementById('alertCont').innerHTML = '<div id="alert" class="alert">Come back when you have sufficient coins and are level 2.</div>';
        setTimeout(function() {
            display('alertCont');
        }, 5000);
        display('alertCont');
    }
}

// creates a merchant with weapons available of tier 1 for every item except for their chosen specialization
// which is tier 2
function createMerchant() {
    switch(getSpec()) {
        case 'dagger':
            merchantInv = [];
            for(x = 1; x < 8; x++) {
                if(highestLvl == 1) {
                    if(x == 1) {
                        merchantInv.push(tier2Item(1));
                    } else {
                        merchantInv.push(tier1Item(x));
                    }
                } else if(highestLvl == 2) {
                    if(x == 1) {
                        merchantInv.push(tier3Item(1));
                    } else {
                        merchantInv.push(tier2Item(x));
                    }
                } else if(highestLvl == 3) {
                    if(x == 1) {
                        merchantInv.push(tier4Item(1));
                    } else {
                        merchantInv.push(tier3Item(x));
                    }
                } else {
                    merchantInv.push(tier4Item(x));
                }
            }
            break;
        case 'flail':
            merchantInv = [];
            for(x = 1; x < 8; x++) {
                if(highestLvl == 1) {
                    if(x == 2) {
                        merchantInv.push(tier2Item(2));
                    } else {
                        merchantInv.push(tier1Item(x));
                    }
                } else if(highestLvl == 2) {
                    if(x == 2) {
                        merchantInv.push(tier3Item(2));
                    } else {
                        merchantInv.push(tier2Item(x));
                    }
                } else if(highestLvl == 3) {
                    if(x == 2) {
                        merchantInv.push(tier4Item(2));
                    } else {
                        merchantInv.push(tier3Item(x));
                    }
                } else {
                    merchantInv.push(tier4Item(x));
                }
            }
            break;
        case 'pole':
            merchantInv = [];
            for(x = 1; x < 8; x++) {
                if(highestLvl == 1) {
                    if(x == 3) {
                        merchantInv.push(tier2Item(3));
                    } else {
                        merchantInv.push(tier1Item(x));
                    }
                } else if(highestLvl == 2) {
                    if(x == 3) {
                        merchantInv.push(tier3Item(3));
                    } else {
                        merchantInv.push(tier2Item(x));
                    }
                } else if(highestLvl == 3) {
                    if(x == 3) {
                        merchantInv.push(tier4Item(3));
                    } else {
                        merchantInv.push(tier3Item(x));
                    }
                } else {
                    merchantInv.push(tier4Item(x));
                }
            }
            break;
        case 'sword':
            merchantInv = [];
            for(x = 1; x < 8; x++) {
                if(highestLvl == 1) {
                    if(x == 4) {
                        merchantInv.push(tier2Item(4));
                    } else {
                        merchantInv.push(tier1Item(x));
                    }
                } else if(highestLvl == 2) {
                    if(x == 4) {
                        merchantInv.push(tier3Item(4));
                    } else {
                        merchantInv.push(tier2Item(x));
                    }
                } else if(highestLvl == 3) {
                    if(x == 4) {
                        merchantInv.push(tier4Item(4));
                    } else {
                        merchantInv.push(tier3Item(x));
                    }
                } else {
                    merchantInv.push(tier4Item(x));
                }
            }
            break;
        case 'bow':
            merchantInv = [];
            for(x = 1; x < 8; x++) {
                if(highestLvl == 1) {
                    if(x == 5) {
                        merchantInv.push(tier2Item(5));
                    } else {
                        merchantInv.push(tier1Item(x));
                    }
                } else if(highestLvl == 2) {
                    if(x == 5) {
                        merchantInv.push(tier3Item(5));
                    } else {
                        merchantInv.push(tier2Item(x));
                    }
                } else if(highestLvl == 3) {
                    if(x == 5) {
                        merchantInv.push(tier4Item(5));
                    } else {
                        merchantInv.push(tier3Item(x));
                    }
                } else {
                    merchantInv.push(tier4Item(x));
                }
            }
            break;
        case 'shield':
            merchantInv = [];
            for(x = 1; x < 8; x++) {
                if(highestLvl == 1) {
                    if(x == 6) {
                        merchantInv.push(tier2Item(6));
                    } else {
                        merchantInv.push(tier1Item(x));
                    }
                } else if(highestLvl == 2) {
                    if(x == 6) {
                        merchantInv.push(tier3Item(6));
                    } else {
                        merchantInv.push(tier2Item(x));
                    }
                } else if(highestLvl == 3) {
                    if(x == 6) {
                        merchantInv.push(tier4Item(6));
                    } else {
                        merchantInv.push(tier3Item(x));
                    }
                } else {
                    merchantInv.push(tier4Item(x));
                }
            }
            break;
        case 'armor':
            merchantInv = [];
            for(x = 1; x < 8; x++) {
                if(highestLvl == 1) {
                    if(x == 7) {
                        merchantInv.push(tier2Item(7));
                    } else {
                        merchantInv.push(tier1Item(x));
                    }
                } else if(highestLvl == 2) {
                    if(x == 7) {
                        merchantInv.push(tier3Item(7));
                    } else {
                        merchantInv.push(tier2Item(x));
                    }
                } else if(highestLvl == 3) {
                    if(x == 7) {
                        merchantInv.push(tier4Item(7));
                    } else {
                        merchantInv.push(tier3Item(x));
                    }
                } else {
                    merchantInv.push(tier4Item(x));
                }
            }
            break;
        default:
            return null;
    }
}

function showMerch() {
    createMerchant();
    
    if(getSpec() == null || baseLvl < 1) {
        document.getElementById('alertCont').innerHTML = '<div id="alert" class="alert">Please choose a specialization.</div>';
        setTimeout(function() {
            display('alertCont');
        }, 3000);
        display('alertCont');
    } else {
        size = merchantInv.length;

        tempContent = merchantInv.slice();

        document.getElementById("merch").innerHTML = '';
        for(i = 0; i < size; i++) {
            temp = merchantInv.pop();
            if(temp[4] == null) {
                temp[4] = '<i style=\'color:limegreen;\'>boosted</i>';
            }
            if(temp[4] <= 1) {
                temp[4] = temp[4] * 100;
            }
            document.getElementById("merch").innerHTML += '<div class="merch cf"><span><a href="#" onclick="buyMerch(i' + temp[0] + ');">' + temp[1] + '</a></span><span>Damage: ' + temp[2] + '</span><span>' + temp[3] + ': ' + temp[4] + '</span><span>$' + temp[5] + '</span></div>';
        }

        merchantInv = tempContent.slice();
    }
}

function buyMerch(id) {
    if(plaMoney >= id[5]) {
        plaMoney -= id[5];
        pickupItem(id[1], id[2], id[3], id[4], id[0]);
        
        baseButtons();
    } else {
        
    }
}