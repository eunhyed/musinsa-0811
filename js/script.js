$(document).ready(function () {
    /*이미지 슬라이드 클릭시 1칸씩 이동*/
    $("#leftbtn").click(function () {
        $("#leftbtn").prop("disabled", true);
        $("#rolling").stop().animate({ left: 0 }, 100, function () {
            $("#rolling").prepend($("#rolling>:last-child"));
            $("#rolling").css("left", "-200px");
            $("#leftbtn").prop("disabled", false);
        });
    });

    $("#rightbtn").click(function () {
        $("#rightbtn").prop("disabled", true);
        $("#rolling").stop().animate({ left: "-400px" }, 100, function () {
            $("#rolling").append($("#rolling>:first-child"));
            $("#rolling").css("left", "-200px");
            $("#rightbtn").prop("disabled", false);
        });
    });

    /*검색창*/
    $('#searchbtn').hide();
    $('.sear').click(function () {
        $('#searchbtn').stop().slideDown();
    });

    $(".close").click(function () {
        $("#searchbtn").slideUp();
    });

    /*스크롤시 헤더 배경색 변경 fade-in, out*/
    $(function () {
        $(document).on('scroll', function () {
            if ($(window).scrollTop() > 300) {
                $("header").removeClass("deactive");
                $("header").addClass("active");
            } else {
                $("header").removeClass("active");
                $("header").addClass("deactive");
            }
        })
    });

    /*스크롤 표시기*/
    window.onscroll = function () { myFunction() };
    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    };

    /*버튼 클릭시 페이지 변경*/
    $("#weekly2, #weekly3, #weekly4").hide();
    $("#tab1").click(function () {
        $(this).addClass("active1").siblings().removeClass("active1");
        $("#weekly1").show();
        $("#weekly2, #weekly3, #weekly4").hide();
    });

    $("#tab2").click(function () {
        $(this).addClass("active1").siblings().removeClass("active1");
        $("#weekly2").show();
        $("#weekly1, #weekly3, #weekly4").hide();
    });

    $("#tab3").click(function () {
        $(this).addClass("active1").siblings().removeClass("active1");
        $("#weekly3").show();
        $("#weekly1, #weekly2, #weekly4").hide();
    });

    $("#tab4").click(function () {
        $(this).addClass("active1").siblings().removeClass("active1");
        $("#weekly4").show();
        $("#weekly1, #weekly3, #weekly2").hide();
    });

});///////////////////////////////////////////////////전체 끝