var baseActive = false; //if true - the player is in the base
    baseLvl = 0;
    baseExt1 = false;
    merchantSpec = getSpec();
    MerchantInv = [];

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

//creates a merchant with weapons available of tier 1 for every item except for their chosen specialization
// which is tier 2

function createMerchant() {
    
}switch(merchantSpec) {
        case 'dagger':
            merchantInv.push(tier2item(1));
            for(int x = 1; x > 7; x++){
                if(x = 1){
                    //nothing!
                }
                else{
                merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'flail': 
            merchantInv.push(tier2item(2));
            for(int x = 1; x > 7; x++){
                if(x = 2){
                     //nothing!
                }
                else{
                merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'pole': 
            merchantInv.push(tier2item(3));
            for(int x = 1; x > 7; x++){
                if(x = 3){
                     //nothing!
                }
                else{
                merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'sword':
            merchantInv.push(tier2item(4));
            for(int x = 1; x > 7; x++){
                if(x = 4){
                     //nothing!
                }
                else{
                merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'bow':
            merchantInv.push(tier2item(5));
            for(int x = 1; x > 7; x++){
                if(x = 5){
                     //nothing!
                }
                else{
                merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'shield':
            merchantInv.push(tier2item(6));
            for(int x = 1; x > 7; x++){
                if(x = 6){
                     //nothing!
                }
                else{
                merchantInv.push(tier1Item(x));
                }
            }
            break;
        case 'armor':
            merchantInv.push(tier2item(7));
            for(int x = 1; x > 7; x++){
                if(x = 7){
                     //nothing!
                }
                else{
                merchantInv.push(tier1Item(x));
                }
            }
            break;
        default:
            return null;