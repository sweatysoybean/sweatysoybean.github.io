import json

cntf=open('..\\..\\NewCharacters\\charNameTrans.json','r',encoding='utf-8')
cnt=json.loads(cntf.read())
cntf.close()
sntf=open('..\\..\\Scenes\\SceneNameTrans.json','r',encoding='utf-8')
snt=json.loads(sntf.read())
sntf.close()

textSafe=lambda o_text:o_text.replace("'","&apos;").replace('"','&quot;').replace(' ','&nbsp;') \
    .replace('<','&lt;').replace('>','&gt;')

while 1:
    fn=input('>>>')
    if fn == '':
        exit()
    file=open(fn+'.txt','r',encoding="utf-8")
    text=file.read()
    text=text.split('\n')
    for i in range(len(text)):
        text[i]=text[i].split("：",1)
        text[i][0]=text[i][0].replace('切换场景','sceneSet').replace('切换时间','timeSet').replace('黑屏','focus')
        if text[i][0]=='sceneSet':
            text[i][1]=text[i][1]
            k=0;
            for j in list(snt.values()):
                if text[i][1] in j:
                    text[i][1]=list(snt.keys())[k]
                    break
                k+=1
        elif text[i][0]=='timeSet':
            if text[i][1] in ['早晨','日出']:
                text[i][1]='M'
            elif text[i][1] in ['白天','中午']:
                text[i][1]='D'
            elif text[i][1] in ['傍晚','日落']:
                text[i][1]='S'
            elif text[i][1] in ['晚上','夜晚']:
                text[i][1]='N'

        try:
            if " => " in text[i][0]:
                text[i][0]=list(cnt.keys())[list(cnt.values()).index(text[i][0].split(" => ")[0])]+" => "+text[i][0].split(" => ")[1]
            else:
                text[i][0]=list(cnt.keys())[list(cnt.values()).index(text[i][0])]
        except Exception:
            pass
        text[i][0]=textSafe(text[i][0])
        try:
            text[i][1]=textSafe(text[i][1])
        except Exception:
            pass
    output=str(text).replace('], ','], \n').replace('[[','[\n[').replace(']]',']\n]').replace("'",'"').replace('["','  ["')
    print(output)
    wi=open('../'+fn+'.json','w',encoding='utf-8')
    wi.write(output)
    wi.close()
    file.close()