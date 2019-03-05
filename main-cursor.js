$(document)
  .mousemove(function(c) {
    $('.cursor')
      .eq(0)
      .css({
        left: c.pageX,
        top: c.pageY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: c.pageX,
          top: c.pageY
        });
    }, 100);
  })