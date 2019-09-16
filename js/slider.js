var slideChilds = document.getElementById('slide-show').children;
var dotsChilds = document.getElementById('slide-dots').children;

var i = 0;
setInterval(function(){
    slideChilds[i].classList.add('hide-slide');
    i = (i+1)%slideChilds.length;
    slideChilds[i].classList.remove('hide-slide');
},5000)