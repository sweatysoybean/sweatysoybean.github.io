var search=decodeURIComponent(window.location.search);
var getsString=search.slice(1,search.length);
getsString=getsString.split("&");
var getsData={};
for (i of getsString){
    getsData[i.split("=")[0]]=i.split("=")[1];
}
delete search;
delete getString;
function searchD62(jd){
    if (jd[getsData.name]!=undefined){
        let name=getsData.name;
        let cmDatas=jd[name];
        document.getElementById("cmname").innerHTML=getsData.name;
        document.getElementById("cmd-name").innerHTML+=getsData.name;
        document.getElementById("cmd-age").innerHTML+=cmDatas.basicInformation.age;
        document.getElementById("cmd-birth").innerHTML+=cmDatas.basicInformation.birth;
        switch(cmDatas.basicInformation.gender){
            case "male":
                document.getElementById("cmd-gender").innerHTML+="公的";
                break;
            case "female":
                document.getElementById("cmd-gender").innerHTML+="母的";
                break;
            case "unknown":
                document.getElementById("cmd-gender").innerHTML+="未知";
                break;
            case "py":
                document.getElementById("cmd-gender").innerHTML+="蒲源特有的性别";
                break;
        }

        for (var i in cmDatas.datasPerYear){
            let yeardn="";
            yeardn=i.split(" ")[0]+"年";
            var grade=i.split(" ")[1][0]+"年级";
            if (i.split(" ")[1][1]=="1"){
                grade+="上册";
            }
            else{
                grade+="下册";
            }
            yeardn+=grade;
            delete grade;
            var dpymul=document.getElementById("cmd-dpy");
            var newLi=document.createElement("li");
            var dpydt=document.createTextNode(yeardn+" "+cmDatas.datasPerYear[i]);
            newLi.appendChild(dpydt);
            dpymul.appendChild(newLi);
        }

        for (var i in cmDatas.contactInformation){
            var cimul=document.getElementById("cmd-ci");
            var newLi=document.createElement("li");
            var ciit=document.createTextNode(i+"："+cmDatas.contactInformation[i]);
            newLi.appendChild(ciit);
            cimul.appendChild(newLi);
        }
    }
    else{
        window.location.href="https://sweatysoybean.github.io/msites/d62/404.html";
    }
}
$.getJSON("d62.json",searchD62);