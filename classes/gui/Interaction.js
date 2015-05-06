function defaultButtons() {
    document.getElementById('interactionPane').innerHTML = '<a href="#" class="debug" onclick="flip(\'mainPane\', \'debugPane\');"></a><a href="#" onclick="enterBase();">Enter Base</a>';
}

function baseButtons() {
    document.getElementById('interactionPane').innerHTML = '<a href="#" class="debug" onclick="flip(\'mainPane\', \'debugPane\');"></a><a href="#" onclick="leaveBase();">Leave Base</a>';
}