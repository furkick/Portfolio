showBackToTopButton(window.scrollY);
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mobileLinks = document.querySelectorAll("ul.sidenav li a");
let mainSections = document.getElementsByClassName("linked-section");

// On scroll calculate our current active link/area
window.addEventListener("scroll", (event) => {
  mainNavLinks.forEach((link) => {
    updateLinks(link);
  });
  mobileLinks.forEach((link) => {
    updateLinks(link);
  });
});

function updateLinks(link) {
  let fromTop = window.scrollY;
  let section = document.querySelector(link.hash);

  // If at top return.
  if (section === null || fromTop <= 5) {
    setHomeActive(true);
    link.parentNode.classList.remove("active");
    return;
  }

  let offsetTop =
    section.offsetTop -
    document.getElementsByClassName("nav-wrapper")[0].offsetHeight -
    40;
  setHomeActive(false);
  showBackToTopButton(fromTop);

  if (offsetTop <= fromTop && offsetTop + section.offsetHeight > fromTop) {
    link.parentNode.classList.add("active");
  } else {
    link.parentNode.classList.remove("active");
  }
}

function setHomeActive(isActive) {
  let homeLinks = document.getElementsByClassName("homeSectionLink");
  Array.from(homeLinks).map((link) => {
    if (isActive) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function showBackToTopButton(fromTop) {
  if (fromTop >= 300) {
    document.getElementById("backToTopButton").style.display = "block";
  } else {
    document.getElementById("backToTopButton").style.display = "none";
  }
}

$(document).ready(function () {
  // Scroll to a specified id on the page

  function scrollToTop() {
    $("html, body").animate({ scrollTop: "0px" }, 300);
  }

  var scrollToDiv = function (section) {
    $("html, body").animate(
      {
        // Scroll to the section and add an offset equal to the nav size.
        scrollTop: $(section).offset().top - $(".nav-wrapper").height() + 20,
      },
      300
    );
  };
  /* All nav link clicks. */

  $(".homeSectionLink").click(function () {
    scrollToTop();
  });

  $(".aboutSectionLink").click(function () {
    scrollToDiv("#section-1");
  });

  $(".projectSectionLink").click(function () {
    scrollToDiv("#section-2");
  });

  $(".qualificationSectionLink").click(function () {
    scrollToDiv("#section-3");
  });

  $(".contactSectionLink").click(function () {
    scrollToDiv("#section-4");
  });

  function removeActive() {
    $(".nav").each(function () {
      $(this).removeClass("active");
    });
  }

  $("#currentYear").text(new Date().getFullYear());
  $(".sidenav").sidenav();
});
