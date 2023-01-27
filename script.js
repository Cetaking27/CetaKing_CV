// TYPED
var typed = new Typed('.typed', {
  strings: ["Hello world and welcome to my page...", 
  "My name is HABA ALPHONSE alias Ceta-king", 
  "I am a Data Scientist programmer and I graduated from the Russian People's Friendship University with a Master's degree in Applied Mathematics and Computer Science. I have been passionate about statistics since I was in high school, and as I grew up I realized that combining statistics with computer science was the best way to gain strong skills and modernize statistics, so I decided to become a data scientist.","So I devoted all my resources and time to study as much as possible and improve my skills in these areas", "Statistics is a passion for me and knowing how to manipulate data to develop models that could help people solve their management related problems is a goal that I'm willing to achieve"],
  typeSpeed: 30,
});

// Compteur lIve
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }

});

//Navbar

let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// aos anymation

AOS.init();