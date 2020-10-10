

//how to add settime out to JQuery
$("h1").addClass("big-title margin-50")

// setTimeout(function(){
//     $("h1").removeClass("big-title")
// }, 1500);



$("button").on("click", function(){
    $("h1").toggle();
});
// $("button").on("click", function(){
//     $("h1").fadeOut();
// });
// $("button").on("click", function(){
//     $("h1").slideToggle();
// });
// $("button").on("click", function(){
//     $("h1").slideIn();
// });

//animinate must be a numerical value
$("button").on("click", function(){
    $("h1").animate({opacity: 0.5});
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");