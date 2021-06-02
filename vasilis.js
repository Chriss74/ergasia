

function submitCheck(){ 
var x1 = document.getElementById('sspan1')
var x2=document.getElementById('sspan2')
var x3=document.getElementById('sspan3')
var arrspan=[x1, x2, x3];
var y1=document.querySelector('.check:checked') !== null
var y2=document.querySelector('.radio:checked') !== null
var y3=document.getElementById("myselection").value
var arr=[y1,y2,y3]
clean(arrspan)
console.log(arr)
return checkValid(arr, arrspan);
}

function checkValid(arr, arrspan){
console.log("start")
let fin=true;
let bool=true;   
for (i=0;i<3;i++){
bool=false;
if (arr[i]){
bool=true;
console.log("yes "+i)
}
if (bool==false){
arrspan[i].innerHTML="Υποχρεωτικό πεδίο"
fin=false;
}		
}
console.log(fin)
return fin;
}

function clean(arrspan){
    arrspan.forEach(element => {element.innerHTML=""    
    });
}