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
var sorry="真是抱歉了捏，因为某些原因词条列表加载不出来了捏，都怪作者手欠把词条列表改成了用程序加载的方式捏，真是对不住了捏，这边建议宁去用搜索捏，搜索也可以搜索到捏~";
try{
    $.getJSON("config/entries.json",raW);
}
catch(err){
    escPerson.innerHTML+=sorry;
    escTutorial.innerHTML+=sorry;
    escCritical.innerHTML+=sorry;
    escOther.innerHTML+=sorry;
}
