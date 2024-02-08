    //HTML読み込み完了で「loadイベントが発生しました」
    $(window).on('load',()=>{
        console.log("loadイベントが発生しました")
    });

    //画面をスクロールした時に「scrollイベントが発生しました」
    $(window).on('scroll', () => {
        console.log("scrollイベントが発生しました");
    });
