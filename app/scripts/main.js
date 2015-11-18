console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(".btn-success").click(function() {
  $('#status').html('<span class="glyphicon glyphicon-ok"></span> System is <strong>ON</strong>');
  $('body').addClass("green");
  $('body').removeClass("red");
});


$(".btn-danger").click(function() {
  $('#status').html('<span class="glyphicon glyphicon-remove"></span> System is <strong>OFF</strong>');
  $('body').addClass("red");
  $('body').removeClass("green");
});


$(".btn-default").click(function() {
  $('#status').text("Override activated");
  $('body').removeClass("red");
  $('body').removeClass("green");
});

/**
http://www.bootstraptoggle.com
**/