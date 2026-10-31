// The one place the domain lives. Change it here and nowhere else once a real
// domain is bought.
window.SITE = 'mergetel.github.io/stinkslot';

(() => {
  // The site root, worked out from where this script was loaded. On GitHub Pages
  // without a custom domain that's /stinkslot/, with one it's /.
  const BASE = new URL('..', document.currentScript.src).pathname;
  window.BASE = BASE;

  // Barb's last bloom, and the 7 to 10 year window that follows it. Every page
  // reads these, so the status page and the booking widget agree.
  const LAST_BLOOM = new Date('2021-03-02T02:47:00');
  const DAY = 86400000;
  window.BARB = {
    lastBloom: LAST_BLOOM,
    windowStart: new Date('2028-03-02T00:00:00'),
    windowEnd: new Date('2031-03-02T00:00:00'),
    daysDormant: () => Math.floor((Date.now() - LAST_BLOOM.getTime()) / DAY),
  };

  window.MARK = `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 9c-1-1.5 1-2.5 0-4M24 9c1-1.5-1-2.5 0-4" fill="none" stroke="#8fb339" stroke-width="1.6" stroke-linecap="round"/><path d="M16 2.5c-1.5 3.2-2.4 9.4-2.4 19.5h4.8C18.4 11.9 17.5 5.7 16 2.5z" fill="#d4bd5c"/><path d="M3 13c1.3 9 6 15.5 13 15.5S27.7 22 29 13c-3.6 3.8-8 5.7-13 5.7S6.6 16.8 3 13z" fill="#7a1236"/><path d="M3 13c3.6 3.8 8 5.7 13 5.7s9.4-1.9 13-5.7" fill="none" stroke="#b8456f" stroke-width="1.4"/></svg>`;

  const here = location.pathname.replace(/index\.html$/, '');
  const link = (path, text, cls) =>
    `<a href="${BASE}${path}"${cls ? ` class="${cls}"` : ''}${here === BASE + path ? ' aria-current="page"' : ''}>${text}</a>`;

  const nav = document.getElementById('nav');
  if (nav) {
    nav.innerHTML = `
      <div class="wrap navbar">
        <a class="brand" href="${BASE}" aria-label="StinkSlot home">${window.MARK}<span>StinkSlot</span></a>
        <nav aria-label="Main">
          ${link('', 'Product', 'home')}
          ${link('pricing/', 'Pricing')}
          ${link('status/', 'Status')}
        </nav>
        <a class="btn btn-primary btn-sm" href="${BASE}#book">Book a viewing</a>
      </div>`;
  }

  const foot = document.getElementById('foot');
  if (foot) {
    foot.innerHTML = `
      <div class="wrap">
        <section class="john" aria-labelledby="why">
          <h2 id="why">Why this exists</h2>
          <p>Everybody builds booking software. I've started two in my head and they both died at the same step, the one where you have to sell it to somebody.</p>
          <p>The advice now is that SaaS is dead and you have to niche down until nobody else wants your market. So I did. StinkSlot's total addressable market is one plant, and the plant needs it about once a decade.</p>
          <p>The thing is, the corpse flower has my problem. It does something amazing every few years, it's over in a day and a half, and most people find out after it closed. That's every release I ever shipped.</p>
          <p>So what I actually built is <a href="https://merge.tel">merge.tel</a>. It reads the pull requests your team merges and writes the customer update, so people hear what shipped while it's still open. I use it every day on merge.tel and my other projects.</p>
        </section>
        <div class="footbar">
          <p>StinkSlot is a parody. Barb, the conservatories, the people and the quotes are made up. Corpse flowers are real, and they really do smell like that.</p>
          <p class="credits">The photos are real corpse flowers, none of them Barb, all CC0 from Wikimedia Commons: Kew by <a href="https://commons.wikimedia.org/wiki/File:Titan_arum_flowering,_Princess_of_Wales_Conservatory,_Kew.jpg">AndyScott</a> and <a href="https://commons.wikimedia.org/wiki/File:Titan_arum_at_Kew_Gardens_in_leaf_cycle.jpg">Mooyah</a>, Meise by <a href="https://commons.wikimedia.org/wiki/File:Amorphophallus_titanum_at_Meise_Botanic_Garden_in_2024.jpg">Orbicule</a>, Warsaw by <a href="https://commons.wikimedia.org/wiki/File:Measuring_temperature_of_a_blooming_Amorphophallus_titanum_3.jpg">Olaf</a>, Bayreuth by <a href="https://commons.wikimedia.org/wiki/File:Titan_Arum_at_Bayreuth_University_-_Second_Day_1.JPG">Fbianh</a>.</p>
          <p><a href="${BASE}pricing/">Pricing</a> · <a href="${BASE}status/">Status</a> · <a href="https://merge.tel">merge.tel</a></p>
        </div>
      </div>`;
  }

  let toastTimer;
  window.toast = (text) => {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('on'), 3200);
  };

  document.querySelectorAll('[data-site]').forEach((el) => { el.textContent = window.SITE; });
  document.querySelectorAll('[data-dormant]').forEach((el) => { el.textContent = window.BARB.daysDormant().toLocaleString('en-US'); });
})();
