<%
'�������� ���ݺ��������������޹�˾ ����
'����ʱ��:2014-03-29 13:36:00
'��ϵ��Ϣ:QQ��15916190
'�����޸������κδ���,�Ա�֤������������

Dim CC0CCC,CCC000,CCC00C,CCC0C0,CCC0CC
Set CCC00C=Response:Set CCC000=Request:Set CCC0CC=Session:Set CC0CCC=Application:Set CCC0C0=Server
if CCC0CC(CCCC00("w@<:==J0FD6C?2>6"))="" then
CCC00C.Write(vbCrLf)
CCC00C.Write(CCCC00("kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
CCC00C.Write(CCCC00("E@A]=@42E:@?]9C67lQ]]^:?56I]2DAQ") & vbCrLf)
CCC00C.Write(CCCC00("k^D4C:AEm") & vbCrLf)
CCC00C.end
end if
set C000000=CCC0C0.createobject(CCCC00("25@53]4@??64E:@?"))
C00000C=CCC0C0.mappath(CCCC00("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
C000000.open CCCC00("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & C00000C
C0000C0=replace(CCC000(CCCC00(":5")),CCCC00(" ,"),"")
C0000C0=split(C0000C0,CCCC00("["))
for CCCCC0=0 to UBound(C0000C0)
C0000CC=CCCC00("56=6E6 ,7C@> ,D>2==4=2DD ,H96C6 ,:503:84=2DDl")&C0000C0(CCCCC0)
C000000.execute(C0000CC)
C0000CC=CCCC00("56=6E6 ,7C@> ,AC@5F:E ,H96C6 ,:503:84=2DDl")&C0000C0(CCCCC0)
C000000.execute(C0000CC)
C0000CC=CCCC00("56=6E6 ,7C@> ,3:84=2DD ,H96C6 ,:5l")&C0000C0(CCCCC0)
C000000.execute(C0000CC)
next
CCC00C.redirect CCCC00("3:84=2DD]2DA")
Function CCCC00(ByVal C000C00)
Dim CCCC0C, CCCCC0, CCCCCC
C000C00 = Replace(C000C00, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For CCCCC0 = 1 To Len(C000C00)
If CCCCC0 <> CCCCCC Then
CCCC0C = AscW(Mid(C000C00, CCCCC0, 1))
If CCCC0C >= 33 And CCCC0C <= 79 Then
CCCC00 = CCCC00 & Chr(CCCC0C + 47)
ElseIf CCCC0C >= 80 And CCCC0C <= 126 Then
CCCC00 = CCCC00 & Chr(CCCC0C - 47)
Else
CCCCCC = CCCCC0 + 1
If Mid(C000C00, CCCCCC, 1) = CCCC00("o") Then CCCC00 = CCCC00 & ChrW(CCCC0C + 5) Else CCCC00 = CCCC00 & Mid(C000C00, CCCCC0, 1)
End If
End If
Next
End Function
%>