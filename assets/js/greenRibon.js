(() => {
  const headerElem = document.querySelector("header");
  const gnbLinks = document.querySelectorAll(".gnb a");
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

  var mapContainer = document.getElementById("map-seoul"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(37.5455, 126.9526), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
  var map = new kakao.maps.Map(mapContainer, mapOption);
  var markerPosition = new kakao.maps.LatLng(37.5455, 126.9526);
  var marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);

  var mapContainer2 = document.getElementById("map-daejeon"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(36.3285, 127.4232), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  var map2 = new kakao.maps.Map(mapContainer2, mapOption);
  var markerPosition2 = new kakao.maps.LatLng(36.3285, 127.4232);
  var marker2 = new kakao.maps.Marker({
    position: markerPosition2,
  });

  marker2.setMap(map2);

  //animation
  window.addEventListener("load", () => {
    document.body.classList.remove("before-load");
  });
  document.querySelector(".loading").addEventListener("transitionend", (e) => {
    document.body.removeChild(e.currentTarget);
    //main Motion
    const spyEls = document.querySelectorAll(".scroll-spy");
    const mainSections = document.querySelectorAll(".gnb-link-active");
    spyEls.forEach(function (spyEl) {
      new ScrollMagic.Scene({
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: 0.5,
      })
        .setClassToggle(spyEl, "show")
        .addTo(new ScrollMagic.Controller());
    });

    mainSections.forEach(function (mainSection, i) {
      let height = mainSection.clientHeight;
      new ScrollMagic.Scene({
        duration: height,
        triggerElement: mainSection, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: 0.5,
      })
        .setClassToggle(gnbLinks[i], "active")
        .addTo(new ScrollMagic.Controller());
    });
    //숫자 카운트 animation
    function numberWithCommas(n) {
      var parts = n.toString().split(".");
      return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const valueInfo = [
      {
        text: document.querySelector(".goals-nums .num1"),
        vlaue: document
          .querySelector(".goals-nums .num1")
          .getAttribute("data-num"),
        speed: 100,
        aniSpeed: 7,
      },
      {
        text: document.querySelector(".goals-nums .num2"),
        vlaue: document
          .querySelector(".goals-nums .num2")
          .getAttribute("data-num"),
        speed: 100,
        aniSpeed: 7,
      },
      {
        text: document.querySelector(".goals-nums .num3"),
        vlaue: document
          .querySelector(".goals-nums .num3")
          .getAttribute("data-num"),
        speed: 200,
        aniSpeed: 0.5,
      },
    ];
    const counters = document.querySelectorAll(".goals-nums .count-num");
    counters.forEach(function (counter, number) {
      new ScrollMagic.Scene({
        triggerElement: counter, // 보여짐 여부를 감시할 요소를 지정
        triggerHook: 1,
        reverse: false,
      })
        .on("enter", () => {
          const animate = () => {
            const value = +valueInfo[number].vlaue;
            const data = +valueInfo[number].text.innerText;
            const time = value / valueInfo[number].speed;

            if (data < value) {
              valueInfo[number].text.innerText = Math.ceil(data + time);
              setTimeout(animate, valueInfo[number].aniSpeed);
            } else {
              valueInfo[number].text.innerText = numberWithCommas(value);
            }
          };
          animate();
        })
        .on("leave", () => {
          counter.innerText = 0;
        })
        .setClassToggle(counters, "active")
        .addTo(new ScrollMagic.Controller());
    });
  });
})();
