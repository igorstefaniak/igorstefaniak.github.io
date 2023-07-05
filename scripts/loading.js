$("#container").ready(function(){
    setTimeout( function() {
        $("#splash").css("opacity", "0");
        $('#container').css( "display", "block" );
    }, 500);
    setTimeout( function() {
        $("#splash").css("display", "none");
    }, 850);
});