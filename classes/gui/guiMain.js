var mainContent = [],
    tempContent = [];

function addMain(content, type) {
    switch(type) {
        case 'generic':
            mainContent.push('<div class="generic">' + content + '</div>');
            break;
        case 'special':
            mainContent.push('<div class="special">' + content + '</div>');
            break;
        case 'combat':
            mainContent.push('<div class="combat">' + content + '</div>');
            break;
        case 'item':
            mainContent.push('<div class="item">' + content + '</div>');
            break;
        case 'npc':
            mainContent.push('<div class="npc">' + content + '</div>');
            break;
        default:
            break;
    }
}

function showMain() {
    /*size = mainContent.length;
    
    tempContent = mainContent.slice();
    
    document.getElementById("mainPane").innerHTML = '';
    for(i = 0; i < size; i++) {
        document.getElementById("mainPane").innerHTML += mainContent.pop();
    }
    
    mainContent = tempContent.slice();
    */
    document.getElementById("mainPane").innerHTML = mainContent[mainContent.length -1] + document.getElementById("mainPane").innerHTML;
    
}