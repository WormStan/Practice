$(document).ready(
    function(){
        $("#ele_btn_calc").click(
            function(){
                let val1 = parseInt($("#ele_input_val1").val());
                let val2 = parseInt($("#ele_input_val2").val());
                let calcMethod = $(".ele_select_calc").val();
                let result;
                switch(calcMethod){
                    case "add":
                        result = val1+val2;
                        break;
                    case "sub":
                        result = val1-val2;
                        break;
                    case "mul":
                        result = val1*val2;
                        break;
                    case "div":
                        if(val2 == '0')
                        {
                            alert("error!");
                        }
                        result = val1/val2;
                        break;
                }
                $(".ele_span_result").text(result);
            }
        );
    }
);