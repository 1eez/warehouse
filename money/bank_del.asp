<%
'�������� ���ݺ��������������޹�˾ ����
'����ʱ��:2014-03-29 13:31:17
'��ϵ��Ϣ:QQ��15916190
'�����޸������κδ���,�Ա�֤������������

Dim C000000,C00000C,C0000C0,C0000CC,C000C00
Set C0000C0=Response:Set C00000C=Request:Set C000C00=Session:Set C000000=Application:Set C0000CC=Server
if C000C00(C000C0C("w@<:==J0FD6C?2>6"))="" then
C0000C0.Write(vbCrLf)
C0000C0.Write(C000C0C("kD4C:AE ,=2?8F286lQ;2G2D4C:AEQm") & vbCrLf)
C0000C0.Write(C000C0C("E@A]=@42E:@?]9C67lQ]]^:?56I]2DAQ") & vbCrLf)
C0000C0.Write(C000C0C("k^D4C:AEm") & vbCrLf)
C0000C0.end
end if
set C00C00C=C0000CC.createobject(C000C0C("25@53]4@??64E:@?"))
C00C0C0=C0000CC.mappath(C000C0C("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
C00C00C.open C000C0C("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & C00C0C0
C00C0CC=replace(C00000C(C000C0C(":5")),C000C0C(" ,"),"")
C00C0CC=split(C00C0CC,C000C0C("["))
for C000CCC=0 to UBound(C00C0CC)
C00CC00=C000C0C("56=6E6 ,7C@> ,32?< ,H96C6 ,:5l")&C00C0CC(C000CCC)
C00C00C.execute(C00CC00)
next
C0000C0.redirect C000C0C("32?<]2DA")
Function C000C0C(ByVal C00CC0C)
Dim C000CC0, C000CCC, C00C000
C00CC0C = Replace(C00CC0C, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For C000CCC = 1 To Len(C00CC0C)
If C000CCC <> C00C000 Then
C000CC0 = AscW(Mid(C00CC0C, C000CCC, 1))
If C000CC0 >= 33 And C000CC0 <= 79 Then
C000C0C = C000C0C & Chr(C000CC0 + 47)
ElseIf C000CC0 >= 80 And C000CC0 <= 126 Then
C000C0C = C000C0C & Chr(C000CC0 - 47)
Else
C00C000 = C000CCC + 1
If Mid(C00CC0C, C00C000, 1) = C000C0C("o") Then C000C0C = C000C0C & ChrW(C000CC0 + 5) Else C000C0C = C000C0C & Mid(C00CC0C, C000CCC, 1)
End If
End If
Next
End Function
%>