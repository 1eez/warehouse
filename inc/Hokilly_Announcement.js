var marqueeContent=new Array(); //��������
marqueeContent[0]='<A href=http://www.hokilly.com target=_blank style="color:#FFFFFF">��������������ͻ��1000�û�</a>';
marqueeContent[1]='<A href=http://www.hokilly.com target=_blank style="color:#FFFFFF">����������4.1�汾��ʽ����</a>';
marqueeContent[2]='<A href=http://www.hokilly.com target=_blank style="color:#FFFFFF">���������������˻����������</a>';
marqueeContent[3]='<A href=http://www.hokilly.com target=_blank style="color:#FFFFFF">����������˾����10��8���������ƾ߳��ٿ����ʹ�ý�������</a>';
marqueeContent[4]='<A href=http://www.hokilly.com target=_blank style="color:#FFFFFF">����������ٷ���վ</a>';

var marqueeInterval=new Array(); //����һЩ���ö���Ҫ�����õ��ı���
var marqueeId=0;
var marqueeDelay=2800;
var marqueeHeight=20;
//���������Ƕ���һЩҪʹ�õ��ĺ���
function initMarquee() {
 var str=marqueeContent[0];
 document.write('<div id=marqueeBox style="overflow:hidden;height:'+marqueeHeight+'px" onmouseover="clearInterval(marqueeInterval[0])" onmouseout="marqueeInterval[0]=setInterval(\'startMarquee()\',marqueeDelay)"><div>'+str+'</div></div>');
 marqueeId++;
 marqueeInterval[0]=setInterval("startMarquee()",marqueeDelay);
 }
function startMarquee() {
 var str=marqueeContent[marqueeId];
 marqueeId++;
 if(marqueeId>=marqueeContent.length) marqueeId=0;
 if(marqueeBox.childNodes.length==1) {
 var nextLine=document.createElement('DIV');
 nextLine.innerHTML=str;
 marqueeBox.appendChild(nextLine);
 }
 else {
 marqueeBox.childNodes[0].innerHTML=str;
 marqueeBox.appendChild(marqueeBox.childNodes[0]);
 marqueeBox.scrollTop=0;
 }
 clearInterval(marqueeInterval[1]);
 marqueeInterval[1]=setInterval("scrollMarquee()",20);
 }
function scrollMarquee() {
 marqueeBox.scrollTop++;
 if(marqueeBox.scrollTop%marqueeHeight==(marqueeHeight-1)){
 clearInterval(marqueeInterval[1]);
 }
 }
initMarquee();
