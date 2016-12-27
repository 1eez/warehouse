<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:31:25
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim CC00C,CC0C0,CC0CC,CCC00,CCC0C
Set CC0CC=Response:Set CC0C0=Request:Set CCC0C=Session:Set CC00C=Application:Set CCC00=Server
if CCC0C(CCCC0("w@<:==J0FD6C?2>6"))="" then
CC0CC.Write(vbCrLf)
CC0CC.Write(CCCC0("kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
CC0CC.Write(CCCC0("E@A]=@42E:@?]9C67lQ]]^:?56I]2DAQ") & vbCrLf)
CC0CC.Write(CCCC0("k^D4C:AEm") & vbCrLf)
CC0CC.end
end if
set C000C0=CCC00.createobject(CCCC0("25@53]4@??64E:@?"))
C000CC=CCC00.mappath(CCCC0("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
C000C0.open CCCC0("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & C000CC
C00C00=replace(CC0C0(CCCC0(":5")),CCCC0(" ,"),"")
C00C00=split(C00C00,CCCC0("["))
for C00000=0 to UBound(C00C00)
C00C0C=CCCC0("56=6E6 ,7C@> ,>@?6J0D>2==4=2DD ,H96C6 ,:503:84=2DDl")&C00C00(C00000)
C000C0.execute(C00C0C)
C00C0C=CCCC0("56=6E6 ,7C@> ,w@<:==J0>@?6J ,H96C6 ,:503:84=2DDl")&C00C00(C00000)
C000C0.execute(C00C0C)
C00C0C=CCCC0("56=6E6 ,7C@> ,>@?6J03:84=2DD ,H96C6 ,:5l")&C00C00(C00000)
C000C0.execute(C00C0C)
next
CC0CC.redirect CCCC0("3:84=2DD]2DA")
Function CCCC0(ByVal C00CC0)
Dim CCCCC, C00000, C0000C
C00CC0 = Replace(C00CC0, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For C00000 = 1 To Len(C00CC0)
If C00000 <> C0000C Then
CCCCC = AscW(Mid(C00CC0, C00000, 1))
If CCCCC >= 33 And CCCCC <= 79 Then
CCCC0 = CCCC0 & Chr(CCCCC + 47)
ElseIf CCCCC >= 80 And CCCCC <= 126 Then
CCCC0 = CCCC0 & Chr(CCCCC - 47)
Else
C0000C = C00000 + 1
If Mid(C00CC0, C0000C, 1) = CCCC0("o") Then CCCC0 = CCCC0 & ChrW(CCCCC + 5) Else CCCC0 = CCCC0 & Mid(C00CC0, C00000, 1)
End If
End If
Next
End Function
%>