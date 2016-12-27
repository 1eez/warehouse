<%
'本代码由 常州红金羚软件技术有限公司 创建
'创建时间:2014-03-29 13:32:34
'联系信息:QQ：15916190
'请勿修改下列任何代码,以保证程序正常运行

Dim CCC000,CCC00C,CCC0C0,CCC0CC,CCCC00
Set CCC0C0=Response:Set CCC00C=Request:Set CCCC00=Session:Set CCC000=Application:Set CCC0CC=Server
set C00000C=CCC0CC.createobject(CCCC0C("25@53]4@??64E:@?"))
C0000C0=CCC0CC.mappath(CCCC0C("]]^52E2^Rw@<:==J0qFD:?6DD0;I4]52E"))
C00000C.open CCCC0C("AC@G:56Cl>:4C@D@7E];6E]@=653]c]_j!6CD:DE ,$64FC:EJ ,x?7@lu2=D6jy6E ,~{tsqis2E232D6 ,!2DDH@C5lw@<:==JRhhhj52E2 ,D@FC46l") & C0000C0
CCC0C0.Write(vbCrLf)
CCC0C0.Write(CCCC0C(" ,") & vbCrLf)
CCC0C0.Write(CCCC0C(" ,") & vbCrLf)
CCC0C0.Write(CCCC0C("kPs~r%*!t ,w%|{ ,!&q{xr ,Q\^^(br^^s%s ,w%|{ ,c]_` ,%C2?D:E:@?2=^^t}Q ,Q9EEAi^^HHH]Hb]@C8^%#^9E>=c^=@@D6]5E5Qm ,") & vbCrLf)
C0000CC=replace(replace(replace(now,CCCC0C("i"),""),CCCC0C(" ,"),""),CCCC0C("^"),"")
CCC0C0.Buffer = True
CCC0C0.ContentType = CCCC0C("2AA=:42E:@?^G?5]>D\6I46=")
CCC0C0.AddHeader CCCC0C("4@?E6?E\5:DA@D:E:@?"), CCCC0C(":?=:?6j ,7:=6?2>6 ,l ,")&C0000CC&CCCC0C("]I=D")
CCC0C0.Write(vbCrLf)
CCC0C0.Write(CCCC0C(" ,") & vbCrLf)
CCC0C0.Write(CCCC0C("k9E>=m ,") & vbCrLf)
CCC0C0.Write(CCCC0C("k9625m ,") & vbCrLf)
CCC0C0.Write(CCCC0C("k>6E2 ,9EEA\6BF:GlQr@?E6?E\%JA6Q ,4@?E6?ElQE6IE^9E>=j ,492CD6El83ab`aQm ,") & vbCrLf)
CCC0C0.Write(CCCC0C("kE:E=6m寷@凵@6I46=k^E:E=6m ,") & vbCrLf)
CCC0C0.Write(CCCC0C("k^9625m ,") & vbCrLf)
CCC0C0.Write(CCCC0C("kq~s*m") & vbCrLf)
C000C00=CCC00C(CCCC0C("A286"))
if C000C00<1 or C000C00="" then
C000C00="1"
end if
C000C0C=CCC00C(CCCC0C("<F"))
C000CC0=CCC00C(CCCC0C("3:84=2DD"))
C000CCC=CCC00C(CCCC0C("D>2==4=2DD"))
if C000CC0="" then C000CCC=""
C00C000=CCC00C(CCCC0C("<6JH@C5"))
if CCCC00(CCCC0C("w@<:==J0:5"))="1" or fla88="1" then
C00C00C=CCCC0C("D6=64E ,Y ,7C@> ,<F ,@C56C ,3J ,:5")
set C00C0C0=C00000C.execute(C00C00C)
else
C00C00C=CCCC0C("D6=64E ,Y ,7C@> ,<F ,H96C6 ,:?DECW=@8:?[V")&CCCC00(CCCC0C("w@<:==J0:5"))&CCCC0C("[VXm_ ,@C56C ,3J ,:5")
set C00C0C0=C00000C.execute(C00C00C)
if C00C0C0.eof then
C000C0C="0"
elseif CCC00C(CCCC0C("<F"))="" then
C000C0C=C00C0C0(CCCC0C(":5"))
end if
end if
C00C00C=CCCC0C("D6=64E ,Y ,7C@> ,AC@5F:E ,H96C6 ,`l`")
if C00C000<>"" then
C00C00C=C00C00C&CCCC0C(" ,2?5 ,WE:E=6 ,=:<6 ,VT")&C00C000&CCCC0C("TV ,@C ,9F@92@ ,=:<6 ,VT")&C00C000&CCCC0C("TVX")
end if
if C000C0C<>"" then
C00C00C=C00C00C&CCCC0C(" ,2?5 ,:50<Fl")&C000C0C
end if
if C000CC0<>"" then
C00C00C=C00C00C&CCCC0C(" ,2?5 ,:503:84=2DDl")&C000CC0
end if
if C000CCC<>"" then
C00C00C=C00C00C&CCCC0C(" ,2?5 ,:50D>2==4=2DDl")&C000CCC
end if
if CCC00C(CCCC0C("@C56C`"))<>"" then
C00C00C=C00C00C&CCCC0C(" ,@C56C ,3J ,A9@E@ ,")&CCC00C(CCCC0C("@C56C`"))
elseif CCC00C(CCCC0C("@C56Ca"))<>"" then
C00C00C=C00C00C&CCCC0C(" ,@C56C ,3J ,9F@92@ ,")&CCC00C(CCCC0C("@C56Ca"))
elseif CCC00C(CCCC0C("@C56Cb"))<>"" then
C00C00C=C00C00C&CCCC0C(" ,@C56C ,3J ,E:E=6 ,")&CCC00C(CCCC0C("@C56Cb"))
elseif CCC00C(CCCC0C("@C56Cc"))<>"" then
C00C00C=C00C00C&CCCC0C(" ,@C56C ,3J ,8F:86 ,")&CCC00C(CCCC0C("@C56Cc"))
elseif CCC00C(CCCC0C("@C56Cd"))<>"" then
C00C00C=C00C00C&CCCC0C(" ,@C56C ,3J ,52?H6: ,")&CCC00C(CCCC0C("@C56Cd"))
elseif CCC00C(CCCC0C("@C56Ce"))<>"" then
C00C00C=C00C00C&CCCC0C(" ,@C56C ,3J ,D9F=:2? ,")&CCC00C(CCCC0C("@C56Ce"))
elseif CCC00C(CCCC0C("@C56Cf"))<>"" then
C00C00C=C00C00C&CCCC0C(" ,@C56C ,3J ,AC:46a ,")&CCC00C(CCCC0C("@C56Cf"))
elseif CCC00C(CCCC0C("@C56Cg"))<>"" then
C00C00C=C00C00C&CCCC0C(" ,@C56C ,3J ,D9F=:2?YAC:46a ,")&CCC00C(CCCC0C("@C56Cg"))
else
C00C00C=C00C00C&CCCC0C(" ,@C56C ,3J ,:5 ,56D4")
end if
set C00C0CC =CCC0CC.createobject(CCCC0C("ps~sq]#64@C5$6E"))
C00C0CC.open C00C00C,C00000C,1,3
CCC0C0.Write(vbCrLf)
CCC0C0.Write(CCCC0C("kE23=6 ,H:5E9lQ`__TQ ,3@C56ClQ`Q ,2=:8?lQ46?E6CQ ,46==A255:?8lQaQ ,46==DA24:?8lQ_Qm") & vbCrLf)
CCC0C0.Write(CCCC0C("kECm") & vbCrLf)
CCC0C0.Write(CCCC0C(" , ,kE9m床@史@k^E9m") & vbCrLf)
CCC0C0.Write(CCCC0C(" , ,kE9m财@史@k^E9m") & vbCrLf)
CCC0C0.Write(CCCC0C(" , ,kE9m亢@咼@合@秫@k^E9m") & vbCrLf)
CCC0C0.Write(CCCC0C(" , ,kE9m覿@样@k^E9m") & vbCrLf)
CCC0C0.Write(CCCC0C(" , ,kE9m卐@佈@k^E9m") & vbCrLf)
CCC0C0.Write(CCCC0C(" , ,kE9m庎@孓@敫@释@k^E9m") & vbCrLf)
CCC0C0.Write(CCCC0C(" , ,"))
if CCCC00(CCCC0C("w@<:==J0:5"))="1" or fla87="1" then
CCC0C0.Write(vbCrLf)
CCC0C0.Write(CCCC0C(" , ,kE9m迖@财@卐@仲@k^E9m") & vbCrLf)
CCC0C0.Write(CCCC0C(" , ,kE9m里@题@k^E9m") & vbCrLf)
CCC0C0.Write(CCCC0C(" , ,"))
end if
CCC0C0.Write(vbCrLf)
CCC0C0.Write(CCCC0C("k^ECm") & vbCrLf)
CCCCCC= (56 * 32 - 1792)
do while C00C0CC.eof=false
CCCCCC=CCCCCC+ (71 * 55 - 3904)
CCC0C0.Write(vbCrLf)
CCC0C0.Write(CCCC0C("kEC ,4=2DDlQ%saQm") & vbCrLf)
CCC0C0.Write(CCCC0C("kE5 ,2=:8?lQ46?E6CQm"))
CCC0C0.Write CCCCCC
CCC0C0.Write(CCCC0C("k^E5m") & vbCrLf)
CCC0C0.Write(CCCC0C("kE5 ,2=:8?lQ46?E6CQm"))
CCC0C0.Write C00C0CC(CCCC0C("9F@92@"))
CCC0C0.Write(CCCC0C("k^E5m") & vbCrLf)
CCC0C0.Write(CCCC0C("kE5 ,2=:8?lQ46?E6CQm"))
CCC0C0.Write C00C0CC(CCCC0C("E:E=6"))
CCC0C0.Write(CCCC0C("k^E5m") & vbCrLf)
CCC0C0.Write(CCCC0C("kE5 ,2=:8?lQ46?E6CQm"))
CCC0C0.Write C00C0CC(CCCC0C("8F:86"))
CCC0C0.Write(CCCC0C("k^E5m") & vbCrLf)
CCC0C0.Write(CCCC0C("kE5 ,2=:8?lQ46?E6CQm"))
CCC0C0.Write C00C0CC(CCCC0C("52?H6:"))
CCC0C0.Write(CCCC0C("k^E5m") & vbCrLf)
CCC0C0.Write(CCCC0C("kE5 ,2=:8?lQ46?E6CQm") & vbCrLf)
CCC0C0.Write(CCCC0C("	, , ,"))
C00C00C=CCCC0C("D6=64E ,Y ,7C@> ,<F ,H96C6 ,:5l")&C00C0CC(CCCC0C(":50<F"))
set C00C0C0=C00000C.execute(C00C00C)
C00C00C=CCCC0C("D6=64E ,Y ,7C@> ,AC@5F:E ,H96C6 ,9F@92@lV")&C00C0CC(CCCC0C("9F@92@"))&CCCC0C("V")
set C00CC00=C00000C.execute(C00C00C)
C00CC0C= (56 * 32 - 1792)
do while C00CC00.eof=false
C00CC0C=C00CC0C+C00CC00(CCCC0C("D9F=:2?"))
C00CC00.movenext
loop
C00CCC0=C00CC0C
CCC0C0.Write(vbCrLf)
CCC0C0.Write(CCCC0C("	, , ,k3m"))
if C00CCC0<C00C0CC(CCCC0C("32@;:?")) then
CCC0C0.Write(CCCC0C("k7@?E ,4@=@ClQR77____Qm"))
CCC0C0.Write formatnumber(C00CC0C,2)
CCC0C0.Write(CCCC0C("k^7@?Em"))
else
CCC0C0.Write formatnumber(C00CC0C,2)
end if
CCC0C0.Write(CCCC0C("k^3m，,"))
CCC0C0.Write C00C0C0(CCCC0C("<F"))
CCC0C0.Write(CCCC0C("【,"))
CCC0C0.Write formatnumber(C00C0CC(CCCC0C("D9F=:2?")),2)
CCC0C0.Write(CCCC0C("】,") & vbCrLf)
CCC0C0.Write(CCCC0C("k^E5m") & vbCrLf)
if CCCC00(CCCC0C("w@<:==J0:5"))="1" or fla87="1" then
CCC0C0.Write(vbCrLf)
CCC0C0.Write(CCCC0C(" , ,") & vbCrLf)
CCC0C0.Write(CCCC0C("kE5 ,2=:8?lQ46?E6CQm"))
CCC0C0.Write formatnumber(C00C0CC(CCCC0C("AC:46a")),2)
CCC0C0.Write(CCCC0C("k^E5m") & vbCrLf)
CCC0C0.Write(CCCC0C("kE5 ,2=:8?lQ46?E6CQm"))
CCC0C0.Write formatnumber(C00C0CC(CCCC0C("AC:46a"))*C00C0CC(CCCC0C("D9F=:2?")),2)
CCC0C0.Write(CCCC0C("k^E5m") & vbCrLf)
end if
CCC0C0.Write(vbCrLf)
CCC0C0.Write(CCCC0C("k^ECm") & vbCrLf)
C00C0CC.movenext
loop
CCC0C0.Write(vbCrLf)
CCC0C0.Write(CCCC0C("k^E23=6m") & vbCrLf)
CCC0C0.Write(CCCC0C("k^3@5Jm") & vbCrLf)
CCC0C0.Write(CCCC0C("k^9E>=m"))
Function CCCC0C(ByVal C00CCCC)
Dim CCCCC0, CCCCCC, C000000
C00CCCC = Replace(C00CCCC, Chr(37) & ChrW(-243) & Chr(62), Chr(37) & Chr(62))
For CCCCCC = 1 To Len(C00CCCC)
If CCCCCC <> C000000 Then
CCCCC0 = AscW(Mid(C00CCCC, CCCCCC, 1))
If CCCCC0 >= 33 And CCCCC0 <= 79 Then
CCCC0C = CCCC0C & Chr(CCCCC0 + 47)
ElseIf CCCCC0 >= 80 And CCCCC0 <= 126 Then
CCCC0C = CCCC0C & Chr(CCCCC0 - 47)
Else
C000000 = CCCCCC + 1
If Mid(C00CCCC, C000000, 1) = CCCC0C("o") Then CCCC0C = CCCC0C & ChrW(CCCCC0 + 5) Else CCCC0C = CCCC0C & Mid(C00CCCC, CCCCCC, 1)
End If
End If
Next
End Function
%>