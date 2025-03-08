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
        globalObject
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
})({"eq8kL":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"6rimH":[function(require,module,exports,__globalThis) {
document.addEventListener('DOMContentLoaded', ()=>{
    // Update times every second
    updateTimes();
    setInterval(updateTimes, 1000);
});
function updateTimes() {
    // Get current local time
    const now = new Date();
    // Display local time
    document.getElementById('local-time').textContent = formatTime(now);
    // Calculate and display India time (IST is UTC+5:30)
    const indiaTime = getIndiaTime(now);
    document.getElementById('india-time').textContent = formatTime(indiaTime, true);
    // Check if India is working
    const isWorking = isIndiaWorking(indiaTime);
    // Update status display
    updateStatus(isWorking, now, indiaTime);
}
function getIndiaTime(localTime) {
    // Create a new date object with the current time
    const indiaTime = new Date(localTime);
    // Get the local time zone offset in minutes and convert to milliseconds
    const localOffset = localTime.getTimezoneOffset() * 60000;
    // IST is UTC+5:30 (330 minutes ahead of UTC)
    const istOffset = 19800000;
    // Adjust the time to IST
    indiaTime.setTime(indiaTime.getTime() + localOffset + istOffset);
    return indiaTime;
}
function isIndiaWorking(indiaTime) {
    const day = indiaTime.getDay();
    const hours = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();
    // Convert time to decimal hours for easier comparison
    const timeInDecimal = hours + minutes / 60;
    // Check if it's a weekday (Monday to Friday)
    const isWeekday = day >= 1 && day <= 5;
    // Check if it's between 9:00 AM and 6:00 PM IST
    const isDuringWorkHours = timeInDecimal >= 9 && timeInDecimal < 18;
    // Check if it's a public holiday
    const isHoliday = isIndianHoliday(indiaTime);
    return isWeekday && isDuringWorkHours && !isHoliday;
}
function isIndianHoliday(date) {
    // Get date components
    const day = date.getDate();
    const month = date.getMonth() + 1; // JavaScript months are 0-indexed
    const year = date.getFullYear();
    // Set of major Indian national holidays (fixed dates)
    // Format: "MM-DD"
    const fixedHolidays = {
        "01-26": "Republic Day",
        "08-15": "Independence Day",
        "10-02": "Gandhi Jayanti",
        "12-25": "Christmas"
    };
    // Check if today is a fixed holiday
    const dateKey = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    if (fixedHolidays[dateKey]) return true;
    // Variable holidays by year
    // These change each year based on lunar calendar, religious observations, etc.
    const variableHolidays = {
        // 2023 holidays
        "2023": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-08": "Holi",
            "04-07": "Good Friday",
            "04-22": "Eid ul-Fitr",
            "06-29": "Eid al-Adha",
            "08-30": "Raksha Bandhan",
            "09-07": "Janmashtami",
            "10-24": "Dussehra",
            "11-12": "Diwali",
            "11-27": "Guru Nanak Jayanti"
        },
        // 2024 holidays
        "2024": {
            "01-01": "New Year's Day",
            "01-15": "Makar Sankranti",
            "03-25": "Holi",
            "03-29": "Good Friday",
            "04-11": "Eid ul-Fitr",
            "06-17": "Eid al-Adha",
            "08-19": "Raksha Bandhan",
            "08-26": "Janmashtami",
            "10-12": "Dussehra",
            "11-01": "Diwali",
            "11-15": "Guru Nanak Jayanti"
        },
        // 2025 holidays
        "2025": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-14": "Holi",
            "04-18": "Good Friday",
            "04-01": "Eid ul-Fitr",
            "06-07": "Eid al-Adha",
            "08-09": "Raksha Bandhan",
            "08-15": "Janmashtami",
            "10-02": "Dussehra",
            "10-21": "Diwali",
            "11-05": "Guru Nanak Jayanti"
        },
        // 2026 holidays (projected dates)
        "2026": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-04": "Holi",
            "04-03": "Good Friday",
            "03-22": "Eid ul-Fitr",
            "05-29": "Eid al-Adha",
            "07-29": "Raksha Bandhan",
            "08-05": "Janmashtami",
            "09-21": "Dussehra",
            "10-10": "Diwali",
            "10-24": "Guru Nanak Jayanti"
        },
        // 2027 holidays (projected dates)
        "2027": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-24": "Holi",
            "03-26": "Good Friday",
            "03-12": "Eid ul-Fitr",
            "05-19": "Eid al-Adha",
            "08-17": "Raksha Bandhan",
            "08-25": "Janmashtami",
            "10-10": "Dussehra",
            "10-29": "Diwali",
            "11-13": "Guru Nanak Jayanti"
        },
        // 2028 holidays (projected dates)
        "2028": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-12": "Holi",
            "04-14": "Good Friday",
            "02-29": "Eid ul-Fitr",
            "05-07": "Eid al-Adha",
            "08-06": "Raksha Bandhan",
            "08-13": "Janmashtami",
            "09-28": "Dussehra",
            "10-17": "Diwali",
            "11-02": "Guru Nanak Jayanti"
        },
        // 2029 holidays (projected dates)
        "2029": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-02": "Holi",
            "03-30": "Good Friday",
            "02-18": "Eid ul-Fitr",
            "04-27": "Eid al-Adha",
            "07-26": "Raksha Bandhan",
            "08-02": "Janmashtami",
            "09-18": "Dussehra",
            "10-06": "Diwali",
            "10-22": "Guru Nanak Jayanti"
        },
        // 2030 holidays (projected dates)
        "2030": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-21": "Holi",
            "04-19": "Good Friday",
            "02-07": "Eid ul-Fitr",
            "04-16": "Eid al-Adha",
            "08-15": "Raksha Bandhan",
            "08-22": "Janmashtami",
            "10-08": "Dussehra",
            "10-26": "Diwali",
            "11-10": "Guru Nanak Jayanti"
        }
    };
    // Check if today is a variable holiday for the current year
    if (variableHolidays[year] && variableHolidays[year][dateKey]) return true;
    // Not a holiday
    return false;
}
function updateStatus(isWorking, localTime, indiaTime) {
    const statusElement = document.getElementById('status');
    const statusContainer = document.getElementById('status-container');
    const timeUntilElement = document.getElementById('time-until');
    // Check if today is a holiday
    const holidayName = getHolidayName(indiaTime);
    if (isWorking) {
        statusElement.textContent = 'YES, INDIA IS WORKING RIGHT NOW';
        statusContainer.className = 'status-container working';
        // Calculate time until India stops working
        const timeUntil = getTimeUntilStatusChange(indiaTime, true);
        const stopWorkingLocalTime = new Date(localTime.getTime() + timeUntil.milliseconds);
        timeUntilElement.innerHTML = `India will stop working in <strong>${timeUntil.hours === 0 ? '' : timeUntil.hours + ' hour' + (timeUntil.hours !== 1 ? 's' : '') + ' and '}${timeUntil.minutes} minute${timeUntil.minutes !== 1 ? 's' : ''}</strong>.<br>
        That's at <strong>${formatTime(stopWorkingLocalTime)}</strong> your local time.`;
    } else {
        statusElement.textContent = 'NO, INDIA IS NOT WORKING RIGHT NOW';
        statusContainer.className = 'status-container not-working';
        // Add holiday information if applicable
        if (holidayName && isWeekday(indiaTime) && isDuringWorkHours(indiaTime)) statusElement.textContent += ` (${holidayName})`;
        // Calculate time until India starts working
        const timeUntil = getTimeUntilStatusChange(indiaTime, false);
        const startWorkingLocalTime = new Date(localTime.getTime() + timeUntil.milliseconds);
        timeUntilElement.innerHTML = `India will start working in <strong>${timeUntil.hours === 0 ? '' : timeUntil.hours + ' hour' + (timeUntil.hours !== 1 ? 's' : '') + ' and '}${timeUntil.minutes} minute${timeUntil.minutes !== 1 ? 's' : ''}</strong>.<br>
        That's at <strong>${formatTime(startWorkingLocalTime)}</strong> your local time.`;
    }
}
function getHolidayName(date) {
    // Get date components
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateKey = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    // Fixed holidays
    const fixedHolidays = {
        "01-26": "Republic Day",
        "08-15": "Independence Day",
        "10-02": "Gandhi Jayanti",
        "12-25": "Christmas"
    };
    if (fixedHolidays[dateKey]) return fixedHolidays[dateKey];
    // Variable holidays by year
    const variableHolidays = {
        // 2023 holidays
        "2023": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-08": "Holi",
            "04-07": "Good Friday",
            "04-22": "Eid ul-Fitr",
            "06-29": "Eid al-Adha",
            "08-30": "Raksha Bandhan",
            "09-07": "Janmashtami",
            "10-24": "Dussehra",
            "11-12": "Diwali",
            "11-27": "Guru Nanak Jayanti"
        },
        // 2024 holidays
        "2024": {
            "01-01": "New Year's Day",
            "01-15": "Makar Sankranti",
            "03-25": "Holi",
            "03-29": "Good Friday",
            "04-11": "Eid ul-Fitr",
            "06-17": "Eid al-Adha",
            "08-19": "Raksha Bandhan",
            "08-26": "Janmashtami",
            "10-12": "Dussehra",
            "11-01": "Diwali",
            "11-15": "Guru Nanak Jayanti"
        },
        // 2025 holidays
        "2025": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-14": "Holi",
            "04-18": "Good Friday",
            "04-01": "Eid ul-Fitr",
            "06-07": "Eid al-Adha",
            "08-09": "Raksha Bandhan",
            "08-15": "Janmashtami",
            "10-02": "Dussehra",
            "10-21": "Diwali",
            "11-05": "Guru Nanak Jayanti"
        },
        // 2026 holidays (projected dates)
        "2026": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-04": "Holi",
            "04-03": "Good Friday",
            "03-22": "Eid ul-Fitr",
            "05-29": "Eid al-Adha",
            "07-29": "Raksha Bandhan",
            "08-05": "Janmashtami",
            "09-21": "Dussehra",
            "10-10": "Diwali",
            "10-24": "Guru Nanak Jayanti"
        },
        // 2027 holidays (projected dates)
        "2027": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-24": "Holi",
            "03-26": "Good Friday",
            "03-12": "Eid ul-Fitr",
            "05-19": "Eid al-Adha",
            "08-17": "Raksha Bandhan",
            "08-25": "Janmashtami",
            "10-10": "Dussehra",
            "10-29": "Diwali",
            "11-13": "Guru Nanak Jayanti"
        },
        // 2028 holidays (projected dates)
        "2028": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-12": "Holi",
            "04-14": "Good Friday",
            "02-29": "Eid ul-Fitr",
            "05-07": "Eid al-Adha",
            "08-06": "Raksha Bandhan",
            "08-13": "Janmashtami",
            "09-28": "Dussehra",
            "10-17": "Diwali",
            "11-02": "Guru Nanak Jayanti"
        },
        // 2029 holidays (projected dates)
        "2029": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-02": "Holi",
            "03-30": "Good Friday",
            "02-18": "Eid ul-Fitr",
            "04-27": "Eid al-Adha",
            "07-26": "Raksha Bandhan",
            "08-02": "Janmashtami",
            "09-18": "Dussehra",
            "10-06": "Diwali",
            "10-22": "Guru Nanak Jayanti"
        },
        // 2030 holidays (projected dates)
        "2030": {
            "01-01": "New Year's Day",
            "01-14": "Makar Sankranti",
            "03-21": "Holi",
            "04-19": "Good Friday",
            "02-07": "Eid ul-Fitr",
            "04-16": "Eid al-Adha",
            "08-15": "Raksha Bandhan",
            "08-22": "Janmashtami",
            "10-08": "Dussehra",
            "10-26": "Diwali",
            "11-10": "Guru Nanak Jayanti"
        }
    };
    if (variableHolidays[year] && variableHolidays[year][dateKey]) return variableHolidays[year][dateKey];
    return null;
}
function isWeekday(date) {
    const day = date.getDay();
    return day >= 1 && day <= 5;
}
function isDuringWorkHours(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeInDecimal = hours + minutes / 60;
    return timeInDecimal >= 9 && timeInDecimal < 18;
}
function getTimeUntilStatusChange(indiaTime, isCurrentlyWorking) {
    const day = indiaTime.getDay();
    const currentHours = indiaTime.getHours();
    const currentMinutes = indiaTime.getMinutes();
    let millisUntilChange = 0;
    if (isCurrentlyWorking) // Calculate time until 6:00 PM today (end of workday)
    millisUntilChange = ((18 - currentHours - 1) * 60 + (60 - currentMinutes)) * 60000;
    else {
        // If it's after work hours on a weekday
        if (day >= 1 && day <= 5 && currentHours >= 18) // Time until 9:00 AM next day
        millisUntilChange = ((24 - currentHours + 9 - 1) * 60 + (60 - currentMinutes)) * 60000;
        else if (day >= 1 && day <= 5 && currentHours < 9) // Time until 9:00 AM today
        millisUntilChange = ((9 - currentHours - 1) * 60 + (60 - currentMinutes)) * 60000;
        else {
            // Calculate days until Monday
            let daysUntilMonday = day === 0 ? 1 : 8 - day;
            // Time until 9:00 AM on Monday
            millisUntilChange = daysUntilMonday * 86400000 - (currentHours * 60 + currentMinutes) * 60000 + 32400000;
        }
    }
    // Convert milliseconds to hours and minutes
    const totalMinutes = Math.floor(millisUntilChange / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return {
        hours,
        minutes,
        milliseconds: millisUntilChange
    };
}
function formatTime(date, isIndiaTime = false) {
    // Different formatting for local time vs. India time
    if (isIndiaTime) // For India time, explicitly mention IST
    return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    }).format(date) + ' IST';
    else // For local time, use the browser's timezone
    return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZoneName: 'short'
    }).format(date);
}

},{}]},["eq8kL","6rimH"], "6rimH", "parcelRequire94c2")

//# sourceMappingURL=index.8cfc62b9.js.map
