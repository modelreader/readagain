app.controller('noteCtrl',['$scope',function($scope){

}])
app.directive('ngXx',function(){
	return {
		restrict: 'AE',
		replace:true,
		link:function($scope,el){
				$('.note-listL').on('touchend',function(){
					var index=$(this).closest(".note-list").index();
					$('.note-list').find('.dashed1').show();
					$('.note-list').find('.selected').hide();
					$('.note-list').find('.delete1').hide();
					$('.note-list').find('.title').css('color',"#151c2b");
					$('.note-list').find('.abstract3').css('color',"#666666");
					$('.note-list').find('.p1,.p2').css('color',"#ec2e56");
					$('.note-list').find('.recodeL').css('color',"#1f1f1f");
					$('.note-list').find('.recodeR').css('color',"#1f1f1f");
					$('.note-list').find('.recodeL').children('i').removeClass('bk4');
					$('.note-list').find('.recodeR').children('i').removeClass('bk5');
					$('.note-list').find('.recodeL').css('color',"#1f1f1f");
					$('.note-list').find('.note-listR').css('right',0);
					$('.note-list').find('.note-listR .pen').removeClass('bk3');
					
					$('.dashed1').eq(index).hide();

					$('.selected').eq(index).show();
					$('.delete1').eq(index).show();
					$('.title').eq(index).css('color',"#fff");
					$('.abstract3').eq(index).css('color',"#fff");
					$('.notes').eq(index).find('.p1,.p2').css('color',"#20A97D");
					$('.recodeL').eq(index).css('color',"#fff");
					$('.recodeR').eq(index).css('color',"#fff");
					$('.recodeL').eq(index).children('i').addClass('bk4');
					$('.recodeR').eq(index).children('i').addClass('bk5');
					$('.note-listR').eq(index).css('right',0.2+'rem');
					$('.pen').eq(index).addClass('bk3');
					return false;
				});
			$('.note-list').on('touchend','.delete1',function(){
				$(this).closest('.note-list').css('display','none');
				return false;
			});
			$('.note-list').on('touchend','.note-listR .notes',function(){
				$('.note-list').find('.recode').children('.bj').css('display','none');
				$('.note-list').find('.notes').removeClass('notes1');
				var index=$(this).closest('.note-list').index();
				$('.note-list').eq(index).find('.notes').addClass('notes1');
				$('.recode').eq(index).children('.bj').css('display','block');
				return false;
			})
		}
	}
})
