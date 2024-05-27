(function ($) {
  "use strict";
  var windowOn = $(window);


    /*-----------------------------------------------------------------------------------

        Template Name: Xlab Business Consulting Template
        Author: RRDevs
        Support: https://support.rrdevs.net
        Description: Xlab Business Consulting Template.
        Version: 1.0
        Developer: Sabbir Ahmmed (https://github.com/ahmmedsabbirbd)

    -----------------------------------------------------------------------------------

      /*======================================
        Preloader activation
        ========================================*/
	$(window).on('load', function (event) {
		$('#preloader').delay(1).fadeOut(500);

        /*======================================
        Counter Js
        ========================================*/

        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*======================================
        Wow Js
        ========================================*/
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true
            });
            wow.init();
        }
	});


    $(".preloader-close").on("click", function () {
        $('#preloader').delay(0).fadeOut(10);

        /*======================================
        Counter Js
        ========================================*/

        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*======================================
        Wow Js
        ========================================*/
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true
            });
            wow.init();
        }
    })

    /*======================================
   Data Css js
   ========================================*/
    $("[data-background]").each(function() {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

  /*======================================
	Mobile Menu Js
	========================================*/
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanExpand: ['<i class="fa-regular fa-angle-right"></i>'],
  });

  /*======================================
	Sidebar Toggle
	========================================*/
  $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
    $(".offcanvas__area").removeClass("info-open");
    $(".offcanvas__overlay").removeClass("overlay-open");
  });
  // Scroll to bottom then close navbar
  $(window).scroll(function(){
    if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
        $(".offcanvas__area").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    }
  });
  $(".sidebar__toggle").on("click", function () {
    $(".offcanvas__area").addClass("info-open");
    $(".offcanvas__overlay").addClass("overlay-open");
  });

  /*======================================
	Body overlay Js
	========================================*/
  $(".body-overlay").on("click", function () {
    $(".offcanvas__area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });



  /*======================================
	Sticky Header Js
	========================================*/

  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $("#header-sticky").addClass("rs-sticky");
    } else {
      $("#header-sticky").removeClass("rs-sticky");
    }
  });

    /*** pricing table */
    const pricingMonthlyBtn = $("#monthly-btn"),
        pricingYearlyBtn = $("#yearly-btn"),
        pricingValues = $(".pricing-card-price h2");

    if (pricingMonthlyBtn[0] && pricingYearlyBtn[0] && pricingValues.length > 0) {
        pricingMonthlyBtn[0].addEventListener("click", function () {
            updatePricingValues("monthly");
            pricingYearlyBtn[0].classList.remove("active");
            pricingMonthlyBtn[0].classList.add("active");
        });

        pricingYearlyBtn[0].addEventListener("click", function () {
            updatePricingValues("yearly");
            pricingMonthlyBtn[0].classList.remove("active");
            pricingYearlyBtn[0].classList.add("active");
        });
    }

    function updatePricingValues(option) {
        pricingValues.each(function () {
            const pricingValue = $(this);
            const yearlyValue = pricingValue.attr("data-yearly");
            const monthlyValue = pricingValue.attr("data-monthly");

            const newValue = option === "monthly" ? monthlyValue : yearlyValue;
            pricingValue.html(newValue);
        });
    }

    function page_ah_cursor() {
        document.body.append(...["cursor-outer", "cursor-inner"].map(className => Object.assign(document.createElement("div"), { className: `mouse-cursor ${className}` })));

        const myCursor = jQuery(".mouse-cursor");

        if (myCursor.length) {
            const cursorInner = document.querySelector(".cursor-inner");
            const cursorOuter = document.querySelector(".cursor-outer");
            let mouseY, mouseX = 0;
            let isHovering = false;

            window.onmousemove = function (event) {
                if (!isHovering) {
                    cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
                    cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
                    mouseY = event.clientY;
                    mouseX = event.clientX;
                }
            };

            $("body").on(
                "mouseenter",
                "a, button, .cursor-pointer",
                function () {
                    cursorInner.classList.add("cursor-hover");
                    cursorOuter.classList.add("cursor-hover");
                }
            );

            $("body").on(
                "mouseleave",
                "a, button, .cursor-pointer",
                function () {
                    if ($(this).is("a") || $(this).is("button") && $(this).closest(".cursor-pointer").length === 0) {
                        cursorInner.classList.remove("cursor-hover");
                        cursorOuter.classList.remove("cursor-hover");
                    }
                }
            );

            cursorInner.style.visibility = "visible";
            cursorOuter.style.visibility = "visible";
        }
    }
    if ($('.have-cursor').length > 0) {
        page_ah_cursor();
    }

  /*======================================
	MagnificPopup image view
	========================================*/
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /*======================================
	MagnificPopup video view
	========================================*/
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /*======================================
	Button scroll up js
	========================================*/
  
    var progressPath = document.querySelector(".backtotop-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear";
    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".backtotop-wrap").addClass("active-progress");
        } else {
            jQuery(".backtotop-wrap").removeClass("active-progress");
        }
    });
    jQuery(".backtotop-wrap").on("click", function(event) {
        event.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, duration);
        return false;
    });
    
    /*======================================
	One Page Scroll Js
	========================================*/
    /*** Scroll Nav */
    var link = $('#mobile-menu ul li a, .mean-nav ul li a');

    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 76
        }, 600);
        $(this).parent().addClass('active');
        e.preventDefault();
    });

    $(window).on('scroll', function(){
        scrNav();
    });

    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function() {
            var id = $(this).attr('id'),
                offset = $(this).offset().top-1,
                height = $(this).height();
            if(sTop >= offset && sTop < offset + height) {
                link.parent().removeClass('active');
                $('.main-menu').find('[href="#' + id + '"]').parent().addClass('active');
            }
        });
    }
    scrNav();

    /*======================================
	Smoth animatio Js
	========================================*/
    $(document).on('click', '.smoth-animation', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 300);
    });

  /*======================================
  Parallax Swiper
  ========================================*/
    var parallaxSlider;
    var parallaxSliderOptions = {
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        parallax: true,
        loop: true,
    
        pagination: {
            el: ".rs-slider-dot",
            clickable: true,
        },
    
        navigation: {
            nextEl: ".slider__button-prev",
            prevEl: ".slider__button-next",
        },
        on: {
            init: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".slider__thumb-bg")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                        });
                }
            },
            resize: function() {
                this.update();
            },
        },
    };
    parallaxSlider = new Swiper(
        ".slider-prlx .parallax-slider",
        parallaxSliderOptions
    );

    /*team__carousel-active***/
    var team__carousel_active = new Swiper(".team__carousel-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        centeredSlides: true,
        dot: false,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".our-team__slider-button-next",
            prevEl: ".our-team__slider-button-prev",
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*brand__active***/
    var brand = new Swiper(".brand__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        clickable: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    
    /*** carouselTicker initail */
      $('.carouselTicker-nav').carouselTicker({
      });

    /*banner-4-active***/
    var brand = new Swiper(".banner-4-active", {
        slidesPerView: 1,
            spaceBetween: 0,
            loop: true,  
            autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".banner-4-pagination",
            clickable: true
        },
    });

    /*banner-5-active***/
    var brand = new Swiper(".banner-5-active", {
        slidesPerView: 1,
            spaceBetween: 0,
            loop: true,  
            autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".banner-5-pagination",
            clickable: true
        },
    });
 
     /*brand__active***/
     var brand = new Swiper(".our-client__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        clickable: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*feedback__active***/
    var feedback = new Swiper(".feedback__active", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1199: {
                slidesPerView: 3,
            },
            675: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*feedback__active-2***/
    var feedbacktwo = new Swiper(".feedback__active-2", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            prevEl: ".feedback-2__slider-button-prev",
            nextEl: ".feedback-2__slider-button-next",
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*======================================
      clients-testomonial__active
      ========================================*/
      var feedbackThree = new Swiper(".clients-testomonial__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
    });

    /*======================================
      feedback__active-3 js
      ========================================*/
    var feedbackThree = new Swiper(".feedback__active-3", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".rs-swiper-dot",
            clickable: true,
        }
    });

    /*======================================
     active_team_slider js
     ========================================*/
    var active_team_slider = new Swiper(".active_team_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        centeredSlides: true,
        pagination: {
            el: ".rs-swiper-dot",
            clickable: true,
        },
        breakpoints: {
            1201: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    /*======================================
    latest-gallery__active js
    ========================================*/
    var latest_gallery__active = new Swiper(".latest-gallery__active", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
        },
        centeredSlides: true,
        pagination: {
            el: ".rs-swiper-dot",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    
    /*======================================
    latest-gallery__active js
    ========================================*/
    var latest_gallery__active = new Swiper(".home-4-latest-gallery__active", {
        speed: 1000,
		loop: true,
		slidesPerView: 5,
		autoplay: true,
		spaceBetween: 30,
        
        pagination: {
            el: ".rs-swiper-dot",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    $(".work-process__item button").on("click", function() {
        $(".work-process__item").removeClass("active");
        $(this).closest(".work-process__item").addClass("active");
    });

    $("[data-after-color]").each(function() {
        $(this).css("color", $(this).attr("data-after-color"));
    });




})(jQuery);



let projectsData = [
    { category: 'Website', img: './assets/imgs/portfolio/project_1_web.png' },
    { category: 'Website', img: './assets/imgs/portfolio/project_2_web.png' },
    { category: 'Website', img: './assets/imgs/portfolio/project_3_web.png' },
    { category: 'Website', img: './assets/imgs/portfolio/project_4_web.png' },
    { category: 'Website', img: './assets/imgs/portfolio/project_5_web.png' },
    { category: 'Website', img: './assets/imgs/portfolio/project_6_web.png' },
    { category: 'Website', img: './assets/imgs/portfolio/project_7_web.png' },
    { category: 'Website', img: './assets/imgs/portfolio/project_8_web.png' },
    { category: 'Website', img: './assets/imgs/portfolio/project_9_web.png' },
    { category: 'logo', img: './assets/imgs/portfolio/project_1_logo.png' },
    { category: 'logo', img: './assets/imgs/portfolio/project_2_logo.png' },
    { category: 'logo', img: './assets/imgs/portfolio/project_3_logo.png' },
    { category: 'logo', img: './assets/imgs/portfolio/project_4_logo.png' },
    { category: 'logo', img: './assets/imgs/portfolio/project_5_logo.png' },
    { category: 'logo', img: './assets/imgs/portfolio/project_6_logo.png' },
    { category: 'logo', img: './assets/imgs/portfolio/project_7_logo.png' },
    { category: 'logo', img: './assets/imgs/portfolio/project_8_logo.png' },
    { category: 'logo', img: './assets/imgs/portfolio/project_9_logo.png' },
    { category: 'app', img: './assets/imgs/portfolio/project_1_app.png' },
    { category: 'app', img: './assets/imgs/portfolio/project_2_app.png' },
    { category: 'app', img: './assets/imgs/portfolio/project_3_app.png' },
    { category: 'app', img: './assets/imgs/portfolio/project_4_app.png' },
    { category: 'app', img: './assets/imgs/portfolio/project_5_app.png' },
    { category: 'app', img: './assets/imgs/portfolio/project_6_app.png' },
    { category: 'app', img: './assets/imgs/portfolio/project_7_app.png' },
    { category: 'app', img: './assets/imgs/portfolio/project_8_app.png' },
    { category: 'app', img: './assets/imgs/portfolio/project_9_app.png' },
    { category: 'Ecommerce', img: './assets/imgs/portfolio/project_1_ecommerce.png' },
    { category: 'Ecommerce', img: './assets/imgs/portfolio/project_2_ecommerce.png' },
    { category: 'Ecommerce', img: './assets/imgs/portfolio/project_3_ecommerce.png' },
    { category: 'Ecommerce', img: './assets/imgs/portfolio/project_4_ecommerce.png' },
    { category: 'Ecommerce', img: './assets/imgs/portfolio/project_5_ecommerce.png' },
    { category: 'Ecommerce', img: './assets/imgs/portfolio/project_6_ecommerce.png' },
    { category: 'Ecommerce', img: './assets/imgs/portfolio/project_7_ecommerce.png' },
    { category: 'Ecommerce', img: './assets/imgs/portfolio/project_8_ecommerce.png' },
    { category: 'Ecommerce', img: './assets/imgs/portfolio/project_9_ecommerce.png' },
    { category: 'Illustration', img: './assets/imgs/portfolio/project_1_illustration.png' },
    { category: 'Illustration', img: './assets/imgs/portfolio/project_2_illustration.png' },
    { category: 'Illustration', img: './assets/imgs/portfolio/project_3_illustration.png' },
    { category: 'Illustration', img: './assets/imgs/portfolio/project_4_illustration.png' },
    { category: 'Illustration', img: './assets/imgs/portfolio/project_5_illustration.png' },
    { category: 'Illustration', img: './assets/imgs/portfolio/project_6_illustration.png' },
    { category: 'Illustration', img: './assets/imgs/portfolio/project_7_illustration.png' },
    { category: 'Illustration', img: './assets/imgs/portfolio/project_8_illustration.png' },
    { category: 'Illustration', img: './assets/imgs/portfolio/project_9_illustration.png' },
];

var mainBox = document.getElementById("projects_images");

function showprojects(searchitem) {
    let temparray = projectsData.filter(data => data.category === searchitem);
    mainBox.innerHTML = "";
    for (var i = 0; i < temparray.length; i++) {
        mainBox.innerHTML += `<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
<a href="${temparray[i].img}"><img src="${temparray[i].img}" alt=""></a>
</div>`;
    }
}

function setActive(event) {
    // Remove the active class from all list items
    let items = document.querySelectorAll('.latest-portfolio_section_inner ul li');
    items.forEach(item => item.classList.remove('active_project_li'));

    // Add the active class to the clicked item
    event.target.classList.add('active_project_li');
}

// Show 'Website' projects by default on page load
window.onload = function() {
    showprojects('Website');

    // Set the initial active class
    let initialActiveItem = document.querySelector('.latest-portfolio_section_inner ul li');
    if (initialActiveItem) {
        initialActiveItem.classList.add('active_project_li');
    }
};

document.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
  


  var a = document.getElementById('hiring');
  function hire(value){
    a.value = value;
  }