CNVS.SliderParallax=function(){function n(e){var i,r,l,s,a;e.sliderPx.el&&(l=e.sliderPx.el,s=l.offsetHeight,a=l.classList,e.scrollPos.y=window.pageYOffset,e.body.classList.contains("device-up-lg")&&!e.isMobile?(s+e.sliderPx.offset+50>e.scrollPos.y?(a.add("slider-parallax-visible"),a.remove("slider-parallax-invisible"),e.scrollPos.y>e.sliderPx.offset?("object"==typeof l.querySelector(".slider-inner")?(i=-.4*(e.scrollPos.y-e.sliderPx.offset),r=-.15*(e.scrollPos.y-e.sliderPx.offset),o(0,i,e.sliderPx.inner)):(i=(e.scrollPos.y-e.sliderPx.offset)/1.5,r=(e.scrollPos.y-e.sliderPx.offset)/7,o(0,i,l)),o(0,r,e.sliderPx.caption)):(l.querySelector(".slider-inner")?o(0,0,e.sliderPx.inner):o(0,0,l),o(0,0,e.sliderPx.caption))):(a.add("slider-parallax-invisible"),a.remove("slider-parallax-visible")),requestAnimationFrame(function(){n(e)})):(l.querySelector(".slider-inner")?o(0,0,e.sliderPx.inner):o(0,0,l),o(0,0,e.sliderPx.caption),a.add("slider-parallax-visible"),a.remove("slider-parallax-invisible")))}function o(e,i,r){r&&(r.style.transform="translate3d("+e+", "+i+"px, 0)")}var l=SEMICOLON.Core,t=SEMICOLON.Modules,d=SEMICOLON.Mobile;return{init:function(e){if(l.getSelector(e,!1,!1).length<1)return!0;for(var a=0,i=["ms","moz","webkit","o"],r=0;r<i.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[i[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[r]+"CancelAnimationFrame"]||window[i[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,i){var r=(new Date).getTime(),l=Math.max(0,16-(r-a)),s=window.setTimeout(function(){e(r+l)},l);return a=r+l,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)});var s={sliderPx:l.getVars.sliderParallax,body:l.getVars.elBody,header:l.getVars.elHeader,scrollPos:l.getVars.scrollPos,isMobile:d.any()};s.sliderPx.el.querySelector(".slider-inner")?o(0,0,s.sliderPx.inner):o(0,0,s.sliderPx.el),o(0,0,s.sliderPx.caption),window.addEventListener("scroll",function(){n(s);var i,r,l=s;l.sliderPx.el.length<1||(l.body.classList.contains("device-up-lg")&&!l.isMobile?(i=l.sliderPx.el.offsetHeight,r=l.header&&l.header.classList.contains("transparent-header")||l.body.classList.contains("side-header")?100:0,l.sliderPx.el.classList.contains("slider-parallax-visible")&&l.sliderPx.el.querySelectorAll(".slider-arrow-left,.slider-arrow-right,.slider-caption,.slider-element-fade").forEach(function(e){e.style.opacity=1-1.85*(l.scrollPos.y-r)/i})):l.sliderPx.el.querySelectorAll(".slider-arrow-left,.slider-arrow-right,.slider-caption,.slider-element-fade").forEach(function(e){e.style.opacity=1}))}),l.getVars.resizers.sliderparallax=function(){t.sliderParallax()}}}}();