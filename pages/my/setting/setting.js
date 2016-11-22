app.controller('settingCtrl',['$scope',function($scope){
	
}])
app.directive('ngS',[function(){
	return {
		restrict:"AE",
		link:function($scope,el){
			$(".break").on('touchend',function(){
				$(".tixing").css("transform","scale(1,1)")
			});
			$(".clear").on('touchend',function(){
				$(".cache").css("transform","scale(1,1)")
			});
			$(".qx").on('touchend',function(){
				$(".cache").css("transform","scale(0,0)");
				$(".tixing").css("transform","scale(0,0)")
			})
		}
	}
}])