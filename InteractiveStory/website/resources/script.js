$(document).ready(function () {
    $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': .6 - scrolled / 400 // fade out at 400px from top
        });
        
        $('#video-background').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });
    
});

var highlight = new Waypoint({
  element: document.getElementById('title'),
  handler: function() {
       $("#test").addClass("anim");
  },
    offset: "35%"
});

var highlight1 = new Waypoint({
  element: document.getElementById('fullscreen1'),
  handler: function() {
       $("#quote1").toggleClass("anim");
  }
});

var highlight2 = new Waypoint({
  element: document.getElementById('fullscreen2'),
  handler: function() {
       $("#quote2").toggleClass("anim");
      $("#quote3").toggleClass("anim");
//      $("#yellow").toggleClass("anim");
//      $("#pink").toggleClass("anim");
  }
});

var highlightparagraphs = new Waypoint({
  element: document.getElementById('p1'),
  handler: function() {
       $("#line1").toggleClass("anim");
      $("#line2").toggleClass("anim");
  },
    offset: "10%"
});

var highlightparagraphs2 = new Waypoint({
  element: document.getElementById('p2'),
  handler: function() {
       $("#line3").toggleClass("anim");
      $("#line4").toggleClass("anim");
  },
    offset: "10%"
});

var highlightparagraphs3 = new Waypoint({
  element: document.getElementById('p3'),
  handler: function() {
       $("#line5").toggleClass("anim");
  },
    offset: "10%"
});

var highlightparagraphs4 = new Waypoint({
  element: document.getElementById('p4'),
  handler: function() {
       $("#line6").toggleClass("anim");
      $("#line7").toggleClass("anim");
  },
    offset: "10%"
});

var highlightparagraphs5 = new Waypoint({
  element: document.getElementById('p5'),
  handler: function() {
       $("#line8").toggleClass("anim");
  },
    offset: "10%"
});

var highlightparagraphs6 = new Waypoint({
  element: document.getElementById('p7'),
  handler: function() {
       $("#line9").toggleClass("anim");
      $("#line10").toggleClass("anim");
      $("#line11").toggleClass("anim");
      $("#line12").toggleClass("anim");
  },
    offset: "10%"
});

var highlightparagraphs7 = new Waypoint({
  element: document.getElementById('p9'),
  handler: function() {
      $("#line15").toggleClass("anim");
      $("#line16").toggleClass("anim");
  },
    offset: "10%"
});

var highlightparagraphs7 = new Waypoint({
  element: document.getElementById('p10'),
  handler: function() {
       $("#line17").toggleClass("anim");
      $("#line18").toggleClass("anim");
  },
    offset: "10%"
});

var highlightparagraphs7 = new Waypoint({
  element: document.getElementById('p11'),
  handler: function() {
       $("#line19").toggleClass("anim");
      $("#line20").toggleClass("anim");
  },
    offset: "10%"
});

var highlightparagraphs7 = new Waypoint({
  element: document.getElementById('p8'),
  handler: function() {
       $("#line13").toggleClass("anim");
      $("#line14").toggleClass("anim");
  },
    offset: "10%"
});


