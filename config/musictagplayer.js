var music=new Audio("部件展示.src/Rrharil.mp3")
var is_music_playing=false;
function play(){
    if (is_music_playing==true){
        music.pause()
        is_music_playing=false;
        document.getElementById("player").innerHTML="▶";
        return;
    }
    else if(is_music_playing==false){
        music.play()
        is_music_playing=true;
        document.getElementById("player").innerHTML="∥";
        return;
    }
}