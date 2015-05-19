//An idea for GUI implementation is that the GUI will print what happens after a full combat round. As in, both the player and the enemy goes. It'll print this when the player has to make a decision again, whether to run away or to continue fighting. 
//According to Brackets there's some indentation problems but I can't seem to figure out what they are.

var ticker = false, //if ticker = true, then it is the player's turn. If ticker = false then it is the enemy's turn
    endCondition = false, //end condition switches to true if either the player runs out of health, the enemy runs out of health, or if the player runs away
    plaRoll = 0,
    plaDecision = true, //true means the player is going to attack, false means the player is running away. The GUI will need to pass whatever the user inputs to here.
    eneRoll = 0,
    plaHits = false,
    eneHits = false,
    plaDamage = 0,
    eneDamage = 0,
    round = 1,
    roundSet = 0;


function startCombat(enemy) {
    if(plaWeapon[0] == 0 || plaWeapon[1] == null) {
        document.getElementById('alertCont').innerHTML = '<div id="alert" class="alert">Please select your weapon.</div>';
        setTimeout(function() {
            display('alertCont');
        }, 2500);
        display('alertCont');
    } else {
        //set the players defense
        setDefense();
        
        //deciding who goes first
        plaRoll = Math.floor((Math.random() * 20) + 1 +  Math.floor((plaAgi - 10) / 2));
        eneRoll = Math.floor((Math.random() * 20) +  Math.floor((enemies[enemy][7] - 10) / 2));
        if(plaRoll >= eneRoll) {
            ticker = true;
        } else {
            ticker = false;
        }

        //initiating combat
        while(endCondition === false) {
            
            if(round == 1 || roundSet > 1) {
                addMain('--------------------', 'generic');
                addMain('Round ' + round + ' - FIGHT!', 'item');
                showMain();
                round += 1;
                roundSet = 0;
            }
            
            //player's turn
            if(ticker === true) {
                roundSet += 1;
                //This runs if the palyer decides to attack 
                if(plaDecision === true) {
                    //This if statement runs if the weapon is Strength based
                    if(plaWeapon[1] === 'Strength') {
                        plaRoll = Math.floor((Math.random() * 20)) +  Math.floor((plaStr - 10) / 2);
                        //This runs if the player hits
                        if(plaRoll >= enemies[enemy][8]) {
                            plaHits = true;
                            eneDamage = plaWeapon[0] + Math.floor((plaStr - 10) / 2) + Math.round((Math.random() * 3));
                            enemies[enemy][4] -= eneDamage;
                        } else {
                            //This runs if the player does not hit
                            plaHits = false;
                        }
                    }

                    //This if statement runs if the weapon is Agility based
                    if(plaWeapon[1] === 'Agility' || plaWeapon[1] === 'Dodge Chance') {
                        plaRoll = Math.floor((Math.random() * 20)) +  Math.floor((plaAgi - 10) / 2);
                        //This runs if the player hits
                        if(plaRoll >= enemies[enemy][8]) {
                            plaHits = true;
                            eneDamage = plaWeapon[0] + Math.floor((plaStr - 10) / 2) + Math.round((Math.random() * 3));
                            enemies[enemy][4] -= eneDamage;
                        } else {
                            //This runs if the player does not hit
                            plaHits = false;
                        }
                    }
                } else {
                    //this would execute if the player chose to run away

                    plaRoll = Math.floor((Math.random() * 20) + 1 +  Math.floor((plaAgi - 10) / 2));
                    eneRoll = Math.floor((Math.random() * 20) +  Math.floor((enemies[enemy][7] - 10) / 2));
                    if(plaRoll >= eneRoll) {
                        break; //ends combat
                    } else {
                        //some sort of statement is outputed to the user saying they failed to run away
                    }
                }
                addMain('You dealt ' + eneDamage + ' damage.', 'combat');
                showMain();
            }//end of player turn

            //enemy's turn
            if(ticker === false) {
                roundSet += 1;
                //This if statement runs if the weapon is Strength based
                if(enemies[enemy][10][3] === 'Strength') {
                    eneRoll = Math.floor((Math.random() * 20)) +  Math.floor((enemies[enemy][5] - 10) / 2);
                    //This runs if the enemy hits
                    if(eneRoll >= plaDefense) {
                        eneHits = true;
                        plaDamage = enemies[enemy][10][2] + Math.floor((enemies[enemy][5] - 10) / 2) + Math.round((Math.random() * 3));
                        plaHealth -= plaDamage;
                    } else {
                        //This runs if the enemy does not hit
                        eneHits = false;
                    }
                }

                //This if statement runs if the weapon is Agility based
                if(enemies[enemy][10][3] === 'Agility' || enemies[enemy][10][3] === 'Dodge Chance') {
                    eneRoll = Math.floor((Math.random() * 20)) +  Math.floor((enemies[enemy][7] - 10) / 2);
                    //This runs if the enemy hits
                    if(eneRoll >= plaDefense) {
                        eneHits = true;
                        plaDamage = enemies[enemy][10][2] + Math.floor((enemies[enemy][5] - 10) / 2) + Math.round((Math.random() * 3));
                        plaHealth -= plaDamage;
                    } else {
                        //This runs if the enemy does not hit
                        eneHits = false;
                    }
                }
                addMain('Enemy dealt ' + plaDamage + ' damage.', 'combat');
                showMain();
            }//end of enemy turn

            if(enemies[enemy][4] <= 0 || plaHealth <= 0) {
                if(enemies[enemy][4] <= 0) {
                    addMain('--------------------', 'generic');
                    addMain('You win!', 'npc');
                    showMain();
                    
                    lvl[plaCurrCell[0]][plaCurrCell[1]][2] = 0;
                    lvl[plaCurrCell[0]][plaCurrCell[1]][4][0] = null;
                    
                    refresh();
                    regenLvl();
                    
                    defaultButtons();
                    canMove(plaCurrCell);
                } else {
                    plaHealth = 0;
                    plaXp = 0;
                    refresh();
                    addMain('You died.', 'npc');
                    showMain();
                    blank();
                    setTimeout(function() {
                        addMain('You died, you were sent back to your base and revived.  Better luck next time.', 'special');
                        showMain();
                        enterBase();
                    }, 4000);
                }
                endCondition = true;
                break;
            } else {
                plaDamage = 0;
                eneDamage = 0;
                ticker = !ticker;
            }
        }//end of while loop
        
        combatDefaults();

        //After the fight
        if(plaHealth > 0) {
            plaMoney = plaMoney + enemies[enemy][9];
            plaXp = plaXp + enemies[enemy][3];
            
            addMain('You got $' + enemies[enemy][9] + '.', 'npc');
            addMain('You got ' + enemies[enemy][3] + ' XP.', 'npc');
            showMain();
            
            refresh();
            plaLvlUp();
            refresh();
        } else {
            //insert some sort of end condition here. GUI probably provides a game over screen or they're teleported back to the Base
        }
    }
}

function combatDefaults() {
    ticker = false;
    endCondition = false;
    plaRoll = 0;
    plaDecision = true;
    eneRoll = 0;
    plaHits = false;
    eneHits = false;
    plaDamage = 0;
    eneDamage = 0;
    round = 1;
    roundSet = 0;
}