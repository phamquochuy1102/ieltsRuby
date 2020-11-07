$(document).ready(
    function(){
        $('.about-section').waypoint(
            function(direction){
                if(direction=="down"){
                    $('nav').addClass('sticky-header');
                }
                else{
                    $('nav').removeClass('sticky-header');
                }
            },{
                offset:'500px'
            }
        )

        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();
        
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
        });
    }
)

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) $(".ontop").fadeIn();
        else $(".ontop").fadeOut();
    });
    $(".ontop").click(function () {
        $("body,html").animate({ scrollTop: 0 }, "slow");
    });
});

function closeBox() {
    var checkBox = document.querySelector(".checknavmobile");
    var box = document.querySelector(".nav-mobile");
    if (checkBox.checked == true) {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

function alertUser(){
    alert("Hiện chúng tôi đang bảo trì tính năng này. Xin cảm ơn!");
}

/*sliders testimonials*/



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByTagName("blockquote");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByTagName("blockquote");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/


