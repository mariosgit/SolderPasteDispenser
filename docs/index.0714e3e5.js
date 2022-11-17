var t={};!function(){var e={};function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var n=function(){function t(e,s){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"gray",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"16px Monospace",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;i(this,t),this.x=a,this.y=l,this.ctx=e,this.canvas=s,this.color=n,this.font=o,this.setPos=this.setPos.bind(this)}return function(t,e,i){e&&s(t.prototype,e),i&&s(t,i)}(t,[{key:"track",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.canvas;return t?e.addEventListener("mousemove",this.setPos):e.removeEventListener("mousemove",this.setPos),this}},{key:"setPos",value:function(t){var e=this.canvas.getBoundingClientRect();return this.x=Math.floor(t.clientX-e.left),this.y=Math.floor(t.clientY-e.top),this}},{key:"draw",value:function(){var t=this.x,e=this.y,i=this.canvas,s=this.ctx,n=this.font,o=this.color,a="X: ".concat(t,", Y: ").concat(e);s.save(),s.fillStyle=o,s.font=n;var l=t<i.width/2?20:-s.measureText(a).width-20,r=e<i.height/2?25:-18;return s.fillText(a,this.x+l,this.y+r),s.restore(),this}}]),t}();function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function l(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}var r=function(){function t(e,i,s,n,a,l){o(this,t),this.color=e,this.lineWidth=i,this.startX=s,this.startY=n,this.endX=a,this.endY=l}return l(t,[{key:"draw",value:function(t){var e=this.color,i=this.lineWidth,s=this.startX,n=this.startY,o=this.endX,a=this.endY;t.save(),t.beginPath(),t.strokeStyle=e,t.lineWidth=i,t.moveTo(s,n),t.lineTo(o,a),t.stroke(),t.restore()}}]),t}(),h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"gray",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"DarkGray",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.5,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"16px Monospace";o(this,t),this.color=e,this.lineWidth=i,this.step=s,this.boldNth=n,this.boldColor=a,this.boldWidth=l,this.font=r,this.lines=null}return l(t,[{key:"createLines",value:function(t){for(var e=this.color,i=this.lineWidth,s=this.step,n=this.boldNth,o=this.boldColor,a=this.boldWidth,l=[],h=n*s,d=0;d<t.width;d+=s){var c=d%h==0;l.push(c?new r(o,a,d,0,d,t.height):new r(e,i,d,0,d,t.height))}for(var u=0;u<t.height;u+=s){var f=u%h==0;l.push(f?new r(o,a,0,u,t.width,u):new r(e,i,0,u,t.width,u))}this.lines=l}},{key:"drawText",value:function(t,e){var i=this.step,s=this.boldNth,n=this.boldColor,o=this.font;t.save(),t.font=o,t.fillStyle=n,t.fillText("0",1,15);for(var a=i*s;a<e.width;a+=i*s)t.fillText(a,a,15);for(var l=i*s;l<e.height;l+=i*s)t.fillText(l,0,l+15);t.restore()}},{key:"draw",value:function(t,e){this.lines||this.createLines(e),this.lines.forEach((function(e){return e.draw(t)})),this.drawText(t,e)}}]),t}();e.Mouse=n,e.Grid=h,t=e}();const e=document.getElementsByTagName("body")[0],i=document.getElementById("fileInput"),s=document.getElementById("uploadButton"),n=document.getElementById("padsField"),o=document.getElementById("coordsField"),a=document.getElementById("dropZone"),l=document.getElementById("canvas"),r=document.getElementsByTagName("header")[0],h=document.getElementsByTagName("footer")[0];let d,c,u,f=null;class m{constructor(t,e){this.width=t,this.height=e}}class g{constructor(t,e,i){this.posX=e,this.posY=i,this.style=t}}class v{fileName="";mouseFlag=!1;mouseStartX=0;mouseStartY=0;mouseOffX=0;mouseOffY=0;zoom=6;constructor(t,e){this.ctx=t,this.canvas=e,this.mapStyles=new Map,this.mapPads=new Map}draw(){this.ctx.fillStyle="antiquewhite",this.ctx.beginPath();for(let t of this.mapPads.keys()){const e=this.mapStyles.get(t),i=this.mapPads.get(t);if(e&&i){const t=e.width*this.zoom,s=e.height*this.zoom;for(let e of i.values())this.ctx.fillRect(e.posX*this.zoom-t/2+this.mouseOffX,e.posY*this.zoom-s/2+this.mouseOffY,t,s)}}this.ctx.fill()}addPadStyle(t,e,i){this.mapStyles.set(t,new m(e,i))}addPad(t,e,i){this.mapPads.has(t)||this.mapPads.set(t,new Set);let s=this.mapPads.get(t);s&&s.add(new g(t,e,i))}mouseDown(t){this.mouseStartX=t.clientX-this.mouseOffX,this.mouseStartY=t.clientY-this.mouseOffY,this.mouseFlag=!0}mouseUp(t){this.mouseFlag=!1}mouseMove(t){this.mouseFlag&&(this.mouseOffX=t.clientX-this.mouseStartX,this.mouseOffY=t.clientY-this.mouseStartY)}mouseWheel(t){console.log(t.deltaY),t.deltaY>0?this.zoom*=1.1:this.zoom*=.9}}function p(){l&&f&&(window.requestAnimationFrame(p),f.clearRect(0,0,l.width,l.height),c.draw(f,l),d.draw(),u&&u.draw())}function w(t){i&&s&&n&&o&&e&&f&&t.arrayBuffer().then((e=>{var i,s,r,h;i="UTF-8",s=e=>{u=new v(f,l),a&&(a.innerText=t.name);const i=(e=e.replace(/\r/g,"")).split("\n");let s=1,r=1,h="";for(let t of i){const e=t.match(/^%FSLAX([0-9])([0-9])Y([0-9])([0-9])[*]%/);e&&(r=parseInt(e[1]),s=parseInt(e[2]),console.log(`float digits = ${r} ${s}`));const i=t.match(/^(%AD)(D[0-9]+)([A-Za-z])[,]([0-9.]+)[X]([0-9.]+)/);i&&(n.innerHTML+=`${i[2]} ${i[4]} ${i[5]}<br>`,u.addPadStyle(i[2],parseFloat(i[4]),parseFloat(i[5])));const a=t.match(/^X([0-9]+)Y([0-9]+)D([0-9]+)[*]/),l=t.match(/^(D[0-9]+)[*]/);if(l&&(h=l[1]),a){let t=a[1],e=a[2];const i=r+s;for(;t.length<i;)t=`0${t}`;for(;e.length<i;)e=`0${e}`;let n=0,l=0;t=`${t.substring(0,r)}.${t.substring(r)}`,e=`${e.substring(0,r)}.${e.substring(r)}`,n=parseFloat(t),l=parseFloat(e),o.innerHTML+=`${h}:  x:${n} y:${l} <br>`,u.addPad(h,n,l)}}},r=new Blob([e],{type:"text/plain"}),(h=new FileReader).onload=t=>{s(t.target.result)},h.readAsText(r,i)}))}document.addEventListener("DOMContentLoaded",(function(){console.log("moinsen"),i&&s&&n&&o&&e&&l?(f=l.getContext("2d"),l.addEventListener("mousemove",(t=>{u&&u.mouseMove(t)}),!1),l.addEventListener("mousedown",(t=>{u&&u.mouseDown(t)}),!1),l.addEventListener("mouseup",(t=>{u&&u.mouseUp(t)}),!1),l.addEventListener("mouseout",(t=>{u&&u.mouseUp(t)}),!1),l.addEventListener("wheel",(t=>{u&&u.mouseWheel(t)}),!1),s.onclick=()=>{if(i.files&&i.files.length>0){let t=i.files[0];console.log(t),console.log(`file: ${t.name} size:${t.size}`),w(t)}else alert("please choose a file")},e.ondrop=t=>{t.preventDefault(),console.log(t),t.dataTransfer.items?[...t.dataTransfer.items].forEach(((t,e)=>{if("file"===t.kind){const i=t.getAsFile();i&&(console.log(`… item[${e}].name = ${i.name}`),w(i))}})):[...t.dataTransfer.files].forEach(((t,e)=>{t&&(console.log(`… file[${e}].name = ${t.name}`),w(t))}))},e.ondragover=t=>{console.log("File(s) in drop zone"),t.preventDefault()},l.width=innerWidth,l.height=innerHeight-r.getBoundingClientRect().height-h.getBoundingClientRect().height-7,d=new(0,t.Mouse)(f,l),d.track(),c=new(0,t.Grid),window.requestAnimationFrame(p)):console.error("missing html elements !")})),window.addEventListener("resize",(t=>{console.log(`resize: ${t}`),l&&r&&h&&(l.width=innerWidth,l.height=innerHeight-r.getBoundingClientRect().height-h.getBoundingClientRect().height-7,d.draw(),c.draw(f,l))}));
//# sourceMappingURL=index.0714e3e5.js.map
