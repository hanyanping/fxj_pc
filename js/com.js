$(function(){
	var t;
	$('.hj_art').mouseenter(function(){
		t = $(this).html();
		$(this).html('即将到来');
		$(this).css('text-decoration','line-through');
	});
	$('.hj_art').mouseleave(function(){
		$(this).html(t);
		$(this).css('text-decoration','none');
	});

	$('.order').click(function(){
        $('.popup').addClass('popshow');
    });
    $('.mask').click(function(){
        $('.popup').removeClass('popshow');
    })
    $('.showmenu2').click(function(){
    	$('.menu2').addClass('fadeRight');
    })
	$('.close').click(function(){
    	$('.menu2').removeClass('fadeRight');
	});
})
