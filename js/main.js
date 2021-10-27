$(function () {

    var link = $('#navbar a.dot');

    // Move to specific section when click on menu link
    link.on('click', function (e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target
                .offset()
                .top
        }, 800);
        $(this).addClass('active');
        e.preventDefault();
    });

    // Run the scrNav when scroll
    $(window).on('scroll', function () {
        scrNav();
    });

    // scrNav function Change active dot according to the active section in the
    // window
    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function () {
            var id = $(this).attr('id'),
                offset = $(this)
                    .offset()
                    .top - 1,
                height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                link.removeClass('active');
                $('#navbar')
                    .find('[data-scroll="' + id + '"]')
                    .addClass('active');
            }
        });
    }
    scrNav();
});
 

  /*수량버튼*/

  $(function(){
    $('#decreaseQuantity').click(function(e){
    e.preventDefault();
    var stat = $('#numberUpDown').text();
    var num = parseInt(stat,10);
    num--;
    if(num<=0){
    alert('더이상 줄일수 없습니다.');
    num =1;
    }
    $('#numberUpDown').text(num);
    });
    $('#increaseQuantity').click(function(e){
    e.preventDefault();
    var stat = $('#numberUpDown').text();
    var num = parseInt(stat,10);
    num++;
    
    if(num>10){
    alert('더이상 늘릴수 없습니다.');
    num=10;
    }
    $('#numberUpDown').text(num);
    });
    });