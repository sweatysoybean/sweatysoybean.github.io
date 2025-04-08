/*function kbe(event){
    if(event.keycode=="F"||event.keycode=="Space")isContinued=true;
}
document.getElementById("container").addEventListener("keydown",kbe);*/
/*document.addEventListener("keydown", (event) => {
if (event.key=="F") {
    isContinued=true;
}
});*/
var isFocused=false;
var charNameTransDict;
function charNameTransDictSave(cntd){
    charNameTransDict=cntd;
}
function waitForButtonClick() {
    console.log("Please.")
    return new Promise((resolve) => {
        document.getElementById("continue").addEventListener('click',() => {
            resolve();
        });
    });
}
var isContinued=false;
function sceneSet(sceneId){
    console.log(sceneId);
    console.log("Scenes/"+sceneId+".png");
    document.getElementById("background").src="Scenes/"+sceneId+".png";
}
function charSet(charName){
    console.log(charName);
    document.getElementById("character").src="NewCharacters/"+charName+".png";
    document.getElementById("iNTitle").innerHTML=charNameTransDict[charName];
}
function contentsRefresh(content){
    document.getElementById("iC").innerHTML=content;
}
function focus(content){
    isFocused=true;
    document.getElementById("focusDiv").style="display:block;";
    document.getElementById("focus").innerHTML=content;
}
function undoFocus(){
    isFocused=false;
    document.getElementById("focusDiv").style="display:none;";
}
var currentCharName="";
async function main(script){
    console.log(script);
    for (var current of script){
        console.log(current[1]);
        switch (current[0]){
            case "sceneSet":sceneSet(current[1]);break;
            case "focus":focus(current[1]);break;
            default:
            if(isFocused)undoFocus();
            if(current[0]!=currentCharName)charSet(current[0]);
            contentsRefresh(current[1]);break;
        }
        await waitForButtonClick();
        /*while (isContinued){
            isContinued=false;
            break;
        }*/
    }
    /*for (var [currentKey,currentValue] in [Object.keys(script),Object.values(script)]){
        console.log(currentKey,currentValue);
        switch(currentKey){
            case "sceneSet":sceneSet(currentValue);break;
            default:if(currentKey!=currentCharName)charSet(currentKey);
            contentsRefresh(currentValue);break;
        }
        while (isContinued){
            isContinued=false;
            break;
        }
    }*/
    /*var keys=Object.keys(script);
    var values=Object.values(script);
    console.log(keys);
    console.log(values);
    for (i=0;i<=keys.length;i++){
        console.log(keys[i]+' '+values[i]);
    }*/
}
var searchURL=window.location.search;
searchURL=searchURL.substring(1, searchURL.length);
var jsonName="Scripts/"+searchURL.split("&")[2].split("=")[1]+".json";
console.log(jsonName);
$.getJSON(jsonName,main);
$.getJSON("NewCharacters/CharNameTrans.json",charNameTransDictSave);