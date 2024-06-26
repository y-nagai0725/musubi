// -----jsの記述---------------------------
document.addEventListener('DOMContentLoaded', function () {

  //ビューポートの高さ
  const windowHeight = window.innerHeight;

  //mvの高さ
  const mvHeight = document.getElementById('mv').offsetHeight;

  //ヘッダー
  const header = document.getElementById('header');

  //topへ戻るボタン
  const backBtn = document.getElementById('back-btn');

  //topへ戻るボタンスクロール処理
  backBtn.addEventListener('click', function () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  });

  //topへ戻るボタン表示処理
  function showBackBtn() {
    const st = window.scrollY;

    //mvの高さの半分以上スクロールしたらボタン表示
    if (st >= mvHeight * 0.5) {
      backBtn.classList.add('isActive');
    } else {
      backBtn.classList.remove('isActive');
    }
  }

  //ページ内リンクスムーススクロール
  const gnavLinkList = document.getElementsByClassName('gnav__link');
  for (let i = 0; i < gnavLinkList.length; i++) {
    gnavLinkList[i].addEventListener('click', function (e) {
      e.preventDefault();
      const targetHref = this.getAttribute('href');
      const targetElement = document.getElementById(targetHref.replace('#', ''));
      const targetPos = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: targetPos,
        behavior: 'smooth',
      });
    });
  }

  //fadeクラス要素表示処理
  const fadeTargetList = document.querySelectorAll('.fade, .fadeUp, .fadeRight, .fadeLeft');
  function showElement() {
    const st = window.scrollY;
    for (let i = 0; i < fadeTargetList.length; i++) {
      const targetPos = fadeTargetList[i].getBoundingClientRect().top + window.scrollY;
      if (st > targetPos - windowHeight * 0.5) {
        fadeTargetList[i].classList.add('showElement');
      }
    }
  }

  //ヘッダー表示制御用
  function showHeader() {
    const st = window.scrollY;

    //最初のページ表示時以外はクラス付与
    if (st > 0) {
      header.classList.add('isActive');
    }
  }

  //スクロールイベント処理
  window.addEventListener('scroll', function () {
    showBackBtn();
    showElement();
  });

  //ページ読み込み時に実行
  showBackBtn();
  showElement();
  showHeader();

}, false);
// -----ここまで-------------------------------


// // -----jQuery ver---------------------------
// $(function () {

//   //ビューポートの高さ
//   const windowHeight = $(window).innerHeight();

//   //mvの高さ
//   const mvHeight = $('#mv').innerHeight();

//   //topへ戻るボタンスクロール処理
//   $('#back-btn').on('click', function () {
//     $('html, body').animate({ scrollTop: 0 }, 500);
//   });

//   //topへ戻るボタン表示処理
//   function showBackBtn() {
//     const st = $(window).scrollTop();

//     //mvの高さの半分以上スクロールしたらボタン表示
//     if (st >= mvHeight / 2) {
//       $('#back-btn').addClass('isActive');
//     } else {
//       $('#back-btn').removeClass('isActive');
//     }
//   }

//   //ページ内リンクスムーススクロール
//   $('.gnav__link').on('click', function () {
//     const href = $(this).attr('href');
//     const targetPos = $(href).offset().top;
//     $('html, body').animate({ scrollTop: targetPos }, 500);
//   });

//   //fadeクラス要素表示処理
//   function showElement() {
//     const st = $(window).scrollTop();

//     $('.fade, .fadeUp, .fadeRight, .fadeLeft').each(function () {
//       const targetPos = $(this).offset().top;
//       if (st > targetPos - windowHeight * 0.5) {
//         $(this).addClass('showElement');
//       }
//     });
//   }

//   //ヘッダー表示アニメーション制御処理
//   function showHeader() {
//     const st = $(window).scrollTop();

//     //最初のページ表示時以外はクラス付与
//     if (st > 0) {
//       $('#header').addClass('isActive');
//     }
//   }

//   //スクロールイベント処理
//   $(window).on('scroll', function () {
//     showBackBtn();
//     showElement();
//   });

//   //ページ読み込み時に実行
//   showBackBtn();
//   showElement();
//   showHeader();
// });
// // -----ここまで-------------------------------