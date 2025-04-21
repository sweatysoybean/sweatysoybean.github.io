var isFocused=false;
//var charNameTransDict={};
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
    "Deinsleb": "戴因斯雷布",
    "Diluc": "迪卢克",
    "Diona": "迪奥娜",
    "Dori": "多莉",
    "Emilie": "艾梅丽埃",
    "Eula": "优菈",
    "Faruzan": "珐露珊",
    "Fischl": "菲谢尔",
    "Freminet": "菲米尼",
    "Furina": "芙宁娜",
    "Gaming": "嘉明",
    "Ganyu": "甘雨",
    "Gorou": "五郎",
    "HuTao": "胡桃",
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
    "NewTestAlbedo": "阿贝多测试",
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
    "Sucrose": "砂糖",
    "Tartaglia": "达达利亚",
    "Thoma": "托马",
    "Tighnari": "提纳里",
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
/*function charNameTransDictSave(cntd){
    charNameTransDict=cntd;
}*/
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
        if(current[0]!="sceneSet"){await waitForButtonClick();}
    }
}
var searchURL=window.location.search;
searchURL=searchURL.substring(1, searchURL.length);
var jsonName="Scripts/" + ((searchURL.split("&")[2]).split("=")[1] + ".json");
console.log(jsonName);
$.getJSON(jsonName,main);
//$.getJSON("NewCharacters/CharNameTrans.json",charNameTransDictSave);
