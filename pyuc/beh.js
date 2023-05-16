class Actor{
    constructor(obj,w,h){
        this.x=0;
        this.y=0;
        this.obj=obj;
        this.w=w;
        this.h=h;

        this.isPaused=false;

        this.move=this.move.bind(this);
        this.setPos=this.setPos.bind(this);
        this.refreshPos=this.refreshPos.bind(this);
        this.touch=this.touch.bind(this);
    }
    move(mode){
        if (this.isPaused){
            return;
        }
        switch (mode){
            case "up":
                if (this.y>=10){
                    this.y-=10;
                }
                break;
            case "left":
                if (this.x>=10){
                    this.x-=10;
                }
                break;
            case "down":
                this.y+=10;
                break;
            case "right":
                this.x+=10;
                break;
        }
        this.refreshPos();
    }
    setPos(x,y){
        if (this.isPaused){
            return;
        }
        this.x=x;
        this.y=y;
        refreshPos();
    }
    refreshPos(){
        if (this.isPaused){
            return;
        }
        this.obj.style.top=this.y.toString()+"px";
        this.obj.style.left=this.x.toString()+"px";
    }
    touch(who){
        //Bp -> BorderPosition
        var myBp={"top":this.y,"bottom":this.y+this.h,"left":this.x,"right":this.x+this.w};
        var itsBp={"top":who.y,"bottom":who.y+who.h,"left":who.x,"right":who.x+who.w};
        var yAxisCoincidence=(((itsBp.bottom>=myBp.top) && (itsBp.bottom<=myBp.bottom))||((itsBp.top<=myBp.bottom) && (itsBp.top>=myBp.top)));
        var xAxisCoincidence=(((itsBp.right>=myBp.left) && (itsBp.right<=myBp.right))||((itsBp.left<=myBp.right) && (itsBp.left>=myBp.left)));
        if (yAxisCoincidence && xAxisCoincidence){
            return true;
        }
        else{
            return false;
        }
    }
}
class AppRoot{
    constructor(globalRoot){
        this.globalRoot=globalRoot;

    }
    pause(who){
        who.isPaused=true;
    }
}
var root=new AppRoot(document.getElementsByTagName("html")[0])
var py=new Actor(document.getElementById("py"),100,100);
var bwp=new Actor(document.getElementById("bwp"),100,100);
document.onkeydown=function (e){
    e=e||window.event;
    switch (e.keyCode){
        case 32:alert(py.touch(bwp));break; //space
        case 37:py.move("left");break; //left arrow
        case 38:py.move("up");break; //up arrow
        case 39:py.move("right");break; //right arrow
        case 40:py.move("down");break; //down arrow
        case 66:document.getElementsByTagName("html")[0].style.backgroundColor="#000";break; //b
    }
    py.refreshPos();
}
alert("pyuc介绍：\npyuc是本人第一次尝试用js制作的游戏，目前尚未确定玩法。\n操作：上下左右键控制彩色PY移动，按空格键会弹出彩色PY是否与黑白PY接触到（true代表是，false代表否；边框接触到也算，尽管看起来不像，py的实际图片大小是100px*100px。如果想看得见边框，按b键将背景颜色设置为黑色。）");