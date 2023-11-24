function raW(jsonData){
    for (var i of jsonData.person){
        escPerson.innerHTML+="<a href=\"entries/"+i+"\">"+i+"</a> ";
    }
    for (var i of jsonData.tutorial){
        escTutorial.innerHTML+="<a href=\"entries/"+i+"\">"+i+"</a> ";
    }
    for (var i of jsonData.critical){
        escCritical.innerHTML+="<a href=\"entries/"+i+"\">"+i+"</a> ";
    }
    for (var i of jsonData.other){
        escOther.innerHTML+="<a href=\"entries/"+i+"\">"+i+"</a> ";
    }
    escOther.innerHTML+="<a href=\"proto-se/\">远古版本体验</a>";
    return;
}
var escPerson=document.getElementById("esc-person");
var escTutorial=document.getElementById("esc-tutorial");
var escCritical=document.getElementById("esc-critical");
var escOther=document.getElementById("esc-other");
var sorry="私密马赛！程序不知道出了什么问题，词条列表加载不出来力！麻烦您高抬贵手，试试搜索功能，或者刷新亿下？<a href=\"#\">点我暴击狸屑V</a>";
try{
    $.getJSON("config/entries.json",raW);
}
catch(err){
    escPerson.innerHTML+=sorry;
    escTutorial.innerHTML+=sorry;
    escCritical.innerHTML+=sorry;
    escOther.innerHTML+=sorry;
}
