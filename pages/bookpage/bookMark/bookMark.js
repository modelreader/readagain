app.controller('bookMarkCtrl',['$scope',function($scope){
	
}])
app.directive('ngX',function(){
	return {
		restrict: 'AE',
		replace:true,
		link:function($scope,el){
//			$('.bookmark-listBom').eq(0).hide();
			$('.selected').hide();
			$('.delete1').hide();
			$('.bookmark-listL').each(function(index,val){
				$('.bookmark-listL').eq(index).on('touchend',function(){
					$('.bookmark-listBom').show();
					$('.selected').hide();
					$('.delete1').hide();
					$('.bookmark-list').find('titleB').css('color',"#151c2b");
					$('.bookmark-list').find('abstract2').css('color',"#505050");
					$('.bookmark-list').find('recodeL').css('color',"#1f1f1f");
					$('.bookmark-list').find('recodeR').css('color',"#1f1f1f");
//					$('.bookmark-list').find('recodeL').children('i').css('background-image','$bIX1');
//					$('.bookmark-list').find('recodeR').children('i').css('background-image','$bIX2');
					$('.bookmark-list').find('recodeL').css('color',"#1f1f1f");
					
					console.log($(this).index());
					var index1=$(this).index();
					$('.bookmark-listBom').eq(index1).show();
					$('.selected').eq(index1).show();
					$('.delete1').eq(index1).show();
					$('.titleB').eq(index1).css('color',"#fff");
					$('.abstract2').eq(index1).css('color',"#fff");
					$('.recodeL').eq(index1).css('color',"#fff");
					$('.recodeR').eq(index1).css('color',"#fff");
//					$('.recodeL').eq(index1).children('i').css('background-image',');
//					$('.recodeR').eq(index1).children('i').css('background-image',$bI2);
					
				})
			})	
			$('.bookmark-list').on('touchend','.delete1',function(){
				$('.bookmark-list').css('display','block');
				$(this).closest('bookmark-list').css('display','none');
			})
		}
	}
})
