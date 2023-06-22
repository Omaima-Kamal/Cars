/*global $, document , window */
$(document).ready(function () {
    
    $(".gear-check").click(function ()
    {
        $(".color-option").fadeToggle();
       
   });
    
       var colorLi=$(".color-option ul li");
   
    colorLi
    .eq(0).css("backgroundColor","#F00").end()
    .eq(1).css("backgroundColor","darkmagenta").end()
    .eq(2).css("backgroundColor","#009AFF").end()
    .eq(3).css("backgroundColor","#FFD500").end()
    .eq(4).css("backgroundColor","#008000"); 
    
        colorLi.click(function ()
        {
            $("link[href*='col']").attr("href",$(this).attr("data-value"));
            $("link[href*='color']").attr("href",$(this).attr("data-value"));
        });
       
    "use strict";
    var scrollButton = $("#scroll_top");

     $(window).scroll(function () {
         
     $(this).scrollTop() >= 500 ? scrollButton.show() : scrollButton.hide();
    });
    
     scrollButton.click(function ()
        {
            $("html,body").animate({scrollTop : 0},600);
        });
    });
