// Compiles a dart2wasm-generated main module from `source` which can then
// be instantiated via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm module from `bytes` which is then
// instantiable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredModules` is a JS function that takes an array of module names
  //   matching wasm files produced by the dart2wasm compiler. It also takes a
  //   callback that should be invoked for each loaded module with 2 arguments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDeferredId` is a JS function that takes load ID produced by the
  //   compiler when the `use-load-ids` option is passed. Each load ID maps to
  //   one or more wasm files as specified in the emitted JSON file. It also
  //   takes a callback that should be invoked for each loaded module with 2
  //   arguments: (1) the module name, (2) the loaded module in a format
  //   supported by `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  //   The callback returns a Promise that resolves when the module is
  //   instantiated.
  //   loadDeferredId should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  async instantiate(additionalImports, {loadDeferredModules, loadDeferredId} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            AB: x0 => new Int16Array(x0),
      AC: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      AD: x0 => x0.width,
      AE: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      AF: x0 => x0.wheelDeltaX,
      AG: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      AH: (x0,x1) => x0.add(x1),
      AI: x0 => x0.offsetWidth,
      AJ: x0 => x0.displayWidth,
      AK: () => globalThis.document,
      AL: x0 => x0.code,
      AM: x0 => x0.decode(),
      AN: x0 => ({type: x0}),
      AO: x0 => x0.code,
      AP: x0 => x0.geolocation,
      AQ: x0 => x0.height,
      AR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      AS: (x0,x1) => x0.debug(x1),
      AT: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      B: s => printToConsole(s),
      BB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      BC: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      BD: x0 => x0.screen,
      BE: x0 => new ResizeObserver(x0),
      BF: x0 => x0.key,
      BG: x0 => x0.v8BreakIterator,
      BH: x0 => x0.data,
      BI: x0 => x0.stopPropagation(),
      BJ: x0 => x0.duration,
      BK: () => globalThis.window._flutter_skwasmInstance,
      BL: (o, t) => typeof o === t,
      BM: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      BN: (x0,x1) => new Blob(x0,x1),
      BO: x0 => x0.repeat,
      BP: x0 => x0.mediaDevices,
      BQ: x0 => x0.width,
      BR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      BS: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      BT: (x0,x1,x2) => x0.toBlob(x1,x2),
      C: Function.prototype.call.bind(Number.prototype.toString),
      CB: x0 => new Uint16Array(x0),
      CC: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      CD: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      CE: (x0,x1) => x0.getPropertyValue(x1),
      CF: x0 => x0.identifier,
      CG: () => globalThis.Intl,
      CH: (x0,x1) => { x0.scrollTop = x1 },
      CI: x0 => x0.disabled,
      CJ: x0 => x0.image,
      CK: () => globalThis.window.flutterCanvasKit,
      CL: x0 => x0.data,
      CM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CN: x0 => globalThis.URL.createObjectURL(x0),
      CO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CP: x0 => x0.document,
      CQ: x0 => x0.attachStreamToVideo,
      CR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CS: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CT: (x0,x1) => x0.getContext(x1),
      D: Function.prototype.call.bind(BigInt.prototype.toString),
      DB: x0 => new Int32Array(x0),
      DC: (x0,x1) => x0.querySelector(x1),
      DD: x0 => x0.tabIndex,
      DE: x0 => globalThis.parseFloat(x0),
      DF: x0 => x0.touches,
      DG: (x0,x1) => x0.segment(x1),
      DH: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      DI: (x0,x1) => { x0.min = x1 },
      DJ: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      DK: x0 => x0.pathname,
      DL: (x0,x1,x2) => x0.close(x1,x2),
      DM: (x0,x1,x2) => x0.addEventListener(x1,x2),
      DN: () => new FileReader(),
      DO: (x0,x1) => { x0.volume = x1 },
      DP: (x0,x1) => { x0.transform = x1 },
      DQ: () => new Map(),
      DR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      DS: (x0,x1) => ({createScript: x0,createScriptURL: x1}),
      DT: x0 => ({torch: x0}),
      E: (exn) => {
        let stackString = exn.toString();
        let frames = stackString.split('\n');
        let drop = 4;
        if (frames[0].startsWith('Error')) {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      EB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      EC: (x0,x1) => x0.item(x1),
      ED: (x0,x1) => x0.contains(x1),
      EE: (x0,x1) => x0.getComputedStyle(x1),
      EF: x0 => x0.pressure,
      EG: x0 => x0.index,
      EH: (x0,x1) => { x0.value = x1 },
      EI: (x0,x1) => { x0.max = x1 },
      EJ: x0 => new window.ImageDecoder(x0),
      EK: x0 => x0.location,
      EL: (x0,x1) => x0.close(x1),
      EM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EN: (x0,x1) => x0.readAsArrayBuffer(x1),
      EO: (x0,x1) => { x0.muted = x1 },
      EP: x0 => x0.getSettings(),
      EQ: (x0,x1,x2) => x0.set(x1,x2),
      ER: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ES: (x0,x1) => x0.createScriptURL(x1),
      ET: (x0,x1) => x0.applyConstraints(x1),
      F: () => new Error().stack,
      FB: x0 => new Uint32Array(x0),
      FC: x0 => x0.length,
      FD: x0 => x0.activeElement,
      FE: x0 => x0.documentElement,
      FF: x0 => x0.tiltY,
      FG: x0 => x0.next(),
      FH: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      FI: (x0,x1) => { x0.disabled = x1 },
      FJ: x0 => x0.name,
      FK: x0 => x0.userAgent,
      FL: x0 => x0.close(),
      FM: x0 => x0.send(),
      FN: x0 => x0.result,
      FO: x0 => x0.load(),
      FP: x0 => x0.facingMode,
      FQ: (x0,x1) => x0.querySelector(x1),
      FR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      FS: (x0,x1,x2) => x0.createScript(x1,x2),
      FT: x0 => x0.torch,
      G: s => JSON.stringify(s),
      GB: x0 => new Float32Array(x0),
      GC: (x0,x1) => x0.querySelectorAll(x1),
      GD: x0 => x0.parentNode,
      GE: x0 => x0.computedStyleMap(),
      GF: x0 => x0.tiltX,
      GG: x0 => x0.value,
      GH: (x0,x1) => { x0.value = x1 },
      GI: (x0,x1) => { x0.scrollLeft = x1 },
      GJ: x0 => x0.repetitionCount,
      GK: x0 => x0.origin,
      GL: (x0,x1) => x0.send(x1),
      GM: x0 => x0.status,
      GN: x0 => globalThis.fetch(x0),
      GO: (x0,x1) => { x0.src = x1 },
      GP: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GQ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GS: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GT: x0 => x0.stop(),
      H: Function.prototype.call.bind(Number.prototype.toString),
      HB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      HC: (x0,x1) => x0.getAttribute(x1),
      HD: x0 => x0.tagName,
      HE: (x0,x1) => x0.get(x1),
      HF: x0 => x0.pointerType,
      HG: x0 => x0.done,
      HH: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      HI: (x0,x1) => { x0.spellcheck = x1 },
      HJ: x0 => x0.frameCount,
      HK: () => globalThis.globalThis,
      HL: x0 => x0.readyState,
      HM: x0 => x0.response,
      HN: x0 => x0.arrayBuffer(),
      HO: x0 => x0.message,
      HP: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HQ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HS: (o, p) => delete o[p],
      HT: x0 => ({mimeType: x0}),
      I: Function.prototype.call.bind(String.prototype.indexOf),
      IB: x0 => new Float64Array(x0),
      IC: x0 => x0.remove(),
      ID: x0 => x0.target,
      IE: (o, p) => p in o,
      IF: x0 => x0.pointerId,
      IG: (o, m, a) => o[m].apply(o, a),
      IH: x0 => x0.value,
      II: (x0,x1) => { x0.disabled = x1 },
      IJ: x0 => x0.selectedTrack,
      IK: x0 => x0.remove(),
      IL: (x0,x1) => { x0.binaryType = x1 },
      IM: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      IN: x0 => x0.decode(),
      IO: x0 => x0.code,
      IP: (x0,x1) => { x0.onpause = x1 },
      IQ: (x0,x1) => x0.appendChild(x1),
      IR: (x0,x1) => { x0.preload = x1 },
      IS: (x0,x1) => { x0.text = x1 },
      IT: (x0,x1) => new MediaRecorder(x0,x1),
      J: (s, p, i) => s.lastIndexOf(p, i),
      JB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      JC: (x0,x1) => x0.appendChild(x1),
      JD: x0 => x0.clientY,
      JE: (x0,x1) => { x0.textContent = x1 },
      JF: x0 => x0.getCoalescedEvents(),
      JG: x0 => x0.iterator,
      JH: x0 => x0.selectionDirection,
      JI: (a, i) => a.splice(i, 1),
      JJ: x0 => x0.completed,
      JK: (x0,x1) => x0.querySelectorAll(x1),
      JL: x0 => x0.baseURI,
      JM: (x0,x1) => { x0.responseType = x1 },
      JN: x0 => x0.naturalHeight,
      JO: x0 => x0.error,
      JP: (x0,x1) => { x0.onplay = x1 },
      JQ: (x0,x1) => { x0.onerror = x1 },
      JR: x0 => x0.src,
      JS: (x0,x1) => { x0.text = x1 },
      JT: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      K: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      KB: x0 => new ArrayBuffer(x0),
      KC: (x0,x1) => x0.append(x1),
      KD: x0 => x0.clientX,
      KE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      KF: (x0,x1) => x0.getModifierState(x1),
      KG: () => globalThis.Symbol,
      KH: x0 => x0.selectionStart,
      KI: x0 => new WeakRef(x0),
      KJ: x0 => x0.ready,
      KK: (x0,x1) => x0.item(x1),
      KL: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      KM: () => new XMLHttpRequest(),
      KN: x0 => x0.naturalWidth,
      KO: (x0,x1) => x0.start(x1),
      KP: (x0,x1) => { x0.pointerEvents = x1 },
      KQ: (x0,x1) => x0.removeChild(x1),
      KR: (x0,x1) => x0.setSinkId(x1),
      KS: () => globalThis.console,
      KT: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      L: o => o === undefined,
      LB: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      LC: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      LD: (x0,x1,x2) => x0.setAttribute(x1,x2),
      LE: x0 => x0.matches,
      LF: s => s.trimLeft(),
      LG: (x0,x1) => new Intl.Segmenter(x0,x1),
      LH: x0 => x0.selectionEnd,
      LI: x0 => x0.deref(),
      LJ: x0 => x0.tracks,
      LK: x0 => x0.length,
      LL: (x0,x1,x2) => x0.addEventListener(x1,x2),
      LM: (x0,x1) => { x0.width = x1 },
      LN: (x0,x1) => { x0.src = x1 },
      LO: (x0,x1) => x0.end(x1),
      LP: (x0,x1) => { x0.transformOrigin = x1 },
      LQ: (x0,x1) => { x0.onload = x1 },
      LR: () => globalThis.Notification.permission,
      LS: x0 => x0.trustedTypes,
      LT: x0 => x0.start(),
      M: o => String(o),
      MB: (x0,x1,x2) => new DataView(x0,x1,x2),
      MC: x0 => x0.style,
      MD: x0 => x0.getBoundingClientRect(),
      ME: (x0,x1) => x0.matchMedia(x1),
      MF: (x0,x1) => x0[x1],
      MG: x0 => x0.Segmenter,
      MH: x0 => x0.value,
      MI: () => globalThis.WeakRef,
      MJ: () => globalThis.window.ImageDecoder,
      MK: () => globalThis.Sentry.close(),
      ML: x0 => x0['notification-type'],
      MM: (x0,x1) => { x0.height = x1 },
      MN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      MO: x0 => x0.length,
      MP: (x0,x1) => { x0.objectFit = x1 },
      MQ: (x0,x1) => { x0.lang = x1 },
      MR: x0 => x0.message,
      MS: (o, a) => o + a,
      MT: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      N: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      NB: (o, p) => o[p],
      NC: x0 => x0.debugShowSemanticsNodes,
      ND: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      NE: x0 => x0.matches,
      NF: x0 => x0.index,
      NG: x0 => x0.buffer,
      NH: x0 => x0.selectionDirection,
      NI: a => a.pop(),
      NJ: (x0,x1) => x0.getRandomValues(x1),
      NK: (o, p, v) => o[p] = v,
      NL: x0 => x0['click-action'],
      NM: (x0,x1) => { x0.allowFullscreen = x1 },
      NN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      NO: x0 => x0.buffered,
      NP: x0 => x0.getSupportedConstraints(),
      NQ: (x0,x1) => { x0.type = x1 },
      NR: x0 => x0.code,
      NS: x0 => x0.children,
      NT: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      O: (x0,x1) => x0.didCreateEngineInitializer(x1),
      OB: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      OC: o => o,
      OD: s => new Date(s * 1000).getTimezoneOffset() * 60,
      OE: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      OF: s => s.toUpperCase(),
      OG: x0 => x0.wasmMemory,
      OH: x0 => x0.selectionStart,
      OI: x0 => x0.maxTouchPoints,
      OJ: () => globalThis.crypto,
      OK: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      OL: x0 => x0.type,
      OM: (x0,x1) => { x0.allow = x1 },
      ON: (x0,x1,x2) => x0.open(x1,x2),
      OO: x0 => x0.videoWidth,
      OP: x0 => ({ideal: x0}),
      OQ: (x0,x1) => { x0.defer = x1 },
      OR: (x0,x1) => x0.register(x1),
      OS: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      OT: x0 => x0.data,
      P: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PB: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      PC: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      PD: Date.now,
      PE: f => f.dartFunction,
      PF: x0 => x0.pop(),
      PG: () => globalThis.window._flutter_skwasmInstance,
      PH: x0 => x0.selectionEnd,
      PI: x0 => x0.platform,
      PJ: l => new DataView(new ArrayBuffer(l)),
      PK: x0 => globalThis.Sentry.init(x0),
      PL: x0 => x0.body,
      PM: (x0,x1) => { x0.border = x1 },
      PN: x0 => x0.close(),
      PO: x0 => x0.videoHeight,
      PP: (x0,x1,x2) => ({width: x0,height: x1,deviceId: x2}),
      PQ: (x0,x1) => { x0.async = x1 },
      PR: (x0,x1) => ({vapidKey: x0,serviceWorkerRegistration: x1}),
      PS: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PT: (x0,x1) => { x0.videoBitsPerSecond = x1 },
      Q: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      QB: o => o.byteOffset,
      QC: (x0,x1) => x0.warn(x1),
      QD: (handle) => clearTimeout(handle),
      QE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QF: x0 => x0.flags,
      QG: () => new TextDecoder(),
      QH: x0 => x0.keyCode,
      QI: x0 => x0.navigator,
      QJ: x0 => x0.abort(),
      QK: () => new Sentry.getClient(),
      QL: x0 => x0.title,
      QM: x0 => x0.style,
      QN: x0 => x0.message,
      QO: x0 => x0.duration,
      QP: (x0,x1) => ({width: x0,height: x1}),
      QQ: x0 => x0.stream,
      QR: (x0,x1) => globalThis.firebase_messaging.getToken(x0,x1),
      QS: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      QT: (x0,x1) => { x0.audioBitsPerSecond = x1 },
      R: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      RB: o => o.buffer,
      RC: x0 => x0.console,
      RD: (a, l) => a.length = l,
      RE: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      RF: (a, s) => a.join(s),
      RG: (d, digits) => d.toFixed(digits),
      RH: (x0,x1) => x0.scrollIntoView(x1),
      RI: () => globalThis.window,
      RJ: secondsSinceEpoch => {
        const date = new Date(secondsSinceEpoch * 1000);
        const match = /\((.*)\)/.exec(date.toString());
        if (match == null) {
            // This should never happen on any recent browser.
            return '';
        }
        return match[1];
      },
      RK: x0 => x0.getOptions(),
      RL: x0 => x0.data,
      RM: (x0,x1) => { x0.src = x1 },
      RN: x0 => x0.name,
      RO: (x0,x1) => { x0.playsInline = x1 },
      RP: (x0,x1,x2) => ({width: x0,height: x1,facingMode: x2}),
      RQ: x0 => x0.paused,
      RR: x0 => x0.serviceWorker,
      RS: x0 => x0.click(),
      RT: x0 => x0.message,
      S: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      SB: Function.prototype.call.bind(DataView.prototype.getUint8),
      SC: () => globalThis.window,
      SD: (x0,x1) => x0.closest(x1),
      SE: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      SF: (x0,x1) => x0.error(x1),
      SG: x0 => x0.maxHeight,
      SH: x0 => x0.multiViewEnabled,
      SI: (map, o, v) => map.set(o, v),
      SJ: x0 => x0.devicePixelRatio,
      SK: (x0,x1) => { x0.name = x1 },
      SL: () => globalThis.consumePendingNotificationClick(),
      SM: (x0,x1) => x0.getItem(x1),
      SN: x0 => x0.name,
      SO: (x0,x1) => { x0.controls = x1 },
      SP: x0 => x0.deviceId,
      SQ: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      SR: x0 => x0.link,
      SS: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ST: x0 => x0.length,
      T: x0 => new Promise(x0),
      TB: (b, o) => new DataView(b, o),
      TC: (o, c) => o instanceof c,
      TD: x0 => x0.bottom,
      TE: (o, i) => o[i],
      TF: () => globalThis.console,
      TG: x0 => x0.maxWidth,
      TH: (x0,x1) => x0.replaceWith(x1),
      TI: (map, o) => map.get(o),
      TJ: x0 => x0.availWidth,
      TK: (x0,x1) => { x0.sdk = x1 },
      TL: () => new XMLHttpRequest(),
      TM: x0 => x0.localStorage,
      TN: (x0,x1) => ({keyPath: x0,autoIncrement: x1}),
      TO: (x0,x1) => { x0.autoplay = x1 },
      TP: x0 => x0.getCapabilities(),
      TQ: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      TR: x0 => x0.analyticsLabel,
      TS: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      TT: x0 => x0.getReader(),
      U: (x0,x1,x2) => x0.call(x1,x2),
      UB: (b, o, l) => new DataView(b, o, l),
      UC: (x0,x1) => x0.exec(x1),
      UD: x0 => x0.top,
      UE: o => o.length,
      UF: s => s.trimRight(),
      UG: x0 => x0.minHeight,
      UH: (x0,x1) => { x0.type = x1 },
      UI: () => new WeakMap(),
      UJ: x0 => x0.availHeight,
      UK: x0 => x0.sdk,
      UL: (x0,x1,x2) => x0.open(x1,x2),
      UM: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      UN: (x0,x1,x2) => x0.createObjectStore(x1,x2),
      UO: (x0,x1) => { x0.id = x1 },
      UP: () => ({}),
      UQ: (x0,x1,x2) => x0.readBarcodes(x1,x2),
      UR: x0 => x0.image,
      US: (x0,x1) => x0.item(x1),
      UT: x0 => x0.value,
      V: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      VB: Function.prototype.call.bind(DataView.prototype.getFloat64),
      VC: x0 => x0.length,
      VD: x0 => x0.right,
      VE: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      VF: x0 => x0.blur(),
      VG: x0 => x0.minWidth,
      VH: (x0,x1) => { x0.className = x1 },
      VI: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      VJ: x0 => x0.screen,
      VK: () => globalThis.Sentry.globalHandlersIntegration(),
      VL: (x0,x1) => x0.send(x1),
      VM: x0 => x0.history,
      VN: x0 => new Date(x0),
      VO: (x0,x1) => { x0.loop = x1 },
      VP: (x0,x1) => x0.applyConstraints(x1),
      VQ: x0 => x0.text,
      VR: x0 => x0.body,
      VS: x0 => x0.name,
      VT: x0 => x0.done,
      W: x0 => new Array(x0),
      WB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      WC: (x0,x1) => { x0.lastIndex = x1 },
      WD: x0 => x0.left,
      WE: x0 => x0.language,
      WF: x0 => x0.button,
      WG: x0 => x0.debugSkipFontRetryDelay,
      WH: (x0,x1) => { x0.tabIndex = x1 },
      WI: (a, s, e) => a.slice(s, e),
      WJ: x0 => x0.type,
      WK: () => globalThis.Sentry.dedupeIntegration(),
      WL: x0 => x0.send(),
      WM: x0 => x0.href,
      WN: x0 => x0.autoIncrement,
      WO: (x0,x1) => { x0.currentTime = x1 },
      WP: (x0,x1) => { x0.whiteBalanceMode = x1 },
      WQ: x0 => x0.format,
      WR: x0 => x0.title,
      WS: x0 => x0.type,
      WT: x0 => x0.read(),
      X: o => [o],
      XB: Function.prototype.call.bind(DataView.prototype.setFloat64),
      XC: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      XD: x0 => x0.clientY,
      XE: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      XF: x0 => x0.innerHeight,
      XG: x0 => x0.status,
      XH: (x0,x1) => { x0.name = x1 },
      XI: (o, p) => p in o,
      XJ: x0 => x0.orientation,
      XK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XL: x0 => x0.abort(),
      XM: (x0,x1) => x0.removeItem(x1),
      XN: x0 => x0.keyPath,
      XO: x0 => x0.currentTime,
      XP: x0 => x0.whiteBalanceMode,
      XQ: x0 => x0.bytes,
      XR: x0 => x0.fcmOptions,
      XS: x0 => x0.length,
      XT: x0 => x0.assetBase,
      Y: (o0, o1) => [o0, o1],
      YB: Function.prototype.call.bind(DataView.prototype.setUint8),
      YC: o => o instanceof RegExp,
      YD: x0 => x0.clientX,
      YE: () => globalThis.window.FinalizationRegistry,
      YF: x0 => x0.innerWidth,
      YG: (x0,x1,x2) => x0.set(x1,x2),
      YH: (x0,x1) => { x0.placeholder = x1 },
      YI: x0 => x0.groups,
      YJ: x0 => x0.deviceMemory,
      YK: x0 => ({createScriptURL: x0}),
      YL: x0 => x0.readyState,
      YM: (x0,x1,x2) => x0.setItem(x1,x2),
      YN: x0 => x0.name,
      YO: (x0,x1) => { x0.playbackRate = x1 },
      YP: (x0,x1) => { x0.exposureMode = x1 },
      YQ: x0 => x0.y,
      YR: x0 => x0.notification,
      YS: x0 => x0.files,
      YT: x0 => x0.loader,
      Z: (o0, o1, o2) => [o0, o1, o2],
      ZB: (t, s) => t.set(s),
      ZC: (string, times) => string.repeat(times),
      ZD: x0 => x0.changedTouches,
      ZE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      ZF: x0 => x0.height,
      ZG: x0 => x0.arrayBuffer(),
      ZH: (x0,x1) => { x0.autocomplete = x1 },
      ZI: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      ZJ: x0 => x0.onLine,
      ZK: (x0,x1,x2) => x0.createPolicy(x1,x2),
      ZL: x0 => x0.total,
      ZM: x0 => new BroadcastChannel(x0),
      ZN: (x0,x1) => x0.item(x1),
      ZO: x0 => x0.pause(),
      ZP: x0 => x0.exposureMode,
      ZQ: x0 => x0.x,
      ZR: x0 => x0.messageId,
      ZS: (x0,x1) => { x0.display = x1 },
      ZT: () => globalThis._flutter,
      a: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      aB: Function.prototype.call.bind(DataView.prototype.setFloat32),
      aC: x0 => x0.dotAll,
      aD: x0 => x0.offsetY,
      aE: x0 => new window.FinalizationRegistry(x0),
      aF: x0 => x0.width,
      aG: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      aH: (x0,x1) => { x0.name = x1 },
      aI: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      aJ: () => new AbortController(),
      aK: (x0,x1,x2) => x0.createScriptURL(x1,x2),
      aL: x0 => x0.loaded,
      aM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aN: x0 => x0.length,
      aO: x0 => x0.play(),
      aP: (x0,x1) => { x0.focusMode = x1 },
      aQ: x0 => x0.bottomLeft,
      aR: x0 => x0.from,
      aS: (x0,x1) => { x0.accept = x1 },
      b: (x0,x1,x2) => { x0[x1] = x2 },
      bB: Function.prototype.call.bind(DataView.prototype.getFloat32),
      bC: x0 => x0.unicode,
      bD: x0 => x0.offsetX,
      bE: (x0,x1) => x0.unregister(x1),
      bF: x0 => x0.clientHeight,
      bG: (x0,x1) => x0.fetch(x1),
      bH: (x0,x1) => { x0.placeholder = x1 },
      bI: x0 => x0.naturalHeight,
      bJ: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      bK: x0 => x0.hasChildNodes(),
      bL: x0 => x0.upload,
      bM: x0 => x0.close(),
      bN: x0 => x0.objectStoreNames,
      bO: (x0,x1) => x0.removeAttribute(x1),
      bP: x0 => x0.focusMode,
      bQ: x0 => x0.bottomRight,
      bR: x0 => x0.collapseKey,
      bS: (x0,x1) => { x0.multiple = x1 },
      c: o => o,
      cB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      cC: x0 => x0.ignoreCase,
      cD: x0 => x0.type,
      cE: (x0,x1) => x0.contains(x1),
      cF: x0 => x0.clientWidth,
      cG: x0 => x0.fontFallbackBaseUrl,
      cH: (x0,x1) => { x0.action = x1 },
      cI: x0 => x0.naturalWidth,
      cJ: (x0,x1) => globalThis.fetch(x0,x1),
      cK: (x0,x1,x2) => x0.insertBefore(x1,x2),
      cL: x0 => x0.responseURL,
      cM: (x0,x1) => x0.postMessage(x1),
      cN: x0 => x0.result,
      cO: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      cP: x0 => x0.enumerateDevices(),
      cQ: x0 => x0.topRight,
      cR: x0 => x0.data,
      cS: (x0,x1) => { x0.draggable = x1 },
      d: (o, p) => o[p],
      dB: Function.prototype.call.bind(DataView.prototype.setUint32),
      dC: x0 => x0.multiline,
      dD: x0 => x0.maxTouchPoints,
      dE: (s) => +s,
      dF: (x0,x1) => { x0.content = x1 },
      dG: (handle) => clearInterval(handle),
      dH: (x0,x1) => { x0.method = x1 },
      dI: (x0,x1) => x0.createElement(x1),
      dJ: (x0,x1) => x0.get(x1),
      dK: (x0,x1) => x0.append(x1),
      dL: x0 => x0.statusText,
      dM: (x0,x1) => { x0.onmessage = x1 },
      dN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      dO: (x0,x1) => x0.key(x1),
      dP: x0 => x0.deviceId,
      dQ: x0 => x0.topLeft,
      dR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      dS: (x0,x1) => { x0.type = x1 },
      e: () => globalThis,
      eB: Function.prototype.call.bind(DataView.prototype.getUint32),
      eC: (string, token) => string.split(token),
      eD: x0 => x0.platform,
      eE: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      eF: (x0,x1) => { x0.name = x1 },
      eG: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      eH: (x0,x1) => { x0.noValidate = x1 },
      eI: (x0,x1) => { x0.pointerEvents = x1 },
      eJ: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2) { return wasmFunction(f,arguments.length,x0,x1,x2) }),
      eK: x0 => x0.firstChild,
      eL: x0 => x0.getAllResponseHeaders(),
      eM: (a, l) => a.length = l,
      eN: (x0,x1) => { x0.onerror = x1 },
      eO: x0 => x0.length,
      eP: x0 => x0.kind,
      eQ: x0 => x0.position,
      eR: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      eS: x0 => x0.hardwareConcurrency,
      f: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      fC: o => o instanceof Array,
      fD: x0 => x0.body,
      fE: s => s.trim(),
      fF: x0 => x0.head,
      fG: () => Date.now(),
      fH: (x0,x1) => x0.removeAttribute(x1),
      fI: (x0,x1) => { x0.height = x1 },
      fJ: (x0,x1) => x0.forEach(x1),
      fK: x0 => x0.head,
      fL: x0 => x0.status,
      fM: (x0,x1) => x0.get(x1),
      fN: x0 => x0.message,
      fO: (x0,x1) => x0.canShare(x1),
      fP: x0 => x0.facingMode,
      fQ: x0 => x0.isValid,
      fR: (x0,x1) => ({next: x0,error: x1}),
      fS: x0 => x0.vendorSub,
      g: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gB: Function.prototype.call.bind(DataView.prototype.setInt32),
      gC: (a, i, v) => a[i] = v,
      gD: () => globalThis.document,
      gE: x0 => x0.classList,
      gF: (x0,x1) => x0.removeChild(x1),
      gG: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      gH: x0 => x0.isConnected,
      gI: (x0,x1) => { x0.width = x1 },
      gJ: x0 => x0.name,
      gK: (x0,x1) => { x0.integrity = x1 },
      gL: x0 => x0.response,
      gM: x0 => x0.body,
      gN: x0 => x0.error,
      gO: (x0,x1) => x0.share(x1),
      gP: x0 => x0.mediaDevices,
      gQ: (x0,x1,x2,x3) => ({formats: x0,tryHarder: x1,tryRotate: x2,tryInvert: x3}),
      gR: (x0,x1) => globalThis.firebase_messaging.onMessage(x0,x1),
      gS: x0 => x0.productSub,
      h: (x0,x1) => ({addView: x0,removeView: x1}),
      hB: Function.prototype.call.bind(DataView.prototype.getInt32),
      hC: (a, i) => a[i],
      hD: (x0,x1,x2) => x0.addEventListener(x1,x2),
      hE: x0 => x0.preventDefault(),
      hF: x0 => x0.firstChild,
      hG: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      hH: x0 => x0.click(),
      hI: x0 => x0.style,
      hJ: x0 => x0.statusText,
      hK: (x0,x1) => { x0.src = x1 },
      hL: x0 => x0.withCredentials,
      hM: x0 => x0.headers,
      hN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      hO: x0 => ({url: x0}),
      hP: () => globalThis.BarcodeDetector.getSupportedFormats(),
      hQ: (x0,x1,x2) => ({tryHarder: x0,tryRotate: x1,tryInvert: x2}),
      hR: x0 => globalThis.firebase_messaging.getMessaging(x0),
      hS: x0 => x0.product,
      i: (l, r) => l === r,
      iB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      iC: a => a.length,
      iD: x0 => x0.hasFocus(),
      iE: x0 => x0.parent,
      iF: x0 => x0.viewConstraints,
      iG: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      iH: (x0,x1) => x0.getElementsByClassName(x1),
      iI: (x0,x1) => { x0.src = x1 },
      iJ: x0 => x0.url,
      iK: x0 => x0.trustedTypes,
      iL: (x0,x1) => { x0.timeout = x1 },
      iM: (x0,x1,x2,x3) => x0.putImageData(x1,x2,x3),
      iN: (x0,x1) => { x0.onsuccess = x1 },
      iO: (x0,x1) => ({files: x0,text: x1}),
      iP: (x0,x1) => x0.call(x1),
      iQ: () => globalThis.ZXingWASM,
      iR: x0 => globalThis.firebase_core.getApp(x0),
      iS: x0 => x0.languages,
      j: x0 => x0.random(),
      jB: o => o instanceof Uint16Array,
      jC: (x0,x1) => x0.test(x1),
      jD: x0 => x0.relatedTarget,
      jE: x0 => x0.timeStamp,
      jF: x0 => x0.hostElement,
      jG: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      jH: (x0,x1) => x0.dispatchEvent(x1),
      jI: () => globalThis.document,
      jJ: x0 => x0.status,
      jK: (x0,x1) => { x0.crossOrigin = x1 },
      jL: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      jM: x0 => x0.arrayBuffer(),
      jN: x0 => x0.target,
      jO: x0 => ({files: x0}),
      jP: x0 => x0.reset,
      jQ: (x0,x1) => { x0.height = x1 },
      jR: () => globalThis.firebase_core.getApp(),
      jS: x0 => x0.language,
      k: o => o,
      kB: Function.prototype.call.bind(DataView.prototype.setUint16),
      kC: x0 => x0.userAgent,
      kD: x0 => x0.shiftKey,
      kE: (x0,x1) => x0.hasAttribute(x1),
      kF: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      kG: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      kH: (x0,x1) => x0.createEvent(x1),
      kI: x0 => x0.src,
      kJ: x0 => x0.getReader(),
      kK: (x0,x1) => x0.createElement(x1),
      kL: (x0,x1) => { x0.withCredentials = x1 },
      kM: (x0,x1) => { x0.height = x1 },
      kN: x0 => x0.indexedDB,
      kO: x0 => ({text: x0}),
      kP: x0 => x0.stopContinuousDecode,
      kQ: (x0,x1) => { x0.width = x1 },
      kR: x0 => x0.name,
      kS: x0 => x0.deviceMemory,
      l: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      lB: Function.prototype.call.bind(DataView.prototype.getUint16),
      lC: x0 => x0.navigator,
      lD: (decoder, codeUnits) => decoder.decode(codeUnits),
      lE: x0 => x0.buttons,
      lF: x0 => ({runApp: x0}),
      lG: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      lH: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      lI: (x0,x1) => x0.revokeObjectURL(x1),
      lJ: x0 => x0.read(),
      lK: (x0,x1) => x0.transferFromImageBitmap(x1),
      lL: (x0,x1) => { x0.responseType = x1 },
      lM: (x0,x1) => { x0.width = x1 },
      lN: x0 => x0.reload(),
      lO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      lP: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      lQ: x0 => x0.height,
      lR: x0 => x0.measurementId,
      lS: x0 => x0.appVersion,
      m: () => globalThis.Math,
      mB: o => o instanceof Int16Array,
      mC: Function.prototype.call.bind(String.prototype.toLowerCase),
      mD: () => new TextDecoder("utf-8", {fatal: true}),
      mE: x0 => x0.ctrlKey,
      mF: () => typeof dartUseDateNowForTicks !== "undefined",
      mG: x0 => x0.history,
      mH: x0 => x0.readText(),
      mI: (x0,x1) => { x0.src = x1 },
      mJ: x0 => x0.value,
      mK: (x0,x1) => x0.getContext(x1),
      mL: o => o.byteLength,
      mM: x0 => x0.convertToBlob(),
      mN: x0 => x0.type,
      mO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      mP: (x0,x1,x2,x3) => x0.call(x1,x2,x3),
      mQ: x0 => x0.width,
      mR: x0 => x0.appId,
      mS: x0 => x0.appName,
      n: (x0,x1) => x0.prepend(x1),
      nB: Function.prototype.call.bind(DataView.prototype.setInt16),
      nC: Object.is,
      nD: () => new TextDecoder("utf-8", {fatal: false}),
      nE: x0 => x0.y,
      nF: () => Date.now(),
      nG: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      nH: x0 => x0.clipboard,
      nI: (x0,x1,x2,x3,x4) => globalThis.createImageBitmap(x0,x1,x2,x3,x4),
      nJ: x0 => x0.done,
      nK: (x0,x1) => { x0.height = x1 },
      nL: x0 => x0.clearMarks(),
      nM: (x0,x1,x2) => new ImageData(x0,x1,x2),
      nN: () => globalThis.Sentry.captureSession(),
      nO: (x0,x1,x2) => x0.getCurrentPosition(x1,x2),
      nP: x0 => x0.text,
      nQ: (x0,x1) => { x0.srcObject = x1 },
      nR: x0 => x0.messagingSenderId,
      nS: x0 => x0.appCodeName,
      o: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      oB: Function.prototype.call.bind(DataView.prototype.getInt16),
      oC: x0 => x0.vendor,
      oD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      oE: x0 => x0.x,
      oF: () => 1000 * performance.now(),
      oG: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      oH: (x0,x1) => x0.writeText(x1),
      oI: x0 => x0.naturalHeight,
      oJ: x0 => x0.cancel(),
      oK: (x0,x1) => { x0.width = x1 },
      oL: x0 => x0.clearMeasures(),
      oM: (x0,x1) => x0.getContext(x1),
      oN: () => new Sentry.getIsolationScope(),
      oO: () => globalThis.Notification.requestPermission(),
      oP: x0 => x0.barcodeFormat,
      oQ: x0 => ({willReadFrequently: x0}),
      oR: x0 => x0.authDomain,
      oS: x0 => x0.label,
      p: b => !!b,
      pB: o => o instanceof Uint8ClampedArray,
      pC: (x0,x1) => x0.createTextNode(x1),
      pD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      pE: x0 => x0.scrollTop,
      pF: (x0,x1) => x0.requestAnimationFrame(x1),
      pG: o => Object.keys(o),
      pH: x0 => x0.unlock(),
      pI: x0 => x0.naturalWidth,
      pJ: x0 => x0.body,
      pK: x0 => x0.height,
      pL: (x0,x1) => x0.parse(x1),
      pM: (x0,x1) => new OffscreenCanvas(x0,x1),
      pN: x0 => x0.getSession(),
      pO: x0 => ({video: x0}),
      pP: x0 => x0.rawBytes,
      pQ: (x0,x1,x2) => x0.getContext(x1,x2),
      pR: x0 => x0.projectId,
      pS: x0 => x0.facingMode,
      q: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      qB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      qC: (x0,x1) => { x0.id = x1 },
      qD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      qE: x0 => x0.offsetTop,
      qF: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      qG: x0 => x0.state,
      qH: (x0,x1) => x0.lock(x1),
      qI: x0 => x0.decode(),
      qJ: x0 => x0.headers,
      qK: x0 => x0.width,
      qL: (x0,x1,x2) => x0.mark(x1,x2),
      qM: x0 => x0.allocationSize(),
      qN: (x0,x1) => x0.setSession(x1),
      qO: (x0,x1) => x0.getUserMedia(x1),
      qP: x0 => x0.y,
      qQ: () => new BarcodeDetector(),
      qR: x0 => x0.name,
      qS: (x0,x1) => ({video: x0,audio: x1}),
      r: (x0,x1) => x0.focus(x1),
      rB: Function.prototype.call.bind(DataView.prototype.setInt8),
      rC: (x0,x1) => { x0.nonce = x1 },
      rD: x0 => x0.visibilityState,
      rE: x0 => x0.scrollLeft,
      rF: x0 => x0.now(),
      rG: x0 => x0.state,
      rH: x0 => x0.orientation,
      rI: (x0,x1) => { x0.decoding = x1 },
      rJ: x0 => x0.signal,
      rK: x0 => x0.rasterEndMilliseconds,
      rL: (x0,x1,x2,x3) => x0.measure(x1,x2,x3),
      rM: (x0,x1) => x0.copyTo(x1),
      rN: x0 => globalThis.Sentry.startSession(x0),
      rO: x0 => x0.getVideoTracks(),
      rP: x0 => x0.x,
      rQ: x0 => ({formats: x0}),
      rR: (x0,x1,x2,x3,x4,x5,x6,x7) => ({apiKey: x0,authDomain: x1,databaseURL: x2,projectId: x3,storageBucket: x4,messagingSenderId: x5,measurementId: x6,appId: x7}),
      rS: x0 => x0.getTracks(),
      s: () => ({}),
      sB: Function.prototype.call.bind(DataView.prototype.getInt8),
      sC: x0 => x0.nonce,
      sD: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      sE: x0 => x0.offsetLeft,
      sF: x0 => x0.performance,
      sG: (x0,x1) => x0.go(x1),
      sH: (x0,x1) => x0.querySelector(x1),
      sI: (x0,x1) => { x0.crossOrigin = x1 },
      sJ: (x0,x1) => x0.matchMedia(x1),
      sK: x0 => x0.rasterStartMilliseconds,
      sL: (o) => {
        const typeofValue = typeof o;
        return (typeofValue === 'object') ||
            typeofValue === 'function';
      },
      sM: (x0,x1) => x0.toDataURL(x1),
      sN: x0 => x0.baseURI,
      sO: x0 => x0.stop(),
      sP: x0 => x0.resultPoints,
      sQ: x0 => new BarcodeDetector(x0),
      sR: (x0,x1) => globalThis.firebase_core.initializeApp(x0,x1),
      sS: x0 => x0.srcObject,
      t: (o, p, v) => o[p] = v,
      tB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      tC: () => globalThis.window.flutterConfiguration,
      tD: x0 => x0.disconnect(),
      tE: x0 => x0.offsetParent,
      tF: x0 => new Uint8Array(x0),
      tG: x0 => x0.hash,
      tH: (x0,x1) => { x0.title = x1 },
      tI: (x0,x1) => x0.createObjectURL(x1),
      tJ: x0 => x0.matches,
      tK: x0 => x0.imageBitmaps,
      tL: () => globalThis.JSON,
      tM: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      tN: x0 => x0.hostElement,
      tO: x0 => x0.active,
      tP: x0 => x0.message,
      tQ: (x0,x1) => x0.detect(x1),
      tR: x0 => x0.storageBucket,
      tS: (x0,x1,x2) => x0.setProperty(x1,x2),
      u: () => [],
      uB: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      uC: (x0,x1) => x0.attachShadow(x1),
      uD: x0 => new Intl.Locale(x0),
      uE: (o, p, r) => o.replace(p, () => r),
      uF: (x0,x1,x2) => x0.slice(x1,x2),
      uG: x0 => x0.location,
      uH: (x0,x1) => x0.vibrate(x1),
      uI: x0 => x0.URL,
      uJ: (x0,x1) => x0.sendEnvelope(x1),
      uK: x0 => x0.canvasKitMaximumSurfaces,
      uL: x0 => x0.clearMarks,
      uM: x0 => x0.format,
      uN: x0 => x0.location,
      uO: x0 => ({audio: x0}),
      uP: x0 => x0.videoElement,
      uQ: x0 => x0.rawValue,
      uR: x0 => x0.databaseURL,
      uS: (x0,x1,x2) => x0.setAttribute(x1,x2),
      v: (a, i) => a.push(i),
      vB: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      vC: (x0,x1) => x0.createElement(x1),
      vD: x0 => x0.region,
      vE: (o, p, r) => o.replaceAll(p, () => r),
      vF: (x0,x1) => x0.decode(x1),
      vG: x0 => x0.search,
      vH: x0 => x0.content,
      vI: x0 => new Blob(x0),
      vJ: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      vK: x0 => x0.nextSibling,
      vL: x0 => x0.clearMeasures,
      vM: x0 => x0.size,
      vN: (x0,x1) => x0.getModifierState(x1),
      vO: x0 => x0.getAudioTracks(),
      vP: x0 => x0.decodeContinuously,
      vQ: x0 => x0.format,
      vR: x0 => x0.apiKey,
      vS: x0 => globalThis.MediaRecorder.isTypeSupported(x0),
      w: x0 => new Int8Array(x0),
      wB: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      wC: x0 => x0.scale,
      wD: x0 => x0.script,
      wE: x0 => x0.deltaMode,
      wF: (x0,x1) => x0.adoptText(x1),
      wG: x0 => x0.pathname,
      wH: x0 => x0.document,
      wI: x0 => x0.close(),
      wJ: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      wK: (x0,x1) => x0.debug(x1),
      wL: x0 => x0.mark,
      wM: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      wN: x0 => x0.metaKey,
      wO: x0 => ({name: x0}),
      wP: (x0,x1) => new ZXing.BrowserMultiFormatReader(x0,x1),
      wQ: x0 => x0.y,
      wR: x0 => x0.options,
      wS: x0 => new Event(x0),
      x: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      xB: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      xC: x0 => x0.visualViewport,
      xD: x0 => x0.language,
      xE: x0 => x0.deltaY,
      xF: x0 => x0.first(),
      xG: x0 => x0.parentElement,
      xH: (x0,x1,x2) => x0.insertBefore(x1,x2),
      xI: (x0,x1) => ({frameIndex: x0,completeFramesOnly: x1}),
      xJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      xK: () => new Array(),
      xL: x0 => x0.measure,
      xM: x0 => x0.type,
      xN: x0 => x0.altKey,
      xO: (x0,x1) => x0.query(x1),
      xP: (x0,x1) => ({width: x0,height: x1}),
      xQ: x0 => x0.x,
      xR: () => globalThis.firebase_core.SDK_VERSION,
      xS: (x0,x1,x2) => x0.translate(x1,x2),
      y: x0 => new Uint8Array(x0),
      yB: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      yC: x0 => x0.devicePixelRatio,
      yD: x0 => x0.languages,
      yE: x0 => x0.deltaX,
      yF: x0 => x0.next(),
      yG: (x0,x1) => x0.querySelectorAll(x1),
      yH: x0 => x0.id,
      yI: (x0,x1) => x0.decode(x1),
      yJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      yK: (x0,x1) => new WebSocket(x0,x1),
      yL: () => globalThis.performance,
      yM: x0 => x0.vendor,
      yN: x0 => x0.ctrlKey,
      yO: x0 => x0.state,
      yP: (x0,x1,x2) => ({width: x0,height: x1,facingMode: x2}),
      yQ: x0 => x0.cornerPoints,
      yR: (x0,x1,x2) => globalThis.firebase_core.registerVersion(x0,x1,x2),
      yS: (x0,x1,x2) => x0.scale(x1,x2),
      z: x0 => new Uint8ClampedArray(x0),
      zB: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      zC: x0 => x0.height,
      zD: (x0,x1) => x0.observe(x1),
      zE: x0 => x0.wheelDeltaY,
      zF: x0 => x0.current(),
      zG: (x0,x1) => x0.removeProperty(x1),
      zH: x0 => x0.offsetHeight,
      zI: x0 => x0.displayHeight,
      zJ: x0 => x0.body,
      zK: x0 => x0.reason,
      zL: (a, i) => a.splice(i, 1)[0],
      zM: x0 => new Blob(x0),
      zN: x0 => x0.isComposing,
      zO: x0 => x0.permissions,
      zP: x0 => x0.facingMode,
      zQ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      zR: x0 => x0.sessionStorage,
      zS: (x0,x1,x2,x3,x4,x5) => x0.drawImage(x1,x2,x3,x4,x5),

    };

    const baseImports = {
      _: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      WebAssembly: {
        JSTag: WebAssembly.JSTag,
      },
      "": new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
