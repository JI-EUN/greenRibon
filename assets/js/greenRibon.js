(() => {
  const headerElem = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      headerElem.classList.add("scroll-active");
    } else {
      headerElem.classList.remove("scroll-active");
    }
  });

  const gnbBtn = document.querySelector(".hamburger-icon");
  gnbBtn.addEventListener("click", function () {
    if (!gnbBtn.classList.contains("open")) {
      gnbBtn.classList.add("open");
      document.body.classList.add("gnb-open");
    } else {
      gnbBtn.classList.remove("open");
      document.body.classList.remove("gnb-open");
    }
  });

  //모바일 gnb
  const gnbLinks = document.querySelectorAll(".gnb a");
  gnbLinks.forEach(function (gnbLink) {
    gnbLink.addEventListener("click", function () {
      if (gnbBtn.classList.contains("open")) {
        gnbBtn.classList.remove("open");
        document.body.classList.remove("gnb-open");
      }
    });
  });

  const tabBtns = document.querySelectorAll(".tab-btns button");
  const tabContents = document.querySelectorAll(".tab-contents .tab-content");
  tabBtns.forEach(function (tabBtn, i) {
    const tabBtnIndex = i;
    tabBtn.addEventListener("click", (e) => {
      const siblings = e.target.parentNode.children;

      e.target.classList.add("active");
    });
  });

  const busTabList = document.querySelectorAll(
    ".main-business .tab_menu .tab-btns li"
  );
  const busContents = document.querySelectorAll(
    ".main-business  .tab_menu .cont_area .cont"
  );
  let activeCont = "#tab1"; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

  for (var i = 0; i < busTabList.length; i++) {
    busTabList[i].querySelector(".btn").addEventListener("click", function (e) {
      e.preventDefault();
      for (var j = 0; j < busTabList.length; j++) {
        // 나머지 버튼 클래스 제거
        busTabList[j].classList.remove("is_on");

        // 나머지 컨텐츠 display:none 처리
        busContents[j].classList.remove("is_on");
      }

      // 버튼 관련 이벤트
      this.parentNode.classList.add("is_on");

      // 버튼 클릭시 컨텐츠 전환
      activeCont = this.getAttribute("href");
      document.querySelector(activeCont).classList.add("is_on");
    });
  }

  const hisTabList = document.querySelectorAll(
    ".main-history .tab_menu .tab-btns li"
  );
  const hisContents = document.querySelectorAll(
    ".main-history  .tab_menu .cont_area .cont"
  );
  let hisActiveCont = "#tab1"; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

  for (var i = 0; i < hisTabList.length; i++) {
    hisTabList[i].querySelector(".btn").addEventListener("click", function (e) {
      e.preventDefault();
      for (var j = 0; j < hisTabList.length; j++) {
        // 나머지 버튼 클래스 제거
        hisTabList[j].classList.remove("is_on");

        // 나머지 컨텐츠 display:none 처리
        hisContents[j].classList.remove("is_on");
      }

      // 버튼 관련 이벤트
      this.parentNode.classList.add("is_on");

      // 버튼 클릭시 컨텐츠 전환
      hisActiveCont = this.getAttribute("href");
      document.querySelector(hisActiveCont).classList.add("is_on");
    });
  }

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".nav-next",
      prevEl: ".nav-prev",
    },
  });
})();
