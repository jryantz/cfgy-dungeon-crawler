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
        for(i = 0; i <= 4; i++) {
            for(j = 0; j <= 4; j++) {
                document.getElementById('mapPane').innerHTML += guiDecode(i, j);
            }
        }
    }