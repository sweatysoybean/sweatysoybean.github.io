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
        if(current[0]!="sceneSet")await waitForButtonClick();
}
var searchURL=window.location.search;
searchURL=searchURL.substring(1, searchURL.length);
var jsonName="Scripts/"+searchURL.split("&")[2].split("=")[1]+".json";
console.log(jsonName);
$.getJSON(jsonName,main);
$.getJSON("NewCharacters/CharNameTrans.json",charNameTransDictSave);