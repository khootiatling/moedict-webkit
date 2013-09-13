!function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;k=this,l=k.sax||require("sax"),i=k.glMatrix||require("./gl-matrix-min"),f=function(a,b,c,d){var e;return k.window?jQuery.ajax({type:"GET",url:a,dataType:"text",progress:d}).done(b).fail(c):(e=require("fs"),e.readFile(a,{encoding:"utf8"},function(a,d){return a?c(a):b(d)}))},c=function(a,b,c,d){var e;return k.window?jQuery.ajax({type:"GET",url:a,dataType:"json",progress:d}).done(b).fail(c):(e=require("fs"),e.readFile(a,{encoding:"utf8"},function(a,d){return a?c(a):b(JSON.parse(d))}))},j=function(a,b,c){var d,e,f,g,h,i,j;return g=[],e=[],j=[],d=void 0,i=void 0,h=!0,f=l.parser(h),f.onopentag=function(a){if(void 0!==d)switch(a.name){case"MoveTo":return d.push({type:"M",x:parseFloat(a.attributes.x),y:parseFloat(a.attributes.y)});case"LineTo":return d.push({type:"L",x:parseFloat(a.attributes.x),y:parseFloat(a.attributes.y)});case"CubicTo":return d.push({type:"C",begin:{x:parseFloat(a.attributes.x1),y:parseFloat(a.attributes.y1)},mid:{x:parseFloat(a.attributes.x2),y:parseFloat(a.attributes.y2)},end:{x:parseFloat(a.attributes.x3),y:parseFloat(a.attributes.y3)}});case"QuadTo":return d.push({type:"Q",begin:{x:parseFloat(a.attributes.x1),y:parseFloat(a.attributes.y1)},end:{x:parseFloat(a.attributes.x2),y:parseFloat(a.attributes.y2)}})}else if(void 0!==i)switch(a.name){case"MoveTo":return i.push({x:parseFloat(a.attributes.x),y:parseFloat(a.attributes.y),size:a.attributes.size?parseFloat(a.attributes.size):void 0})}else if("Outline"===a.name&&(d=[]),"Track"===a.name)return i=[]},f.onclosetag=function(a){return"Outline"===a&&(e.push(d),d=void 0),"Track"===a?(j.push(i),i=void 0):void 0},f.onend=function(){var a,c,f;for(a=c=0,f=e.length;f>c;a=++c)d=e[a],i=j[a],g.push({outline:d,track:i});return b(g)},f.onerror=function(a){return c(a)},f.write(a).close()},e=function(a,b,c){return f(a,function(a){return j(a,b,c)},c)},h=function(a,b,c,d){var e;return e=new XMLHttpRequest,e.open("GET",a,!0),e.responseType="arraybuffer",e.onprogress=d,e.onreadystatechange=function(){return 4===this.readyState?200===this.status?"function"==typeof b?b(this.response):void 0:"function"==typeof c?c(this.status):void 0:void 0},e.send()},d=function(a,b,c,d){var e,f;return k.window?(f=""+a.substr(0,6)+a.substr(a.length-6,2)+".bin",e=parseInt(a.substr(6,a.length-12),16),h(f,function(a){var d,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I;for(p=8.046875,g=new DataView(a),s=g.getUint16(0,!0),h=w=0;s>=0?s>w:w>s;h=s>=0?++w:--w)if(i=g.getUint16(2+6*h,!0),i===e){l=g.getUint32(2+6*h+2,!0);break}if(h===s)return"function"==typeof c?c(new Error("stroke not found")):void 0;for(n=0,o=[],t=g.getUint8(l+n++),x=0;t>=0?t>x:x>t;t>=0?x++:x--){for(m=[],f=g.getUint8(l+n++),y=0;f>=0?f>y:y>f;f>=0?y++:y--)m.push({type:String.fromCharCode(g.getUint8(l+n++))});for(z=0,A=m.length;A>z;z++)switch(d=m[z],d.type){case"M":d.x=p*g.getUint8(l+n++);break;case"L":d.x=p*g.getUint8(l+n++);break;case"Q":d.begin={x:p*g.getUint8(l+n++)},d.end={x:p*g.getUint8(l+n++)};break;case"C":d.begin={x:p*g.getUint8(l+n++)},d.mid={x:p*g.getUint8(l+n++)},d.end={x:p*g.getUint8(l+n++)}}for(E=0,B=m.length;B>E;E++)switch(d=m[E],d.type){case"M":d.y=p*g.getUint8(l+n++);break;case"L":d.y=p*g.getUint8(l+n++);break;case"Q":d.begin.y=p*g.getUint8(l+n++),d.end.y=p*g.getUint8(l+n++);break;case"C":d.begin.y=p*g.getUint8(l+n++),d.mid.y=p*g.getUint8(l+n++),d.end.y=p*g.getUint8(l+n++)}for(u=[],v=g.getUint8(l+n++),q=[],r=g.getUint8(l+n++),F=0;r>=0?r>F:F>r;r>=0?F++:F--)q.push(g.getUint8(l+n++));for(G=0;v>=0?v>G:G>v;v>=0?G++:G--)u.push({x:p*g.getUint8(l+n++)});for(H=0,C=u.length;C>H;H++)k=u[H],k.y=p*g.getUint8(l+n++);for(I=0,D=q.length;D>I;I++)j=q[I],u[j].size=p*g.getUint8(l+n++);o.push({outline:m,track:u})}return"function"==typeof b?b(o):void 0},c,d)):console.log("not implement")},a=void 0,g=Array.prototype.forEach,m=function(a){var b,c,d;for(c=[];a.length;)/[\uD800-\uDBFF]/.test(a.substr(0,1))?(d=a.substr(0,2),b=1024*(d.charCodeAt(0)-55296)+d.charCodeAt(1)-56320+65536,c.push({cp:b.toString(16),text:d}),a=a.substr(2)):(c.push({cp:a.charCodeAt(0).toString(16),text:a.substr(0,1)}),a=a.substr(1));return c},n=function(a,b,c){var d,e,f;return f=i.vec2.clone([b,c]),d=i.mat2d.clone(a),e=i.vec2.create(),i.vec2.transformMat2d(e,f,d),{x:e[0],y:e[1]}},o=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,o,p,q,r;for(g=[],j=0,m=a.length;m>j;j++){for(h=a[j],e={outline:[],track:[]},q=h.outline,k=0,o=q.length;o>k;k++)switch(c=q[k],c.type){case"M":f=n(b,c.x,c.y),e.outline.push({type:c.type,x:f.x,y:f.y});break;case"L":f=n(b,c.x,c.y),e.outline.push({type:c.type,x:f.x,y:f.y});break;case"C":d={type:c.type},f=n(b,c.begin.x,c.begin.y),d.begin={x:f.x,y:f.y},f=n(b,c.mid.x,c.mid.y),d.mid={x:f.x,y:f.y},f=n(b,c.end.x,c.end.y),d.end={x:f.x,y:f.y},e.outline.push(d);break;case"Q":d={type:c.type},f=n(b,c.begin.x,c.begin.y),d.begin={x:f.x,y:f.y},f=n(b,c.end.x,c.end.y),d.end={x:f.x,y:f.y},e.outline.push(d)}for(r=h.track,l=0,p=r.length;p>l;l++)i=r[l],f=n(b,i.x,i.y),e.track.push({x:f.x,y:f.y});g.push(e)}return g},a=function(a){var b,f,g;return f={xml:e,json:c,bin:d},a=$.extend({url:"./json/",dataType:"json"},a),b={},g={transform:o,get:function(c,d,e,g){return b[c]?"function"==typeof d?d(b[c]):void 0:f[a.dataType](""+a.url+c+"."+a.dataType,function(a){return"function"==typeof d?d(b[c]=a):void 0},function(a){return"function"==typeof e?e(a):void 0},g)}}},k.window?(window.WordStroker||(window.WordStroker={}),window.WordStroker.utils={sortSurrogates:m,StrokeData:a,fetchStrokeXml:f,fetchStrokeJSON:c,fetchStrokeJSONFromXml:e}):(b={utils:{sortSurrogates:m,StrokeData:a,fetchStrokeXml:f,fetchStrokeJSON:c,fetchStrokeJSONFromXml:e}},module.exports=b)}.call(this),function(){$(function(){var a,b,c,d,e;return c=function(a){var b,c,d,e;for(c=[],d=0,e=a.length;e>d;d++)b=a[d],1===b.nodeType&&c.push(b);return c},a=function(a,b,c){var d,e,f,g,h,i;for(f=[],i=b.childNodes,g=0,h=i.length;h>g;g++)if(e=i[g],1===e.nodeType&&(d=e.attributes))switch(e.nodeName){case"MoveTo":f.push(["M",parseFloat(d.x.value),parseFloat(d.y.value)]);break;case"LineTo":f.push(["L",parseFloat(d.x.value),parseFloat(d.y.value)]);break;case"CubicTo":f.push(["C",parseFloat(d.x1.value),parseFloat(d.y1.value),parseFloat(d.x2.value),parseFloat(d.y2.value),parseFloat(d.x3.value),parseFloat(d.y3.value)]);break;case"QuadTo":f.push(["Q",parseFloat(d.x1.value),parseFloat(d.y1.value),parseFloat(d.x2.value),parseFloat(d.y2.value)])}return a.path(f).attr(c).transform("s0.2,0.2,0,0")},b=function(a,b){return $.get("utf8/"+a.toLowerCase()+".xml",b,"xml")},d=function(c,d){var e;return e=escape(d).replace(/%u/,""),b(e,function(b){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;for(f=430,j=Raphael(c,f,f),g=["M0,0 L0,"+f,"M"+f+",0 L"+f+","+f,"M0,0 L"+f+",0","M0,"+f+",0 L"+f+","+f,"M"+Math.round(f/3)+",0 L"+Math.round(f/3)+","+f,"M"+Math.round(2*(f/3))+",0 L"+Math.round(2*(f/3))+","+f,"M0,"+Math.round(f/3)+" L"+f+","+Math.round(f/3),"M0,"+Math.round(2*(f/3))+" L"+f+","+Math.round(2*(f/3))],m=0,o=g.length;o>m;m++)h=g[m],j.path(h).attr({"stroke-width":1,stroke:"#a33"});for(Raphael.getColor(),Raphael.getColor(),d=Raphael.getColor(),k={stroke:d,"stroke-width":5,"stroke-linecap":"round",fill:d},l=0,e=500,q=b.getElementsByTagName("Outline"),r=[],n=0,p=q.length;p>n;n++)i=q[n],r.push(function(b){return setTimeout(function(){return a(j,b,k)},l+=e)}(i));return r})},e=function(a,b){var c,e,f,g,h;for(g=b.split(/(?:)/),h=[],e=0,f=g.length;f>e;e++)c=g[e],h.push(d(a,c));return h},window.WordStroker||(window.WordStroker={}),window.WordStroker.raphael={strokeWords:e}})}.call(this),function(){$(function(){var a,b,c,d,e,f,g;return f={dim:2150,trackWidth:150},b=[1,0,0,1,100,100],a=function(a){var b;return this.options=$.extend({scales:{fill:.4,style:.25},updatesPerStep:10,delays:{stroke:.25,word:.5},progress:null,url:"./",dataType:"json"},a,f),this.matrix=[this.options.scales.fill,0,0,this.options.scales.fill,0,0],this.myCanvas=document.createElement("canvas"),b=$(this.myCanvas),b.css("width",this.styleWidth()+"px"),b.css("height",this.styleHeight()+"px"),this.myCanvas.width=this.fillWidth(),this.myCanvas.height=this.fillHeight(),this.canvas=this.myCanvas,this},a.prototype.init=function(){return this.currentStroke=0,this.currentTrack=0,this.time=0},a.prototype.width=function(){return this.options.dim},a.prototype.height=function(){return this.options.dim},a.prototype.fillWidth=function(){return this.width()*this.options.scales.fill},a.prototype.fillHeight=function(){return this.height()*this.options.scales.fill},a.prototype.styleWidth=function(){return this.fillWidth()*this.options.scales.style},a.prototype.styleHeight=function(){return this.fillHeight()*this.options.scales.style},a.prototype.drawBackground=function(a){var b;return this.canvas=a?a:this.myCanvas,b=this.canvas.getContext("2d"),b.fillStyle="#FFF",b.fillRect(0,0,this.fillWidth(),this.fillHeight()),c(b,this.fillWidth())},a.prototype.draw=function(a,b){var c,d=this;return this.init(),this.strokes=a,this.canvas=b?b:this.myCanvas,c=this.canvas.getContext("2d"),c.strokeStyle="#000",c.fillStyle="#000",c.lineWidth=5,requestAnimationFrame(function(){return d.update()}),this.promise=$.Deferred()},a.prototype.update=function(){var a,b,c,d,e,f,h=this;if(!(this.currentStroke>=this.strokes.length)){for(a=this.canvas.getContext("2d"),a.setTransform.apply(a,this.matrix),d=this.strokes[this.currentStroke],0===this.time&&(this.vector={x:d.track[this.currentTrack+1].x-d.track[this.currentTrack].x,y:d.track[this.currentTrack+1].y-d.track[this.currentTrack].y,size:d.track[this.currentTrack].size||this.options.trackWidth},a.save(),a.beginPath(),g(a,d.outline),a.clip()),c=e=1,f=this.options.updatesPerStep;(f>=1?f>=e:e>=f)&&(this.time+=.02,this.time>=1&&(this.time=1),a.beginPath(),a.arc(d.track[this.currentTrack].x+this.vector.x*this.time,d.track[this.currentTrack].y+this.vector.y*this.time,2*this.vector.size,0,2*Math.PI),a.fill(),!(this.time>=1));c=f>=1?++e:--e);return b=0,this.time>=1&&(a.restore(),this.time=0,this.currentTrack+=1),this.currentTrack>=d.track.length-1&&(this.currentTrack=0,this.currentStroke+=1,b=this.options.delays.stroke),this.currentStroke>=this.strokes.length?setTimeout(function(){return h.promise.resolve()},1e3*this.options.delays.word):b?setTimeout(function(){return requestAnimationFrame(function(){return h.update()})},1e3*b):requestAnimationFrame(function(){return h.update()})}},c=function(a,b){return a.strokeStyle="#A33",a.beginPath(),a.lineWidth=10,a.moveTo(0,0),a.lineTo(0,b),a.lineTo(b,b),a.lineTo(b,0),a.lineTo(0,0),a.stroke(),a.beginPath(),a.lineWidth=2,a.moveTo(0,b/3),a.lineTo(b,b/3),a.moveTo(0,2*(b/3)),a.lineTo(b,2*(b/3)),a.moveTo(b/3,0),a.lineTo(b/3,b),a.moveTo(2*(b/3),0),a.lineTo(2*(b/3),b),a.stroke()},g=function(a,b){var c,d,e,f;for(f=[],d=0,e=b.length;e>d;d++)switch(c=b[d],c.type){case"M":f.push(a.moveTo(c.x,c.y));break;case"L":f.push(a.lineTo(c.x,c.y));break;case"C":f.push(a.bezierCurveTo(c.begin.x,c.begin.y,c.mid.x,c.mid.y,c.end.x,c.end.y));break;case"Q":f.push(a.quadraticCurveTo(c.begin.x,c.begin.y,c.end.x,c.end.y));break;default:f.push(void 0)}return f},d=function(b,c,d){var e,f,g,h,i;return d||(d={}),h=jQuery.Deferred(),i=new a(d),f=$('<div class="word"></div>'),e=$('<div class="loader"><div style="width: 0"></div><i class="icon-spinner icon-spin icon-large icon-fixed-width"></i></div>'),f.append(i.canvas).append(e),$(b).append(f),g=WordStroker.utils.StrokeData({url:d.url,dataType:d.dataType}),g.get(c.cp,function(a){return e.remove(),h.resolve({drawBackground:function(){return i.drawBackground()},draw:function(){return i.draw(a)},remove:function(){return $(i.canvas).remove()}})},function(){return e.remove(),h.resolve({drawBackground:function(){return i.drawBackground()},draw:function(){var a;return a=jQuery.Deferred(),$(i.canvas).fadeTo("fast",.5,function(){return a.resolve()}),a},remove:function(){return $(i.canvas).remove()}})},function(a){return a.lengthComputable&&e.find("> div").css("width",100*(a.loaded/a.total)+"%"),h.notifyWith(a,[a,c.text])}),h},e=function(a,b,c){return WordStroker.utils.sortSurrogates(b).map(function(b){return d(a,b,c)})},window.WordStroker||(window.WordStroker={}),window.WordStroker.canvas={Word:a,drawElementWithWords:e}})}.call(this),function(){var a,b;b=function(){var a;return null!=(a=document.createElement("canvas"))?a.getContext("2d"):void 0},a=jQuery,a.fn.extend({strokeWords:function(c,d){return void 0===c||""===c?null:(d=a.extend({single:!1,svg:!b(),progress:null},d),this.each(function(){var a;return d.svg?window.WordStroker.raphael.strokeWords(this,c):(a=window.WordStroker.canvas.drawElementWithWords(this,c,d),d.single?a.reduceRight(function(a,b){return function(){return b.then(function(b){return b.drawBackground(),b.draw().then(function(){return a?(b.remove(),a()):void 0})})}},null)():(a.forEach(function(a){return a.progress(d.progress).then(function(a){return a.drawBackground()})}),a.reduceRight(function(a,b){return function(){return b.then(function(b){return b.draw().then(a)})}},null)()))}).data("strokeWords",{play:null}))}})}.call(this);