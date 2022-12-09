// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dB0X9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "24b66964abc785c9";
module.bundle.HMR_BUNDLE_ID = "09f11f992948073e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"klkQS":[function(require,module,exports) {
var _canvasCoords = require("canvas-coords"); // https://github.com/CodeDraken/canvas-coords
var _deviceMarlin = require("./deviceMarlin");
var _pcb = require("./pcb");
var _parserGerber = require("./parserGerber");
// simpler !!! const infoDropDown = document.querySelector<HTMLDivElement>('#infoDropDown');
const body = document.getElementsByTagName("body")[0];
const messageElem = document.getElementById("messageElem");
const uploadButton = document.getElementById("uploadButton");
const padsField = document.getElementById("padsField");
const coords = document.getElementById("Coords");
const coordsField = document.getElementById("coordsField");
const dropZone = document.getElementById("dropZone");
const canvas = document.getElementById("canvas");
const debug = document.getElementById("debug");
const progress = document.getElementById("progress");
const progressbar = document.getElementById("progressbar");
const contextMenu = document.getElementById("contextMenu");
const progressCancel = document.getElementById("progressCancel");
const menuSetZero = document.getElementById("menuSetZero");
const menuMoveTo = document.getElementById("menuMoveTo");
const menuMoveAll = document.getElementById("menuMoveAll");
const menuBlob = document.getElementById("menuBlob");
const main = document.getElementById("main");
const openSidebarButton = document.getElementById("openSidebar");
const header = document.getElementsByTagName("header")[0];
const footer = document.getElementById("footer");
let messageClearTimeout = undefined;
let ctx = null;
let mouse, grid;
let pcb;
let device = new (0, _deviceMarlin.Marlin)();
function init() {
    if (uploadButton && menuSetZero && menuMoveTo && menuMoveAll && menuBlob && progressCancel && padsField && coordsField && body && canvas && footer) {
        ctx = canvas.getContext("2d");
        canvas.addEventListener("mousemove", (event)=>{
            if (pcb) pcb.mouseMove(event);
            event.preventDefault();
        }, false);
        canvas.addEventListener("mousedown", (event)=>{
            if (pcb) pcb.mouseDown(event);
            event.preventDefault();
        }, false);
        canvas.addEventListener("mouseup", (event)=>{
            if (pcb) pcb.mouseUp(event);
            event.preventDefault();
        }, false);
        canvas.addEventListener("mouseout", (event)=>{
            if (pcb) pcb.mouseOut(event);
            event.preventDefault();
        }, false);
        canvas.addEventListener("wheel", (event)=>{
            if (pcb) pcb.mouseWheel(event);
            event.preventDefault();
        }, false);
        uploadButton.onclick = ()=>{
            var uploadFileEle = document.createElement("input");
            uploadFileEle.type = "file";
            uploadFileEle.click();
            uploadFileEle.addEventListener("change", (ev)=>{
                console.log(ev);
                // check if user had selected a file
                if (uploadFileEle.files && uploadFileEle.files.length > 0) {
                    let file = uploadFileEle.files[0];
                    console.log(file);
                    console.log(`file: ${file.name} size:${file.size}`);
                    processGerberFile(file);
                } else {
                    alert("please choose a file");
                    return;
                }
            });
            return false;
        };
        menuSetZero.onclick = (event)=>{
            if (contextMenu) contextMenu.className = contextMenu.className.replace("w3-show", "w3-hide");
            pcb.setZero();
            device.setZero(pcb.getZero()); // device must substract "zero" from all coords
        };
        menuMoveTo.onclick = (event)=>{
            if (contextMenu) contextMenu.className = contextMenu.className.replace("w3-show", "w3-hide");
            // console.log(event);
            // find the coords !!!
            // !!! need to be relative to zero !!! uuuhhh
            // let pads = pcb.getSelected();
            // if (pads.length > 0) {
            //     let pad: Pad = pads[0];
            //     console.log(pad);
            //     device.moveTo(pad.posX, pad.posY, undefined, undefined);
            // }
            let pos = pcb.getSelectedZero(); // lower left of selection
            device.moveTo(pos[0], pos[1], undefined, undefined);
        };
        menuMoveAll.onclick = (event)=>{
            if (contextMenu) contextMenu.className = contextMenu.className.replace("w3-show", "w3-hide");
            let plist = pcb.getSelected();
            let pzero = pcb.getSelectedZero();
            device.moveToAll(plist, pzero);
        };
        menuBlob.onclick = ()=>{
            if (contextMenu) contextMenu.className = contextMenu.className.replace("w3-show", "w3-hide");
            device.blob();
        };
        body.ondrop = (ev)=>{
            ev.preventDefault();
            console.log(ev);
            if (ev.dataTransfer && ev.dataTransfer.items) // Use DataTransferItemList interface to access the file(s)
            [
                ...ev.dataTransfer.items
            ].forEach((item, i)=>{
                // If dropped items aren't files, reject them
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        console.log(`… item[${i}].name = ${file.name}`);
                        processGerberFile(file);
                    }
                }
            });
            else if (ev.dataTransfer) // Use DataTransfer interface to access the file(s)
            [
                ...ev.dataTransfer.files
            ].forEach((file, i)=>{
                if (file) {
                    console.log(`… file[${i}].name = ${file.name}`);
                    processGerberFile(file);
                }
            });
        };
        body.ondragover = (ev)=>{
            console.log("File(s) in drop zone");
            // Prevent default behavior (Prevent file from being opened)
            ev.preventDefault();
        };
        canvas.oncontextmenu = (ev)=>{
            // console.log('oncontextmenu',ev);
            ev.preventDefault();
            if (contextMenu) {
                contextMenu.style.left = `${ev.pageX}px`;
                contextMenu.style.top = `${ev.pageY}px`;
                contextMenu.className = contextMenu.className.replace("w3-hide", "w3-show");
            }
        };
        canvas.onmouseup = (ev)=>{
            if (contextMenu) contextMenu.className = contextMenu.className.replace("w3-show", "w3-hide");
        };
        if (ctx) {
            pcb = new (0, _pcb.PCB)();
            pcb.setCanvas(ctx, canvas);
            mouse = new (0, _canvasCoords.Mouse)(ctx, canvas);
            mouse.track();
            grid = new (0, _canvasCoords.Grid)();
            grid.step = 2;
            grid.lineWidth = 0.03;
            grid.boldWidth = 0.05;
            grid.createLines(canvas);
        }
        globalThis.resize();
        window.requestAnimationFrame(update);
    } else console.error("missing html elements !");
}
function message(text) {
    if (messageClearTimeout) window.clearTimeout(messageClearTimeout);
    if (messageElem) {
        messageElem.innerHTML = `${text}`;
        messageClearTimeout = window.setTimeout(messageClear, 10000);
    }
}
function messageClear() {
    messageClearTimeout = undefined;
    if (messageElem) messageElem.innerHTML = "";
}
function update() {
    if (canvas && ctx) {
        window.requestAnimationFrame(update);
        ctx.setTransform(pcb ? pcb.zoom : 1, 0, 0, pcb ? pcb.zoom : 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // grid.draw(ctx, canvas);
        // grid.step = pcb?10.0/pcb.zoom:10.0;
        // grid.createLines(canvas);
        grid.lines.forEach((line)=>line.draw(ctx));
        mouse.draw();
        ctx.setTransform(1, 0, 0, -1, 0, canvas.height);
        // ctx.scale(1,-1); // flip display y
        if (pcb) pcb.draw();
    }
}
async function processGerberFile(file) {
    if (padsField && coordsField && ctx && canvas && progress && progressbar && progressCancel && dropZone) {
        pcb = new (0, _pcb.PCB)();
        pcb.setCanvas(ctx, canvas);
        let parser = new (0, _parserGerber.ParserGerber)(pcb);
        padsField.innerHTML = "";
        coordsField.innerHTML = "";
        dropZone.innerText = file.name;
        progress.style.display = "block";
        parser.padsField = padsField;
        parser.coordsField = coordsField;
        progressCancel.onclick = ()=>{
            parser.cancel();
        };
        parser.processCB = (value)=>{
            if (progressbar) progressbar.style.width = `${value}%`;
        };
        await parser.parseFile(file);
        pcb.zoomToFit([
            canvas.width,
            canvas.height
        ]);
        progress.style.display = "none";
    }
}
globalThis.accordionToggler = (id)=>{
    var elem = document.getElementById(id);
    if (elem) {
        if (elem.className.indexOf("w3-show") == -1 && elem.className.indexOf("w3-hide") == -1) elem.className += " w3-show";
        else if (elem.className.indexOf("w3-show") != -1) elem.className = elem.className.replace("w3-show", "w3-hide");
        else elem.className = elem.className.replace("w3-hide", "w3-show");
    } else console.warn("accordionToggler no elem with id:", id);
    globalThis.resize();
};
globalThis.openSidebar = ()=>{
    if (main && debug && openSidebarButton) {
        main.style.marginRight = "350px";
        debug.style.width = "350px";
        debug.style.display = "block";
        openSidebarButton.style.display = "none";
    }
};
globalThis.closeSidebar = ()=>{
    if (main && debug && openSidebarButton) {
        main.style.marginRight = "0px";
        debug.style.display = "none";
        openSidebarButton.style.display = "inline-block";
    }
};
globalThis.zoomToFit = ()=>{
    if (pcb && canvas) pcb.zoomToFit([
        canvas.width,
        canvas.height
    ]);
};
globalThis.rotateRight = ()=>{
    pcb && canvas;
    message("m\xfcsste ma einer implementieren, ne");
};
globalThis.resize = ()=>{
    if (canvas && header && footer && debug && coords) {
        canvas.width = innerWidth;
        canvas.height = innerHeight - header.getBoundingClientRect().height - footer.getBoundingClientRect().height;
        mouse.draw();
        grid.draw(ctx, canvas);
        // height of debug is innerHeight - margin top/bottom more or less - footer.height
        // console.log('resize: margin', debug.getBoundingClientRect().top);
        let dmaxheight = innerHeight - footer.getBoundingClientRect().height; // canvas.height + header.getBoundingClientRect().height - 16;
        // debug.style.height = `${dheight}px`; // 16 is marginTop
        // console.log('resize: inner height', innerHeight);
        // console.log('resize: debug height', dheight);
        // height of all other elements in debug
        let height = 0;
        for (let child of debug.children){
            let elem = child;
            // console.log(`resize:   ${child.id} ${elem.clientHeight} ${elem.className}`);
            if (elem.className.indexOf("w3-hide") != -1) continue;
            height += elem.clientHeight;
        }
        // console.log('resize: debug content height', height);
        // so far so good
        // if coords is shown, set debug size to max
        // if coords is shown, give it all the rest of the space
        // console.log('resize coords ', coords.className.indexOf('w3-hide'));
        if (coords.className.indexOf("w3-hide") != -1) {
            // console.log('resize coords is NOT visible');
            debug.style.height = `${height + 16}px`;
            coords.style.height = `${16}px`; // egal ?
        } else {
            // console.log('resize coords is visible');
            height -= coords.getBoundingClientRect().height; // do not count coords to hight
            debug.style.height = `${dmaxheight}px`;
            coords.style.height = `${dmaxheight - height - 16}px`;
        }
    }
};
document.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", (val)=>{
    // console.log(`resize: ${val}`);
    globalThis.resize();
});

},{"canvas-coords":"c44Xx","./deviceMarlin":"8QFEB","./pcb":"d2oVP","./parserGerber":"kP1bg"}],"c44Xx":[function(require,module,exports) {
(function() {
    var a = {};
    function g(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function c(t, e) {
        for(var o = 0; o < e.length; o++){
            var s = e[o];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
        }
    }
    function h(t, e, o) {
        return e && c(t.prototype, e), o && c(t, o), t;
    }
    var i = function() {
        function t(e, o) {
            var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "gray", i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "16px Monospace", r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            g(this, t), this.x = r, this.y = n, this.ctx = e, this.canvas = o, this.color = s, this.font = i, this.setPos = this.setPos.bind(this);
        }
        return h(t, [
            {
                key: "track",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = this.canvas;
                    return t ? e.addEventListener("mousemove", this.setPos) : e.removeEventListener("mousemove", this.setPos), this;
                }
            },
            {
                key: "setPos",
                value: function(t) {
                    var e = this.canvas.getBoundingClientRect();
                    return this.x = Math.floor(t.clientX - e.left), this.y = Math.floor(t.clientY - e.top), this;
                }
            },
            {
                key: "draw",
                value: function() {
                    var t = this.x, e = this.y, o = this.canvas, s = this.ctx, i = this.font, r = this.color, n = "X: ".concat(t, ", Y: ").concat(e);
                    s.save(), s.fillStyle = r, s.font = i;
                    var a = t < o.width / 2 ? 20 : -s.measureText(n).width - 20, v = e < o.height / 2 ? 25 : -18;
                    return s.fillText(n, this.x + a, this.y + v), s.restore(), this;
                }
            }
        ]), t;
    }();
    function d(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function f(t, e) {
        for(var i = 0; i < e.length; i++){
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
        }
    }
    function e(t, e, i) {
        return e && f(t.prototype, e), i && f(t, i), t;
    }
    var b = function() {
        function t(e, i, s, r, l, n) {
            d(this, t), this.color = e, this.lineWidth = i, this.startX = s, this.startY = r, this.endX = l, this.endY = n;
        }
        return e(t, [
            {
                key: "draw",
                value: function(t) {
                    var e = this.color, i = this.lineWidth, s = this.startX, r = this.startY, l = this.endX, n = this.endY;
                    t.save(), t.beginPath(), t.strokeStyle = e, t.lineWidth = i, t.moveTo(s, r), t.lineTo(l, n), t.stroke(), t.restore();
                }
            }
        ]), t;
    }(), j = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "gray", i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5, l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "DarkGray", n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .5, o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "16px Monospace";
            d(this, t), this.color = e, this.lineWidth = i, this.step = s, this.boldNth = r, this.boldColor = l, this.boldWidth = n, this.font = o, this.lines = null;
        }
        return e(t, [
            {
                key: "createLines",
                value: function(t) {
                    for(var e = this.color, i = this.lineWidth, s = this.step, r = this.boldNth, l = this.boldColor, n = this.boldWidth, o = [], a = r * s, h = 0; h < t.width; h += s){
                        var v = h % a == 0;
                        o.push(v ? new b(l, n, h, 0, h, t.height) : new b(e, i, h, 0, h, t.height));
                    }
                    for(var $ = 0; $ < t.height; $ += s){
                        var d = $ % a == 0;
                        o.push(d ? new b(l, n, 0, $, t.width, $) : new b(e, i, 0, $, t.width, $));
                    }
                    this.lines = o;
                }
            },
            {
                key: "drawText",
                value: function(t, e) {
                    var i = this.step, s = this.boldNth, r = this.boldColor, l = this.font;
                    t.save(), t.font = l, t.fillStyle = r, t.fillText("0", 1, 15);
                    for(var n = i * s; n < e.width; n += i * s)t.fillText(n, n, 15);
                    for(var o = i * s; o < e.height; o += i * s)t.fillText(o, 0, o + 15);
                    t.restore();
                }
            },
            {
                key: "draw",
                value: function(t, e) {
                    this.lines || this.createLines(e), this.lines.forEach(function(e) {
                        return e.draw(t);
                    }), this.drawText(t, e);
                }
            }
        ]), t;
    }();
    a.Mouse = i, a.Grid = j;
    module.exports = a;
})();

},{}],"8QFEB":[function(require,module,exports) {
/**
 * Marlin: Device specific implementation.
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Marlin", ()=>Marlin);
var _kdTree = require("./kdTree");
var _device = require("./device");
var _pcb = require("./pcb");
let Status;
(function(Status) {
    Status[Status["Undefined"] = 1] = "Undefined";
    Status[Status["Ready"] = 2] = "Ready";
    Status[Status["Busy"] = 3] = "Busy";
    Status[Status["NC"] = 4] = "NC";
})(Status || (Status = {}));
class Marlin extends (0, _device.Device) {
    zero = [
        0,
        0
    ];
    constructor(){
        super();
        this.marlinDiv = document.getElementById("Marlin");
        this.initHtml();
    }
    /**
     * Overwrite! Set the current position to Zero. All further commands will be relative to this position.
     */ setZero(point) {
        this.zero = point;
        this.onBtnAbs().then(()=>{
            this.serialWriteWait("G92 X0 Y0 Z0").then(()=>{
                this.onBtnPos();
            });
        });
    }
    /**
     * Overwrite! Move to position. If one coordinate is undefined, it's ignored
     */ moveTo(x, y, z, e) {
        let cmd = "G0 ";
        if (x != undefined) cmd += `X${x - this.zero[0]} `;
        if (y != undefined) cmd += `Y${y - this.zero[1]} `;
        if (z != undefined) cmd += `Z${z} `;
        this.serialWriteWait(cmd).then(()=>{
            this.onBtnPos();
        });
    }
    async moveToAll(plist, start) {
        console.log("Marlin:moveToAll", plist.length);
        console.log(plist);
        const tree = new (0, _kdTree.kdTree)((0, _pcb.PCB), plist, (0, _pcb.PCB).distance, [
            "posX",
            "posY"
        ]);
        let startpad = new (0, _pcb.Pad)("", start[0], start[1]);
        let search = tree.nearest(startpad, 1);
        let foundpad = search[0][0];
        let foundpads = []; // just for log
        this.onBtnAbs().then(async ()=>{
            try {
                let treeshot = "";
                // console.log('tree dump:');
                // console.log(JSON.stringify(tree.toJSON(), undefined, 4)); // dump tree
                for(let i = 0; i < plist.length; i++){
                    search = tree.nearest(foundpad, 1);
                    // console.log('Marlin:moveToAll', search);
                    foundpad = search[0][0];
                    foundpads.push(foundpad);
                    let cmd = "G0 ";
                    cmd += `X${foundpad.posX - this.zero[0]} `;
                    cmd += `Y${foundpad.posY - this.zero[1]} `;
                    try {
                        let response = await this.serialWriteWait(cmd);
                    // console.log('Marlin:moveToAll', response);
                    } catch (what) {} // ignore disconnected for debugging
                    /// remove seems to be bugi :(((
                    let ok = tree.remove(foundpad);
                    if (ok) ;
                    else console.warn(`Marlin:moveToAll NOT removed pad, thas bad :(`, foundpad);
                // treeshot = JSON.stringify(tree.toJSON(), undefined, 4); // keep tree for debug !
                // console.log(treeshot);
                }
                for (let foundpad1 of foundpads)console.log("Marlin:moveToAll", foundpad1);
            } catch (what1) {
                // if serialWriteWait fails, do something ?
                console.warn("Marlin:moveToAll: failed", what1);
            }
        });
    }
    blob() {
        this.onBtnAbs().then(()=>{
            this.serialWriteWait("M83").then(()=>{
                this.serialWriteWait("G0 Z3").then(()=>{
                    this.serialWriteWait("G0 E10").then(()=>{
                        this.serialWriteWait("G0 Z0").then(()=>{
                            this.serialWriteWait("G0 Z3");
                        });
                    });
                });
            });
        });
    }
    onSerialConnected() {
        console.log("Marlin: onSerialConnected");
        // read over first messages
        // setTimeout(() => {
        //     while(this.inputQueue.length > 0) {
        //         if (this.marlinDivPosition) {
        //             this.marlinDivPosition.innerHTML += `${this.inputQueue.pop()}`;
        //         }
        //     }
        this.setStatus(Status.Ready);
        if (this.marlinDivStatus && this.marlinDivCommands) {
            this.setStatus(Status.Ready);
            this.marlinDivCommands.className = this.marlinDivCommands.className.replace("w3-hide", "w3-show");
        }
        // }, 1000);
        // wait 3sec, run commands 'cold extrude','relative positioning','report position'
        setTimeout(()=>{
            this.onBtnCold().then(()=>{
                this.onBtnRel().then(()=>{
                    this.onBtnPos().then(()=>{
                        console.log("Marlin: onSerialConnected init sequence finished");
                    });
                });
            });
        }, 3000);
    }
    onSerialDisconnected() {
        console.log("Marlin: onSerialDisconnected");
        if (this.marlinDivStatus && this.marlinDivCommands) {
            this.setStatus(Status.NC);
            this.marlinDivCommands.className = this.marlinDivCommands.className.replace("w3-show", "w3-hide");
        }
    }
    /**
     * Inherited from Device, adds Status message updates.
     * @param value
     * @param timeout
     * @returns
     */ async serialWriteWait(value, timeout = 10000) {
        return new Promise(async (resolve, reject)=>{
            this.setStatus(Status.Busy);
            super.serialWriteWait(value, timeout).then((result)=>{
                resolve(result);
            }).catch((reason)=>{
                reject(reason);
            }).finally(()=>{
                this.setStatus(Status.Ready);
            });
        });
    }
    setStatus(status) {
        let html = `unknown status ${status}`;
        switch(status){
            case Status.Ready:
                html = 'Status: <i class="fa-solid fa-plug"></i> ready';
                break;
            case Status.Busy:
                html = 'Status: <i class="fa-solid fa-plug-circle-bolt"></i> busy';
                break;
            case Status.NC:
                html = 'Status: <i class="fa-solid fa-plug-circle-xmark"></i> not connected';
                break;
        }
        if (this.marlinDivStatus) this.marlinDivStatus.innerHTML = html;
    }
    onBtnHome() {
        return new Promise((resolve)=>{
            this.serialWriteWait("G28").then((value)=>{
                console.log(value);
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
                resolve();
            });
        });
    //// timeout too small for this command, see what happens
    // this.serialWriteWait('G28', 100).then((value) => {
    //     console.log(value);
    // }).catch((reason) => {
    //     console.warn(reason);
    //     // try again (default timeout is 10sec)
    //     this.serialWriteWait('G28').then((value) => {
    //         console.log(value);
    //         this.onBtnPos();
    //     }).catch((reason) => { console.warn(reason) });
    // });
    }
    onBtnPos() {
        return new Promise((resolve)=>{
            this.serialWriteWait("M114").then((value)=>{
                // hier kommt eine zeile mit zahlen und eine mit ok
                console.log("onBtnPos", value);
                if (this.marlinDivPosition) this.marlinDivPosition.innerText = value;
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
                resolve();
            });
        });
    }
    onBtnAbs() {
        return new Promise((resolve)=>{
            this.serialWriteWait("G90").then((value)=>{
                console.log(value);
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
                resolve();
            });
        });
    }
    onBtnRel() {
        return new Promise((resolve)=>{
            this.serialWriteWait("G91").then((value)=>{
                console.log(value);
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
                resolve();
            });
        });
    }
    onBtnCold() {
        return new Promise((resolve)=>{
            this.serialWriteWait("M302 S0").then((value)=>{
                console.log(value);
            }).catch((reason)=>{
                console.warn(reason);
            }).finally(()=>{
                resolve();
            });
        });
    }
    onBtnXP() {
        this.serialWriteWait("G0 X10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnXM() {
        this.serialWriteWait("G0 X-10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnYP() {
        this.serialWriteWait("G0 Y10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnYM() {
        this.serialWriteWait("G0 Y-10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnZP() {
        this.serialWriteWait("G0 Z10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnZM() {
        this.serialWriteWait("G0 Z-10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnEP() {
        this.serialWriteWait("G0 E10").then((value)=>{
            this.onBtnPos();
        });
    }
    onBtnEM() {
        this.serialWriteWait("G0 E-10").then((value)=>{
            this.onBtnPos();
        });
    }
    /**
     * Creates some buttons for Marlin specific actions...
     */ initHtml() {
        if (this.marlinDiv) {
            this.marlinDiv.innerHTML = `
            <div class="w3-border w3-border-dark-grey">
            <div id="marlinStatus"></div>
            <div id="marlinPosition" class="w3-tiny"></div>
            <div id="marlinCommands" class="w3-tiny w3-hide">
            <p>
            <button id="marlinHome" class="w3-button w3-round w3-light-grey">home</button>
            <button id="marlinPos"  class="w3-button w3-round w3-light-grey">pos?</button>
            <button id="marlinRel"  class="w3-button w3-round w3-light-grey">rel</button>
            <button id="marlinAbs"  class="w3-button w3-round w3-light-grey">abs</button>
            <button id="marlinCold" class="w3-button w3-round w3-light-grey">cold</button>
            </p>
            <p>
            <button id="marlinXP" class="w3-button w3-round w3-light-grey">x+</button>
            <button id="marlinXM" class="w3-button w3-round w3-light-grey">x-</button>
            <button id="marlinYP" class="w3-button w3-round w3-light-grey">y+</button>
            <button id="marlinYM" class="w3-button w3-round w3-light-grey">y-</button>
            <button id="marlinZP" class="w3-button w3-round w3-light-grey">z+</button>
            <button id="marlinZM" class="w3-button w3-round w3-light-grey">z-</button>
            </p>
            <p>
            <button id="marlinEP" class="w3-button w3-round w3-light-grey">e+</button>
            <button id="marlinEM" class="w3-button w3-round w3-light-grey">e-</button>
            </p>
            </div>
            </div>
            `;
            this.marlinDivStatus = document.getElementById("marlinStatus");
            this.marlinDivPosition = document.getElementById("marlinPosition");
            this.marlinDivCommands = document.getElementById("marlinCommands");
            this.setStatus(Status.NC);
            const marlinBtnHome = document.getElementById("marlinHome");
            if (marlinBtnHome) marlinBtnHome.onclick = this.onBtnHome.bind(this);
            const marlinBtnPos = document.getElementById("marlinPos");
            if (marlinBtnPos) marlinBtnPos.onclick = this.onBtnPos.bind(this);
            const marlinBtnRel = document.getElementById("marlinRel");
            if (marlinBtnRel) marlinBtnRel.onclick = this.onBtnRel.bind(this);
            const marlinBtnAbs = document.getElementById("marlinAbs");
            if (marlinBtnAbs) marlinBtnAbs.onclick = this.onBtnAbs.bind(this);
            const marlinBtnCold = document.getElementById("marlinCold");
            if (marlinBtnCold) marlinBtnCold.onclick = this.onBtnCold.bind(this);
            const marlinBtnXP = document.getElementById("marlinXP");
            if (marlinBtnXP) marlinBtnXP.onclick = this.onBtnXP.bind(this);
            const marlinBtnXM = document.getElementById("marlinXM");
            if (marlinBtnXM) marlinBtnXM.onclick = this.onBtnXM.bind(this);
            const marlinBtnYP = document.getElementById("marlinYP");
            if (marlinBtnYP) marlinBtnYP.onclick = this.onBtnYP.bind(this);
            const marlinBtnYM = document.getElementById("marlinYM");
            if (marlinBtnYM) marlinBtnYM.onclick = this.onBtnYM.bind(this);
            const marlinBtnZP = document.getElementById("marlinZP");
            if (marlinBtnZP) marlinBtnZP.onclick = this.onBtnZP.bind(this);
            const marlinBtnZM = document.getElementById("marlinZM");
            if (marlinBtnZM) marlinBtnZM.onclick = this.onBtnZM.bind(this);
            const marlinBtnEP = document.getElementById("marlinEP");
            if (marlinBtnEP) marlinBtnEP.onclick = this.onBtnEP.bind(this);
            const marlinBtnEM = document.getElementById("marlinEM");
            if (marlinBtnEM) marlinBtnEM.onclick = this.onBtnEM.bind(this);
        }
    }
}

},{"./kdTree":"5XdPJ","./device":"bM8ey","./pcb":"d2oVP","@parcel/transformer-js/src/esmodule-helpers.js":"d3nwr"}],"5XdPJ":[function(require,module,exports) {
/**
 * k-d Tree JavaScript - V 1.01
 *
 * https://github.com/ubilabs/kd-tree-javascript
 *
 * @author Mircea Pricop <pricop@ubilabs.net>, 2012
 * @author Martin Kleppe <kleppe@ubilabs.net>, 2012
 * @author Ubilabs http://ubilabs.net, 2012
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php>
 */ /* Issue "The remove method has errors" https://github.com/ubilabs/kd-tree-javascript/issues/25

 After having removed some nodes, they can still be found in the kdTree in some situations.

 Here is an example of the remove method errors:

 https://gist.github.com/santoxi/ba8d283f9a21523fa45d23d8e9c3046e

 as a temporary work-around, I added a fourth argument to "nearest" to pass a predicate to filter the matched nodes, which might be also useful to add:

     this.nearest = function (point, maxNodes, maxDistance, predicate) {
             predicate = predicate || (x => true);
 ....
         linearDistance = metric(linearPoint, node.obj);

         if (node.right === null && node.left === null) {
           if (predicate(node.obj) && (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1])) {
             saveNode(node, ownDistance);
           }
           return;
         }
 ....
         nearestSearch(bestChild);

         if (predicate(node.obj) && (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1])) {
           saveNode(node, ownDistance);
         }
         */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "kdTreeObject", ()=>kdTreeObject);
parcelHelpers.export(exports, "kdNode", ()=>kdNode);
parcelHelpers.export(exports, "kdTree", ()=>kdTree);
// Binary heap implementation from:
// http://eloquentjavascript.net/appendix2.html
parcelHelpers.export(exports, "BinaryHeap", ()=>BinaryHeap);
class kdTreeObject {
}
class kdNode {
    constructor(obj, dimension, parent){
        this.obj = obj;
        this.left = null;
        this.right = null;
        this.parent = parent;
        this.dimension = dimension;
    }
}
class kdTree {
    /**
     * Create a new tree from a list of points, a distance function, and a list of dimensions.
     * @param points
     * @param distance
     * @param dimensions
     */ constructor(obj, points, distance, dimensions){
        this._kdTreeObjectType = obj;
        this.points = points;
        this.metric = distance;
        this.dimensions = dimensions;
        // If points is not an array, assume we're loading a pre-built tree
        if (!Array.isArray(points)) this.loadTree(points);
        else this.root = this.buildTree(points, 0, null);
    }
    buildTree(points, depth, parent) {
        var dim = depth % this.dimensions.length;
        var median;
        var node;
        if (points.length === 0) return null;
        if (points.length === 1) return new kdNode(points[0], dim, parent);
        points.sort((a, b)=>{
            return a[this.dimensions[dim]] - b[this.dimensions[dim]]; // distance in the dimension
        });
        median = Math.floor(points.length / 2);
        // avoid having same coords on left and right tree !!!
        while(median > 0){
            let newmedian = median - 1;
            if (points[median][this.dimensions[dim]] === points[newmedian][this.dimensions[dim]]) // console.warn(`buildTree:split bloed ne ??? ${this.dimensions[dim]}`);
            median -= 1;
            else break;
        }
        node = new kdNode(points[median], dim, parent);
        // console.log(`buildTree:split:dim:${this.dimensions[dim]} value:${points[median][this.dimensions[dim]]}`);
        // console.log(`buildTree:left:${depth}`, points.slice(0, median));
        // console.log(`buildTree:right${depth}`, points.slice(median + 1));
        node.left = this.buildTree(points.slice(0, median), depth + 1, node);
        node.right = this.buildTree(points.slice(median + 1), depth + 1, node);
        return node;
    }
    // Reloads a serialied tree
    loadTree(data) {
        // Just need to restore the `parent` parameter
        this.root = data;
        function restoreParent(root) {
            if (root.left) {
                root.left.parent = root;
                restoreParent(root.left);
            }
            if (root.right) {
                root.right.parent = root;
                restoreParent(root.right);
            }
        }
        restoreParent(this.root);
    }
    // Convert to a JSON serializable structure; this just requires removing
    // the `parent` property
    toJSON(src = this.root) {
        if (src === null) return null;
        var dest = new kdNode(src.obj, src.dimension, null);
        if (src.left) dest.left = this.toJSON(src.left);
        if (src.right) dest.right = this.toJSON(src.right);
        return dest;
    }
    /** returns a list of points in the subtree, exclusive the given node ! */ toArray(src = this.root) {
        let result = [];
        if (src === null) return result;
        if (src.left) {
            result.push(src.left.obj);
            result = [
                ...result,
                ...this.toArray(src.left)
            ];
        }
        if (src.right) {
            result.push(src.right.obj);
            result = [
                ...result,
                ...this.toArray(src.right)
            ];
        }
        return result;
    }
    innerSearch(point, node, parent) {
        if (node === null) return parent;
        var dimension = this.dimensions[node.dimension];
        if (point[dimension] < node.obj[dimension]) return this.innerSearch(point, node.left, node);
        else return this.innerSearch(point, node.right, node);
    }
    insert(point) {
        var insertPosition = this.innerSearch(point, this.root, null), newkdNode, dimension;
        if (insertPosition === null) {
            this.root = new kdNode(point, 0, null);
            return;
        }
        newkdNode = new kdNode(point, (insertPosition.dimension + 1) % this.dimensions.length, insertPosition);
        dimension = this.dimensions[insertPosition.dimension];
        if (point[dimension] < insertPosition.obj[dimension]) insertPosition.left = newkdNode;
        else insertPosition.right = newkdNode;
    }
    nodeSearch(point, node) {
        if (node === null) return null;
        if (node.obj === point) return node;
        else {
            // equality check ??? will it work on floats ??? // not the problem, it does not find a candidate !!! uuuhhh
            let met = this.metric(node.obj, point);
        // console.log('kdTree:nodeSearch', met);
        }
        var dimension = this.dimensions[node.dimension];
        // uuuhhh looking at the tree I see left <= obj[dim],
        // no actually the array splitting has nothing to do with this comparision, can be either way !!!
        if (point[dimension] < node.obj[dimension]) // console.log(`kdTree:nodeSearch left ${point[dimension]} <=? ${node.obj[dimension]}`);
        return this.nodeSearch(point, node.left);
        else // console.log(`kdTree:nodeSearch right ${point[dimension]} >? ${node.obj[dimension]}`);
        return this.nodeSearch(point, node.right);
    }
    findMin(node, dim) {
        var dimension;
        var own;
        var left;
        var right;
        var min;
        if (node === null) return null;
        dimension = this.dimensions[dim];
        if (node.dimension === dim) {
            if (node.left !== null) return this.findMin(node.left, dim);
            return node;
        }
        own = node.obj[dimension];
        left = this.findMin(node.left, dim);
        right = this.findMin(node.right, dim);
        min = node;
        if (left !== null && left.obj[dimension] < own) min = left;
        if (right !== null && right.obj[dimension] < min.obj[dimension]) min = right;
        return min;
    }
    findMax(node, dim) {
        var dimension;
        var own;
        var left = null;
        var right = null;
        var max;
        dimension = this.dimensions[dim];
        if (node.dimension === dim) {
            if (node.left !== null) return this.findMax(node.left, dim);
            return node;
        }
        own = node.obj[dimension];
        if (node.left) left = this.findMax(node.left, dim);
        if (node.right) right = this.findMax(node.right, dim);
        max = node;
        if (left !== null && left.obj[dimension] > own) max = left;
        if (right !== null && right.obj[dimension] > max.obj[dimension]) max = right;
        return max;
    }
    removeNode(node) {
        var nextNode;
        var nextObj;
        var pDimension;
        if (node === null) return;
        if (node.left === null && node.right === null) {
            if (node.parent === null) {
                this.root = null;
                return;
            }
            pDimension = this.dimensions[node.parent.dimension];
            if (node.obj[pDimension] <= node.parent.obj[pDimension]) node.parent.left = null;
            else node.parent.right = null;
            return;
        }
        // If the right subtree is not empty, swap with the minimum element on the
        // node's dimension. If it is empty, we swap the left and right subtrees and
        // do the same.
        if (node.right !== null) {
            nextNode = this.findMin(node.right, node.dimension); // orig right, findMin
            nextObj = nextNode.obj;
            this.removeNode(nextNode);
            node.obj = nextObj;
        } else if (node.left !== null) {
            nextNode = this.findMin(node.left, node.dimension); // orig left, findMin
            nextObj = nextNode.obj;
            this.removeNode(nextNode);
            node.right = node.left; // orig right = left
            node.left = null; //orig left
            node.obj = nextObj;
        }
    }
    remove(point) {
        var node;
        // console.log('kdTree:remove searching:', point);
        node = this.nodeSearch(point, this.root);
        if (node === null) {
            console.warn("kdTree:remove:kack'n'shit");
            return false;
        }
        // this.removeNode(node); // buggi
        // new tree rebuild
        const allchilds = this.toArray(node);
        let newnode = this.buildTree(allchilds, node.dimension, node.parent);
        // console.log('remove', node)
        // console.log('remove', allchilds);
        // console.log('remove', newnode);
        if (node.parent) {
            if (node.parent.left === node) // console.log('remove im left');
            node.parent.left = newnode;
            else if (node.parent.right === node) // console.log('remove im right');
            node.parent.right = newnode;
        } else this.root = newnode; /// ???
        return true;
    }
    nearestSearch(data, node) {
        let bestChild;
        let dimension = this.dimensions[node.dimension];
        let ownDistance = this.metric(data.point, node.obj);
        let linearPoint = new this._kdTreeObjectType();
        var linearDistance;
        let otherChild;
        let i;
        // console.log(`kdTree:nearestSearch`, data);
        const saveNode = (node, distance)=>{
            data.bestNodes.push([
                node,
                distance
            ]);
            if (data.bestNodes.size() > data.maxNodes) data.bestNodes.pop(); // endless loop here !!!
        };
        for(i = 0; i < this.dimensions.length; i += 1)if (i === node.dimension) linearPoint[this.dimensions[i]] = data.point[this.dimensions[i]];
        else linearPoint[this.dimensions[i]] = node.obj[this.dimensions[i]];
        linearDistance = this.metric(linearPoint, node.obj);
        if (node.right === null && node.left === null) {
            if (data.bestNodes.size() < data.maxNodes || ownDistance < data.bestNodes.peek()[1]) saveNode(node, ownDistance);
            return;
        }
        if (node.right === null) bestChild = node.left;
        else if (node.left === null) bestChild = node.right;
        else if (data.point[dimension] < node.obj[dimension]) bestChild = node.left;
        else bestChild = node.right;
        this.nearestSearch(data, bestChild);
        if (data.bestNodes.size() < data.maxNodes || ownDistance < data.bestNodes.peek()[1]) saveNode(node, ownDistance);
        if (data.bestNodes.size() < data.maxNodes || Math.abs(linearDistance) < data.bestNodes.peek()[1]) {
            if (bestChild === node.left) otherChild = node.right;
            else otherChild = node.left;
            if (otherChild !== null) this.nearestSearch(data, otherChild);
        }
    }
    nearest(point, maxNodes, maxDistance) {
        let i;
        let result = [];
        let bestNodes;
        bestNodes = new BinaryHeap((e)=>{
            return -e[1];
        });
        if (maxDistance) {
            console.log("kdTree:nearest, maxnodes", maxNodes);
            for(i = 0; i < maxNodes; i += 1)bestNodes.push([
                null,
                maxDistance
            ]);
        }
        if (this.root) this.nearestSearch({
            point,
            bestNodes,
            maxNodes
        }, this.root);
        result = [];
        for(i = 0; i < Math.min(maxNodes, bestNodes.content.length); i += 1)if (bestNodes.content[i][0]) result.push([
            bestNodes.content[i][0].obj,
            bestNodes.content[i][1]
        ]);
        return result;
    }
    balanceFactor() {
        const height = (node)=>{
            if (node === null) return 0;
            return Math.max(height(node.left), height(node.right)) + 1;
        };
        const count = (node)=>{
            if (node === null) return 0;
            return count(node.left) + count(node.right) + 1;
        };
        return height(this.root) / (Math.log(count(this.root)) / Math.log(2));
    }
}
class BinaryHeap {
    constructor(scoreFunction){
        this.content = [];
        this.scoreFunction = scoreFunction;
    }
    push(element) {
        // Add the new element to the end of the array.
        this.content.push(element);
        // Allow it to bubble up.
        this.bubbleUp(this.content.length - 1);
    }
    pop() {
        // Store the first element so we can return it later.
        var result = this.content[0];
        // Get the element at the end of the array.
        var end = this.content.pop();
        // If there are any elements left, put the end element at the
        // start, and let it sink down.
        if (end && this.content.length > 0) {
            this.content[0] = end;
            this.sinkDown(0);
        }
        return result;
    }
    peek() {
        return this.content[0];
    }
    remove(node) {
        var len = this.content.length;
        // To remove a value, we must search through the array to find
        // it.
        for(var i = 0; i < len; i++)if (this.content[i] == node) {
            // When it is found, the process seen in 'pop' is repeated
            // to fill up the hole.
            var end = this.content.pop();
            if (end && i != len - 1) {
                this.content[i] = end;
                if (this.scoreFunction(end) < this.scoreFunction(node)) this.bubbleUp(i);
                else this.sinkDown(i);
            }
            return;
        }
        throw new Error("kdNode not found.");
    }
    size() {
        return this.content.length;
    }
    bubbleUp(n) {
        // Fetch the element that has to be moved.
        var element = this.content[n];
        // When at 0, an element can not go up any further.
        while(n > 0){
            // Compute the parent element's index, and fetch it.
            var parentN = Math.floor((n + 1) / 2) - 1, parent = this.content[parentN];
            // Swap the elements if the parent is greater.
            if (this.scoreFunction(element) < this.scoreFunction(parent)) {
                this.content[parentN] = element;
                this.content[n] = parent;
                // Update 'n' to continue at the new position.
                n = parentN;
            } else break;
        }
    }
    sinkDown(n) {
        // Look up the target element and its score.
        var length = this.content.length, element = this.content[n], elemScore = this.scoreFunction(element);
        while(true){
            // Compute the indices of the child elements.
            var child2N = (n + 1) * 2;
            var child1N = child2N - 1;
            // This is used to store the new position of the element,
            // if any.
            var swap = null;
            // If the first child exists (is inside the array)...
            if (child1N < length) {
                // Look it up and compute its score.
                var child1 = this.content[child1N], child1Score = this.scoreFunction(child1);
                // If the score is less than our element's, we need to swap.
                if (child1Score < elemScore) swap = child1N;
            }
            // Do the same checks for the other child.
            if (child2N < length) {
                var child2 = this.content[child2N], child2Score = this.scoreFunction(child2);
                if (child2Score < (swap == null ? elemScore : child1Score)) swap = child2N;
            }
            // If the element needs to be moved, swap it, and continue.
            if (swap != null) {
                this.content[n] = this.content[swap];
                this.content[swap] = element;
                n = swap;
            } else break;
        }
    }
}
exports.kdTree = kdTree;
exports.BinaryHeap = BinaryHeap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"d3nwr"}],"d3nwr":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bM8ey":[function(require,module,exports) {
// todo:
//   move out serial ? Or look for a serial readline implementation ???
// bugs:
//   disconnect - Failed to execute 'close' on 'SerialPort': Cannot cancel a locked stream
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Device: abstracts access to machine.
 * It "simplifies" serial port access. At the moment it only ollows "write and response" style communication.
 * The serial port is opened, then a reader loop is startet, which pushes each new line into the inputQueue.
 * Function serialWriteWait is used to issue commands and wait for the device to aknowledge.
 */ parcelHelpers.export(exports, "Device", ()=>Device);
class Device {
    inputLast = "";
    inputQueue = [];
    constructor(){
        this.deviceCheck = document.getElementById("deviceCheck");
        this.deviceConnect = document.getElementById("deviceConnect");
        this.deviceDisconnect = document.getElementById("deviceDisconnect");
        this.deviceInput = document.getElementById("deviceInput");
        this.deviceInputForm = document.getElementById("deviceInputForm");
        this.deviceInfo = document.getElementById("deviceInfo");
        this.deviceLog = document.getElementById("deviceLog");
        this.deviceSerial = document.getElementById("deviceSerial");
        this.port = null;
        this.textDecoder = new TextDecoderStream();
        if (this.deviceCheck && this.deviceConnect && this.deviceDisconnect && this.deviceInput && this.deviceInputForm) {
            this.deviceCheck.onclick = this.serialCheck.bind(this);
            this.deviceConnect.onclick = this.serialConnect.bind(this);
            this.deviceDisconnect.onclick = this.serialDisconnect.bind(this);
            // this.deviceDosome.onclick = this.serialDosome.bind(this);
            // this.deviceInput.onchange = this.serialInputChange.bind(this);
            this.deviceInputForm.onsubmit = this.serialInputForm.bind(this);
        }
        this.serialCheck();
    }
    /**
     * Opens a dialog where user can select a device to connect.
     */ async serialConnect() {
        // opens dialog where user can select a device
        navigator.serial.requestPort().then((port)=>{
            console.log("serialConnect", port);
            this.serialPortOpen(port);
        }).catch((reason)=>{
            // console.warn('serialConnect',reason);
            this.serialError(reason);
        });
    }
    async serialConnectDevice(vid, pid) {
        for (let port of this.ports){
            console.log(`serialConnectDevice: serial available, ports: `, port.getInfo());
            const { usbProductId , usbVendorId  } = port.getInfo();
            if (usbProductId == pid && usbVendorId == vid) {
                this.serialPortOpen(port);
                break;
            }
        }
    }
    /**
     * Disconnect from device
     */ async serialDisconnect() {
        if (this.port) // this.reader.releaseLock(); // does'nt do it :(
        this.port.close().then(()=>{
            this.port = null;
            console.log("port closed");
        }).catch((error)=>{
            console.warn(error);
        });
    }
    /**
     *  Wait until some response or timeout, returns response or 'timeout' or might fail with 'busy' or 'disconnected'
     */ async serialWriteWait(value, timeout = 10000) {
        // clean serial input
        this.inputQueue = [];
        return new Promise(async (resolve, reject)=>{
            if (this.port) try {
                this.serialWrite(value);
                // wait until some response or timeout
                let available = false;
                const timestep = 10;
                let maxtime = timeout;
                while(!available){
                    available = await this.serialAvail(timestep);
                    maxtime = maxtime - timestep;
                    if (maxtime <= 0) break;
                }
                // console.log(`serialWriteWait avail:${available} time:${timeout - maxtime}`);
                // console.log(`serialWriteWait check: ${this.inputQueue.length}`);
                if (this.inputQueue.length > 0) {
                    const inp = this.inputQueue.pop();
                    // console.log(`serialWriteWait resolve: ${inp}`);
                    resolve(inp);
                } else // console.log(`serialWriteWait reject: `);
                reject("timeout");
            } catch (err) {
                // console.warn(err);
                reject("busy");
            }
            else // console.warn(this.port);
            reject("disconnected");
        });
    }
    /**
     * Helper function to write anything to the device.
     * @param event
     */ serialInputForm(event) {
        if (this.deviceInput) {
            event.preventDefault(); // form will do strange things !
            // console.log(event);
            this.serialInputChange(event);
        }
    }
    /**
     * Helper function to write anything to the device.
     * @param event
     */ async serialInputChange(event) {
        if (this.deviceInput) {
            if (this.port) {
                let text = this.deviceInput.value;
                if (text.length > 0) this.serialWrite(text);
            } else console.warn("serialInputChange - no port open");
        }
    }
    /* ***************** private stuff **************************** */ async serialCheck() {
        let result = false;
        if ("serial" in navigator) {
            this.updatePorts();
            navigator.serial.addEventListener("connect", (event)=>{
                // TODO: Automatically open event.target or warn user a port is available.
                console.log("serialCheck:connect", event);
                this.updatePorts();
            });
            navigator.serial.addEventListener("disconnect", (event)=>{
                // TODO: Remove |event.target| from the UI.
                // If the serial port was opened, a stream error would be observed as well.
                console.log("serialCheck:disconnect", event);
            });
            result = true;
        } else // console.warn('No serial API available, try another browser');
        this.serialError("This browser does not support the serial port. Connection to device impossible! Use Chrome!");
        return result;
    }
    updatePorts() {
        // lists all recently used ports, could just open one then.
        navigator.serial.getPorts().then((ports)=>{
            console.log("updatePorts:", ports);
            this.ports = ports;
            let html = ""; //devices:<br>';
            for (let port of ports){
                console.log(`serial available, ports: `, port.getInfo());
                const { usbProductId , usbVendorId  } = port.getInfo();
                console.log(`updatePorts port pid:${usbProductId} vid:${usbVendorId}`);
                html += `<div class="w3-container"><i class="fa-solid fa-microchip"></i> pid:${usbProductId} vid:${usbVendorId} <button class="w3-btn w3-round w3-light-grey w3-tiny" id="${usbVendorId}-${usbProductId}"><i class="fa fa-plug"></i> connect </button></div>`;
            }
            if (this.deviceInfo) {
                this.deviceInfo.innerHTML = html;
                const btns = this.deviceInfo.getElementsByTagName("button");
                for (const btn of btns)btn.onclick = ()=>{
                    const ids = btn.id.split("-");
                    console.log(ids);
                    this.serialConnectDevice(parseInt(ids[0]), parseInt(ids[1]));
                };
            }
            if (this.deviceConnect && (this.ports == null || this.ports.length == 0)) // console.log('updatePorts: open dev buttons!!!', this.deviceConnect.className);
            this.deviceConnect.className = this.deviceConnect.className.replace("w3-hide", "w3-show");
        });
    }
    /**
     * Opens a givven port. Can be used after queriing ports with updatePorts.
     * @param port
     */ serialPortOpen(port) {
        port.onconnect = ()=>{
            console.log(`CONNECTED`);
        };
        port.ondisconnect = ()=>{
            console.log(`DISCONNECTED`);
            if (this.onSerialDisconnected) this.onSerialDisconnected();
        };
        port.open({
            baudRate: 250000
        }).then((val)=>{
            this.port = port;
            if (this.deviceLog) this.deviceLog.innerHTML = "connected<br>";
            console.log("port opened ? ", this.port);
            if (this.onSerialConnected) this.onSerialConnected();
            setTimeout(this.serialRead.bind(this), 0); // start read loop
        }).catch((error)=>{
            // console.warn(error);
            this.serialError(error.toString());
        });
    }
    serialError(error) {
        console.warn("serialError", error);
        if (this.deviceLog) this.deviceLog.innerHTML = `<span class="w3-red">${error}</span><br>`;
    }
    /**
     * Internal, starts the read line loop.
     */ async serialRead() {
        if (this.port) {
            const readableStreamClosed = this.port.readable.pipeTo(this.textDecoder.writable);
            this.reader = this.textDecoder.readable.getReader();
            // Listen to data coming from the serial device.
            setTimeout(this.serialReadon.bind(this), 1); // will loop there
        }
    }
    /**
     * Internal, handles the read line loop.
     */ async serialReadon() {
        try {
            const { value , done  } = await this.reader.read();
            if (done) {
                // Allow the serial port to be closed later. // Does not happen !
                this.reader.releaseLock();
                console.log("serialRead - done");
            } else {
                let pushedStuff = false;
                // value is a string.
                if (value.indexOf("\n") != -1) {
                    const values = value.split("\n");
                    // console.log(values);
                    if (values.length <= 1) console.error("Assertion failed ", values);
                    for(let i = 0; i < values.length - 1; i++){
                        this.inputLast += values[i];
                        this.inputQueue.push(this.inputLast);
                        this.serialLog(this.inputLast, true);
                        this.inputLast = "";
                        pushedStuff = true;
                    }
                    this.inputLast = values[values.length - 1];
                // console.log(`serialReadon last: "${this.inputLast}"`);
                } else // no \n
                this.inputLast += value;
                if (pushedStuff) setTimeout(this.serialCallback.bind(this), 5);
                setTimeout(this.serialReadon.bind(this), 1); // will loop there
            }
        } catch (error) {
            console.warn(error);
            this.serialError(error.toString());
        }
    }
    serialCallback() {
    // const elem = document.getElementById('deviceLog');
    // if (elem) {
    //     let latest = this.inputQueue.pop();
    //     while (latest) {
    //         elem.innerHTML += `${latest}<br>`;
    //         latest = this.inputQueue.pop();
    //     }
    // }
    }
    async serialWrite(value) {
        this.serialLog(value, false);
        // write...
        let utf8Encode = new TextEncoder();
        const writer = this.port.writable.getWriter();
        await writer.write(utf8Encode.encode(`${value}\n`));
        writer.releaseLock();
    }
    /**
     * Waits until data was read or timeout
     * @param timeout
     * @returns
     */ serialAvail(timeout = 10) {
        return new Promise((resolve)=>{
            if (this.inputQueue.length > 0) resolve(true);
            else setTimeout(()=>{
                resolve(false);
            }, timeout);
        });
    }
    serialLog(text, incomming) {
        if (this.deviceSerial) {
            while(this.deviceSerial.childElementCount > 20){
                let ch = this.deviceSerial.firstChild;
                if (ch) this.deviceSerial.removeChild(ch);
            }
            if (incomming) this.deviceSerial.innerHTML += `<div><i class="fa-solid fa-arrow-right-to-bracket"></i> ${text}</div>`;
            else this.deviceSerial.innerHTML += `<div><i class="fa-solid fa-arrow-up-right-from-square"></i> ${text}</div>`;
            globalThis.resize();
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"d3nwr"}],"d2oVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PadStyle", ()=>PadStyle);
parcelHelpers.export(exports, "Pad", ()=>Pad);
parcelHelpers.export(exports, "PCB", ()=>PCB);
var _kdTree = require("./kdTree");
class BoundingBox {
    minx = 99999;
    miny = 99999;
    maxx = -99999;
    maxy = -99999;
    constructor(){}
    updateFromPad(pad) {
        this.update(pad.posX, pad.posY);
    }
    update(x, y) {
        if (x < this.minx) this.minx = x;
        if (y < this.miny) this.miny = y;
        if (x > this.maxx) this.maxx = x;
        if (y > this.maxy) this.maxy = y;
    // console.log(`bb: ${this.miny} ${this.maxy} ${this.center()[1]}`);
    }
    center(zoom = 1.0) {
        return [
            (this.minx + (this.maxx - this.minx) / 2) * zoom,
            (this.miny + (this.maxy - this.miny) / 2) * zoom
        ];
    }
    zero(zoom = 1.0) {
        return [
            this.minx * zoom,
            this.miny * zoom
        ];
    }
    size(zoom = 1.0) {
        return [
            (this.maxx - this.minx) * zoom,
            (this.maxy - this.miny) * zoom
        ];
    }
    diagonal(zoom = 1.0) {
        const size = this.size(zoom);
        return Math.sqrt(size[0] * size[0] + size[1] * size[1]);
    }
    /** Check if pad is inside the boundingbox */ inside(pad) {
        return pad.posX >= this.minx && pad.posX <= this.maxx && pad.posY >= this.miny && pad.posY <= this.maxy;
    }
}
class PadStyle {
    constructor(form, w, h){
        this.form = form;
        this.width = w;
        this.height = h;
    }
}
class Pad {
    constructor(style, x, y){
        this.posX = x;
        this.posY = y;
        this.style = style;
    }
    asTuple() {
        return [
            this.posX,
            this.posY
        ];
    }
}
class PCB extends (0, _kdTree.kdTreeObject) {
    fileName = "";
    mouseFlag = false;
    mouseStartX = 0;
    mouseStartY = 0;
    mouseOffX = 0;
    mouseOffY = 0;
    zoom = 5.0;
    nearest = [];
    constructor(){
        super();
        this.mapStyles = new Map();
        this.mapPads = new Map();
        this.bbPcb = new BoundingBox();
        this.bbZero = new BoundingBox();
        this.bbSelection = new BoundingBox();
    }
    setCanvas(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
    }
    /**
     * Sets the Zero position to the lower left of selection rectangle.
     */ setZero() {
        let result = false;
        // use last selection ???
        this.bbZero = this.bbSelection;
        result = true;
        console.log(`Pcb:setZero: ${this.bbZero.zero()}`);
    }
    /**
     * @returns Zero position relative to Origin(0,0).
     */ getZero() {
        return this.bbZero.zero(); // lower left ?? better when .center() ??
    }
    /**
     * @returns All Pads in selection.
     */ getSelected() {
        let result = [];
        for (let near of this.nearest)// console.log(near);
        if (near.length > 0) result.push(near[0]);
        return result;
    }
    /**
     * @returns Lower left of selection as tuple
     */ getSelectedZero() {
        return this.bbSelection.zero();
    }
    getPadCount() {
        let result = 0;
        for (let padset of this.mapPads)result += padset[1].size;
        return result;
    }
    zoomToFit(size) {
        let psize = this.bbPcb.size();
        let zw = size[0] / psize[0];
        let zh = size[1] / psize[1];
        this.zoom = (zw > zh ? zh : zw) * .9;
        console.log(`Pcb:zoomToFit zoom ${this.zoom}`, psize);
        this.center();
    }
    center() {
        if (this.canvas) {
            this.mouseOffX = -(this.bbPcb.center()[0] * this.zoom) + this.canvas.width / 2;
            this.mouseOffY = -(this.bbPcb.center()[1] * this.zoom) + this.canvas.height / 2;
        }
    }
    addPadStyle(name, form, w, h) {
        this.mapStyles.set(name, new PadStyle(form, w, h));
    }
    addPad(style, x, y) {
        if (!this.mapPads.has(style)) this.mapPads.set(style, new Set());
        let padset = this.mapPads.get(style);
        if (padset) {
            const newpad = new Pad(style, x, y);
            padset.add(newpad);
            this.bbPcb.update(x, y);
        }
    }
    retree() {
        try {
            let pads = [];
            for (let padsets of this.mapPads.values())for (let pad of padsets)pads.push(pad);
            this.tree = new (0, _kdTree.kdTree)(PCB, pads, PCB.distance, [
                "posX",
                "posY"
            ]);
            console.log("tree bf:", this.tree.balanceFactor());
        } catch (err) {
            console.error(err);
        }
    }
    mouseDown(event) {
        // console.event.buttons
        const trans = this.ctx.getTransform();
        if (event.button == 0) {
            const mx = (event.clientX * trans.a - this.mouseOffX) / this.zoom;
            const my = (this.canvas.height - (event.clientY - this.canvas.offsetTop) - this.mouseOffY) / this.zoom;
            this.mouseStartX = mx;
            this.mouseStartY = my;
            this.mouseSelectX = mx;
            this.mouseSelectY = my;
            this.mouseSelect = true;
        // console.log(`Pcb:mouseDown: x:${this.mouseStartX} y:${this.mouseStartY}`);
        }
        if (event.button != 0) {
            this.mouseStartX = event.clientX * trans.a - this.mouseOffX;
            this.mouseStartY = event.clientY * trans.d - this.mouseOffY;
            this.mouseFlag = true;
        }
    }
    mouseUp(event) {
        const trans = this.ctx.getTransform();
        // console.log('pcb:mouseUp event:', event);
        if (event.button != 0) this.mouseFlag = false;
        if (event.button == 0) {
            this.mouseSelect = false;
            // console.log(trans, event);
            // console.log('', this.canvas.height-(event.clientY-this.canvas.offsetTop), this.mouseOffY);
            const mx = (event.clientX * trans.a - this.mouseOffX) / this.zoom;
            const my = (this.canvas.height - (event.clientY - this.canvas.offsetTop) - this.mouseOffY) / this.zoom;
            this.mouseSelectX = mx;
            this.mouseSelectY = my;
            // bb = selected rectangle
            this.bbSelection = new BoundingBox();
            this.bbSelection.update(this.mouseStartX, this.mouseStartY);
            this.bbSelection.update(this.mouseSelectX, this.mouseSelectY);
            let pad = new Pad("", this.bbSelection.center()[0], this.bbSelection.center()[1]);
            // console.log(`Pcb:mouseUp cx:${pad.posX} cy:${pad.posY} diagonal:${this.bbSelection.diagonal()}`);
            if (this.tree) {
                let found = [];
                let dist = this.bbSelection.diagonal();
                if (dist < 0.1) {
                    found = this.tree.nearest(pad, 1, dist);
                    this.nearest = found;
                } else {
                    dist = dist / 2 * (dist / 2); // search require square distance ?
                    found = this.tree.nearest(pad, this.getPadCount(), dist); // uuuhhh use pad count !?
                    if (!event.shiftKey) this.nearest = [];
                    for (const near of found)// console.log(`m:${mx},${my} nearest:${near[0].posX},${near[0].posY}  dist:${Math.sqrt(near[1])}`);
                    /// uuuhhh check if inside the box
                    if (this.bbSelection.inside(near[0])) this.nearest.push(near);
                }
                // need a bb for actual selected points to get zero right
                let bbNewSelection = new BoundingBox();
                for (const near1 of this.nearest)bbNewSelection.updateFromPad(near1[0]);
                this.bbSelection = bbNewSelection;
                console.log(`Pcb:mouseUp selection found #${found.length}`);
            }
        }
    }
    mouseMove(event) {
        // ooohhh do not trust event.button, it's always 0 here !
        // console.log('pcb:mouseMove',event);
        const trans = this.ctx.getTransform();
        if (this.mouseFlag) {
            this.mouseOffX = event.clientX * trans.a - this.mouseStartX;
            this.mouseOffY = event.clientY * trans.d - this.mouseStartY;
        }
        if (this.mouseSelect) {
            const mx = (event.clientX * trans.a - this.mouseOffX) / this.zoom;
            const my = (this.canvas.height - (event.clientY - this.canvas.offsetTop) - this.mouseOffY) / this.zoom;
            this.mouseSelectX = mx;
            this.mouseSelectY = my;
        }
    }
    mouseWheel(event) {
        const trans = this.ctx.getTransform();
        // console.log(event.deltaY);
        if (event.deltaY > 0) this.zoom *= 1.1;
        else this.zoom *= 0.9;
    }
    mouseOut(event) {}
    static distance(a, b) {
        return (a.posX - b.posX) * (a.posX - b.posX) + (a.posY - b.posY) * (a.posY - b.posY);
    }
    draw() {
        // theoretisch so...
        // this.ctx.fillStyle = 'orangered';
        this.ctx.fillStyle = "antiquewhite";
        // draw bb center
        this.ctx.strokeStyle = "red";
        let center = this.bbPcb.center(this.zoom);
        this.ctx.beginPath();
        this.ctx.moveTo(center[0] - 10 + this.mouseOffX, center[1] + this.mouseOffY);
        this.ctx.lineTo(center[0] + 10 + this.mouseOffX, center[1] + this.mouseOffY);
        this.ctx.moveTo(center[0] + this.mouseOffX, center[1] - 10 + this.mouseOffY);
        this.ctx.lineTo(center[0] + this.mouseOffX, center[1] + 10 + this.mouseOffY);
        this.ctx.stroke();
        // draw bb
        this.ctx.beginPath();
        this.ctx.rect(this.bbPcb.zero(this.zoom)[0] + this.mouseOffX, this.bbPcb.zero(this.zoom)[1] + this.mouseOffY, this.bbPcb.size(this.zoom)[0], this.bbPcb.size(this.zoom)[1]);
        this.ctx.stroke();
        for (let padstyle of this.mapPads.keys()){
            const sty = this.mapStyles.get(padstyle);
            const padset = this.mapPads.get(padstyle);
            if (sty && padset) {
                const sw = sty.width * this.zoom;
                const sh = sty.height * this.zoom;
                for (let pad of padset.values()){
                    if (sty.form == "R" || sty.form == "O" || sty.form == "RoundRect") {
                        this.ctx.beginPath();
                        this.ctx.fillRect(pad.posX * this.zoom - sw / 2.0 + this.mouseOffX, pad.posY * this.zoom - sh / 2.0 + this.mouseOffY, sw, sh);
                        this.ctx.fill();
                    } else if (sty.form == "C") {
                        this.ctx.beginPath();
                        this.ctx.ellipse(pad.posX * this.zoom + this.mouseOffX, pad.posY * this.zoom + this.mouseOffY, sw / 2, sw / 2, 0, 0, 2 * Math.PI);
                        // this.ctx.arc(
                        //     pad.posX * this.zoom - sw / 2.0 + this.mouseOffX,
                        //     pad.posY * this.zoom - sh / 2.0 + this.mouseOffY,
                        //     sty.width * this.zoom,
                        //     0, 2 * Math.PI);
                        this.ctx.fill();
                    } else {
                        console.log(`draw quatsch ${sty.form}`);
                        break;
                    }
                }
            }
        } // for padstyle
        // draw selectionCross(es)
        this.ctx.strokeStyle = "purple";
        this.ctx.beginPath();
        let csize = .5;
        for (const near of this.nearest){
            this.ctx.moveTo((near[0].posX - csize) * this.zoom + this.mouseOffX, near[0].posY * this.zoom + this.mouseOffY);
            this.ctx.lineTo((near[0].posX + csize) * this.zoom + this.mouseOffX, near[0].posY * this.zoom + this.mouseOffY);
            this.ctx.moveTo(near[0].posX * this.zoom + this.mouseOffX, (near[0].posY + csize) * this.zoom + this.mouseOffY);
            this.ctx.lineTo(near[0].posX * this.zoom + this.mouseOffX, (near[0].posY - csize) * this.zoom + this.mouseOffY);
        // console.log(`nearest:${near[0].posX},${near[0].posY}  dist:${Math.sqrt(near[1])}`);
        }
        this.ctx.stroke();
        // draw selection lower left = zero kandidate
        let zero = [
            0,
            0
        ];
        if (this.bbSelection) {
            csize = 2 * this.zoom;
            zero = this.bbSelection.zero(this.zoom);
            this.ctx.beginPath();
            this.ctx.moveTo(zero[0] - csize + this.mouseOffX, zero[1] + this.mouseOffY);
            this.ctx.lineTo(zero[0] + csize + this.mouseOffX, zero[1] + this.mouseOffY);
            this.ctx.moveTo(zero[0] + this.mouseOffX, zero[1] - csize + this.mouseOffY);
            this.ctx.lineTo(zero[0] + this.mouseOffX, zero[1] + csize + this.mouseOffY);
            this.ctx.stroke();
        }
        // draw origin
        this.ctx.strokeStyle = "black";
        zero = this.bbZero.center(this.zoom);
        this.ctx.beginPath();
        this.ctx.moveTo(-csize + this.mouseOffX, this.mouseOffY);
        this.ctx.lineTo(+csize + this.mouseOffX, this.mouseOffY);
        this.ctx.moveTo(this.mouseOffX, -csize + this.mouseOffY);
        this.ctx.lineTo(this.mouseOffX, +csize + this.mouseOffY);
        this.ctx.stroke();
        // draw zero
        this.ctx.strokeStyle = "black";
        zero = this.bbZero.zero(this.zoom);
        this.ctx.beginPath();
        this.ctx.moveTo(zero[0] - csize + this.mouseOffX, zero[1] + this.mouseOffY);
        this.ctx.lineTo(zero[0] + csize + this.mouseOffX, zero[1] + this.mouseOffY);
        this.ctx.moveTo(zero[0] + this.mouseOffX, zero[1] - csize + this.mouseOffY);
        this.ctx.lineTo(zero[0] + this.mouseOffX, zero[1] + csize + this.mouseOffY);
        this.ctx.stroke();
        // draw selectionRectangle
        if (this.mouseSelect) {
            this.ctx.strokeStyle = "purple";
            this.ctx.beginPath();
            this.ctx.moveTo(this.mouseStartX * this.zoom + this.mouseOffX, this.mouseStartY * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseSelectX * this.zoom + this.mouseOffX, this.mouseStartY * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseSelectX * this.zoom + this.mouseOffX, this.mouseSelectY * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseStartX * this.zoom + this.mouseOffX, this.mouseSelectY * this.zoom + this.mouseOffY);
            this.ctx.lineTo(this.mouseStartX * this.zoom + this.mouseOffX, this.mouseStartY * this.zoom + this.mouseOffY);
            this.ctx.stroke();
        }
    }
}

},{"./kdTree":"5XdPJ","@parcel/transformer-js/src/esmodule-helpers.js":"d3nwr"}],"kP1bg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParserGerber", ()=>ParserGerber);
var _parser = require("./parser");
class ParserGerber extends (0, _parser.Parser) {
    reNumFormat = /^%FSLAX([0-9])([0-9])Y([0-9])([0-9])[*]%/;
    reMatchPad = /^(%AD)(D[0-9]+)([A-Za-z]+)[,]([-0-9.]+)[X]?([-0-9.]+)?[X]?([-0-9.]+)?/;
    reMatchPadCoordInit = /^([DG][0-9]+)[*]/;
    reMatchPadCoord = /^X([-]?)([0-9]+)Y([-]?)([0-9]+)D([0-9]+)[*]/;
    _cancel = false;
    floatFracts = 1;
    floatDezis = 1;
    lastPad = "";
    constructor(pcb){
        super(pcb);
    }
    parseFile(file) {
        return new Promise((resolve)=>{
            file.arrayBuffer().then((buf)=>{
                arrayBufferToString(buf, "UTF-8", (text)=>{
                    this.processGerberText(text).finally(()=>{
                        resolve();
                    });
                });
            });
        });
    }
    cancel() {
        this._cancel = true;
    }
    async processGerberText(text) {
        // console.log(text);
        // translate line ends...
        text = text.replace(/\r/g, ""); // remove windows trash
        const lines = text.split("\n");
        let lineNr = 1;
        for (let line of lines){
            lineNr++;
            if (this._cancel) {
                this._cancel = false;
                break;
            }
            // console.log(`gerber(${lineNr}/${lines.length}): `);
            await this.processGerberLine(line);
            if (this.processCB) this.processCB(lineNr * 100 / lines.length);
        } // for
        this.pcb.retree();
    }
    async processGerberLine(line) {
        return new Promise((resolve)=>{
            // line = line.replace(/\n/g,'<br>');
            // Zahlenformat info line "%FSLAX34Y34*%"
            //   %FSLAX25Y25*% Coordinate format specification:
            //   Coordinates format is 2.5:
            //   2 digits in the integer part
            //   5 digits in the fractional part
            const matchNumFormat = this.reNumFormat.exec(line); //line.match();
            if (matchNumFormat) {
                // console.log(matchNumFormat);
                this.floatDezis = parseInt(matchNumFormat[1]);
                this.floatFracts = parseInt(matchNumFormat[2]);
                console.log(`gerber: float digits = ${this.floatDezis} ${this.floatFracts}`);
            }
            // check for pad definitions
            // %ADD21R,0.600000X1.050000*%
            // %ADD10RoundRect,0.120000 X -0.180000
            //               X 0.680000 X -0.180000
            //              X -0.680000 X 0.180000
            //              X -0.680000 X 0.180000
            //               X 0.680000 X 0*%
            const matchPad = this.reMatchPad.exec(line); // line.match();///);
            // Wenn "C" dann gibts nur eine coord
            if (matchPad) {
                // console.log(matchPad);
                if (this.padsField) this.padsField.innerHTML += `${matchPad[2]} ${matchPad[3]} ${matchPad[4]} ${matchPad[5]}<br>`;
                if (matchPad[3] == "RoundRect") // kicad macro schnulli
                this.pcb.addPadStyle(matchPad[2], matchPad[3], Math.abs(parseFloat(matchPad[5])), Math.abs(parseFloat(matchPad[6])));
                else this.pcb.addPadStyle(matchPad[2], matchPad[3], parseFloat(matchPad[4]), parseFloat(matchPad[5]));
            }
            // Dxx* command - should be pad draw
            const matchPadCoordInit = this.reMatchPadCoordInit.exec(line); //line.match();///);
            if (matchPadCoordInit) // console.log(matchPadCoordInit);
            this.lastPad = matchPadCoordInit[1];
            // a pad line: "X379984Y963930D03*"
            const matchPadCoord = this.reMatchPadCoord.exec(line); // line.match();///);
            if (matchPadCoord) {
                if (this.lastPad.startsWith("D")) {
                    // if (1) {
                    // ignore and return ...
                    // resolve();
                    // console.log(matchPadCoord);
                    let sx = matchPadCoord[2];
                    let sy = matchPadCoord[4];
                    const len = this.floatDezis + this.floatFracts;
                    // fill freak's leading zeros
                    while(sx.length < len)sx = `0${sx}`;
                    while(sy.length < len)sy = `0${sy}`;
                    // make a freak'n float
                    let fx = 0.0;
                    let fy = 0.0;
                    sx = `${sx.substring(0, this.floatDezis)}.${sx.substring(this.floatDezis)}`;
                    sy = `${sy.substring(0, this.floatDezis)}.${sy.substring(this.floatDezis)}`;
                    fx = parseFloat(sx);
                    fy = parseFloat(sy);
                    if (matchPadCoord[1] == "-") fx = fx * -1;
                    if (matchPadCoord[3] == "-") fy = fy * -1;
                    fy;
                    if (this.coordsField) this.coordsField.innerHTML += `${this.lastPad}:  x:${fx} y:${fy} <br>`;
                    this.pcb.addPad(this.lastPad, fx, fy);
                // console.log(`gerber: pad ${lastPad}, ${fx}, ${fy}`);
                } else console.log(`ignoring ${this.lastPad}`);
            }
            this.pcb.center();
            setTimeout(resolve, 0); // this enables the progressbar / UI updates !
        });
    }
}
// found on se web...
function arrayBufferToString(buffer, encoding, callback) {
    var blob = new Blob([
        buffer
    ], {
        type: "text/plain"
    });
    var reader = new FileReader();
    reader.onload = (evt)=>{
        if (evt.target) callback(evt.target.result);
    };
    reader.readAsText(blob, encoding);
}
function stringToArrayBuffer(string, encoding, callback) {
    var blob = new Blob([
        string
    ], {
        type: "text/plain;charset=" + encoding
    });
    var reader = new FileReader();
    reader.onload = (evt)=>{
        if (evt.target) callback(evt.target.result);
    };
    reader.readAsArrayBuffer(blob);
}

},{"./parser":"6HdNW","@parcel/transformer-js/src/esmodule-helpers.js":"d3nwr"}],"6HdNW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Parser", ()=>Parser);
class Parser {
    constructor(pcb){
        this.pcb = pcb;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"d3nwr"}]},["dB0X9","klkQS"], "klkQS", "parcelRequire25fc")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQztJQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsSUFBRyxDQUFFLENBQUEsYUFBYSxDQUFBLEdBQUcsTUFBTSxJQUFJLFVBQVUscUNBQW9DO0lBQUE7SUFBQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUksSUFBSSxJQUFFLEdBQUUsSUFBRSxFQUFFLE1BQU0sRUFBQyxJQUFJO1lBQUMsSUFBSSxJQUFFLENBQUMsQ0FBQyxFQUFFO1lBQUMsRUFBRSxVQUFVLEdBQUMsRUFBRSxVQUFVLElBQUUsQ0FBQyxHQUFFLEVBQUUsWUFBWSxHQUFDLENBQUMsR0FBRSxXQUFVLEtBQUksQ0FBQSxFQUFFLFFBQVEsR0FBQyxDQUFDLENBQUEsR0FBRyxPQUFPLGNBQWMsQ0FBQyxHQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUU7UUFBQTtJQUFDO0lBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO1FBQUMsT0FBTyxLQUFHLEVBQUUsRUFBRSxTQUFTLEVBQUMsSUFBRyxLQUFHLEVBQUUsR0FBRSxJQUFHLENBQUM7SUFBQTtJQUFDLElBQUksSUFBRSxXQUFVO1FBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7WUFBQyxJQUFJLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLE1BQU0sRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxnQkFBZ0IsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsQ0FBQztZQUFDLEVBQUUsSUFBSSxFQUFDLElBQUcsSUFBSSxDQUFDLENBQUMsR0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRSxJQUFJLENBQUMsR0FBRyxHQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxHQUFFLElBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRSxJQUFJLENBQUMsSUFBSSxHQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFBQTtRQUFDLE9BQU8sRUFBRSxHQUFFO1lBQUM7Z0JBQUMsS0FBSTtnQkFBUSxPQUFNLFdBQVU7b0JBQUMsSUFBSSxJQUFFLENBQUUsQ0FBQSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxBQUFELEtBQUksU0FBUyxDQUFDLEVBQUUsRUFBQyxJQUFFLElBQUksQ0FBQyxNQUFNO29CQUFDLE9BQU8sSUFBRSxFQUFFLGdCQUFnQixDQUFDLGFBQVksSUFBSSxDQUFDLE1BQU0sSUFBRSxFQUFFLG1CQUFtQixDQUFDLGFBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUk7Z0JBQUE7WUFBQztZQUFFO2dCQUFDLEtBQUk7Z0JBQVMsT0FBTSxTQUFTLENBQUMsRUFBQztvQkFBQyxJQUFJLElBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUI7b0JBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsT0FBTyxHQUFDLEVBQUUsSUFBSSxHQUFFLElBQUksQ0FBQyxDQUFDLEdBQUMsS0FBSyxLQUFLLENBQUMsRUFBRSxPQUFPLEdBQUMsRUFBRSxHQUFHLEdBQUUsSUFBSTtnQkFBQTtZQUFDO1lBQUU7Z0JBQUMsS0FBSTtnQkFBTyxPQUFNLFdBQVU7b0JBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFFLElBQUksQ0FBQyxHQUFHLEVBQUMsSUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFFLE1BQU0sTUFBTSxDQUFDLEdBQUUsU0FBUyxNQUFNLENBQUM7b0JBQUcsRUFBRSxJQUFJLElBQUcsRUFBRSxTQUFTLEdBQUMsR0FBRSxFQUFFLElBQUksR0FBQyxDQUFDO29CQUFDLElBQUksSUFBRSxJQUFFLEVBQUUsS0FBSyxHQUFDLElBQUUsS0FBRyxDQUFDLEVBQUUsV0FBVyxDQUFDLEdBQUcsS0FBSyxHQUFDLEVBQUUsRUFBQyxJQUFFLElBQUUsRUFBRSxNQUFNLEdBQUMsSUFBRSxLQUFHLEdBQUc7b0JBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQyxHQUFDLElBQUcsRUFBRSxPQUFPLElBQUcsSUFBSTtnQkFBQTtZQUFDO1NBQUUsR0FBRSxDQUFDO0lBQUE7SUFBSSxTQUFTLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLElBQUcsQ0FBRSxDQUFBLGFBQWEsQ0FBQSxHQUFHLE1BQU0sSUFBSSxVQUFVLHFDQUFvQztJQUFBO0lBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7UUFBQyxJQUFJLElBQUksSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsSUFBSTtZQUFDLElBQUksSUFBRSxDQUFDLENBQUMsRUFBRTtZQUFDLEVBQUUsVUFBVSxHQUFDLEVBQUUsVUFBVSxJQUFFLENBQUMsR0FBRSxFQUFFLFlBQVksR0FBQyxDQUFDLEdBQUUsV0FBVSxLQUFJLENBQUEsRUFBRSxRQUFRLEdBQUMsQ0FBQyxDQUFBLEdBQUcsT0FBTyxjQUFjLENBQUMsR0FBRSxFQUFFLEdBQUcsRUFBQyxFQUFFO1FBQUE7SUFBQztJQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztRQUFDLE9BQU8sS0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFDLElBQUcsS0FBRyxFQUFFLEdBQUUsSUFBRyxDQUFDO0lBQUE7SUFBQyxJQUFJLElBQUUsV0FBVTtRQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztZQUFDLEVBQUUsSUFBSSxFQUFDLElBQUcsSUFBSSxDQUFDLEtBQUssR0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRSxJQUFJLENBQUMsTUFBTSxHQUFDLEdBQUUsSUFBSSxDQUFDLE1BQU0sR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFJLENBQUMsSUFBSSxHQUFDLENBQUM7UUFBQTtRQUFDLE9BQU8sRUFBRSxHQUFFO1lBQUM7Z0JBQUMsS0FBSTtnQkFBTyxPQUFNLFNBQVMsQ0FBQyxFQUFDO29CQUFDLElBQUksSUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUUsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJO29CQUFDLEVBQUUsSUFBSSxJQUFHLEVBQUUsU0FBUyxJQUFHLEVBQUUsV0FBVyxHQUFDLEdBQUUsRUFBRSxTQUFTLEdBQUMsR0FBRSxFQUFFLE1BQU0sQ0FBQyxHQUFFLElBQUcsRUFBRSxNQUFNLENBQUMsR0FBRSxJQUFHLEVBQUUsTUFBTSxJQUFHLEVBQUUsT0FBTyxFQUFFO2dCQUFBO1lBQUM7U0FBRSxHQUFFLENBQUM7SUFBQSxLQUFJLElBQUUsV0FBVTtRQUFDLFNBQVMsSUFBRztZQUFDLElBQUksSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsTUFBTSxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxFQUFDLElBQUUsVUFBVSxNQUFNLEdBQUMsS0FBRyxLQUFLLE1BQUksU0FBUyxDQUFDLEVBQUUsR0FBQyxTQUFTLENBQUMsRUFBRSxHQUFDLFVBQVUsRUFBQyxJQUFFLFVBQVUsTUFBTSxHQUFDLEtBQUcsS0FBSyxNQUFJLFNBQVMsQ0FBQyxFQUFFLEdBQUMsU0FBUyxDQUFDLEVBQUUsR0FBQyxFQUFFLEVBQUMsSUFBRSxVQUFVLE1BQU0sR0FBQyxLQUFHLEtBQUssTUFBSSxTQUFTLENBQUMsRUFBRSxHQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUMsZ0JBQWdCO1lBQUMsRUFBRSxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsS0FBSyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUMsR0FBRSxJQUFJLENBQUMsT0FBTyxHQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLEdBQUMsR0FBRSxJQUFJLENBQUMsSUFBSSxHQUFDLEdBQUUsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJO1FBQUE7UUFBQyxPQUFPLEVBQUUsR0FBRTtZQUFDO2dCQUFDLEtBQUk7Z0JBQWMsT0FBTSxTQUFTLENBQUMsRUFBQztvQkFBQyxJQUFJLElBQUksSUFBRSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBRSxFQUFFLEVBQUMsSUFBRSxJQUFFLEdBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxLQUFLLEVBQUMsS0FBRyxFQUFFO3dCQUFDLElBQUksSUFBRSxJQUFFLEtBQUc7d0JBQUUsRUFBRSxJQUFJLENBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEVBQUUsTUFBTSxJQUFFLElBQUksRUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxNQUFNLENBQUM7b0JBQUM7b0JBQUMsSUFBSSxJQUFJLElBQUUsR0FBRSxJQUFFLEVBQUUsTUFBTSxFQUFDLEtBQUcsRUFBRTt3QkFBQyxJQUFJLElBQUUsSUFBRSxLQUFHO3dCQUFFLEVBQUUsSUFBSSxDQUFDLElBQUUsSUFBSSxFQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsRUFBRSxLQUFLLEVBQUMsS0FBRyxJQUFJLEVBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxFQUFFLEtBQUssRUFBQyxFQUFFO29CQUFDO29CQUFDLElBQUksQ0FBQyxLQUFLLEdBQUM7Z0JBQUM7WUFBQztZQUFFO2dCQUFDLEtBQUk7Z0JBQVcsT0FBTSxTQUFTLENBQUMsRUFBQyxDQUFDLEVBQUM7b0JBQUMsSUFBSSxJQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFFLElBQUksQ0FBQyxJQUFJO29CQUFDLEVBQUUsSUFBSSxJQUFHLEVBQUUsSUFBSSxHQUFDLEdBQUUsRUFBRSxTQUFTLEdBQUMsR0FBRSxFQUFFLFFBQVEsQ0FBQyxLQUFJLEdBQUUsR0FBRztvQkFBQyxJQUFJLElBQUksSUFBRSxJQUFFLEdBQUUsSUFBRSxFQUFFLEtBQUssRUFBQyxLQUFHLElBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFFLEdBQUU7b0JBQUksSUFBSSxJQUFJLElBQUUsSUFBRSxHQUFFLElBQUUsRUFBRSxNQUFNLEVBQUMsS0FBRyxJQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsR0FB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L3J1bnRpbWUtYnJvd3Nlci1obXIvbGliL3J1bnRpbWUtYWI5MTczNzRkMDYwMzQzMS5qcyIsInNyYy9pbmRleC50cyIsIm5vZGVfbW9kdWxlcy9jYW52YXMtY29vcmRzL2Rpc3QvaW5kZXguanMiLCJzcmMvZGV2aWNlTWFybGluLnRzIiwic3JjL2tkVHJlZS50cyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwic3JjL2RldmljZS50cyIsInNyYy9wY2IudHMiLCJzcmMvcGFyc2VyR2VyYmVyLnRzIiwic3JjL3BhcnNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBudWxsO3ZhciBITVJfUE9SVCA9IG51bGw7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCIyNGI2Njk2NGFiYzc4NWM5XCI7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCIwOWYxMWY5OTI5NDgwNzNlXCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBITVJfSE9TVCwgSE1SX1BPUlQsIEhNUl9FTlZfSEFTSCwgSE1SX1NFQ1VSRSwgY2hyb21lLCBicm93c2VyLCBnbG9iYWxUaGlzLCBfX3BhcmNlbF9faW1wb3J0X18sIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18sIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAqL1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiBtaXhlZDtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuaW50ZXJmYWNlIEV4dGVuc2lvbkNvbnRleHQge1xuICBydW50aW1lOiB7fFxuICAgIHJlbG9hZCgpOiB2b2lkLFxuICAgIGdldFVSTCh1cmw6IHN0cmluZyk6IHN0cmluZztcbiAgICBnZXRNYW5pZmVzdCgpOiB7bWFuaWZlc3RfdmVyc2lvbjogbnVtYmVyLCAuLi59O1xuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuZGVjbGFyZSB2YXIgY2hyb21lOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgYnJvd3NlcjogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBnbG9iYWxUaGlzOiB0eXBlb2Ygc2VsZjtcbmRlY2xhcmUgdmFyIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZTogT2JqZWN0O1xuKi9cbnZhciBPVkVSTEFZX0lEID0gJ19fcGFyY2VsX19lcnJvcl9fb3ZlcmxheV9fJztcbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcblxuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG4gIG1vZHVsZS5idW5kbGUuaG90RGF0YSA9IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG52YXIgY2hlY2tlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhY2NlcHRlZEFzc2V0c1xuLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqL1xuLCBhc3NldHNUb0FjY2VwdFxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xuO1xuXG5mdW5jdGlvbiBnZXRIb3N0bmFtZSgpIHtcbiAgcmV0dXJuIEhNUl9IT1NUIHx8IChsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwJykgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgcmV0dXJuIEhNUl9QT1JUIHx8IGxvY2F0aW9uLnBvcnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnQ7XG5cbmlmICgoIXBhcmVudCB8fCAhcGFyZW50LmlzUGFyY2VsUmVxdWlyZSkgJiYgdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgdmFyIHBvcnQgPSBnZXRQb3J0KCk7XG4gIHZhciBwcm90b2NvbCA9IEhNUl9TRUNVUkUgfHwgbG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHBzOicgJiYgIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QoaG9zdG5hbWUpID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7IC8vIFdlYiBleHRlbnNpb24gY29udGV4dFxuXG4gIHZhciBleHRDdHggPSB0eXBlb2YgY2hyb21lID09PSAndW5kZWZpbmVkJyA/IHR5cGVvZiBicm93c2VyID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBicm93c2VyIDogY2hyb21lOyAvLyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHNvdXJjZVVSTCBpbiBlcnJvciBzdGFja3MuXG4gIC8vIGV2YWwgbWF5IGFsc28gYmUgZGlzYWJsZWQgdmlhIENTUCwgc28gZG8gYSBxdWljayBjaGVjay5cblxuICB2YXIgc3VwcG9ydHNTb3VyY2VVUkwgPSBmYWxzZTtcblxuICB0cnkge1xuICAgICgwLCBldmFsKSgndGhyb3cgbmV3IEVycm9yKFwidGVzdFwiKTsgLy8jIHNvdXJjZVVSTD10ZXN0LmpzJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHN1cHBvcnRzU291cmNlVVJMID0gZXJyLnN0YWNrLmluY2x1ZGVzKCd0ZXN0LmpzJyk7XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgd3Mub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50XG4gIC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovXG4gICkge1xuICAgIGNoZWNrZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYWNjZXB0ZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgICB2YXIgZGF0YVxuICAgIC8qOiBITVJNZXNzYWdlICovXG4gICAgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBhc3NldHMgPSBkYXRhLmFzc2V0cy5maWx0ZXIoYXNzZXQgPT4gYXNzZXQuZW52SGFzaCA9PT0gSE1SX0VOVl9IQVNIKTsgLy8gSGFuZGxlIEhNUiBVcGRhdGVcblxuICAgICAgbGV0IGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoYXNzZXQgPT4ge1xuICAgICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTsgLy8gRGlzcGF0Y2ggY3VzdG9tIGV2ZW50IHNvIG90aGVyIHJ1bnRpbWVzIChlLmcgUmVhY3QgUmVmcmVzaCkgYXJlIGF3YXJlLlxuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQ3VzdG9tRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwYXJjZWxobXJhY2NlcHQnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFzc2V0c1RvQWNjZXB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGlkID0gYXNzZXRzVG9BY2NlcHRbaV1bMV07XG5cbiAgICAgICAgICBpZiAoIWFjY2VwdGVkQXNzZXRzW2lkXSkge1xuICAgICAgICAgICAgaG1yQWNjZXB0UnVuKGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgZnVsbFJlbG9hZCgpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIGZvciAobGV0IGFuc2lEaWFnbm9zdGljIG9mIGRhdGEuZGlhZ25vc3RpY3MuYW5zaSkge1xuICAgICAgICBsZXQgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNyZWF0ZUVycm9yT3ZlcmxheShkYXRhLmRpYWdub3N0aWNzLmh0bWwpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICB9O1xuXG4gIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JPdmVybGF5KCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuXG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICBsZXQgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG5cbiAgZm9yIChsZXQgZGlhZ25vc3RpYyBvZiBkaWFnbm9zdGljcykge1xuICAgIGxldCBzdGFjayA9IGRpYWdub3N0aWMuZnJhbWVzLmxlbmd0aCA/IGRpYWdub3N0aWMuZnJhbWVzLnJlZHVjZSgocCwgZnJhbWUpID0+IHtcbiAgICAgIHJldHVybiBgJHtwfVxuPGEgaHJlZj1cIi9fX3BhcmNlbF9sYXVuY2hfZWRpdG9yP2ZpbGU9JHtlbmNvZGVVUklDb21wb25lbnQoZnJhbWUubG9jYXRpb24pfVwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGNvbG9yOiAjODg4XCIgb25jbGljaz1cImZldGNoKHRoaXMuaHJlZik7IHJldHVybiBmYWxzZVwiPiR7ZnJhbWUubG9jYXRpb259PC9hPlxuJHtmcmFtZS5jb2RlfWA7XG4gICAgfSwgJycpIDogZGlhZ25vc3RpYy5zdGFjaztcbiAgICBlcnJvckhUTUwgKz0gYFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDIwcHg7XCI+XG4gICAgICAgICAg8J+aqCAke2RpYWdub3N0aWMubWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwcmU+JHtzdGFja308L3ByZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke2RpYWdub3N0aWMuaGludHMubWFwKGhpbnQgPT4gJzxkaXY+8J+SoSAnICsgaGludCArICc8L2Rpdj4nKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uID8gYDxkaXY+8J+TnSA8YSBzdHlsZT1cImNvbG9yOiB2aW9sZXRcIiBocmVmPVwiJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb259XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5gIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuICBvdmVybGF5LmlubmVySFRNTCA9IGVycm9ySFRNTDtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5cbmZ1bmN0aW9uIGZ1bGxSZWxvYWQoKSB7XG4gIGlmICgncmVsb2FkJyBpbiBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2UgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5yZWxvYWQpIHtcbiAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpXG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG57XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcblxuICBmb3IgKGsgaW4gbW9kdWxlcykge1xuICAgIGZvciAoZCBpbiBtb2R1bGVzW2tdWzFdKSB7XG4gICAgICBkZXAgPSBtb2R1bGVzW2tdWzFdW2RdO1xuXG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcblxuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuXG4gIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgLy8gJEZsb3dGaXhNZVxuICBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpKTsgLy8gJEZsb3dGaXhNZVxuXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG5cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcblxuZnVuY3Rpb24gcmVsb2FkQ1NTKCkge1xuICBpZiAoY3NzVGltZW91dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZlxuICAgICAgLyo6IHN0cmluZyAqL1xuICAgICAgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gICAgICB2YXIgc2VydmVkRnJvbUhNUlNlcnZlciA9IGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyA/IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6JyArIGdldFBvcnQoKSkudGVzdChocmVmKSA6IGhyZWYuaW5kZXhPZihob3N0bmFtZSArICc6JyArIGdldFBvcnQoKSk7XG4gICAgICB2YXIgYWJzb2x1dGUgPSAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KGhyZWYpICYmIGhyZWYuaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pICE9PSAwICYmICFzZXJ2ZWRGcm9tSE1SU2VydmVyO1xuXG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5cbmZ1bmN0aW9uIGhtckRvd25sb2FkKGFzc2V0KSB7XG4gIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCk7XG5cbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkO1xuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHNjcmlwdCk7XG5cbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIChfZG9jdW1lbnQkaGVhZCA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9jdW1lbnQkaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gV29ya2VyIHNjcmlwdHNcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgcmV0dXJuIF9fcGFyY2VsX19pbXBvcnRfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKSB7XG4gIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgc2NyaXB0c1RvUmVtb3ZlO1xuXG4gIHRyeSB7XG4gICAgLy8gSWYgc291cmNlVVJMIGNvbW1lbnRzIGFyZW4ndCBzdXBwb3J0ZWQgaW4gZXZhbCwgd2UgbmVlZCB0byBsb2FkXG4gICAgLy8gdGhlIHVwZGF0ZSBmcm9tIHRoZSBkZXYgc2VydmVyIG92ZXIgSFRUUCBzbyB0aGF0IHN0YWNrIHRyYWNlc1xuICAgIC8vIGFyZSBjb3JyZWN0IGluIGVycm9ycy9sb2dzLiBUaGlzIGlzIG11Y2ggc2xvd2VyIHRoYW4gZXZhbCwgc29cbiAgICAvLyB3ZSBvbmx5IGRvIGl0IGlmIG5lZWRlZCAoY3VycmVudGx5IGp1c3QgU2FmYXJpKS5cbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3Mjk3XG4gICAgLy8gVGhpcyBwYXRoIGlzIGFsc28gdGFrZW4gaWYgYSBDU1AgZGlzYWxsb3dzIGV2YWwuXG4gICAgaWYgKCFzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgbGV0IHByb21pc2VzID0gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgIHZhciBfaG1yRG93bmxvYWQ7XG5cbiAgICAgICAgcmV0dXJuIChfaG1yRG93bmxvYWQgPSBobXJEb3dubG9hZChhc3NldCkpID09PSBudWxsIHx8IF9obXJEb3dubG9hZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2htckRvd25sb2FkLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgLy8gV2ViIGV4dGVuc2lvbiBidWdmaXggZm9yIENocm9taXVtXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTI1NTQxMiNjMTJcbiAgICAgICAgICBpZiAoZXh0Q3R4ICYmIGV4dEN0eC5ydW50aW1lICYmIGV4dEN0eC5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbiA9PSAzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAhPSAndW5kZWZpbmVkJyAmJiBnbG9iYWwgaW5zdGFuY2VvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUpIHtcbiAgICAgICAgICAgICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXNzZXQudXJsID0gZXh0Q3R4LnJ1bnRpbWUuZ2V0VVJMKCcvX19wYXJjZWxfaG1yX3Byb3h5X18/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKSk7XG4gICAgICAgICAgICByZXR1cm4gaG1yRG93bmxvYWQoYXNzZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG5cbiAgICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgIGhtckFwcGx5KG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQpO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGRlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlO1xuXG4gICAgaWYgKHNjcmlwdHNUb1JlbW92ZSkge1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlLmZvckVhY2goc2NyaXB0ID0+IHtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDI7XG5cbiAgICAgICAgICAoX2RvY3VtZW50JGhlYWQyID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9jdW1lbnQkaGVhZDIucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgYXNzZXRcbi8qOiAgSE1SQXNzZXQgKi9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChhc3NldC50eXBlID09PSAnY3NzJykge1xuICAgIHJlbG9hZENTUygpO1xuICB9IGVsc2UgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBsZXQgZGVwcyA9IGFzc2V0LmRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF07XG5cbiAgICBpZiAoZGVwcykge1xuICAgICAgaWYgKG1vZHVsZXNbYXNzZXQuaWRdKSB7XG4gICAgICAgIC8vIFJlbW92ZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgcmVtb3ZlZCBhbmQgd2lsbCBiZWNvbWUgb3JwaGFuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgdGhlIGFzc2V0IGlzIGFkZGVkIGJhY2sgYWdhaW4sIHRoZSBjYWNoZSBpcyBnb25lLCBhbmQgd2UgcHJldmVudCBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gICAgICAgIGxldCBvbGREZXBzID0gbW9kdWxlc1thc3NldC5pZF1bMV07XG5cbiAgICAgICAgZm9yIChsZXQgZGVwIGluIG9sZERlcHMpIHtcbiAgICAgICAgICBpZiAoIWRlcHNbZGVwXSB8fCBkZXBzW2RlcF0gIT09IG9sZERlcHNbZGVwXSkge1xuICAgICAgICAgICAgbGV0IGlkID0gb2xkRGVwc1tkZXBdO1xuICAgICAgICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuXG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgICAgLy8gR2xvYmFsIGV2YWwuIFdlIHdvdWxkIHVzZSBgbmV3IEZ1bmN0aW9uYCBoZXJlIGJ1dCBicm93c2VyXG4gICAgICAgIC8vIHN1cHBvcnQgZm9yIHNvdXJjZSBtYXBzIGlzIGJldHRlciB3aXRoIGV2YWwuXG4gICAgICAgICgwLCBldmFsKShhc3NldC5vdXRwdXQpO1xuICAgICAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgbGV0IGZuID0gZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVthc3NldC5pZF07XG4gICAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gICAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgICBobXJBcHBseShidW5kbGUucGFyZW50LCBhc3NldCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhtckRlbGV0ZShidW5kbGUsIGlkKSB7XG4gIGxldCBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG1vZHVsZXNbaWRdKSB7XG4gICAgLy8gQ29sbGVjdCBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGJlY29tZSBvcnBoYW5lZCB3aGVuIHRoaXMgbW9kdWxlIGlzIGRlbGV0ZWQuXG4gICAgbGV0IGRlcHMgPSBtb2R1bGVzW2lkXVsxXTtcbiAgICBsZXQgb3JwaGFucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgZGVwIGluIGRlcHMpIHtcbiAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGRlcHNbZGVwXSk7XG5cbiAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcnBoYW5zLnB1c2goZGVwc1tkZXBdKTtcbiAgICAgIH1cbiAgICB9IC8vIERlbGV0ZSB0aGUgbW9kdWxlLiBUaGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgZGVsZXRpbmcgZGVwZW5kZW5jaWVzIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuXG5cbiAgICBkZWxldGUgbW9kdWxlc1tpZF07XG4gICAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07IC8vIE5vdyBkZWxldGUgdGhlIG9ycGhhbnMuXG5cbiAgICBvcnBoYW5zLmZvckVhY2goaWQgPT4ge1xuICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBobXJEZWxldGUoYnVuZGxlLnBhcmVudCwgaWQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrKGJ1bmRsZVxuLyo6IFBhcmNlbFJlcXVpcmUgKi9cbiwgaWRcbi8qOiBzdHJpbmcgKi9cbiwgZGVwc0J5QnVuZGxlXG4vKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qL1xuKSB7XG4gIGlmIChobXJBY2NlcHRDaGVja09uZShidW5kbGUsIGlkLCBkZXBzQnlCdW5kbGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gVHJhdmVyc2UgcGFyZW50cyBicmVhZHRoIGZpcnN0LiBBbGwgcG9zc2libGUgYW5jZXN0cmllcyBtdXN0IGFjY2VwdCB0aGUgSE1SIHVwZGF0ZSwgb3Igd2UnbGwgcmVsb2FkLlxuXG5cbiAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICBsZXQgYWNjZXB0ZWQgPSBmYWxzZTtcblxuICB3aGlsZSAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHYgPSBwYXJlbnRzLnNoaWZ0KCk7XG4gICAgbGV0IGEgPSBobXJBY2NlcHRDaGVja09uZSh2WzBdLCB2WzFdLCBudWxsKTtcblxuICAgIGlmIChhKSB7XG4gICAgICAvLyBJZiB0aGlzIHBhcmVudCBhY2NlcHRzLCBzdG9wIHRyYXZlcnNpbmcgdXB3YXJkLCBidXQgc3RpbGwgY29uc2lkZXIgc2libGluZ3MuXG4gICAgICBhY2NlcHRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcXVldWUgdGhlIHBhcmVudHMgaW4gdGhlIG5leHQgbGV2ZWwgdXB3YXJkLlxuICAgICAgbGV0IHAgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgdlsxXSk7XG5cbiAgICAgIGlmIChwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcGFyZW50cywgdGhlbiB3ZSd2ZSByZWFjaGVkIGFuIGVudHJ5IHdpdGhvdXQgYWNjZXB0aW5nLiBSZWxvYWQuXG4gICAgICAgIGFjY2VwdGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnRzLnB1c2goLi4ucCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjY2VwdGVkO1xufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVja09uZShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuXG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuXG4gIGlmICghY2FjaGVkIHx8IGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdFJ1bihidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhID0ge307XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGE7XG4gIH1cblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlKGlkKTtcbiAgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIGFzc2V0c1RvQWxzb0FjY2VwdCA9IGNiKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdCAmJiBhc3NldHNUb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVttZXRob2QtdW5iaW5kaW5nXVxuICAgICAgICBhc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGFzc2V0c1RvQWNjZXB0LCBhc3NldHNUb0Fsc29BY2NlcHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWNjZXB0ZWRBc3NldHNbaWRdID0gdHJ1ZTtcbn0iLCJpbXBvcnQgeyBHcmlkLCBNb3VzZSB9IGZyb20gJ2NhbnZhcy1jb29yZHMnIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Db2RlRHJha2VuL2NhbnZhcy1jb29yZHNcclxuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSAnLi9kZXZpY2UnO1xyXG5pbXBvcnQgeyBNYXJsaW4gfSBmcm9tICcuL2RldmljZU1hcmxpbic7XHJcbmltcG9ydCB7IFBDQiwgUGFkLCBQYWRTdHlsZSB9IGZyb20gJy4vcGNiJztcclxuaW1wb3J0IHsgUGFyc2VyR2VyYmVyIH0gZnJvbSAnLi9wYXJzZXJHZXJiZXInO1xyXG5cclxuLy8gc2ltcGxlciAhISEgY29uc3QgaW5mb0Ryb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJyNpbmZvRHJvcERvd24nKTtcclxuXHJcbmNvbnN0IGJvZHk6IEhUTUxCb2R5RWxlbWVudCB8IG51bGwgPSA8SFRNTEJvZHlFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG5jb25zdCBtZXNzYWdlRWxlbTogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2VFbGVtXCIpO1xyXG5jb25zdCB1cGxvYWRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGxvYWRCdXR0b25cIik7XHJcbmNvbnN0IHBhZHNGaWVsZDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZHNGaWVsZFwiKTtcclxuY29uc3QgY29vcmRzOiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSA8SFRNTERpdkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ29vcmRzXCIpO1xyXG5jb25zdCBjb29yZHNGaWVsZDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb3Jkc0ZpZWxkXCIpO1xyXG5jb25zdCBkcm9wWm9uZTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wWm9uZVwiKTtcclxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwgPSA8SFRNTENhbnZhc0VsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xyXG5jb25zdCBkZWJ1ZzogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnXCIpO1xyXG5jb25zdCBwcm9ncmVzczogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzXCIpO1xyXG5jb25zdCBwcm9ncmVzc2JhcjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NiYXInKTtcclxuY29uc3QgY29udGV4dE1lbnU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRleHRNZW51Jyk7XHJcbmNvbnN0IHByb2dyZXNzQ2FuY2VsOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzc0NhbmNlbCcpO1xyXG5cclxuY29uc3QgbWVudVNldFplcm86IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51U2V0WmVyb1wiKTtcclxuY29uc3QgbWVudU1vdmVUbzogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVNb3ZlVG9cIik7XHJcbmNvbnN0IG1lbnVNb3ZlQWxsOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudU1vdmVBbGxcIik7XHJcbmNvbnN0IG1lbnVCbG9iOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUJsb2JcIik7XHJcblxyXG5cclxuY29uc3QgbWFpbjogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbmNvbnN0IG9wZW5TaWRlYmFyQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSA8SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3BlblNpZGViYXJcIik7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF07XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcclxuXHJcbmxldCBtZXNzYWdlQ2xlYXJUaW1lb3V0Om51bWJlcnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbmxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwgPSBudWxsO1xyXG5sZXQgbW91c2U6IE1vdXNlLCBncmlkOiBHcmlkO1xyXG5sZXQgcGNiOiBQQ0I7XHJcblxyXG5sZXQgZGV2aWNlID0gbmV3IE1hcmxpbigpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGlmICh1cGxvYWRCdXR0b24gJiYgbWVudVNldFplcm8gJiYgbWVudU1vdmVUbyAmJiBtZW51TW92ZUFsbCAmJiBtZW51QmxvYiAmJiBwcm9ncmVzc0NhbmNlbCAmJiBwYWRzRmllbGQgJiYgY29vcmRzRmllbGQgJiYgYm9keSAmJiBjYW52YXMgJiYgZm9vdGVyKSB7XHJcbiAgICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwY2IpIHBjYi5tb3VzZU1vdmUoZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBjYikgcGNiLm1vdXNlRG93bihldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBjYikgcGNiLm1vdXNlVXAoZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGNiKSBwY2IubW91c2VPdXQoZXZlbnQpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGNiKSBwY2IubW91c2VXaGVlbChldmVudCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICB1cGxvYWRCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHVwbG9hZEZpbGVFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICB1cGxvYWRGaWxlRWxlLnR5cGUgPSBcImZpbGVcIjtcclxuICAgICAgICAgICAgdXBsb2FkRmlsZUVsZS5jbGljaygpO1xyXG4gICAgICAgICAgICB1cGxvYWRGaWxlRWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2OiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXYpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdXNlciBoYWQgc2VsZWN0ZWQgYSBmaWxlXHJcbiAgICAgICAgICAgICAgICBpZiAodXBsb2FkRmlsZUVsZS5maWxlcyAmJiB1cGxvYWRGaWxlRWxlLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IHVwbG9hZEZpbGVFbGUuZmlsZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlsZTogJHtmaWxlLm5hbWV9IHNpemU6JHtmaWxlLnNpemV9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NHZXJiZXJGaWxlKGZpbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ3BsZWFzZSBjaG9vc2UgYSBmaWxlJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVudVNldFplcm8ub25jbGljayA9IChldmVudDpNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGNiLnNldFplcm8oKTtcclxuICAgICAgICAgICAgZGV2aWNlLnNldFplcm8ocGNiLmdldFplcm8oKSk7IC8vIGRldmljZSBtdXN0IHN1YnN0cmFjdCBcInplcm9cIiBmcm9tIGFsbCBjb29yZHNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lbnVNb3ZlVG8ub25jbGljayA9IChldmVudDpNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBjb29yZHMgISEhXHJcbiAgICAgICAgICAgIC8vICEhISBuZWVkIHRvIGJlIHJlbGF0aXZlIHRvIHplcm8gISEhIHV1dWhoaFxyXG5cclxuICAgICAgICAgICAgLy8gbGV0IHBhZHMgPSBwY2IuZ2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICAgICAgLy8gaWYgKHBhZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHBhZDogUGFkID0gcGFkc1swXTtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHBhZCk7XHJcbiAgICAgICAgICAgIC8vICAgICBkZXZpY2UubW92ZVRvKHBhZC5wb3NYLCBwYWQucG9zWSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcG9zID0gcGNiLmdldFNlbGVjdGVkWmVybygpOyAvLyBsb3dlciBsZWZ0IG9mIHNlbGVjdGlvblxyXG4gICAgICAgICAgICBkZXZpY2UubW92ZVRvKHBvc1swXSwgcG9zWzFdLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lbnVNb3ZlQWxsLm9uY2xpY2sgPSAoZXZlbnQ6TW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZihjb250ZXh0TWVudSkge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLXNob3cnLCAndzMtaGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwbGlzdCA9IHBjYi5nZXRTZWxlY3RlZCgpO1xyXG4gICAgICAgICAgICBsZXQgcHplcm8gPSBwY2IuZ2V0U2VsZWN0ZWRaZXJvKCk7XHJcbiAgICAgICAgICAgIGRldmljZS5tb3ZlVG9BbGwocGxpc3QsIHB6ZXJvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVudUJsb2Iub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYoY29udGV4dE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRNZW51LmNsYXNzTmFtZSA9IGNvbnRleHRNZW51LmNsYXNzTmFtZS5yZXBsYWNlKCd3My1zaG93JywgJ3czLWhpZGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZXZpY2UuYmxvYigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9keS5vbmRyb3AgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXYpO1xyXG4gICAgICAgICAgICBpZiAoZXYuZGF0YVRyYW5zZmVyICYmIGV2LmRhdGFUcmFuc2Zlci5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNlIERhdGFUcmFuc2Zlckl0ZW1MaXN0IGludGVyZmFjZSB0byBhY2Nlc3MgdGhlIGZpbGUocylcclxuICAgICAgICAgICAgICAgIFsuLi5ldi5kYXRhVHJhbnNmZXIuaXRlbXNdLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBkcm9wcGVkIGl0ZW1zIGFyZW4ndCBmaWxlcywgcmVqZWN0IHRoZW1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5raW5kID09PSAnZmlsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg4oCmIGl0ZW1bJHtpfV0ubmFtZSA9ICR7ZmlsZS5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0dlcmJlckZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldi5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXIgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxyXG4gICAgICAgICAgICAgICAgWy4uLmV2LmRhdGFUcmFuc2Zlci5maWxlc10uZm9yRWFjaCgoZmlsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDigKYgZmlsZVske2l9XS5uYW1lID0gJHtmaWxlLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NHZXJiZXJGaWxlKGZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHkub25kcmFnb3ZlciA9IChldikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmlsZShzKSBpbiBkcm9wIHpvbmUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciAoUHJldmVudCBmaWxlIGZyb20gYmVpbmcgb3BlbmVkKVxyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzLm9uY29udGV4dG1lbnUgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uY29udGV4dG1lbnUnLGV2KTtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5zdHlsZS5sZWZ0ID0gYCR7ZXYucGFnZVh9cHhgO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuc3R5bGUudG9wID0gYCR7ZXYucGFnZVl9cHhgO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE1lbnUuY2xhc3NOYW1lID0gY29udGV4dE1lbnUuY2xhc3NOYW1lLnJlcGxhY2UoJ3czLWhpZGUnLCAndzMtc2hvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbnZhcy5vbm1vdXNldXAgPSAoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbnRleHRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TWVudS5jbGFzc05hbWUgPSBjb250ZXh0TWVudS5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdHgpIHtcclxuICAgICAgICAgICAgcGNiID0gbmV3IFBDQigpO1xyXG4gICAgICAgICAgICBwY2Iuc2V0Q2FudmFzKGN0eCwgY2FudmFzKTtcclxuXHJcbiAgICAgICAgICAgIG1vdXNlID0gbmV3IE1vdXNlKGN0eCwgY2FudmFzKTtcclxuICAgICAgICAgICAgbW91c2UudHJhY2soKTtcclxuICAgICAgICAgICAgZ3JpZCA9IG5ldyBHcmlkKCk7XHJcbiAgICAgICAgICAgIGdyaWQuc3RlcCA9IDI7XHJcbiAgICAgICAgICAgIGdyaWQubGluZVdpZHRoID0gMC4wMztcclxuICAgICAgICAgICAgZ3JpZC5ib2xkV2lkdGggPSAwLjA1O1xyXG4gICAgICAgICAgICBncmlkLmNyZWF0ZUxpbmVzKGNhbnZhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbG9iYWxUaGlzLnJlc2l6ZSgpO1xyXG5cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdtaXNzaW5nIGh0bWwgZWxlbWVudHMgIScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXNzYWdlKHRleHQ6IHN0cmluZykge1xyXG4gICAgaWYobWVzc2FnZUNsZWFyVGltZW91dCkge1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobWVzc2FnZUNsZWFyVGltZW91dCk7XHJcbiAgICB9XHJcbiAgICBpZihtZXNzYWdlRWxlbSkge1xyXG4gICAgICAgIG1lc3NhZ2VFbGVtLmlubmVySFRNTCA9IGAke3RleHR9YDtcclxuICAgICAgICBtZXNzYWdlQ2xlYXJUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQobWVzc2FnZUNsZWFyLCAxMDAwMCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWVzc2FnZUNsZWFyKCkge1xyXG4gICAgbWVzc2FnZUNsZWFyVGltZW91dCA9IHVuZGVmaW5lZDtcclxuICAgIGlmKG1lc3NhZ2VFbGVtKSB7XHJcbiAgICAgICAgbWVzc2FnZUVsZW0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgIGlmIChjYW52YXMgJiYgY3R4KSB7XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG5cclxuICAgICAgICBjdHguc2V0VHJhbnNmb3JtKFxyXG4gICAgICAgICAgICBwY2IgPyBwY2Iuem9vbSA6IDEsIDAsXHJcbiAgICAgICAgICAgIDAsIHBjYiA/IHBjYi56b29tIDogMSxcclxuICAgICAgICAgICAgMCwgMCk7XHJcblxyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAvLyBncmlkLmRyYXcoY3R4LCBjYW52YXMpO1xyXG4gICAgICAgIC8vIGdyaWQuc3RlcCA9IHBjYj8xMC4wL3BjYi56b29tOjEwLjA7XHJcbiAgICAgICAgLy8gZ3JpZC5jcmVhdGVMaW5lcyhjYW52YXMpO1xyXG4gICAgICAgIGdyaWQubGluZXMuZm9yRWFjaChsaW5lID0+IGxpbmUuZHJhdyhjdHgpKVxyXG4gICAgICAgIG1vdXNlLmRyYXcoKTtcclxuXHJcblxyXG4gICAgICAgIGN0eC5zZXRUcmFuc2Zvcm0oXHJcbiAgICAgICAgICAgIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIC0xLFxyXG4gICAgICAgICAgICAwLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gY3R4LnNjYWxlKDEsLTEpOyAvLyBmbGlwIGRpc3BsYXkgeVxyXG5cclxuICAgICAgICBpZiAocGNiKSB7XHJcbiAgICAgICAgICAgIHBjYi5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzR2VyYmVyRmlsZShmaWxlOiBGaWxlKSB7XHJcbiAgICBpZiAocGFkc0ZpZWxkICYmIGNvb3Jkc0ZpZWxkICYmIGN0eCAmJiBjYW52YXMgJiYgcHJvZ3Jlc3MgJiYgcHJvZ3Jlc3NiYXIgJiYgcHJvZ3Jlc3NDYW5jZWwgJiYgZHJvcFpvbmUpIHsgLy8gbWFrZXMgdHlwZXNjcmlwdCBoYXBweS4uLlxyXG5cclxuICAgICAgICBwY2IgPSBuZXcgUENCKCk7XHJcbiAgICAgICAgcGNiLnNldENhbnZhcyhjdHgsIGNhbnZhcyk7XHJcbiAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBQYXJzZXJHZXJiZXIocGNiKTtcclxuXHJcbiAgICAgICAgcGFkc0ZpZWxkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvb3Jkc0ZpZWxkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRyb3Bab25lLmlubmVyVGV4dCA9IGZpbGUubmFtZTtcclxuICAgICAgICBwcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgcGFyc2VyLnBhZHNGaWVsZCA9IHBhZHNGaWVsZDtcclxuICAgICAgICBwYXJzZXIuY29vcmRzRmllbGQgPSBjb29yZHNGaWVsZDtcclxuICAgICAgICBwcm9ncmVzc0NhbmNlbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBwYXJzZXIuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcnNlci5wcm9jZXNzQ0IgPSAodmFsdWU6bnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc2Jhcikge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NiYXIuc3R5bGUud2lkdGggPSBgJHt2YWx1ZX0lYDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9ncmVzczonLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgcGFyc2VyLnBhcnNlRmlsZShmaWxlKTtcclxuXHJcbiAgICAgICAgcGNiLnpvb21Ub0ZpdChbY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XSk7XHJcblxyXG4gICAgICAgIHByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5nbG9iYWxUaGlzLmFjY29yZGlvblRvZ2dsZXIgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWxlbSkge1xyXG4gICAgICAgIGlmIChlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwidzMtc2hvd1wiKSA9PSAtMSAmJiBlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwidzMtaGlkZVwiKSA9PSAtMSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSArPSBcIiB3My1zaG93XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtLmNsYXNzTmFtZS5pbmRleE9mKFwidzMtc2hvd1wiKSAhPSAtMSkge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoXCJ3My1zaG93XCIsIFwidzMtaGlkZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoXCJ3My1oaWRlXCIsIFwidzMtc2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignYWNjb3JkaW9uVG9nZ2xlciBubyBlbGVtIHdpdGggaWQ6JywgaWQpO1xyXG4gICAgfVxyXG4gICAgZ2xvYmFsVGhpcy5yZXNpemUoKTtcclxufVxyXG5cclxuZ2xvYmFsVGhpcy5vcGVuU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGlmIChtYWluICYmIGRlYnVnICYmIG9wZW5TaWRlYmFyQnV0dG9uKSB7XHJcbiAgICAgICAgbWFpbi5zdHlsZS5tYXJnaW5SaWdodCA9IFwiMzUwcHhcIjtcclxuICAgICAgICBkZWJ1Zy5zdHlsZS53aWR0aCA9IFwiMzUwcHhcIjtcclxuICAgICAgICBkZWJ1Zy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIG9wZW5TaWRlYmFyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMuY2xvc2VTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgaWYgKG1haW4gJiYgZGVidWcgJiYgb3BlblNpZGViYXJCdXR0b24pIHtcclxuICAgICAgICBtYWluLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIwcHhcIjtcclxuICAgICAgICBkZWJ1Zy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgb3BlblNpZGViYXJCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmdsb2JhbFRoaXMuem9vbVRvRml0ID0gKCkgPT4ge1xyXG4gICAgaWYocGNiICYmIGNhbnZhcykge1xyXG4gICAgICAgIHBjYi56b29tVG9GaXQoW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5nbG9iYWxUaGlzLnJvdGF0ZVJpZ2h0ID0gKCkgPT4ge1xyXG4gICAgaWYocGNiICYmIGNhbnZhcykge1xyXG4gICAgICAgIC8vIHBjYi56b29tVG9GaXQoW2NhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodF0pO1xyXG4gICAgfVxyXG4gICAgbWVzc2FnZSgnbcO8c3N0ZSBtYSBlaW5lciBpbXBsZW1lbnRpZXJlbiwgbmUnKTtcclxufVxyXG5cclxuZ2xvYmFsVGhpcy5yZXNpemUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2FudmFzICYmIGhlYWRlciAmJiBmb290ZXIgJiYgZGVidWcgJiYgY29vcmRzKSB7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQgLSBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgICBtb3VzZS5kcmF3KCk7XHJcbiAgICAgICAgZ3JpZC5kcmF3KGN0eCwgY2FudmFzKTtcclxuXHJcbiAgICAgICAgLy8gaGVpZ2h0IG9mIGRlYnVnIGlzIGlubmVySGVpZ2h0IC0gbWFyZ2luIHRvcC9ib3R0b20gbW9yZSBvciBsZXNzIC0gZm9vdGVyLmhlaWdodFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemU6IG1hcmdpbicsIGRlYnVnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgICAgbGV0IGRtYXhoZWlnaHQgPSBpbm5lckhlaWdodCAtIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7IC8vIGNhbnZhcy5oZWlnaHQgKyBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC0gMTY7XHJcbiAgICAgICAgLy8gZGVidWcuc3R5bGUuaGVpZ2h0ID0gYCR7ZGhlaWdodH1weGA7IC8vIDE2IGlzIG1hcmdpblRvcFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemU6IGlubmVyIGhlaWdodCcsIGlubmVySGVpZ2h0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzaXplOiBkZWJ1ZyBoZWlnaHQnLCBkaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gaGVpZ2h0IG9mIGFsbCBvdGhlciBlbGVtZW50cyBpbiBkZWJ1Z1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGRlYnVnLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5jaGlsZDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHJlc2l6ZTogICAke2NoaWxkLmlkfSAke2VsZW0uY2xpZW50SGVpZ2h0fSAke2VsZW0uY2xhc3NOYW1lfWApO1xyXG4gICAgICAgICAgICBpZihlbGVtLmNsYXNzTmFtZS5pbmRleE9mKCd3My1oaWRlJykgIT0gLTEpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaGVpZ2h0ICs9IGVsZW0uY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZTogZGVidWcgY29udGVudCBoZWlnaHQnLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBzbyBmYXIgc28gZ29vZFxyXG5cclxuICAgICAgICAvLyBpZiBjb29yZHMgaXMgc2hvd24sIHNldCBkZWJ1ZyBzaXplIHRvIG1heFxyXG4gICAgICAgIC8vIGlmIGNvb3JkcyBpcyBzaG93biwgZ2l2ZSBpdCBhbGwgdGhlIHJlc3Qgb2YgdGhlIHNwYWNlXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2l6ZSBjb29yZHMgJywgY29vcmRzLmNsYXNzTmFtZS5pbmRleE9mKCd3My1oaWRlJykpO1xyXG4gICAgICAgIGlmKGNvb3Jkcy5jbGFzc05hbWUuaW5kZXhPZigndzMtaGlkZScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUgY29vcmRzIGlzIE5PVCB2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIGRlYnVnLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodCsxNn1weGA7XHJcbiAgICAgICAgICAgIGNvb3Jkcy5zdHlsZS5oZWlnaHQgPSBgJHsxNn1weGA7IC8vIGVnYWwgP1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNpemUgY29vcmRzIGlzIHZpc2libGUnKTtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGNvb3Jkcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7IC8vIGRvIG5vdCBjb3VudCBjb29yZHMgdG8gaGlnaHRcclxuICAgICAgICAgICAgZGVidWcuc3R5bGUuaGVpZ2h0ID0gYCR7ZG1heGhlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGNvb3Jkcy5zdHlsZS5oZWlnaHQgPSBgJHtkbWF4aGVpZ2h0IC0gaGVpZ2h0IC0gMTZ9cHhgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICh2YWwpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGByZXNpemU6ICR7dmFsfWApO1xyXG4gICAgZ2xvYmFsVGhpcy5yZXNpemUoKTtcclxufSlcclxuIiwiKGZ1bmN0aW9uICgpIHt2YXIgYT17fTtmdW5jdGlvbiBnKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBjKHQsZSl7Zm9yKHZhciBvPTA7bzxlLmxlbmd0aDtvKyspe3ZhciBzPWVbb107cy5lbnVtZXJhYmxlPXMuZW51bWVyYWJsZXx8ITEscy5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gcyYmKHMud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHMua2V5LHMpfX1mdW5jdGlvbiBoKHQsZSxvKXtyZXR1cm4gZSYmYyh0LnByb3RvdHlwZSxlKSxvJiZjKHQsbyksdH12YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxvKXt2YXIgcz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06XCJncmF5XCIsaT1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106XCIxNnB4IE1vbm9zcGFjZVwiLHI9YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOjAsbj1hcmd1bWVudHMubGVuZ3RoPjUmJnZvaWQgMCE9PWFyZ3VtZW50c1s1XT9hcmd1bWVudHNbNV06MDtnKHRoaXMsdCksdGhpcy54PXIsdGhpcy55PW4sdGhpcy5jdHg9ZSx0aGlzLmNhbnZhcz1vLHRoaXMuY29sb3I9cyx0aGlzLmZvbnQ9aSx0aGlzLnNldFBvcz10aGlzLnNldFBvcy5iaW5kKHRoaXMpfXJldHVybiBoKHQsW3trZXk6XCJ0cmFja1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9IShhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSl8fGFyZ3VtZW50c1swXSxlPXRoaXMuY2FudmFzO3JldHVybiB0P2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLHRoaXMuc2V0UG9zKTplLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIix0aGlzLnNldFBvcyksdGhpc319LHtrZXk6XCJzZXRQb3NcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm4gdGhpcy54PU1hdGguZmxvb3IodC5jbGllbnRYLWUubGVmdCksdGhpcy55PU1hdGguZmxvb3IodC5jbGllbnRZLWUudG9wKSx0aGlzfX0se2tleTpcImRyYXdcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMueCxlPXRoaXMueSxvPXRoaXMuY2FudmFzLHM9dGhpcy5jdHgsaT10aGlzLmZvbnQscj10aGlzLmNvbG9yLG49XCJYOiBcIi5jb25jYXQodCxcIiwgWTogXCIpLmNvbmNhdChlKTtzLnNhdmUoKSxzLmZpbGxTdHlsZT1yLHMuZm9udD1pO3ZhciBhPXQ8by53aWR0aC8yPzIwOi1zLm1lYXN1cmVUZXh0KG4pLndpZHRoLTIwLHY9ZTxvLmhlaWdodC8yPzI1Oi0xODtyZXR1cm4gcy5maWxsVGV4dChuLHRoaXMueCthLHRoaXMueSt2KSxzLnJlc3RvcmUoKSx0aGlzfX1dKSx0fSgpO2Z1bmN0aW9uIGQodCxlKXtpZighKHQgaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGYodCxlKXtmb3IodmFyIGk9MDtpPGUubGVuZ3RoO2krKyl7dmFyIHM9ZVtpXTtzLmVudW1lcmFibGU9cy5lbnVtZXJhYmxlfHwhMSxzLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBzJiYocy53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscy5rZXkscyl9fWZ1bmN0aW9uIGUodCxlLGkpe3JldHVybiBlJiZmKHQucHJvdG90eXBlLGUpLGkmJmYodCxpKSx0fXZhciBiPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLGkscyxyLGwsbil7ZCh0aGlzLHQpLHRoaXMuY29sb3I9ZSx0aGlzLmxpbmVXaWR0aD1pLHRoaXMuc3RhcnRYPXMsdGhpcy5zdGFydFk9cix0aGlzLmVuZFg9bCx0aGlzLmVuZFk9bn1yZXR1cm4gZSh0LFt7a2V5OlwiZHJhd1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY29sb3IsaT10aGlzLmxpbmVXaWR0aCxzPXRoaXMuc3RhcnRYLHI9dGhpcy5zdGFydFksbD10aGlzLmVuZFgsbj10aGlzLmVuZFk7dC5zYXZlKCksdC5iZWdpblBhdGgoKSx0LnN0cm9rZVN0eWxlPWUsdC5saW5lV2lkdGg9aSx0Lm1vdmVUbyhzLHIpLHQubGluZVRvKGwsbiksdC5zdHJva2UoKSx0LnJlc3RvcmUoKX19XSksdH0oKSxqPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpcImdyYXlcIixpPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTouMyxzPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXToxMCxyPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTo1LGw9YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOlwiRGFya0dyYXlcIixuPWFyZ3VtZW50cy5sZW5ndGg+NSYmdm9pZCAwIT09YXJndW1lbnRzWzVdP2FyZ3VtZW50c1s1XTouNSxvPWFyZ3VtZW50cy5sZW5ndGg+NiYmdm9pZCAwIT09YXJndW1lbnRzWzZdP2FyZ3VtZW50c1s2XTpcIjE2cHggTW9ub3NwYWNlXCI7ZCh0aGlzLHQpLHRoaXMuY29sb3I9ZSx0aGlzLmxpbmVXaWR0aD1pLHRoaXMuc3RlcD1zLHRoaXMuYm9sZE50aD1yLHRoaXMuYm9sZENvbG9yPWwsdGhpcy5ib2xkV2lkdGg9bix0aGlzLmZvbnQ9byx0aGlzLmxpbmVzPW51bGx9cmV0dXJuIGUodCxbe2tleTpcImNyZWF0ZUxpbmVzXCIsdmFsdWU6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMuY29sb3IsaT10aGlzLmxpbmVXaWR0aCxzPXRoaXMuc3RlcCxyPXRoaXMuYm9sZE50aCxsPXRoaXMuYm9sZENvbG9yLG49dGhpcy5ib2xkV2lkdGgsbz1bXSxhPXIqcyxoPTA7aDx0LndpZHRoO2grPXMpe3ZhciB2PWglYT09MDtvLnB1c2godj9uZXcgYihsLG4saCwwLGgsdC5oZWlnaHQpOm5ldyBiKGUsaSxoLDAsaCx0LmhlaWdodCkpfWZvcih2YXIgJD0wOyQ8dC5oZWlnaHQ7JCs9cyl7dmFyIGQ9JCVhPT0wO28ucHVzaChkP25ldyBiKGwsbiwwLCQsdC53aWR0aCwkKTpuZXcgYihlLGksMCwkLHQud2lkdGgsJCkpfXRoaXMubGluZXM9b319LHtrZXk6XCJkcmF3VGV4dFwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5zdGVwLHM9dGhpcy5ib2xkTnRoLHI9dGhpcy5ib2xkQ29sb3IsbD10aGlzLmZvbnQ7dC5zYXZlKCksdC5mb250PWwsdC5maWxsU3R5bGU9cix0LmZpbGxUZXh0KFwiMFwiLDEsMTUpO2Zvcih2YXIgbj1pKnM7bjxlLndpZHRoO24rPWkqcyl0LmZpbGxUZXh0KG4sbiwxNSk7Zm9yKHZhciBvPWkqcztvPGUuaGVpZ2h0O28rPWkqcyl0LmZpbGxUZXh0KG8sMCxvKzE1KTt0LnJlc3RvcmUoKX19LHtrZXk6XCJkcmF3XCIsdmFsdWU6ZnVuY3Rpb24odCxlKXt0aGlzLmxpbmVzfHx0aGlzLmNyZWF0ZUxpbmVzKGUpLHRoaXMubGluZXMuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5kcmF3KHQpfSksdGhpcy5kcmF3VGV4dCh0LGUpfX1dKSx0fSgpO2EuTW91c2U9aSxhLkdyaWQ9ajtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJnR5cGVvZiBtb2R1bGUhPT1cInVuZGVmaW5lZFwiKXttb2R1bGUuZXhwb3J0cz1hfWVsc2UgaWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KX19KSgpOyIsIi8qKlxyXG4gKiBNYXJsaW46IERldmljZSBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbi5cclxuKi9cclxuXHJcbmltcG9ydCB7IGtkVHJlZSB9IGZyb20gJy4va2RUcmVlJztcclxuaW1wb3J0IHsgRGV2aWNlIH0gZnJvbSBcIi4vZGV2aWNlXCI7XHJcbmltcG9ydCB7IFBDQiwgUGFkIH0gZnJvbSBcIi4vcGNiXCI7XHJcblxyXG5lbnVtIFN0YXR1cyB7XHJcbiAgICBVbmRlZmluZWQgPSAxLFxyXG4gICAgUmVhZHksXHJcbiAgICBCdXN5LFxyXG4gICAgTkNcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcmxpbiBleHRlbmRzIERldmljZSB7XHJcbiAgICBtYXJsaW5EaXY6IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIG1hcmxpbkRpdlN0YXR1czogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgbWFybGluRGl2UG9zaXRpb246IEhUTUxFbGVtZW50IHwgbnVsbDtcclxuICAgIG1hcmxpbkRpdkNvbW1hbmRzOiBIVE1MRWxlbWVudCB8IG51bGw7XHJcblxyXG4gICAgemVybzogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubWFybGluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXJsaW5cIik7XHJcbiAgICAgICAgdGhpcy5pbml0SHRtbCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSEgU2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIHRvIFplcm8uIEFsbCBmdXJ0aGVyIGNvbW1hbmRzIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcyBwb3NpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFplcm8ocG9pbnQ6IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnplcm8gPSBwb2ludDtcclxuICAgICAgICB0aGlzLm9uQnRuQWJzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHOTIgWDAgWTAgWjAnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25CdG5Qb3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlISBNb3ZlIHRvIHBvc2l0aW9uLiBJZiBvbmUgY29vcmRpbmF0ZSBpcyB1bmRlZmluZWQsIGl0J3MgaWdub3JlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciB8IHVuZGVmaW5lZCwgeTogbnVtYmVyIHwgdW5kZWZpbmVkLCB6OiBudW1iZXIgfCB1bmRlZmluZWQsIGU6IG51bWJlciB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjbWQgPSAnRzAgJztcclxuICAgICAgICBpZiAoeCAhPSB1bmRlZmluZWQpIGNtZCArPSBgWCR7eCAtIHRoaXMuemVyb1swXX0gYDtcclxuICAgICAgICBpZiAoeSAhPSB1bmRlZmluZWQpIGNtZCArPSBgWSR7eSAtIHRoaXMuemVyb1sxXX0gYDtcclxuICAgICAgICBpZiAoeiAhPSB1bmRlZmluZWQpIGNtZCArPSBgWiR7en0gYDtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdChjbWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQnRuUG9zKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIG1vdmVUb0FsbChwbGlzdDogUGFkW10sIHN0YXJ0OltudW1iZXIsbnVtYmVyXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNYXJsaW46bW92ZVRvQWxsJywgcGxpc3QubGVuZ3RoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwbGlzdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyZWUgPSBuZXcga2RUcmVlKFBDQiwgcGxpc3QsIFBDQi5kaXN0YW5jZSwgW1wicG9zWFwiLCBcInBvc1lcIl0pO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRwYWQgPSBuZXcgUGFkKCcnLCBzdGFydFswXSwgc3RhcnRbMV0pO1xyXG4gICAgICAgIGxldCBzZWFyY2ggPSB0cmVlLm5lYXJlc3Qoc3RhcnRwYWQsIDEpO1xyXG4gICAgICAgIGxldCBmb3VuZHBhZCA9IHNlYXJjaFswXVswXTtcclxuXHJcbiAgICAgICAgbGV0IGZvdW5kcGFkczpQYWRbXSA9IFtdOyAvLyBqdXN0IGZvciBsb2dcclxuXHJcbiAgICAgICAgdGhpcy5vbkJ0bkFicygpLnRoZW4oYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRyZWVzaG90ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndHJlZSBkdW1wOicpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodHJlZS50b0pTT04oKSwgdW5kZWZpbmVkLCA0KSk7IC8vIGR1bXAgdHJlZVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoID0gdHJlZS5uZWFyZXN0KGZvdW5kcGFkLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFybGluOm1vdmVUb0FsbCcsIHNlYXJjaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kcGFkID0gc2VhcmNoWzBdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kcGFkcy5wdXNoKGZvdW5kcGFkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNtZCA9ICdHMCAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNtZCArPSBgWCR7Zm91bmRwYWQucG9zWCAtIHRoaXMuemVyb1swXX0gYDtcclxuICAgICAgICAgICAgICAgICAgICBjbWQgKz0gYFkke2ZvdW5kcGFkLnBvc1kgLSB0aGlzLnplcm9bMV19IGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJpYWxXcml0ZVdhaXQoY21kKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ01hcmxpbjptb3ZlVG9BbGwnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAod2hhdCkgeyB9IC8vIGlnbm9yZSBkaXNjb25uZWN0ZWQgZm9yIGRlYnVnZ2luZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLy8gcmVtb3ZlIHNlZW1zIHRvIGJlIGJ1Z2kgOigoKFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvayA9IHRyZWUucmVtb3ZlKGZvdW5kcGFkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihvaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgTWFybGluOm1vdmVUb0FsbCByZW1vdmVkIHBhZGAsIGZvdW5kcGFkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1hcmxpbjptb3ZlVG9BbGwgTk9UIHJlbW92ZWQgcGFkLCB0aGFzIGJhZCA6KGAsIGZvdW5kcGFkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJlZXNob3QgPSBKU09OLnN0cmluZ2lmeSh0cmVlLnRvSlNPTigpLCB1bmRlZmluZWQsIDQpOyAvLyBrZWVwIHRyZWUgZm9yIGRlYnVnICFcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0cmVlc2hvdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBmb3VuZHBhZCBvZiBmb3VuZHBhZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWFybGluOm1vdmVUb0FsbCcsIGZvdW5kcGFkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKHdoYXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHNlcmlhbFdyaXRlV2FpdCBmYWlscywgZG8gc29tZXRoaW5nID9cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1hcmxpbjptb3ZlVG9BbGw6IGZhaWxlZFwiLCB3aGF0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBibG9iKCkge1xyXG4gICAgICAgIHRoaXMub25CdG5BYnMoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ004MycpLnRoZW4oKCkgPT4geyAvLyBleHRydWRlciByZWxhdGl2XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWjMnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgRTEwJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMCcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFozJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TZXJpYWxDb25uZWN0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hcmxpbjogb25TZXJpYWxDb25uZWN0ZWQnKTtcclxuICAgICAgICAvLyByZWFkIG92ZXIgZmlyc3QgbWVzc2FnZXNcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgd2hpbGUodGhpcy5pbnB1dFF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlBvc2l0aW9uKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZQb3NpdGlvbi5pbm5lckhUTUwgKz0gYCR7dGhpcy5pbnB1dFF1ZXVlLnBvcCgpfWA7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXR1cyhTdGF0dXMuUmVhZHkpXHJcbiAgICAgICAgaWYgKHRoaXMubWFybGluRGl2U3RhdHVzICYmIHRoaXMubWFybGluRGl2Q29tbWFuZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLlJlYWR5KTtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZDb21tYW5kcy5jbGFzc05hbWUgPSB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzLmNsYXNzTmFtZS5yZXBsYWNlKCd3My1oaWRlJywgJ3czLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIC8vIHdhaXQgM3NlYywgcnVuIGNvbW1hbmRzICdjb2xkIGV4dHJ1ZGUnLCdyZWxhdGl2ZSBwb3NpdGlvbmluZycsJ3JlcG9ydCBwb3NpdGlvbidcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkJ0bkNvbGQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25CdG5SZWwoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuUG9zKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNYXJsaW46IG9uU2VyaWFsQ29ubmVjdGVkIGluaXQgc2VxdWVuY2UgZmluaXNoZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvblNlcmlhbERpc2Nvbm5lY3RlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFybGluOiBvblNlcmlhbERpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcmxpbkRpdlN0YXR1cyAmJiB0aGlzLm1hcmxpbkRpdkNvbW1hbmRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5OQyk7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2Q29tbWFuZHMuY2xhc3NOYW1lID0gdGhpcy5tYXJsaW5EaXZDb21tYW5kcy5jbGFzc05hbWUucmVwbGFjZSgndzMtc2hvdycsICd3My1oaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5oZXJpdGVkIGZyb20gRGV2aWNlLCBhZGRzIFN0YXR1cyBtZXNzYWdlIHVwZGF0ZXMuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWVcclxuICAgICAqIEBwYXJhbSB0aW1lb3V0XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgc2VyaWFsV3JpdGVXYWl0KHZhbHVlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDEwMDAwKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFN0YXR1cy5CdXN5KTtcclxuICAgICAgICAgICAgc3VwZXIuc2VyaWFsV3JpdGVXYWl0KHZhbHVlLCB0aW1lb3V0KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXMoU3RhdHVzLlJlYWR5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTdGF0dXMoc3RhdHVzOiBTdGF0dXMpIHtcclxuICAgICAgICBsZXQgaHRtbCA9IGB1bmtub3duIHN0YXR1cyAke3N0YXR1c31gO1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU3RhdHVzLlJlYWR5OlxyXG4gICAgICAgICAgICAgICAgaHRtbCA9ICdTdGF0dXM6IDxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1Z1wiPjwvaT4gcmVhZHknOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuQnVzeTpcclxuICAgICAgICAgICAgICAgIGh0bWwgPSAnU3RhdHVzOiA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXBsdWctY2lyY2xlLWJvbHRcIj48L2k+IGJ1c3knOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTdGF0dXMuTkM6XHJcbiAgICAgICAgICAgICAgICBodG1sID0gJ1N0YXR1czogPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wbHVnLWNpcmNsZS14bWFya1wiPjwvaT4gbm90IGNvbm5lY3RlZCc7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXJsaW5EaXZTdGF0dXMpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZTdGF0dXMuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CdG5Ib21lKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzI4JykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbilcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLy8vIHRpbWVvdXQgdG9vIHNtYWxsIGZvciB0aGlzIGNvbW1hbmQsIHNlZSB3aGF0IGhhcHBlbnNcclxuICAgICAgICAvLyB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzI4JywgMTAwKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgLy8gfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAvLyAgICAgLy8gdHJ5IGFnYWluIChkZWZhdWx0IHRpbWVvdXQgaXMgMTBzZWMpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMjgnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkJ0blBvcygpO1xyXG4gICAgICAgIC8vICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7IGNvbnNvbGUud2FybihyZWFzb24pIH0pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuUG9zKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnTTExNCcpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBoaWVyIGtvbW10IGVpbmUgemVpbGUgbWl0IHphaGxlbiB1bmQgZWluZSBtaXQgb2tcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkJ0blBvcycsdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFybGluRGl2UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmxpbkRpdlBvc2l0aW9uLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuQWJzKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzkwJykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQnRuUmVsKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzkxJykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uQnRuQ29sZCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ00zMDIgUzAnKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocmVhc29uKTtcclxuICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnRuWFAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFgxMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5YTSgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWC0xMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5ZUCgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgWTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0bllNKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBZLTEwJykudGhlbigodmFsdWUpID0+IHsgdGhpcy5vbkJ0blBvcygpOyB9KTtcclxuICAgIH07XHJcbiAgICBvbkJ0blpQKCkge1xyXG4gICAgICAgIHRoaXMuc2VyaWFsV3JpdGVXYWl0KCdHMCBaMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuWk0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIFotMTAnKS50aGVuKCh2YWx1ZSkgPT4geyB0aGlzLm9uQnRuUG9zKCk7IH0pO1xyXG4gICAgfTtcclxuICAgIG9uQnRuRVAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxXcml0ZVdhaXQoJ0cwIEUxMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgb25CdG5FTSgpIHtcclxuICAgICAgICB0aGlzLnNlcmlhbFdyaXRlV2FpdCgnRzAgRS0xMCcpLnRoZW4oKHZhbHVlKSA9PiB7IHRoaXMub25CdG5Qb3MoKTsgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBzb21lIGJ1dHRvbnMgZm9yIE1hcmxpbiBzcGVjaWZpYyBhY3Rpb25zLi4uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdEh0bWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFybGluRGl2KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInczLWJvcmRlciB3My1ib3JkZXItZGFyay1ncmV5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXJsaW5TdGF0dXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm1hcmxpblBvc2l0aW9uXCIgY2xhc3M9XCJ3My10aW55XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXJsaW5Db21tYW5kc1wiIGNsYXNzPVwidzMtdGlueSB3My1oaWRlXCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluSG9tZVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5ob21lPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5Qb3NcIiAgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnBvcz88L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblJlbFwiICBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+cmVsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5BYnNcIiAgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPmFiczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluQ29sZFwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5jb2xkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5YUFwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj54KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWE1cIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eC08L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpbllQXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnkrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5ZTVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj55LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluWlBcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+eis8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1hcmxpblpNXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtcm91bmQgdzMtbGlnaHQtZ3JleVwiPnotPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtYXJsaW5FUFwiIGNsYXNzPVwidzMtYnV0dG9uIHczLXJvdW5kIHczLWxpZ2h0LWdyZXlcIj5lKzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibWFybGluRU1cIiBjbGFzcz1cInczLWJ1dHRvbiB3My1yb3VuZCB3My1saWdodC1ncmV5XCI+ZS08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblN0YXR1c1wiKTtcclxuICAgICAgICAgICAgdGhpcy5tYXJsaW5EaXZQb3NpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluUG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgIHRoaXMubWFybGluRGl2Q29tbWFuZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkNvbW1hbmRzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1cyhTdGF0dXMuTkMpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5Ib21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Ib21lXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuSG9tZSkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuSG9tZS5vbmNsaWNrID0gdGhpcy5vbkJ0bkhvbWUuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5Qb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblBvc1wiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0blBvcykge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuUG9zLm9uY2xpY2sgPSB0aGlzLm9uQnRuUG9zLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuUmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5SZWxcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5SZWwpIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0blJlbC5vbmNsaWNrID0gdGhpcy5vbkJ0blJlbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bkFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluQWJzXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuQWJzKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5BYnMub25jbGljayA9IHRoaXMub25CdG5BYnMuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5Db2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5Db2xkXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuQ29sZCkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuQ29sZC5vbmNsaWNrID0gdGhpcy5vbkJ0bkNvbGQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuWFAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpblhQXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuWFApIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0blhQLm9uY2xpY2sgPSB0aGlzLm9uQnRuWFAuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5YTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWE1cIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5YTSkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuWE0ub25jbGljayA9IHRoaXMub25CdG5YTS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0bllQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5ZUFwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0bllQKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5ZUC5vbmNsaWNrID0gdGhpcy5vbkJ0bllQLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuWU0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbllNXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuWU0pIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bllNLm9uY2xpY2sgPSB0aGlzLm9uQnRuWU0uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5aUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluWlBcIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5aUCkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuWlAub25jbGljayA9IHRoaXMub25CdG5aUC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmxpbkJ0blpNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJsaW5aTVwiKTtcclxuICAgICAgICAgICAgaWYgKG1hcmxpbkJ0blpNKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJsaW5CdG5aTS5vbmNsaWNrID0gdGhpcy5vbkJ0blpNLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFybGluQnRuRVAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmxpbkVQXCIpO1xyXG4gICAgICAgICAgICBpZiAobWFybGluQnRuRVApIHtcclxuICAgICAgICAgICAgICAgIG1hcmxpbkJ0bkVQLm9uY2xpY2sgPSB0aGlzLm9uQnRuRVAuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYXJsaW5CdG5FTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFybGluRU1cIik7XHJcbiAgICAgICAgICAgIGlmIChtYXJsaW5CdG5FTSkge1xyXG4gICAgICAgICAgICAgICAgbWFybGluQnRuRU0ub25jbGljayA9IHRoaXMub25CdG5FTS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBrLWQgVHJlZSBKYXZhU2NyaXB0IC0gViAxLjAxXHJcbiAqXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS91YmlsYWJzL2tkLXRyZWUtamF2YXNjcmlwdFxyXG4gKlxyXG4gKiBAYXV0aG9yIE1pcmNlYSBQcmljb3AgPHByaWNvcEB1YmlsYWJzLm5ldD4sIDIwMTJcclxuICogQGF1dGhvciBNYXJ0aW4gS2xlcHBlIDxrbGVwcGVAdWJpbGFicy5uZXQ+LCAyMDEyXHJcbiAqIEBhdXRob3IgVWJpbGFicyBodHRwOi8vdWJpbGFicy5uZXQsIDIwMTJcclxuICogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgPGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwPlxyXG4gKi9cclxuXHJcbi8qIElzc3VlIFwiVGhlIHJlbW92ZSBtZXRob2QgaGFzIGVycm9yc1wiIGh0dHBzOi8vZ2l0aHViLmNvbS91YmlsYWJzL2tkLXRyZWUtamF2YXNjcmlwdC9pc3N1ZXMvMjVcclxuXHJcbiBBZnRlciBoYXZpbmcgcmVtb3ZlZCBzb21lIG5vZGVzLCB0aGV5IGNhbiBzdGlsbCBiZSBmb3VuZCBpbiB0aGUga2RUcmVlIGluIHNvbWUgc2l0dWF0aW9ucy5cclxuXHJcbiBIZXJlIGlzIGFuIGV4YW1wbGUgb2YgdGhlIHJlbW92ZSBtZXRob2QgZXJyb3JzOlxyXG5cclxuIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3NhbnRveGkvYmE4ZDI4M2Y5YTIxNTIzZmE0NWQyM2Q4ZTljMzA0NmVcclxuXHJcbiBhcyBhIHRlbXBvcmFyeSB3b3JrLWFyb3VuZCwgSSBhZGRlZCBhIGZvdXJ0aCBhcmd1bWVudCB0byBcIm5lYXJlc3RcIiB0byBwYXNzIGEgcHJlZGljYXRlIHRvIGZpbHRlciB0aGUgbWF0Y2hlZCBub2Rlcywgd2hpY2ggbWlnaHQgYmUgYWxzbyB1c2VmdWwgdG8gYWRkOlxyXG5cclxuICAgICB0aGlzLm5lYXJlc3QgPSBmdW5jdGlvbiAocG9pbnQsIG1heE5vZGVzLCBtYXhEaXN0YW5jZSwgcHJlZGljYXRlKSB7XHJcbiAgICAgICAgICAgICBwcmVkaWNhdGUgPSBwcmVkaWNhdGUgfHwgKHggPT4gdHJ1ZSk7XHJcbiAuLi4uXHJcbiAgICAgICAgIGxpbmVhckRpc3RhbmNlID0gbWV0cmljKGxpbmVhclBvaW50LCBub2RlLm9iaik7XHJcblxyXG4gICAgICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCAmJiBub2RlLmxlZnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUub2JqKSAmJiAoYmVzdE5vZGVzLnNpemUoKSA8IG1heE5vZGVzIHx8IG93bkRpc3RhbmNlIDwgYmVzdE5vZGVzLnBlZWsoKVsxXSkpIHtcclxuICAgICAgICAgICAgIHNhdmVOb2RlKG5vZGUsIG93bkRpc3RhbmNlKTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICB9XHJcbiAuLi4uXHJcbiAgICAgICAgIG5lYXJlc3RTZWFyY2goYmVzdENoaWxkKTtcclxuXHJcbiAgICAgICAgIGlmIChwcmVkaWNhdGUobm9kZS5vYmopICYmIChiZXN0Tm9kZXMuc2l6ZSgpIDwgbWF4Tm9kZXMgfHwgb3duRGlzdGFuY2UgPCBiZXN0Tm9kZXMucGVlaygpWzFdKSkge1xyXG4gICAgICAgICAgIHNhdmVOb2RlKG5vZGUsIG93bkRpc3RhbmNlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIGtkVHJlZU9iamVjdCB7IH1cclxuXHJcbmV4cG9ydCBjbGFzcyBrZE5vZGU8VCBleHRlbmRzIGtkVHJlZU9iamVjdD4ge1xyXG4gICAgb2JqOiBUO1xyXG4gICAgbGVmdDoga2ROb2RlPFQ+IHwgbnVsbDtcclxuICAgIHJpZ2h0OiBrZE5vZGU8VD4gfCBudWxsO1xyXG4gICAgcGFyZW50OiBrZE5vZGU8VD47XHJcbiAgICBkaW1lbnNpb246IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKG9iajogVCwgZGltZW5zaW9uOiBudW1iZXIsIHBhcmVudCkge1xyXG4gICAgICAgIHRoaXMub2JqID0gb2JqO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb24gPSBkaW1lbnNpb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBrZFRyZWU8VCBleHRlbmRzIGtkVHJlZU9iamVjdD4ge1xyXG4gICAgcHJpdmF0ZSBfa2RUcmVlT2JqZWN0VHlwZTogdHlwZW9mIGtkVHJlZU9iamVjdDtcclxuXHJcbiAgICBwb2ludHM6IFRbXTtcclxuICAgIG1ldHJpYzogKGE6IFQsIGI6IFQpID0+IG51bWJlcjtcclxuICAgIGRpbWVuc2lvbnM6IChrZXlvZiBUKVtdO1xyXG4gICAgcm9vdDoga2ROb2RlPFQ+IHwgbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSBhIG5ldyB0cmVlIGZyb20gYSBsaXN0IG9mIHBvaW50cywgYSBkaXN0YW5jZSBmdW5jdGlvbiwgYW5kIGEgbGlzdCBvZiBkaW1lbnNpb25zLlxyXG4gICAgICogQHBhcmFtIHBvaW50c1xyXG4gICAgICogQHBhcmFtIGRpc3RhbmNlXHJcbiAgICAgKiBAcGFyYW0gZGltZW5zaW9uc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvYmo6IHR5cGVvZiBrZFRyZWVPYmplY3QsIHBvaW50czogVFtdLCBkaXN0YW5jZTogKGE6IFQsIGI6IFQpID0+IG51bWJlciwgZGltZW5zaW9uczogQXJyYXk8a2V5b2YgVD4pIHtcclxuICAgICAgICB0aGlzLl9rZFRyZWVPYmplY3RUeXBlID0gb2JqO1xyXG5cclxuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcclxuICAgICAgICB0aGlzLm1ldHJpYyA9IGRpc3RhbmNlO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XHJcblxyXG4gICAgICAgIC8vIElmIHBvaW50cyBpcyBub3QgYW4gYXJyYXksIGFzc3VtZSB3ZSdyZSBsb2FkaW5nIGEgcHJlLWJ1aWx0IHRyZWVcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocG9pbnRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRUcmVlKHBvaW50cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb290ID0gdGhpcy5idWlsZFRyZWUocG9pbnRzLCAwLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFRyZWUocG9pbnRzOiBUW10sIGRlcHRoOiBudW1iZXIsIHBhcmVudDoga2ROb2RlPFQ+IHwgbnVsbCk6IGtkTm9kZTxUPiB8IG51bGwge1xyXG4gICAgICAgIHZhciBkaW0gPSBkZXB0aCAlIHRoaXMuZGltZW5zaW9ucy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIG1lZGlhbjtcclxuICAgICAgICB2YXIgbm9kZToga2ROb2RlPFQ+O1xyXG5cclxuICAgICAgICBpZiAocG9pbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBrZE5vZGUocG9pbnRzWzBdLCBkaW0sIHBhcmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb2ludHMuc29ydCgoYTogVCwgYjogVCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8bnVtYmVyPmFbdGhpcy5kaW1lbnNpb25zW2RpbV1dIC0gPG51bWJlcj5iW3RoaXMuZGltZW5zaW9uc1tkaW1dXTsgLy8gZGlzdGFuY2UgaW4gdGhlIGRpbWVuc2lvblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYW4gPSBNYXRoLmZsb29yKHBvaW50cy5sZW5ndGggLyAyKTtcclxuXHJcbiAgICAgICAgLy8gYXZvaWQgaGF2aW5nIHNhbWUgY29vcmRzIG9uIGxlZnQgYW5kIHJpZ2h0IHRyZWUgISEhXHJcbiAgICAgICAgd2hpbGUobWVkaWFuID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3bWVkaWFuID0gbWVkaWFuIC0gMTtcclxuICAgICAgICAgICAgaWYocG9pbnRzW21lZGlhbl1bdGhpcy5kaW1lbnNpb25zW2RpbV1dID09PSBwb2ludHNbbmV3bWVkaWFuXVt0aGlzLmRpbWVuc2lvbnNbZGltXV0pIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihgYnVpbGRUcmVlOnNwbGl0IGJsb2VkIG5lID8/PyAke3RoaXMuZGltZW5zaW9uc1tkaW1dfWApO1xyXG4gICAgICAgICAgICAgICAgbWVkaWFuIC09IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm9kZSA9IG5ldyBrZE5vZGUocG9pbnRzW21lZGlhbl0sIGRpbSwgcGFyZW50KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGJ1aWxkVHJlZTpzcGxpdDpkaW06JHt0aGlzLmRpbWVuc2lvbnNbZGltXX0gdmFsdWU6JHtwb2ludHNbbWVkaWFuXVt0aGlzLmRpbWVuc2lvbnNbZGltXV19YCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGJ1aWxkVHJlZTpsZWZ0OiR7ZGVwdGh9YCwgcG9pbnRzLnNsaWNlKDAsIG1lZGlhbikpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBidWlsZFRyZWU6cmlnaHQke2RlcHRofWAsIHBvaW50cy5zbGljZShtZWRpYW4gKyAxKSk7XHJcblxyXG4gICAgICAgIG5vZGUubGVmdCA9IHRoaXMuYnVpbGRUcmVlKHBvaW50cy5zbGljZSgwLCBtZWRpYW4pLCBkZXB0aCArIDEsIG5vZGUpO1xyXG4gICAgICAgIG5vZGUucmlnaHQgPSB0aGlzLmJ1aWxkVHJlZShwb2ludHMuc2xpY2UobWVkaWFuICsgMSksIGRlcHRoICsgMSwgbm9kZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbG9hZHMgYSBzZXJpYWxpZWQgdHJlZVxyXG4gICAgcHJpdmF0ZSBsb2FkVHJlZShkYXRhKSB7XHJcbiAgICAgICAgLy8gSnVzdCBuZWVkIHRvIHJlc3RvcmUgdGhlIGBwYXJlbnRgIHBhcmFtZXRlclxyXG4gICAgICAgIHRoaXMucm9vdCA9IGRhdGE7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc3RvcmVQYXJlbnQocm9vdCkge1xyXG4gICAgICAgICAgICBpZiAocm9vdC5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICByb290LmxlZnQucGFyZW50ID0gcm9vdDtcclxuICAgICAgICAgICAgICAgIHJlc3RvcmVQYXJlbnQocm9vdC5sZWZ0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJvb3QucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHJvb3QucmlnaHQucGFyZW50ID0gcm9vdDtcclxuICAgICAgICAgICAgICAgIHJlc3RvcmVQYXJlbnQocm9vdC5yaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3RvcmVQYXJlbnQodGhpcy5yb290KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb252ZXJ0IHRvIGEgSlNPTiBzZXJpYWxpemFibGUgc3RydWN0dXJlOyB0aGlzIGp1c3QgcmVxdWlyZXMgcmVtb3ZpbmdcclxuICAgIC8vIHRoZSBgcGFyZW50YCBwcm9wZXJ0eVxyXG4gICAgdG9KU09OKHNyYzoga2ROb2RlPFQ+IHwgbnVsbCA9IHRoaXMucm9vdCkge1xyXG4gICAgICAgIGlmIChzcmMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkZXN0ID0gbmV3IGtkTm9kZShzcmMub2JqLCBzcmMuZGltZW5zaW9uLCBudWxsKTtcclxuICAgICAgICBpZiAoc3JjLmxlZnQpIGRlc3QubGVmdCA9IHRoaXMudG9KU09OKHNyYy5sZWZ0KTtcclxuICAgICAgICBpZiAoc3JjLnJpZ2h0KSBkZXN0LnJpZ2h0ID0gdGhpcy50b0pTT04oc3JjLnJpZ2h0KTtcclxuICAgICAgICByZXR1cm4gZGVzdDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqIHJldHVybnMgYSBsaXN0IG9mIHBvaW50cyBpbiB0aGUgc3VidHJlZSwgZXhjbHVzaXZlIHRoZSBnaXZlbiBub2RlICEgKi9cclxuICAgIHRvQXJyYXkoc3JjOiBrZE5vZGU8VD4gfCBudWxsID0gdGhpcy5yb290KTogVFtdIHtcclxuICAgICAgICBsZXQgcmVzdWx0OlRbXSA9IFtdO1xyXG4gICAgICAgIGlmIChzcmMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3JjLmxlZnQpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goc3JjLmxlZnQub2JqKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gWy4uLnJlc3VsdCwgLi4udGhpcy50b0FycmF5KHNyYy5sZWZ0KV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNyYy5yaWdodCkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChzcmMucmlnaHQub2JqKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gWy4uLnJlc3VsdCwgLi4udGhpcy50b0FycmF5KHNyYy5yaWdodCldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5uZXJTZWFyY2gocG9pbnQsIG5vZGUsIHBhcmVudCkge1xyXG4gICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb25zW25vZGUuZGltZW5zaW9uXTtcclxuICAgICAgICBpZiAocG9pbnRbZGltZW5zaW9uXSA8IG5vZGUub2JqW2RpbWVuc2lvbl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJTZWFyY2gocG9pbnQsIG5vZGUubGVmdCwgbm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJTZWFyY2gocG9pbnQsIG5vZGUucmlnaHQsIG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5zZXJ0KHBvaW50KSB7XHJcbiAgICAgICAgdmFyIGluc2VydFBvc2l0aW9uID0gdGhpcy5pbm5lclNlYXJjaChwb2ludCwgdGhpcy5yb290LCBudWxsKSxcclxuICAgICAgICAgICAgbmV3a2ROb2RlLFxyXG4gICAgICAgICAgICBkaW1lbnNpb247XHJcblxyXG4gICAgICAgIGlmIChpbnNlcnRQb3NpdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBuZXcga2ROb2RlKHBvaW50LCAwLCBudWxsKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3a2ROb2RlID0gbmV3IGtkTm9kZShwb2ludCwgKGluc2VydFBvc2l0aW9uLmRpbWVuc2lvbiArIDEpICUgdGhpcy5kaW1lbnNpb25zLmxlbmd0aCwgaW5zZXJ0UG9zaXRpb24pO1xyXG4gICAgICAgIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uc1tpbnNlcnRQb3NpdGlvbi5kaW1lbnNpb25dO1xyXG5cclxuICAgICAgICBpZiAocG9pbnRbZGltZW5zaW9uXSA8IGluc2VydFBvc2l0aW9uLm9ialtkaW1lbnNpb25dKSB7XHJcbiAgICAgICAgICAgIGluc2VydFBvc2l0aW9uLmxlZnQgPSBuZXdrZE5vZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5zZXJ0UG9zaXRpb24ucmlnaHQgPSBuZXdrZE5vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIG5vZGVTZWFyY2gocG9pbnQ6IFQsIG5vZGU6IGtkTm9kZTxUPiB8IG51bGwpIHtcclxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlLm9iaiA9PT0gcG9pbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZXF1YWxpdHkgY2hlY2sgPz8/IHdpbGwgaXQgd29yayBvbiBmbG9hdHMgPz8/IC8vIG5vdCB0aGUgcHJvYmxlbSwgaXQgZG9lcyBub3QgZmluZCBhIGNhbmRpZGF0ZSAhISEgdXV1aGhoXHJcbiAgICAgICAgICAgIGxldCBtZXQgPSB0aGlzLm1ldHJpYyhub2RlLm9iaiwgcG9pbnQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygna2RUcmVlOm5vZGVTZWFyY2gnLCBtZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uc1tub2RlLmRpbWVuc2lvbl07XHJcblxyXG4gICAgICAgIC8vIHV1dWhoaCBsb29raW5nIGF0IHRoZSB0cmVlIEkgc2VlIGxlZnQgPD0gb2JqW2RpbV0sXHJcbiAgICAgICAgLy8gbm8gYWN0dWFsbHkgdGhlIGFycmF5IHNwbGl0dGluZyBoYXMgbm90aGluZyB0byBkbyB3aXRoIHRoaXMgY29tcGFyaXNpb24sIGNhbiBiZSBlaXRoZXIgd2F5ICEhIVxyXG4gICAgICAgIGlmIChwb2ludFtkaW1lbnNpb25dIDwgbm9kZS5vYmpbZGltZW5zaW9uXSkgeyAgLy8gb3JpZ2luYWwgPFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhga2RUcmVlOm5vZGVTZWFyY2ggbGVmdCAke3BvaW50W2RpbWVuc2lvbl19IDw9PyAke25vZGUub2JqW2RpbWVuc2lvbl19YCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVTZWFyY2gocG9pbnQsIG5vZGUubGVmdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGtkVHJlZTpub2RlU2VhcmNoIHJpZ2h0ICR7cG9pbnRbZGltZW5zaW9uXX0gPj8gJHtub2RlLm9ialtkaW1lbnNpb25dfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlU2VhcmNoKHBvaW50LCBub2RlLnJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kTWluKG5vZGU6IGtkTm9kZTxUPiB8IG51bGwsIGRpbTogbnVtYmVyKToga2ROb2RlPFQ+IHwgbnVsbCB7XHJcbiAgICAgICAgdmFyIGRpbWVuc2lvbjogYW55O1xyXG4gICAgICAgIHZhciBvd246IG51bWJlcjtcclxuICAgICAgICB2YXIgbGVmdDtcclxuICAgICAgICB2YXIgcmlnaHQ7XHJcbiAgICAgICAgdmFyIG1pbjoga2ROb2RlPFQ+O1xyXG5cclxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uc1tkaW1dO1xyXG5cclxuICAgICAgICBpZiAobm9kZS5kaW1lbnNpb24gPT09IGRpbSkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kTWluKG5vZGUubGVmdCwgZGltKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG93biA9IG5vZGUub2JqW2RpbWVuc2lvbl07XHJcbiAgICAgICAgbGVmdCA9IHRoaXMuZmluZE1pbihub2RlLmxlZnQsIGRpbSk7XHJcbiAgICAgICAgcmlnaHQgPSB0aGlzLmZpbmRNaW4obm9kZS5yaWdodCwgZGltKTtcclxuICAgICAgICBtaW4gPSBub2RlO1xyXG5cclxuICAgICAgICBpZiAobGVmdCAhPT0gbnVsbCAmJiBsZWZ0Lm9ialtkaW1lbnNpb25dIDwgb3duKSB7XHJcbiAgICAgICAgICAgIG1pbiA9IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyaWdodCAhPT0gbnVsbCAmJiByaWdodC5vYmpbZGltZW5zaW9uXSA8IG1pbi5vYmpbZGltZW5zaW9uXSkge1xyXG4gICAgICAgICAgICBtaW4gPSByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRNYXgobm9kZToga2ROb2RlPFQ+LCBkaW06IG51bWJlcik6IGtkTm9kZTxUPiB7XHJcbiAgICAgICAgdmFyIGRpbWVuc2lvbjogYW55O1xyXG4gICAgICAgIHZhciBvd246IG51bWJlcjtcclxuICAgICAgICB2YXIgbGVmdDoga2ROb2RlPFQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHJpZ2h0OiBrZE5vZGU8VD4gfCBudWxsID0gbnVsbDtcclxuICAgICAgICB2YXIgbWF4OiBrZE5vZGU8VD47XHJcblxyXG4gICAgICAgIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uc1tkaW1dO1xyXG5cclxuICAgICAgICBpZiAobm9kZS5kaW1lbnNpb24gPT09IGRpbSkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kTWF4KG5vZGUubGVmdCwgZGltKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG93biA9IG5vZGUub2JqW2RpbWVuc2lvbl07XHJcbiAgICAgICAgaWYgKG5vZGUubGVmdCkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5maW5kTWF4KG5vZGUubGVmdCwgZGltKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vZGUucmlnaHQpIHtcclxuICAgICAgICAgICAgcmlnaHQgPSB0aGlzLmZpbmRNYXgobm9kZS5yaWdodCwgZGltKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF4ID0gbm9kZTtcclxuXHJcbiAgICAgICAgaWYgKGxlZnQgIT09IG51bGwgJiYgbGVmdC5vYmpbZGltZW5zaW9uXSA+IG93bikge1xyXG4gICAgICAgICAgICBtYXggPSBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmlnaHQgIT09IG51bGwgJiYgcmlnaHQub2JqW2RpbWVuc2lvbl0gPiBtYXgub2JqW2RpbWVuc2lvbl0pIHtcclxuICAgICAgICAgICAgbWF4ID0gcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVOb2RlKG5vZGU6IGtkTm9kZTxUPiB8IG51bGwpIHtcclxuICAgICAgICB2YXIgbmV4dE5vZGU6IGtkTm9kZTxUPiB8IG51bGw7XHJcbiAgICAgICAgdmFyIG5leHRPYmo6IFQ7XHJcbiAgICAgICAgdmFyIHBEaW1lbnNpb246IGFueTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwRGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb25zW25vZGUucGFyZW50LmRpbWVuc2lvbl07XHJcblxyXG4gICAgICAgICAgICBpZiAobm9kZS5vYmpbcERpbWVuc2lvbl0gPD0gbm9kZS5wYXJlbnQub2JqW3BEaW1lbnNpb25dKSB7IC8vb3JpZyA8XHJcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudC5sZWZ0ID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50LnJpZ2h0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgcmlnaHQgc3VidHJlZSBpcyBub3QgZW1wdHksIHN3YXAgd2l0aCB0aGUgbWluaW11bSBlbGVtZW50IG9uIHRoZVxyXG4gICAgICAgIC8vIG5vZGUncyBkaW1lbnNpb24uIElmIGl0IGlzIGVtcHR5LCB3ZSBzd2FwIHRoZSBsZWZ0IGFuZCByaWdodCBzdWJ0cmVlcyBhbmRcclxuICAgICAgICAvLyBkbyB0aGUgc2FtZS5cclxuICAgICAgICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkgeyAvLyBvcmlnIHJpZ2h0XHJcbiAgICAgICAgICAgIG5leHROb2RlID0gdGhpcy5maW5kTWluKG5vZGUucmlnaHQsIG5vZGUuZGltZW5zaW9uKTsgLy8gb3JpZyByaWdodCwgZmluZE1pblxyXG4gICAgICAgICAgICBuZXh0T2JqID0gbmV4dE5vZGUub2JqO1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZU5vZGUobmV4dE5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLm9iaiA9IG5leHRPYmo7XHJcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHsgLy8gbWFrZXMgdHlwZXNjcmlwdCBoYXBweVxyXG4gICAgICAgICAgICBuZXh0Tm9kZSA9IHRoaXMuZmluZE1pbihub2RlLmxlZnQsIG5vZGUuZGltZW5zaW9uKTsgLy8gb3JpZyBsZWZ0LCBmaW5kTWluXHJcbiAgICAgICAgICAgIG5leHRPYmogPSBuZXh0Tm9kZS5vYmo7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTm9kZShuZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUucmlnaHQgPSBub2RlLmxlZnQ7IC8vIG9yaWcgcmlnaHQgPSBsZWZ0XHJcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IG51bGw7IC8vb3JpZyBsZWZ0XHJcbiAgICAgICAgICAgIG5vZGUub2JqID0gbmV4dE9iajtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUocG9pbnQ6IFQpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgbm9kZToga2ROb2RlPFQ+IHwgbnVsbDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2tkVHJlZTpyZW1vdmUgc2VhcmNoaW5nOicsIHBvaW50KTtcclxuICAgICAgICBub2RlID0gdGhpcy5ub2RlU2VhcmNoKHBvaW50LCB0aGlzLnJvb3QpO1xyXG5cclxuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJrZFRyZWU6cmVtb3ZlOmthY2snbidzaGl0XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLnJlbW92ZU5vZGUobm9kZSk7IC8vIGJ1Z2dpXHJcblxyXG4gICAgICAgIC8vIG5ldyB0cmVlIHJlYnVpbGRcclxuICAgICAgICBjb25zdCBhbGxjaGlsZHMgPSB0aGlzLnRvQXJyYXkobm9kZSk7XHJcbiAgICAgICAgbGV0IG5ld25vZGUgPSB0aGlzLmJ1aWxkVHJlZShhbGxjaGlsZHMsIG5vZGUuZGltZW5zaW9uLCBub2RlLnBhcmVudCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZScsIG5vZGUpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZScsIGFsbGNoaWxkcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZScsIG5ld25vZGUpO1xyXG4gICAgICAgIGlmKG5vZGUucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGlmKG5vZGUucGFyZW50LmxlZnQgPT09IG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmUgaW0gbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQubGVmdCA9IG5ld25vZGU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnQucmlnaHQgPT09IG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmUgaW0gcmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50LnJpZ2h0ID0gbmV3bm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5ld25vZGU7IC8vLyA/Pz9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIG5lYXJlc3RTZWFyY2goZGF0YTogeyBwb2ludDogVCwgYmVzdE5vZGVzOiBCaW5hcnlIZWFwPFQ+LCBtYXhOb2RlczogbnVtYmVyIH0sIG5vZGU6a2ROb2RlPFQ+KSB7XHJcbiAgICAgICAgbGV0IGJlc3RDaGlsZDtcclxuICAgICAgICBsZXQgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb25zW25vZGUuZGltZW5zaW9uXTtcclxuICAgICAgICBsZXQgb3duRGlzdGFuY2UgPSB0aGlzLm1ldHJpYyhkYXRhLnBvaW50LCBub2RlLm9iaik7XHJcbiAgICAgICAgbGV0IGxpbmVhclBvaW50OiBUID0gPFQ+bmV3IHRoaXMuX2tkVHJlZU9iamVjdFR5cGUoKTtcclxuICAgICAgICB2YXIgbGluZWFyRGlzdGFuY2U7XHJcbiAgICAgICAgbGV0IG90aGVyQ2hpbGQ7XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBrZFRyZWU6bmVhcmVzdFNlYXJjaGAsIGRhdGEpO1xyXG5cclxuICAgICAgICBjb25zdCBzYXZlTm9kZSA9IChub2RlOiBrZE5vZGU8VD4sIGRpc3RhbmNlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgZGF0YS5iZXN0Tm9kZXMucHVzaChbbm9kZSwgZGlzdGFuY2VdKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuYmVzdE5vZGVzLnNpemUoKSA+IGRhdGEubWF4Tm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYmVzdE5vZGVzLnBvcCgpOyAvLyBlbmRsZXNzIGxvb3AgaGVyZSAhISFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGltZW5zaW9ucy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbm9kZS5kaW1lbnNpb24pIHtcclxuICAgICAgICAgICAgICAgIGxpbmVhclBvaW50W3RoaXMuZGltZW5zaW9uc1tpXV0gPSBkYXRhLnBvaW50W3RoaXMuZGltZW5zaW9uc1tpXV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lYXJQb2ludFt0aGlzLmRpbWVuc2lvbnNbaV1dID0gbm9kZS5vYmpbdGhpcy5kaW1lbnNpb25zW2ldXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGluZWFyRGlzdGFuY2UgPSB0aGlzLm1ldHJpYyhsaW5lYXJQb2ludCwgbm9kZS5vYmopO1xyXG5cclxuICAgICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCAmJiBub2RlLmxlZnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuYmVzdE5vZGVzLnNpemUoKSA8IGRhdGEubWF4Tm9kZXMgfHwgb3duRGlzdGFuY2UgPCBkYXRhLmJlc3ROb2Rlcy5wZWVrKClbMV0pIHtcclxuICAgICAgICAgICAgICAgIHNhdmVOb2RlKG5vZGUsIG93bkRpc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBiZXN0Q2hpbGQgPSBub2RlLmxlZnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLmxlZnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5yaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5wb2ludFtkaW1lbnNpb25dIDwgbm9kZS5vYmpbZGltZW5zaW9uXSkge1xyXG4gICAgICAgICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5sZWZ0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmVzdENoaWxkID0gbm9kZS5yaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5uZWFyZXN0U2VhcmNoKGRhdGEsIGJlc3RDaGlsZCk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmJlc3ROb2Rlcy5zaXplKCkgPCBkYXRhLm1heE5vZGVzIHx8IG93bkRpc3RhbmNlIDwgZGF0YS5iZXN0Tm9kZXMucGVlaygpWzFdKSB7XHJcbiAgICAgICAgICAgIHNhdmVOb2RlKG5vZGUsIG93bkRpc3RhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmJlc3ROb2Rlcy5zaXplKCkgPCBkYXRhLm1heE5vZGVzIHx8IE1hdGguYWJzKGxpbmVhckRpc3RhbmNlKSA8IGRhdGEuYmVzdE5vZGVzLnBlZWsoKVsxXSkge1xyXG4gICAgICAgICAgICBpZiAoYmVzdENoaWxkID09PSBub2RlLmxlZnQpIHtcclxuICAgICAgICAgICAgICAgIG90aGVyQ2hpbGQgPSBub2RlLnJpZ2h0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJDaGlsZCA9IG5vZGUubGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3RoZXJDaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0U2VhcmNoKGRhdGEsIG90aGVyQ2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5lYXJlc3QocG9pbnQ6IFQsIG1heE5vZGVzOiBudW1iZXIsIG1heERpc3RhbmNlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgICAgICBsZXQgYmVzdE5vZGVzOiBCaW5hcnlIZWFwPFQ+O1xyXG5cclxuICAgICAgICBiZXN0Tm9kZXMgPSBuZXcgQmluYXJ5SGVhcChcclxuICAgICAgICAgICAgKGUpID0+IHsgcmV0dXJuIC1lWzFdOyB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKG1heERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZFRyZWU6bmVhcmVzdCwgbWF4bm9kZXMnLCBtYXhOb2Rlcyk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXhOb2RlczsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0Tm9kZXMucHVzaChbbnVsbCwgbWF4RGlzdGFuY2VdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucm9vdCkge1xyXG4gICAgICAgICAgICB0aGlzLm5lYXJlc3RTZWFyY2goeyBwb2ludCwgYmVzdE5vZGVzLCBtYXhOb2RlcyB9LCB0aGlzLnJvb3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBNYXRoLm1pbihtYXhOb2RlcywgYmVzdE5vZGVzLmNvbnRlbnQubGVuZ3RoKTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChiZXN0Tm9kZXMuY29udGVudFtpXVswXSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goW2Jlc3ROb2Rlcy5jb250ZW50W2ldWzBdLm9iaiwgYmVzdE5vZGVzLmNvbnRlbnRbaV1bMV1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBiYWxhbmNlRmFjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IChub2RlOiBrZE5vZGU8VD4gfCBudWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoaGVpZ2h0KG5vZGUubGVmdCksIGhlaWdodChub2RlLnJpZ2h0KSkgKyAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY291bnQgPSAobm9kZToga2ROb2RlPFQ+IHwgbnVsbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50KG5vZGUubGVmdCkgKyBjb3VudChub2RlLnJpZ2h0KSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaGVpZ2h0KHRoaXMucm9vdCkgLyAoTWF0aC5sb2coY291bnQodGhpcy5yb290KSkgLyBNYXRoLmxvZygyKSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBCaW5hcnkgaGVhcCBpbXBsZW1lbnRhdGlvbiBmcm9tOlxyXG4vLyBodHRwOi8vZWxvcXVlbnRqYXZhc2NyaXB0Lm5ldC9hcHBlbmRpeDIuaHRtbFxyXG5cclxuZXhwb3J0IGNsYXNzIEJpbmFyeUhlYXA8VCBleHRlbmRzIGtkVHJlZU9iamVjdD4ge1xyXG4gICAgY29udGVudDogW25vZGU6IGtkTm9kZTxUPiB8IG51bGwsIGRpc3RhbmNlOiBudW1iZXJdW107XHJcbiAgICBzY29yZUZ1bmN0aW9uOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihzY29yZUZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gW107XHJcbiAgICAgICAgdGhpcy5zY29yZUZ1bmN0aW9uID0gc2NvcmVGdW5jdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGVsZW1lbnQ6IFtub2RlOiBrZE5vZGU8VD4gfCBudWxsLCBkaXN0YW5jZTogbnVtYmVyXSkge1xyXG4gICAgICAgIC8vIEFkZCB0aGUgbmV3IGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkuXHJcbiAgICAgICAgdGhpcy5jb250ZW50LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgLy8gQWxsb3cgaXQgdG8gYnViYmxlIHVwLlxyXG4gICAgICAgIHRoaXMuYnViYmxlVXAodGhpcy5jb250ZW50Lmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcCgpIHtcclxuICAgICAgICAvLyBTdG9yZSB0aGUgZmlyc3QgZWxlbWVudCBzbyB3ZSBjYW4gcmV0dXJuIGl0IGxhdGVyLlxyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmNvbnRlbnRbMF07XHJcbiAgICAgICAgLy8gR2V0IHRoZSBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5LlxyXG4gICAgICAgIHZhciBlbmQgPSB0aGlzLmNvbnRlbnQucG9wKCk7XHJcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGFueSBlbGVtZW50cyBsZWZ0LCBwdXQgdGhlIGVuZCBlbGVtZW50IGF0IHRoZVxyXG4gICAgICAgIC8vIHN0YXJ0LCBhbmQgbGV0IGl0IHNpbmsgZG93bi5cclxuICAgICAgICBpZiAoZW5kICYmIHRoaXMuY29udGVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudFswXSA9IGVuZDtcclxuICAgICAgICAgICAgdGhpcy5zaW5rRG93bigwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKG5vZGUpIHtcclxuICAgICAgICB2YXIgbGVuID0gdGhpcy5jb250ZW50Lmxlbmd0aDtcclxuICAgICAgICAvLyBUbyByZW1vdmUgYSB2YWx1ZSwgd2UgbXVzdCBzZWFyY2ggdGhyb3VnaCB0aGUgYXJyYXkgdG8gZmluZFxyXG4gICAgICAgIC8vIGl0LlxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudFtpXSA9PSBub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGl0IGlzIGZvdW5kLCB0aGUgcHJvY2VzcyBzZWVuIGluICdwb3AnIGlzIHJlcGVhdGVkXHJcbiAgICAgICAgICAgICAgICAvLyB0byBmaWxsIHVwIHRoZSBob2xlLlxyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IHRoaXMuY29udGVudC5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbmQgJiYgaSAhPSBsZW4gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50W2ldID0gZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlRnVuY3Rpb24oZW5kKSA8IHRoaXMuc2NvcmVGdW5jdGlvbihub2RlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWJibGVVcChpKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lua0Rvd24oaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwia2ROb2RlIG5vdCBmb3VuZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBidWJibGVVcChuKSB7XHJcbiAgICAgICAgLy8gRmV0Y2ggdGhlIGVsZW1lbnQgdGhhdCBoYXMgdG8gYmUgbW92ZWQuXHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmNvbnRlbnRbbl07XHJcbiAgICAgICAgLy8gV2hlbiBhdCAwLCBhbiBlbGVtZW50IGNhbiBub3QgZ28gdXAgYW55IGZ1cnRoZXIuXHJcbiAgICAgICAgd2hpbGUgKG4gPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIHBhcmVudCBlbGVtZW50J3MgaW5kZXgsIGFuZCBmZXRjaCBpdC5cclxuICAgICAgICAgICAgdmFyIHBhcmVudE4gPSBNYXRoLmZsb29yKChuICsgMSkgLyAyKSAtIDEsXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSB0aGlzLmNvbnRlbnRbcGFyZW50Tl07XHJcbiAgICAgICAgICAgIC8vIFN3YXAgdGhlIGVsZW1lbnRzIGlmIHRoZSBwYXJlbnQgaXMgZ3JlYXRlci5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmVGdW5jdGlvbihlbGVtZW50KSA8IHRoaXMuc2NvcmVGdW5jdGlvbihwYXJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRbcGFyZW50Tl0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50W25dID0gcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlICduJyB0byBjb250aW51ZSBhdCB0aGUgbmV3IHBvc2l0aW9uLlxyXG4gICAgICAgICAgICAgICAgbiA9IHBhcmVudE47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRm91bmQgYSBwYXJlbnQgdGhhdCBpcyBsZXNzLCBubyBuZWVkIHRvIG1vdmUgaXQgZnVydGhlci5cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaW5rRG93bihuKSB7XHJcbiAgICAgICAgLy8gTG9vayB1cCB0aGUgdGFyZ2V0IGVsZW1lbnQgYW5kIGl0cyBzY29yZS5cclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5jb250ZW50Lmxlbmd0aCxcclxuICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuY29udGVudFtuXSxcclxuICAgICAgICAgICAgZWxlbVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyBDb21wdXRlIHRoZSBpbmRpY2VzIG9mIHRoZSBjaGlsZCBlbGVtZW50cy5cclxuICAgICAgICAgICAgdmFyIGNoaWxkMk4gPSAobiArIDEpICogMjtcclxuICAgICAgICAgICAgdmFyIGNoaWxkMU4gPSBjaGlsZDJOIC0gMTtcclxuICAgICAgICAgICAgLy8gVGhpcyBpcyB1c2VkIHRvIHN0b3JlIHRoZSBuZXcgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQsXHJcbiAgICAgICAgICAgIC8vIGlmIGFueS5cclxuICAgICAgICAgICAgdmFyIHN3YXA6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgZmlyc3QgY2hpbGQgZXhpc3RzIChpcyBpbnNpZGUgdGhlIGFycmF5KS4uLlxyXG4gICAgICAgICAgICBpZiAoY2hpbGQxTiA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTG9vayBpdCB1cCBhbmQgY29tcHV0ZSBpdHMgc2NvcmUuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQxID0gdGhpcy5jb250ZW50W2NoaWxkMU5dLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkMVNjb3JlID0gdGhpcy5zY29yZUZ1bmN0aW9uKGNoaWxkMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2NvcmUgaXMgbGVzcyB0aGFuIG91ciBlbGVtZW50J3MsIHdlIG5lZWQgdG8gc3dhcC5cclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZDFTY29yZSA8IGVsZW1TY29yZSlcclxuICAgICAgICAgICAgICAgICAgICBzd2FwID0gY2hpbGQxTjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBEbyB0aGUgc2FtZSBjaGVja3MgZm9yIHRoZSBvdGhlciBjaGlsZC5cclxuICAgICAgICAgICAgaWYgKGNoaWxkMk4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGlsZDIgPSB0aGlzLmNvbnRlbnRbY2hpbGQyTl0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQyU2NvcmUgPSB0aGlzLnNjb3JlRnVuY3Rpb24oY2hpbGQyKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZDJTY29yZSA8IChzd2FwID09IG51bGwgPyBlbGVtU2NvcmUgOiBjaGlsZDFTY29yZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FwID0gY2hpbGQyTjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgbmVlZHMgdG8gYmUgbW92ZWQsIHN3YXAgaXQsIGFuZCBjb250aW51ZS5cclxuICAgICAgICAgICAgaWYgKHN3YXAgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50W25dID0gdGhpcy5jb250ZW50W3N3YXBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50W3N3YXBdID0gZWxlbWVudDtcclxuICAgICAgICAgICAgICAgIG4gPSBzd2FwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIGRvbmUuXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydHMua2RUcmVlID0ga2RUcmVlO1xyXG5leHBvcnRzLkJpbmFyeUhlYXAgPSBCaW5hcnlIZWFwO1xyXG5cclxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiLy8gdG9kbzpcclxuLy8gICBtb3ZlIG91dCBzZXJpYWwgPyBPciBsb29rIGZvciBhIHNlcmlhbCByZWFkbGluZSBpbXBsZW1lbnRhdGlvbiA/Pz9cclxuLy8gYnVnczpcclxuLy8gICBkaXNjb25uZWN0IC0gRmFpbGVkIHRvIGV4ZWN1dGUgJ2Nsb3NlJyBvbiAnU2VyaWFsUG9ydCc6IENhbm5vdCBjYW5jZWwgYSBsb2NrZWQgc3RyZWFtXHJcblxyXG5pbXBvcnQgeyBQYWQgfSBmcm9tIFwiLi9wY2JcIjtcclxuXHJcbi8qKlxyXG4gKiBEZXZpY2U6IGFic3RyYWN0cyBhY2Nlc3MgdG8gbWFjaGluZS5cclxuICogSXQgXCJzaW1wbGlmaWVzXCIgc2VyaWFsIHBvcnQgYWNjZXNzLiBBdCB0aGUgbW9tZW50IGl0IG9ubHkgb2xsb3dzIFwid3JpdGUgYW5kIHJlc3BvbnNlXCIgc3R5bGUgY29tbXVuaWNhdGlvbi5cclxuICogVGhlIHNlcmlhbCBwb3J0IGlzIG9wZW5lZCwgdGhlbiBhIHJlYWRlciBsb29wIGlzIHN0YXJ0ZXQsIHdoaWNoIHB1c2hlcyBlYWNoIG5ldyBsaW5lIGludG8gdGhlIGlucHV0UXVldWUuXHJcbiAqIEZ1bmN0aW9uIHNlcmlhbFdyaXRlV2FpdCBpcyB1c2VkIHRvIGlzc3VlIGNvbW1hbmRzIGFuZCB3YWl0IGZvciB0aGUgZGV2aWNlIHRvIGFrbm93bGVkZ2UuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIERldmljZSB7XHJcbiAgICBkZXZpY2VDaGVjazogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlQ29ubmVjdDogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlRGlzY29ubmVjdDogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlSW5wdXRGb3JtOiBIVE1MRm9ybUVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlSW5mbzogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xyXG4gICAgZGV2aWNlTG9nOiBIVE1MRGl2RWxlbWVudCB8IG51bGw7XHJcbiAgICBkZXZpY2VTZXJpYWw6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcclxuICAgIHBvcnRzOiBhbnk7XHJcbiAgICBwb3J0OiBhbnk7XHJcbiAgICB0ZXh0RGVjb2RlcjogVGV4dERlY29kZXJTdHJlYW07XHJcbiAgICByZWFkZXI6IFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcjxzdHJpbmc+O1xyXG4gICAgaW5wdXRMYXN0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5wdXRRdWV1ZTogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRldmljZUNoZWNrID0gPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUNoZWNrXCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlQ29ubmVjdCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VDb25uZWN0XCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlRGlzY29ubmVjdCA9IDxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VEaXNjb25uZWN0XCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VJbnB1dFwiKTtcclxuICAgICAgICB0aGlzLmRldmljZUlucHV0Rm9ybSA9IDxIVE1MRm9ybUVsZW1lbnQgfCBudWxsPmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlSW5wdXRGb3JtXCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlSW5mbyA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VJbmZvXCIpO1xyXG4gICAgICAgIHRoaXMuZGV2aWNlTG9nID0gPEhUTUxEaXZFbGVtZW50IHwgbnVsbD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZUxvZ1wiKTtcclxuICAgICAgICB0aGlzLmRldmljZVNlcmlhbCA9IDxIVE1MRGl2RWxlbWVudCB8IG51bGw+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2VTZXJpYWxcIik7XHJcbiAgICAgICAgdGhpcy5wb3J0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyU3RyZWFtKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlQ2hlY2sgJiYgdGhpcy5kZXZpY2VDb25uZWN0ICYmIHRoaXMuZGV2aWNlRGlzY29ubmVjdCAmJiB0aGlzLmRldmljZUlucHV0ICYmIHRoaXMuZGV2aWNlSW5wdXRGb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlQ2hlY2sub25jbGljayA9IHRoaXMuc2VyaWFsQ2hlY2suYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VDb25uZWN0Lm9uY2xpY2sgPSB0aGlzLnNlcmlhbENvbm5lY3QuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VEaXNjb25uZWN0Lm9uY2xpY2sgPSB0aGlzLnNlcmlhbERpc2Nvbm5lY3QuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5kZXZpY2VEb3NvbWUub25jbGljayA9IHRoaXMuc2VyaWFsRG9zb21lLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZGV2aWNlSW5wdXQub25jaGFuZ2UgPSB0aGlzLnNlcmlhbElucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5wdXRGb3JtLm9uc3VibWl0ID0gdGhpcy5zZXJpYWxJbnB1dEZvcm0uYmluZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXJpYWxDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlISBTZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gdG8gWmVyby4gQWxsIGZ1cnRoZXIgY29tbWFuZHMgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzIHBvc2l0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0WmVybz8ocG9pbnQ6W251bWJlcixudW1iZXJdKTogdm9pZDtcclxuICAgICAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSEgTW92ZSB0byBwb3NpdGlvbi4gSWYgb25lIGNvb3JkaW5hdGUgaXMgdW5kZWZpbmVkLCBpdCdzIGlnbm9yZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1vdmVUbz8oeDpudW1iZXJ8dW5kZWZpbmVkLCB5Om51bWJlcnx1bmRlZmluZWQsIHo6bnVtYmVyfHVuZGVmaW5lZCwgZTogbnVtYmVyIHwgdW5kZWZpbmVkKTogdm9pZFxyXG4gICAgcHVibGljIG1vdmVUb0FsbD8ocGxpc3Q6IFBhZFtdLCBzdGFydDpbbnVtYmVyLG51bWJlcl0pO1xyXG5cclxuICAgIHB1YmxpYyBibG9iPygpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3ZlcndyaXRlIHRoaXMgaW4gZGVyaXZlZCBjbGFzcyB0byBnZXQgbm90aWZpY2F0aW9uIHdoZW4gc29tZSBkZXZpY2Ugd2FzIGNvbm5lY3RlZC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uU2VyaWFsQ29ubmVjdGVkPygpOnZvaWQ7XHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSB0aGlzIGluIGRlcml2ZWQgY2xhc3MgdG8gZ2V0IG5vdGlmaWNhdGlvbiB3aGVuIHNvbWUgZGV2aWNlIHdhcyBkaXNjb25uZWN0ZWQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvblNlcmlhbERpc2Nvbm5lY3RlZD8oKTp2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbnMgYSBkaWFsb2cgd2hlcmUgdXNlciBjYW4gc2VsZWN0IGEgZGV2aWNlIHRvIGNvbm5lY3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxDb25uZWN0KCkge1xyXG4gICAgICAgIC8vIG9wZW5zIGRpYWxvZyB3aGVyZSB1c2VyIGNhbiBzZWxlY3QgYSBkZXZpY2VcclxuICAgICAgICAoPGFueT5uYXZpZ2F0b3IpLnNlcmlhbC5yZXF1ZXN0UG9ydCgpLnRoZW4oKHBvcnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbENvbm5lY3QnLCBwb3J0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxQb3J0T3Blbihwb3J0KTtcclxuICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybignc2VyaWFsQ29ubmVjdCcscmVhc29uKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihyZWFzb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxDb25uZWN0RGV2aWNlKHZpZDogbnVtYmVyLCBwaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHBvcnQgb2YgdGhpcy5wb3J0cykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VyaWFsQ29ubmVjdERldmljZTogc2VyaWFsIGF2YWlsYWJsZSwgcG9ydHM6IGAsIHBvcnQuZ2V0SW5mbygpKTtcclxuICAgICAgICAgICAgY29uc3QgeyB1c2JQcm9kdWN0SWQsIHVzYlZlbmRvcklkIH0gPSBwb3J0LmdldEluZm8oKTtcclxuICAgICAgICAgICAgaWYgKHVzYlByb2R1Y3RJZCA9PSBwaWQgJiYgdXNiVmVuZG9ySWQgPT0gdmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcmlhbFBvcnRPcGVuKHBvcnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNjb25uZWN0IGZyb20gZGV2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxEaXNjb25uZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcnQpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5yZWFkZXIucmVsZWFzZUxvY2soKTsgLy8gZG9lcydudCBkbyBpdCA6KFxyXG4gICAgICAgICAgICB0aGlzLnBvcnQuY2xvc2UoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9ydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncG9ydCBjbG9zZWQnKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgV2FpdCB1bnRpbCBzb21lIHJlc3BvbnNlIG9yIHRpbWVvdXQsIHJldHVybnMgcmVzcG9uc2Ugb3IgJ3RpbWVvdXQnIG9yIG1pZ2h0IGZhaWwgd2l0aCAnYnVzeScgb3IgJ2Rpc2Nvbm5lY3RlZCdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNlcmlhbFdyaXRlV2FpdCh2YWx1ZTogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgPSAxMDAwMCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgLy8gY2xlYW4gc2VyaWFsIGlucHV0XHJcbiAgICAgICAgdGhpcy5pbnB1dFF1ZXVlID0gW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3J0KSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgc29tZSByZXNwb25zZSBvciB0aW1lb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVzdGVwID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heHRpbWUgPSB0aW1lb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICghYXZhaWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSA9IGF3YWl0IHRoaXMuc2VyaWFsQXZhaWwodGltZXN0ZXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXh0aW1lID0gbWF4dGltZSAtIHRpbWVzdGVwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF4dGltZSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZXJpYWxXcml0ZVdhaXQgYXZhaWw6JHthdmFpbGFibGV9IHRpbWU6JHt0aW1lb3V0IC0gbWF4dGltZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsV3JpdGVXYWl0IGNoZWNrOiAke3RoaXMuaW5wdXRRdWV1ZS5sZW5ndGh9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRRdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucCA9IDxzdHJpbmc+dGhpcy5pbnB1dFF1ZXVlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VyaWFsV3JpdGVXYWl0IHJlc29sdmU6ICR7aW5wfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlucCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFdyaXRlV2FpdCByZWplY3Q6IGApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ3RpbWVvdXQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ2J1c3knKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybih0aGlzLnBvcnQpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCdkaXNjb25uZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gd3JpdGUgYW55dGhpbmcgdG8gdGhlIGRldmljZS5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsSW5wdXRGb3JtKGV2ZW50OiBJbnB1dEV2ZW50KSB7IC8vIGZpcmVzIHdoZW4gcmV0dXJuIGlzIGVudGVyZWRcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VJbnB1dCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBmb3JtIHdpbGwgZG8gc3RyYW5nZSB0aGluZ3MgIVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsSW5wdXRDaGFuZ2UoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byB3cml0ZSBhbnl0aGluZyB0byB0aGUgZGV2aWNlLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxJbnB1dENoYW5nZShldmVudDogSW5wdXRFdmVudCkgeyAvLyBmaXJlcyB3aGVuIHJldHVybiBpcyBlbnRlcmVkXHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlSW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9ydCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSB0aGlzLmRldmljZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsV3JpdGUodGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NlcmlhbElucHV0Q2hhbmdlIC0gbm8gcG9ydCBvcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKiogcHJpdmF0ZSBzdHVmZiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXJpYWxDaGVjaygpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKFwic2VyaWFsXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUG9ydHMoKTtcclxuICAgICAgICAgICAgKDxhbnk+bmF2aWdhdG9yKS5zZXJpYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNvbm5lY3RcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBBdXRvbWF0aWNhbGx5IG9wZW4gZXZlbnQudGFyZ2V0IG9yIHdhcm4gdXNlciBhIHBvcnQgaXMgYXZhaWxhYmxlLlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbENoZWNrOmNvbm5lY3QnLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvcnRzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAoPGFueT5uYXZpZ2F0b3IpLnNlcmlhbC5hZGRFdmVudExpc3RlbmVyKFwiZGlzY29ubmVjdFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB8ZXZlbnQudGFyZ2V0fCBmcm9tIHRoZSBVSS5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzZXJpYWwgcG9ydCB3YXMgb3BlbmVkLCBhIHN0cmVhbSBlcnJvciB3b3VsZCBiZSBvYnNlcnZlZCBhcyB3ZWxsLlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlcmlhbENoZWNrOmRpc2Nvbm5lY3QnLCBldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignTm8gc2VyaWFsIEFQSSBhdmFpbGFibGUsIHRyeSBhbm90aGVyIGJyb3dzZXInKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihcIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBzZXJpYWwgcG9ydC4gQ29ubmVjdGlvbiB0byBkZXZpY2UgaW1wb3NzaWJsZSEgVXNlIENocm9tZSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQb3J0cygpIHtcclxuICAgICAgICAvLyBsaXN0cyBhbGwgcmVjZW50bHkgdXNlZCBwb3J0cywgY291bGQganVzdCBvcGVuIG9uZSB0aGVuLlxyXG4gICAgICAgICg8YW55Pm5hdmlnYXRvcikuc2VyaWFsLmdldFBvcnRzKCkudGhlbigocG9ydHMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZVBvcnRzOicsIHBvcnRzKTtcclxuICAgICAgICAgICAgdGhpcy5wb3J0cyA9IHBvcnRzO1xyXG4gICAgICAgICAgICBsZXQgaHRtbCA9ICcnOy8vZGV2aWNlczo8YnI+JztcclxuICAgICAgICAgICAgZm9yIChsZXQgcG9ydCBvZiBwb3J0cykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlcmlhbCBhdmFpbGFibGUsIHBvcnRzOiBgLCBwb3J0LmdldEluZm8oKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVzYlByb2R1Y3RJZCwgdXNiVmVuZG9ySWQgfSA9IHBvcnQuZ2V0SW5mbygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHVwZGF0ZVBvcnRzIHBvcnQgcGlkOiR7dXNiUHJvZHVjdElkfSB2aWQ6JHt1c2JWZW5kb3JJZH1gKTtcclxuICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXJcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLW1pY3JvY2hpcFwiPjwvaT4gcGlkOiR7dXNiUHJvZHVjdElkfSB2aWQ6JHt1c2JWZW5kb3JJZH0gPGJ1dHRvbiBjbGFzcz1cInczLWJ0biB3My1yb3VuZCB3My1saWdodC1ncmV5IHczLXRpbnlcIiBpZD1cIiR7dXNiVmVuZG9ySWR9LSR7dXNiUHJvZHVjdElkfVwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1Z1wiPjwvaT4gY29ubmVjdCA8L2J1dHRvbj48L2Rpdj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZUluZm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mby5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnRucyA9IHRoaXMuZGV2aWNlSW5mby5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJ0biBvZiBidG5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7IGNvbnN0IGlkcyA9IGJ0bi5pZC5zcGxpdCgnLScpOyBjb25zb2xlLmxvZyhpZHMpOyB0aGlzLnNlcmlhbENvbm5lY3REZXZpY2UocGFyc2VJbnQoaWRzWzBdKSwgcGFyc2VJbnQoaWRzWzFdKSkgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXZpY2VDb25uZWN0ICYmICh0aGlzLnBvcnRzID09IG51bGwgfHwgdGhpcy5wb3J0cy5sZW5ndGggPT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGVQb3J0czogb3BlbiBkZXYgYnV0dG9ucyEhIScsIHRoaXMuZGV2aWNlQ29ubmVjdC5jbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VDb25uZWN0LmNsYXNzTmFtZSA9IHRoaXMuZGV2aWNlQ29ubmVjdC5jbGFzc05hbWUucmVwbGFjZSgndzMtaGlkZScsICd3My1zaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW5zIGEgZ2l2dmVuIHBvcnQuIENhbiBiZSB1c2VkIGFmdGVyIHF1ZXJpaW5nIHBvcnRzIHdpdGggdXBkYXRlUG9ydHMuXHJcbiAgICAgKiBAcGFyYW0gcG9ydFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlcmlhbFBvcnRPcGVuKHBvcnQ6IGFueSkge1xyXG4gICAgICAgIHBvcnQub25jb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQ09OTkVDVEVEYCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwb3J0Lm9uZGlzY29ubmVjdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERJU0NPTk5FQ1RFRGApO1xyXG4gICAgICAgICAgICBpZih0aGlzLm9uU2VyaWFsRGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VyaWFsRGlzY29ubmVjdGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHBvcnQub3Blbih7IGJhdWRSYXRlOiAyNTAwMDAgfSkudGhlbigodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmljZUxvZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VMb2cuaW5uZXJIVE1MID0gXCJjb25uZWN0ZWQ8YnI+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BvcnQgb3BlbmVkID8gJywgdGhpcy5wb3J0KTtcclxuICAgICAgICAgICAgaWYodGhpcy5vblNlcmlhbENvbm5lY3RlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VyaWFsQ29ubmVjdGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5zZXJpYWxSZWFkLmJpbmQodGhpcyksIDApOyAvLyBzdGFydCByZWFkIGxvb3BcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKGVycm9yKTtcclxuICAgICAgICAgICAgdGhpcy5zZXJpYWxFcnJvcihlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2VyaWFsRXJyb3IoZXJyb3I6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybignc2VyaWFsRXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgaWYgKHRoaXMuZGV2aWNlTG9nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlTG9nLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInczLXJlZFwiPiR7ZXJyb3J9PC9zcGFuPjxicj5gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwsIHN0YXJ0cyB0aGUgcmVhZCBsaW5lIGxvb3AuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc2VyaWFsUmVhZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3J0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRhYmxlU3RyZWFtQ2xvc2VkID0gdGhpcy5wb3J0LnJlYWRhYmxlLnBpcGVUbyh0aGlzLnRleHREZWNvZGVyLndyaXRhYmxlKTtcclxuICAgICAgICAgICAgdGhpcy5yZWFkZXIgPSB0aGlzLnRleHREZWNvZGVyLnJlYWRhYmxlLmdldFJlYWRlcigpO1xyXG4gICAgICAgICAgICAvLyBMaXN0ZW4gdG8gZGF0YSBjb21pbmcgZnJvbSB0aGUgc2VyaWFsIGRldmljZS5cclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnNlcmlhbFJlYWRvbi5iaW5kKHRoaXMpLCAxKTsgLy8gd2lsbCBsb29wIHRoZXJlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwsIGhhbmRsZXMgdGhlIHJlYWQgbGluZSBsb29wLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIHNlcmlhbFJlYWRvbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBhd2FpdCB0aGlzLnJlYWRlci5yZWFkKCk7XHJcbiAgICAgICAgICAgIGlmIChkb25lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbGxvdyB0aGUgc2VyaWFsIHBvcnQgdG8gYmUgY2xvc2VkIGxhdGVyLiAvLyBEb2VzIG5vdCBoYXBwZW4gIVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkZXIucmVsZWFzZUxvY2soKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXJpYWxSZWFkIC0gZG9uZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHB1c2hlZFN0dWZmID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZSBpcyBhIHN0cmluZy5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKCdcXG4nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQXNzZXJ0aW9uIGZhaWxlZCAnLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07IC8vIHRoZXJlIGlzIGEgXFxuIGluIGl0ICFcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dExhc3QgKz0gdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0UXVldWUucHVzaCh0aGlzLmlucHV0TGFzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWFsTG9nKHRoaXMuaW5wdXRMYXN0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dExhc3QgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaGVkU3R1ZmYgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0TGFzdCA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFJlYWRvbiBsYXN0OiBcIiR7dGhpcy5pbnB1dExhc3R9XCJgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm8gXFxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dExhc3QgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHNlcmlhbFJlYWRvbiBsYXN0OiBcIiR7dGhpcy5pbnB1dExhc3R9XCJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHVzaGVkU3R1ZmYpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VyaWFsQ2FsbGJhY2suYmluZCh0aGlzKSwgNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VyaWFsUmVhZG9uLmJpbmQodGhpcyksIDEpOyAvLyB3aWxsIGxvb3AgdGhlcmVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VyaWFsRXJyb3IoZXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VyaWFsQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgLy8gY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXZpY2VMb2cnKTtcclxuICAgICAgICAvLyBpZiAoZWxlbSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgbGF0ZXN0ID0gdGhpcy5pbnB1dFF1ZXVlLnBvcCgpO1xyXG4gICAgICAgIC8vICAgICB3aGlsZSAobGF0ZXN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBlbGVtLmlubmVySFRNTCArPSBgJHtsYXRlc3R9PGJyPmA7XHJcbiAgICAgICAgLy8gICAgICAgICBsYXRlc3QgPSB0aGlzLmlucHV0UXVldWUucG9wKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBzZXJpYWxXcml0ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXJpYWxMb2codmFsdWUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gd3JpdGUuLi5cclxuICAgICAgICBsZXQgdXRmOEVuY29kZSA9IG5ldyBUZXh0RW5jb2RlcigpO1xyXG4gICAgICAgIGNvbnN0IHdyaXRlciA9IHRoaXMucG9ydC53cml0YWJsZS5nZXRXcml0ZXIoKTtcclxuICAgICAgICBhd2FpdCB3cml0ZXIud3JpdGUodXRmOEVuY29kZS5lbmNvZGUoYCR7dmFsdWV9XFxuYCkpO1xyXG4gICAgICAgIHdyaXRlci5yZWxlYXNlTG9jaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2FpdHMgdW50aWwgZGF0YSB3YXMgcmVhZCBvciB0aW1lb3V0XHJcbiAgICAgKiBAcGFyYW0gdGltZW91dFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXJpYWxBdmFpbCh0aW1lb3V0OiBudW1iZXIgPSAxMCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dFF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJpYWxMb2codGV4dDogc3RyaW5nLCBpbmNvbW1pbmc6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5kZXZpY2VTZXJpYWwpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuZGV2aWNlU2VyaWFsLmNoaWxkRWxlbWVudENvdW50ID4gMjApIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaCA9IHRoaXMuZGV2aWNlU2VyaWFsLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZVNlcmlhbC5yZW1vdmVDaGlsZChjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGluY29tbWluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXZpY2VTZXJpYWwuaW5uZXJIVE1MICs9IGA8ZGl2PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYXJyb3ctcmlnaHQtdG8tYnJhY2tldFwiPjwvaT4gJHt0ZXh0fTwvZGl2PmBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2aWNlU2VyaWFsLmlubmVySFRNTCArPSBgPGRpdj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFycm93LXVwLXJpZ2h0LWZyb20tc3F1YXJlXCI+PC9pPiAke3RleHR9PC9kaXY+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnbG9iYWxUaGlzLnJlc2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2tkVHJlZSwga2RUcmVlT2JqZWN0fSBmcm9tICcuL2tkVHJlZSc7XHJcblxyXG5jbGFzcyBCb3VuZGluZ0JveCB7XHJcbiAgICBtaW54OiBudW1iZXIgPSA5OTk5OTtcclxuICAgIG1pbnk6IG51bWJlciA9IDk5OTk5O1xyXG4gICAgbWF4eDogbnVtYmVyID0gLTk5OTk5O1xyXG4gICAgbWF4eTogbnVtYmVyID0gLTk5OTk5O1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuICAgIHVwZGF0ZUZyb21QYWQocGFkOlBhZCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHBhZC5wb3NYLCBwYWQucG9zWSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoeCA8IHRoaXMubWlueCkgdGhpcy5taW54ID0geDtcclxuICAgICAgICBpZiAoeSA8IHRoaXMubWlueSkgdGhpcy5taW55ID0geTtcclxuICAgICAgICBpZiAoeCA+IHRoaXMubWF4eCkgdGhpcy5tYXh4ID0geDtcclxuICAgICAgICBpZiAoeSA+IHRoaXMubWF4eSkgdGhpcy5tYXh5ID0geTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgYmI6ICR7dGhpcy5taW55fSAke3RoaXMubWF4eX0gJHt0aGlzLmNlbnRlcigpWzFdfWApO1xyXG4gICAgfVxyXG4gICAgY2VudGVyKHpvb206IG51bWJlciA9IDEuMCk6IFt4OiBudW1iZXIsIHk6IG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbKHRoaXMubWlueCArICh0aGlzLm1heHggLSB0aGlzLm1pbngpIC8gMikgKiB6b29tLCAodGhpcy5taW55ICsgKHRoaXMubWF4eSAtIHRoaXMubWlueSkgLyAyKSAqIHpvb21dO1xyXG4gICAgfVxyXG4gICAgemVybyh6b29tOiBudW1iZXIgPSAxLjApOiBbeDogbnVtYmVyLCB5OiBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMubWlueCAqIHpvb20sIHRoaXMubWlueSAqIHpvb21dO1xyXG4gICAgfVxyXG4gICAgc2l6ZSh6b29tOiBudW1iZXIgPSAxLjApOiBbeDogbnVtYmVyLCB5OiBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gWyh0aGlzLm1heHggLSB0aGlzLm1pbngpICogem9vbSwgKHRoaXMubWF4eSAtIHRoaXMubWlueSkgKiB6b29tXTtcclxuICAgIH1cclxuICAgIGRpYWdvbmFsKHpvb206IG51bWJlciA9IDEuMCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZSh6b29tKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHNpemVbMF0qc2l6ZVswXSArIHNpemVbMV0qc2l6ZVsxXSk7XHJcbiAgICB9XHJcbiAgICAvKiogQ2hlY2sgaWYgcGFkIGlzIGluc2lkZSB0aGUgYm91bmRpbmdib3ggKi9cclxuICAgIGluc2lkZShwYWQ6IFBhZCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChwYWQucG9zWCA+PSB0aGlzLm1pbnggJiYgcGFkLnBvc1ggPD0gdGhpcy5tYXh4KSAmJiAocGFkLnBvc1kgPj0gdGhpcy5taW55ICYmIHBhZC5wb3NZIDw9IHRoaXMubWF4eSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZFN0eWxlIHtcclxuICAgIHB1YmxpYyBmb3JtOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKGZvcm06IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZCB7XHJcbiAgICBwb3NYOiBudW1iZXI7XHJcbiAgICBwb3NZOiBudW1iZXI7XHJcbiAgICBzdHlsZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3Ioc3R5bGU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnBvc1ggPSB4O1xyXG4gICAgICAgIHRoaXMucG9zWSA9IHk7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xyXG4gICAgfVxyXG4gICAgYXNUdXBsZSgpOltudW1iZXIsbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnBvc1gsIHRoaXMucG9zWV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQQ0IgZXh0ZW5kcyBrZFRyZWVPYmplY3Qge1xyXG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgbWFwU3R5bGVzOiBNYXA8c3RyaW5nLCBQYWRTdHlsZT47XHJcbiAgICBtYXBQYWRzOiBNYXA8c3RyaW5nLCBTZXQ8UGFkPj47XHJcbiAgICBmaWxlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBtb3VzZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG1vdXNlU3RhcnRYOiBudW1iZXIgPSAwO1xyXG4gICAgbW91c2VTdGFydFk6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZU9mZlg6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZU9mZlk6IG51bWJlciA9IDA7XHJcbiAgICBtb3VzZVNlbGVjdDogYm9vbGVhbjtcclxuICAgIG1vdXNlU2VsZWN0WDogbnVtYmVyO1xyXG4gICAgbW91c2VTZWxlY3RZOiBudW1iZXI7XHJcblxyXG4gICAgcG9zWmVybzogbnVtYmVyW107XHJcblxyXG4gICAgem9vbTogbnVtYmVyID0gNS4wO1xyXG4gICAgYmJQY2I6IEJvdW5kaW5nQm94O1xyXG4gICAgYmJTZWxlY3Rpb246IEJvdW5kaW5nQm94O1xyXG4gICAgYmJaZXJvOiBCb3VuZGluZ0JveDsgLy8gdXNlIGNlbnRlciBhcyB6ZXJvXHJcblxyXG4gICAgdHJlZToga2RUcmVlPFBhZD47XHJcbiAgICBuZWFyZXN0OltQYWQsIG51bWJlcl1bXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tYXBTdHlsZXMgPSBuZXcgTWFwPHN0cmluZywgUGFkU3R5bGU+KCk7XHJcbiAgICAgICAgdGhpcy5tYXBQYWRzID0gbmV3IE1hcDxzdHJpbmcsIFNldDxQYWQ+PigpO1xyXG4gICAgICAgIHRoaXMuYmJQY2IgPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgICB0aGlzLmJiWmVybyA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgIHRoaXMuYmJTZWxlY3Rpb24gPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW52YXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIFplcm8gcG9zaXRpb24gdG8gdGhlIGxvd2VyIGxlZnQgb2Ygc2VsZWN0aW9uIHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFplcm8oKTp2b2lkIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdXNlIGxhc3Qgc2VsZWN0aW9uID8/P1xyXG4gICAgICAgIHRoaXMuYmJaZXJvID0gdGhpcy5iYlNlbGVjdGlvbjtcclxuICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBQY2I6c2V0WmVybzogJHt0aGlzLmJiWmVyby56ZXJvKCl9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBaZXJvIHBvc2l0aW9uIHJlbGF0aXZlIHRvIE9yaWdpbigwLDApLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0WmVybygpOltudW1iZXIsbnVtYmVyXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmJaZXJvLnplcm8oKTsgLy8gbG93ZXIgbGVmdCA/PyBiZXR0ZXIgd2hlbiAuY2VudGVyKCkgPz9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIEFsbCBQYWRzIGluIHNlbGVjdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNlbGVjdGVkKCk6UGFkW10ge1xyXG4gICAgICAgIGxldCByZXN1bHQ6UGFkW10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IG5lYXIgb2YgdGhpcy5uZWFyZXN0KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5lYXIpO1xyXG4gICAgICAgICAgICBpZihuZWFyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5lYXJbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBMb3dlciBsZWZ0IG9mIHNlbGVjdGlvbiBhcyB0dXBsZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWRaZXJvKCk6W251bWJlcixudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYlNlbGVjdGlvbi56ZXJvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBhZENvdW50KCk6bnVtYmVyIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICBmb3IobGV0IHBhZHNldCBvZiB0aGlzLm1hcFBhZHMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHBhZHNldFsxXS5zaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB6b29tVG9GaXQoc2l6ZTpbbnVtYmVyLG51bWJlcl0pIHtcclxuICAgICAgICBsZXQgcHNpemUgPSB0aGlzLmJiUGNiLnNpemUoKTtcclxuICAgICAgICBsZXQgencgPSBzaXplWzBdIC8gcHNpemVbMF07XHJcbiAgICAgICAgbGV0IHpoID0gc2l6ZVsxXSAvIHBzaXplWzFdO1xyXG4gICAgICAgIHRoaXMuem9vbSA9ICgoencgPiB6aCk/IHpoIDogencpICogLjk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFBjYjp6b29tVG9GaXQgem9vbSAke3RoaXMuem9vbX1gLCBwc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2VudGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlT2ZmWCA9IC0odGhpcy5iYlBjYi5jZW50ZXIoKVswXSAqIHRoaXMuem9vbSkgKyB0aGlzLmNhbnZhcy53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VPZmZZID0gLSh0aGlzLmJiUGNiLmNlbnRlcigpWzFdICogdGhpcy56b29tKSArIHRoaXMuY2FudmFzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRQYWRTdHlsZShuYW1lOiBzdHJpbmcsIGZvcm06IHN0cmluZywgdzogbnVtYmVyLCBoOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1hcFN0eWxlcy5zZXQobmFtZSwgbmV3IFBhZFN0eWxlKGZvcm0sIHcsIGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQYWQoc3R5bGU6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWFwUGFkcy5oYXMoc3R5bGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwUGFkcy5zZXQoc3R5bGUsIG5ldyBTZXQ8UGFkPigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhZHNldCA9IHRoaXMubWFwUGFkcy5nZXQoc3R5bGUpO1xyXG4gICAgICAgIGlmIChwYWRzZXQpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3cGFkID0gbmV3IFBhZChzdHlsZSwgeCwgeSk7XHJcbiAgICAgICAgICAgIHBhZHNldC5hZGQobmV3cGFkKTtcclxuICAgICAgICAgICAgdGhpcy5iYlBjYi51cGRhdGUoeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHJlZSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcGFkcyA6IFBhZFtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHBhZHNldHMgb2YgdGhpcy5tYXBQYWRzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwYWQgb2YgcGFkc2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZHMucHVzaChwYWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyZWUgPSBuZXcga2RUcmVlKFBDQiwgcGFkcywgUENCLmRpc3RhbmNlLCBbXCJwb3NYXCIsIFwicG9zWVwiXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cmVlIGJmOicsIHRoaXMudHJlZS5iYWxhbmNlRmFjdG9yKCkpO1xyXG5cclxuICAgICAgICB9IGNhdGNoKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmV2ZW50LmJ1dHRvbnNcclxuICAgICAgICBjb25zdCB0cmFucyA9IHRoaXMuY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIGlmKGV2ZW50LmJ1dHRvbiA9PSAwKSB7IC8vIHN0YXJ0IHNlbGVjdFxyXG4gICAgICAgICAgICBjb25zdCBteCA9IChldmVudC5jbGllbnRYICogdHJhbnMuYSAtIHRoaXMubW91c2VPZmZYKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgY29uc3QgbXkgPSAodGhpcy5jYW52YXMuaGVpZ2h0LShldmVudC5jbGllbnRZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wKSAtIHRoaXMubW91c2VPZmZZKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXJ0WCA9IG14O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU3RhcnRZID0gbXk7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RYID0gbXg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3RZID0gbXk7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUGNiOm1vdXNlRG93bjogeDoke3RoaXMubW91c2VTdGFydFh9IHk6JHt0aGlzLm1vdXNlU3RhcnRZfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihldmVudC5idXR0b24gIT0gMCkgeyAvLyBwYW4gYXJvdW5kXHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTdGFydFggPSBldmVudC5jbGllbnRYICogdHJhbnMuYSAtIHRoaXMubW91c2VPZmZYO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU3RhcnRZID0gZXZlbnQuY2xpZW50WSAqIHRyYW5zLmQgLSB0aGlzLm1vdXNlT2ZmWTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZUZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0cmFucyA9IHRoaXMuY3R4LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwY2I6bW91c2VVcCBldmVudDonLCBldmVudCk7XHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZUZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXZlbnQuYnV0dG9uID09IDApIHsgLy8gc2VsZWN0XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHJhbnMsIGV2ZW50KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJycsIHRoaXMuY2FudmFzLmhlaWdodC0oZXZlbnQuY2xpZW50WS10aGlzLmNhbnZhcy5vZmZzZXRUb3ApLCB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG14ID0gKGV2ZW50LmNsaWVudFggKiB0cmFucy5hIC0gdGhpcy5tb3VzZU9mZlgpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICBjb25zdCBteSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQtKGV2ZW50LmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3ApIC0gdGhpcy5tb3VzZU9mZlkpIC8gdGhpcy56b29tO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WCA9IG14O1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlU2VsZWN0WSA9IG15O1xyXG5cclxuICAgICAgICAgICAgLy8gYmIgPSBzZWxlY3RlZCByZWN0YW5nbGVcclxuICAgICAgICAgICAgdGhpcy5iYlNlbGVjdGlvbiA9IG5ldyBCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJiU2VsZWN0aW9uLnVwZGF0ZSh0aGlzLm1vdXNlU3RhcnRYLCB0aGlzLm1vdXNlU3RhcnRZKTtcclxuICAgICAgICAgICAgdGhpcy5iYlNlbGVjdGlvbi51cGRhdGUodGhpcy5tb3VzZVNlbGVjdFgsIHRoaXMubW91c2VTZWxlY3RZKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYWQgPSBuZXcgUGFkKCcnLCB0aGlzLmJiU2VsZWN0aW9uLmNlbnRlcigpWzBdLCB0aGlzLmJiU2VsZWN0aW9uLmNlbnRlcigpWzFdKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBjYjptb3VzZVVwIGN4OiR7cGFkLnBvc1h9IGN5OiR7cGFkLnBvc1l9IGRpYWdvbmFsOiR7dGhpcy5iYlNlbGVjdGlvbi5kaWFnb25hbCgpfWApO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy50cmVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQ6W1BhZCwgbnVtYmVyXVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzdCA9IHRoaXMuYmJTZWxlY3Rpb24uZGlhZ29uYWwoKTtcclxuICAgICAgICAgICAgICAgIGlmKGRpc3QgPCAwLjEpIHsgLy8gbm8gZHJhZyAtIG9ubHkgb25lXHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0aGlzLnRyZWUubmVhcmVzdChwYWQsIDEsIGRpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVhcmVzdCA9IGZvdW5kO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gKGRpc3QvMikgKiAoZGlzdC8yKTsgLy8gc2VhcmNoIHJlcXVpcmUgc3F1YXJlIGRpc3RhbmNlID9cclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRoaXMudHJlZS5uZWFyZXN0KHBhZCwgdGhpcy5nZXRQYWRDb3VudCgpLCBkaXN0KTsgLy8gdXV1aGhoIHVzZSBwYWQgY291bnQgIT9cclxuICAgICAgICAgICAgICAgICAgICBpZighZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBuZWFyIG9mIGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBtOiR7bXh9LCR7bXl9IG5lYXJlc3Q6JHtuZWFyWzBdLnBvc1h9LCR7bmVhclswXS5wb3NZfSAgZGlzdDoke01hdGguc3FydChuZWFyWzFdKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vIHV1dWhoaCBjaGVjayBpZiBpbnNpZGUgdGhlIGJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJiU2VsZWN0aW9uLmluc2lkZShuZWFyWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWFyZXN0LnB1c2gobmVhcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbmVlZCBhIGJiIGZvciBhY3R1YWwgc2VsZWN0ZWQgcG9pbnRzIHRvIGdldCB6ZXJvIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICBsZXQgYmJOZXdTZWxlY3Rpb24gPSBuZXcgQm91bmRpbmdCb3goKTtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBuZWFyIG9mIHRoaXMubmVhcmVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJiTmV3U2VsZWN0aW9uLnVwZGF0ZUZyb21QYWQobmVhclswXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJiU2VsZWN0aW9uID0gYmJOZXdTZWxlY3Rpb247XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFBjYjptb3VzZVVwIHNlbGVjdGlvbiBmb3VuZCAjJHtmb3VuZC5sZW5ndGh9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAvLyBvb29oaGggZG8gbm90IHRydXN0IGV2ZW50LmJ1dHRvbiwgaXQncyBhbHdheXMgMCBoZXJlICFcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncGNiOm1vdXNlTW92ZScsZXZlbnQpO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zID0gdGhpcy5jdHguZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgICAgaWYodGhpcy5tb3VzZUZsYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZU9mZlggPSBldmVudC5jbGllbnRYICogdHJhbnMuYSAtIHRoaXMubW91c2VTdGFydFg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VPZmZZID0gZXZlbnQuY2xpZW50WSAqIHRyYW5zLmQgLSB0aGlzLm1vdXNlU3RhcnRZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm1vdXNlU2VsZWN0ICkge1xyXG4gICAgICAgICAgICBjb25zdCBteCA9IChldmVudC5jbGllbnRYICogdHJhbnMuYSAtIHRoaXMubW91c2VPZmZYKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgY29uc3QgbXkgPSAodGhpcy5jYW52YXMuaGVpZ2h0LShldmVudC5jbGllbnRZIC0gdGhpcy5jYW52YXMub2Zmc2V0VG9wKSAtIHRoaXMubW91c2VPZmZZKSAvIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFggPSBteDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVNlbGVjdFkgPSBteTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZVdoZWVsKGV2ZW50OiBXaGVlbEV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnMgPSB0aGlzLmN0eC5nZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5kZWx0YVkpO1xyXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbSAqPSAxLjE7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubW91c2VPZmZYICo9IDAuOTtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb3VzZU9mZlkgKj0gMC45O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbSAqPSAwLjk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubW91c2VPZmZYICo9IDEuMTtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb3VzZU9mZlkgKj0gMS4xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG1vdXNlT3V0KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpc3RhbmNlKGE6UGFkLCBiOlBhZCkge1xyXG4gICAgICAgIHJldHVybiAoYS5wb3NYIC0gYi5wb3NYKSooYS5wb3NYIC0gYi5wb3NYKSArICAoYS5wb3NZIC0gYi5wb3NZKSooYS5wb3NZIC0gYi5wb3NZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICAvLyB0aGVvcmV0aXNjaCBzby4uLlxyXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdvcmFuZ2VyZWQnO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdhbnRpcXVld2hpdGUnO1xyXG5cclxuICAgICAgICAvLyBkcmF3IGJiIGNlbnRlclxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JlZCc7XHJcbiAgICAgICAgbGV0IGNlbnRlciA9IHRoaXMuYmJQY2IuY2VudGVyKHRoaXMuem9vbSk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKGNlbnRlclswXSAtIDEwICsgdGhpcy5tb3VzZU9mZlgsIGNlbnRlclsxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oY2VudGVyWzBdICsgMTAgKyB0aGlzLm1vdXNlT2ZmWCwgY2VudGVyWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhjZW50ZXJbMF0gKyB0aGlzLm1vdXNlT2ZmWCwgY2VudGVyWzFdIC0gMTAgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKGNlbnRlclswXSArIHRoaXMubW91c2VPZmZYLCBjZW50ZXJbMV0gKyAxMCArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICAvLyBkcmF3IGJiXHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLmJiUGNiLnplcm8odGhpcy56b29tKVswXSArIHRoaXMubW91c2VPZmZYLCB0aGlzLmJiUGNiLnplcm8odGhpcy56b29tKVsxXSArIHRoaXMubW91c2VPZmZZLCB0aGlzLmJiUGNiLnNpemUodGhpcy56b29tKVswXSwgdGhpcy5iYlBjYi5zaXplKHRoaXMuem9vbSlbMV0pO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwYWRzdHlsZSBvZiB0aGlzLm1hcFBhZHMua2V5cygpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHkgPSB0aGlzLm1hcFN0eWxlcy5nZXQocGFkc3R5bGUpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWRzZXQgPSB0aGlzLm1hcFBhZHMuZ2V0KHBhZHN0eWxlKTtcclxuICAgICAgICAgICAgaWYgKHN0eSAmJiBwYWRzZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN3ID0gc3R5LndpZHRoICogdGhpcy56b29tO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2ggPSBzdHkuaGVpZ2h0ICogdGhpcy56b29tO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcGFkIG9mIHBhZHNldC52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHkuZm9ybSA9PSAnUicgfHwgc3R5LmZvcm0gPT0gJ08nIHx8IHN0eS5mb3JtID09ICdSb3VuZFJlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWQucG9zWCAqIHRoaXMuem9vbSAtIHN3IC8gMi4wICsgdGhpcy5tb3VzZU9mZlgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWQucG9zWSAqIHRoaXMuem9vbSAtIHNoIC8gMi4wICsgdGhpcy5tb3VzZU9mZlksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdywgc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3R5LmZvcm0gPT0gJ0MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkLnBvc1ggKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZC5wb3NZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdyAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdyAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY3R4LmFyYyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZC5wb3NYICogdGhpcy56b29tIC0gc3cgLyAyLjAgKyB0aGlzLm1vdXNlT2ZmWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZC5wb3NZICogdGhpcy56b29tIC0gc2ggLyAyLjAgKyB0aGlzLm1vdXNlT2ZmWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN0eS53aWR0aCAqIHRoaXMuem9vbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBkcmF3IHF1YXRzY2ggJHtzdHkuZm9ybX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBmb3IgcGFkc3R5bGVcclxuXHJcbiAgICAgICAgLy8gZHJhdyBzZWxlY3Rpb25Dcm9zcyhlcylcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdwdXJwbGUnO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGxldCBjc2l6ZSA9IC41O1xyXG4gICAgICAgIGZvcihjb25zdCBuZWFyIG9mIHRoaXMubmVhcmVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oKG5lYXJbMF0ucG9zWC1jc2l6ZSkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgbmVhclswXS5wb3NZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oKG5lYXJbMF0ucG9zWCtjc2l6ZSkgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgbmVhclswXS5wb3NZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8obmVhclswXS5wb3NYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIChuZWFyWzBdLnBvc1krY3NpemUpICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8obmVhclswXS5wb3NYICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIChuZWFyWzBdLnBvc1ktY3NpemUpICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmVhcmVzdDoke25lYXJbMF0ucG9zWH0sJHtuZWFyWzBdLnBvc1l9ICBkaXN0OiR7TWF0aC5zcXJ0KG5lYXJbMV0pfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyBzZWxlY3Rpb24gbG93ZXIgbGVmdCA9IHplcm8ga2FuZGlkYXRlXHJcbiAgICAgICAgbGV0IHplcm8gPSBbMCwwXTtcclxuICAgICAgICBpZih0aGlzLmJiU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNzaXplID0gMiAqIHRoaXMuem9vbTtcclxuICAgICAgICAgICAgemVybyA9IHRoaXMuYmJTZWxlY3Rpb24uemVybyh0aGlzLnpvb20pO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHplcm9bMF0gLWNzaXplICsgdGhpcy5tb3VzZU9mZlgsIHplcm9bMV0gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh6ZXJvWzBdICtjc2l6ZSArIHRoaXMubW91c2VPZmZYLCB6ZXJvWzFdICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oemVyb1swXSArIHRoaXMubW91c2VPZmZYLCAgICAgemVyb1sxXS1jc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHplcm9bMF0gKyB0aGlzLm1vdXNlT2ZmWCwgICAgIHplcm9bMV0rY3NpemUgKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZHJhdyBvcmlnaW5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgemVybyA9IHRoaXMuYmJaZXJvLmNlbnRlcih0aGlzLnpvb20pO1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbygtY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbygrY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLm1vdXNlT2ZmWCwgICAgICAgLWNzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm1vdXNlT2ZmWCwgICAgICAgK2NzaXplICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IHplcm9cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XHJcbiAgICAgICAgemVybyA9IHRoaXMuYmJaZXJvLnplcm8odGhpcy56b29tKTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oemVyb1swXSAtY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgemVyb1sxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oemVyb1swXSArY3NpemUgKyB0aGlzLm1vdXNlT2ZmWCwgemVyb1sxXSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oemVyb1swXSArIHRoaXMubW91c2VPZmZYLCAgICAgemVyb1sxXS1jc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oemVyb1swXSArIHRoaXMubW91c2VPZmZYLCAgICAgemVyb1sxXStjc2l6ZSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGRyYXcgc2VsZWN0aW9uUmVjdGFuZ2xlXHJcbiAgICAgICAgaWYodGhpcy5tb3VzZVNlbGVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdwdXJwbGUnO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMubW91c2VTdGFydFggICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTdGFydFkgICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZVNlbGVjdFggKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZVN0YXJ0WSAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm1vdXNlU2VsZWN0WCAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZYLCB0aGlzLm1vdXNlU2VsZWN0WSAqIHRoaXMuem9vbSArIHRoaXMubW91c2VPZmZZKTtcclxuICAgICAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMubW91c2VTdGFydFggICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlgsIHRoaXMubW91c2VTZWxlY3RZICogdGhpcy56b29tICsgdGhpcy5tb3VzZU9mZlkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5tb3VzZVN0YXJ0WCAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWCwgdGhpcy5tb3VzZVN0YXJ0WSAgKiB0aGlzLnpvb20gKyB0aGlzLm1vdXNlT2ZmWSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSBcIi4vcGFyc2VyXCI7XHJcbmltcG9ydCB7IFBDQiB9IGZyb20gXCIuL3BjYlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlckdlcmJlciBleHRlbmRzIFBhcnNlciB7XHJcbiAgICByZU51bUZvcm1hdCA9IC9eJUZTTEFYKFswLTldKShbMC05XSlZKFswLTldKShbMC05XSlbKl0lLztcclxuICAgIHJlTWF0Y2hQYWQgPSAvXiglQUQpKERbMC05XSspKFtBLVphLXpdKylbLF0oWy0wLTkuXSspW1hdPyhbLTAtOS5dKyk/W1hdPyhbLTAtOS5dKyk/LztcclxuICAgIHJlTWF0Y2hQYWRDb29yZEluaXQgPSAvXihbREddWzAtOV0rKVsqXS87XHJcbiAgICByZU1hdGNoUGFkQ29vcmQgPSAvXlgoWy1dPykoWzAtOV0rKVkoWy1dPykoWzAtOV0rKUQoWzAtOV0rKVsqXS87XHJcbiAgICBfY2FuY2VsID0gZmFsc2U7XHJcbiAgICBmbG9hdEZyYWN0cyA9IDE7XHJcbiAgICBmbG9hdERlemlzID0gMTtcclxuICAgIGxhc3RQYWQgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBjYjogUENCKSB7XHJcbiAgICAgICAgc3VwZXIocGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFyc2VGaWxlKGZpbGU6IEZpbGUpOlByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBmaWxlLmFycmF5QnVmZmVyKCkudGhlbigoYnVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZiwgJ1VURi04JywgKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0dlcmJlclRleHQodGV4dCkuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbmNlbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcHJvY2Vzc0dlcmJlclRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGV4dCk7XHJcbiAgICAgICAgLy8gdHJhbnNsYXRlIGxpbmUgZW5kcy4uLlxyXG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcci9nLCAnJyk7IC8vIHJlbW92ZSB3aW5kb3dzIHRyYXNoXHJcbiAgICAgICAgY29uc3QgbGluZXMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcclxuXHJcbiAgICAgICAgbGV0IGxpbmVOciA9IDE7XHJcbiAgICAgICAgZm9yIChsZXQgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgICAgICBsaW5lTnIrKztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGdlcmJlcigke2xpbmVOcn0vJHtsaW5lcy5sZW5ndGh9KTogYCk7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnByb2Nlc3NHZXJiZXJMaW5lKGxpbmUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvY2Vzc0NCKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NDQihsaW5lTnIgKiAxMDAgLyBsaW5lcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gLy8gZm9yXHJcblxyXG4gICAgICAgIHRoaXMucGNiLnJldHJlZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBwcm9jZXNzR2VyYmVyTGluZShsaW5lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGxpbmUgPSBsaW5lLnJlcGxhY2UoL1xcbi9nLCc8YnI+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gWmFobGVuZm9ybWF0IGluZm8gbGluZSBcIiVGU0xBWDM0WTM0KiVcIlxyXG4gICAgICAgICAgICAgICAgLy8gICAlRlNMQVgyNVkyNSolIENvb3JkaW5hdGUgZm9ybWF0IHNwZWNpZmljYXRpb246XHJcbiAgICAgICAgICAgICAgICAvLyAgIENvb3JkaW5hdGVzIGZvcm1hdCBpcyAyLjU6XHJcbiAgICAgICAgICAgICAgICAvLyAgIDIgZGlnaXRzIGluIHRoZSBpbnRlZ2VyIHBhcnRcclxuICAgICAgICAgICAgICAgIC8vICAgNSBkaWdpdHMgaW4gdGhlIGZyYWN0aW9uYWwgcGFydFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hOdW1Gb3JtYXQgPSB0aGlzLnJlTnVtRm9ybWF0LmV4ZWMobGluZSk7IC8vbGluZS5tYXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoTnVtRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2hOdW1Gb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXREZXppcyA9IHBhcnNlSW50KG1hdGNoTnVtRm9ybWF0WzFdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0RnJhY3RzID0gcGFyc2VJbnQobWF0Y2hOdW1Gb3JtYXRbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnZXJiZXI6IGZsb2F0IGRpZ2l0cyA9ICR7dGhpcy5mbG9hdERlemlzfSAke3RoaXMuZmxvYXRGcmFjdHN9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHBhZCBkZWZpbml0aW9uc1xyXG4gICAgICAgICAgICAgICAgLy8gJUFERDIxUiwwLjYwMDAwMFgxLjA1MDAwMColXHJcbiAgICAgICAgICAgICAgICAvLyAlQUREMTBSb3VuZFJlY3QsMC4xMjAwMDAgWCAtMC4xODAwMDBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgWCAwLjY4MDAwMCBYIC0wLjE4MDAwMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgIFggLTAuNjgwMDAwIFggMC4xODAwMDBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICBYIC0wLjY4MDAwMCBYIDAuMTgwMDAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgIFggMC42ODAwMDAgWCAwKiVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoUGFkID0gdGhpcy5yZU1hdGNoUGFkLmV4ZWMobGluZSk7IC8vIGxpbmUubWF0Y2goKTsvLy8pO1xyXG4gICAgICAgICAgICAgICAgLy8gV2VubiBcIkNcIiBkYW5uIGdpYnRzIG51ciBlaW5lIGNvb3JkXHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaFBhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFkc0ZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFkc0ZpZWxkLmlubmVySFRNTCArPSBgJHttYXRjaFBhZFsyXX0gJHttYXRjaFBhZFszXX0gJHttYXRjaFBhZFs0XX0gJHttYXRjaFBhZFs1XX08YnI+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkWzNdID09ICdSb3VuZFJlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpY2FkIG1hY3JvIHNjaG51bGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGNiLmFkZFBhZFN0eWxlKG1hdGNoUGFkWzJdLCBtYXRjaFBhZFszXSwgTWF0aC5hYnMocGFyc2VGbG9hdChtYXRjaFBhZFs1XSkpLCBNYXRoLmFicyhwYXJzZUZsb2F0KG1hdGNoUGFkWzZdKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgZ2VyYmVyOiBzdHlsZSAke21hdGNoUGFkWzJdfSwke21hdGNoUGFkWzNdfSwgJHtNYXRoLmFicyhwYXJzZUZsb2F0KG1hdGNoUGFkWzVdKSl9LCAke01hdGguYWJzKHBhcnNlRmxvYXQobWF0Y2hQYWRbNl0pKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBjYi5hZGRQYWRTdHlsZShtYXRjaFBhZFsyXSwgbWF0Y2hQYWRbM10sIHBhcnNlRmxvYXQobWF0Y2hQYWRbNF0pLCBwYXJzZUZsb2F0KG1hdGNoUGFkWzVdKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXJiZXI6IHN0eWxlICR7bWF0Y2hQYWRbMl19LCR7bWF0Y2hQYWRbM119LCAke3BhcnNlRmxvYXQobWF0Y2hQYWRbNF0pfSwgJHtwYXJzZUZsb2F0KG1hdGNoUGFkWzVdKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRHh4KiBjb21tYW5kIC0gc2hvdWxkIGJlIHBhZCBkcmF3XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFBhZENvb3JkSW5pdCA9IHRoaXMucmVNYXRjaFBhZENvb3JkSW5pdC5leGVjKGxpbmUpOyAvL2xpbmUubWF0Y2goKTsvLy8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkQ29vcmRJbml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWF0Y2hQYWRDb29yZEluaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZCA9IG1hdGNoUGFkQ29vcmRJbml0WzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gYSBwYWQgbGluZTogXCJYMzc5OTg0WTk2MzkzMEQwMypcIlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hQYWRDb29yZCA9IHRoaXMucmVNYXRjaFBhZENvb3JkLmV4ZWMobGluZSk7IC8vIGxpbmUubWF0Y2goKTsvLy8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoUGFkQ29vcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0UGFkLnN0YXJ0c1dpdGgoJ0QnKSkgeyAvLyBpZ25vcmUgRzM2IG9yIHNvIGNvbW1hbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBhbmQgcmV0dXJuIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoUGFkQ29vcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ggPSBtYXRjaFBhZENvb3JkWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3kgPSBtYXRjaFBhZENvb3JkWzRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmZsb2F0RGV6aXMgKyB0aGlzLmZsb2F0RnJhY3RzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaWxsIGZyZWFrJ3MgbGVhZGluZyB6ZXJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3gubGVuZ3RoIDwgbGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeCA9IGAwJHtzeH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChzeS5sZW5ndGggPCBsZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5ID0gYDAke3N5fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBhIGZyZWFrJ24gZmxvYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ4ID0gMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnkgPSAwLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4ID0gYCR7c3guc3Vic3RyaW5nKDAsIHRoaXMuZmxvYXREZXppcyl9LiR7c3guc3Vic3RyaW5nKHRoaXMuZmxvYXREZXppcyl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3kgPSBgJHtzeS5zdWJzdHJpbmcoMCwgdGhpcy5mbG9hdERlemlzKX0uJHtzeS5zdWJzdHJpbmcodGhpcy5mbG9hdERlemlzKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmeCA9IHBhcnNlRmxvYXQoc3gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmeSA9IHBhcnNlRmxvYXQoc3kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hQYWRDb29yZFsxXSA9PSAnLScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ4ID0gZnggKiAtMS4wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFBhZENvb3JkWzNdID09ICctJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnkgPSBmeSAqIC0xLjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ5ID0gZnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3Jkc0ZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkc0ZpZWxkLmlubmVySFRNTCArPSBgJHt0aGlzLmxhc3RQYWR9OiAgeDoke2Z4fSB5OiR7Znl9IDxicj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGNiLmFkZFBhZCh0aGlzLmxhc3RQYWQsIGZ4LCBmeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBnZXJiZXI6IHBhZCAke2xhc3RQYWR9LCAke2Z4fSwgJHtmeX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaWdub3JpbmcgJHt0aGlzLmxhc3RQYWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZihsaW5lTnIgPiAxNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrOyAvLyBmb3IgdGVzdGluZyAhISFcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGNiLmNlbnRlcigpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDApOyAvLyB0aGlzIGVuYWJsZXMgdGhlIHByb2dyZXNzYmFyIC8gVUkgdXBkYXRlcyAhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZvdW5kIG9uIHNlIHdlYi4uLlxyXG5cclxuZnVuY3Rpb24gYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXIsIGVuY29kaW5nLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyXSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7XHJcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXZ0KSA9PiB7IGlmKGV2dC50YXJnZXQpIGNhbGxiYWNrKGV2dC50YXJnZXQucmVzdWx0KTsgfTtcclxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IsIGVuY29kaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5nVG9BcnJheUJ1ZmZlcihzdHJpbmcsIGVuY29kaW5nLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbc3RyaW5nXSwgeyB0eXBlOiAndGV4dC9wbGFpbjtjaGFyc2V0PScgKyBlbmNvZGluZyB9KTtcclxuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChldnQpID0+IHsgaWYoZXZ0LnRhcmdldCkgY2FsbGJhY2soZXZ0LnRhcmdldC5yZXN1bHQpOyB9O1xyXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xyXG59XHJcbiIsImltcG9ydCB7IFBDQiB9IGZyb20gJy4vcGNiJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG4gICAgcHVibGljIHByb2Nlc3NDQjogRnVuY3Rpb247XHJcblxyXG4gICAgcHVibGljIHBhZHNGaWVsZDogSFRNTEVsZW1lbnR8bnVsbDtcclxuICAgIHB1YmxpYyBjb29yZHNGaWVsZDogSFRNTEVsZW1lbnR8bnVsbDtcclxuXHJcbiAgICBwdWJsaWMgcGNiOiBQQ0I7XHJcbiAgICBjb25zdHJ1Y3RvcihwY2I6IFBDQikge1xyXG4gICAgICAgIHRoaXMucGNiID0gcGNiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwYXJzZUZpbGU/KGZpbGU6IEZpbGUpOlByb21pc2U8dm9pZD47IC8vIHZpcnR1YWwgIVxyXG4gICAgcHVibGljIGNhbmNlbD8oKTogdm9pZDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjk0ODA3M2UuanMubWFwIiwic291cmNlUm9vdCI6Ii9fX3BhcmNlbF9zb3VyY2Vfcm9vdC8ifQ==
