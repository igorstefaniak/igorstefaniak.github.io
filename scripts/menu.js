$('.menu *').focus(function () {
    const a = $('.menu').attr('id');
    $('#'+a).removeClass('_vanish');
});

$('.menu *').focusout(function () {
    const a = $('.menu').attr('id');
    $('#'+a).addClass('_vanish');
});

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

if(getCookie("poziom_rozmiaru_czcionki") == undefined ){
    var poziom_rozmiaru_czcionki = 0;
    document.cookie = "poziom_rozmiaru_czcionki="+0+";path=/";
}
else{
    var poziom_rozmiaru_czcionki = parseInt(getCookie("poziom_rozmiaru_czcionki"));
    $("html").css('font-size', parseInt(getCookie("poziom_rozmiaru_czcionki")) + parseInt($('html').css('font-size')));
}

function rozmiar_czcionki(op){
    if(op == '-'){
        poziom_rozmiaru_czcionki--;
    }
    else{
        poziom_rozmiaru_czcionki++;
    }
    if(poziom_rozmiaru_czcionki > -2 && poziom_rozmiaru_czcionki < 6){
        $("html").css('font-size', eval($('html').css('font-size').slice(0, -2) + op + '1') );
        document.cookie = "poziom_rozmiaru_czcionki="+poziom_rozmiaru_czcionki+";path=/"
        console.log(poziom_rozmiaru_czcionki, getCookie("poziom_rozmiaru_czcionki"));
    }
    else{
        if(op == '-'){
            poziom_rozmiaru_czcionki++;
        }
        else{
            poziom_rozmiaru_czcionki--;
        }
        console.log(poziom_rozmiaru_czcionki, getCookie("poziom_rozmiaru_czcionki"));
    }
}

if(getCookie("poziom_kontrast") == undefined ){
    var poziom_kontrast = 0;
    document.cookie = "poziom_kontrast="+0+";path=/";
}
else{
    var poziom_kontrast = parseInt(getCookie("poziom_kontrast"));
    if(poziom_kontrast == 1){
        $("html *").addClass('kontrast');
    }
    else{
        $("html *").removeClass('kontrast');
    }
}
function ustaw_kontrast(){
    if(poziom_kontrast==0){
        $("html *").addClass('kontrast');
        poziom_kontrast++;
        document.cookie = "poziom_kontrast="+poziom_kontrast+";path=/";
    }
    else if(poziom_kontrast==1){
        $("html *").removeClass('kontrast');
        poziom_kontrast--;
        document.cookie = "poziom_kontrast="+poziom_kontrast+";path=/";

    }
}

if(getCookie("poziom_odnosniki") == undefined ){
    var poziom_odnosniki = 0;
    document.cookie = "poziom_odnosniki="+0+";path=/";
}
else{
    var poziom_odnosniki = parseInt(getCookie("poziom_odnosniki"));
    if(poziom_odnosniki==0){
        $("a").each(function() {
            $(this).css('text-decoration', '')
        });
    }
    else if(poziom_odnosniki==1){
        $("a").each(function() {
            $(this).css('text-decoration', 'underline')
        });
    }
}

function podkresl_odnosniki(){
    console.log(poziom_odnosniki, getCookie("poziom_odnosniki"));
    if(poziom_odnosniki == 0){
        $("a").each(function() {
            $(this).css('text-decoration', 'underline')
        });
        poziom_odnosniki++;
        document.cookie = "poziom_odnosniki="+poziom_odnosniki+";path=/";
    }
    else if(poziom_odnosniki == 1){
        $("a").each(function() {
            $(this).css('text-decoration', '')
        });
        poziom_odnosniki--;
        document.cookie = "poziom_odnosniki="+poziom_odnosniki+";path=/";
    }
}
if(getCookie("odcienie_szarosci") == undefined ){
    var odcienie_szarosci = 0;
    document.cookie = "odcienie_szarosci="+0+";path=/";
}
else{
    var odcienie_szarosci = parseInt(getCookie("odcienie_szarosci"));
    if(odcienie_szarosci==0){
        $("html").css('filter', '');
    }
    else if(odcienie_szarosci==1){
        $("html").css('filter', 'grayscale(100%)');
    }
}

function ustaw_odcienie_szarosci(){
    console.log(odcienie_szarosci, getCookie("odcienie_szarosci"));
    if(odcienie_szarosci == 0){
        $("html").css('filter', 'grayscale(100%)');
        odcienie_szarosci++;
        document.cookie = "odcienie_szarosci="+odcienie_szarosci+";path=/";
    }
    else if(odcienie_szarosci == 1){
        $("html").css('filter', '');
        odcienie_szarosci--;
        document.cookie = "odcienie_szarosci="+odcienie_szarosci+";path=/";
    }
}

function reset(){
    var reset = 1;
    $("html").css('font-size', '' );
    $("html *").removeClass('kontrast');
    $("a").each(function() {
        $(this).css('text-decoration', '')
    });
    poziom_odnosniki = 0;
    document.cookie = "poziom_odnosniki="+poziom_odnosniki+";path=/";
    odcienie_szarosci = 0;
    document.cookie = "odcienie_szarosci="+odcienie_szarosci+";path=/";
    poziom_kontrast = 0;
    document.cookie = "poziom_kontrast="+poziom_kontrast+";path=/";
    poziom_rozmiaru_czcionki = 0;
    document.cookie = "poziom_rozmiaru_czcionki="+poziom_rozmiaru_czcionki+";path=/";
    
}

if(getCookie("kolor") == undefined ){
    var kolor = 0;
    document.cookie = "kolor="+0+";path=/";
}
else{
    var kolor = parseInt(getCookie("kolor"));
    if(kolor == 0){
        document.documentElement.style.setProperty('--accent', '#1aa7ec');
    }
    else if(kolor == 1){
        document.documentElement.style.setProperty('--accent', '#ec1a1a');
    }
    else if(kolor == 2){
        document.documentElement.style.setProperty('--accent', '#e78801');
    }
    else if(kolor == 3){
        document.documentElement.style.setProperty('--accent', '#fd148f');
    }
    else if(kolor == 4){
        document.documentElement.style.setProperty('--accent', '#0DBA64');
    }
}

function zmien_kolor(){
    console.log(kolor, getCookie("kolor"));
    if(kolor == 0){
        document.documentElement.style.setProperty('--accent', '#ec1a1a');
        kolor++;
        document.cookie = "kolor="+kolor+";path=/";
    }
    else if(kolor == 1){
        document.documentElement.style.setProperty('--accent', '#e78801');
        kolor++;
        document.cookie = "kolor="+kolor+";path=/";
    }
    else if(kolor == 2){
        document.documentElement.style.setProperty('--accent', '#fd148f');
        kolor++;
        document.cookie = "kolor="+kolor+";path=/";
    }
    else if(kolor == 3){
        document.documentElement.style.setProperty('--accent', '#0DBA64');
        kolor++;
        document.cookie = "kolor="+kolor+";path=/";
    }
    else{
        document.documentElement.style.setProperty('--accent', '#1aa7ec');
        kolor = 0;
        document.cookie = "kolor="+kolor+";path=/";
    }
}


/*     var font_level_size = parseInt(getCookie("font_level_size"));
    for (font_level_size>1; font_level_size--;) {
        $("body *").each(function() {
            fontSizeValue = parseInt($(this).css('font-size'));
            $(this).css('font-size', font_level_size + fontSizeValue)
        });
    }
    var font_level_size = parseInt(getCookie("font_level_size")) -1;
}
console.log(font_level_size, getCookie("font_level_size"));

function czcionka(){
    $("body *").each(function() {
        fontSizeValue = parseInt($(this).css('font-size'));
        $(this).css('font-size', font_level_size + fontSizeValue)
    });
    font_level_size++;
    document.cookie = "font_level_size="+font_level_size+";path=/"
    console.log(font_level_size, getCookie("font_level_size"));
} */


/* for (font_level_size>1; font_level_size--;) {
    console.log(font_level_size)
}

console.log(font_level_size, getCookie("font_level_size"));
 */
/* 
function czcionka(){
        if(n == 3){
            $("body *").each(function() {
                $(this).css('font-size', '')
            });
            n = 1;
            document.cookie = "font_level_size="+n+";path=/"
        }
        else if(n < 3){
            $("body *").each(function() {
                fontSizeValue = parseInt($(this).css('font-size'));
                $(this).css('font-size', 1 + fontSizeValue)
            });
            n++;
            document.cookie = "font_level_size="+n+";path=/"
        }
        console.log(n);
    }



    ------------

var font_level_size = getCookie("font_level_size") != undefined && getCookie("font_level_size") != null ? getCookie("font_level_size") : 0;

$(document).ready(function() {
    $("*").each(function() {
        fontSizeValue = parseInt($(this).css('font-size'));
        $(this).css('font-size', fontSizeValue + parseInt(font_level_size));
    });
});
function czcionka(){
    if(font_level_size == 3){
        font_level_size = 0;
        document.cookie = "font_level_size="+font_level_size+";path=/";
        console.log(font_level_size);
        $("*").each(function() {
            $(this).css('font-size', '')
        });
    }
    else if(font_level_size<3){
        font_level_size++;
        document.cookie = "font_level_size="+font_level_size+";path=/"
        console.log(font_level_size);
        $("*").each(function() {
            fontSizeValue = parseInt($(this).css('font-size'));
            $(this).css('font-size', 1 + fontSizeValue)
        });
    }
}
var l_k = 0;
function kontrast(){
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
} */