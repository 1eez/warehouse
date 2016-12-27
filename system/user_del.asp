<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:36:58
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim C0CC0,C0CCC,CC000,CC00C,CC0C0
Set CC000=Response:Set C0CCC=Request:Set CC0C0=Session:Set C0CC0=Application:Set CC00C=Server
if CC0C0(CC0CC("w@<:==J0FD6C?2>6"))="" then
CC000.Write(vbCrLf)
CC000.Write(CC0CC("kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
CC000.Write(CC0CC("E@A]=@42E:@?]9C67lQ]]^:?56I]2DAQ") & vbCrLf)
CC000.Write(CC0CC("k^D4C:AEm") & vbCrLf)
CC000.end
end if
set CCCCC=CC00C.createobject(CC0CC("25@53]4@??64E:@?"))
C00000=CC00C.mappath(CC0CC("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
CCCCC.open CC0CC("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & C00000
C0000C=replace(C0CCC(CC0CC(":5")),CC0CC(" ,"),"")
C0000C=split(C0000C,CC0CC("["))
for CCC0C=0 to UBound(C0000C)
C000C0=CC0CC("56=6E6 ,7C@> ,=@8:? ,H96C6 ,:5km` ,2?5 ,:5l")&C0000C(CCC0C)
CCCCC.execute(C000C0)
next
CC000.redirect CC0CC("FD6C]2DA")
Function CC0CC(ByVal C000CC)
Dim CCC00, CCC0C, CCCC0
C000CC = Replace(C000CC, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For CCC0C = 1 To Len(C000CC)
If CCC0C <> CCCC0 Then
CCC00 = AscW(Mid(C000CC, CCC0C, 1))
If CCC00 >= 33 And CCC00 <= 79 Then
CC0CC = CC0CC & Chr(CCC00 + 47)
ElseIf CCC00 >= 80 And CCC00 <= 126 Then
CC0CC = CC0CC & Chr(CCC00 - 47)
Else
CCCC0 = CCC0C + 1
If Mid(C000CC, CCCC0, 1) = CC0CC("o") Then CC0CC = CC0CC & ChrW(CCC00 + 5) Else CC0CC = CC0CC & Mid(C000CC, CCC0C, 1)
End If
End If
Next
End Function
%>