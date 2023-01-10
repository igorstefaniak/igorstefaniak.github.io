const welcome_text = ["Cześć", "Witaj"];
const welcome_text_evening = ["Dobry wieczór"];
const welcome_text_morning = ["Dzień dobry!"];
let hellotext = document.getElementById('hello-text');

const d = new Date();

switch (true) {
    case d.getHours() >= 5 && d.getHours() <= 10:
        var randomNumber = Math.floor(Math.random() * welcome_text_morning.length);
        hellotext.innerHTML = welcome_text_morning[randomNumber];
        break;
    case d.getHours() >= 18 && d.getHours() <= 23:
        var randomNumber = Math.floor(Math.random() * welcome_text_evening.length);
        hellotext.innerHTML = welcome_text_evening[randomNumber];
        break;
    default:
        var randomNumber = Math.floor(Math.random() * welcome_text.length);
        hellotext.innerHTML = welcome_text[randomNumber];
        break;
}
