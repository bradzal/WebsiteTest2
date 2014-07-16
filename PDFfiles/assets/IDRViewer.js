var IDRViewer=function(){var e={},t=1,n=0,r=0,i=0,s=0,o,u,a,f,l=[],c,h=false,p=false,d,v,m=false,g,y,b=0,w=1,E=2,S=0,x=1,T=[],N=0,C=0,k="index";e.makeNavBar=function(e,m,g,y,b,w){"use strict";v=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);u=I("contentContainer");a=I("mainContent");s=e;i=m;n=g;r=u.clientHeight-6;f=b;var E,N,C;I("pgCount").innerHTML="/"+s;u.style.width=n+"px";u.style.height=r+"px";var k=I("goBtn");if(f===0){o=I("jpedal");for(N=1;N<=s;N++){E=document.createElement("option");E.value=N;E.innerHTML=String(N);k.appendChild(E)}k.selectedIndex=m-1}else if(f===1){o=I("container"+m);I("goBtn").style.width="65px";E=document.createElement("option");E.value=1;E.innerHTML="1";k.appendChild(E);var O;for(N=2;N<=s;N+=2){E=document.createElement("option");E.value=N;if(N!==s||s%2===1){O=String(N+"-"+(N+1))}else{O=String(N)}E.innerHTML=O;k.appendChild(E)}k.selectedIndex=m/2}else if(f===2){o=I("jpedal");if(e>1){scrollEv(null)}for(N=1;N<=s;N++){E=document.createElement("option");E.value=N;E.innerHTML=String(N);k.appendChild(E);if(N!==s){I("page"+N).style.margin="0 auto 10px"}else{I("page"+N).style.margin="0 auto"}var D=I("page"+N);l[N]={width:D.clientWidth,height:D.clientHeight}}k.selectedIndex=m-1}o.style.transformOrigin="top left";o.style.webkitTransformOrigin="top left";o.style.msTransformOrigin="top left";o.style.mozTransformOrigin="top left";o.style.oTransformOrigin="top left";o.style.margin="0";var B=parseFloat(L("zoom"));var j=I("zoomBtn");if(n>P()){j.options[1].text="100%";j.options[2].text="Fit Width (Reset)"}if(!isNaN(B)&&B>0&&B!==1){t=B;H()}else if(n>P()){j.selectedIndex=2;this.zoomUpdate()}if(v){C=I("zoomBtn");C.parentNode.removeChild(C);C=I("btnMove");C.parentNode.removeChild(C);C=I("btnSelect");C.parentNode.removeChild(C)}var R=document.fullscreenEnabled||document.msFullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled;if(!R){C=I("btnFullscreen");C.parentNode.removeChild(C)}c=document.getElementById("leftContent");A(w);for(N=0;N<s;N++){T[N]=false}var U=I("thumb"+m);U.className="thumbnail currentPageThumbnail";c.scrollTop=U.getBoundingClientRect().top-40;h=false;p=false;I("btnOutlines").className="inactive";I("btnThumbnails").className="inactive";if(L("sidebar")==="thumbnails"){h=true;p=false}else if(L("sidebar")==="outlines"){h=true;p=true;I("btnThumbnails").className=""}if(h){I("main").style.left="200px";I("left").style.width="200px";I("left").style.left="0";_(-1)}if(p){I("thumbnailPanel").style.display="none";I("outlinePanel").style.display="inline"}d=L("mode")==="pan"?x:S;this.setSelectMode(d);F("fullscreenchange",document,q);F("MSFullscreenChange",document,q);F("mozfullscreenchange",document,q);F("webkitfullscreenchange",document,q);F("scroll",c,M);if(f===0&&i===1){I("btnPrev").className="inactive"}if(f===0&&i===s){I("btnNext").className="inactive"}try{var z=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");z.onreadystatechange=function(){if(z.readyState==4&&z.status==200){I("outlinePanel").innerHTML=z.responseText;if(p){I("btnThumbnails").className=""}else{I("btnOutlines").className=""}}};z.open("GET","bookmarks/bookmarks.html",false);z.send()}catch(W){}};e.setFirstPageName=function(e){k=e};var L=function(e){"use strict";var t=document.URL;var n=t.toString().indexOf("?");var r=n!=-1?t.substr(n+1).split("&"):"";for(var i=0;i<r.length;i++){r[i]=r[i].split("=");if(r[i][0]==e){return r[i][1]}}return""};e.toggleOutlines=function(e){"use strict";if(p&&!e){I("thumbnailPanel").style.display="inline";I("outlinePanel").style.display="none";c.scrollTop=I("thumb"+i).getBoundingClientRect().top-40;p=!p;I("btnThumbnails").className="inactive";I("btnOutlines").className=""}else if(e&&I("btnOutlines").className!="inactive"){I("thumbnailPanel").style.display="none";I("outlinePanel").style.display="inline";p=!p;I("btnThumbnails").className="";I("btnOutlines").className="inactive"}};var A=function(e){"use strict";var t;var n=0;var r=0;for(var i=1;i<=s;i++){if(e[r]<0&&n<=0){n=Math.abs(e[r])-1;r++}else if(n>0){n--}else{t=e[r];r++}var o=document.createElement("div");o.style.height=t+"px";o.className="thumbnail";o.id="thumb"+i;o.setAttribute("onclick","IDRViewer.goToPage("+i+");");o.setAttribute("title","Page "+i);o.innerHTML='<img src="assets/loading.gif"/>';c.children[0].appendChild(o)}};var O=function(e){"use strict";if(!T[e]){c.children[0].children[e].children[0].setAttribute("src","thumbnails/"+(e+1)+".png");T[e]=true}};var M=function(e){"use strict";var t=c.scrollTop;C=N;N=t;setTimeout(function(){_(t)},200)};var _=function(e){"use strict";if(e!=N&&e!=-1)return;for(var t=0;t<s;t++){if(!T[t]){var n=c.children[0].children[t];if(n.offsetTop>c.scrollTop+c.clientHeight){break}if(n.offsetTop+n.clientHeight>c.scrollTop){O(t)}}}};e.setSelectMode=function(e){"use strict";if(v)return;d=e;if(e==S){I("btnSelect").className="inactive";I("btnMove").className="";u.style.cursor=D(b);u.onmousedown=function(e){};window.onmouseup=function(e){};window.onmousemove=function(e){}}else{I("btnSelect").className="";I("btnMove").className="inactive";if(window.getSelection){if(window.getSelection().empty){window.getSelection().empty()}else if(window.getSelection().removeAllRanges){window.getSelection().removeAllRanges()}}else if(document.selection){document.selection.empty()}u.style.cursor=D(w);u.onmousedown=function(e){u.style.cursor=D(E);g=e.screenX;y=e.screenY;m=true;return false};window.onmouseup=function(e){u.style.cursor=D(w);m=false};window.onmousemove=function(e){if(m){a.scrollLeft=a.scrollLeft+g-e.screenX;a.scrollTop=a.scrollTop+y-e.screenY;g=e.screenX;y=e.screenY}}}};var D=function(e){"use strict";var t=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0;var n=typeof InstallTrigger!=="undefined";var r=!!window.chrome&&!t;if(n){if(e==b)return"";else if(e==w)return"-moz-grab";else return"-moz-grabbing"}else if(r){if(e==b)return"";else if(e==w)return"-webkit-grab";else return"-webkit-grabbing"}else{if(e==b)return"";else return"all-scroll"}};var P=function(){"use strict";var e=0;if(self.innerHeight){e=self.innerWidth}else if(document.documentElement&&document.documentElement.clientHeight){e=document.documentElement.clientWidth}else if(document.body){e=document.body.clientWidth}return e};var H=function(){"use strict";var e=a.scrollLeft;var i=a.scrollTop;var s=I("contentContainer").getBoundingClientRect().height;o.style.transform="scale("+t+")";o.style.WebkitTransform="scale("+t+")";o.style.msTransform="scale("+t+")";o.style.MozTransform="scale("+t+")";o.style.OTransform="scale("+t+")";u.style.width=n*t+"px";u.style.height=r*t+"px";var l=Math.floor(t*100);I("zoomBtn").options[0].innerHTML=l+"%";I("zoomBtn").selectedIndex=0;if(f==2){var c=Math.floor(100/l*100);o.style.width=c+"%"}var h=I("contentContainer").getBoundingClientRect().height/s;a.scrollTop=i*h};e.zoomIn=function(){"use strict";t=t*1.2;H()};e.zoomUpdate=function(){"use strict";var e=I("zoomBtn").selectedIndex;var s;var o;var u;if(e===0){}else if(e==1){t=1}else if(e==2){s=a.clientWidth;if(f==2){n=l[i].width}t=(s-6)/n}else if(e==3){o=a.clientHeight;u=(o-6)/r;if(f==2){c=l[i].height;u=(o-6)/c}t=u}else if(e==4){s=a.clientWidth;o=a.clientHeight;var c;if(f==2){n=l[i].width;c=l[i].height}var h=(s-6)/n;u=(o-6)/r;if(f==2){u=(o-6)/c}if(h>u){t=u}else{t=h}}H()};e.zoomOut=function(){"use strict";t=t/1.2;H()};e.goToPage=function(e){"use strict";var n;if(e===0){if(f===0||f===2){e=I("goBtn").selectedIndex+1}else{e=I("goBtn").selectedIndex*2+1}}if(e!=i){var r=[];if(t!=1)r[r.length]="zoom="+t;if(h&&!p)r[r.length]="sidebar=thumbnails";if(h&&p)r[r.length]="sidebar=outlines";if(d==x)r[r.length]="mode=pan";var o="?";for(n=0;n<r.length;n++){if(n>0)o=o+"&";o=o+r[n]}if(o.length==1)o="";var u;if(f===0){u=B(e,s);window.open(u+".html"+o,"_self")}else if(f==1){u=j(e,s);window.open(u+".html"+o,"_self")}else if(f==2){a.scrollTop=a.scrollTop+I("page"+e).getBoundingClientRect().top-45;for(n=1;n<=s;n++){I("thumb"+n).className="thumbnail"}I("thumb"+e).className="thumbnail currentPageThumbnail"}}};e.updateCurrentPage=function(){"use strict";if(I("page1").getBoundingClientRect().top>0){i=1;I("goBtn").selectedIndex=i-1}else{for(var e=1;e<=s;e++){var t=document.getElementById("page"+e);var n=t.getBoundingClientRect().top;if(n<=t.clientHeight*.25&&n>-t.clientHeight*.5){i=e;I("goBtn").selectedIndex=i-1;break}}}};var B=function(e,t){"use strict";var n=e.toString();var r=t.toString().length-n.length;if(e===1){n=k}else{for(var i=0;i<r;i++){n="0"+n}}return n};var j=function(e,t){"use strict";if(e>t)e=t;if(e===1)return B(e,t);else if(e%2===0){if(e===t)return B(e,t);else return B(e,t)+"-"+B(e+1,t)}else{return B(e-1,t)+"-"+B(e,t)}};e.next=function(){"use strict";if(f==1){if(i+1<s)this.goToPage(i+2)}else{if(i<s)this.goToPage(i+1)}};e.prev=function(){"use strict";if(i>1)this.goToPage(i-1)};var F=function(e,t,n){"use strict";if(t.addEventListener)t.addEventListener(e,n,false);else if(t.attachEvent){var r=t.attachEvent("on"+e,n);return r}};var I=function(e){return document.getElementById(e)};e.toggleThumbnails=function(){"use strict";if(h){I("main").style.left="0";I("left").style.width="0";I("left").style.left="-20px"}else{_(-1);I("main").style.left="200px";I("left").style.width="200px";I("left").style.left="0";M()}h=!h};var q=function(){"use strict";if(!document.fullscreenElement&&!document.msFullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement){I("btnFullscreen").children[0].src="assets/pgFullScreen.png"}else{I("btnFullscreen").children[0].src="assets/pgFullScreenClose.png"}};e.toggleFullScreen=function(){"use strict";if(!document.fullscreenElement&&!document.msFullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement){if(document.body.requestFullscreen){document.body.requestFullscreen()}else if(document.body.msRequestFullscreen){document.body.msRequestFullscreen()}else if(document.body.mozRequestFullScreen){document.body.mozRequestFullScreen()}else if(document.body.webkitRequestFullscreen){document.body.webkitRequestFullscreen()}}else{if(document.exitFullscreen){document.exitFullscreen()}else if(document.msExitFullscreen){document.msExitFullscreen()}else if(document.mozCancelFullScreen){document.mozCancelFullScreen()}else if(document.webkitCancelFullScreen){document.webkitCancelFullScreen()}}};e.addToolBarHyperlink=function(e,t){"use strict";var n=new Image;n.src=e;var r=document.createElement("a");r.href=t;r.className="customNavLink";r.appendChild(n);r.setAttribute("target","_blank");I("mainNav").insertBefore(r,I("btnPrev"))};e.addToolBarPDFLink=function(){"use strict";var e=new Image;e.src="assets/downloadPDF.png";var t=document.createElement("a");t.setAttribute("download","downloadedPDF.pdf");t.href="downloadPDF.pdf";t.className="customNavPDFLink";t.appendChild(e);t.setAttribute("target","_blank");I("btnZoomIn").parentNode.insertBefore(t,I("btnZoomIn").nextSibling)};return e}();if(intLoaded){idrLoad()}else{extLoaded=true}