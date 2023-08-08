window.scProgress=0;
var finalSC=4;
function scTrigger(scCode){
    if (window.scProgress==scCode-1){
        window.scProgress++;
    }
    if (window.scProgress==finalSC){
        alert("原神启动");
        window.location.href="https://sweatysoybean.github.io/msites/3999043896290813709698504658754558121145141919810/";
    }
}