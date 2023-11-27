//簡單
$(function(){
    //選球
    $(".easy .leftBox label").change(function(){
        $(this)
        .toggleClass("active");

        var tens = $(this).closest("li").index();
        var digits = $(this).index();
        var num = ((tens - 1) * 10) + (digits - 1);
        var numString = num.toString();

        if(!$(".easy .rightBox.conti p:contains("+ (0 + numString) +")").length && num < 10)
        {
            $(".easy .rightBox.conti .num")
            .append("<p>"+ (0 + numString) +"</p>");

            $(".easy .rightBox.multi .active .box")
            .append("<p>"+ (0 + numString) +"</p>");
        }
        else if($(".easy .rightBox.conti p:contains("+ (0 + numString) +")").length)
        {
            $(".easy .rightBox.conti p:contains("+ (0 + numString) +")")
            .remove();

            $(".easy .rightBox.multi p:contains("+ (0 + numString) +")").closest("li")
            .addClass("active")
            .siblings().removeClass("active");

            $(".easy .rightBox.multi p:contains("+ (0 + numString) +")")
            .remove();
        }
        else if(!$(".easy .rightBox.conti p:contains("+ num +")").length)
        {
            $(".easy .rightBox.conti .num")
            .append("<p>"+ num +"</p>");

            $(".easy .rightBox.multi .active .box")
            .append("<p>"+ num +"</p>");
            
        }
        else
        {
            $(".easy .rightBox.conti p:contains("+ num +")")
            .remove();

            $(".easy .rightBox.multi p:contains("+ num +")").closest("li")
            .addClass("active")
            .siblings().removeClass("active");

            $(".easy .rightBox.multi p:contains("+ num +")")
            .remove();
        }

        var boxP = $(".easy .rightBox.multi .box").has("p");
        if($(boxP).closest("li").is(".easy .rightBox.multi li:last-child"))
        {
            $(".easy .rightBox.multi ul")
            .append("<li><div class=title><p></p></div><div class=box></div></li>")

            var name;
            $(".easy .rightBox.multi li").each(function(){
                name = $(this).index() + 1;

                $(this).find(".title p")
                .text(""+ name +"柱");
            })
        }
    })

    //鍵盤輸入
    $(".easy .easyInput").keydown(function(e){
        if(e.which === 13)
        {
            var textVal = $(".easy .easyInput").val();
            var valString = textVal.toString();
            
            if(!$(".easy .rightBox.conti p:contains("+ (0 + valString) +")").length && textVal < 10)
            {
                $(".easy .rightBox.conti .num")
                .append("<p>"+ (0 + valString) +"</p>");

                $(".easy .rightBox.multi .active .box")
                .append("<p>"+ (0 + valString) +"</p>");
            }
            else if(!$(".easy .rightBox.conti p:contains("+ textVal +")").length)
            {
                $(".easy .rightBox.conti .num")
                .append("<p>"+ textVal +"</p>");

                $(".easy .rightBox.multi .active .box")
                .append("<p>"+ textVal +"</p>");
            }
            else if($(".easy .rightBox.conti p:contains("+ (0 + valString) +")").length)
            {
                $(".easy .rightBox.multi p:contains("+ (0 + valString) +")").closest("li")
                .addClass("active")
                .siblings().removeClass("active");
            }
            else {
                $(".easy .rightBox.multi p:contains("+ textVal +")").closest("li")
                .addClass("active")
                .siblings().removeClass("active");
            }

            $(".easy .easyInput")
            .val("");
        }
    })

    //轉換柱
    $(".easy .turnMode").click(function(){
        $(".easy .modeOff")
        .addClass("display");

        $(".easy .rightBox.multi")
        .addClass("display")
        .siblings().removeClass("display");

        $(".easy .rightBox.multi ul")
            .append("<li><div class=title><p></p></div><div class=box></div></li>")

        var name;
        $(".easy .rightBox.multi li").each(function(){
            name = $(this).index() + 1;

            $(this).find(".title p")
            .text(""+ name +"柱");
        })
    })
    $(document).on("click",".easy .rightBox.multi li",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })

    //柱名轉換
    var name;
    $(".easy .rightBox.multi li").each(function(){
        name = $(this).index() + 1;

        $(this).find(".title p")
        .text(""+ name +"柱");
    })

    //刪除柱
    $(".easy .modeOff").click(function(){
        $(".easy .rightBox.multi li:last-child")
        .remove();

        $(".easy .rightBox.multi li")
        .removeClass("active");

        if($(".easy .rightBox.multi li:last-child").is(".easy .rightBox.multi li:first-child") || !$(".easy .rightBox.multi ul").has("li"))
        {
            $(".easy .modeOff")
            .removeClass("display");

            $(".easy .rightBox.conti")
            .addClass("display")
            .siblings().removeClass("display");

            $(".easy .rightBox.multi li:first-child")
            .addClass("active");
        }

        var arr = [];
        var n = 0;

        $(".easy .rightBox.multi li:last-child .box p").each(function(){
            arr[n] = $(this).text();

            n ++;
        })

        arr.forEach(function(val,index,arr){
            var n = arr[index];

            $(".easy .leftBox span:contains("+ n +")").closest("label")
            .change();
        })
    })
})