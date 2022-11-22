var t={};!function(){var e={};function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e,i){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"gray",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"16px Monospace",h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;s(this,t),this.x=h,this.y=a,this.ctx=e,this.canvas=i,this.color=o,this.font=n,this.setPos=this.setPos.bind(this)}return function(t,e,s){e&&i(t.prototype,e),s&&i(t,s)}(t,[{key:"track",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.canvas;return t?e.addEventListener("mousemove",this.setPos):e.removeEventListener("mousemove",this.setPos),this}},{key:"setPos",value:function(t){var e=this.canvas.getBoundingClientRect();return this.x=Math.floor(t.clientX-e.left),this.y=Math.floor(t.clientY-e.top),this}},{key:"draw",value:function(){var t=this.x,e=this.y,s=this.canvas,i=this.ctx,o=this.font,n=this.color,h="X: ".concat(t,", Y: ").concat(e);i.save(),i.fillStyle=n,i.font=o;var a=t<s.width/2?20:-i.measureText(h).width-20,r=e<s.height/2?25:-18;return i.fillText(h,this.x+a,this.y+r),i.restore(),this}}]),t}();function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e,s){return e&&h(t.prototype,e),s&&h(t,s),t}var r=function(){function t(e,s,i,o,h,a){n(this,t),this.color=e,this.lineWidth=s,this.startX=i,this.startY=o,this.endX=h,this.endY=a}return a(t,[{key:"draw",value:function(t){var e=this.color,s=this.lineWidth,i=this.startX,o=this.startY,n=this.endX,h=this.endY;t.save(),t.beginPath(),t.strokeStyle=e,t.lineWidth=s,t.moveTo(i,o),t.lineTo(n,h),t.stroke(),t.restore()}}]),t}(),l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"gray",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"DarkGray",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.5,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"16px Monospace";n(this,t),this.color=e,this.lineWidth=s,this.step=i,this.boldNth=o,this.boldColor=h,this.boldWidth=a,this.font=r,this.lines=null}return a(t,[{key:"createLines",value:function(t){for(var e=this.color,s=this.lineWidth,i=this.step,o=this.boldNth,n=this.boldColor,h=this.boldWidth,a=[],l=o*i,c=0;c<t.width;c+=i){var m=c%l==0;a.push(m?new r(n,h,c,0,c,t.height):new r(e,s,c,0,c,t.height))}for(var f=0;f<t.height;f+=i){var d=f%l==0;a.push(d?new r(n,h,0,f,t.width,f):new r(e,s,0,f,t.width,f))}this.lines=a}},{key:"drawText",value:function(t,e){var s=this.step,i=this.boldNth,o=this.boldColor,n=this.font;t.save(),t.font=n,t.fillStyle=o,t.fillText("0",1,15);for(var h=s*i;h<e.width;h+=s*i)t.fillText(h,h,15);for(var a=s*i;a<e.height;a+=s*i)t.fillText(a,0,a+15);t.restore()}},{key:"draw",value:function(t,e){this.lines||this.createLines(e),this.lines.forEach((function(e){return e.draw(t)})),this.drawText(t,e)}}]),t}();e.Mouse=o,e.Grid=l,t=e}();class e{minx=99999;miny=99999;maxx=-99999;maxy=-99999;constructor(){}update(t,e){t<this.minx&&(this.minx=t),e<this.miny&&(this.miny=e),t>this.maxx&&(this.maxx=t),e>this.maxy&&(this.maxy=e)}center(t=1){return[(this.minx+(this.maxx-this.minx)/2)*t,(this.miny+(this.maxy-this.miny)/2)*t]}zero(t=1){return[this.minx*t,this.miny*t]}size(t=1){return[(this.maxx-this.minx)*t,(this.maxy-this.miny)*t]}}class s{constructor(t,e,s){this.form=t,this.width=e,this.height=s}}class i{constructor(t,e,s){this.posX=e,this.posY=s,this.style=t}}class o{fileName="";mouseFlag=!1;mouseStartX=0;mouseStartY=0;mouseOffX=0;mouseOffY=0;zoom=6;constructor(t,s){this.ctx=t,this.canvas=s,this.mapStyles=new Map,this.mapPads=new Map,this.bb=new e}draw(){this.ctx.fillStyle="antiquewhite",this.ctx.strokeStyle="black",this.ctx.beginPath(),this.ctx.moveTo(-10+this.mouseOffX,0+this.mouseOffY),this.ctx.lineTo(10+this.mouseOffX,0+this.mouseOffY),this.ctx.moveTo(0+this.mouseOffX,-10+this.mouseOffY),this.ctx.lineTo(0+this.mouseOffX,10+this.mouseOffY),this.ctx.stroke(),this.ctx.strokeStyle="red";let t=this.bb.center(this.zoom);this.ctx.beginPath(),this.ctx.moveTo(t[0]-10+this.mouseOffX,t[1]+this.mouseOffY),this.ctx.lineTo(t[0]+10+this.mouseOffX,t[1]+this.mouseOffY),this.ctx.moveTo(t[0]+this.mouseOffX,t[1]-10+this.mouseOffY),this.ctx.lineTo(t[0]+this.mouseOffX,t[1]+10+this.mouseOffY),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.rect(this.bb.zero(this.zoom)[0]+this.mouseOffX,this.bb.zero(this.zoom)[1]+this.mouseOffY,this.bb.size(this.zoom)[0],this.bb.size(this.zoom)[1]),this.ctx.stroke();for(let t of this.mapPads.keys()){const e=this.mapStyles.get(t),s=this.mapPads.get(t);if(e&&s){const t=e.width*this.zoom,i=e.height*this.zoom;for(let o of s.values())if("R"==e.form||"O"==e.form||"RoundRect"==e.form)this.ctx.beginPath(),this.ctx.fillRect(o.posX*this.zoom-t/2+this.mouseOffX,o.posY*this.zoom-i/2+this.mouseOffY,t,i),this.ctx.fill();else{if("C"!=e.form){console.log(`draw quatsch ${e.form}`);break}this.ctx.beginPath(),this.ctx.ellipse(o.posX*this.zoom-t/2+this.mouseOffX,o.posY*this.zoom-i/2+this.mouseOffY,e.width*this.zoom/2,e.width*this.zoom/2,0,0,2*Math.PI),this.ctx.fill()}}}}addPadStyle(t,e,i,o){this.mapStyles.set(t,new s(e,i,o))}addPad(t,e,s){this.mapPads.has(t)||this.mapPads.set(t,new Set);let o=this.mapPads.get(t);o&&(o.add(new i(t,e,s)),this.bb.update(e,s))}center(){this.canvas&&(this.mouseOffX=-this.bb.center()[0]*this.zoom+this.canvas.width/2,this.mouseOffY=-this.bb.center()[1]*this.zoom+this.canvas.height/2)}mouseDown(t){const e=this.ctx.getTransform();console.log(e),this.mouseStartX=t.clientX*e.a-this.mouseOffX,this.mouseStartY=t.clientY*e.d-this.mouseOffY,this.mouseFlag=!0}mouseUp(t){this.mouseFlag=!1}mouseMove(t){const e=this.ctx.getTransform();this.mouseFlag&&(this.mouseOffX=t.clientX*e.a-this.mouseStartX,this.mouseOffY=t.clientY*e.d-this.mouseStartY)}mouseWheel(t){t.deltaY>0?this.zoom*=1.1:this.zoom*=.9}}const n=document.getElementsByTagName("body")[0],h=document.getElementById("uploadButton"),a=document.getElementById("padsField"),r=document.getElementById("coordsField"),l=document.getElementById("dropZone"),c=document.getElementById("canvas"),m=document.getElementById("progress"),f=document.getElementById("progressbar"),d=document.getElementById("progressCancel"),u=document.getElementsByTagName("header")[0],g=document.getElementsByTagName("footer")[0];let v,p,y,x=null,w=1,b=1,T="",O=!1;function X(){c&&x&&(window.requestAnimationFrame(X),x.setTransform(1,0,0,-1,0,c.height),x.clearRect(0,0,c.width,c.height),p.draw(x,c),v.draw(),y&&y.draw())}function Y(t){h&&a&&r&&n&&x&&m&&t.arrayBuffer().then((e=>{var s,i,d,u;s="UTF-8",i=e=>{a.innerHTML="",r.innerHTML="",l&&(l.innerText=t.name),async function(t){if(h&&a&&r&&n&&c&&x&&m){m.style.display="block",y=new o(x,c);const e=(t=t.replace(/\r/g,"")).split("\n");let s=1;for(let t of e){if(s++,O){O=!1;break}await z(t),f&&(f.style.width=100*s/e.length+"%")}m.style.display="none"}}(e)},d=new Blob([e],{type:"text/plain"}),(u=new FileReader).onload=t=>{i(t.target.result)},u.readAsText(d,s)}))}async function z(t){return new Promise((e=>{if(h&&a&&r&&n&&x&&m){const e=t.match(/^%FSLAX([0-9])([0-9])Y([0-9])([0-9])[*]%/);e&&(b=parseInt(e[1]),w=parseInt(e[2]),console.log(`gerber: float digits = ${b} ${w}`));const s=t.match(/^(%AD)(D[0-9]+)([A-Za-z]+)[,]([-0-9.]+)[X]?([-0-9.]+)?[X]?([-0-9.]+)?/);s&&(console.log(s),a.innerHTML+=`${s[2]} ${s[4]} ${s[5]}<br>`,"RoundRect"==s[3]?(y.addPadStyle(s[2],s[3],Math.abs(parseFloat(s[5])),Math.abs(parseFloat(s[6]))),console.log(`gerber: style ${s[2]},${s[3]}, ${Math.abs(parseFloat(s[5]))}, ${Math.abs(parseFloat(s[6]))}`)):(y.addPadStyle(s[2],s[3],parseFloat(s[4]),parseFloat(s[5])),console.log(`gerber: style ${s[2]},${s[3]}, ${parseFloat(s[4])}, ${parseFloat(s[5])}`)));const i=t.match(/^([DG][0-9]+)[*]/);i&&(T=i[1]);const o=t.match(/^X([-]?)([0-9]+)Y([-]?)([0-9]+)D([0-9]+)[*]/);if(o){let t=o[2],e=o[4];const s=b+w;for(;t.length<s;)t=`0${t}`;for(;e.length<s;)e=`0${e}`;let i=0,n=0;t=`${t.substring(0,b)}.${t.substring(b)}`,e=`${e.substring(0,b)}.${e.substring(b)}`,i=parseFloat(t),n=parseFloat(e),"-"==o[1]&&(i*=-1),"-"==o[3]&&(n*=-1),r.innerHTML+=`${T}:  x:${i} y:${n} <br>`,y.addPad(T,i,n)}}y.center(),setTimeout(e,0)}))}globalThis.accordionToggler=t=>{var e=document.getElementById(t);e&&(-1==e.className.indexOf("w3-show")?e.className+=" w3-show":e.className=e.className.replace(" w3-show",""))},document.addEventListener("DOMContentLoaded",(function(){console.log("moinsen"),h&&d&&a&&r&&n&&c?(x=c.getContext("2d"),c.addEventListener("mousemove",(t=>{y&&y.mouseMove(t),t.preventDefault()}),!1),c.addEventListener("mousedown",(t=>{y&&y.mouseDown(t),t.preventDefault()}),!1),c.addEventListener("mouseup",(t=>{y&&y.mouseUp(t),t.preventDefault()}),!1),c.addEventListener("mouseout",(t=>{y&&y.mouseUp(t),t.preventDefault()}),!1),c.addEventListener("wheel",(t=>{y&&y.mouseWheel(t),t.preventDefault()}),!1),h.onclick=()=>{var t=document.createElement("input");return t.type="file",t.click(),t.addEventListener("change",(e=>{if(console.log(e),t.files&&t.files.length>0){let e=t.files[0];console.log(e),console.log(`file: ${e.name} size:${e.size}`),Y(e)}else alert("please choose a file")})),!1},d.onclick=()=>{O=!0},n.ondrop=t=>{t.preventDefault(),console.log(t),t.dataTransfer.items?[...t.dataTransfer.items].forEach(((t,e)=>{if("file"===t.kind){const s=t.getAsFile();s&&(console.log(`… item[${e}].name = ${s.name}`),Y(s))}})):[...t.dataTransfer.files].forEach(((t,e)=>{t&&(console.log(`… file[${e}].name = ${t.name}`),Y(t))}))},n.ondragover=t=>{console.log("File(s) in drop zone"),t.preventDefault()},c.width=innerWidth,c.height=innerHeight-u.getBoundingClientRect().height-g.getBoundingClientRect().height-7,v=new(0,t.Mouse)(x,c),v.track(),p=new(0,t.Grid),window.requestAnimationFrame(X)):console.error("missing html elements !")})),window.addEventListener("resize",(t=>{console.log(`resize: ${t}`),c&&u&&g&&(c.width=innerWidth,c.height=innerHeight-u.getBoundingClientRect().height-g.getBoundingClientRect().height-7,v.draw(),p.draw(x,c))}));
//# sourceMappingURL=index.54403832.js.map