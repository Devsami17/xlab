! function(e) {
    "use strict";
    e(window), e(window).on("load", function(t) {
        e("#preloader").delay(0).fadeOut(500), e(".counter").counterUp({
            delay: 10,
            time: 1e3
        }), e(".wow").length && new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !1,
            live: !0
        }).init()
    }), e(".preloader-close").on("click", function() {
        e("#preloader").delay(0).fadeOut(10), e(".counter").counterUp({
            delay: 10,
            time: 1e3
        }), e(".wow").length && new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !1,
            live: !0
        }).init()
    }), e("[data-background]").each(function() {
        e(this).css("background-image", "url( " + e(this).attr("data-background") + "  )")
    }), e("[data-width]").each(function() {
        e(this).css("width", e(this).attr("data-width"))
    }), e("[data-bg-color]").each(function() {
        e(this).css("background-color", e(this).attr("data-bg-color"))
    }), e("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanExpand: ['<i class="fa-regular fa-angle-right"></i>']
    }), e(".offcanvas__close,.offcanvas__overlay").on("click", function() {
        e(".offcanvas__area").removeClass("info-open"), e(".offcanvas__overlay").removeClass("overlay-open")
    }), e(window).scroll(function() {
        (e("body").scrollTop() > 0 || e("html").scrollTop() > 0) && (e(".offcanvas__area").removeClass("info-open"), e(".offcanvas__overlay").removeClass("overlay-open"))
    }), e(".sidebar__toggle").on("click", function() {
        e(".offcanvas__area").addClass("info-open"), e(".offcanvas__overlay").addClass("overlay-open")
    }), e(".body-overlay").on("click", function() {
        e(".offcanvas__area").removeClass("opened"), e(".body-overlay").removeClass("opened")
    }), e(window).scroll(function() {
        e(this).scrollTop() > 10 ? e("#header-sticky").addClass("rs-sticky") : e("#header-sticky").removeClass("rs-sticky")
    });
    let t = e("#monthly-btn"),
        i = e("#yearly-btn"),
        a = e(".pricing-card-price h2");

    function o(t) {
        a.each(function() {
            let i = e(this),
                a = i.attr("data-yearly"),
                o = i.attr("data-monthly");
            i.html("monthly" === t ? o : a)
        })
    }
    t[0] && i[0] && a.length > 0 && (t[0].addEventListener("click", function() {
        o("monthly"), i[0].classList.remove("active"), t[0].classList.add("active")
    }), i[0].addEventListener("click", function() {
        o("yearly"), t[0].classList.remove("active"), i[0].classList.add("active")
    })), e(".have-cursor").length > 0 && function() {
        if (document.body.append(...["cursor-outer", "cursor-inner"].map(e => Object.assign(document.createElement("div"), {
                className: `mouse-cursor ${e}`
            }))), jQuery(".mouse-cursor").length) {
            let t, i = document.querySelector(".cursor-inner"),
                a = document.querySelector(".cursor-outer"),
                o = 0;
            window.onmousemove = function(e) {
                a.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`, i.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`, t = e.clientY, o = e.clientX
            }, e("body").on("mouseenter", "a, button, .cursor-pointer", function() {
                i.classList.add("cursor-hover"), a.classList.add("cursor-hover")
            }), e("body").on("mouseleave", "a, button, .cursor-pointer", function() {
                (e(this).is("a") || e(this).is("button") && 0 === e(this).closest(".cursor-pointer").length) && (i.classList.remove("cursor-hover"), a.classList.remove("cursor-hover"))
            }), i.style.visibility = "visible", a.style.visibility = "visible"
        }
    }(), e(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), e(".popup-video").magnificPopup({
        type: "iframe"
    });
    var s = document.querySelector(".backtotop-wrap path"),
        n = s.getTotalLength();
    s.style.transition = s.style.WebkitTransition = "none", s.style.strokeDasharray = n + " " + n, s.style.strokeDashoffset = n, s.getBoundingClientRect(), s.style.transition = s.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    var r = function() {
        var t = e(window).scrollTop(),
            i = e(document).height() - e(window).height();
        s.style.strokeDashoffset = n - t * n / i
    };
    r(), e(window).scroll(r), jQuery(window).on("scroll", function() {
        jQuery(this).scrollTop() > 150 ? jQuery(".backtotop-wrap").addClass("active-progress") : jQuery(".backtotop-wrap").removeClass("active-progress")
    }), jQuery(".backtotop-wrap").on("click", function(e) {
        return e.preventDefault(), jQuery("html, body").animate({
            scrollTop: 0
        }, 550), !1
    });
    var l = e("#mobile-menu ul li a, .mean-nav ul li a");

    function c() {
        var t = e(window).scrollTop();
        e("section").each(function() {
            var i = e(this).attr("id"),
                a = e(this).offset().top - 1,
                o = e(this).height();
            t >= a && t < a + o && (l.parent().removeClass("active"), e(".main-menu").find('[href="#' + i + '"]').parent().addClass("active"))
        })
    }
    l.on("click", function(t) {
        var i = e(e(this).attr("href"));
        e("html, body").animate({
            scrollTop: i.offset().top - 76
        }, 600), e(this).parent().addClass("active"), t.preventDefault()
    }), e(window).on("scroll", function() {
        c()
    }), c(), e(document).on("click", ".smoth-animation", function(t) {
        t.preventDefault(), e("html, body").animate({
            scrollTop: e(e.attr(this, "href")).offset().top - 50
        }, 300)
    }), new Swiper(".slider-prlx .parallax-slider", {
        speed: 1500,
        autoplay: {
            delay: 5e3
        },
        parallax: !0,
        loop: !0,
        pagination: {
            el: ".rs-slider-dot",
            clickable: !0
        },
        navigation: {
            nextEl: ".slider__button-prev",
            prevEl: ".slider__button-next"
        },
        on: {
            init: function() {
                for (var t = 0; t < this.slides.length; t++) e(this.slides[t]).find(".slider__thumb-bg").attr({
                    "data-swiper-parallax": .75 * this.width
                })
            },
            resize: function() {
                this.update()
            }
        }
    }), new Swiper(".team__carousel-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: !0,
        roundLengths: !0,
        centeredSlides: !0,
        dot: !1,
        autoplay: {
            delay: 3e3
        },
        navigation: {
            nextEl: ".our-team__slider-button-next",
            prevEl: ".our-team__slider-button-prev"
        },
        breakpoints: {
            1400: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 1
            },
            0: {
                slidesPerView: 1
            }
        }
    }), new Swiper(".brand__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: !0,
        roundLengths: !0,
        clickable: !0,
        autoplay: {
            delay: 3e3
        },
        breakpoints: {
            1200: {
                slidesPerView: 5
            },
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        }
    }), e(".carouselTicker-nav").carouselTicker({}), new Swiper(".banner-4-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: !0,
        autoplay: {
            delay: 5e3
        },
        pagination: {
            el: ".banner-4-pagination",
            clickable: !0
        }
    }), new Swiper(".banner-5-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: !0,
        autoplay: {
            delay: 5e3
        },
        pagination: {
            el: ".banner-5-pagination",
            clickable: !0
        }
    }), new Swiper(".our-client__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: !0,
        roundLengths: !0,
        clickable: !0,
        autoplay: {
            delay: 3e3
        },
        breakpoints: {
            1200: {
                slidesPerView: 5
            },
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        }
    }), new Swiper(".feedback__active", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: !0,
        autoplay: {
            delay: 3e3
        },
        breakpoints: {
            1400: {
                slidesPerView: 4
            },
            1199: {
                slidesPerView: 3
            },
            675: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        }
    }), new Swiper(".feedback__active-2", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: !0,
        autoplay: {
            delay: 3e3
        },
        navigation: {
            prevEl: ".feedback-2__slider-button-prev",
            nextEl: ".feedback-2__slider-button-next"
        },
        breakpoints: {
            992: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        }
    }), new Swiper(".clients-testomonial__active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: !0,
        autoplay: {
            delay: 3e3
        }
    }), new Swiper(".feedback__active-3", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: !0,
        autoplay: {
            delay: 3e3
        },
        pagination: {
            el: ".rs-swiper-dot",
            clickable: !0
        }
    }), new Swiper(".active_team_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: !0,
        autoplay: {
            delay: 3e3
        },
        centeredSlides: !0,
        pagination: {
            el: ".rs-swiper-dot",
            clickable: !0
        },
        breakpoints: {
            1201: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        }
    }), new Swiper(".latest-gallery__active", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: !0,
        centeredSlides: !0,
        autoplay: {
            delay: 3e3
        },
        centeredSlides: !0,
        pagination: {
            el: ".rs-swiper-dot",
            clickable: !0
        },
        breakpoints: {
            1400: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        }
    }), new Swiper(".home-4-latest-gallery__active", {
        speed: 1e3,
        loop: !0,
        slidesPerView: 5,
        autoplay: !0,
        spaceBetween: 30,
        pagination: {
            el: ".rs-swiper-dot",
            clickable: !0
        },
        breakpoints: {
            1400: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        }
    }), e(".work-process__item button").on("click", function() {
        e(".work-process__item").removeClass("active"), e(this).closest(".work-process__item").addClass("active")
    }), e("[data-after-color]").each(function() {
        e(this).css("color", e(this).attr("data-after-color"))
    })
}(jQuery), document.addEventListener("DOMContentLoaded", () => {
    let e = document.querySelectorAll(".accordion-single-box");
    e.forEach(t => {
        t.addEventListener("click", () => {
            e.forEach(e => e.classList.remove("active")), t.classList.add("active")
        })
    })
});
let projectsData = [
    {
        category: "Website",
        img: "./assets/imgs/portfolio/project_19_web.png",
        a: "https://tsdco.org/"
    },
    {
        category: "Website",
        img: "./assets/imgs/portfolio/project_20_web.png",
        a: "https://macs-gc.com/"
    },
    {
        category: "Website",
        img: "./assets/imgs/portfolio/project_18_web.png",
        a: "https://zarvanhost.com/en"
    },
    {
        category: "Website",
        img: "./assets/imgs/portfolio/project_17_web.png",
        a: "https://paintcolumbia.com/"
    },{
    category: "Website",
    img: "./assets/imgs/portfolio/project_10_web.png",
    a: "https://nubestmart.com/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_4_web.png",
    a: "https://www.rollingloud.com/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_5_web.png",
    a: "https://www.24petwatch.com/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_6_web.png",
    a: "https://www.duratongear.com/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_7_web.png",
    a: "https://www.myhome.ie/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_8_web.png",
    a: "https://allestate.ie/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_9_web.png",
    a: "https://www.luxuryproperty.com/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_12_web.png",
    a: "https://khafipetroleum.af/en/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_13_web.png",
    a: "https://zarvanservices.com/en"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_11_web.png",
    a: "https://www.hwc.af/product?lang=en"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_14_web.png",
    a: "https://rdstudio.archishots.dev/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_15_web.png",
    a: "https://sp-arc.net/sameep-padora-and-associates-works/#shop"
}, , {
    category: "Website",
    img: "./assets/imgs/portfolio/project_16_web.png",
    a: "https://test2.gowharshadmedia.com/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/crp_2.png",
    a: "https://rabonia.com/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/crp_1.png",
    a: "https://katchinternational.com/"
},
{
    category: "Website",
    img: "./assets/imgs/portfolio/crp_3.png",
    a: "https://katchinternational.com/"
},
{
    category: "Website",
    img: "./assets/imgs/portfolio/project_1_custom.png",
    a: "https://www.sittercity.com/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_2_custom.png",
    a: "https://www.myhome.ie/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_3_custom.png",
    a: "https://allestate.ie/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/software_3.png",
    a: "https://taxqube.co.uk/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/software_5.png",
    a: "https://rabonia.com/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/software_1.png",
    a: "https://katchinternational.com/"
},
{
    category: "Website",
    img: "./assets/imgs/portfolio/project_1_web.png",
    a: "https://www.trekbikes.com/us/en_US/"
}, {
    category: "Website",
    img: "./assets/imgs/portfolio/project_2_web.png",
    a: "https://live.templately.com/gamezone/"
},  {
    category: "app",
    img: "./assets/imgs/portfolio/project_1_app.png"
}, {
    category: "app",
    img: "./assets/imgs/portfolio/project_2_app.png"
}, {
    category: "app",
    img: "./assets/imgs/portfolio/project_3_app.png"
}, {
    category: "app",
    img: "./assets/imgs/portfolio/project_4_app.png"
}, {
    category: "app",
    img: "./assets/imgs/portfolio/project_5_app.png"
}, {
    category: "app",
    img: "./assets/imgs/portfolio/project_6_app.png"
}, {
    category: "app",
    img: "./assets/imgs/portfolio/project_7_app.png"
}, {
    category: "app",
    img: "./assets/imgs/portfolio/project_1_app.png"
}, {
    category: "app",
    img: "./assets/imgs/portfolio/project_9_app.png"
}, {
    category: "Software",
    img: "./assets/imgs/portfolio/software_1.png",
    a: "https://katchinternational.com/"
}, {
    category: "Software",
    img: "./assets/imgs/portfolio/software_2.png",
    a: "https://www.alhprops.com/public/"
}, {
    category: "Software",
    img: "./assets/imgs/portfolio/software_3.png",
    a: "https://taxqube.co.uk/"
}, {
    category: "Software",
    img: "./assets/imgs/portfolio/software_4.png",
    a: "https://www.negotyum.com/"
}, {
    category: "Software",
    img: "./assets/imgs/portfolio/software_5.png",
    a: "https://rabonia.com/"
}, {
    category: "Software",
    img: "./assets/imgs/portfolio/software_1.png",
    a: "https://katchinternational.com/"
}, {
    category: "custom",
    img: "./assets/imgs/portfolio/project_1_custom.png",
    a: "https://www.sittercity.com/"
}, {
    category: "custom",
    img: "./assets/imgs/portfolio/project_2_custom.png",
    a: "https://www.myhome.ie/"
}, {
    category: "custom",
    img: "./assets/imgs/portfolio/project_3_custom.png",
    a: "https://allestate.ie/"
}, {
    category: "custom",
    img: "./assets/imgs/portfolio/software_3.png",
    a: "https://taxqube.co.uk/"
}, {
    category: "custom",
    img: "./assets/imgs/portfolio/software_5.png",
    a: "https://rabonia.com/"
}, {
    category: "custom",
    img: "./assets/imgs/portfolio/software_1.png",
    a: "https://katchinternational.com/"
}, {
    category: "crm",
    img: "./assets/imgs/portfolio/crp_1.png",
    a: "https://sevdesk.com/"
}, {
    category: "crm",
    img: "./assets/imgs/portfolio/crp_2.png",
    a: "https://sellerboard.com/"
}, {
    category: "crm",
    img: "./assets/imgs/portfolio/crp_3.png",
    a: "https://tacticalmanagement.ae//"
}, {
    category: "crm",
    img: "./assets/imgs/portfolio/software_3.png",
    a: "https://taxqube.co.uk/"
}, {
    category: "crm",
    img: "./assets/imgs/portfolio/software_5.png",
    a: "https://rabonia.com/"
}, {
    category: "crm",
    img: "./assets/imgs/portfolio/software_1.png",
    a: "https://katchinternational.com/"
}, {
    category: "erp",
    img: "./assets/imgs/portfolio/software_4.png",
    a: "https://www.negotyum.com/"
}, {
    category: "erp",
    img: "./assets/imgs/portfolio/software_5.png",
    a: "https://rabonia.com/"
}, {
    category: "erp",
    img: "./assets/imgs/portfolio/crp_1.png",
    a: "https://sevdesk.com/"
}, {
    category: "erp",
    img: "./assets/imgs/portfolio/crp_2.png",
    a: "https://sellerboard.com/"
}, {
    category: "erp",
    img: "./assets/imgs/portfolio/crp_3.png",
    a: "https://tacticalmanagement.ae//"
}, {
    category: "erp",
    img: "./assets/imgs/portfolio/software_3.png",
    a: "https://taxqube.co.uk/"
}];
const itemsPerPage = 9;
var mainBox = document.getElementById("projects_images");

function showprojectsNoPagination(e) {
    let t = projectsData.filter(t => t.category === e);
    mainBox.innerHTML = "";
    let i = t.slice(0, 9);
    for (let a = 0; a < i.length; a++) mainBox.innerHTML += `<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
            <a href="${i[a].a||"#"}" target="_blank"><img src="${i[a].img}" alt=""></a>
        </div>`
}

function setActive(e) {
    document.querySelectorAll(".latest-portfolio_section_inner ul li").forEach(e => e.classList.remove("active_project_li")), e.target.classList.add("active_project_li")
}
window.addEventListener("DOMContentLoaded", () => {
    for (let e = 0; e < 9; e++) mainBox.innerHTML += `<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
            <a href="${projectsData[e].a||"#"}" target="_blank"><img src="${projectsData[e].img}" alt=""></a>
        </div>`
}), window.onload = function() {
    showprojectsNoPagination("Website");
    let e = document.querySelector(".latest-portfolio_section_inner ul li");
    e && e.classList.add("active_project_li")
};
const itemsPerPage2 = 15;
var mainBox2 = document.getElementById("projects_images_1");

function showprojects(e, t) {
    let i = projectsData.filter(t => t.category === e);
    mainBox2.innerHTML = "";
    let a = (t - 1) * itemsPerPage2,
        o = i.slice(a, a + itemsPerPage2);
    for (let s = 0; s < o.length; s++) mainBox2.innerHTML += `<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">
            <a href="${o[s].a||"#"}" target="_blank"><img src="${o[s].img}" alt=""></a>
        </div>`;
    updatePaginationLinks(e, t, i.length)
}

function setActive(e) {
    document.querySelectorAll(".latest-portfolio_section_inner ul li").forEach(e => e.classList.remove("active_project_li")), e.target.classList.add("active_project_li")
}

function updatePaginationLinks(e, t, i) {
    let a = document.getElementById("pagination_links");
    a.innerHTML = "";
    let o = Math.ceil(i / itemsPerPage2);
    for (let s = 1; s <= o; s++) {
        let n = document.createElement("a");
        n.href = "#", n.innerText = s < 10 ? `0${s}` : s, n.dataset.page = s, n.onclick = function(t) {
            t.preventDefault(), showprojects(e, s)
        }, s === t && n.classList.add("active"), a.appendChild(n)
    }
    let nextPageStartIndex = t * itemsPerPage2;
    if (i > nextPageStartIndex + itemsPerPage2) {
        let nextPageButton = document.createElement("a");
        nextPageButton.href = "#";
        nextPageButton.innerText = "Next Page";
        nextPageButton.onclick = function(event) {
            event.preventDefault();
            showprojects(e, t + 1);
        };
        a.appendChild(nextPageButton);
    }
}

window.onload = function() {
    showprojects("Website", 1);
    let e = document.querySelector(".latest-portfolio_section_inner ul li");
    e && e.classList.add("active_project_li")
};
let priceData = [{
    category: "website",
    name: "Start Up Website Package",
    price: "299",
    one: "Up to 5 Page Website",
    two: "Up to 5 Stock Images (Industry Specific)",
    three: "Contact Form",
    four: "jQuery Slider",
    five: "3 Banner Designs",
    six: "Google Friendly Sitemap",
    seven: "Complete W3C Certified HTML",
    eight: "48 to 72 hours TAT",
    nine: "Satisfaction Guarantee",
    ten: "Unique Design Guarantee",
    eleven: "Money Back Guarantee",
    twelve: "Mobile Responsive for $125",
    thirtheen: "CMS for Additional $150"
}, {
    category: "website",
    name: "Elite Website Package",
    price: "1,324",
    one: "Up to 25 Custom Pages Website",
    two: "Unique Interactive, Dynamic &amp; High End Design",
    three: "Custom WP (OR) Custom PHP Development",
    four: "CMS (Content Management System)/Admin Panel",
    five: "Special Striking Hover Effects",
    six: "Liquid Responsive Layout ",
    seven: "Online Reservation/Appointment Tool (Optional)",
    eight: "Online Payment Gateway Integration (Optional)",
    nine: "Book A Call CTA Form",
    ten: "Custom Dynamic CTA Forms",
    eleven: "Search Bar",
    twelve: "User Login",
    thirtheen: " On Page &amp; Technical SEO for \xa3225"
}, {
    category: "website",
    name: "Professional Website Package",
    price: "544",
    one: "Up to 10 Unique Pages Website",
    two: "CMS (Content Management System)/Admin Panel ",
    three: "Contact Form",
    four: "Online Appointment Scheduling CTA Form",
    five: "Book A Call CTA Form",
    six: "Up to 10 Stock images (Industry Specific)",
    seven: "5 Custom Banner Designs",
    eight: "FREE Google Friendly Sitemap",
    nine: "jQuery Slider Banner",
    ten: "48 to 72 hours TAT",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Unique Design Guarantee",
    thirtheen: "Mobile Responsive for Additional \xa3125"
}, {
    category: "website",
    name: "Business Website Package",
    price: "1,824",
    one: "Custom 2D Explainer Video Animation ",
    two: "Voice Over &amp; Sound Effects",
    three: "Professional Script Writing",
    four: "Storyboard Creation",
    five: "UI / UX Interactive &amp; Dynamic HD Design",
    six: "Liquid Responsive",
    seven: "SEO Meta Tags",
    eight: "Custom WP (or) Custom PHP Development",
    nine: "jQuery Slider Banner",
    ten: "Content Management System (CMS)",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Unique Design Guarantee",
    thirtheen: "FREE On Page &amp; Technical SEO"
}, {
    category: "website",
    name: "Identify Website Package",
    price: "924",
    one: "Up to 15 Custom Pages Website",
    two: "Mobile Responsive",
    three: "Conceptual and Dynamic Design",
    four: "Book A Call CTA Form",
    five: "Online Payment Gateway Integration (Optional)",
    six: "Liquid Responsive",
    seven: "Online Payment Gateway Integration (Optional)",
    eight: "Search Engine Submission",
    nine: "jQuery Slider Banner",
    ten: "48 to 72 hours TAT",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Unique Design Guarantee",
    thirtheen: "-- On Page &amp; Technical SEO for \xa3225"
}, {
    category: "seo",
    name: "Basic Seo Package",
    price: "999.99",
    one: "Business Analysis",
    two: "Consumer Analysis",
    three: "Competitor Analysis",
    four: "Prior Analysis",
    five: "Meta Tags Creation",
    six: "Keyword Optimization",
    seven: "Image Optimization",
    eight: "Search Engine Submission",
    nine: "Tracking &amp; Analysis",
    ten: "Call To Action Plan",
    eleven: "Reporting",
    twelve: "Slide Share Marketing ",
    thirtheen: "Link Building"
}, {
    category: "seo",
    name: "Premium Seo Package",
    price: "1499.99",
    one: "Prior Analysis ",
    two: "Business Analysis",
    three: "Competitor Analysis",
    four: "30 Selected Keywords Targeting ",
    five: "Webpage Optimization ",
    six: "Google Places Inclusions",
    seven: "Google Analytics Installation",
    eight: "Google Webmaster Installation ",
    nine: "Monthly Reporting",
    ten: "Off Page Optimization",
    eleven: "Local Business Listings",
    twelve: "Link Building",
    thirtheen: "Directory Submission"
}, {
    category: "seo",
    name: "Platinium Seo Package",
    price: "1999.9",
    one: "Prior Analysis ",
    two: "Business Analysis",
    three: "Competitor Analysis",
    four: "70 Selected Keywords Targeting ",
    five: "Webpage Optimization ",
    six: "50 Pages Keyword Targeted",
    seven: "Inclusion of anchors Tags ",
    eight: "Inclusion of anchors Indexing Modifications ",
    nine: "Meta Tags Creation",
    ten: "Off Page Optimization",
    eleven: "Local Business Listings",
    twelve: "Link Building",
    thirtheen: "Directory Submission"
}, {
    category: "ecom",
    name: "Beginners E-Commerce Package",
    price: "895",
    one: "Upto 15 Unique Pages Website ",
    two: "Conceptual and Dynamic Website",
    three: "Content Management System (CMS)",
    four: "Mobile Responsive",
    five: "Easy Product Search ",
    six: "Up To 100 Products",
    seven: "Up To 7 Categories",
    eight: "Full Shopping Cart Integration",
    nine: "Free Google Friendly Sitemap",
    ten: "100% Money Back Guarantee",
    eleven: "100% Unique Design Guarantee",
    twelve: "100% Satisfaction Guarantee",
    thirtheen: "100% Ownership Rights"
}, {
    category: "ecom",
    name: "Corporate E-Commerce Package",
    price: "1,695",
    one: "Unlimited Unique Pages Website",
    two: "Conceptual and Dynamic Website",
    three: "Content Management System (CMS)",
    four: "Mobile Responsive",
    five: "Easy Product Search ",
    six: "Unlimited Products",
    seven: "Unlimited Categories",
    eight: "Full Shopping Cart Integration",
    nine: "Payment Module Integration",
    ten: "100% Money Back Guarantee",
    eleven: "100% Unique Design Guarantee",
    twelve: "100% Satisfaction Guarantee",
    thirtheen: "100% Ownership Rights"
}, {
    category: "ecom",
    name: "Elite E-Commerce Package",
    price: "2,595",
    one: "UNLIMITED Logo Design Concepts",
    two: "UNLIMITED Revisions",
    three: "Stationary Design (BusinessCard,Letterhead & Envelope)",
    four: "Invoice Design, Email Signature",
    five: "T-Shirt Design (OR) Car Wrap Design ",
    six: "Product Detail Page Design",
    seven: "Unlimited Categories",
    eight: "Full Shopping Cart Integration",
    nine: "E-Commerce Store Design",
    ten: "100% Money Back Guarantee",
    eleven: "100% Unique Design Guarantee",
    twelve: "100% Satisfaction Guarantee",
    thirtheen: "100% Ownership Rights"
}, {
    category: "crms",
    name: "Basic Logo Package",
    price: "35.00",
    one: "3 Custom Logo Design Concepts",
    two: "1 Dedicated Designer",
    three: "4 Revisions",
    four: "2 hours TAT",
    five: "1 Revisions",
    six: "Free File Formats",
    seven: "24 to 48 hours TAT",
    eight: "Free Icon Design",
    nine: "2 Stock Photos",
    ten: "100% Unique Design Guarantee",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Money Back Guarantee",
    thirtheen: "100% Ownership Rights"
}, {
    category: "crms",
    name: "Startup Logo Package",
    price: "65.00",
    one: "4 Custom Logo Design Concepts",
    two: "2 Dedicated Designer",
    three: "Unlimited Revisions",
    four: "2 hours TAT",
    five: "1 Revisions",
    six: "Free File Formats",
    seven: "24 to 48 hours TAT",
    eight: "Free Icon Design",
    nine: "2 Stock Photos",
    ten: "100% Unique Design Guarantee",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Money Back Guarantee",
    thirtheen: "100% Ownership Rights"
}, {
    category: "crms",
    name: "Professional Logo Package",
    price: "99.99",
    one: "Unlimited Custom Logo Design Concepts",
    two: "4 Dedicated Designer",
    three: "Unlimited Revisions",
    four: "FREE MS Electronic Letterhead",
    five: "FREE Custom Stationery Design (Letterhead, Business Card, Envelope)",
    six: "Free File Formats",
    seven: "24 to 48 hours TAT",
    eight: "Free Icon Design",
    nine: "2 Stock Photos",
    ten: "100% Unique Design Guarantee",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Money Back Guarantee",
    thirtheen: "100% Ownership Rights"
}, {
    category: "crms",
    name: "Business Logo Package",
    price: "149.99",
    one: "Unlimited Custom Logo Design Concepts",
    two: "8 Dedicated Designer",
    three: "Unlimited Revisions",
    four: "FREE MS Electronic Letterhead",
    five: "FREE Custom Stationery Design (Letterhead, Business Card, Envelope)",
    six: "Free File Formats",
    seven: "24 to 48 hours TAT",
    eight: "Free Icon Design",
    nine: "Double Side Flyer (OR) Bi-Fold Brochure",
    ten: "100% Unique Design Guarantee",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Money Back Guarantee",
    thirtheen: "100% Ownership Rights"
}, {
    category: "crms",
    name: "Logo & Web Package",
    price: "249.99",
    one: "Unlimited Custom Logo Design Concepts",
    two: "8 Dedicated Designer",
    three: "Unlimited Revisions",
    four: "FREE MS Electronic Letterhead",
    five: "FREE Custom Stationery Design (Letterhead, Business Card, Envelope)",
    six: "Free File Formats",
    seven: "3 Page Custom Website",
    eight: "Free Icon Design",
    nine: "jQuery Slider",
    ten: "100% Unique Design Guarantee",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Money Back Guarantee",
    thirtheen: "100% Ownership Rights"
}, {
    category: "erps",
    name: "Beginners Illustrative Package",
    price: "195",
    one: " 4 Custom Logo Design Concepts",
    two: " By 3 Designers",
    three: "Unlimited Revisions",
    four: " 48 to 72 hours TAT",
    five: "Dedicated Project Manager",
    six: "Fully Rendered",
    seven: "Simple Light Effects and VFX",
    eight: "100% Ownership Rights",
    nine: "100% Satisfaction Guarantee",
    ten: "100% Unique Design Guarantee",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Money Back Guarantee",
    thirtheen: "100% Ownership Rights"
}, {
    category: "erps",
    name: "Professional Illustrative Package",
    price: "265",
    one: " Unlimited Custom Logo Design Concepts",
    two: " By 4 Designers",
    three: "Unlimited Revisions",
    four: " 48 to 72 hours TAT",
    five: "Dedicated Project Manager",
    six: "Fully Rendered",
    seven: "Simple Light Effects and VFX",
    eight: "100% Ownership Rights",
    nine: "100% Satisfaction Guarantee",
    ten: "100% Unique Design Guarantee",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Money Back Guarantee",
    thirtheen: "100% Ownership Rights"
}, {
    category: "erps",
    name: "3D Animated Logo Package",
    price: "445",
    one: " 3 TO 5  Custom Concepts",
    two: "  LOGO ANIMATION ",
    three: " ILLUSTRATION",
    four: " 2D OR 3D",
    five: "Dedicated Project Manager",
    six: "Fully Rendered",
    seven: " Light Effects and VFX",
    eight: " 72 hours Turnaround Time",
    nine: " By 3 Award Winning Designerse",
    ten: "100% Unique Design Guarantee",
    eleven: "100% Satisfaction Guarantee",
    twelve: "100% Money Back Guarantee",
    thirtheen: "100% Ownership Rights"
}];
window.addEventListener("DOMContentLoaded", () => {


    const t = document.querySelector('#pricingboxs'); // Replace '#target-element' with the actual ID or class of your target element.

    const i = priceData.filter(t => t.category === "website");
    
    t.innerHTML = ""; 
    i.forEach(e => {
        let i = `
        <div class="col-lg-4 col-md-6 pack-item">
            <div class="pack-inn">
                <div class="pack-header">
                    <h3 class="pack-name">${e.name}</h3> 
                </div>
                <div class="pack-price">
                    <h4 class="pack-amt"><sup>$</sup>${e.price}</h4>
                </div>
                <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
                    <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabindex="0" style="max-height: none;">
                        <div id="mCSB_6_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
                            <ul>
                                <li>${e.one}</li>
                                <li>${e.two}</li>
                                <li>${e.three}</li>
                                <li>${e.four}</li>
                                <li>${e.five}</li>
                                <li>${e.six}</li>
                                <li>${e.seven}</li>
                                <li>${e.eight}</li>
                                <li>${e.nine}</li>
                                <li>${e.ten}</li>
                                <li>${e.eleven}</li>
                                <li>${e.twelve}</li>
                                <li>${e.thirtheen}</li>
                            </ul>
                        </div>
                        <div id="mCSB_6_scrollbar_vertical" class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical" style="display: block;">
                            <div class="mCSB_draggerContainer">
                                <div id="mCSB_6_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                                    <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                                </div>
                                <div class="mCSB_draggerRail"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pack-btn">
                    <ul>
                        <li><a href="hireus.html" name="${e.name} - $${e.price}" title="${e.name} For Only $${e.price}" class="order_now">Start Project</a></li>
                    </ul>
                </div>
                <div class="pack-lbtn">
                    <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span>+92 300 1188320</a>
                    <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>
                </div>
            </div>
        </div>`;
        t.innerHTML += i;
    });
});
function displayPricing(e) {
    let t = document.getElementById("pricingboxs"),
        i = priceData.filter(t => t.category === e);
    t.innerHTML = "", i.forEach(e => {
        let i = `
        <div class="col-lg-4 col-md-6 pack-item">
            <div class="pack-inn">
                <div class="pack-header">
                    <h3 class="pack-name">${e.name}</h3> 
                </div>
                <div class="pack-price">
                    <h4 class="pack-amt"><sup>$</sup>${e.price}</h4>
                </div>
                <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">
                    <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabindex="0" style="max-height: none;">
                        <div id="mCSB_6_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
                            <ul>
                                <li>${e.one}</li>
                                <li>${e.two}</li>
                                <li>${e.three}</li>
                                <li>${e.four}</li>
                                <li>${e.five}</li>
                                <li>${e.six}</li>
                                <li>${e.seven}</li>
                                <li>${e.eight}</li>
                                <li>${e.nine}</li>
                                <li>${e.ten}</li>
                                <li>${e.eleven}</li>
                                <li>${e.twelve}</li>
                                <li>${e.thirtheen}</li>
                            </ul>
                        </div>
                        <div id="mCSB_6_scrollbar_vertical" class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical" style="display: block;">
                            <div class="mCSB_draggerContainer">
                                <div id="mCSB_6_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">
                                    <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>
                                </div>
                                <div class="mCSB_draggerRail"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pack-btn">
                    <ul>
                        <li><a href="hireus.html" name="${e.name} - $${e.price}" title="${e.name} For Only $${e.price}" class="order_now">Start Project</a></li>
                    </ul>
                </div>
                <div class="pack-lbtn">
                    <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span>+92 300 1188320</a>
                    <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>
                </div>
            </div>
        </div>`;
        t.innerHTML += i
    })
}

function pricing(e, element) {
    // Call the displayPricing function with the provided argument
    displayPricing(e);

    // Get all elements with the class 'pricing-button'
    var buttons = document.getElementsByClassName('pricing-button');

    // Loop through all buttons to remove the 'active' class
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Add the 'active' class to the clicked button
    element.classList.add('active');
}

function opentab(e) {
    // Get all description elements
    const descriptions = document.querySelectorAll('.work-process__item-description');

    // Hide all description elements
    descriptions.forEach(description => {
        description.style.display = 'none';
    });

    // Find the nearest description element to the clicked button and show it
    const descriptionToShow = e.closest('.work-process__item').querySelector('.work-process__item-description');
    if (descriptionToShow) {
        descriptionToShow.style.display = 'block';
    }



    
}
document.addEventListener("DOMContentLoaded", function() {
    var typedElement = document.getElementById('typed-element');

    new Typed(typedElement, {
      strings: ['Companies Scale', 'Design', 'Solution'],
      typeSpeed: 150,
      backSpeed: 125,
      backDelay: 1000,
      startDelay: 800,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      onStringTyped: function(arrayPos, self) {
        // Add fade-out effect when a string is completely typed
        typedElement.classList.add('fade-out');
      },
      preStringTyped: function(arrayPos, self) {
        // Add fade-in effect when starting to type a new string
        typedElement.classList.remove('fade-out');
        typedElement.classList.add('fade-in');
      },
      onComplete: function(self) {
        // Ensure the element is faded in after the last string is typed
        typedElement.classList.remove('fade-out');
        typedElement.classList.add('fade-in');
      }
    });
  });


// cost calculator



function showLoader() {
    const form = document.getElementById('costForm');
    if (form.checkValidity()) {
        form.style.display = 'none';
        document.getElementById('loader').style.display = 'block';
        setTimeout(calculateCost, 2000);
    } else {
        form.reportValidity();
    }
}

function calculateCost() {
    const developerCost = parseInt(document.getElementById('developer').value);
    const websiteCost = parseInt(document.getElementById('website').value);
    const pagesCost = parseInt(document.getElementById('pages').value) * 50; // Assuming each page costs $50

    const totalCost = developerCost + websiteCost + pagesCost;

    // Generate a range with +/- 10% variability
    const minCost = Math.round(totalCost * 0.9);
    const maxCost = Math.round(totalCost * 1.1);

    const deadline = document.getElementById('deadline').value;

    document.getElementById('total_cost_range').textContent = `$${minCost} - $${maxCost}`;
    document.getElementById('selected_date').textContent = deadline;

    document.getElementById('loader').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
}

function goBack() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('costForm').style.display = 'block';
}
$(document).ready(()=>{
    $("#cost_cal_open").on("click",()=>{
        $(".cost_calculator").show(300);
    }),
    $(".fa-xmark").on("click",()=>{
        $(".cost_calculator").hide(300);

    })
})