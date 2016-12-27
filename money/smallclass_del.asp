<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:31:55
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim C00000,C0000C,C000C0,C000CC,C00C00
Set C000C0=Response:Set C0000C=Request:Set C00C00=Session:Set C00000=Application:Set C000CC=Server
if C00C00(C00C0C("w@<:==J0FD6C?2>6"))="" then
C000C0.Write(vbCrLf)
C000C0.Write(C00C0C("kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
C000C0.Write(C00C0C("E@A]=@42E:@?]9C67lQ]]^:?56I]2DAQ") & vbCrLf)
C000C0.Write(C00C0C("k^D4C:AEm") & vbCrLf)
C000C0.end
end if
set C0C00C=C000CC.createobject(C00C0C("25@53]4@??64E:@?"))
C0C0C0=C000CC.mappath(C00C0C("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
C0C00C.open C00C0C("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & C0C0C0
C0C0CC=replace(C0000C(C00C0C(":5")),C00C0C(" ,"),"")
C0C0CC=split(C0C0CC,C00C0C("["))
for C00CCC=0 to UBound(C0C0CC)
C0CC00=C00C0C("56=6E6 ,7C@> ,w@<:==J0>@?6J ,H96C6 ,:50D>2==4=2DDl")&C0C0CC(C00CCC)
C0C00C.execute(C0CC00)
C0CC00=C00C0C("56=6E6 ,7C@> ,>@?6J0D>2==4=2DD ,H96C6 ,:5l")&C0C0CC(C00CCC)
C0C00C.execute(C0CC00)
next
C000C0.redirect C00C0C("D>2==4=2DD]2DA")
Function C00C0C(ByVal C0CC0C)
Dim C00CC0, C00CCC, C0C000
C0CC0C = Replace(C0CC0C, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For C00CCC = 1 To Len(C0CC0C)
If C00CCC <> C0C000 Then
C00CC0 = AscW(Mid(C0CC0C, C00CCC, 1))
If C00CC0 >= 33 And C00CC0 <= 79 Then
C00C0C = C00C0C & Chr(C00CC0 + 47)
ElseIf C00CC0 >= 80 And C00CC0 <= 126 Then
C00C0C = C00C0C & Chr(C00CC0 - 47)
Else
C0C000 = C00CCC + 1
If Mid(C0CC0C, C0C000, 1) = C00C0C("o") Then C00C0C = C00C0C & ChrW(C00CC0 + 5) Else C00C0C = C00C0C & Mid(C0CC0C, C00CCC, 1)
End If
End If
Next
End Function
%>