
function addListItem(text){
  list = document.querySelector('ol');
  item = document.createElement('li');
  item.innerText = text;
  list.appendChild(item);

}
function sayDone() {
    console.log("Done");
}
function addBorderToMap() {
  $('#map').css({border: '10px solid blue'});
}
function makeBorder() {
  $(this).css({border: '10px solid blue'});
}

function fadeOutCurrentElement() {
  $(this).fadeOut();
}
function fadeImage() {
  $('img').fadeToggle(4000,'swing',sayDone);
}

function setupHandlers() {
  $('#map').on('click', fadeImage);
  $('.fader').on('click', fadeImage);
  $('#map').on('mouseenter',
            addBorderToMap)
  $('li').on('click', fadeOutCurrentElement);
  $('.borderimage').on('click', makeBorder)
}

$(document).ready(setupHandlers);
