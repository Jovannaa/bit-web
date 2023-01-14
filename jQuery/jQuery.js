$(function () {
    console.log('Hello, World!');

    var $newLi = $('li:first');
    $newLi.addClass('first');


   $('li').each(function(){
    $(this).text($(this).text().toUpperCase());
  });


    var $lastLi = $('li:last');
    $lastLi.addClass('activ');

    var $middleLi = $('li:nth-child(2)');
    $middleLi.addClass('middle');

  
    












});
