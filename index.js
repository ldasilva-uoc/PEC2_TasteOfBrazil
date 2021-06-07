
let h1 = document.getElementsByTagName('h1')[0];
let span = document.getElementsByClassName('brazil')[0]

h1.onmouseover = function() {change_color_yellow()};
h1.onmouseout = function() {change_color_blue()};


if('loading' in HTMLImageElement.prototype){
    console.log('El naavegador soporta "loading"');
}
else
{
    console.log('El naavegador no soporta "loading"');
}

function change_color_yellow()
{
    h1.setAttribute("style", "color: #e2cb00");
    span.setAttribute("style", "color: #002277");
}

function change_color_blue()
{
    h1.setAttribute("style", "color: #002277");
    span.setAttribute("style", "color: #e2cb00");
}
