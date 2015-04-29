var eneHealth = 0,
    eneStr = 0,
    eneInt = 0,
    eneAgi = 0,
    eneDef = 0;
    eneXp = 0,
    eneLvl = 0,
    eneGold = 0,
    eneWep = '';
    eneName = '';
    

    
//creates an enemy
//something will pass the information necessary to change these variables
//since the player is only ever fighting one enemy at a time, the same variables should be able to be reused and rewritten
//only forseeable issue is if the player runs from the current enemy and then walks into another one
//should the enemy regain all of its health when the player runs away from it and basically just reset?
//set defense as a static number instead of using armor, might change that later but they don't need to drop armor so defense could just be hard coded. Thought process is it takes 5 seconds to pick up some guy's sword, pulling him out of full plate would take like 30 assuming you know what you're doing
//weapon is a string for now as a placeholder
function makeEnemy(name, health, str, vit, agi, defense, xp, lvl, gold, weapon){
    eneName = name;
    eneHealth = health;
    eneStr = str;
    eneVit = vit;
    eneAgi = agi;
    eneDef = defense;
    eneXp = xp;
    eneLvl = lvl;
    eneGold = gold;
    eneWep = weapon;   
}

//functions for getting enemy variable values
function getEneHealth(){
    return eneHealth;
}

function getEneStr(){
    return eneStr;
}

function getEneVit(){
    return eneVit;
}

function getEneAgi(){
    return eneAgi;
}

function getEneXp(){
    return eneXp;
}

function getEneLvl(){
    return eneLvl;
}

function getEneGold(){
    return eneGold;
}

function getEneWep(){
    return eneWep;
}

function getEneName(){
    return eneName;
}

function getEneDef(){
    return eneDef;
}

//functions for changing enemy variable values
function editEneHealth(x){
    eneHealth = eneHealth + x;
}

function editEneStr(x){
    eneStr = eneStr + x;
}

function editEneVit(x){
    eneVit = eneVit + x;
}

function editEneAgi(x){
    eneAgi = eneAgi + x;
}

function editEneXp(x){
    eneXp = eneXp + x;
}

function editEneLvl(x){
    eneLvl = eneLvl + x;
}

function editEneGold(x){
    eneGold = eneGold + x;
}

function editEneName(x){
    eneName = eneName + x;
}

function editEneDef(x){
    eneDef = eneDef + x;
}

function editEneWep(x){
    eneWep = x;
}
</script>  
    
    
    
    

