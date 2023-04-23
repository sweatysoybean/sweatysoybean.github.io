def forma(text,filename):
    text=text.replace("&","&amp;").replace("<","&lt;").replace(" ","&nbsp;")
    text="<p>"+text+"</p>"
    mark=["\n","（","）","<p>-hr</p>","-br",
          "<p>||*","|*","*|","<p>||/","|/","/|","<p>||!","|!","!|","<p>||-x","|-x","x-|","<p>||\u005c","|\u005c","\u005c|","<p>||\"",
          "|_>",">_|",">_","|_v",
          "<p>||=1-","-=|","<p>||=2-","-=|","<p>||=3-","-=|","<p>||=4-","-=|","<p>||=5-","-=|","<p>||=6-","-=|",
          "<p>||=1","1=|</p>","<p>||=2","2=|</p>","<p>||=3","3=|</p>",
          "<p>||=4","4=|</p>","<p>||=5","5=|</p>","<p>||=6","6=|</p>",
          "<p>|[+</p>","<p>+]|</p>","<p>|[+-</p>","<p>|[-","-]|</p>","<p>|[.-","|[_:","|[:_","|[>","|>[","|[v","|v[","|[","]|",
          "-||","<p>|..-</p>","<p>-..|</p>","<p>|.-","-.|</p>"]
    efunc=["</p>\n                    <p>",'<span class="explain">（','）</span>',"<hr />","<br />\n                    ",
           "<p class=\"caution\">","<span class=\"caution\">","</span>",
           "<p class=\"explain\">","<span class=\"explain\">","</span>",
           "<p class=\"warning\">","<span class=\"warning\">","</span>",
           "<p class=\"delete\">","<span class=\"delete\">","</span>",
           "<p class=\"hidden\">","<span class=\"hidden\">","</span>",
           "<p class=\"quote\">",
           "<a href=\"","</a>","\">","<a class=\"downloadbutton\" href=\"",
           '<h1 id="','">',"<h2 id=\"","\">","<h3 id=\"","\">","<h4 id=\"","\">","<h5 id=\"","\">","<h6 id=\"","\">",
           "<h1>", "</h1>", "<h2>", "</h2>", "<h3>", "</h3>", "<h4>", "</h4>", "<h5>", "</h5>", "<h6>", "</h6>",
           "<table class=\"nrml\">","</table>","<table>","    <tr class=\"nrml\">","</tr>","    <tr>",
           "<td class=\"key\">","<td class=\"value\">","<td class=\"nrml\" colspan=\"","\">","<td class=\"nrml\" rowspan=\"",
           "\">","<td class=\"nrml\">","</td>","|","<ul>","</ul>","    <li>","</li>"]
    for i in range(68):
        text=text.replace(mark[i],efunc[i])
    text=f"""<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8" />
        <title>{filename}</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="../assets/site-icon.ico" />
        <link rel="stylesheet" href="../config/outlook.css" />
        <script src="../config/function.js"></script>
    </head>
    <body>
        <div id="container">
            <div id="head">
                <img id="pagetitle" src="../assets/pagetitle.png" />
                <a id="imghome" href="../"><img id="homeimg" src="../assets/pagetitle.png" /></a>
                <div id="searchbox">
                    <input id="search" placeholder="搜索什么……" />
                    <button onclick="skip();">搜索</button>
                </div>
                <a id="hblhome" class="hblink" href="../">首页</a>
                <a class="hblink hblbrwsfunc" href="">刷新</a>
                <a class="hblink hblbrwsfunc" href="#">回到顶部</a>
            </div>
            <div id="main">
                <div id="sidebox">
                    <a class="sblink" href="">刷新</a>
                    <a class="sblink" href="#">回到顶部</a>
                </div>
                <div id="body">
                    <h1 id="contenttitle">{filename}</h1>
                    {text}
                </div>
            </div>
        </div>
    </body>
</html>"""
    file=open("../"+filename+".html",mode="w",encoding="utf-8")
    file.write(text)
    return text

def main_io(gi):
    if gi!="markhelping":
        try:
            go=forma(open(gi.split()[0],encoding="utf-8-sig").read(),gi.split(".")[0])
        except Exception as err:
            go=f"出错力（悲\n{err}"
        return go
    else:
        return """===标记语法帮助===
以下内容出现在文中会被转换成对应的形式。
任何独立的一行内的内容在其所在的那一行上面都不应该出现任何其他的内容。
拥有一定的Python&HTML知识也许能帮你更好地理解下面的列表。不过有些内容还是可能让你感到疑惑。
下表内容有可能不全。
（[内容]）  --> <span class=\"explain\">（[内容]）</span>
-hr --> <hr />  （备注：此内容必须在独立的一行内，并且不能在文章末尾。）
-br --> <br />
||* --> （对该行使用caution类样式，以流汗黄豆百科的形式）（备注：此类标识必须在一行开头）
|*[内容]*|    --> <span class=\"caution\">[内容]</span>
||/ --> （对该行使用explain类样式，以流汗黄豆百科的形式）
|/[内容]/|    --> <span class=\"explain\">[内容]</span>
||! --> （对该行使用warning类样式，以流汗黄豆百科的形式）
|![内容]!|    --> <span class=\"warning\">[内容]</span>
||-x --> （对该行使用delete类样式，以流汗黄豆百科的形式）
|-x[内容]x-|    --> <span class=\"delete\">[内容]</span>
||\\    --> （对该行使用hidden类样式，以流汗黄豆百科的形式）
|\\[内容]\\|  --> <span class="hidden">[内容]</span>
||" --> （对该行使用quote样式，以流汗黄豆百科的形式）
||=[等级][内容][等级]=|  --> <h[等级]>[内容]</h[等级]>（备注：等级为标题等级，最大为1最小为6）
||=[等级]-=|[目录索引][等级]=|  --> <h[等级] id="[目录索引]">
|_>[链接]>_[文本]>_|    --> <a href="[链接]">[文本]</a>
|_v[链接]>_[文本]>_|    --> <a class="downloadbutton" href="[链接]">[文本]</a>
|[+ --> <table class="nrml">（备注：此内容必须在独立的一行内。）
|[+-    --> <table>（独立行内容）
|[-[内容]-]|  --> <tr class="nrml">[内容]</tr>
|[.-[内容]-]| --> <tr>[内容]</tr>
|[[内容]]|    --> <td class="nrml">[内容]</td>
|[>[参数]|>[[内容]]|    --> <td colspan="[参数]">[内容]</td>
|[v[参数]|>[[内容]]|    --> <td rowspan="[参数]">[内容]</td>
|[_:[内容]]|  --> <td class="key">[内容]</td>
|[:_[内容]]|  --> <td class="value">[内容]</td>
-|| --> |（备注：这就是一个普通的竖线字符。因为太多标记需要用到竖线符，为了不发生与普通意义的竖线符产生冲突，在某些可能的情况下或许你可以用这个来代表竖线符，而不产生歧义）
|..-    --> <ul>（独立行内容）
-..|    --> </ul>（独立行内容）
|.-[内容]-.|  --> <li>[内容]</li>（包括内容、开始标记和结束标记，整体为独立行内容）"""

print("htmler:用于将文本转换为流汗黄豆百科词条的文件形式。")
print("使用方法:直接输入文件名（包括扩展名，除非文件与程序同级否则请注意路径）")
print("文本可以使用一些特殊的标记语法，想了解关于此方面的内容，请输入markhelping")
print("声明：本程序为流汗黄豆百科（或者可能的后续或改版，以及改名）工作，一些可能的细节会被转换为流汗黄豆百科使用的形式。")
while True:
    print(main_io(input(">>>")))
