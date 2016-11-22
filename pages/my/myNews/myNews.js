app.controller('myNewsCtrl',['$scope','$routeParams','back',function($scope,$routeParams,back){
	var id=parseInt($routeParams.id);
	$scope.ss=back.getById(id);
}])
app.directive('ngN',[function(){
	return {
		restrict:"AE",
		link:function($scope,el){
				$(".xxk div").on("touchend",function(){
						var index=$(this).index();
						$(".xxk div").removeClass("active");
						$(this).addClass('active');
						$("ul").css("display","none").eq(index).css("display","block");
	            })
		}
	}
}])
