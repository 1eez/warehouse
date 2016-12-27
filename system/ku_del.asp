<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:36:23
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim C0CCC0,C0CCCC,CC0000,CC000C,CC00C0
Set CC0000=Response:Set C0CCCC=Request:Set CC00C0=Session:Set C0CCC0=Application:Set CC000C=Server
if CC00C0(CC00CC("w@<:==J0FD6C?2>6"))="" then
CC0000.Write(vbCrLf)
CC0000.Write(CC00CC("kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
CC0000.Write(CC00CC("E@A]=@42E:@?]9C67lQ]]^:?56I]2DAQ") & vbCrLf)
CC0000.Write(CC00CC("k^D4C:AEm") & vbCrLf)
CC0000.end
end if
set CC0CCC=CC000C.createobject(CC00CC("25@53]4@??64E:@?"))
CCC000=CC000C.mappath(CC00CC("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
CC0CCC.open CC00CC("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & CCC000
CCC00C=replace(C0CCCC(CC00CC(":5")),CC00CC(" ,"),"")
CCC00C=split(CCC00C,CC00CC("["))
for CC0C0C=0 to UBound(CCC00C)
CCC0C0=CC00CC("D6=64E ,Y ,7C@> ,AC@5F:E ,H96C6 ,:50<Fl")&CCC00C(CC0C0C)
set CCC0CC=CC0CCC.execute(CCC0C0)
if CCC0CC.eof=false then
CC0000.Write(vbCrLf)
CC0000.Write(CC00CC(" , ,kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
CC0000.Write(CC00CC(" , , , ,2=6CEWQ歟@从@庎@丨@迓@孓@朄@亢@咼@，,丈@胸@创@陟@！,QX") & vbCrLf)
CC0000.Write(CC00CC("	,H:?5@H]9:DE@CJ]8@W\`X") & vbCrLf)
CC0000.Write(CC00CC(" , ,k^D4C:AEm") & vbCrLf)
CC0000.end
exit for
end if
CC0CCC.execute(CC00CC("56=6E6 ,7C@> ,AC@5F:E ,H96C6 ,:50<Fl")&CCC00C(CC0C0C))
CCC0C0=CC00CC("56=6E6 ,7C@> ,<F ,H96C6 ,:5l")&CCC00C(CC0C0C)
CC0CCC.execute(CCC0C0)
next
CC0000.redirect CC00CC("<F]2DA")
Function CC00CC(ByVal CCCC00)
Dim CC0C00, CC0C0C, CC0CC0
CCCC00 = Replace(CCCC00, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For CC0C0C = 1 To Len(CCCC00)
If CC0C0C <> CC0CC0 Then
CC0C00 = AscW(Mid(CCCC00, CC0C0C, 1))
If CC0C00 >= 33 And CC0C00 <= 79 Then
CC00CC = CC00CC & Chr(CC0C00 + 47)
ElseIf CC0C00 >= 80 And CC0C00 <= 126 Then
CC00CC = CC00CC & Chr(CC0C00 - 47)
Else
CC0CC0 = CC0C0C + 1
If Mid(CCCC00, CC0CC0, 1) = CC00CC("o") Then CC00CC = CC00CC & ChrW(CC0C00 + 5) Else CC00CC = CC00CC & Mid(CCCC00, CC0C0C, 1)
End If
End If
Next
End Function
%>