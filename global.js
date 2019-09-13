var slideChilds = document.getElementById('slide-show').children;
var i = 0;
setInterval(function(){
    if(i < slideChilds.length){
        slideChilds[i].classList.add('hide-slide');
        slideChilds[i+1].classList.remove('hide-slide');
    }
    i++;
},2000)