const welcome_text = ["Cześć👋", "Witaj ponownie👋", "Co słychać?🎯"];
const welcome_text_evening = ["Dobry wieczór🌙", "Dobrej nocy🌃"];
const welcome_text_morning = ["Dzień dobry!🌄", "Miłego dnia☀️", "Miłego poranka☕"];
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

function love(){
    let heart = document.getElementById('heart');
    heart.style.color = "#cc0000";
}

const btn = document.querySelector("#name");
var colors = ["#81CAA7", "#D46B84", "#88ABEE", "#C0ADF6"];
var shapes = ["oval", "triangle", "parallelogram"];

const createParticle = () => {
  let particle = document.createElement("div");
  particle.setAttribute("class", "particle");

  let color = colors[Math.floor(Math.random() * colors.length)];
  let shape = shapes[Math.floor(Math.random() * shapes.length)];

  if (shape === "triangle") {
    shape = "polygon(50% 0%, 10% 92%, 97% 92%)";
  } else if (shape === "parallelogram") {
    shape = "polygon(25% 0%, 73% 0, 43% 98%, 0% 100%)";
  } else if (shape === "oval") {
    shape = "ellipse(25% 40% at 50% 50%)";
  } else if (shape === "star") {
    shape =
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
  }

  // set styles
  let particleCss = {
    background: color,
    clipPath: shape
  };

  // apply computed styles to particle
  for (i in particleCss) {
    particle.style[i] = particleCss[i];
  }

  let directionX = Math.random() * (200 - -200) - 200;
  let directionY = Math.random() * (120 - -120) - 120;
  let rotateDirection = Math.random() * (720 - -720) - 720;

  document.querySelector(".particles").appendChild(particle);
  gsap.to(particle, {
    x: directionX,
    y: directionY,
    autoAlpha: 0.8,
    ease: "circ.out",
    duration: 0.7,
    rotation: rotateDirection
  });

  setTimeout(() => {
    particle.remove();
  }, 750);
};

btn.addEventListener("mouseover", () => {
  gsap.to(btn, { scale: 1.07, duration: 0.2 });
});

btn.addEventListener("mouseleave", () => {
  gsap.to(btn, { scale: 1, duration: 0.2 });
});

btn.addEventListener("mousedown", () => {
  gsap.to(btn, { scale: 1, duration: 0.05 });
  console.log("btn clicked");
});

btn.addEventListener("mouseup", () => {
  gsap.to(btn, { scale: 1.07, duration: 0.2, ease: "circ.out" });
  let particleCount = Math.floor(Math.random() * (30 - 20 + 1) + 20);
  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }
});

gsap.to(btn, {
  scaleX: 1,
  duration: 1,
  ease: "elastic.out(1, 0.3)"
});
