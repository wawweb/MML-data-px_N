//柱碰
$(function(){
    //選球
    $(".multi .ballWrap label").change(function(){
        $(this)
        .toggleClass("active");

        var tens = $(this).closest("li").index();
        var digits = $(this).index();
        var multiN = (tens * 10) + (digits + 1);
        var multiString = multiN.toString();

        if(!$(".multiWrap .box p:contains("+ (0 + multiString) +")").length && multiN < 10)
        {
            $(".multiWrap .active .box")
                .append("<p>"+ (0 + multiString) +"</p>");
        }
        else if(!$(".multiWrap .box p:contains("+ multiN +")").length)
        {
            $(".multiWrap .active .box")
                .append("<p>"+ multiN +"</p>");
        }
        else if($(".multiWrap .box p:contains("+ (0 + multiString) +")").length)
        {
            $(".multiWrap .box p:contains("+ (0 + multiString) +")").closest("li")
            .addClass("active")
            .siblings().removeClass("active");

            $(".multiWrap .box p:contains("+ (0 + multiString) +")")
            .remove();
        }
        else{
            $(".multiWrap .box p:contains("+ multiN +")").closest("li")
            .addClass("active")
            .siblings().removeClass("active");

            $(".multiWrap .box p:contains("+ multiN +")")
            .remove();
        }

        var boxP = $($(".multiWrap .box").has("p"))
        var total = boxP.length;

        var pn = 1;
        var fn = 1;

        $(boxP).each(function(){
            pn = $(this).find("p").length;

            fn = pn * fn;
        })

        var multiplier = parseInt($(".money").val());

        $(".total.multi")
        .attr("value",""+ multiplier * fn +"");

        if(total >= 5)
        {
            $(".moneyWindow,.money")
            .addClass("active")

            $(".permutation")
            .attr("value",""+ fn +"");
        }
        else {
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
        $(".multi .ballWrap label:nth-of-type(odd)")
        .toggleClass("active");
    })
    $(".even").click(function(){
        $(".multi .ballWrap label:nth-of-type(even)")
        .toggleClass("active");
    })

    //大小選擇
    $(".big").click(function(){
        $(".multi .ballWrap label:gt(18)")
        .toggleClass("active");
    })
    $(".small").click(function(){
        $(".multi .ballWrap label:lt(19)")
        .toggleClass("active");
    })

    //頭尾選擇
    $(".head").click(function(){
        var n = $(this).index();

        console.log(n);

        $(".multi .ballWrap li:eq("+ n +") label:not(:last-child)")
        .toggleClass("active");

        if(n > 0)
        {
            $(".multi .ballWrap li:eq("+ (n - 1) +") label:last")
            .toggleClass("active");
        }
    })
    $(".foot").click(function(){
        var n = $(this).index();

        $($(".multi .ballWrap li").find("label:eq("+ (n - 1) +")"))
        .toggleClass("active");
    })

    //快速輸入
    $(".fastInput.forMulti").keydown(function(event){
        if(event.which === 13)
        {
            var n = $(".fastInput.forMulti").val();
            var num = parseInt(n);

            $(".multi .ballWrap label:eq("+ (num - 1) +")")
            .addClass("active");

            $(".multi .ballWrap label:eq("+ (num - 1) +") input[type=checkbox]")
            .prop("checked",true);

            if(!$(".multiWrap .box p:contains("+ (0 + n) +")").length && num < 10)
            {
                $(".multiWrap .active .box")
                    .append("<p>"+ (0 + n) +"</p>");
            }
            else if(!$(".multiWrap .box p:contains("+ num +")").length)
            {
                $(".multiWrap .active .box")
                    .append("<p>"+ num +"</p>");
            }
            else if($(".multiWrap .box p:contains("+ (0 + n) +")").length)
            {
                $(".multiWrap .box p:contains("+ (0 + n) +")").closest("li")
                .addClass("active")
                .siblings().removeClass("active");
    
                // $(".multiWrap .box p:contains("+ (0 + n) +")")
                // .remove();
            }
            else{
                $(".multiWrap .box p:contains("+ num +")").closest("li")
                .addClass("active")
                .siblings().removeClass("active");
    
                // $(".multiWrap .box p:contains("+ num +")")
                // .remove();
            }

            var boxP = $($(".multiWrap .box").has("p"))
            var total = boxP.length;
    
            var pn = 1;
            var fn = 1;
    
            $(boxP).each(function(){
                pn = $(this).find("p").length;
    
                fn = pn * fn;
            })

            var multiplier = parseInt($(".money").val());

            $(".total.multi")
            .attr("value",""+ multiplier * fn +"");

            if(total >= 5)
            {
                $(".moneyWindow,.money")
                .addClass("active")

                $(".permutation")
                .attr("value",""+ fn +"");
            }
            else {
                $(".permutation")
                .attr("value","");

                $(".moneyWindow,.money")
                .removeClass("active")

                $(".money")
                .val("0");

                $(".total")
                .attr("value","0");
            }

            $(".fastInput")
            .val("");
        }
    })

    //換柱
    // $(".multiWrap li").click(function(){
    //     $(this)
    //     .addClass("active")
    //     .siblings().removeClass("active");
    // })
    $(document).on("click",".multiWrap li",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    //每碰金額
    $(".money").on("input",function(){
        var textNum = $(".permutation").val();
        var multiplier = parseInt($(".money").val());

        $(".total.multi")
        .attr("value",""+ multiplier * textNum +"");
    })

    //柱名轉換
    var name;
    $(".multiWrap li").each(function(){
        name = $(this).index() + 1;

        $(this).find(".title p")
        .text(""+ name +"柱");
    })

    //新增一柱
    $(".multi .newMulti").click(function(){
        $(".multiWrap ul")
        .append("<li><div class=title><p></p></div><div class=box></box></li>")

        var name;
        $(".multiWrap li").each(function(){
            name = $(this).index() + 1;

            $(this).find(".title p")
            .text(""+ name +"柱");
        })
    })
})