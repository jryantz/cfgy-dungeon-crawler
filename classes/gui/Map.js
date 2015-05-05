var guiProvMap = lvl;

function guiDecode(locX, locY) {
    if(guiProvMap[locX][locY][0] == 1 && plaCurrCell[0] == locX && plaCurrCell[1] == locY) {
        return '<div class="cell" style="background-color:red;"></div>';
    }
    
    if(guiProvMap[locX][locY][0] == 0) {
        return '<div class="cell" style="background-color:black; border-color:black;"></div>';
    } else {
        if(guiProvMap[locX][locY][1] == 1) {
            return '<div class="cell" style="background-color:green;"></div>';
        } else if(guiProvMap[locX][locY][2] == 1 && guiProvMap[locX][locY][3] == 1) {
            //both
            return '<div class="cell" style="background-color:blue;"></div>';
        } else if(guiProvMap[locX][locY][2] == 1) {
            //enemy
            return '<div class="cell" style="background-color:lightblue;"></div>';
        } else if(guiProvMap[locX][locY][3] == 1) {
            //item
            return '<div class="cell" style="background-color:darkblue;"></div>';
        } else {
            return '<div class="cell" style="background-color:white;"></div>';
        }
    }
}