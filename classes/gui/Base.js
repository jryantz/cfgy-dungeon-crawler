var baseDagger = false,
    baseFlail = false,
    basePole = false,
    baseSword = false,
    baseBow = false,
    baseShield = false,
    baseArmor = false;

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

function setSpec(type) {
    if(type == 'dagger') {
        baseDagger = true;
    } else if(type == 'flail') {
        baseFlail = true;
    } else if(type == 'pole') {
        basePole = true;
    } else if(type == 'sword') {
        baseSword = true;
    } else if(type == 'bow') {
        baseBow = true;
    } else if(type == 'shield') {
        baseShield = true;
    } else if(type == 'armor') {
        baseArmor = true;
    } else {}
}

function getSpec() {
    if(baseDagger == true) {
        return 'dagger';
    } else if(baseFlail == true) {
        return 'flail';
    } else if(basePole == true) {
        return 'pole';
    } else if(baseSword == true) {
        return 'sword';
    } else if(baseBow == true) {
        return 'bow';
    } else if(baseShield == true) {
        return 'shield';
    } else if(baseArmor == true) {
        return 'armor';
    } else {}
}