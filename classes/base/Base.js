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
    defaultButtons();
    canMove(plaCurrCell);
}

function upgradeBase() {
    if(plaMoney >= 200) {
        plaMoney -= 200;
        refresh();
        baseLvl = 1;
        baseExt1 = true;
        lvl[1][2][0] = 1;
        regenLvl();
        
        document.getElementById('alertCont').innerHTML = '<div id="alert" class="alert">Congratulations, your base has been expanded allowing a merchant to occupy the new area.</div>';
        setTimeout(function() {
            display('alertCont');
        }, 5000);
        display('alertCont');
    } else {
        document.getElementById('alertCont').innerHTML = '<div id="alert" class="alert">Come back when you have sufficient coins.</div>';
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
            for(x = 1; x < 8; x++) {
                if(x == 1) {
                    merchantInv.push(tier2Item(1));
                } else {
                    merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'flail': 
            for(x = 1; x < 8; x++) {
                if(x == 2){
                    merchantInv.push(tier2Item(2));
                } else {
                    merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'pole': 
            for(x = 1; x < 8; x++) {
                if(x == 3) {
                    merchantInv.push(tier2Item(3));
                } else {
                    merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'sword':
            for(x = 1; x < 8; x++) {
                if(x == 4) {
                    merchantInv.push(tier2Item(4));
                } else {
                    merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'bow':
            for(x = 1; x < 8; x++) {
                if(x == 5) {
                    merchantInv.push(tier2Item(5));
                } else {
                    merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'shield':
            for(x = 1; x < 8; x++) {
                if(x == 6) {
                    merchantInv.push(tier2Item(6));
                } else {
                    merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'armor':
            for(x = 1; x < 8; x++) {
                if(x == 7) {
                    merchantInv.push(tier2Item(7));
                } else {
                    merchantInv.push(tier1Item(x));
                }
            }
            break;
        default:
            return null;
    }
}