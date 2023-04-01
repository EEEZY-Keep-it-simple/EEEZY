$(window).on("load", function() {
  $('.header-slogan h2').each(function(){
    var text = $(this).text();
    $(this).empty();
    var len = text.length;
    for(var i=0; i<len; i++){
      $(this).append('<span>'+text.charAt(i)+'</span>');
    }
  });
  var delay = 0;
  $('.header-slogan h2 span').each(function(){
    $(this).delay(delay).animate({opacity:1}, 200);
    delay += 60;
  });
});
