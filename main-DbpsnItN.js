const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/api-BqbeGz9F.js", "assets/preload-helper-BXl3LOEh.js"]))) => i.map(i => d[i]);
import {_ as es} from "./preload-helper-BXl3LOEh.js";
const De = new Set
  , te = new Map;
let X, Re = "ltr", Ne = "en";
const Pt = typeof MutationObserver < "u" && typeof document < "u" && typeof document.documentElement < "u";
if (Pt) {
    const s = new MutationObserver(Mt);
    Re = document.documentElement.dir || "ltr",
    Ne = document.documentElement.lang || navigator.language,
    s.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["dir", "lang"]
    })
}
function Fe(...s) {
    s.map(e => {
        const t = e.$code.toLowerCase();
        te.has(t) ? te.set(t, Object.assign(Object.assign({}, te.get(t)), e)) : te.set(t, e),
        X || (X = e)
    }
    ),
    Mt()
}
function Mt() {
    Pt && (Re = document.documentElement.dir || "ltr",
    Ne = document.documentElement.lang || navigator.language),
    [...De.keys()].map(s => {
        typeof s.requestUpdate == "function" && s.requestUpdate()
    }
    )
}
let ts = class {
    constructor(e) {
        this.host = e,
        this.host.addController(this)
    }
    hostConnected() {
        De.add(this.host)
    }
    hostDisconnected() {
        De.delete(this.host)
    }
    dir() {
        return `${this.host.dir || Re}`.toLowerCase()
    }
    lang() {
        return `${this.host.lang || Ne}`.toLowerCase()
    }
    getTranslationData(e) {
        var t, i;
        const r = new Intl.Locale(e.replace(/_/g, "-"))
          , n = r?.language.toLowerCase()
          , a = (i = (t = r?.region) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && i !== void 0 ? i : ""
          , l = te.get(`${n}-${a}`)
          , o = te.get(n);
        return {
            locale: r,
            language: n,
            region: a,
            primary: l,
            secondary: o
        }
    }
    exists(e, t) {
        var i;
        const {primary: r, secondary: n} = this.getTranslationData((i = t.lang) !== null && i !== void 0 ? i : this.lang());
        return t = Object.assign({
            includeFallback: !1
        }, t),
        !!(r && r[e] || n && n[e] || t.includeFallback && X && X[e])
    }
    term(e, ...t) {
        const {primary: i, secondary: r} = this.getTranslationData(this.lang());
        let n;
        if (i && i[e])
            n = i[e];
        else if (r && r[e])
            n = r[e];
        else if (X && X[e])
            n = X[e];
        else
            return console.error(`No translation found for: ${String(e)}`),
            String(e);
        return typeof n == "function" ? n(...t) : n
    }
    date(e, t) {
        return e = new Date(e),
        new Intl.DateTimeFormat(this.lang(),t).format(e)
    }
    number(e, t) {
        return e = Number(e),
        isNaN(e) ? "" : new Intl.NumberFormat(this.lang(),t).format(e)
    }
    relativeTime(e, t, i) {
        return new Intl.RelativeTimeFormat(this.lang(),i).format(e, t)
    }
}
;
var Lt = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    currentValue: "Current value",
    error: "Error",
    goToSlide: (s, e) => `Go to slide ${s} of ${e}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: s => s === 0 ? "No options selected" : s === 1 ? "1 option selected" : `${s} options selected`,
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: s => `Slide ${s}`,
    toggleColorFormat: "Toggle color format"
};
Fe(Lt);
var ss = Lt
  , is = class extends ts {
}
;
Fe(ss);
var Ot = Object.defineProperty
  , rs = Object.defineProperties
  , ns = Object.getOwnPropertyDescriptor
  , os = Object.getOwnPropertyDescriptors
  , et = Object.getOwnPropertySymbols
  , as = Object.prototype.hasOwnProperty
  , ls = Object.prototype.propertyIsEnumerable
  , It = s => {
    throw TypeError(s)
}
  , tt = (s, e, t) => e in s ? Ot(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Te = (s, e) => {
    for (var t in e || (e = {}))
        as.call(e, t) && tt(s, t, e[t]);
    if (et)
        for (var t of et(e))
            ls.call(e, t) && tt(s, t, e[t]);
    return s
}
  , kt = (s, e) => rs(s, os(e))
  , O = (s, e, t, i) => {
    for (var r = i > 1 ? void 0 : i ? ns(e, t) : e, n = s.length - 1, a; n >= 0; n--)
        (a = s[n]) && (r = (i ? a(e, t, r) : a(r)) || r);
    return i && r && Ot(e, t, r),
    r
}
  , zt = (s, e, t) => e.has(s) || It("Cannot " + t)
  , ds = (s, e, t) => (zt(s, e, "read from private field"),
e.get(s))
  , cs = (s, e, t) => e.has(s) ? It("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, t)
  , us = (s, e, t, i) => (zt(s, e, "write to private field"),
e.set(s, t),
t)
  , fs = {
    $code: "ru",
    $name: "Русский",
    $dir: "ltr",
    carousel: "Карусель",
    clearEntry: "Очистить запись",
    close: "Закрыть",
    copied: "Скопировано",
    copy: "Скопировать",
    currentValue: "Текущее значение",
    error: "Ошибка",
    goToSlide: (s, e) => `Перейти к слайду ${s} из ${e}`,
    hidePassword: "Скрыть пароль",
    loading: "Загрузка",
    nextSlide: "Следующий слайд",
    numOptionsSelected: s => s === 0 ? "выбрано 0 вариантов" : s === 1 ? "Выбран 1 вариант" : `выбрано ${s} варианта`,
    previousSlide: "Предыдущий слайд",
    progress: "Прогресс",
    remove: "Удалить",
    resize: "Изменить размер",
    scrollToEnd: "Пролистать до конца",
    scrollToStart: "Пролистать к началу",
    selectAColorFromTheScreen: "Выберите цвет на экране",
    showPassword: "Показать пароль",
    slideNum: s => `Слайд ${s}`,
    toggleColorFormat: "Переключить цветовую модель"
};
Fe(fs);
const ps = (s, e=document) => {
    const t = e.querySelector(s);
    if (!t)
        throw new Error(`Element "${s}" not found`);
    return t
}
;
function st(s) {
    return s !== null && typeof s == "object" && "constructor"in s && s.constructor === Object
}
function je(s={}, e={}) {
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e).filter(i => t.indexOf(i) < 0).forEach(i => {
        typeof s[i] > "u" ? s[i] = e[i] : st(e[i]) && st(s[i]) && Object.keys(e[i]).length > 0 && je(s[i], e[i])
    }
    )
}
const Dt = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function Q() {
    const s = typeof document < "u" ? document : {};
    return je(s, Dt),
    s
}
const hs = {
    document: Dt,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(s) {
        return typeof setTimeout > "u" ? (s(),
        null) : setTimeout(s, 0)
    },
    cancelAnimationFrame(s) {
        typeof setTimeout > "u" || clearTimeout(s)
    }
};
function I() {
    const s = typeof window < "u" ? window : {};
    return je(s, hs),
    s
}
function ms(s="") {
    return s.trim().split(" ").filter(e => !!e.trim())
}
function gs(s) {
    const e = s;
    Object.keys(e).forEach(t => {
        try {
            e[t] = null
        } catch {}
        try {
            delete e[t]
        } catch {}
    }
    )
}
function Bt(s, e=0) {
    return setTimeout(s, e)
}
function we() {
    return Date.now()
}
function vs(s) {
    const e = I();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(s, null)),
    !t && s.currentStyle && (t = s.currentStyle),
    t || (t = s.style),
    t
}
function ws(s, e="x") {
    const t = I();
    let i, r, n;
    const a = vs(s);
    return t.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform,
    r.split(",").length > 6 && (r = r.split(", ").map(l => l.replace(",", ".")).join(", ")),
    n = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
    i = n.toString().split(",")),
    e === "x" && (t.WebKitCSSMatrix ? r = n.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])),
    e === "y" && (t.WebKitCSSMatrix ? r = n.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])),
    r || 0
}
function fe(s) {
    return typeof s == "object" && s !== null && s.constructor && Object.prototype.toString.call(s).slice(8, -1) === "Object"
}
function ys(s) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? s instanceof HTMLElement : s && (s.nodeType === 1 || s.nodeType === 11)
}
function D(...s) {
    const e = Object(s[0])
      , t = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < s.length; i += 1) {
        const r = s[i];
        if (r != null && !ys(r)) {
            const n = Object.keys(Object(r)).filter(a => t.indexOf(a) < 0);
            for (let a = 0, l = n.length; a < l; a += 1) {
                const o = n[a]
                  , d = Object.getOwnPropertyDescriptor(r, o);
                d !== void 0 && d.enumerable && (fe(e[o]) && fe(r[o]) ? r[o].__swiper__ ? e[o] = r[o] : D(e[o], r[o]) : !fe(e[o]) && fe(r[o]) ? (e[o] = {},
                r[o].__swiper__ ? e[o] = r[o] : D(e[o], r[o])) : e[o] = r[o])
            }
        }
    }
    return e
}
function pe(s, e, t) {
    s.style.setProperty(e, t)
}
function Vt({swiper: s, targetPosition: e, side: t}) {
    const i = I()
      , r = -s.translate;
    let n = null, a;
    const l = s.params.speed;
    s.wrapperEl.style.scrollSnapType = "none",
    i.cancelAnimationFrame(s.cssModeFrameID);
    const o = e > r ? "next" : "prev"
      , d = (c, p) => o === "next" && c >= p || o === "prev" && c <= p
      , f = () => {
        a = new Date().getTime(),
        n === null && (n = a);
        const c = Math.max(Math.min((a - n) / l, 1), 0)
          , p = .5 - Math.cos(c * Math.PI) / 2;
        let u = r + p * (e - r);
        if (d(u, e) && (u = e),
        s.wrapperEl.scrollTo({
            [t]: u
        }),
        d(u, e)) {
            s.wrapperEl.style.overflow = "hidden",
            s.wrapperEl.style.scrollSnapType = "",
            setTimeout( () => {
                s.wrapperEl.style.overflow = "",
                s.wrapperEl.scrollTo({
                    [t]: u
                })
            }
            ),
            i.cancelAnimationFrame(s.cssModeFrameID);
            return
        }
        s.cssModeFrameID = i.requestAnimationFrame(f)
    }
    ;
    f()
}
function N(s, e="") {
    const t = I()
      , i = [...s.children];
    return t.HTMLSlotElement && s instanceof HTMLSlotElement && i.push(...s.assignedElements()),
    e ? i.filter(r => r.matches(e)) : i
}
function bs(s, e) {
    const t = [e];
    for (; t.length > 0; ) {
        const i = t.shift();
        if (s === i)
            return !0;
        t.push(...i.children, ...i.shadowRoot ? i.shadowRoot.children : [], ...i.assignedElements ? i.assignedElements() : [])
    }
}
function Ss(s, e) {
    const t = I();
    let i = e.contains(s);
    return !i && t.HTMLSlotElement && e instanceof HTMLSlotElement && (i = [...e.assignedElements()].includes(s),
    i || (i = bs(s, e))),
    i
}
function ye(s) {
    try {
        console.warn(s);
        return
    } catch {}
}
function Be(s, e=[]) {
    const t = document.createElement(s);
    return t.classList.add(...Array.isArray(e) ? e : ms(e)),
    t
}
function Ts(s, e) {
    const t = [];
    for (; s.previousElementSibling; ) {
        const i = s.previousElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
        s = i
    }
    return t
}
function xs(s, e) {
    const t = [];
    for (; s.nextElementSibling; ) {
        const i = s.nextElementSibling;
        e ? i.matches(e) && t.push(i) : t.push(i),
        s = i
    }
    return t
}
function W(s, e) {
    return I().getComputedStyle(s, null).getPropertyValue(e)
}
function it(s) {
    let e = s, t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function Es(s, e) {
    const t = [];
    let i = s.parentElement;
    for (; i; )
        t.push(i),
        i = i.parentElement;
    return t
}
function rt(s, e, t) {
    const i = I();
    return s[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"))
}
let Ce;
function _s() {
    const s = I()
      , e = Q();
    return {
        smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior"in e.documentElement.style,
        touch: !!("ontouchstart"in s || s.DocumentTouch && e instanceof s.DocumentTouch)
    }
}
function Gt() {
    return Ce || (Ce = _s()),
    Ce
}
let $e;
function Cs({userAgent: s}={}) {
    const e = Gt()
      , t = I()
      , i = t.navigator.platform
      , r = s || t.navigator.userAgent
      , n = {
        ios: !1,
        android: !1
    }
      , a = t.screen.width
      , l = t.screen.height
      , o = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = r.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
    const f = r.match(/(iPod)(.*OS\s([\d_]+))?/)
      , c = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
      , p = i === "Win32";
    let u = i === "MacIntel";
    const h = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && u && e.touch && h.indexOf(`${a}x${l}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/),
    d || (d = [0, 1, "13_0_0"]),
    u = !1),
    o && !p && (n.os = "android",
    n.android = !0),
    (d || c || f) && (n.os = "ios",
    n.ios = !0),
    n
}
function Ht(s={}) {
    return $e || ($e = Cs(s)),
    $e
}
let Ae;
function $s() {
    const s = I()
      , e = Ht();
    let t = !1;
    function i() {
        const l = s.navigator.userAgent.toLowerCase();
        return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0
    }
    if (i()) {
        const l = String(s.navigator.userAgent);
        if (l.includes("Version/")) {
            const [o,d] = l.split("Version/")[1].split(" ")[0].split(".").map(f => Number(f));
            t = o < 16 || o === 16 && d < 2
        }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
      , n = i()
      , a = n || r && e.ios;
    return {
        isSafari: t || n,
        needPerspectiveFix: t,
        need3dFix: a,
        isWebView: r
    }
}
function Rt() {
    return Ae || (Ae = $s()),
    Ae
}
function As({swiper: s, on: e, emit: t}) {
    const i = I();
    let r = null
      , n = null;
    const a = () => {
        !s || s.destroyed || !s.initialized || (t("beforeResize"),
        t("resize"))
    }
      , l = () => {
        !s || s.destroyed || !s.initialized || (r = new ResizeObserver(f => {
            n = i.requestAnimationFrame( () => {
                const {width: c, height: p} = s;
                let u = c
                  , h = p;
                f.forEach( ({contentBoxSize: m, contentRect: E, target: T}) => {
                    T && T !== s.el || (u = E ? E.width : (m[0] || m).inlineSize,
                    h = E ? E.height : (m[0] || m).blockSize)
                }
                ),
                (u !== c || h !== p) && a()
            }
            )
        }
        ),
        r.observe(s.el))
    }
      , o = () => {
        n && i.cancelAnimationFrame(n),
        r && r.unobserve && s.el && (r.unobserve(s.el),
        r = null)
    }
      , d = () => {
        !s || s.destroyed || !s.initialized || t("orientationchange")
    }
    ;
    e("init", () => {
        if (s.params.resizeObserver && typeof i.ResizeObserver < "u") {
            l();
            return
        }
        i.addEventListener("resize", a),
        i.addEventListener("orientationchange", d)
    }
    ),
    e("destroy", () => {
        o(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", d)
    }
    )
}
function Ps({swiper: s, extendParams: e, on: t, emit: i}) {
    const r = []
      , n = I()
      , a = (d, f={}) => {
        const c = n.MutationObserver || n.WebkitMutationObserver
          , p = new c(u => {
            if (s.__preventObserver__)
                return;
            if (u.length === 1) {
                i("observerUpdate", u[0]);
                return
            }
            const h = function() {
                i("observerUpdate", u[0])
            };
            n.requestAnimationFrame ? n.requestAnimationFrame(h) : n.setTimeout(h, 0)
        }
        );
        p.observe(d, {
            attributes: typeof f.attributes > "u" ? !0 : f.attributes,
            childList: s.isElement || (typeof f.childList > "u" ? !0 : f).childList,
            characterData: typeof f.characterData > "u" ? !0 : f.characterData
        }),
        r.push(p)
    }
      , l = () => {
        if (s.params.observer) {
            if (s.params.observeParents) {
                const d = Es(s.hostEl);
                for (let f = 0; f < d.length; f += 1)
                    a(d[f])
            }
            a(s.hostEl, {
                childList: s.params.observeSlideChildren
            }),
            a(s.wrapperEl, {
                attributes: !1
            })
        }
    }
      , o = () => {
        r.forEach(d => {
            d.disconnect()
        }
        ),
        r.splice(0, r.length)
    }
    ;
    e({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
    t("init", l),
    t("destroy", o)
}
var Ms = {
    on(s, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        const r = t ? "unshift" : "push";
        return s.split(" ").forEach(n => {
            i.eventsListeners[n] || (i.eventsListeners[n] = []),
            i.eventsListeners[n][r](e)
        }
        ),
        i
    },
    once(s, e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        function r(...n) {
            i.off(s, r),
            r.__emitterProxy && delete r.__emitterProxy,
            e.apply(i, n)
        }
        return r.__emitterProxy = e,
        i.on(s, r, t)
    },
    onAny(s, e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || typeof s != "function")
            return t;
        const i = e ? "unshift" : "push";
        return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s),
        t
    },
    offAny(s) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
            return e;
        const t = e.eventsAnyListeners.indexOf(s);
        return t >= 0 && e.eventsAnyListeners.splice(t, 1),
        e
    },
    off(s, e) {
        const t = this;
        return !t.eventsListeners || t.destroyed || !t.eventsListeners || s.split(" ").forEach(i => {
            typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach( (r, n) => {
                (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[i].splice(n, 1)
            }
            )
        }
        ),
        t
    },
    emit(...s) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners)
            return e;
        let t, i, r;
        return typeof s[0] == "string" || Array.isArray(s[0]) ? (t = s[0],
        i = s.slice(1, s.length),
        r = e) : (t = s[0].events,
        i = s[0].data,
        r = s[0].context || e),
        i.unshift(r),
        (Array.isArray(t) ? t : t.split(" ")).forEach(a => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(l => {
                l.apply(r, [a, ...i])
            }
            ),
            e.eventsListeners && e.eventsListeners[a] && e.eventsListeners[a].forEach(l => {
                l.apply(r, i)
            }
            )
        }
        ),
        e
    }
};
function Ls() {
    const s = this;
    let e, t;
    const i = s.el;
    typeof s.params.width < "u" && s.params.width !== null ? e = s.params.width : e = i.clientWidth,
    typeof s.params.height < "u" && s.params.height !== null ? t = s.params.height : t = i.clientHeight,
    !(e === 0 && s.isHorizontal() || t === 0 && s.isVertical()) && (e = e - parseInt(W(i, "padding-left") || 0, 10) - parseInt(W(i, "padding-right") || 0, 10),
    t = t - parseInt(W(i, "padding-top") || 0, 10) - parseInt(W(i, "padding-bottom") || 0, 10),
    Number.isNaN(e) && (e = 0),
    Number.isNaN(t) && (t = 0),
    Object.assign(s, {
        width: e,
        height: t,
        size: s.isHorizontal() ? e : t
    }))
}
function Os() {
    const s = this;
    function e(S, w) {
        return parseFloat(S.getPropertyValue(s.getDirectionLabel(w)) || 0)
    }
    const t = s.params
      , {wrapperEl: i, slidesEl: r, rtlTranslate: n, wrongRTL: a} = s
      , l = s.virtual && t.virtual.enabled
      , o = l ? s.virtual.slides.length : s.slides.length
      , d = N(r, `.${s.params.slideClass}, swiper-slide`)
      , f = l ? s.virtual.slides.length : d.length;
    let c = [];
    const p = []
      , u = [];
    let h = t.slidesOffsetBefore;
    typeof h == "function" && (h = t.slidesOffsetBefore.call(s));
    let m = t.slidesOffsetAfter;
    typeof m == "function" && (m = t.slidesOffsetAfter.call(s));
    const E = s.snapGrid.length
      , T = s.slidesGrid.length
      , v = s.size - h - m;
    let g = t.spaceBetween
      , x = -h
      , y = 0
      , A = 0;
    if (typeof v > "u")
        return;
    typeof g == "string" && g.indexOf("%") >= 0 ? g = parseFloat(g.replace("%", "")) / 100 * v : typeof g == "string" && (g = parseFloat(g)),
    s.virtualSize = -g - h - m,
    d.forEach(S => {
        n ? S.style.marginLeft = "" : S.style.marginRight = "",
        S.style.marginBottom = "",
        S.style.marginTop = ""
    }
    ),
    t.centeredSlides && t.cssMode && (pe(i, "--swiper-centered-offset-before", ""),
    pe(i, "--swiper-centered-offset-after", ""));
    const $ = t.grid && t.grid.rows > 1 && s.grid;
    $ ? s.grid.initSlides(d) : s.grid && s.grid.unsetSlides();
    let b;
    const M = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(S => typeof t.breakpoints[S].slidesPerView < "u").length > 0;
    for (let S = 0; S < f; S += 1) {
        b = 0;
        const w = d[S];
        if (!(w && ($ && s.grid.updateSlide(S, w, d),
        W(w, "display") === "none"))) {
            if (l && t.slidesPerView === "auto")
                t.virtual.slidesPerViewAutoSlideSize && (b = t.virtual.slidesPerViewAutoSlideSize),
                b && w && (t.roundLengths && (b = Math.floor(b)),
                w.style[s.getDirectionLabel("width")] = `${b}px`);
            else if (t.slidesPerView === "auto") {
                M && (w.style[s.getDirectionLabel("width")] = "");
                const C = getComputedStyle(w)
                  , k = w.style.transform
                  , V = w.style.webkitTransform;
                if (k && (w.style.transform = "none"),
                V && (w.style.webkitTransform = "none"),
                t.roundLengths)
                    b = s.isHorizontal() ? rt(w, "width") : rt(w, "height");
                else {
                    const R = e(C, "width")
                      , Qe = e(C, "padding-left")
                      , q = e(C, "padding-right")
                      , _ = e(C, "margin-left")
                      , L = e(C, "margin-right")
                      , z = C.getPropertyValue("box-sizing");
                    if (z && z === "border-box")
                        b = R + _ + L;
                    else {
                        const {clientWidth: j, offsetWidth: Qt} = w;
                        b = R + Qe + q + _ + L + (Qt - j)
                    }
                }
                k && (w.style.transform = k),
                V && (w.style.webkitTransform = V),
                t.roundLengths && (b = Math.floor(b))
            } else
                b = (v - (t.slidesPerView - 1) * g) / t.slidesPerView,
                t.roundLengths && (b = Math.floor(b)),
                w && (w.style[s.getDirectionLabel("width")] = `${b}px`);
            w && (w.swiperSlideSize = b),
            u.push(b),
            t.centeredSlides ? (x = x + b / 2 + y / 2 + g,
            y === 0 && S !== 0 && (x = x - v / 2 - g),
            S === 0 && (x = x - v / 2 - g),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            t.roundLengths && (x = Math.floor(x)),
            A % t.slidesPerGroup === 0 && c.push(x),
            p.push(x)) : (t.roundLengths && (x = Math.floor(x)),
            (A - Math.min(s.params.slidesPerGroupSkip, A)) % s.params.slidesPerGroup === 0 && c.push(x),
            p.push(x),
            x = x + b + g),
            s.virtualSize += b + g,
            y = b,
            A += 1
        }
    }
    if (s.virtualSize = Math.max(s.virtualSize, v) + m,
    n && a && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${s.virtualSize + g}px`),
    t.setWrapperSize && (i.style[s.getDirectionLabel("width")] = `${s.virtualSize + g}px`),
    $ && s.grid.updateWrapperSize(b, c),
    !t.centeredSlides) {
        const S = [];
        for (let w = 0; w < c.length; w += 1) {
            let C = c[w];
            t.roundLengths && (C = Math.floor(C)),
            c[w] <= s.virtualSize - v && S.push(C)
        }
        c = S,
        Math.floor(s.virtualSize - v) - Math.floor(c[c.length - 1]) > 1 && c.push(s.virtualSize - v)
    }
    if (l && t.loop) {
        const S = u[0] + g;
        if (t.slidesPerGroup > 1) {
            const w = Math.ceil((s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup)
              , C = S * t.slidesPerGroup;
            for (let k = 0; k < w; k += 1)
                c.push(c[c.length - 1] + C)
        }
        for (let w = 0; w < s.virtual.slidesBefore + s.virtual.slidesAfter; w += 1)
            t.slidesPerGroup === 1 && c.push(c[c.length - 1] + S),
            p.push(p[p.length - 1] + S),
            s.virtualSize += S
    }
    if (c.length === 0 && (c = [0]),
    g !== 0) {
        const S = s.isHorizontal() && n ? "marginLeft" : s.getDirectionLabel("marginRight");
        d.filter( (w, C) => !t.cssMode || t.loop ? !0 : C !== d.length - 1).forEach(w => {
            w.style[S] = `${g}px`
        }
        )
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
        let S = 0;
        u.forEach(C => {
            S += C + (g || 0)
        }
        ),
        S -= g;
        const w = S > v ? S - v : 0;
        c = c.map(C => C <= 0 ? -h : C > w ? w + m : C)
    }
    if (t.centerInsufficientSlides) {
        let S = 0;
        u.forEach(C => {
            S += C + (g || 0)
        }
        ),
        S -= g;
        const w = (h || 0) + (m || 0);
        if (S + w < v) {
            const C = (v - S - w) / 2;
            c.forEach( (k, V) => {
                c[V] = k - C
            }
            ),
            p.forEach( (k, V) => {
                p[V] = k + C
            }
            )
        }
    }
    if (Object.assign(s, {
        slides: d,
        snapGrid: c,
        slidesGrid: p,
        slidesSizesGrid: u
    }),
    t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
        pe(i, "--swiper-centered-offset-before", `${-c[0]}px`),
        pe(i, "--swiper-centered-offset-after", `${s.size / 2 - u[u.length - 1] / 2}px`);
        const S = -s.snapGrid[0]
          , w = -s.slidesGrid[0];
        s.snapGrid = s.snapGrid.map(C => C + S),
        s.slidesGrid = s.slidesGrid.map(C => C + w)
    }
    if (f !== o && s.emit("slidesLengthChange"),
    c.length !== E && (s.params.watchOverflow && s.checkOverflow(),
    s.emit("snapGridLengthChange")),
    p.length !== T && s.emit("slidesGridLengthChange"),
    t.watchSlidesProgress && s.updateSlidesOffset(),
    s.emit("slidesUpdated"),
    !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
        const S = `${t.containerModifierClass}backface-hidden`
          , w = s.el.classList.contains(S);
        f <= t.maxBackfaceHiddenSlides ? w || s.el.classList.add(S) : w && s.el.classList.remove(S)
    }
}
function Is(s) {
    const e = this
      , t = []
      , i = e.virtual && e.params.virtual.enabled;
    let r = 0, n;
    typeof s == "number" ? e.setTransition(s) : s === !0 && e.setTransition(e.params.speed);
    const a = l => i ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach(l => {
                t.push(l)
            }
            );
        else
            for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                const l = e.activeIndex + n;
                if (l > e.slides.length && !i)
                    break;
                t.push(a(l))
            }
    else
        t.push(a(e.activeIndex));
    for (n = 0; n < t.length; n += 1)
        if (typeof t[n] < "u") {
            const l = t[n].offsetHeight;
            r = l > r ? l : r
        }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}
function ks() {
    const s = this
      , e = s.slides
      , t = s.isElement ? s.isHorizontal() ? s.wrapperEl.offsetLeft : s.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1)
        e[i].swiperSlideOffset = (s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - s.cssOverflowAdjustment()
}
const nt = (s, e, t) => {
    e && !s.classList.contains(t) ? s.classList.add(t) : !e && s.classList.contains(t) && s.classList.remove(t)
}
;
function zs(s=this && this.translate || 0) {
    const e = this
      , t = e.params
      , {slides: i, rtlTranslate: r, snapGrid: n} = e;
    if (i.length === 0)
        return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -s;
    r && (a = s),
    e.visibleSlidesIndexes = [],
    e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let o = 0; o < i.length; o += 1) {
        const d = i[o];
        let f = d.swiperSlideOffset;
        t.cssMode && t.centeredSlides && (f -= i[0].swiperSlideOffset);
        const c = (a + (t.centeredSlides ? e.minTranslate() : 0) - f) / (d.swiperSlideSize + l)
          , p = (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - f) / (d.swiperSlideSize + l)
          , u = -(a - f)
          , h = u + e.slidesSizesGrid[o]
          , m = u >= 0 && u <= e.size - e.slidesSizesGrid[o]
          , E = u >= 0 && u < e.size - 1 || h > 1 && h <= e.size || u <= 0 && h >= e.size;
        E && (e.visibleSlides.push(d),
        e.visibleSlidesIndexes.push(o)),
        nt(d, E, t.slideVisibleClass),
        nt(d, m, t.slideFullyVisibleClass),
        d.progress = r ? -c : c,
        d.originalProgress = r ? -p : p
    }
}
function Ds(s) {
    const e = this;
    if (typeof s > "u") {
        const f = e.rtlTranslate ? -1 : 1;
        s = e && e.translate && e.translate * f || 0
    }
    const t = e.params
      , i = e.maxTranslate() - e.minTranslate();
    let {progress: r, isBeginning: n, isEnd: a, progressLoop: l} = e;
    const o = n
      , d = a;
    if (i === 0)
        r = 0,
        n = !0,
        a = !0;
    else {
        r = (s - e.minTranslate()) / i;
        const f = Math.abs(s - e.minTranslate()) < 1
          , c = Math.abs(s - e.maxTranslate()) < 1;
        n = f || r <= 0,
        a = c || r >= 1,
        f && (r = 0),
        c && (r = 1)
    }
    if (t.loop) {
        const f = e.getSlideIndexByData(0)
          , c = e.getSlideIndexByData(e.slides.length - 1)
          , p = e.slidesGrid[f]
          , u = e.slidesGrid[c]
          , h = e.slidesGrid[e.slidesGrid.length - 1]
          , m = Math.abs(s);
        m >= p ? l = (m - p) / h : l = (m + h - u) / h,
        l > 1 && (l -= 1)
    }
    Object.assign(e, {
        progress: r,
        progressLoop: l,
        isBeginning: n,
        isEnd: a
    }),
    (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(s),
    n && !o && e.emit("reachBeginning toEdge"),
    a && !d && e.emit("reachEnd toEdge"),
    (o && !n || d && !a) && e.emit("fromEdge"),
    e.emit("progress", r)
}
const Pe = (s, e, t) => {
    e && !s.classList.contains(t) ? s.classList.add(t) : !e && s.classList.contains(t) && s.classList.remove(t)
}
;
function Bs() {
    const s = this
      , {slides: e, params: t, slidesEl: i, activeIndex: r} = s
      , n = s.virtual && t.virtual.enabled
      , a = s.grid && t.grid && t.grid.rows > 1
      , l = c => N(i, `.${t.slideClass}${c}, swiper-slide${c}`)[0];
    let o, d, f;
    if (n)
        if (t.loop) {
            let c = r - s.virtual.slidesBefore;
            c < 0 && (c = s.virtual.slides.length + c),
            c >= s.virtual.slides.length && (c -= s.virtual.slides.length),
            o = l(`[data-swiper-slide-index="${c}"]`)
        } else
            o = l(`[data-swiper-slide-index="${r}"]`);
    else
        a ? (o = e.find(c => c.column === r),
        f = e.find(c => c.column === r + 1),
        d = e.find(c => c.column === r - 1)) : o = e[r];
    o && (a || (f = xs(o, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !f && (f = e[0]),
    d = Ts(o, `.${t.slideClass}, swiper-slide`)[0],
    t.loop && !d === 0 && (d = e[e.length - 1]))),
    e.forEach(c => {
        Pe(c, c === o, t.slideActiveClass),
        Pe(c, c === f, t.slideNextClass),
        Pe(c, c === d, t.slidePrevClass)
    }
    ),
    s.emitSlidesClasses()
}
const me = (s, e) => {
    if (!s || s.destroyed || !s.params)
        return;
    const t = () => s.isElement ? "swiper-slide" : `.${s.params.slideClass}`
      , i = e.closest(t());
    if (i) {
        let r = i.querySelector(`.${s.params.lazyPreloaderClass}`);
        !r && s.isElement && (i.shadowRoot ? r = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`) : requestAnimationFrame( () => {
            i.shadowRoot && (r = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),
            r && r.remove())
        }
        )),
        r && r.remove()
    }
}
  , Me = (s, e) => {
    if (!s.slides[e])
        return;
    const t = s.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading")
}
  , Ve = s => {
    if (!s || s.destroyed || !s.params)
        return;
    let e = s.params.lazyPreloadPrevNext;
    const t = s.slides.length;
    if (!t || !e || e < 0)
        return;
    e = Math.min(e, t);
    const i = s.params.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(s.params.slidesPerView)
      , r = s.activeIndex;
    if (s.params.grid && s.params.grid.rows > 1) {
        const a = r
          , l = [a - e];
        l.push(...Array.from({
            length: e
        }).map( (o, d) => a + i + d)),
        s.slides.forEach( (o, d) => {
            l.includes(o.column) && Me(s, d)
        }
        );
        return
    }
    const n = r + i - 1;
    if (s.params.rewind || s.params.loop)
        for (let a = r - e; a <= n + e; a += 1) {
            const l = (a % t + t) % t;
            (l < r || l > n) && Me(s, l)
        }
    else
        for (let a = Math.max(r - e, 0); a <= Math.min(n + e, t - 1); a += 1)
            a !== r && (a > n || a < r) && Me(s, a)
}
;
function Vs(s) {
    const {slidesGrid: e, params: t} = s
      , i = s.rtlTranslate ? s.translate : -s.translate;
    let r;
    for (let n = 0; n < e.length; n += 1)
        typeof e[n + 1] < "u" ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2 ? r = n : i >= e[n] && i < e[n + 1] && (r = n + 1) : i >= e[n] && (r = n);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0),
    r
}
function Gs(s) {
    const e = this
      , t = e.rtlTranslate ? e.translate : -e.translate
      , {snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: l} = e;
    let o = s, d;
    const f = u => {
        let h = u - e.virtual.slidesBefore;
        return h < 0 && (h = e.virtual.slides.length + h),
        h >= e.virtual.slides.length && (h -= e.virtual.slides.length),
        h
    }
    ;
    if (typeof o > "u" && (o = Vs(e)),
    i.indexOf(t) >= 0)
        d = i.indexOf(t);
    else {
        const u = Math.min(r.slidesPerGroupSkip, o);
        d = u + Math.floor((o - u) / r.slidesPerGroup)
    }
    if (d >= i.length && (d = i.length - 1),
    o === n && !e.params.loop) {
        d !== l && (e.snapIndex = d,
        e.emit("snapIndexChange"));
        return
    }
    if (o === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
        e.realIndex = f(o);
        return
    }
    const c = e.grid && r.grid && r.grid.rows > 1;
    let p;
    if (e.virtual && r.virtual.enabled && r.loop)
        p = f(o);
    else if (c) {
        const u = e.slides.find(m => m.column === o);
        let h = parseInt(u.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(h) && (h = Math.max(e.slides.indexOf(u), 0)),
        p = Math.floor(h / r.grid.rows)
    } else if (e.slides[o]) {
        const u = e.slides[o].getAttribute("data-swiper-slide-index");
        u ? p = parseInt(u, 10) : p = o
    } else
        p = o;
    Object.assign(e, {
        previousSnapIndex: l,
        snapIndex: d,
        previousRealIndex: a,
        realIndex: p,
        previousIndex: n,
        activeIndex: o
    }),
    e.initialized && Ve(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && (a !== p && e.emit("realIndexChange"),
    e.emit("slideChange"))
}
function Hs(s, e) {
    const t = this
      , i = t.params;
    let r = s.closest(`.${i.slideClass}, swiper-slide`);
    !r && t.isElement && e && e.length > 1 && e.includes(s) && [...e.slice(e.indexOf(s) + 1, e.length)].forEach(l => {
        !r && l.matches && l.matches(`.${i.slideClass}, swiper-slide`) && (r = l)
    }
    );
    let n = !1, a;
    if (r) {
        for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === r) {
                n = !0,
                a = l;
                break
            }
    }
    if (r && n)
        t.clickedSlide = r,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a;
    else {
        t.clickedSlide = void 0,
        t.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var Rs = {
    updateSize: Ls,
    updateSlides: Os,
    updateAutoHeight: Is,
    updateSlidesOffset: ks,
    updateSlidesProgress: zs,
    updateProgress: Ds,
    updateSlidesClasses: Bs,
    updateActiveIndex: Gs,
    updateClickedSlide: Hs
};
function Ns(s=this.isHorizontal() ? "x" : "y") {
    const e = this
      , {params: t, rtlTranslate: i, translate: r, wrapperEl: n} = e;
    if (t.virtualTranslate)
        return i ? -r : r;
    if (t.cssMode)
        return r;
    let a = ws(n, s);
    return a += e.cssOverflowAdjustment(),
    i && (a = -a),
    a || 0
}
function Fs(s, e) {
    const t = this
      , {rtlTranslate: i, params: r, wrapperEl: n, progress: a} = t;
    let l = 0
      , o = 0;
    const d = 0;
    t.isHorizontal() ? l = i ? -s : s : o = s,
    r.roundLengths && (l = Math.floor(l),
    o = Math.floor(o)),
    t.previousTranslate = t.translate,
    t.translate = t.isHorizontal() ? l : o,
    r.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -o : r.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : o -= t.cssOverflowAdjustment(),
    n.style.transform = `translate3d(${l}px, ${o}px, ${d}px)`);
    let f;
    const c = t.maxTranslate() - t.minTranslate();
    c === 0 ? f = 0 : f = (s - t.minTranslate()) / c,
    f !== a && t.updateProgress(s),
    t.emit("setTranslate", t.translate, e)
}
function js() {
    return -this.snapGrid[0]
}
function Us() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function Ws(s=0, e=this.params.speed, t=!0, i=!0, r) {
    const n = this
      , {params: a, wrapperEl: l} = n;
    if (n.animating && a.preventInteractionOnTransition)
        return !1;
    const o = n.minTranslate()
      , d = n.maxTranslate();
    let f;
    if (i && s > o ? f = o : i && s < d ? f = d : f = s,
    n.updateProgress(f),
    a.cssMode) {
        const c = n.isHorizontal();
        if (e === 0)
            l[c ? "scrollLeft" : "scrollTop"] = -f;
        else {
            if (!n.support.smoothScroll)
                return Vt({
                    swiper: n,
                    targetPosition: -f,
                    side: c ? "left" : "top"
                }),
                !0;
            l.scrollTo({
                [c ? "left" : "top"]: -f,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (n.setTransition(0),
    n.setTranslate(f),
    t && (n.emit("beforeTransitionStart", e, r),
    n.emit("transitionEnd"))) : (n.setTransition(e),
    n.setTranslate(f),
    t && (n.emit("beforeTransitionStart", e, r),
    n.emit("transitionStart")),
    n.animating || (n.animating = !0,
    n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(p) {
        !n || n.destroyed || p.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
        n.onTranslateToWrapperTransitionEnd = null,
        delete n.onTranslateToWrapperTransitionEnd,
        n.animating = !1,
        t && n.emit("transitionEnd"))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
    !0
}
var qs = {
    getTranslate: Ns,
    setTranslate: Fs,
    minTranslate: js,
    maxTranslate: Us,
    translateTo: Ws
};
function Ys(s, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${s}ms`,
    t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : ""),
    t.emit("setTransition", s, e)
}
function Nt({swiper: s, runCallbacks: e, direction: t, step: i}) {
    const {activeIndex: r, previousIndex: n} = s;
    let a = t;
    a || (r > n ? a = "next" : r < n ? a = "prev" : a = "reset"),
    s.emit(`transition${i}`),
    e && a === "reset" ? s.emit(`slideResetTransition${i}`) : e && r !== n && (s.emit(`slideChangeTransition${i}`),
    a === "next" ? s.emit(`slideNextTransition${i}`) : s.emit(`slidePrevTransition${i}`))
}
function Xs(s=!0, e) {
    const t = this
      , {params: i} = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(),
    Nt({
        swiper: t,
        runCallbacks: s,
        direction: e,
        step: "Start"
    }))
}
function Ks(s=!0, e) {
    const t = this
      , {params: i} = t;
    t.animating = !1,
    !i.cssMode && (t.setTransition(0),
    Nt({
        swiper: t,
        runCallbacks: s,
        direction: e,
        step: "End"
    }))
}
var Zs = {
    setTransition: Ys,
    transitionStart: Xs,
    transitionEnd: Ks
};
function Js(s=0, e, t=!0, i, r) {
    typeof s == "string" && (s = parseInt(s, 10));
    const n = this;
    let a = s;
    a < 0 && (a = 0);
    const {params: l, snapGrid: o, slidesGrid: d, previousIndex: f, activeIndex: c, rtlTranslate: p, wrapperEl: u, enabled: h} = n;
    if (!h && !i && !r || n.destroyed || n.animating && l.preventInteractionOnTransition)
        return !1;
    typeof e > "u" && (e = n.params.speed);
    const m = Math.min(n.params.slidesPerGroupSkip, a);
    let E = m + Math.floor((a - m) / n.params.slidesPerGroup);
    E >= o.length && (E = o.length - 1);
    const T = -o[E];
    if (l.normalizeSlideIndex)
        for (let $ = 0; $ < d.length; $ += 1) {
            const b = -Math.floor(T * 100)
              , M = Math.floor(d[$] * 100)
              , S = Math.floor(d[$ + 1] * 100);
            typeof d[$ + 1] < "u" ? b >= M && b < S - (S - M) / 2 ? a = $ : b >= M && b < S && (a = $ + 1) : b >= M && (a = $)
        }
    if (n.initialized && a !== c && (!n.allowSlideNext && (p ? T > n.translate && T > n.minTranslate() : T < n.translate && T < n.minTranslate()) || !n.allowSlidePrev && T > n.translate && T > n.maxTranslate() && (c || 0) !== a))
        return !1;
    a !== (f || 0) && t && n.emit("beforeSlideChangeStart"),
    n.updateProgress(T);
    let v;
    a > c ? v = "next" : a < c ? v = "prev" : v = "reset";
    const g = n.virtual && n.params.virtual.enabled;
    if (!(g && r) && (p && -T === n.translate || !p && T === n.translate))
        return n.updateActiveIndex(a),
        l.autoHeight && n.updateAutoHeight(),
        n.updateSlidesClasses(),
        l.effect !== "slide" && n.setTranslate(T),
        v !== "reset" && (n.transitionStart(t, v),
        n.transitionEnd(t, v)),
        !1;
    if (l.cssMode) {
        const $ = n.isHorizontal()
          , b = p ? T : -T;
        if (e === 0)
            g && (n.wrapperEl.style.scrollSnapType = "none",
            n._immediateVirtual = !0),
            g && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0,
            requestAnimationFrame( () => {
                u[$ ? "scrollLeft" : "scrollTop"] = b
            }
            )) : u[$ ? "scrollLeft" : "scrollTop"] = b,
            g && requestAnimationFrame( () => {
                n.wrapperEl.style.scrollSnapType = "",
                n._immediateVirtual = !1
            }
            );
        else {
            if (!n.support.smoothScroll)
                return Vt({
                    swiper: n,
                    targetPosition: b,
                    side: $ ? "left" : "top"
                }),
                !0;
            u.scrollTo({
                [$ ? "left" : "top"]: b,
                behavior: "smooth"
            })
        }
        return !0
    }
    const A = Rt().isSafari;
    return g && !r && A && n.isElement && n.virtual.update(!1, !1, a),
    n.setTransition(e),
    n.setTranslate(T),
    n.updateActiveIndex(a),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, i),
    n.transitionStart(t, v),
    e === 0 ? n.transitionEnd(t, v) : n.animating || (n.animating = !0,
    n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(b) {
        !n || n.destroyed || b.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
        n.onSlideToWrapperTransitionEnd = null,
        delete n.onSlideToWrapperTransitionEnd,
        n.transitionEnd(t, v))
    }
    ),
    n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
    !0
}
function Qs(s=0, e, t=!0, i) {
    typeof s == "string" && (s = parseInt(s, 10));
    const r = this;
    if (r.destroyed)
        return;
    typeof e > "u" && (e = r.params.speed);
    const n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = s;
    if (r.params.loop)
        if (r.virtual && r.params.virtual.enabled)
            a = a + r.virtual.slidesBefore;
        else {
            let l;
            if (n) {
                const m = a * r.params.grid.rows;
                l = r.slides.find(E => E.getAttribute("data-swiper-slide-index") * 1 === m).column
            } else
                l = r.getSlideIndexByData(a);
            const o = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length
              , {centeredSlides: d, slidesOffsetBefore: f, slidesOffsetAfter: c} = r.params
              , p = d || !!f || !!c;
            let u = r.params.slidesPerView;
            u === "auto" ? u = r.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(r.params.slidesPerView, 10)),
            p && u % 2 === 0 && (u = u + 1));
            let h = o - l < u;
            if (p && (h = h || l < Math.ceil(u / 2)),
            i && p && r.params.slidesPerView !== "auto" && !n && (h = !1),
            h) {
                const m = p ? l < r.activeIndex ? "prev" : "next" : l - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: m,
                    slideTo: !0,
                    activeSlideIndex: m === "next" ? l + 1 : l - o + 1,
                    slideRealIndex: m === "next" ? r.realIndex : void 0
                })
            }
            if (n) {
                const m = a * r.params.grid.rows;
                a = r.slides.find(E => E.getAttribute("data-swiper-slide-index") * 1 === m).column
            } else
                a = r.getSlideIndexByData(a)
        }
    return requestAnimationFrame( () => {
        r.slideTo(a, e, t, i)
    }
    ),
    r
}
function ei(s, e=!0, t) {
    const i = this
      , {enabled: r, params: n, animating: a} = i;
    if (!r || i.destroyed)
        return i;
    typeof s > "u" && (s = i.params.speed);
    let l = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l
      , d = i.virtual && n.virtual.enabled;
    if (n.loop) {
        if (a && !d && n.loopPreventsSliding)
            return !1;
        if (i.loopFix({
            direction: "next"
        }),
        i._clientLeft = i.wrapperEl.clientLeft,
        i.activeIndex === i.slides.length - 1 && n.cssMode)
            return requestAnimationFrame( () => {
                i.slideTo(i.activeIndex + o, s, e, t)
            }
            ),
            !0
    }
    return n.rewind && i.isEnd ? i.slideTo(0, s, e, t) : i.slideTo(i.activeIndex + o, s, e, t)
}
function ti(s, e=!0, t) {
    const i = this
      , {params: r, snapGrid: n, slidesGrid: a, rtlTranslate: l, enabled: o, animating: d} = i;
    if (!o || i.destroyed)
        return i;
    typeof s > "u" && (s = i.params.speed);
    const f = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (d && !f && r.loopPreventsSliding)
            return !1;
        i.loopFix({
            direction: "prev"
        }),
        i._clientLeft = i.wrapperEl.clientLeft
    }
    const c = l ? i.translate : -i.translate;
    function p(v) {
        return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v)
    }
    const u = p(c)
      , h = n.map(v => p(v))
      , m = r.freeMode && r.freeMode.enabled;
    let E = n[h.indexOf(u) - 1];
    if (typeof E > "u" && (r.cssMode || m)) {
        let v;
        n.forEach( (g, x) => {
            u >= g && (v = x)
        }
        ),
        typeof v < "u" && (E = m ? n[v] : n[v > 0 ? v - 1 : v])
    }
    let T = 0;
    if (typeof E < "u" && (T = a.indexOf(E),
    T < 0 && (T = i.activeIndex - 1),
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (T = T - i.slidesPerViewDynamic("previous", !0) + 1,
    T = Math.max(T, 0))),
    r.rewind && i.isBeginning) {
        const v = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(v, s, e, t)
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
        return requestAnimationFrame( () => {
            i.slideTo(T, s, e, t)
        }
        ),
        !0;
    return i.slideTo(T, s, e, t)
}
function si(s, e=!0, t) {
    const i = this;
    if (!i.destroyed)
        return typeof s > "u" && (s = i.params.speed),
        i.slideTo(i.activeIndex, s, e, t)
}
function ii(s, e=!0, t, i=.5) {
    const r = this;
    if (r.destroyed)
        return;
    typeof s > "u" && (s = r.params.speed);
    let n = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, n)
      , l = a + Math.floor((n - a) / r.params.slidesPerGroup)
      , o = r.rtlTranslate ? r.translate : -r.translate;
    if (o >= r.snapGrid[l]) {
        const d = r.snapGrid[l]
          , f = r.snapGrid[l + 1];
        o - d > (f - d) * i && (n += r.params.slidesPerGroup)
    } else {
        const d = r.snapGrid[l - 1]
          , f = r.snapGrid[l];
        o - d <= (f - d) * i && (n -= r.params.slidesPerGroup)
    }
    return n = Math.max(n, 0),
    n = Math.min(n, r.slidesGrid.length - 1),
    r.slideTo(n, s, e, t)
}
function ri() {
    const s = this;
    if (s.destroyed)
        return;
    const {params: e, slidesEl: t} = s
      , i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
    let r = s.getSlideIndexWhenGrid(s.clickedIndex), n;
    const a = s.isElement ? "swiper-slide" : `.${e.slideClass}`
      , l = s.grid && s.params.grid && s.params.grid.rows > 1;
    if (e.loop) {
        if (s.animating)
            return;
        n = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
        e.centeredSlides ? s.slideToLoop(n) : r > (l ? (s.slides.length - i) / 2 - (s.params.grid.rows - 1) : s.slides.length - i) ? (s.loopFix(),
        r = s.getSlideIndex(N(t, `${a}[data-swiper-slide-index="${n}"]`)[0]),
        Bt( () => {
            s.slideTo(r)
        }
        )) : s.slideTo(r)
    } else
        s.slideTo(r)
}
var ni = {
    slideTo: Js,
    slideToLoop: Qs,
    slideNext: ei,
    slidePrev: ti,
    slideReset: si,
    slideToClosest: ii,
    slideToClickedSlide: ri
};
function oi(s, e) {
    const t = this
      , {params: i, slidesEl: r} = t;
    if (!i.loop || t.virtual && t.params.virtual.enabled)
        return;
    const n = () => {
        N(r, `.${i.slideClass}, swiper-slide`).forEach( (h, m) => {
            h.setAttribute("data-swiper-slide-index", m)
        }
        )
    }
      , a = () => {
        const u = N(r, `.${i.slideBlankClass}`);
        u.forEach(h => {
            h.remove()
        }
        ),
        u.length > 0 && (t.recalcSlides(),
        t.updateSlides())
    }
      , l = t.grid && i.grid && i.grid.rows > 1;
    i.loopAddBlankSlides && (i.slidesPerGroup > 1 || l) && a();
    const o = i.slidesPerGroup * (l ? i.grid.rows : 1)
      , d = t.slides.length % o !== 0
      , f = l && t.slides.length % i.grid.rows !== 0
      , c = u => {
        for (let h = 0; h < u; h += 1) {
            const m = t.isElement ? Be("swiper-slide", [i.slideBlankClass]) : Be("div", [i.slideClass, i.slideBlankClass]);
            t.slidesEl.append(m)
        }
    }
    ;
    if (d) {
        if (i.loopAddBlankSlides) {
            const u = o - t.slides.length % o;
            c(u),
            t.recalcSlides(),
            t.updateSlides()
        } else
            ye("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else if (f) {
        if (i.loopAddBlankSlides) {
            const u = i.grid.rows - t.slides.length % i.grid.rows;
            c(u),
            t.recalcSlides(),
            t.updateSlides()
        } else
            ye("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n()
    } else
        n();
    const p = i.centeredSlides || !!i.slidesOffsetBefore || !!i.slidesOffsetAfter;
    t.loopFix({
        slideRealIndex: s,
        direction: p ? void 0 : "next",
        initial: e
    })
}
function ai({slideRealIndex: s, slideTo: e=!0, direction: t, setTranslate: i, activeSlideIndex: r, initial: n, byController: a, byMousewheel: l}={}) {
    const o = this;
    if (!o.params.loop)
        return;
    o.emit("beforeLoopFix");
    const {slides: d, allowSlidePrev: f, allowSlideNext: c, slidesEl: p, params: u} = o
      , {centeredSlides: h, slidesOffsetBefore: m, slidesOffsetAfter: E, initialSlide: T} = u
      , v = h || !!m || !!E;
    if (o.allowSlidePrev = !0,
    o.allowSlideNext = !0,
    o.virtual && u.virtual.enabled) {
        e && (!v && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : v && o.snapIndex < u.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
        o.allowSlidePrev = f,
        o.allowSlideNext = c,
        o.emit("loopFix");
        return
    }
    let g = u.slidesPerView;
    g === "auto" ? g = o.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(u.slidesPerView, 10)),
    v && g % 2 === 0 && (g = g + 1));
    const x = u.slidesPerGroupAuto ? g : u.slidesPerGroup;
    let y = v ? Math.max(x, Math.ceil(g / 2)) : x;
    y % x !== 0 && (y += x - y % x),
    y += u.loopAdditionalSlides,
    o.loopedSlides = y;
    const A = o.grid && u.grid && u.grid.rows > 1;
    d.length < g + y || o.params.effect === "cards" && d.length < g + y * 2 ? ye("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : A && u.grid.fill === "row" && ye("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const $ = []
      , b = []
      , M = A ? Math.ceil(d.length / u.grid.rows) : d.length
      , S = n && M - T < g && !v;
    let w = S ? T : o.activeIndex;
    typeof r > "u" ? r = o.getSlideIndex(d.find(_ => _.classList.contains(u.slideActiveClass))) : w = r;
    const C = t === "next" || !t
      , k = t === "prev" || !t;
    let V = 0
      , R = 0;
    const q = (A ? d[r].column : r) + (v && typeof i > "u" ? -g / 2 + .5 : 0);
    if (q < y) {
        V = Math.max(y - q, x);
        for (let _ = 0; _ < y - q; _ += 1) {
            const L = _ - Math.floor(_ / M) * M;
            if (A) {
                const z = M - L - 1;
                for (let j = d.length - 1; j >= 0; j -= 1)
                    d[j].column === z && $.push(j)
            } else
                $.push(M - L - 1)
        }
    } else if (q + g > M - y) {
        R = Math.max(q - (M - y * 2), x),
        S && (R = Math.max(R, g - M + T + 1));
        for (let _ = 0; _ < R; _ += 1) {
            const L = _ - Math.floor(_ / M) * M;
            A ? d.forEach( (z, j) => {
                z.column === L && b.push(j)
            }
            ) : b.push(L)
        }
    }
    if (o.__preventObserver__ = !0,
    requestAnimationFrame( () => {
        o.__preventObserver__ = !1
    }
    ),
    o.params.effect === "cards" && d.length < g + y * 2 && (b.includes(r) && b.splice(b.indexOf(r), 1),
    $.includes(r) && $.splice($.indexOf(r), 1)),
    k && $.forEach(_ => {
        d[_].swiperLoopMoveDOM = !0,
        p.prepend(d[_]),
        d[_].swiperLoopMoveDOM = !1
    }
    ),
    C && b.forEach(_ => {
        d[_].swiperLoopMoveDOM = !0,
        p.append(d[_]),
        d[_].swiperLoopMoveDOM = !1
    }
    ),
    o.recalcSlides(),
    u.slidesPerView === "auto" ? o.updateSlides() : A && ($.length > 0 && k || b.length > 0 && C) && o.slides.forEach( (_, L) => {
        o.grid.updateSlide(L, _, o.slides)
    }
    ),
    u.watchSlidesProgress && o.updateSlidesOffset(),
    e) {
        if ($.length > 0 && k) {
            if (typeof s > "u") {
                const _ = o.slidesGrid[w]
                  , z = o.slidesGrid[w + V] - _;
                l ? o.setTranslate(o.translate - z) : (o.slideTo(w + Math.ceil(V), 0, !1, !0),
                i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - z,
                o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - z))
            } else if (i) {
                const _ = A ? $.length / u.grid.rows : $.length;
                o.slideTo(o.activeIndex + _, 0, !1, !0),
                o.touchEventsData.currentTranslate = o.translate
            }
        } else if (b.length > 0 && C)
            if (typeof s > "u") {
                const _ = o.slidesGrid[w]
                  , z = o.slidesGrid[w - R] - _;
                l ? o.setTranslate(o.translate - z) : (o.slideTo(w - R, 0, !1, !0),
                i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - z,
                o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - z))
            } else {
                const _ = A ? b.length / u.grid.rows : b.length;
                o.slideTo(o.activeIndex - _, 0, !1, !0)
            }
    }
    if (o.allowSlidePrev = f,
    o.allowSlideNext = c,
    o.controller && o.controller.control && !a) {
        const _ = {
            slideRealIndex: s,
            direction: t,
            setTranslate: i,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach(L => {
            !L.destroyed && L.params.loop && L.loopFix({
                ..._,
                slideTo: L.params.slidesPerView === u.slidesPerView ? e : !1
            })
        }
        ) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
            ..._,
            slideTo: o.controller.control.params.slidesPerView === u.slidesPerView ? e : !1
        })
    }
    o.emit("loopFix")
}
function li() {
    const s = this
      , {params: e, slidesEl: t} = s;
    if (!e.loop || !t || s.virtual && s.params.virtual.enabled)
        return;
    s.recalcSlides();
    const i = [];
    s.slides.forEach(r => {
        const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        i[n] = r
    }
    ),
    s.slides.forEach(r => {
        r.removeAttribute("data-swiper-slide-index")
    }
    ),
    i.forEach(r => {
        t.append(r)
    }
    ),
    s.recalcSlides(),
    s.slideTo(s.realIndex, 0)
}
var di = {
    loopCreate: oi,
    loopFix: ai,
    loopDestroy: li
};
function ci(s) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
        return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
    t.style.cursor = "move",
    t.style.cursor = s ? "grabbing" : "grab",
    e.isElement && requestAnimationFrame( () => {
        e.__preventObserver__ = !1
    }
    )
}
function ui() {
    const s = this;
    s.params.watchOverflow && s.isLocked || s.params.cssMode || (s.isElement && (s.__preventObserver__ = !0),
    s[s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
    s.isElement && requestAnimationFrame( () => {
        s.__preventObserver__ = !1
    }
    ))
}
var fi = {
    setGrabCursor: ci,
    unsetGrabCursor: ui
};
function pi(s, e=this) {
    function t(i) {
        if (!i || i === Q() || i === I())
            return null;
        i.assignedSlot && (i = i.assignedSlot);
        const r = i.closest(s);
        return !r && !i.getRootNode ? null : r || t(i.getRootNode().host)
    }
    return t(e)
}
function ot(s, e, t) {
    const i = I()
      , {params: r} = s
      , n = r.edgeSwipeDetection
      , a = r.edgeSwipeThreshold;
    return n && (t <= a || t >= i.innerWidth - a) ? n === "prevent" ? (e.preventDefault(),
    !0) : !1 : !0
}
function hi(s) {
    const e = this
      , t = Q();
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
        if (r.pointerId !== null && r.pointerId !== i.pointerId)
            return;
        r.pointerId = i.pointerId
    } else
        i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
        ot(e, i, i.targetTouches[0].pageX);
        return
    }
    const {params: n, touches: a, enabled: l} = e;
    if (!l || !n.simulateTouch && i.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
        return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let o = i.target;
    if (n.touchEventsTarget === "wrapper" && !Ss(o, e.wrapperEl) || "which"in i && i.which === 3 || "button"in i && i.button > 0 || r.isTouched && r.isMoved)
        return;
    const d = !!n.noSwipingClass && n.noSwipingClass !== ""
      , f = i.composedPath ? i.composedPath() : i.path;
    d && i.target && i.target.shadowRoot && f && (o = f[0]);
    const c = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
      , p = !!(i.target && i.target.shadowRoot);
    if (n.noSwiping && (p ? pi(c, o) : o.closest(c))) {
        e.allowClick = !0;
        return
    }
    if (n.swipeHandler && !o.closest(n.swipeHandler))
        return;
    a.currentX = i.pageX,
    a.currentY = i.pageY;
    const u = a.currentX
      , h = a.currentY;
    if (!ot(e, i, u))
        return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
    a.startX = u,
    a.startY = h,
    r.touchStartTime = we(),
    e.allowClick = !0,
    e.updateSize(),
    e.swipeDirection = void 0,
    n.threshold > 0 && (r.allowThresholdMove = !1);
    let m = !0;
    o.matches(r.focusableElements) && (m = !1,
    o.nodeName === "SELECT" && (r.isTouched = !1)),
    t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== o && (i.pointerType === "mouse" || i.pointerType !== "mouse" && !o.matches(r.focusableElements)) && t.activeElement.blur();
    const E = m && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || E) && !o.isContentEditable && i.preventDefault(),
    n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(),
    e.emit("touchStart", i)
}
function mi(s) {
    const e = Q()
      , t = this
      , i = t.touchEventsData
      , {params: r, touches: n, rtlTranslate: a, enabled: l} = t;
    if (!l || !r.simulateTouch && s.pointerType === "mouse")
        return;
    let o = s;
    if (o.originalEvent && (o = o.originalEvent),
    o.type === "pointermove" && (i.touchId !== null || o.pointerId !== i.pointerId))
        return;
    let d;
    if (o.type === "touchmove") {
        if (d = [...o.changedTouches].find(y => y.identifier === i.touchId),
        !d || d.identifier !== i.touchId)
            return
    } else
        d = o;
    if (!i.isTouched) {
        i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", o);
        return
    }
    const f = d.pageX
      , c = d.pageY;
    if (o.preventedByNestedSwiper) {
        n.startX = f,
        n.startY = c;
        return
    }
    if (!t.allowTouchMove) {
        o.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched && (Object.assign(n, {
            startX: f,
            startY: c,
            currentX: f,
            currentY: c
        }),
        i.touchStartTime = we());
        return
    }
    if (r.touchReleaseOnEdges && !r.loop)
        if (t.isVertical()) {
            if (c < n.startY && t.translate <= t.maxTranslate() || c > n.startY && t.translate >= t.minTranslate()) {
                i.isTouched = !1,
                i.isMoved = !1;
                return
            }
        } else {
            if (a && (f > n.startX && -t.translate <= t.maxTranslate() || f < n.startX && -t.translate >= t.minTranslate()))
                return;
            if (!a && (f < n.startX && t.translate <= t.maxTranslate() || f > n.startX && t.translate >= t.minTranslate()))
                return
        }
    if (e.activeElement && e.activeElement.matches(i.focusableElements) && e.activeElement !== o.target && o.pointerType !== "mouse" && e.activeElement.blur(),
    e.activeElement && o.target === e.activeElement && o.target.matches(i.focusableElements)) {
        i.isMoved = !0,
        t.allowClick = !1;
        return
    }
    i.allowTouchCallbacks && t.emit("touchMove", o),
    n.previousX = n.currentX,
    n.previousY = n.currentY,
    n.currentX = f,
    n.currentY = c;
    const p = n.currentX - n.startX
      , u = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(p ** 2 + u ** 2) < t.params.threshold)
        return;
    if (typeof i.isScrolling > "u") {
        let y;
        t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : p * p + u * u >= 25 && (y = Math.atan2(Math.abs(u), Math.abs(p)) * 180 / Math.PI,
        i.isScrolling = t.isHorizontal() ? y > r.touchAngle : 90 - y > r.touchAngle)
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", o),
    typeof i.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = !0),
    i.isScrolling || o.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving)
        return;
    t.allowClick = !1,
    !r.cssMode && o.cancelable && o.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && o.stopPropagation();
    let h = t.isHorizontal() ? p : u
      , m = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (h = Math.abs(h) * (a ? 1 : -1),
    m = Math.abs(m) * (a ? 1 : -1)),
    n.diff = h,
    h *= r.touchRatio,
    a && (h = -h,
    m = -m);
    const E = t.touchesDirection;
    t.swipeDirection = h > 0 ? "prev" : "next",
    t.touchesDirection = m > 0 ? "prev" : "next";
    const T = t.params.loop && !r.cssMode
      , v = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!i.isMoved) {
        if (T && v && t.loopFix({
            direction: t.swipeDirection
        }),
        i.startTranslate = t.getTranslate(),
        t.setTransition(0),
        t.animating) {
            const y = new window.CustomEvent("transitionend",{
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            t.wrapperEl.dispatchEvent(y)
        }
        i.allowMomentumBounce = !1,
        r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
        t.emit("sliderFirstMove", o)
    }
    if (new Date().getTime(),
    r._loopSwapReset !== !1 && i.isMoved && i.allowThresholdMove && E !== t.touchesDirection && T && v && Math.abs(h) >= 1) {
        Object.assign(n, {
            startX: f,
            startY: c,
            currentX: f,
            currentY: c,
            startTranslate: i.currentTranslate
        }),
        i.loopSwapReset = !0,
        i.startTranslate = i.currentTranslate;
        return
    }
    t.emit("sliderMove", o),
    i.isMoved = !0,
    i.currentTranslate = h + i.startTranslate;
    let g = !0
      , x = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (x = 0),
    h > 0 ? (T && v && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (r.slidesPerView !== "auto" && t.slides.length - r.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }),
    i.currentTranslate > t.minTranslate() && (g = !1,
    r.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + h) ** x))) : h < 0 && (T && v && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (r.slidesPerView !== "auto" && t.slides.length - r.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }),
    i.currentTranslate < t.maxTranslate() && (g = !1,
    r.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - h) ** x))),
    g && (o.preventedByNestedSwiper = !0),
    !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
        if (Math.abs(h) > r.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                i.currentTranslate = i.startTranslate,
                n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(),
    t.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate))
}
function gi(s) {
    const e = this
      , t = e.touchEventsData;
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
        if (r = [...i.changedTouches].find(y => y.identifier === t.touchId),
        !r || r.identifier !== t.touchId)
            return
    } else {
        if (t.touchId !== null || i.pointerId !== t.pointerId)
            return;
        r = i
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
        return;
    t.pointerId = null,
    t.touchId = null;
    const {params: a, touches: l, rtlTranslate: o, slidesGrid: d, enabled: f} = e;
    if (!f || !a.simulateTouch && i.pointerType === "mouse")
        return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", i),
    t.allowTouchCallbacks = !1,
    !t.isTouched) {
        t.isMoved && a.grabCursor && e.setGrabCursor(!1),
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const c = we()
      , p = c - t.touchStartTime;
    if (e.allowClick) {
        const y = i.path || i.composedPath && i.composedPath();
        e.updateClickedSlide(y && y[0] || i.target, y),
        e.emit("tap click", i),
        p < 300 && c - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i)
    }
    if (t.lastClickTime = we(),
    Bt( () => {
        e.destroyed || (e.allowClick = !0)
    }
    ),
    !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
        t.isTouched = !1,
        t.isMoved = !1,
        t.startMoving = !1;
        return
    }
    t.isTouched = !1,
    t.isMoved = !1,
    t.startMoving = !1;
    let u;
    if (a.followFinger ? u = o ? e.translate : -e.translate : u = -t.currentTranslate,
    a.cssMode)
        return;
    if (a.freeMode && a.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: u
        });
        return
    }
    const h = u >= -e.maxTranslate() && !e.params.loop;
    let m = 0
      , E = e.slidesSizesGrid[0];
    for (let y = 0; y < d.length; y += y < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
        const A = y < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        typeof d[y + A] < "u" ? (h || u >= d[y] && u < d[y + A]) && (m = y,
        E = d[y + A] - d[y]) : (h || u >= d[y]) && (m = y,
        E = d[d.length - 1] - d[d.length - 2])
    }
    let T = null
      , v = null;
    a.rewind && (e.isBeginning ? v = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (T = 0));
    const g = (u - d[m]) / E
      , x = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (p > a.longSwipesMs) {
        if (!a.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (g >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? T : m + x) : e.slideTo(m)),
        e.swipeDirection === "prev" && (g > 1 - a.longSwipesRatio ? e.slideTo(m + x) : v !== null && g < 0 && Math.abs(g) > a.longSwipesRatio ? e.slideTo(v) : e.slideTo(m))
    } else {
        if (!a.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(m + x) : e.slideTo(m) : (e.swipeDirection === "next" && e.slideTo(T !== null ? T : m + x),
        e.swipeDirection === "prev" && e.slideTo(v !== null ? v : m))
    }
}
function at() {
    const s = this
      , {params: e, el: t} = s;
    if (t && t.offsetWidth === 0)
        return;
    e.breakpoints && s.setBreakpoint();
    const {allowSlideNext: i, allowSlidePrev: r, snapGrid: n} = s
      , a = s.virtual && s.params.virtual.enabled;
    s.allowSlideNext = !0,
    s.allowSlidePrev = !0,
    s.updateSize(),
    s.updateSlides(),
    s.updateSlidesClasses();
    const l = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && s.isEnd && !s.isBeginning && !s.params.centeredSlides && !l ? s.slideTo(s.slides.length - 1, 0, !1, !0) : s.params.loop && !a ? s.slideToLoop(s.realIndex, 0, !1, !0) : s.slideTo(s.activeIndex, 0, !1, !0),
    s.autoplay && s.autoplay.running && s.autoplay.paused && (clearTimeout(s.autoplay.resizeTimeout),
    s.autoplay.resizeTimeout = setTimeout( () => {
        s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.resume()
    }
    , 500)),
    s.allowSlidePrev = r,
    s.allowSlideNext = i,
    s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow()
}
function vi(s) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && s.preventDefault(),
    e.params.preventClicksPropagation && e.animating && (s.stopPropagation(),
    s.stopImmediatePropagation())))
}
function wi() {
    const s = this
      , {wrapperEl: e, rtlTranslate: t, enabled: i} = s;
    if (!i)
        return;
    s.previousTranslate = s.translate,
    s.isHorizontal() ? s.translate = -e.scrollLeft : s.translate = -e.scrollTop,
    s.translate === 0 && (s.translate = 0),
    s.updateActiveIndex(),
    s.updateSlidesClasses();
    let r;
    const n = s.maxTranslate() - s.minTranslate();
    n === 0 ? r = 0 : r = (s.translate - s.minTranslate()) / n,
    r !== s.progress && s.updateProgress(t ? -s.translate : s.translate),
    s.emit("setTranslate", s.translate, !1)
}
function yi(s) {
    const e = this;
    me(e, s.target),
    !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
}
function bi() {
    const s = this;
    s.documentTouchHandlerProceeded || (s.documentTouchHandlerProceeded = !0,
    s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"))
}
const Ft = (s, e) => {
    const t = Q()
      , {params: i, el: r, wrapperEl: n, device: a} = s
      , l = !!i.nested
      , o = e === "on" ? "addEventListener" : "removeEventListener"
      , d = e;
    !r || typeof r == "string" || (t[o]("touchstart", s.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }),
    r[o]("touchstart", s.onTouchStart, {
        passive: !1
    }),
    r[o]("pointerdown", s.onTouchStart, {
        passive: !1
    }),
    t[o]("touchmove", s.onTouchMove, {
        passive: !1,
        capture: l
    }),
    t[o]("pointermove", s.onTouchMove, {
        passive: !1,
        capture: l
    }),
    t[o]("touchend", s.onTouchEnd, {
        passive: !0
    }),
    t[o]("pointerup", s.onTouchEnd, {
        passive: !0
    }),
    t[o]("pointercancel", s.onTouchEnd, {
        passive: !0
    }),
    t[o]("touchcancel", s.onTouchEnd, {
        passive: !0
    }),
    t[o]("pointerout", s.onTouchEnd, {
        passive: !0
    }),
    t[o]("pointerleave", s.onTouchEnd, {
        passive: !0
    }),
    t[o]("contextmenu", s.onTouchEnd, {
        passive: !0
    }),
    (i.preventClicks || i.preventClicksPropagation) && r[o]("click", s.onClick, !0),
    i.cssMode && n[o]("scroll", s.onScroll),
    i.updateOnWindowResize ? s[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", at, !0) : s[d]("observerUpdate", at, !0),
    r[o]("load", s.onLoad, {
        capture: !0
    }))
}
;
function Si() {
    const s = this
      , {params: e} = s;
    s.onTouchStart = hi.bind(s),
    s.onTouchMove = mi.bind(s),
    s.onTouchEnd = gi.bind(s),
    s.onDocumentTouchStart = bi.bind(s),
    e.cssMode && (s.onScroll = wi.bind(s)),
    s.onClick = vi.bind(s),
    s.onLoad = yi.bind(s),
    Ft(s, "on")
}
function Ti() {
    Ft(this, "off")
}
var xi = {
    attachEvents: Si,
    detachEvents: Ti
};
const lt = (s, e) => s.grid && e.grid && e.grid.rows > 1;
function Ei() {
    const s = this
      , {realIndex: e, initialized: t, params: i, el: r} = s
      , n = i.breakpoints;
    if (!n || n && Object.keys(n).length === 0)
        return;
    const a = Q()
      , l = i.breakpointsBase === "window" || !i.breakpointsBase ? i.breakpointsBase : "container"
      , o = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? s.el : a.querySelector(i.breakpointsBase)
      , d = s.getBreakpoint(n, l, o);
    if (!d || s.currentBreakpoint === d)
        return;
    const c = (d in n ? n[d] : void 0) || s.originalParams
      , p = lt(s, i)
      , u = lt(s, c)
      , h = s.params.grabCursor
      , m = c.grabCursor
      , E = i.enabled;
    p && !u ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`),
    s.emitContainerClasses()) : !p && u && (r.classList.add(`${i.containerModifierClass}grid`),
    (c.grid.fill && c.grid.fill === "column" || !c.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`),
    s.emitContainerClasses()),
    h && !m ? s.unsetGrabCursor() : !h && m && s.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach(A => {
        if (typeof c[A] > "u")
            return;
        const $ = i[A] && i[A].enabled
          , b = c[A] && c[A].enabled;
        $ && !b && s[A].disable(),
        !$ && b && s[A].enable()
    }
    );
    const T = c.direction && c.direction !== i.direction
      , v = i.loop && (c.slidesPerView !== i.slidesPerView || T)
      , g = i.loop;
    T && t && s.changeDirection(),
    D(s.params, c);
    const x = s.params.enabled
      , y = s.params.loop;
    Object.assign(s, {
        allowTouchMove: s.params.allowTouchMove,
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev
    }),
    E && !x ? s.disable() : !E && x && s.enable(),
    s.currentBreakpoint = d,
    s.emit("_beforeBreakpoint", c),
    t && (v ? (s.loopDestroy(),
    s.loopCreate(e),
    s.updateSlides()) : !g && y ? (s.loopCreate(e),
    s.updateSlides()) : g && !y && s.loopDestroy()),
    s.emit("breakpoint", c)
}
function _i(s, e="window", t) {
    if (!s || e === "container" && !t)
        return;
    let i = !1;
    const r = I()
      , n = e === "window" ? r.innerHeight : t.clientHeight
      , a = Object.keys(s).map(l => {
        if (typeof l == "string" && l.indexOf("@") === 0) {
            const o = parseFloat(l.substr(1));
            return {
                value: n * o,
                point: l
            }
        }
        return {
            value: l,
            point: l
        }
    }
    );
    a.sort( (l, o) => parseInt(l.value, 10) - parseInt(o.value, 10));
    for (let l = 0; l < a.length; l += 1) {
        const {point: o, value: d} = a[l];
        e === "window" ? r.matchMedia(`(min-width: ${d}px)`).matches && (i = o) : d <= t.clientWidth && (i = o)
    }
    return i || "max"
}
var Ci = {
    setBreakpoint: Ei,
    getBreakpoint: _i
};
function $i(s, e) {
    const t = [];
    return s.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(r => {
            i[r] && t.push(e + r)
        }
        ) : typeof i == "string" && t.push(e + i)
    }
    ),
    t
}
function Ai() {
    const s = this
      , {classNames: e, params: t, rtl: i, el: r, device: n} = s
      , a = $i(["initialized", t.direction, {
        "free-mode": s.params.freeMode && t.freeMode.enabled
    }, {
        autoheight: t.autoHeight
    }, {
        rtl: i
    }, {
        grid: t.grid && t.grid.rows > 1
    }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
        android: n.android
    }, {
        ios: n.ios
    }, {
        "css-mode": t.cssMode
    }, {
        centered: t.cssMode && t.centeredSlides
    }, {
        "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...a),
    r.classList.add(...e),
    s.emitContainerClasses()
}
function Pi() {
    const s = this
      , {el: e, classNames: t} = s;
    !e || typeof e == "string" || (e.classList.remove(...t),
    s.emitContainerClasses())
}
var Mi = {
    addClasses: Ai,
    removeClasses: Pi
};
function Li() {
    const s = this
      , {isLocked: e, params: t} = s
      , {slidesOffsetBefore: i} = t;
    if (i) {
        const r = s.slides.length - 1
          , n = s.slidesGrid[r] + s.slidesSizesGrid[r] + i * 2;
        s.isLocked = s.size > n
    } else
        s.isLocked = s.snapGrid.length === 1;
    t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
    t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
    e && e !== s.isLocked && (s.isEnd = !1),
    e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock")
}
var Oi = {
    checkOverflow: Li
}
  , dt = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function Ii(s, e) {
    return function(i={}) {
        const r = Object.keys(i)[0]
          , n = i[r];
        if (typeof n != "object" || n === null) {
            D(e, i);
            return
        }
        if (s[r] === !0 && (s[r] = {
            enabled: !0
        }),
        r === "navigation" && s[r] && s[r].enabled && !s[r].prevEl && !s[r].nextEl && (s[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 && s[r] && s[r].enabled && !s[r].el && (s[r].auto = !0),
        !(r in s && "enabled"in n)) {
            D(e, i);
            return
        }
        typeof s[r] == "object" && !("enabled"in s[r]) && (s[r].enabled = !0),
        s[r] || (s[r] = {
            enabled: !1
        }),
        D(e, i)
    }
}
const Le = {
    eventsEmitter: Ms,
    update: Rs,
    translate: qs,
    transition: Zs,
    slide: ni,
    loop: di,
    grabCursor: fi,
    events: xi,
    breakpoints: Ci,
    checkOverflow: Oi,
    classes: Mi
}
  , Oe = {};
class B {
    constructor(...e) {
        let t, i;
        e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? i = e[0] : [t,i] = e,
        i || (i = {}),
        i = D({}, i),
        t && !i.el && (i.el = t);
        const r = Q();
        if (i.el && typeof i.el == "string" && r.querySelectorAll(i.el).length > 1) {
            const o = [];
            return r.querySelectorAll(i.el).forEach(d => {
                const f = D({}, i, {
                    el: d
                });
                o.push(new B(f))
            }
            ),
            o
        }
        const n = this;
        n.__swiper__ = !0,
        n.support = Gt(),
        n.device = Ht({
            userAgent: i.userAgent
        }),
        n.browser = Rt(),
        n.eventsListeners = {},
        n.eventsAnyListeners = [],
        n.modules = [...n.__modules__],
        i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
        const a = {};
        n.modules.forEach(o => {
            o({
                params: i,
                swiper: n,
                extendParams: Ii(i, a),
                on: n.on.bind(n),
                once: n.once.bind(n),
                off: n.off.bind(n),
                emit: n.emit.bind(n)
            })
        }
        );
        const l = D({}, dt, a);
        return n.params = D({}, l, Oe, i),
        n.originalParams = D({}, n.params),
        n.passedParams = D({}, i),
        n.params && n.params.on && Object.keys(n.params.on).forEach(o => {
            n.on(o, n.params.on[o])
        }
        ),
        n.params && n.params.onAny && n.onAny(n.params.onAny),
        Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return n.params.direction === "horizontal"
            },
            isVertical() {
                return n.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        n.emit("_swiper"),
        n.params.init && n.init(),
        n
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[e]
    }
    getSlideIndex(e) {
        const {slidesEl: t, params: i} = this
          , r = N(t, `.${i.slideClass}, swiper-slide`)
          , n = it(r[0]);
        return it(e) - n
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.find(t => t.getAttribute("data-swiper-slide-index") * 1 === e))
    }
    getSlideIndexWhenGrid(e) {
        return this.grid && this.params.grid && this.params.grid.rows > 1 && (this.params.grid.fill === "column" ? e = Math.floor(e / this.params.grid.rows) : this.params.grid.fill === "row" && (e = e % Math.ceil(this.slides.length / this.params.grid.rows))),
        e
    }
    recalcSlides() {
        const e = this
          , {slidesEl: t, params: i} = e;
        e.slides = N(t, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0,
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1,
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"))
    }
    setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const r = i.minTranslate()
          , a = (i.maxTranslate() - r) * e + r;
        i.translateTo(a, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = e.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el)
            return;
        const t = [];
        e.slides.forEach(i => {
            const r = e.getSlideClasses(i);
            t.push({
                slideEl: i,
                classNames: r
            }),
            e.emit("_slideClass", i, r)
        }
        ),
        e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e="current", t=!1) {
        const i = this
          , {params: r, slides: n, slidesGrid: a, slidesSizesGrid: l, size: o, activeIndex: d} = i;
        let f = 1;
        if (typeof r.slidesPerView == "number")
            return r.slidesPerView;
        if (r.centeredSlides) {
            let c = n[d] ? Math.ceil(n[d].swiperSlideSize) : 0, p;
            for (let u = d + 1; u < n.length; u += 1)
                n[u] && !p && (c += Math.ceil(n[u].swiperSlideSize),
                f += 1,
                c > o && (p = !0));
            for (let u = d - 1; u >= 0; u -= 1)
                n[u] && !p && (c += n[u].swiperSlideSize,
                f += 1,
                c > o && (p = !0))
        } else if (e === "current")
            for (let c = d + 1; c < n.length; c += 1)
                (t ? a[c] + l[c] - a[d] < o : a[c] - a[d] < o) && (f += 1);
        else
            for (let c = d - 1; c >= 0; c -= 1)
                a[d] - a[c] < o && (f += 1);
        return f
    }
    update() {
        const e = this;
        if (!e || e.destroyed)
            return;
        const {snapGrid: t, params: i} = e;
        i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(a => {
            a.complete && me(e, a)
        }
        ),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
        function r() {
            const a = e.rtlTranslate ? e.translate * -1 : e.translate
              , l = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
            e.setTranslate(l),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        let n;
        if (i.freeMode && i.freeMode.enabled && !i.cssMode)
            r(),
            i.autoHeight && e.updateAutoHeight();
        else {
            if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
                const a = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
                n = e.slideTo(a.length - 1, 0, !1, !0)
            } else
                n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || r()
        }
        i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update")
    }
    changeDirection(e, t=!0) {
        const i = this
          , r = i.params.direction;
        return e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
        i.el.classList.add(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        i.params.direction = e,
        i.slides.forEach(n => {
            e === "vertical" ? n.style.width = "" : n.style.height = ""
        }
        ),
        i.emit("changeDirection"),
        t && i.update()),
        i
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl",
        t.rtlTranslate = t.params.direction === "horizontal" && t.rtl,
        t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
        t.el.dir = "ltr"),
        t.update())
    }
    mount(e) {
        const t = this;
        if (t.mounted)
            return !0;
        let i = e || t.params.el;
        if (typeof i == "string" && (i = document.querySelector(i)),
        !i)
            return !1;
        i.swiper = t,
        i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : N(i, r())[0];
        return !a && t.params.createElements && (a = Be("div", t.params.wrapperClass),
        i.append(a),
        N(i, `.${t.params.slideClass}`).forEach(l => {
            a.append(l)
        }
        )),
        Object.assign(t, {
            el: i,
            wrapperEl: a,
            slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : a,
            hostEl: t.isElement ? i.parentNode.host : i,
            mounted: !0,
            rtl: i.dir.toLowerCase() === "rtl" || W(i, "direction") === "rtl",
            rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || W(i, "direction") === "rtl"),
            wrongRTL: W(a, "display") === "-webkit-box"
        }),
        !0
    }
    init(e) {
        const t = this;
        if (t.initialized || t.mount(e) === !1)
            return t;
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
        t.params.loop && t.loopCreate(void 0, !0),
        t.attachEvents();
        const r = [...t.el.querySelectorAll('[loading="lazy"]')];
        return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach(n => {
            n.complete ? me(t, n) : n.addEventListener("load", a => {
                me(t, a.target)
            }
            )
        }
        ),
        Ve(t),
        t.initialized = !0,
        Ve(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
    }
    destroy(e=!0, t=!0) {
        const i = this
          , {params: r, el: n, wrapperEl: a, slides: l} = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"),
        i.initialized = !1,
        i.detachEvents(),
        r.loop && i.loopDestroy(),
        t && (i.removeClasses(),
        n && typeof n != "string" && n.removeAttribute("style"),
        a && a.removeAttribute("style"),
        l && l.length && l.forEach(o => {
            o.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
            o.removeAttribute("style"),
            o.removeAttribute("data-swiper-slide-index")
        }
        )),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach(o => {
            i.off(o)
        }
        ),
        e !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null),
        gs(i)),
        i.destroyed = !0),
        null
    }
    static extendDefaults(e) {
        D(Oe, e)
    }
    static get extendedDefaults() {
        return Oe
    }
    static get defaults() {
        return dt
    }
    static installModule(e) {
        B.prototype.__modules__ || (B.prototype.__modules__ = []);
        const t = B.prototype.__modules__;
        typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(t => B.installModule(t)),
        B) : (B.installModule(e),
        B)
    }
}
Object.keys(Le).forEach(s => {
    Object.keys(Le[s]).forEach(e => {
        B.prototype[e] = Le[s][e]
    }
    )
}
);
B.use([As, Ps]);
const ki = "[data-js-price]";
class zi {
    #t = {
        slider: "[data-js-price-slider]"
    };
    #e;
    #s;
    constructor(e) {
        this.#e = e,
        this.#s = ps(this.#t.slider, this.#e),
        this.#i()
    }
    #i = () => {
        new B(this.#s,{
            slidesPerView: "auto"
        })
    }
}
class Di {
    constructor() {
        document.querySelectorAll(ki).forEach(e => {
            new zi(e)
        }
        )
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ge = globalThis
  , Ue = ge.ShadowRoot && (ge.ShadyCSS === void 0 || ge.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
  , We = Symbol()
  , ct = new WeakMap;
let jt = class {
    constructor(e, t, i) {
        if (this._$cssResult$ = !0,
        i !== We)
            throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = e,
        this.t = t
    }
    get styleSheet() {
        let e = this.o;
        const t = this.t;
        if (Ue && e === void 0) {
            const i = t !== void 0 && t.length === 1;
            i && (e = ct.get(t)),
            e === void 0 && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText),
            i && ct.set(t, e))
        }
        return e
    }
    toString() {
        return this.cssText
    }
}
;
const Bi = s => new jt(typeof s == "string" ? s : s + "",void 0,We)
  , qe = (s, ...e) => {
    const t = s.length === 1 ? s[0] : e.reduce(( (i, r, n) => i + (a => {
        if (a._$cssResult$ === !0)
            return a.cssText;
        if (typeof a == "number")
            return a;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
    }
    )(r) + s[n + 1]), s[0]);
    return new jt(t,s,We)
}
  , Vi = (s, e) => {
    if (Ue)
        s.adoptedStyleSheets = e.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet));
    else
        for (const t of e) {
            const i = document.createElement("style")
              , r = ge.litNonce;
            r !== void 0 && i.setAttribute("nonce", r),
            i.textContent = t.cssText,
            s.appendChild(i)
        }
}
  , ut = Ue ? s => s : s => s instanceof CSSStyleSheet ? (e => {
    let t = "";
    for (const i of e.cssRules)
        t += i.cssText;
    return Bi(t)
}
)(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {is: Gi, defineProperty: Hi, getOwnPropertyDescriptor: Ri, getOwnPropertyNames: Ni, getOwnPropertySymbols: Fi, getPrototypeOf: ji} = Object
  , xe = globalThis
  , ft = xe.trustedTypes
  , Ui = ft ? ft.emptyScript : ""
  , Wi = xe.reactiveElementPolyfillSupport
  , oe = (s, e) => s
  , be = {
    toAttribute(s, e) {
        switch (e) {
        case Boolean:
            s = s ? Ui : null;
            break;
        case Object:
        case Array:
            s = s == null ? s : JSON.stringify(s)
        }
        return s
    },
    fromAttribute(s, e) {
        let t = s;
        switch (e) {
        case Boolean:
            t = s !== null;
            break;
        case Number:
            t = s === null ? null : Number(s);
            break;
        case Object:
        case Array:
            try {
                t = JSON.parse(s)
            } catch {
                t = null
            }
        }
        return t
    }
}
  , Ye = (s, e) => !Gi(s, e)
  , pt = {
    attribute: !0,
    type: String,
    converter: be,
    reflect: !1,
    useDefault: !1,
    hasChanged: Ye
};
Symbol.metadata ??= Symbol("metadata"),
xe.litPropertyMetadata ??= new WeakMap;
let ee = class extends HTMLElement {
    static addInitializer(e) {
        this._$Ei(),
        (this.l ??= []).push(e)
    }
    static get observedAttributes() {
        return this.finalize(),
        this._$Eh && [...this._$Eh.keys()]
    }
    static createProperty(e, t=pt) {
        if (t.state && (t.attribute = !1),
        this._$Ei(),
        this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0),
        this.elementProperties.set(e, t),
        !t.noAccessor) {
            const i = Symbol()
              , r = this.getPropertyDescriptor(e, i, t);
            r !== void 0 && Hi(this.prototype, e, r)
        }
    }
    static getPropertyDescriptor(e, t, i) {
        const {get: r, set: n} = Ri(this.prototype, e) ?? {
            get() {
                return this[t]
            },
            set(a) {
                this[t] = a
            }
        };
        return {
            get: r,
            set(a) {
                const l = r?.call(this);
                n?.call(this, a),
                this.requestUpdate(e, l, i)
            },
            configurable: !0,
            enumerable: !0
        }
    }
    static getPropertyOptions(e) {
        return this.elementProperties.get(e) ?? pt
    }
    static _$Ei() {
        if (this.hasOwnProperty(oe("elementProperties")))
            return;
        const e = ji(this);
        e.finalize(),
        e.l !== void 0 && (this.l = [...e.l]),
        this.elementProperties = new Map(e.elementProperties)
    }
    static finalize() {
        if (this.hasOwnProperty(oe("finalized")))
            return;
        if (this.finalized = !0,
        this._$Ei(),
        this.hasOwnProperty(oe("properties"))) {
            const t = this.properties
              , i = [...Ni(t), ...Fi(t)];
            for (const r of i)
                this.createProperty(r, t[r])
        }
        const e = this[Symbol.metadata];
        if (e !== null) {
            const t = litPropertyMetadata.get(e);
            if (t !== void 0)
                for (const [i,r] of t)
                    this.elementProperties.set(i, r)
        }
        this._$Eh = new Map;
        for (const [t,i] of this.elementProperties) {
            const r = this._$Eu(t, i);
            r !== void 0 && this._$Eh.set(r, t)
        }
        this.elementStyles = this.finalizeStyles(this.styles)
    }
    static finalizeStyles(e) {
        const t = [];
        if (Array.isArray(e)) {
            const i = new Set(e.flat(1 / 0).reverse());
            for (const r of i)
                t.unshift(ut(r))
        } else
            e !== void 0 && t.push(ut(e));
        return t
    }
    static _$Eu(e, t) {
        const i = t.attribute;
        return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0
    }
    constructor() {
        super(),
        this._$Ep = void 0,
        this.isUpdatePending = !1,
        this.hasUpdated = !1,
        this._$Em = null,
        this._$Ev()
    }
    _$Ev() {
        this._$ES = new Promise((e => this.enableUpdating = e)),
        this._$AL = new Map,
        this._$E_(),
        this.requestUpdate(),
        this.constructor.l?.forEach((e => e(this)))
    }
    addController(e) {
        (this._$EO ??= new Set).add(e),
        this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.()
    }
    removeController(e) {
        this._$EO?.delete(e)
    }
    _$E_() {
        const e = new Map
          , t = this.constructor.elementProperties;
        for (const i of t.keys())
            this.hasOwnProperty(i) && (e.set(i, this[i]),
            delete this[i]);
        e.size > 0 && (this._$Ep = e)
    }
    createRenderRoot() {
        const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return Vi(e, this.constructor.elementStyles),
        e
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(),
        this.enableUpdating(!0),
        this._$EO?.forEach((e => e.hostConnected?.()))
    }
    enableUpdating(e) {}
    disconnectedCallback() {
        this._$EO?.forEach((e => e.hostDisconnected?.()))
    }
    attributeChangedCallback(e, t, i) {
        this._$AK(e, i)
    }
    _$ET(e, t) {
        const i = this.constructor.elementProperties.get(e)
          , r = this.constructor._$Eu(e, i);
        if (r !== void 0 && i.reflect === !0) {
            const n = (i.converter?.toAttribute !== void 0 ? i.converter : be).toAttribute(t, i.type);
            this._$Em = e,
            n == null ? this.removeAttribute(r) : this.setAttribute(r, n),
            this._$Em = null
        }
    }
    _$AK(e, t) {
        const i = this.constructor
          , r = i._$Eh.get(e);
        if (r !== void 0 && this._$Em !== r) {
            const n = i.getPropertyOptions(r)
              , a = typeof n.converter == "function" ? {
                fromAttribute: n.converter
            } : n.converter?.fromAttribute !== void 0 ? n.converter : be;
            this._$Em = r;
            const l = a.fromAttribute(t, n.type);
            this[r] = l ?? this._$Ej?.get(r) ?? l,
            this._$Em = null
        }
    }
    requestUpdate(e, t, i) {
        if (e !== void 0) {
            const r = this.constructor
              , n = this[e];
            if (i ??= r.getPropertyOptions(e),
            !((i.hasChanged ?? Ye)(n, t) || i.useDefault && i.reflect && n === this._$Ej?.get(e) && !this.hasAttribute(r._$Eu(e, i))))
                return;
            this.C(e, t, i)
        }
        this.isUpdatePending === !1 && (this._$ES = this._$EP())
    }
    C(e, t, {useDefault: i, reflect: r, wrapped: n}, a) {
        i && !(this._$Ej ??= new Map).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]),
        n !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || i || (t = void 0),
        this._$AL.set(e, t)),
        r === !0 && this._$Em !== e && (this._$Eq ??= new Set).add(e))
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES
        } catch (t) {
            Promise.reject(t)
        }
        const e = this.scheduleUpdate();
        return e != null && await e,
        !this.isUpdatePending
    }
    scheduleUpdate() {
        return this.performUpdate()
    }
    performUpdate() {
        if (!this.isUpdatePending)
            return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(),
            this._$Ep) {
                for (const [r,n] of this._$Ep)
                    this[r] = n;
                this._$Ep = void 0
            }
            const i = this.constructor.elementProperties;
            if (i.size > 0)
                for (const [r,n] of i) {
                    const {wrapped: a} = n
                      , l = this[r];
                    a !== !0 || this._$AL.has(r) || l === void 0 || this.C(r, void 0, n, l)
                }
        }
        let e = !1;
        const t = this._$AL;
        try {
            e = this.shouldUpdate(t),
            e ? (this.willUpdate(t),
            this._$EO?.forEach((i => i.hostUpdate?.())),
            this.update(t)) : this._$EM()
        } catch (i) {
            throw e = !1,
            this._$EM(),
            i
        }
        e && this._$AE(t)
    }
    willUpdate(e) {}
    _$AE(e) {
        this._$EO?.forEach((t => t.hostUpdated?.())),
        this.hasUpdated || (this.hasUpdated = !0,
        this.firstUpdated(e)),
        this.updated(e)
    }
    _$EM() {
        this._$AL = new Map,
        this.isUpdatePending = !1
    }
    get updateComplete() {
        return this.getUpdateComplete()
    }
    getUpdateComplete() {
        return this._$ES
    }
    shouldUpdate(e) {
        return !0
    }
    update(e) {
        this._$Eq &&= this._$Eq.forEach((t => this._$ET(t, this[t]))),
        this._$EM()
    }
    updated(e) {}
    firstUpdated(e) {}
}
;
ee.elementStyles = [],
ee.shadowRootOptions = {
    mode: "open"
},
ee[oe("elementProperties")] = new Map,
ee[oe("finalized")] = new Map,
Wi?.({
    ReactiveElement: ee
}),
(xe.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xe = globalThis
  , Se = Xe.trustedTypes
  , ht = Se ? Se.createPolicy("lit-html", {
    createHTML: s => s
}) : void 0
  , Ut = "$lit$"
  , U = `lit$${Math.random().toFixed(9).slice(2)}$`
  , Wt = "?" + U
  , qi = `<${Wt}>`
  , Z = document
  , le = () => Z.createComment("")
  , de = s => s === null || typeof s != "object" && typeof s != "function"
  , Ke = Array.isArray
  , Yi = s => Ke(s) || typeof s?.[Symbol.iterator] == "function"
  , Ie = `[ 	
\f\r]`
  , re = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
  , mt = /-->/g
  , gt = />/g
  , Y = RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g")
  , vt = /'/g
  , wt = /"/g
  , qt = /^(?:script|style|textarea|title)$/i
  , Xi = s => (e, ...t) => ({
    _$litType$: s,
    strings: e,
    values: t
})
  , Yt = Xi(1)
  , J = Symbol.for("lit-noChange")
  , P = Symbol.for("lit-nothing")
  , yt = new WeakMap
  , K = Z.createTreeWalker(Z, 129);
function Xt(s, e) {
    if (!Ke(s) || !s.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
    return ht !== void 0 ? ht.createHTML(e) : e
}
const Ki = (s, e) => {
    const t = s.length - 1
      , i = [];
    let r, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = re;
    for (let l = 0; l < t; l++) {
        const o = s[l];
        let d, f, c = -1, p = 0;
        for (; p < o.length && (a.lastIndex = p,
        f = a.exec(o),
        f !== null); )
            p = a.lastIndex,
            a === re ? f[1] === "!--" ? a = mt : f[1] !== void 0 ? a = gt : f[2] !== void 0 ? (qt.test(f[2]) && (r = RegExp("</" + f[2], "g")),
            a = Y) : f[3] !== void 0 && (a = Y) : a === Y ? f[0] === ">" ? (a = r ?? re,
            c = -1) : f[1] === void 0 ? c = -2 : (c = a.lastIndex - f[2].length,
            d = f[1],
            a = f[3] === void 0 ? Y : f[3] === '"' ? wt : vt) : a === wt || a === vt ? a = Y : a === mt || a === gt ? a = re : (a = Y,
            r = void 0);
        const u = a === Y && s[l + 1].startsWith("/>") ? " " : "";
        n += a === re ? o + qi : c >= 0 ? (i.push(d),
        o.slice(0, c) + Ut + o.slice(c) + U + u) : o + U + (c === -2 ? l : u)
    }
    return [Xt(s, n + (s[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i]
}
;
class ce {
    constructor({strings: e, _$litType$: t}, i) {
        let r;
        this.parts = [];
        let n = 0
          , a = 0;
        const l = e.length - 1
          , o = this.parts
          , [d,f] = Ki(e, t);
        if (this.el = ce.createElement(d, i),
        K.currentNode = this.el.content,
        t === 2 || t === 3) {
            const c = this.el.content.firstChild;
            c.replaceWith(...c.childNodes)
        }
        for (; (r = K.nextNode()) !== null && o.length < l; ) {
            if (r.nodeType === 1) {
                if (r.hasAttributes())
                    for (const c of r.getAttributeNames())
                        if (c.endsWith(Ut)) {
                            const p = f[a++]
                              , u = r.getAttribute(c).split(U)
                              , h = /([.?@])?(.*)/.exec(p);
                            o.push({
                                type: 1,
                                index: n,
                                name: h[2],
                                strings: u,
                                ctor: h[1] === "." ? Ji : h[1] === "?" ? Qi : h[1] === "@" ? er : Ee
                            }),
                            r.removeAttribute(c)
                        } else
                            c.startsWith(U) && (o.push({
                                type: 6,
                                index: n
                            }),
                            r.removeAttribute(c));
                if (qt.test(r.tagName)) {
                    const c = r.textContent.split(U)
                      , p = c.length - 1;
                    if (p > 0) {
                        r.textContent = Se ? Se.emptyScript : "";
                        for (let u = 0; u < p; u++)
                            r.append(c[u], le()),
                            K.nextNode(),
                            o.push({
                                type: 2,
                                index: ++n
                            });
                        r.append(c[p], le())
                    }
                }
            } else if (r.nodeType === 8)
                if (r.data === Wt)
                    o.push({
                        type: 2,
                        index: n
                    });
                else {
                    let c = -1;
                    for (; (c = r.data.indexOf(U, c + 1)) !== -1; )
                        o.push({
                            type: 7,
                            index: n
                        }),
                        c += U.length - 1
                }
            n++
        }
    }
    static createElement(e, t) {
        const i = Z.createElement("template");
        return i.innerHTML = e,
        i
    }
}
function se(s, e, t=s, i) {
    if (e === J)
        return e;
    let r = i !== void 0 ? t._$Co?.[i] : t._$Cl;
    const n = de(e) ? void 0 : e._$litDirective$;
    return r?.constructor !== n && (r?._$AO?.(!1),
    n === void 0 ? r = void 0 : (r = new n(s),
    r._$AT(s, t, i)),
    i !== void 0 ? (t._$Co ??= [])[i] = r : t._$Cl = r),
    r !== void 0 && (e = se(s, r._$AS(s, e.values), r, i)),
    e
}
class Zi {
    constructor(e, t) {
        this._$AV = [],
        this._$AN = void 0,
        this._$AD = e,
        this._$AM = t
    }
    get parentNode() {
        return this._$AM.parentNode
    }
    get _$AU() {
        return this._$AM._$AU
    }
    u(e) {
        const {el: {content: t}, parts: i} = this._$AD
          , r = (e?.creationScope ?? Z).importNode(t, !0);
        K.currentNode = r;
        let n = K.nextNode()
          , a = 0
          , l = 0
          , o = i[0];
        for (; o !== void 0; ) {
            if (a === o.index) {
                let d;
                o.type === 2 ? d = new ue(n,n.nextSibling,this,e) : o.type === 1 ? d = new o.ctor(n,o.name,o.strings,this,e) : o.type === 6 && (d = new tr(n,this,e)),
                this._$AV.push(d),
                o = i[++l]
            }
            a !== o?.index && (n = K.nextNode(),
            a++)
        }
        return K.currentNode = Z,
        r
    }
    p(e) {
        let t = 0;
        for (const i of this._$AV)
            i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t),
            t += i.strings.length - 2) : i._$AI(e[t])),
            t++
    }
}
class ue {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv
    }
    constructor(e, t, i, r) {
        this.type = 2,
        this._$AH = P,
        this._$AN = void 0,
        this._$AA = e,
        this._$AB = t,
        this._$AM = i,
        this.options = r,
        this._$Cv = r?.isConnected ?? !0
    }
    get parentNode() {
        let e = this._$AA.parentNode;
        const t = this._$AM;
        return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode),
        e
    }
    get startNode() {
        return this._$AA
    }
    get endNode() {
        return this._$AB
    }
    _$AI(e, t=this) {
        e = se(this, e, t),
        de(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(),
        this._$AH = P) : e !== this._$AH && e !== J && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Yi(e) ? this.k(e) : this._(e)
    }
    O(e) {
        return this._$AA.parentNode.insertBefore(e, this._$AB)
    }
    T(e) {
        this._$AH !== e && (this._$AR(),
        this._$AH = this.O(e))
    }
    _(e) {
        this._$AH !== P && de(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Z.createTextNode(e)),
        this._$AH = e
    }
    $(e) {
        const {values: t, _$litType$: i} = e
          , r = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = ce.createElement(Xt(i.h, i.h[0]), this.options)),
        i);
        if (this._$AH?._$AD === r)
            this._$AH.p(t);
        else {
            const n = new Zi(r,this)
              , a = n.u(this.options);
            n.p(t),
            this.T(a),
            this._$AH = n
        }
    }
    _$AC(e) {
        let t = yt.get(e.strings);
        return t === void 0 && yt.set(e.strings, t = new ce(e)),
        t
    }
    k(e) {
        Ke(this._$AH) || (this._$AH = [],
        this._$AR());
        const t = this._$AH;
        let i, r = 0;
        for (const n of e)
            r === t.length ? t.push(i = new ue(this.O(le()),this.O(le()),this,this.options)) : i = t[r],
            i._$AI(n),
            r++;
        r < t.length && (this._$AR(i && i._$AB.nextSibling, r),
        t.length = r)
    }
    _$AR(e=this._$AA.nextSibling, t) {
        for (this._$AP?.(!1, !0, t); e !== this._$AB; ) {
            const i = e.nextSibling;
            e.remove(),
            e = i
        }
    }
    setConnected(e) {
        this._$AM === void 0 && (this._$Cv = e,
        this._$AP?.(e))
    }
}
class Ee {
    get tagName() {
        return this.element.tagName
    }
    get _$AU() {
        return this._$AM._$AU
    }
    constructor(e, t, i, r, n) {
        this.type = 1,
        this._$AH = P,
        this._$AN = void 0,
        this.element = e,
        this.name = t,
        this._$AM = r,
        this.options = n,
        i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String),
        this.strings = i) : this._$AH = P
    }
    _$AI(e, t=this, i, r) {
        const n = this.strings;
        let a = !1;
        if (n === void 0)
            e = se(this, e, t, 0),
            a = !de(e) || e !== this._$AH && e !== J,
            a && (this._$AH = e);
        else {
            const l = e;
            let o, d;
            for (e = n[0],
            o = 0; o < n.length - 1; o++)
                d = se(this, l[i + o], t, o),
                d === J && (d = this._$AH[o]),
                a ||= !de(d) || d !== this._$AH[o],
                d === P ? e = P : e !== P && (e += (d ?? "") + n[o + 1]),
                this._$AH[o] = d
        }
        a && !r && this.j(e)
    }
    j(e) {
        e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "")
    }
}
class Ji extends Ee {
    constructor() {
        super(...arguments),
        this.type = 3
    }
    j(e) {
        this.element[this.name] = e === P ? void 0 : e
    }
}
class Qi extends Ee {
    constructor() {
        super(...arguments),
        this.type = 4
    }
    j(e) {
        this.element.toggleAttribute(this.name, !!e && e !== P)
    }
}
class er extends Ee {
    constructor(e, t, i, r, n) {
        super(e, t, i, r, n),
        this.type = 5
    }
    _$AI(e, t=this) {
        if ((e = se(this, e, t, 0) ?? P) === J)
            return;
        const i = this._$AH
          , r = e === P && i !== P || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive
          , n = e !== P && (i === P || r);
        r && this.element.removeEventListener(this.name, this, i),
        n && this.element.addEventListener(this.name, this, e),
        this._$AH = e
    }
    handleEvent(e) {
        typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e)
    }
}
class tr {
    constructor(e, t, i) {
        this.element = e,
        this.type = 6,
        this._$AN = void 0,
        this._$AM = t,
        this.options = i
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(e) {
        se(this, e)
    }
}
const sr = Xe.litHtmlPolyfillSupport;
sr?.(ce, ue),
(Xe.litHtmlVersions ??= []).push("3.3.1");
const ir = (s, e, t) => {
    const i = t?.renderBefore ?? e;
    let r = i._$litPart$;
    if (r === void 0) {
        const n = t?.renderBefore ?? null;
        i._$litPart$ = r = new ue(e.insertBefore(le(), n),n,void 0,t ?? {})
    }
    return r._$AI(s),
    r
}
;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ze = globalThis;
let ae = class extends ee {
    constructor() {
        super(...arguments),
        this.renderOptions = {
            host: this
        },
        this._$Do = void 0
    }
    createRenderRoot() {
        const e = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= e.firstChild,
        e
    }
    update(e) {
        const t = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(e),
        this._$Do = ir(t, this.renderRoot, this.renderOptions)
    }
    connectedCallback() {
        super.connectedCallback(),
        this._$Do?.setConnected(!0)
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        this._$Do?.setConnected(!1)
    }
    render() {
        return J
    }
}
;
ae._$litElement$ = !0,
ae.finalized = !0,
Ze.litElementHydrateSupport?.({
    LitElement: ae
});
const rr = Ze.litElementPolyfillSupport;
rr?.({
    LitElement: ae
});
(Ze.litElementVersions ??= []).push("4.2.1");
var nr = qe`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`
  , Kt = new Map
  , or = new WeakMap;
function ar(s) {
    return s ?? {
        keyframes: [],
        options: {
            duration: 0
        }
    }
}
function bt(s, e) {
    return e.toLowerCase() === "rtl" ? {
        keyframes: s.rtlKeyframes || s.keyframes,
        options: s.options
    } : s
}
function Zt(s, e) {
    Kt.set(s, ar(e))
}
function St(s, e, t) {
    const i = or.get(s);
    if (i?.[e])
        return bt(i[e], t.dir);
    const r = Kt.get(e);
    return r ? bt(r, t.dir) : {
        keyframes: [],
        options: {
            duration: 0
        }
    }
}
function Tt(s, e) {
    return new Promise(t => {
        function i(r) {
            r.target === s && (s.removeEventListener(e, i),
            t())
        }
        s.addEventListener(e, i)
    }
    )
}
function xt(s, e, t) {
    return new Promise(i => {
        if (t?.duration === 1 / 0)
            throw new Error("Promise-based animations must be finite.");
        const r = s.animate(e, kt(Te({}, t), {
            duration: lr() ? 0 : t.duration
        }));
        r.addEventListener("cancel", i, {
            once: !0
        }),
        r.addEventListener("finish", i, {
            once: !0
        })
    }
    )
}
function lr() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
function Et(s) {
    return Promise.all(s.getAnimations().map(e => new Promise(t => {
        e.cancel(),
        requestAnimationFrame(t)
    }
    )))
}
function _t(s, e) {
    return s.map(t => kt(Te({}, t), {
        height: t.height === "auto" ? `${e}px` : t.height
    }))
}
var Ge = "";
function Ct(s) {
    Ge = s
}
function dr(s="") {
    if (!Ge) {
        const e = [...document.getElementsByTagName("script")]
          , t = e.find(i => i.hasAttribute("data-shoelace"));
        if (t)
            Ct(t.getAttribute("data-shoelace"));
        else {
            const i = e.find(n => /shoelace(\.min)?\.js($|\?)/.test(n.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));
            let r = "";
            i && (r = i.getAttribute("src")),
            Ct(r.split("/").slice(0, -1).join("/"))
        }
    }
    return Ge.replace(/\/$/, "") + (s ? `/${s.replace(/^\//, "")}` : "")
}
var cr = {
    name: "default",
    resolver: s => dr(`assets/icons/${s}.svg`)
}
  , ur = cr
  , $t = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
}
  , fr = {
    name: "system",
    resolver: s => s in $t ? `data:image/svg+xml,${encodeURIComponent($t[s])}` : ""
}
  , pr = fr
  , hr = [ur, pr]
  , He = [];
function mr(s) {
    He.push(s)
}
function gr(s) {
    He = He.filter(e => e !== s)
}
function At(s) {
    return hr.find(e => e.name === s)
}
var vr = qe`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
function Je(s, e) {
    const t = Te({
        waitUntilFirstUpdate: !1
    }, e);
    return (i, r) => {
        const {update: n} = i
          , a = Array.isArray(s) ? s : [s];
        i.update = function(l) {
            a.forEach(o => {
                const d = o;
                if (l.has(d)) {
                    const f = l.get(d)
                      , c = this[d];
                    f !== c && (!t.waitUntilFirstUpdate || this.hasUpdated) && this[r](f, c)
                }
            }
            ),
            n.call(this, l)
        }
    }
}
var Jt = qe`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wr = {
    attribute: !0,
    type: String,
    converter: be,
    reflect: !1,
    hasChanged: Ye
}
  , yr = (s=wr, e, t) => {
    const {kind: i, metadata: r} = t;
    let n = globalThis.litPropertyMetadata.get(r);
    if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = new Map),
    i === "setter" && ((s = Object.create(s)).wrapped = !0),
    n.set(t.name, s),
    i === "accessor") {
        const {name: a} = t;
        return {
            set(l) {
                const o = e.get.call(this);
                e.set.call(this, l),
                this.requestUpdate(a, o, s)
            },
            init(l) {
                return l !== void 0 && this.C(a, void 0, s, l),
                l
            }
        }
    }
    if (i === "setter") {
        const {name: a} = t;
        return function(l) {
            const o = this[a];
            e.call(this, l),
            this.requestUpdate(a, o, s)
        }
    }
    throw Error("Unsupported decorator location: " + i)
}
;
function H(s) {
    return (e, t) => typeof t == "object" ? yr(s, e, t) : ( (i, r, n) => {
        const a = r.hasOwnProperty(n);
        return r.constructor.createProperty(n, i),
        a ? Object.getOwnPropertyDescriptor(r, n) : void 0
    }
    )(s, e, t)
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function br(s) {
    return H({
        ...s,
        state: !0,
        attribute: !1
    })
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Sr = (s, e, t) => (t.configurable = !0,
t.enumerable = !0,
Reflect.decorate && typeof e != "object" && Object.defineProperty(s, e, t),
t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function _e(s, e) {
    return (t, i, r) => {
        const n = a => a.renderRoot?.querySelector(s) ?? null;
        return Sr(t, i, {
            get() {
                return n(this)
            }
        })
    }
}
var ve, ie = class extends ae {
    constructor() {
        super(),
        cs(this, ve, !1),
        this.initialReflectedProperties = new Map,
        Object.entries(this.constructor.dependencies).forEach( ([s,e]) => {
            this.constructor.define(s, e)
        }
        )
    }
    emit(s, e) {
        const t = new CustomEvent(s,Te({
            bubbles: !0,
            cancelable: !1,
            composed: !0,
            detail: {}
        }, e));
        return this.dispatchEvent(t),
        t
    }
    static define(s, e=this, t={}) {
        const i = customElements.get(s);
        if (!i) {
            try {
                customElements.define(s, e, t)
            } catch {
                customElements.define(s, class extends e {
                }
                , t)
            }
            return
        }
        let r = " (unknown version)"
          , n = r;
        "version"in e && e.version && (r = " v" + e.version),
        "version"in i && i.version && (n = " v" + i.version),
        !(r && n && r === n) && console.warn(`Attempted to register <${s}>${r}, but <${s}>${n} has already been registered.`)
    }
    attributeChangedCallback(s, e, t) {
        ds(this, ve) || (this.constructor.elementProperties.forEach( (i, r) => {
            i.reflect && this[r] != null && this.initialReflectedProperties.set(r, this[r])
        }
        ),
        us(this, ve, !0)),
        super.attributeChangedCallback(s, e, t)
    }
    willUpdate(s) {
        super.willUpdate(s),
        this.initialReflectedProperties.forEach( (e, t) => {
            s.has(t) && this[t] == null && (this[t] = e)
        }
        )
    }
}
;
ve = new WeakMap;
ie.version = "2.20.1";
ie.dependencies = {};
O([H()], ie.prototype, "dir", 2);
O([H()], ie.prototype, "lang", 2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tr = (s, e) => s?._$litType$ !== void 0;
var ne = Symbol(), he = Symbol(), ke, ze = new Map, F = class extends ie {
    constructor() {
        super(...arguments),
        this.initialRender = !1,
        this.svg = null,
        this.label = "",
        this.library = "default"
    }
    async resolveIcon(s, e) {
        var t;
        let i;
        if (e?.spriteSheet)
            return this.svg = Yt`<svg part="svg">
        <use part="use" href="${s}"></use>
      </svg>`,
            this.svg;
        try {
            if (i = await fetch(s, {
                mode: "cors"
            }),
            !i.ok)
                return i.status === 410 ? ne : he
        } catch {
            return he
        }
        try {
            const r = document.createElement("div");
            r.innerHTML = await i.text();
            const n = r.firstElementChild;
            if (((t = n?.tagName) == null ? void 0 : t.toLowerCase()) !== "svg")
                return ne;
            ke || (ke = new DOMParser);
            const l = ke.parseFromString(n.outerHTML, "text/html").body.querySelector("svg");
            return l ? (l.part.add("svg"),
            document.adoptNode(l)) : ne
        } catch {
            return ne
        }
    }
    connectedCallback() {
        super.connectedCallback(),
        mr(this)
    }
    firstUpdated() {
        this.initialRender = !0,
        this.setIcon()
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        gr(this)
    }
    getIconSource() {
        const s = At(this.library);
        return this.name && s ? {
            url: s.resolver(this.name),
            fromLibrary: !0
        } : {
            url: this.src,
            fromLibrary: !1
        }
    }
    handleLabelChange() {
        typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"),
        this.setAttribute("aria-label", this.label),
        this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"),
        this.removeAttribute("aria-label"),
        this.setAttribute("aria-hidden", "true"))
    }
    async setIcon() {
        var s;
        const {url: e, fromLibrary: t} = this.getIconSource()
          , i = t ? At(this.library) : void 0;
        if (!e) {
            this.svg = null;
            return
        }
        let r = ze.get(e);
        if (r || (r = this.resolveIcon(e, i),
        ze.set(e, r)),
        !this.initialRender)
            return;
        const n = await r;
        if (n === he && ze.delete(e),
        e === this.getIconSource().url) {
            if (Tr(n)) {
                if (this.svg = n,
                i) {
                    await this.updateComplete;
                    const a = this.shadowRoot.querySelector("[part='svg']");
                    typeof i.mutator == "function" && a && i.mutator(a)
                }
                return
            }
            switch (n) {
            case he:
            case ne:
                this.svg = null,
                this.emit("sl-error");
                break;
            default:
                this.svg = n.cloneNode(!0),
                (s = i?.mutator) == null || s.call(i, this.svg),
                this.emit("sl-load")
            }
        }
    }
    render() {
        return this.svg
    }
}
;
F.styles = [Jt, vr];
O([br()], F.prototype, "svg", 2);
O([H({
    reflect: !0
})], F.prototype, "name", 2);
O([H()], F.prototype, "src", 2);
O([H()], F.prototype, "label", 2);
O([H({
    reflect: !0
})], F.prototype, "library", 2);
O([Je("label")], F.prototype, "handleLabelChange", 1);
O([Je(["name", "src", "library"])], F.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xr = {
    ATTRIBUTE: 1
}
  , Er = s => (...e) => ({
    _$litDirective$: s,
    values: e
});
class _r {
    constructor(e) {}
    get _$AU() {
        return this._$AM._$AU
    }
    _$AT(e, t, i) {
        this._$Ct = e,
        this._$AM = t,
        this._$Ci = i
    }
    _$AS(e, t) {
        return this.update(e, t)
    }
    update(e, t) {
        return this.render(...t)
    }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Cr = Er(class extends _r {
    constructor(s) {
        if (super(s),
        s.type !== xr.ATTRIBUTE || s.name !== "class" || s.strings?.length > 2)
            throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
    }
    render(s) {
        return " " + Object.keys(s).filter((e => s[e])).join(" ") + " "
    }
    update(s, [e]) {
        if (this.st === void 0) {
            this.st = new Set,
            s.strings !== void 0 && (this.nt = new Set(s.strings.join(" ").split(/\s/).filter((i => i !== ""))));
            for (const i in e)
                e[i] && !this.nt?.has(i) && this.st.add(i);
            return this.render(e)
        }
        const t = s.element.classList;
        for (const i of this.st)
            i in e || (t.remove(i),
            this.st.delete(i));
        for (const i in e) {
            const r = !!e[i];
            r === this.st.has(i) || this.nt?.has(i) || (r ? (t.add(i),
            this.st.add(i)) : (t.remove(i),
            this.st.delete(i)))
        }
        return J
    }
}
);
var G = class extends ie {
    constructor() {
        super(...arguments),
        this.localize = new is(this),
        this.open = !1,
        this.disabled = !1
    }
    firstUpdated() {
        this.body.style.height = this.open ? "auto" : "0",
        this.open && (this.details.open = !0),
        this.detailsObserver = new MutationObserver(s => {
            for (const e of s)
                e.type === "attributes" && e.attributeName === "open" && (this.details.open ? this.show() : this.hide())
        }
        ),
        this.detailsObserver.observe(this.details, {
            attributes: !0
        })
    }
    disconnectedCallback() {
        var s;
        super.disconnectedCallback(),
        (s = this.detailsObserver) == null || s.disconnect()
    }
    handleSummaryClick(s) {
        s.preventDefault(),
        this.disabled || (this.open ? this.hide() : this.show(),
        this.header.focus())
    }
    handleSummaryKeyDown(s) {
        (s.key === "Enter" || s.key === " ") && (s.preventDefault(),
        this.open ? this.hide() : this.show()),
        (s.key === "ArrowUp" || s.key === "ArrowLeft") && (s.preventDefault(),
        this.hide()),
        (s.key === "ArrowDown" || s.key === "ArrowRight") && (s.preventDefault(),
        this.show())
    }
    async handleOpenChange() {
        if (this.open) {
            if (this.details.open = !0,
            this.emit("sl-show", {
                cancelable: !0
            }).defaultPrevented) {
                this.open = !1,
                this.details.open = !1;
                return
            }
            await Et(this.body);
            const {keyframes: e, options: t} = St(this, "details.show", {
                dir: this.localize.dir()
            });
            await xt(this.body, _t(e, this.body.scrollHeight), t),
            this.body.style.height = "auto",
            this.emit("sl-after-show")
        } else {
            if (this.emit("sl-hide", {
                cancelable: !0
            }).defaultPrevented) {
                this.details.open = !0,
                this.open = !0;
                return
            }
            await Et(this.body);
            const {keyframes: e, options: t} = St(this, "details.hide", {
                dir: this.localize.dir()
            });
            await xt(this.body, _t(e, this.body.scrollHeight), t),
            this.body.style.height = "auto",
            this.details.open = !1,
            this.emit("sl-after-hide")
        }
    }
    async show() {
        if (!(this.open || this.disabled))
            return this.open = !0,
            Tt(this, "sl-after-show")
    }
    async hide() {
        if (!(!this.open || this.disabled))
            return this.open = !1,
            Tt(this, "sl-after-hide")
    }
    render() {
        const s = this.localize.dir() === "rtl";
        return Yt`
      <details
        part="base"
        class=${Cr({
            details: !0,
            "details--open": this.open,
            "details--disabled": this.disabled,
            "details--rtl": s
        })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${s ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${s ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `
    }
}
;
G.styles = [Jt, nr];
G.dependencies = {
    "sl-icon": F
};
O([_e(".details")], G.prototype, "details", 2);
O([_e(".details__header")], G.prototype, "header", 2);
O([_e(".details__body")], G.prototype, "body", 2);
O([_e(".details__expand-icon-slot")], G.prototype, "expandIconSlot", 2);
O([H({
    type: Boolean,
    reflect: !0
})], G.prototype, "open", 2);
O([H()], G.prototype, "summary", 2);
O([H({
    type: Boolean,
    reflect: !0
})], G.prototype, "disabled", 2);
O([Je("open", {
    waitUntilFirstUpdate: !0
})], G.prototype, "handleOpenChange", 1);
Zt("details.show", {
    keyframes: [{
        height: "0",
        opacity: "0"
    }, {
        height: "auto",
        opacity: "1"
    }],
    options: {
        duration: 250,
        easing: "linear"
    }
});
Zt("details.hide", {
    keyframes: [{
        height: "auto",
        opacity: "1"
    }, {
        height: "0",
        opacity: "0"
    }],
    options: {
        duration: 250,
        easing: "linear"
    }
});
G.define("sl-details");
const $r = "[data-js-details]";
class Ar {
    #t = {
        item: "[data-js-details-item]"
    };
    #e;
    #s;
    constructor(e) {
        this.#e = e,
        this.#s = this.#e.querySelectorAll(this.#t.item),
        this.#i()
    }
    #i = () => {
        this.#e.addEventListener("sl-show", e => this.#r(e))
    }
    ;
    #r = e => {
        this.#s.forEach(t => {
            t.open = e.target === t
        }
        )
    }
}
class Pr {
    constructor() {
        document.querySelectorAll($r).forEach(e => {
            new Ar(e)
        }
        )
    }
}
const Mr = "[data-js-blog-list]";
class Lr {
    #t;
    constructor(e) {
        this.#t = e,
        this.#e()
    }
    async #e() {
        try {
            const {articlesAPI: e} = await es(async () => {
                const {articlesAPI: i} = await import("./api-BqbeGz9F.js");
                return {
                    articlesAPI: i
                }
            }
            , __vite__mapDeps([0, 1]))
              , t = await e.getAll(!0);
            this.#s(t || [])
        } catch (e) {
            console.error("Ошибка загрузки статей:", e),
            this.#t.innerHTML = '<p style="color: rgba(255, 255, 255, 0.7);">Не удалось загрузить статьи</p>'
        }
    }
    #s(e) {
        const t = e.map(i => `
      <article style="padding: 2rem; background: rgba(255, 255, 255, 0.05); border-radius: 1rem;">
        <h2 class="h3" style="margin-bottom: 1rem;">
          <a href="/blog/${i.slug}" style="color: inherit; text-decoration: none;">
            ${i.title}
          </a>
        </h2>
        <p style="color: rgba(255, 255, 255, 0.7); margin-bottom: 1rem;">
          ${i.description}
        </p>
        <a href="/blog/${i.slug}" class="link">Читать далее →</a>
      </article>
    `).join("");
        this.#t.innerHTML = t
    }
}
class Or {
    constructor() {
        const e = document.querySelectorAll(Mr);
        e.length !== 0 && e.forEach(t => {
            new Lr(t)
        }
        )
    }
}
new Di;
new Pr;
new Or;
