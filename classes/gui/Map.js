var guiProvMap = lvl;

function guiDecode(locX, locY) {
    if(guiProvMap[locX][locY][0] == 0) {
        return '<div class="cell" style="background-color:black; border-color:black;"></div>';
    } else {
        if(guiProvMap[locX][locY][1] == 1 || guiProvMap[locX][locY][1] == 2) {
            temp = '<div class="cell" style="background-color:green;">';
            
            if(plaCurrCell[0] == locX && plaCurrCell[1] == locY) {
                temp += '<div class="dot"></div>';
            }
            
            return temp + '</div>';
        } else if(guiProvMap[locX][locY][2] == 1 && guiProvMap[locX][locY][3] == 1) {
            //both
            temp = '<div class="cell" style="background-color:blue;">';
            
            if(plaCurrCell[0] == locX && plaCurrCell[1] == locY) {
                temp += '<div class="dot"></div>';
            }
            
            return temp + '</div>';
        } else if(guiProvMap[locX][locY][2] == 1) {
            //enemy
            temp = '<div class="cell" style="background-color:lightblue;">';
            
            if(plaCurrCell[0] == locX && plaCurrCell[1] == locY) {
                temp += '<div class="dot"></div>';
            }
            
            return temp + '</div>';
        } else if(guiProvMap[locX][locY][3] == 1) {
            //item
            temp = '<div class="cell" style="background-color:darkblue;">';
            
            if(plaCurrCell[0] == locX && plaCurrCell[1] == locY) {
                temp += '<div class="dot"></div>';
            }
            
            return temp + '</div>';
        } else {
            temp = '<div class="cell" style="background-color:white;">';
            
            if(plaCurrCell[0] == locX && plaCurrCell[1] == locY) {
                temp += '<div class="dot"></div>';
            }
            
            return temp + '</div>';
        }
    }
}