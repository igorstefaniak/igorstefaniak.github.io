let settings = document.querySelector('#settings-icon-button');
let github = document.querySelector('#github-icon-button');
let folder = document.querySelector('#folder-icon-button');
let home = document.querySelector('#home-icon-button');

let twitter = document.querySelector('#twitter-icon-button');
let facebook = document.querySelector('#facebook-icon-button');
let instagram = document.querySelector('#instagram-icon-button');
let youtube = document.querySelector('#youtube-icon-button');

function a (cn) {

    let name = String(cn.id).substring(0, String(cn.id).indexOf("-"))

    let animationMenu = bodymovin.loadAnimation({
        container: cn,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "./icons/"+name+".json"
});

var directionMenu = 1;

$(cn).mouseenter(function () { 
    animationMenu.setDirection(directionMenu);
    animationMenu.play();
});

$(cn).mouseleave(function () { 
    animationMenu.setDirection(-directionMenu);
    animationMenu.play();
});

};

a(github)
a(settings)
a(folder)
a(home)

a(facebook)
a(instagram)
a(youtube)
a(twitter)
/* Object.keys({cn})[0] */