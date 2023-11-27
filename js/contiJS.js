//連碰
$(function(){
    //選球
    $(".conti .ballWrap label").change(function(){
        $(this)
        .toggleClass("active");

        var contiN = $(".conti .ballWrap input[type=checkbox]:checked").length;
        
        if(contiN >= 5)
        {
            var perN = permutation(contiN,5)

            $(".permutation")
            .attr("value",""+ perN +"");

            $(".moneyWindow,.money")
            .addClass("active")

            var betMoney = $(".money").val();

            $(".total")
            .attr("value",""+ perN * betMoney +"");
        }
        else
        {
            $(".permutation")
            .attr("value","");

            $(".moneyWindow,.money")
            .removeClass("active")

            $(".money")
            .val("0");

            $(".total")
            .attr("value","0");
        }
    })

    //連柱碰單雙選擇
    $(".odd").click(function(){
        $(".conti .ballWrap label:nth-of-type(odd)")
        .toggleClass("active");
    })
    $(".even").click(function(){
        $(".conti .ballWrap label:nth-of-type(even)")
        .toggleClass("active");
    })

    //大小選擇
    $(".big").click(function(){
        $(".conti .ballWrap label:gt(18)")
        .toggleClass("active");
    })
    $(".small").click(function(){
        $(".conti .ballWrap label:lt(19)")
        .toggleClass("active");
    })

    //頭尾選擇
    $(".head").click(function(){
        var n = $(this).index();

        console.log(n);

        $(".conti .ballWrap li:eq("+ n +") label:not(:last-child)")
        .toggleClass("active");

        if(n > 0)
        {
            $(".conti .ballWrap li:eq("+ (n - 1) +") label:last")
            .toggleClass("active");
        }
    })
    $(".foot").click(function(){
        var n = $(this).index();

        $($(".conti .ballWrap li").find("label:eq("+ (n - 1) +")"))
        .toggleClass("active");
    })

    //快速輸入
    $(".fastInput.forConti").keydown(function(event){
        if(event.which === 13)
        {
            var n = $(".fastInput.forConti").val();
            var num = parseInt(n);

            $(".conti .ballWrap label:eq("+ (num - 1) +")")
            .addClass("active");

            $(".conti .ballWrap label:eq("+ (num - 1) +") input[type=checkbox]")
            .prop("checked",true);

            var contiN = $(".conti .ballWrap input[type=checkbox]:checked").length;
            var perN = permutation(contiN,5);

            if(contiN >= 5)
            {
                $(".permutation")
                .attr("value",""+ perN +"");

                $(".moneyWindow,.money")
                .addClass("active")

                var betMoney = $(".money").val();

                $(".total")
                .attr("value",""+ perN * betMoney +"");
            }

            $(".fastInput")
            .val("");
        }
    })

    //每碰金額
    $(".money").on("input",function(){
        var contiN = $(".ballWrap input[type=checkbox]:checked").length;
        var group = permutation(contiN,5);
        var multiplier = parseInt($(".money").val());

        $(".total.conti")
        .attr("value",""+ multiplier * group +"");
    })
})

import { permutation } from "./function.js";