$(document).ready(function () {
    $('#gallery').unitegallery();
});

$(function () {
  var $body = $(document.body);
  var $form = $('#form');
  var $name = $form.find('#inputName');

  $form.submitter({
    dataType: 'json',
    start: function (e) {
      if (!$name.val()) {
        e.preventDefault(); // Prevent submit
        $name.focus();

        // Tooltip: https://github.com/fengyuanchen/tooltip
        $body.tooltip('Please enter a name', 'warning');
      }
    },
    done: function (e, data) {
      if ($.isPlainObject(data) && data.success) {
        $body.tooltip(data.result, 'success');
      }
    },
    fail: function (e, textStatus) {
      $body.tooltip(textStatus, 'danger');
    }
  });
});

$(document).ready(function () {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

});
