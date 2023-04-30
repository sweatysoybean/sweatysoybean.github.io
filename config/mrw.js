function mainRW(){
    var menu=document.getElementById("menu");
    var titles=document.getElementsByTagName("h1");
    for (i of titles){
        if (i.attributes.length!=0 && i.attributes["id"].value!="contenttitle"){
            menu.innerHTML+="<li><a class=\"menuanchor\" href=\"#"+i.attributes["id"].value+"\">"+i.attributes["id"].value+"</a></li>\n";
        }
    }
}
mainRW();