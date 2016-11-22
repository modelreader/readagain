app.controller('mineCtrl',['$scope',function($scope){
	
}])
app.directive('ngM',[function(){
	return {
		restrict:"AE",
		link:function($scope,el){
			$(".jiancha").on('touchend',function(){
				$(".zuixin").css("transform","scale(1,1)")
			});
		}
	}
}])