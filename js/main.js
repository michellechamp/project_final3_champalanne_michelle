//for Textillate.js jQuery plug in: To add effect to "welcome" on index.html
$(function () {
    $('.welcometext').textillate({
        in: { effect: 'rollIn'
        }
    });
});

//Load falling petal jQuery plug in
// domReady
$(function () {
    $.fn.sakura();
});

// windowLoad for falling petal jQuery plug in (required)
$(window).load(function () {
    $.fn.sakura();
});

//Custom Javascript code to change text of button in submit form
var theSubmit = document.getElementById('submitbutton');

theSubmit.addEventListener('click', function () {
    var myElement = document.createElement('p');
    myElement.innerHTML = 'Thank you for submitting a request. We will be in touch shortly';
    theSubmit.replaceWith(myElement);
});

//Custom jQuery to change background color of Events section when mouse goes over
$('#events').mouseover(function () {
    $('#events').css('background-color', '#d4ad5a');
});

$('#events').mouseout(function () {
    $('#events').css('background-color', '#1f2d38');
});
