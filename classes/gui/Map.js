var provMap = [
    [0, 1, 4, 0, 0],
    [2, 1, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [1, 2, 0, 2, 1],
    [0, 3, 0, 0, 3]
];

function decode(locX, locY) {
    switch(provMap[locX][locY]) {
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
    }
}