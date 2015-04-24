function visibility(id) {
    var element = document.getElementById(id);
    
    if(element.style.visibility == 'visible') {
        element.style.visibility = 'hidden';
    } else {
        element.style.visibility = 'visible';
    }
}

function flip(idPrim, idSec) {
    var elementPrim = document.getElementById(idPrim);
    var elementSec = document.getElementById(idSec);
    
    if(elementPrim.style.display == 'block') {
        elementPrim.style.display = 'none';
        elementSec.style.display = 'block';
    } else {
        elementPrim.style.display = 'block';
        elementSec.style.display = 'none';
    }
}

function toolDesc(id) {
    var element = document.getElementById(id);
    
    if(element.style.display == 'block') {
        if(element.style.height == '100px') {
            element.style.fontSize = '0px';
            element.style.height = '0px';
        }

        setTimeout(function() {
            if(element.style.display == 'block') {
                element.style.display = 'none';
            }
        }, 300);
    }
    
    if(element.style.display == 'none') {
        element.style.display = 'block';
        
        setTimeout(function() {
            if(element.style.height == '0px') {
                element.style.fontSize = '14px';
                element.style.height = '100px';
            }
        }, 50);
    }
}

window.onload = function() {
    setTimeout(function() {
        visibility('loading');
    }, 1000);
}