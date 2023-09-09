// Smooth scroll to section when clicking on a navigation link
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});



// Testimonial Carousel


let testimonialIndex = 0;
showTestimonials();

function showTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial');
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
  }
  testimonialIndex++;
  if (testimonialIndex > testimonials.length) {
    testimonialIndex = 1;
  }
  testimonials[testimonialIndex - 1].style.display = 'block';
  setTimeout(showTestimonials, 5000); // Change testimonial every 5 seconds
}

function moveTestimonial(n) {
  testimonialIndex += n;
  const testimonials = document.querySelectorAll('.testimonial');
  if (testimonialIndex > testimonials.length) {
    testimonialIndex = 1;
  }
  if (testimonialIndex < 1) {
    testimonialIndex = testimonials.length;
  }
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
  }
  testimonials[testimonialIndex - 1].style.display = 'block';
}

// // Start the carousel when the page loads
// window.onload = showTestimonials;

