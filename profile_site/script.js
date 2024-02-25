$(function(){
    //カルーセル
    $('.carousel').slick({
        //画像を自動的に切り替える
        autoplay: true,
        //カルーセルの下に現在地を示すUI（ドット）を表示する
        dots: true,
        //画像をループさせる
        infinite: true,
        //5秒ごとに画像を切り替える
        autoplaySpeed: 1500,
        //カルーセルの左右の矢印を非表示にする
        arrows: false,
    });

    //リンクにカーソルがいく(ホバー)と不透明
    $('a').hover(
        function () {
          $(this).animate({ 'opacity': 0.6 }, 300);
        },
        function () {
          $(this).animate({ 'opacity': 1.0 }, 300);
        }
      );

    //TOPボタンを100pxを機に表示・非表示を切り替える
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('#top').fadeIn();
        }else{
            $('#top').fadeout();
        }
    });

     // ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
     $('a[href^="#"]').click(function () {
        const speed = 500;
        const href = $(this).attr('href');
        let $target;
        if (href == '#') {
        $target = $('html');
         }
        else {
        $target = $(href);
        }
        const position = $target.offset().top;
         $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
         return false;
     });


     
  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

   // ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
   $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });


     // Worksの画像をクリックしたときにモーダルで拡大表示する
    $('.works img').click(function () {
     const imgSrc = $(this).attr('src');
      $('.big-img').attr('src', imgSrc);
        $('.modal').fadeIn();
         return false
     });

    // 閉じるボタンをクリックしたときにモーダルを閉じる
     $('.close-btn').click(function () {
      $('.modal').fadeOut();
        return false
    });
    });