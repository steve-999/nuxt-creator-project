(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{275:function(t,o,e){var content=e(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("4f793de0",content,!0,{sourceMap:!1})},298:function(t,o,e){"use strict";e(275)},299:function(t,o,e){var r=e(40)(!1);r.push([t.i,".carousel-container{width:100%;padding:35px 30px;height:100%;position:relative}.photo-container{width:100%;height:100%;padding:20px 15px;margin:0 auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.photos__image{width:100%;border-radius:9px}button.slick-next:before,button.slick-prev:before{background-color:#eafae9;color:#3cb371;font-size:32px}button.slick-next:before{position:relative;right:5px}button.slick-prev:before{position:relative;left:-5px}",""]),t.exports=r},317:function(t,o,e){"use strict";e.r(o);var r=e(333),n=e.n(r),l=(e(334),e(335),{name:"Photos",props:["propertyData"],components:{VueSlickCarousel:n.a},data:function(){return{photo_idx:0,Nthumbs:4,settings:{dots:!0,dotsClass:"slick-dots custom-dot-class",arrows:!0,infinite:!0,speed:600,slidesToShow:1,slidesToScroll:1,draggable:!1}}},computed:{property:function(){return this.propertyData?this.propertyData:void 0},photos:function(){return this.property&&"media"in this.property&&"photos"in this.property.media&&this.property?this.property.media.photos:[]},photo:function(){return this.photos.length?this.photos[this.photo_idx]:void 0}}}),c=(e(298),e(32)),component=Object(c.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.photo?e("div",{staticClass:"photos-container"},[e("div",{staticClass:"carousel-container"},[e("VueSlickCarousel",{ref:"carousel"},t._l(t.photos,(function(t,o){return e("div",{key:o},[e("img",{ref:"large_image_ref",refInFor:!0,staticClass:"photos__image",attrs:{src:t.photo}})])})),0)],1)]):t._e()}),[],!1,null,null,null);o.default=component.exports}}]);