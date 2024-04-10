$(function() {
	$('.slider').on('init', function(event, slick){
		console.log('.slider');
		AOS.init(); // ここにAOSの命令やプログラムを書く
	});
	$('.slider').slick({ 
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
	});
});

// スクロール時に出現する見出し下線アニメーション
$(window).on('scroll',function(){
    $(".lineAnimation").each(function(){
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + 180){
        $(this).addClass('isActive');
      }
    });
  });

  // TOPボタン出現アクション
  window.onscroll = function () {
    scrollToggleClass(".feature-section", ".top-btn-container", "top-btn-show");
  }
  function scrollToggleClass(rangeTarget, addTarget, classname) {
    if($(rangeTarget).length){
      scroll = $(window).scrollTop();
      startPos = $(rangeTarget).offset().top;
      endPos = startPos + $(rangeTarget).outerHeight();
      if (scroll > startPos && scroll < endPos) {
          $(addTarget).addClass(classname);
      }
    }
  }

// ハンバーガーメニュー
  $(".nav-btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".g-nav-bgc").toggleClass('backGround');
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".nav-btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');
    $(".g-nav-bgc").removeClass('backGround');//ナビゲーションのpanelactiveクラスも除去
});

// アコーディオンメニュー
$(function () {
  // タイトルをクリックすると
  $(".js-accordion-title").on("click", function () {
    // クリックした次の要素を開閉
    $(this).next().slideToggle(300);
    // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("open", 300);
  });
});