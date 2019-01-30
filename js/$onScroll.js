$(document).ready(() => {

  let a = 0;
  let b = 0;

  $(window).scroll(() => {

    const oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
        let $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
      a = 1;
    }
    const o2Top = $('#share').offset().top - window.innerHeight;
    if (b == 0 && $(window).scrollTop() > o2Top) {
      $('.counter-value').each(function () {
        let $this = $(this),
          countTo = $this.attr('data-counter');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
      b = 1;
    }
  });
});