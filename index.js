
let h1 = document.getElementsByTagName('h1')[0];
let span = document.getElementsByClassName('brazil')[0]

h1.onmouseover = function() {change_color_yellow()};
h1.onmouseout = function() {change_color_blue()};

function change_color_yellow()
{
    h1.setAttribute("style", "font-size: 5rem")
    span.setAttribute("style", "font-size: 12rem")
 
}

function change_color_blue()
{
    h1.setAttribute("style", "font-size: 7rem")
    span.setAttribute("style", "font-size: 9rem")
}
