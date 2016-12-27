/*****************************************************************************
                     ÖÆ×÷:·ðÉ½Ì·½£Èª  year2000@21cn.com
*****************************************************************************/
<!--


if (!document.layers&&!document.all)
event="test"
function showtip2(current,e,text){
if (document.all&&document.readyState=="complete"){
document.all.tip2.innerHTML='<marquee scrolldelay="95" scrollamount="2" behavior="slide" width="397" bgcolor="#FFFFD9" style="border:2px solid #00BF00" align="middle">'+text+'</marquee>'

document.all.tip2.style.pixelTop=event.clientY+document.body.scrollTop+18
document.all.tip2.style.visibility="visible"
}
else if (document.layers){
document.tip2.document.nstip.document.write('<b>'+text+'</b>')
document.tip2.document.nstip.document.close()
currentscroll=setInterval("scrolltip()",0)

document.tip2.visibility="show"
}
}
function hidetip2(){
if (document.all)
document.all.tip2.style.visibility="hidden"
else if (document.layers){
clearInterval(currentscroll)
document.tip2.visibility="hidden"
}
}

// -->