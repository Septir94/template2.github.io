// jumbotron
$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    // jumbotron
    $('.header').css({
        'transform': 'translate(0px,'+wScroll/2.5+'%)'
    });

    // info
    if(wScroll > $('.infopanel').offset().top-250) {
        $('.infopanel img').each(function(i) {
            setTimeout(function(){
                $('.infopanel img').eq(i).addClass('muncul');
            },400 * (i+1) );
        });

        //
    }

});