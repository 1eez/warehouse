<%
'�������� ���ݺ��������������޹�˾ ����
'����ʱ��:2014-03-29 13:31:12
'��ϵ��Ϣ:QQ��15916190
'�����޸������κδ���,�Ա�֤������������

Dim C000C0C,C000CC0,C000CCC,C00C000,C00C00C
Set C000CCC=Response:Set C000CC0=Request:Set C00C00C=Session:Set C000C0C=Application:Set C00C000=Server
Dim C00C0CC,C00CC00,C00CC0C,C00CCC0,C00CCCC,C0C0000,C0C000C
C0C0C0C=C00C0C0("FA52E6M4@F?EM2?5M6I64M:?D6CEM49CM>:5M>2DE6CM56=6E6MECF?42E6M564=2C6M492CMD4C:AEMC6BF6DEM��,")
C00CC0C = replace(C0C0C0C,C00C0C0("��,"),C00C0C0("V"))
C00CCC0 = split(C00CC0C,C00C0C0("M"))
If C000CC0.Form<>"" Then
For Each C00C0CC In C000CC0.Form
For C00CCCC=0 To Ubound(C00CCC0)
If Instr(LCase(C000CC0.Form(C00C0CC)),C00CCC0(C00CCCC))<>0 Then
C000CCC.write C00C0C0("kD4C:AEm2=6CEWV��@٢@�@מ@��,�C@�p@�c@��@��@�@מ@�m@ֻ@��@��@��@��,-?-?��,ʥ@��@�G@ؽ@�m@��@��@ح@��@�@@��@��@�H@��@VXj9:DE@CJ]8@W\`Xjk^D4C:AEm")
C000CCC.end
End If
Next
Next
End If
If C000CC0.QueryString<>"" Then
For Each C00CC00 In C000CC0.QueryString
For C00CCCC=0 To Ubound(C00CCC0)
If Instr(LCase(C000CC0.QueryString(C00CC00)),C00CCC0(C00CCCC))<>0 Then
C000CCC.write C00C0C0("kD4C:AEm2=6CEWV��@٢@�@מ@��,�C@�p@�c@��@��@�@מ@�m@ֻ@��@��@��@��,-?-?��,ʥ@��@�G@ؽ@�m@��@��@ح@��@�@@��@��@�H@��@VXj9:DE@CJ]8@W\`Xjk^D4C:AEm")
C000CCC.end
End If
Next
Next
End If
Function C00C0C0(ByVal C0C0CC0)
Dim C0C00C0, C0C00CC, C0C0C00
C0C0CC0 = Replace(C0C0CC0, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For C0C00CC = 1 To Len(C0C0CC0)
If C0C00CC <> C0C0C00 Then
C0C00C0 = AscW(Mid(C0C0CC0, C0C00CC, 1))
If C0C00C0 >= 33 And C0C00C0 <= 79 Then
C00C0C0 = C00C0C0 & Chr(C0C00C0 + 47)
ElseIf C0C00C0 >= 80 And C0C00C0 <= 126 Then
C00C0C0 = C00C0C0 & Chr(C0C00C0 - 47)
Else
C0C0C00 = C0C00CC + 1
If Mid(C0C0CC0, C0C0C00, 1) = C00C0C0("o") Then C00C0C0 = C00C0C0 & ChrW(C0C00C0 + 5) Else C00C0C0 = C00C0C0 & Mid(C0C0CC0, C0C00CC, 1)
End If
End If
Next
End Function
%>