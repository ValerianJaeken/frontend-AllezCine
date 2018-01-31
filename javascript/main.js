$(document).ready(function(){


// modal of contact us
var modal = $("contactForm");

$("#contact_us").click(function(){
$(".modal").css("display","block")
})

$(".send_button").click(function(){
$(".modal").css("display","none")
})


});