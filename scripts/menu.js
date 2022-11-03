$('.menu *').focus(function () {
    const a = $('.menu').attr('id');
    $('#'+a).removeClass('_vanish');
});

$('.menu *').focusout(function () {
    const a = $('.menu').attr('id');
    $('#'+a).addClass('_vanish');
});

var l_z = 1;
function czcionka() {
    if(l_z<4){
        l_z++;
        $("*").each(function() {
            fontSizeValue = parseInt($(this).css('font-size'));
            $(this).css('font-size', 1 + fontSizeValue)
        });
    }
    else if(l_z=4){
        l_z = 1;
        $("*").each(function() {
            $(this).removeAttr('style');
        });
    }
}
var l_k = 0;
function kontrast() {
    if(l_k==0){
        $("*").each(function() {
            $(this).addClass('kontrast');
        });
        l_k++;
    }
    else if(l_k==1){
        $("*").each(function() {
            $(this).removeClass('kontrast');
        });
        l_k--;
    }
}