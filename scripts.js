$(document).ready(function() {
  const $navbar = $(".navbar");
  const $jumpElement = $("#jump");
  const $testimonials = $(".testimonial");
  let testimonialIndex = 0;

   // Set scroll position to "Home" section on page load or refresh
   $('html, body').scrollTop($('#home').offset().top);

   
  // Smooth scroll to section when clicking on a navigation link
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
      const scrollOffset = target.offset().top - ($(window).height() / 4);
      $('html, body').stop().animate({
        scrollTop: scrollOffset
      }, 100);
    }
  });

  // Show the first testimonial when the page loads
  showTestimonials();

  function showTestimonials() {
    $testimonials.css("display", "none");
    testimonialIndex++;
    if (testimonialIndex > $testimonials.length) {
      testimonialIndex = 1;
    }
    $testimonials.eq(testimonialIndex - 1).css("display", "block");
    setTimeout(showTestimonials, 5000); // Change testimonial every 5 seconds
  }

  function moveTestimonial(n) {
    testimonialIndex += n;
    if (testimonialIndex > $testimonials.length) {
      testimonialIndex = 1;
    }
    if (testimonialIndex < 1) {
      testimonialIndex = $testimonials.length;
    }
    $testimonials.css("display", "none");
    $testimonials.eq(testimonialIndex - 1).css("display", "block");
  }

  // JavaScript for Transparent Navbar Effect
  $(window).on("scroll", function () {
    const scrollPosition = $(this).scrollTop();
    if (scrollPosition > 100) {
      $navbar.addClass("transparent-navbar");
    } else {
      $navbar.removeClass("transparent-navbar");
    }
  });

  // Jump animation for unlock
  $jumpElement.css({
    transition: "transform 1s",
    transform: "translateY(-5px)"
  });
});
