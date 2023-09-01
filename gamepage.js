var y=Math.floor(Math.random()*10+1);
playername=localStorage.getItem("player_name");
var guess=1;
function submit(){
var x=document.getElementById("guessField").value;
if(x==y){
alert("parabeis"+playername+",voce acertou em "+guess+" tentativa(s)");
guess=1;    
} else if(x>y){
guess++;
alert("opa,resposta erada!!!! tente um número menor");    
} else{
    guess++;
    alert("opa,resposta erada!!!! tente um número maior");   
}    
}
function playAgain(){
    y=Math.floor(Math.random()*10+1);
}