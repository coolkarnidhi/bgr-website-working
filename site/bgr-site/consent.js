/* BGR cookie consent: a banner on first visit, and a preferences panel on the Cookie Preferences page.
   The choice is kept in the browser (localStorage). Non-essential cookies stay off until the visitor allows them.
   Nothing on the site sets analytics cookies yet: the choice is recorded so that embeds and analytics can check it.
   Other code reads it with window.bgrConsent.get() and listens for the "bgr-consent" event.
   The CMS version must record the final cookie list and gate the third-party embeds (share price chart, maps) on this choice. */
(function () {
  var KEY = 'bgr_cookie_consent_v1';
  var PAGE = 'Cookies.dc.html';
  function read() { try { var v = JSON.parse(localStorage.getItem(KEY)); return v && typeof v === 'object' ? v : null; } catch (e) { return null; } }
  function write(c) { try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) { } }
  function clear() { try { localStorage.removeItem(KEY); } catch (e) { } }
  function make(analytics, embeds) { return { essential: true, analytics: !!analytics, embeds: !!embeds, ts: new Date().toISOString() }; }
  function save(c) { write(c); try { window.dispatchEvent(new CustomEvent('bgr-consent', { detail: c })); } catch (e) { } return c; }
  window.bgrConsent = { get: read, set: function (a, e) { return save(make(a, e)); }, reset: function () { clear(); }, open: function () { showBanner(true); } };

  var FONT = "'Inter',sans-serif", HEAD = "'Manrope',sans-serif";
  function el(tag, css, text) { var n = document.createElement(tag); if (css) n.style.cssText = css; if (text) n.textContent = text; return n; }
  function btn(label, bg, fg, border, onClick) {
    var b = el('button', 'cursor:pointer;border-radius:100px;padding:11px 20px;font:600 13px ' + HEAD + ';background:' + bg + ';color:' + fg + ';border:1px solid ' + border + ';transition:background 200ms,color 200ms');
    b.type = 'button'; b.textContent = label; b.addEventListener('click', onClick);
    b.addEventListener('mouseenter', function () { b.style.opacity = '.88'; }); b.addEventListener('mouseleave', function () { b.style.opacity = '1'; });
    return b;
  }

  var banner = null;
  function hideBanner() { if (banner && banner.parentNode) banner.parentNode.removeChild(banner); banner = null; }
  function showBanner(force) {
    if (window.top !== window) return;                         // pages shown inside another page (business pages) never show their own banner
    if (!force && (read() || /Cookies\.dc\.html/i.test(location.pathname))) return;
    if (banner) return;
    banner = el('div', 'position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#fff;border-top:1px solid #C7CBD9;box-shadow:0 -8px 30px rgba(9,17,38,.14);padding:16px clamp(20px,4vw,60px);font-family:' + FONT + ';color:#16295B;display:flex;flex-wrap:wrap;align-items:center;gap:14px 32px');
    banner.setAttribute('role', 'dialog'); banner.setAttribute('aria-label', 'Cookie preferences');
    var txt = el('div', 'flex:1 1 420px;min-width:0');
    txt.appendChild(el('div', 'font:700 14px/1.3 ' + HEAD + ';margin:0 0 4px', 'Cookies on this website'));
    var p = el('p', 'font-size:13.5px;line-height:1.55;color:#43517D;margin:0;max-width:90ch');
    p.appendChild(document.createTextNode('We use essential cookies to make this site work. With your permission we would also use analytics and third-party content such as the share price chart and maps. '));
    var more = el('a', 'color:#16295B;text-decoration:underline;font-weight:600', 'Manage preferences'); more.href = PAGE; p.appendChild(more); p.appendChild(document.createTextNode('.'));
    txt.appendChild(p); banner.appendChild(txt);
    var row = el('div', 'display:flex;gap:10px;flex-wrap:wrap;flex:none');
    row.appendChild(btn('Accept all', '#E41D26', '#fff', '#E41D26', function () { save(make(true, true)); hideBanner(); }));
    row.appendChild(btn('Reject non-essential', '#fff', '#16295B', '#16295B', function () { save(make(false, false)); hideBanner(); }));
    banner.appendChild(row);
    document.body.appendChild(banner);
  }

  function renderPrefs(host) {
    if (host.getAttribute('data-ready')) return; host.setAttribute('data-ready', '1');
    var cur = read() || make(false, false);
    var wrap = el('div', 'max-width:860px;border:1px solid #C7CBD9;border-radius:10px;background:#F4F6FA;padding:clamp(20px,3vw,32px);font-family:' + FONT);
    wrap.appendChild(el('div', 'font:700 12px ' + HEAD + ';letter-spacing:.18em;text-transform:uppercase;color:#E41D26;margin-bottom:6px', 'Your choices'));
    wrap.appendChild(el('p', 'font-size:14.5px;line-height:1.6;color:#43517D;margin:0 0 18px', 'Choose which cookies this website may use. Your choice is stored in this browser and you can change it here at any time.'));
    var boxes = {};
    function row(key, title, desc, on, locked) {
      var r = el('label', 'display:flex;gap:16px;align-items:flex-start;padding:14px 0;border-top:1px solid #E0E4EC;cursor:' + (locked ? 'default' : 'pointer'));
      var cb = el('input'); cb.type = 'checkbox'; cb.checked = on; cb.disabled = !!locked; cb.style.cssText = 'width:20px;height:20px;margin-top:2px;accent-color:#16295B;flex:none'; boxes[key] = cb;
      var t = el('div'); t.appendChild(el('div', 'font:700 15px ' + HEAD + ';color:#16295B', title + (locked ? ' (always on)' : ''))); t.appendChild(el('div', 'font-size:14px;line-height:1.6;color:#5A6788;margin-top:2px', desc));
      r.appendChild(cb); r.appendChild(t); wrap.appendChild(r);
    }
    row('essential', 'Essential', 'Needed for the site to work and to remember this choice.', true, true);
    row('analytics', 'Analytics', 'Help us understand how the site is used. None is switched on yet.', cur.analytics, false);
    row('embeds', 'Third-party content', 'Content from other providers, such as the share price chart and maps.', cur.embeds, false);
    var status = el('div', 'font-size:13.5px;color:#1B6B3A;min-height:20px;margin-top:12px'); status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
    var bar = el('div', 'display:flex;gap:10px;flex-wrap:wrap;margin-top:16px');
    function done(msg) { status.textContent = msg; hideBanner(); }
    bar.appendChild(btn('Save my choices', '#16295B', '#fff', '#16295B', function () { save(make(boxes.analytics.checked, boxes.embeds.checked)); done('Your choices are saved.'); }));
    bar.appendChild(btn('Accept all', '#E41D26', '#fff', '#E41D26', function () { boxes.analytics.checked = boxes.embeds.checked = true; save(make(true, true)); done('All cookies accepted.'); }));
    bar.appendChild(btn('Reject non-essential', '#fff', '#16295B', '#16295B', function () { boxes.analytics.checked = boxes.embeds.checked = false; save(make(false, false)); done('Non-essential cookies rejected.'); }));
    wrap.appendChild(bar); wrap.appendChild(status); host.appendChild(wrap);
  }

  function init() {
    showBanner(false);
    var tries = 0, t = setInterval(function () { var h = document.getElementById('cookie-prefs'); if (h) { renderPrefs(h); clearInterval(t); } else if (++tries > 60) clearInterval(t); }, 150);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
