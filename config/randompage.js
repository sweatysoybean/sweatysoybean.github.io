function randomGetFrom(mainArray){
    return mainArray[Math.floor((Math.random()*mainArray.length))];
}
function getData(jd){
    entriesData=[...jd.person,
                 ...jd.tutorial,
                 ...jd.critical,
                 ...jd.other
    ];
}
function mainSkip(){
    window.location.href="https://sweatysoybean.github.io/entries/"+randomGetFrom(entriesData);
}
var entriesData=new Array();
$.getJSON("config/entries.json",getData);
