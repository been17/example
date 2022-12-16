//menu down
$(function(){//document.ready
  $(".gnb > li").mouseover(function(){
    $(this).find(".sub").stop().slideDown("slow");
  });

  $(".gnb > li").mouseout(function(){
      $(this).find(".sub").stop().slideUp("slow");
    });

    //input 값 전송
    function printName(){
      const number = document.getElementById('number').value;
      document.getElementById("result").innerText = number;
    }
  })