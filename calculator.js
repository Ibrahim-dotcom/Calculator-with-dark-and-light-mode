function changeTheme(){
    document.getElementById("mode").style.backgroundColor="rgba(245,245,245,1)";
    document.getElementById("expression").style.color="black";
    let backGround=getComputedStyle(document.querySelector("body")).getPropertyValue("background-color");
    if(backGround=="rgb(0, 0, 0)"){
        document.getElementsByTagName("i")[0].style.color="white";
        document.getElementsByTagName("body")[0].style.backgroundColor="white";
        let keys=document.getElementsByTagName("span");
for(let i=0;i<keys.length;i++){
  keys[i].style.backgroundColor="rgba(245,245,245,1)";
  keys[i].style.color=="cyan"?keys[i].style.color="green":"";
keys[i].style.color==""?keys[i].style.color="black":"";
}
document.getElementById("buttons").style.backgroundColor="white";

}
else{
    document.getElementsByTagName("i")[1].style.color="white";
       document.getElementById("mode").style.backgroundColor="rgba(60,60,70,0.7)";
    document.getElementById("expression").style.color="white";
    document.getElementsByTagName("body")[0].style.backgroundColor="black";
  keys=document.getElementsByTagName("span");
for(let i=0;i<keys.length;i++){
  keys[i].style.backgroundColor="black";
  keys[i].style.color=="black"?keys[i]. style.color="":"";
  keys[i].style.color=="green"?keys[i].style.color="cyan":"";
}
document.getElementById("buttons").style.backgroundColor="rgba(60, 60, 70, 0.7)";
}
   
}
function showChar(value){
    let expressions=document.getElementById("expression");
   let onScreen=expressions.innerHTML;
   let operators=["x","÷","-","%","+"];
   let last=onScreen.slice(onScreen.length-1);
   if(onScreen==false &&last !="0"){
       operators.includes(value)&&value!="-"?" ": expressions.innerHTML+=value;
   }
  else if(value=="."){
      operators.includes(last)? expressions.innerHTML+="0":" ";
      let indexLast=0;
      let  lastOperator;
       for(let i=0;i<operators.length;i++){
           let currentIndex=expressions.innerHTML.lastIndexOf(operators[i]);
           if(currentIndex>indexLast){
               indexLast=currentIndex;
               lastOperator=operators[i];
           }
       }
      let pattern=/\.+/g;
      pattern.lastIndex=indexLast;
      pattern.exec(expressions.innerHTML)==null? expressions.innerHTML+=".":" ";
   }
   else if(operators.includes(last)
){
       operators.includes(value)?aclear():"";
       expressions.innerHTML+=value;
   }
   else{
       expressions.innerHTML+=value;
   }
}

function aclear(){
    let shownString=document.getElementById("expression").innerHTML;
    document.getElementById("expression").innerHTML=shownString.slice(0,shownString.length-1);
}
function clearAll(){
    document.getElementById("expression").innerHTML="";
}
function calculate (){
  let properExpression=document.getElementById("expression").innerHTML.replace(/÷/g,"/");
  properExpression.replace(/%/g,"x0.01");
  properExpression=properExpression.replace(/x/g,"*");
  let match=/\b0+([1-9]+[0-9]*)\b/g;
 let answer=eval(properExpression.replace(match,"$1"));
 document.getElementById("expression").innerHTML=answer;
}
