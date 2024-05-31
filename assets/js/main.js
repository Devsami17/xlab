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
    $("[data-background]").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
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
    $(window).scroll(function () {
        if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
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
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".backtotop-wrap").addClass("active-progress");
        } else {
            jQuery(".backtotop-wrap").removeClass("active-progress");
        }
    });
    jQuery(".backtotop-wrap").on("click", function (event) {
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

    link.on('click', function (e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 76
        }, 600);
        $(this).parent().addClass('active');
        e.preventDefault();
    });

    $(window).on('scroll', function () {
        scrNav();
    });

    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function () {
            var id = $(this).attr('id'),
                offset = $(this).offset().top - 1,
                height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
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
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    $(swiper.slides[i])
                        .find(".slider__thumb-bg")
                        .attr({
                            "data-swiper-parallax": 0.75 * swiper.width,
                        });
                }
            },
            resize: function () {
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

    $(".work-process__item button").on("click", function () {
        $(".work-process__item").removeClass("active");
        $(this).closest(".work-process__item").addClass("active");
    });

    $("[data-after-color]").each(function () {
        $(this).css("color", $(this).attr("data-after-color"));
    });




})(jQuery);



let projectsData = [
    { category: 'Website', img: './assets/imgs/portfolio/project_1_web.png',a : "https://www.trekbikes.com/us/en_US/" },
    { category: 'Website', img: './assets/imgs/portfolio/project_2_web.png',a:"https://live.templately.com/gamezone/" },
    { category: 'Website', img: './assets/imgs/portfolio/project_3_web.png',a:"https://www.rollingloud.com/" },
    { category: 'Website', img: './assets/imgs/portfolio/project_4_web.png',a:"https://www.rollingloud.com/" },
    { category: 'Website', img: './assets/imgs/portfolio/project_5_web.png',a:"https://www.24petwatch.com/" },
    { category: 'Website', img: './assets/imgs/portfolio/project_6_web.png',a:"https://www.duratongear.com/" },
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
<a href="${temparray[i].a}"><img src="${temparray[i].img}" alt=""></a>
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
window.onload = function () {
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
function hire(value) {
    a.value = value;
}
function pricingSelect(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag
    const element = event.target; // Get the clicked element

    // Remove the class from all buttons
    const buttons = document.querySelectorAll('ul a');
    buttons.forEach(button => {
        button.classList.remove('latest-pricing_section_active');
    });

    // Add the class to the clicked button
    element.classList.add('latest-pricing_section_active');
}
function opentab(button) {
    // Hide all descriptions
    var descriptions = document.querySelectorAll('.work-process__item-description');
    descriptions.forEach((item) => {
        item.style.display = "none";
    });

    // Show the description for the clicked button
    var currentItem = button.closest('.work-process__item');
    var description = currentItem.querySelector('.work-process__item-description');
    description.style.display = "flex";
}
///pricing work start //



var mainBox2 = document.getElementById('pricingboxs');


function pricingweb() {
    mainBox2.innerHTML = ' ';
    mainBox2.innerHTML = ` <div class="col-lg-4 col-md-6 pack-item">

    <div class="pack-inn">

        <div class="pack-header">

            <h3 class="pack-name">Start Up Website 

                Package

            </h3>

          

        </div>

        <div class="pack-price">

            <h4 class="pack-amt"><sup>$</sup>299 
            </h4>

        </div>

        <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
            <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                tabindex="0" style="max-height: none;">
                <div id="mCSB_6_container" class="mCSB_container"
                    style="position:relative; top:0; left:0;" dir="ltr">

                    <ul>





                        <li>Up to 5 Page Website</li>



                        <li>Up to 5 Stock Images (Industry Specific)</li>



                        <li>Contact Form</li>



                        <li>jQuery Slider</li>



                        <li>3 Banner Designs</li>



                        <li>Google Friendly Sitemap</li>



                        <li>Complete W3C Certified HTML</li>



                        <li>48 to 72 hours TAT</li>



                        <li>Satisfaction Guarantee</li>



                        <li>Unique Design Guarantee</li>



                        <li>Money Back Guarantee *</li>



                        <li>- Add On</li>



                        <li>-- Mobile Responsive for $125</li>



                        <li>-- CMS for Additional $150</li>







                    </ul>

                </div>
                <div id="mCSB_6_scrollbar_vertical"
                    class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                    style="display: block;">
                    <div class="mCSB_draggerContainer">
                        <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                            style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                        </div>
                        <div class="mCSB_draggerRail"></div>
                    </div>
                </div>
            </div>
        </div>



        <div class="pack-btn">

            <ul>

                <li><a href="web-requirementsc92d.html?pack=6"
                        name="Start Up Website Package - $299"
                        title="Start Up Website Pack For Only $299" class="order_now ">Start
                        Project</a></li>

              

            </ul>

        </div>

        <div class="pack-lbtn">

            <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                277541</a>

            <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

        </div>

    </div>

</div>
<div class="col-lg-4 col-md-6 pack-item">

    <div class="pack-inn">

        <div class="pack-header">

            <h3 class="pack-name">Elite Website 

                Package

            </h3>

          

        </div>

        <div class="pack-price">
            <i class="best-seller">
                <img src="assets/imgs/hire-us/bestseller.png" alt="">
            </i>
            <h4 class="pack-amt"><sup>$</sup>1,324
            </h4>

        </div>

        <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
            <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                tabindex="0" style="max-height: none;">
                <div id="mCSB_6_container" class="mCSB_container"
                    style="position:relative; top:0; left:0;" dir="ltr">

                    <ul>

                                    <li>Up to 25 Custom Pages Website</li>
                                    <li>Unique Interactive, Dynamic &amp; High End Design</li>
                                    <li>Custom WP (OR) Custom PHP Development</li>
                                    <li>CMS (Content Management System)/Admin Panel</li>
                                    <li>Special Striking Hover Effects</li>
                                    <li>Liquid Responsive Layout </li>
                                    <li>Multi Lingual (Optional)</li>
                                    <li>Online Reservation/Appointment Tool (Optional)</li>
                                    <li>Online Payment Gateway Integration (Optional)</li>
                                    <li>Book A Call CTA Form</li>
                                    <li>Custom Dynamic CTA Forms</li>
                                    <li>Lead Capture CTA Forms</li>
                                    <li>Signup Area (For Newsletters, Offers etc.)</li>
                                    <li>Search Bar </li>
                                    <li>User Login </li>
                                    <li>Multiple Custom Banner Designs</li>
                                    <li>jQuery Slider</li>
                                    <li>Multiple Stock Images (Industry Specific)</li>
                                    <li>Unlimited Revisions</li>
                                    <li>Live Feeds of Social Networks integration (Optional)</li>
                                    <li>Google Friendly Sitemap</li>
                                    <li>Search Engine Submission</li>
                                    <li>Google Analytics Installation</li>
                                    <li>Complete W3C Certified HTML</li>
                                    <li>Industry Specified Team of Expert Designers and Developers</li>
                                    <li>Complete Deployment</li>
                                    <li>Dedicated Accounts Manager</li>
                                    <li>Ownership Rights</li>
                                    <li>Satisfaction Guarantee</li>
                                    <li>Unique Design Guarantee</li>
                                    <li>Money Back Guarantee</li>
                                    <li>- Add on</li>
                                    <li>-- On Page &amp; Technical SEO for £225</li>




                                 </ul>

                </div>
                <div id="mCSB_6_scrollbar_vertical"
                    class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                    style="display: block;">
                    <div class="mCSB_draggerContainer">
                        <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                            style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                        </div>
                        <div class="mCSB_draggerRail"></div>
                    </div>
                </div>
            </div>
        </div>



        <div class="pack-btn">

            <ul>

                <li><a href="web-requirementsc92d.html?pack=6"
                        name="Start Up Website Package - $299"
                        title="Start Up Website Pack For Only $299" class="order_now ">Start
                        Project</a></li>

              

            </ul>

        </div>

        <div class="pack-lbtn">

            <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                277541</a>

            <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

        </div>

    </div>

</div>
<div class="col-lg-4 col-md-6 pack-item">

    <div class="pack-inn">

        <div class="pack-header">

            <h3 class="pack-name">Professional Website 

                Package

            </h3>

          

        </div>

        <div class="pack-price">

            <h4 class="pack-amt"><sup>$</sup>544
            </h4>

        </div>

        <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
            <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                tabindex="0" style="max-height: none;">
                <div id="mCSB_6_container" class="mCSB_container"
                    style="position:relative; top:0; left:0;" dir="ltr">

                    <ul>

                                    <li>Up to 10 Unique Pages Website</li>
                                    <li>CMS (Content Management System)/Admin Panel </li>
                                    <li>Contact us Form</li>
                                    <li>Online Appointment Scheduling CTA Form</li>
                                    <li>Book A Call CTA Form</li>
                                    <li>Up to 10 Stock images (Industry Specific)</li>
                                    <li>5 Custom Banner Designs</li>
                                    <li>jQuery Slider Banner</li>
                                    <li>FREE Google Friendly Sitemap</li>
                                    <li>Complete W3C Certified HTML</li>
                                    <li>48 to 72 hours TAT</li>
                                    <li>Complete Deployment</li>
                                    <li>100% Satisfaction Guarantee</li>
                                    <li>100% Unique Design Guarantee</li>
                                    <li>100% Money Back Guarantee</li>
                                    <li>- Add on </li>
                                    <li>-- Mobile Responsive for Additional £125</li>

                                 </ul>



                    </ul>

                </div>
                <div id="mCSB_6_scrollbar_vertical"
                    class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                    style="display: block;">
                    <div class="mCSB_draggerContainer">
                        <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                            style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                        </div>
                        <div class="mCSB_draggerRail"></div>
                    </div>
                </div>
            </div>
        </div>



        <div class="pack-btn">

            <ul>

                <li><a href="web-requirementsc92d.html?pack=6"
                        name="Start Up Website Package - $299"
                        title="Start Up Website Pack For Only $299" class="order_now ">Start
                        Project</a></li>

              

            </ul>

        </div>

        <div class="pack-lbtn">

            <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                277541</a>

            <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

        </div>

    </div>

</div>
<div class="col-lg-4 col-md-6 pack-item">

    <div class="pack-inn">

        <div class="pack-header">

            <h3 class="pack-name">Business Website 

                Package

            </h3>

          

        </div>

        <div class="pack-price">

            <h4 class="pack-amt"><sup>$</sup>1,824
            </h4>

        </div>

        <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
            <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                tabindex="0" style="max-height: none;">
                <div id="mCSB_6_container" class="mCSB_container"
                    style="position:relative; top:0; left:0;" dir="ltr">

                    <ul>

                    <li>Custom 2D Explainer Video Animation </li>
                    <li>Voice Over &amp; Sound Effects</li>
                    <li>Professional Script Writing</li>
                    <li>Storyboard Creation</li>
                    <li>Unlimited Pages Website</li>
                    <li>UI / UX Interactive &amp; Dynamic HD Design</li>
                    <li>SEO Meta Tags</li>
                    <li>Liquid Responsive </li>
                    <li>Custom WP (or) Custom PHP Development</li>
                    <li>jQuery Slider Banner</li>
                    <li>Custom Made Banner Designs</li>
                    <li>Multiple Stock Images</li>
                    <li>Unlimited Revisions</li>
                    <li>Special Hoover Effects</li>
                    <li>Content Management System (CMS)</li>
                    <li>Online Appointment/Scheduling/Online Ordering Integration (Optional)</li>
                    <li>Online Payment Integration (Optional)</li>
                    <li>Multi Lingual (Optional)</li>
                    <li>Custom Dynamic Forms (Optional)</li>
                    <li>Signup Area (For Newsletters, Offers etc.)</li>
                    <li>Search Bar</li>
                    <li>Live Feeds of Social Networks integration (Optional)</li>
                    <li>Google Friendly Sitemap</li>
                    <li>Image alt text</li>
                    <li>Seo Internal Linking</li>
                    <li>Search Engine Submission</li>
                    <li>Complete W3C Certified HTML</li>
                    <li>Industry Specified Team of Expert Designers and Developers</li>
                    <li>Complete Deployment</li>
                    <li>Dedicated Accounts Manager</li>
                    <li>100% Ownership Rights</li>
                    <li>100% Satisfaction Guarantee</li>
                    <li>100% Unique Design Guarantee</li>
                    <li>100% Money Back Guarantee </li>
                    <li> FREE On Page &amp; Technical SEO</li>


                 </ul>

                </div>
                <div id="mCSB_6_scrollbar_vertical"
                    class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                    style="display: block;">
                    <div class="mCSB_draggerContainer">
                        <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                            style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                        </div>
                        <div class="mCSB_draggerRail"></div>
                    </div>
                </div>
            </div>
        </div>



        <div class="pack-btn">

            <ul>

                <li><a href="web-requirementsc92d.html?pack=6"
                        name="Start Up Website Package - $299"
                        title="Start Up Website Pack For Only $299" class="order_now ">Start
                        Project</a></li>

              

            </ul>

        </div>

        <div class="pack-lbtn">

            <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                277541</a>

            <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

        </div>

    </div>

</div>
<div class="col-lg-4 col-md-6 pack-item">

    <div class="pack-inn">

        <div class="pack-header">

            <h3 class="pack-name">Identify Website 

                Package

            </h3>

          

        </div>

        <div class="pack-price">
<i class="best-seller">
<img src="assets/imgs/hire-us/bestseller.png" alt="">
</i>
            <h4 class="pack-amt"><sup>$</sup>924
            </h4>

        </div>

        <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
            <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                tabindex="0" style="max-height: none;">
                <div id="mCSB_6_container" class="mCSB_container"
                    style="position:relative; top:0; left:0;" dir="ltr">

                    <ul>

                    <li>Up to 15 Custom Pages Website</li>
                    <li>Mobile Responsive</li>
                    <li>CMS (Content Management System)/Admin Panel</li>
                    <li>Conceptual and Dynamic Design</li>
                    <li>Striking Hover Effects</li>
                    <li>Online Reservation/Appointment Tool (Optional)</li>
                    <li>Online Payment Gateway Integration (Optional)</li>
                    <li>Book A Call CTA Form</li>
                    <li>Custom Contact Forms</li>
                    <li>Lead Capturing Forms &amp; CTA</li>
                    <li>Newsletter Subscription CTA (Optional)</li>
                    <li>Newsfeed Integration</li>
                    <li>Social Media Integration</li>
                    <li>Search Engine Submission</li>
                    <li>Multiple Stock Images (Industry Specified)</li>
                    <li>Custom Unique Banner Designs</li>
                    <li>jQuery Slider</li>
                    <li>Complete W3C Certified HTML</li>
                    <li>48 to 72 hours TAT</li>
                    <li>Complete Deployment</li>
                    <li>Satisfaction Guarantee</li>
                    <li>Unique Design Guarantee</li>
                    <li>Money Back Guarantee</li>
                    <li>- Add on</li>
                    <li>-- On Page &amp; Technical SEO for £225 </li>


                 </ul>

                </div>
                <div id="mCSB_6_scrollbar_vertical"
                    class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                    style="display: block;">
                    <div class="mCSB_draggerContainer">
                        <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                            style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                        </div>
                        <div class="mCSB_draggerRail"></div>
                    </div>
                </div>
            </div>
        </div>



        <div class="pack-btn">

            <ul>

                <li><a href="web-requirementsc92d.html?pack=6"
                        name="Start Up Website Package - $299"
                        title="Start Up Website Pack For Only $299" class="order_now ">Start
                        Project</a></li>

              

            </ul>

        </div>

        <div class="pack-lbtn">

            <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                277541</a>

            <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

        </div>

    </div>

</div>`;
}


function pricinglogo() {
    mainBox2.innerHTML = "";
    mainBox2.innerHTML = `
    <div class="col-lg-4 col-md-6 pack-item">

                        <div class="pack-inn">

                            <div class="pack-header">

                                <h3 class="pack-name">Basic Logo

                                    Package

                                </h3>

                              

                            </div>

                            <div class="pack-price">

                                <h4 class="pack-amt"><sup>$</sup>35.5
                                </h4>

                            </div>

                            <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
                                <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                                    tabindex="0" style="max-height: none;">
                                    <div id="mCSB_6_container" class="mCSB_container"
                                        style="position:relative; top:0; left:0;" dir="ltr">

                                        <ul>





                                        <li>3 Custom Logo Design Concepts</li>
                                        <li>1 Dedicated Designer</li>
                                        <li>4 Revisions</li>
                                        <li>2 hours TAT</li>
                                        
                                        <li>100% Unique Design Guarantee</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Money Back Guarantee *</li>
                                        <li>100% Ownership Rights</li>



                                        </ul>

                                    </div>
                                    <div id="mCSB_6_scrollbar_vertical"
                                        class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                                        style="display: block;">
                                        <div class="mCSB_draggerContainer">
                                            <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                                                style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                                                <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                                            </div>
                                            <div class="mCSB_draggerRail"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                 

                            <div class="pack-btn">

                                <ul>

                                    <li><a href="web-requirementsc92d.html?pack=6"
                                            name="Start Up Website Package - $299"
                                            title="Start Up Website Pack For Only $299" class="order_now ">Start
                                            Project</a></li>

                                  

                                </ul>

                            </div>

                            <div class="pack-lbtn">

                                <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                                    277541</a>

                                <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

                            </div>

                        </div>

                    </div>
                    <div class="col-lg-4 col-md-6 pack-item">

                    <div class="pack-inn">

                        <div class="pack-header">

                            <h3 class="pack-name">Start Up Logo

                                Package

                            </h3>

                          

                        </div>

                        <div class="pack-price">

                            <h4 class="pack-amt"><sup>$</sup>65.00
                            </h4>

                        </div>

                        <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
                            <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                                tabindex="0" style="max-height: none;">
                                <div id="mCSB_6_container" class="mCSB_container"
                                    style="position:relative; top:0; left:0;" dir="ltr">

                                    <ul>
                                    <li>4 Custom Logo Design Concepts</li>
                                   <li>By 2 Designers</li>
                                   <li>Unlimited Revisions</li>
                                   <li>24 to 48 hours TAT</li>
                                   <li>100% Satisfaction Guarantee</li>
                                   <li>100% Unique Design Guarantee</li>
                                   <li>100% Money Back Guarantee*</li>
                                   <li>100% Ownership Rights</li>
                                    </ul>

                                </div>
                                <div id="mCSB_6_scrollbar_vertical"
                                    class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                                    style="display: block;">
                                    <div class="mCSB_draggerContainer">
                                        <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                                            style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                                        </div>
                                        <div class="mCSB_draggerRail"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

             

                        <div class="pack-btn">

                            <ul>

                                <li><a href="web-requirementsc92d.html?pack=6"
                                        name="Start Up Website Package - $299"
                                        title="Start Up Website Pack For Only $299" class="order_now ">Start
                                        Project</a></li>

                              

                            </ul>

                        </div>

                        <div class="pack-lbtn">

                            <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                                277541</a>

                            <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

                        </div>

                    </div>

                </div>
                <div class="col-lg-4 col-md-6 pack-item">

                <div class="pack-inn">

                    <div class="pack-header">

                        <h3 class="pack-name">Professional Up Logo

                            Package

                        </h3>

                      

                    </div>

                    <div class="pack-price">

                        <h4 class="pack-amt"><sup>$</sup>99.99
                        </h4>

                    </div>

                    <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
                        <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                            tabindex="0" style="max-height: none;">
                            <div id="mCSB_6_container" class="mCSB_container"
                                style="position:relative; top:0; left:0;" dir="ltr">

                                <ul>
                                <li>Unlimited Logo Design Concepts</li>
                           <li>By 4 Industry Based Designers</li>
                           <li>UNLIMITED Revisions</li>
                           <li>FREE MS Electronic Letterhead</li>
                           <li>FREE Custom Stationery Design (Letterhead, Business Card, Envelope)</li>
                           <li>24 to 48 hours TAT</li>
                           <li>FREE File Formats (EPS, Ai, GIF, JPEG, PSD)</li>
                           <li>100% Satisfaction Guarantee</li>
                           <li>100% Unique Design Guarantee</li>
                           <li>100% Money Back Guarantee</li>
                           <li>100% Ownership Rights</li>
                            </ul>

                            </div>
                            <div id="mCSB_6_scrollbar_vertical"
                                class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                                style="display: block;">
                                <div class="mCSB_draggerContainer">
                                    <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                                        style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                                        <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                                    </div>
                                    <div class="mCSB_draggerRail"></div>
                                </div>
                            </div>
                        </div>
                    </div>

         

                    <div class="pack-btn">

                        <ul>

                            <li><a href="web-requirementsc92d.html?pack=6"
                                    name="Start Up Website Package - $299"
                                    title="Start Up Website Pack For Only $299" class="order_now ">Start
                                    Project</a></li>

                          

                        </ul>

                    </div>

                    <div class="pack-lbtn">

                        <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                            277541</a>

                        <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

                    </div>

                </div>

            </div>
            <div class="col-lg-4 col-md-6 pack-item">

            <div class="pack-inn">

                <div class="pack-header">

                    <h3 class="pack-name">Business Up Logo

                        Package

                    </h3>

                  

                </div>

                <div class="pack-price">

                    <h4 class="pack-amt"><sup>$</sup>149.99
                    </h4>

                </div>

                <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
                    <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                        tabindex="0" style="max-height: none;">
                        <div id="mCSB_6_container" class="mCSB_container"
                            style="position:relative; top:0; left:0;" dir="ltr">

                            <ul>
                            <li>UNLIMITED Logo Design Concepts</li>
                       <li>By 8 Award Winning Designers</li>
                       <li>Free Icon Design</li>
                       <li>FREE Custom Stationery Design (Letterhead, Business Card, Envelope, Invoice)</li>
                       <li>Double Side Flyer (OR) Bi-Fold Brochure</li>
                       <li>FREE MS Electronic Letterhead</li>
                       <li>Email Signature Design</li>
                       <li>UNLIMITED Revisions</li>
                       <li>48 to 72 hours TAT</li>
                       <li>100% Satisfaction Guarantee</li>
                       <li>100% Unique Design Guarantee</li>
                       <li>100% Money Back Guarantee</li>
                       <li>100% Ownership Rights</li>
                        </ul>
                        </div>
                        <div id="mCSB_6_scrollbar_vertical"
                            class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                            style="display: block;">
                            <div class="mCSB_draggerContainer">
                                <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                                    style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                                    <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                                </div>
                                <div class="mCSB_draggerRail"></div>
                            </div>
                        </div>
                    </div>
                </div>

     

                <div class="pack-btn">

                    <ul>

                        <li><a href="web-requirementsc92d.html?pack=6"
                                name="Start Up Website Package - $299"
                                title="Start Up Website Pack For Only $299" class="order_now ">Start
                                Project</a></li>

                      

                    </ul>

                </div>

                <div class="pack-lbtn">

                    <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                        277541</a>

                    <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

                </div>

            </div>

        </div>
        <div class="col-lg-4 col-md-6 pack-item">

        <div class="pack-inn">

            <div class="pack-header">

                <h3 class="pack-name">Logo & Web

                    Package

                </h3>

              

            </div>

            <div class="pack-price">
            <i class="best-seller">
            <img src="assets/imgs/hire-us/bestseller.png" alt="">
        </i>
                <h4 class="pack-amt"><sup>$</sup>249.99
                </h4>

            </div>

            <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
                <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                    tabindex="0" style="max-height: none;">
                    <div id="mCSB_6_container" class="mCSB_container"
                        style="position:relative; top:0; left:0;" dir="ltr">

                        <ul>
                                    <li>UNLIMITED Logo Design Concepts</li>
                                    <li>By 8 Award Winning Designers</li>
                                    <li>Icon Design</li>
                                    <li>UNLIMITED Revisions</li>
                                    <li>2 Stationary Design Sets (Business Card, Letterhead, Envelope)</li>
                                    <li>FREE MS Word Letterhead</li>
                                    <li>Free Email Signature</li>
                                    <li>3 Page Custom Website</li>
                                    <li>2 Stock Photos</li>
                                    <li>2 Banner Designs</li>
                                    <li>jQuery Slider</li>
                                    <li>All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                                    <li>100% Ownership Rights</li>
                                    <li>100% Satisfaction Guarantee</li>
                                    <li>100% Unique Design Guarantee</li>
                                    <li>100% Money Back Guarantee *</li>
                                 </ul>
                    </div>
                    <div id="mCSB_6_scrollbar_vertical"
                        class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                        style="display: block;">
                        <div class="mCSB_draggerContainer">
                            <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                                style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                                <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                            </div>
                            <div class="mCSB_draggerRail"></div>
                        </div>
                    </div>
                </div>
            </div>

 

            <div class="pack-btn">

                <ul>

                    <li><a href="web-requirementsc92d.html?pack=6"
                            name="Start Up Website Package - $299"
                            title="Start Up Website Pack For Only $299" class="order_now ">Start
                            Project</a></li>

                  

                </ul>

            </div>

            <div class="pack-lbtn">

                <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                    277541</a>

                <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

            </div>

        </div>

    </div>
    `;
}
function pricingillustration() {
    mainBox2.innerHTML = "";
    mainBox2.innerHTML = `
    <div class="col-lg-4 col-md-6 pack-item">

    <div class="pack-inn">

        <div class="pack-header">

            <h3 class="pack-name">Beginners Illustrative

                Package

            </h3>

          

        </div>

        <div class="pack-price">

            <h4 class="pack-amt"><sup>$</sup>195
            </h4>

        </div>

        <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
            <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                tabindex="0" style="max-height: none;">
                <div id="mCSB_6_container" class="mCSB_container"
                    style="position:relative; top:0; left:0;" dir="ltr">

                    <ul>





                    <li> 4 Custom Logo Design Concepts</li>
                    <li> By 3 Designers</li>
                    <li> 48 to 72 hours TAT</li>
                    <li> UNLIMITED Revisions</li>
                    <li> All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                    <li> 100% Ownership Rights</li>
                    <li> 100% Satisfaction Guarantee</li>
                    <li> 100% Unique Design Guarantee</li>
                    <li> 100% Money Back Guarantee</li>






                    </ul>

                </div>
                <div id="mCSB_6_scrollbar_vertical"
                    class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                    style="display: block;">
                    <div class="mCSB_draggerContainer">
                        <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                            style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                        </div>
                        <div class="mCSB_draggerRail"></div>
                    </div>
                </div>
            </div>
        </div>



        <div class="pack-btn">

            <ul>

                <li><a href="web-requirementsc92d.html?pack=6"
                        name="Start Up Website Package - $299"
                        title="Start Up Website Pack For Only $299" class="order_now ">Start
                        Project</a></li>

              

            </ul>

        </div>

        <div class="pack-lbtn">

            <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                277541</a>

            <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

        </div>

    </div>

</div>
<div class="col-lg-4 col-md-6 pack-item">

<div class="pack-inn">

    <div class="pack-header">

        <h3 class="pack-name">Professional Illustrative

            Package

        </h3>

      

    </div>

    <div class="pack-price">

        <h4 class="pack-amt"><sup>$</sup>265
        </h4>

    </div>

    <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
        <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
            tabindex="0" style="max-height: none;">
            <div id="mCSB_6_container" class="mCSB_container"
                style="position:relative; top:0; left:0;" dir="ltr">

                <ul>

                     <li>UNLIMITED Logo Design Concepts</li>

                     <li>By 4 Designers</li>

                     <li>UNLIMITED Revisions</li>

                     <li>24 to 48 hours TAT</li>

                     <li>100% Ownership Rights</li>

                     <li>100% Satisfaction Guarantee</li>

                     <li>100% Unique Design Guarantee</li>

                     <li>100% Money Back Guarantee</li>

                  </ul>

            </div>
            <div id="mCSB_6_scrollbar_vertical"
                class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                style="display: block;">
                <div class="mCSB_draggerContainer">
                    <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                        style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                        <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                    </div>
                    <div class="mCSB_draggerRail"></div>
                </div>
            </div>
        </div>
    </div>



    <div class="pack-btn">

        <ul>

            <li><a href="web-requirementsc92d.html?pack=6"
                    name="Start Up Website Package - $299"
                    title="Start Up Website Pack For Only $299" class="order_now ">Start
                    Project</a></li>

          

        </ul>

    </div>

    <div class="pack-lbtn">

        <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
            277541</a>

        <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

    </div>

</div>

</div>
<div class="col-lg-4 col-md-6 pack-item">

<div class="pack-inn">

    <div class="pack-header">

        <h3 class="pack-name">3D Logo 

            Package

        </h3>

      

    </div>

    <div class="pack-price">

        <h4 class="pack-amt"><sup>$</sup>365
        </h4>

    </div>

    <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
        <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
            tabindex="0" style="max-height: none;">
            <div id="mCSB_6_container" class="mCSB_container"
                style="position:relative; top:0; left:0;" dir="ltr">

                <ul>



                <li> 3 Unique 3D Logo Concepts</li>

                <li> Light Effects and VFX</li>

                <li> Fully Rendered</li>

                <li> Multiple 3D Angles</li>

                <li> 3 Award Winning Designers</li>

                <li> Dedicated Project Manager</li>

                <li> 72 hours Turnaround Time</li>

                <li> UNLIMITED Revisions</li>

                <li> 100% Ownership Rights</li>

                <li> 100% Satisfaction Guarantee</li>

                <li> 100% Unique Design Guarantee</li>

                <li> 100% Satisfaction Guarantee</li>

                <li> 100% Money Back Guarantee </li>





             </ul>

            </div>
            <div id="mCSB_6_scrollbar_vertical"
                class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                style="display: block;">
                <div class="mCSB_draggerContainer">
                    <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                        style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                        <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                    </div>
                    <div class="mCSB_draggerRail"></div>
                </div>
            </div>
        </div>
    </div>



    <div class="pack-btn">

        <ul>

            <li><a href="web-requirementsc92d.html?pack=6"
                    name="Start Up Website Package - $299"
                    title="Start Up Website Pack For Only $299" class="order_now ">Start
                    Project</a></li>

          

        </ul>

    </div>

    <div class="pack-lbtn">

        <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
            277541</a>

        <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

    </div>

</div>

</div>
<div class="col-lg-4 col-md-6 pack-item">

<div class="pack-inn">

    <div class="pack-header">

        <h3 class="pack-name">3D Animated Logo

            Package

        </h3>

      

    </div>

    <div class="pack-price">
    <i class="best-seller">
    <img src="assets/imgs/hire-us/bestseller.png" alt="">
</i>
        <h4 class="pack-amt"><sup>$</sup>445
        </h4>

    </div>

    <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
        <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
            tabindex="0" style="max-height: none;">
            <div id="mCSB_6_container" class="mCSB_container"
                style="position:relative; top:0; left:0;" dir="ltr">
                <ul>





                <li> 3 TO 5  Custom Concepts</li>

                <li> LOGO ANIMATION </li>

                <li> ILLUSTRATION</li>

                <li> 2D OR 3D </li>

                <li> Light Effects and VFX</li>

                <li> Fully Rendered</li>

                <li> MultipleAngles</li>

                <li> By 3 Award Winning Designers</li>

                <li> 72 hours Turnaround Time</li>

                <li> UNLIMITED Revisions</li>

                <li> 100% Ownership Rights</li>

                <li> 100% Satisfaction Guarantee</li>

                <li> 100% Unique Design Guarantee</li>

                <li> 100% Satisfaction Guarantee</li>

                <li> 100% Money Back Guarantee </li>





             </ul>
   

            </div>
            <div id="mCSB_6_scrollbar_vertical"
                class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                style="display: block;">
                <div class="mCSB_draggerContainer">
                    <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                        style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                        <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                    </div>
                    <div class="mCSB_draggerRail"></div>
                </div>
            </div>
        </div>
    </div>



    <div class="pack-btn">

        <ul>

            <li><a href="web-requirementsc92d.html?pack=6"
                    name="Start Up Website Package - $299"
                    title="Start Up Website Pack For Only $299" class="order_now ">Start
                    Project</a></li>

          

        </ul>

    </div>

    <div class="pack-lbtn">

        <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
            277541</a>

        <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

    </div>

</div>

</div>


</div>
    `;
}
function pricingseo() {
    mainBox2.innerHTML = " ";
    mainBox2.innerHTML = `
    <div class="col-lg-4 col-md-6 pack-item">

                        <div class="pack-inn">

                            <div class="pack-header">

                                <h3 class="pack-name">basic Seo

                                    Package

                                </h3>

                              

                            </div>

                            <div class="pack-price">

                                <h4 class="pack-amt"><sup>$</sup>999.99
                                </h4>

                            </div>

                            <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
                                <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                                    tabindex="0" style="max-height: none;">
                                    <div id="mCSB_6_container" class="mCSB_container"
                                        style="position:relative; top:0; left:0;" dir="ltr">

                                        <ul>





                                        <li class="heading">Prior Analysis</li>
                                        <li>Business Analysis</li>
                                        <li>Consumer Analysis</li>
                                        <li>Competitor Analysis</li>
                                        <li>15 Selected Keywords Targeting</li>
                                        <li>15 Pages Keyword Targeted</li>
                                        <li class="heading">Webpage Optimization</li>
                                        <li>Meta Tags Creation</li>
                                        <li>Keyword Optimization</li>
                                        <li>Image Optimization</li>
                                        <li>Inclusion of anchors</li>
                                        <li class="heading">Tracking &amp; Analysis</li>
                                        <li>Google Analytics Installation</li>
                                        <li>Google Webmaster Installation</li>
                                        <li>Call To Action Plan</li>
                                        <li>Creation of Sitemaps</li>
                                        <li class="heading">Reporting</li>
                                        <li>Monthly Reporting </li>
                                        <li>Recommendation </li>
                                        <li>Email Support</li>
                                        <li>Phone Support</li>
                                        <li class="heading">Off Page Optimization</li>
                                        <li>Social Bookmarking</li>
                                        <li>Slide Share Marketing </li>
                                        <li>Forums/FAQ’s</li>
                                        <li>Link Building</li>
                                        <li>Directory Submission</li>
                                        <li>Local Business Listings </li>





                                        </ul>

                                    </div>
                                    <div id="mCSB_6_scrollbar_vertical"
                                        class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                                        style="display: block;">
                                        <div class="mCSB_draggerContainer">
                                            <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                                                style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                                                <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                                            </div>
                                            <div class="mCSB_draggerRail"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                 

                            <div class="pack-btn">

                                <ul>

                                    <li><a href="web-requirementsc92d.html?pack=6"
                                            name="Start Up Website Package - $299"
                                            title="Start Up Website Pack For Only $299" class="order_now ">Start
                                            Project</a></li>

                                  

                                </ul>

                            </div>

                            <div class="pack-lbtn">

                                <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                                    277541</a>

                                <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

                            </div>

                        </div>

                    </div>
                    <div class="col-lg-4 col-md-6 pack-item">

                    <div class="pack-inn">

                        <div class="pack-header">

                            <h3 class="pack-name">Premium Seo

                                Package

                            </h3>

                          

                        </div>

                        <div class="pack-price">

                            <h4 class="pack-amt"><sup>$</sup>1499.99
                            </h4>

                        </div>

                        <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
                            <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                                tabindex="0" style="max-height: none;">
                                <div id="mCSB_6_container" class="mCSB_container"
                                    style="position:relative; top:0; left:0;" dir="ltr">
                                    <ul>

                                    <li class="heading">Prior Analysis </li>

                                  

                                      <li>Business Analysis</li>

                                      <li>Consumer Analysis </li>

                                      <li>Competitor Analysis </li>

                                      <li>30 Selected Keywords Targeting </li>

                                      <li>30 Pages Keyword Targeted</li>



                                      <li class="heading">Webpage Optimization </li>

                                      <li>Meta Tags Creation</li>

                                      <li>Keyword Optimization </li>

                                      <li>Image Optimization </li>

                                      <li>Inclusion of anchors</li>



                                      <li class="heading">Tracking &amp; Analysis </li>

                                      <li>Google Places Inclusions</li>

                                      <li>Google Analytics Installation</li>

                                      <li>Google Webmaster Installation </li>

                                      <li>Call To Action Plan </li>

                                      <li>Creation of Sitemaps</li>



                                      <li class="heading">Reporting </li>

                                      <li>Monthly Reporting </li>

                                      <li>Recommendation </li>

                                      <li>Email Support </li>

                                      <li>Phone Support</li>



                                      <li class="heading">Off Page Optimization</li>

                                      <li>Social Bookmarking</li>

                                      <li>Slide Share Marketing </li>

                                      <li>Forums/FAQ’s </li>

                                      <li>Link Building </li>

                                      <li>Directory Submission </li>

                                      <li>Local Business Listings</li>





                                 </ul>
                                </div>
                                <div id="mCSB_6_scrollbar_vertical"
                                    class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                                    style="display: block;">
                                    <div class="mCSB_draggerContainer">
                                        <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                                            style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                                        </div>
                                        <div class="mCSB_draggerRail"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

             

                        <div class="pack-btn">

                            <ul>

                                <li><a href="web-requirementsc92d.html?pack=6"
                                        name="Start Up Website Package - $299"
                                        title="Start Up Website Pack For Only $299" class="order_now ">Start
                                        Project</a></li>

                              

                            </ul>

                        </div>

                        <div class="pack-lbtn">

                            <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                                277541</a>

                            <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

                        </div>

                    </div>

                </div>
                <div class="col-lg-4 col-md-6 pack-item">

                <div class="pack-inn">

                    <div class="pack-header">

                        <h3 class="pack-name">Platiunum Seo

                            Package

                        </h3>

                      

                    </div>

                    <div class="pack-price">

                        <h4 class="pack-amt"><sup>$</sup>1999.99
                        </h4>

                    </div>

                    <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
                        <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                            tabindex="0" style="max-height: none;">
                            <div id="mCSB_6_container" class="mCSB_container"
                                style="position:relative; top:0; left:0;" dir="ltr">

                                <ul>

                                <li class="heading">Prior Analysis </li>

                                <li>Business Analysis</li>

                                <li>Consumer Analysis </li>

                                <li>Competitor Analysis </li>

                                <li>70 Selected Keywords Targeting </li>

                                <li>50 Pages Keyword Targeted</li>



                                <li class="heading">Webpage Optimization </li>

                                <li>Meta Tags Creation</li>

                                <li>Keyword Optimization </li>

                                <li>Image Optimization </li>

                                <li>Inclusion of anchors Tags </li>

                                <li>Inclusion of anchors Indexing Modifications</li>



                                <li class="heading">Tracking &amp; Analysis </li>

                                <li>Google Places Inclusions</li>

                                <li>Google Analytics Installation</li>

                                <li>Google Webmaster Installation </li>

                                <li>Call To Action Plan </li>

                                <li>Creation of Sitemaps</li>



                                <li class="heading">Reporting </li>

                                <li>Monthly Reporting </li>

                                <li>Recommendation </li>

                                <li>Email Support </li>

                                <li>Phone Support</li>



                                <li class="heading">Off Page Optimization </li>

                                <li>Social Bookmarking</li>

                                <li>Slide Share Marketing </li>

                                <li>Forums/FAQ’s </li>

                                <li>Link Building </li>

                                <li>Directory Submission </li>

                                <li>Local Business Listings</li>

                                <li>Blog Content Creation</li>

                                <li>Local SEO</li>









                          </ul>
                            </div>
                            <div id="mCSB_6_scrollbar_vertical"
                                class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                                style="display: block;">
                                <div class="mCSB_draggerContainer">
                                    <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                                        style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                                        <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                                    </div>
                                    <div class="mCSB_draggerRail"></div>
                                </div>
                            </div>
                        </div>
                    </div>

         

                    <div class="pack-btn">

                        <ul>

                            <li><a href="web-requirementsc92d.html?pack=6"
                                    name="Start Up Website Package - $299"
                                    title="Start Up Website Pack For Only $299" class="order_now ">Start
                                    Project</a></li>

                          

                        </ul>

                    </div>

                    <div class="pack-lbtn">

                        <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                            277541</a>

                        <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

                    </div>

                </div>

            </div>
            

    </div>
    
    `;
}

function pricingecom() {
    mainBox2.innerHTML = "";
    mainBox2.innerHTML = `
    <div class="col-lg-4 col-md-6 pack-item">

    <div class="pack-inn">

        <div class="pack-header">

            <h3 class="pack-name">Beginners e-Commerce

                Package

            </h3>

          

        </div>

        <div class="pack-price">

            <h4 class="pack-amt"><sup>$</sup>895
            </h4>

        </div>

        <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
            <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                tabindex="0" style="max-height: none;">
                <div id="mCSB_6_container" class="mCSB_container"
                    style="position:relative; top:0; left:0;" dir="ltr">

                    <ul>




                    <li>Upto 15 Unique Pages Website</li>
                    <li>Conceptual and Dynamic Website</li>
                    <li>Content Management System (CMS)</li>
                    <li>Mobile Responsive</li>
                    <li>Easy Product Search</li>
                    <li>Product Reviews</li>
                    <li>Up To 100 Products</li>
                    <li>Up To 7 Categories</li>
                    <li>Full Shopping Cart Integration</li>
                    <li>Payment Module Integration</li>
                    <li>Sales &amp; Inventory Management</li>
                    <li>Jquery Slider</li>
                    <li>Free Google Friendly Sitemap</li>
                    <!--<li>FREE 1 Years Hosting</li>-->
                    <li>Custom Email Addresses</li>







                    </ul>

                </div>
                <div id="mCSB_6_scrollbar_vertical"
                    class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                    style="display: block;">
                    <div class="mCSB_draggerContainer">
                        <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                            style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                        </div>
                        <div class="mCSB_draggerRail"></div>
                    </div>
                </div>
            </div>
        </div>



        <div class="pack-btn">

            <ul>

                <li><a href="web-requirementsc92d.html?pack=6"
                        name="Start Up Website Package - $299"
                        title="Start Up Website Pack For Only $299" class="order_now ">Start
                        Project</a></li>

              

            </ul>

        </div>

        <div class="pack-lbtn">

            <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                277541</a>

            <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

        </div>

    </div>

</div>

<div class="col-lg-4 col-md-6 pack-item">

    <div class="pack-inn">

        <div class="pack-header">

            <h3 class="pack-name">Corporate e-Commerce

                Package

            </h3>

          

        </div>

        <div class="pack-price">

            <h4 class="pack-amt"><sup>$</sup>1,695
            </h4>

        </div>

        <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
            <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                tabindex="0" style="max-height: none;">
                <div id="mCSB_6_container" class="mCSB_container"
                    style="position:relative; top:0; left:0;" dir="ltr">

                    <ul>

                    <li>Unlimited Unique Pages Website</li>

                    <li>Conceptual and Dynamic Website</li>

                    <li>Content Management System (CMS)</li>

                    <li>Mobile Responsive</li>

                    <li>Easy Product Search</li>

                    <li>Product Reviews</li>

                    <li>Unlimited Products</li>

                    <li>Unlimited Categories</li>

                    <li>Full Shopping Cart Integration</li>

                    <li>Payment Module Integration</li>

                    <li>Sales &amp; Inventory Management</li>

                    <li>Jquery Slider</li>

                    <li>Free Google Friendly Sitemap</li>

                    <!--<li>FREE 3 Years Hosting</li>-->

                    <li>Custom Email Addresses</li>

                    <li>Complete W3C Certified HTML</li>

                    <li>Facebook Page Design</li>

                    <li>Twitter Page Design</li>

                    <li>YouTube Page Design</li>

                    <li>Instagram Page Design</li>

                    <li>Complete Deployment</li>

                    <li>Dedicated Accounts Manager</li>

                    <li>100% Ownership Rights</li>

                    <li>100% Satisfaction Guarantee</li>

                    <li>100% Unique Design Guarantee</li>

                    <li>100% Money Back Guarantee</li>

                </ul>

                </div>
                <div id="mCSB_6_scrollbar_vertical"
                    class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                    style="display: block;">
                    <div class="mCSB_draggerContainer">
                        <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                            style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                            <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                        </div>
                        <div class="mCSB_draggerRail"></div>
                    </div>
                </div>
            </div>
        </div>



        <div class="pack-btn">

            <ul>

                <li><a href="web-requirementsc92d.html?pack=6"
                        name="Start Up Website Package - $299"
                        title="Start Up Website Pack For Only $299" class="order_now ">Start
                        Project</a></li>

              

            </ul>

        </div>

        <div class="pack-lbtn">

            <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
                277541</a>

            <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

        </div>

    </div>

</div>
<div class="col-lg-4 col-md-6 pack-item">

<div class="pack-inn">

    <div class="pack-header">

        <h3 class="pack-name">Elite e-Commerce

            Package

        </h3>

      

    </div>

    <div class="pack-price">

        <h4 class="pack-amt"><sup>$</sup>2,595
        </h4>

    </div>

    <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
        <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
            tabindex="0" style="max-height: none;">
            <div id="mCSB_6_container" class="mCSB_container"
                style="position:relative; top:0; left:0;" dir="ltr">

                <ul>

                          <li>UNLIMITED Logo Design Concepts</li>

                          <li>By 6 Award Winning Designers</li>

                          <li>Icon Design</li>

                          <li>UNLIMITED Revisions</li>

                          <li>Print Media</li>

                          <li>Stationary Design (BusinessCard,Letterhead &amp; Envelope)</li>

                          <li>Invoice Design, Email Signature</li>

                          <li>Bi-Fold Brochure (OR) 2 Sided Flyer Design</li>

                          <li>Product Catalog Design</li>

                          <li>Sign age Design (OR) Label Design</li>

                          <li>T-Shirt Design (OR) Car Wrap Design</li>

                          <li>Website</li>

                          <li>E-Commerce Store Design</li>

                          <li>Product Detail Page Design</li>

                          <li>Unique Banner Slider</li>

                          <li>Featured Products Showcase</li>

                          <li>Full Shopping Cart Integration</li>

                          <li>Unlimited Products</li>

                          <li>Unlimited Categories</li>

                          <li>Product Rating &amp; Reviews</li>

                          <li>Easy Product Search</li>

                          <li>Payment Gateway Integration</li>

                          <li>Multi-currency Support</li>

                          <li>Content Management System</li>

                          <li>Cutomer Log-in Area</li>

                          <li>Mobile Responsive</li>

                          <li>Social Media Plugins Integration</li>

                          <li>Tell a Friend Feature</li>

                          <li>Social Media Pages</li>

                          <li>Facebook , Twitter, YouTube, Google+ &amp; Pinterest Page Designs</li>

                          <li>Value Added Services</li>

                          <li>Dedicated Account Manager</li>

                          <li>Unlimited Revisions</li>

                          <li>All Final File Formats</li>

                          <li>100% Ownership Rights</li>

                          <li>100% Satisfaction Guarantee</li>

                          <li>100% Unique Design Guarantee</li>

                          <li>100% Money Back Guarantee *</li>

                        </ul>

            </div>
            <div id="mCSB_6_scrollbar_vertical"
                class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical"
                style="display: block;">
                <div class="mCSB_draggerContainer">
                    <div id="mCSB_6_dragger_vertical" class="mCSB_dragger"
                        style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                        <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                    </div>
                    <div class="mCSB_draggerRail"></div>
                </div>
            </div>
        </div>
    </div>



    <div class="pack-btn">

        <ul>

            <li><a href="web-requirementsc92d.html?pack=6"
                    name="Start Up Website Package - $299"
                    title="Start Up Website Pack For Only $299" class="order_now ">Start
                    Project</a></li>

          

        </ul>

    </div>

    <div class="pack-lbtn">

        <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span> +44 7360
            277541</a>

        <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>

    </div>

</div>

</div>


</div>
    
    
    `;


}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.pricing-button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Remove the active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add the active class to the clicked button
            event.currentTarget.classList.add('active');

            // Call the corresponding function (if any)
            const functionName = event.currentTarget.getAttribute('onclick').replace('(event)', '');
            if (typeof window[functionName] === 'function') {
                window[functionName](event);
            }
        });
    });
});


  document.addEventListener("DOMContentLoaded", function() {
    new Typed('#typed-element', {
      strings: ['Companies Scale', 'Solution', 'Design'],
      typeSpeed: 160,
      backSpeed: 120,
      backDelay: 1000,
      startDelay: 800,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
  });


  AOS.init();
