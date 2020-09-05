$(".main-container").mousemove(function(e) {
  parallaxIt(e, ".name-container", -80);
  parallaxIt(e, ".mt-container", -30);
});

function parallaxIt(e, target, movement) {
  let $this = $("#container");
  let relX = e.pageX - $this.offset().left;
  let relY = e.pageY - $this.offset().top;

  // console.log(e.pageX, e.pageY, $this.offset().left, $this.offset().top);

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
