window.onload=function(){
	function $(id){return document.getElementById(id);}
	var js_slider=$("js_slider");
	var slider_main_block=$("slider_main_block");
	var slider_ctrl=$("slider_ctrl");
	var imgs=slider_main_block.children;
	for(var i=0;i<imgs.length;i++){
		var span=document.createElement("span");
		span.innerHTML=imgs.length-i;
		span.className="slider-ctrl-con";
		slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
		
	}
	var spans=slider_ctrl.children;
	spans[1].className="slider-ctrl-con current";
	var scrollWidth=js_slider.offsetWidth;
	for(var i=1;i<imgs.length;i++){
		imgs[i].style.left=scrollWidth+"px";
	}
	var iNow=0;
	for(var k in spans){
		spans[k].onclick=function(){
			
			if(this.className=="slider-ctrl-prev"){
				animate(imgs[iNow],{left: scrollWidth});
				--iNow<0?iNow=imgs.length-1:iNow;
				imgs[iNow].style.left=-scrollWidth+"px";
				animate(imgs[iNow],{left: 0});
				squar();
			}else if(this.className=="slider-ctrl-next"){
				autoPlay();
				
			}else{
				var that=this.innerHTML-1;
				if(that>iNow){
					animate(imgs[iNow],{left: -scrollWidth});
					imgs[that].style.left=scrollWidth+'px';
				}else if(that<iNow){
					animate(imgs[iNow],{left: scrollWidth});
					imgs[that].style.left=-scrollWidth+'px';
				}
				iNow=that;
				animate(imgs[iNow],{left: 0});
				squar();
			}
		}
	}
	function squar(){
		for(var i=1;i<spans.length-1;i++){
			spans[i].className="slider-ctrl-con";
		}
		spans[iNow+1].className="slider-ctrl-con current";
	}
	var timer=null;
	
	timer=setInterval(autoPlay,2000);
		function autoPlay(){
			animate(imgs[iNow],{left: -scrollWidth});
				++iNow>imgs.length-1?iNow=0:iNow;
				imgs[iNow].style.left=scrollWidth+"px"
				animate(imgs[iNow],{left: 0});
				squar();
		}
	js_slider.onmouseover=function(){
		clearInterval(timer);
	}
	js_slider.onmouseout=function(){
		clearInterval(timer);
		timer=setInterval(autoPlay,2000);
	}
}
