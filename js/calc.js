var display = document.getElementById('num-display');
var buttons = document.getElementsByTagName('td');
var signs = ['+','-','*','/','C','='];

for(var i=0; i<buttons.length; i++){
    if(buttons[i].innerHTML === signs[4]){
        buttons[i].onclick = function(){
            display.innerHTML = '0';
        }
    }else if(buttons[i].innerHTML === signs[5]){
        buttons[i].onclick = function(){
            if(display.innerHTML.includes(signs[0])){
                var numString = display.innerHTML.split(signs[0]);
                var result = parseFloat(numString[0]) + parseFloat(numString[1]);
            }
            if(display.innerHTML.includes(signs[1])){
                var numString = display.innerHTML.split(signs[1]);
                var result = parseFloat(numString[0]) - parseFloat(numString[1]);
            }
            if(display.innerHTML.includes(signs[2])){
                var numString = display.innerHTML.split(signs[2]);
                var result = parseFloat(numString[0]) * parseFloat(numString[1]);
            }
            if(display.innerHTML.includes(signs[3])){
                var numString = display.innerHTML.split(signs[3]);
                var result = parseFloat(numString[0]) / parseFloat(numString[1]);
            }
            display.innerHTML = result;
        }
    }else{
        buttons[i].onclick = function(){
            if(display.innerHTML === '0'){
                display.innerHTML = this.innerHTML;
            }else{
                display.innerHTML += this.innerHTML;
            }
        }
    }
}