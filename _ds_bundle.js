/* @ds-bundle: {"namespace":"BGRDesignSystem","components":[{"name":"Accordion","sourcePath":"components/accordion/Accordion/Accordion.jsx"},{"name":"Button","sourcePath":"components/buttons-links/Button/Button.jsx"},{"name":"ContactPill","sourcePath":"components/buttons-links/ContactPill/ContactPill.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow/Eyebrow.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header/Header.jsx"},{"name":"Hero","sourcePath":"components/hero-pattern/Hero/Hero.jsx"},{"name":"HeroCard","sourcePath":"components/hero-pattern/HeroCard/HeroCard.jsx"},{"name":"Link","sourcePath":"components/buttons-links/Link/Link.jsx"},{"name":"LogoTile","sourcePath":"components/cards-tiles/LogoTile/LogoTile.jsx"},{"name":"NewsCard","sourcePath":"components/cards-tiles/NewsCard/NewsCard.jsx"},{"name":"StatDots","sourcePath":"components/spacing-misc/StatDots/StatDots.jsx"},{"name":"TileCard","sourcePath":"components/cards-tiles/TileCard/TileCard.jsx"}],"sourceHashes":{"components/accordion/Accordion/Accordion.jsx":"d02ad625eeee","components/accordion/Accordion/Accordion.d.ts":"f4b2c27f0b02","components/accordion/Accordion/Accordion.prompt.md":"487758c1c825","components/buttons-links/Button/Button.jsx":"fef2aadd764b","components/buttons-links/Button/Button.d.ts":"269aa2644d42","components/buttons-links/Button/Button.prompt.md":"2544e8f7e77a","components/buttons-links/ContactPill/ContactPill.jsx":"fffdf971bafe","components/buttons-links/ContactPill/ContactPill.d.ts":"b6973e083a40","components/buttons-links/ContactPill/ContactPill.prompt.md":"aaca5477a5e4","components/typography/Eyebrow/Eyebrow.jsx":"f3385ebef2a8","components/typography/Eyebrow/Eyebrow.d.ts":"faf52db7ad31","components/typography/Eyebrow/Eyebrow.prompt.md":"3658555f8b7e","components/navigation/Footer/Footer.jsx":"5e5622fd28ff","components/navigation/Footer/Footer.d.ts":"53eb3d0cb1dd","components/navigation/Footer/Footer.prompt.md":"7b87e82a5948","components/navigation/Header/Header.jsx":"cd2c70c41003","components/navigation/Header/Header.d.ts":"f5920d0d6b72","components/navigation/Header/Header.prompt.md":"7b805e3f33e4","components/hero-pattern/Hero/Hero.jsx":"65af8f61ac94","components/hero-pattern/Hero/Hero.d.ts":"26f249f04431","components/hero-pattern/Hero/Hero.prompt.md":"40a6d075bbfd","components/hero-pattern/HeroCard/HeroCard.jsx":"d1e908f7040c","components/hero-pattern/HeroCard/HeroCard.d.ts":"cf7040c47440","components/hero-pattern/HeroCard/HeroCard.prompt.md":"e1d960611137","components/buttons-links/Link/Link.jsx":"64bee0b50631","components/buttons-links/Link/Link.d.ts":"092727db53f7","components/buttons-links/Link/Link.prompt.md":"ed595514d796","components/cards-tiles/LogoTile/LogoTile.jsx":"d13851e73ff7","components/cards-tiles/LogoTile/LogoTile.d.ts":"b7f9c9fd7048","components/cards-tiles/LogoTile/LogoTile.prompt.md":"d7122d477258","components/cards-tiles/NewsCard/NewsCard.jsx":"f983d47dbc2a","components/cards-tiles/NewsCard/NewsCard.d.ts":"4995a13631eb","components/cards-tiles/NewsCard/NewsCard.prompt.md":"3e5df4208a00","components/spacing-misc/StatDots/StatDots.jsx":"3caadd7185f6","components/spacing-misc/StatDots/StatDots.d.ts":"e755beca451b","components/spacing-misc/StatDots/StatDots.prompt.md":"65f6832fe161","components/cards-tiles/TileCard/TileCard.jsx":"9a90ac64c542","components/cards-tiles/TileCard/TileCard.d.ts":"db17ddbdda01","components/cards-tiles/TileCard/TileCard.prompt.md":"06ffc98efb27"},"inlinedExternals":[],"builtBy":"cc-design-sync"} */
"use strict";
var BGRDesignSystem = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // <define:import.meta.env>
  var init_define_import_meta_env = __esm({
    "<define:import.meta.env>"() {
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      init_define_import_meta_env();
      var R = window.React;
      function np(p, k) {
        var o = {};
        for (var x in p) if (x !== "children") o[x] = p[x];
        if (k !== void 0) o.key = k;
        return o;
      }
      function jsx14(t, p, k) {
        var c = p && p.children;
        return c === void 0 ? R.createElement(t, np(p, k)) : R.createElement(t, np(p, k), c);
      }
      function jsxs8(t, p, k) {
        return R.createElement.apply(R, [t, np(p, k)].concat(p.children));
      }
      module.exports = R;
      module.exports.jsx = jsx14;
      module.exports.jsxs = jsxs8;
      module.exports.jsxDEV = function(t, p, k, s) {
        return (s ? jsxs8 : jsx14)(t, p, k);
      };
      module.exports.Fragment = R.Fragment;
    }
  });

  // dist/index.mjs
  var index_exports = {};
  __export(index_exports, {
    Accordion: () => Accordion,
    Button: () => Button,
    ContactPill: () => ContactPill,
    Eyebrow: () => Eyebrow,
    Footer: () => Footer,
    Header: () => Header,
    Hero: () => Hero,
    HeroCard: () => HeroCard,
    Link: () => Link,
    LogoTile: () => LogoTile,
    NewsCard: () => NewsCard,
    StatDots: () => StatDots,
    TileCard: () => TileCard
  });
  init_define_import_meta_env();
  var import_jsx_runtime = __toESM(require_react_shim(), 1);
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var React = __toESM(require_react_shim(), 1);
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  var React2 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime6 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime7 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime8 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime9 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime10 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime11 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime12 = __toESM(require_react_shim(), 1);
  var import_jsx_runtime13 = __toESM(require_react_shim(), 1);
  function Eyebrow({ children, muted, className }) {
    const cls = ["bgr-Eyebrow", muted ? "bgr-Eyebrow--muted" : "", className || ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cls, children });
  }
  function Link({ children, variant = "body", className, ...rest }) {
    const cls = ["bgr-Link", `bgr-Link--${variant}`, className || ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { className: cls, ...rest, children });
  }
  function Button({ children, variant = "solid", as = "a", className, ...rest }) {
    const cls = ["bgr-Button", `bgr-Button--${variant}`, className || ""].filter(Boolean).join(" ");
    if (as === "button") {
      const { href: _href, ...buttonRest } = rest;
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", className: cls, ...buttonRest, children });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { className: cls, ...rest, children });
  }
  function ContactPill({ children, inverted, className, ...rest }) {
    const cls = ["bgr-ContactPill", inverted ? "bgr-ContactPill--inverted" : "", className || ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { className: cls, ...rest, children });
  }
  function Header({
    logoSrc,
    logoAlt = "BGR Energy Systems",
    logoHref = "/",
    navLinks,
    menus = [],
    contactHref,
    contactLabel = "Contact",
    transparent = false
  }) {
    const [openMenu, setOpenMenu] = React.useState(null);
    const rootRef = React.useRef(null);
    React.useEffect(() => {
      function onPointerDown(e) {
        if (openMenu && rootRef.current && !rootRef.current.contains(e.target)) {
          setOpenMenu(null);
        }
      }
      function onKeyDown(e) {
        if (e.key === "Escape") setOpenMenu(null);
      }
      document.addEventListener("pointerdown", onPointerDown);
      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.removeEventListener("pointerdown", onPointerDown);
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [openMenu]);
    const headerCls = ["bgr-Header", transparent ? "bgr-Header--transparent" : ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", { ref: rootRef, className: headerCls, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "bgr-Header-bar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: logoHref, className: "bgr-Header-logo", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: logoSrc, alt: logoAlt, style: { height: 74, width: 69, objectFit: "contain" } }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("nav", { className: "bgr-Header-nav", children: [
          menus.map((menu) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              type: "button",
              className: ["bgr-NavLink", openMenu === menu.label ? "bgr-NavLink--open" : ""].filter(Boolean).join(" "),
              onClick: () => setOpenMenu(openMenu === menu.label ? null : menu.label),
              children: menu.label
            },
            menu.label
          )),
          navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: l.href, className: "bgr-NavLink", children: l.label }, l.label)),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ContactPill, { href: contactHref, inverted: transparent, children: contactLabel })
        ] })
      ] }),
      menus.map((menu) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "bgr-Header-menu", style: { display: openMenu === menu.label ? "block" : "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { maxWidth: 1560, margin: "0 auto", padding: "clamp(30px,4vh,46px) clamp(58px,7vw,132px) clamp(34px,5vh,54px)" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "bgr-Header-menu-inner", style: { padding: 0 }, children: menu.columns.map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "bgr-Header-menu-col-label", children: col.label || "\xA0" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { display: "flex", flexDirection: "column", gap: 2, marginTop: 10 }, children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: l.href, className: "bgr-Header-menu-link", children: l.label }, l.label)) })
        ] }, i)) }),
        menu.footerLink && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { marginTop: "clamp(24px,3vh,34px)", paddingTop: 18, borderTop: "1px solid var(--bgr-hairline)" }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "a",
          {
            href: menu.footerLink.href,
            className: "bgr-Link bgr-Link--body",
            style: { fontFamily: "var(--bgr-font-display)", fontSize: 13.5, fontWeight: 600, color: "var(--bgr-navy)" },
            children: menu.footerLink.label
          }
        ) })
      ] }) }, menu.label))
    ] });
  }
  function Accordion({ eyebrow, entries, defaultOpenIndex = 0 }) {
    const [openIndex, setOpenIndex] = React2.useState(defaultOpenIndex);
    const active = entries[openIndex];
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "bgr-Accordion-layout", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "bgr-Accordion-image-slot", children: active?.image ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: active.image.src, alt: active.image.alt }) : null }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        eyebrow && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "bgr-Accordion-eyebrow", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Eyebrow, { children: eyebrow }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: entries.map((entry, i) => {
          const isOpen = i === openIndex;
          return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ["bgr-AccordionItem", isOpen ? "bgr-AccordionItem--open" : ""].filter(Boolean).join(" "), children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("button", { type: "button", className: "bgr-AccordionItem-header", onClick: () => setOpenIndex(i), children: [
              entry.title,
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "bgr-AccordionItem-icon" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "bgr-AccordionItem-panel", style: { maxHeight: isOpen ? "2000px" : "0px" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "bgr-AccordionItem-panel-inner", children: [
              entry.body,
              entry.exploreLink && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { marginTop: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Link, { variant: "accent", href: entry.exploreLink.href, style: { fontSize: 16, fontWeight: 700 }, children: entry.exploreLink.label }) })
            ] }) })
          ] }, entry.title);
        }) })
      ] })
    ] });
  }
  function TileCard({ title, description, meta, className, ...rest }) {
    const cls = ["bgr-TileCard", className || ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("a", { className: cls, ...rest, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bgr-TileCard-title", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "bgr-TileCard-desc", children: description }),
      meta && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "bgr-TileCard-meta", children: meta })
    ] });
  }
  function NewsCard({ meta, title, href, linkLabel = "Read \u2192" }) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bgr-NewsCard", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bgr-NewsCard-meta", children: meta }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bgr-NewsCard-title", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Link, { variant: "accent", href, className: "bgr-NewsCard-link", children: linkLabel })
    ] });
  }
  function LogoTile({ src, alt }) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "bgr-LogoTile", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src, alt }) });
  }
  function HeroCard({ href, eyebrow, label, image }) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("a", { className: "bgr-HeroCard", href, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "bgr-HeroCard-image", children: image && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", { src: image.src, alt: image.alt }) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "bgr-HeroCard-text", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "bgr-HeroCard-eyebrow", children: eyebrow }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "bgr-HeroCard-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "bgr-HeroCard-label", children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "bgr-HeroCard-icon", children: "\u2197" })
        ] })
      ] })
    ] });
  }
  function Hero({ headline, primaryCta, secondaryCta, card, backgroundSrc, backgroundAlt }) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "bgr-Hero", children: [
      backgroundSrc && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "img",
        {
          src: backgroundSrc,
          alt: backgroundAlt || "",
          style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "bgr-Hero-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "bgr-Hero-headline", children: headline }),
          (primaryCta || secondaryCta) && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "bgr-Hero-ctas", children: [
            primaryCta && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, { variant: "solid", href: primaryCta.href, children: primaryCta.children }),
            secondaryCta && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, { variant: "outline-light", href: secondaryCta.href, children: secondaryCta.children })
          ] })
        ] }),
        card && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(HeroCard, { ...card })
      ] })
    ] });
  }
  function StatDots({ count, activeIndex }) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "bgr-StatDots", children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: ["bgr-StatDot", i === activeIndex ? "bgr-StatDot--active" : ""].filter(Boolean).join(" ") }, i)) });
  }
  function Footer({ columns, legalLinks = [], copyright }) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("footer", { className: "bgr-Footer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "bgr-Footer-cols", children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "bgr-Footer-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "bgr-Footer-col-label", children: col.label }),
        col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { href: l.href, className: "bgr-Footer-link", children: l.label }, l.label))
      ] }, col.label)) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "bgr-Footer-legal", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "bgr-Footer-copyright", children: copyright }),
        legalLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { display: "flex", gap: 18, marginLeft: "auto", flexWrap: "wrap" }, children: legalLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { href: l.href, className: "bgr-Footer-link", style: { fontSize: 11.5, color: "var(--bgr-eyebrow-grey)" }, children: l.label }, l.label)) })
      ] })
    ] });
  }
  return __toCommonJS(index_exports);
})();
window.BGRDesignSystem=BGRDesignSystem.__dsMainNs?Object.assign({},BGRDesignSystem,BGRDesignSystem.__dsMainNs,{__dsMainNs:undefined}):BGRDesignSystem;
