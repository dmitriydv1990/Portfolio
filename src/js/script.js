new WOW().init();


/* функция плавной прокрутки при нажатии на ссылки в меню и стрелки вверх */

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

/* функция стрелки вверх */

$(window).scroll(function() {
	if ($(this).scrollTop() > 250) {
		$('.arrow-up').fadeIn();
	} else {
		$('.arrow-up').fadeOut();
	}

});