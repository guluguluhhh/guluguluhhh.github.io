$(function(){
	$("#dowebok").fullpage({
		sectionsColor: ['#0DA5D6','#2AB660','#DE8A10','#16BB9D','#0DA5D6'],
		afterLoad:function(link,index){
			$(".section").removeClass("current").eq(index-1).addClass("current");
		}
	});
})
