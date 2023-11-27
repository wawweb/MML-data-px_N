//單碰
$(function(){
    //上列輸入框切換
    $(".single .topList input").each(function(){
        $(".single .topList input").keydown(function(e){
            if(e.which === 13)
            {
                $(this).closest("li").next().children("input")
                .focus();
            }
        })
    })

    //取得數
    $(".singleWrap .addBet").click(function(){
        $(".singleWrap .betList ul")
        .append("<li><p></p><p></p><p></p><p></p><p></p><p class=betNum></p><p class=total></p><p class=cancel><i></i></p></li>")

        var arr = [];
        var n = 0;

        $(".single .topList input").each(function(){
            arr[n] = $(this).val();

            $(".singleWrap .listBox li:last-child p:eq("+ n +")")
            .text(""+ arr[n] +"");

            n ++;
        })

        $(".single .topList input")
        .val("");
    })

    //取消列
    $(document).on("click",".singleWrap .betList .cancel",function(){
        $(this).closest("li")
        .remove();
    })
    $(".singleWrap .clear.forBet").click(function(){
        $(".singleWrap .betList li:not(.smallTitle)")
        .remove();
    })
    $(".singleWrap .clear.forTop").click(function(){
        $(".single .topList input")
        .val("");
    })
})