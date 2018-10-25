$(document).ready(function () {
    $("#include").load("/include/about.html"); 

    $("#about").click(function(){
        $("#include").load("/include/about.html"); 
    });

    $("#fmf").click(function(){
        $("#include").load("/include/fmf.html"); 
    });

    $("#clickclean").click(function(){
        $("#include").load("/include/clickclean.html"); 
    });

    $("#pe3").click(function(){
        $("#include").load("/include/pe3.html"); 
    });

    $("#cv").click(function(){
        $("#include").load("/include/cv.html"); 
    });

    $("#resume").click(function(){
        $("#include").load("/include/resume.html"); 
    });

    $("#seeingsound").click(function(){
        $("#include").load("/include/seeingsound.html"); 
    });

    $("#oraclear").click(function(){
        $("#include").load("/include/oraclear.html"); 
    });


});
//
//$(window).bind('resize', function(e)
//{
//  if (window.RT) clearTimeout(window.RT);
//  window.RT = setTimeout(function()
//  {
//    this.location.reload(false); /* false to get page from cache */
//  }, 200);
//});