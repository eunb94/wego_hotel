"use strict";
var mainHome = mainHome || {};
mainHome = (() => {
    const WHEN_ERR = '호출하는 mainHome js를 찾을 수 없습니다 .'
    let context, js;
    let routerjs;
    let mainVuejs, hotelMainVuejs, hotelHomejs,hotelDetailjs;
    let init = () => {
        context = $.ctx()
        js = $.js()
        routerjs = js+'/cmm/router.js'
      	mainVuejs = js+'/vue/mainVue.js'
      	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
      	hotelHomejs = js+'/hotel/hotelHome.js'
      	hotelDetailjs = js+'/hotel/hotelDetail.js'

    }
    let onCreate = () => {
        init();
        $.when(
            $.getScript(mainVuejs),
            $.getScript(routerjs),
            $.getScript(hotelHomejs),
            $.getScript(hotelDetailjs)
            
        ).done(() => {
            alert('mainHome 성공')
            setContentView()
            hotelgo()

        }).fail(() => {
            alert(WHEN_ERR)
        })
    }
    let setContentView = () => {
		alert('좀떠라')
        let x = {css:$.css(),img:$.img()}
        $('body').html(mainVue.main_navi(x))
             .append(mainVue.main_body(x))
             .append(mainVue.main_footer(x))
           
    }
    let hotelgo=()=>{
        $('#hotel_go').click(e=>{
        	e.preventDefault()
        	hotelHome.onCreate()
        	
        })
    }


    return { onCreate }

})();