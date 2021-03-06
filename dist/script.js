$(document).ready(function () {
pageSize = 2; //Change the value if you want

    $(function () {
        var pageCount = $(".comment-row").length / pageSize;

        for (var i = 0; i < pageCount; i++) {
            if (i == 0) {
                $(".pagination").append('<li class="page-item active"><a class="page-link" href="javascript:void(0)">' + (i + 1) +
                    "</a></li>"
                );
                $(".pre").addClass("pag-disable"); // For adding Arrow disable on load
            } else {
                $(".pagination").append('<li class="page-item"><a class="page-link" href="javascript:void(0)">' + (i + 1) +
                    "</a></li>"
                );
            }
        }

        showPage(1);

        $(".pagination li").click(function () {
            $(".pagination li").removeClass("active");
            $(".pre").removeClass("pag-disable"); // For Removing Arrow disable
            $(this).addClass("active");
            showPage(parseInt($(this).text()));
        });
    });

    showPage = function (page) {
        $(".comment-row").addClass("pag-dis");

        $(".comment-row").each(function (n) {
            if (n >= pageSize * (page - 1) && n < pageSize * page)
                $(this).removeClass("pag-dis");
        });
    };

    //Pagniation previous and next buttons

    $(".nex").click(function () {
        if ($(".pagination li").next().length != 0) {
            $(".page-item.active").next().addClass("active").prev().removeClass("active");
            $(".page-item.active a").trigger("click");
        } else {
            $(".pagination li").removeClass("active");
            $(".pagination li:first").addClass("active");
        }
        return false;
    });

    $(".pre").click(function () {
        if ($(".pagination li").prev().length != 0) {
            $(".page-item.active").prev().addClass("active").next().removeClass("active");
            $(".page-item.active a").trigger("click");
        } else {
            $(".pagination li").removeClass("active");
            $(".pagination li:last").addClass("active");
        }
        return false;
    });

    $(".page-item a").click(function () {
        //Pagniation previous and next buttons disable Condition
        if ($(".page-item.active").is(":last-child")) {
            $(".pre").removeClass("pag-disable");
            $(".nex").addClass("pag-disable");
        } else if ($(".page-item.active").is(":first-child")) {
            $(".nex").removeClass("pag-disable");
            $(".pre").addClass("pag-disable");
        } else {
            $(".pre").removeClass("pag-disable");
            $(".nex").removeClass("pag-disable");
        }
    });
   });

    // ==============================================================
    //
    // ==============================================================