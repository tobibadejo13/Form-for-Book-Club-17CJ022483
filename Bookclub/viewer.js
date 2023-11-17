const browser = $(window)
browser.ready(function (){
    $('#hello').click(fuction(){
        $('#clickme').css('background', 'red')
    })
    $('#clickme').toggle('4000')
})