console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(".btn-success").click(function() {
    count=30;
    $('#status').html('<p class="text-center">System will turn <strong>ON</strong> in</p><p class="text-center"><span id="timer">30</span> seconds</p>');
    $('body').removeClass("red");
    $('body').removeClass("green");
    $('body').addClass("lightgreen");

});


$(".btn-danger").click(function() {
    $('#status').html('<p class="text-center"><span class="glyphicon glyphicon-remove"></span> System is <strong>OFF</strong></p>');
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

var count=90000000;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    //alert(count);
    if (count <= 0) {
        clearInterval(counter);
        $('#status').html('<p class="text-center"><span class="glyphicon glyphicon-ok"></span> System is <strong>ON</strong></p>');
        $('body').removeClass("lightgreen");
        $('body').addClass("green");
        return;
    }
    else {
        $('#timer').html(count); // watch for spelling
    }
}
