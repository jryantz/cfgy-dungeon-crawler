var baseLvl = 0;
var baseExt1 = false;


function upgradeBase() {
    if (plaMoney >= 200) {
        baseLvl = 1;
        baseExt1 = true;
        return "Congratulations, Your base has been expanded allowing a merchant to occupy the new area";
    }
    else{
        return "Come back when you have sufficient coin";
    }
}

function chooseMerchant(){
    
}

function trade(){
    
}