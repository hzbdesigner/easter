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
	
	//disblock1��ʾ�����֣�disblock2��ʾ���أ���ʼ��Ҷ���1�����µ��������������ı�Ϊ2������ĵ�һ��Ҫ��Ϊ1�����ϵ���������Ҫ��ʾ����ı�Ϊ1������Ķ���ʧ����Ϊ2
	
	
});
