function removeClass () {
    var firsLi = document.querySelectorAll('div')[1].children[0].children[0];
    firsLi.classList.remove('activ')

    var firstFrst = document.querySelectorAll('div')[0].children[0].children[0];
    firstFrst.classList.add('activ')
}

removeClass();



function takeingText () {
    var home = document.querySelectorAll('ul')[2].children[0];
    console.log(home);
    //alert(home.textContent)
}

takeingText();

function rename (string) {
    var name = document.querySelectorAll('ul')[2].children[2];
    name.textContent = string;
}

rename('mail');