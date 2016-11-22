app.controller('titleSelectionCtrl',['$scope',function($scope){
	$scope.hide=function(){
		$("#titleSelection .header .hide").toggle();
	}
}])
app.directive("ngChosetitle",[function(){
	return {
		restrict:"AE",
		link:function($scope,el){
			var el = el;
			$(el).on("touchend",".click",function(){
				$(el).find(".now").removeClass('now');
				$(this).addClass('now');
			})
		}

	}
}])
app.directive("ngChoselist",[function(){
	return{
		restrict:"AE",
		link:function($scope,el){
			$(el).find("a").attr("href","javascript:;")
			$(el).on("touchend","li",function(){
				$(el).find("li.now").removeClass('now');
				$(this).addClass('now');
			})
		}
	}
}])