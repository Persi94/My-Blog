var arrowBtn = document.getElementById('arrow-to-top');

document.addEventListener('scroll',function(){
    if(pageYOffset > 300){
        arrowBtn.style.display = "block";
    }else{
        arrowBtn.style.display = "none";
    }
})
arrowBtn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}