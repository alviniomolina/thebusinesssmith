// Scroll To Element Smothy with Vanilla JavaScript
$('body').on('click','a[href^="#"]',function(event){
event.preventDefault();
var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
//change this number to create the additional off set        
var customoffset = 200
$('html, body').animate({scrollTop:target_offset - customoffset}, 1000);
});