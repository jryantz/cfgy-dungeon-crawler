//map index 0 = 1st column, 1 = 2nd column, 2 = 3rd column, 3 = 4th column, 4 = 5th column
// = each column = 5x[ability to enter,is an exit, enemy in cell,item in cell, array of enemy and item ids?]
var currentLvl,
    map = [[[0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []]],
           [[0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []]],
           [[0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []]],
           [[0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []]],
           [[0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []]]];
           

 //sets everything 0 and removes items/enemies from array in each cell
function resetMap() {
	map = [[[0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []]],
           [[0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []]],
           [[0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []]],
           [[0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []]],
           [[0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []], [0, 0, 0, 0, []]]];
}

//creates level1
function createLvl1() {
    resetMap;
    currentLvl = 1;
    //  first array collumn 0-4, second array row 0-4,third array (look at line 2 for what each index is)
    map[0][3][0] = 1;
    map[0][4][0] = 1;
    map[1][3][0] = 1;
    map[2][1][0] = 1;
    map[2][1][1] = 1;
    map[2][3][0] = 1;
    map[2][4][0] = 1;
    map[2][4][1] = 1;
    map[3][1][0] = 1;
    map[3][2][0] = 1;
    map[3][3][0] = 1;
    map[4][2][0] = 1;
}

//randomly sets if an enemy and/or an item is in the cell only if the cell is accessable to the player
function placeEntities() {
    //first for loop goes through the columns of the map
    var column = 0, row = 0;
	for (column < 5, column++){
        //second for loop goes through the rows
        for (row < 5, row++){
            //checks if the current cell is accessable to player
            if(map[column][row][0] == 1){
                //generates if there is an enemy
                map[column][row][2] = Math.random() * 1;
                //generates if there is an item
                map[column][row][3] = Math.random() * 1;
                
            //checks if enemy in cell and adds to item/enemy array
            if(map[column][row][2] = 1)
            {
                map[column][row][5][0] = currentLvl;
            }
            
            else{
             map[column][row][5][0] = 0;  
            }
            
            //checks if item in cell and adds to item/enemy array
            if(map[column][row][3] = 1)
            {
                map[column][row][5][1] = currentLvl;
            }
            
            else{
             map[column][row][5][1] = 0;  
            }
            
            }
        }
    }
    
}