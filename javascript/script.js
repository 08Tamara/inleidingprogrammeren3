console.log("Hoi")

const bekerElement = document.querySelector(".beker")
const buttonEl = document.querySelector(".tapioca")
const pinkpoppingEl = document.querySelector(".pink-popping")
const orangepoppingEl = document.querySelector(".orange-popping")
const yellowpoppingsEl = document.querySelector(".yellow-popping")
const pinkflavorEl = document.querySelector(".pink-flavor")
const orangeflavorEl = document.querySelector(".orange-flavor")
const yellowflavorEl = document.querySelector(".yellow-flavor")
const brownflavorEl = document.querySelector(".brown-flavor")
console.log(buttonEl)

let a = 0;
let b = 0;

function voegTapiocaToe () {
    console.log(voegTapiocaToe)
    bekerElement.src = 'images/tapioca-boba.png'
    if (a == 1) {
        bekerElement.src = 'images/pink-boba-tapioca.png';
    }
    else if (a == 2) {
        bekerElement.src = 'images/orange-boba-tapioca.png';
    }
    else if (a == 3) {
        bekerElement.src = 'images/yellow-boba-tapioca.png';
    }
    else if (a == 4) {
        bekerElement.src = 'images/brown-boba-tapioca.png';
    }
    // mijn broer heeft geholpen met ifelse code
    console.log(b)
    b = 1
}

buttonEl.addEventListener("click", voegTapiocaToe)

function pinkpopping() {
    console.log("a")
    bekerElement.src = 'images/pink-boba-pearls.png'
    if (a == 1) {
        bekerElement.src = 'images/pink-boba-pink.png';
    }
    else if (a == 2) {
        bekerElement.src = 'images/orange-boba-pink.png';
    }
    else if (a == 3) {
        bekerElement.src = 'images/yellow-boba-pink.png';
    }
    else if (a == 4) {
        bekerElement.src = 'images/brown-boba-pink.png';
    }
    b = 2
}

pinkpoppingEl.addEventListener("click", pinkpopping)

function orangepopping() {
    console.log("b")
    bekerElement.src = 'images/orange-boba-pearls.png'
    if (a == 1) {
        bekerElement.src = 'images/pink-boba-orange.png';
    }
    else if (a == 2) {
        bekerElement.src = 'images/orange-boba-orange.png';
    }
    else if (a == 3) {
        bekerElement.src = 'images/yellow-boba-orange.png';
    }
    else if (a == 4) {
        bekerElement.src = 'images/brown-boba-orange.png';
    }
    b = 3 
}

orangepoppingEl.addEventListener("click", orangepopping)

function yellowpopping() {
    console.log("c")
    bekerElement.src = 'images/yellow-boba-pearls.png'
    if (a == 1) {
        bekerElement.src = 'images/pink-boba-yellow.png';
    }
    else if (a == 2) {
        bekerElement.src = 'images/orange-boba-yellow.png';
    }
    else if (a == 3) {
        bekerElement.src = 'images/yellow-boba-yellow.png';
    }
    else if (a == 4) {
        bekerElement.src = 'images/brown-boba-yellow.png';
    }
    b = 4 
}

yellowpoppingsEl.addEventListener("click", yellowpopping)

function pinkflavor() {
    console.log("d")
    bekerElement.src = 'images/pink-boba.png'
    a = 1
    if (b == 1) {
        bekerElement.src = 'images/pink-boba-tapioca.png';
    }
    else if (b == 2) {
        bekerElement.src = 'images/pink-boba-pink.png';
    }
    else if (b == 3) {
        bekerElement.src = 'images/pink-boba-orange.png';
    }
    else if (b == 4) {
        bekerElement.src = 'images/pink-boba-yellow.png';
    }
}

pinkflavorEl.addEventListener("click", pinkflavor)

function orangeflavor() {
    console.log("e")
    bekerElement.src = 'images/orange-boba.png'
    a = 2
    if (b == 1) {
        bekerElement.src = 'images/orange-boba-tapioca.png';
    }
    else if (b == 2) {
        bekerElement.src = 'images/orange-boba-pink.png';
    }
    else if (b == 3) {
        bekerElement.src = 'images/orange-boba-orange.png';
    }
    else if (b == 4) {
        bekerElement.src = 'images/orange-boba-yellow.png';
    }
}

orangeflavorEl.addEventListener("click", orangeflavor)

function yellowflavor() {
    console.log("f")
    bekerElement.src = 'images/yellow-boba.png'
    a = 3
    if (b == 1) {
        bekerElement.src = 'images/yellow-boba-tapioca.png';
    }
    else if (b == 2) {
        bekerElement.src = 'images/yellow-boba-pink.png';
    }
    else if (b == 3) {
        bekerElement.src = 'images/yellow-boba-orange.png';
    }
    else if (b == 4) {
        bekerElement.src = 'images/yellow-boba-yellow.png';
    }
}

yellowflavorEl.addEventListener("click", yellowflavor)

function brownflavor(){
    console.log("g")
    bekerElement.src = 'images/brown-boba.png'
    a = 4
    if (b == 1) {
        bekerElement.src = 'images/brown-boba-tapioca.png';
    }
    else if (b == 2) {
        bekerElement.src = 'images/brown-boba-pink.png';
    }
    else if (b == 3) {
        bekerElement.src = 'images/brown-boba-orange.png';
    }
    else if (b == 4) {
        bekerElement.src = 'images/brown-boba-yellow.png';
    }
    console.log(a)
}

brownflavorEl.addEventListener("click", brownflavor)






