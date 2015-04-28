$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    var onscreen = null,
        offsetFromTop;

    $('.fh-container').each(function () {
        var $this = $(this);
        if ($this.offset().top < wScroll && $this.offset().top + $this.height() > wScroll) {
            onscreen = this;
            offsetFromTop = $this.offset().top;
        }
    });

    if (onscreen) {
        var $header = $('.fh-header', onscreen);

        if ($header.length) {
            $header.css({
                'transform': 'translate(0px, ' + wScroll - offsetFromTop + 'px)'
            });

            console.log(wScroll - offsetFromTop);
        }
    }
});