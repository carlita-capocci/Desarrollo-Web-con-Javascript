$(document).ready(function(){

    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    };

  
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    $(".subir").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop : 0
        },500); 
    });


    var contacto= $("#enviar").click(function(){
            alert("Gracias por la consulta!");
        });


        
});