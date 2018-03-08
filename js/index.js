$(function(){
    $('#dowebok').fullpage({
    	sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
		afterLoad:function(link,index){
			$(".section").removeClass("current");
			$(".section").eq(index-1).addClass("current");
		}
    });
    
});
