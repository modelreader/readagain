app.controller('booktitleCtrl',['$scope',function($scope){
	
}]);
app.directive("ngXcase",function(){
	return{
		restrict:"A",
		transclude:true,
		replace:true,
		template:'<div class="BookCity-list"><div ng-transclude class="booktitleM"></div></div>',
		link:function($scope,el){
			$('.dis').eq(0).css('display','block');
			$('.BookCity-header').on('click','.classify',function(){
				$('.dis').css('display','none');
				var i=$(this).index();
				console.log(i)
				$('.dis').eq(i).css('display','block');
				$(".classify").removeClass('back');
				$(this).addClass('back');
			})
		}
		
	}
})
