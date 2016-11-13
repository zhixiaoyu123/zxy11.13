$(function () {
    var ul=$("ul",$("con_right")[0])[0];
    var ccc=$(".ccc")[0];
    $("li",ccc).click(function () {
        a=$(this).index()
      $(".con_left_b").eq(a).removeClass("none").addClass("active").siblings(".con_left_b").addClass("none");
    })

   

   
})