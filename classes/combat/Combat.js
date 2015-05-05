//An idea for GUI implementation is that the GUI will print what happens after a full combat round. As in, both the player and the enemy goes. It'll print this when the player has to make a decision again, whether to run away or to continue fighting. 
//According to Brackets there's some indentation problems but I can't seem to figure out what they are.

var ticker = false, //if ticker = true, then it is the player's turn. If ticker = false then it is the enemy's turn
    endCondition = false, //end condition switches to true if either the player runs out of health, the enemy runs out of health, or if the player runs away
    playerRoll = 0,
    playerDecision = true, //true means the player is going to attack, false means the player is running away. The GUI will need to pass whatever the user inputs to here.
    eneRoll = 0,
    playerHits = false,
    enemyHits = false;


function startCombat() {
    //deciding who goes first
    playerRoll = Math.floor((Math.random() * 20) + 1 +  Math.floor((plaAgi - 10) / 2));
    eneRoll = Math.floor((Math.random() * 20) +  Math.floor((eneAgi - 10) / 2));
    if(playerRoll >= eneRoll) {
        ticker = true;
    } else {
        ticker = false;
    }
    
    //initiating combat
    while(endCondition === false) {
        //player's turn
        if(ticker === true) {
            //This runs if the palyer decides to attack 
            if(playerDecision === true) {
                //This if statement runs if the weapon is Strength based
                if(plaWeapon[2] === true) {
                    playerRoll = Math.floor((Math.random() * 20)) +  Math.floor((plaStr - 10) / 2);
                    //This runs if the player hits
                    if(playerRoll >= eneDef) {
                        playerHits = true;
                        eneHealth = eneHealth - (plaWeapon[1] + Math.floor((plaStr - 10) / 2));
                    } else {
                        //This runs if the player does not hit
                        playerHits = false;
                    }
                }
                
                //This if statement runs if the weapon is Agility based
                if(plaWeapon[2] === false) {
                    playerRoll = Math.floor((Math.random() * 20)) +  Math.floor((plaAgi - 10) / 2);
                    //This runs if the player hits
                    if(playerRoll >= eneDef) {
                        playerHits = true;
                        eneHealth = eneHealth - (plaWeapon[1] + Math.floor((plaAgi - 10) / 2));
                    } else {
                        //This runs if the player does not hit
                        playerHits = false;
                    }
                }
            } else {
                //this would execute if the player chose to run away
                
                playerRoll = Math.floor((Math.random() * 20) + 1 +  Math.floor((plaAgi - 10) / 2));
                eneRoll = Math.floor((Math.random() * 20) +  Math.floor((eneAgi - 10) / 2));
                if(playerRoll >= eneRoll) {
                    break; //ends combat
                } else {
                    //some sort of statement is outputed to the user saying they failed to run away
                }
            }
        }//end of player turn
        
        //enemy's turn
        if(ticker === false) {
            //This if statement runs if the weapon is Strength based
            if(eneWeap[2] === true) {
                eneRoll = Math.floor((Math.random() * 20)) +  Math.floor((eneStr - 10) / 2);
                //This runs if the enemy hits
                if(eneRoll >= plaDefense) {
                    enemyHits = true;
                    plaHealth = plaHealth - (eneWeap[1] + Math.floor((eneStr - 10) / 2));
                } else {
                    //This runs if the enemy does not hit
                    enemyHits = false;
                }
            }
            
            //This if statement runs if the weapon is Agility based
            if(plaWeapon[2] === false) {
                eneRoll = Math.floor((Math.random() * 20)) +  Math.floor((eneAgi - 10) / 2);
                //This runs if the enemy hits
                if(eneRoll >= plaDefense) {
                    enemyHits = true;
                    plaHealth = plaHealth - (eneWeap[1] + Math.floor((eneAgi - 10) / 2));
                } else {
                    //This runs if the enemy does not hit
                    enemyHits = false;
                }
            }   
        }//end of enemy turn
        
        if(eneHealth <= 0 || plaHealth <= 0) {
            endCondition = true;
            break;
        } else {
            ticker = !ticker;
        }
    }//end of while loop
    
    //After the fight
    if(plaHealth > 0) {
        plaMoney = plaMoney + eneMoney;
        plaXp = plaXp + eneXp;
    } else {
        //insert some sort of end condition here. GUI probably provides a game over screen or they're teleported back to the Base
    }
    
    
}
