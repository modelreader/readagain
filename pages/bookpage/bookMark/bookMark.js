app.controller('bookMarkCtrl',['$scope',function($scope){
	
}])
app.directive('ngX',function(){
	return {
		restrict: 'AE',
		replace:true,
		link:function($scope,el){
				$('.bookmark-listL').on('touchend',function(){
					var index1=$(this).closest(".bookmark-list").index();
					$('.bookmark-listBom').show();
					$('.selected').hide();
					$('.delete1').hide();
					$('.bookmark-list').find('.titleB').css('color',"#151c2b");
					$('.bookmark-list').find('.abstract2').css('color',"#505050");
					$('.bookmark-list').find('.recodeL').css('color',"#1f1f1f");
					$('.bookmark-list').find('.recodeR').css('color',"#1f1f1f");
					$('.bookmark-list').find('.recodeL').children('i').removeClass('bk1');
					$('.bookmark-list').find('.recodeR').children('i').removeClass('bk2');
					$('.bookmark-list').find('.recodeL').css('color',"#1f1f1f");
					$('.bookmark-list').find('.bookmark-listR').css('right',0);

					$('.bookmark-listBom').eq(index1).show();
					$('.selected').eq(index1).show();
					$('.delete1').eq(index1).show();
					$('.titleB').eq(index1).css('color',"#fff");
					$('.abstract2').eq(index1).css('color',"#fff");
					$('.recodeL').eq(index1).css('color',"#fff");
					$('.recodeR').eq(index1).css('color',"#fff");
					$('.recodeL').eq(index1).children('i').addClass('bk1');
					$('.recodeR').eq(index1).children('i').addClass('bk2');
					$('.bookmark-listR').eq(index1).css('right',0.2+'rem');
					return false;
				})
			$('.bookmark-list').on('touchend','.delete1',function(){
				$(this).closest('.bookmark-list').css('display','none');
				return false;
			})
		}
	}
})
