app.factory('back',[function(){
	var backList=[
	   {id:1001,name:'my',lu:'#/mine'},
	   {id:1002,name:'setting',lu:'#/setting'}
	];
	return {
		getAll:function(){
			return backList;
		},
		getById:function(id){
			for(var i=0;i<backList.length;i++){
				if(id===backList[i].id){
					return backList[i];
				}
			};
			return {};
		}
	}
}])