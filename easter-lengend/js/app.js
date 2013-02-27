$(function(){
	$(".nav-cell").hover(
	function(){	
		$(this).find(".dropdowns").slideDown(500);
	},
	function(){	
		$(this).find(".dropdowns").slideUp(500);
	}
	);
	 $(".rslides").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed:1200,
        namespace: "",
      });
	
	Slider.init();
	$('#da-thumbs > li').hoverdir();
	
	//disblock1表示在显现，disblock2表示隐藏，初始大家都有1，向下点击，上面最上面的变为2，下面的第一个要变为1，向上点击，上面的要显示上面的变为1，下面的额消失，变为2
	
	
});
