$(function() {

var images = [
    "https://placehold.jp/3d4007/ffffff/200x200.png",
    "https://placehold.jp/3d4007/ffffff/200x200.png", 
    "https://placehold.jp/3d4007/ffffff/200x200.png", 
    "https://placehold.jp/3d4007/ffffff/200x200.png", 
    "https://placehold.jp/3d4007/ffffff/200x200.png", 
    "https://placehold.jp/3d4007/ffffff/200x200.png"];

var container = $("<div></div>");
container.insertBefore("script");

images.forEach(function(image) {
    var img = $("<img>");
    img.attr("src", image);
    img.appendTo(container);
});

container.prepend("<h1>Amazing Images</h1>");

container.find("img").each(function() {
    var width = Math.floor(Math.random() * 300) + 100;
    var height = Math.floor(Math.random() * 300) + 100;
    $(this).css({
        width: width + "px",
        height: height + "px"
    });
});

container.find("img").each(function() {
    var width = $(this).width();
    if (width < 200) {
        $(this).css("border", "3px solid #dc143c");
    } else {
        return false;
    };
});



})