app.controller('commentCtrl',['$scope',function($scope){
	
}])
app.directive('ngC',function(){
		return {
		restrict: 'AE',
		replace:true,
		link:function($scope,el){
			$('.bookpage-footer-btn').on('touchend',function(){
				$('#mask1').css({'transform':'scale(1)','display':'block'});
				$('#mask2').css({'transform':'scale(1)','display':'block'});
				$(".success1").css({'transform':'scale(1)','display':'block'});
			});
			$(".success1 .cancel").on('click',function(){
				$('#mask1').css({'transform':'scale(0)','display':'none'});
				$('#mask2').css({'transform':'scale(0)','display':'none'});
				$(this).closest(".success1").css({'transform':'scale(0)','display':'none'});
				return false;
			})
			
			
			var t=setTimeout(move,5000);
			function move(){
//				$('#mask1').css({'transform':'scale(1)','display':'block'});
//				$('#mask2').css({'transform':'scale(1)','display':'block'});
				$(".fails,#mask1,#mask2").css({'transform':'scale(1)','display':'block'});
			}
			$(".fails .cancel").on('click',function(){
				$('#mask1').css({'transform':'scale(0)','display':'none'});
				$('#mask2').css({'transform':'scale(0)','display':'none'});
				$(this).closest(".fails").css({'transform':'scale(0)','display':'none'});
				return false;
			})
		}
	}
})
