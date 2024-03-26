var openingAnimObj=document.getElementById("introd");
var oaoTitle=document.getElementById("introdtitle");
var oaoText=document.getElementsByClassName("introdparag");
var oaoPld=Number(window.getComputedStyle(openingAnimObj,null)["padding-left"].slice(0,-2));
oaoPld+=32;
openingAnimObj.style.paddingLeft=oaoPld.toString()+"px";

oaoTitle.style.color="#fff";

for (var i of oaoText){
    i.style.color="#fff";
}
