$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu/navbar script
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i.active').toggleClass("active")
    });
});

//typing animation script
var typed = new Typed(".typing", {
 strings: ["Learning Experience Designer", "Project Manager", "Data Visualizer ", "Consultant"],
 typeSpeed: 30,
 backSpeed: 30, 
 loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Learning Experience Designer", "Freelancer Consultant", "Instructional Designer"],
    typeSpeed: 30,
    backSpeed: 50, 
    loop: true
   });