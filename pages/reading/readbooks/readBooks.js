app.controller('readbooksCtrl', ['$scope',
	function($scope) {

	}
])
app.directive("hb", [

	function() {
		return {
			restrict: 'A',
			template: ' <div id="header-box"><div ng-transclude></div></div>',
			replace: true,
			transclude: true,
			link: function($scope, el) {
				$(".xiaping").on("touchstart", false);
				$(document).on("touchstart", function() {
					$("#header-box").toggleClass("active");
					$(".xiaping").toggleClass("active1");
				})
				$(".classify").attr("id", "toubuliang");
				$(".classify").eq(0).removeAttr("id", "toubuliang");
				$(".classify").on("touchend", function() {
					var index = $(".classify").index($(this));
					$(".chuxian").hide();
					$(".chuxian").eq(index).show();
					$(".classify").attr("id", "toubuliang");
					$(".classify").eq(index).removeAttr("id", "toubuliang")
				})
				$(".mulu-box .back-circle-l").on("touchend", function() {
						$(".mulu").hide();
					})
					//调节亮度
				var process = $(".tiaojie .tiao")
				var process1 = $(".tiaojie .tiaozi")
				var pi = $(".tiaojie .dian");
				var ww1 = process.width();
				pi.on("touchstart", function(e) { //进度条拖进
					ox = e.originalEvent.changedTouches[0].clientX - pi.offset().left;
					var start = pi.width() / 2 - ox;
					$(document).on("touchmove", function(e) {
						var left1 = e.originalEvent.changedTouches[0].clientX - process.offset().left + start;
						if (left1 >= process.width() || left1 <= 0) {
							return;
						}
						pi.css("left", left1);
						process1.css("width", left1)

					})
					return false;
				})
				pi.on("touchend", function() {
						console.log(1)
						$(document).off("touchmove")
						return false;
					})
					//首页切换
				$(".tubiao1").on("touchend", function() {
					$(".mulu").show();
					$(".chuxian").hide();
					$(".chuxian").eq(0).show();
					$(".classify").attr("id", "toubuliang");
					$(".classify").eq(0).removeAttr("id", "toubuliang")

				})
				$(".tubiao2").on("touchend", function() {
					$(".zhuti").show();

				})
				$(".tubiao2").on("touchend", false)
				$(document).on("touchend", function() {
					$(".zhuti").hide();
				})
				
				$(".tubiao3").on("touchend", function() {
					$(".liangdu").show();

				})
				$(".tubiao3").on("touchend", false)
				$(document).on("touchend", function() {
					$(".liangdu").hide();
				})
				
				var process2 = $(".zihao .zihaoCR")
				var process12 = $(".zihao .dianzi")
				var pi2 = $(".zihao .dian");
				var ww12 = process2.width();
				pi2.on("touchstart", function(e) { //进度条拖进
					ox = e.originalEvent.changedTouches[0].clientX - pi2.offset().left;
					var start = pi2.width() / 2 - ox;
					$(document).on("touchmove", function(e) {
						var left1 = e.originalEvent.changedTouches[0].clientX - process2.offset().left + start;
						if (left1 >= process2.width() || left1 <= 0) {
							return;
						}
						pi2.css("left", left1);
						process12.css("width", left1)

					})
					return false;
				})
				pi2.on("touchend", function() {
					console.log(1)
					$(document).off("touchmove")
					return false;
				})
				var process3 = $(".hangju .zihaoCR")
				var process13 = $(".hangju .dianzi")
				var pi3 = $(".hangju .dian");
				var ww13 = process3.width();
				pi3.on("touchstart", function(e) { //进度条拖进
					ox = e.originalEvent.changedTouches[0].clientX - pi3.offset().left;
					var start = pi3.width() / 2 - ox;
					$(document).on("touchmove", function(e) {
						var left1 = e.originalEvent.changedTouches[0].clientX - process3.offset().left + start;
						if (left1 >= process3.width() || left1 <= 0) {
							return;
						}
						pi3.css("left", left1);
						process13.css("width", left1)

					})
					return false;
				})
				pi3.on("touchend", function() {
						console.log(1)
						$(document).off("touchmove")
						return false;
					})
				var process4 = $(".liang1 .tiao")
				var process14 = $(".liang1 .tiaozi")
				var pi4 = $(".liang1 .dian");
				var ww14 = process4.width();
				pi4.on("touchstart", function(e) { //进度条拖进
					ox = e.originalEvent.changedTouches[0].clientX - pi4.offset().left;
					var start = pi4.width() / 2 - ox;
					$(document).on("touchmove", function(e) {
						var left1 = e.originalEvent.changedTouches[0].clientX - process4.offset().left + start;
						if (left1 >= process4.width() || left1 <= 0) {
							return;
						}
						pi4.css("left", left1);
						process14.css("width", left1)

					})
					return false;
				})
				pi4.on("touchend", function() {
						$(document).off("touchmove")
						return false;
					})
					//换主题色
				var arr = ['#fcf3db', '#ffe9b0', '#d8a764', '#3876ac', '#21858e', '#f4c5d4', '#79d143', '#ffffff'];
                 $(".theme li").on("touchend",false);
				$(".theme li").on("touchend",function(){
					var index=$(this).index();
					$("#readBooks").css("background",arr[index]);					
				})
				//我的笔记
				$(".shang li:eq(1)").on("touchstart",function(){
					$("#dabiji").show();
				})
				$(".shang li").on("touchend",false);
				$("#dabiji .back-circle-l").on("touchend",function(){
					$("#dabiji").hide()
				})

			}
		}
	}
])