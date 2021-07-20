$(function() {
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        var blockId= $(this).data('scroll'),
        blockOffset= $(blockId).offset().top;
        console.log(blockOffset);
        $("html, body").animate({
            scrollTop:blockOffset
        }, 500);
    });
});