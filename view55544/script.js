// Common URL helpers (from original common.js)
function urlToObject(url) {     
    var urlObject = {};     
    if (/\?/.test(url)) {       
        var urlString = url.substring(url.indexOf("?")+1);       
        var urlArray = urlString.split("&");       
        for (var i=0, len=urlArray.length; i<len; i++) {         
            var urlItem = urlArray[i];         
            var item = urlItem.split("=");         
            urlObject[item[0]] = item[1];       
        }       
        return urlObject;     
    }   
};

function objectToUrl(obj) {
    var _result = [];
    for (var key in obj) {
      var value = obj[key];
      if(value) {
        if (value.constructor == Array) {
          value.forEach(function(_value) {
            _result.push(key + "=" + _value);
          });
        } else {
          _result.push(key + '=' + value);
        }
      }
    }
    return _result.join('&');
}

function urlQueryFilter(url) {
    var delete_url_arr = [
        'thumbnail',
        'campaign_item_id',
        'title',
        'platform',
        'campaign_name',
        'site',
        'site_id',
        'campaign_id',
    ];

    var url_obj = urlToObject(url);

    for (var i = 0; i < delete_url_arr.length; i++) {
        delete url_obj[delete_url_arr[i]];
    }

    var return_url = objectToUrl(url_obj);

    return return_url;
}

function bottomStickDisplay(bottom_node) {
  var element = document.querySelector(bottom_node);
  var element_default_display = element.style.display;
  var box_title = element.getAttribute('box-title');

  if(box_title) {
    var watch_elements = document.querySelectorAll('[title="' + box_title + '"]');
    if(watch_elements) {
      window.addEventListener("scroll", function() {
        var visible_bottom = window.scrollY + document.documentElement.clientHeight;
        var visible_top = window.scrollY;
        element.style.display = element_default_display;
        for (var i = 0; i < watch_elements.length; i++) {
          var watch_element = watch_elements[i];
          if(watch_element.offsetTop+watch_element.offsetHeight > visible_top && watch_element.offsetTop < visible_bottom) {
            element.style.display = 'none';
            break;
          }
        }
      })
    }
  }
}

// CTA navigation (tracking removed)
function Goto() {
  var base = "https://www.coolizi.com/me/new/Coolizi/Coolzy/wish55545?Affid=15&s4=853&s5=99037c6eec104afa8395aec618781b9c&_ef_transaction_id=99037c6eec104afa8395aec618781b9c&domain1=www.bsjs23tr.com";
  var extra = GetRequest();
  var link = extra ? base + "&" + extra : base;
  var a = document.createElement("a");
  a.href = link;
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  a.remove();
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

document.addEventListener("DOMContentLoaded", function () {
  var footerContent =
    document.querySelector("footer") ||
    document.querySelector(".footer") ||
    document.querySelector(".footer-wrapper") ||
    document.querySelector(".smb-page-footer");
  if (footerContent) {
    var currentYear = new Date().getFullYear();
    footerContent.innerHTML = footerContent.innerHTML.replace(
      /(?<!\d)(?:19|20)\d{2}(?!\d)/g,
      String(currentYear)
    );
  }
});

// Sticky top bar (original sticky-top.js)
window.addEventListener('scroll', function () {
    document.querySelector('#stickyTop').style.display = 'none';
    var body_width = document.documentElement.clientWidth || document.body.clientWidth;
    var scroll_height = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (body_width > 750) {
        if (scroll_height > 10) {
            document.querySelector('#stickyTop').style.display = 'block';

        } else {
            document.querySelector('#stickyTop').style.display = 'none';
        }
    }
});

// Sidebar sticky + mobile bottom CTA (original smb-scroll.js)
var smb_fixed_flag = document.querySelector("#smb-fixed-flag");
var smb_fixed = document.querySelector(".smb-right-main");
var smb_none = document.querySelector("#smb-flag-none");
var smb_bottom = document.querySelector(".smb-button-bottom");
var screen =
  document.body.clientWidth ||
  document.documentElement.clientWidth ||
  window.innerWidth;

if (screen > 768) {
  window.addEventListener("scroll", function(e) {
    var scroll = smb_fixed_flag.getBoundingClientRect().top;
    if (scroll < 0) {
      smb_fixed.classList.add('smb-fixed');
    } else if (scroll > 0) {
      smb_fixed.classList.remove('smb-fixed');
    }
  });
}

if (screen < 768) {
  window.addEventListener("scroll", function(e) {
    var scroll_none = smb_none.getBoundingClientRect().top;
    if (scroll_none > 1500) {
      smb_bottom.classList.add("smb-mb-block");
    } else if (scroll_none < 1000) {
      smb_bottom.classList.remove("smb-mb-block");
    }
  });
}

// Viewport detection for bottom CTA
document.addEventListener('DOMContentLoaded', function() {
      // DOM加载完成后执行的代码
      const targetBottomBtn = document.getElementById('bottom-fifty-persent-off-btn');
      if(targetBottomBtn) {
        targetBottomBtn.classList.add('detection-ele-hidden');
      }
    });
    // 滚动事件监听器
    window.addEventListener('scroll', function() {
        const targetBottomBtn = document.getElementById('bottom-fifty-persent-off-btn');
        if(!targetBottomBtn){
          return;
        }
        checkElementInViewport('.click_to_product_page_btn', function(inViewport) {
          if(inViewport) {
            targetBottomBtn.classList.add('detection-ele-hidden');
          }else{
            targetBottomBtn.classList.remove('detection-ele-hidden');
          }
        });
    });

    // 检测视口内是否有指定选择器的元素
    function checkElementInViewport(detectionEleSelector, callback) {
        const elements = document.querySelectorAll(detectionEleSelector);
        let inViewport = false;
        elements.forEach(function(element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                inViewport = true;
            }
        });
        callback(inViewport);
    }

// Countdown timers
// 从类名获取初始时间
  function getInitialTime() {
      const countdownElementList = document.querySelectorAll('.countdown');
      if(countdownElementList && countdownElementList.length > 0) {
          let initialTimeGather = [];
          countdownElementList.forEach((countdownElement, index) => {
              let countdownClassList = countdownElement.classList;
              let days = parseInt(countdownElement.getAttribute('data-days')) || 0;
              let hours = parseInt(countdownElement.getAttribute('data-hours')) || 0;
              let minutes = parseInt(countdownElement.getAttribute('data-minutes')) || 0;
              let seconds = parseInt(countdownElement.getAttribute('data-seconds')) || 0;
              countdownClassList.forEach(item => {
                  // 天
                  if (item.includes('days-')) {
                      days = item.split('-')[1] || 0;
                  }

                  // 时
                  if (item.includes('hours-')) {
                      hours = item.split('-')[1] || 0;
                  }

                  // 分
                  if (item.includes('minutes-')) {
                      minutes = item.split('-')[1] || 0;
                  }

                  // 秒
                  if (item.includes('seconds-')) {
                      seconds = item.split('-')[1] || 0;
                  }
              });
              initialTimeGather[index] = { days, hours, minutes, seconds};
          });
          return initialTimeGather;
      }
      return null;
  }

  // 计算目标时间
  function calculateTargetDate(initialTime) {
      const now = new Date();
      const targetDate = new Date();

      // 添加天数、小时、分钟和秒数
      targetDate.setDate(now.getDate() + parseInt(initialTime.days));
      targetDate.setHours(now.getHours() + parseInt(initialTime.hours));
      targetDate.setMinutes(now.getMinutes() + parseInt(initialTime.minutes));
      targetDate.setSeconds(now.getSeconds() + parseInt(initialTime.seconds));

      return targetDate;
  }

  // 更新倒计时显示
  function updateCountdown(targetDate, index) {
      const now = new Date();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
          // 倒计时结束
          document.querySelectorAll('.days')[index].textContent = '00';
          document.querySelectorAll('.hours')[index].textContent = '00';
          document.querySelectorAll('.minutes')[index].textContent = '00';
          document.querySelectorAll('.seconds')[index].textContent = '00';

          // 添加结束提示
          document.querySelectorAll('.countdown-title-text')[index].textContent = '倒计时结束！';
          return;
      }

      // 计算天、时、分、秒
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // 更新显示
      document.querySelectorAll('.days')[index].textContent = days.toString().padStart(2, '0');
      document.querySelectorAll('.hours')[index].textContent = hours.toString().padStart(2, '0');
      document.querySelectorAll('.minutes')[index].textContent = minutes.toString().padStart(2, '0');
      document.querySelectorAll('.seconds')[index].textContent = seconds.toString().padStart(2, '0');
  }

  // 初始化倒计时
  function initCountdown() {
      const initialTimeGather = getInitialTime();
      if(initialTimeGather) {
          initialTimeGather.forEach((initialTime, index) => {
              let targetDate = calculateTargetDate(initialTime);

              // 初始更新
              updateCountdown(targetDate, index);

              // 每秒更新一次
              let countdownInterval = setInterval(() => {
                  updateCountdown(targetDate, index);

                  // 检查是否结束
                  let now = new Date();
                  if (targetDate - now <= 0) {
                      clearInterval(countdownInterval);
                  }
              }, 1000);
          })
      }
  }

  // 页面加载完成后初始化
  document.addEventListener('DOMContentLoaded', initCountdown);

// Swipe-to-click on offer buttons
document.addEventListener('DOMContentLoaded', function () {
      const swipeableGather = document.querySelectorAll('.fifty_percent_off_button');
      if (swipeableGather && swipeableGather.length > 0) {
        swipeableGather.forEach(swipeable => {
          let startX, startY, endX, endY;

          swipeable.addEventListener('touchstart', function (e) {
              // 记录触摸开始时的位置
              startX = e.touches[0].clientX;
              startY = e.touches[0].clientY;
          });

          swipeable.addEventListener('touchend', function (e) {
              // 记录触摸结束时的位置
              endX = e.changedTouches[0].clientX;
              endY = e.changedTouches[0].clientY;

              // 计算横向和纵向的移动距离
              let deltaX = endX - startX;
              let deltaY = endY - startY;

              // 判断是否为左滑
              if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
                  let links = swipeable.querySelectorAll('a');
                  if (links.length > 0) {
                      links[0].click();
                  }
              }
          });
        });
      }
  });

// Article link param helper
function click_popup_articles(href) {
     var need_url_params = ["site","site_id","title","platform","campaign_id","campaign_item_id","thumbnail","campaign_name","utm_campaign","utm_medium"];
     var paramSeparator = href.includes('?') ? '&' : '?';
     const orderedParams = need_url_params
         .filter(function(param) {
             return getQueryString(param);
         })
         .map(function(param) {
             return param + "=" + getQueryString(param);
         });
     if (orderedParams.length) {
       return href + paramSeparator + orderedParams.join('&');
     }else{
       return href;
     }
  }

// Wire all CTA clicks
document.addEventListener("DOMContentLoaded", function () {
  var all_a = document.querySelectorAll("a");
  for (var all_a_index = 0; all_a_index < all_a.length; all_a_index++) {
    var currentA = all_a[all_a_index];
    var aClass = currentA.className || "";
    if (aClass.indexOf("privacy-link") > -1) {
      continue;
    } else if (aClass.indexOf("articles_links") > -1) {
      currentA.href = click_popup_articles(currentA.href);
    } else if (aClass.indexOf("image-misalignment-link") > -1) {
      // no-op
    } else {
      currentA.href = "https://www.coolizi.com/me/new/Coolizi/Coolzy/wish55545?Affid=15&s4=853&s5=99037c6eec104afa8395aec618781b9c&_ef_transaction_id=99037c6eec104afa8395aec618781b9c&domain1=www.bsjs23tr.com";
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
});

