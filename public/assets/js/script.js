$(document).ready(function(){
    // $(window).scroll(function(){
    //     100<=$(this).scrollTop()?$("#navBar").addClass("noTransparrent"):$("#navBar").removeClass("noTransparrent")
    // }),
    // $("a.scroll").on('click', function(event){
    //     if(""!==this.hash){
    //     event.preventDefault();
    //     var hash = this.hash;
    //     $('html, body').animate({scrollTop: $(hash).offset().top},1400,function(){});    
    //     }
    // });

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         document.getElementById("navBar").style.transform = "translateY(0)";
    //     } else {
    //         document.getElementById("navBar").style.transform = "translateY(-100%)";
    //     }
    //     prevScrollpos = currentScrollPos;
    // }

    new WOW().init();

    // $(".navbar-nav li a").click(function(){
    //     $(".navbar-collapse").collapse("hide")
    // }),

    $(".project").hover(function(){
        $(this).find(".project-overlay").slideToggle(),
        $(this).find(".category").slideToggle()
    });

});