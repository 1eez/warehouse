/*****************************************************************************
              ��������    ����:��ɽ̷��Ȫ  year2000@21cn.com
*****************************************************************************/
/*****************************************************************************
                                   ��������1900-2050
*****************************************************************************/
var lunarInfo=new Array(
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)

var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var Gan=new Array("\u7532","\u4E59","\u4E19","\u4E01","\u620A","\u5DF1","\u5E9A","\u8F9B","\u58EC","\u7678");
var Zhi=new Array("\u5B50","\u4E11","\u5BC5","\u536F","\u8FB0","\u5DF3","\u5348","\u672A","\u7533","\u9149","\u620C","\u4EA5");
var Animals=new Array("<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[\u8096\u9F20]&nbsp;\u4E2A\u6027\uFF1A\u5BCC\u5E7D\u9ED8\u611F\u53CA\u654F\u9510\u7684\u89C2\u5BDF\u529B\uFF0C\u884C\u4E8B\u79EF\u6781\uFF0C\u5BF9\u5DE5\u4F5C\u6216\u5F02\u6027\u8BBE\u60F3\u5468\u5230\u4E14\u7EC6\u817B\uFF0C\u5176\u521B\u89C1\u5E38\u4EE4\u4EBA\u6FC0\u8D4F\uFF0C\u5177\u654F\u9510\u7684\u89C2\u5BDF\u529B\u3002\u7279\u5F81\uFF1A\u5E74\u5E7C\u65F6,\u52B3\u788C\u5954\u6CE2\u4E2D\u8D8A\u80FD\u53D1\u6325\u5176\u7075\u654F\u7684\u667A\u80FD\u4E0E\u8010\u6027;\u5728\u5BBD\u88D5\u7684\u73AF\u5883\u4E2D\u751F\u957F,\u6CA1\u6709\u5931\u4E1A\u70E6\u607C,\u7136\u6613\u89C1\u5F02\u601D\u8FC1\u6362\u5DE5\u4F5C,\u4E2D\u5E74\u9047\u5931\u8D25\u5F8C,\u4F1A\u4E00\u5207\u987A\u5229,\u5C24\u5176\u80FD\u4EAB\u53D7\u665A\u5E74\u8D22\u8FD0,\u987B\u6CE8\u610F\u7F79\u60A3\u80BE\u810F\u7CFB\u7EDF\u75BE\u75C5\u3002') href='#'>\u9F20",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Фţ]&nbsp;���ԣ�����Ĭ�м�����Ĺ۲��������»������Թ��������������ܵ���ϸ�壬�䴴�������˼��ͣ�������Ĺ۲���������������ʱ���ڱ仯��˵Ļ����У��ȹ����͵����ӣ����м��̵Ķ����ԣ�����ʱ����Ϊ�Լ���ǰ;ɢ�����͵ĸ�Դ�����������ڣ����Ϊ�ɹ��������û���澳����·������ʮ�塢�����еڶ����������û��˵Ļ��ᣬ��������Ψ�Ҷ�������飬���������ƽ����') href='#'>ţ",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Ф��]&nbsp;���ԣ���־��ǿ�һ�Ծ��Ϊ�쵼���������Щ�Ը��������ѻ��ܴ����������ѡ��������������¹���������ʱ�ͻ����ͷ�أ�����ʱ���ܰ�������ʱ�������ɹ��������ܰ��ջ��ˣ�������˼ʹ�ϵ��˥�����������ٳɹ�������������ˣ����ι�����ԱΪ�ˣ���Ҫ�԰�����Ҫ��̰�������������ע�����ϵͳ������ϵͳ�ļ�����') href='#'>��",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Ф��]&nbsp;���ԣ����´����Ҿ���Ĭ�У�Ϊ�ܻ�ӭ���罻�ң�Ȼ����ȴ�м��Լ�����˼Ǩ��ȱ��.�����������κγ��ϣ���������˾��ʶ������ʱ��Ͷ��������һ������ע��Ҫ̤ʵ���£����ܰ������') href='#'>��",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Ф��]&nbsp;���ԣ����ʡ���Ծ���罻�ң����������׷�����Ȥ����ȱ������������Ҳ��ʧȥ��Ȥ���������󲿷�������֮����Ϊ����Ȼ�������ȴ�ܻ�ӭ��������ܷ���Ǳ����������������ע����ν��Ұ�ģ����»�������ѣ����ܿ˷�Ұ�ģ������Ͱ���ռƻ���ɸ������飬������ѻر������ʺϵ�ְҵΪ���½�����������ע��ѭ��ϵͳ�ļ�����') href='#'>��",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Ф��]&nbsp;���ԣ��󲿷����������ţ�������Ϊ�������ң����⣬��äĿ�������ˣ�Ҳ�������ص��ˡ�����������ʱ����������ů�Ļ�������������������Գ��������������Բ���ר�飮����ʱ��Ӧ�������ԣ�����־�򣬷ܷ�Ŭ�������˴��´̼��ԵĹ�����') href='#'>��",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Ф��]&nbsp;���ԣ��󲿷�ͷ��ת�ÿ죬�ж��������п��ʵĸ��ԣ�����ʦ����˫�ף�������õ��ֲ������ȡ��������Ǳ�׼���ж��ɣ�������Ŀ�꣬��Ŭ������������ʱ�ͻ�¶ͷ�ǣ���������ά�ֲ��䣬�������Բ��������ɾͣ�����������������ְλ������չ��ע������ϵͳ�ļ�����') href='#'>��",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Ф��]&nbsp;���ԣ��󲿷�Ϊ��˼���ǣ��о���ǿ����ˣ��������ҵ��ӣ����������ˮ����������Ȼ����ʱ����ȣ�����ʮ���ʱ���Ỽ�󼲣�����ʱ�Ǵ�չ��ͼ�ĺû��ᣬ���о���ǿ����Ŭ���о����ܻ�ߵĵ�λ��Ҳ���¸����ر�ע��������ϵͳ�ļ�����') href='#'>��",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Ф��]&nbsp;���ԣ��Ż����磬����ţ���ȡ��ǿ���������У���ͬ���ġ�����������������˼���д��˵����������ټ�����עĿ���ڲ����ɣ���Ӧ�죬����ʱ��ú�ְλ�������л��ģ��ֻ�ʧȥ���õ�λ���ر�ע��һ�㣬�����˴�������������ע��ؽڷ���ļ�����') href='#'>��",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Ф��]&nbsp;���ԣ���Ϊ���ؾ������Ĺ�������ע�ش��ţ��㽻���ѡ�����������ʱ����Ը��������ϲ�����������ڵ����ʽ������ڹ������޷����ģ�������������ʮ�����ᣬ�Ż���΢���ģ���ʮ����ʮ��Ϊ�ƽ�ʱ����Ӧ����ʱ�����ú÷��Ӳ��ܣ�����ҵ���湤���Ϻ��ʣ�ע����ƫʳ����ļ���.') href='#'>��",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Ф��]&nbsp;���ԣ��󶼾����ұ��أ���ˣ��Ϲ�ִ�����׽������˵����.��������Ȼ�ܹ���Ϊ�����еĸɲ���Ȼ������Ϊ�˹����ϵ����⣬����˾���飬��������������Ĺ���.') href='#'>��",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'[Ф��]&nbsp;���ԣ��󲿷�Ϊ�ᶨ��־�ߣ��а��ļ�����ζ��Ȼ��������ʱȱ�����ǡ�����������ʱ���Լ�ͥ������������ȴ�Ծ���˫�ף��Ը��ʵ���������ߣ����Կ���������������궼���Ҹ��������������������Ӳ��ܣ���ע�����������ϵͳ�ļ�����') href='#'>��");
var Animals2=new Array("s","n","h","t","l","se","m","y","ho","j","g","z");
var solarTerm = new Array("\u5C0F\u5BD2","\u5927\u5BD2","\u7ACB\u6625","\u96E8\u6C34","\u60CA\u86F0","\u6625\u5206","\u6E05\u660E","\u8C37\u96E8","\u7ACB\u590F","\u5C0F\u6EE1","\u8292\u79CD","\u590F\u81F3","\u5C0F\u6691","\u5927\u6691","\u7ACB\u79CB","\u5904\u6691","\u767D\u9732","\u79CB\u5206","\u5BD2\u9732","\u971C\u964D","\u7ACB\u51AC","\u5C0F\u96EA","\u5927\u96EA","\u51AC\u81F3[\u51AC\u8282]")
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758)
var nStr1 = new Array('��','һ','��','��','��','��','��','��','��','��','ʮ')
var nStr2 = new Array('��','ʮ','إ','ئ','��')
var monthName = new Array("<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'12��22��-1��20��&nbsp;��ɽ����(Ħ����)��&nbsp;ɽ������������&nbsp;�ŵ㣺���½�̤ʵ�أ���־��ǿ���м�ͥ�������ǫѷ����������....&nbsp;&nbsp;ȱ�㣺��ִ,�����ֹ�,������������,ȱ��������Ȥ,̫רע춸��˵�Ŀ�ꡣ1��22��-2��21��&nbsp;��ˮƿ����&nbsp;�뿴����...') href='#'>JAN",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'1��22��-2��21��&nbsp;��ˮƿ����&nbsp;ˮƿ����������&nbsp;�ŵ㣺�������ɣ���Ȥ�㷺������ʮ�㣬�����Ե��ǻۣ�������ʵ&nbsp;ȱ�㣺ȱ�����飬���ǿ�����������Ȩ��̫��������Ȥ���㣬�������.2��22��-3��21��&nbsp;��˫������&nbsp;�뿴����...') href='#'>FEB",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'2��22��-3��21��&nbsp;��˫������&nbsp;˫������������&nbsp;�ŵ㣺����ḻ���ĵ��ʴȣ��ἺΪ�ˣ�����˽�����ð��ݣ��º�������&nbsp;ȱ�㣺����ʵ�ʣ�̫������������ƸУ�������ƣ��������¡�3��22��-4��20��&nbsp;���������&nbsp;�뿴����...') href='#'>MAR",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'3��22��-4��20��&nbsp;���������&nbsp;��������������&nbsp;�ŵ㣺���»����������л�����������ľ�������̹�����棬���齲����&nbsp;ȱ�㣺��������̫ǿ�����Ĵ��⣬�������߳�ŭ��ȱ��ʱ�����ȱ�����ԡ�4��21��-5��21��&nbsp;���ţ����&nbsp;�뿴����...') href='#'>APR",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'4��21��-5��21��&nbsp;���ţ����&nbsp;��ţ����������&nbsp;�ŵ㣺����ʮ�㣬��̤ʵ�أ�һ�������������ݣ������мƻ��й���&nbsp;ȱ�㣺ռ����̫ǿ���ƶʣ�ȱ����Ĭ�У���֪��ͨ��ȱ����������������5��22��-6��21��&nbsp;��˫������&nbsp;�뿴����...') href='#'>MAY",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'5��22��-6��21��&nbsp;��˫������&nbsp;˫������������&nbsp;�ŵ㣺�и���һ�ȵ���Ĭ�У������������ԲŻ�����Ӧ�Ͽ죬ѧϰ����ǿ&nbsp;ȱ�㣺������ȴҪ�ö࣬ϲ���������˶��������Լ������κ��¶�Ƿ���ġ�6��22��-7��21��&nbsp;���з����&nbsp;�뿴����...') href='#'>JUN",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'6��22��-7��21��&nbsp;���з����&nbsp;��з����������&nbsp;�ŵ㣺�����ֿ���У��������ḻ��������飬���������ػ����ƽ�����&nbsp;ȱ�㣺�᲻��Ų��£�˵������Ĩ�ǣ���ֱ�ӣ���֪�ʿɶ�ֹ��ȱ�����ԡ�7��22��-8��21��&nbsp;��ʨ������&nbsp;�뿴����...') href='#'>JUL",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'7��22��-8��21��&nbsp;��ʨ������&nbsp;ʨ������������&nbsp;�ŵ㣺һ�ԾŶ������ã��ֹۣ����ؿ�󣬶��ÿ�ˡ���м������ĵ�����&nbsp;ȱ�㣺�������ӻ����ȱ���ڼ�����£�������ã�����Ϊ��ȱ�����ԡ�8��22��-9��21��&nbsp;�ﴦŮ����&nbsp;�뿴����...') href='#'>AUG",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'8��22��-9��21��&nbsp;�ﴦŮ����&nbsp;��Ů����������&nbsp;�ŵ㣺׷������ǫѷ������о�ȷ�Ĺ۲������԰�����ʵ�ر���������&nbsp;ȱ�㣺̫����ë��ã��н�����򣬲����������������˵����룬ǷԶ����9��22��-10��21��&nbsp;���������&nbsp;�뿴����...') href='#'>SEP",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'9��22��-10��21��&nbsp;���������&nbsp;�������������&nbsp;�ŵ㣺��ƽ�͹ۣ����������ŷ�ɣ��������������֣�����������Ӧ��ǿ&nbsp;ȱ�㣺����Ѷϣ���ԥ������������Ը��˵������̫�࣬�����ܺ��ݶ��͡�10��22��-11��21��&nbsp;����Ы����&nbsp;�뿴����...') href='#'>OCT",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'10��22��-11��21��&nbsp;����Ы����&nbsp;��Ы����������&nbsp;�ŵ㣺�����ѽ��������������Ը���������������Ǳ�ڵ����飬��Թ����&nbsp;ȱ�㣺ռ�������ߣ����Դף��������ˣ������ķǣ��Ǹ�̫�����ǿ��11��22��-12��21��&nbsp;��������������������&nbsp;�뿴����...') href='#'>NOV",
"<a  onmouseout='hidetip2()' onmouseover=showtip2(this,event,'11��22��-12��21��&nbsp;��������������������&nbsp;��������������&nbsp;�ŵ㣺�����ֹۣ���ֱ̹�ʣ��о������˵����飬�������ƣ���������&nbsp;ȱ�㣺��ֱ��죬���׵����ˣ�����а������Ȱ�棬�嶯��������˼���С�12��22��-1��20��&nbsp;��ɽ����(Ħ����)��&nbsp;�뿴1��...') href='#'>DEC");
var month2=new Array("Ԫ��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�Ԫ�£���1789��1��..������һ�δ�ѡ,��ʢ�ٵ�ѡΪ��һ����ͳ����1912��1��1��..�л��������������ɽ����ʱ����ͳ��ͬ�ڹ��񵳳�������1924��1��..��һ�ι�����������1932��1��28��..�ձ����Ϻ�������һ.���ˡ��±䡷��1933��1��..�¹�ϣ������̨����1949��1��..����ս�ۡ�ƽ��ս�۽�ž�ȡ�����ʤ������1976��1��8��..�ܶ���������",
"2��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�2�£���1848��2��..�����������ԡ���ŷ�޷�����1848��2��..���������¸�������������1923��2��..������·���˴�չ�����1972��2��21��..����ɵ����й���",
"3��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�3�£���1925��3��12��..����ɽ��������1932��3��..�ձ���ֲ�峯�ϵ����ǣ��ڶ�������α�����޹�������2000��3��..С̷�Ĺ�����λ��Ϊ˽����,����С̷����ȫ��Ա����һ��������ʧҵ...ʱ�ƣ����¸ڡ�����",
"4��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�4�£���1861��4��..�����ϱ�ս����������1911��4��..���ݻƻ������塷��1949��4��23��..��ž�����Ͼ�,�����������1970��4��24��..�й��ɹ������һ���������ǡ���1976��4��7��..���������й���һ����ϯ����1984��4��6��..�й����⿪��14���غ����С�",
"5��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�5�£���1841��5��29��..������Ԫ�����ڵֿ�Ӣ�����֡���1919��5��4��..�����ġ��˶���������1945��5��8��..�¹�ǩ��������Ͷ���顷",
"6��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�6�£���1840��6��..��һ��ѻƬս����������1898��6��..������ά�¡���ʼ����1913��6��..������θ�����ʼ����1914��6��28��..���������¼�--��һ�������ս��������1944��6��6��..Ӣ���˾���½ŵ���ס���1950��6��25��..����ս��������",
"7��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�7�£���1776��7��4��..���������ԡ�����������������1921��7��..�й���������������1937��7��7��..�ձ�����«�����±䡷��1946��7��..�й�����ȫ����ս����1953��7��26��..����ս���������γ��ϱ����ž��桷��1976��7��6��..�����������1997��7��..�й��ջ������Ȩ��",
"8��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�8�£���1789��8��..��������Ȩ���ԡ���������1842��8��..������������ۡ���1894��8��1��..������������ս������ս����������1905��8��..�й�ͬ�˻��������1927��8��1��..����һ���ϲ����塷��1945��8��6�ա�9��..�������ձ��㵺�������һ��ʹ��ԭ�ӵ�����1945��8��14��..�ձ�����������Ͷ������1966��8��18��..ë�����찲�ŽӼ���������",
"9��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�9�£���1909��9��..�й���һ��������Ƶġ����š���·��ͨ����1915��9��..�й����Ļ��˶���ʼ����1922��9��..��Դ·���˴�չ�����1931��9��18��..�ձ���������������.һ�ˡ��±䡷��1939��9��3�յڶ��������սȫ�汬������1945��9��2��..�ձ�ǩ��������Ͷ���顷��1976��9��9��..ë����������1984��9��26��..��Ӣ�������������������������",
"10��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�10�£���1856��10��..Ӣ����������Բ��԰��ͬ�����������þ����뵺����1911��10��10��..������壬����������ʼ����1934��10��..�����ʼ������ǧ�ﳤ������1949��10��1��..�л����񹲺͹���������1950��10��25��..�й�����־Ը���볯�μӿ���ս������1951��10��26��..��ž����أ����غ�ƽ��š���1957��10��4��..ǰ�����������ϵ�һ��������������̫�ա���1976��10��6��..�����˰����",
"11��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�11�£���1798��11��9��..���������׷������������䡱��������ʱ����ʼ����1917��11��7��..��ʮ�¸�����ʤ��������������1943��11��..�ա�����Ӣ�����ͷ���е¿������顷��1948��11��..����ս�۽���,����ս�ۿ�ʼ����1969��11��12��..�������ڿ���������",
"12��&nbsp;&nbsp;&nbsp;����ʷ�ϵ�12�£���1936��12��12��..�����±䡷��1941��12��8��..̫ƽ��ս��������");

var sFtv = new Array(
"0101*\u5143\u65E6",
"0214 \u60C5\u4EBA\u8282",
"0308 \u5987\u5973\u8282",
"0312 \u690D\u6811\u8282",
"0315 \u6D88\u8D39\u8005\u6743\u76CA\u65E5",
"0401 \u611A\u4EBA\u8282",
"0501 \u52B3\u52A8\u8282",
"0504 \u9752\u5E74\u8282",
"0512 \u62A4\u58EB\u8282",
"0601 \u513F\u7AE5\u8282",
"0701 \u5EFA\u515A\u8282 \u9999\u6E2F\u56DE\u5F52\u7EAA\u5FF5\u65E5",
"0801 \u5EFA\u519B\u8282",
"0808 \u7236\u4EB2\u8282",
"0909 \u6BDB\u6CFD\u4E1C\u901D\u4E16\u7EAA\u5FF5\u65E5",
"0910 \u6559\u5E08\u8282",
"1001*\u56FD\u5E86\u8282",
"1112 \u5B59\u4E2D\u5C71\u8BDE\u8FB0\u7EAA\u5FF5\u65E5",
"1220 \u6FB3\u95E8\u56DE\u5F52\u7EAA\u5FF5\u65E5",
"1224*\u5723\u8BDE\u8282",
"1225*\u5E73\u5B89\u591C",
"1226 \u6BDB\u6CFD\u4E1C\u8BDE\u8FB0\u7EAA\u5FF5\u65E5")
var lFtv = new Array(
"0101*\u6625\u8282",
"0115*\u5143\u5BB5\u8282",
"0505*\u7AEF\u5348\u8282",
"0815*\u4E2D\u79CB\u8282",
"0100*\u9664\u5915")
var wFtv = new Array(
"0231 \u603B\u7EDF\u65E5",
"0340 \u590D\u6D3B\u8282",
"0520 \u6BCD\u4EB2\u8282",
"0531 \u80DC\u5229\u65E5",
"0716 \u5408\u4F5C\u8282",
"0730 \u88AB\u5974\u5F79\u56FD\u5BB6\u5468",
"0911 \u897F\u65B9\u52B3\u52A8\u8282",
"1011 \u4E16\u754C\u4F4F\u623F\u65E5",
"1021 \u7F8E\u56FD\u54E5\u4F26\u5E03\u7EAA\u5FF5\u65E5",
"1144 \u611F\u6069\u8282")
function lYearDays(y) {
   var i, sum = 348
   for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0
   return(sum+leapDays(y))
}

function leapDays(y) {
   if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29)
   else return(0)
}


function leapMonth(y) {
   return(lunarInfo[y-1900] & 0xf)
}


function monthDays(y,m) {
   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 )
}

function Lunar(objDate) {

   var i, leap=0, temp=0
   var baseDate = new Date(1900,0,31)
   var offset   = (objDate - baseDate)/86400000

   this.dayCyl = offset + 40
   this.monCyl = 14

   for(i=1900; i<2050 && offset>0; i++) {
      temp = lYearDays(i)
      offset -= temp
      this.monCyl += 12
   }

   if(offset<0) {
      offset += temp;
      i--;
      this.monCyl -= 12
   }

   this.year = i
   this.yearCyl = i-1864

   leap = leapMonth(i) 
   this.isLeap = false

   for(i=1; i<13 && offset>0; i++) {

      if(leap>0 && i==(leap+1) && this.isLeap==false)
         { --i; this.isLeap = true; temp = leapDays(this.year); }
      else
         { temp = monthDays(this.year, i); }


      if(this.isLeap==true && i==(leap+1)) this.isLeap = false

      offset -= temp
      if(this.isLeap == false) this.monCyl ++
   }

   if(offset==0 && leap>0 && i==leap+1)
      if(this.isLeap)
         { this.isLeap = false; }
      else
         { this.isLeap = true; --i; --this.monCyl;}

   if(offset<0){ offset += temp; --i; --this.monCyl; }

   this.month = i
   this.day = offset + 1
}


function solarDays(y,m) {
   if(m==1)
      return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28)
   else
      return(solarMonth[m])
}

function cyclical(num) {
   return(Gan[num%10]+Zhi[num%12])
}


function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {

      this.isToday    = false;

      this.sYear      = sYear;
      this.sMonth     = sMonth;
      this.sDay       = sDay;
      this.week       = week;

      this.lYear      = lYear;
      this.lMonth     = lMonth;
      this.lDay       = lDay;
      this.isLeap     = isLeap;

      this.cYear      = cYear;
      this.cMonth     = cMonth;
      this.cDay       = cDay;

      this.color      = '';
      this.solarTerms    = ''; 
      this.solarTerms    = ''; 
      this.solarFestival = ''; 
      this.lunarFestival = ''; 

}

function sTerm(y,n) {
   var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) )
   return(offDate.getUTCDate())
}

function calendar(y,m) {

   var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2
   var lDPOS = new Array(3)
   var n = 0
   var firstLM = 0

   sDObj = new Date(y,m,1)           

   this.length    = solarDays(y,m)    
   this.firstWeek = sDObj.getDay()   


   for(var i=0;i<this.length;i++) {

      if(lD>lX) {
         sDObj = new Date(y,m,i+1)   
         lDObj = new Lunar(sDObj)    
         lY    = lDObj.year          
         lM    = lDObj.month         
         lD    = lDObj.day          
         lL    = lDObj.isLeap        
         lX    = lL? leapDays(lY): monthDays(lY,lM) 

         if(n==0) firstLM = lM
         lDPOS[n++] = i-lD+1
      }

      this[i] = new calElement(y, m+1, i+1, nStr1[(i+this.firstWeek)%7],
                               lY, lM, lD++, lL,
                               cyclical(lDObj.yearCyl) ,cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++) )


      if((i+this.firstWeek)%7==0)   this[i].color = 'red'  
      if((i+this.firstWeek)%14==13) this[i].color = 'red'  
   }

   tmp1=sTerm(y,m*2  )-1
   tmp2=sTerm(y,m*2+1)-1
   this[tmp1].solarTerms = solarTerm[m*2]
   this[tmp2].solarTerms = solarTerm[m*2+1]
   if(m==3) this[tmp1].color = '#CC4AF7' 
   for(i in sFtv)
      if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            this[Number(RegExp.$2)-1].solarFestival += RegExp.$4 + ' '
            if(RegExp.$3=='*') this[Number(RegExp.$2)-1].color = '#BC02D7'
         }

   for(i in wFtv)
      if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            tmp1=Number(RegExp.$2)
            tmp2=Number(RegExp.$3)
            this[((this.firstWeek>tmp2)?7:0) + 7*(tmp1-1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' '
         }

   for(i in lFtv)
      if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
         tmp1=Number(RegExp.$1)-firstLM
         if(tmp1==-11) tmp1=1
         if(tmp1 >=0 && tmp1<n) {
            tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1
            if( tmp2 >= 0 && tmp2<this.length) {
               this[tmp2].lunarFestival += RegExp.$4 + ' '
               if(RegExp.$3=='*') this[tmp2].color = '#FF00FF'
            }
         }
      }


   if((this.firstWeek+12)%7==5)
      this[12].solarFestival += '\u9ED1\u8272\u661F\u671F\u4E94 '
   if(y==tY && m==tM) 
      this[tD-1].solarTerms +='\u4ECA\u5929^@^'


   if(y==tY && m==tM) this[tD-1].isToday = true;

}

function cDay(d){
   var s;

   switch (d) {
      case 10:
         s = '��ʮ'; break;
      case 20:
         s = '��ʮ'; break;
         break;
      case 30:
         s = '��ʮ'; break;
         break;
      default :
         s = nStr2[Math.floor(d/10)];
         s += nStr1[d%10];
   }
   return(s);
}


var cld;

function drawCld(SY,SM) {
   var i,sD,s,size;
   cld = new calendar(SY,SM);

   if(SY>1874 && SY<1909) yDisplay = '\u5149\u7EEA&nbsp;' + (((SY-1874)==1)?'\u5143':SY-1874)
   if(SY>1908 && SY<1912) yDisplay = '\u5BA3\u7EDF&nbsp;' + (((SY-1908)==1)?'\u5143':SY-1908)
   if(SY>1911 && SY<1949) yDisplay = '\u6C11\u56FD&nbsp;' + (((SY-1911)==1)?'\u5143':SY-1911)
   if(SY>1948 && SY<1950) yDisplay = '\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD' + (((SY-1948)==1)?'\u6210\u7ACB':SY-1948)  
   if(SY>1949) yDisplay = '\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u6210\u7ACB' + (((SY-1949)==1)?'\u5143':SY-1949)

   GZ.innerHTML = '<table border=0 cellpadding=0 cellspacing=0 width=374  style="FONT-SIZE: 9pt"><tr><td align=right width=85% valign=bottom><font color=#FFCC00>��</font><font color=#FFFFFF>&nbsp;<a  onmouseout="hidetip2()" onmouseover=showtip2(this,event,"'+'\u73B0\u5728\u662F\u516C\u5143'+SY+'\u5E74'+month2[SM]+'") href="#">'+ yDisplay+'\u5E74'+'</a>&nbsp;&nbsp;&nbsp;<font color=#FFCC00>��</font>&nbsp;'+Animals[(SY-4)%12]+'\u5E74[\u519C\u5386' + cyclical(SY-1900+36)+'\u5E74]' +"</td></td><td align=center  width=15%><img src='" +Animals2[(SY-4)%12]+".gif'></td>" + '</tr></table>' ;

   YMBG.innerHTML =monthName[SM]+"&nbsp;" +SY+"</a>"  ;


   for(i=0;i<42;i++) {

      sObj=eval('SD'+ i);
      lObj=eval('LD'+ i);

      sObj.className = '';

      sD = i - cld.firstWeek;

      if(sD>-1 && sD<cld.length) { 
         sObj.innerHTML = sD+1;

         if(cld[sD].isToday) sObj.className = 'todyaColor'; 

         sObj.style.color = cld[sD].color; 

         if(cld[sD].lDay==1) 
            lObj.innerHTML = '<b>'+(cld[sD].isLeap?'��':'') + cld[sD].lMonth + '��' + (monthDays(cld[sD].lYear,cld[sD].lMonth)==29?'С':'��')+'</b>';
         else 
            lObj.innerHTML = cDay(cld[sD].lDay);

         s=cld[sD].lunarFestival;
         if(s.length>0) { 
            if(s.length>6) s = s.substr(0, 4)+'��';
            s = s.fontcolor('#C49402');
         }
         else { 
            s=cld[sD].solarFestival;
            if(s.length>0) {
               size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?8:4;
               if(s.length>size+2) s = s.substr(0, size)+'��';
               s = s.fontcolor('#FF8000');
            }
            else { 
               s=cld[sD].solarTerms;
               if(s.length>0) s = s.fontcolor('#309F00');
            }
         }
         if(s.length>0) lObj.innerHTML = s;

      }
      else { 
         sObj.innerHTML = '';
         lObj.innerHTML = '';
      }
   }
}


function changeCld() {
   var y,m;
   y=CLD.SY.selectedIndex+1900;
   m=CLD.SM.selectedIndex;
   drawCld(y,m);
}

function pushBtm(K) {
   switch (K){
      case 'YU' :
         if(CLD.SY.selectedIndex>0) CLD.SY.selectedIndex--;
         break;
      case 'YD' :
         if(CLD.SY.selectedIndex<149) CLD.SY.selectedIndex++;
         break;
      case 'MU' :
         if(CLD.SM.selectedIndex>0) {
            CLD.SM.selectedIndex--;
         }
         else {
            CLD.SM.selectedIndex=11;
            if(CLD.SY.selectedIndex>0) CLD.SY.selectedIndex--;
         }
         break;
      case 'MD' :
         if(CLD.SM.selectedIndex<11) {
            CLD.SM.selectedIndex++;
         }
         else {
            CLD.SM.selectedIndex=0;
            if(CLD.SY.selectedIndex<149) CLD.SY.selectedIndex++;
         }
         break;
      default :
         CLD.SY.selectedIndex=tY-1900;
         CLD.SM.selectedIndex=tM;
   }
   changeCld();
}



var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();


var width = "130";
var offsetx = 2;
var offsety = 16;

var x = 0;
var y = 0;
var snow = 0;
var sw = 0;
var cnt = 0;

var dStyle;
document.onmousemove = mEvn;
function mOvr(v) {
   var s,festival;
   var sObj=eval('SD'+ v);
   var d=sObj.innerHTML-1;
  if(sObj.innerHTML!='') {

      sObj.style.cursor = 'help';

      if(cld[d].solarTerms == '' && cld[d].solarFestival == '' && cld[d].lunarFestival == '')
         festival = '';
      else
         festival = '<TABLE WIDTH=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 BGCOLOR="#00B700"><TR><TD ALIGN="center">'+
         '<FONT COLOR="#ffffff" STYLE="font-size:9pt;">����:'+cld[d].solarTerms + ' ' + cld[d].solarFestival + ' ' + cld[d].lunarFestival+'</FONT></TD>'+
         '</TR></TABLE>';

      s= '<table border="3" width="180" bordercolor="#00B700" bgcolor="#FFFBE8" cellpadding="0" cellspacing="0"><TR><td>' +
         '<TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD ALIGN="center"><FONT COLOR="#000000" STYLE="font-size:9pt;"><br>&nbsp;'+
         cld[d].sYear+'��'+cld[d].sMonth+'��'+cld[d].sDay+'��&nbsp;&nbsp;����'+cld[d].week+'<br>'+
         '<font color="#FF8000">ũ��'+cld[d].cYear+'��'+(cld[d].isLeap?'�� ':' ')+cld[d].lMonth+'��'+cld[d].lDay+'��</font><br>'+
         '<font color="#800080">'+cld[d].cMonth+'�� '+cld[d].cDay + '��</font><br>&nbsp;'+
         '</FONT></TD></TR></TABLE>'+ festival +'</TD></TR></TABLE>';


      document.all["detail"].innerHTML = s;

   	if (snow == 0) {
         dStyle.left = x+offsetx-(width/2);
         dStyle.top = y+offsety;
   		dStyle.visibility = "visible";
   		snow = 1;
   	}
	}
}

function mOut() {
	if ( cnt >= 1 ) { sw = 0 }
	if ( sw == 0 ) { snow = 0;	dStyle.visibility = "hidden";}
	else cnt++;
}
function mEvn() {
   x=event.x;
   y=event.y;
	if (document.body.scrollLeft)
	   {x=event.x+document.body.scrollLeft; y=event.y+document.body.scrollTop;}
	if (snow){
      dStyle.left = x+offsetx-(width/2)
      dStyle.top = y+offsety
	}
}

function killErrors() {
return true;
}
window.onerror = killErrors;
function noright(e){

return true;}
document.onmousedown=noright;

function changeTZ() {
   CITY.innerHTML = CLD.TZ.value.substr(6)
   setCookie("TZ",CLD.TZ.selectedIndex)
}

function tick() {
   var today
   today = new Date()
   Clock.innerHTML = today.toLocaleString().replace(/(��|��)/g, "/").replace(/��/, "");
   Clock2.innerHTML = TimeAdd(today.toGMTString(), CLD.TZ.value)
   window.setTimeout("tick()", 1000);
}

function setCookie(name, value) {
	var today = new Date()
	var expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365)
	document.cookie = name + "=" + escape(value)	+ "; expires=" + expires.toGMTString()
}

function getCookie(Name) {
   var search = Name + "="
   if(document.cookie.length > 0) {
      offset = document.cookie.indexOf(search)
      if(offset != -1) {
         offset += search.length
         end = document.cookie.indexOf(";", offset)
         if(end == -1) end = document.cookie.length
         return unescape(document.cookie.substring(offset, end))
      }
      else return ""
   }
}
function initial() {
   dStyle = detail.style;
   CLD.SY.selectedIndex=tY-1900;
   CLD.SM.selectedIndex=tM;
   drawCld(tY,tM);

   CLD.TZ.selectedIndex=getCookie("TZ");
   changeTZ();
   tick();
}






