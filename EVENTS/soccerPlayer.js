// var body = document.querySelector('body');
// var button = document.getElementById('button');
// var player = document.getElementById('img');

// searchBtn.addEventListener('click', searchYT);

var target = document.getElementById('target');
var targetBox = document.getElementById('target-box');

targetBox.addEventListener('click', mouseClicked);

function mouseClicked (event){
  var xposition = (event.clientX - target.offsetLeft - target.offsetWidth/2);
  var yposition = (event.clientY - target.offsetTop - target.offsetHeight/2);
  target.style.transform = "translate("+ xposition + "px," + yposition + "px)";
  console.log(event);
}



button.addEventListener('click', function onClick(event){
    document.getElementById('target') = back-to-top 
})