$(function() {
    $(document).on('keydown', function(e) {
        let key = e.keyCode;
        $('.drum').each(function(index, ele) {
            if (key == $(ele).attr('data-keycode')) {
                $(this).addClass('playing');
                let timer = setTimeout(() => {
                    $(this).removeClass('playing')
                    console.log(1);
                }, 300)
            }
        })

    })
})