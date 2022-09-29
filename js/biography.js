$(function () {
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    }, 3000)
  })
})

$(function () {
  var video = $("video").get(0);
  console.log(video)
  $(".music").on("click",function(){
   if(video.muted){
    video.muted = false;
   }else{
    video.muted = true;
   }
  });
 });
// $(function() {
//   $("#start").hover(function () {
//    $('.bg2').fadeTo(200,0).on('mouseenter mouseleave',function( ev ){
//      ev=ev.type==='mouseenter' ? $(this).stop().fadeTo(200,1) : $(this).stop().fadeTo(200,0); 
//    })
//  ,(function () {
//  // $('.bg1').fadeTo(200,0).on('mouseleave',function(){
//  //   $(this).stop().fadeTo(200,0)}); 
//  // }, function() {
//  $('.bg2').fadeTo(200,0).on('mouseenter mouseleave',function( ev ){
//  ev=ev.type==='mouseleave' ? $(this).stop().fadeTo(200,0) : $(this).stop().fadeTo(200,1); 
//  })
//    // }, function() {
//  //   $('.bg').fadeTo(200,0).on('mouseenter mouseleave',function( ev ){
//  //     ev=ev.type==='mouseenter' ? $(".bg").stop().fadeTo(200,1) : $(".bg").stop().fadeTo(200,0); 
//  //   })
//      })
//  });
// })
// // const start = document.querySelector('#start');
// $(function () {
//   $("#demo").hover(function () {
//   console.log('hover')
//   // $('.bg1').fadeTo(200,1).on('mouseenter',function(){
//   //   $(this).stop().fadeTo(200,1);
//   // })
//   $('.bg1').fadeTo(200,0).on('mouseenter mouseleave',function( ev ){
//         ev=ev.type==='mouseenter' ? $(this).stop().fadeTo(200,1) : $(this).stop().fadeTo(200,0); 
//       }),(function () {
//     // $('.bg1').fadeTo(200,0).on('mouseleave',function(){
//     //   $(this).stop().fadeTo(200,0)}); 
//   // }, function() {
//   $('.bg1').fadeTo(200,0).on('mouseenter mouseleave',function( ev ){
//     ev=ev.type ==='mouseleave' ? $(this).stop().fadeTo(200,0) : $(this).stop().fadeTo(200,1); 
//   })
//     })
// });
// })

