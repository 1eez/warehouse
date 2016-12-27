/*****************************************************************************
              超级年历    制作:佛山谭剑泉  year2000@21cn.com
*****************************************************************************/
<!--
            var gNum
            for(i=0;i<6;i++) {
               document.write('<tr align=center>')
               for(j=0;j<7;j++) {
                  gNum = i*7+j
                  document.write('<td id="GD' + gNum +'" onMouseOver="mOvr(' + gNum +')" onMouseOut="mOut()"><B><font id="SD' + gNum +'" size=5 face="Arial"')
                  if(j == 0) document.write(' color=red')
                  if(j == 6)
                     if(i%2==1) document.write(' color=red')
                        else document.write(' color=red')
                  document.write(' TITLE=""> </font></B><br><font id="LD' + gNum + '"  style="font-size:9pt"> </font></td>')
               }
               document.write('</tr>')
            }
            //-->