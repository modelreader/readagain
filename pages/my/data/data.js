app.controller('myDataCtrl',['$scope',function($scope){
	
}])
app.directive('ngX',[function(){
	return {
		restrict:"AE",
		link:function($scope,el){
			$(".tx").on('touchend',function(){
				$(".touxiang").css("transform","scale(1,1)")
			});
			$(".xb").on('touchend',function(){
				$(".sex").css("transform","scale(1,1)")
			});
			$(".quxiao").on('touchend',function(){
				$(".touxiang").css("transform","scale(0,0)");
				$(".sex").css("transform","scale(0,0)")
			})
		}
	}
}])
