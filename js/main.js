$(() => {
  $(".flexslider").flexslider({
    animation: "flip",
    controlNav: false,
  });
  AOS.init({
    offet: 200,
    delay: 100,
    duration: 1000,
  });
  const responsive = {
    0: {
      items: 1,
    },
    320: {
      items: 1,
    },
    560: {
      items: 1,
    },
    767: {
      items: 2,
    },
    960: {
      items: 2,
    },

    1000: {
      items: 3,
    },
  };
  $("#min_slider").owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    infinite: true,
    autoplay: true,
    smartSpeed: 800,
    autoplayHoverPause: true,
    navText: [$(".min_btn .owl-nav-prev"), $(".min_btn .owl-nav-next")],
    responsive: responsive,
  });
  $("#team_slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: responsive,

    autoplay: true,
    smartSpeed: 500,
    autoplayHoverPause: true,
  });
  $("#review_box").on("click", (e) => {
    // alert('hello')
    $(".sub_menu").toggleClass("active");
  });
  $(this).on("scroll", (e) => {
    AOS.init({
      offet: 200,
      delay: 100,
      duration: 1000,
    });
    $("section").each(function (e) {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");
      let top = $(window).scrollTop();

      if (top > offset && top < offset + height) {
        $(".header ul li a").removeClass("activeItem");
        $(".header").find(`[href="#${id}"]`).addClass("activeItem");
      }
    });
  });
  $("#icon-menu").click(function () {
    $("#page-menu").css("left", "0");
    $("body").addClass("active");
    function showMenu() {
      $("#page-menu").css(
        "clip-path",
        "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      );

      $("#icon-menu").animate({ right: "-16rem" }, 300);
    }
    setTimeout(showMenu, 100);
  });

  function hideMenu() {
    $("#page-menu").css("left", "-18.5rem");
    $("#icon-menu").animate({ right: "3rem" }, 300);
  }
  function originalLayout() {
    $("#page-menu").css("clip-path", "polygon(0 0, 100% 0, 0% 100%, 0% 100%)");
  }
  $("#close").click(function () {
    $("#page-menu").css("clip-path", "polygon(0 0, 0% 0, 100% 100%, 0% 100%)");
    $("body").removeClass("active");

    setTimeout(hideMenu, 300);

    setTimeout(originalLayout, 600);
  });
  $("#page-menu li a").on("click", (e) => {
    $("#page-menu").css("clip-path", "polygon(0 0, 0% 0, 100% 100%, 0% 100%)");
    $("body").removeClass("active");

    setTimeout(hideMenu, 300);

    setTimeout(originalLayout, 600);
  });
});

setInterval(() => {
  const countDate = new Date("August 19, 2024").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const seconds = 1000;
  const minutes = 60 * seconds;
  const hours = minutes * 60;
  const days = hours * 24;

  const textDay = Math.floor(gap / days);
  const textHours = Math.floor((gap % days) / hours);
  const textMinutes = Math.floor((gap % hours) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);

  document.querySelector(".days").innerText = textDay;
  document.querySelector(".hours").innerText = textHours;
  document.querySelector(".minutes").innerText = textMinutes;
  document.querySelector(".seconds").innerText = textSeconds;
}, 1000);

this.addEventListener("scroll", () => {
  document.getElementById("header").classList.toggle("fixed_me", scrollY > 180);
});
const header = document.querySelector("header");

// ========= Sticky Header ==========
let stickyNavbar = () => {
  header.classList.toggle("navScrolled", window.pageYOffset > 80);
};
this.addEventListener("scroll", stickyNavbar);
stickyNavbar();
//  Skills
const first_skill = document.querySelector(".skill:first-child");

const sk_counter = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

this.addEventListener("scroll", (e) => {
  let skillsPlayed = false;

  if (!skillsPlayed) skillsCounter();
});

function updateCounter(num, maxNumber) {
  let currentNum = +num.innerText;
  if (currentNum < maxNumber) {
    num.innerText = currentNum + 1;
    setTimeout(() => {
      updateCounter(num, maxNumber);
    }, 12);
  }
}

function hasReached(el) {
  let topPosition = el.getBoundingClientRect().top;
  if (window.innerHeight >= topPosition + el.offsetHeight) return true;
  return false;
}

function skillsCounter() {
  if (!hasReached(first_skill)) return;
  skillsPlayed = true;
  sk_counter.forEach((counter, i) => {
    let target = counter.dataset.target;
    let strokeValue = 427 - 427 * (target / 100);
    progress_bars[i].style.setProperty("--target", strokeValue);
    setTimeout(() => {
      updateCounter(counter, target);
    }, 400);
  });
  progress_bars.forEach(
    (p) => (p.style.animation = "progress 2s ease-in-out forwards")
  );
}

lightGallery(document.querySelector(".gallery .lightbox"));

lightGallery(document.querySelector(".lightbox2 .lightbox"));

lightGallery(document.querySelector(".lightbox3.lightbox"));

function toggleForm() {
  var container = document.querySelector(".contactForm");
  container.classList.toggle("active");
}
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    closeForm();
  } else {
    return;
  }
});

let loading = () => {
  setTimeout(() => {
    document.querySelector(".preloader").classList.add("opacity-o");
  }, 1500);
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 2000);
};
this.onload = () => {
  loading();
};

(() => {
  let blogItem = document.querySelectorAll(".blogGrid .imageCard");
  let blogDetails = document.querySelectorAll(".blogWrapper");
  let closeBlog = document.querySelectorAll(".closeBlog");

  let openBlogItem = (blogItemClicked) => {
    // loading();
    setTimeout(() => {
      blogDetails[blogItemClicked].classList.add("openBlog");
      document.querySelector(".preloader").style.display = "none";
    }, 1000);

    setTimeout(function () {
      document.querySelector(".preloader").classList.add("opacity-1");
    }, 400);
    setTimeout(function () {
      document.querySelector(".preloader").style.display = "flex";
    });
  };

  closeBlog.forEach((Blogmodal, i) => {
    Blogmodal.addEventListener("click", (e) => {
      blogDetails[i].classList.remove("openBlog");
    });
  });
  blogItem.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      openBlogItem(index);
    });
  });
})();

(() => {
  document.querySelectorAll(".blogGrid a").forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
})();

(() => {
  let buyProductBtn = document.querySelectorAll("#payHandler");
  let fixedArea = document.querySelector(".fixed");
  let closeBtn = document.querySelector(".close");
  buyProductBtn.forEach((pay) => {
    pay.addEventListener("click", (e) => {
      e.preventDefault();
      fixedArea.classList.add("active");
    });
  });
  closeBtn.onclick = (e) => {
    fixedArea.classList.remove("active");
  };
})();
