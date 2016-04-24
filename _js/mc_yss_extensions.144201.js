
YAHOO.env=YAHOO.env||{modules:[],listeners:[]};YAHOO.env.getVersion=function(name){return YAHOO.env.modules[name]||null;};YAHOO.env.ua=function(){var o={ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0};var ua=navigator.userAgent,m;if((/KHTML/).test(ua)){o.webkit=1;}
m=ua.match(/AppleWebKit\/([^\s]*)/);if(m&&m[1]){o.webkit=parseFloat(m[1]);if(/ Mobile\//.test(ua)){o.mobile="Apple";}else{m=ua.match(/NokiaN[^\/]*/);if(m){o.mobile=m[0];}}
m=ua.match(/AdobeAIR\/([^\s]*)/);if(m){o.air=m[0];}}
if(!o.webkit){m=ua.match(/Opera[\s\/]([^\s]*)/);if(m&&m[1]){o.opera=parseFloat(m[1]);m=ua.match(/Opera Mini[^;]*/);if(m){o.mobile=m[0];}}else{m=ua.match(/MSIE\s([^;]*)/);if(m&&m[1]){o.ie=parseFloat(m[1]);}else{m=ua.match(/Gecko\/([^\s]*)/);if(m){o.gecko=1;m=ua.match(/rv:([^\s\)]*)/);if(m&&m[1]){o.gecko=parseFloat(m[1]);}}}}}
return o;}();(function(){YAHOO.namespace("util","widget","example");if("undefined"!==typeof YAHOO_config){var l=YAHOO_config.listener,ls=YAHOO.env.listeners,unique=true,i;if(l){for(i=0;i<ls.length;i=i+1){if(ls[i]==l){unique=false;break;}}
if(unique){ls.push(l);}}}})();YAHOO.lang=YAHOO.lang||{};(function(){var L=YAHOO.lang,ADD=["toString","valueOf"],OB={isArray:function(o){if(o){return L.isNumber(o.length)&&L.isFunction(o.splice);}
return false;},isBoolean:function(o){return typeof o==='boolean';},isFunction:function(o){return typeof o==='function';},isNull:function(o){return o===null;},isNumber:function(o){return typeof o==='number'&&isFinite(o);},isObject:function(o){return(o&&(typeof o==='object'||L.isFunction(o)))||false;},isString:function(o){return typeof o==='string';},isUndefined:function(o){return typeof o==='undefined';},_IEEnumFix:(YAHOO.env.ua.ie)?function(r,s){for(var i=0;i<ADD.length;i=i+1){var fname=ADD[i],f=s[fname];if(L.isFunction(f)&&f!=Object.prototype[fname]){r[fname]=f;}}}:function(){},extend:function(subc,superc,overrides){if(!superc||!subc){throw new Error("extend failed, please check that "+"all dependencies are included.");}
var F=function(){};F.prototype=superc.prototype;subc.prototype=new F();subc.prototype.constructor=subc;subc.superclass=superc.prototype;if(superc.prototype.constructor==Object.prototype.constructor){superc.prototype.constructor=superc;}
if(overrides){for(var i in overrides){if(L.hasOwnProperty(overrides,i)){subc.prototype[i]=overrides[i];}}
L._IEEnumFix(subc.prototype,overrides);}},augmentObject:function(r,s){if(!s||!r){throw new Error("Absorb failed, verify dependencies.");}
var a=arguments,i,p,override=a[2];if(override&&override!==true){for(i=2;i<a.length;i=i+1){r[a[i]]=s[a[i]];}}else{for(p in s){if(override||!(p in r)){r[p]=s[p];}}
L._IEEnumFix(r,s);}},augmentProto:function(r,s){if(!s||!r){throw new Error("Augment failed, verify dependencies.");}
var a=[r.prototype,s.prototype];for(var i=2;i<arguments.length;i=i+1){a.push(arguments[i]);}
L.augmentObject.apply(this,a);},dump:function(o,d){var i,len,s=[],OBJ="{...}",FUN="f(){...}",COMMA=', ',ARROW=' => ';if(!L.isObject(o)){return o+"";}else if(o instanceof Date||("nodeType"in o&&"tagName"in o)){return o;}else if(L.isFunction(o)){return FUN;}
d=(L.isNumber(d))?d:3;if(L.isArray(o)){s.push("[");for(i=0,len=o.length;i<len;i=i+1){if(L.isObject(o[i])){s.push((d>0)?L.dump(o[i],d-1):OBJ);}else{s.push(o[i]);}
s.push(COMMA);}
if(s.length>1){s.pop();}
s.push("]");}else{s.push("{");for(i in o){if(L.hasOwnProperty(o,i)){s.push(i+ARROW);if(L.isObject(o[i])){s.push((d>0)?L.dump(o[i],d-1):OBJ);}else{s.push(o[i]);}
s.push(COMMA);}}
if(s.length>1){s.pop();}
s.push("}");}
return s.join("");},substitute:function(s,o,f){var i,j,k,key,v,meta,saved=[],token,DUMP='dump',SPACE=' ',LBRACE='{',RBRACE='}';for(;;){i=s.lastIndexOf(LBRACE);if(i<0){break;}
j=s.indexOf(RBRACE,i);if(i+1>=j){break;}
token=s.substring(i+1,j);key=token;meta=null;k=key.indexOf(SPACE);if(k>-1){meta=key.substring(k+1);key=key.substring(0,k);}
v=o[key];if(f){v=f(key,v,meta);}
if(L.isObject(v)){if(L.isArray(v)){v=L.dump(v,parseInt(meta,10));}else{meta=meta||"";var dump=meta.indexOf(DUMP);if(dump>-1){meta=meta.substring(4);}
if(v.toString===Object.prototype.toString||dump>-1){v=L.dump(v,parseInt(meta,10));}else{v=v.toString();}}}else if(!L.isString(v)&&!L.isNumber(v)){v="~-"+saved.length+"-~";saved[saved.length]=token;}
s=s.substring(0,i)+v+s.substring(j+1);}
for(i=saved.length-1;i>=0;i=i-1){s=s.replace(new RegExp("~-"+i+"-~"),"{"+saved[i]+"}","g");}
return s;},trim:function(s){try{return s.replace(/^\s+|\s+$/g,"");}catch(e){return s;}},merge:function(){var o={},a=arguments;for(var i=0,l=a.length;i<l;i=i+1){L.augmentObject(o,a[i],true);}
return o;},later:function(when,o,fn,data,periodic){when=when||0;o=o||{};var m=fn,d=data,f,r;if(L.isString(fn)){m=o[fn];}
if(!m){throw new TypeError("method undefined");}
if(!L.isArray(d)){d=[data];}
f=function(){m.apply(o,d);};r=(periodic)?setInterval(f,when):setTimeout(f,when);return{interval:periodic,cancel:function(){if(this.interval){clearInterval(r);}else{clearTimeout(r);}}};},isValue:function(o){return(L.isObject(o)||L.isString(o)||L.isNumber(o)||L.isBoolean(o));}};L.hasOwnProperty=(Object.prototype.hasOwnProperty)?function(o,prop){return o&&o.hasOwnProperty(prop);}:function(o,prop){return!L.isUndefined(o[prop])&&o.constructor.prototype[prop]!==o[prop];};OB.augmentObject(L,OB,true);YAHOO.util.Lang=L;L.augment=L.augmentProto;YAHOO.augment=L.augmentProto;YAHOO.extend=L.extend;})();YAHOO.namespace("Smb.Asteroids.Extensions");YAHOO.Smb.Asteroids.Extensions.Util={trim:function(str){str=str||'';return str.replace(/^\s+|\s+$/g,"");},isValidEmail:function(str){return(str.search(/^[A-Za-z0-9_\.-]+\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)!=-1);},serialize:function(obj){if(YAHOO.lang.isNull(obj)||YAHOO.lang.isUndefined(obj)){return"";}
if(YAHOO.lang.isNumber(obj)||YAHOO.lang.isBoolean(obj)){return obj;}
if(YAHOO.lang.isString(obj)){return'\"'+encodeURIComponent(obj.replace(/"/g,'\\\"'))+'\"';}
var i;if(YAHOO.lang.isArray(obj)){var arrString='[';for(i=0;i<obj.length;i++){if(i!==0){arrString+=',';}
arrString+=YAHOO.lang.serialize(obj[i]);}
arrString+=']';return arrString;}
if(YAHOO.lang.isObject(obj)){var objString="{";var first=true;for(i in obj){if(!first){objString+=',';}else{first=false;}
objString+=('"'+i+'":'+YAHOO.Smb.Asteroids.Extensions.Util.serialize(obj[i])+'');}
objString+="}";return objString;}
return'';},getInnerText:function(node){if(!YAHOO.lang.isUndefined(node.innerText)){return node.innerText;}
if(!YAHOO.lang.isUndefined(node.textContent)){return node.textContent;}
return'';},insertAfter:function(newnode,node){if(newnode&&node&&node.parentNode){if(node.nextSibling){node.parentNode.insertBefore(newnode,node.nextSibling);}else{node.parentNode.appendChild(newnode);}}},testElement:function(node,method){return node&&node.nodeType==1&&(!method||method(node));},getAncestorBy:function(node,method){node=node.parentNode;while(node){if(YAHOO.Smb.Asteroids.Extensions.Util.testElement(node,method)){return node;}
node=node.parentNode;}
return false;},getAncestorByClassName:function(node,className){node=$(node);if(!node){return false;}
var method=function(el){return $D.hasClass(el,className);};return YAHOO.Smb.Asteroids.Extensions.Util.getAncestorBy(node,method);},getAncestorByTagName:function(node,tagName){node=$(node);if(!node){return false;}
var method=function(el){el=$(el);return el.nodeName.toLowerCase()==tagName.toLowerCase();};return YAHOO.Smb.Asteroids.Extensions.Util.getAncestorBy(node,method);}};YAHOO.namespace("Smb.Asteroids.Extensions.SlideShow");(function(){var YSAEU=YAHOO.Smb.Asteroids.Extensions.Util;var SS=YAHOO.Smb.Asteroids.Extensions.SlideShow;var imageData=YAHOO.Smb.Asteroids.ImageData;var ua=navigator.userAgent.toLowerCase();var isIE=!ua.isOpera&&ua.indexOf('msie')>-1;var isIE6=('ActiveXObject'in window&&!('XMLHttpRequest'in window));var Constants={'CLASS_DISPLAYNONE':'displayNone','CLASS_DIMMED':'dimmed','CLASS_ALLOWZOOMIN':'yssImg_allowZoomIn','CLASS_YSSIMGSINGLE':'yssImg_single','CLASS_YSSIMGPNG':'yssImg_PNG','CLASS_RTEIMG':'yssImg_RTE','CLASS_MODFIELD':'modfield','CLASS_MODBDCONTAINER':'module_bd_container','CLASS_YSSDKIMG':'yssDKImg','CLASS_ZOOMINCTRL':'imgZoomInCtrl'};var fixPNG=function(el){if(!isIE6){return;}
var png=$(el);$D.setStyle(png,'overflow','hidden');png.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+png.src+"', sizingMethod='scale')";png.style.paddingTop=png.height;png.style.height=0;};SS.init=function(){SS.ZoomIn.init();};SS.ZoomIn={interactors:new Array(),viewer:null,addInteractor:function(interactor){interactor.onZoomIn.subscribe(this.onZoomIn,this,true);this.interactors.push(interactor);},init:function(){if(this.interactors.length===0){this.addInteractor(SS.HoverInteractor);this.addInteractor(SS.ThumbClickInteractor);}
for(var i=0,len=this.interactors.length;i<len;i++){this.interactors[i].setup();}
if(this.viewer===null){this.viewer=new SS.PopupViewer();}},onZoomIn:function(type,args,me){var zimg=args[1];var imgSrc=null;if($D.hasClass(zimg,Constants.CLASS_MODFIELD)&&(!$D.hasClass(zimg,Constants.CLASS_YSSIMGSINGLE))){var mbdcontainer=YSAEU.getAncestorByClassName(zimg,Constants.CLASS_MODBDCONTAINER);if(mbdcontainer){imgSrc=new SS.ImageSourceList();imgSrc.harvestImages(mbdcontainer,zimg);}}
if(imgSrc===null){var caption='';var guid=zimg.getAttribute('rel');var width=-1,height=-1;if(guid&&imageData&&imageData[guid]){caption=imageData[guid].caption;width=imageData[guid].astWidth;height=imageData[guid].astHeight;}
if(width===-1||height===-1){var matches=(/yssAstImg_(\S+)_(\d+)X(\d+)/).exec(zimg.className);if(matches){width=matches[2];height=matches[3];}}
var imgType=$D.hasClass(zimg,Constants.CLASS_YSSIMGPNG)?3:0;imgSrc=new SS.ImageSourceSingle(zimg.getAttribute('src'),zimg.getAttribute('alt'),caption,width,height,imgType);}
var showCaption=$D.hasClass(zimg,Constants.CLASS_YSSDKIMG)?'no':'yes';this.viewer.setData(imgSrc,{'showCaption':showCaption});this.viewer.launch();}};SS.HoverInteractor={ctrlObj:null,onZoomIn:new YAHOO.util.CustomEvent('onZoomIn',this),curZImg:null,init:function(){if(this.ctrlObj===null){this.ctrlObj=document.createElement('div');$D.addClass(this.ctrlObj,Constants.CLASS_ZOOMINCTRL);$E.on(this.ctrlObj,'click',this.fireOnZoomIn,this,true);YSAEU.insertAfter(this.ctrlObj,$('body'));}},fireOnZoomIn:function(e){$E.stopEvent(e);if(this.curZImg!==null){this.onZoomIn.fire(e,this.curZImg);}},getZoomInImages:function(el){var elem=$(el)||$('body');return $D.getElementsByClassName(Constants.CLASS_ALLOWZOOMIN,'img',elem);},setup:function(el){this.init();var zimgs=this.getZoomInImages(el);var that=this;for(var i=0,len=zimgs.length;i<len;i++){$E.on(zimgs[i],'mouseover',function(e){that.showControl(e);});$E.on(zimgs[i],'mouseout',function(e){that.hideControl(e);});}
$E.on(this.ctrlObj,'mouseout',function(e){that.hideControl(e);});},teardown:function(el){var zimgs=this.getZoomInImages(el);for(var i=0,len=zimgs.length;i<len;i++){$E.purgeElement(zimgs[i]);}},showControl:function(e){var zimg=$E.getTarget(e);var elXY=$D.getXY(zimg);var offsetWidth=zimg.offsetWidth;var offsetHeight=zimg.offsetHeight;var rightPadding=parseInt($D.getStyle(zimg,'padding-right'),10);var bottomPadding=parseInt($D.getStyle(zimg,'padding-bottom'),10);var rightBorder=parseInt($D.getStyle(zimg,'border-right-width'),10);var bottomBorder=parseInt($D.getStyle(zimg,'border-bottom-width'),10);$D.setStyle(this.ctrlObj,'display','block');var ctrlWidth=this.ctrlObj.offsetWidth;var ctrlHeight=this.ctrlObj.offsetHeight;var x=elXY[0]+offsetWidth-rightPadding-rightBorder-ctrlWidth;var y=elXY[1]+offsetHeight-bottomPadding-bottomBorder-ctrlHeight;$D.setXY(this.ctrlObj,[x,y]);this.curZImg=zimg;},hideControl:function(e){var relTarget=$E.getRelatedTarget(e);if(relTarget===this.ctrlObj||relTarget===this.curZImg){return;}
$D.setStyle(this.ctrlObj,'display','none');this.curZImg=null;}};SS.ThumbClickInteractor={onZoomIn:new YAHOO.util.CustomEvent('onZoomIn',this),_getZoomInImages:function(el){var elem=$(el)||$('body');return $D.getElementsByClassName(Constants.CLASS_ALLOWZOOMIN,'img',elem);},setup:function(el){var zimgs=this._getZoomInImages(el);var that=this;for(var i=0,len=zimgs.length;i<len;i++){if($D.hasClass(zimgs[i],Constants.CLASS_YSSDKIMG)){continue;}
$E.on(zimgs[i],'click',function(e){$E.stopEvent(e);that.onZoomIn.fire(e,$E.getTarget(e));document.body.style.zoom='normal';document.body.style.zoom='1';});}}};SS.ImageSource=function(){};SS.ImageSource.prototype={get:function(index){},getStartIndex:function(){return 0;},count:function(){},_constructImgObj:function(url,alttext,caption,width,height,type){width=width||-1;height=height||-1;type=type||0;return{'url':url,'alttext':alttext,'caption':caption,'width':width,'height':height,'type':type};},_getZoomInURL:function(url){var matches=/(.*)(?:_sq_thumb_s)\.(\w+)$/i.exec(url);if(matches){return matches[1]+'_large.'+matches[2];}
matches=/(.*)(?:_sq_thumb_m)\.(\w+)$/i.exec(url);if(matches){return matches[1]+'_large.'+matches[2];}
matches=/(.*)(?:_thumb)\.(\w+)$/i.exec(url);if(matches){return matches[1]+'_large.'+matches[2];}
matches=/(.*)(?:_std)\.(\w+)$/i.exec(url);if(matches){return matches[1]+'_large.'+matches[2];}
matches=/(.*)(?:_logo)\.(\w+)$/i.exec(url);if(matches){return matches[1]+'_large.'+matches[2];}
return url;},hasPNG:function(){var count=this.count();for(var i=0;i<count;i++){var imgobj=this.get(i);if(imgobj.type===3){return true;}}
return false;}};SS.ImageSourceSingle=function(url,alttext,caption,width,height,type){$LOG('creating ImageSourceSingle');this.setImage(url,alttext,caption,width,height,type);};YAHOO.extend(SS.ImageSourceSingle,SS.ImageSource);SS.ImageSourceSingle.prototype.setImage=function(url,alttext,caption,width,height,type){var zurl=this._getZoomInURL(url);this._imgObj=this._constructImgObj(zurl,alttext,caption,width,height,type);};SS.ImageSourceSingle.prototype.get=function(index){return this._imgObj;};SS.ImageSourceSingle.prototype.count=function(){return 1;};SS.ImageSourceList=function(){$LOG('creating ImageSourceList');this._list=new Array();};YAHOO.extend(SS.ImageSourceList,SS.ImageSource);SS.ImageSourceList.prototype.harvestImages=function(mbdcontainer,curImgEl){var els=$D.getElementsByClassName(Constants.CLASS_MODFIELD,'img',mbdcontainer);var guid,el,url,alt,caption,width,height,type;this._start=-1;for(var i=0,len=els.length;i<len;i++){el=els[i];if(!$D.hasClass(el,Constants.CLASS_ALLOWZOOMIN)){continue;}
url=el.getAttribute('src');url=this._getZoomInURL(url);alt=el.getAttribute('alt');caption='';guid=el.getAttribute('rel');width=-1;height=-1;type=$D.hasClass(el,Constants.CLASS_YSSIMGPNG)?3:0;if(guid&&imageData&&imageData[guid]){caption=imageData[guid].caption;width=imageData[guid].astWidth;height=imageData[guid].astHeight;}
this.addImage(url,alt,caption,width,height,type);if(el===curImgEl){this._start=this._list.length-1;}}
$LOG(this._list);};SS.ImageSourceList.prototype.addImage=function(url,alttext,caption,width,height,type){this._list.push(this._constructImgObj(url,alttext,caption,width,height,type));};SS.ImageSourceList.prototype.get=function(index){return this._list[index];};SS.ImageSourceList.prototype.getStartIndex=function(){return this._start;};SS.ImageSourceList.prototype.count=function(){return this._list.length;};SS.ImgSwapper=function(){};SS.ImgSwapper.prototype={defaultTransition:'fade',viewer:null,nextImgObj:null,_currentImgObj:null,_inSwap:false,init:function(popViewerInst){$LOG('initialized swappper!\npopViewerInts: '+popViewerInst);this.viewer=popViewerInst;},swap:function(imgObj,transPointer){this.setSwapStatus(1);this.nextImgObj=imgObj;transPointer=(transPointer&&transPointer.constructor==Function)?transPointer:((SS.ImgSwapper._transitions[transPointer])?SS.ImgSwapper._transitions[transPointer]:SS.ImgSwapper._transitions[this.defaultTransition]);if(transPointer&&transPointer.constructor==Function)transPointer.apply(this,[imgObj]);},setImgAttributes:function(domObj,currentImg){var v=this.viewer;var v_wh=v._viewPaneDimensions;var imgObj=(currentImg&&this._currentImgObj)?this._currentImgObj:this.nextImgObj;if(!domObj)domObj=this.viewer._imgStage;$LOG('setting img to\n\tsrc: '+imgObj.url+'\n\timgObj: '+domObj);domObj.setAttribute('alt',imgObj.alttext);domObj.removeAttribute('width');domObj.removeAttribute('height');if(isIE6){$D.setStyle(domObj,'padding-top',0);}
var availH=(v_wh.height-v._imgCaption.offsetHeight-$('closeButtonCell').offsetHeight)*.95;var availW=v_wh.width*.95;var imgH,imgW;$LOG('img resizing env:\n\twidth available: '+availW+'\n\theight available: '+availH+'\n\timg width: '+imgObj.width+'\n\timg height: '+imgObj.height);if(imgObj.width<=0||imgObj.height<=0){domObj.setAttribute('width',availW*.5);domObj.setAttribute('height',availH*.5);imgH=availH*.5;}else{if(imgObj.width/imgObj.height>availW/availH){domObj.setAttribute('width',Math.min(availW,imgObj.width));imgH=Math.max(1,Math.floor((imgObj.height/imgObj.width)*Math.min(availW,imgObj.width)));domObj.setAttribute('height',imgH);$LOG('setting '+imgObj+'\'s width to '+Math.min(availW,imgObj.width)+'px');}else{imgH=Math.min(availH,imgObj.height);imgW=Math.max(1,Math.floor((imgObj.width/imgObj.height)*imgH));domObj.setAttribute('width',imgW);domObj.setAttribute('height',imgH);$LOG('setting width,height to '+imgW+','+imgH+'px');}}
var topRow=$('closeButtonCell');var topRowH=topRow.offsetHeight+parseInt($D.getStyle(topRow,'margin-top'),10)+parseInt($D.getStyle(topRow,'margin-bottom'),10);var bottomRow=$('captionCell');var bottomRowH=bottomRow.offsetHeight+parseInt($D.getStyle(bottomRow,'margin-top'),10)+parseInt($D.getStyle(bottomRow,'margin-bottom'),10);var parentH=Math.max(1,v_wh.height-topRowH-bottomRowH);$D.setStyle(domObj,'margin-top',-imgH/2+'px');$D.setStyle(domObj,'height',imgH+'px');$D.setStyle('imageCell','height',parentH+'px');domObj.setAttribute('src',imgObj.url);},setSwapStatus:function(swapping){this._inSwap=Boolean(swapping);if(this._inSwap){$D.setStyle('slideshow-prev','opacity',.3);$D.setStyle('slideshow-next','opacity',.3);}else{$D.setStyle('slideshow-prev','opacity',1);$D.setStyle('slideshow-next','opacity',1);}},getSwapStatus:function(){return Boolean(this._inSwap);}};SS.ImgSwapper._transitions={'fade':function(tgtImgObj){var that=this;var img=this.viewer._imgStage;var txt=this.viewer._imgCaption;var hasPNG=this.viewer._imgObjSrc.hasPNG();var duration={inT:.7,outT:.4};var nextImgIn=function(){if(that.viewer.isClosing()||that.viewer.isClosed()){return;}
that._currentImgObj=tgtImgObj;$D.setStyle(img,'opacity',0);$D.setStyle(img,'display','inline');that.setImgAttributes(img,tgtImgObj);if(isIE6&&hasPNG){$D.setStyle(img,'opacity',1);if(tgtImgObj.type===3){fixPNG(img);}
that.setSwapStatus(0);that.viewer._queueNextImage();}else{var anim=new $A(img,{opacity:{to:1}});anim.duration=duration.inT;anim.onComplete.subscribe(function(){$LOG('animated '+tgtImgObj);that.setSwapStatus(0);that.viewer._queueNextImage();});anim.animate();}};var nextTxtIn=function(){if(that.viewer.isClosing()||that.viewer.isClosed()){return;}
$D.setStyle(txt,'opacity',0);that.viewer._setCaptionText(tgtImgObj);var anim=new $A(txt,{opacity:{to:1}});anim.duration=duration.inT;anim.animate();};if(this._currentImgObj){var outParamsObj={opacity:{from:1,to:0}};var previousImgOut=new $A(img,outParamsObj);previousImgOut.duration=duration.outT;previousImgOut.onComplete.subscribe(function(){nextImgIn();});previousImgOut.animate();var previousTxtOut=new $A(txt,outParamsObj);previousTxtOut.duration=duration.outT;previousTxtOut.onComplete.subscribe(function(){nextTxtIn();});previousTxtOut.animate();}else{nextTxtIn();nextImgIn();}},'none':function(){this.setImgAttributes();}};SS.ImgSwapper.addTransition=function(label,routine){if(label.constructor==String&&routine.constructor==Function)SS.ImgSwapper._transitions[label]=routine;};SS.PopupViewer=function(){this.createDom();this.slideShowSpeed=5000;this.defSwapper(SS.ImgSwapper);};SS.PopupViewer.prototype={_preloader:new Image(),defSwapper:function(swapper){this.swapper=new swapper();this.swapper.init(this);},setData:function(imgObjSrc,cfgObj){this.reset();this._imgObjSrc=imgObjSrc;this._imgCount=this._imgObjSrc.count();this._cfgObj={'showIndex':'auto','showCaption':'yes','showSlideShow':'auto','startIndex':imgObjSrc.getStartIndex()};if(cfgObj){for(var prop in cfgObj){this._cfgObj[prop]=cfgObj[prop];}}
this._index=this._cfgObj.startIndex;},createDom:function(){this._createGlassPane();this._createViewPane();this._createSlideShowPane();},_createGlassPane:function(){if(this._glassPane){return;}
this._glassPane=document.createElement('div');this._glassPane.setAttribute('id','imgviewer-overlay');var zIframe=document.createElement('iframe');zIframe.className='iframe4IE';this._glassPane.appendChild(zIframe);this._hideGlassPane();YSAEU.insertAfter(this._glassPane,$('body'));},_createViewPane:function(){if(this._viewPane){return;}
this._viewPane=document.createElement('div');this._viewPane.setAttribute('id','imgviewer-stage');YSAEU.insertAfter(this._viewPane,this._glassPane);var closeBtnText='close';this._viewPane.innerHTML='<div id="closeButtonCell"><p id="imgviewer-index"></p><a id="imgviewer-closeButton" href="#Close"/><span>'+closeBtnText+'</span></a></div><div id="imageCell"><img id="imgviewer-stageImage"/></div><div id="captionCell"><p id="imgviewer-caption"></p></div>';this._imgIndex=$('imgviewer-index');this._imgStage=$('imgviewer-stageImage');this._imgCaption=$('imgviewer-caption');$E.on('imgviewer-closeButton','click',this.close,this,true);$E.on('imageCell','mouseover',this._showSlideShowPane,this,true);$E.on('imageCell','mouseout',this._hideSlideShowPane,this,true);},_createSlideShowPane:function(){if(this._slideShowPane){return;}
this._slideShowPane=document.createElement('ul');this._slideShowPane.setAttribute('id','imgviewer-slideshow');var spacer='http://us.i1.yimg.com/us.yimg.com/i/spacer.gif';this._slideShowPane.innerHTML='<li><a href="#Previous" title="Previous" id="slideshow-prev"><img alt="Previous" src="'+spacer+'"/></a></li><li><a href="#Start" title="Start" id="slideshow-startstop"><img alt="Start" class="startSlideShow" src="'+spacer+'"/></a></li><li><a href="#Next" title="Next" id="slideshow-next"><img alt="Next" src="'+spacer+'"/></a></li>';$('imgviewer-stage').appendChild(this._slideShowPane);$D.addClass(this._slideShowPane,'macBug');$E.on('slideshow-prev','click',this.onSlideShowPaneClick,this,true);$E.on('slideshow-startstop','click',this.onSlideShowPaneClick,this,true);$E.on('slideshow-next','click',this.onSlideShowPaneClick,this,true);$E.on('slideshow-prev','click',this._showPrevImage,this,true);$E.on('slideshow-startstop','click',this._startOrStopSlideShow,this,true);$E.on('slideshow-next','click',this._showNextImage,this,true);},launch:function(){this._state='opening';$D.addClass('body','ap');this._showGlassPane();this._showViewPane();this._state='open';document.body.style.zoom="normal";document.body.style.zoom=1;},close:function(ev){this._state='closing';this.stopSlideShow();this._hideSlideShowPane();this._hideGlassPane();this._hideViewPane();$D.removeClass('body','ap');$E.stopEvent(ev);this.reset();this._state='closed';document.body.style.zoom="normal";document.body.style.zoom=1;},isOpening:function(){return this._state==='opening';},isOpen:function(){return this._state==='open';},isClosing:function(){return this._state==='closing';},isClosed:function(){return this._state==='closed';},onSlideShowPaneClick:function(ev){this._cancelQueuedImage();},_showGlassPane:function(){if(this._glassPane){$D.setStyle(this._glassPane,'display','block');}},_hideGlassPane:function(){if(this._glassPane){$D.setStyle(this._glassPane,'display','none');}},_showViewPane:function(){if(this._viewPane){$LOG('this._index='+this._index);var view={height:$D.getViewportHeight(),width:$D.getViewportWidth()};var tableWidthRatio=.9;var tableHeightRatio=.8;var tableMaxWidth=900;var tableMaxHeight=600;var h=Math.min(tableMaxHeight,view.height*tableHeightRatio);var w=Math.min(tableMaxWidth,view.width*tableWidthRatio);var marginLeft=-w/2;var marginTop=-h/2;$D.setStyle(this._viewPane,'height',h+'px');$D.setStyle(this._viewPane,'width',w+'px');$D.setStyle(this._viewPane,'margin-left',marginLeft+'px');$D.setStyle(this._viewPane,'margin-top',marginTop+'px');this._viewPaneDimensions={width:w,height:h};if(this._cfgObj.showCaption==='no'){$D.addClass(this._imgCaption,Constants.CLASS_DISPLAYNONE);}else{$D.removeClass(this._imgCaption,Constants.CLASS_DISPLAYNONE);$D.setStyle(this._imgCaption,'opacity',0);}
$D.addClass(this._viewPane,'stage-on');this._showImage(this._imgObjSrc.get(this._index));}},_hideViewPane:function(){if(this._viewPane){$D.removeClass(this._viewPane,'stage-on');}},_showSlideShowPane:function(e,time){if(this._slideShowPane&&this._shouldShowSlideShow()&&!this._isSlideShowPaneVisible){$D.setStyle(this._slideShowPane,'opacity',0);$D.removeClass(this._slideShowPane,'macBug');this._isSlideShowPaneVisible=1;var animCtrl=new $A(this._slideShowPane);animCtrl.attributes.opacity={to:1};animCtrl.duration=.5;animCtrl.animate();if(time&&time>0){var that=this;window.setTimeout(function(){that._hideSlideShowPane();},time);}}},_hideSlideShowPane:function(e){var pane=this._slideShowPane;if(pane){if(e){var el=$E.getRelatedTarget(e);var imgCell=$('imageCell');if(el&&(el===imgCell||el===pane||$D.isAncestor(imgCell,el)||$D.isAncestor(pane,el))){return;}}
var that=this;var animCtrl=new $A(pane);animCtrl.attributes.opacity={to:0};animCtrl.duration=.3;animCtrl.animate();animCtrl.onComplete.subscribe(function(){$D.addClass(pane,'macBug');that._isSlideShowPaneVisible=0;});animCtrl.animate();}},_queueNextImage:function(){var that=this;if(this._isSlideShowActive)this.playId=window.setTimeout(function(){that._showNextImage()},this.slideShowSpeed);},_cancelQueuedImage:function(){window.clearInterval(this.playId);this.playId=null;},_showPrevImage:function(){if(!this.swapper.getSwapStatus()){if(this._index>0){this._index--;}else{this._index=this._imgCount-1;}
this._showImage(this._imgObjSrc.get(this._index));}},_showNextImage:function(){if(!this.swapper.getSwapStatus()){if(this._index<(this._imgCount-1)){this._index++;}else{this._index=0;}
this._showImage(this._imgObjSrc.get(this._index));}},_startOrStopSlideShow:function(){if(!this.swapper.getSwapStatus()||this._isSlideShowActive){this._isSlideShowActive=!this._isSlideShowActive;this._setButtonState();if(this._isSlideShowActive){this.startSlideShow();}else{this.stopSlideShow();}}},_setButtonState:function(){var btn=$('slideshow-startstop');if(this._isSlideShowActive){$D.replaceClass(btn,'startSlideShow','stopSlideShow');btn.setAttribute('title','Pause');btn.setAttribute('href','#Pause');btn.childNodes[0].setAttribute('alt','Pause');}else{$D.replaceClass(btn,'stopSlideShow','startSlideShow');btn.setAttribute('title','Play');btn.setAttribute('href','#Play');btn.childNodes[0].setAttribute('alt','Play');}},startSlideShow:function(){this._isSlideShowActive=1;this._showNextImage();this._setButtonState(1);},stopSlideShow:function(){this._isSlideShowActive=0;this._setButtonState();},_shouldShowIndex:function(){return this._cfgObj.showIndex==='yes'||(this._cfgObj.showIndex==='auto'&&this._imgCount>1);},_shouldShowSlideShow:function(){return this._cfgObj.showSlideShow==='yes'||(this._cfgObj.showSlideShow==='auto'&&this._imgCount>1);},reset:function(){if(this._imgIndex){this._imgIndex.innerHTML='';}
if(this._imgStage){this._imgStage.setAttribute('src','http://us.i1.yimg.com/us.yimg.com/i/spacer.gif');this._imgStage.setAttribute('alt','');$D.setStyle(this._imgStage,'display','none');}
if(this._imgCaption){this._imgCaption.innerHTML='';}
if(isIE6){this._imgStage.style.filter='none';}
this.swapper._currentImgObj=null;},_showImage:function(imgObj){var that=this;if(this._shouldShowIndex()&&this._imgIndex){this._imgIndex.innerHTML=(this._index+1)+' of '+this._imgCount;}
if(this._imgStage){this._preloader.onload=function(){};this._preloader.onload=function(){$LOG('preloaded! '+imgObj.url);that.swapper.swap(imgObj);};this._preloader.src=imgObj.url;}},_setCaptionText:function(imgObj){if(this._cfgObj.showCaption==='yes'&&this._imgCaption){var captionText=unescape(imgObj.caption);captionText=captionText.replace(/\r\n/gi,'<br>');captionText=captionText.replace(/\n/gi,'<br>');this._imgCaption.innerHTML=captionText;}}};$E.on(window,'load',SS.init);})();YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Sniffer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Sniffer.init=function(){var agt=navigator.userAgent.toLowerCase();var ie=(agt.indexOf("msie")!=-1);var ns=(navigator.appName.indexOf("Netscape")!=-1);var win=((agt.indexOf("win")!=-1)||(agt.indexOf("32bit")!=-1));var mac=(agt.indexOf("mac")!=-1);var detectIE=function(ClassID,name){result=false;document.write('<script language="vbscript">\non error resume next \nresult = IsObject(CreateObject("'+ClassID+'"))</script>');if(result){return name+',';}else{return'';}}
var detectNS=function(ClassID,name){n="";if(nse.indexOf(ClassID)!=-1){if(navigator.mimeTypes[ClassID].enabledPlugin!=null){n=name+",";}}
return n;}
if(ie&&win){var pluginlist=detectIE("ShockwaveFlash.ShockwaveFlash.1","Shockwave Flash")+
detectIE("QuickTimeCheckObject.QuickTimeCheck.1","QuickTime")+
detectIE("MediaPlayer.MediaPlayer.1","Windows Media Player");}
if(ns||!win){nse="";for(var i=0,j=navigator.mimeTypes.length;i<j;i++){nse+=navigator.mimeTypes[i].type.toLowerCase();}
var pluginlist=detectNS("application/x-shockwave-flash","Shockwave Flash")+
detectNS("video/quicktime","QuickTime")+
detectNS("application/x-mplayer2","Windows Media Player");}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Sniffer.pluginList=(pluginlist.length)?pluginlist.substring(0,pluginlist.length-1):'';}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Sniffer.init();YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Bootstrap');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Bootstrap.init=function()
{YAHOO.namespace("YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API");YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API=function()
{this.controller=null;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onAPIReady=new YAHOO.util.CustomEvent("onAPIReady",null,false,YAHOO.util.CustomEvent.FLAT);if(!(/Windows Media Player|Flash|Quicktime/).test(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Sniffer.pluginList)){YMPParams={parse:false};}};new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Bootstrap.init();YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');if(typeof YMPParams==="undefined")
{YMPParams={};}
if(typeof YMPParams.autoplay==="undefined")
{YMPParams.autoplay=false;}
if(typeof YMPParams.parse==="undefined")
{YMPParams.parse=true;}
if(typeof YMPParams.autoadvance==="undefined")
{YMPParams.autoadvance=true;}
if(typeof YMPParams.playlink==="undefined")
{YMPParams.playlink=true;}
if(typeof YMPParams.displaystate==="undefined")
{YMPParams.displaystate=0;}
if(YMPParams.displaystate!=-1&&YMPParams.displaystate!=0&&YMPParams.displaystate!=1&&YMPParams.displaystate!=3)
{YMPParams.displaystate=0;}
if(typeof YMPParams.volume==="number")
{if(YMPParams.volume>1)
{YMPParams.volume=1;}
if(YMPParams.volume<0)
{YMPParams.volume=0;}}
else
{if(typeof YMPParams.volume!=="undefined")
{delete YMPParams.volume;}}
if(YMPParams.amazonid==null||YMPParams.amazonid.length<1)
{var aMeta=document.getElementsByTagName("meta");if(aMeta&&aMeta.length>0)
{var nCount=aMeta.length;for(var i=0;i<nCount;i++)
{var elMeta=aMeta[i];var sName=elMeta.name;if(typeof sName=="undefined")
{sName=elMeta.getAttribute("name");}
if(sName&&sName.length>0&&sName.toLowerCase()=="amazonid")
{var sContent=elMeta.content;if(typeof sContent=="undefined")
{sContent=elMeta.getAttribute("content");}
if(sContent.length>0)
{YMPParams.amazonid=sContent;}
break;elMeta=null;}
elMeta=null;}}}
if(typeof YMPParams.rhappcode==="undefined")
{YMPParams.rhappcode="yahoooffnet";}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams={};for(var props in YMPParams)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams[props]=YMPParams[props];}
YMPParams=null;YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,'');};Number.GUID=function(){var aGUID=[];for(var nI=0;nI<32;nI++){aGUID.push(Math.floor(Math.random()*0xF).toString(0xF));}return aGUID.join('');};Math.getRnd=function(nMn,nMx){if(!isNaN(nMn)){if(!isNaN(nMx)){nMx-=nMn;}else{nMx=nMn,nMn=0;}}else{nMn=0,nMx=100;}return Math.round(Math.random()*(nMx-nMn))+nMn;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util={BROWSER:"Unknown",BROWSER_VERSION:"Unknown",OS:"Unknown",DOCTYPE:"Unknown",allBrowser:[{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"MSIE",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],allOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}],convertToHexadecimal:function(num)
{try
{var hex_str=[];for(var i=3,mask=0xff000000,byteNumber,byteString;i>=0;i--)
{byteNumber=Number((num&mask)>>>(i*8));byteString=byteNumber.toString(16);if(byteString.length<2)
{byteString='0'+byteString;}
hex_str.push(byteString);mask>>>=8;}
return hex_str.join('').toUpperCase();}
catch(ex)
{return null;}},init:function()
{this.getBrowserOS();},returnString:function(data)
{for(var i=0;i<data.length;i++)
{var dataString=data[i].string;var dataProp=data[i].prop;this.versionSearchString=data[i].versionSearch||data[i].identity;if(dataString)
{if(dataString.indexOf(data[i].subString)!=-1)
{return data[i].identity;}}
else if(dataProp)
{return data[i].identity;}}},returnVersion:function(data)
{var index=data.indexOf(this.versionSearchString);if(index==-1)
{return;}
return parseFloat(data.substring(index+this.versionSearchString.length+1));},getBrowserOS:function()
{this.BROWSER=this.returnString(this.allBrowser)||"Unknown";this.BROWSER_VERSION=this.returnVersion(navigator.userAgent)||this.returnVersion(navigator.appVersion)||"Unknown";this.OS=this.returnString(this.allOS)||"Unknown";this.DOCTYPE=document.compatMode;},detectPlugin:function(pluginName,activexName)
{if(typeof window.ActiveXObject!="undefined")
{var control=null;try
{control=new ActiveXObject(activexName);}
catch(e)
{}
if(control)
{var result=activexName;control=null;return result;}}
else
{if(navigator&&navigator.plugins&&navigator.plugins.length)
{for(var i=0;i<navigator.plugins.length;i++)
{var pi=navigator.plugins[i];if(pi.name.indexOf(pluginName)>-1)
{var result=pi.name;pi=null;return result;}
pi=null;}}}
return null;},sprintf:function(fstring,stringsArray)
{var format_RE=new RegExp('(.*?)(%%|%\\d+|$)(\\$[sdf])?','g');retstr="";while(format_arr=format_RE.exec(fstring))
{retstr+=format_arr[1];if(format_arr[2]=='')break;if(format_arr[2]=="%%")
{retstr+="%";}
else
{retstr+=stringsArray[Number(format_arr[2].substr(1))-1];}}
return retstr;},isArray:function(obj)
{if(obj.constructor.toString().indexOf("Array")==-1)
return false;else
return true;},keycodes:{KEY_SPACE:32,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_P:80}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.init();YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventDelegate=new function()
{this.evDelFn={};this.on=function(className,evType,root,fn,obj,override)
{if(typeof(fn)!=="function")
{return;}
if(this.evDelFn[evType]==null)
{this.evDelFn[evType]={};}
if(this.evDelFn[evType][className]==null)
{this.evDelFn[evType][className]=[];}
root=YAHOO.util.Dom.get(root);this.evDelFn[evType][className].push([fn,obj,override,root]);var rootAlreadyAdded=false;var rootListeners=YAHOO.util.Event.getListeners(root,evType);if(rootListeners!=null)
{for(var i=0,ilen=rootListeners.length;i<ilen;i++)
{if(rootListeners[i].fn===this.handleEventDelegation)
{rootAlreadyAdded=true;}}}
if(!rootAlreadyAdded)
{YAHOO.util.Event.addListener(root,evType,this.handleEventDelegation,[this,root]);}};this.removeListener=function(className,root,evType,fn)
{if(this.evDelFn[evType]!=null&&this.evDelFn[evType][className]!=null)
{var classFns=this.evDelFn[evType][className];root=YAHOO.util.Dom.get(root);for(var i=0;i<classFns.length;i++)
{if(root!=null&&classFns[i][3]!=root)
{continue;}
if(fn!=null&&classFns[i][0]!=fn)
{continue;}
classFns.splice(i,1);i--;}}};this.handleEventDelegation=function(ev,obj)
{var elTarget=YAHOO.util.Event.getTarget(ev);while(elTarget!=obj[1])
{for(var className in obj[0].evDelFn[ev.type])
{if(YAHOO.util.Dom.hasClass(elTarget,className))
{var classFns=obj[0].evDelFn[ev.type][className];for(var i=0;i<classFns.length;i++)
{if(this==classFns[i][3])
{var scope=elTarget;var override=classFns[i][2];var obj2=classFns[i][1];if(override)
{if(override===true)
{scope=obj2;}}
classFns[i][0].call(scope,YAHOO.util.Event.getEvent(ev),obj2);}}
return;}}
elTarget=elTarget.parentNode;}};};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject=function()
{var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",win=window,doc=document,nav=navigator,domLoadFnArr=[],regObjArr=[],timer=null,storedAltContent=null,storedAltContentId=null,isDomLoaded=false,isExpressInstallActive=false;var ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF&&typeof doc.appendChild!=UNDEF&&typeof doc.replaceChild!=UNDEF&&typeof doc.removeChild!=UNDEF&&typeof doc.cloneNode!=UNDEF,playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d){d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/r/.test(d)?parseInt(d.replace(/^.*r(.*)$/,"$1"),10):0;}}
else if(typeof win.ActiveXObject!=UNDEF){var a=null,fp6Crash=false;try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".7");}
catch(e){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".6");playerVersion=[6,0,21];a.AllowScriptAccess="always";}
catch(e){if(playerVersion[0]==6){fp6Crash=true;}}
if(!fp6Crash){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX);}
catch(e){}}}
if(!fp6Crash&&a){try{d=a.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}
catch(e){}}}
var u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),av=navigator.appVersion.toLowerCase(),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=u?/msie/.test(u):/msie/.test(av),windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u);return{w3cdom:w3cdom,pv:playerVersion,webkit:webkit,ie:ie,win:windows,mac:mac};}();var onDomLoad=function(){if(!ua.w3cdom){return;}
addDomLoadEvent(main);if(ua.ie&&ua.win){try{doc.write("<scr"+"ipt id=__ie_ondomload defer=true src=//:></scr"+"ipt>");var s=getElementById("__ie_ondomload");if(s){s.onreadystatechange=function(){if(this.readyState=="complete"){this.parentNode.removeChild(this);callDomLoadFunctions();}};}}
catch(e){}}
if(ua.webkit&&typeof doc.readyState!=UNDEF){timer=setInterval(function(){if(/loaded|complete/.test(doc.readyState)){callDomLoadFunctions();}},10);}
if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,null);}
addLoadEvent(callDomLoadFunctions);}();function callDomLoadFunctions(){if(isDomLoaded){return;}
if(ua.ie&&ua.win){var s=createElement("span");try{var t=doc.getElementsByTagName("body")[0].appendChild(s);t.parentNode.removeChild(t);}
catch(e){return;}}
isDomLoaded=true;if(timer){clearInterval(timer);timer=null;}
var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]();}}
function addDomLoadEvent(fn){if(isDomLoaded){fn();}
else{domLoadFnArr[domLoadFnArr.length]=fn;}}
function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false);}
else if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false);}
else if(typeof win.attachEvent!=UNDEF){win.attachEvent("onload",fn);}
else if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn();};}
else{win.onload=fn;}}
function main(){var rl=regObjArr.length;for(var i=0;i<rl;i++){var id=regObjArr[i].id;if(ua.pv[0]>0){var obj=getElementById(id);if(obj){regObjArr[i].width=obj.getAttribute("width")?obj.getAttribute("width"):"0";regObjArr[i].height=obj.getAttribute("height")?obj.getAttribute("height"):"0";if(hasPlayerVersion(regObjArr[i].swfVersion)){if(ua.webkit&&ua.webkit<312){fixParams(obj);}
setVisibility(id,true);}
else if(regObjArr[i].expressInstall&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){showExpressInstall(regObjArr[i]);}
else{displayAltContent(obj);}}}
else{setVisibility(id,true);}}}
function fixParams(obj){var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var e=createElement("embed"),a=nestedObj.attributes;if(a){var al=a.length;for(var i=0;i<al;i++){if(a[i].nodeName.toLowerCase()=="data"){e.setAttribute("src",a[i].nodeValue);}
else{e.setAttribute(a[i].nodeName,a[i].nodeValue);}}}
var c=nestedObj.childNodes;if(c){var cl=c.length;for(var j=0;j<cl;j++){if(c[j].nodeType==1&&c[j].nodeName.toLowerCase()=="param"){e.setAttribute(c[j].getAttribute("name"),c[j].getAttribute("value"));}}}
obj.parentNode.replaceChild(e,obj);}}
function fixObjectLeaks(id){if(ua.ie&&ua.win&&hasPlayerVersion("8.0.0")){win.attachEvent("onunload",function(){var obj=getElementById(id);if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=function(){};}}
obj.parentNode.removeChild(obj);}});}}
function showExpressInstall(regObj){isExpressInstallActive=true;var obj=getElementById(regObj.id);if(obj){if(regObj.altContentId){var ac=getElementById(regObj.altContentId);if(ac){storedAltContent=ac;storedAltContentId=regObj.altContentId;}}
else{storedAltContent=abstractAltContent(obj);}
if(!(/%$/.test(regObj.width))&&parseInt(regObj.width,10)<310){regObj.width="310";}
if(!(/%$/.test(regObj.height))&&parseInt(regObj.height,10)<137){regObj.height="137";}
doc.title=doc.title.slice(0,47)+" - Flash Player Installation";var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",dt=doc.title,fv="MMredirectURL="+win.location+"&MMplayerType="+pt+"&MMdoctitle="+dt,replaceId=regObj.id;if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");replaceId+="SWFObjectNew";newObj.setAttribute("id",replaceId);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";win.attachEvent("onload",function(){obj.parentNode.removeChild(obj);});}
createSWF({data:regObj.expressInstall,id:EXPRESS_INSTALL_ID,width:regObj.width,height:regObj.height},{flashvars:fv},replaceId);}}
function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";win.attachEvent("onload",function(){obj.parentNode.removeChild(obj);});}
else{obj.parentNode.replaceChild(abstractAltContent(obj),obj);}}
function abstractAltContent(obj){var ac=createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML;}
else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName.toLowerCase()=="param")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true));}}}}}
return ac;}
function createSWF(attObj,parObj,id){var r,el=getElementById(id);if(typeof attObj.id==UNDEF){attObj.id=id;}
if(ua.ie&&ua.win){var att="";for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i=="data"){parObj.movie=attObj[i];}
else if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"';}
else if(i!="classid"){att+=' '+i+'="'+attObj[i]+'"';}}}
var par="";for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />';}}
el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+'>'+par+'</object>';fixObjectLeaks(attObj.id);r=getElementById(attObj.id);}
else if(ua.webkit&&ua.webkit<312){var e=createElement("embed");e.setAttribute("type",FLASH_MIME_TYPE);for(var k in attObj){if(attObj[k]!=Object.prototype[k]){if(k=="data"){e.setAttribute("src",attObj[k]);}
else if(k.toLowerCase()=="styleclass"){e.setAttribute("class",attObj[k]);}
else if(k!="classid"){e.setAttribute(k,attObj[k]);}}}
for(var l in parObj){if(parObj[l]!=Object.prototype[l]){if(l!="movie"){e.setAttribute(l,parObj[l]);}}}
el.parentNode.replaceChild(e,el);r=e;}
else{var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m]);}
else if(m!="classid"){o.setAttribute(m,attObj[m]);}}}
for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n!="movie"){createObjParam(o,n,parObj[n]);}}
el.parentNode.replaceChild(o,el);r=o;}
return r;}
function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p);}
function getElementById(id){return doc.getElementById(id);}
function createElement(el){return doc.createElement(el);}
function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");v[0]=parseInt(v[0],10);v[1]=parseInt(v[1],10);v[2]=parseInt(v[2],10);return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false;}
function createCSS(sel,decl){if(ua.ie&&ua.mac){return;}
var h=doc.getElementsByTagName("head")[0],s=createElement("style");s.setAttribute("type","text/css");s.setAttribute("media","screen");if(!(ua.ie&&ua.win)&&typeof doc.createTextNode!=UNDEF){s.appendChild(doc.createTextNode(sel+" {"+decl+"}"));}
h.appendChild(s);if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){var ls=doc.styleSheets[doc.styleSheets.length-1];if(typeof ls.addRule==OBJECT){ls.addRule(sel,decl);}}}
function setVisibility(id,isVisible){var v=isVisible?"visible":"hidden";if(isDomLoaded){document.getElementById(id).style.visibility=v;}
else{createCSS("#"+id,"visibility:"+v);}}
return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr){if(!ua.w3cdom||!objectIdStr||!swfVersionStr){return;}
var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr;regObj.expressInstall=xiSwfUrlStr?xiSwfUrlStr:false;regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false);},getObjectById:function(objectIdStr){var r=null;if(ua.w3cdom&&isDomLoaded){var o=getElementById(objectIdStr);if(o){var n=o.getElementsByTagName(OBJECT)[0];if(!n||(n&&typeof o.SetVariable!=UNDEF)){r=o;}
else if(typeof n.SetVariable!=UNDEF){r=n;}}}
return r;},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj){if(!ua.w3cdom||!swfUrlStr||!replaceElemIdStr||!widthStr||!heightStr||!swfVersionStr){return;}
widthStr+="";heightStr+="";if(hasPlayerVersion(swfVersionStr)){setVisibility(replaceElemIdStr,false);var att=(typeof attObj==OBJECT)?attObj:{};att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par=(typeof parObj==OBJECT)?parObj:{};if(typeof flashvarsObj==OBJECT){for(var i in flashvarsObj){if(flashvarsObj[i]!=Object.prototype[i]){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+i+"="+flashvarsObj[i];}
else{par.flashvars=i+"="+flashvarsObj[i];}}}}
createSWF(att,par,replaceElemIdStr);if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true);}}
else if(xiSwfUrlStr&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){setVisibility(replaceElemIdStr,false);var regObj={};regObj.id=regObj.altContentId=replaceElemIdStr;regObj.width=widthStr;regObj.height=heightStr;regObj.expressInstall=xiSwfUrlStr;showExpressInstall(regObj);}},getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]};},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3cdom&&isDomLoaded){return createSWF(attObj,parObj,replaceElemIdStr);}
else{return undefined;}},createCSS:function(sel,decl){if(ua.w3cdom){createCSS(sel,decl);}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(param==null){return q;}
if(q){var pairs=q.substring(1).split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return pairs[i].substring((pairs[i].indexOf("=")+1));}}}
return"";},expressInstallCallback:function(){if(isExpressInstallActive&&storedAltContent){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj){obj.parentNode.replaceChild(storedAltContent,obj);if(storedAltContentId){setVisibility(storedAltContentId,true);if(ua.ie&&ua.win){storedAltContent.style.display="block";}}
storedAltContent=null;storedAltContentId=null;isExpressInstallActive=false;}}},getSWF:function(name)
{switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER)
{case"MSIE":return window[name];default:if(document[name]!=null&&document[name].length!=undefined)
{return document[name][1];}
else
{return document[name];}}},hasPlayerVersion:hasPlayerVersion};}();YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFProxy=new function()
{this.map={};this.magicNumber=0;this.id="swfproxy";this.available=false;this.ready=false;this.queue=[];this.flashTimeoutID=null;this.timeout=30000;this.init=function()
{if(!$D.getElementsByClassName('galleryAudio').length)return;var dummyContainer=document.createElement('span');dummyContainer.id="dummy-swfproxy";document.body.appendChild(dummyContainer);try
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.hasPlayerVersion('9.0.0'))
{var flashVars={onLoad:"YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFProxy.onLoad",rhappcode:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.rhappcode};var params={allowScriptAccess:"always",allowNetworking:"all"};var attributes={id:this.id,name:this.id,style:"position:absolute; top:0; left:-30px;"};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.embedSWF("http://us.i1.yimg.com/us.yimg.com/lib/smb/assets/hosting/yss/extensions/swf/b1/swfproxy.swf",dummyContainer.id,"1","1","9.0.0",false,flashVars,params,attributes);this.available=true;}}
catch(e)
{}};this.onLoad=function()
{this.ready=true;YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.getSWF(this.id).flAddListener('Success','YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFProxy.successHandler');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.getSWF(this.id).flAddListener('Failure','YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFProxy.failureHandler');for(var i=0,ilen=this.queue.length;i<ilen;i++)
{this.queue[i].callee.apply(this,this.queue[i]);}};this.getPlayThisPage=function(url,callback)
{if(this.ready)
{if(callback.scope==null)
{callback.scope=window;}
if(callback.timeout==null)
{callback.timeout=this.timeout;}
var id=this.magicNumber++;YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.getSWF(this.id).flGetPlayThisPage(id,url,callback.timeout);this.map[id]=callback;}
else
{this.addToQueue(arguments);}};this.getRhapMetadata=function(ids,callback)
{if(this.ready)
{if(callback.scope==null)
{callback.scope=window;}
if(callback.timeout==null)
{callback.timeout=this.timeout;}
var id=this.magicNumber++;YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.getSWF(this.id).flGetRhapMetadata(id,ids);this.map[id]=callback;}
else
{this.addToQueue(arguments);}};this.getWsapiMetadata=function(ids,callback)
{if(this.ready)
{if(callback.scope==null)
{callback.scope=window;}
if(callback.timeout==null)
{callback.timeout=this.timeout;}
var id=this.magicNumber++;YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.getSWF(this.id).flGetWsapiMetadata(id,ids);this.map[id]=callback;}
else
{this.addToQueue(arguments);}};this.addToQueue=function(args)
{this.queue.push(args);if(this.flashTimeoutID==null)
{this.flashTimeoutID=window.setTimeout('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFProxy.checkFlashLoaded()',5000);}};this.checkFlashLoaded=function()
{if(!this.ready)
{var callbackObj,func,scope,args,o;for(var i=0,ilen=this.queue.length;i<ilen;i++)
{callbackObj=this.queue[i][1];if(callbackObj.scope==null)
{callbackObj.scope=window;}
func=callbackObj.failure;scope=callbackObj.scope;args=callbackObj.argument;o={status:"Flash proxy failed to load",argument:args};func.call(scope,o);}
this.queue=[];}};this.successHandler=function(id,result)
{var func=this.map[id].success;var scope=this.map[id].scope;var args=this.map[id].argument;var o={responseText:result,argument:args};func.call(scope,o);};this.failureHandler=function(id,statusText)
{var func=this.map[id].failure;var scope=this.map[id].scope;var args=this.map[id].argument;var o={status:statusText,argument:args};func.call(scope,o);};};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFProxy.init();YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Closure={objects:[],functions:[],closures:{}};Function.prototype.closure=function(obj)
{try
{if(typeof(obj)==='undefined')
{throw new Error('Invalid argument exception. "obj" is undefined.');}
var func=this;var objId=obj.__objId;if(typeof(objId)!=='number')
{objId=obj.__objId=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Closure.objects.length;YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Closure.objects[objId]=obj;}
var funcId=func.__funcId;if(typeof(funcId)!=='number')
{funcId=func.__funcId=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Closure.functions.length;YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Closure.functions[funcId]=func;}
var closureId=objId+'_'+funcId;var closure=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Closure.closures[closureId];if(typeof(closure)!=='function')
{closure=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Closure.closures[closureId]=function()
{return YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Closure.functions[funcId].apply(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Closure.objects[objId],arguments);};}
return closure;}
catch(ex)
{throw new Error('ERROR in Function.closure(). '+ex.message);}};YAHOO.util.Event.addListener(window,'unload',function()
{try
{window.setTimeout('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Closure = Function.prototype.closure = null',500);}
catch(ex)
{}
if(window.CollectGarbage)
{window.CollectGarbage();}});YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventManager=function(owner,eventTypes)
{this.getOwner=function(){return this;}.closure(owner);this.toString=function(){return this+'.EventManager';}.closure(owner);this.events=[];if(eventTypes&&eventTypes.constructor===Array)
{this.addEvents(eventTypes);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventManager.prototype.addEvents=function(eventTypes)
{try
{if(!eventTypes||eventTypes.constructor!==Array)
{throw new Error('Invalid argument exception. "eventTypes" is not an array.');}
for(var idx=0,len=eventTypes.length;idx<len;idx++)
{this.addEvent(eventTypes[idx]);}}
catch(ex)
{throw new Error('ERROR in '+this+'.addEvents(). '+ex.message);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventManager.prototype.addEvent=function(eventType)
{try
{if(typeof(eventType)!=='string'||eventType.length===0)
{throw new Error('Invalid argument exception. "eventType":'+eventType+' is not a valid string or is empty.');}
if(!this[eventType])
{this.events.push(eventType);this[eventType]=new YAHOO.util.CustomEvent(eventType,this);}}
catch(ex)
{throw new Error('ERROR in '+this+'.addEvent(). '+ex.message);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventManager.prototype.subscribe=function(obj,eventTypes)
{try
{if(!obj||typeof(obj.handleEvent)!=='function')
{throw new Error('Invalid argument exception. "obj" is not a valid object.');}
if(!eventTypes||eventTypes.constructor!==Array)
{throw new Error('Invalid argument exception. "eventTypes" is not an array.');}
for(var idx=0,len=eventTypes.length,eventType;idx<len;idx++)
{eventType=eventTypes[idx];if(!this[eventType])
{this[eventType]=new YAHOO.util.CustomEvent(eventType,this);}
this[eventType].subscribe(obj.handleEvent,obj,true);}}
catch(ex)
{throw new Error('ERROR in '+this+'.subscribe(). '+ex.message);}};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ControllerBase=function ControllerBase()
{this.EventManager=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventManager(this);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ControllerBase.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ControllerBase';};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ControllerBase.prototype.handleEvent=function handleEvent(evType,args)
{try
{if(typeof(this[evType])==='function')
{this[evType](args[0]);}
else if(this.EventManager[evType])
{this.EventManager[evType].fire(args[0]);}}
catch(ex)
{throw new Error('ERROR in '+this+'.handleEvent(evType:"'+evType+'"). '+ex.message);}};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject=function BaseObject(controller,subscribeToControllersEvents)
{try
{if(typeof(this.refByName)!=='string'||this.refByName.length===0)
{throw new Error('Invalid required property exception. this.refByName:"'+this.refByName+'" is invalid.');}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject.superclass.constructor.call(this);this.getController=function(){return this;}.closure(controller);if(!this.EventManager||this.EventManager.constructor!==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventManager)
{throw new Error('Invalid required property exception. this.EventManager is invalid.');}
if(subscribeToControllersEvents&&subscribeToControllersEvents.constructor===Array&&subscribeToControllersEvents.length>0)
{controller.EventManager.subscribe(this,subscribeToControllersEvents);}}
catch(ex)
{throw new Error('ERROR in '+this+' constructor. '+ex.message);}};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ControllerBase);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject';};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject.prototype.initController=function(controller)
{try
{if(typeof(this.refByName)!=='string'||this.refByName.length<0)
{throw new Error('Invalid required property exception. this.refByName:"'+this.refByName+'" is invalid.');}
if(!this.EventManager||this.EventManager.constructor!==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventManager)
{throw new Error('Invalid required property exception. this.EventManager is invalid.');}
controller[this.refByName]=this;this.EventManager.subscribe(controller,this.EventManager.events);for(var idx=0,len=this.EventManager.events.length,eventType;idx<len;idx++)
{eventType=this.EventManager.events[idx];if(!controller.EventManager[eventType])
{controller.EventManager.addEvent(eventType);}}}
catch(ex)
{throw new Error('ERROR in '+this+'.initController(). '+ex.message);}};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller=function()
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.superclass.constructor.call(this,arguments);this.isInitialState=true;this.errorCount=0;this.maxErrors=5;YAHOO.util.Event.on(window,'unload',this.onWindowUnload,this,true);};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ControllerBase);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller';};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.prototype.init=function()
{new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser(this);new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager(this);new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver(this);new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine(this);new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Logger(this);if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody!=null)
{new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody(this);}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.init();var tracks=null;if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.parse===true)
{tracks=this.parser.parse(null);}
if(tracks&&typeof(tracks.length)==="number"&&tracks.length>0)
{this.playlistmanager.add(tracks);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.prototype.onPlaylistUpdate=function(playlist)
{if(playlist!=null&&!(playlist instanceof YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist)&&playlist.length>0)
{if(typeof this.view==="undefined")
{new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View(this);}}
this.EventManager.onPlaylistUpdate.fire(playlist);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.prototype.onPlayStateChange=function(o)
{var media=o.media;if(this.errorCount>0&&o.newState===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PLAYING)
{this.errorCount=0;}
if(media.mimeType==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes.rhapsody)
{switch(o.newState)
{case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PLAYING:if(this.rhapsody.timeForStickwall())
{this.view.displayRhapsodyStickwall();window.setTimeout('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.stop()',200);}
break;}}
this.EventManager.onPlayStateChange.fire(o);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.prototype.onPlayRequest=function(media)
{this.EventManager.onPlayRequest.fire(media);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.prototype.onError=function(eventObj)
{if(eventObj.type===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.CRITICAL)
{this.mediaengine.stop();}
if(eventObj.playback&&eventObj.playback===true)
{this.errorCount++;if(this.errorCount>=this.maxErrors)
{this.errorCount=0;this.mediaengine.stop();this.EventManager.onError.fire(new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("2",null));}}
this.EventManager.onError.fire(eventObj);this.logger.logError(eventObj);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.prototype.onWindowUnload=function(eventObj)
{var pluginIds=['ymp-flash-engine','ymp-rhapsody-engine','ymp-qt-engine','ymp-wmpff3-engine','ymp-wmp-engine','ymp-flv-engine'];var len=pluginIds.length;var plugin=null;for(var i=0;i<len;i++)
{plugin=document.getElementById(pluginIds[i]);if(plugin)
{plugin.parentNode.removeChild(plugin);}}};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser=function(controller)
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.initController(controller);this.controller=this.getController();this.audioClass="htrack";};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.prototype.refByName='parser';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.'+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.TypeApplication={'xspf+xml':true,'x-xspf+xml':true,'mpeg':true,'mp3':true,'rhapsody':true};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes={mp3:"audio/mpeg",wav:"audio/x-wav",wma:"audio/x-ms-wma",m4a:"audio/mp4",flv:"video/x-flv",xspf:"application/xspf+xml",m3u:"audio/x-mpegurl",m4u:"audio/x-mpegurl",asx:"video/x-ms-asf",pls:"audio/x-scpls",unknown:"audio/unknown",rhapsody:"audio/rhapsody",yahoo:"audio/yahoo"};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.prototype.parse=function(domElement)
{try
{var mediaTracks=[];var anchorCollection=this.getAnchors(domElement);var anchorCollectionLen=anchorCollection.length;var mt="";var type="";var parts="";for(var i=0;i<anchorCollectionLen;i++)
{if(YAHOO.util.Dom.hasClass(anchorCollection[i],this.audioClass))
{type=String(anchorCollection[i].type).toLowerCase();parts=type.split('/');if(parts.length===2&&(parts[0]==='audio'||(parts[0]==='application'&&YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.TypeApplication[parts[1]]===true)||(parts[0]==='video'&&parts[1]==='x-flv')))
{if(this.checkForLocalHost(anchorCollection[i].href)===false)
{if(!this.checkForDupes(anchorCollection[i].href,mediaTracks))
{mediaTracks.push({anchor:anchorCollection[i],mimeType:type});}}}
else
{mt=this.getMimeTypeFromExtension(anchorCollection[i].href);if(this.checkForLocalHost(anchorCollection[i].href)===false&&!(/unknown/i).test(mt))
{if(!this.checkForDupes(anchorCollection[i].href,mediaTracks))
{mediaTracks.push({anchor:anchorCollection[i],mimeType:mt});}}}}}
mediaTracks=this.sortByTabIndex(mediaTracks);return mediaTracks;}
catch(e)
{return[];}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.prototype.checkForDupes=function(href,tracks)
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.isArray(tracks)&&href&&href.length>0)
{var len=tracks.length;var i;for(i=0;i<len;i++)
{if(tracks[i].anchor&&tracks[i].anchor.href&&href===tracks[i].anchor.href)
{return true;}}
return false;}
else
{return false;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.prototype.getAnchors=function(domElement)
{var anchorCollection=[];var rootNode=domElement;if(rootNode==null)
{rootNode=document.body;}
var aTags=rootNode.getElementsByTagName('a');for(var i=0,ilen=aTags.length;i<ilen;i++)
{anchorCollection[i]=aTags[i];}
rootNode=null;aTags=null;return anchorCollection;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.prototype.getMimeTypeFromExtension=function(url)
{try
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.regex.track.test(url))
{return YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes['rhapsody'];}
if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.regex.track.test(url))
{return YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes['yahoo'];}
var str=url;var questionIndex=str.indexOf('?');if(questionIndex!=-1)
{str=str.substring(0,questionIndex);}
var dotIndex=str.lastIndexOf(".");var pattern=str.substring(dotIndex+1,str.length).toLowerCase();for(var extension in YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes)
{if(pattern===extension)
{return YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes[extension];}}
return YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes["unknown"];}
catch(e)
{return YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes["unknown"];}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.prototype.sortByTabIndex=function(mediaTracks)
{try
{var temp=null;var tbidx1=null;var atbidx2=null;var len=mediaTracks.length;for(var i=0;i<len;i++)
{for(j=i+1;j<len;j++)
{tbidx1=mediaTracks[i].anchor.tabIndex;tbidx2=mediaTracks[j].anchor.tabIndex;if(tbidx2>0&&(tbidx1>tbidx2))
{temp=mediaTracks[i];mediaTracks[i]=mediaTracks[j];mediaTracks[j]=temp;}}}
return mediaTracks;}
catch(e)
{return null;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.prototype.checkForLocalHost=function(url)
{return(url.toLowerCase().indexOf("http://localhost")>=0);};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager=function(controller)
{var subscribeToControllersEvents=['onPlayRequest','onPauseRequest','onStopRequest','onPreviousRequest','onNextRequest','onPlayStateChange','onMediaUpdate','onPlaylistUpdate'];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.EventManager.addEvents(['onPlaylistUpdate','onNextRequest','onCurrentMediaSet']);this.initController(controller);this.controller=this.getController();this.playlistArray=[];this.allMedia=[];this.currentIndex=-1;};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.refByName='playlistmanager';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.'+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.add=function(mediaAnchorArray)
{var media2Resolve=[];var indexWhereAdded=0;if(this.playlistArray.length>0)
{indexWhereAdded=this.playlistArray.length-1;}
if(mediaAnchorArray==null)
{return;}
for(var i=0,ilen=mediaAnchorArray.length,newMedia;i<ilen;i++)
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.PlaylistMimeTypes[mediaAnchorArray[i].mimeType])
{newMedia=this.createMediaObject(mediaAnchorArray[i],"Playlist");}
else
{newMedia=this.createMediaObject(mediaAnchorArray[i],"Track");}
media2Resolve.push(newMedia);this.playlistArray.push(newMedia);}
this.fireupdateAndResolve(media2Resolve);return indexWhereAdded;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.fireupdateAndResolve=function(mediaArray)
{this.EventManager.onPlaylistUpdate.fire(this.playlistArray);for(var i=0,ilen=mediaArray.length;i<ilen;i++)
{this.controller.mediaresolver.resolve(mediaArray[i]);}
this.controller.mediaresolver.resolveRhapsodyMedia();this.controller.mediaresolver.resolveYmuMedia();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.createMediaObject=function(obj,type)
{var temp=null;if(type==="Track")
{temp=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.Track(this.controller);}
else if(type==="Playlist")
{temp=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist(this.controller);}
temp.anchor=obj.anchor;temp.mimeType=obj.mimeType;this.allMedia[temp.id]=temp;return temp;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.getMediaById=function(id)
{if(id==null)
{return null;}
return this.allMedia[id];};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.getMediaIndex=function(media)
{if(media==null)
{return-1;}
for(var i=0,ilen=this.playlistArray.length;i<ilen;i++)
{if(this.playlistArray[i]==media)
{return i;}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.onPlayRequest=function(o)
{var media,seek;if(o!=null)
{media=o.media;seek=o.seek;}
var mediaIndex=-1;if(media==null)
{mediaIndex=this.currentIndex;media=this.playlistArray[this.currentIndex];}
if(media instanceof YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist)
{if(media.mediaArray.length>0)
{var firstMediaIndex=this.getMediaIndex(media.mediaArray[0]);if(this.currentIndex>=firstMediaIndex&&this.currentIndex<firstMediaIndex+media.mediaArray.length)
{mediaIndex=this.currentIndex;}
else
{mediaIndex=firstMediaIndex;}}}
else if(mediaIndex==-1)
{mediaIndex=this.getMediaIndex(media);}
if(mediaIndex==-1)
{return;}
if(this.currentIndex!=mediaIndex)
{this.currentIndex=mediaIndex;this.EventManager.onCurrentMediaSet.fire(this.playlistArray[this.currentIndex]);}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.play(this.playlistArray[this.currentIndex],seek);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.onPauseRequest=function()
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.pause();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.onStopRequest=function()
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.stop();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.onNextRequest=function()
{if(this.currentIndex+1<this.playlistArray.length)
{this.currentIndex++;var media=this.playlistArray[this.currentIndex];this.EventManager.onCurrentMediaSet.fire(media);var currentEngineState=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.currentPlayState;if(currentEngineState!=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PAUSED&&currentEngineState!=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED&&currentEngineState!=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.STOPPED)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.play(media);}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.onPreviousRequest=function()
{if(this.currentIndex-1>=0)
{this.currentIndex--;var media=this.playlistArray[this.currentIndex];this.EventManager.onCurrentMediaSet.fire(media);var currentEngineState=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.currentPlayState;if(currentEngineState!=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PAUSED&&currentEngineState!=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED&&currentEngineState!=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.STOPPED)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.play(media);}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.onPlayStateChange=function(o)
{switch(o.newState)
{case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED:if(this.currentIndex+1<this.playlistArray.length&&YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.autoadvance===true)
{this.currentIndex++;var media=this.playlistArray[this.currentIndex];this.EventManager.onCurrentMediaSet.fire(media);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.play(media);}
break;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.onMediaUpdate=function(media)
{if(this.currentIndex==-1)
{var mediaIndex=this.getMediaIndex(media);if(mediaIndex!=-1)
{this.currentIndex=mediaIndex;this.EventManager.onCurrentMediaSet.fire(this.playlistArray[this.currentIndex]);if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.autoplay===true)
{this.controller.onPlayRequest(this.playlistArray[this.currentIndex]);}}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.onPlaylistUpdate=function(playlist)
{if(playlist instanceof YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist)
{var playlistIndex=-1;for(var i=0,ilen=this.playlistArray.length;i<ilen;i++)
{if(this.playlistArray[i]==playlist)
{playlistIndex=i;}}
if(playlistIndex!=-1)
{this.playlistArray.splice(playlistIndex,1);for(var i=playlist.mediaArray.length-1;i>=0;i--)
{this.playlistArray.splice(playlistIndex,0,playlist.mediaArray[i]);this.allMedia[playlist.mediaArray[i].id]=playlist.mediaArray[i];}
if(this.currentIndex>=playlistIndex)
{this.currentIndex+=playlist.mediaArray.length-1;}}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.clear=function()
{this.playlistArray=[];this.currentIndex=-1;this.EventManager.onPlaylistUpdate.fire(this.playlistArray);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.insert=function(mediaTracks,index)
{if(this.playlistArray[index])
{while(index>0&&this.playlistArray[index].parent!==null&&this.playlistArray[index-1].parent!==null)
{index--;}
var len=mediaTracks.length;var newMedia=null;var media2Resolve=[];for(var i=0;i<len;i++)
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.PlaylistMimeTypes[mediaTracks[i].mimeType])
{newMedia=this.createMediaObject(mediaTracks[i],"Playlist");}
else
{newMedia=this.createMediaObject(mediaTracks[i],"Track");}
media2Resolve.push(newMedia);this.playlistArray.splice(index+i,0,newMedia);}
this.fireupdateAndResolve(media2Resolve);return index;}
else
{this.add(mediaTracks);}};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver=function(controller)
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.EventManager.addEvents(['onPlaylistUpdate','onError']);this.initController(controller);this.controller=this.getController();this.rhapsodyMediaCollection=[];this.ymuMediaCollection=[];};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.refByName='mediaresolver';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.'+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.PlaylistMimeTypes={"application/xspf+xml":true,"application/x-xspf+xml":true,"audio/x-mpegurl":true,"audio/x-scpls":true,"audio/pn-realaudio":true,"video/x-ms-asf":true,"video/ms-asf":true};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.isSimpleMedia=function(mimeType)
{if(mimeType&&mimeType.length>0)
{if(!YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.PlaylistMimeTypes[mimeType])
{return true;}}
else
{return false;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.resolve=function(media)
{var temp;if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.PlaylistMimeTypes[media.mimeType])
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFProxy.getPlayThisPage(media.anchor.href,{success:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaresolver.onPTPSuccess,failure:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaresolver.onPTPFail,argument:media,scope:this});}
else
{var props=this.getSimpleMediaProperties(media);if(media.mimeType===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes.rhapsody)
{var match=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.regex.track.exec(media.anchor.href);props.token=match[5];temp=media;this.rhapsodyMediaCollection[this.rhapsodyMediaCollection.length]=temp;}
if(media.mimeType===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes.yahoo)
{var match=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.regex.track.exec(media.anchor.href);props.token=match[5];props.yTrackID=props.token;temp=media;this.ymuMediaCollection[this.ymuMediaCollection.length]=temp;}
media.setProperties(props);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.resolveRhapsodyMedia=function()
{if(this.rhapsodyMediaCollection.length>0)
{var match=null;var rcidsArray=[];var len=this.rhapsodyMediaCollection.length;for(var i=0;i<len;i++)
{match=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.regex.track.exec(this.rhapsodyMediaCollection[i].anchor.href);rcidsArray.push(match[5]);}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFProxy.getRhapMetadata(rcidsArray,{success:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaresolver.onRhapsodyMetadataReady,failure:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaresolver.onRhapsodyMetadataFail,argument:null,scope:this});}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.resolveYmuMedia=function()
{if(this.ymuMediaCollection.length>0)
{var match=null;var rcidsArray=[];var len=this.ymuMediaCollection.length;for(var i=0;i<len;i++)
{match=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.regex.track.exec(this.ymuMediaCollection[i].anchor.href);rcidsArray.push(match[5]);}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFProxy.getWsapiMetadata(rcidsArray,{success:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaresolver.onWsapiMetadataReady,failure:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaresolver.onWsapiMetadataFail,argument:null,scope:this});}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.onRhapsodyMetadataReady=function(o)
{var respText=o.responseText;var jsonObject=eval('('+respText+')');if(jsonObject&&jsonObject.status&&jsonObject.status.success===true&&jsonObject.status.blocked===false)
{var data=jsonObject.data;var len1=this.rhapsodyMediaCollection.length;var i=0;var j=0;while(i<len1)
{if(this.rhapsodyMediaCollection[i].token.toLowerCase()===jsonObject.data[j].trackId.toLowerCase())
{var props={};if(typeof(data[j].displayArtistName)==="string"&&data[j].displayArtistName!=="")
{props.artistName=data[j].displayArtistName;}
if(typeof(data[j].displayAlbumName)==="string"&&data[j].displayAlbumName!=="")
{props.albumName=data[j].displayAlbumName;}
if(typeof(data[j].name)==="string"&&data[j].name!=="")
{props.title=data[j].name;}
if(data[j].album&&typeof(data[j].album.albumArt162X162Url)==="string"&&data[j].album.albumArt162X162Url!=="")
{props.albumArt=data[j].album.albumArt162X162Url;}
if(typeof(data[j].purchaseInfo.url)==="string"&&data[j].purchaseInfo.url.length>0)
{props.buyURL="http://mp3.rhapsody.com/goto?rcid="+jsonObject.data[j].trackId.toLowerCase()
+"&pcode="+YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.rhappcode+"&ocode=yahoomusic&cpath=buylink&rsrc="
+((YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.ypartner&&YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.ypartner.length>0)?YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.ypartner:'yahoo');}
this.rhapsodyMediaCollection[i].setProperties(props);i++;j++;}
else
{i++;}}}
else
{var errorArgs={};if(jsonObject&&jsonObject.status&&jsonObject.status.errorMessage.length>0)
{errorArgs.displayMessageArgs=[jsonObject.status.errorMessage];}
var errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("10",errorArgs);this.EventManager.onError.fire(errorObj);}
this.rhapsodyMediaCollection=[];};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.onRhapsodyMetadataFail=function()
{for(var i=0,ilen=this.rhapsodyMediaCollection.length,errorObj;i<ilen;i++)
{errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("10",{displayMessageArgs:['']});errorObj.media=this.rhapsodyMediaCollection[i];errorObj.display=false;this.EventManager.onError.fire(errorObj);}
this.rhapsodyMediaCollection=[];};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.onWsapiMetadataReady=function(o)
{var jsonObject=eval('('+o.responseText+')');if(jsonObject&&typeof(jsonObject)==="object")
{var len1=this.ymuMediaCollection.length;var i=0;var j=0;while(i<len1)
{var retTrack=(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.isArray(jsonObject.Tracks.Track))?jsonObject.Tracks.Track[j]:jsonObject.Tracks.Track;if(retTrack&&typeof(retTrack)==="object")
{if(this.ymuMediaCollection[i].token===retTrack.id)
{var props={};var mappingFailure=false;if(retTrack.Artist)
{var artistObj=null;if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.isArray(retTrack.Artist))
{artistObj=retTrack.Artist[0];}
else
{artistObj=retTrack.Artist;}
if(artistObj&&typeof(artistObj.name)==="string"&&artistObj.name.length>0)
{props.artistName=artistObj.name;props.yArtistID=artistObj.id;}
artistObj=null;}
if(retTrack.Album&&retTrack.Album.Release&&typeof(retTrack.Album.Release.title)==="string"&&retTrack.Album.Release.title.length>0)
{props.albumName=retTrack.Album.Release.title;props.yAlbumID=retTrack.Album.Release.id;}
if(typeof(retTrack.title)==="string"&&retTrack.title.length>0)
{props.title=retTrack.title;}
if(retTrack.Album&&retTrack.Album.Release&&retTrack.Album.Release.Image)
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.isArray(retTrack.Album.Release.Image))
{for(var k=0;k<retTrack.Album.Release.Image.length;k++)
{if(retTrack.Album.Release.Image[k].size==="40")
{props.albumArt=retTrack.Album.Release.Image[k].url;break;}}}
else
{props.albumArt=retTrack.Album.Release.Image.url;}}
if(retTrack.Video&&retTrack.Video.id)
{props.yVideoID=retTrack.Video.id;}
if(retTrack.Mappings&&typeof(retTrack.Mappings)==="object")
{var map=null;if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.isArray(retTrack.Mappings.Mapping))
{for(var k=0;k<retTrack.Mappings.Mapping.length;k++)
{if(retTrack.Mappings.Mapping[k].catalogID===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.rhapsodyCatalogId)
{map=retTrack.Mappings.Mapping[k];break;}}}
else
{map=retTrack.Mappings.Mapping;}
if(map&&typeof(map)==="object")
{props.token=map.id;var rights=parseInt(map.rights);if(!isNaN(rights))
{var downloadFlag=parseInt(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.rightsFlags.DOWNLOAD);if((rights&downloadFlag)!=0)
{var buyURL="http://mp3.rhapsody.com/goto?rcid="+map.id.toLowerCase()
+"&pcode="+YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.rhappcode+"&ocode=yahoomusic&cpath=buylink&rsrc="
+((YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.ypartner&&YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.ypartner.length>0)?YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.ypartner:'yahoo');props.buyURL=buyURL;}}}
else
{mappingFailure=true;}}
else
{mappingFailure=true;}
if(mappingFailure===true)
{props.token="";errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("12",{displayMessageArgs:['']});errorObj.media=this.ymuMediaCollection[i];errorObj.display=false;this.EventManager.onError.fire(errorObj);}
this.ymuMediaCollection[i].setProperties(props);i++;j++;}
else
{errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("12",{displayMessageArgs:['']});errorObj.media=this.ymuMediaCollection[i];errorObj.media.setProperties({token:""});errorObj.display=false;this.EventManager.onError.fire(errorObj);i++;}}
else
{errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("12",{displayMessageArgs:['']});errorObj.media=this.ymuMediaCollection[i];errorObj.media.setProperties({token:""});errorObj.display=false;this.EventManager.onError.fire(errorObj);i++;}}}
else
{var errorArgs={};var errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("12",errorArgs);this.EventManager.onError.fire(errorObj);}
this.ymuMediaCollection=[];};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.onWsapiMetadataFail=function(o)
{for(var i=0,ilen=this.ymuMediaCollection.length,errorObj;i<ilen;i++)
{errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("12",{displayMessageArgs:['']});errorObj.media=this.ymuMediaCollection[i];errorObj.media.token="";errorObj.display=false;this.EventManager.onError.fire(errorObj);}
this.ymuMediaCollection=[];};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.onPTPSuccess=function(o)
{try
{var json=eval('('+o.responseText+')');var playlist=o.argument;if(json.playlist!=null)
{var temp=json.playlist.title;if(typeof(temp)==="string")
{playlist.title=temp;}
temp=json.playlist.info;if(typeof(temp)==="string")
{playlist.info=temp;}
playlist.url=playlist.anchor.href;if(json.playlist.track.length<=0)
{var errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("5",null);errorObj.media=playlist;this.EventManager.onError.fire(errorObj);}
for(var i=0,ilen=json.playlist.track.length;i<ilen;i++)
{var temp=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.Track(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller);if(json.playlist.track[i].location.constructor==Array&&json.playlist.track[i].location.length>0)
{temp.mimeType=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.parser.getMimeTypeFromExtension(json.playlist.track[i].location[0]);}
temp.parent=playlist;playlist.mediaArray.push(temp);}
this.EventManager.onPlaylistUpdate.fire(playlist);for(var i=0,ilen=json.playlist.track.length;i<ilen;i++)
{var props={};if(json.playlist.track[i].location&&json.playlist.track[i].location.constructor==Array&&json.playlist.track[i].location.length>0)
{props.token=json.playlist.track[i].location[0];}
if(json.playlist.track[i].type&&json.playlist.track[i].type.constructor==Array&&json.playlist.track[i].type.length>0)
{props.mimeType=json.playlist.track[i].type[0];}
if(typeof(json.playlist.track[i].title)==="string")
{props.title=json.playlist.track[i].title;}
if(props.title==null||props.title=="")
{props.title=decodeURIComponent(props.token.substring(props.token.lastIndexOf("/")+1,props.token.length));}
if(typeof(json.playlist.track[i].creator)==="string")
{props.artistName=json.playlist.track[i].creator;}
if(typeof(json.playlist.track[i].album)==="string")
{props.albumName=json.playlist.track[i].album;}
if(typeof(json.playlist.track[i].image)==="string")
{props.albumArt=json.playlist.track[i].image;}
playlist.mediaArray[i].setProperties(props);}}
else
{var errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("5",null);errorObj.media=playlist;this.EventManager.onError.fire(errorObj);}}
catch(e)
{}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.onPTPFail=function(o)
{var errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("4",null);errorObj.media=o.argument;this.EventManager.onError.fire(errorObj);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.getSimpleMediaProperties=function(media)
{try
{var props={};var href=media.anchor.href.trim();if(href.substr(0,24)==="http://us.lrd.yahoo.com/")
{var intStart=href.indexOf("**http");if(typeof intStart=="number"&&intStart>0)
{intStart+=2;href=href.substr(intStart,href.length-intStart);href=decodeURIComponent(href);}}
props.token=href;if(props.token==null||props.token=="")
{return null;}
props.title=this.parseTextNode(media.anchor.parentNode.getElementsByTagName('span')[0]);if(props.title=="")
{props.title=decodeURIComponent(media.anchor.href.substring(media.anchor.href.lastIndexOf("/")+1,media.anchor.href.length));}
props.albumName=media.anchor.getAttribute('album');if(props.albumName==null)
{props.albumName="";}
props.artistName=media.anchor.getAttribute('artist');if(props.artistName==null)
{props.artistName="";}
if(media.anchor.parentNode.parentNode.getElementsByTagName('dt')[0].getElementsByTagName('img')){var img=media.anchor.parentNode.parentNode.getElementsByTagName('dt')[0].getElementsByTagName('img')[0];props.albumArt=img.src;props.albumArtType=$D.hasClass(img,'yssImg_PNG')?3:0;}
return props;}
catch(e)
{return null;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaResolver.prototype.parseTextNode=function(elm)
{try
{if(typeof(elm.innerText)==='string')
{return elm.innerText;}
if(elm.nodeType==3)
{return elm.nodeValue;}
var textNodes=[],i=0;while(elm.childNodes[i])
{textNodes.push(this.parseTextNode(elm.childNodes[i++]));}
return textNodes.join('');}
catch(e)
{return"";}};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist=function(controller,obj)
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.initController(controller);this.controller=this.getController();this.id=Number.GUID(Math.getRnd(0,1000));this.title="";this.url="";this.creator="";this.anchor=null;this.mimeType="";this.info="";this.mediaArray=[];for(var props in obj)
{this[props]=obj[props];}};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist.prototype.refByName='playlist';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.'+this.refByName;};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media=function(controller)
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.EventManager.addEvents(['onMediaUpdate']);this.initController(controller);this.controller=this.getController();this.id=Number.GUID(Math.getRnd(0,1000));this.token=null;this.title="";this.mimeType="";this.anchor=null;this.parent=null;this.buyURL="";};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.prototype.refByName='media';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.'+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.prototype.setProperties=function(obj)
{for(var props in obj)
{this[props]=obj[props];}
this.EventManager.onMediaUpdate.fire(this);};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.Track=function(controller)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.Track.superclass.constructor.call(this,controller);this.albumName="";this.artistName="";this.albumArt="";};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.Track,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.Track.prototype.refByName='track';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Media.Track.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.'+this.refByName;};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine=function(controller)
{var subscribeToControllersEvents=['onPlayStateChange','onVolumeChangeRequest'];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.EventManager.addEvents(['onPlayStateChange','onMediaProgress','onError','onVolumeChange']);this.initController(controller);this.controller=this.getController();this.currentEngine=null;this.currentMedia=null;this.players=[];this.currentPlayState=0;this.progressIntervalID=null;this.vol=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.volume?YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.volume:0.5;this.playbackTimeout=20000;this.playbackTimeoutID=null;};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.refByName='mediaengine';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.'+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState={STOPPED:0,PAUSED:1,PLAYING:2,BUFFERING:3,ENDED:4};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.ErrorState={};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.play=function(media,seek)
{if(this.currentEngine!=null)
{if(this.currentMedia==media)
{this.currentEngine.setVolume(this.vol,true);this.currentEngine.play(media,seek);this.startPlaybackTimeout();return;}
else
{if(this.currentPlayState!=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.STOPPED&&this.currentPlayState!=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED)
{this.currentEngine.stop();}}}
this.currentMedia=media;this.setMediaEngine(media);if(this.currentEngine!=null)
{try
{this.currentEngine.setVolume(this.vol,true);this.currentEngine.play(media,seek);this.startPlaybackTimeout();}
catch(e)
{}}
else
{this.changePlayState(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.pause=function()
{try
{this.currentEngine.pause();}
catch(e)
{}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.stop=function()
{try
{this.currentEngine.stop();this.clearPlaybackTimeout();}
catch(e)
{}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.startPlaybackTimeout=function()
{this.clearPlaybackTimeout();this.playbackTimeoutID=window.setTimeout(this.toString()+".checkSongPlayback()",this.playbackTimeout);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.clearPlaybackTimeout=function()
{if(this.playbackTimeoutID!=null)
{window.clearTimeout(this.playbackTimeoutID);this.playbackTimeoutID=null;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.checkSongPlayback=function()
{var elapsed=this.currentEngine.getElapsed();if(elapsed<=0)
{var errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error("11");errorObj.media=this.currentMedia;this.EventManager.onError.fire(errorObj);this.currentEngine.stop(true);if(this.currentEngine.id!=="ymp-flash-engine"&&this.currentEngine.id!=="ymp-flv-engine")
{this.currentEngine.currentState=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED;this.changePlayState(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED);}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.getElapsed=function()
{if(this.currentEngine!=null)
{return this.currentEngine.getElapsed();}
return 0;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.getDuration=function()
{if(this.currentEngine!=null)
{return this.currentEngine.getDuration();}
return 0;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.fireProgress=function()
{var elapsed=this.currentEngine.getElapsed();var duration=this.currentEngine.getDuration();this.EventManager.onMediaProgress.fire({elapsed:elapsed,duration:duration});};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.changePlayState=function(newState)
{if(newState!=this.currentPlayState)
{var oldState=this.currentPlayState;this.currentPlayState=newState;this.EventManager.onPlayStateChange.fire({media:this.currentMedia,oldState:oldState,newState:newState});}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.handleError=function(errorCode,args)
{this.clearPlaybackTimeout();var errorObj=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error(errorCode,args);errorObj.media=this.currentMedia;this.EventManager.onError.fire(errorObj);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.setMediaEngine=function(media)
{switch(media.mimeType)
{case"audio/mp3":case"audio/mpeg":case"audio/mpeg3":case"audio/x-mpeg-3":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.OS)
{case"Windows":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER)
{case"Firefox":case"Safari":case"Netscape":case"Mozilla":this.currentEngine=this.getAvailableMediaEngine(['FlashEngine','QTEngine','WMPEngine']);break;case"MSIE":this.currentEngine=this.getAvailableMediaEngine(['FlashEngine','WMPEngine','QTEngine']);break;case"Opera":this.currentEngine=this.getAvailableMediaEngine(['FlashEngine','QTEngine']);break;default:this.currentEngine=this.getAvailableMediaEngine(['FlashEngine','QTEngine','WMPEngine']);break;}
break;case"Mac":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER)
{case"Firefox":case"Safari":case"Opera":case"Camino":case"Netscape":case"Mozilla":this.currentEngine=this.getAvailableMediaEngine(['FlashEngine','QTEngine']);break;default:this.currentEngine=this.getAvailableMediaEngine(['FlashEngine','QTEngine']);break;}
break;case"Linux":this.currentEngine=this.getAvailableMediaEngine(['FlashEngine']);break;default:}
break;case"audio/wma":case"audio/x-ms-wma":case"audio/ms-wma":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.OS)
{case"Windows":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER)
{case"Firefox":if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER_VERSION!=3)
{this.currentEngine=this.getAvailableMediaEngine(['WMPEngine']);}
else
{this.currentEngine=this.getAvailableMediaEngine(['WMPFF3Engine']);}
break;case"Opera":this.currentEngine=this.getAvailableMediaEngine(['WMPFF3Engine']);break;case"MSIE":case"Netscape":case"Mozilla":this.currentEngine=this.getAvailableMediaEngine(['WMPEngine']);break;case"Safari":default:this.currentEngine=this.getAvailableMediaEngine(['WMPEngine']);break;}
break;case"Mac":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER)
{case"Firefox":case"Safari":case"Opera":case"Camino":case"Netscape":case"Mozilla":this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;default:this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;}
break;case"Linux":break;default:}
break;case"audio/wav":case"audio/x-wav":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.OS)
{case"Windows":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER)
{case"MSIE":this.currentEngine=this.getAvailableMediaEngine(['QTEngine','WMPEngine']);break;case"Firefox":case"Safari":case"Camino":case"Netscape":case"Mozilla":case"Opera":this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;default:this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);}
break;case"Mac":this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;}
break;case"audio/rhapsody":case"audio/yahoo":this.currentEngine=this.getAvailableMediaEngine(['RhapsodyEngine']);break;case"audio/mp4":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.OS)
{case"Windows":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER)
{case"Firefox":case"Safari":case"Netscape":case"Mozilla":case"MSIE":case"Opera":this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;default:this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;}
break;case"Mac":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER)
{case"Firefox":case"Safari":case"Opera":case"Camino":case"Netscape":case"Mozilla":this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;default:this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;}
break;case"Linux":this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;default:}
break;case"audio/unknown":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.OS)
{case"Windows":this.currentEngine=this.getAvailableMediaEngine(['WMPEngine']);break;}
break;case"video/x-flv":this.currentEngine=this.getAvailableMediaEngine(['FlvEngine']);break;default:switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.OS)
{case"Windows":switch(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER)
{case"MSIE":this.currentEngine=this.getAvailableMediaEngine(['WMPEngine','QTEngine']);break;case"Firefox":case"Safari":case"Camino":case"Netscape":case"Mozilla":this.currentEngine=this.getAvailableMediaEngine(['QTEngine','WMPEngine']);break;case"Opera":this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;default:this.currentEngine=this.getAvailableMediaEngine(['QTEngine','WMPEngine']);}
break;case"Mac":this.currentEngine=this.getAvailableMediaEngine(['QTEngine']);break;}
break;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.getAvailableMediaEngine=function(engineList)
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER=="Firefox"&&YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER_VERSION==3)
{var plugin=document.getElementById("ymp-qt-engine");if(plugin)
{plugin.parentNode.removeChild(plugin);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine=null;}}
for(var i=0,ilen=engineList.length,engine,engineRefName;i<ilen;i++)
{engineRefName=engineList[i].toLowerCase();engine=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller[engineRefName];if(engine==null)
{engine=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer[engineList[i]](this.controller);}
if(engine.available)
{return engine;}}
return null;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.getVolume=function()
{return this.vol;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.onPlayStateChange=function(o)
{switch(o.newState)
{case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PLAYING:if(this.progressIntervalID==null)
{this.fireProgress();this.progressIntervalID=window.setInterval(this.toString()+'.fireProgress()',1000);}
break;default:if(this.progressIntervalID!=null)
{window.clearInterval(this.progressIntervalID);this.progressIntervalID=null;}
break;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.prototype.onVolumeChangeRequest=function(vol)
{try
{this.vol=vol;if(this.currentEngine!=null&&this.currentEngine.available)
{this.currentEngine.setVolume(vol);}
this.EventManager.onVolumeChange.fire(vol);}
catch(e)
{}};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine=function(controller)
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.initController(controller);this.controller=this.getController();this.id="ymp-flash-engine";this.available=false;this.ready=false;this.currentMedia=null;this.vol=0.5;this.seek=null;this.init();};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.refByName='flashengine';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.toString=function()
{return"YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller."+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.init=function()
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.hasPlayerVersion("9.0.0"))
{var dummyContainer=document.createElement('span');dummyContainer.id="dummy-flashengine";document.body.appendChild(dummyContainer);var flashVars={onLoad:this.toString()+".onLoad",timeout:20000};var params={allowScriptAccess:"always",allowNetworking:"all"};var attributes={id:this.id,name:this.id,style:"position:absolute; top:0; left:-30px;"};try
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.hasPlayerVersion('9.0.0'))
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.embedSWF("http://us.i1.yimg.com/us.yimg.com/lib/smb/assets/hosting/yss/extensions/swf/b1/flashsound.swf",dummyContainer.id,"1","1","9.0.0",false,flashVars,params,attributes);this.available=true;}}
catch(e)
{}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.onLoad=function()
{this.ready=true;this.getSWF().flAddListener('PlayStateChange',this.toString()+'.onPlayStateChange');this.getSWF().flAddListener('Error',this.toString()+'.onError');if(this.currentMedia!=null)
{this.play(this.currentMedia,this.seek);}
this.setVolume(this.vol);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.play=function(media,seek)
{this.seek=seek;if(media!=null)
{this.currentMedia=media;}
if(this.ready)
{if(media!=null)
{this.getSWF().flLoadMedia(this.currentMedia.token);}
this.getSWF().flPlay(this.seek);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.pause=function()
{this.getSWF().flPause();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.stop=function(organic)
{if(organic==null)
{organic=false;}
this.getSWF().flStop(organic);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.getElapsed=function()
{return this.getSWF().flGetElapsed();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.getDuration=function()
{return this.getSWF().flGetDuration();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.setVolume=function(vol)
{this.vol=vol;if(this.ready)
{this.getSWF().flSetVolume(vol);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.onError=function(args)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.handleError(args,null);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.onPlayStateChange=function(newState)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.changePlayState(newState);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.FlashEngine.prototype.getSWF=function()
{if(this.player==null)
{this.player=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.getSWF(this.id);}
return this.player;};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine=function(controller)
{try
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.EventManager.addEvents([]);this.initController(controller);this.controller=this.getController();this.id="ymp-wmp-engine";this.version=null;this.player=null;this.available=false;this.currentState=null;this.currentMedia=null;this.ready=false;this.volume=null;this.seek=null;this.init();}
catch(ex)
{}};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.refByName='wmpengine';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.toString=function()
{return'YAHOO.music.WebPlayer.'+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.PlayStateEnum={9:3,6:3,3:2,2:1,8:4,1:0};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.init=function()
{try
{if(!this.player)
{var pluginInstalled=false;if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.detectPlugin("Windows Media Player Firefox","WMPlayer.OCX")!==null)
{pluginInstalled=true;}
if(pluginInstalled===true)
{var dummyContainer=document.createElement('span');dummyContainer.id="dummy-wmpengine";document.body.appendChild(dummyContainer);var html="";if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="MSIE")
{html="<object id='"+this.id+"' style='width:1px; height:1px; position:absolute; top:0; left:-30px; display:none;'"
+" classid=CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6"
+" type='application/x-oleobject'>"
+"<param name='autostart' value='true'>"
+"</object>";}
else if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Firefox"||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Opera"||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Camino"||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Netscape"||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Mozilla"||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Unknown")
{html="<object id='"+this.id+"' style='width:1px; height:1px;'"
+"type='application/x-ms-wmp' data = ''>"
+"<param name='URL' value='' /><param name='uiMode' value='none'>"
+"</object>";}
html+='<script for="'+this.id+'" type="text/javascript" event="PlayStateChange(newState)">';html+='YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.wmpengine.onPlayStateChange(newState);';html+='</script>';html+='<script for="'+this.id+'" type="text/javascript" event="Error()">';html+='YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.wmpengine.onError();';html+='</script>';dummyContainer.innerHTML=html;this.currentState=0;setTimeout('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.wmpengine.onLoad()',250);this.available=true;}
else
{this.available=false;if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Firefox")
{this.controller.mediaengine.handleError("9",null);}}}}
catch(ex)
{}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.onLoad=function()
{this.player=document.getElementById(this.id);this.version="WMP "+this.player.versionInfo;this.ready=true;if(this.currentMedia!=null)
{if(typeof(this.volume)!=="number")
{this.volume=0.5;}
this.setVolume(this.volume);this.play(this.currentMedia);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.play=function(mediaObject,seek)
{if(typeof(seek)==="number")
{this.seek=seek/1000;}
if(this.currentState===this.PlayStateEnum[2])
{this.player.controls.play();}
else
{if(mediaObject!=null)
{this.currentMedia=mediaObject;}
if(this.ready)
{this.player.URL=this.currentMedia.token;}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.pause=function()
{this.player.controls.pause();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.stop=function()
{this.player.controls.stop();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.getElapsed=function()
{if(this.player&&this.player.controls)
{return this.player.controls.currentPosition*1000;}
else
{return null;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.getDuration=function()
{if(this.player&&this.player.controls&&this.player.controls.currentItem)
{return this.player.controls.currentItem.duration*1000;}
else
{return null;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.onPlayStateChange=function(newState)
{if(typeof(this.PlayStateEnum[newState])==="number")
{this.currentState=this.PlayStateEnum[newState];if(this.currentState===2&&typeof(this.seek)==="number")
{this.player.controls.currentPosition=this.seek;this.seek=null;}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.changePlayState(this.PlayStateEnum[newState]);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.setVolume=function(vol)
{this.volume=vol;if(this.player)
{this.player.settings.volume=parseInt(vol*100,10);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.getVolume=function()
{return this.player.settings.volume/100;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPEngine.prototype.onError=function()
{try
{if(this.player.error.errorCount>0)
{var error=null;var errorCode=this.player.error.item(0).errorCode;errorCode=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.convertToHexadecimal(errorCode);switch(errorCode)
{case"C00D1197":case"80070037":case"800704CF":case"C00D001F":this.controller.mediaengine.handleError("1",null);break;case"800C2EE2":case"C00D000F":case"C00D1198":case"C00D1198":case"C00D11CB":this.controller.mediaengine.handleError("7",null);break;default:this.controller.mediaengine.handleError("3",null);break;}
this.player.error.clearErrorQueue();this.stop();}}
catch(ex)
{}
this.onPlayStateChange(8);};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine=function(controller)
{try
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.EventManager.addEvents(['onVolumeChange']);this.initController(controller);this.controller=this.getController();this.id="ymp-qt-engine";this.available=false;this.ready=false;this.currentMedia=null;this.player=null;this.version=null;this.volume=null;this.currentState=null;this.naturalStop=null;this.seek=null;this.init();this.timeOut=null;}
catch(ex)
{}};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.refByName='qtengine';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.'+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.PlayStateEnum={qt_play:2,qt_buffer:3,qt_pause:1,qt_ended:4,qt_stopped:0};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.init=function()
{try
{var pluginInstalled=false;if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.detectPlugin("QuickTime Plug-in","QuickTime.QuickTime")!==null)
{pluginInstalled=true;}
if(pluginInstalled===true)
{var dummyContainer=document.createElement('span');dummyContainer.id="dummy-qtengine";document.body.appendChild(dummyContainer);var html="";if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="MSIE")
{html+='<object id="qt_event_source" classid="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598"'
+' codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0" ></object>'
+'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"'
+' codebase="http://www.apple.com/qtactivex/qtplugin.cab#version=7,2,1,0"'
+' width="0" height="0" type="audio/quicktime" id="'+this.id+'"'
+' controller="false" style="behavior:url(#qt_event_source);">'
+'<param name="controller" value="false"/><param name="src" value=""/><param name="postdomevents" value="true"/>'
+'</object>';}
else
{html+="<embed width='1px' height='1px' "
+"id='"+this.id+"' "
+"name='"+this.id+"' "
+"type='video/quicktime' "
+"src='' "
+"pluginspage='http://www.apple.com/quicktime/download/' "
+"enablejavascript='true' "
+"controller='false' "
+"style='position:fixed; top:0; right:0;' "
+"autoplay='true' postdomevents='true'"
+"/>";}
dummyContainer.innerHTML=html;this.timeOut=window.setTimeout('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.checkLoad();',500);this.currentState=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.PlayStateEnum.qt_stopped;this.available=true;}
else
{this.available=false;}}
catch(ex)
{}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.checkLoad=function()
{this.player=document.getElementById(this.id);if(this.player)
{this.version=this.player.GetQuickTimeVersion();if(this.version)
{this.ready=true;if(document.addEventListener)
{this.player.addEventListener('qt_play',YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.changePlayState,false);this.player.addEventListener('qt_pause',YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.changePlayState,false);this.player.addEventListener('qt_error',YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.onError,false);this.player.addEventListener('qt_ended',YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.changePlayState,false);this.player.addEventListener('qt_volumechange',YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.onVolumeChangeHandler,false);}
else
{this.player.attachEvent('onqt_play',YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.changePlayState);this.player.attachEvent('onqt_pause',YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.changePlayState);this.player.attachEvent('onqt_error',YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.onError);this.player.attachEvent('onqt_ended',YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.changePlayState);this.player.attachEvent('onqt_volumechange',YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.onVolumeChangeHandler);}
if(typeof(this.volume)!=="number")
{this.volume=0.5;}
this.setVolume(this.volume);this.play(this.currentMedia);}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.play=function(mediaObj,seek)
{this.naturalStop=true;if(typeof(seek)==="number")
{this.seek=seek;}
if(this.currentState===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.PlayStateEnum.qt_pause)
{this.player.Play();}
else
{if(mediaObj!=null)
{this.currentMedia=mediaObj;}
if(this.ready)
{if(mediaObj!=null)
{this.changePlayState({type:'qt_buffer'});this.player.SetURL(mediaObj.token);}}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.changePlayState=function(args)
{if(args.type==="qt_play")
{if(typeof(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.seek)==="number")
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.player.SetTime((YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.seek/1000)*YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.player.GetTimeScale());YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.seek=null;}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.setVolume(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.volume);}
if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.naturalStop===false&&args.type==="qt_pause")
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.currentState=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.PlayStateEnum.qt_stopped;YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.naturalStop=true;}
else
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.currentState=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.PlayStateEnum[args.type];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.changePlayState(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.currentState);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.onError=function(args)
{};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.getElapsed=function()
{var progress=0;try
{progress=this.player.GetTime()/this.player.GetTimeScale()*1000;}
catch(e)
{return 0;}
return isNaN(progress)?0:progress;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.getDuration=function()
{var duration=0;try
{duration=this.player.GetDuration()/this.player.GetTimeScale()*1000;}
catch(e)
{return 0;}
return isNaN(duration)?0:duration;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.pause=function()
{this.player.Stop();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.stop=function()
{try
{this.player.Stop();this.player.SetTime(0);}
catch(e)
{}
this.player.SetURL("");YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.changePlayState(0);this.naturalStop=false;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.setVolume=function(volume)
{try
{this.volume=volume;if(!isNaN(volume))
{this.player.SetVolume(parseInt(volume*768,10));}}catch(e)
{};};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.getVolume=function()
{return this.player.GetVolume()/768;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.QTEngine.prototype.onVolumeChangeHandler=function(eventObj)
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER=="Firefox"&&YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER_VERSION==3)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.volume=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.getVolume();YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.EventManager.onVolumeChange.fire(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.qtengine.getVolume());}};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine=function(controller)
{try
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.EventManager.addEvents([]);this.initController(controller);this.controller=this.getController();this.id="ymp-wmpff3-engine";this.version=null;this.player=null;this.available=false;this.currentState=null;this.currentMedia=null;this.ready=false;this.volume=null;this.naturalStop=true;this.seek=null;this.timeoutInterval=100;this.timeoutId=null;this.init();}
catch(ex)
{}};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.refByName='wmpff3engine';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.toString=function()
{return'YAHOO.music.WebPlayer.'+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.PlayStateEnum={9:3,3:2,2:1,1:4,0:0};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.init=function()
{try
{if(!this.player)
{var pluginInstalled=false;if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.detectPlugin("Windows Media Player Firefox","WMPlayer.OCX")!==null)
{pluginInstalled=true;}
if(pluginInstalled===true)
{var dummyContainer=document.createElement('span');dummyContainer.id="dummy-wmpff3engine";document.body.appendChild(dummyContainer);var html="";if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="MSIE")
{html="<object id='"+this.id+"' style='width:1px; height:1px; position:absolute; top:0; left:-30px; display:none;'"
+" classid=CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6"
+" type='application/x-oleobject'>"
+"<param name='autostart' value='true'>"
+"</object>";}
else if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Firefox"||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Opera"||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Camino"||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Netscape"||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Mozilla"||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Unknown")
{html="<object id='"+this.id+"' style='width:1px; height:1px;'"
+"type='application/x-ms-wmp' data = ''>"
+"<param name='URL' value='' /><param name='uiMode' value='none'>"
+"</object>";}
html+='<script for="'+this.id+'" type="text/javascript" event="PlayStateChange(newState)">';html+='YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.wmpff3engine.onPlayStateChange(newState);';html+='</script>';html+='<script for="'+this.id+'" type="text/javascript" event="Error()">';html+='YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.wmpff3engine.onError();';html+='</script>';dummyContainer.innerHTML=html;this.currentState=0;setTimeout('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.wmpff3engine.onLoad()',250);this.available=true;}
else
{this.available=false;if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER==="Firefox")
{this.controller.mediaengine.handleError("9",null);}}}}
catch(ex)
{}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.onLoad=function()
{this.player=document.getElementById(this.id);this.version="WMPFF3 "+this.player.versionInfo;this.ready=true;if(this.currentMedia!=null)
{if(typeof(this.volume)!=="number")
{this.volume=0.5;}
this.setVolume(this.volume);this.play(this.currentMedia);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.play=function(mediaObject,seek)
{if(typeof(seek)==="number")
{this.seek=seek/1000;}
if(this.currentState===this.PlayStateEnum[2])
{this.player.controls.play();}
else
{if(mediaObject!=null)
{this.currentMedia=mediaObject;}
if(this.ready)
{this.timeoutId=window.setTimeout('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.wmpff3engine.checkPlayState()',this.timeoutInterval);this.player.URL=this.currentMedia.token;}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.stop=function()
{this.naturalStop=false;this.onPlayStateChange(0);if(this.timeoutId)
{window.clearTimeout(this.timeoutId);}
this.player.controls.stop();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.getElapsed=function()
{if(this.player&&this.player.controls)
{return this.player.controls.currentPosition*1000;}
else
{return null;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.getDuration=function()
{if(this.player&&this.player.controls&&this.player.controls.currentItem)
{return this.player.controls.currentItem.duration*1000;}
else
{return null;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.onPlayStateChange=function(newState)
{if(typeof(this.PlayStateEnum[newState])==="number")
{this.currentState=this.PlayStateEnum[newState];if(this.currentState===2&&typeof(this.seek)==="number")
{this.player.controls.currentPosition=this.seek;this.seek=null;}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.changePlayState(this.PlayStateEnum[newState]);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.setVolume=function(vol)
{this.volume=vol;if(this.player)
{this.player.settings.volume=parseInt(vol*100,10);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.getVolume=function()
{return this.player.settings.volume/100;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.onError=function()
{try
{if(this.player.error.errorCount>0)
{var error=null;var errorCode=String(this.player.error.item(0).errorCode);switch(errorCode)
{case"C00D1197":case"80070037":case"800704CF":case"C00D001F":this.controller.mediaengine.handleError("1",null);break;case"800C2EE2":case"C00D000F":case"C00D1198":case"C00D1198":case"C00D11CB":this.controller.mediaengine.handleError("7",null);break;default:this.controller.mediaengine.handleError("3",null);break;}
this.player.error.clearErrorQueue();this.stop();}}
catch(ex)
{}
this.onPlayStateChange(1);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.WMPFF3Engine.prototype.checkPlayState=function()
{window.clearTimeout(this.timeoutId);if(this.player.error.errorCount>0)
{this.onError(1);return;}
else if(this.player&&this.PlayStateEnum[this.player.playState]!==this.currentState)
{if(this.naturalStop===false&&this.player.playState==1)
{this.naturalStop=true;}
else
{this.onPlayStateChange(this.player.playState);}}
if(this.currentState>=1)
{this.timeoutId=window.setInterval('YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.wmpff3engine.checkPlayState()',this.timeoutInterval);}};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine=function(controller)
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.initController(controller);this.controller=this.getController();this.id="ymp-rhapsody-engine";this.available=false;this.ready=false;this.currentMedia=null;this.vol=0.5;this.seek=null;this.init();};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.refByName='rhapsodyengine';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.toString=function()
{return"YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller."+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.init=function()
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.hasPlayerVersion("9.0.0"))
{var dummyContainer=document.createElement('span');dummyContainer.id="dummy-rhapsodyengine";document.body.appendChild(dummyContainer);var flashVars={env:"production",fp_context:"popout",pcode:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.rhappcode,onEngineReady:"YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.rhapsodyengine.onEngineReady"};var params={allowScriptAccess:"always",allowNetworking:"all"};var attributes={id:this.id,name:this.id,style:"position:absolute; top:0; left:-30px;"};try
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.hasPlayerVersion('9.0.0'))
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.embedSWF("http://playback.rhapsody.com/-static/players/engine/1_0_1_12/rhapsodyPlaybackEngine.swf",dummyContainer.id,"1","1","9.0.0",false,flashVars,params,attributes);this.available=true;}}
catch(e)
{}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.onEngineReady=function()
{this.ready=true;this.setVolume(this.vol,true);this.getSWF().addListener('onPlayStateChanged',this.toString()+'.onPlayStateChange');this.getSWF().addListener('onTrackClosed',this.toString()+'.onTrackClosed');this.getSWF().addListener('onError',this.toString()+'.onError');if(this.currentMedia!=null)
{this.play(this.currentMedia,this.seek);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.play=function(media,seek)
{this.seek=seek;if(media!=null)
{this.currentMedia=media;}
if(this.ready)
{if(media!=null)
{var currentTrackID=this.getSWF().getCurrentTrackId();if(currentTrackID!=null&&currentTrackID.toLowerCase()==this.currentMedia.token)
{this.getSWF().doPlay();}
else
{this.getSWF().doPlayTrack(this.currentMedia.token);this.controller.logger.logPlay(this.currentMedia.token);}}
else
{this.getSWF().doPlay();this.controller.logger.logPlay(this.currentMedia.token);}
if(this.seek!=null)
{this.getSWF().setPosition(seek);}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.pause=function()
{this.getSWF().doPause();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.stop=function()
{this.getSWF().doStop();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.getElapsed=function()
{return this.getSWF().getPosition();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.getDuration=function()
{return this.getSWF().getTrackLength();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.setVolume=function(vol,storeInCookie)
{if(storeInCookie==null)
{storeInCookie=false;}
this.vol=vol;if(this.ready)
{this.getSWF().setVolume(vol,storeInCookie);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.onError=function(errorCode)
{switch(errorCode)
{case 3:case 5:errorCode="7";break;case 4:errorCode="13";break;case 6:errorCode="14";break;case 7:errorCode="15";break;case 8:errorCode="16";break;case 9:errorCode="17";break;case 10:errorCode="18";break;case 13:errorCode="19";break;case 15:errorCode="20";break;case 1:case 2:case 11:case 12:case 14:default:errorCode="3";}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.handleError(errorCode,null);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.onPlayStateChange=function(oldState,newState)
{switch(newState)
{case 0:newState=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.STOPPED;break;case 1:case 2:case 3:newState=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.BUFFERING;break;case 4:newState=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PLAYING;break;case 5:newState=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PAUSED;break;}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.changePlayState(newState);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.onTrackClosed=function()
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.changePlayState(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.RhapsodyEngine.prototype.getSWF=function()
{if(this.player==null)
{this.player=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.SWFObject.getSWF(this.id);}
return this.player;};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody=function(controller)
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.initController(controller);this.controller=this.getController();this.stickwallShownAt=-1;this.playsAfterZero=0;};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.prototype.refByName='rhapsody';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.prototype.toString=function()
{return"YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller."+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.regex={track:/http(\:|%3A)\/\/([^:\/\s]+\.rhapsody\.com)\/(player|goto)(\?|%3F)rcid=(tra\.[0-9]+).*$/i};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.prototype.getFreePlays=function()
{return YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.rhapsodyengine.getSWF().getAccountProperty('freePlaysRemaining');};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.prototype.getSubType=function()
{return YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.rhapsodyengine.getSWF().getAccountProperty('subscriptionType');};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.prototype.timeForStickwall=function()
{var currentSubType=this.getSubType();var currentFreePlays=this.getFreePlays();if(currentSubType==null||currentSubType=="RHAPSODY_25")
{if(currentFreePlays<=0&&(this.playsAfterZero%10)==0)
{if(this.stickwallShownAt!=currentFreePlays)
{this.stickwallShownAt=currentFreePlays;return true;}
else
{this.playsAfterZero++;}}}
return false;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Rhapsody.rightsFlags={STREAM:2,DOWNLOAD_PORTABLE:16,DOWNLOAD_NONPORTABLE:32,PURCHASEDRMFREE:512};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu=function(controller)
{var subscribeToControllersEvents=[];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.initController(controller);this.controller=this.getController();};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.prototype.refByName='ymu';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.prototype.toString=function()
{return"YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller."+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.regex={track:/http(\:|%3A)\/\/([^:\/\s]+\.yahoo\.com)(\/\w+)*\/(track)\/(\d+$)$/};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.rhapsodyCatalogId="157431055";YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ymu.rightsFlags={STREAM:128,DOWNLOAD:32,DOANLOADALBUM:64};if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings==null)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings={ui:{PLAYLIST_TAB:"Playlist",PLAYLIST_LOADING:"Loading playlist ...",BUFFERING:"Buffering",HDR_MAIN:"Yahoo! Media Player",HDR_CONTROLS:"Playback Controls",HDR_PLAYLIST:"Media Player Playlist"},tooltips:{PREVIOUS:"Previous Track (Shift+Arrow Left)",PLAY:"Play (Shift+Space)",PAUSE:"Pause (Shift+Space)",NEXT:"Next Track (Shift+Arrow Right)",VOLUME:"Volume %1% (Shift+Arrow Up/Down)",NOWPLAYING_TRACK:"%1",NOWPLAYING_ARTIST:"%1",NOWPLAYING_ALBUM:"%1",BUY:"Buy this song",OPENPLAYLIST:"Open playlist (Ctrl+Shift+P)",CLOSEPLAYLIST:"Close playlist (Ctrl+Shift+P)",MINIMIZE:"Minimize Player",MAXIMIZE:"Expand Player",CLOSE:"Close player",FINDONPAGE:"Find song on page"},errors:{"1":"We're sorry, we could not find the track you requested","2":"We are unable to play media on this page at this time. Refresh the page and try again.","3":"We're sorry, there was an error in playback","4":"We're sorry, we are unable to retrieve the playlist","5":"We're sorry, we could not find any media to play in this playlist","6":"We're sorry, there was an error in downloading the media file. Please retry later","7":"We're sorry, there was an error in connecting to the server. Please retry later","8":"DRM error place-holder","9":"This file requires the Windows Media Player plug-in for Firefox. <a target='_top' href='http://port25.technet.com/pages/windows-media-player-firefox-plugin-download.aspx'>Click here</a> for instructions to install the plugin","10":"Rhapsody metadata unavailable. %1","11":"We're sorry, playback timed out","12":"We're sorry, the track could not be resolved. %1","13":"We're sorry, the username/password combination for the Rhapsody service is invalid","14":"We're sorry, the playback system is not initialized, please try again later","15":"We're sorry, the user token is invalid. Please sign in again","16":"Access denied","17":"We're sorry, an invalid request was made to the server","18":"We're sorry, a user property was requested that is not available","19":"We're sorry, user can be logged in and listening to the service from only one location","20":"We're sorry, this service is available only in the United States","21":"We're sorry, this track does not have streaming rights."}};}
YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View=function(controller)
{var subscribeToControllersEvents=['onPlaylistUpdate','onPlayStateChange','onCurrentMediaSet','onMediaUpdate','onMediaProgress','onError','onVolumeChange'];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.EventManager.addEvents(['onPlayRequest','onPauseRequest','onStopRequest','onPreviousRequest','onNextRequest','onVolumeChangeRequest']);this.volControlHeight=0;this.volTopConstraint=0;this.volBottomConstraint=0;this.volControlY=0;this.currentPlaylist=[];this.playlistArray=null;this.currentMedia=null;this.currentViewState=null;this.pageTargetAnchor=null;this.pageTargetTimeoutID=null;this.XULWin=null;this.firstPlay=true;this.currentStickwall=null;this.carouselTimeoutID=null;this.carouselContent=null;this.carouselIndex=0;this.errorBubbleTimeoutID=null;this.initController(controller);this.controller=this.getController();if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.displaystate!=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.NOUI)
{this.setupUI();}};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.refByName='view';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.'+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState={HIDDEN:-1,MIN:0,MAX:1,NOUI:3};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.MINHEIGHT=262;YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.MINWIDTH=660;YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.setupUI=function()
{var bodyElm=document.createElement("div");bodyElm.id="ymp-player";bodyElm.innerHTML=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ViewMarkup.body;document.body.appendChild(bodyElm);var vpHeight=YAHOO.util.Dom.getViewportHeight();var vpWidth=YAHOO.util.Dom.getViewportWidth();if(vpHeight<YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.MINHEIGHT||vpWidth<YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.MINWIDTH)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.displaystate=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.HIDDEN;}
trayElm=document.createElement("div");trayElm.id="ymp-tray";trayElm.innerHTML=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ViewMarkup.tray;document.body.appendChild(trayElm);var errorElm=document.createElement("div");errorElm.id="ymp-error-bubble";errorElm.innerHTML='<div id="ymp-error-msg" class="ymp-color-text-main">Testing<br/>Hahahaha</div><span class="ymp-error-tail ymp-skin"></span>';document.body.appendChild(errorElm);var secretElm=document.createElement("div");secretElm.id="ymp-secret-bubble";secretElm.innerHTML='<div id="ymp-secret-msg" class="ymp-color-text-main"><div id="ymp-secret-msg-header">Yahoo! Media Player</div><table><tr><th>Engineers</th><th>Design</th><th>Product</th></tr><tr><td>Mike Davis</td><td>Lino Wiehen</td><td>Lucas Gonze</td></tr><tr><td>William Khoe</td><td>Douglas Kim</td><td>Dave Warmerdam</td></tr><tr><td>Amit Behere</td><td></td><td>Suman Nichani</td></tr></table></div><a id="ymp-btn-close-secret" href="#" class="ymp-skin" title="Close this dialog"></a>';document.body.appendChild(secretElm);if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER=="MSIE"&&(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER_VERSION<=6||YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.DOCTYPE=="BackCompat"))
{YAHOO.util.Dom.setStyle('ymp-player','position','absolute');YAHOO.util.Dom.setStyle('ymp-tray','position','absolute');YAHOO.util.Event.on(window,'scroll',this.onWindowScroll,this,true);}
this.resizePlayer(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.displaystate);YAHOO.util.Event.on('ymp-btn-tray','click',this.toggleTray,this,true);YAHOO.util.Event.on('ymp-play','click',this.play,this);YAHOO.util.Event.on('ymp-prev','click',this.prev,this);YAHOO.util.Event.on('ymp-next','click',this.next,this);YAHOO.util.Event.on(['ymp-btn-max','ymp-btn-min'],'click',this.togglePlayerSize,this,true);YAHOO.util.Event.on('ymp-btn-target','click',this.targetMedia,this,true);YAHOO.util.Event.on('ymp-current-media-error','click',function(e){YAHOO.util.Event.stopEvent(e);});YAHOO.util.Event.on(['ymp-current-media-error','ymp-error-bubble'],'mouseover',this.onErrorMouseOver,this);YAHOO.util.Event.on(['ymp-current-media-error','ymp-error-bubble'],'mouseout',this.onErrorMouseOut,this);YAHOO.util.Event.on(document,'keydown',this.keyHandler,this,true);YAHOO.util.Event.on('ymp-tray','keydown',this.trayKeyHandler,this,true);YAHOO.util.Event.on('ymp-tray','mouseover',this.trayMouseOverHandler,this,true);YAHOO.util.Event.on('ymp-yahoo-logo','mousedown',this.showSecretMsg,this);YAHOO.util.Event.on('ymp-btn-close-secret','click',this.hideSecretMsg,this);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventDelegate.on('ymp-tray-track','click','ymp-tray-list',this.onTrayMediaClick,this);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventDelegate.on('ymp-error-icon','mouseover','ymp-tray-list',this.onErrorMouseOver,this);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventDelegate.on('ymp-error-icon','mouseout','ymp-tray-list',this.onErrorMouseOut,this);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.EventDelegate.on('ymp-tray-playlist','click','ymp-tray-list',this.onTrayPlaylistClick,this);YAHOO.util.Event.on('ymp-rhap-continue','click',this.onRhapContinueClick,this,true);this.volControlHeight=parseInt(YAHOO.util.Dom.getStyle('ymp-volume','height'));this.volTopConstraint=Math.round(parseInt(YAHOO.util.Dom.getStyle('ymp-volume-thumb','height'))/2);this.volBottomConstraint=this.volControlHeight-this.volTopConstraint;this.onVolumeChange(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.getVolume());YAHOO.util.Event.on('ymp-volume','mousedown',this.volStartDrag,this,true);YAHOO.util.Event.on('ymp-volume','click',function stopEvent(e){YAHOO.util.Event.stopEvent(e);});if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER=='Firefox')
{var div=document.createElement('div');var xulNS='http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';var desc=document.createElementNS(xulNS,'description');desc.setAttribute('crop','end');this.XULWin=document.createElementNS(xulNS,'window');this.XULWin.appendChild(desc);}
this.setUpUiStrings();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onErrorMouseOver=function(e,obj)
{obj.clearBubbleTimeout();if(this.id!="ymp-error-bubble")
{var elm=this;var pos=[YAHOO.util.Event.getPageX(e),YAHOO.util.Event.getPageY(e)];obj.errorBubbleTimeoutID=window.setTimeout(function(){obj.showErrorBubble(elm,pos);},350);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onErrorMouseOut=function(e,obj)
{obj.clearBubbleTimeout();var elm=this;obj.errorBubbleTimeoutID=window.setTimeout(obj.hideErrorBubble,350);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.showErrorBubble=function(errorIconElm,pos)
{var errorElm=document.getElementById('ymp-error-bubble');var errorID=this.getErrorIDFromClassName(errorIconElm.className);var errorObj=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorCollection[errorID];document.getElementById('ymp-error-msg').innerHTML=errorObj.getDisplayMessage();YAHOO.util.Dom.setStyle(errorElm,'display','block');YAHOO.util.Dom.setXY(errorElm,[pos[0]+13,pos[1]-errorElm.offsetHeight-23]);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.hideErrorBubble=function()
{YAHOO.util.Dom.setStyle('ymp-error-bubble','display','none');};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.clearBubbleTimeout=function()
{if(this.errorBubbleTimeoutID!=null)
{window.clearTimeout(this.errorBubbleTimeoutID);this.errorBubbleTimeoutID=null;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.getErrorIDFromClassName=function(className)
{var regex=/ymp-error-id-([^\s]*)?/i;var match=regex.exec(className);return match[1];};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onTrayPlaylistClick=function(e,obj)
{if(e!=null)
{YAHOO.util.Event.stopEvent(e);}
var nestedList=YAHOO.util.Dom.getElementsByClassName('ymp-nested-list','ul',this.parentNode)[0];if(YAHOO.util.Dom.hasClass(nestedList,'ymp-nested-list-closed'))
{YAHOO.util.Dom.setStyle(nestedList,'display','block');YAHOO.util.Dom.removeClass(nestedList,'ymp-nested-list-closed');YAHOO.util.Dom.addClass(nestedList,'ymp-nested-list-open');var rightArrow=YAHOO.util.Dom.getElementsByClassName('ymp-right-arrow',null,this.parentNode)[0];YAHOO.util.Dom.removeClass(rightArrow,'ymp-right-arrow');YAHOO.util.Dom.addClass(rightArrow,'ymp-down-arrow');}
else
{YAHOO.util.Dom.setStyle(nestedList,'display','none');YAHOO.util.Dom.removeClass(nestedList,'ymp-nested-list-open');YAHOO.util.Dom.addClass(nestedList,'ymp-nested-list-closed');var downArrow=YAHOO.util.Dom.getElementsByClassName('ymp-down-arrow',null,this.parentNode)[0];YAHOO.util.Dom.removeClass(downArrow,'ymp-down-arrow');YAHOO.util.Dom.addClass(downArrow,'ymp-right-arrow');}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onTrayMediaClick=function(e,obj)
{if(e!=null)
{YAHOO.util.Event.stopEvent(e);}
var media=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.playlistmanager.getMediaById(this.id);obj.EventManager.onPlayRequest.fire({media:media});};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onPageMediaClick=function(e,obj)
{if(e!=null)
{YAHOO.util.Event.stopEvent(e);}
if(obj.firstPlay||YAHOO.util.Dom.hasClass('ymp-player','ymp-player-hidden'))
{var vpHeight=YAHOO.util.Dom.getViewportHeight();var vpWidth=YAHOO.util.Dom.getViewportWidth();if(vpHeight>=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.MINHEIGHT&&vpWidth>=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.MINWIDTH)
{obj.resizePlayer(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.MAX);}
obj.firstPlay=false;}
var regex=/ymp-media-([^\s]*)?/i;var match=regex.exec(this.className);var mediaID=match[1];var media=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.playlistmanager.getMediaById(mediaID);if(YAHOO.util.Dom.hasClass(this,'ymp-btn-page-play'))
{obj.EventManager.onPlayRequest.fire({media:media});}
else
{obj.EventManager.onPauseRequest.fire(media);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.volStartDrag=function(e)
{YAHOO.util.Event.stopEvent(e);this.volControlY=YAHOO.util.Dom.getY('ymp-volume');this.notifyVolumeChange(e);YAHOO.util.Event.on(document,'mousemove',this.notifyVolumeChange,this,true);YAHOO.util.Event.on(document,'mouseup',this.volMouseUp,this,true);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.volMouseUp=function(e)
{YAHOO.util.Event.stopEvent(e);YAHOO.util.Event.removeListener(document,'mousemove',this.notifyVolumeChange);YAHOO.util.Event.removeListener(document,'mouseup',this.volMouseUp);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.notifyVolumeChange=function(e)
{YAHOO.util.Event.stopEvent(e);var newMouseY=YAHOO.util.Event.getPageY(e);var yDiff=newMouseY-this.volControlY;var yOffset=0;if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER=='Firefox'&&YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER_VERSION!=3)
{yOffset=document.documentElement.scrollTop;}
else if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER=='Safari')
{yOffset=document.body.scrollTop;}
yDiff-=yOffset;var thumbTop;if(yDiff>=this.volTopConstraint&&yDiff<this.volBottomConstraint)
{thumbTop=yDiff-this.volTopConstraint;}
else if(yDiff>=this.volBottomConstraint)
{thumbTop=this.volBottomConstraint-this.volTopConstraint;}
else if(yDiff<this.volTopConstraint)
{thumbTop=0;}
var vol=1-(thumbTop/(this.volBottomConstraint-this.volTopConstraint));this.EventManager.onVolumeChangeRequest.fire(vol);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onWindowScroll=function(e,obj)
{if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER_VERSION<=6)
{YAHOO.util.Dom.addClass('ymp-player','ymp-dummy');YAHOO.util.Dom.removeClass('ymp-player','ymp-dummy');}
else if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER_VERSION>=7&&YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.DOCTYPE=="BackCompat")
{var scrollYOffset=Math.max(document.body.scrollTop,document.documentElement.scrollTop);var newBodyY=10-scrollYOffset;var newTrayY=81-scrollYOffset;YAHOO.util.Dom.setStyle('ymp-player','bottom',newBodyY+'px');YAHOO.util.Dom.setStyle('ymp-tray','bottom',newTrayY+'px');}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.play=function(e,obj)
{var elm=null;if(typeof this!=="object")
{elm=this;}
else
{elm=document.getElementById("ymp-play");}
if(YAHOO.util.Dom.hasClass(elm,'ymp-btn-pause'))
{obj.pause.call(this,e,obj);return;}
if(e)
{YAHOO.util.Event.stopEvent(e);}
obj.EventManager.onPlayRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.pause=function(e,obj)
{YAHOO.util.Event.stopEvent(e);obj.EventManager.onPauseRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.stop=function(e,obj)
{YAHOO.util.Event.stopEvent(e);obj.EventManager.onStopRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.next=function(e,obj)
{YAHOO.util.Event.stopEvent(e);obj.EventManager.onNextRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.prev=function(e,obj)
{YAHOO.util.Event.stopEvent(e);obj.EventManager.onPreviousRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.togglePlayerSize=function(e)
{if(e!=null)
{YAHOO.util.Event.stopEvent(e);}
if(YAHOO.util.Dom.hasClass('ymp-player','ymp-player-max'))
{this.resizePlayer(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.MIN);}
else if(YAHOO.util.Dom.hasClass('ymp-player','ymp-player-min'))
{this.resizePlayer(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.MAX);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.hidePlayer=function(e)
{if(e!=null)
{YAHOO.util.Event.stopEvent(e);}
this.resizePlayer(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.HIDDEN);this.EventManager.onStopRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.resizePlayer=function(viewState)
{this.currentViewState=viewState;if(viewState==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.MAX&&!YAHOO.util.Dom.hasClass('ymp-player','ymp-player-max'))
{YAHOO.util.Dom.setStyle('ymp-yahoo-logo','display','block');YAHOO.util.Dom.removeClass('ymp-player','ymp-player-hidden');YAHOO.util.Dom.removeClass('ymp-player','ymp-player-min');YAHOO.util.Dom.addClass('ymp-player','ymp-player-max');var widthTo=parseInt(YAHOO.util.Dom.getStyle('ymp-body','width'));var anim=new YAHOO.util.Anim('ymp-player',{width:{to:widthTo}},.35,YAHOO.util.Easing.easeOut);anim.onComplete.subscribe(this.showTray);anim.animate();}
else if(viewState==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.MIN&&!YAHOO.util.Dom.hasClass('ymp-player','ymp-player-min'))
{YAHOO.util.Dom.setStyle('ymp-yahoo-logo','display','none');YAHOO.util.Dom.removeClass('ymp-player','ymp-player-hidden');YAHOO.util.Dom.removeClass('ymp-player','ymp-player-max');YAHOO.util.Dom.addClass('ymp-player','ymp-player-min');this.hideTray();var widthTo=parseInt(YAHOO.util.Dom.getStyle('ymp-body','width'));YAHOO.util.Dom.setStyle('ymp-player','width',widthTo+'px');}
else if(viewState==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.HIDDEN&&!YAHOO.util.Dom.hasClass('ymp-player','ymp-player-hidden'))
{YAHOO.util.Dom.setStyle('ymp-yahoo-logo','display','none');YAHOO.util.Dom.removeClass('ymp-player','ymp-player-max');YAHOO.util.Dom.addClass('ymp-player','ymp-player-min');var widthTo=parseInt(YAHOO.util.Dom.getStyle('ymp-body','width'));YAHOO.util.Dom.setStyle('ymp-player','width',widthTo+'px');this.hideTray();YAHOO.util.Dom.removeClass('ymp-player','ymp-player-min');YAHOO.util.Dom.addClass('ymp-player','ymp-player-hidden');}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.popPlayer=function(e)
{YAHOO.util.Event.stopEvent(e);var contplayForm=document.contplayform;contplayForm.vol.value=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.getVolume();contplayForm.seek.value=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.getElapsed();if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.mediaengine.currentPlayState==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PLAYING)
{this.EventManager.onStopRequest.fire();contplayForm.token.value=this.currentMedia.token;}
var anchorHTML="";var playlistArray=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.playlistmanager.playlistArray;var attrWeCareAbt=["type","title","artist","album"];for(var i=0,ilen=playlistArray.length,prevAnchor=null,anchor;i<ilen;i++)
{anchor=playlistArray[i].anchor;if(anchor==null&&playlistArray[i].parent!=null)
{anchor=playlistArray[i].parent.anchor;}
if(anchor!=null&&anchor!=prevAnchor)
{anchorHTML+='<a href="'+anchor.href+'"';if(anchor.className!="")
{anchorHTML+=' class="'+anchor.className+'"';}
for(var j=0,jlen=attrWeCareAbt.length;j<jlen;j++)
{if(anchor.getAttribute(attrWeCareAbt[j])!=null&&anchor.getAttribute(attrWeCareAbt[j])!="")
{anchorHTML+=' '+attrWeCareAbt[j]+'="'+anchor.getAttribute(attrWeCareAbt[j])+'"';}}
anchorHTML+=">"+anchor.innerHTML+'</a>';}
prevAnchor=anchor;}
contplayForm.trackhtml.value=anchorHTML;contplayForm.action="http://mediaplayer.yahoo.com/contplay/index.php?url="+encodeURIComponent(window.location.href);contplayForm.submit();this.hidePlayer();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.toggleTray=function(e)
{if(e!=null)
{YAHOO.util.Event.stopEvent(e);}
if(YAHOO.util.Dom.hasClass('ymp-btn-tray','ymp-btn-tray-open'))
{YAHOO.util.Dom.removeClass('ymp-playlist-arrow','ymp-down-arrow');YAHOO.util.Dom.addClass('ymp-playlist-arrow','ymp-up-arrow');YAHOO.util.Dom.setStyle('ymp-tray','height',parseInt(YAHOO.util.Dom.getStyle('ymp-btn-tray','height'))+'px');YAHOO.util.Dom.addClass('ymp-btn-tray','ymp-btn-tray-closed');YAHOO.util.Dom.removeClass('ymp-btn-tray','ymp-btn-tray-open');YAHOO.util.Dom.setStyle('ymp-tray-list','overflow-y','hidden');var elm=document.getElementById('ymp-btn-tray');if(elm)
{elm.setAttribute("title",YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.OPENPLAYLIST);elm=null;}
this.clearFocusClass();}
else if(YAHOO.util.Dom.hasClass('ymp-btn-tray','ymp-btn-tray-closed'))
{YAHOO.util.Dom.removeClass('ymp-playlist-arrow','ymp-up-arrow');YAHOO.util.Dom.addClass('ymp-playlist-arrow','ymp-down-arrow');YAHOO.util.Dom.removeClass('ymp-btn-tray','ymp-btn-tray-closed');YAHOO.util.Dom.addClass('ymp-btn-tray','ymp-btn-tray-open');var anim=new YAHOO.util.Anim('ymp-tray',{height:{to:204}},.35,YAHOO.util.Easing.easeOut);anim.onComplete.subscribe(this.addTrayScrollBar);anim.animate();var elm=document.getElementById('ymp-btn-tray');if(elm)
{elm.setAttribute("title",YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.CLOSEPLAYLIST);elm=null;}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.addTrayScrollBar=function()
{YAHOO.util.Dom.setStyle('ymp-tray-list','overflow-y','auto');};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.hideTray=function()
{if(YAHOO.util.Dom.hasClass('ymp-btn-tray','ymp-btn-tray-open'))
{this.toggleTray();}
YAHOO.util.Dom.setStyle('ymp-tray','display','none');};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.showTray=function()
{YAHOO.util.Dom.setStyle('ymp-tray','display','block');var trayHeight=parseInt(YAHOO.util.Dom.getStyle('ymp-tray','height'));YAHOO.util.Dom.setStyle('ymp-tray','height','0px');var anim=new YAHOO.util.Anim('ymp-tray',{height:{to:trayHeight}},.15,YAHOO.util.Easing.easeOut);anim.animate();};YAHOO.util.Scroll.prototype.setAttribute=function(attr,val,unit)
{var el=this.getEl();if(attr=='scroll')
{if(unit=="pagescroll")
{window.scrollTo(val[0],val[1]);}
else
{el.scrollLeft=val[0];el.scrollTop=val[1];}}
else
{superclass.setAttribute.call(this,attr,val,unit);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.targetMedia=function(e)
{if(e!=null)
{YAHOO.util.Event.stopEvent(e);}
var anchor=(this.currentMedia.anchor!=null)?this.currentMedia.anchor:this.currentMedia.parent.anchor;var jumpY=200;var currentPageY=Math.max(document.documentElement.scrollTop,document.body.scrollTop);var currentPageHeight=YAHOO.util.Dom.getViewportHeight();var buttonY=Math.floor(YAHOO.util.Dom.getY(anchor));var scrollToY=Math.floor(buttonY-(currentPageHeight/2));if(scrollToY>currentPageHeight)
{}
else if(scrollToY<0)
{scrollToY=0;}
var scrollFromY=currentPageY;if(Math.abs(scrollToY-currentPageY)>jumpY)
{scrollFromY=(scrollToY>currentPageY)?scrollToY-jumpY:scrollToY+jumpY;}
if(scrollFromY>currentPageHeight)
{scrollFromY=currentPageHeight;}
else if(scrollFromY<0)
{scrollFromY=0;}
if(scrollToY!=currentPageY)
{var anim=new YAHOO.util.Scroll(document.body,{scroll:{from:[0,scrollFromY],to:[0,scrollToY],unit:"pagescroll"}},.20,YAHOO.util.Easing.easeOut);anim.animate();}
if(this.pageTargetTimeoutID!=null)
{window.clearTimeout(this.pageTargetTimeoutID);YAHOO.util.Dom.removeClass(this.pageTargetAnchor,'ymp-btn-page-target');this.pageTargetAnchor=null;}
YAHOO.util.Dom.addClass(anchor,'ymp-btn-page-target');this.pageTargetAnchor=anchor;this.pageTargetTimeoutID=window.setTimeout(function(){YAHOO.util.Dom.removeClass(anchor,'ymp-btn-page-target');},5000);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.showErrorStickwall=function(msg)
{};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.hideStickwall=function()
{};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.runCarousel=function(carouselContent)
{if(this.carouselContent!=carouselContent)
{window.clearTimeout(this.carouselTimeoutID);this.carouselContent=carouselContent;this.carouselIndex=0;var allCarouselItems=YAHOO.util.Dom.getElementsByClassName('ymp-carousel-item',null,'ymp-body');YAHOO.util.Dom.setStyle(allCarouselItems,'display','none');YAHOO.util.Dom.setStyle(this.carouselContent[this.carouselIndex].id,'display','block');var timeout=this.carouselContent[this.carouselIndex].time;if(timeout!=0)
{this.carouselTimeoutID=window.setTimeout(this.toString()+".nextCarousel()",timeout);}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.nextCarousel=function()
{YAHOO.util.Dom.setStyle(this.carouselContent[this.carouselIndex].id,'display','none');this.carouselIndex++;if(this.carouselIndex>=this.carouselContent.length)
{this.carouselIndex=0;}
YAHOO.util.Dom.setStyle(this.carouselContent[this.carouselIndex].id,'display','block');var timeout=this.carouselContent[this.carouselIndex].time;if(timeout!=0)
{this.carouselTimeoutID=window.setTimeout(this.toString()+".nextCarousel()",timeout);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onVolumeChange=function(vol)
{var thumbTop=(1-vol)*(this.volBottomConstraint-this.volTopConstraint);YAHOO.util.Dom.setStyle('ymp-volume-thumb','top',thumbTop+"px");YAHOO.util.Dom.setStyle('ymp-volume-cover','height',this.volControlHeight-thumbTop+"px");var elm=document.getElementById("ymp-volume-thumb");if(elm)
{var normalizedVol=parseInt(vol*100);args=[normalizedVol];str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.sprintf(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.VOLUME,args);elm.setAttribute("title",str);}
elm=null;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onPlaylistUpdate=function(playlist)
{if(document.getElementById('ymp-player')!=null)
{var trayList=document.getElementById('ymp-tray-list');if(playlist instanceof YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist)
{for(var i=0;i<this.controller.playlistmanager.playlistArray.length;i++)
{this.currentPlaylist[i]=this.controller.playlistmanager.playlistArray[i];}
var playlistElm=document.getElementById(playlist.id);if(playlist.mediaArray.length>0)
{playlistElm.getElementsByTagName('b')[0].innerHTML=playlist.title;playlistElm.setAttribute("title",'Expand/collapse nested playlist');var rightArrow=YAHOO.util.Dom.getElementsByClassName('ymp-right-arrow',null,playlistElm.parentNode)[0];YAHOO.util.Dom.removeClass(rightArrow,'ymp-right-arrow');YAHOO.util.Dom.addClass(rightArrow,'ymp-down-arrow');var ul=document.createElement('ul');ul.className="ymp-nested-list";for(var i=0,ilen=playlist.mediaArray.length,li;i<ilen;i++)
{li=document.createElement('li');li.innerHTML='<a id="'+playlist.mediaArray[i].id+'" class="ymp-tray-track ymp-color-text-tray" href="#"><b>Loading track ...</b><em></em>'+'</a>';ul.appendChild(li);}
playlistElm.parentNode.appendChild(ul);}
else
{var arrowElm=YAHOO.util.Dom.getElementsByClassName('ymp-right-arrow',null,playlistElm)[0];playlistElm.removeChild(arrowElm);playlistElm.getElementsByTagName('b')[0].innerHTML="Playlist Unavailable";}}
else
{this.playlistArray=playlist;if(playlist&&playlist.length===0)
{this.clearPlaylistTray(trayList);}
trayItems=trayList.getElementsByTagName("a");if(trayItems.length<=0)
{for(var i=0;i<playlist.length;i++)
{this.currentPlaylist[i]=playlist[i];}
var plength=playlist.length;for(var i=0;i<plength;i++)
{var li=this.getLi(playlist[i]);trayList.appendChild(li);}
this.reorderPlaylistTray(trayList);}
else
{this.updatePlaylist(playlist,trayList);}}
var elmTab=document.getElementById("ymp-btn-tray");if(elmTab)
{var aElms=elmTab.getElementsByTagName("em");if(aElms&&aElms.length>0)
{var elmEm=aElms[0];var args=[this.playlistArray.length];elmEm.innerHTML=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.sprintf(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.ui.PLAYLIST_TAB,args);elmEm=null;}
elmTab=null;}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onMediaUpdate=function(media)
{var mediaElm=document.getElementById(media.id);if(document.getElementById('ymp-player')!=null)
{mediaElm.href=media.token;mediaElm.getElementsByTagName('b')[0].innerHTML=media.title;if(media.artistName!=null&&media.artistName!="")
{mediaElm.getElementsByTagName('em')[0].innerHTML="&nbsp;- "+media.artistName;}
if(media==this.currentMedia)
{this.updateMediaMetadata();}}
var anchor=media.anchor;var mediaID=media.id;if(anchor==null)
{anchor=media.parent.anchor;mediaID=media.parent.id;}
var anchor=(media.anchor!=null)?media.anchor:media.parent.anchor;if(!YAHOO.util.Dom.hasClass(anchor,'ymp-btn-page-play'))
{YAHOO.util.Dom.addClass(anchor,'ymp-btn-page-play');YAHOO.util.Dom.addClass(anchor,'ymp-media-'+mediaID);}
if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.playlink===true)
{YAHOO.util.Event.on(anchor,'click',this.onPageMediaClick,this);}
else
{YAHOO.util.Event.on(em,'click',this.onPageMediaClick,this,anchor);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onMediaProgress=function(time)
{var elapsedSeconds=Math.round(time.elapsed/1000);var durationSeconds=Math.round(time.duration/1000);var temp=this.formatTime(elapsedSeconds);if(durationSeconds>0)
{temp+=" / "+this.formatTime(durationSeconds);}
document.getElementById('ymp-meta-progress').innerHTML=temp;temp="";};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.formatTime=function(secs)
{var minutes=Math.floor(secs/60);var seconds=Math.floor(secs%60);var hours="";if(seconds<10)
{seconds="0"+seconds;}
if(minutes>=60)
{hours=Math.floor(minutes/60);hours=hours+":";minutes=Math.floor(minutes%60);if(minutes<10)
{minutes="0"+minutes;}}
return hours+minutes+':'+seconds;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onCurrentMediaSet=function(media)
{if(document.getElementById('ymp-player')!=null&&document.getElementById('ymp-tray')!=null)
{if(this.currentMedia!=null)
{YAHOO.util.Dom.removeClass(this.currentMedia.id,'playing');}
this.currentMedia=media;YAHOO.util.Dom.addClass(this.currentMedia.id,'playing');this.updateMediaMetadata();var errorIconElm=YAHOO.util.Dom.getElementsByClassName('ymp-error-icon',null,this.currentMedia.id)[0];if(errorIconElm!=null)
{this.showCurrentErrorIcon(errorIconElm);}
else
{this.hideCurrentErrorIcon();}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.updateMediaMetadata=function()
{document.getElementById('ymp-meta-progress').innerHTML="";var trackTitleElm=document.getElementById('ymp-meta-track-title');var artistTitleElm=document.getElementById('ymp-meta-artist-title');var albumTitleElm=document.getElementById('ymp-meta-album-title');var albumArtElm=document.getElementById('ymp-meta-image');if(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.BROWSER=='Firefox')
{var win=this.XULWin.cloneNode(true);win.firstChild.setAttribute('value',this.currentMedia.title);trackTitleElm.innerHTML="";trackTitleElm.appendChild(win);win=this.XULWin.cloneNode(true);win.firstChild.setAttribute('value',this.currentMedia.artistName);artistTitleElm.innerHTML="";artistTitleElm.appendChild(win);win=this.XULWin.cloneNode(true);win.firstChild.setAttribute('value',this.currentMedia.albumName);albumTitleElm.innerHTML="";}
else
{trackTitleElm.innerHTML=this.currentMedia.title;artistTitleElm.innerHTML=this.currentMedia.artistName;}
var args=[];var str="";args=[this.currentMedia.title];str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.sprintf(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.NOWPLAYING_TRACK,args);trackTitleElm.title=str;if(this.currentMedia.artistName&&this.currentMedia.artistName.length>0)
{args=[this.currentMedia.artistName];str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.sprintf(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.NOWPLAYING_ARTIST,args);artistTitleElm.title=str;}
else
{artistTitleElm.title="";}
if(this.currentMedia.albumName&&this.currentMedia.albumName.length>0)
{args=[this.currentMedia.albumName];str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.sprintf(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.NOWPLAYING_ALBUM,args);}
else
{albumTitleElm.title="";}
var imgEl=albumArtElm.getElementsByTagName('img')[0];if(typeof(this.currentMedia.albumArt)==="string"&&this.currentMedia.albumArt.length>0)
{imgEl.src=this.currentMedia.albumArt;}
else
{imgEl.src="http://us.i1.yimg.com/us.yimg.com/lib/smb/assets/hosting/yss/extensions/images/b1/mediaplayer-default-album.gif";}
if(this.currentMedia.albumArtType===3){$D.setStyle(imgEl.parentNode,"background","none");}else{$D.setAttribute(imgEl.parentNode,"style","");}
var prefix="http://search.yahoo.com/search?fr=client_ymp&p=";var yMusicPrefix="http://music.yahoo.com/";var temp="";if(this.currentMedia.mimeType===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes.yahoo&&this.currentMedia.yAlbumID&&this.currentMedia.yAlbumID.length>0)
{albumTitleElm.href=yMusicPrefix+"release/"+this.currentMedia.yAlbumID;albumArtElm.href=albumTitleElm.href;}
else if(typeof(this.currentMedia.albumName)==="string"&&this.currentMedia.albumName.length>0)
{temp=this.currentMedia.albumName;if(typeof(this.currentMedia.artistName)==="string")
{temp+=" "+this.currentMedia.artistName;}
temp=encodeURIComponent(temp.replace(/["]/g,''));albumTitleElm.href=prefix+temp;albumArtElm.href=albumTitleElm.href;}
else
{var domainRegex=/^([a-zA-Z]+:\/\/)?([^\/]+)\/.*?$/;if(this.currentMedia.token.match(domainRegex)&&document.domain!==RegExp.$2)
{albumTitleElm.href=albumTitleElm.title=RegExp.$1+RegExp.$2;}
else
{albumTitleElm.href=albumTitleElm.innerHTML=albumTitleElm.title="";}}
if(this.currentMedia==this.playlistArray[0])
{YAHOO.util.Dom.removeClass('ymp-next','ymp-btn-next-disabled');YAHOO.util.Dom.addClass('ymp-prev','ymp-btn-prev-disabled');}
else if(this.currentMedia==this.playlistArray[this.playlistArray.length-1])
{YAHOO.util.Dom.removeClass('ymp-prev','ymp-btn-prev-disabled');YAHOO.util.Dom.addClass('ymp-next','ymp-btn-next-disabled');}
else
{YAHOO.util.Dom.removeClass('ymp-next','ymp-btn-next-disabled');YAHOO.util.Dom.removeClass('ymp-prev','ymp-btn-prev-disabled');}
if(this.currentMedia.mimeType==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes.rhapsody||this.currentMedia.mimeType==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes.yahoo)
{if(typeof(this.currentMedia.buyURL)==="string"&&this.currentMedia.buyURL.length>0)
{YAHOO.util.Dom.setStyle('ymp-btn-buy','display','block');this.updateBuyButtonURL(this.currentMedia);}
else
{YAHOO.util.Dom.setStyle('ymp-btn-buy','display','none');}}
else
{if(typeof(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.amazonid)==="string"&&YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.amazonid.length>0)
{YAHOO.util.Dom.setStyle('ymp-btn-buy','display','block');this.updateBuyButtonURL(this.currentMedia);}
else
{YAHOO.util.Dom.setStyle('ymp-btn-buy','display','none');}}
trackTitleElm=null;artistTitleElm=null;albumTitleElm=null;albumArtElm=null;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.showCurrentErrorIcon=function(errorIconElm)
{var errorID=this.getErrorIDFromClassName(errorIconElm.className);document.getElementById('ymp-current-media-error').className="ymp-error-icon ymp-skin ymp-error-id-"+errorID;YAHOO.util.Dom.setStyle('ymp-current-media-error','display','block');};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.hideCurrentErrorIcon=function()
{YAHOO.util.Dom.setStyle('ymp-current-media-error','display','none');};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.updateBuyButtonURL=function(media)
{var elmBuy=document.getElementById("ymp-btn-buy");if(media.mimeType==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes.rhapsody||media.mimeType==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Parser.MimeTypes.yahoo)
{if(media.buyURL&&media.buyURL.length>0)
{elmBuy.setAttribute("href",media.buyURL);}
else
{}}
else
{var affiliateID=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.amazonid;if(affiliateID==null)
{var randomnumber=Math.floor(Math.random()*2);var yAmazonId=(randomnumber==0)?"thremid-20":"williamkhoes-20";affiliateID=yAmazonId;}
var amazonLink="http://www.amazon.com/gp/search?ie=UTF8&tag="+affiliateID+"&index=blended&linkCode=ur2&camp=1789&creative=9325&keywords=";if(media.artistName!=null&&media.artistName!="")
{amazonLink+=encodeURIComponent(media.artistName);}
if(media.title!=null&&media.title!="")
{amazonLink+=encodeURIComponent(" "+media.title);}
elmBuy.setAttribute("href",amazonLink);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onPlayStateChange=function(o)
{var icon,maxBtn=document.getElementById('ymp-btn-max');if(maxBtn!=null)
{icon=maxBtn.getElementsByTagName('span')[0];}
var metaProgress=document.getElementById('ymp-meta-progress');switch(o.newState)
{case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PLAYING:YAHOO.util.Dom.removeClass('ymp-play','ymp-btn-play');YAHOO.util.Dom.addClass('ymp-play','ymp-btn-pause');var elm=document.getElementById('ymp-play');if(elm)
{elm.setAttribute("title",YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.PAUSE);elm=null;}
var anchor=o.media.anchor;if(anchor==null)
{anchor=o.media.parent.anchor;}
YAHOO.util.Dom.removeClass(anchor,'ymp-btn-page-play');YAHOO.util.Dom.addClass(anchor,'ymp-btn-page-pause');if(document.getElementById('ymp-player')!=null)
{YAHOO.util.Dom.addClass(icon,'ymp-animarrow');}
break;case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED:case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.STOPPED:if(metaProgress!=null)
{metaProgress.innerHTML="";}
case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PAUSED:YAHOO.util.Dom.removeClass('ymp-play','ymp-btn-pause');YAHOO.util.Dom.addClass('ymp-play','ymp-btn-play');var elm=document.getElementById('ymp-play');if(elm)
{elm.setAttribute("title",YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.PLAY);elm=null;}
var anchor=o.media.anchor;if(anchor==null)
{anchor=o.media.parent.anchor;}
YAHOO.util.Dom.removeClass(anchor,'ymp-btn-page-pause');YAHOO.util.Dom.addClass(anchor,'ymp-btn-page-play');YAHOO.util.Dom.removeClass(icon,'ymp-animarrow');break;case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.BUFFERING:if(metaProgress!=null)
{metaProgress.innerHTML=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.ui.BUFFERING;}
if(document.getElementById(o.media.id)!=null)
{var errorIconElm=YAHOO.util.Dom.getElementsByClassName('ymp-error-icon',null,o.media.id)[0];errorIconElm.parentNode.removeChild(errorIconElm);this.hideCurrentErrorIcon();}
break;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onError=function(error)
{document.getElementById('ymp-meta-progress').innerHTML="";if(error.type==YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD)
{var mediaTrayAnchor=document.getElementById(error.media.id);var errorIconElm=document.createElement('span');errorIconElm.className="ymp-error-icon ymp-skin ymp-error-id-"+error.id;mediaTrayAnchor.appendChild(errorIconElm);if(error.media==this.currentMedia)
{this.showCurrentErrorIcon(errorIconElm);}}
else
{this.showErrorStickwall(error.getDisplayMessage());}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.setUpUiStrings=function()
{var str="";var args=[];var elm=document.getElementById("ymp-prev");if(elm)
{str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.PREVIOUS;elm.setAttribute("title",str);}
elm=document.getElementById("ymp-play");if(elm)
{str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.PLAY;elm.setAttribute("title",str);}
elm=document.getElementById("ymp-next");if(elm)
{str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.NEXT;elm.setAttribute("title",str);}
elm=document.getElementById("ymp-volume-thumb");if(elm)
{var vol=parseInt(this.controller.mediaengine.getVolume()*100);args=[vol];str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.sprintf(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.VOLUME,args);elm.setAttribute("title",str);}
elm=document.getElementById("ymp-btn-buy");if(elm)
{str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.BUY;elm.setAttribute("title",str);}
elm=document.getElementById("ymp-btn-tray");if(elm)
{str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.OPENPLAYLIST;elm.setAttribute("title",str);}
elm=document.getElementById("ymp-btn-max");if(elm)
{str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.MAXIMIZE;elm.setAttribute("title",str);}
elm=document.getElementById("ymp-btn-min");if(elm)
{str=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.tooltips.MINIMIZE;elm.setAttribute("title",str);}
elm=null;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.displayRhapsodyStickwall=function()
{};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.onRhapContinueClick=function(e)
{YAHOO.util.Event.stopEvent(e);this.EventManager.onPlayRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.keyHandler=function(e)
{try
{var shift=e.shiftKey;var alt=e.altKey;var ctrl=e.ctrlKey;var key=e.keyCode;var kc=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.keycodes;if(key==kc.KEY_SPACE&&shift===true)
{YAHOO.util.Event.stopEvent(e);var elm=document.getElementById("ymp-play");if(YAHOO.util.Dom.hasClass(elm,'ymp-btn-pause'))
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.pause();}
else
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.play();}
elm=null;return false;}
if(key==kc.KEY_LEFT&&shift===true)
{YAHOO.util.Event.stopEvent(e);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.previous();return false;}
if(key==kc.KEY_RIGHT&&shift===true)
{YAHOO.util.Event.stopEvent(e);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.next();return false;}
if((key==kc.KEY_UP||key==kc.KEY_DOWN)&&shift===true)
{YAHOO.util.Event.stopEvent(e);var currVol=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.getVolume();if(key==kc.KEY_UP&&currVol<1)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.setVolume(currVol+0.01);}
if(key==kc.KEY_DOWN&&currVol>0)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.setVolume(currVol-0.01);}
return false;}
if(key==kc.KEY_P&&shift===true&&ctrl===true)
{YAHOO.util.Event.stopEvent(e);this.toggleTray();var elm=document.getElementById("ymp-btn-tray");if(elm)
{elm.focus();elm=null;}
return false;}}
catch(err)
{}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.trayKeyHandler=function(e)
{try
{if(YAHOO.util.Dom.hasClass('ymp-btn-tray','ymp-btn-tray-open'))
{var key=e.keyCode;var kc=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.keycodes;if((key===kc.KEY_UP||key===kc.KEY_DOWN)&&this.playlistArray.length>0)
{YAHOO.util.Event.stopEvent(e);var currentID=(e.srcElement)?e.srcElement.id:e.target.id;var trackLink=null;if(currentID==="ymp-btn-tray")
{trackLink=document.getElementById(this.playlistArray[0].id);}
else
{for(var i=0;i<(this.playlistArray.length);i++)
{if(this.playlistArray[i].id==currentID)
{if(key===kc.KEY_DOWN&&i<(this.playlistArray.length-1))
{trackLink=document.getElementById(this.playlistArray[i+1].id);break;}
else if(key===kc.KEY_UP&&i>0)
{trackLink=document.getElementById(this.playlistArray[i-1].id);break;}}}}
if(trackLink)
{this.clearFocusClass(trackLink);trackLink.focus();trackLink=null;}
return false;}}}
catch(err)
{}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.trayMouseOverHandler=function(e)
{this.clearFocusClass();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.clearFocusClass=function(objLinkNoClear)
{for(var i=0,len=this.playlistArray.length;i<len;i++)
{link=document.getElementById(this.playlistArray[i].id);if(objLinkNoClear&&(link===objLinkNoClear))
{YAHOO.util.Dom.addClass(objLinkNoClear,'ymp-tray-track-focus');}
else
{YAHOO.util.Dom.removeClass(link,'ymp-tray-track-focus');}
link=null;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.clearPlaylistTray=function(trayList)
{var listItems=trayList.getElementsByTagName("a");while(listItems.length>0)
{YAHOO.util.Dom.removeClass(this.controller.playlistmanager.getMediaById(listItems[0].id).anchor,'ymp-btn-page-play');trayList.removeChild(listItems[0].parentNode);listItems=trayList.getElementsByTagName("a");}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.reorderTraylist=function(trayList)
{trayItems=trayList.getElementsByTagName("a");var trayItemsLen=trayItems.length;var j=1;for(var i=0;i<trayItemsLen;i++)
{var temp=YAHOO.util.Dom.getElementsByClassName("ymp-list-numbering",null,trayItems[i]);if(temp.length>0)
{temp[0].innerHTML=j;j++;}}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.updatePlaylist=function(playlist,trayList)
{var len1=playlist.length;var li,listItem
for(var i=0;i<len1;i++)
{if(!this.currentPlaylist[i])
{li=this.getLi(playlist[i]);trayList.appendChild(li);this.currentPlaylist[i]=playlist[i];}
else if(this.currentPlaylist[i]==playlist[i])
{continue;}
else
{if(i==0)
{li=this.getLi(playlist[i]);listItem=YAHOO.util.Dom.getChildren(trayList)[0];YAHOO.util.Dom.insertBefore(li,listItem);this.currentPlaylist.splice(i,0,playlist[i]);}
else
{li=this.getLi(playlist[i]);listItem=document.getElementById(playlist[i-1].id).parentNode;YAHOO.util.Dom.insertAfter(li,listItem);this.currentPlaylist.splice(i,0,playlist[i]);}}}
this.reorderPlaylistTray(trayList);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.getLi=function(mediaObject)
{var li=document.createElement('li');if(mediaObject instanceof YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Playlist)
{li.innerHTML='<a id="'+mediaObject.id+'" class="ymp-tray-playlist ymp-color-text-tray" href="#"><span class="ymp-numbering"></span>. <b>Loading playlist ...</b><span class="ymp-skin ymp-right-arrow"></span>'+'</a>';}
else
{li.innerHTML='<a id="'+mediaObject.id+'" class="ymp-tray-track ymp-color-text-tray" href="#"><span class="ymp-numbering"></span>. <b>Loading track ...</b><em></em>'+'</a>';}
return li;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.reorderPlaylistTray=function(trayList)
{var listItems=YAHOO.util.Dom.getElementsByClassName("ymp-numbering","span",trayList);var len=listItems.length;for(var i=0;i<len;i++)
{listItems[i].innerHTML=i+1;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.showSecretMsg=function(e)
{if(e.button&&e.button==2)
{var elm=document.getElementById("ymp-secret-bubble");if(elm)
{var pos=[YAHOO.util.Event.getPageX(e),YAHOO.util.Event.getPageY(e)];YAHOO.util.Dom.setStyle(elm,'display','block');YAHOO.util.Dom.setXY(elm,[pos[0]+13,pos[1]-elm.offsetHeight-23]);elm=null;}
YAHOO.util.Event.stopEvent(e);return false;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.prototype.hideSecretMsg=function(e)
{var elm=document.getElementById("ymp-secret-bubble");if(elm)
{YAHOO.util.Dom.setStyle(elm,'display','none');elm=null;}};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ViewMarkup={body:'\
  <div id="ymp-body" class="ymp-skin">\
   <a id="ymp-btn-max" href="#"><span class="ymp-skin" title="Maximize the player"></span></a>\
   <div id="ymp-yahoo-logo" class="ymp-skin" oncontextmenu="return false;"></div>\
   <div id="ymp-control" class="ymp-skin">\
    <h3>'+YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.ui.HDR_CONTROLS+'</h3>\
    <a id="ymp-prev" class="ymp-btn-prev ymp-skin" href="#" title="Previous track">Previous</a>\
    <a id="ymp-play" class="ymp-btn-play ymp-skin" href="#" title="Play/pause track">Play</a>\
    <a id="ymp-next" class="ymp-btn-next ymp-skin" href="#" title="Next track">Next</a>\
   </div>\
   <div id="ymp-volume" class="ymp-skin">\
    <div id="ymp-volume-cover"><span class="ymp-skin"></span></div>\
    <a id="ymp-volume-thumb" class="ymp-skin" href="#" title="Adjust volume">Vol</a>\
   </div>\
   <div id="ymp-meta" class="ymp-skin">\
    <div id="ymp-stickwall">\
     <div class="ymp-stickwall-body1"></div>\
     <div class="ymp-stickwall-body2"></div>\
     <div class="ymp-stickwall-body3"></div>\
     <div class="ymp-stickwall-body4"></div>\
     <div class="ymp-stickwall-body5"></div>\
     <div class="ymp-stickwall-gradient ymp-skin"></div>\
     <div id="ymp-rhap-stickwall">\
<!--      <a class="ymp-rhap-powered" href="#">powered by Rhapsody</a>\
      <h2>Keep the music going</h2>\
      <div id="ymp-rhap-stickwall-action">\
       <a id="ymp-rhap-continue" href="#" class="ymp-btn-alt ymp-skin">Continue enjoying the music<em class="ymp-skin"></em></a>\
       <a href="http://offer.rhapsody.com/yahooplayer/?ocode=yahooplayer&pcode='+YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.rhappcode+'&cpath=unlplaylink&rsrc='+((YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.ypartner&&YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.ypartner.length>0)?YAHOO.Smb.Asteroids.Extensions.MediaPlayer.YMPParams.ypartner:'yahoo')+'" target="_blank" class="ymp-btn-alt ymp-skin">Get Rhapsody Unlimited Now<em class="ymp-skin"></em></a>\
      </div>-->\
       </div>\
     <div id="ymp-error-stickwall">\
<!--      <h2><span class="ymp-skin"></span><span id="ymp-critical-error-msg"></span></h2>-->\
       </div>\
    </div>\
    <span id="ymp-meta-image" href="#"><img src="img/mediaplayer-default-album.jpg" width="46" height="46"/></span>\
    <table id="ymp-meta-top" cellspacing="0" cellpadding="0" border="0">\
     <tr>\
      <td width="100%"><div class="ymp-meta-box"><span id="ymp-meta-track-title" class="ymp-color-text-main" href="#" target="_blank"></span><span id="ymp-meta-artist-title" class="ymp-color-text-main" href="#" target="_blank"></span>&nbsp;</div></td>\
      <td><a id="ymp-current-media-error" class="ymp-error-icon ymp-skin" href="#" style="display:none;">Error</a></td>\
      <td>\
       <div class="ymp-meta-box">\
       </div>\
      </td>\
     </tr>\
    </table>\
    <table id="ymp-meta-bottom" cellspacing="0" cellpadding="0" border="0">\
     <tr>\
      <td width="100%"><div class="ymp-meta-box"><a id="ymp-meta-album-title" class="ymp-color-text-main" href="#" target="_blank"></a>&nbsp;</div></td>\
      <td><div id="ymp-meta-progress" class="ymp-color-text-main"></div></td>\
      <td>\
       <a id="ymp-btn-buy" class="ymp-btn ymp-skin" href="#" target="_blank" title="Buy track">\
        <span class="ymp-skin ymp-icon-buy"></span>\
        <em class="ymp-skin"></em>\
       </a>\
      </td>\
      <td>\
      </td>\
     </tr>\
    </table>\
   </div>\
<!--\
   <a id="ymp-btn-close" href="#" class="ymp-skin" title="Close the player"></a>\
   <a id="ymp-btn-pop" href="#" class="ymp-skin" title="Continue playback in a separate window"></a>\
-->\
   <a id="ymp-btn-min" class="ymp-skin" href="#" title="Minimize the player"></a>\
   <div id="ymp-body-base">\
    <div id="ymp-body-strip" class="ymp-color-main"></div>\
    <div id="ymp-body-cap">\
     <div class="ymp-color-main ymp-pix-dark ymp-pix-tr1"></div>\
              <div class="ymp-color-main ymp-pix-light ymp-pix-tr2"></div>\
              <div class="ymp-color-main ymp-pix-light ymp-pix-tr3"></div>\
              <div class="ymp-color-main ymp-pix-dark ymp-pix-tr4"></div>\
     <div class="ymp-color-main ymp-cap-body1"></div>\
     <div class="ymp-color-main ymp-cap-body2"></div>\
     <div class="ymp-color-main ymp-pix-dark ymp-pix-br1"></div>\
              <div class="ymp-color-main ymp-pix-light ymp-pix-br2"></div>\
              <div class="ymp-color-main ymp-pix-light ymp-pix-br3"></div>\
              <div class="ymp-color-main ymp-pix-dark ymp-pix-br4"></div>\
    </div>\
   </div>\
  </div>\
  <form id="ymwp-contplay-form" name="contplayform" action="" method="post" target="ymediaplayer">\
   <input name="token" type="hidden" value="0"/>\
   <input name="seek" type="hidden" value="0"/>\
   <input name="vol" type="hidden" value="0"/>\
   <input name="trackhtml" type="hidden" value=""/>\
  </form>\
 ',tray:'\
 <div id="ymp-tray-body" class="ymp-skin">\
  <a id="ymp-btn-tray" class="ymp-btn-tray-closed" href="#" title="Open/close the Playlist tray">\
   <span class="ymp-color-tray ymp-pix-dark ymp-pix-tl1"></span>\
            <span class="ymp-color-tray ymp-pix-light ymp-pix-tl2"></span>\
           <span class="ymp-color-tray ymp-pix-light ymp-pix-tl3"></span>\
           <span class="ymp-color-tray ymp-pix-dark ymp-pix-tl4"></span>\
   <span class="ymp-color-tray ymp-btn-tray-body1"></span>\
   <span class="ymp-color-tray ymp-btn-tray-body2"></span>\
   <span class="ymp-color-tray ymp-btn-tray-body3"></span>\
   <span class="ymp-color-tray ymp-btn-tray-body4"></span>\
   <span class="ymp-color-tray ymp-pix-dark ymp-pix-tr1"></span>\
            <span class="ymp-color-tray ymp-pix-light ymp-pix-tr2"></span>\
            <span class="ymp-color-tray ymp-pix-light ymp-pix-tr3"></span>\
            <span class="ymp-color-tray ymp-pix-dark ymp-pix-tr4"></span>\
            <span class="ymp-color-tray ymp-pix-dark ymp-pix-bl"></span>\
   <span id="ymp-playlist-arrow" class="ymp-skin ymp-up-arrow"></span>\
   <em class="ymp-color-tray ymp-color-text-tray">Playlist</em>\
  </a>\
  <div id="ymp-tray-top">\
   <span class="ymp-color-tray ymp-pix-dark ymp-pix-tl1"></span>\
            <span class="ymp-color-tray ymp-pix-light ymp-pix-tl2"></span>\
            <span class="ymp-color-tray ymp-pix-light ymp-pix-tl3"></span>\
            <span class="ymp-color-tray ymp-pix-dark ymp-pix-tl4"></span>\
   <span class="ymp-color-tray ymp-tray-body1"></span>\
   <span class="ymp-color-tray ymp-tray-body2"></span>\
   <span class="ymp-color-tray ymp-tray-body3"></span>\
  </div>\
  <h3>'+YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.ui.HDR_PLAYLIST+'</h3>\
  <ul id="ymp-tray-list" class="ymp-color-tray">\
  </ul>\
 </div>\
 '};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.init=function()
{this.controller=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller;YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onPlaylistUpdate=new YAHOO.util.CustomEvent("onPlaylistUpdate",null,false,YAHOO.util.CustomEvent.FLAT);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onProgress=new YAHOO.util.CustomEvent("onProgress",null,false,YAHOO.util.CustomEvent.FLAT);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onTrackStart=new YAHOO.util.CustomEvent("onTrackStart",null,false,YAHOO.util.CustomEvent.FLAT);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onTrackPause=new YAHOO.util.CustomEvent("onTrackPause",null,false,YAHOO.util.CustomEvent.FLAT);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onTrackComplete=new YAHOO.util.CustomEvent("onTrackComplete",null,false,YAHOO.util.CustomEvent.FLAT);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onMediaUpdate=new YAHOO.util.CustomEvent("onMediaUpdate",null,false,YAHOO.util.CustomEvent.FLAT);var subscribeToControllersEvents=['onPlaylistUpdate','onMediaProgress','onPlayStateChange','onMediaUpdate'];this.controller.EventManager.subscribe(this,subscribeToControllersEvents);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onAPIReady.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API';};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.handleEvent=function(evType,args)
{try
{var suffix='Handler';if(typeof(this[evType+suffix])==='function')
{this[evType+suffix](args[0]);}}
catch(ex)
{throw new Error('ERROR in YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.handleEvent(evType:"'+evType+'"). '+ex.message);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onPlaylistUpdateHandler=function(playlistArray)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onPlaylistUpdate.fire(playlistArray);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onMediaUpdateHandler=function(mediaObj)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onMediaUpdate.fire(mediaObj);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onMediaProgressHandler=function(args)
{YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onProgress.fire(args);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onPlayStateChangeHandler=function(args)
{var mo=this.formatMedia(args.media);switch(args.newState)
{case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PLAYING:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onTrackStart.fire({mediaObject:mo});break;case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.PAUSED:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onTrackPause.fire({mediaObject:mo});break;case YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.onTrackComplete.fire({mediaObject:mo});break;default:break;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.getPlaylistCount=function getPlaylistCount()
{try
{return this.controller.playlistmanager.playlistArray.length;}
catch(ex)
{return-1;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.play=function(mediaObj,position)
{this.controller.EventManager.onPlayRequest.fire({media:mediaObj,seek:position});};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.pause=function()
{this.controller.EventManager.onPauseRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.stop=function()
{this.controller.EventManager.onStopRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.previous=function()
{this.controller.EventManager.onPreviousRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.next=function()
{this.controller.EventManager.onNextRequest.fire();};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.getVolume=function()
{var curVol=this.controller.mediaengine.getVolume();if(typeof curVol==="number")
{curVol=parseFloat(curVol.toFixed(2));}
else
{curVol=parseFloat(curVol);curVol=parseFloat(curVol.toFixed(2));}
return curVol;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.setVolume=function(vol)
{if(typeof vol==="number")
{parseFloat(vol=vol.toFixed(2));if(vol>1)
{vol=1;}
if(vol<0)
{vol=0;}}
this.controller.EventManager.onVolumeChangeRequest.fire(vol);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.getTrackPosition=function()
{if(this.controller.mediaengine.currentEngine)
{return this.controller.mediaengine.currentEngine.getElapsed();}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.getTrackDuration=function()
{if(this.controller.mediaengine.currentEngine)
{return this.controller.mediaengine.currentEngine.getDuration();}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.getMetaData=function(index)
{var obj={};if(typeof(index)!=="number")
{obj=this.controller.playlistmanager.playlistArray[this.controller.playlistmanager.currentIndex];}
else
{obj=this.controller.playlistmanager.playlistArray[index];}
obj=this.formatMedia(obj);return obj;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.getPlayerState=function()
{if(this.controller.mediaengine.currentPlayState===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.ENDED)
{return 7;}
else if(this.controller.mediaengine.currentPlayState===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.MediaEngine.PlayState.BUFFERING)
{return 5;}
else
{return(this.controller.mediaengine.currentPlayState);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.getPlayerViewState=function getPlayerViewState()
{return this.controller.view.currentViewState;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.setPlayerViewState=function setPlayerViewState(viewState)
{if(viewState===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.HIDDEN||viewState===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.MIN||viewState===YAHOO.Smb.Asteroids.Extensions.MediaPlayer.View.DisplayState.MAX)
{this.controller.view.resizePlayer(viewState);}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.formatMedia=function(obj)
{if(typeof(obj)==="object"&&obj.token)
{obj.text=this.controller.mediaresolver.parseTextNode(obj.anchor);obj.url=obj.token;obj.albumart=obj.albumArt;obj.artist=obj.artistName;obj.album=obj.albumName;obj.Album={};obj.Album.Release={};obj.Album.Release.Image={};obj.Artist={};obj.Album.Release.DisplayTitle=obj.albumName||"";obj.Album.Release.Image.url=obj.albumArt||"";obj.Artist.name=obj.artistName||"";return obj;}
else
{return null;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API.addTracks=function addTracks(domElem,index,clear)
{var mediaTracks=this.controller.parser.parse(domElem);if(clear===true)
{this.controller.playlistmanager.clear();return this.controller.playlistmanager.add(mediaTracks);}
else
{if(typeof(index)!=="number")
{return this.controller.playlistmanager.add(mediaTracks);}
else
{return this.controller.playlistmanager.insert(mediaTracks,index);}}};new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.API();YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions={};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types={CRITICAL:0,STANDARD:1};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Codes={1:{logMessage:"Could not find the media file",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD,playback:true},2:{logMessage:"Multiple playback errors",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.CRITICAL,playback:true},3:{logMessage:"Generic playback error",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD,playback:true},4:{logMessage:"Unable to retrieve playlist",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD},5:{logMessage:"Empty playlist",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD},6:{logMessage:"Media download error",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD,playback:true},7:{logMessage:"Connection error",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD,playback:true},8:{logMessage:"DRM error",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD,playback:true},9:{logMessage:"WMP plugin for Firefox missing",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD,playback:true},10:{logMessage:"Rhapsody metadata unavailable.",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD},11:{logMessage:"Playback timed out.",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD,playback:true},12:{logMessage:"Yahoo metadata unavailable.",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD},13:{logMessage:"Rhapsody login failure",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD},14:{logMessage:"Rhapsody engine not initialized",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD,playback:true},15:{logMessage:"Rhapsody, invalid user token, need to re-sign in",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD},16:{logMessage:"Rhapsody, access denied",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD},17:{logMessage:"Rhapsody, invalid Request",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD},18:{logMessage:"Rhapsody, request for user property that is not available",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD},19:{logMessage:"Rhapsody, login from multiple locations",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD},20:{logMessage:"Rhapsody, user outside US",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD,playback:true},21:{logMessage:"No streaming rights.",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD,playback:true},22:{logMessage:"Invalid Seek Operation",log:true,display:true,type:YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Types.STANDARD}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorCollection=[];YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error=function(errorCode,args)
{this.code=errorCode;this.id=Number.GUID(Math.getRnd(0,1000));var errorDefinition=YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorDefinitions.Codes[errorCode];if(typeof(errorDefinition)==="object")
{for(var prop in errorDefinition)
{this[prop]=errorDefinition[prop];}}
this.media=null;this.displayMessageArgs=null;if(args&&args.displayMessageArgs)
{this.displayMessageArgs=args.displayMessageArgs;}
YAHOO.Smb.Asteroids.Extensions.MediaPlayer.ErrorCollection[this.id]=this;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.PlaylistManager.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error';};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Error.prototype.getDisplayMessage=function()
{return YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Util.sprintf(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.DisplayStrings.errors[this.code],this.displayMessageArgs);};YAHOO.namespace('YAHOO.Smb.Asteroids.Extensions.MediaPlayer');YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Logger=function media(controller)
{try
{var subscribeToControllersEvents=['onLogRequest'];YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Logger.superclass.constructor.call(this,controller,subscribeToControllersEvents);this.EventManager.addEvents([]);this.initController(controller);this.controller=this.getController();this.logService="http://mediaplayer.yahoo.com/services/logger.php?data=";this.errorData="Error_";this.playData="Rhapsody_Play_Request";this.imgElement=null;}
catch(ex)
{}};YAHOO.lang.extend(YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Logger,YAHOO.Smb.Asteroids.Extensions.MediaPlayer.BaseObject);YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Logger.prototype.refByName='logger';YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Logger.prototype.toString=function()
{return'YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.'+this.refByName;};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Logger.prototype.onLogRequest=function onLogRequest(eventObj)
{try
{}
catch(ex)
{}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Logger.prototype.logError=function logError(errorObj)
{if(errorObj.media&&errorObj.media.mimeType=="audio/rhapsody")
{var code=errorObj.code;var data=this.errorData+errorObj.code+" "+errorObj.logMessage;if(this.imgElement===null)
{this.imgElement=document.createElement("img");}
this.imgElement.src=this.logService+data;}};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Logger.prototype.logPlay=function logPlay(trackid)
{var data=this.playData+" "+trackid;if(this.imgElement===null)
{this.imgElement=document.createElement("img");}
this.imgElement.setAttribute("src",this.logService+data);};YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller=new YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller();YAHOO.Smb.Asteroids.Extensions.MediaPlayer.Controller.init();(function(){YAHOO.util.Config=function(D){if(D){this.init(D);}};var B=YAHOO.lang,C=YAHOO.util.CustomEvent,A=YAHOO.util.Config;A.CONFIG_CHANGED_EVENT="configChanged";A.BOOLEAN_TYPE="boolean";A.prototype={owner:null,queueInProgress:false,config:null,initialConfig:null,eventQueue:null,configChangedEvent:null,init:function(D){this.owner=D;this.configChangedEvent=this.createEvent(A.CONFIG_CHANGED_EVENT);this.configChangedEvent.signature=C.LIST;this.queueInProgress=false;this.config={};this.initialConfig={};this.eventQueue=[];},checkBoolean:function(D){return(typeof D==A.BOOLEAN_TYPE);},checkNumber:function(D){return(!isNaN(D));},fireEvent:function(D,F){var E=this.config[D];if(E&&E.event){E.event.fire(F);}},addProperty:function(E,D){E=E.toLowerCase();this.config[E]=D;D.event=this.createEvent(E,{scope:this.owner});D.event.signature=C.LIST;D.key=E;if(D.handler){D.event.subscribe(D.handler,this.owner);}this.setProperty(E,D.value,true);if(!D.suppressEvent){this.queueProperty(E,D.value);}},getConfig:function(){var D={},F=this.config,G,E;for(G in F){if(B.hasOwnProperty(F,G)){E=F[G];if(E&&E.event){D[G]=E.value;}}}return D;},getProperty:function(D){var E=this.config[D.toLowerCase()];if(E&&E.event){return E.value;}else{return undefined;}},resetProperty:function(D){D=D.toLowerCase();var E=this.config[D];if(E&&E.event){if(this.initialConfig[D]&&!B.isUndefined(this.initialConfig[D])){this.setProperty(D,this.initialConfig[D]);return true;}}else{return false;}},setProperty:function(E,G,D){var F;E=E.toLowerCase();if(this.queueInProgress&&!D){this.queueProperty(E,G);return true;}else{F=this.config[E];if(F&&F.event){if(F.validator&&!F.validator(G)){return false;}else{F.value=G;if(!D){this.fireEvent(E,G);this.configChangedEvent.fire([E,G]);}return true;}}else{return false;}}},queueProperty:function(S,P){S=S.toLowerCase();var R=this.config[S],K=false,J,G,H,I,O,Q,F,M,N,D,L,T,E;if(R&&R.event){if(!B.isUndefined(P)&&R.validator&&!R.validator(P)){return false;}else{if(!B.isUndefined(P)){R.value=P;}else{P=R.value;}K=false;J=this.eventQueue.length;for(L=0;L<J;L++){G=this.eventQueue[L];if(G){H=G[0];I=G[1];if(H==S){this.eventQueue[L]=null;this.eventQueue.push([S,(!B.isUndefined(P)?P:I)]);K=true;break;}}}if(!K&&!B.isUndefined(P)){this.eventQueue.push([S,P]);}}if(R.supercedes){O=R.supercedes.length;for(T=0;T<O;T++){Q=R.supercedes[T];F=this.eventQueue.length;for(E=0;E<F;E++){M=this.eventQueue[E];if(M){N=M[0];D=M[1];if(N==Q.toLowerCase()){this.eventQueue.push([N,D]);this.eventQueue[E]=null;break;}}}}}return true;}else{return false;}},refireEvent:function(D){D=D.toLowerCase();var E=this.config[D];if(E&&E.event&&!B.isUndefined(E.value)){if(this.queueInProgress){this.queueProperty(D);}else{this.fireEvent(D,E.value);}}},applyConfig:function(D,G){var F,E;if(G){E={};for(F in D){if(B.hasOwnProperty(D,F)){E[F.toLowerCase()]=D[F];}}this.initialConfig=E;}for(F in D){if(B.hasOwnProperty(D,F)){this.queueProperty(F,D[F]);}}},refresh:function(){var D;for(D in this.config){if(B.hasOwnProperty(this.config,D)){this.refireEvent(D);}}},fireQueue:function(){var E,H,D,G,F;this.queueInProgress=true;for(E=0;E<this.eventQueue.length;E++){H=this.eventQueue[E];if(H){D=H[0];G=H[1];F=this.config[D];F.value=G;this.eventQueue[E]=null;this.fireEvent(D,G);}}this.queueInProgress=false;this.eventQueue=[];},subscribeToConfigEvent:function(E,F,H,D){var G=this.config[E.toLowerCase()];if(G&&G.event){if(!A.alreadySubscribed(G.event,F,H)){G.event.subscribe(F,H,D);}return true;}else{return false;}},unsubscribeFromConfigEvent:function(D,E,G){var F=this.config[D.toLowerCase()];if(F&&F.event){return F.event.unsubscribe(E,G);}else{return false;}},toString:function(){var D="Config";if(this.owner){D+=" ["+this.owner.toString()+"]";}return D;},outputEventQueue:function(){var D="",G,E,F=this.eventQueue.length;for(E=0;E<F;E++){G=this.eventQueue[E];if(G){D+=G[0]+"="+G[1]+", ";}}return D;},destroy:function(){var E=this.config,D,F;for(D in E){if(B.hasOwnProperty(E,D)){F=E[D];F.event.unsubscribeAll();F.event=null;}}this.configChangedEvent.unsubscribeAll();this.configChangedEvent=null;this.owner=null;this.config=null;this.initialConfig=null;this.eventQueue=null;}};A.alreadySubscribed=function(E,H,I){var F=E.subscribers.length,D,G;if(F>0){G=F-1;do{D=E.subscribers[G];if(D&&D.obj==I&&D.fn==H){return true;}}while(G--);}return false;};YAHOO.lang.augmentProto(A,YAHOO.util.EventProvider);}());YAHOO.widget.DateMath={DAY:"D",WEEK:"W",YEAR:"Y",MONTH:"M",ONE_DAY_MS:1000*60*60*24,WEEK_ONE_JAN_DATE:1,add:function(A,D,C){var F=new Date(A.getTime());switch(D){case this.MONTH:var E=A.getMonth()+C;var B=0;if(E<0){while(E<0){E+=12;B-=1;}}else{if(E>11){while(E>11){E-=12;B+=1;}}}F.setMonth(E);F.setFullYear(A.getFullYear()+B);break;case this.DAY:this._addDays(F,C);break;case this.YEAR:F.setFullYear(A.getFullYear()+C);break;case this.WEEK:this._addDays(F,(C*7));break;}return F;},_addDays:function(D,C){if(YAHOO.env.ua.webkit&&YAHOO.env.ua.webkit<420){if(C<0){for(var B=-128;C<B;C-=B){D.setDate(D.getDate()+B);}}else{for(var A=96;C>A;C-=A){D.setDate(D.getDate()+A);}}}D.setDate(D.getDate()+C);},subtract:function(A,C,B){return this.add(A,C,(B*-1));},before:function(C,B){var A=B.getTime();if(C.getTime()<A){return true;}else{return false;}},after:function(C,B){var A=B.getTime();if(C.getTime()>A){return true;}else{return false;}},between:function(B,A,C){if(this.after(B,A)&&this.before(B,C)){return true;}else{return false;}},getJan1:function(A){return this.getDate(A,0,1);},getDayOffset:function(B,D){var C=this.getJan1(D);var A=Math.ceil((B.getTime()-C.getTime())/this.ONE_DAY_MS);return A;},getWeekNumber:function(E,B,H){B=B||0;H=H||this.WEEK_ONE_JAN_DATE;var I=this.clearTime(E),M,N;if(I.getDay()===B){M=I;}else{M=this.getFirstDayOfWeek(I,B);}var J=M.getFullYear(),C=M.getTime();N=new Date(M.getTime()+6*this.ONE_DAY_MS);var G;if(J!==N.getFullYear()&&N.getDate()>=H){G=1;}else{var F=this.clearTime(this.getDate(J,0,H)),A=this.getFirstDayOfWeek(F,B);var K=Math.round((I.getTime()-A.getTime())/this.ONE_DAY_MS);var L=K%7;var D=(K-L)/7;G=D+1;}return G;},getFirstDayOfWeek:function(D,A){A=A||0;var B=D.getDay(),C=(B-A+7)%7;return this.subtract(D,this.DAY,C);},isYearOverlapWeek:function(A){var C=false;var B=this.add(A,this.DAY,6);if(B.getFullYear()!=A.getFullYear()){C=true;}return C;},isMonthOverlapWeek:function(A){var C=false;var B=this.add(A,this.DAY,6);if(B.getMonth()!=A.getMonth()){C=true;}return C;},findMonthStart:function(A){var B=this.getDate(A.getFullYear(),A.getMonth(),1);return B;},findMonthEnd:function(B){var D=this.findMonthStart(B);var C=this.add(D,this.MONTH,1);var A=this.subtract(C,this.DAY,1);return A;},clearTime:function(A){A.setHours(12,0,0,0);return A;},getDate:function(D,A,C){var B=null;if(YAHOO.lang.isUndefined(C)){C=1;}if(D>=100){B=new Date(D,A,C);}else{B=new Date();B.setFullYear(D);B.setMonth(A);B.setDate(C);B.setHours(0,0,0,0);}return B;}};(function(){var C=YAHOO.util.Dom,A=YAHOO.util.Event,E=YAHOO.lang,D=YAHOO.widget.DateMath;function F(I,G,H){this.init.apply(this,arguments);}F.IMG_ROOT=null;F.DATE="D";F.MONTH_DAY="MD";F.WEEKDAY="WD";F.RANGE="R";F.MONTH="M";F.DISPLAY_DAYS=42;F.STOP_RENDER="S";F.SHORT="short";F.LONG="long";F.MEDIUM="medium";F.ONE_CHAR="1char";F._DEFAULT_CONFIG={PAGEDATE:{key:"pagedate",value:null},SELECTED:{key:"selected",value:null},TITLE:{key:"title",value:""},CLOSE:{key:"close",value:false},IFRAME:{key:"iframe",value:(YAHOO.env.ua.ie&&YAHOO.env.ua.ie<=6)?true:false},MINDATE:{key:"mindate",value:null},MAXDATE:{key:"maxdate",value:null},MULTI_SELECT:{key:"multi_select",value:false},START_WEEKDAY:{key:"start_weekday",value:0},SHOW_WEEKDAYS:{key:"show_weekdays",value:true},SHOW_WEEK_HEADER:{key:"show_week_header",value:false},SHOW_WEEK_FOOTER:{key:"show_week_footer",value:false},HIDE_BLANK_WEEKS:{key:"hide_blank_weeks",value:false},NAV_ARROW_LEFT:{key:"nav_arrow_left",value:null},NAV_ARROW_RIGHT:{key:"nav_arrow_right",value:null},MONTHS_SHORT:{key:"months_short",value:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},MONTHS_LONG:{key:"months_long",value:["January","February","March","April","May","June","July","August","September","October","November","December"]},WEEKDAYS_1CHAR:{key:"weekdays_1char",value:["S","M","T","W","T","F","S"]},WEEKDAYS_SHORT:{key:"weekdays_short",value:["Su","Mo","Tu","We","Th","Fr","Sa"]},WEEKDAYS_MEDIUM:{key:"weekdays_medium",value:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},WEEKDAYS_LONG:{key:"weekdays_long",value:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},LOCALE_MONTHS:{key:"locale_months",value:"long"},LOCALE_WEEKDAYS:{key:"locale_weekdays",value:"short"},DATE_DELIMITER:{key:"date_delimiter",value:","},DATE_FIELD_DELIMITER:{key:"date_field_delimiter",value:"/"},DATE_RANGE_DELIMITER:{key:"date_range_delimiter",value:"-"},MY_MONTH_POSITION:{key:"my_month_position",value:1},MY_YEAR_POSITION:{key:"my_year_position",value:2},MD_MONTH_POSITION:{key:"md_month_position",value:1},MD_DAY_POSITION:{key:"md_day_position",value:2},MDY_MONTH_POSITION:{key:"mdy_month_position",value:1},MDY_DAY_POSITION:{key:"mdy_day_position",value:2},MDY_YEAR_POSITION:{key:"mdy_year_position",value:3},MY_LABEL_MONTH_POSITION:{key:"my_label_month_position",value:1},MY_LABEL_YEAR_POSITION:{key:"my_label_year_position",value:2},MY_LABEL_MONTH_SUFFIX:{key:"my_label_month_suffix",value:" "},MY_LABEL_YEAR_SUFFIX:{key:"my_label_year_suffix",value:""},NAV:{key:"navigator",value:null},STRINGS:{key:"strings",value:{previousMonth:"Previous Month",nextMonth:"Next Month",close:"Close"},supercedes:["close","title"]}};var B=F._DEFAULT_CONFIG;F._EVENT_TYPES={BEFORE_SELECT:"beforeSelect",SELECT:"select",BEFORE_DESELECT:"beforeDeselect",DESELECT:"deselect",CHANGE_PAGE:"changePage",BEFORE_RENDER:"beforeRender",RENDER:"render",BEFORE_DESTROY:"beforeDestroy",DESTROY:"destroy",RESET:"reset",CLEAR:"clear",BEFORE_HIDE:"beforeHide",HIDE:"hide",BEFORE_SHOW:"beforeShow",SHOW:"show",BEFORE_HIDE_NAV:"beforeHideNav",HIDE_NAV:"hideNav",BEFORE_SHOW_NAV:"beforeShowNav",SHOW_NAV:"showNav",BEFORE_RENDER_NAV:"beforeRenderNav",RENDER_NAV:"renderNav"};F._STYLES={CSS_ROW_HEADER:"calrowhead",CSS_ROW_FOOTER:"calrowfoot",CSS_CELL:"calcell",CSS_CELL_SELECTOR:"selector",CSS_CELL_SELECTED:"selected",CSS_CELL_SELECTABLE:"selectable",CSS_CELL_RESTRICTED:"restricted",CSS_CELL_TODAY:"today",CSS_CELL_OOM:"oom",CSS_CELL_OOB:"previous",CSS_HEADER:"calheader",CSS_HEADER_TEXT:"calhead",CSS_BODY:"calbody",CSS_WEEKDAY_CELL:"calweekdaycell",CSS_WEEKDAY_ROW:"calweekdayrow",CSS_FOOTER:"calfoot",CSS_CALENDAR:"yui-calendar",CSS_SINGLE:"single",CSS_CONTAINER:"yui-calcontainer",CSS_NAV_LEFT:"calnavleft",CSS_NAV_RIGHT:"calnavright",CSS_NAV:"calnav",CSS_CLOSE:"calclose",CSS_CELL_TOP:"calcelltop",CSS_CELL_LEFT:"calcellleft",CSS_CELL_RIGHT:"calcellright",CSS_CELL_BOTTOM:"calcellbottom",CSS_CELL_HOVER:"calcellhover",CSS_CELL_HIGHLIGHT1:"highlight1",CSS_CELL_HIGHLIGHT2:"highlight2",CSS_CELL_HIGHLIGHT3:"highlight3",CSS_CELL_HIGHLIGHT4:"highlight4"};F.prototype={Config:null,parent:null,index:-1,cells:null,cellDates:null,id:null,containerId:null,oDomContainer:null,today:null,renderStack:null,_renderStack:null,oNavigator:null,_selectedDates:null,domEventMap:null,_parseArgs:function(H){var G={id:null,container:null,config:null};if(H&&H.length&&H.length>0){switch(H.length){case 1:G.id=null;G.container=H[0];G.config=null;break;case 2:if(E.isObject(H[1])&&!H[1].tagName&&!(H[1]instanceof String)){G.id=null;G.container=H[0];G.config=H[1];}else{G.id=H[0];G.container=H[1];G.config=null;}break;default:G.id=H[0];G.container=H[1];G.config=H[2];break;}}else{}return G;},init:function(J,H,I){var G=this._parseArgs(arguments);J=G.id;H=G.container;I=G.config;this.oDomContainer=C.get(H);if(!this.oDomContainer.id){this.oDomContainer.id=C.generateId();}if(!J){J=this.oDomContainer.id+"_t";}this.id=J;this.containerId=this.oDomContainer.id;this.initEvents();this.today=new Date();D.clearTime(this.today);this.cfg=new YAHOO.util.Config(this);this.Options={};this.Locale={};this.initStyles();C.addClass(this.oDomContainer,this.Style.CSS_CONTAINER);C.addClass(this.oDomContainer,this.Style.CSS_SINGLE);this.cellDates=[];this.cells=[];this.renderStack=[];this._renderStack=[];this.setupConfig();if(I){this.cfg.applyConfig(I,true);}this.cfg.fireQueue();},configIframe:function(I,H,J){var G=H[0];if(!this.parent){if(C.inDocument(this.oDomContainer)){if(G){var K=C.getStyle(this.oDomContainer,"position");if(K=="absolute"||K=="relative"){if(!C.inDocument(this.iframe)){this.iframe=document.createElement("iframe");this.iframe.src="javascript:false;";C.setStyle(this.iframe,"opacity","0");if(YAHOO.env.ua.ie&&YAHOO.env.ua.ie<=6){C.addClass(this.iframe,"fixedsize");}this.oDomContainer.insertBefore(this.iframe,this.oDomContainer.firstChild);}}}else{if(this.iframe){if(this.iframe.parentNode){this.iframe.parentNode.removeChild(this.iframe);}this.iframe=null;}}}}},configTitle:function(H,G,I){var K=G[0];if(K){this.createTitleBar(K);}else{var J=this.cfg.getProperty(B.CLOSE.key);if(!J){this.removeTitleBar();}else{this.createTitleBar("&#160;");}}},configClose:function(H,G,I){var K=G[0],J=this.cfg.getProperty(B.TITLE.key);if(K){if(!J){this.createTitleBar("&#160;");}this.createCloseButton();}else{this.removeCloseButton();if(!J){this.removeTitleBar();}}},initEvents:function(){var G=F._EVENT_TYPES,I=YAHOO.util.CustomEvent,H=this;H.beforeSelectEvent=new I(G.BEFORE_SELECT);H.selectEvent=new I(G.SELECT);H.beforeDeselectEvent=new I(G.BEFORE_DESELECT);H.deselectEvent=new I(G.DESELECT);H.changePageEvent=new I(G.CHANGE_PAGE);H.beforeRenderEvent=new I(G.BEFORE_RENDER);H.renderEvent=new I(G.RENDER);H.beforeDestroyEvent=new I(G.BEFORE_DESTROY);H.destroyEvent=new I(G.DESTROY);H.resetEvent=new I(G.RESET);H.clearEvent=new I(G.CLEAR);H.beforeShowEvent=new I(G.BEFORE_SHOW);H.showEvent=new I(G.SHOW);H.beforeHideEvent=new I(G.BEFORE_HIDE);H.hideEvent=new I(G.HIDE);H.beforeShowNavEvent=new I(G.BEFORE_SHOW_NAV);H.showNavEvent=new I(G.SHOW_NAV);H.beforeHideNavEvent=new I(G.BEFORE_HIDE_NAV);H.hideNavEvent=new I(G.HIDE_NAV);H.beforeRenderNavEvent=new I(G.BEFORE_RENDER_NAV);H.renderNavEvent=new I(G.RENDER_NAV);H.beforeSelectEvent.subscribe(H.onBeforeSelect,this,true);H.selectEvent.subscribe(H.onSelect,this,true);H.beforeDeselectEvent.subscribe(H.onBeforeDeselect,this,true);H.deselectEvent.subscribe(H.onDeselect,this,true);H.changePageEvent.subscribe(H.onChangePage,this,true);H.renderEvent.subscribe(H.onRender,this,true);H.resetEvent.subscribe(H.onReset,this,true);H.clearEvent.subscribe(H.onClear,this,true);},doPreviousMonthNav:function(H,G){A.preventDefault(H);setTimeout(function(){G.previousMonth();var I=C.getElementsByClassName(G.Style.CSS_NAV_LEFT,"a",G.oDomContainer);if(I&&I[0]){try{I[0].focus();}catch(J){}}},0);},doNextMonthNav:function(H,G){A.preventDefault(H);setTimeout(function(){G.nextMonth();var I=C.getElementsByClassName(G.Style.CSS_NAV_RIGHT,"a",G.oDomContainer);if(I&&I[0]){try{I[0].focus();}catch(J){}}},0);},doSelectCell:function(M,G){var R,O,I,L;var N=A.getTarget(M),H=N.tagName.toLowerCase(),K=false;while(H!="td"&&!C.hasClass(N,G.Style.CSS_CELL_SELECTABLE)){if(!K&&H=="a"&&C.hasClass(N,G.Style.CSS_CELL_SELECTOR)){K=true;}N=N.parentNode;H=N.tagName.toLowerCase();if(N==this.oDomContainer||H=="html"){return;}}if(K){A.preventDefault(M);}R=N;if(C.hasClass(R,G.Style.CSS_CELL_SELECTABLE)){L=G.getIndexFromId(R.id);if(L>-1){O=G.cellDates[L];if(O){I=D.getDate(O[0],O[1]-1,O[2]);var Q;if(G.Options.MULTI_SELECT){Q=R.getElementsByTagName("a")[0];if(Q){Q.blur();}var J=G.cellDates[L];var P=G._indexOfSelectedFieldArray(J);if(P>-1){G.deselectCell(L);}else{G.selectCell(L);}}else{Q=R.getElementsByTagName("a")[0];if(Q){Q.blur();}G.selectCell(L);}}}}},doCellMouseOver:function(I,H){var G;if(I){G=A.getTarget(I);}else{G=this;}while(G.tagName&&G.tagName.toLowerCase()!="td"){G=G.parentNode;if(!G.tagName||G.tagName.toLowerCase()=="html"){return;}}if(C.hasClass(G,H.Style.CSS_CELL_SELECTABLE)){C.addClass(G,H.Style.CSS_CELL_HOVER);}},doCellMouseOut:function(I,H){var G;if(I){G=A.getTarget(I);}else{G=this;}while(G.tagName&&G.tagName.toLowerCase()!="td"){G=G.parentNode;if(!G.tagName||G.tagName.toLowerCase()=="html"){return;}}if(C.hasClass(G,H.Style.CSS_CELL_SELECTABLE)){C.removeClass(G,H.Style.CSS_CELL_HOVER);}},setupConfig:function(){var G=this.cfg;G.addProperty(B.PAGEDATE.key,{value:new Date(),handler:this.configPageDate});G.addProperty(B.SELECTED.key,{value:[],handler:this.configSelected});G.addProperty(B.TITLE.key,{value:B.TITLE.value,handler:this.configTitle});G.addProperty(B.CLOSE.key,{value:B.CLOSE.value,handler:this.configClose});G.addProperty(B.IFRAME.key,{value:B.IFRAME.value,handler:this.configIframe,validator:G.checkBoolean});G.addProperty(B.MINDATE.key,{value:B.MINDATE.value,handler:this.configMinDate});G.addProperty(B.MAXDATE.key,{value:B.MAXDATE.value,handler:this.configMaxDate});G.addProperty(B.MULTI_SELECT.key,{value:B.MULTI_SELECT.value,handler:this.configOptions,validator:G.checkBoolean});G.addProperty(B.START_WEEKDAY.key,{value:B.START_WEEKDAY.value,handler:this.configOptions,validator:G.checkNumber});G.addProperty(B.SHOW_WEEKDAYS.key,{value:B.SHOW_WEEKDAYS.value,handler:this.configOptions,validator:G.checkBoolean});G.addProperty(B.SHOW_WEEK_HEADER.key,{value:B.SHOW_WEEK_HEADER.value,handler:this.configOptions,validator:G.checkBoolean});G.addProperty(B.SHOW_WEEK_FOOTER.key,{value:B.SHOW_WEEK_FOOTER.value,handler:this.configOptions,validator:G.checkBoolean});G.addProperty(B.HIDE_BLANK_WEEKS.key,{value:B.HIDE_BLANK_WEEKS.value,handler:this.configOptions,validator:G.checkBoolean});G.addProperty(B.NAV_ARROW_LEFT.key,{value:B.NAV_ARROW_LEFT.value,handler:this.configOptions});G.addProperty(B.NAV_ARROW_RIGHT.key,{value:B.NAV_ARROW_RIGHT.value,handler:this.configOptions});G.addProperty(B.MONTHS_SHORT.key,{value:B.MONTHS_SHORT.value,handler:this.configLocale});G.addProperty(B.MONTHS_LONG.key,{value:B.MONTHS_LONG.value,handler:this.configLocale});G.addProperty(B.WEEKDAYS_1CHAR.key,{value:B.WEEKDAYS_1CHAR.value,handler:this.configLocale});G.addProperty(B.WEEKDAYS_SHORT.key,{value:B.WEEKDAYS_SHORT.value,handler:this.configLocale});G.addProperty(B.WEEKDAYS_MEDIUM.key,{value:B.WEEKDAYS_MEDIUM.value,handler:this.configLocale});G.addProperty(B.WEEKDAYS_LONG.key,{value:B.WEEKDAYS_LONG.value,handler:this.configLocale});var H=function(){G.refireEvent(B.LOCALE_MONTHS.key);G.refireEvent(B.LOCALE_WEEKDAYS.key);};G.subscribeToConfigEvent(B.START_WEEKDAY.key,H,this,true);G.subscribeToConfigEvent(B.MONTHS_SHORT.key,H,this,true);G.subscribeToConfigEvent(B.MONTHS_LONG.key,H,this,true);G.subscribeToConfigEvent(B.WEEKDAYS_1CHAR.key,H,this,true);G.subscribeToConfigEvent(B.WEEKDAYS_SHORT.key,H,this,true);G.subscribeToConfigEvent(B.WEEKDAYS_MEDIUM.key,H,this,true);G.subscribeToConfigEvent(B.WEEKDAYS_LONG.key,H,this,true);G.addProperty(B.LOCALE_MONTHS.key,{value:B.LOCALE_MONTHS.value,handler:this.configLocaleValues});G.addProperty(B.LOCALE_WEEKDAYS.key,{value:B.LOCALE_WEEKDAYS.value,handler:this.configLocaleValues});G.addProperty(B.DATE_DELIMITER.key,{value:B.DATE_DELIMITER.value,handler:this.configLocale});G.addProperty(B.DATE_FIELD_DELIMITER.key,{value:B.DATE_FIELD_DELIMITER.value,handler:this.configLocale});G.addProperty(B.DATE_RANGE_DELIMITER.key,{value:B.DATE_RANGE_DELIMITER.value,handler:this.configLocale});G.addProperty(B.MY_MONTH_POSITION.key,{value:B.MY_MONTH_POSITION.value,handler:this.configLocale,validator:G.checkNumber});G.addProperty(B.MY_YEAR_POSITION.key,{value:B.MY_YEAR_POSITION.value,handler:this.configLocale,validator:G.checkNumber});G.addProperty(B.MD_MONTH_POSITION.key,{value:B.MD_MONTH_POSITION.value,handler:this.configLocale,validator:G.checkNumber});G.addProperty(B.MD_DAY_POSITION.key,{value:B.MD_DAY_POSITION.value,handler:this.configLocale,validator:G.checkNumber});G.addProperty(B.MDY_MONTH_POSITION.key,{value:B.MDY_MONTH_POSITION.value,handler:this.configLocale,validator:G.checkNumber});G.addProperty(B.MDY_DAY_POSITION.key,{value:B.MDY_DAY_POSITION.value,handler:this.configLocale,validator:G.checkNumber});G.addProperty(B.MDY_YEAR_POSITION.key,{value:B.MDY_YEAR_POSITION.value,handler:this.configLocale,validator:G.checkNumber});G.addProperty(B.MY_LABEL_MONTH_POSITION.key,{value:B.MY_LABEL_MONTH_POSITION.value,handler:this.configLocale,validator:G.checkNumber});G.addProperty(B.MY_LABEL_YEAR_POSITION.key,{value:B.MY_LABEL_YEAR_POSITION.value,handler:this.configLocale,validator:G.checkNumber});G.addProperty(B.MY_LABEL_MONTH_SUFFIX.key,{value:B.MY_LABEL_MONTH_SUFFIX.value,handler:this.configLocale});G.addProperty(B.MY_LABEL_YEAR_SUFFIX.key,{value:B.MY_LABEL_YEAR_SUFFIX.value,handler:this.configLocale});G.addProperty(B.NAV.key,{value:B.NAV.value,handler:this.configNavigator});G.addProperty(B.STRINGS.key,{value:B.STRINGS.value,handler:this.configStrings,validator:function(I){return E.isObject(I);},supercedes:B.STRINGS.supercedes});},configStrings:function(H,G,I){var J=E.merge(B.STRINGS.value,G[0]);this.cfg.setProperty(B.STRINGS.key,J,true);},configPageDate:function(H,G,I){this.cfg.setProperty(B.PAGEDATE.key,this._parsePageDate(G[0]),true);},configMinDate:function(H,G,I){var J=G[0];if(E.isString(J)){J=this._parseDate(J);this.cfg.setProperty(B.MINDATE.key,D.getDate(J[0],(J[1]-1),J[2]));}},configMaxDate:function(H,G,I){var J=G[0];if(E.isString(J)){J=this._parseDate(J);this.cfg.setProperty(B.MAXDATE.key,D.getDate(J[0],(J[1]-1),J[2]));}},configSelected:function(I,G,K){var H=G[0],J=B.SELECTED.key;if(H){if(E.isString(H)){this.cfg.setProperty(J,this._parseDates(H),true);}}if(!this._selectedDates){this._selectedDates=this.cfg.getProperty(J);}},configOptions:function(H,G,I){this.Options[H.toUpperCase()]=G[0];},configLocale:function(H,G,I){this.Locale[H.toUpperCase()]=G[0];this.cfg.refireEvent(B.LOCALE_MONTHS.key);this.cfg.refireEvent(B.LOCALE_WEEKDAYS.key);},configLocaleValues:function(J,I,K){J=J.toLowerCase();var M=I[0],H=this.cfg,N=this.Locale;switch(J){case B.LOCALE_MONTHS.key:switch(M){case F.SHORT:N.LOCALE_MONTHS=H.getProperty(B.MONTHS_SHORT.key).concat();break;case F.LONG:N.LOCALE_MONTHS=H.getProperty(B.MONTHS_LONG.key).concat();break;}break;case B.LOCALE_WEEKDAYS.key:switch(M){case F.ONE_CHAR:N.LOCALE_WEEKDAYS=H.getProperty(B.WEEKDAYS_1CHAR.key).concat();break;case F.SHORT:N.LOCALE_WEEKDAYS=H.getProperty(B.WEEKDAYS_SHORT.key).concat();break;case F.MEDIUM:N.LOCALE_WEEKDAYS=H.getProperty(B.WEEKDAYS_MEDIUM.key).concat();break;case F.LONG:N.LOCALE_WEEKDAYS=H.getProperty(B.WEEKDAYS_LONG.key).concat();break;}var L=H.getProperty(B.START_WEEKDAY.key);if(L>0){for(var G=0;G<L;++G){N.LOCALE_WEEKDAYS.push(N.LOCALE_WEEKDAYS.shift());}}break;}},configNavigator:function(H,G,I){var J=G[0];if(YAHOO.widget.CalendarNavigator&&(J===true||E.isObject(J))){if(!this.oNavigator){this.oNavigator=new YAHOO.widget.CalendarNavigator(this);this.beforeRenderEvent.subscribe(function(){if(!this.pages){this.oNavigator.erase();}},this,true);}}else{if(this.oNavigator){this.oNavigator.destroy();this.oNavigator=null;}}},initStyles:function(){var G=F._STYLES;this.Style={CSS_ROW_HEADER:G.CSS_ROW_HEADER,CSS_ROW_FOOTER:G.CSS_ROW_FOOTER,CSS_CELL:G.CSS_CELL,CSS_CELL_SELECTOR:G.CSS_CELL_SELECTOR,CSS_CELL_SELECTED:G.CSS_CELL_SELECTED,CSS_CELL_SELECTABLE:G.CSS_CELL_SELECTABLE,CSS_CELL_RESTRICTED:G.CSS_CELL_RESTRICTED,CSS_CELL_TODAY:G.CSS_CELL_TODAY,CSS_CELL_OOM:G.CSS_CELL_OOM,CSS_CELL_OOB:G.CSS_CELL_OOB,CSS_HEADER:G.CSS_HEADER,CSS_HEADER_TEXT:G.CSS_HEADER_TEXT,CSS_BODY:G.CSS_BODY,CSS_WEEKDAY_CELL:G.CSS_WEEKDAY_CELL,CSS_WEEKDAY_ROW:G.CSS_WEEKDAY_ROW,CSS_FOOTER:G.CSS_FOOTER,CSS_CALENDAR:G.CSS_CALENDAR,CSS_SINGLE:G.CSS_SINGLE,CSS_CONTAINER:G.CSS_CONTAINER,CSS_NAV_LEFT:G.CSS_NAV_LEFT,CSS_NAV_RIGHT:G.CSS_NAV_RIGHT,CSS_NAV:G.CSS_NAV,CSS_CLOSE:G.CSS_CLOSE,CSS_CELL_TOP:G.CSS_CELL_TOP,CSS_CELL_LEFT:G.CSS_CELL_LEFT,CSS_CELL_RIGHT:G.CSS_CELL_RIGHT,CSS_CELL_BOTTOM:G.CSS_CELL_BOTTOM,CSS_CELL_HOVER:G.CSS_CELL_HOVER,CSS_CELL_HIGHLIGHT1:G.CSS_CELL_HIGHLIGHT1,CSS_CELL_HIGHLIGHT2:G.CSS_CELL_HIGHLIGHT2,CSS_CELL_HIGHLIGHT3:G.CSS_CELL_HIGHLIGHT3,CSS_CELL_HIGHLIGHT4:G.CSS_CELL_HIGHLIGHT4};},buildMonthLabel:function(){return this._buildMonthLabel(this.cfg.getProperty(B.PAGEDATE.key));},_buildMonthLabel:function(G){var I=this.Locale.LOCALE_MONTHS[G.getMonth()]+this.Locale.MY_LABEL_MONTH_SUFFIX,H=G.getFullYear()+this.Locale.MY_LABEL_YEAR_SUFFIX;if(this.Locale.MY_LABEL_MONTH_POSITION==2||this.Locale.MY_LABEL_YEAR_POSITION==1){return H+I;}else{return I+H;}},buildDayLabel:function(G){return G.getDate();},createTitleBar:function(G){var H=C.getElementsByClassName(YAHOO.widget.CalendarGroup.CSS_2UPTITLE,"div",this.oDomContainer)[0]||document.createElement("div");H.className=YAHOO.widget.CalendarGroup.CSS_2UPTITLE;H.innerHTML=G;this.oDomContainer.insertBefore(H,this.oDomContainer.firstChild);C.addClass(this.oDomContainer,"withtitle");return H;},removeTitleBar:function(){var G=C.getElementsByClassName(YAHOO.widget.CalendarGroup.CSS_2UPTITLE,"div",this.oDomContainer)[0]||null;if(G){A.purgeElement(G);this.oDomContainer.removeChild(G);}C.removeClass(this.oDomContainer,"withtitle");},createCloseButton:function(){var J=YAHOO.widget.CalendarGroup.CSS_2UPCLOSE,L="us/my/bn/x_d.gif",K=C.getElementsByClassName("link-close","a",this.oDomContainer)[0],G=this.cfg.getProperty(B.STRINGS.key),H=(G&&G.close)?G.close:"";if(!K){K=document.createElement("a");A.addListener(K,"click",function(N,M){M.hide();A.preventDefault(N);},this);}K.href="#";K.className="link-close";if(F.IMG_ROOT!==null){var I=C.getElementsByClassName(J,"img",K)[0]||document.createElement("img");I.src=F.IMG_ROOT+L;I.className=J;K.appendChild(I);}else{K.innerHTML='<span class="'+J+" "+this.Style.CSS_CLOSE+'">'+H+"</span>";}this.oDomContainer.appendChild(K);return K;},removeCloseButton:function(){var G=C.getElementsByClassName("link-close","a",this.oDomContainer)[0]||null;if(G){A.purgeElement(G);this.oDomContainer.removeChild(G);}},renderHeader:function(Q){var P=7,O="us/tr/callt.gif",G="us/tr/calrt.gif",N=this.cfg,K=N.getProperty(B.PAGEDATE.key),L=N.getProperty(B.STRINGS.key),V=(L&&L.previousMonth)?L.previousMonth:"",H=(L&&L.nextMonth)?L.nextMonth:"",M;if(N.getProperty(B.SHOW_WEEK_HEADER.key)){P+=1;}if(N.getProperty(B.SHOW_WEEK_FOOTER.key)){P+=1;}Q[Q.length]="<thead>";Q[Q.length]="<tr>";Q[Q.length]='<th colspan="'+P+'" class="'+this.Style.CSS_HEADER_TEXT+'">';Q[Q.length]='<div class="'+this.Style.CSS_HEADER+'">';var X,U=false;if(this.parent){if(this.index===0){X=true;}if(this.index==(this.parent.cfg.getProperty("pages")-1)){U=true;}}else{X=true;U=true;}if(X){M=this._buildMonthLabel(D.subtract(K,D.MONTH,1));var R=N.getProperty(B.NAV_ARROW_LEFT.key);if(R===null&&F.IMG_ROOT!==null){R=F.IMG_ROOT+O;}var I=(R===null)?"":' style="background-image:url('+R+')"';Q[Q.length]='<a class="'+this.Style.CSS_NAV_LEFT+'"'+I+' href="#">'+V+" ("+M+")"+"</a>";}var W=this.buildMonthLabel();var S=this.parent||this;if(S.cfg.getProperty("navigator")){W='<a class="'+this.Style.CSS_NAV+'" href="#">'+W+"</a>";}Q[Q.length]=W;if(U){M=this._buildMonthLabel(D.add(K,D.MONTH,1));var T=N.getProperty(B.NAV_ARROW_RIGHT.key);if(T===null&&F.IMG_ROOT!==null){T=F.IMG_ROOT+G;}var J=(T===null)?"":' style="background-image:url('+T+')"';Q[Q.length]='<a class="'+this.Style.CSS_NAV_RIGHT+'"'+J+' href="#">'+H+" ("+M+")"+"</a>";}Q[Q.length]="</div>\n</th>\n</tr>";if(N.getProperty(B.SHOW_WEEKDAYS.key)){Q=this.buildWeekdays(Q);}Q[Q.length]="</thead>";return Q;},buildWeekdays:function(H){H[H.length]='<tr class="'+this.Style.CSS_WEEKDAY_ROW+'">';if(this.cfg.getProperty(B.SHOW_WEEK_HEADER.key)){H[H.length]="<th>&#160;</th>";}for(var G=0;G<this.Locale.LOCALE_WEEKDAYS.length;++G){H[H.length]='<th class="calweekdaycell">'+this.Locale.LOCALE_WEEKDAYS[G]+"</th>";}if(this.cfg.getProperty(B.SHOW_WEEK_FOOTER.key)){H[H.length]="<th>&#160;</th>";}H[H.length]="</tr>";return H;},renderBody:function(l,j){var AJ=this.cfg.getProperty(B.START_WEEKDAY.key);this.preMonthDays=l.getDay();if(AJ>0){this.preMonthDays-=AJ;}if(this.preMonthDays<0){this.preMonthDays+=7;}this.monthDays=D.findMonthEnd(l).getDate();this.postMonthDays=F.DISPLAY_DAYS-this.preMonthDays-this.monthDays;l=D.subtract(l,D.DAY,this.preMonthDays);var X,N,M="w",e="_cell",b="wd",v="d",P,q,AB=this.today,O=this.cfg,V=AB.getFullYear(),u=AB.getMonth(),J=AB.getDate(),AA=O.getProperty(B.PAGEDATE.key),I=O.getProperty(B.HIDE_BLANK_WEEKS.key),h=O.getProperty(B.SHOW_WEEK_FOOTER.key),a=O.getProperty(B.SHOW_WEEK_HEADER.key),T=O.getProperty(B.MINDATE.key),Z=O.getProperty(B.MAXDATE.key);if(T){T=D.clearTime(T);}if(Z){Z=D.clearTime(Z);}j[j.length]='<tbody class="m'+(AA.getMonth()+1)+" "+this.Style.CSS_BODY+'">';var AH=0,Q=document.createElement("div"),k=document.createElement("td");Q.appendChild(k);var z=this.parent||this;for(var AD=0;AD<6;AD++){X=D.getWeekNumber(l,AJ);N=M+X;if(AD!==0&&I===true&&l.getMonth()!=AA.getMonth()){break;}else{j[j.length]='<tr class="'+N+'">';if(a){j=this.renderRowHeader(X,j);}for(var AI=0;AI<7;AI++){P=[];this.clearElement(k);k.className=this.Style.CSS_CELL;k.id=this.id+e+AH;if(l.getDate()==J&&l.getMonth()==u&&l.getFullYear()==V){P[P.length]=z.renderCellStyleToday;}var Y=[l.getFullYear(),l.getMonth()+1,l.getDate()];this.cellDates[this.cellDates.length]=Y;if(l.getMonth()!=AA.getMonth()){P[P.length]=z.renderCellNotThisMonth;}else{C.addClass(k,b+l.getDay());C.addClass(k,v+l.getDate());for(var AC=0;AC<this.renderStack.length;++AC){q=null;var w=this.renderStack[AC],AK=w[0],H,c,L;switch(AK){case F.DATE:H=w[1][1];c=w[1][2];L=w[1][0];if(l.getMonth()+1==H&&l.getDate()==c&&l.getFullYear()==L){q=w[2];this.renderStack.splice(AC,1);}break;case F.MONTH_DAY:H=w[1][0];c=w[1][1];if(l.getMonth()+1==H&&l.getDate()==c){q=w[2];this.renderStack.splice(AC,1);}break;case F.RANGE:var g=w[1][0],f=w[1][1],m=g[1],S=g[2],W=g[0],AG=D.getDate(W,m-1,S),K=f[1],o=f[2],G=f[0],AF=D.getDate(G,K-1,o);if(l.getTime()>=AG.getTime()&&l.getTime()<=AF.getTime()){q=w[2];if(l.getTime()==AF.getTime()){this.renderStack.splice(AC,1);}}break;case F.WEEKDAY:var R=w[1][0];if(l.getDay()+1==R){q=w[2];}break;case F.MONTH:H=w[1][0];if(l.getMonth()+1==H){q=w[2];}break;}if(q){P[P.length]=q;}}}if(this._indexOfSelectedFieldArray(Y)>-1){P[P.length]=z.renderCellStyleSelected;}if((T&&(l.getTime()<T.getTime()))||(Z&&(l.getTime()>Z.getTime()))){P[P.length]=z.renderOutOfBoundsDate;}else{P[P.length]=z.styleCellDefault;P[P.length]=z.renderCellDefault;}for(var y=0;y<P.length;++y){if(P[y].call(z,l,k)==F.STOP_RENDER){break;}}l.setTime(l.getTime()+D.ONE_DAY_MS);l=D.clearTime(l);if(AH>=0&&AH<=6){C.addClass(k,this.Style.CSS_CELL_TOP);}if((AH%7)===0){C.addClass(k,this.Style.CSS_CELL_LEFT);}if(((AH+1)%7)===0){C.addClass(k,this.Style.CSS_CELL_RIGHT);}var n=this.postMonthDays;if(I&&n>=7){var U=Math.floor(n/7);for(var AE=0;AE<U;++AE){n-=7;}}if(AH>=((this.preMonthDays+n+this.monthDays)-7)){C.addClass(k,this.Style.CSS_CELL_BOTTOM);}j[j.length]=Q.innerHTML;AH++;}if(h){j=this.renderRowFooter(X,j);}j[j.length]="</tr>";}}j[j.length]="</tbody>";return j;},renderFooter:function(G){return G;},render:function(){this.beforeRenderEvent.fire();var H=D.findMonthStart(this.cfg.getProperty(B.PAGEDATE.key));this.resetRenderers();this.cellDates.length=0;A.purgeElement(this.oDomContainer,true);var G=[];G[G.length]='<table cellSpacing="0" class="'+this.Style.CSS_CALENDAR+" y"+H.getFullYear()+'" id="'+this.id+'">';G=this.renderHeader(G);G=this.renderBody(H,G);G=this.renderFooter(G);G[G.length]="</table>";this.oDomContainer.innerHTML=G.join("\n");this.applyListeners();this.cells=this.oDomContainer.getElementsByTagName("td");this.cfg.refireEvent(B.TITLE.key);this.cfg.refireEvent(B.CLOSE.key);this.cfg.refireEvent(B.IFRAME.key);this.renderEvent.fire();},applyListeners:function(){var P=this.oDomContainer,H=this.parent||this,L="a",S="click";var M=C.getElementsByClassName(this.Style.CSS_NAV_LEFT,L,P),I=C.getElementsByClassName(this.Style.CSS_NAV_RIGHT,L,P);if(M&&M.length>0){this.linkLeft=M[0];A.addListener(this.linkLeft,S,this.doPreviousMonthNav,H,true);}if(I&&I.length>0){this.linkRight=I[0];A.addListener(this.linkRight,S,this.doNextMonthNav,H,true);}if(H.cfg.getProperty("navigator")!==null){this.applyNavListeners();}if(this.domEventMap){var J,G;for(var R in this.domEventMap){if(E.hasOwnProperty(this.domEventMap,R)){var N=this.domEventMap[R];if(!(N instanceof Array)){N=[N];}for(var K=0;K<N.length;K++){var Q=N[K];G=C.getElementsByClassName(R,Q.tag,this.oDomContainer);for(var O=0;O<G.length;O++){J=G[O];A.addListener(J,Q.event,Q.handler,Q.scope,Q.correct);}}}}}A.addListener(this.oDomContainer,"click",this.doSelectCell,this);A.addListener(this.oDomContainer,"mouseover",this.doCellMouseOver,this);A.addListener(this.oDomContainer,"mouseout",this.doCellMouseOut,this);},applyNavListeners:function(){var H=this.parent||this,I=this,G=C.getElementsByClassName(this.Style.CSS_NAV,"a",this.oDomContainer);if(G.length>0){A.addListener(G,"click",function(N,M){var L=A.getTarget(N);if(this===L||C.isAncestor(this,L)){A.preventDefault(N);}var J=H.oNavigator;if(J){var K=I.cfg.getProperty("pagedate");J.setYear(K.getFullYear());J.setMonth(K.getMonth());J.show();}});}},getDateByCellId:function(H){var G=this.getDateFieldsByCellId(H);return(G)?D.getDate(G[0],G[1]-1,G[2]):null;},getDateFieldsByCellId:function(G){G=this.getIndexFromId(G);return(G>-1)?this.cellDates[G]:null;},getCellIndex:function(I){var H=-1;if(I){var G=I.getMonth(),N=I.getFullYear(),M=I.getDate(),K=this.cellDates;for(var J=0;J<K.length;++J){var L=K[J];if(L[0]===N&&L[1]===G+1&&L[2]===M){H=J;break;}}}return H;},getIndexFromId:function(I){var H=-1,G=I.lastIndexOf("_cell");if(G>-1){H=parseInt(I.substring(G+5),10);}return H;},renderOutOfBoundsDate:function(H,G){C.addClass(G,this.Style.CSS_CELL_OOB);G.innerHTML=H.getDate();return F.STOP_RENDER;},renderRowHeader:function(H,G){G[G.length]='<th class="calrowhead">'+H+"</th>";return G;},renderRowFooter:function(H,G){G[G.length]='<th class="calrowfoot">'+H+"</th>";return G;},renderCellDefault:function(H,G){G.innerHTML='<a href="#" class="'+this.Style.CSS_CELL_SELECTOR+'">'+this.buildDayLabel(H)+"</a>";},styleCellDefault:function(H,G){C.addClass(G,this.Style.CSS_CELL_SELECTABLE);},renderCellStyleHighlight1:function(H,G){C.addClass(G,this.Style.CSS_CELL_HIGHLIGHT1);},renderCellStyleHighlight2:function(H,G){C.addClass(G,this.Style.CSS_CELL_HIGHLIGHT2);},renderCellStyleHighlight3:function(H,G){C.addClass(G,this.Style.CSS_CELL_HIGHLIGHT3);},renderCellStyleHighlight4:function(H,G){C.addClass(G,this.Style.CSS_CELL_HIGHLIGHT4);},renderCellStyleToday:function(H,G){C.addClass(G,this.Style.CSS_CELL_TODAY);},renderCellStyleSelected:function(H,G){C.addClass(G,this.Style.CSS_CELL_SELECTED);},renderCellNotThisMonth:function(H,G){C.addClass(G,this.Style.CSS_CELL_OOM);G.innerHTML=H.getDate();return F.STOP_RENDER;},renderBodyCellRestricted:function(H,G){C.addClass(G,this.Style.CSS_CELL);C.addClass(G,this.Style.CSS_CELL_RESTRICTED);G.innerHTML=H.getDate();return F.STOP_RENDER;},addMonths:function(H){var G=B.PAGEDATE.key;this.cfg.setProperty(G,D.add(this.cfg.getProperty(G),D.MONTH,H));this.resetRenderers();this.changePageEvent.fire();},subtractMonths:function(H){var G=B.PAGEDATE.key;this.cfg.setProperty(G,D.subtract(this.cfg.getProperty(G),D.MONTH,H));this.resetRenderers();this.changePageEvent.fire();},addYears:function(H){var G=B.PAGEDATE.key;this.cfg.setProperty(G,D.add(this.cfg.getProperty(G),D.YEAR,H));this.resetRenderers();this.changePageEvent.fire();},subtractYears:function(H){var G=B.PAGEDATE.key;this.cfg.setProperty(G,D.subtract(this.cfg.getProperty(G),D.YEAR,H));this.resetRenderers();this.changePageEvent.fire();},nextMonth:function(){this.addMonths(1);},previousMonth:function(){this.subtractMonths(1);},nextYear:function(){this.addYears(1);},previousYear:function(){this.subtractYears(1);},reset:function(){this.cfg.resetProperty(B.SELECTED.key);this.cfg.resetProperty(B.PAGEDATE.key);this.resetEvent.fire();},clear:function(){this.cfg.setProperty(B.SELECTED.key,[]);this.cfg.setProperty(B.PAGEDATE.key,new Date(this.today.getTime()));this.clearEvent.fire();},select:function(I){var L=this._toFieldArray(I),H=[],K=[],M=B.SELECTED.key;for(var G=0;G<L.length;++G){var J=L[G];if(!this.isDateOOB(this._toDate(J))){if(H.length===0){this.beforeSelectEvent.fire();K=this.cfg.getProperty(M);}H.push(J);if(this._indexOfSelectedFieldArray(J)==-1){K[K.length]=J;}}}if(H.length>0){if(this.parent){this.parent.cfg.setProperty(M,K);}else{this.cfg.setProperty(M,K);}this.selectEvent.fire(H);}return this.getSelectedDates();},selectCell:function(J){var H=this.cells[J],N=this.cellDates[J],M=this._toDate(N),I=C.hasClass(H,this.Style.CSS_CELL_SELECTABLE);if(I){this.beforeSelectEvent.fire();var L=B.SELECTED.key;var K=this.cfg.getProperty(L);var G=N.concat();if(this._indexOfSelectedFieldArray(G)==-1){K[K.length]=G;}if(this.parent){this.parent.cfg.setProperty(L,K);}else{this.cfg.setProperty(L,K);}this.renderCellStyleSelected(M,H);this.selectEvent.fire([G]);this.doCellMouseOut.call(H,null,this);}return this.getSelectedDates();},deselect:function(K){var G=this._toFieldArray(K),J=[],M=[],N=B.SELECTED.key;for(var H=0;H<G.length;++H){var L=G[H];if(!this.isDateOOB(this._toDate(L))){if(J.length===0){this.beforeDeselectEvent.fire();M=this.cfg.getProperty(N);}J.push(L);var I=this._indexOfSelectedFieldArray(L);if(I!=-1){M.splice(I,1);}}}if(J.length>0){if(this.parent){this.parent.cfg.setProperty(N,M);}else{this.cfg.setProperty(N,M);}this.deselectEvent.fire(J);}return this.getSelectedDates();},deselectCell:function(K){var H=this.cells[K],N=this.cellDates[K],I=this._indexOfSelectedFieldArray(N);var J=C.hasClass(H,this.Style.CSS_CELL_SELECTABLE);if(J){this.beforeDeselectEvent.fire();var L=this.cfg.getProperty(B.SELECTED.key),M=this._toDate(N),G=N.concat();if(I>-1){if(this.cfg.getProperty(B.PAGEDATE.key).getMonth()==M.getMonth()&&this.cfg.getProperty(B.PAGEDATE.key).getFullYear()==M.getFullYear()){C.removeClass(H,this.Style.CSS_CELL_SELECTED);}L.splice(I,1);}if(this.parent){this.parent.cfg.setProperty(B.SELECTED.key,L);}else{this.cfg.setProperty(B.SELECTED.key,L);}this.deselectEvent.fire([G]);}return this.getSelectedDates();},deselectAll:function(){this.beforeDeselectEvent.fire();var J=B.SELECTED.key,G=this.cfg.getProperty(J),H=G.length,I=G.concat();if(this.parent){this.parent.cfg.setProperty(J,[]);}else{this.cfg.setProperty(J,[]);}if(H>0){this.deselectEvent.fire(I);}return this.getSelectedDates();},_toFieldArray:function(H){var G=[];if(H instanceof Date){G=[[H.getFullYear(),H.getMonth()+1,H.getDate()]];}else{if(E.isString(H)){G=this._parseDates(H);}else{if(E.isArray(H)){for(var I=0;I<H.length;++I){var J=H[I];G[G.length]=[J.getFullYear(),J.getMonth()+1,J.getDate()];}}}}return G;},toDate:function(G){return this._toDate(G);},_toDate:function(G){if(G instanceof Date){return G;}else{return D.getDate(G[0],G[1]-1,G[2]);}},_fieldArraysAreEqual:function(I,H){var G=false;if(I[0]==H[0]&&I[1]==H[1]&&I[2]==H[2]){G=true;}return G;},_indexOfSelectedFieldArray:function(K){var J=-1,G=this.cfg.getProperty(B.SELECTED.key);for(var I=0;I<G.length;++I){var H=G[I];if(K[0]==H[0]&&K[1]==H[1]&&K[2]==H[2]){J=I;break;}}return J;},isDateOOM:function(G){return(G.getMonth()!=this.cfg.getProperty(B.PAGEDATE.key).getMonth());},isDateOOB:function(I){var J=this.cfg.getProperty(B.MINDATE.key),K=this.cfg.getProperty(B.MAXDATE.key),H=D;if(J){J=H.clearTime(J);}if(K){K=H.clearTime(K);}var G=new Date(I.getTime());G=H.clearTime(G);return((J&&G.getTime()<J.getTime())||(K&&G.getTime()>K.getTime()));},_parsePageDate:function(G){var J;if(G){if(G instanceof Date){J=D.findMonthStart(G);}else{var K,I,H;H=G.split(this.cfg.getProperty(B.DATE_FIELD_DELIMITER.key));K=parseInt(H[this.cfg.getProperty(B.MY_MONTH_POSITION.key)-1],10)-1;I=parseInt(H[this.cfg.getProperty(B.MY_YEAR_POSITION.key)-1],10);J=D.getDate(I,K,1);}}else{J=D.getDate(this.today.getFullYear(),this.today.getMonth(),1);}return J;},onBeforeSelect:function(){if(this.cfg.getProperty(B.MULTI_SELECT.key)===false){if(this.parent){this.parent.callChildFunction("clearAllBodyCellStyles",this.Style.CSS_CELL_SELECTED);this.parent.deselectAll();}else{this.clearAllBodyCellStyles(this.Style.CSS_CELL_SELECTED);this.deselectAll();}}},onSelect:function(G){},onBeforeDeselect:function(){},onDeselect:function(G){},onChangePage:function(){this.render();},onRender:function(){},onReset:function(){this.render();},onClear:function(){this.render();},validate:function(){return true;},_parseDate:function(I){var J=I.split(this.Locale.DATE_FIELD_DELIMITER),G;if(J.length==2){G=[J[this.Locale.MD_MONTH_POSITION-1],J[this.Locale.MD_DAY_POSITION-1]];G.type=F.MONTH_DAY;}else{G=[J[this.Locale.MDY_YEAR_POSITION-1],J[this.Locale.MDY_MONTH_POSITION-1],J[this.Locale.MDY_DAY_POSITION-1]];G.type=F.DATE;}for(var H=0;H<G.length;H++){G[H]=parseInt(G[H],10);}return G;},_parseDates:function(H){var O=[],N=H.split(this.Locale.DATE_DELIMITER);for(var M=0;M<N.length;++M){var L=N[M];if(L.indexOf(this.Locale.DATE_RANGE_DELIMITER)!=-1){var G=L.split(this.Locale.DATE_RANGE_DELIMITER),K=this._parseDate(G[0]),P=this._parseDate(G[1]),J=this._parseRange(K,P);O=O.concat(J);}else{var I=this._parseDate(L);O.push(I);}}return O;},_parseRange:function(G,K){var H=D.add(D.getDate(G[0],G[1]-1,G[2]),D.DAY,1),J=D.getDate(K[0],K[1]-1,K[2]),I=[];I.push(G);while(H.getTime()<=J.getTime()){I.push([H.getFullYear(),H.getMonth()+1,H.getDate()]);H=D.add(H,D.DAY,1);}return I;},resetRenderers:function(){this.renderStack=this._renderStack.concat();},removeRenderers:function(){this._renderStack=[];this.renderStack=[];},clearElement:function(G){G.innerHTML="&#160;";G.className="";},addRenderer:function(G,H){var J=this._parseDates(G);for(var I=0;I<J.length;++I){var K=J[I];if(K.length==2){if(K[0]instanceof Array){this._addRenderer(F.RANGE,K,H);}else{this._addRenderer(F.MONTH_DAY,K,H);}}else{if(K.length==3){this._addRenderer(F.DATE,K,H);}}}},_addRenderer:function(H,I,G){var J=[H,I,G];this.renderStack.unshift(J);this._renderStack=this.renderStack.concat();},addMonthRenderer:function(H,G){this._addRenderer(F.MONTH,[H],G);},addWeekdayRenderer:function(H,G){this._addRenderer(F.WEEKDAY,[H],G);},clearAllBodyCellStyles:function(G){for(var H=0;H<this.cells.length;++H){C.removeClass(this.cells[H],G);}},setMonth:function(I){var G=B.PAGEDATE.key,H=this.cfg.getProperty(G);H.setMonth(parseInt(I,10));this.cfg.setProperty(G,H);},setYear:function(H){var G=B.PAGEDATE.key,I=this.cfg.getProperty(G);I.setFullYear(parseInt(H,10));this.cfg.setProperty(G,I);},getSelectedDates:function(){var I=[],H=this.cfg.getProperty(B.SELECTED.key);for(var K=0;K<H.length;++K){var J=H[K];var G=D.getDate(J[0],J[1]-1,J[2]);I.push(G);}I.sort(function(M,L){return M-L;});return I;},hide:function(){if(this.beforeHideEvent.fire()){this.oDomContainer.style.display="none";this.hideEvent.fire();}},show:function(){if(this.beforeShowEvent.fire()){this.oDomContainer.style.display="block";this.showEvent.fire();}},browser:(function(){var G=navigator.userAgent.toLowerCase();if(G.indexOf("opera")!=-1){return"opera";}else{if(G.indexOf("msie 7")!=-1){return"ie7";}else{if(G.indexOf("msie")!=-1){return"ie";}else{if(G.indexOf("safari")!=-1){return"safari";}else{if(G.indexOf("gecko")!=-1){return"gecko";}else{return false;}}}}}})(),toString:function(){return"Calendar "+this.id;},destroy:function(){if(this.beforeDestroyEvent.fire()){var G=this;if(G.navigator){G.navigator.destroy();}if(G.cfg){G.cfg.destroy();}A.purgeElement(G.oDomContainer,true);C.removeClass(G.oDomContainer,"withtitle");C.removeClass(G.oDomContainer,G.Style.CSS_CONTAINER);C.removeClass(G.oDomContainer,G.Style.CSS_SINGLE);G.oDomContainer.innerHTML="";G.oDomContainer=null;G.cells=null;this.destroyEvent.fire();}}};YAHOO.widget.Calendar=F;YAHOO.widget.Calendar_Core=YAHOO.widget.Calendar;YAHOO.widget.Cal_Core=YAHOO.widget.Calendar;})();(function(){var D=YAHOO.util.Dom,F=YAHOO.widget.DateMath,A=YAHOO.util.Event,E=YAHOO.lang,G=YAHOO.widget.Calendar;function B(J,H,I){if(arguments.length>0){this.init.apply(this,arguments);}}B._DEFAULT_CONFIG=G._DEFAULT_CONFIG;B._DEFAULT_CONFIG.PAGES={key:"pages",value:2};var C=B._DEFAULT_CONFIG;B.prototype={init:function(K,I,J){var H=this._parseArgs(arguments);K=H.id;I=H.container;J=H.config;this.oDomContainer=D.get(I);if(!this.oDomContainer.id){this.oDomContainer.id=D.generateId();}if(!K){K=this.oDomContainer.id+"_t";}this.id=K;this.containerId=this.oDomContainer.id;this.initEvents();this.initStyles();this.pages=[];D.addClass(this.oDomContainer,B.CSS_CONTAINER);D.addClass(this.oDomContainer,B.CSS_MULTI_UP);this.cfg=new YAHOO.util.Config(this);this.Options={};this.Locale={};this.setupConfig();if(J){this.cfg.applyConfig(J,true);}this.cfg.fireQueue();if(YAHOO.env.ua.opera){this.renderEvent.subscribe(this._fixWidth,this,true);this.showEvent.subscribe(this._fixWidth,this,true);}},setupConfig:function(){var H=this.cfg;H.addProperty(C.PAGES.key,{value:C.PAGES.value,validator:H.checkNumber,handler:this.configPages});H.addProperty(C.PAGEDATE.key,{value:new Date(),handler:this.configPageDate});H.addProperty(C.SELECTED.key,{value:[],handler:this.configSelected});H.addProperty(C.TITLE.key,{value:C.TITLE.value,handler:this.configTitle});H.addProperty(C.CLOSE.key,{value:C.CLOSE.value,handler:this.configClose});H.addProperty(C.IFRAME.key,{value:C.IFRAME.value,handler:this.configIframe,validator:H.checkBoolean});H.addProperty(C.MINDATE.key,{value:C.MINDATE.value,handler:this.delegateConfig});H.addProperty(C.MAXDATE.key,{value:C.MAXDATE.value,handler:this.delegateConfig});H.addProperty(C.MULTI_SELECT.key,{value:C.MULTI_SELECT.value,handler:this.delegateConfig,validator:H.checkBoolean});H.addProperty(C.START_WEEKDAY.key,{value:C.START_WEEKDAY.value,handler:this.delegateConfig,validator:H.checkNumber});H.addProperty(C.SHOW_WEEKDAYS.key,{value:C.SHOW_WEEKDAYS.value,handler:this.delegateConfig,validator:H.checkBoolean});H.addProperty(C.SHOW_WEEK_HEADER.key,{value:C.SHOW_WEEK_HEADER.value,handler:this.delegateConfig,validator:H.checkBoolean});H.addProperty(C.SHOW_WEEK_FOOTER.key,{value:C.SHOW_WEEK_FOOTER.value,handler:this.delegateConfig,validator:H.checkBoolean});H.addProperty(C.HIDE_BLANK_WEEKS.key,{value:C.HIDE_BLANK_WEEKS.value,handler:this.delegateConfig,validator:H.checkBoolean});H.addProperty(C.NAV_ARROW_LEFT.key,{value:C.NAV_ARROW_LEFT.value,handler:this.delegateConfig});H.addProperty(C.NAV_ARROW_RIGHT.key,{value:C.NAV_ARROW_RIGHT.value,handler:this.delegateConfig});H.addProperty(C.MONTHS_SHORT.key,{value:C.MONTHS_SHORT.value,handler:this.delegateConfig});H.addProperty(C.MONTHS_LONG.key,{value:C.MONTHS_LONG.value,handler:this.delegateConfig});H.addProperty(C.WEEKDAYS_1CHAR.key,{value:C.WEEKDAYS_1CHAR.value,handler:this.delegateConfig});H.addProperty(C.WEEKDAYS_SHORT.key,{value:C.WEEKDAYS_SHORT.value,handler:this.delegateConfig});H.addProperty(C.WEEKDAYS_MEDIUM.key,{value:C.WEEKDAYS_MEDIUM.value,handler:this.delegateConfig});H.addProperty(C.WEEKDAYS_LONG.key,{value:C.WEEKDAYS_LONG.value,handler:this.delegateConfig});H.addProperty(C.LOCALE_MONTHS.key,{value:C.LOCALE_MONTHS.value,handler:this.delegateConfig});H.addProperty(C.LOCALE_WEEKDAYS.key,{value:C.LOCALE_WEEKDAYS.value,handler:this.delegateConfig});H.addProperty(C.DATE_DELIMITER.key,{value:C.DATE_DELIMITER.value,handler:this.delegateConfig});H.addProperty(C.DATE_FIELD_DELIMITER.key,{value:C.DATE_FIELD_DELIMITER.value,handler:this.delegateConfig});H.addProperty(C.DATE_RANGE_DELIMITER.key,{value:C.DATE_RANGE_DELIMITER.value,handler:this.delegateConfig});H.addProperty(C.MY_MONTH_POSITION.key,{value:C.MY_MONTH_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});H.addProperty(C.MY_YEAR_POSITION.key,{value:C.MY_YEAR_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});H.addProperty(C.MD_MONTH_POSITION.key,{value:C.MD_MONTH_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});H.addProperty(C.MD_DAY_POSITION.key,{value:C.MD_DAY_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});H.addProperty(C.MDY_MONTH_POSITION.key,{value:C.MDY_MONTH_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});H.addProperty(C.MDY_DAY_POSITION.key,{value:C.MDY_DAY_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});H.addProperty(C.MDY_YEAR_POSITION.key,{value:C.MDY_YEAR_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});H.addProperty(C.MY_LABEL_MONTH_POSITION.key,{value:C.MY_LABEL_MONTH_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});H.addProperty(C.MY_LABEL_YEAR_POSITION.key,{value:C.MY_LABEL_YEAR_POSITION.value,handler:this.delegateConfig,validator:H.checkNumber});H.addProperty(C.MY_LABEL_MONTH_SUFFIX.key,{value:C.MY_LABEL_MONTH_SUFFIX.value,handler:this.delegateConfig});H.addProperty(C.MY_LABEL_YEAR_SUFFIX.key,{value:C.MY_LABEL_YEAR_SUFFIX.value,handler:this.delegateConfig});H.addProperty(C.NAV.key,{value:C.NAV.value,handler:this.configNavigator});H.addProperty(C.STRINGS.key,{value:C.STRINGS.value,handler:this.configStrings,validator:function(I){return E.isObject(I);},supercedes:C.STRINGS.supercedes});},initEvents:function(){var J=this,L="Event",M=YAHOO.util.CustomEvent;var I=function(O,R,N){for(var Q=0;Q<J.pages.length;++Q){var P=J.pages[Q];P[this.type+L].subscribe(O,R,N);}};var H=function(N,Q){for(var P=0;P<J.pages.length;++P){var O=J.pages[P];O[this.type+L].unsubscribe(N,Q);}};var K=G._EVENT_TYPES;J.beforeSelectEvent=new M(K.BEFORE_SELECT);J.beforeSelectEvent.subscribe=I;J.beforeSelectEvent.unsubscribe=H;J.selectEvent=new M(K.SELECT);J.selectEvent.subscribe=I;J.selectEvent.unsubscribe=H;J.beforeDeselectEvent=new M(K.BEFORE_DESELECT);J.beforeDeselectEvent.subscribe=I;J.beforeDeselectEvent.unsubscribe=H;J.deselectEvent=new M(K.DESELECT);J.deselectEvent.subscribe=I;J.deselectEvent.unsubscribe=H;J.changePageEvent=new M(K.CHANGE_PAGE);J.changePageEvent.subscribe=I;J.changePageEvent.unsubscribe=H;J.beforeRenderEvent=new M(K.BEFORE_RENDER);J.beforeRenderEvent.subscribe=I;J.beforeRenderEvent.unsubscribe=H;J.renderEvent=new M(K.RENDER);J.renderEvent.subscribe=I;J.renderEvent.unsubscribe=H;J.resetEvent=new M(K.RESET);J.resetEvent.subscribe=I;J.resetEvent.unsubscribe=H;J.clearEvent=new M(K.CLEAR);J.clearEvent.subscribe=I;J.clearEvent.unsubscribe=H;J.beforeShowEvent=new M(K.BEFORE_SHOW);J.showEvent=new M(K.SHOW);J.beforeHideEvent=new M(K.BEFORE_HIDE);J.hideEvent=new M(K.HIDE);J.beforeShowNavEvent=new M(K.BEFORE_SHOW_NAV);J.showNavEvent=new M(K.SHOW_NAV);J.beforeHideNavEvent=new M(K.BEFORE_HIDE_NAV);J.hideNavEvent=new M(K.HIDE_NAV);J.beforeRenderNavEvent=new M(K.BEFORE_RENDER_NAV);J.renderNavEvent=new M(K.RENDER_NAV);J.beforeDestroyEvent=new M(K.BEFORE_DESTROY);J.destroyEvent=new M(K.DESTROY);},configPages:function(T,R,N){var L=R[0],J=C.PAGEDATE.key,W="_",M,O=null,S="groupcal",V="first-of-type",K="last-of-type";for(var I=0;I<L;++I){var U=this.id+W+I,Q=this.containerId+W+I,P=this.cfg.getConfig();P.close=false;P.title=false;P.navigator=null;if(I>0){M=new Date(O);this._setMonthOnDate(M,M.getMonth()+I);P.pageDate=M;}var H=this.constructChild(U,Q,P);D.removeClass(H.oDomContainer,this.Style.CSS_SINGLE);D.addClass(H.oDomContainer,S);if(I===0){O=H.cfg.getProperty(J);D.addClass(H.oDomContainer,V);}if(I==(L-1)){D.addClass(H.oDomContainer,K);}H.parent=this;H.index=I;this.pages[this.pages.length]=H;}},configPageDate:function(O,N,L){var J=N[0],M;var K=C.PAGEDATE.key;for(var I=0;I<this.pages.length;++I){var H=this.pages[I];if(I===0){M=H._parsePageDate(J);H.cfg.setProperty(K,M);}else{var P=new Date(M);this._setMonthOnDate(P,P.getMonth()+I);H.cfg.setProperty(K,P);}}},configSelected:function(J,H,L){var K=C.SELECTED.key;this.delegateConfig(J,H,L);var I=(this.pages.length>0)?this.pages[0].cfg.getProperty(K):[];this.cfg.setProperty(K,I,true);},delegateConfig:function(I,H,L){var M=H[0];var K;for(var J=0;J<this.pages.length;J++){K=this.pages[J];K.cfg.setProperty(I,M);}},setChildFunction:function(K,I){var H=this.cfg.getProperty(C.PAGES.key);for(var J=0;J<H;++J){this.pages[J][K]=I;}},callChildFunction:function(M,I){var H=this.cfg.getProperty(C.PAGES.key);for(var L=0;L<H;++L){var K=this.pages[L];if(K[M]){var J=K[M];J.call(K,I);}}},constructChild:function(K,I,J){var H=document.getElementById(I);if(!H){H=document.createElement("div");H.id=I;this.oDomContainer.appendChild(H);}return new G(K,I,J);},setMonth:function(L){L=parseInt(L,10);var M;var I=C.PAGEDATE.key;for(var K=0;K<this.pages.length;++K){var J=this.pages[K];var H=J.cfg.getProperty(I);if(K===0){M=H.getFullYear();}else{H.setFullYear(M);}this._setMonthOnDate(H,L+K);J.cfg.setProperty(I,H);}},setYear:function(J){var I=C.PAGEDATE.key;J=parseInt(J,10);for(var L=0;L<this.pages.length;++L){var K=this.pages[L];var H=K.cfg.getProperty(I);if((H.getMonth()+1)==1&&L>0){J+=1;}K.setYear(J);}},render:function(){this.renderHeader();for(var I=0;I<this.pages.length;++I){var H=this.pages[I];H.render();}this.renderFooter();},select:function(H){for(var J=0;J<this.pages.length;++J){var I=this.pages[J];I.select(H);}return this.getSelectedDates();},selectCell:function(H){for(var J=0;J<this.pages.length;++J){var I=this.pages[J];I.selectCell(H);}return this.getSelectedDates();},deselect:function(H){for(var J=0;J<this.pages.length;++J){var I=this.pages[J];I.deselect(H);}return this.getSelectedDates();},deselectAll:function(){for(var I=0;I<this.pages.length;++I){var H=this.pages[I];H.deselectAll();}return this.getSelectedDates();},deselectCell:function(H){for(var J=0;J<this.pages.length;++J){var I=this.pages[J];I.deselectCell(H);}return this.getSelectedDates();},reset:function(){for(var I=0;I<this.pages.length;++I){var H=this.pages[I];H.reset();}},clear:function(){for(var I=0;I<this.pages.length;++I){var H=this.pages[I];H.clear();}this.cfg.setProperty(C.SELECTED.key,[]);this.cfg.setProperty(C.PAGEDATE.key,new Date(this.pages[0].today.getTime()));this.render();},nextMonth:function(){for(var I=0;I<this.pages.length;++I){var H=this.pages[I];H.nextMonth();}},previousMonth:function(){for(var I=this.pages.length-1;I>=0;--I){var H=this.pages[I];H.previousMonth();}},nextYear:function(){for(var I=0;I<this.pages.length;++I){var H=this.pages[I];H.nextYear();}},previousYear:function(){for(var I=0;I<this.pages.length;++I){var H=this.pages[I];H.previousYear();}},getSelectedDates:function(){var J=[];var I=this.cfg.getProperty(C.SELECTED.key);for(var L=0;L<I.length;++L){var K=I[L];var H=F.getDate(K[0],K[1]-1,K[2]);J.push(H);}J.sort(function(N,M){return N-M;});return J;},addRenderer:function(H,I){for(var K=0;K<this.pages.length;++K){var J=this.pages[K];J.addRenderer(H,I);}},addMonthRenderer:function(K,H){for(var J=0;J<this.pages.length;++J){var I=this.pages[J];I.addMonthRenderer(K,H);}},addWeekdayRenderer:function(I,H){for(var K=0;K<this.pages.length;++K){var J=this.pages[K];J.addWeekdayRenderer(I,H);}},removeRenderers:function(){this.callChildFunction("removeRenderers");},renderHeader:function(){},renderFooter:function(){},addMonths:function(H){this.callChildFunction("addMonths",H);},subtractMonths:function(H){this.callChildFunction("subtractMonths",H);},addYears:function(H){this.callChildFunction("addYears",H);},subtractYears:function(H){this.callChildFunction("subtractYears",H);},getCalendarPage:function(K){var M=null;if(K){var N=K.getFullYear(),J=K.getMonth();var I=this.pages;for(var L=0;L<I.length;++L){var H=I[L].cfg.getProperty("pagedate");if(H.getFullYear()===N&&H.getMonth()===J){M=I[L];break;}}}return M;},_setMonthOnDate:function(I,J){if(YAHOO.env.ua.webkit&&YAHOO.env.ua.webkit<420&&(J<0||J>11)){var H=F.add(I,F.MONTH,J-I.getMonth());I.setTime(H.getTime());}else{I.setMonth(J);}},_fixWidth:function(){var H=0;for(var J=0;J<this.pages.length;++J){var I=this.pages[J];H+=I.oDomContainer.offsetWidth;}if(H>0){this.oDomContainer.style.width=H+"px";}},toString:function(){return"CalendarGroup "+this.id;},destroy:function(){if(this.beforeDestroyEvent.fire()){var J=this;if(J.navigator){J.navigator.destroy();}if(J.cfg){J.cfg.destroy();}A.purgeElement(J.oDomContainer,true);D.removeClass(J.oDomContainer,B.CSS_CONTAINER);D.removeClass(J.oDomContainer,B.CSS_MULTI_UP);for(var I=0,H=J.pages.length;I<H;I++){J.pages[I].destroy();J.pages[I]=null;}J.oDomContainer.innerHTML="";J.oDomContainer=null;this.destroyEvent.fire();}}};B.CSS_CONTAINER="yui-calcontainer";B.CSS_MULTI_UP="multi";B.CSS_2UPTITLE="title";B.CSS_2UPCLOSE="close-icon";YAHOO.lang.augmentProto(B,G,"buildDayLabel","buildMonthLabel","renderOutOfBoundsDate","renderRowHeader","renderRowFooter","renderCellDefault","styleCellDefault","renderCellStyleHighlight1","renderCellStyleHighlight2","renderCellStyleHighlight3","renderCellStyleHighlight4","renderCellStyleToday","renderCellStyleSelected","renderCellNotThisMonth","renderBodyCellRestricted","initStyles","configTitle","configClose","configIframe","configStrings","configNavigator","createTitleBar","createCloseButton","removeTitleBar","removeCloseButton","hide","show","toDate","_toDate","_parseArgs","browser");YAHOO.widget.CalGrp=B;YAHOO.widget.CalendarGroup=B;YAHOO.widget.Calendar2up=function(J,H,I){this.init(J,H,I);};YAHOO.extend(YAHOO.widget.Calendar2up,B);YAHOO.widget.Cal2up=YAHOO.widget.Calendar2up;})();YAHOO.widget.CalendarNavigator=function(A){this.init(A);};(function(){var A=YAHOO.widget.CalendarNavigator;A.CLASSES={NAV:"yui-cal-nav",NAV_VISIBLE:"yui-cal-nav-visible",MASK:"yui-cal-nav-mask",YEAR:"yui-cal-nav-y",MONTH:"yui-cal-nav-m",BUTTONS:"yui-cal-nav-b",BUTTON:"yui-cal-nav-btn",ERROR:"yui-cal-nav-e",YEAR_CTRL:"yui-cal-nav-yc",MONTH_CTRL:"yui-cal-nav-mc",INVALID:"yui-invalid",DEFAULT:"yui-default"};A._DEFAULT_CFG={strings:{month:"Month",year:"Year",submit:"Okay",cancel:"Cancel",invalidYear:"Year needs to be a number"},monthFormat:YAHOO.widget.Calendar.LONG,initialFocus:"year"};A.ID_SUFFIX="_nav";A.MONTH_SUFFIX="_month";A.YEAR_SUFFIX="_year";A.ERROR_SUFFIX="_error";A.CANCEL_SUFFIX="_cancel";A.SUBMIT_SUFFIX="_submit";A.YR_MAX_DIGITS=4;A.YR_MINOR_INC=1;A.YR_MAJOR_INC=10;A.UPDATE_DELAY=50;A.YR_PATTERN=/^\d+$/;A.TRIM=/^\s*(.*?)\s*$/;})();YAHOO.widget.CalendarNavigator.prototype={id:null,cal:null,navEl:null,maskEl:null,yearEl:null,monthEl:null,errorEl:null,submitEl:null,cancelEl:null,firstCtrl:null,lastCtrl:null,_doc:null,_year:null,_month:0,__rendered:false,init:function(A){var C=A.oDomContainer;this.cal=A;this.id=C.id+YAHOO.widget.CalendarNavigator.ID_SUFFIX;this._doc=C.ownerDocument;var B=YAHOO.env.ua.ie;this.__isIEQuirks=(B&&((B<=6)||(this._doc.compatMode=="BackCompat")));},show:function(){var A=YAHOO.widget.CalendarNavigator.CLASSES;if(this.cal.beforeShowNavEvent.fire()){if(!this.__rendered){this.render();}this.clearErrors();this._updateMonthUI();this._updateYearUI();this._show(this.navEl,true);this.setInitialFocus();this.showMask();YAHOO.util.Dom.addClass(this.cal.oDomContainer,A.NAV_VISIBLE);this.cal.showNavEvent.fire();}},hide:function(){var A=YAHOO.widget.CalendarNavigator.CLASSES;if(this.cal.beforeHideNavEvent.fire()){this._show(this.navEl,false);this.hideMask();YAHOO.util.Dom.removeClass(this.cal.oDomContainer,A.NAV_VISIBLE);this.cal.hideNavEvent.fire();}},showMask:function(){this._show(this.maskEl,true);if(this.__isIEQuirks){this._syncMask();}},hideMask:function(){this._show(this.maskEl,false);},getMonth:function(){return this._month;},getYear:function(){return this._year;},setMonth:function(A){if(A>=0&&A<12){this._month=A;}this._updateMonthUI();},setYear:function(B){var A=YAHOO.widget.CalendarNavigator.YR_PATTERN;if(YAHOO.lang.isNumber(B)&&A.test(B+"")){this._year=B;}this._updateYearUI();},render:function(){this.cal.beforeRenderNavEvent.fire();if(!this.__rendered){this.createNav();this.createMask();this.applyListeners();this.__rendered=true;}this.cal.renderNavEvent.fire();},createNav:function(){var B=YAHOO.widget.CalendarNavigator;var C=this._doc;var D=C.createElement("div");D.className=B.CLASSES.NAV;var A=this.renderNavContents([]);D.innerHTML=A.join("");this.cal.oDomContainer.appendChild(D);this.navEl=D;this.yearEl=C.getElementById(this.id+B.YEAR_SUFFIX);this.monthEl=C.getElementById(this.id+B.MONTH_SUFFIX);this.errorEl=C.getElementById(this.id+B.ERROR_SUFFIX);this.submitEl=C.getElementById(this.id+B.SUBMIT_SUFFIX);this.cancelEl=C.getElementById(this.id+B.CANCEL_SUFFIX);if(YAHOO.env.ua.gecko&&this.yearEl&&this.yearEl.type=="text"){this.yearEl.setAttribute("autocomplete","off");}this._setFirstLastElements();},createMask:function(){var B=YAHOO.widget.CalendarNavigator.CLASSES;var A=this._doc.createElement("div");A.className=B.MASK;this.cal.oDomContainer.appendChild(A);this.maskEl=A;},_syncMask:function(){var B=this.cal.oDomContainer;if(B&&this.maskEl){var A=YAHOO.util.Dom.getRegion(B);YAHOO.util.Dom.setStyle(this.maskEl,"width",A.right-A.left+"px");YAHOO.util.Dom.setStyle(this.maskEl,"height",A.bottom-A.top+"px");}},renderNavContents:function(A){var D=YAHOO.widget.CalendarNavigator,E=D.CLASSES,B=A;B[B.length]='<div class="'+E.MONTH+'">';this.renderMonth(B);B[B.length]="</div>";B[B.length]='<div class="'+E.YEAR+'">';this.renderYear(B);B[B.length]="</div>";B[B.length]='<div class="'+E.BUTTONS+'">';this.renderButtons(B);B[B.length]="</div>";B[B.length]='<div class="'+E.ERROR+'" id="'+this.id+D.ERROR_SUFFIX+'"></div>';return B;},renderMonth:function(D){var G=YAHOO.widget.CalendarNavigator,H=G.CLASSES;var I=this.id+G.MONTH_SUFFIX,F=this.__getCfg("monthFormat"),A=this.cal.cfg.getProperty((F==YAHOO.widget.Calendar.SHORT)?"MONTHS_SHORT":"MONTHS_LONG"),E=D;if(A&&A.length>0){E[E.length]='<label for="'+I+'">';E[E.length]=this.__getCfg("month",true);E[E.length]="</label>";E[E.length]='<select name="'+I+'" id="'+I+'" class="'+H.MONTH_CTRL+'">';for(var B=0;B<A.length;B++){E[E.length]='<option value="'+B+'">';E[E.length]=A[B];E[E.length]="</option>";}E[E.length]="</select>";}return E;},renderYear:function(B){var E=YAHOO.widget.CalendarNavigator,F=E.CLASSES;var G=this.id+E.YEAR_SUFFIX,A=E.YR_MAX_DIGITS,D=B;D[D.length]='<label for="'+G+'">';D[D.length]=this.__getCfg("year",true);D[D.length]="</label>";D[D.length]='<input type="text" name="'+G+'" id="'+G+'" class="'+F.YEAR_CTRL+'" maxlength="'+A+'"/>';return D;},renderButtons:function(A){var D=YAHOO.widget.CalendarNavigator.CLASSES;var B=A;B[B.length]='<span class="'+D.BUTTON+" "+D.DEFAULT+'">';B[B.length]='<button type="button" id="'+this.id+"_submit"+'">';B[B.length]=this.__getCfg("submit",true);B[B.length]="</button>";B[B.length]="</span>";B[B.length]='<span class="'+D.BUTTON+'">';B[B.length]='<button type="button" id="'+this.id+"_cancel"+'">';B[B.length]=this.__getCfg("cancel",true);B[B.length]="</button>";B[B.length]="</span>";return B;},applyListeners:function(){var B=YAHOO.util.Event;function A(){if(this.validate()){this.setYear(this._getYearFromUI());}}function C(){this.setMonth(this._getMonthFromUI());}B.on(this.submitEl,"click",this.submit,this,true);B.on(this.cancelEl,"click",this.cancel,this,true);B.on(this.yearEl,"blur",A,this,true);B.on(this.monthEl,"change",C,this,true);if(this.__isIEQuirks){YAHOO.util.Event.on(this.cal.oDomContainer,"resize",this._syncMask,this,true);}this.applyKeyListeners();},purgeListeners:function(){var A=YAHOO.util.Event;A.removeListener(this.submitEl,"click",this.submit);A.removeListener(this.cancelEl,"click",this.cancel);A.removeListener(this.yearEl,"blur");A.removeListener(this.monthEl,"change");if(this.__isIEQuirks){A.removeListener(this.cal.oDomContainer,"resize",this._syncMask);}this.purgeKeyListeners();},applyKeyListeners:function(){var D=YAHOO.util.Event,A=YAHOO.env.ua;var C=(A.ie||A.webkit)?"keydown":"keypress";var B=(A.ie||A.opera||A.webkit)?"keydown":"keypress";D.on(this.yearEl,"keypress",this._handleEnterKey,this,true);D.on(this.yearEl,C,this._handleDirectionKeys,this,true);D.on(this.lastCtrl,B,this._handleTabKey,this,true);D.on(this.firstCtrl,B,this._handleShiftTabKey,this,true);},purgeKeyListeners:function(){var D=YAHOO.util.Event,A=YAHOO.env.ua;var C=(A.ie||A.webkit)?"keydown":"keypress";var B=(A.ie||A.opera||A.webkit)?"keydown":"keypress";D.removeListener(this.yearEl,"keypress",this._handleEnterKey);D.removeListener(this.yearEl,C,this._handleDirectionKeys);D.removeListener(this.lastCtrl,B,this._handleTabKey);D.removeListener(this.firstCtrl,B,this._handleShiftTabKey);},submit:function(){if(this.validate()){this.hide();this.setMonth(this._getMonthFromUI());this.setYear(this._getYearFromUI());var B=this.cal;var A=YAHOO.widget.CalendarNavigator.UPDATE_DELAY;if(A>0){var C=this;window.setTimeout(function(){C._update(B);},A);}else{this._update(B);}}},_update:function(A){A.setYear(this.getYear());A.setMonth(this.getMonth());A.render();},cancel:function(){this.hide();},validate:function(){if(this._getYearFromUI()!==null){this.clearErrors();return true;}else{this.setYearError();this.setError(this.__getCfg("invalidYear",true));return false;}},setError:function(A){if(this.errorEl){this.errorEl.innerHTML=A;this._show(this.errorEl,true);}},clearError:function(){if(this.errorEl){this.errorEl.innerHTML="";this._show(this.errorEl,false);}},setYearError:function(){YAHOO.util.Dom.addClass(this.yearEl,YAHOO.widget.CalendarNavigator.CLASSES.INVALID);},clearYearError:function(){YAHOO.util.Dom.removeClass(this.yearEl,YAHOO.widget.CalendarNavigator.CLASSES.INVALID);},clearErrors:function(){this.clearError();this.clearYearError();},setInitialFocus:function(){var A=this.submitEl,C=this.__getCfg("initialFocus");if(C&&C.toLowerCase){C=C.toLowerCase();if(C=="year"){A=this.yearEl;try{this.yearEl.select();}catch(B){}}else{if(C=="month"){A=this.monthEl;}}}if(A&&YAHOO.lang.isFunction(A.focus)){try{A.focus();}catch(D){}}},erase:function(){if(this.__rendered){this.purgeListeners();this.yearEl=null;this.monthEl=null;this.errorEl=null;this.submitEl=null;this.cancelEl=null;this.firstCtrl=null;this.lastCtrl=null;if(this.navEl){this.navEl.innerHTML="";}var B=this.navEl.parentNode;if(B){B.removeChild(this.navEl);}this.navEl=null;var A=this.maskEl.parentNode;if(A){A.removeChild(this.maskEl);}this.maskEl=null;this.__rendered=false;}},destroy:function(){this.erase();this._doc=null;this.cal=null;this.id=null;},_show:function(B,A){if(B){YAHOO.util.Dom.setStyle(B,"display",(A)?"block":"none");}},_getMonthFromUI:function(){if(this.monthEl){return this.monthEl.selectedIndex;}else{return 0;}},_getYearFromUI:function(){var B=YAHOO.widget.CalendarNavigator;var A=null;if(this.yearEl){var C=this.yearEl.value;C=C.replace(B.TRIM,"$1");if(B.YR_PATTERN.test(C)){A=parseInt(C,10);}}return A;},_updateYearUI:function(){if(this.yearEl&&this._year!==null){this.yearEl.value=this._year;}},_updateMonthUI:function(){if(this.monthEl){this.monthEl.selectedIndex=this._month;}},_setFirstLastElements:function(){this.firstCtrl=this.monthEl;this.lastCtrl=this.cancelEl;if(this.__isMac){if(YAHOO.env.ua.webkit&&YAHOO.env.ua.webkit<420){this.firstCtrl=this.monthEl;this.lastCtrl=this.yearEl;}if(YAHOO.env.ua.gecko){this.firstCtrl=this.yearEl;this.lastCtrl=this.yearEl;}}},_handleEnterKey:function(B){var A=YAHOO.util.KeyListener.KEY;if(YAHOO.util.Event.getCharCode(B)==A.ENTER){YAHOO.util.Event.preventDefault(B);this.submit();}},_handleDirectionKeys:function(H){var G=YAHOO.util.Event,A=YAHOO.util.KeyListener.KEY,D=YAHOO.widget.CalendarNavigator;var F=(this.yearEl.value)?parseInt(this.yearEl.value,10):null;if(isFinite(F)){var B=false;switch(G.getCharCode(H)){case A.UP:this.yearEl.value=F+D.YR_MINOR_INC;B=true;break;case A.DOWN:this.yearEl.value=Math.max(F-D.YR_MINOR_INC,0);B=true;break;case A.PAGE_UP:this.yearEl.value=F+D.YR_MAJOR_INC;B=true;break;case A.PAGE_DOWN:this.yearEl.value=Math.max(F-D.YR_MAJOR_INC,0);B=true;break;default:break;}if(B){G.preventDefault(H);try{this.yearEl.select();}catch(C){}}}},_handleTabKey:function(D){var C=YAHOO.util.Event,A=YAHOO.util.KeyListener.KEY;if(C.getCharCode(D)==A.TAB&&!D.shiftKey){try{C.preventDefault(D);this.firstCtrl.focus();}catch(B){}}},_handleShiftTabKey:function(D){var C=YAHOO.util.Event,A=YAHOO.util.KeyListener.KEY;if(D.shiftKey&&C.getCharCode(D)==A.TAB){try{C.preventDefault(D);this.lastCtrl.focus();}catch(B){}}},__getCfg:function(D,B){var C=YAHOO.widget.CalendarNavigator._DEFAULT_CFG;var A=this.cal.cfg.getProperty("navigator");if(B){return(A!==true&&A.strings&&A.strings[D])?A.strings[D]:C.strings[D];}else{return(A!==true&&A[D])?A[D]:C[D];}},__isMac:(navigator.userAgent.toLowerCase().indexOf("macintosh")!=-1)};YAHOO.register("calendar",YAHOO.widget.Calendar,{version:"2.7.0",build:"1799"});YAHOO.namespace("Smb.Asteroids.Extensions.Form");var YSAE=YAHOO.Smb.Asteroids.Extensions;var UTIL=YSAE.Util;var entityRE=/fe_entity_([^\s]+)/;var datatypeRE=/fe_datatype_([^\s]+)/;YSAE.Form={ERR_MISSING_REQUIRED:'missing_required',ERR_INVALID_EMAIL:'invalid_email',ERR_SUBMISSION:'failed_to_submit',CONTENT:{'missing_required_msg':'<p>Sorry, we need a little more information. Please complete all of the required fields.</p>','invalid_email_msg':'<p>Your message includes an invalid email address. Please enter a valid address (like you@you.com) and try again.</p>','failed_to_submit_msg':'<p>Sorry, we\'re temporarily unable to submit your message. Please try again later.</p>','success_msg':'<p>Thank you for your message.</p>'},getCleanHTML:function(html){var div=document.createElement('div');div.innerHTML=html;var els=$D.getElementsByClassName('initZone','',div);for(var i=els.length-1;i>=0;i--){div.removeChild(els[i]);}
return UTIL.getInnerText(div);},harvest:function(form){var jsonObj={'records':{},'items':{}};var recordCount=0,itemCount=0;var fields=$D.getElementsByClassName('formElement','div',form);var errors={'count':0};errors[YSAE.Form.ERR_MISSING_REQUIRED]=[];errors[YSAE.Form.ERR_INVALID_EMAIL]=[];for(var i=0;i<fields.length;i++,recordCount++){if($D.hasClass(fields[i],'hidden')){continue;}
var numSubmitBtn=$D.getElementsByClassName('fe_submit','',fields[i]).length;var numResetBtn=$D.getElementsByClassName('fe_reset','',fields[i]).length;if((numSubmitBtn+numResetBtn)>0){continue;}
var rguid='form.recordGuid.'+recordCount;jsonObj.records[rguid]={'guid':rguid,'name':'formField'};itemCount++;var label=fields[i].getElementsByTagName('label')[0];var labelText=YSAE.Form.getCleanHTML(label.innerHTML);var iguid='form.itemGuid.'+itemCount;jsonObj.items[iguid]={'guid':iguid,'name':'label','value':labelText,'record_guid':rguid,'record_name':'formField'};itemCount++;iguid='form.itemGuid.'+itemCount;var fieldId=fields[i].id;var fieldGuid='';if(fieldId&&fieldId.indexOf('module_')===0){fieldGuid=fieldId.substr(7);}
jsonObj.items[iguid]={'guid':iguid,'name':'formElementGuid','value':fieldGuid,'record_guid':rguid,'record_name':'formField'};var ctrlNode=$D.getElementsByClassName(/fe_ctrl_\w/,'',fields[i])[0];var entity='',datatype='';if(ctrlNode){var className=ctrlNode.className;var matchResult=entityRE.exec(className);if(matchResult){itemCount++;iguid='form.itemGuid.'+itemCount;entity=matchResult[1];jsonObj.items[iguid]={'guid':iguid,'name':'entity','value':entity,'record_guid':rguid,'record_name':'formField'};}
matchResult=datatypeRE.exec(className);if(matchResult){itemCount++;iguid='form.itemGuid.'+itemCount;datatype=matchResult[1];jsonObj.items[iguid]={'guid':iguid,'name':'dataType','value':datatype,'record_guid':rguid,'record_name':'formField'};}}
var value='';if(ctrlNode){if(YAHOO.env.ua.gecko&&ctrlNode.blur){ctrlNode.blur();}
switch(ctrlNode.tagName.toLowerCase()){case'fieldset':var labels=ctrlNode.getElementsByTagName('label');for(var x=0,y=labels.length;x<y;x++){var input=labels[x].getElementsByTagName('input');if(input){input=input[0];if(input.checked){if(value.length){value+='; ';}
value+=(input.value)?input.value:((YAHOO.env.ua.ie)?labels[x].innerText:labels[x].lastChild.nodeValue);}}}
break;case'input':case'textarea':value=UTIL.trim(ctrlNode.value);break;case'select':if(ctrlNode.value){value=ctrlNode.value;}else{var ctrlNode_opt=ctrlNode.options[ctrlNode.selectedIndex];if(YAHOO.env.ua.ie){value=(ctrlNode_opt.value)?ctrlNode_opt.value:ctrlNode_opt.innerText;}else if(ctrlNode_opt.firstChild){value=ctrlNode_opt.firstChild.nodeValue;}}
break;}}
var required=($D.getElementsByClassName('fe_required','em',fields[i]).length>0);if(required&&value===''){errors.count+=1;var len=errors[YSAE.Form.ERR_MISSING_REQUIRED].length;errors[YSAE.Form.ERR_MISSING_REQUIRED][len]=labelText;YSAE.Form.addInlineError(fields[i],YSAE.Form.ERR_MISSING_REQUIRED);continue;}
var isEmail=('email'===datatype.toLowerCase());if(isEmail&&!UTIL.isValidEmail(value)){if(required||value!==''){errors.count+=1;len=errors[YSAE.Form.ERR_INVALID_EMAIL].length;errors[YSAE.Form.ERR_INVALID_EMAIL][len]=labelText;YSAE.Form.addInlineError(fields[i],YSAE.Form.ERR_INVALID_EMAIL);continue;}}
YSAE.Form.clearInlineError(fields[i]);itemCount++;iguid='form.itemGuid.'+itemCount;jsonObj.items[iguid]={'guid':iguid,'name':'value','value':value,'record_guid':rguid,'record_name':'formField'};}
rguid='form.recordGuid.contactInfo';jsonObj.records[rguid]={'guid':rguid,'name':'contactInfo'};iguid='form.itemGuid.emailAddress';var emailAddress=$(form.id+'_EmailAddress').value;jsonObj.items[iguid]={'guid':iguid,'name':'emailAddress','value':emailAddress,'record_guid':rguid,'record_name':'contactInfo'};rguid='form.recordGuid.form';jsonObj.records[rguid]={'guid':rguid,'name':'form'};iguid='form.itemGuid.data';var data=$(form.id+'_FormDataName').value;jsonObj.items[iguid]={'guid':iguid,'name':'data','value':data,'record_guid':rguid,'record_name':'form'};iguid='form.itemGuid.desc';var desc=$(form.id+'_FormDescription').value;jsonObj.items[iguid]={'guid':iguid,'name':'desc','value':desc,'record_guid':rguid,'record_name':'form'};iguid='form.itemGuid.formGuid';var formGuid=$(form.id+'_FormGuid').value;jsonObj.items[iguid]={'guid':iguid,'name':'formGuid','value':formGuid,'record_guid':rguid,'record_name':'form'};$LOG('jsonObj=');$LOG(jsonObj);$(form.id+'_JSONPayload').value=YSAE.Util.serialize(jsonObj);return errors.count===0?{'failed':false}:{'failed':true,'errors':errors};},submit:function(submitBtn){var form=YSAE.Util.getAncestorByTagName(submitBtn,'form');if(!form){return;}
$LOG('Submitting form '+form.id);var result=this.harvest(form);if(result.failed){YSAE.Form.showError(form,result.errors);return;}
var pageName=document.location.pathname;if(pageName.charAt(0)=='/'){pageName=pageName.substr(1);var index=pageName.indexOf('/');if(index>0){pageName=pageName.substr(0,index);}}
var isPreview=/\/admin\/preview\/?$/.test(document.location.pathname);var url=isPreview?('/'+pageName+'/admin/submit/'):('/'+pageName+'/submit/');$C.setForm(form,false);var request=$C.asyncRequest('POST',url,{success:function(){form.reset();YSAE.Form.showSuccess(form);},failure:function(){var errObj={'count':1};errObj[YSAE.Form.ERR_SUBMISSION]=true;YSAE.Form.showError(form,errObj);}});},reset:function(form){YSAE.Form.hideAlert(form);YSAE.Form.resetFields(form);},resetFields:function(form){if(!form){return;}
$(form.id+'_JSONPayload').value='';YSAE.Form.hideAlert(form);var fields=$D.getElementsByClassName('formElement','div',form);for(var i=0;i<fields.length;i++){if($D.hasClass(fields[i],'hidden')){continue;}
YSAE.Form.clearInlineError(fields[i]);if(YAHOO.env.ua.gecko){var inputs=fields[i].getElementsByTagName('*');for(var k=0;k<inputs.length;k++){if(inputs[k].blur){inputs[k].blur();}}}}},showSuccess:function(form){$LOG('form submission success');var alertContainer=$(form.id+'_AlertContainer');alertContainer.innerHTML=YSAE.Form.CONTENT.success_msg;$D.addClass(alertContainer,'formSuccessAlert');$D.removeClass(alertContainer,'formErrorAlert');$D.removeClass(alertContainer,'displayNone');},showError:function(form,errObj){$LOG('form submission error',errObj);var alertContainer=$(form.id+'_AlertContainer');var msg='';if(YAHOO.lang.isArray(errObj[YSAE.Form.ERR_MISSING_REQUIRED])&&errObj[YSAE.Form.ERR_MISSING_REQUIRED].length>0){msg=YSAE.Form.CONTENT.missing_required_msg;}
if(YAHOO.lang.isArray(errObj[YSAE.Form.ERR_INVALID_EMAIL])&&errObj[YSAE.Form.ERR_INVALID_EMAIL].length>0){msg+=YSAE.Form.CONTENT.invalid_email_msg;}
if(errObj[YSAE.Form.ERR_SUBMISSION]){msg=YSAE.Form.CONTENT.failed_to_submit_msg;}
alertContainer.innerHTML=msg;$D.addClass(alertContainer,'formErrorAlert');$D.removeClass(alertContainer,'formSuccessAlert');$D.removeClass(alertContainer,'displayNone');},hideAlert:function(form){var alertContainer=$(form.id+'_AlertContainer');$D.addClass(alertContainer,'displayNone');},addInlineError:function(fieldObj,errCode){var errorEM=$D.getElementsByClassName('fe_error','em',fieldObj)[0];if(!errorEM){var label=fieldObj.getElementsByTagName('label')[0];if(label){var em=document.createElement('em');em.innerHTML='!';$D.addClass(em,'fe_error');$D.insertAfter(em,label);}}
$D.addClass(fieldObj,'fe_error');},clearInlineError:function(fieldObj){var errorEM=$D.getElementsByClassName('fe_error','em',fieldObj)[0];if(errorEM){errorEM.parentNode.removeChild(errorEM);}
$D.removeClass(fieldObj,'fe_error');},init:function(){var that=this;var btn,i;var submitBtns=$D.getElementsByClassName('fe_submit','button','bd');for(i=0;i<submitBtns.length;i++){btn=submitBtns[i];$E.on(btn,'click',function(e){$E.stopEvent(e);that.submit(btn);});}
var resetBtns=$D.getElementsByClassName('fe_reset','button','bd');for(i=0;i<resetBtns.length;i++){btn=resetBtns[i];var form=YSAE.Util.getAncestorByTagName(btn,'form');if(!form){continue;}
$E.on(form,'reset',function(e){that.reset(form);});}}};$E.onAvailable('ft',YSAE.Form.init,YSAE.Form,true);$E.onAvailable('ft',function(){YSAEFW.init();});YAHOO.namespace('Smb.Asteroids.Extensions.Form.Widget');var YSAEFW=YAHOO.Smb.Asteroids.Extensions.Form.Widget;YSAEFW={init:function(){var that=this;var x=$D.getElementsByClassName('fe_wgt','',document,YSAEFW.convertInput);for(var i=0,j=x.length;i<j;i++){if(x[i]._widgetManager){this.widgetManagers.push(x[i]._widgetManager);}}
if(that.widgetManagers&&that.widgetManagers.length){for(var i=0,j=document.forms.length;i<j;i++){$E.on(document.forms[i],'reset',function(e){var the=that;var form=this;window.setTimeout(function(){for(var x=0,y=the.widgetManagers.length;x<y;x++){if(the.widgetManagers[x].form==form){the.widgetManagers[x].reset();}}},10);});}
$E.on(document,"click",function(e){var el=$E.getTarget(e);for(var i=0,j=that.widgetManagers.length;i<j;i++){if(!that.widgetManagers[i].inBounds(el)){that.widgetManagers[i].hide();}}});}},widgetManagers:[],convertInput:function(el){el=(el)?el:this;var wgt=el.className.toString().match(/fe_wgt_(\w+)/);if(wgt){var wgtMgr=new YSAEFW.widgetManager(el);switch(wgt[1]){case'calendar':wgtMgr.addWidget(YSAEFW.Calendar);wgtMgr.hideOriginal();break;case'time':wgtMgr.addWidget(YSAEFW.Clock);wgtMgr.hideOriginal();break;case'timestamp':wgtMgr.addWidget(YSAEFW.Clock,1);wgtMgr.addWidget(YSAEFW.Calendar);wgtMgr.hideOriginal();break;case'states':wgtMgr.addWidget(YSAEFW.States);break;}}}};YSAEFW.widgetManager=function(input){this.input=input;this.widgets=[];this.input._widgetManager=this;this.form=this.input.form;};YSAEFW.widgetManager.prototype.hideOriginal=function(){$D.addClass(this.input,'displayNone');};YSAEFW.widgetManager.prototype.addWidget=function(wgt,priority){this.widgets.push(new wgt(this,priority));var wgtCmp=function(a,b){if(a.priority<b.priority){return-1;}
if(a.priority>b.priority){return 1;}
return 0;};this.widgets.sort(wgtCmp);this.update();};YSAEFW.widgetManager.prototype.update=function(){var vals=[];for(var i=0,j=this.widgets.length;i<j;i++){vals.push(this.widgets[i].value);}
this.input.value=vals.join(', ');};YSAEFW.widgetManager.prototype.hide=function(){for(var i=0,j=this.widgets.length;i<j;i++){if(typeof(this.widgets[i].hide)=='function'){this.widgets[i].hide();}}};YSAEFW.widgetManager.prototype.inBounds=function(el){for(var i=0,j=this.widgets.length;i<j;i++){var wgt=this.widgets[i];for(var x=0,y=wgt.boundingElements.length;x<y;x++){var bound=wgt.boundingElements[x];if(el==bound||$D.isAncestor(bound,el)){return true;}}}
return false;};YSAEFW.widgetManager.prototype.reset=function(){for(var i=0,j=this.widgets.length;i<j;i++){if(typeof(this.widgets[i].reset)=='function'){this.widgets[i].reset();}}};YSAEFW.States=function(wgtMgr,priority){var that=this;this.mgr=wgtMgr;this.input=this.mgr.input;this.value='';this.priority=(priority)?priority:0;this.ui={country:null};this.boundingElements=[];this.initial={className:this.input.className,name:this.input.name};this.category=this.input.className.match(/fe_kind_(\w+)State/);if(this.category){this.category=this.category[1];this.resolveCountryMenu();if(this.ui.country){this.countryStates={};var optgps=this.input.getElementsByTagName('optgroup');if(optgps&&optgps.length){for(var i=0,j=optgps.length;i<j;i++){this.countryStates[optgps[i].label.toLowerCase()]=[];var states=this.countryStates[optgps[i].label.toLowerCase()];var opts=optgps[i].getElementsByTagName('option');for(var x=0,y=opts.length;x<y;x++){states.push(opts[x]);}}}
$E.on(this.ui.country,'change',function(){that.updateStateMenu()});}
this.updateStateMenu();}};YSAEFW.States.prototype={resolveCountryMenu:function(){var cMenu=$D.getElementsByClassName('fe_kind_'+this.category+'Country','select',this.input.form);this.ui.country=(cMenu&&cMenu.length)?cMenu[0]:null;},updateStateMenu:function(e){var ckey=(this.ui.country)?this.ui.country.options[this.ui.country.selectedIndex][(document.all)?'innerText':'value'].toLowerCase():null;if(ckey&&this.countryStates[ckey]&&this.countryStates[ckey].length){this.loadCountry(ckey);}else{this.showAsText();}},showAsText:function(){var input=xElement('input','class',this.initial.className,'name',this.initial.name,'type','text');this.input.parentNode.replaceChild(input,this.input);this.input=input;},loadCountry:function(cntry){var select=xElement('select','class',this.initial.className,'name',this.initial.name);for(var i=0,j=this.countryStates[cntry].length;i<j;i++){select.appendChild(this.countryStates[cntry][i]);}
select.options[0].selected=1;this.input.parentNode.replaceChild(select,this.input);this.input=select;},reset:function(){this.updateStateMenu();}};YSAEFW.Clock=function(wgtMgr,priority){var that=this;this.mgr=wgtMgr;this.input=this.mgr.input;this.value='';this.priority=(priority)?priority:0;this.ui={div:xElement('div','class','wgt_clock'),hours:xElement('select','class','wgt_clock_4ch',xElement('option','12 AM'),xElement('option','1 AM'),xElement('option','2 AM'),xElement('option','3 AM'),xElement('option','4 AM'),xElement('option','5 AM'),xElement('option','6 AM'),xElement('option','7 AM'),xElement('option','8 AM'),xElement('option','9 AM'),xElement('option','selected','selected',xText('10 AM')),xElement('option','11 AM'),xElement('option','12 PM'),xElement('option','1 PM'),xElement('option','2 PM'),xElement('option','3 PM'),xElement('option','4 PM'),xElement('option','5 PM'),xElement('option','6 PM'),xElement('option','7 PM'),xElement('option','8 PM'),xElement('option','9 PM'),xElement('option','10 PM'),xElement('option','11 PM')),minutes:xElement('select',xElement('option','00'),xElement('option','10'),xElement('option','20'),xElement('option','30'),xElement('option','40'),xElement('option','50'))};this.initialIndice=[10,0];this.ui.div.appendChild(this.ui.hours);this.ui.div.appendChild(this.ui.minutes);this.boundingElements=[];$D.insertAfter(this.ui.div,this.input);$E.on(this.ui.hours,'change',function(){that.updateTime()});$E.on(this.ui.minutes,'change',function(){that.updateTime()});this.reset();};YSAEFW.Clock.prototype.reset=function(){this.ui.hours.options[this.initialIndice[0]].selected=1;this.ui.minutes.options[this.initialIndice[1]].selected=1;this.updateTime();};YSAEFW.Clock.prototype.updateTime=function(){var hrs=(document.all)?this.ui.hours.options[this.ui.hours.selectedIndex].innerHTML:this.ui.hours.value;var mins=(document.all)?this.ui.minutes.options[this.ui.minutes.selectedIndex].innerHTML:this.ui.minutes.value;this.value=parseInt(hrs)+':'+mins+' '+hrs.match(/([amp]+)/i)[1];this.mgr.update();};YSAEFW.Calendar=function(wgtMgr,priority){var that=this;this.value='';this.mgr=wgtMgr;this.input=this.mgr.input;this.inputId=(this.input.getAttribute('id'))?this.input.getAttribute('id'):'r'+Math.round(Math.random()*1000).toString(13);this.priority=priority?priority:0;this.button=new YSAEFW.CalendarButton(this);this.dialog=new YAHOO.widget.Dialog(this.inputId+'_c',{visible:false,context:[that.button.ui.button,"tl","bl"],draggable:false,close:false,zIndex:2});this.dialog.setBody('<div id="'+this.inputId+'"></div>');this.dialog.render(document.body);if(this.dialog.iframe){this.dialog.element.insertBefore(this.dialog.iframe,this.dialog.element.firstChild);}
if(this.dialog.resizeMonitor){$D.addClass(this.dialog.resizeMonitor,'displayNone');}
$D.setStyle(this.dialog.element,'top',$D.getY(this.button.ui.button)+'px');$D.setStyle(this.dialog.element,'position','absolute');$D.addClass(this.dialog.element,'wgt_calendar_box');this.dialog.hideWgt=function(){$D.addClass(that.dialog.element,'displayNone');that.dialog.hide();that.isOpen=0;};this.dialog.showWgt=function(){$D.setStyle(that.dialog.element,'left',$D.getX(that.button.ui.button)+'px');$D.removeClass(that.dialog.element,'displayNone');that.dialog.show();if(that.dialog.iframe){that.dialog.iframe.style.zIndex=0;that.dialog.iframe.style.left=that.dialog.iframe.style.top=0;}
that.isOpen=1;};this.calendarHandlers={select:function(){that.setDate(that.calendar.getSelectedDates()[0]);},render:function(){that.dialog.fireEvent("changeContent");}};this.calendar=new YAHOO.widget.Calendar(this.inputId,{iframe:false,hide_blank_weeks:true});this.calendar.selectEvent.subscribe(this.calendarHandlers.select);this.calendar.renderEvent.subscribe(this.calendarHandlers.render);this.calendar.render();this.boundingElements=[this.dialog.element,this.button.ui.button];this.reset();};YSAEFW.Calendar.prototype.reset=function(dObj){this.setDate();};YSAEFW.Calendar.prototype.setDate=function(dObj){dObj=dObj?dObj:this.calendar.today;this.calendar.cfg.setProperty("pagedate",dObj);this.calendar.render();this.value=this.calendar.cfg.getProperty("WEEKDAYS_LONG")[dObj.getDay()]+", "+dObj.getDate()+" "+this.calendar.cfg.getProperty("MONTHS_LONG")[dObj.getMonth()]+" "+dObj.getFullYear();this.button.setDate(dObj);this.dialog.hideWgt();this.mgr.update();};YSAEFW.Calendar.prototype.hide=function(){this.dialog.hideWgt();};YSAEFW.CalendarButton=function(parent){this.parent=parent;var input=this.parent.mgr.input;this.ui={div:xElement('div','class','wgt_calendar')};this.ui.button=this.ui.div.appendChild(xElement('button','type','button','class','yss-b btn_bg_calendar',xElement('span','class','s1',xElement('span','class','s2',xElement('span','class','s3',xElement('span','class','s4',xElement('b','--/--/--'),xElement('span')))))));this.ui.text=this.ui.button.getElementsByTagName('b')[0];$D.insertAfter(this.ui.div,input);$E.on(this.ui.button,'click',function(){parent.dialog[(parent.isOpen)?'hideWgt':'showWgt']();});};YSAEFW.CalendarButton.prototype.setDate=function(dObj){dObj=dObj?dObj:this.parent.calendar.today;this.ui.text.innerHTML=(dObj.getMonth()+1)+'/'+dObj.getDate()+'/'+dObj.getFullYear().toString().substring(2);};function xElement(t){var e=(typeof(t)=='string')?document.createElement(t):t.cloneNode(1);var a=arguments;if(a.length==2&&a[1].constructor==String){e.appendChild(xText(a[1]));}else{params:for(var i=1,j=a.length;i<j;i++){if(typeof(a[i])=='string'){var attr=a[i++];if(document.all){switch(attr){case'class':attr='className';break;case'style':e.style.cssText=a[i];continue params;break;}}else{switch(attr){case'className':attr='class';break;}}
e.setAttribute(attr,a[i]);}else{e.appendChild(a[i]);}}}
return e;}
function xText(str){return document.createTextNode((str.toString)?str:'');}