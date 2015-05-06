function defaultButtons() {
    document.getElementById('interactionPane').innerHTML = '<a href="#" class="debug" onclick="flip(\'mainPane\', \'debugPane\');"></a>';
    document.getElementById('interactionPane').innerHTML += '<a href="#" class="button" onclick="enterBase();">Enter Base</a>';
    
    document.getElementById('interactionPane').innerHTML += '<div class="dirKeys"><a class="button key locked"></a><a href="#" onclick="plaMove(0);" id="up" class="button key">&uarr;</a><a class="button key locked"></a><a href="#" onclick="plaMove(2);" id="le" class="button key">&larr;</a><a href="#" onclick="plaMove(1);" id="do" class="button key">&darr;</a><a href="#" onclick="plaMove(3);" id="ri" class="button key">&rarr;</a></div>';
}

function baseButtons() {
    document.getElementById('interactionPane').innerHTML = '<a href="#" class="debug" onclick="flip(\'mainPane\', \'debugPane\');"></a>';
    document.getElementById('interactionPane').innerHTML += '<a href="#" class="button" onclick="leaveBase();">Leave Base</a>';
}