function raW(jsonData){
    var escPerson=document.getElementById("esc-person");
    var escTutorial=document.getElementById("esc-tutorial");
    var escCritical=document.getElementById("esc-critical");
    var escOther=document.getElementById("esc-other");
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
$.getJSON("config/entries.json",raW);