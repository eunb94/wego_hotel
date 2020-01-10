"use strict";
var navi = naiv||{};
navi = (()=>{
	const WHEN_ERR ='호출하는 navi.js를 찾을수 없습니다.'
	let context, js;
	let mainVuejs;
	let init=()=>{
		context = $.ctx()
		js = $.js()
		mainVuejs =js+'/vue/mainVue.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			

		).done(()=>{
			setContentView()
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
	
	}
	return{}
})();