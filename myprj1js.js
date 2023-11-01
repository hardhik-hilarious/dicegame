var n=Math.random();
n=n*6;
n=Math.floor(n)+1;
var m=Math.random();
m=m*6;
m=Math.floor(m)+1;
var img1="d"+n+".png";
var img2="d"+m+".png";
document.getElementById("image1").setAttribute("src",img1);
document.getElementById("image2").setAttribute("src",img2);
if(n>m){
    document.getElementById("winmsg").textContent="PLAYER1 WINS. RELOAD to Play again!!";
}else if(m>n){
    document.getElementById("winmsg").textContent="PLAYER2 WINS. RELOAD to Play again!!";
}
else if(n==m){
    document.getElementById("winmsg").textContent="IT'S A TIE :) ...RELOAD to Play again!!";
}