$(function() {
    $(window).resize(function (){
        $('.block').width($('.block').height());
    });
    $('.block').width($('.block').height());

    $(window).resize(function (){
        var $width = $('.block').width();
        $('.before-block').width($width);
        $('.after-block').width($width);
    });
    var $width = $('.block').width();
    $('.before-block').width($width);
    $('.after-block').width($width);


    var $kube = $("#kube");
    $(".block").click(function(){

        if ($("#kube").hasClass("scale_small")) {
            $kube.removeClass("scale_small").addClass("scale1");
        } else if ($("#kube").hasClass("scale1")) {
            $kube.removeClass("scale1").addClass("scale_small");
        }


    });



    var $rightblock = $("#test1");
    $("#test1").fadeOut(1);
    $(".block").click(function(){
        if ($("#test1").hasClass("dis-none")) {
            $rightblock.removeClass("dis-none");
            $("#test1").fadeOut(400);
        } else {
            $rightblock.addClass("dis-none");
            $("#test1").delay(2000).fadeIn(1000);
        }

    });
    var $leftblock = $("#test2");
    $("#test2").fadeOut(1);
    $(".block").click(function(){
        if ($("#test2").hasClass("dis-none")) {
            $leftblock.removeClass("dis-none");
            $("#test2").fadeOut(400);
        } else {
            $leftblock.addClass("dis-none");
            $("#test2").delay(2000).fadeIn(1000);
        }

    });
    var $topbox = $('#before-block');
    $("#before-block").fadeOut(1);
    $(".block").click(function(){
        if ($("#before-block").hasClass("dis-none")) {
            $topbox.removeClass("dis-none");
            $("#before-block").fadeOut(400);
        } else {
            $topbox.addClass("dis-none");
            $("#before-block").delay(2000).fadeIn(700);
        }

    });
    var $botbox = $('#after-block');
    $("#after-block").fadeOut(1);
    $(".block").click(function(){
        if ($("#after-block").hasClass("dis-none")) {
            $botbox.removeClass("dis-none");
            $("#after-block").fadeOut(400);
        } else {
            $botbox.addClass("dis-none");
            $("#after-block").delay(2000).fadeIn(700);
        }

    });

    $(function(){
        $('.tab-nav li:first').addClass('select');                // Первой вкладке добавляетсякласс select
        $('.tab-panels>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
        $('.tab-nav a').click(function(){                         // При клике на вкладку
            $('.tab-panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
            $('.tab-nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
            $(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
            return (false);                                         // - прерывается обработка события onClick
        })
    })
});
