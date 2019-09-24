// var display = document.getElementById('num-display');
// var numArray = [];

// var add = function addition(){
//     var n = parseFloat(a) + parseFloat(b);
//     return n;
// }
// var sub = function substraction(){
//     var n = parseFloat(a) - parseFloat(b);
//     return n;
// }
// var mult = function multiplication(){
//     var n = parseFloat(a) * parseFloat(b);
//     return n;
// }
// var div = function division(){
//     var n = parseFloat(a) / parseFloat(b);
//     return n;
// }

// function result(){
//     return
// }

// function clear(){

// }
var numArea = document.getElementById('num-display');
var numBtn = document.getElementsByTagName('td');
var btnClick = this.innerHTML;

for(var i=0; i<numBtn.length; i++){
    numBtn[i].onclick = function(e){
        if(btnClick === 'C'){
            numArea.innerHTML = '0';
        }else if(btnClick === '='){
            numArea.innerHTML = eval(numArea);
        }else{
            numArea.innerHTML += btnClick; 
        }
        e.preventDefault();
    }
}