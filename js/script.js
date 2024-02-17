$(function() {

  // モーダル
  $('.js-modal-open').each(function() {
    $(this).on('click', function() {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $('.p-modal').fadeIn();
      return false;
    });
  });
  $('.js-modal-close').on('click', function() {
    $('.js-modal').fadeOut();
    return false;
  });

  // 予約フォーム
  flatpickr("#calender", {
    locale: "ja",
    minDate: 'today',
    mode: "multiple",
  });

  // タブ
  $('.p-item-tab li a').click(function() {
    var index = $('.p-item-tab li a').index(this);
    $('.p-item-tab li a').removeClass('is-active');
    $(this).addClass('is-active');
    $('.p-item-tab_content').removeClass('is-active').eq(index).addClass('is-active');
  });

  // スクロールしたらheader変化
  const headerNav = $('#js-header');
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 100 && headerNav.hasClass('fixed') == false) {
      headerNav.css({ top: '-100px'});
      headerNav.addClass('fixed');
      $('.p-header-nav').addClass('fixed');
      $('.js-logo-before').addClass('scrolled');
      $('.js-logo-after').addClass('scrolled');
      $('.js-drawer-open').addClass('scrolled');
      headerNav.animate({ top: 0}, 500);
    }
    else if($(this).scrollTop() < 100 && headerNav.hasClass('fixed') == true) {
      headerNav.removeClass('fixed');
      $('.p-header-nav').removeClass('fixed');
      $('.js-logo-before').removeClass('scrolled');
      $('.js-logo-after').removeClass('scrolled');
      $('.js-drawer-open').removeClass('scrolled');
    }
  });

  // ドロワー
  $('.js-drawer-open').on('click', function(e) {
    e.preventDefault();
    $('.js-drawer-open').toggleClass('is-active');
    $('.js-drawer-content').toggleClass('is-active');
    $('#js-header').toggleClass('is-active');
    return false;
  });

  // アニメーション
  AOS.init();
});