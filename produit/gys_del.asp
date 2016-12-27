<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:33:04
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim C0C0C,C0CC0,C0CCC,CC000,CC00C
Set C0CCC=Response:Set C0CC0=Request:Set CC00C=Session:Set C0C0C=Application:Set CC000=Server
if CC00C(CC0C0("w@<:==J0FD6C?2>6"))="" then
C0CCC.Write(vbCrLf)
C0CCC.Write(CC0C0("kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
C0CCC.Write(CC0C0("E@A]=@42E:@?]9C67lQ]]^:?56I]2DAQ") & vbCrLf)
C0CCC.Write(CC0C0("k^D4C:AEm") & vbCrLf)
C0CCC.end
end if
set CCCC0=CC000.createobject(CC0C0("25@53]4@??64E:@?"))
CCCCC=CC000.mappath(CC0C0("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
CCCC0.open CC0C0("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & CCCCC
C00000=replace(C0CC0(CC0C0(":5")),CC0C0(" ,"),"")
C00000=split(C00000,CC0C0("["))
for CCC00=0 to UBound(C00000)
C0000C=CC0C0("56=6E6 ,7C@> ,8JD ,H96C6 ,:5l")&C00000(CCC00)
CCCC0.execute(C0000C)
next
C0CCC.redirect CC0C0("8JD]2DA")
Function CC0C0(ByVal C000C0)
Dim CC0CC, CCC00, CCC0C
C000C0 = Replace(C000C0, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For CCC00 = 1 To Len(C000C0)
If CCC00 <> CCC0C Then
CC0CC = AscW(Mid(C000C0, CCC00, 1))
If CC0CC >= 33 And CC0CC <= 79 Then
CC0C0 = CC0C0 & Chr(CC0CC + 47)
ElseIf CC0CC >= 80 And CC0CC <= 126 Then
CC0C0 = CC0C0 & Chr(CC0CC - 47)
Else
CCC0C = CCC00 + 1
If Mid(C000C0, CCC0C, 1) = CC0C0("o") Then CC0C0 = CC0C0 & ChrW(CC0CC + 5) Else CC0C0 = CC0C0 & Mid(C000C0, CCC00, 1)
End If
End If
Next
End Function
%>