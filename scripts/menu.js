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
    var kolor = '#1aa7ec';
    document.cookie = "kolor="+'#1aa7ec'+";path=/";
}
else{
    var kolor = getCookie("kolor");
    if(kolor == '#1aa7ec'){
        document.documentElement.style.setProperty('--accent', '#1aa7ec');
        $('meta[name=theme-color]').attr('content', '#1aa7ec');
    }
    else if(kolor == '#ec1a1a'){
        document.documentElement.style.setProperty('--accent', '#ec1a1a');
        $('meta[name=theme-color]').attr('content', '#ec1a1a');
    }
    else if(kolor == '#e78801'){
        document.documentElement.style.setProperty('--accent', '#e78801');
        $('meta[name=theme-color]').attr('content', '#e78801');
    }
    else if(kolor == '#fd148f'){
        document.documentElement.style.setProperty('--accent', '#fd148f');
        $('meta[name=theme-color]').attr('content', '#fd148f');
    }
    else if(kolor == '#0dba64'){
        document.documentElement.style.setProperty('--accent', '#0dba64');
        $('meta[name=theme-color]').attr('content', '#0dba64');
    }
}

function zmien_kolor(kolor){
    document.documentElement.style.setProperty('--accent', kolor);
    document.cookie = "kolor="+kolor+";path=/";
}

if(getCookie("motyw") == undefined ){
    var motyw = 0;
    document.cookie = "motyw="+0+";path=/";
}
else{
    var motyw = parseInt(getCookie("motyw"));
    if(motyw==1){
        $('html, img').css('filter','invert(1)')
        document.documentElement.style.setProperty('--filter', '1');
    }
    else if(motyw==0){
        $('html, img').css('filter','invert(0)')
        document.documentElement.style.setProperty('--filter', '0');
    }
}

function zmien_motyw(){
    console.log(motyw, getCookie("motyw"));
    if(motyw == 0){
        motyw++;
        document.cookie = "motyw="+motyw+";path=/";
        $('html, img').css('filter','invert(1)')
    }
    else if(motyw == 1){
        motyw--;
        document.cookie = "motyw="+motyw+";path=/";
        $('html, img').css('filter','invert(0)')

    }
}

