
$(document).ready(function()
{
   $("span").click(function(){
       $(".bye").show("fast",function(){$("span").hide()});
   });
     $(".bye").click(function(){
       $(".bye").hide("fast",function(){$("span").show()});
   });
});