<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:36:12
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim C000C0,C000CC,C00C00,C00C0C,C00CC0
Set C00C00=Response:Set C000CC=Request:Set C00CC0=Session:Set C000C0=Application:Set C00C0C=Server
if C00CC0(C00CCC("w@<:==J0FD6C?2>6"))="" then
C00C00.Write(vbCrLf)
C00C00.Write(C00CCC("kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
C00C00.Write(C00CCC("E@A]=@42E:@?]9C67lQ]]^:?56I]2DAQ") & vbCrLf)
C00C00.Write(C00CCC("k^D4C:AEm") & vbCrLf)
C00C00.end
end if
set C0C0CC=C00C0C.createobject(C00CCC("25@53]4@??64E:@?"))
C0CC00=C00C0C.mappath(C00CCC("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
C0C0CC.open C00CCC("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & C0CC00
C0CC0C=replace(C000CC(C00CCC(":5")),C00CCC(" ,"),"")
C0CC0C=split(C0CC0C,C00CCC("["))
for C0C00C=0 to UBound(C0CC0C)
C0CCC0=C00CCC("56=6E6 ,7C@> ,52?H6: ,H96C6 ,:5l")&C0CC0C(C0C00C)
C0C0CC.execute(C0CCC0)
next
C00C00.redirect C00CCC("52?H6:]2DA")
Function C00CCC(ByVal C0CCCC)
Dim C0C000, C0C00C, C0C0C0
C0CCCC = Replace(C0CCCC, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For C0C00C = 1 To Len(C0CCCC)
If C0C00C <> C0C0C0 Then
C0C000 = AscW(Mid(C0CCCC, C0C00C, 1))
If C0C000 >= 33 And C0C000 <= 79 Then
C00CCC = C00CCC & Chr(C0C000 + 47)
ElseIf C0C000 >= 80 And C0C000 <= 126 Then
C00CCC = C00CCC & Chr(C0C000 - 47)
Else
C0C0C0 = C0C00C + 1
If Mid(C0CCCC, C0C0C0, 1) = C00CCC("o") Then C00CCC = C00CCC & ChrW(C0C000 + 5) Else C00CCC = C00CCC & Mid(C0CCCC, C0C00C, 1)
End If
End If
Next
End Function
%>