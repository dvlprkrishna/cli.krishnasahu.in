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
})({"gHDMI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        assetsToAccept = [];
        assetsToDispose = [];
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
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
var _utils = require("./utils");
var _typeShuffle = require("./typeShuffle");
(0, _utils.preloadFonts)("biu0hfr").then(()=>{
    document.body.classList.remove("loading");
    const textElement = document.querySelector(".content");
    const linkElement = document.querySelector(".effects");
    const linkElement1 = document.querySelector(".effects1");
    const ts = new (0, _typeShuffle.TypeShuffle)(textElement);
    const ts1 = new (0, _typeShuffle.TypeShuffle)(linkElement);
    const ts2 = new (0, _typeShuffle.TypeShuffle)(linkElement1);
    ts.trigger("fx6");
    ts1.trigger("fx5");
    ts2.trigger("fx5");
    function fx6() {
        return ts.trigger("fx6");
    }
    function fx4() {
        return ts2.trigger("fx6");
    }
    function fx5() {
        return ts1.trigger("fx5");
    }
    setInterval(fx6, 20000);
    setInterval(fx4, 20000);
    setInterval(fx5, 20000);
});

},{"./utils":"72Dku","./typeShuffle":"ky5hL"}],"72Dku":[function(require,module,exports) {
// Preload images
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preloadFonts", ()=>preloadFonts);
parcelHelpers.export(exports, "randomNumber", ()=>randomNumber);
const preloadFonts = (id)=>{
    return new Promise((resolve)=>{
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};
const randomNumber = (min, max)=>Math.floor(Math.random() * (max - min + 1)) + min;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"ky5hL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Class representing the TypeShuffle object
 */ parcelHelpers.export(exports, "TypeShuffle", ()=>TypeShuffle);
var _splittingCss = require("splitting/dist/splitting.css");
var _splittingCellsCss = require("splitting/dist/splitting-cells.css");
var _splitting = require("splitting");
var _splittingDefault = parcelHelpers.interopDefault(_splitting);
var _utils = require("./utils");
/**
 * Class representing one line
 */ class Line {
    // line position
    position = -1;
    // cells/chars
    cells = [];
    /**
	 * Constructor.
	 * @param {Element} DOM_el - the char element (<span>)
	 */ constructor(linePosition){
        this.position = linePosition;
    }
}
/**
 * Class representing one cell/char
 */ class Cell {
    // DOM elements
    DOM = {
        // the char element (<span>)
        el: null
    };
    // cell position
    position = -1;
    // previous cell position
    previousCellPosition = -1;
    // original innerHTML
    original;
    // current state/innerHTML
    state;
    color;
    originalColor;
    // cached values
    cache;
    /**
	 * Constructor.
	 * @param {Element} DOM_el - the char element (<span>)
	 */ constructor(DOM_el, { position , previousCellPosition  } = {}){
        this.DOM.el = DOM_el;
        this.original = this.DOM.el.innerHTML;
        this.state = this.original;
        this.color = this.originalColor = getComputedStyle(document.documentElement).getPropertyValue("--color-text");
        this.position = position;
        this.previousCellPosition = previousCellPosition;
    }
    /**
     * @param {string} value
     */ set(value) {
        this.state = value;
        this.DOM.el.innerHTML = this.state;
    }
}
class TypeShuffle {
    // DOM elements
    DOM = {
        // the main text element
        el: null
    };
    // array of Line objs
    lines = [];
    // array of letters and symbols
    lettersAndSymbols = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "!",
        "@",
        "#",
        "$",
        "&",
        "*",
        "(",
        ")",
        "-",
        "_",
        "+",
        "=",
        "/",
        "[",
        "]",
        "{",
        "}",
        ";",
        ":",
        "<",
        ">",
        ",",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ];
    // effects and respective methods
    effects = {
        "fx1": ()=>this.fx1(),
        "fx2": ()=>this.fx2(),
        "fx3": ()=>this.fx3(),
        "fx4": ()=>this.fx4(),
        "fx5": ()=>this.fx5(),
        "fx6": ()=>this.fx6()
    };
    totalChars = 0;
    /**
	 * Constructor.
	 * @param {Element} DOM_el - main text element
	 */ constructor(DOM_el){
        this.DOM.el = DOM_el;
        // Apply Splitting (two times to have lines, words and chars)
        const results = (0, _splittingDefault.default)({
            target: this.DOM.el,
            by: "lines"
        });
        results.forEach((s)=>(0, _splittingDefault.default)({
                target: s.words
            }));
        // for every line
        for (const [linePosition, lineArr] of results[0].lines.entries()){
            // create a new Line
            const line = new Line(linePosition);
            let cells = [];
            let charCount = 0;
            // for every word of each line
            for (const word of lineArr)// for every character of each line
            for (const char of [
                ...word.querySelectorAll(".char")
            ]){
                cells.push(new Cell(char, {
                    position: charCount,
                    previousCellPosition: charCount === 0 ? -1 : charCount - 1
                }));
                ++charCount;
            }
            line.cells = cells;
            this.lines.push(line);
            this.totalChars += charCount;
        }
    // TODO
    // window.addEventListener('resize', () => this.resize());
    }
    /**
     * clear all the cells chars
     */ clearCells() {
        for (const line of this.lines)for (const cell of line.cells)cell.set("&nbsp;");
    }
    /**
     * 
     * @returns {string} a random char from this.lettersAndSymbols
     */ getRandomChar() {
        return this.lettersAndSymbols[Math.floor(Math.random() * this.lettersAndSymbols.length)];
    }
    /**
     * Effect 1 - clear cells and animate each line cells (delays per line and per cell)
     */ fx1() {
        // max iterations for each cell to change the current value
        const MAX_CELL_ITERATIONS = 45;
        let finished = 0;
        // clear all cells values
        this.clearCells();
        // cell's loop animation
        // each cell will change its value MAX_CELL_ITERATIONS times
        const loop = (line, cell, iteration = 0)=>{
            // cache the previous value
            cell.cache = cell.state;
            // set back the original cell value if at the last iteration
            if (iteration === MAX_CELL_ITERATIONS - 1) {
                cell.set(cell.original);
                ++finished;
                if (finished === this.totalChars) this.isAnimating = false;
            } else if (cell.position === 0) // show specific characters for the first 9 iterations (looks cooler)
            cell.set(iteration < 9 ? [
                "*",
                "-",
                "'",
                '"'
            ][Math.floor(Math.random() * 4)] : this.getRandomChar());
            else cell.set(line.cells[cell.previousCellPosition].cache);
            // doesn't count if it's an empty space
            if (cell.cache != "&nbsp;") ++iteration;
            // repeat...
            if (iteration < MAX_CELL_ITERATIONS) setTimeout(()=>loop(line, cell, iteration), 15);
        };
        // set delays for each cell animation
        for (const line of this.lines)for (const cell of line.cells)setTimeout(()=>loop(line, cell), (line.position + 1) * 200);
    }
    fx2() {
        const MAX_CELL_ITERATIONS = 20;
        let finished = 0;
        const loop = (line, cell, iteration = 0)=>{
            if (iteration === MAX_CELL_ITERATIONS - 1) {
                cell.set(cell.original);
                cell.DOM.el.style.opacity = 0;
                setTimeout(()=>{
                    cell.DOM.el.style.opacity = 1;
                }, 300);
                ++finished;
                if (finished === this.totalChars) this.isAnimating = false;
            } else cell.set(this.getRandomChar());
            ++iteration;
            if (iteration < MAX_CELL_ITERATIONS) setTimeout(()=>loop(line, cell, iteration), 40);
        };
        for (const line of this.lines)for (const cell of line.cells)setTimeout(()=>loop(line, cell), (cell.position + 1) * 30);
    }
    fx3() {
        const MAX_CELL_ITERATIONS = 10;
        let finished = 0;
        this.clearCells();
        const loop = (line, cell, iteration = 0)=>{
            if (iteration === MAX_CELL_ITERATIONS - 1) {
                cell.set(cell.original);
                ++finished;
                if (finished === this.totalChars) this.isAnimating = false;
            } else cell.set(this.getRandomChar());
            ++iteration;
            if (iteration < MAX_CELL_ITERATIONS) setTimeout(()=>loop(line, cell, iteration), 80);
        };
        for (const line of this.lines)for (const cell of line.cells)setTimeout(()=>loop(line, cell), (0, _utils.randomNumber)(0, 2000));
    }
    fx4() {
        const MAX_CELL_ITERATIONS = 30;
        let finished = 0;
        this.clearCells();
        const loop = (line, cell, iteration = 0)=>{
            cell.cache = cell.state;
            if (iteration === MAX_CELL_ITERATIONS - 1) {
                cell.set(cell.original);
                ++finished;
                if (finished === this.totalChars) this.isAnimating = false;
            } else if (cell.position === 0) cell.set([
                "*",
                ":"
            ][Math.floor(Math.random() * 2)]);
            else cell.set(line.cells[cell.previousCellPosition].cache);
            if (cell.cache != "&nbsp;") ++iteration;
            if (iteration < MAX_CELL_ITERATIONS) setTimeout(()=>loop(line, cell, iteration), 15);
        };
        for (const line of this.lines)for (const cell of line.cells)setTimeout(()=>loop(line, cell), Math.abs(this.lines.length / 2 - line.position) * 400);
    }
    fx5() {
        // max iterations for each cell to change the current value
        const MAX_CELL_ITERATIONS = 30;
        let finished = 0;
        this.clearCells();
        const loop = (line, cell, iteration = 0)=>{
            cell.cache = {
                "state": cell.state,
                "color": cell.color
            };
            if (iteration === MAX_CELL_ITERATIONS - 1) {
                cell.color = cell.originalColor;
                cell.DOM.el.style.color = cell.color;
                cell.set(cell.original);
                ++finished;
                if (finished === this.totalChars) this.isAnimating = false;
            } else if (cell.position === 0) {
                cell.color = [
                    "#3e775d",
                    "#61dca3",
                    "#61b3dc"
                ][Math.floor(Math.random() * 3)];
                cell.DOM.el.style.color = cell.color;
                cell.set(iteration < 9 ? [
                    "*",
                    "-",
                    "'",
                    '"'
                ][Math.floor(Math.random() * 4)] : this.getRandomChar());
            } else {
                cell.set(line.cells[cell.previousCellPosition].cache.state);
                cell.color = line.cells[cell.previousCellPosition].cache.color;
                cell.DOM.el.style.color = cell.color;
            }
            if (cell.cache.state != "&nbsp;") ++iteration;
            if (iteration < MAX_CELL_ITERATIONS) setTimeout(()=>loop(line, cell, iteration), 10);
        };
        for (const line of this.lines)for (const cell of line.cells)setTimeout(()=>loop(line, cell), (line.position + 1) * 200);
    }
    fx6() {
        // max iterations for each cell to change the current value
        const MAX_CELL_ITERATIONS = 15;
        let finished = 0;
        const loop = (line, cell, iteration = 0)=>{
            cell.cache = {
                "state": cell.state,
                "color": cell.color
            };
            if (iteration === MAX_CELL_ITERATIONS - 1) {
                cell.set(cell.original);
                cell.color = cell.originalColor;
                cell.DOM.el.style.color = cell.color;
                ++finished;
                if (finished === this.totalChars) this.isAnimating = false;
            } else {
                cell.set(this.getRandomChar());
                cell.color = [
                    "#2b4539",
                    "#61dca3",
                    "#61b3dc"
                ][Math.floor(Math.random() * 3)];
                cell.DOM.el.style.color = cell.color;
            }
            ++iteration;
            if (iteration < MAX_CELL_ITERATIONS) setTimeout(()=>loop(line, cell, iteration), (0, _utils.randomNumber)(30, 110));
        };
        for (const line of this.lines)for (const cell of line.cells)setTimeout(()=>loop(line, cell), (line.position + 1) * 80);
    }
    /**
     * call the right effect method (defined in this.effects)
     * @param {string} effect - effect type
     */ trigger(effect = "fx1") {
        if (!(effect in this.effects) || this.isAnimating) return;
        this.isAnimating = true;
        this.effects[effect]();
    }
}

},{"splitting/dist/splitting.css":"3uR7n","splitting/dist/splitting-cells.css":"7jeGL","splitting":"77jB6","./utils":"72Dku","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3uR7n":[function() {},{}],"7jeGL":[function() {},{}],"77jB6":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    var root = document;
    var createText = root.createTextNode.bind(root);
    /**
 * # setProperty
 * Apply a CSS var
 * @param el{HTMLElement} 
 * @param varName {string} 
 * @param value {string|number}  
 */ function setProperty(el, varName, value) {
        el.style.setProperty(varName, value);
    }
    /**
 * 
 * @param {Node} el 
 * @param {Node} child 
 */ function appendChild(el, child) {
        return el.appendChild(child);
    }
    function createElement(parent, key, text, whitespace) {
        var el = root.createElement("span");
        key && (el.className = key);
        if (text) {
            !whitespace && el.setAttribute("data-" + key, text);
            el.textContent = text;
        }
        return parent && appendChild(parent, el) || el;
    }
    function getData(el, key) {
        return el.getAttribute("data-" + key);
    }
    /**
 * 
 * @param e {import('../types').Target} 
 * @param parent {HTMLElement}
 * @returns {HTMLElement[]}
 */ function $(e, parent) {
        return !e || e.length == 0 ? [] : e.nodeName ? [
            e
        ] : [].slice.call(e[0].nodeName ? e : (parent || root).querySelectorAll(e));
    }
    /**
 * Creates and fills an array with the value provided
 * @template {T}
 * @param {number} len
 * @param {() => T} valueProvider
 * @return {T}
 */ function Array2D(len) {
        var a = [];
        for(; len--;)a[len] = [];
        return a;
    }
    function each(items, fn) {
        items && items.some(fn);
    }
    function selectFrom(obj) {
        return function(key) {
            return obj[key];
        };
    }
    /**
 * # Splitting.index
 * Index split elements and add them to a Splitting instance.
 *
 * @param element {HTMLElement}
 * @param key {string}
 * @param items {HTMLElement[] | HTMLElement[][]}
 */ function index(element, key, items) {
        var prefix = "--" + key;
        var cssVar = prefix + "-index";
        each(items, function(items, i) {
            if (Array.isArray(items)) each(items, function(item) {
                setProperty(item, cssVar, i);
            });
            else setProperty(items, cssVar, i);
        });
        setProperty(element, prefix + "-total", items.length);
    }
    /**
 * @type {Record<string, import('./types').ISplittingPlugin>}
 */ var plugins = {};
    /**
 * @param by {string}
 * @param parent {string}
 * @param deps {string[]}
 * @return {string[]}
 */ function resolvePlugins(by, parent, deps) {
        // skip if already visited this dependency
        var index = deps.indexOf(by);
        if (index == -1) {
            // if new to dependency array, add to the beginning
            deps.unshift(by);
            // recursively call this function for all dependencies
            each(plugins[by].depends, function(p) {
                resolvePlugins(p, by, deps);
            });
        } else {
            // if this dependency was added already move to the left of
            // the parent dependency so it gets loaded in order
            var indexOfParent = deps.indexOf(parent);
            deps.splice(index, 1);
            deps.splice(indexOfParent, 0, by);
        }
        return deps;
    }
    /**
 * Internal utility for creating plugins... essentially to reduce
 * the size of the library
 * @param {string} by 
 * @param {string} key 
 * @param {string[]} depends 
 * @param {Function} split 
 * @returns {import('./types').ISplittingPlugin}
 */ function createPlugin(by, depends, key, split) {
        return {
            by: by,
            depends: depends,
            key: key,
            split: split
        };
    }
    /**
 *
 * @param by {string}
 * @returns {import('./types').ISplittingPlugin[]}
 */ function resolve(by) {
        return resolvePlugins(by, 0, []).map(selectFrom(plugins));
    }
    /**
 * Adds a new plugin to splitting
 * @param opts {import('./types').ISplittingPlugin}
 */ function add(opts) {
        plugins[opts.by] = opts;
    }
    /**
 * # Splitting.split
 * Split an element's textContent into individual elements
 * @param el {Node} Element to split
 * @param key {string}
 * @param splitOn {string}
 * @param includeSpace {boolean}
 * @returns {HTMLElement[]}
 */ function splitText(el, key, splitOn, includePrevious, preserveWhitespace) {
        // Combine any strange text nodes or empty whitespace.
        el.normalize();
        // Use fragment to prevent unnecessary DOM thrashing.
        var elements = [];
        var F = document.createDocumentFragment();
        if (includePrevious) elements.push(el.previousSibling);
        var allElements = [];
        $(el.childNodes).some(function(next) {
            if (next.tagName && !next.hasChildNodes()) {
                // keep elements without child nodes (no text and no children)
                allElements.push(next);
                return;
            }
            // Recursively run through child nodes
            if (next.childNodes && next.childNodes.length) {
                allElements.push(next);
                elements.push.apply(elements, splitText(next, key, splitOn, includePrevious, preserveWhitespace));
                return;
            }
            // Get the text to split, trimming out the whitespace
            /** @type {string} */ var wholeText = next.wholeText || "";
            var contents = wholeText.trim();
            // If there's no text left after trimming whitespace, continue the loop
            if (contents.length) {
                // insert leading space if there was one
                if (wholeText[0] === " ") allElements.push(createText(" "));
                // Concatenate the split text children back into the full array
                each(contents.split(splitOn), function(splitText, i) {
                    if (i && preserveWhitespace) allElements.push(createElement(F, "whitespace", " ", preserveWhitespace));
                    var splitEl = createElement(F, key, splitText);
                    elements.push(splitEl);
                    allElements.push(splitEl);
                });
                // insert trailing space if there was one
                if (wholeText[wholeText.length - 1] === " ") allElements.push(createText(" "));
            }
        });
        each(allElements, function(el) {
            appendChild(F, el);
        });
        // Clear out the existing element
        el.innerHTML = "";
        appendChild(el, F);
        return elements;
    }
    /** an empty value */ var _ = 0;
    function copy(dest, src) {
        for(var k in src)dest[k] = src[k];
        return dest;
    }
    var WORDS = "words";
    var wordPlugin = createPlugin(/*by: */ WORDS, /*depends: */ _, /*key: */ "word", /*split: */ function(el) {
        return splitText(el, "word", /\s+/, 0, 1);
    });
    var CHARS = "chars";
    var charPlugin = createPlugin(/*by: */ CHARS, /*depends: */ [
        WORDS
    ], /*key: */ "char", /*split: */ function(el, options, ctx) {
        var results = [];
        each(ctx[WORDS], function(word, i) {
            results.push.apply(results, splitText(word, "char", "", options.whitespace && i));
        });
        return results;
    });
    /**
 * # Splitting
 * 
 * @param opts {import('./types').ISplittingOptions} 
 */ function Splitting(opts) {
        opts = opts || {};
        var key = opts.key;
        return $(opts.target || "[data-splitting]").map(function(el) {
            var ctx = el["\uD83C\uDF4C"];
            if (!opts.force && ctx) return ctx;
            ctx = el["\uD83C\uDF4C"] = {
                el: el
            };
            var items = resolve(opts.by || getData(el, "splitting") || CHARS);
            var opts2 = copy({}, opts);
            each(items, function(plugin) {
                if (plugin.split) {
                    var pluginBy = plugin.by;
                    var key2 = (key ? "-" + key : "") + plugin.key;
                    var results = plugin.split(el, opts2, ctx);
                    key2 && index(el, key2, results);
                    ctx[pluginBy] = results;
                    el.classList.add(pluginBy);
                }
            });
            el.classList.add("splitting");
            return ctx;
        });
    }
    /**
 * # Splitting.html
 * 
 * @param opts {import('./types').ISplittingOptions}
 */ function html(opts) {
        opts = opts || {};
        var parent = opts.target = createElement();
        parent.innerHTML = opts.content;
        Splitting(opts);
        return parent.outerHTML;
    }
    Splitting.html = html;
    Splitting.add = add;
    function detectGrid(el, options, side) {
        var items = $(options.matching || el.children, el);
        var c = {};
        each(items, function(w) {
            var val = Math.round(w[side]);
            (c[val] || (c[val] = [])).push(w);
        });
        return Object.keys(c).map(Number).sort(byNumber).map(selectFrom(c));
    }
    function byNumber(a, b) {
        return a - b;
    }
    var linePlugin = createPlugin(/*by: */ "lines", /*depends: */ [
        WORDS
    ], /*key: */ "line", /*split: */ function(el, options, ctx) {
        return detectGrid(el, {
            matching: ctx[WORDS]
        }, "offsetTop");
    });
    var itemPlugin = createPlugin(/*by: */ "items", /*depends: */ _, /*key: */ "item", /*split: */ function(el, options) {
        return $(options.matching || el.children, el);
    });
    var rowPlugin = createPlugin(/*by: */ "rows", /*depends: */ _, /*key: */ "row", /*split: */ function(el, options) {
        return detectGrid(el, options, "offsetTop");
    });
    var columnPlugin = createPlugin(/*by: */ "cols", /*depends: */ _, /*key: */ "col", /*split: */ function(el, options) {
        return detectGrid(el, options, "offsetLeft");
    });
    var gridPlugin = createPlugin(/*by: */ "grid", /*depends: */ [
        "rows",
        "cols"
    ]);
    var LAYOUT = "layout";
    var layoutPlugin = createPlugin(/*by: */ LAYOUT, /*depends: */ _, /*key: */ _, /*split: */ function(el, opts) {
        // detect and set options
        var rows = opts.rows = +(opts.rows || getData(el, "rows") || 1);
        var columns = opts.columns = +(opts.columns || getData(el, "columns") || 1);
        // Seek out the first <img> if the value is true 
        opts.image = opts.image || getData(el, "image") || el.currentSrc || el.src;
        if (opts.image) {
            var img = $("img", el)[0];
            opts.image = img && (img.currentSrc || img.src);
        }
        // add optional image to background
        if (opts.image) setProperty(el, "background-image", "url(" + opts.image + ")");
        var totalCells = rows * columns;
        var elements = [];
        var container = createElement(_, "cell-grid");
        while(totalCells--){
            // Create a span
            var cell = createElement(container, "cell");
            createElement(cell, "cell-inner");
            elements.push(cell);
        }
        // Append elements back into the parent
        appendChild(el, container);
        return elements;
    });
    var cellRowPlugin = createPlugin(/*by: */ "cellRows", /*depends: */ [
        LAYOUT
    ], /*key: */ "row", /*split: */ function(el, opts, ctx) {
        var rowCount = opts.rows;
        var result = Array2D(rowCount);
        each(ctx[LAYOUT], function(cell, i, src) {
            result[Math.floor(i / (src.length / rowCount))].push(cell);
        });
        return result;
    });
    var cellColumnPlugin = createPlugin(/*by: */ "cellColumns", /*depends: */ [
        LAYOUT
    ], /*key: */ "col", /*split: */ function(el, opts, ctx) {
        var columnCount = opts.columns;
        var result = Array2D(columnCount);
        each(ctx[LAYOUT], function(cell, i) {
            result[i % columnCount].push(cell);
        });
        return result;
    });
    var cellPlugin = createPlugin(/*by: */ "cells", /*depends: */ [
        "cellRows",
        "cellColumns"
    ], /*key: */ "cell", /*split: */ function(el, opt, ctx) {
        // re-index the layout as the cells
        return ctx[LAYOUT];
    });
    // install plugins
    // word/char plugins
    add(wordPlugin);
    add(charPlugin);
    add(linePlugin);
    // grid plugins
    add(itemPlugin);
    add(rowPlugin);
    add(columnPlugin);
    add(gridPlugin);
    // cell-layout plugins
    add(layoutPlugin);
    add(cellRowPlugin);
    add(cellColumnPlugin);
    add(cellPlugin);
    return Splitting;
});

},{}]},["gHDMI","ebWYT"], "ebWYT", "parcelRequired986")

//# sourceMappingURL=index.739bf03c.js.map
