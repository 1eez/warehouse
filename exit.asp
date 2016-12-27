<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:28:16
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim C0000C,C000C0,C000CC,C00C00,C00C0C
Set C000CC=Response:Set C000C0=Request:Set C00C0C=Session:Set C0000C=Application:Set C00C00=Server
C00C0C(C00CC0("w@<:==J0FD6C?2>6"))=""
C00C0C(C00CC0("w@<:==J0:5"))=""
C00C0C(C00CC0("w@<:==J0KF"))=""
C000CC.Redirect C00CC0(":?56I]2DA")
Function C00CC0(ByVal C0C0C0)
Dim C00CCC, C0C000, C0C00C
C0C0C0 = Replace(C0C0C0, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For C0C000 = 1 To Len(C0C0C0)
If C0C000 <> C0C00C Then
C00CCC = AscW(Mid(C0C0C0, C0C000, 1))
If C00CCC >= 33 And C00CCC <= 79 Then
C00CC0 = C00CC0 & Chr(C00CCC + 47)
ElseIf C00CCC >= 80 And C00CCC <= 126 Then
C00CC0 = C00CC0 & Chr(C00CCC - 47)
Else
C0C00C = C0C000 + 1
If Mid(C0C0C0, C0C00C, 1) = C00CC0("o") Then C00CC0 = C00CC0 & ChrW(C00CCC + 5) Else C00CC0 = C00CC0 & Mid(C0C0C0, C0C000, 1)
End If
End If
Next
End Function
%>