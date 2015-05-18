//id(0), name(1), lvl(2), xp(3), health(4), str(5), vit(6), agi(7), defense(8), money(9), weapon(10)
var enemies = [
        [0, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [1, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [2, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [3, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [4, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [5, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [6, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [7, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [8, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [9, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [10, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [11, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [12, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [13, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
        [14, '', 0, 0, 0, 0, 0, 0, 0, 0, []],
    ];

function randomEnemies(lvl) {
    for(i = 0; i <= 14; i++) {
        //random name
        randName = Math.round((Math.random() * 6) + 1);
        switch(randName) {
            case 1:
                enemies[i][1] = 'Bandit';
                break;
            case 2:
                enemies[i][1] = 'Thug';
                break;
            case 3:
                enemies[i][1] = 'Warlock';
                break;
            case 4:
                enemies[i][1] = 'Werewolf';
                break;
            case 5:
                enemies[i][1] = 'Crazy Space Robot';
                break;
            case 6:
                enemies[i][1] = 'Ghoul';
                break;
            case 7:
                enemies[i][1] = 'C3H8 Elemental';
                break;
            default:
                break;
        }
        
        //level 1 > 1-2 enemies
        //level 2 > 3-4 enemies
        //level 3 > 5-6 enemies
        //level 4 > 7-8 enemies
        
        //xp - lvl 1 - 45xp
        //up by 25xp every lvl
        
        //health set by a range of about 10 below or above player max health at exact same level
        randLvl = Math.round((Math.random() * 9) + 1);
        switch(lvl) {
            case 1:
                if(randLvl <= 5) {
                    enemies[i][2] = 1;
                    enemies[i][3] = 45;
                    enemies[i][4] = Math.round((Math.random() * 5) + 15);
                    enemies[i][5] = genStrVitAgi()[0];
                    enemies[i][6] = genStrVitAgi()[1];
                    enemies[i][7] = genStrVitAgi()[2];
                    enemies[i][8] = Math.round((enemies[i][7] - 10) / 2);
                    enemies[i][9] = Math.round((Math.random() * 50) + 5);
                    enemies[i][10] = tier1Item(Math.round((Math.random() * 2) + 1));
                } else if(randLvl >= 6) {
                    enemies[i][2] = 2;
                    enemies[i][3] = 70;
                    enemies[i][4] = Math.round((Math.random() * 10) + 25);
                    enemies[i][5] = genStrVitAgi()[0] + Math.round((Math.random() * 3) + 1);
                    enemies[i][6] = genStrVitAgi()[1] + Math.round((Math.random() * 3) + 1);
                    enemies[i][7] = genStrVitAgi()[2] + Math.round((Math.random() * 3) + 1);
                    enemies[i][8] = Math.round((enemies[i][7] - 10) / 2);
                    enemies[i][9] = Math.round((Math.random() * 50) + 15);
                    enemies[i][10] = tier1Item(Math.round((Math.random() * 2) + 1));
                } else {}
                break;
            case 2:
                if(randLvl <= 5) {
                    enemies[i][2] = 3;
                    enemies[i][3] = 95;
                    enemies[i][4] = Math.round((Math.random() * 10) + 40);
                    enemies[i][5] = genStrVitAgi()[0] + Math.round((Math.random() * 3) + 5);
                    enemies[i][6] = genStrVitAgi()[1] + Math.round((Math.random() * 3) + 5);
                    enemies[i][7] = genStrVitAgi()[2] + Math.round((Math.random() * 3) + 5);
                    enemies[i][8] = Math.round((enemies[i][7] - 10) / 2);
                    enemies[i][9] = Math.round((Math.random() * 50) + 35);
                    enemies[i][10] = tier2Item(Math.round((Math.random() * 2) + 1));
                } else if(randLvl >= 6) {
                    enemies[i][2] = 4;
                    enemies[i][3] = 120;
                    enemies[i][4] = Math.round((Math.random() * 10) + 50);
                    enemies[i][5] = genStrVitAgi()[0] + Math.round((Math.random() * 3) + 9);
                    enemies[i][6] = genStrVitAgi()[1] + Math.round((Math.random() * 3) + 9);
                    enemies[i][7] = genStrVitAgi()[2] + Math.round((Math.random() * 3) + 9);
                    enemies[i][8] = Math.round((enemies[i][7] - 10) / 2);
                    enemies[i][9] = Math.round((Math.random() * 50) + 45);
                    enemies[i][10] = tier2Item(Math.round((Math.random() * 2) + 1));
                } else {}
                break;
            case 3:
                if(randLvl <= 5) {
                    enemies[i][2] = 5;
                    enemies[i][3] = 145;
                    enemies[i][4] = Math.round((Math.random() * 10) + 75);
                    enemies[i][5] = genStrVitAgi()[0] + Math.round((Math.random() * 3) + 13);
                    enemies[i][6] = genStrVitAgi()[1] + Math.round((Math.random() * 3) + 13);
                    enemies[i][7] = genStrVitAgi()[2] + Math.round((Math.random() * 3) + 13);
                    enemies[i][8] = Math.round((enemies[i][7] - 10) / 2);
                    enemies[i][9] = Math.round((Math.random() * 50) + 65);
                    enemies[i][10] = tier3Item(Math.round((Math.random() * 2) + 1));
                } else if(randLvl >= 6) {
                    enemies[i][2] = 6;
                    enemies[i][3] = 170;
                    enemies[i][4] = Math.round((Math.random() * 10) + 90);
                    enemies[i][5] = genStrVitAgi()[0] + Math.round((Math.random() * 3) + 17);
                    enemies[i][6] = genStrVitAgi()[1] + Math.round((Math.random() * 3) + 17);
                    enemies[i][7] = genStrVitAgi()[2] + Math.round((Math.random() * 3) + 17);
                    enemies[i][8] = Math.round((enemies[i][7] - 10) / 2);
                    enemies[i][9] = Math.round((Math.random() * 50) + 75);
                    enemies[i][10] = tier3Item(Math.round((Math.random() * 2) + 1));
                } else {}
                break;
            case 4:
                if(randLvl <= 5) {
                    enemies[i][2] = 7;
                    enemies[i][3] = 195;
                    enemies[i][4] = Math.round((Math.random() * 25) + 150);
                    enemies[i][5] = genStrVitAgi()[0] + Math.round((Math.random() * 3) + 21);
                    enemies[i][6] = genStrVitAgi()[1] + Math.round((Math.random() * 3) + 21);
                    enemies[i][7] = genStrVitAgi()[2] + Math.round((Math.random() * 3) + 21);
                    enemies[i][8] = Math.round((enemies[i][7] - 10) / 2);
                    enemies[i][9] = Math.round((Math.random() * 50) + 95);
                    enemies[i][10] = tier4Item(Math.round((Math.random() * 2) + 1));
                } else if(randLvl >= 6) {
                    enemies[i][2] = 8;
                    enemies[i][3] = 220;
                    enemies[i][4] = Math.round((Math.random() * 25) + 175);
                    enemies[i][5] = genStrVitAgi()[0] + Math.round((Math.random() * 3) + 25);
                    enemies[i][6] = genStrVitAgi()[1] + Math.round((Math.random() * 3) + 25);
                    enemies[i][7] = genStrVitAgi()[2] + Math.round((Math.random() * 3) + 25);
                    enemies[i][8] = Math.round((enemies[i][7] - 10) / 2);
                    enemies[i][9] = Math.round((Math.random() * 50) + 105);
                    enemies[i][10] = tier4Item(Math.round((Math.random() * 2) + 1));
                } else {}
                break;
            default:
                break;
        }
    }
}

function genStrVitAgi() {
    arr = [];
    
    checker = false;
    while(checker === false) {
        str = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
        if(str > 8) {
            arr[0] = str;
            checker = true;
        }
    }
    
    checker = false;
    while(checker === false) {
        vit = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
        if(vit > 8) {
            arr[1] = vit;
            checker = true;
        }
    }
    
    checker = false; 
    while(checker === false) {
        agi = Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1) + Math.floor((Math.random() * 6) + 1);
        if(agi > 8) {
            arr[2] = agi;
            checker = true;
        }
    }
    
    return arr;
}