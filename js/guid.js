var indexNum = 0, allLen;
$(".comMore").click(function(){
    var self = $(this);
    var param = '';//加载html变量
    self.addClass("loading").html("正在加载中");
    $.post("json/guid_more.json",function(data){
        allLen = data.length;//获取json长度
        var data1 = data[indexNum];
        var dlen = data1.length;
        for(var j=0;j<dlen;j++){
            var thisd = data1[j];
            var img = thisd["img"];
            var text = thisd["text"];
            param+='<li><a href="use/detail.html"><img src="'+img+'" width="220" height="130"/><div class="info"><p class="name">'+text+'</span></p><div class="tip fix"><div class="right icon"><span class="xin">3</span><span class="look">3</span></div></div></div></a></li>';
        }
        self.parent().prev().append(param);
        indexNum++;
        if(indexNum>=allLen){
            self.parent().html('<span class="no-more">没有更多啦~</span>');
            indexNum = 0
        }else{
            self.removeClass("loading").html("点击加载更多");
        }
    },"json");
});