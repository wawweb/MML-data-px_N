import { setTime } from "./function.js"

//資訊站
$(function(){
    //倒數計時
    setTime();

    //即時投注查看更多
    $(".infoWrap .immInfo .more").click(function(){
        $(".infoWrap .immInfo .betBox")
        .toggleClass("active");

        $(".infoWrap .immInfo .more")
        .toggleClass("display");
    })

    //開獎資訊查看更多
    $(".infoWrap .lotteryBox .more").click(function(){
        $(".infoWrap .lotteryBox .more")
        .toggleClass("display");

        if($(this).hasClass("open"))
        {
            $(".infoWrap .lotteryBox .lottoInfo")
            .addClass("display");

            $(".infoWrap .lotteryBox .outerBox")
            .addClass("active");
        }
        else if($(this).hasClass("close"))
        {
            $(".infoWrap .lotteryBox .lottoInfo:eq(0)")
            .addClass("display")
            .siblings(".lottoInfo").removeClass("display");

            $(".infoWrap .lotteryBox .outerBox")
            .removeClass("active");
        }
    })
})