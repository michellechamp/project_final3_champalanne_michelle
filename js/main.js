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

// windowLoad
$(window).load(function () {
    $.fn.sakura();
});
