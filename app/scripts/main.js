console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

$(".on-button").click(function() {
    //needed to reset variable and counter object so the count down kept working.
    count=10;
    counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    
    $('#status').html('<p class="text-center">System will turn <strong>ON</strong> in</p><p class="text-center"><span id="timer">10</span> seconds</p>');
    $('body').removeClass("red");
    $('body').removeClass("green");
    $('body').addClass("lightgreen");

});


$(".off-button").click(function() {
    $('#status').html('<p class="text-center"><span class="glyphicon glyphicon-remove"></span> System is <strong>OFF</strong></p>');
    $('body').removeClass("green");
    $('body').removeClass("lightgreen");
    $('body').addClass("red");
});


$(".override-button").click(function() {
    $('#status').text("Override activated");
    $('body').removeClass("red");
    $('body').removeClass("lightgreen");
    $('body').removeClass("green");

    $('.home').hide();
    $('.override').show();
    $('.override').removeClass("hidden");
});

$(".done").click(function() {
   
    var stove = $('#stove').prop('checked');
    var oven = $('#oven').prop('checked');
    var heater = $('#heater').prop('checked');

    if(stove) {
        stove = "<span class='success'>on</span>";
    }
    else {
        stove = "<span class='danger'>off</span>";
    }

    if(oven) {
        oven = "<span class='success'>on</span>";
    }
    else {
        oven = "<span class='danger'>off</span>";
    }

    if(heater) {
        heater = "<span class='success'>on</span>";
    }
    else {
        heater = "<span class='danger'>off</span>";
    }


    var overrideText = "<h3>Overrides<h3/> <p>The stove is " + stove + "<br /> The oven is " + oven + "<br /> The heater is " + heater + "</p>";
    


    $('#status').html(overrideText);
    $('.override').hide();
    $('.home').show();
    $('.override').addClass("hidden");
});

/**
 http://www.bootstraptoggle.com
 **/

var count=90000000;
var counter=setInterval(timers, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    //alert(count);
    if (count < 1) {
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
