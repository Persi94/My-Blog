document.addEventListener('DOMContentLoaded', function(){
    var yellowBall = document.getElementById('yellow-ball');
    yellowBall.setAttribute('class','grow-small-x70');

    var redBall = document.getElementById('red-ball');
    redBall.setAttribute('class','grow-medium-x120');

    var userBall = document.getElementById('user-ball');
    userBall.setAttribute('class','grow-large-x200');

    var blueBall = document.getElementById('blue-ball');
    blueBall.setAttribute('class','grow-medium-x120');

    var greenBall = document.getElementById('green-ball');
    greenBall.setAttribute('class','grow-small-x70');
});

document.addEventListener('scroll',function(){
    if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        document.getElementById('navbar-menu').removeAttribute('class','navbar-no-changed');
        document.getElementById('navbar-menu').setAttribute('class','navbar-change-on-scroll');
        document.getElementById('home-button').setAttribute('class','navbar-home-button-change-on-scroll');
    }
    else{
        document.getElementById('navbar-menu').removeAttribute('class','navbar-change-on-scroll');
        document.getElementById('home-button').removeAttribute('class','navbar-home-button-change-on-scroll');
        document.getElementById('navbar-menu').setAttribute('class','navbar-no-changed');
    }
});

// window.onload = function(){
//     var yellowBall = document.getElementById('yellow-ball');
//     yellowBall.setAttribute('class','grow-small-x70');

//     var redBall = document.getElementById('red-ball');
//     redBall.setAttribute('class','grow-medium-x120');

//     var userBall = document.getElementById('user-ball');
//     userBall.setAttribute('class','grow-large-x200');

//     var blueBall = document.getElementById('blue-ball');
//     blueBall.setAttribute('class','grow-medium-x120');

//     var greenBall = document.getElementById('green-ball');
//     greenBall.setAttribute('class','grow-small-x70');
// }