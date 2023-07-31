$("#container").ready(function(){
    setTimeout( function() {
        $("#splash").css("opacity", "0");
        $('#container').css( "display", "block" );
    }, 500);
/*      setTimeout( function() {
        $("body").css("overflow", "auto");
    }, 800); */
    setTimeout( function() {
        $("#splash").css("display", "none");
/*         var styleElement = document.createElement("style");
        styleElement.appendChild(document.createTextNode("::-webkit-scrollbar {width: 8px!important;} ::-webkit-scrollbar-thumb {background: var(--accent);border-radius: 8px;width: 2px;} ::-webkit-scrollbar-track {background: #1d1c21;}"));
        document.getElementsByTagName("head")[0].appendChild(styleElement);	 */
    }, 850);
});
