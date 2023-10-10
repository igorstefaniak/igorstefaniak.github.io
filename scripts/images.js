$('img[data-enlargable]').addClass('img-enlargable')


$('div.maximizeminimize-icon-button').click(function () {
    console.log($('~ .img-enlargable', this)[0].dataset.description)

    var src = $('~ .img-enlargable', this).attr('src');
    $('<div class="gallery">').css({
        opacity: '0',
        background: 'RGBA(0,0,0,.5)',
        backgroundSize: 'contain',
        width: '100%', height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0', left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 500ms',
        flexDirection: 'column'
    }).appendTo('body');

    $('<img class="image">').attr('src', src).css({
        cursor: 'zoom-out',
        opacity: '0',
        maxHeight: '100%',
        maxWidth: '100%',
        margin: '10px',
        transition: 'all 500ms'}).click(function () {
            $('.gallery').css('opacity','0');
            setTimeout(function () {$('.gallery').remove();}, 300)
        
        }).appendTo($('.gallery'));

    $('<div>').html($('~ .img-enlargable', this)[0].dataset.description).appendTo($('.gallery'));
    setTimeout(function () {
        $('.gallery').css('opacity', '1')[0];
        $('.image').css('opacity', '1')[0];
    }
        , 5);


});
