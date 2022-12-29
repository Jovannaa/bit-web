function usingAlert () {
    var li = document.documentElement.lastElementChild.children[0].children[0];
    return alert(li.textContent);
}
usingAlert();


function changeText (text) {
    var t = document.documentElement.lastElementChild.children[0].lastElementChild;
    t.textContent = text;
    return t;
}
changeText("Mail");
