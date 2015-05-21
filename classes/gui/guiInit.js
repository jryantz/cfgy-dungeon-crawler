function refresh() {
    document.getElementById('inv').innerHTML = guiShowInv(0);
    document.getElementById('inv').innerHTML += guiShowInv(1);
    document.getElementById('inv').innerHTML += guiShowInv(2);
    document.getElementById('inv').innerHTML += guiShowInv(3);
    document.getElementById('inv').innerHTML += guiShowInv(4);
    document.getElementById('inv').innerHTML += guiShowInv(5);
    document.getElementById('inv').innerHTML += guiShowInv(6);
    document.getElementById('inv').innerHTML += guiShowInv(7);
    document.getElementById('inv').innerHTML += guiShowInv(8);

    document.getElementById('stats').innerHTML = guiShowStats();
}

function regenLvl() {
    document.getElementById('mapPane').innerHTML = '';
    for(i = 0; i <= 4; i++) {
        for(j = 0; j <= 4; j++) {
            document.getElementById('mapPane').innerHTML += guiDecode(i, j);
        }
    }
}

function gameInfoStart() {
    addMain('From this point on, all new information will show up in top to bottom organization.', 'special');
    addMain('Lastly, all buttons will be in the bottom middle.', 'special');
    addMain('The map of the current level is in the bottom left.', 'special');
    addMain('All held items will be shown in the bottom right.', 'special');
    addMain('All player stats will be shown to the top right.', 'special');
    addMain('Welcome to CFGY, the game.', 'generic');
    addMain(' ', 'generic');
    
    showMain();
}