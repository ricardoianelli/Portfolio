/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
})

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

themeButton.animate([
    // keyframes
    // { transform: 'scale(1)' }, 
    // { transform: 'scale(0.8)' },
    // { transform: 'scale(1)' },

    { transform: 'rotate(0deg)' },
    { transform: 'rotate(15deg)' },
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(-15deg)' },
    { transform: 'rotate(0deg)' }
], {
    // timing options
    duration: 1000,
    iterations: Infinity
});

const refusalButton = document.getElementById('refusal-button');
var currentClicks = 0;

const clickMessages = [
    "Are you sure?",
    "Really sure?",
    "Like, really really really sure?",
    "Ok, click again, just to confirm.",
    ":(",
    "You should think more, I'm a funny guy.",
    "Here's a dinosaur for you 🦕",
    "That didn't work? How about a llama? 🦙",
    "Come on, Llamas are cool",
    "Except when they spit on you. 💦🦙",
    "Not even llamas? You're tough. What about a poem?",
    "Roses are red 🌹",
    "The sky is blue ☄️ (that's actually a lie)",
    "Give me a job, please 🙏🏼",
    "I am begging you. 🥺👉👈",
    "Wanna hear a fun fact?",
    "Hunting unicorns is illegal in Michigan/USA",
    "What do you call a classy fish?",
    "Sofishticated 🐟💅",
    "What do you call and alligator in a vest?",
    "An investigator 🐊🔍",
    "Why did the can crusher quit his job?",
    "Because it was soda pressing. 🥁",
    "😆",
    "😀",
    "🙂",
    "😐",
    "😔 ok...",
    "Click 3 more times and I'll accept it.",
    "1...",
    "2...",
];

const maxClicks = clickMessages.length;

refusalButton.addEventListener('click', () =>{
    if (currentClicks < maxClicks) {
        refusalButton.textContent = clickMessages[currentClicks++];
    }
    else {
        refusalButton.remove();
        setTimeout(() => { 
        alert("I'm sorry, our button received a call from his wife and had to run to the hospital. Apparently his wife is giving birth to his first child, Bobby D Button. Thank you for understanding, have an amazing day!");

         }, 1000);
    };
});

const messageForm = document.getElementById("messageForm");
const messageFormButton = document.getElementById("messageFormButton");

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(event.target.action, {
        method: 'POST',
        body: JSON.stringify({
            name: messageForm.elements["name"].value,
            email: messageForm.elements["email"].value,
            subject: messageForm.elements["subject"].value,
            msg: messageForm.elements["msg"].value
          })
    }).then((resp) => {

        if (resp.status == "202") {
            messageFormButton.textContent = "Message sent!";
            messageFormButton.disabled = true;
            messageFormButton.style.background='#d9d2e9';
            return resp.json();
        }

        alert("There was an error sending your message, please try again. Sorry for the inconvenience.")

    }).catch((error) => {
        alert("There was an error sending your message, please try again. Sorry for the inconvenience.")
    });    
});


// Stacker minigame, source: https://slicker.me/javascript/tower.htm
let canvas = document.getElementById("minigameCanvas");
let minigameScore = document.getElementById("minigameScore");
let gameOverText = document.getElementById("gameOverText");
gameOverText.style.display = "none";

let context = canvas.getContext("2d");
context.font = 'bold 30px sans-serif';
let scrollCounter, cameraY, current, mode, xSpeed;
let ySpeed = (1/100) * canvas.height;
let height = canvas.height/15;
let boxes = [];

boxes[0] = {
  x: canvas.width/2.6,
  y: canvas.height/2,
  width: canvas.width/4
};

let debris = {
  x: 0,
  width: 0
};
 
function newBox() {
  boxes[current] = {
    x: 0,
    y: (current + 12) * height,
    width: boxes[current - 1].width
  };
}
 
function gameOver() {
  mode = 'gameOver';
  gameOverText.style.display = "block";
}
 
function animate() {
  if (mode != 'gameOver') {
    context.clearRect(0, 0, canvas.width, canvas.height);
    minigameScore.innerHTML = `Score: ${(current-1)}`;

    for (let n = 0; n < boxes.length; n++) {
      let box = boxes[n];
      context.fillStyle = 'hsl(250,50%,' + (20 + n * 4) + '%)';
      context.fillRect(box.x, canvas.height - box.y + cameraY, box.width, height);
    }

    context.fillStyle = 'orange';
    context.fillRect(debris.x, canvas.height - debris.y + cameraY, debris.width, height);
    if (mode == 'bounce') {
      boxes[current].x = boxes[current].x + xSpeed;
      if (xSpeed > 0 && boxes[current].x + boxes[current].width > canvas.width)
        xSpeed = -xSpeed;
      if (xSpeed < 0 && boxes[current].x < 0)
        xSpeed = -xSpeed;
    }
    if (mode == 'fall') {
      boxes[current].y = boxes[current].y - ySpeed;
      if (boxes[current].y == boxes[current - 1].y + height) {
        mode = 'bounce';
        let difference = boxes[current].x - boxes[current - 1].x;
        if (Math.abs(difference) >= boxes[current].width) {
          gameOver();
        }
        debris = {
          y: boxes[current].y,
          width: difference
        };
        if (boxes[current].x > boxes[current - 1].x) {
          boxes[current].width = boxes[current].width - difference;
          debris.x = boxes[current].x + boxes[current].width;
        } else {
          debris.x = boxes[current].x - difference;
          boxes[current].width = boxes[current].width + difference;
          boxes[current].x = boxes[current - 1].x;
        }
        if (xSpeed > 0)
          xSpeed = xSpeed + (1/1000 * canvas.width);
        else
          xSpeed--;
        current++;
        scrollCounter = height;
        newBox();
      }
    }
    debris.y = debris.y - ySpeed;
    if (scrollCounter) {
      cameraY++;
      scrollCounter--;
    }
  }

  window.requestAnimationFrame(animate);
}
 
function restart() {
  boxes.splice(1, boxes.length - 1);
  mode = 'bounce';
  cameraY = 0;
  scrollCounter = 0;
  xSpeed = 1;
  current = 1;
  newBox();
  debris.y = 0;
  gameOverText.style.display = "none";
}
 
canvas.onpointerdown = function() {
  if (mode == 'gameOver')
    restart();
  else {
    if (mode == 'bounce')
      mode = 'fall';
  }
};
 
restart();
animate();

