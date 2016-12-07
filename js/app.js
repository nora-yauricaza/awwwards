$(".menu-bar").on("click",function(){
	$(".contenido").toggleClass("abrir");
});

$(".salir").on("click",function(){
    $(".contenido").toggleClass("abrir");
});

$(document).ready(function(){
    var image = '<img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/4465/56bb011eb3ac7.jpg">';
    $('#popover').popover({placement: 'bottom', content: image, html: true});
});

$(document).ready(function(){
    var image = '<img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/58562/509ac57f3bd15.png">';
    $('#popover2').popover({placement: 'bottom', content: image, html: true});
});

$(document).ready(function(){
    var image = '<img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/default/user5.jpg">';
    $('#popover3').popover({placement: 'bottom', content: image, html: true});
});

$(document).ready(function(){
    var image = '<img src="https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/84035/583e9a6a3b848.jpeg">';
    $('#popover4').popover({placement: 'bottom', content: image, html: true});
});

function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }

    var colors = [
    ['#FCE6A4', '#EFB917'], ['#BEE3F7', '#45AEEA'], ['#F8F9B6', '#D2D558'], ['#F4BCBF', '#D43A43']
    ], circles = [];

    for (var i = 1; i <= 4; i++) {
        var child = document.getElementById('circles-' + i),
        percentage = 67.40 + (i * 2.84);

        circles.push(Circles.create({
        id:         child.id,
        value:    percentage,
        radius:     60,
        width:      10,
        colors:     colors[i - 1]
      }));
    }  

