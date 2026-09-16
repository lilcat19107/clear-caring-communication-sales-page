/* Transforming analytics: optional, aggregate measurement; never send form values. */
(() => {
  'use strict';
  const id = 'G-VBPZZ5CYQV';
  const key = 'transforming_analytics_consent_v1';
  const panel = document.querySelector('[data-analytics-consent]');
  const settings = document.querySelector('[data-analytics-settings]');
  const program = document.currentScript.dataset.program;
  let choice = null;
  let loaded = false;
  let reopened = false;
  try { choice = localStorage.getItem(key); } catch (_) {}
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });
  function cleanURL(value) {
    try { const url = new URL(value); return url.origin + url.pathname; } catch (_) { return ''; }
  }
  function enable() {
    if (!/(^|\.)transforminghealthcarecoaching\.com$/.test(location.hostname)) return;
    window['ga-disable-' + id] = false;
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    if (loaded) return;
    loaded = true;
    window.gtag('js', new Date());
    const campaign = {};
    const query = new URLSearchParams(location.search);
    ['source', 'medium', 'campaign', 'term', 'content', 'id'].forEach((field) => {
      const value = query.get('utm_' + field);
      if (value && /^[a-zA-Z0-9 _.-]{1,100}$/.test(value)) {
        campaign[field === 'campaign' ? 'campaign_name' : 'campaign_' + field] = value;
      }
    });
    window.gtag('config', id, {
      ...campaign,
      debug_mode: query.get("analytics_debug") === "1",
      page_location: cleanURL(location.href), page_referrer: cleanURL(document.referrer),
      allow_google_signals: false, allow_ad_personalization_signals: false,
      program: program
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  }
  function disable() {
    window['ga-disable-' + id] = true;
    window.gtag('consent', 'update', { analytics_storage: 'denied' });
    document.cookie.split(';').forEach((entry) => {
      const name = entry.split('=')[0].trim();
      if (name !== '_ga' && !name.startsWith('_ga_')) return;
      const ending = '=; Max-Age=0; path=/; SameSite=Lax; Secure';
      document.cookie = name + ending;
      const parts = location.hostname.split('.');
      for (let i = 0; i < parts.length - 1; i++) {
        document.cookie = name + ending + '; domain=.' + parts.slice(i).join('.');
      }
    });
  }
  window.transformingTrack = (name) => {
    if (choice !== 'granted') return;
    if (!['generate_lead', 'checkout_click'].includes(name)) return;
    window.gtag('event', name, { send_to: id, program: program });
  };
  panel.hidden = choice === 'granted' || choice === 'denied';
  if (choice === 'granted') enable();
  else window['ga-disable-' + id] = true;
  panel.querySelectorAll('[data-analytics-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      choice = button.dataset.analyticsChoice;
      try { localStorage.setItem(key, choice); } catch (_) {}
      if (choice === 'granted') enable(); else disable();
      panel.hidden = true;
      const focusTarget = reopened ? settings : document.querySelector('.skip-link, header a, main a');
      if (focusTarget) focusTarget.focus({ preventScroll: true });
    });
  });
  settings.addEventListener('click', () => {
    reopened = true;
    panel.hidden = false;
    panel.querySelector('button').focus();
  });
  document.querySelectorAll('[data-track="regular_paywall_click"]').forEach((link) => {
    link.addEventListener('click', () => window.transformingTrack('checkout_click'));
  });
})();
