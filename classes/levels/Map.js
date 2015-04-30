//map index 0 = 1st column, 1 = 2nd column, 2 = 3rd column, 3 = 4th column, 4 = 5th column
// = each column = 5x[ability to enter,is an exit, enemy in cell,item in cell, array of enemy and item ids?]
var currentLvl = 1,
    lvl = [[[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]]];

 //sets everything 0 and removes items/enemies from array in each cell
function resetlvl() {
	lvl = [[[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]],
		   [[0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]], [0, 0, 0, 0, [null, null, null]]]];
}

//creates level1
function createLvl1() {
    resetlvl();
    currentLvl = 1;
    //  first array collumn 0-4, second array row 0-4,third array (look at line 2 for what each index is)
    lvl[3][0][0] = 1;
    lvl[4][0][0] = 1;
    lvl[3][1][0] = 1;
    lvl[1][2][0] = 1;
    lvl[1][2][1] = 1;
    lvl[3][2][0] = 1;
    lvl[4][2][0] = 1;
    lvl[4][2][1] = 1;
    lvl[1][3][0] = 1;
    lvl[2][3][0] = 1;
    lvl[3][3][0] = 1;
    lvl[2][4][0] = 1;
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
                lvl[column][row][2] = Math.random() * 1;
                //generates if there is an item
                lvl[column][row][3] = Math.random() * 1;
                
                //checks if enemy in cell and adds to item/enemy array
                if(lvl[column][row][2] = 1) {
                    lvl[column][row][5][0] = currentLvl;
                } else {
                    lvl[column][row][5][0] = 0;  
                }

                //checks if item in cell and adds to item/enemy array
                if(lvl[column][row][3] = 1) {
                    lvl[column][row][5][1] = currentLvl;
                } else {
                 lvl[column][row][5][1] = 0;
                }
            }
        }
    }
}
