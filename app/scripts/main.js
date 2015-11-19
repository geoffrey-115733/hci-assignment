console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(".btn-success").click(function() {
    count=30;
    $('#status').html('<p><span class="glyphicon glyphicon-ok"></span> System will turn <strong>ON</strong> in </p><p class="center-block"><span id="timer">30</span> seconds</p>');
    $('body').removeClass("red");
    $('body').removeClass("green");
    $('body').addClass("lightgreen");

});


$(".btn-danger").click(function() {
    $('#status').html('<span class="glyphicon glyphicon-remove"></span> System is <strong>OFF</strong>');
    $('body').removeClass("green");
    $('body').removeClass("lightgreen");
    $('body').addClass("red");
});


$(".btn-default").click(function() {
    $('#status').text("Override activated");
    $('body').removeClass("red");
    $('body').removeClass("lightgreen");
    $('body').removeClass("green");
});

/**
 http://www.bootstraptoggle.com
 **/

var count=30;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
    count=count-1;
    if (count <= 0){
        clearInterval(counter);
        $('#status').html('<span class="glyphicon glyphicon-ok"></span> System is <strong>ON</strong>');
        $('body').removeClass("lightgreen");
        $('body').addClass("green");
        return;
    }
    else{
        $('#timer').html(count); // watch for spelling
    }

