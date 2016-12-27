<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:28:15
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim CCC00,CCC0C,CCCC0,CCCCC,C00000
Set CCCC0=Response:Set CCC0C=Request:Set C00000=Session:Set CCC00=Application:Set CCCCC=Server
set C00C0C=CCCCC.createobject(C0000C("25@53]4@??64E:@?"))
C00CC0=CCCCC.mappath(C0000C("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
C00C0C.open C0000C("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & C00CC0
Function C0000C(ByVal C00CCC)
Dim C000C0, C000CC, C00C00
C00CCC = Replace(C00CCC, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For C000CC = 1 To Len(C00CCC)
If C000CC <> C00C00 Then
C000C0 = AscW(Mid(C00CCC, C000CC, 1))
If C000C0 >= 33 And C000C0 <= 79 Then
C0000C = C0000C & Chr(C000C0 + 47)
ElseIf C000C0 >= 80 And C000C0 <= 126 Then
C0000C = C0000C & Chr(C000C0 - 47)
Else
C00C00 = C000CC + 1
If Mid(C00CCC, C00C00, 1) = C0000C("o") Then C0000C = C0000C & ChrW(C000C0 + 5) Else C0000C = C0000C & Mid(C00CCC, C000CC, 1)
End If
End If
Next
End Function
%>