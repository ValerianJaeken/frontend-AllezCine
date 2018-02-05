
// $(document).ready(function(){
//   //header
// $("#header_title").text("latest" "" "" "" "")
// }
$(document).ready(function(){
  //header
//$("#header_title").text("latest" "" "" "" "");


// modal of contact us
var modal = $("contactForm");

$("#contact_us").click(function(){
$(".modal").css("display","block")
})

$(".send_button").click(function(){
$(".modal").css("display","none")
})




$(".footerUp").click(function(){
  $('html, body').animate({ scrollTop: 0 });
})

$(".cancer").click(function(){
  let title=$(this).attr("data-title");
  let date=$(this).attr("data-date");
  let genre=$(this).attr("data-genre");
  let trailer=$(this).attr("data-trailer");
  $(".movieCancer").html('<div class="cancerTrailer"><iframe width=auto height=250 src="' + trailer + '" frameborder="0" encrypted-media allowfullscreen></iframe></div>');
  // APPEND MAKES IT SO THE TEXT IS INCREMENTAL INSTEAD OF REPLACING THE FORMER HTML EVERYTIME IF YOU USE ANOTHER HTML TAG
  $(".movieCancer").append("<div class=cancerTitle>Title : " + title + "</div>");
  $(".movieCancer").append("<div class=cancerDate>Release date : "+ date +"</div>");
  $(".movieCancer").append("<div class=cancerGenre>Genre : "+ genre +"</div>");

})
