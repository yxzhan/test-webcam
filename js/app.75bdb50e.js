(function(t){function e(e){for(var i,o,a=e[0],c=e[1],u=e[2],l=0,p=[];l<a.length;l++)o=a[l],r[o]&&p.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);h&&h(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={1:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var h=c;s.push([4,0]),n()})({"1A02":function(t,e,n){"use strict";var i=n("NsB+"),r=n.n(i);r.a},4:function(t,e,n){t.exports=n("Vtdi")},Doex:function(t,e,n){"use strict";var i=n("yWk3"),r=n.n(i);r.a},EDI0:function(t,e,n){},"Gm/n":function(t,e,n){"use strict";var i=n("Sqtl"),r=n.n(i);r.a},"NsB+":function(t,e,n){},Sqtl:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var i=n("Kw5r"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main-box",class:{reverse:t.currentPos}},[n("ScreenBox",{attrs:{"current-pos":t.currentPos},on:{switchpos:t.switchPos}}),n("TutorialBox",{attrs:{"current-pos":t.currentPos}})],1)])},s=[],o=(n("xfY5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tutorial-box"},[n("h1",[t._v("Hand Shadow Tutorial")]),n("div",{staticClass:"img-box",class:{flip:t.currentPos}},[n("img",{attrs:{src:t.imgDir+t.step+".jpg"}}),n("DetectCam",{attrs:{step:t.step,finish:t.finish},on:{nextstep:t.gotoNextFrame}})],1),n("div",{staticClass:"instruction",on:{click:t.gotoNextFrame}},[t._v("Step "+t._s(t.step)+": "+t._s(t.instructions[t.step]))])])}),a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cam-box"},[n("img",{attrs:{width:"100%",src:t.screenshot}}),n("div",{staticClass:"match"},[t._v("Step"+t._s(t.step)+": "+t._s(t.matchPercentage)+"% match.")]),n("a",{staticClass:"pause",attrs:{href:"#"},on:{click:t.pauseCam}},[t._v(t._s(t.pause?"Resume":"Pause"))])])},u=[],h=(n("rGqo"),n("vDqi")),l=n.n(h),p=(n("EVdn"),n("obyI")),d=n.n(p),f=d.a.visionApi,m=d.a.predictionKey,v=d.a.imageServer,g={name:"DetectCam",props:["step","finish"],data:function(){return{pause:!0,threshold:.4,title:"Follow the steps",screenshot:"",matchPercentage:0,checking:!1}},mounted:function(){this.initWebCam()},methods:{pauseCam:function(){this.pause=!this.pause},camReady:function(){var t=this;setInterval(function(){!t.checking&&!t.pause&&!t.finish&&t.captureImage()},1e3)},formatResult:function(t){var e=this,n={};t.data.predictions.forEach(function(t){n[t.tagName]=t.probability});var i="s"+this.step;if(this.matchPercentage=parseInt(1e4*n[i])/100,n[i]>this.threshold)return console.log("Match percentage: ",this.matchPercentage),setTimeout(function(){e.matchPercentage=0,e.$emit("nextstep"),e.checking=!1},1e3),!1;this.checking=!1},initWebCam:function(){var t=this,e=document.createElement("video");e.id="screenshot-video",e.style.width="100%",e.style.opacity="0.5",e.style.display="none",e.setAttribute("autoplay",""),e.setAttribute("muted",""),e.setAttribute("playsinline","");var n=["user","environment"],i={audio:!1,video:{facingMode:n[1]}};navigator.mediaDevices.getUserMedia(i).then(function(n){e.srcObject=n,t.camReady()}),document.getElementsByClassName("cam-box")[0].appendChild(e)},captureImage:function(){var t=this,e=document.querySelector("#screenshot-video");if(0===e.videoWidth)return!1;var n=document.createElement("canvas"),i=n.getContext("2d");n.width=e.videoWidth/2,n.height=e.videoHeight/2,i.drawImage(e,0,0,n.width,n.height),this.screenshot=n.toDataURL("image/png"),this.uploadImage().then(function(e){return t.checkVision(v+"test.png")}).then(function(e){return t.formatResult(e)})},uploadImage:function(t){return this.checking=!0,l()({method:"post",url:v+"upload/",data:{url:this.screenshot}})},checkVision:function(t){return l()({method:"post",url:f,headers:{"Prediction-Key":m,"Content-Type":"application/json"},data:{Url:t}})}}},b=g,y=(n("1A02"),n("KHd+")),x=Object(y["a"])(b,c,u,!1,null,"7f7967b0",null),P=x.exports,_={name:"TutorialBox",props:["currentPos"],data:function(){return{step:1,finish:!1,imgDir:"images/",instructions:["","Make your right hand in this shape.","Use your left hand to adjust the right hand finger","Adjust your right hand middle finger to make a round face.","Put your left hand over right hand!","You dit it!"]}},methods:{gotoNextFrame:function(){if(this.step===this.instructions.length-1)return this.finish=!0,!1;this.step++}},components:{DetectCam:P}},w=_,j=(n("Gm/n"),Object(y["a"])(w,o,a,!1,null,"5fd95eb6",null)),C=j.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen-box"},[n("h1",[t._v("Project Area")]),n("a",{attrs:{href:"#"},on:{click:t.switchPos}},[t._v("Switch to "+t._s(t.positions[t.currentPos]))])])},S=[],O=(d.a.visionApi,d.a.predictionKey,d.a.imageServer,{name:"ScreenBox",props:["currentPos"],data:function(){return{positions:["Right","Left"]}},methods:{switchPos:function(){this.$emit("switchpos")}}}),D=O,I=(n("Doex"),Object(y["a"])(D,k,S,!1,null,"0cc175ee",null)),A=I.exports,E={name:"app",data:function(){return{currentPos:0}},methods:{switchPos:function(){this.currentPos=Number(!this.currentPos)}},components:{ScreenBox:A,TutorialBox:C}},B=E,T=(n("ZL7j"),Object(y["a"])(B,r,s,!1,null,null,null)),M=T.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(M)}}).$mount("#app")},ZL7j:function(t,e,n){"use strict";var i=n("EDI0"),r=n.n(i);r.a},obyI:function(t,e){t.exports={visionApi:"https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/c9deb896-a4bf-41b2-887f-5fe4eed0a60c/url?iterationId=7cf4d4a8-e2ed-43d8-bb00-55e3537df881",predictionKey:"aeefa29153194a7bb93e9989a4b3d525",imageServer:"http://35.204.79.219:3000/",socketAddress:"http://192.168.1.101:3000",qrcodeLink:"http://192.168.1.101:3000"}},yWk3:function(t,e,n){}});
//# sourceMappingURL=app.75bdb50e.js.map