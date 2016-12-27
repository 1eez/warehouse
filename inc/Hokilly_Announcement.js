var marqueeContent=new Array(); //滚动新闻
marqueeContent[0]='<A href=http://www.hokilly.com target=_blank style="color:#FFFFFF">红金羚进销存销售突破1000用户</a>';
marqueeContent[1]='<A href=http://www.hokilly.com target=_blank style="color:#FFFFFF">红金羚进销存4.1版本正式上市</a>';
marqueeContent[2]='<A href=http://www.hokilly.com target=_blank style="color:#FFFFFF">红金羚进销存增加了货物运输管理</a>';
marqueeContent[3]='<A href=http://www.hokilly.com target=_blank style="color:#FFFFFF">红金羚软件公司定于10月8日在邹区灯具城召开软件使用交流会议</a>';
marqueeContent[4]='<A href=http://www.hokilly.com target=_blank style="color:#FFFFFF">红金羚进销存官方网站</a>';

var marqueeInterval=new Array(); //定义一些常用而且要经常用到的变量
var marqueeId=0;
var marqueeDelay=2800;
var marqueeHeight=20;
//接下来的是定义一些要使用到的函数
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
