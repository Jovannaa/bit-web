function setBackground () {
    var secondListNode = document.querySelectorAll('ul')[1];
    secondListNode.classList.add('second-list');
}
setBackground();


function setLiBackgroung () {
    var listNodes = document.getElementsByTagName('li');
    for (var i = 0; i < listNodes.length; i++) {
     // listNodes[i].classList.add('list-items');
        listNodes[i].style.backgroundColor = '#90ee90';
    }    
}

setLiBackgroung(); 



function selectElements () {
    var listNode = document.getElementsByTagName('ul')[2];
    console.log(listNode);
    for (var i = 0; i < listNode.children.length; i++) {
        listNode.children[i].style.backgroundColor = '#800000';
    }
}

selectElements();


