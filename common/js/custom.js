$(document).ready(function(){
	var id = $("body").attr("id");
	$("li." + id).addClass("active");
	const hamburg = document.querySelector('.c_hamburger');
	hamburg.onclick = function(){
		if($('.c_nav_type02').css('display')== 'none'){
			$('.c_nav_type02').fadeIn()
		}
		else if($('.c_nav_type02').css('display')== 'block'){
			$('.c_nav_type02').fadeOut();
		}
	}
	const expand = document.querySelector('.c_expand-button');
	expand.onclick = function(){
		if($('.l_data_privacy').css('height') == '200px'){
			$('.l_data_privacy').css('height','100%');
			$('.l_data_privacy').css('overflow-y','unset');
		}
		else{
			$('.l_data_privacy').css('height','200px');
			$('.l_data_privacy').css('overflow-y','scroll');
		}
	}
//	var width = $(document).width(); 
//	if ((width >= 791)) {
//		console.log(width);
//		$('.l_main_contents.u_sp').css('position','relative');
//		$('.l_main_contents.u_sp').fadeOut();
//	}
//	else{
//		$(window).scroll(function () {
//			console.log(width);
//		if ($(this).scrollTop() > 120) {
//			$('.l_main_contents.u_sp').css('position','fixed');
//			$('.l_main_contents.u_sp').fadeIn();
//		}
//		else{
//			$('.l_main_contents.u_sp').css('position','relative');
//		}
//	});
//	}
//	$(window).resize(function() {
//		var width = $(window).width();
//		if ((width >= 791)) {
//		console.log(width);
//		$('.l_main_contents.u_sp').fadeOut();
//		}
//	else{
//		$(window).scroll(function () {
//			console.log(width);
//	if ((width <= 791)){
//				if ($(this).scrollTop() > 120) {
//				$('.l_main_contents.u_sp').css('position','fixed');
//			
//			}
//			else{
//				$('.l_main_contents.u_sp').css('position','relative');
//			}
//	}
//	});
//	}
//	});
	/* Loop through the elements, and hide the parent, when clicked on */

})
//function toggle_click(answer){
//	console.log(answer);
//	question = answer-1;
//
//	if($(".c_answer:nth-child(" + answer + ")").is(":visible")){
//			$(".c_answer:nth-child(" + answer + ")").hide();
//			$(".c_question:nth-child("+question+")").removeClass("active");
//	}
//	else{
//		$(".c_answer:nth-child(" + answer + ")").show();
//		$(".c_question:nth-child("+question+")").addClass("active");
//	}
//}
//ページトップに戻る
$(function() {
	var topBtn = $('.top_btn');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});
//カレント設定
$(function() {
	var id = $("body").attr("id");
	$("li." + id).addClass("active");
});


