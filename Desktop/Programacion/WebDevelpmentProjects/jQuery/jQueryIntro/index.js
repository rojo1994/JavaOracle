// $("button").click(function(){
//     $("h1").css("color", "purple");
// });

// $("input").keydown(function(){
//     console.log(event.key);
// });


// $("body").keydown(function(){
//     console.log(event.key);
// });


// $(document).keydown(function(){
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function (){
//     $("h1").css("color", "purple");
// });

// $("h1").on("mouseover", function (){
//     $("h1").hide();
// });


// $("button").on("click", function (){
//     $("h1").toggle();
// });


// $("button").on("click", function (){
//     $("h1").fadeOut(); 
// });

// $("button").on("click", function (){
//     $("h1").fadeToggle(); 
// });

// $("button").on("click", function (){
//     $("h1").slideUp(); 
// });


// $("button").on("click", function (){
//     $("h1").slideToggle(); 
// });


// $("button").on("click", function (){
//     $("h1").animate({opacity: 0.5}); 
// });


$("button").on("click", function (){
    $("h1").slideUp().slideDown().animate({opacity: 0.5}); 
});
