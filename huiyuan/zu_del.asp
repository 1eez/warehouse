<%
'�������� ���ݺ��������������޹�˾ ����
'����ʱ��:2014-03-29 13:31:00
'��ϵ��Ϣ:QQ��15916190
'�����޸������κδ���,�Ա�֤������������

Dim CCC0CC,CCCC00,CCCC0C,CCCCC0,CCCCCC
Set CCCC0C=Response:Set CCCC00=Request:Set CCCCCC=Session:Set CCC0CC=Application:Set CCCCC0=Server
if CCCCCC(C000000("w@<:==J0FD6C?2>6"))="" then
CCCC0C.Write(vbCrLf)
CCCC0C.Write(C000000("kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
CCCC0C.Write(C000000("E@A]=@42E:@?]9C67lQ]]^:?56I]2DAQ") & vbCrLf)
CCCC0C.Write(C000000("k^D4C:AEm") & vbCrLf)
CCCC0C.end
end if
set C000C00=CCCCC0.createobject(C000000("25@53]4@??64E:@?"))
C000C0C=CCCCC0.mappath(C000000("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
C000C00.open C000000("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & C000C0C
C000CC0=replace(CCCC00(C000000(":5")),C000000(" ,"),"")
C000CC0=split(C000CC0,C000000("["))
for C0000C0=0 to UBound(C000CC0)
C000CCC=C000000("56=6E6 ,7C@> ,9F:JF2? ,H96C6 ,:50KFl")&C000CC0(C0000C0)
C000C00.execute(C000CCC)
C000CCC=C000000("56=6E6 ,7C@> ,KF09F:JF2? ,H96C6 ,:5l")&C000CC0(C0000C0)
C000C00.execute(C000CCC)
next
CCCC0C.redirect C000000("KF]2DA")
Function C000000(ByVal C00C000)
Dim C00000C, C0000C0, C0000CC
C00C000 = Replace(C00C000, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For C0000C0 = 1 To Len(C00C000)
If C0000C0 <> C0000CC Then
C00000C = AscW(Mid(C00C000, C0000C0, 1))
If C00000C >= 33 And C00000C <= 79 Then
C000000 = C000000 & Chr(C00000C + 47)
ElseIf C00000C >= 80 And C00000C <= 126 Then
C000000 = C000000 & Chr(C00000C - 47)
Else
C0000CC = C0000C0 + 1
If Mid(C00C000, C0000CC, 1) = C000000("o") Then C000000 = C000000 & ChrW(C00000C + 5) Else C000000 = C000000 & Mid(C00C000, C0000C0, 1)
End If
End If
Next
End Function
%>