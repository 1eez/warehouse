<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:37:42
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim CC00C0,CC00CC,CC0C00,CC0C0C,CC0CC0
Set CC0C00=Response:Set CC00CC=Request:Set CC0CC0=Session:Set CC00C0=Application:Set CC0C0C=Server
if CC0CC0(CC0CCC("w@<:==J0FD6C?2>6"))="" then
CC0C00.Write(vbCrLf)
CC0C00.Write(CC0CCC("kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
CC0C00.Write(CC0CCC("E@A]=@42E:@?]9C67lQ]]^:?56I]2DAQ") & vbCrLf)
CC0C00.Write(CC0CCC("k^D4C:AEm") & vbCrLf)
CC0C00.end
end if
set CCC0CC=CC0C0C.createobject(CC0CCC("25@53]4@??64E:@?"))
CCCC00=CC0C0C.mappath(CC0CCC("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
CCC0CC.open CC0CCC("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & CCCC00
CCCC0C=replace(CC00CC(CC0CCC(":5")),CC0CCC(" ,"),"")
CCCC0C=split(CCCC0C,CC0CCC("["))
for CCC00C=0 to UBound(CCCC0C)
CCCCC0=CC0CCC("56=6E6 ,7C@> ,=@8:? ,H96C6 ,:5km` ,2?5 ,:50KFl")&CCCC0C(CCC00C)
CCC0CC.execute(CCCCC0)
CCCCC0=CC0CCC("56=6E6 ,7C@> ,KF0=@8:? ,H96C6 ,:5l")&CCCC0C(CCC00C)
CCC0CC.execute(CCCCC0)
next
CC0C00.redirect CC0CCC("KF]2DA")
Function CC0CCC(ByVal CCCCCC)
Dim CCC000, CCC00C, CCC0C0
CCCCCC = Replace(CCCCCC, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For CCC00C = 1 To Len(CCCCCC)
If CCC00C <> CCC0C0 Then
CCC000 = AscW(Mid(CCCCCC, CCC00C, 1))
If CCC000 >= 33 And CCC000 <= 79 Then
CC0CCC = CC0CCC & Chr(CCC000 + 47)
ElseIf CCC000 >= 80 And CCC000 <= 126 Then
CC0CCC = CC0CCC & Chr(CCC000 - 47)
Else
CCC0C0 = CCC00C + 1
If Mid(CCCCCC, CCC0C0, 1) = CC0CCC("o") Then CC0CCC = CC0CCC & ChrW(CCC000 + 5) Else CC0CCC = CC0CCC & Mid(CCCCCC, CCC00C, 1)
End If
End If
Next
End Function
%>