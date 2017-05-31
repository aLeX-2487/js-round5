/**
 * Created by aLeX on 2017/5/27.
 */

$(document).ready(function() {
    $("button").click(function () {
        var name = $("input[name='id']").val();
        var password = $("input[name='password']").val();
        $.ajax({
            type: "post",  //默认是get，这里任务要求是post
            url: "http://119.10.57.69:880/carrots-admin-ajax/a/login",  //发送请求的地址
            data: {"name": name, "pwd": password},  //是一个对象，连同请求发送到服务器的数据
            dataType: "json",  //一般采用json
            success: function (data) {  //方法，请求成功后的回调函数
                $(".tip").text(data.message);
            }
        })
    })
})


