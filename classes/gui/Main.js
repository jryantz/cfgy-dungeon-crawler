function baseSpec(id) {
    document.getElementById('spec').className += ' locked';
    document.getElementById('spec' + id).className += 'active';
    
    for(i = id - 1; i >= 1; i--) {
        document.getElementById('spec' + i).style.display = 'none';
    }
    
    for(i = id + 1; i <= 7; i++) {
        document.getElementById('spec' + i).style.display = 'none';
    }
}