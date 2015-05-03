var baseLvl = 0,
    baseExt1 = false;

function upgradeBase() {
    if (plaMoney >= 200) {
        baseLvl = 1;
        baseExt1 = true;
<<<<<<< HEAD
        return "Congratulations, Your base has been expanded allowing a merchant to occupy the new area";
    }
    else{
        return "Come back when you have sufficient coin";
=======
        return "Congratulations, your base has recieved a new slot where a merchant can reside.";
    } else {
        return "Come back when you have sufficient coins.";
>>>>>>> origin/master
    }
}

function chooseMerchant(){
    
}

function trade(){
    
}