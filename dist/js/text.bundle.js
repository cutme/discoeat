!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="./src/text.js")}({"./node_modules/webfontloader/webfontloader.js":function(t,e,n){var i;!function(){function r(t,e,n){return t.call.apply(t.bind,arguments)}function o(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function s(t,e,n){return(s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r:o).apply(null,arguments)}var a=Date.now||function(){return+new Date};var c=!!window.FontFace;function u(t,e,n,i){if(e=t.c.createElement(e),n)for(var r in n)n.hasOwnProperty(r)&&("style"==r?e.style.cssText=n[r]:e.setAttribute(r,n[r]));return i&&e.appendChild(t.c.createTextNode(i)),e}function l(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),r=0;r<e.length;r+=1){for(var o=!1,s=0;s<i.length;s+=1)if(e[r]===i[s]){o=!0;break}o||i.push(e[r])}for(e=[],r=0;r<i.length;r+=1){for(o=!1,s=0;s<n.length;s+=1)if(i[r]===n[s]){o=!0;break}o||e.push(i[r])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(t,e){for(var n=t.className.split(/\s+/),i=0,r=n.length;i<r;i++)if(n[i]==e)return!0;return!1}function d(t,e,n){function i(){a&&r&&o&&(a(s),a=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var r=!1,o=!0,s=null,a=n||null;c?(e.onload=function(){r=!0,i()},e.onerror=function(){r=!0,s=Error("Stylesheet failed to load"),i()}):setTimeout(function(){r=!0,i()},0),l(t,"head",e)}function g(t,e,n,i){var r=t.c.getElementsByTagName("head")[0];if(r){var o=u(t,"script",{src:e}),s=!1;return o.onload=o.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&r.removeChild(o))},r.appendChild(o),setTimeout(function(){s||(s=!0,n&&n(Error("Script load timeout")))},i||5e3),o}return null}function m(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,w(t)}}function y(t,e){t.c=e,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function b(t){this.a=t||"-"}function k(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function x(t){return t.a+t.f}function S(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function T(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function _(t){if(t.g){var e=p(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),h(t.f,n,i)}E(t,"inactive")}function E(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,x(n)):t.h[e]())}function L(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function N(t){l(t.c,"body",t.a)}function P(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(t.c)+";font-style:"+S(t)+";font-weight:"+t.f+"00;"}function q(t,e,n,i,r,o){this.g=t,this.j=e,this.a=i,this.c=n,this.f=r||3e3,this.h=o||void 0}function O(t,e,n,i,r,o,s){this.v=t,this.B=e,this.c=n,this.a=i,this.s=s||"BESbswy",this.f={},this.w=r||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new L(this.c,this.s),this.h=new L(this.c,this.s),this.j=new L(this.c,this.s),this.m=new L(this.c,this.s),t=P(t=new k(this.a.c+",serif",x(this.a))),this.g.a.style.cssText=t,t=P(t=new k(this.a.c+",sans-serif",x(this.a))),this.h.a.style.cssText=t,t=P(t=new k("serif",x(this.a))),this.j.a.style.cssText=t,t=P(t=new k("sans-serif",x(this.a))),this.m.a.style.cssText=t,N(this.g),N(this.h),N(this.j),N(this.m)}b.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},q.prototype.start=function(){var t=this.c.o.document,e=this,n=a(),i=new Promise(function(i,r){!function o(){a()-n>=e.f?r():t.fonts.load(function(t){return S(t)+" "+t.f+"00 300px "+j(t.c)}(e.a),e.h).then(function(t){1<=t.length?i():setTimeout(o,25)},function(){r()})}()}),r=null,o=new Promise(function(t,n){r=setTimeout(n,e.f)});Promise.race([o,i]).then(function(){r&&(clearTimeout(r),r=null),e.g(e.a)},function(){e.j(e.a)})};var A={D:"serif",C:"sans-serif"},C=null;function M(){if(null===C){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return C}function R(t,e,n){for(var i in A)if(A.hasOwnProperty(i)&&e===t.f[A[i]]&&n===t.f[A[i]])return!0;return!1}function B(t){var e,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(e=n===t.f.serif&&i===t.f["sans-serif"])||(e=M()&&R(t,n,i)),e?a()-t.A>=t.w?M()&&R(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?F(t,t.v):F(t,t.B):function(t){setTimeout(s(function(){B(this)},t),50)}(t):F(t,t.v)}function F(t,e){setTimeout(s(function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),e(this.a)},t),0)}function z(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}O.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=a(),B(this)};var I=null;function W(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&h(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),E(t,"active")):_(t.a))}function D(t){this.j=t,this.a=new function(){this.c={}},this.h=0,this.f=this.g=!0}function H(t,e,n,i,r){var o=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=r||null,a=i||{};if(0===n.length&&o)_(e.a);else{e.f+=n.length,o&&(e.j=o);var c,u=[];for(c=0;c<n.length;c++){var l=n[c],f=a[l.c],p=e.a,d=l;if(p.g&&h(p.f,[p.a.c("wf",d.c,x(d).toString(),"loading")]),E(p,"fontloading",d),p=null,null===I)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);I=d?42<parseInt(d[1],10):!g}else I=!1;p=I?new q(s(e.g,e),s(e.h,e),e.c,l,e.s,f):new O(s(e.g,e),s(e.h,e),e.c,l,e.s,t,f),u.push(p)}for(c=0;c<u.length;c++)u[c].start()}},0)}function U(t,e){this.c=t,this.a=e}function X(t,e){this.c=t,this.a=e}z.prototype.g=function(t){var e=this.a;e.g&&h(e.f,[e.a.c("wf",t.c,x(t).toString(),"active")],[e.a.c("wf",t.c,x(t).toString(),"loading"),e.a.c("wf",t.c,x(t).toString(),"inactive")]),E(e,"fontactive",t),this.m=!0,W(this)},z.prototype.h=function(t){var e=this.a;if(e.g){var n=p(e.f,e.a.c("wf",t.c,x(t).toString(),"active")),i=[],r=[e.a.c("wf",t.c,x(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,x(t).toString(),"inactive")),h(e.f,i,r)}E(e,"fontinactive",t),W(this)},D.prototype.load=function(t){this.c=new function(t,e){this.a=t,this.o=e||t,this.c=this.o.document}(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var i=[],r=n.timeout;!function(t){t.g&&h(t.f,[t.a.c("wf","loading")]),E(t,"loading")}(e);var i=function(t,e,n){var i,r=[];for(i in e)if(e.hasOwnProperty(i)){var o=t.c[i];o&&r.push(o(e[i],n))}return r}(t.a,n,t.c),o=new z(t.c,e,r);for(t.h=i.length,e=0,n=i.length;e<n;e++)i[e].load(function(e,n,i){H(t,o,e,n,i)})}(this,new function(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new b("-"),this.j=!1!==e.events,this.g=!1!==e.classes}(this.c,t),t)},U.prototype.load=function(t){var e=this,n=e.a.projectId,i=e.a.version;if(n){var r=e.c.o;g(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(i?"?v="+i:""),function(i){i?t([]):(r["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(r["__mti_fntLst"+n]){var i,o=r["__mti_fntLst"+n](),s=[];if(o)for(var a=0;a<o.length;a++){var c=o[a].fontfamily;void 0!=o[a].fontStyle&&void 0!=o[a].fontWeight?(i=o[a].fontStyle+o[a].fontWeight,s.push(new k(c,i))):s.push(new k(c))}t(s)}else setTimeout(function(){e()},50)}())}).id="__MonotypeAPIScript__"+n}else t([])},X.prototype.load=function(t){var e,n,i=this.a.urls||[],r=this.a.families||[],o=this.a.testStrings||{},s=new m;for(e=0,n=i.length;e<n;e++)d(this.c,i[e],v(s));var a=[];for(e=0,n=r.length;e<n;e++)if((i=r[e].split(":"))[1])for(var c=i[1].split(","),u=0;u<c.length;u+=1)a.push(new k(i[0],c[u]));else a.push(new k(i[0]));y(s,function(){t(a,o)})};var $="https://fonts.googleapis.com/css";var G={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},K={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},J={i:"i",italic:"i",n:"n",normal:"n"},V=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Q(t,e){this.c=t,this.a=e}var Y={Arimo:!0,Cousine:!0,Tinos:!0};function Z(t,e){this.c=t,this.a=e}function tt(t,e){this.c=t,this.f=e,this.a=[]}Q.prototype.load=function(t){var e=new m,n=this.c,i=new function(t,e){this.c=t||$,this.a=[],this.f=[],this.g=e||""}(this.a.api,this.a.text),r=this.a.families;!function(t,e){for(var n=e.length,i=0;i<n;i++){var r=e[i].split(":");3==r.length&&t.f.push(r.pop());var o="";2==r.length&&""!=r[1]&&(o=":"),t.a.push(r.join(o))}}(i,r);var o=new function(t){this.f=t,this.a=[],this.c={}}(r);!function(t){for(var e=t.f.length,n=0;n<e;n++){var i=t.f[n].split(":"),r=i[0].replace(/\+/g," "),o=["n4"];if(2<=i.length){var s;if(s=[],a=i[1])for(var a,c=(a=a.split(",")).length,u=0;u<c;u++){var l;if((l=a[u]).match(/^[\w-]+$/))if(null==(h=V.exec(l.toLowerCase())))l="";else{if(l=null==(l=h[2])||""==l?"n":J[l],null==(h=h[1])||""==h)h="4";else var f=K[h],h=f||(isNaN(h)?"4":h.substr(0,1));l=[l,h].join("")}else l="";l&&s.push(l)}0<s.length&&(o=s),3==i.length&&(s=[],0<(i=(i=i[2])?i.split(","):s).length&&(i=G[i[0]])&&(t.c[r]=i))}for(t.c[r]||(i=G[r])&&(t.c[r]=i),i=0;i<o.length;i+=1)t.a.push(new k(r,o[i]))}}(o),d(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;i<e;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(i),v(e)),y(e,function(){t(o.a,o.c,Y)})},Z.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?g(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],r=0;r<e.length;r+=2)for(var o=e[r],s=e[r+1],a=0;a<s.length;a++)i.push(new k(o,s[a]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}},2e3):t([])},tt.prototype.load=function(t){var e=this.f.id,n=this.c.o,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var r=0,o=n.fonts.length;r<o;++r){var s=n.fonts[r];i.a.push(new k(s.name,T("font-weight:"+s.weight+";font-style:"+s.style)))}t(i.a)},g(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",function(e){e&&t([])})):t([])};var et=new D(window);et.a.c.custom=function(t,e){return new X(e,t)},et.a.c.fontdeck=function(t,e){return new tt(e,t)},et.a.c.monotype=function(t,e){return new U(e,t)},et.a.c.typekit=function(t,e){return new Z(e,t)},et.a.c.google=function(t,e){return new Q(e,t)};var nt={load:s(et.load,et)};void 0===(i=function(){return nt}.call(e,n,e,t))||(t.exports=i)}()},"./src/js/fonts.js":function(t,e,n){"use strict";n("./node_modules/webfontloader/webfontloader.js").load({google:{families:["Montserrat:300,400,500,700:latin-ext"]}})},"./src/js/framework.js":function(t,e,n){"use strict";!function(){var t=document.getElementsByClassName("js-fullHeight"),e=function(){for(var e=window.innerHeight+"px",n=0;n<t.length;n++)t[n].style.minHeight=e};t.length>0&&(e(),window.addEventListener("resize",e))}(),/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))?document.getElementsByTagName("html")[0].className+=" mobile":document.getElementsByTagName("html")[0].className+=" desktop",function(){var t=document.getElementsByClassName("js-hamburger")[0];if(t){var e=document.getElementsByClassName("js-top")[0],n=function n(i){("key"in i?"Escape"==i.key||"Esc"==i.key:27==i.keyCode)&&(document.body.classList.remove("no-overflow"),e.classList.remove("is-mobile"),t.classList.remove("is-active")),document.removeEventListener("keydown",n)};t.addEventListener("click",function(t){t.currentTarget.classList.toggle("is-active"),document.body.classList.toggle("no-overflow"),e.classList.toggle("is-mobile"),document.addEventListener("keydown",n)}),window.addEventListener("resize",function(){window.innerWidth>=1024&&t.classList.contains("is-active")&&(t.classList.remove("is-active"),document.body.classList.remove("no-overflow"),e.classList.remove("is-mobile"))})}}(),window.thisindex=function(t){for(var e=t.parentNode.childNodes,n=void 0,i=0,r=0;(n=e.item(i++))&&n!=t;)1==n.nodeType&&r++;return r},window.scrollToo=function(t,e,n){TweenLite.to(window,e,{scrollTo:{y:t+n,autoKill:!1},ease:Power1.easeOut})}},"./src/js/pace-init.js":function(t,e,n){"use strict";var i=function(t){return t&&t.__esModule?t:{default:t}}(n("./src/js/pace.js"));i.default.start(),i.default.on("done",function(){var t=document.getElementById("cover");if(t){document.getElementsByClassName("o-container")[0];t.addEventListener("transitionend",function e(n){t.removeEventListener("transitionend",e),document.body.removeAttribute("style"),document.getElementById("cover").remove()},!1),document.getElementsByClassName("pace")[0].remove()}})},"./src/js/pace.js":function(t,e,n){"use strict";var i;function r(t){return(r="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return void 0===t?"undefined":r(t)}):function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":r(t)}))(t)}(function(){var o,s,a,c,u,l,f,h,p,d,g,m,v,y,w,b,k,j,x,S,T,_,E,L,N,P,q,O,A,C,M,R,B,F,z,I,W,D,H,U,X,$,G,K,J,V,Q,Y,Z=[].slice,tt={}.hasOwnProperty,et=function(t,e){for(var n in e)tt.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},nt=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};for(T={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},A=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},M=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,S=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==M&&(M=function(t){return setTimeout(t,50)},S=function(t){return clearTimeout(t)}),B=function(t){var e,n;return e=A(),(n=function(){var i;return(i=A()-e)>=33?(e=A(),t(i,function(){return M(n)})):setTimeout(n,33-i)})()},R=function(){var t,e,n;return n=arguments[0],e=arguments[1],t=3<=arguments.length?Z.call(arguments,2):[],"function"==typeof n[e]?n[e].apply(n,t):n[e]},_=function(){var t,e,n,i,o,s,a;for(e=arguments[0],s=0,a=(i=2<=arguments.length?Z.call(arguments,1):[]).length;s<a;s++)if(n=i[s])for(t in n)tt.call(n,t)&&(o=n[t],null!=e[t]&&"object"===r(e[t])&&null!=o&&"object"===(void 0===o?"undefined":r(o))?_(e[t],o):e[t]=o);return e},k=function(t){var e,n,i,r,o;for(n=e=0,r=0,o=t.length;r<o;r++)i=t[r],n+=Math.abs(i),e++;return n/e},L=function(t,e){var n,i,r;if(null==t&&(t="options"),null==e&&(e=!0),r=document.querySelector("[data-pace-"+t+"]")){if(n=r.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(t){return i=t,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",i):void 0}}},f=function(){function t(){}return t.prototype.on=function(t,e,n,i){var r;return null==i&&(i=!1),null==this.bindings&&(this.bindings={}),null==(r=this.bindings)[t]&&(r[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:i})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,i,r;if(null!=(null!=(i=this.bindings)?i[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,r=[];n<this.bindings[t].length;)this.bindings[t][n].handler===e?r.push(this.bindings[t].splice(n,1)):r.push(n++);return r}},t.prototype.trigger=function(){var t,e,n,i,r,o,s,a,c;if(n=arguments[0],t=2<=arguments.length?Z.call(arguments,1):[],null!=(s=this.bindings)?s[n]:void 0){for(r=0,c=[];r<this.bindings[n].length;)i=(a=this.bindings[n][r]).handler,e=a.ctx,o=a.once,i.apply(null!=e?e:this,t),o?c.push(this.bindings[n].splice(r,1)):c.push(r++);return c}},t}(),d=window.Pace||{},window.Pace=d,_(d,f.prototype),C=d.options=_({},T,window.paceOptions,L()),G=0,J=(Q=["ajax","document","eventLag","elements"]).length;G<J;G++)!0===C[W=Q[G]]&&(C[W]=T[W]);p=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return et(e,t),e}(Error),s=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(C.target)))throw new p;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return(t=this.getElement()).className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){p=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,i,r,o,s;if(null==document.querySelector(C.target))return!1;for(t=this.getElement(),i="translate3d("+this.progress+"%, 0, 0)",r=0,o=(s=["webkitTransform","msTransform","transform"]).length;r<o;r++)e=s[r],t.children[0].style[e]=i;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),this.progress>=100?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return this.progress>=100},t}(),h=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,i,r,o,s;if(null!=this.bindings[t]){for(s=[],i=0,r=(o=this.bindings[t]).length;i<r;i++)n=o[i],s.push(n.call(this,e));return s}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),$=window.XMLHttpRequest,X=window.XDomainRequest,U=window.WebSocket,E=function(t,e){var n,i;for(n in i=[],e.prototype)try{null==t[n]&&"function"!=typeof e[n]?"function"==typeof Object.defineProperty?i.push(Object.defineProperty(t,n,{get:function(){return e.prototype[n]},configurable:!0,enumerable:!0})):i.push(t[n]=e.prototype[n]):i.push(void 0)}catch(t){t}return i},q=[],d.ignore=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?Z.call(arguments,1):[],q.unshift("ignore"),n=e.apply(null,t),q.shift(),n},d.track=function(){var t,e,n;return e=arguments[0],t=2<=arguments.length?Z.call(arguments,1):[],q.unshift("track"),n=e.apply(null,t),q.shift(),n},I=function(t){var e;if(null==t&&(t="GET"),"track"===q[0])return"force";if(!q.length&&C.ajax){if("socket"===t&&C.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),nt.call(C.ajax.trackMethods,e)>=0)return!0}return!1},g=function(t){function e(){var t,n=this;e.__super__.constructor.apply(this,arguments),t=function(t){var e;return e=t.open,t.open=function(i,r,o){return I(i)&&n.trigger("request",{type:i,url:r,request:t}),e.apply(t,arguments)}},window.XMLHttpRequest=function(e){var n;return n=new $(e),t(n),n};try{E(window.XMLHttpRequest,$)}catch(t){}if(null!=X){window.XDomainRequest=function(){var e;return e=new X,t(e),e};try{E(window.XDomainRequest,X)}catch(t){}}if(null!=U&&C.ajax.trackWebSockets){window.WebSocket=function(t,e){var i;return i=null!=e?new U(t,e):new U(t),I("socket")&&n.trigger("request",{type:"socket",url:t,protocols:e,request:i}),i};try{E(window.WebSocket,U)}catch(t){}}}return et(e,h),e}(),K=null,z=function(t){var e,n,i,r;for(n=0,i=(r=C.ajax.ignoreURLs).length;n<i;n++)if("string"==typeof(e=r[n])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(N=function(){return null==K&&(K=new g),K})().on("request",function(t){var e,n,i,r,s;if(r=t.type,i=t.request,s=t.url,!z(s))return d.running||!1===C.restartOnRequestAfter&&"force"!==I(r)?void 0:(n=arguments,"boolean"==typeof(e=C.restartOnRequestAfter||0)&&(e=0),setTimeout(function(){var t,e,s,a,c;if("socket"===r?i.readyState<2:0<(s=i.readyState)&&s<4){for(d.restart(),c=[],t=0,e=(a=d.sources).length;t<e;t++){if((W=a[t])instanceof o){W.watch.apply(W,n);break}c.push(void 0)}return c}},e))}),o=function(){function t(){var t=this;this.elements=[],N().on("request",function(){return t.watch.apply(t,arguments)})}return t.prototype.watch=function(t){var e,n,i,r;if(i=t.type,e=t.request,r=t.url,!z(r))return n="socket"===i?new y(e):new w(e),this.elements.push(n)},t}(),w=function(){return function(t){var e,n,i,r,o,s=this;if(this.progress=0,null!=window.ProgressEvent)for(t.addEventListener("progress",function(t){return t.lengthComputable?s.progress=100*t.loaded/t.total:s.progress=s.progress+(100-s.progress)/2},!1),n=0,i=(o=["load","abort","timeout","error"]).length;n<i;n++)e=o[n],t.addEventListener(e,function(){return s.progress=100},!1);else r=t.onreadystatechange,t.onreadystatechange=function(){var e;return 0===(e=t.readyState)||4===e?s.progress=100:3===t.readyState&&(s.progress=50),"function"==typeof r?r.apply(null,arguments):void 0}}}(),y=function(){return function(t){var e,n,i,r,o=this;for(this.progress=0,n=0,i=(r=["error","open"]).length;n<i;n++)e=r[n],t.addEventListener(e,function(){return o.progress=100},!1)}}(),c=function(){return function(t){var e,n,i,r;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,i=(r=t.selectors).length;n<i;n++)e=r[n],this.elements.push(new u(e))}}(),u=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},C.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),a=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),l=function(){return function(){var t,e,n,i,r,o=this;this.progress=0,t=0,r=[],i=0,n=A(),e=setInterval(function(){var s;return s=A()-n-50,n=A(),r.push(s),r.length>C.eventLag.sampleCount&&r.shift(),t=k(r),++i>=C.eventLag.minSamples&&t<C.eventLag.lagThreshold?(o.progress=100,clearInterval(e)):o.progress=3/(t+3)*100},50)}}(),v=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=R(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=R(this.source,"progress")),e>=100&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),D=null,F=null,j=null,H=null,b=null,x=null,d.running=!1,P=function(){if(C.restartOnPushState)return d.restart()},null!=window.history.pushState&&(V=window.history.pushState,window.history.pushState=function(){return P(),V.apply(window.history,arguments)}),null!=window.history.replaceState&&(Y=window.history.replaceState,window.history.replaceState=function(){return P(),Y.apply(window.history,arguments)}),m={ajax:o,elements:c,document:a,eventLag:l},(O=function(){var t,e,n,i,r,o,a,c;for(d.sources=D=[],e=0,i=(o=["ajax","elements","document","eventLag"]).length;e<i;e++)!1!==C[t=o[e]]&&D.push(new m[t](C[t]));for(n=0,r=(c=null!=(a=C.extraSources)?a:[]).length;n<r;n++)W=c[n],D.push(new W(C));return d.bar=j=new s,F=[],H=new v})(),d.stop=function(){return d.trigger("stop"),d.running=!1,j.destroy(),x=!0,null!=b&&("function"==typeof S&&S(b),b=null),O()},d.restart=function(){return d.trigger("restart"),d.stop(),d.start()},d.go=function(){var t;return d.running=!0,j.render(),t=A(),x=!1,b=B(function(e,n){var i,r,o,s,a,c,u,l,f,h,p,g,m,y,w;for(100-j.progress,r=h=0,o=!0,c=p=0,m=D.length;p<m;c=++p)for(W=D[c],f=null!=F[c]?F[c]:F[c]=[],u=g=0,y=(a=null!=(w=W.elements)?w:[W]).length;g<y;u=++g)s=a[u],o&=(l=null!=f[u]?f[u]:f[u]=new v(s)).done,l.done||(r++,h+=l.tick(e));return i=h/r,j.update(H.tick(e,i)),j.done()||o||x?(j.update(100),d.trigger("done"),setTimeout(function(){return j.finish(),d.running=!1,d.trigger("hide")},Math.max(C.ghostTime,Math.max(C.minTime-(A()-t),0)))):n()})},d.start=function(t){_(C,t),d.running=!0;try{j.render()}catch(t){p=t}return document.querySelector(".pace")?(d.trigger("start"),d.go()):setTimeout(d.start,50)},void 0===(i=function(){return d}.call(e,n,e,t))||(t.exports=i)}).call(void 0)},"./src/js/polyfills.js":function(t,e,n){"use strict";[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})},"./src/sass/style.scss":function(t,e,n){},"./src/text.js":function(t,e,n){"use strict";!function(t){t&&t.__esModule}(n("./src/sass/style.scss"));n("./src/js/polyfills.js"),n("./src/js/pace-init.js"),n("./src/js/fonts.js"),n("./src/js/framework.js")}});
//# sourceMappingURL=text.bundle.js.map