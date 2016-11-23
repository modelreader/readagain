app.controller('bPagesCtrl',['$scope',function($scope){
	
}])
app.directive('lunbo',function(){
	return {
		restrict: 'AE',
		replace:true,
		link:function($scope,el){
			$(".gongGe-ul").eq(0).css('display','block');
			$(".waveWheel .wWBtn").eq(0).addClass("colors");
			var now=0;
			var t=setInterval(move,2000);
			function move(){
				now++;
				if(now==$(".gongGe-ul").length){
					now=0
				}
				$(".gongGe-ul").css('display','none');
				$(".waveWheel .wWBtn").removeClass('colors');
				$(".gongGe-ul").eq(now).css('display','block');
				$(".waveWheel .wWBtn").eq(now).addClass('colors')
			}
			
		}
	}
})
