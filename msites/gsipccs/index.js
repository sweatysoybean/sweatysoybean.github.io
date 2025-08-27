var urls=decodeURIComponent(window.location.search.slice(1));
var scriptInfo={};
//这个部分别的大佬写的
if(urls){
    let json={};
    urls.split('&').forEach(item => json[item.split('=')[0]]=item.split('=')[1]);
    urls=json;
    delete json;
}
function displayScript(id){
    id=id.toString();
    var newScriptDisplay=document.createElement("a");

    var newSDTitle=document.createElement("p");
    var newSDTitleText=document.createTextNode(scriptInfo[id].title);
    newSDTitle.appendChild(newSDTitleText);

    var newSDIntro=document.createElement("p");
    newSDIntro.setAttribute("class","intro");
    var newSDIntroText=document.createTextNode(scriptInfo[id].intro);
    newSDIntro.appendChild(newSDIntroText);

    var newSDTags=document.createElement("p");
    newSDTags.setAttribute("class","intro");
    for(var i=0;i<scriptInfo[id].tags.length;i++){
        newSDTags.innerHTML+='<span class="sTag">'+scriptInfo[id].tags[i]+'</span>';
    }

    var newSDId=document.createElement("p");
    newSDId.setAttribute("class","intro");
    var newSDIdText=document.createTextNode("ID: "+id);
    newSDId.appendChild(newSDIdText);

    newScriptDisplay.appendChild(newSDTitle);
    newScriptDisplay.appendChild(newSDIntro);
    newScriptDisplay.appendChild(newSDTags);
    newScriptDisplay.appendChild(newSDId);
    newScriptDisplay.href="javascript:start("+id+");";
    document.getElementById("scriptsDisplay").appendChild(newScriptDisplay);
}
function siSave(si){
    scriptInfo=si;
    displayScript(1);
    displayScript(2);
    displayScript(3);
}
function login(){
    var tCharG;
    if(urls){
        if (urls["charGender"]=="Aether"){
            tCharG="空";
        } else if(urls["charGender"]=="Lumine") {
            tCharG="荧";
        }
        var loginContent="";
        if(urls["charName"]){
            loginContent+="玩家昵称将载入为"+urls["charName"]+"\n";
            document.getElementsByName("charName")[0].value=urls["charName"];
        }
        if(tCharG){
            loginContent+="选择"+tCharG+"作为主角\n";
            document.getElementsByName("charGender")[0].value=urls["charGender"];
        }
        if(urls["wandererName"]){
            loginContent+="流浪者命名为"+urls["wandererName"]+"\n";
            document.getElementsByName("wandererName")[0].value=urls["wandererName"];
        }
        if(urls["saurianName"]){
            loginContent+="纳塔龙伙伴命名为"+urls["saurianName"]+"\n";
            document.getElementsByName("saurianName")[0].value=urls["saurianName"];
        }
        if(loginContent){
            loginContent+="当然，你依旧可以更改。";
            console.log(urls);
            alert(loginContent);
        }
    }
}
function toDoLogin(){
    setTimeout(login,500);
}
function start(scriptId){
    window.location.href="act.html"+window.location.search+"&scriptId="+scriptId.toString();
}
function startBySearch(){
    window.location.href="act.html"+window.location.search+"&scriptId="+document.getElementsByName("scriptId")[0].value;
}
window.onload=toDoLogin;
$.getJSON("Scripts/scriptInfo.json",siSave);