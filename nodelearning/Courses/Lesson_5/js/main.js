/** 
 * Demo 1
 */
$("#ele_p_demo1").click(
    function() {
        $(this).hide();
    }
);


/** 
 * Demo 2
 */
$(".colorDemo").hover(
    function() {
        $(this).attr("class", "colorChange");
    }
);


/** 
 * Demo 3
 */
$("#ele_btn_demo3").click(
    function() {
        let val = $("input[name=nameDemo]").val();
        alert(val);
    }
);

/** 
 * Demo 4
 */
$("#ele_btn_demo4").click(
    function() {
        $("a").each(
            function(index, element) {
                val = $(this).text();
                if (val == "A1") {
                    $(this).fadeOut(2000);
                }
            }
        )
    }
);

/** 
 * Demo 5
 */
$("#ele_btn_demo5").click(
    function() {
        let val = $("#ele_div_demo4 div ul li[attrDemo='attr1']").text();
        alert(val);
    }
);