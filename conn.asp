<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:28:14
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim CC0000,CC000C,CC00C0,CC00CC,CC0C00
Set CC00C0=Response:Set CC000C=Request:Set CC0C00=Session:Set CC0000=Application:Set CC00CC=Server
set CCC00C=CC00CC.createobject(CC0C0C("25@53]4@??64E:@?"))
CCC0C0=CC00CC.mappath(CC0C0C("52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
CCC00C.open CC0C0C("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj ,52E2 ,D@FC46l") & CCC0C0
Function CC0C0C(ByVal CCC0CC)
Dim CC0CC0, CC0CCC, CCC000
CCC0CC = Replace(CCC0CC, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For CC0CCC = 1 To Len(CCC0CC)
If CC0CCC <> CCC000 Then
CC0CC0 = AscW(Mid(CCC0CC, CC0CCC, 1))
If CC0CC0 >= 33 And CC0CC0 <= 79 Then
CC0C0C = CC0C0C & Chr(CC0CC0 + 47)
ElseIf CC0CC0 >= 80 And CC0CC0 <= 126 Then
CC0C0C = CC0C0C & Chr(CC0CC0 - 47)
Else
CCC000 = CC0CCC + 1
If Mid(CCC0CC, CCC000, 1) = CC0C0C("o") Then CC0C0C = CC0C0C & ChrW(CC0CC0 + 5) Else CC0C0C = CC0C0C & Mid(CCC0CC, CC0CCC, 1)
End If
End If
Next
End Function
%>