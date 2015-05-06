var baseActive = false; //if true - the player is in the base
    baseLvl = 0,
    baseExt1 = false;

function enterBase() {
    baseActive = true;
    createBase();
    regenLvl();
    flip('mainPane', 'basePane');
    baseButtons();
}

function leaveBase() {
    baseActive = false;
    createLvl1();
    regenLvl();
    flip('mainPane', 'basePane');
    defaultButtons();
}

function upgradeBase() {
    if(plaMoney >= 200) {
        baseLvl = 1;
        baseExt1 = true;
        return "Congratulations, Your base has been expanded allowing a merchant to occupy the new area";
    } else {
        return "Come back when you have sufficient coins.";
    }
}

function chooseMerchant(){
    
}

function trade(){
    
}