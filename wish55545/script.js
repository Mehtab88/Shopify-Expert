/* wish55545 – page interactions (tracking removed) */

function urlToObject(url) {
  var urlObject = {};
  if (/\?/.test(url)) {
    var urlString = url.substring(url.indexOf("?") + 1);
    var urlArray = urlString.split("&");
    for (var i = 0, len = urlArray.length; i < len; i++) {
      var urlItem = urlArray[i];
      var item = urlItem.split("=");
      urlObject[item[0]] = item[1];
    }
    return urlObject;
  }
}

function objectToUrl(obj) {
  var _result = [];
  for (var key in obj) {
    var value = obj[key];
    if (value) {
      if (value.constructor == Array) {
        value.forEach(function (_value) {
          _result.push(key + "=" + _value);
        });
      } else {
        _result.push(key + "=" + value);
      }
    }
  }
  return _result.join("&");
}

function urlQueryFilter(url) {
  var delete_url_arr = [
    "thumbnail",
    "campaign_item_id",
    "title",
    "platform",
    "campaign_name",
    "site",
    "site_id",
    "campaign_id",
  ];
  var url_obj = urlToObject(url);
  for (var i = 0; i < delete_url_arr.length; i++) {
    delete url_obj[delete_url_arr[i]];
  }
  return objectToUrl(url_obj);
}

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

function GetRequest() {
  var url = location.search;
  if (url.indexOf("?") != -1) {
    return urlQueryFilter(url);
  }
  return "";
}

/* Original checkout destination preserved */
function Goto() {
  var link =
    "https://Coolizi.com/offer/Coolizi/checkout/53049?" + GetRequest();
  var a = document.createElement("a");
  a.href = link;
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function click_popup_articles(href) {
  var need_url_params = [
    "site",
    "site_id",
    "title",
    "platform",
    "campaign_id",
    "campaign_item_id",
    "thumbnail",
    "campaign_name",
    "utm_campaign",
    "utm_medium",
  ];
  var paramSeparator = href.indexOf("?") > -1 ? "&" : "?";
  var orderedParams = need_url_params
    .filter(function (param) {
      return getQueryString(param);
    })
    .map(function (param) {
      return param + "=" + getQueryString(param);
    });
  if (orderedParams.length) {
    return href + paramSeparator + orderedParams.join("&");
  }
  return href;
}

/* Hero gallery thumbs → main image */
function initHeroGallery() {
  var main = document.getElementById("mainImgEl");
  if (!main) return;
  var thumbs = document.querySelectorAll(".hero-gallery-thumbs .thumb");
  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      var img = thumb.querySelector("img");
      if (!img) return;
      main.src = img.src;
      thumbs.forEach(function (t) {
        t.classList.remove("active");
      });
      thumb.classList.add("active");
    });
  });
}

/* FAQ accordion */
function initFaq() {
  var items = document.querySelectorAll(".faq-item");
  items.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      items.forEach(function (other) {
        other.classList.remove("open");
      });
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
}

/* Sticky buy bar – show after scrolling past hero */
function initStickyBuy() {
  var sticky = document.getElementById("stickyBuy");
  if (!sticky) return;
  var hero = document.getElementById("overview") || document.querySelector(".hero");

  function update() {
    var threshold = hero ? hero.offsetHeight * 0.5 : 400;
    if (window.scrollY > threshold) {
      sticky.classList.add("visible");
    } else {
      sticky.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* Countdown timers (if present) */
function initCountdown() {
  function getInitialTime() {
    var countdownElementList = document.querySelectorAll(".countdown");
    if (!countdownElementList || !countdownElementList.length) return [];
    var initialTimeGather = [];
    countdownElementList.forEach(function (countdownElement, index) {
      var countdownClassList = countdownElement.classList;
      var days = parseInt(countdownElement.getAttribute("data-days"), 10) || 0;
      var hours = parseInt(countdownElement.getAttribute("data-hours"), 10) || 0;
      var minutes =
        parseInt(countdownElement.getAttribute("data-minutes"), 10) || 0;
      var seconds =
        parseInt(countdownElement.getAttribute("data-seconds"), 10) || 0;
      countdownClassList.forEach(function (item) {
        if (item.indexOf("days-") === 0) days = item.split("-")[1] || 0;
        if (item.indexOf("hours-") === 0) hours = item.split("-")[1] || 0;
        if (item.indexOf("minutes-") === 0) minutes = item.split("-")[1] || 0;
        if (item.indexOf("seconds-") === 0) seconds = item.split("-")[1] || 0;
      });
      initialTimeGather[index] = {
        days: parseInt(days, 10) || 0,
        hours: parseInt(hours, 10) || 0,
        minutes: parseInt(minutes, 10) || 0,
        seconds: parseInt(seconds, 10) || 0,
      };
    });
    return initialTimeGather;
  }

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function render(el, t) {
    var d = el.querySelector(".days") || el.querySelector("[data-unit='days']");
    var h = el.querySelector(".hours") || el.querySelector("[data-unit='hours']");
    var m =
      el.querySelector(".minutes") || el.querySelector("[data-unit='minutes']");
    var s =
      el.querySelector(".seconds") || el.querySelector("[data-unit='seconds']");
    if (d) d.textContent = pad(t.days);
    if (h) h.textContent = pad(t.hours);
    if (m) m.textContent = pad(t.minutes);
    if (s) s.textContent = pad(t.seconds);
  }

  var list = document.querySelectorAll(".countdown");
  var times = getInitialTime();
  if (!list.length) return;

  list.forEach(function (el, index) {
    var t = times[index] || { days: 0, hours: 0, minutes: 0, seconds: 0 };
    render(el, t);
    var interval = setInterval(function () {
      if (t.seconds > 0) {
        t.seconds--;
      } else if (t.minutes > 0) {
        t.minutes--;
        t.seconds = 59;
      } else if (t.hours > 0) {
        t.hours--;
        t.minutes = 59;
        t.seconds = 59;
      } else if (t.days > 0) {
        t.days--;
        t.hours = 23;
        t.minutes = 59;
        t.seconds = 59;
      } else {
        clearInterval(interval);
        var title = document.querySelectorAll(".countdown-title-text")[index];
        if (title) title.textContent = "Angebot beendet";
        return;
      }
      render(el, t);
    }, 1000);
  });
}

/* Wire CTA clicks like the original page (privacy / nav anchors preserved) */
function wireCtas() {
  var all_a = document.querySelectorAll("a");
  for (var i = 0; i < all_a.length; i++) {
    var currentA = all_a[i];
    var aClass = currentA.className || "";
    if (aClass.indexOf("privacy-link") > -1) {
      continue;
    } else if (aClass.indexOf("articles_links") > -1) {
      currentA.href = click_popup_articles(currentA.href);
    } else if (aClass.indexOf("image-misalignment-link") > -1) {
      /* in-page section links – leave href as-is */
    } else {
      currentA.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          e.stopPropagation();
          Goto();
        },
        false
      );
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var footerContent =
    document.querySelector("footer") ||
    document.querySelector(".footer") ||
    document.querySelector(".smb-page-footer");
  if (footerContent) {
    var currentYear = new Date().getFullYear();
    footerContent.innerHTML = footerContent.innerHTML.replace(
      /(?<!\d)(?:19|20)\d{2}(?!\d)/g,
      String(currentYear)
    );
  }

  initHeroGallery();
  initFaq();
  initStickyBuy();
  initCountdown();
  wireCtas();
});
