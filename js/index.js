$(document).ready(function () {

//    $("#include").fadeIn("slow");

      
    
    $("#about").click(function () {
       $("#include").fadeOut(1); $("#include").load("/include/about.html").fadeIn(500);
    });

    $("#fmf").click(function () {
        $("#include").fadeOut(1); 
        $("#include").load("/include/fmf.html").fadeIn(500);
    });

    $("#clickclean").click(function () {
        $("#include").fadeOut(1); 
        $("#include").load("/include/clickclean.html").fadeIn(500);
    });

    $("#pe3").click(function () {
        $("#include").fadeOut(1); 
        $("#include").load("/include/pe3.html").fadeIn(500);
    });

    $("#cv").click(function () {
        $("#include").fadeOut(1); 
        $("#include").load("/include/cv.html").fadeIn(500);
    });

    $("#resume").click(function () {
       $("#include").fadeOut(1); $("#include").load("/include/resume.html").fadeIn(500);
    });

    $("#seeingsound").click(function () {
        $("#include").fadeOut(1); 
        $("#include").load("/include/seeingsound.html").fadeIn(500);
    });

    $("#oraclear").click(function () {
        $("#include").fadeOut(1); 
        $("#include").load("/include/oraclear.html").fadeIn(500);
    });

    $('li > a').click(function () {
        $('li').removeClass();
        $(this).parent().addClass('is-active');
    });
    
});

$(window).on('resize', function () {
    location.reload();
});

