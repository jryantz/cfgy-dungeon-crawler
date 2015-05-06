//map index 0 = 1st column, 1 = 2nd column, 2 = 3rd column, 3 = 4th column, 4 = 5th column
// = each column = 5x[ability to enter,is an exit(1 to previous,2 to nextlvl), enemy in cell,item in cell, array of enemy and item ids?]
var currentLvl = 1,
	nextLvl = currentLvl + 1,
	prevLvl = currentLvl - 1,
    lvl = [[[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]]];

//sets everything 0 and removes items/enemies from array in each cell
function resetLvl() {
    for(i = 0; i <= 4; i++) {
        for(j = 0; j <= 4; j++) {
            lvl[i][j] = [0, 0, 0, 0, [null, null, null]];
        }
    }
}

//checks to see if the cell has an exit and whether the exit goes to the next or previous levels
/*
function checkExit(PlaCurrCell) {
var x = plaCurrCell [0],
	y = plaCurrCell [1];
    
	if(lvl[x][y][1] > 0) {
		if(lvl[x][y][1] == 1) {
            makeLvl(prevLvl);
		} else if(lvl[x][y][1] == 2) {
            makeLvl(nextLvl);
		}
	}

}

//checks which level the map is creating
function makeLvl(whichLvl) {
	switch(whichLvl) {
        case 5:
            createLvl5();
            break;
        case 4:
            createLvl4();
            break;
        case 3:
            createLvl3();
            break;
        case 2:
            createLvl2();
            break;
        case 1:
            createLvl1();
            break;
        default: 
            break;
	}
}
*/

//first array collumn 0-4, second array row 0-4, third array (look at line 2 for what each index is)

//creates base
function createBase() {
    resetLvl();
    
    lvl[1][2][0] = 1
    
    lvl[2][1][0] = 1
    lvl[2][2][0] = 1
    lvl[2][3][0] = 1
}

//creates level1 - julian's level
function createLvl1() {
    resetLvl();
    
    lvl[1][2][0] = 1;
    lvl[1][2][1] = 1;
    lvl[1][3][0] = 1;
    
    lvl[2][3][0] = 1;
    lvl[2][4][0] = 1;
    
    lvl[3][0][0] = 1;
    lvl[3][1][0] = 1;
    lvl[3][2][0] = 1;
    lvl[3][3][0] = 1;
    
    lvl[4][0][0] = 1;
    lvl[4][2][0] = 1;
    lvl[4][2][1] = 1;
    
	placeEntities();
}

//creates level2 - jon's level
function createLvl2() {
    resetLvl();
    
    lvl[0][1][0] = 1;
    lvl[0][3][0] = 1;
    lvl[0][4][0] = 1;
    
    lvl[1][0][0] = 1;
    lvl[1][1][0] = 1;
    lvl[1][2][0] = 1;
    lvl[1][3][0] = 1;
    
    lvl[2][1][0] = 1;
    lvl[2][3][0] = 1;
    lvl[2][4][0] = 1;
    
    lvl[3][0][0] = 1;
    lvl[3][1][0] = 1;
    lvl[3][2][0] = 1;
    lvl[3][4][0] = 1;
    lvl[3][4][1] = 1;
    
    lvl[4][0][0] = 1;
    lvl[4][2][0] = 1;
    lvl[4][2][1] = 1;
    
    placeEntities();
}

//randomly sets if an enemy and/or an item is in the cell only if the cell is accessable to the player
function placeEntities() {
    //first for loop goes through the columns of the lvl
	for(column = 0; column < 5; column++) {
        //second for loop goes through the rows
        for(row = 0; row < 5; row++) {
            //checks if the current cell is accessable to player
            if(lvl[column][row][0] == 1) {
                //generates if there is an enemy
                if((Math.floor(Math.random() * 6) + 1) > 2) {
                    lvl[column][row][2] = 1;
                } else {
                    lvl[column][row][2] = 0;
                }
                
                //generates if there is an item
                if((Math.floor(Math.random() * 6) + 1) > 4) {
                    lvl[column][row][3] = 1;
                } else {
                    lvl[column][row][3] = 0;
                }
                
                //checks if enemy in cell and adds to item/enemy array
                if(lvl[column][row][2] == 1) {
                    lvl[column][row][4][0] = currentLvl;
                } else {
                    lvl[column][row][4][0] = 0;  
                }

                //checks if item in cell and adds to item/enemy array
                if(lvl[column][row][3] == 1) {
                    lvl[column][row][4][1] = currentLvl;
                } else {
                    lvl[column][row][4][1] = 0;
                }
            }
        }
    }
}

function canMove(currCell) {
    current = currCell;
    
    current[0]--;
    if(current[0] < 0 || current[0] > 4 || current[1] < 0 || current[1] > 4) {
        document.getElementById('up').className = 'button key disabled';
    } else {
        if(lvl[current[0]][current[1]][0] == 1 && current[0] <= 4 && current[0] >= 0 && current[1] <= 4 && current[1] >= 0) {
            document.getElementById('up').className = 'button key';
        } else {
            document.getElementById('up').className = 'button key disabled';
        }
    }

    current[0] += 2;
    if(current[0] < 0 || current[0] > 4 || current[1] < 0 || current[1] > 4) {
        document.getElementById('do').className = 'button key disabled';
    } else {
        if(lvl[current[0]][current[1]][0] == 1 && current[0] <= 4 && current[0] >= 0 && current[1] <= 4 && current[1] >= 0) {
            document.getElementById('do').className = 'button key';
        } else {
            document.getElementById('do').className = 'button key disabled';
        }
    }
    
    current[0]--;
    current[1]--;
    if(current[0] < 0 || current[0] > 4 || current[1] < 0 || current[1] > 4) {
        document.getElementById('le').className = 'button key disabled';
    } else {
        if(lvl[current[0]][current[1]][0] == 1 && current[0] <= 4 && current[0] >= 0 && current[1] <= 4 && current[1] >= 0) {
            document.getElementById('le').className = 'button key';
        } else {
            document.getElementById('le').className = 'button key disabled';
        }
    }
    
    current[1] += 2;
    if(current[0] < 0 || current[0] > 4 || current[1] < 0 || current[1] > 4) {
        document.getElementById('ri').className = 'button key disabled';
    } else {
        if(lvl[current[0]][current[1]][0] == 1 && current[0] <= 4 && current[0] >= 0 && current[1] <= 4 && current[1] >= 0) {
            document.getElementById('ri').className = 'button key';
        } else {
            document.getElementById('ri').className = 'button key disabled';
        }
    }
    
    current[1]--;
}
