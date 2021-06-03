$ (document).ready(function(){
  $(".nav_ico").click(function(event){

    $(".hamburger-menu").toggleClass("active")
  });
    $(".hamburger-menu").click(function(event){
      $(this).removeClass("active");
    })
})
