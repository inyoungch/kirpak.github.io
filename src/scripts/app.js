//const slider = require('./common/slider');
//const $ = require('jquery'); // если будет нужен

//slider(); // инициализируем слайдер

console.log("hello, world");

//preloader
$(window).on('load', function() {
  $('#preloader-logo').delay(1000).fadeOut();
  $('#preloader').delay(1000).fadeOut('slow'); 
  $('body').delay(1000).css({'overflow':'visible'});
});

//animated
$(document).ready(function() {
  $('.title').addClass('animated fadeInDown'); 
  $('.subtitle').addClass('animated fadeInDown'); 
  $('.btn').addClass('animated fadeInDown'); 
})
