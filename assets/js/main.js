!function(e){"use strict";e(window),e(window).on("load",(function(t){e("#preloader").delay(0).fadeOut(500),e(".counter").counterUp({delay:10,time:1e3}),e(".wow").length&&new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init()})),e(".preloader-close").on("click",(function(){e("#preloader").delay(0).fadeOut(10),e(".counter").counterUp({delay:10,time:1e3}),e(".wow").length&&new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}).init()})),e("[data-background]").each((function(){e(this).css("background-image","url( "+e(this).attr("data-background")+"  )")})),e("[data-width]").each((function(){e(this).css("width",e(this).attr("data-width"))})),e("[data-bg-color]").each((function(){e(this).css("background-color",e(this).attr("data-bg-color"))})),e("#mobile-menu").meanmenu({meanMenuContainer:".mobile-menu",meanScreenWidth:"991",meanExpand:['<i class="fa-regular fa-angle-right"></i>']}),e(".offcanvas__close,.offcanvas__overlay").on("click",(function(){e(".offcanvas__area").removeClass("info-open"),e(".offcanvas__overlay").removeClass("overlay-open")})),e(window).scroll((function(){(e("body").scrollTop()>0||e("html").scrollTop()>0)&&(e(".offcanvas__area").removeClass("info-open"),e(".offcanvas__overlay").removeClass("overlay-open"))})),e(".sidebar__toggle").on("click",(function(){e(".offcanvas__area").addClass("info-open"),e(".offcanvas__overlay").addClass("overlay-open")})),e(".body-overlay").on("click",(function(){e(".offcanvas__area").removeClass("opened"),e(".body-overlay").removeClass("opened")})),e(window).scroll((function(){e(this).scrollTop()>10?e("#header-sticky").addClass("rs-sticky"):e("#header-sticky").removeClass("rs-sticky")}));let t=e("#monthly-btn"),i=e("#yearly-btn"),o=e(".pricing-card-price h2");function a(t){o.each((function(){let i=e(this),o=i.attr("data-yearly"),a=i.attr("data-monthly");i.html("monthly"===t?a:o)}))}t[0]&&i[0]&&o.length>0&&(t[0].addEventListener("click",(function(){a("monthly"),i[0].classList.remove("active"),t[0].classList.add("active")})),i[0].addEventListener("click",(function(){a("yearly"),t[0].classList.remove("active"),i[0].classList.add("active")}))),e(".have-cursor").length>0&&function(){if(document.body.append(...["cursor-outer","cursor-inner"].map((e=>Object.assign(document.createElement("div"),{className:`mouse-cursor ${e}`})))),jQuery(".mouse-cursor").length){let t,i=document.querySelector(".cursor-inner"),o=document.querySelector(".cursor-outer"),a=0;window.onmousemove=function(e){o.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`,i.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`,t=e.clientY,a=e.clientX},e("body").on("mouseenter","a, button, .cursor-pointer",(function(){i.classList.add("cursor-hover"),o.classList.add("cursor-hover")})),e("body").on("mouseleave","a, button, .cursor-pointer",(function(){(e(this).is("a")||e(this).is("button")&&0===e(this).closest(".cursor-pointer").length)&&(i.classList.remove("cursor-hover"),o.classList.remove("cursor-hover"))})),i.style.visibility="visible",o.style.visibility="visible"}}(),e(".popup-image").magnificPopup({type:"image",gallery:{enabled:!0}}),e(".popup-video").magnificPopup({type:"iframe"});var n=document.querySelector(".backtotop-wrap path"),s=n.getTotalLength();n.style.transition=n.style.WebkitTransition="none",n.style.strokeDasharray=s+" "+s,n.style.strokeDashoffset=s,n.getBoundingClientRect(),n.style.transition=n.style.WebkitTransition="stroke-dashoffset 10ms linear";var r=function(){var t=e(window).scrollTop(),i=e(document).height()-e(window).height();n.style.strokeDashoffset=s-t*s/i};r(),e(window).scroll(r),jQuery(window).on("scroll",(function(){jQuery(this).scrollTop()>150?jQuery(".backtotop-wrap").addClass("active-progress"):jQuery(".backtotop-wrap").removeClass("active-progress")})),jQuery(".backtotop-wrap").on("click",(function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},550),!1}));var l=e("#mobile-menu ul li a, .mean-nav ul li a");function c(){var t=e(window).scrollTop();e("section").each((function(){var i=e(this).attr("id"),o=e(this).offset().top-1,a=e(this).height();t>=o&&t<o+a&&(l.parent().removeClass("active"),e(".main-menu").find('[href="#'+i+'"]').parent().addClass("active"))}))}l.on("click",(function(t){var i=e(e(this).attr("href"));e("html, body").animate({scrollTop:i.offset().top-76},600),e(this).parent().addClass("active"),t.preventDefault()})),e(window).on("scroll",(function(){c()})),c(),e(document).on("click",".smoth-animation",(function(t){t.preventDefault(),e("html, body").animate({scrollTop:e(e.attr(this,"href")).offset().top-50},300)})),new Swiper(".slider-prlx .parallax-slider",{speed:1500,autoplay:{delay:5e3},parallax:!0,loop:!0,pagination:{el:".rs-slider-dot",clickable:!0},navigation:{nextEl:".slider__button-prev",prevEl:".slider__button-next"},on:{init:function(){for(var t=0;t<this.slides.length;t++)e(this.slides[t]).find(".slider__thumb-bg").attr({"data-swiper-parallax":.75*this.width})},resize:function(){this.update()}}}),new Swiper(".team__carousel-active",{slidesPerView:1,spaceBetween:30,loop:!0,roundLengths:!0,centeredSlides:!0,dot:!1,autoplay:{delay:3e3},navigation:{nextEl:".our-team__slider-button-next",prevEl:".our-team__slider-button-prev"},breakpoints:{1400:{slidesPerView:3},1200:{slidesPerView:3},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:1},0:{slidesPerView:1}}}),new Swiper(".brand__active",{slidesPerView:1,spaceBetween:30,loop:!0,roundLengths:!0,clickable:!0,autoplay:{delay:3e3},breakpoints:{1200:{slidesPerView:5},992:{slidesPerView:4},768:{slidesPerView:3},576:{slidesPerView:2},0:{slidesPerView:1}}}),e(".carouselTicker-nav").carouselTicker({}),new Swiper(".banner-4-active",{slidesPerView:1,spaceBetween:0,loop:!0,autoplay:{delay:5e3},pagination:{el:".banner-4-pagination",clickable:!0}}),new Swiper(".banner-5-active",{slidesPerView:1,spaceBetween:0,loop:!0,autoplay:{delay:5e3},pagination:{el:".banner-5-pagination",clickable:!0}}),new Swiper(".our-client__active",{slidesPerView:1,spaceBetween:30,loop:!0,roundLengths:!0,clickable:!0,autoplay:{delay:3e3},breakpoints:{1200:{slidesPerView:5},992:{slidesPerView:4},768:{slidesPerView:3},576:{slidesPerView:2},0:{slidesPerView:1}}}),new Swiper(".feedback__active",{slidesPerView:4,spaceBetween:30,loop:!0,autoplay:{delay:3e3},breakpoints:{1400:{slidesPerView:4},1199:{slidesPerView:3},675:{slidesPerView:2},0:{slidesPerView:1}}}),new Swiper(".feedback__active-2",{slidesPerView:1,spaceBetween:30,loop:!0,autoplay:{delay:3e3},navigation:{prevEl:".feedback-2__slider-button-prev",nextEl:".feedback-2__slider-button-next"},breakpoints:{992:{slidesPerView:2},0:{slidesPerView:1}}}),new Swiper(".clients-testomonial__active",{slidesPerView:1,spaceBetween:30,loop:!0,autoplay:{delay:3e3}}),new Swiper(".feedback__active-3",{slidesPerView:1,spaceBetween:30,loop:!0,autoplay:{delay:3e3},pagination:{el:".rs-swiper-dot",clickable:!0}}),new Swiper(".active_team_slider",{slidesPerView:3,spaceBetween:30,loop:!0,autoplay:{delay:3e3},centeredSlides:!0,pagination:{el:".rs-swiper-dot",clickable:!0},breakpoints:{1201:{slidesPerView:3},576:{slidesPerView:2},0:{slidesPerView:1}}}),new Swiper(".latest-gallery__active",{slidesPerView:4,spaceBetween:30,loop:!0,centeredSlides:!0,autoplay:{delay:3e3},centeredSlides:!0,pagination:{el:".rs-swiper-dot",clickable:!0},breakpoints:{1400:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}}}),new Swiper(".home-4-latest-gallery__active",{speed:1e3,loop:!0,slidesPerView:5,autoplay:!0,spaceBetween:30,pagination:{el:".rs-swiper-dot",clickable:!0},breakpoints:{1400:{slidesPerView:3},992:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}}}),e(".work-process__item button").on("click",(function(){e(".work-process__item").removeClass("active"),e(this).closest(".work-process__item").addClass("active")})),e("[data-after-color]").each((function(){e(this).css("color",e(this).attr("data-after-color"))}))}(jQuery),document.addEventListener("DOMContentLoaded",(()=>{let e=document.querySelectorAll(".accordion-single-box");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("active"))),t.classList.add("active")}))}))}));let projectsData=[{category:"Website",img:"./assets/imgs/portfolio/project_1_web.png",a:"https://www.trekbikes.com/us/en_US/"},{category:"Website",img:"./assets/imgs/portfolio/project_2_web.png",a:"https://live.templately.com/gamezone/"},{category:"Website",img:"./assets/imgs/portfolio/project_3_web.png",a:"https://www.rollingloud.com/"},{category:"Website",img:"./assets/imgs/portfolio/project_4_web.png",a:"https://www.rollingloud.com/"},{category:"Website",img:"./assets/imgs/portfolio/project_5_web.png",a:"https://www.24petwatch.com/"},{category:"Website",img:"./assets/imgs/portfolio/project_6_web.png",a:"https://www.duratongear.com/"},{category:"Website",img:"./assets/imgs/portfolio/project_7_web.png",a:"https://www.myhome.ie/"},{category:"Website",img:"./assets/imgs/portfolio/project_8_web.png",a:"https://allestate.ie/"},{category:"Website",img:"./assets/imgs/portfolio/project_9_web.png",a:"https://www.luxuryproperty.com/"},{category:"app",img:"./assets/imgs/portfolio/project_1_app.png"},{category:"app",img:"./assets/imgs/portfolio/project_2_app.png"},{category:"app",img:"./assets/imgs/portfolio/project_3_app.png"},{category:"app",img:"./assets/imgs/portfolio/project_4_app.png"},{category:"app",img:"./assets/imgs/portfolio/project_5_app.png"},{category:"app",img:"./assets/imgs/portfolio/project_6_app.png"},{category:"app",img:"./assets/imgs/portfolio/project_7_app.png"},{category:"app",img:"./assets/imgs/portfolio/project_1_app.png"},{category:"app",img:"./assets/imgs/portfolio/project_9_app.png"},{category:"Software",img:"./assets/imgs/portfolio/software_1.png",a:"https://katchinternational.com/"},{category:"Software",img:"./assets/imgs/portfolio/software_2.png",a:"https://www.alhprops.com/public/"},{category:"Software",img:"./assets/imgs/portfolio/software_3.png",a:"https://taxqube.co.uk/"},{category:"Software",img:"./assets/imgs/portfolio/software_4.png",a:"https://www.negotyum.com/"},{category:"Software",img:"./assets/imgs/portfolio/software_5.png",a:"https://rabonia.com/"},{category:"Software",img:"./assets/imgs/portfolio/software_1.png",a:"https://katchinternational.com/"},{category:"custom",img:"./assets/imgs/portfolio/project_1_custom.png",a:"https://www.sittercity.com/"},{category:"custom",img:"./assets/imgs/portfolio/project_2_custom.png",a:"https://www.myhome.ie/"},{category:"custom",img:"./assets/imgs/portfolio/project_3_custom.png",a:"https://allestate.ie/"},{category:"custom",img:"./assets/imgs/portfolio/software_3.png",a:"https://taxqube.co.uk/"},{category:"custom",img:"./assets/imgs/portfolio/software_5.png",a:"https://rabonia.com/"},{category:"custom",img:"./assets/imgs/portfolio/software_1.png",a:"https://katchinternational.com/"},{category:"crm",img:"./assets/imgs/portfolio/crp_1.png",a:"https://sevdesk.com/"},{category:"crm",img:"./assets/imgs/portfolio/crp_2.png",a:"https://sellerboard.com/"},{category:"crm",img:"./assets/imgs/portfolio/crp_3.png",a:"https://tacticalmanagement.ae//"},{category:"crm",img:"./assets/imgs/portfolio/software_3.png",a:"https://taxqube.co.uk/"},{category:"crm",img:"./assets/imgs/portfolio/software_5.png",a:"https://rabonia.com/"},{category:"crm",img:"./assets/imgs/portfolio/software_1.png",a:"https://katchinternational.com/"},{category:"erp",img:"./assets/imgs/portfolio/software_4.png",a:"https://www.negotyum.com/"},{category:"erp",img:"./assets/imgs/portfolio/software_5.png",a:"https://rabonia.com/"},{category:"erp",img:"./assets/imgs/portfolio/crp_1.png",a:"https://sevdesk.com/"},{category:"erp",img:"./assets/imgs/portfolio/crp_2.png",a:"https://sellerboard.com/"},{category:"erp",img:"./assets/imgs/portfolio/crp_3.png",a:"https://tacticalmanagement.ae//"},{category:"erp",img:"./assets/imgs/portfolio/software_3.png",a:"https://taxqube.co.uk/"}];var mainBox=document.getElementById("projects_images");function showprojects(e){let t=projectsData.filter((t=>t.category===e));mainBox.innerHTML="";for(var i=0;i<t.length;i++)mainBox.innerHTML+=`<div class="col-lg-4 col-xl-4 col-md-6 col-sm-12 col-12">\n<a href="${t[i].a}" target="_blank"><img src="${t[i].img}" alt=""></a>\n</div>`}function setActive(e){document.querySelectorAll(".latest-portfolio_section_inner ul li").forEach((e=>e.classList.remove("active_project_li"))),e.target.classList.add("active_project_li")}window.onload=function(){showprojects("Website");let e=document.querySelector(".latest-portfolio_section_inner ul li");e&&e.classList.add("active_project_li")},document.querySelectorAll(".accordion-item").forEach((e=>{e.querySelector(".accordion-item-header").addEventListener("click",(()=>{e.classList.toggle("open")}))}));var a=document.getElementById("hiring");function hire(e){a.value=e}function opentab(e){document.querySelectorAll(".work-process__item-description").forEach((e=>{e.style.display="none"})),e.closest(".work-process__item").querySelector(".work-process__item-description").style.display="flex"}document.addEventListener("DOMContentLoaded",(()=>{let e=document.querySelectorAll(".pricing-button");e.forEach((t=>{t.addEventListener("click",(t=>{e.forEach((e=>e.classList.remove("active"))),t.currentTarget.classList.add("active");let i=t.currentTarget.getAttribute("onclick").replace("(event)","");"function"==typeof window[i]&&window[i](t)}))}))}));let priceData=[{category:"website",name:"Start Up Website Package",price:"299",one:"Up to 5 Page Website",two:"Up to 5 Stock Images (Industry Specific)",three:"Contact Form",four:"jQuery Slider",five:"3 Banner Designs",six:"Google Friendly Sitemap",seven:"Complete W3C Certified HTML",eight:"48 to 72 hours TAT",nine:"Satisfaction Guarantee",ten:"Unique Design Guarantee",eleven:"Money Back Guarantee",twelve:"Mobile Responsive for $125",thirtheen:"CMS for Additional $150"},{category:"website",name:"Elite Website Package",price:"1,324",one:"Up to 25 Custom Pages Website",two:"Unique Interactive, Dynamic &amp; High End Design",three:"Custom WP (OR) Custom PHP Development",four:"CMS (Content Management System)/Admin Panel",five:"Special Striking Hover Effects",six:"Liquid Responsive Layout ",seven:"Online Reservation/Appointment Tool (Optional)",eight:"Online Payment Gateway Integration (Optional)",nine:"Book A Call CTA Form",ten:"Custom Dynamic CTA Forms",eleven:"Search Bar",twelve:"User Login",thirtheen:" On Page &amp; Technical SEO for £225"},{category:"website",name:"Professional Website Package",price:"544",one:"Up to 10 Unique Pages Website",two:"CMS (Content Management System)/Admin Panel ",three:"Contact Form",four:"Online Appointment Scheduling CTA Form",five:"Book A Call CTA Form",six:"Up to 10 Stock images (Industry Specific)",seven:"5 Custom Banner Designs",eight:"FREE Google Friendly Sitemap",nine:"jQuery Slider Banner",ten:"48 to 72 hours TAT",eleven:"100% Satisfaction Guarantee",twelve:"100% Unique Design Guarantee",thirtheen:"Mobile Responsive for Additional £125"},{category:"website",name:"Business Website Package",price:"1,824",one:"Custom 2D Explainer Video Animation ",two:"Voice Over &amp; Sound Effects",three:"Professional Script Writing",four:"Storyboard Creation",five:"UI / UX Interactive &amp; Dynamic HD Design",six:"Liquid Responsive",seven:"SEO Meta Tags",eight:"Custom WP (or) Custom PHP Development",nine:"jQuery Slider Banner",ten:"Content Management System (CMS)",eleven:"100% Satisfaction Guarantee",twelve:"100% Unique Design Guarantee",thirtheen:"FREE On Page &amp; Technical SEO"},{category:"website",name:"Identify Website Package",price:"924",one:"Up to 15 Custom Pages Website",two:"Mobile Responsive",three:"Conceptual and Dynamic Design",four:"Book A Call CTA Form",five:"Online Payment Gateway Integration (Optional)",six:"Liquid Responsive",seven:"Online Payment Gateway Integration (Optional)",eight:"Search Engine Submission",nine:"jQuery Slider Banner",ten:"48 to 72 hours TAT",eleven:"100% Satisfaction Guarantee",twelve:"100% Unique Design Guarantee",thirtheen:"-- On Page &amp; Technical SEO for £225"},{category:"seo",name:"Basic Seo Package",price:"999.99",one:"Business Analysis",two:"Consumer Analysis",three:"Competitor Analysis",four:"Prior Analysis",five:"Meta Tags Creation",six:"Keyword Optimization",seven:"Image Optimization",eight:"Search Engine Submission",nine:"Tracking &amp; Analysis",ten:"Call To Action Plan",eleven:"Reporting",twelve:"Slide Share Marketing ",thirtheen:"Link Building"},{category:"seo",name:"Premium Seo Package",price:"1499.99",one:"Prior Analysis ",two:"Business Analysis",three:"Competitor Analysis",four:"30 Selected Keywords Targeting ",five:"Webpage Optimization ",six:"Google Places Inclusions",seven:"Google Analytics Installation",eight:"Google Webmaster Installation ",nine:"Monthly Reporting",ten:"Off Page Optimization",eleven:"Local Business Listings",twelve:"Link Building",thirtheen:"Directory Submission"},{category:"seo",name:"Platinium Seo Package",price:"1999.9",one:"Prior Analysis ",two:"Business Analysis",three:"Competitor Analysis",four:"70 Selected Keywords Targeting ",five:"Webpage Optimization ",six:"50 Pages Keyword Targeted",seven:"Inclusion of anchors Tags ",eight:"Inclusion of anchors Indexing Modifications ",nine:"Meta Tags Creation",ten:"Off Page Optimization",eleven:"Local Business Listings",twelve:"Link Building",thirtheen:"Directory Submission"},{category:"ecom",name:"Beginners E-Commerce Package",price:"895",one:"Upto 15 Unique Pages Website ",two:"Conceptual and Dynamic Website",three:"Content Management System (CMS)",four:"Mobile Responsive",five:"Easy Product Search ",six:"Up To 100 Products",seven:"Up To 7 Categories",eight:"Full Shopping Cart Integration",nine:"Free Google Friendly Sitemap",ten:"100% Money Back Guarantee",eleven:"100% Unique Design Guarantee",twelve:"100% Satisfaction Guarantee",thirtheen:"100% Ownership Rights"},{category:"ecom",name:"Corporate E-Commerce Package",price:"1,695",one:"Unlimited Unique Pages Website",two:"Conceptual and Dynamic Website",three:"Content Management System (CMS)",four:"Mobile Responsive",five:"Easy Product Search ",six:"Unlimited Products",seven:"Unlimited Categories",eight:"Full Shopping Cart Integration",nine:"Payment Module Integration",ten:"100% Money Back Guarantee",eleven:"100% Unique Design Guarantee",twelve:"100% Satisfaction Guarantee",thirtheen:"100% Ownership Rights"},{category:"ecom",name:"Elite E-Commerce Package",price:"2,595",one:"UNLIMITED Logo Design Concepts",two:"UNLIMITED Revisions",three:"Stationary Design (BusinessCard,Letterhead & Envelope)",four:"Invoice Design, Email Signature",five:"T-Shirt Design (OR) Car Wrap Design ",six:"Product Detail Page Design",seven:"Unlimited Categories",eight:"Full Shopping Cart Integration",nine:"E-Commerce Store Design",ten:"100% Money Back Guarantee",eleven:"100% Unique Design Guarantee",twelve:"100% Satisfaction Guarantee",thirtheen:"100% Ownership Rights"},{category:"crms",name:"Basic Logo Package",price:"35.00",one:"3 Custom Logo Design Concepts",two:"1 Dedicated Designer",three:"4 Revisions",four:"2 hours TAT",five:"1 Revisions",six:"Free File Formats",seven:"24 to 48 hours TAT",eight:"Free Icon Design",nine:"2 Stock Photos",ten:"100% Unique Design Guarantee",eleven:"100% Satisfaction Guarantee",twelve:"100% Money Back Guarantee",thirtheen:"100% Ownership Rights"},{category:"crms",name:"Startup Logo Package",price:"65.00",one:"4 Custom Logo Design Concepts",two:"2 Dedicated Designer",three:"Unlimited Revisions",four:"2 hours TAT",five:"1 Revisions",six:"Free File Formats",seven:"24 to 48 hours TAT",eight:"Free Icon Design",nine:"2 Stock Photos",ten:"100% Unique Design Guarantee",eleven:"100% Satisfaction Guarantee",twelve:"100% Money Back Guarantee",thirtheen:"100% Ownership Rights"},{category:"crms",name:"Professional Logo Package",price:"99.99",one:"Unlimited Custom Logo Design Concepts",two:"4 Dedicated Designer",three:"Unlimited Revisions",four:"FREE MS Electronic Letterhead",five:"FREE Custom Stationery Design (Letterhead, Business Card, Envelope)",six:"Free File Formats",seven:"24 to 48 hours TAT",eight:"Free Icon Design",nine:"2 Stock Photos",ten:"100% Unique Design Guarantee",eleven:"100% Satisfaction Guarantee",twelve:"100% Money Back Guarantee",thirtheen:"100% Ownership Rights"},{category:"crms",name:"Business Logo Package",price:"149.99",one:"Unlimited Custom Logo Design Concepts",two:"8 Dedicated Designer",three:"Unlimited Revisions",four:"FREE MS Electronic Letterhead",five:"FREE Custom Stationery Design (Letterhead, Business Card, Envelope)",six:"Free File Formats",seven:"24 to 48 hours TAT",eight:"Free Icon Design",nine:"Double Side Flyer (OR) Bi-Fold Brochure",ten:"100% Unique Design Guarantee",eleven:"100% Satisfaction Guarantee",twelve:"100% Money Back Guarantee",thirtheen:"100% Ownership Rights"},{category:"crms",name:"Logo & Web Package",price:"249.99",one:"Unlimited Custom Logo Design Concepts",two:"8 Dedicated Designer",three:"Unlimited Revisions",four:"FREE MS Electronic Letterhead",five:"FREE Custom Stationery Design (Letterhead, Business Card, Envelope)",six:"Free File Formats",seven:"3 Page Custom Website",eight:"Free Icon Design",nine:"jQuery Slider",ten:"100% Unique Design Guarantee",eleven:"100% Satisfaction Guarantee",twelve:"100% Money Back Guarantee",thirtheen:"100% Ownership Rights"},{category:"erps",name:"Beginners Illustrative Package",price:"195",one:" 4 Custom Logo Design Concepts",two:" By 3 Designers",three:"Unlimited Revisions",four:" 48 to 72 hours TAT",five:"Dedicated Project Manager",six:"Fully Rendered",seven:"Simple Light Effects and VFX",eight:"100% Ownership Rights",nine:"100% Satisfaction Guarantee",ten:"100% Unique Design Guarantee",eleven:"100% Satisfaction Guarantee",twelve:"100% Money Back Guarantee",thirtheen:"100% Ownership Rights"},{category:"erps",name:"Professional Illustrative Package",price:"265",one:" Unlimited Custom Logo Design Concepts",two:" By 4 Designers",three:"Unlimited Revisions",four:" 48 to 72 hours TAT",five:"Dedicated Project Manager",six:"Fully Rendered",seven:"Simple Light Effects and VFX",eight:"100% Ownership Rights",nine:"100% Satisfaction Guarantee",ten:"100% Unique Design Guarantee",eleven:"100% Satisfaction Guarantee",twelve:"100% Money Back Guarantee",thirtheen:"100% Ownership Rights"},{category:"erps",name:"3D Animated Logo Package",price:"445",one:" 3 TO 5  Custom Concepts",two:"  LOGO ANIMATION ",three:" ILLUSTRATION",four:" 2D OR 3D",five:"Dedicated Project Manager",six:"Fully Rendered",seven:" Light Effects and VFX",eight:" 72 hours Turnaround Time",nine:" By 3 Award Winning Designerse",ten:"100% Unique Design Guarantee",eleven:"100% Satisfaction Guarantee",twelve:"100% Money Back Guarantee",thirtheen:"100% Ownership Rights"}];function displayPricing(e){let t=document.getElementById("pricingboxs"),i=priceData.filter((t=>t.category===e));t.innerHTML="",i.forEach((e=>{let i=`\n        <div class="col-lg-4 col-md-6 pack-item">\n            <div class="pack-inn">\n                <div class="pack-header">\n                    <h3 class="pack-name">${e.name}</h3> \n                </div>\n                <div class="pack-price">\n                    <h4 class="pack-amt"><sup>$</sup>${e.price}</h4>\n                </div>\n                <div class="pack-list pack-ul mCustomScrollbar _mCS_6 mCS-autoHide">\n                    <div id="mCSB_6" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabindex="0" style="max-height: none;">\n                        <div id="mCSB_6_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">\n                            <ul>\n                                <li>${e.one}</li>\n                                <li>${e.two}</li>\n                                <li>${e.three}</li>\n                                <li>${e.four}</li>\n                                <li>${e.five}</li>\n                                <li>${e.six}</li>\n                                <li>${e.seven}</li>\n                                <li>${e.eight}</li>\n                                <li>${e.nine}</li>\n                                <li>${e.ten}</li>\n                                <li>${e.eleven}</li>\n                                <li>${e.twelve}</li>\n                                <li>${e.thirtheen}</li>\n                            </ul>\n                        </div>\n                        <div id="mCSB_6_scrollbar_vertical" class="mCSB_scrollTools mCSB_6_scrollbar mCS-light mCSB_scrollTools_vertical" style="display: block;">\n                            <div class="mCSB_draggerContainer">\n                                <div id="mCSB_6_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; display: block; height: 67px; max-height: 160px; top: 0px;">\n                                    <div class="mCSB_dragger_bar" style="line-height: 30px;"></div>\n                                </div>\n                                <div class="mCSB_draggerRail"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="pack-btn">\n                    <ul>\n                        <li><a href="hireus.html" name="${e.name} - $${e.price}" title="${e.name} For Only $${e.price}" class="order_now">Start Project</a></li>\n                    </ul>\n                </div>\n                <div class="pack-lbtn">\n                    <a href="tel:+44 7360 277541" class="live_call"><span>Speak with us</span>+92 300 1188320</a>\n                    <a href="javascript:;" class="chat"><span>Want to discuss?</span> Live Chat Now </a>\n                </div>\n            </div>\n        </div>`;t.innerHTML+=i}))}function pricing(e){displayPricing(e)}window.addEventListener("DOMContentLoaded",(()=>{displayPricing("website")}));