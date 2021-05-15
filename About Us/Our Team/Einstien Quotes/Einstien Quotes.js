var current = 0,
    max = $(".slider > .slide").length;
$(".slider > .slide:gt(0)").hide();
$(".counter").text("1 of " + max);

setInterval(function() {
    $(".slider > .slide:first")
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo(".slider");
    current++;
    if (current >= max) current = 0;
    $(".progress").width(((current + 1) * 315) / max);
    $(".counter").text(current + 1 + " of " + max);
}, 3000);