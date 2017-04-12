// Ready

// Nav bar scroll 
var timedelay = 1;
function HideTheMouse()	
{
if(timedelay == 5)
{
$('.header').fadeOut();
timedelay = 1;
}
timedelay = timedelay+1;
}
 


// ???
function jumpScroll() {
    window.scroll(0,3000);
}

// Hide header on load
function SetOpacZero()
{
$("header").hide();
}

// Map
function initMap() {
             var uluru = {lat: 52.8174104, lng: -2.0827787};
             var map = new google.maps.Map(document.getElementById('map'), {
             zoom: 15,
             center: uluru
             });
           var marker = new         google.maps.Marker({
              position: uluru,
              map: map
              });
             }


//show arrow on lightbox
$(function () {

$('#clicktomenu').on('click', function () {

$('#arrowright').show();
});

});


//hide right arrow when click off image
$(function () {

$('#img1').on('click', function() {

$('#arrowright').hide();
});
});


$(function () {

$('#img2').on('click', function() {

$('#arrowright').hide();
$('#arrowleft').hide();
});
});


// hide right arrow when clicked right and show left (to go back)
$(function () {

$('#arrowright').on('click', function() {

$('#arrowright').hide();
$('#arrowleft').show();

});
});

// hide left arrow when click left, and show right (to go right)
$(function () {

$('#arrowleft').on('click', function() {

$('#arrowleft').hide();
$('#arrowright').show();

});
});



 $(document).mousemove(function() {
    var y = $(this).scrollTop();
	// hide the header when the lightbox is showing
    if (y > 650 && $("#arrowleft").css('display') == 'none' && $("#arrowright").css('display') == 'none')    {
      $('.header').fadeIn();
timedelay = 1;
clearInterval(_delay);
_delay = setInterval(HideTheMouse, 500);  
    }

   else {
       $('.header').fadeOut();
   }
});
_delay = setInterval(HideTheMouse, 500); 

























