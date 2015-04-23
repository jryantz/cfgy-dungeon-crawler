function visibility(id) {
    var element = document.getElementById(id);
    if(element.style.visibility == 'visible') {
        element.style.visibility = 'hidden';
    } else {
        element.style.visibility = 'visible';
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