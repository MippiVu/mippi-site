/* shared.js — injects nav and footer into every page */

const NAV_HTML = `
<nav class="nav">
  <a href="/index.html" class="nav-logo">Mippi Vuorikoski</a>

  <ul class="nav-links">
    <li class="nav-item">
      <button class="nav-btn" aria-haspopup="true">
        Psykedeelityöskentely <span class="nav-chevron">▾</span>
      </button>
      <div class="dropdown">
        <span class="dropdown-label-sm">Psykedeelityöskentely</span>
        <a href="/pages/psykedeeli.html" class="dropdown-link">
          Integraatioterapia
          <div class="dropdown-link-sub">Kokemusten integrointi arkeen</div>
        </a>
        <a href="/pages/hollanti.html" class="dropdown-link">
          Fasilitointi Hollannissa
          <div class="dropdown-link-sub">Laillinen psilosybiiniretreatti</div>
        </a>
      </div>
    </li>

    <li class="nav-item">
      <button class="nav-btn" aria-haspopup="true">
        Grof &amp; Transpersonaalinen <span class="nav-chevron">▾</span>
      </button>
      <div class="dropdown">
        <span class="dropdown-label-sm">Grof &amp; Transpersonaalinen</span>
        <a href="/pages/grof.html" class="dropdown-link">
          Holotrooppiset työpajat
          <div class="dropdown-link-sub">Grof Breathwork -sertifioitu fasilitaattori</div>
        </a>
        <a href="/pages/transpersonaalinen.html" class="dropdown-link">
          Transpersonaalinen terapia
          <div class="dropdown-link-sub">Laajentuneet tietoisuuden tilat</div>
        </a>
      </div>
    </li>

    <li class="nav-item">
      <button class="nav-btn" aria-haspopup="true">
        Kurssit &amp; Luennot <span class="nav-chevron">▾</span>
      </button>
      <div class="dropdown">
        <span class="dropdown-label-sm">Ensisijainen apu</span>
        <a href="/pages/kurssit.html" class="dropdown-link">
          Verkkokurssit
          <div class="dropdown-link-sub">Mielenterveys ja parisuhteet</div>
        </a>
        <a href="/pages/luennot.html" class="dropdown-link">
          Luennot &amp; ryhmät
          <div class="dropdown-link-sub">Ammattilaisille ja yleisölle</div>
        </a>
      </div>
    </li>

    <li class="nav-item">
      <button class="nav-btn" aria-haspopup="true">
        Terapia <span class="nav-chevron">▾</span>
      </button>
      <div class="dropdown">
        <span class="dropdown-label-sm">Henkilökohtainen työskentely</span>
        <a href="/pages/yksiloterapia.html" class="dropdown-link">
          Yksilöterapia
          <div class="dropdown-link-sub">Neurobiologinen, kiintymyssuhteisiin pohjaava</div>
        </a>
        <a href="/pages/ihmissuhdeterapia.html" class="dropdown-link">
          Ihmissuhdeterapia <span class="badge-new">vahvistuva</span>
          <div class="dropdown-link-sub">Parit, kolmikot, polysuhteet</div>
        </a>
      </div>
    </li>

    <li class="nav-item">
      <a href="/pages/yrityksille.html" class="nav-link">Yrityksille</a>
    </li>

    <li class="nav-item">
      <a href="/pages/minusta.html" class="nav-link">Minusta</a>
    </li>
  </ul>

  <a href="/pages/yhteydenotto.html" class="btn btn-primary nav-cta">Ota yhteyttä</a>

  <button class="nav-toggle" id="nav-toggle" aria-label="Avaa valikko" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
  <a href="/pages/psykedeeli.html" class="mobile-nav-link">Integraatioterapia</a>
  <a href="/pages/hollanti.html"   class="mobile-nav-sub">↳ Fasilitointi Hollannissa</a>
  <a href="/pages/grof.html"       class="mobile-nav-link">Grof Breathwork -työpajat</a>
  <a href="/pages/transpersonaalinen.html" class="mobile-nav-sub">↳ Transpersonaalinen terapia</a>
  <a href="/pages/kurssit.html"    class="mobile-nav-link">Verkkokurssit</a>
  <a href="/pages/luennot.html"    class="mobile-nav-sub">↳ Luennot &amp; ryhmät</a>
  <a href="/pages/yksiloterapia.html"    class="mobile-nav-link">Yksilöterapia</a>
  <a href="/pages/ihmissuhdeterapia.html" class="mobile-nav-sub">↳ Ihmissuhdeterapia</a>
  <a href="/pages/yrityksille.html" class="mobile-nav-link">Yrityksille</a>
  <a href="/pages/minusta.html"    class="mobile-nav-link">Minusta</a>
  <a href="/pages/blogi.html"      class="mobile-nav-link">Blogi</a>
  <div style="margin-top:2rem;">
    <a href="/pages/yhteydenotto.html" class="btn btn-primary" style="width:100%;justify-content:center;">Ota yhteyttä</a>
  </div>
</div>`;

const FOOTER_HTML = `
<div class="newsletter">
  <div>
    <h3>Saa ensimmäisenä tietoa Grof-työpajoista</h3>
    <p>Ei spämmejä — vain ilmoitukset tulevista työpajoista ja olennaisesta.</p>
  </div>
  <div class="nl-form">
    <input type="email" placeholder="Sähköpostiosoitteesi">
    <button class="btn btn-dark">Liity listalle</button>
  </div>
</div>

<footer class="footer">
  <div>
    <a href="/index.html" class="footer-logo">Mippi Vuorikoski</a>
    <p class="footer-tagline">Terapeutti &amp; fasilitaattori · Helsinki</p>
    <div class="footer-contact">
      <a href="mailto:mippi.vuorikoski@gmail.com">mippi.vuorikoski@gmail.com</a>
      <a href="tel:+358405313112">+358 40 531 3112</a>
      <a href="#">Malminkatu 22 e 122, Helsinki</a>
    </div>
  </div>
  <div class="footer-col">
    <h4>Psykedeeli &amp; Grof</h4>
    <a href="/pages/psykedeeli.html">Integraatioterapia</a>
    <a href="/pages/hollanti.html">Fasilitointi Hollannissa</a>
    <a href="/pages/grof.html">Grof Breathwork</a>
    <a href="/pages/transpersonaalinen.html">Transpersonaalinen terapia</a>
  </div>
  <div class="footer-col">
    <h4>Kurssit &amp; Terapia</h4>
    <a href="/pages/kurssit.html">Verkkokurssit</a>
    <a href="/pages/luennot.html">Luennot</a>
    <a href="/pages/yksiloterapia.html">Yksilöterapia</a>
    <a href="/pages/ihmissuhdeterapia.html">Ihmissuhdeterapia</a>
    <a href="/pages/yrityksille.html">Yrityksille</a>
  </div>
  <div class="footer-col">
    <h4>Muut</h4>
    <a href="/pages/minusta.html">Minusta</a>
    <a href="/pages/blogi.html">Blogi</a>
    <a href="/pages/mediassa.html">Mediassa</a>
    <a href="/pages/yhteydenotto.html">Ota yhteyttä</a>
  </div>
</footer>
<div class="footer-bottom">
  <span>© 2025 Mippi Vuorikoski</span>
  <span>Helsinki, Suomi</span>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
  const navMount = document.getElementById('nav-mount');
  const footerMount = document.getElementById('footer-mount');
  if (navMount)    navMount.innerHTML = NAV_HTML;
  if (footerMount) footerMount.innerHTML = FOOTER_HTML;
});
