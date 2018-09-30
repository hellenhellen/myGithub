##  webstrom 安装markdown
- webstorm file setting  brower repositer 下载markdown
- 判断插件是否安装成功
- 网址 http://blog.csdn.net/hbiao68/article/details/52942797



高阶标题
=======
次阶标题
----------
1. 第一点
2. 第二点
4. 第三点
5. 地方

* hah
- haha
    - 哈哈哈
    * 哈哈
    + 哈哈 
        * 哈哈
            * 哈哈
                - 哈哈
    
|         序号    |    交易名    |    交易说明    |    备注    |
|    ------: |    :-------:    |    :---------   |    ------    |
|    1    |    prfcfg    |    菜单配置    |    可以通过此交易查询到所有交易码和菜单的对应关系    |
|    2    |    gentmo    |    编译所有交易    |    
|    100000    |    sysdba    |    数据库表模型汇总    |    

[Baidu](www.baidu.com "百度一下，你就知道" )
[V](www.vyanke.com "V研客" )
[hhh](www.cov.come "jkjkj")

~~这是一条删除线~~
~~sss~~

[^注释]:啊哈.看不到了 

[你好](#jump)
<span id = "jump">hehe</span>

- 用JS实现目录效果
```
<link rel="stylesheet" href="http://yandex.st/highlightjs/6.2/styles/googlecode.min.css">
 
<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
<script src="http://yandex.st/highlightjs/6.2/highlight.min.js"></script>
 
<script>hljs.initHighlightingOnLoad();</script>
<script type="text/javascript">
 $(document).ready(function(){
      $("h2,h3,h4,h5,h6").each(function(i,item){
        var tag = $(item).get(0).localName;
        $(item).attr("id","wow"+i);
        $("#category").append('<a class="new'+tag+'" href="#wow'+i+'">'+$(this).text()+'</a></br>');
        $(".newh2").css("margin-left",0);
        $(".newh3").css("margin-left",20);
        $(".newh4").css("margin-left",40);
        $(".newh5").css("margin-left",60);
        $(".newh6").css("margin-left",80);
      });
 });
</script>
<div id="category"></div>
```