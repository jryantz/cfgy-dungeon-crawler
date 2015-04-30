var guiProvMap = lvl;
    
var testMap = [
    [0, 1, 4, 0, 0],
    [2, 1, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [1, 2, 0, 2, 1],
    [0, 3, 0, 0, 3]
];

function guiDecode(locX, locY) {
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
    
    /*switch(guiProvMap[locX][locY][0]) {
        case 0:
            return '<div class="cell" style="background-color:black; border-color:black;"></div>';
            break;
        case 1:
            return '<div class="cell" style="background-color:white;"></div>';
            break;
        case 2:
            return '<div class="cell" style="background-color:blue;"></div>';
            break;
        case 3:
            return '<div class="cell" style="background-color:green;"></div>';
            break;
        case 4:
            return '<div class="cell" style="background-color:red;"></div>';
            break;
        default:
            return '<div class="cell" style="background-color:yellow;"></div>';
    }*/
}