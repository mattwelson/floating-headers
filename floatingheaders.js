$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    var offsetFromTop,
        $header;

    $('.fh-container').each(function () {
        $header = $('.fh-header', this);
        var $this = $(this),
            thisTop = $this.offset().top,
            thisHeight = $this.outerHeight(true),
            headerHeight = $header.outerHeight(true);
        if (thisTop < wScroll){
            if ((thisTop + thisHeight - headerHeight) > wScroll) {
                offsetFromTop = $this.offset().top;
                $header.css({
                    'transform': 'translate(0px, ' + (wScroll - offsetFromTop) + 'px)'
                });
            } else if (thisTop + thisHeight > wScroll) {
                $header.css({
                    'transform': 'translate(0px, ' + (thisHeight - headerHeight) + 'px)'
                });
            } else {
                $header.css({
                    'transform': 'translate(0px, 0px)'
                });
            }
        } else {
            $header.css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });
});