var charNameTransDict={
    "Aether": "空",
    "Albedo": "阿贝多",
    "Alhaitham": "艾尔海森",
    "Aloy": "埃洛伊",
    "Amber": "安柏",
    "AratakiItto": "荒泷一斗",
    "Arlecchino": "阿蕾奇诺",
    "Baizhu": "白术",
    "Barbara": "芭芭拉",
    "Beidou": "北斗",
    "Bennett": "班尼特",
    "Candace": "坎蒂丝",
    "Charlotte": "夏洛蒂",
    "Chasca": "恰斯卡",
    "Chevreuse": "夏沃蕾",
    "Chiori": "千织",
    "Chongyun": "重云",
    "Citlali": "茜特菈莉",
    "Clorinde": "克洛琳德",
    "Collei": "柯莱",
    "Cyno": "赛诺",
    "Dehya": "迪希雅",
    "Deinsleif": "戴因斯雷布",
    "Diluc": "迪卢克",
    "Diona": "迪奥娜",
    "Dori": "多莉",
    "Emilie": "艾梅丽埃",
    "Escoffei": "爱可菲",
    "Eula": "优菈",
    "Faruzan": "珐露珊",
    "Fischl": "菲谢尔",
    "Freminet": "菲米尼",
    "Furina": "芙宁娜",
    "Gaming": "嘉明",
    "Ganyu": "甘雨",
    "Gorou": "五郎",
    "HuTao": "胡桃",
    "Iansan": "伊安珊",
    "Inaffa": "伊涅芙",
    "Jean": "琴",
    "Kachina": "卡奇娜",
    "KaedeharaKazuha": "枫原万叶",
    "Kaeya": "凯亚",
    "KamisatoAyaka": "神里绫华",
    "KamisatoAyato": "神里绫人",
    "Kaveh": "卡维",
    "Keqing": "刻晴",
    "Kinich": "基尼奇",
    "Kirara": "绮良良",
    "Klee": "可莉",
    "KujouSara": "九条裟罗",
    "KukiShinobu": "久岐忍",
    "Lanyan": "蓝砚",
    "Layla": "莱依拉",
    "Lisa": "丽莎",
    "Lumine": "荧",
    "Lyney": "林尼",
    "Lynnette": "琳妮特",
    "Mika": "米卡",
    "Mona": "莫娜",
    "Mualani": "玛拉妮",
    "Nahida": "纳西妲",
    "Neuvellette": "纳维莱特",
    "Nilou": "妮露",
    "Ningguang": "凝光",
    "Noelle": "诺艾尔",
    "Ororon": "欧洛伦",
    "Paimon": "派蒙",
    "Qiqi": "七七",
    "RaidenShogun": "雷电将军",
    "Razor": "雷泽",
    "Rosaria": "罗莎莉亚",
    "SangonomiaKokomi": "珊瑚宫心海",
    "Sayu": "早柚",
    "Sethos": "赛索斯",
    "Shenhe": "申鹤",
    "ShikanoinHeizou": "鹿野院平藏",
    "Sigewinne": "希格雯",
    "Skirk": "丝柯克",
    "Sucrose": "砂糖",
    "Tahlia": "塔利雅",
    "Tartaglia": "达达利亚",
    "Thoma": "托马",
    "Tighnari": "提纳里",
    "Traveller": "旅行者",
    "Varesa": "瓦雷莎",
    "Venti": "温迪",
    "Wanderer": "流浪者",
    "Wriothesley": "莱欧斯利",
    "Xiangling": "香菱",
    "Xianyun": "闲云",
    "Xiao": "魈",
    "Xilonen": "希诺宁",
    "Xingqiu": "行秋",
    "Xinyan": "辛焱",
    "YaeMiko": "八重神子",
    "Yanfei": "烟绯",
    "Yaoyao": "瑶瑶",
    "Yelan": "夜兰",
    "Yoimiya": "宵宫",
    "YumemizukiMizuki": "梦见月瑞希",
    "Yunjin": "云瑾",
    "Zhongli": "钟离"
};
var validScenes=[
    'F01D','F01M','F01N','F01S','F02D','F02M','F02N','F02S','F03D','F03N','F03S','F04D','F04M','F04N','F04S',
    'F05D','F05M','F05N','F05S','F06D','F06N','F07D','F07N','F08D','F08M','F08N','F08S','F09D','F09N','F10D',
    'F10N','F11D','F11M','F11N','F11S','F12D','F12N','F13D','F13M','F13N','F13S','F14D','F14M','F14N','F14S',
    'F15N','F16O','F17N','F18O','F19D','F19N','F20N','F21D','F21M','F21N','F21S','F22D','F22M','F22N','F22S',
    'F23D','F23M','F23N','F23S','F24D','F24M','F24N','F24S','F25N','F26N','F27N','F28O','F29O','F30D','F30M',
    'F30N','F30S','F31D','F31M','F31N','F31R','F31S','F32D','F32M','F32N','F32S','F33N','F34O','F35D','F35M',
    'F35N','F35S','I01D','I01M','I01N','I01S','I02D','I02M','I02N','I02S','I03D','I03M','I03N','I03S','I04D',
    'I04M','I04N','I04S','I05D','I05M','I05N','I05S','I06D','I06M','I06N','I06S','I07D','I07N','I08D','I08M',
    'I08S','I09D','I09N','I10D','I10N','I11D','I11N','I12D','I12N','I13D','I13M','I13N','I13S','I14D','I14M',
    'I14N','I14S','I15D','I15N','L01D','L01M','L01N','L01S','L02D','L02M','L02N','L02S','L03D','L03M','L03N',
    'L03S','L04D','L04M','L04S','L05D','L05M','L05N','L05S','L06D','L06M','L06N','L06S','L07M','L07N','L07S',
    'L08D','L08M','L08S','L09D','L09M','L09N','L10D','L10N','L11D','L11N','L12D','L12M','L12N','L12S','L13M',
    'L13N','L13S','L14D','L14M','L14N','L14S','L15M','L15S','L16M','L16N','L17D','L17N','L18D','L18M','L18N',
    'L18S','L19D','L19M','L19N','L19R','L19S','L20D','L20M','L20N','L20R','L20S','L21D','L21M','L21N','L21S',
    'L22D','L22M','L22N','L22S','L23D','L23S','L24D','L24M','L24N','L24S','L25D','L25M','L25N','L25S','L26D',
    'L26N','L26S','L27D','L27M','L27N','L27R','L27S','L28D','L28M','L28N','L28R','L28S','L29D','L29M','L29N',
    'L29S','L30D','L30M','L30N','L30S','L31N','L32N','M01D','M01M','M01N','M01S','M02D','M02M','M02N','M02S',
    'M03D','M03M','M03N','M03S','M04D','M04M','M04N','M04S','M05D','M05N','M06D','M06M','M06N','M06S','M07D',
    'M07N','M08D','M08N','M09D','M09N','M10D','M10N','M11D','M11M','M11N','M11S','M12D','M12N','M13D','M13M',
    'M13N','M13S','M14D','M14M','M14N','M14S','M15D','M15M','M15N','M15S','M16D','M16M','M16N','M16S','M17D',
    'M17M','M17N','M17S','M18D','M18M','M18N','M18S','M20D','M20M','M20N','M20R','M20S','M21D','M21M','M21N',
    'M21R','M22D','M22M','M22N','M22S','M23O','M24D','M24M','M24N','M24S','M25D','M25M','M25N','M25S','M26D',
    'M26M','M26N','M26R','M26S','M27M','M27N','M27S','M28O','M29M','M29N','M29S','M30D','M30M','M30N','M30S',
    'M31D','M31M','M31N','M31S','M32D','M32M','M32N','M32R','M32S','M33D','M33M','M33N','M33S','M34D','M34M',
    'M34N','M35O','M36D','M36M','M36N','M36S','N01D','N01M','N01N','N01S','N02D','N02M','N02N','N02S','N03D',
    'N03N','N04D','N04N','N05D','N05N','N06D','N06N','N07D','N07N','N08D','N08M','N08N','N08S','N09D','N09M',
    'N09N','N09S','N10D','N10M','N10N','N10S','N11D','N11M','N11N','N11S','N12D','N12M','N12N','N12S','N13D',
    'N13M','N13N','N13S','N14D','N14M','N14N','N14S','N15D','N15M','N15N','N16D','N16M','N16N','N16R','N17D',
    'N17M','N17N','N17S','N18D','N18M','N18N','N18S','N19D','N19M','N19N','N19S','N20D','N20M','N20N','N20S',
    'N21D','N21N','N22N','N22O','N23N','N24M','N25O','N26O','S01D','S01N','S01S','S02O','S03O','S04D','S04M',
    'S04N','S04S','S05D','S05M','S05N','S05S','S06O','S07O','S08D','S08M','S08N','S08S','S09D','S09M','S09N',
    'S09S','S10D','S10M','S10N','S10S','S11D','S11M','S11N','S11R','S11S','S12N','S13D','S13M','S13N','S13S',
    'S14D','S14N','S15D','S15M','S15N','S15S','S16D','S16M','S16N','S16S','S17S','S18D','S18M','S18N','S18S',
    'T01S','T02D','T02M','T02N','T02S','T03D','T03M','T03N','T03S','T04O']
var isFocused=false;
var isContinued=false;
var currentCharName="";
var currentScene="M01";
var currentTime="D";
var urls=decodeURIComponent(window.location.search.slice(1));
//这个部分别的大佬写的
if(urls){
    let json={};
    urls.split('&').forEach(item => json[item.split('=')[0]]=item.split('=')[1]);
    urls=json;
    delete json;
}
//check
if(urls.charName==undefined){
    urls["charName"]="旅行者";
}
if(urls.charGender==undefined){
    urls["charGender"]="Lumine";
}
if(urls.wandererName==undefined){
    urls["wandererName"]="流浪者";
}
if(urls.saurianName==undefined){
    urls["saurianName"]="土豆饼";
}
if(urls.scriptId==undefined){
    urls["scriptId"]="1";
}
var cgupsd;
if(urls.charGender=="Lumine"){
    cgupsd="Aether";
}else{
    cgupsd="Lumine";
}

function waitForButtonClick() {
    return new Promise((resolve) => {
        document.getElementById("continue").addEventListener('click',() => {
            resolve();
        });
    });
}
function sceneSet(sceneId){
    currentScene=sceneId;
    document.getElementById("background").src="Scenes/"+sceneId+currentTime+".png";
}
function timeSetError(replace,time){
    console.log("Scenes/"+currentScene+time+".png is missing. replaced with Scenes/"+currentScene+replace+".png");
}
function timeSet(time){
    currentTime=time;
    console.log(currentScene+time);
    if(!validScenes.includes(currentScene+time)){
        if(validScenes.includes(currentScene+'O')){
            document.getElementById("background").src="Scenes/"+currentScene+"O.png";
            timeSetError('O',time);
        }else{
            switch(time){
                case 'M':
                    if(validScenes.includes(currentScene+'D')){
                        document.getElementById("background").src="Scenes/"+currentScene+"D.png";
                        timeSetError('D',time);
                    }else if(validScenes.includes(currentScene+'S')){
                        document.getElementById("background").src="Scenes/"+currentScene+"S.png";
                        timeSetError('S',time);
                    }else if(validScenes.includes(currentScene+'N')){
                        document.getElementById("background").src="Scenes/"+currentScene+"S.png";
                        timeSetError('N',time);
                    }else{
                        console.log("Scenes/"+currentScene+" is missing. Can't find scene instead.");
                    }
                    break;
                case 'D':
                    if(validScenes.includes(currentScene+'M')){
                        document.getElementById("background").src="Scenes/"+currentScene+"M.png";
                        timeSetError('M',time);
                    }else if(validScenes.includes(currentScene+'S')){
                        document.getElementById("background").src="Scenes/"+currentScene+"S.png";
                        timeSetError('S',time);
                    }else if(validScenes.includes(currentScene+'N')){
                        document.getElementById("background").src="Scenes/"+currentScene+"S.png";
                        timeSetError('N',time);
                    }else{
                        console.log("Scenes/"+currentScene+" is missing. Can't find scene instead.");
                    }
                    break;
                case 'S':
                    if(validScenes.includes(currentScene+'N')){
                        document.getElementById("background").src="Scenes/"+currentScene+"N.png";
                        timeSetError('N',time);
                    }else if(validScenes.includes(currentScene+'D')){
                        document.getElementById("background").src="Scenes/"+currentScene+"D.png";
                        timeSetError('D',time);
                    }else if(validScenes.includes(currentScene+'M')){
                        document.getElementById("background").src="Scenes/"+currentScene+"M.png";
                        timeSetError('M',time);
                    }else{
                        console.log("Scenes/"+currentScene+" is missing. Can't find scene instead.");
                    }
                    break;
                case 'N':
                    if(validScenes.includes(currentScene+'S')){
                        document.getElementById("background").src="Scenes/"+currentScene+"S.png";
                        timeSetError('S',time);
                    }else if(validScenes.includes(currentScene+'D')){
                        document.getElementById("background").src="Scenes/"+currentScene+"D.png";
                        timeSetError('D',time);
                    }else if(validScenes.includes(currentScene+'M')){
                        document.getElementById("background").src="Scenes/"+currentScene+"M.png";
                        timeSetError('M',time);
                    }else{
                        console.log("Scenes/"+currentScene+" is missing. Can't find scene instead.");
                    }
                    break;
                default:
                    console.log("Scenes/"+currentScene+" is missing or the time '"+time+"' isn't correct. Can't find scene instead.");
                    break;
            }
        }

    }else{
        document.getElementById("background").src="Scenes/"+currentScene+time+".png";
    }
}
function charSet(charName){
    if(charName.includes("&nbsp;=&gt;&nbsp;")){
        //派蒙 => 法涅斯
        document.getElementById("character").src="NewCharacters/"+charName.split("&nbsp;=&gt;&nbsp;")[0].replace("Traveller",urls.charGender).replace("tRAVELLER",cgupsd)+".png";
        document.getElementById("iNTitle").innerHTML=charName.split("&nbsp;=&gt;&nbsp;")[1];
    }
    else{
        document.getElementById("character").src="NewCharacters/"+charName.replace("Traveller",urls.charGender).replace("tRAVELLER",cgupsd)+".png";
        if(charName=='Traveller'){
            document.getElementById("iNTitle").innerHTML=urls.charName;
        }else if(charName=='tRAVELLER'){
            document.getElementById("iNTitle").innerHTML=charNameTransDict[cgupsd];
        }else if(charName=='Wanderer'){
            document.getElementById("iNTitle").innerHTML=urls.wandererName;
        }else if(charName=="土豆饼"){
            document.getElementById("iNTitle").innerHTML=urls.saurianName;
        }else if(charName in charNameTransDict){
            document.getElementById("iNTitle").innerHTML=charNameTransDict[charName];
        } else {
            document.getElementById("iNTitle").innerHTML=charName;
        }
    }
}
function contentsRefresh(content){
    if(urls.charGender=="Aether"){
        content=content.replace("{哥哥/姐姐}","哥哥").replace("{哥哥/妹妹}","妹妹").replace("{妹妹/哥哥}","哥哥")
        .replace("{哥哥/荧}","荧").replace("{荧/哥哥}","哥哥").replace("{先生/女士}","先生").replace("{小哥/小妹}","小哥")
        .replace("{大哥/大姐头}","大哥").replace("{他/她}","他").replace("{她/他}","她");
    }else{
        content=content.replace("{哥哥/姐姐}","姐姐").replace("{哥哥/妹妹}","哥哥").replace("{妹妹/哥哥}","妹妹")
        .replace("{哥哥/荧}","哥哥").replace("{荧/哥哥}","荧").replace("{先生/女士}","女士").replace("{小哥/小妹}","小妹")
        .replace("{大哥/大姐头}","大姐头").replace("{他/她}","她").replace("{她/他}","他");
    }
    //反主说话则大括号二选一女在前男在后，否则男在前女在后
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

async function main(script){
    console.log(script);
    for (var current of script){
        current[1]=current[1].replace("旅行者",urls.charName);
        current[0]=current[0].replace("土豆饼",urls.saurianName);
        current[1]=current[1].replace("流浪者",urls.wandererName);
        current[1]=current[1].replace("土豆饼",urls.saurianName);
        switch (current[0]){
            case "sceneSet":sceneSet(current[1]);break;
            case "timeSet":timeSet(current[1]);break;
            case "focus":focus(current[1]);break;
            default:
            if(isFocused)undoFocus();
            if(current[0]!=currentCharName)charSet(current[0]);
            contentsRefresh(current[1]);break;
        }
        if(current[0]!="sceneSet" && current[0]!="timeSet"){
            console.log(current[0])
            await waitForButtonClick();
            setTimeout('document.getElementById("continue").style="display:none;";',0);
            setTimeout('document.getElementById("continue").style="display:block;";',100);
        }
    }
}

/*var searchURL=window.location.search.split("&");
//?scriptId=test4&charName=pgEON鸽子公主&charGender=Aether
//searchURL=searchURL.substring(1, searchURL.length);
var searchURLList=[];
var j;
for (var i=0;i<searchURL.length;i++){
    j=searchURL[i].split("=")[0];
    k=searchURL[i].split("=")[1];
    searchURLList+=[j,k];
}
console.log(searchURLList);*/
//var jsonName="Scripts/" + ((searchURL.split("&")[2]).split("=")[1] + ".json");
//console.log(jsonName);
//$.getJSON("Scripts/1.json",main);
$.getJSON("Scripts/"+urls.scriptId+".json",main)