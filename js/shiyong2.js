$.ajax({
	type:"get",
	url:"json/shiyongsum.json",
	success:function(data){
		console.log(data);
		var html="";
		for(var i=0;i<data.shiyong2.length;i++){
			html+=`
					<li class="adf">
						<img src="${data.shiyong2[i].img}" alt="" />
						<div class="${data.shiyong2[i].class}">
							<h4>${data.shiyong2[i].tittle}</h4>
							<p>
								<span>2032</span>
								<span>20台</span>
							</p>
							<p><span>1392</span>人申请</p>
							<p>${(data.shiyong2[i].tee.type===1)?("报告数量:"+data.shiyong2[i].tee.num):((data.shiyong2[i].tee.type===2)?("剩余时间"+data.shiyong2[i].tee.num+"天"):("查看试用名单"))}</p>
						</div>
									 <span>${data.shiyong2[i].span}</span>
   					</li>
			`;
		}
	$("section>div>ul").html(html);
	}
});


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
//点击加载更多
$("section>div>p>span").click(function(){
	var html=$(this).html();
	$(this).prev("img").remove();
	$(this).html("<img src='img/loading1.gif'>正在加载请稍后·····")
});
//页面呼吸灯
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
$(window).load(function(){
	$(".boxd").siblings("span").css({
	"width": 77,
	"height": 22,
	"background-color": "#f9f2c8",
	"color": "#cec989"
});
});
$(".nav ul li:nth-of-type(2)").click(function(e){
	e.preventDefault();
	location.href="shiyong2.html";
});
$(".nav ul li:nth-of-type(3)").click(function(e){
	e.preventDefault();
	location.href="shiyong3.html";
});
$(".nav ul li:nth-of-type(4)").click(function(e){
	e.preventDefault();
	location.href="shiyong4.html";
});
$("#min span:last-of-type").click(function(e){
	e.preventDefault();
	location.href="shiyongzhuangxiang.html";
});
$("#min span:first-of-type").click(function(e){
	e.preventDefault();
	location.href="shiyongsum.html";
});
$("header ul li:first-of-type").click(function(e){
	e.preventDefault();
	location.href="index.html";
});
$(".nav ul li:nth-of-type(1)").click(function(e){
	e.preventDefault();
	location.href="shiyongsum.html"
});
