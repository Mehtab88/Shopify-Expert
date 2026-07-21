/* Landing page interactions — gallery, FAQ, sticky buy bar */
(function () {
  'use strict';

  var OFFER_URL = 'https://www.coolizi.com/me/new/Coolizi/Coolzy/wish52913?';

  document.addEventListener('DOMContentLoaded', function () {
    // Gallery thumb switching
    var imgSrcs = [
      'assets/images/img_01.jpg',
      'assets/images/img_02.jpg',
      'assets/images/img_03.jpg',
      'assets/images/img_04.jpg'
    ];
    var mainImg = document.getElementById('mainImgEl');
    var thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach(function (thumb, idx) {
      thumb.addEventListener('click', function () {
        if (mainImg && imgSrcs[idx]) {
          mainImg.src = imgSrcs[idx];
        }
        thumbs.forEach(function (t) {
          t.classList.remove('active');
        });
        thumb.classList.add('active');
      });
    });

    // FAQ accordion
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
      var btn = item.querySelector('.faq-q');
      if (btn) {
        btn.addEventListener('click', function () {
          item.classList.toggle('open');
        });
      }
    });

    // Sticky buy bar — show after hero is out of view
    var stickyBuy = document.getElementById('stickyBuy');
    var hero = document.querySelector('.hero');
    if (stickyBuy && hero) {
      var toggleSticky = function () {
        var heroBottom = hero.offsetTop + hero.offsetHeight;
        if (window.scrollY > heroBottom - 100) {
          stickyBuy.classList.add('visible');
        } else {
          stickyBuy.classList.remove('visible');
        }
      };
      window.addEventListener('scroll', toggleSticky, { passive: true });
      toggleSticky();
    }

    // Ensure all CTA buttons open the offer URL
    var ctaSelector = 'a.btn-cta, a.btn-cta-lg, a.nav-cart, .sticky-buy a.btn-cta';
    document.querySelectorAll(ctaSelector).forEach(function (el) {
      el.setAttribute('href', OFFER_URL);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  });
})();
