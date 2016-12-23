
// Set variables
var currentScrollPos;
var testimonialsOffset = $('#testimonials').offset().top;
var testimonialsThreshold = testimonialsOffset - 50;
$testimonials = $('.testimonial');

// Set flags
var testimonialsViewed = false;

// Debounce to make js calls more efficient - props to https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// If user resizes window, recalculate testimonial section position
var resizeDebounced = debounce(function() {
    testimonialsOffset = $('#testimonials').offset().top;
    testimonialsThreshold = testimonialsOffset - 100;
}, 350);

// If user scrolls, check our scroll position and see whether the testimonials should slide into view
var scrollDebounced = debounce(function() {
  currentScrollPos = $(document).scrollTop();
  if(currentScrollPos > testimonialsThreshold) {
        console.log('in view');
        $testimonials.addClass('testimonial--isvisible');
        testimonialsViewed = true;
    }
}, 350)

// Only call the scroll/resize debounces until the testimonials have first been viewed
if(!testimonialsViewed){
    window.addEventListener('scroll', scrollDebounced);
    window.addEventListener('resize', resizeDebounced);
}

// Smooth scrolling - Props to https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});