//倒计时效果
setInterval(function() {
    var date = new Date();
    var date1 = new Date('2019 05 18');
    var time = date1.getTime() - date.getTime();
    var day = Math.floor(time / 1000 / 60 / 60 / 24);
    var hour = Math.floor(time / 1000 / 60 / 60 % 24);
    var min = Math.floor(time / 1000 / 60 % 60);
    var sec = Math.floor(time / 1000 % 60);
    document.getElementById('time').innerHTML = day + '天' + hour + '小时' + min + '分钟' + sec + '秒';
}, 1000);
// banner图动画
$(function() {
        $('.baner-right').animate({
            'right': 0, //偏移的距离
            "top": 0,
            'opacity': 1
        }, 1000)
    })
    //数据渲染页面
$.ajax({
    url: "json/json9.json",
    success: function(data) {
        //dot.js 模板引擎
        var sy_ = doT.template($('#sy_tpl').text());
        $('#list').html(sy_(data));
    }
});
$.ajax({
    url: "json/json15.json",
    success: function(data) {
        //dot.js 模板引擎
        var sy_1 = doT.template($('#sy_tp2').text());
        $('#center_list').html(sy_1(data));
    }
});
$.ajax({
    url: "json/json1.json",
    success: function(data) {
        //dot.js 模板引擎
        var sy_2 = doT.template($('#sy_tp3').text());
        $('#guide').html(sy_2(data));
    }
});
$.ajax({
    url: "json/json2&3.json",
    success: function(data) {
        //dot.js 模板引擎
        var sy_3 = doT.template($('#sy_tp4').text());
        $('#last_list').html(sy_3(data));
    },
    error:function(list){
    	console.log(list);
    }
});
// 轮播图
$(function() {

    var div = $('#list').parent().innerWidth();

    var timer = setInterval(right, 5000);
    $('#right').on('click', function() {
        clearInterval(timer);
        right();
        timer = setInterval(right, 2000);
    });
    $('#left').on('click', function() {
        clearInterval(timer);
        left();

    });

    function right() {
        $('#list').css({ 'marginLeft': 0 });
        $("#list li").slice(0, 4).appendTo($('#list'));
        $("#list").animate({ 'marginLeft': -div }, 1000)
    }

    function left() {
        $("#list li").slice(-4).prependTo($('#list'));
        console.log($("#list li").slice(-4));
        $('#list').css({ 'marginLeft': -div });
        $("#list").animate({ 'marginLeft': 0 }, 1000)
    }

});
//定义图案的呼吸灯
var s=0,timer=null;
$("body").on("mouseover","section li",function(){
	if(timer==null){
		timer= setInterval(function(){
		(s%2==0)&&($(this).css("opacity",.5));
		(s%2==1)&&($(this).css("opacity",1));
				s++;
	}.bind(this),800);
	}
});
$("body").on("mouseleave","section li",function(){
	clearInterval(timer);
	timer=null;
	s=0;
	$("section li").css("opacity",1);
});
$("p.btn").click(function(){
	var html=$(this).html();
	$(this).html("<img src='./img/loading1.gif'>正在加载请稍后")
});
//为页面绑定滑动事件
$(window).scroll(function(){
	if($(window).scrollTop()>=$(window).height()){
		$("footer button").animate({
			"right":120,
			"bottom":60,
			"opacity":1
		},1000);
		
	}else if($(window).scrollTop()<$(window).height()){
		$("footer button").stop(true);
		$("footer button").css({
			"bottom":0,
			"right":0,
			"opacity":0
		});
	}
});
$("footer button").click(function(){
	var timer=setInterval(function(){
	var top=$(window).scrollTop();
		top/=7;
		$(window).scrollTop($(window).scrollTop()-top);
		($(window).scrollTop()<=0)&&(clearInterval(timer));
	},30);
});
$("header ul>li:nth-of-type(4)").click(function(e){
	e.preventDefault();
	location.href="shiyongsum.html";
});
