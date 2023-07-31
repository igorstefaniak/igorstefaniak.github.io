/* let settings = document.querySelector('#settings-icon-button');
let github = document.querySelector('#github-icon-button');
let folder = document.querySelector('#folder-icon-button');
let home = document.querySelector('#home-icon-button');
let edit = document.querySelector('#edit-icon-button');
let maximizeminimize = $(document).find('.maximizeminimize-icon-button')

let twitter = document.querySelector('#twitter-icon-button');
let facebook = document.querySelector('#facebook-icon-button');
let instagram = document.querySelector('#instagram-icon-button');
let youtube = document.querySelector('#youtube-icon-button');
function a(cn) {

    let name = cn.id.split("-")[0]

    let animationMenu;
    try {
        animationMenu = bodymovin.loadAnimation({
            container: cn,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: `./icons/${name}.json`
        });
    } catch (error) {
        console.error('Error loading animation:', error);
    }

    const directionMenu = 1;

    $(cn).mouseenter(function () {
        animationMenu.setDirection(directionMenu);
        animationMenu.play();
    });

    $(cn).mouseleave(function () {
        animationMenu.setDirection(-directionMenu);
        animationMenu.play();
    });

};


function click(cn) {

    Object.entries(cn).forEach(([key, value]) => {

        if(key == 'prevObject'|| key== 'length') {
            console.log("a")
                    }
                    else{
        let name = value.id.split("-")[0]
        $(value).attr('data', key);

        var animationMenu;
        try {
            animationMenu = bodymovin.loadAnimation({
                container: value,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: `./icons/${name}.json`
            });
        } catch (error) {
            console.error('Error loading animation:', error);
        }
    }
    });

    const directionMenu = 1;

    $(cn).click(function () {
        var clicks = $(this).data('clicks');
        if (clicks) {
            animationMenu.setDirection(-directionMenu);
            animationMenu.play();
        } else {
            animationMenu.setDirection(directionMenu);
            animationMenu.play();
        }
        $(this).data("clicks", !clicks);
    });

    

     Object.entries(cn).forEach(([key, value]) => {

        if(value == 2) {
            throw new Error("Break the loop.")
        }
        else{
            console.log(key, value)
            let name = value.id.split("-")[0]
    
    
            let animationMenu;
            try {
                animationMenu = bodymovin.loadAnimation({
                    container: value,
                    renderer: 'svg',
                    loop: false,
                    autoplay: false,
                    path: `./icons/${name}.json`
                });
            } catch (error) {
                console.error('Error loading animation:', error);
            }
            const directionMenu = 1;
    
            $(cn).click(function () {
                var clicks = $(this).data('clicks');
                if (clicks) {
                    animationMenu.setDirection(-directionMenu);
                    animationMenu.play();
                } else {
                    animationMenu.setDirection(directionMenu);
                    animationMenu.play();
                }
                $(this).data("clicks", !clicks);
            });
            
        }

    });



};


a(github)
a(settings)
a(folder)
a(home)
a(edit)
click(maximizeminimize)

a(facebook)
a(instagram)
a(youtube)
a(twitter)

console.log('%cIgor Stefaniak 2023', 'font-size: 2em;')
/* Object.keys({cn})[0] */


let settings = document.querySelector('#settings-icon-button');
let github = document.querySelector('#github-icon-button');
let folder = document.querySelector('#folder-icon-button');
let home = document.querySelector('#home-icon-button');
let edit = document.querySelector('#edit-icon-button');
let maximizeminimize = document.querySelector('#maximizeminimize-icon-button');

let twitter = document.querySelector('#twitter-icon-button');
let facebook = document.querySelector('#facebook-icon-button');
let instagram = document.querySelector('#instagram-icon-button');
let youtube = document.querySelector('#youtube-icon-button');



function hover(cn) {

    let name = cn.id.split("-")[0]

    let animationMenu;
    try {
        animationMenu = bodymovin.loadAnimation({
            container: cn,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: `./icons/${name}.json`
        });
    } catch (error) {
        console.error('Error loading animation:', error);
    }

    const directionMenu = 1;

    $(cn).mouseenter(function () {
        animationMenu.setDirection(directionMenu);
        animationMenu.play();
    });

    $(cn).mouseleave(function () {
        animationMenu.setDirection(-directionMenu);
        animationMenu.play();
    });

};


function hoverforresize(cn) {

    let name = cn.id.split("-")[0]

    var animationMenu;
    try {
        animationMenu = bodymovin.loadAnimation({
            container: cn,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: `./icons/${name}.json`
        });
    } catch (error) {
        console.error('Error loading animation:', error);
    }


    const directionMenu = -1;

    $(cn).mouseenter(function () {
        animationMenu.setDirection(directionMenu);
        animationMenu.play();
    });

    $(cn).mouseleave(function () {
        animationMenu.setDirection(-directionMenu);
        animationMenu.play();
        setTimeout(function(){animationMenu.setDirection(directionMenu);
        animationMenu.play();}, 500)
        
    });

/*    $(cn).click(function () {
        animationMenu.setDirection(-directionMenu);
        animationMenu.play();
        animationMenu.setDirection(directionMenu);
            animationMenu.play();
         var clicks = $(this).data('clicks');
        if (clicks) {
            animationMenu.setDirection(directionMenu);
            animationMenu.play();
        } else {
            animationMenu.setDirection(-directionMenu);
            animationMenu.play();
        }
        $(this).data("clicks", !clicks); 
    });*/


/*     $('.gallery')[0].click(function () {
        console.log('a')
    }) */
};


function multiple() {
    let objekty = $(document).find('.maximizeminimize-icon-button')
    var tablica = []
    Object.entries(objekty).forEach(([key, value]) => {
        if (key == 'prevObject' || key == 'length') {
        }
        else {
            $(value).attr('id', `${value.className}-${key}`);
            tablica.push(value)
        }
    });
    return tablica;

}


hover(github)
hover(settings)
hover(folder)
hover(home)
hover(edit)

for (let i = 0; i < multiple().length; i++) {
    hoverforresize(multiple()[i])
  }

  hover(facebook)
  hover(instagram)
  hover(youtube)
  hover(twitter)

console.log('%cIgor Stefaniak 2023', 'font-size: 2em;')
/* Object.keys({cn})[0] */
