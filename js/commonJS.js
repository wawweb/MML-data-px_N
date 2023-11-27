$(function(){
    //切換碰
    $(".mainWrap .top button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        if($(this).hasClass("contiBtn"))
        {
            $(".moneyWindow .total.conti,.mainBox .right.conti")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("multiBtn"))
        {
            $(".moneyWindow .total.multi,.mainBox .right.multi")
            .addClass("display")
            .siblings().removeClass("display");
        }
        else if($(this).hasClass("singleBtn"))
        {
            $(".mainBox .right.single")
            .addClass("display")
            .siblings().removeClass("display");
        }

        $(".moneyWindow .easyBtn,.common")
        .addClass("display");

        $(".moneyWindow .contiBtn")
        .removeClass("display");

        clear();
    })

    //切換簡單模式
    $(".moneyWindow .easyBtn").click(function(){
        $(".mainWrap .top button")
        .removeClass("active");

        $(".mainBox .right.easy")
        .addClass("display")
        .siblings().removeClass("display");

        $(".common,.moneyWindow .easyBtn")
        .removeClass("display");

        $(".moneyWindow .contiBtn")
        .addClass("display");

        clear();
    })
    $(".moneyWindow .contiBtn").click(function(){
        $(".mainWrap .top button.contiBtn")
        .addClass("active");

        $(".mainBox .right.conti")
        .addClass("display")
        .siblings().removeClass("display");

        $(".common")
        .addClass("display")

        $(".moneyWindow .easyBtn")
        .addClass("display");

        $(".moneyWindow .contiBtn")
        .removeClass("display");

        clear();
    })

    //清除
    $(".clear").click(function(){
        clear();
    })

    //金額輸入欄
    $(".money").focus(function(){
        $(this)
        .val("");
    })
})

import { clear } from "./function.js";