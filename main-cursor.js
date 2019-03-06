$(document)
  .mousemove(function(cursor) {
    $('.cursor')
      .eq(0)
      .css({
        left: cursor.pageX,
        top: cursor.pageY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: cursor.pageX,
          top: cursor.pageY
        });
    }, 100);
  })