# Mippi Vuorikoski — sivusto

## Kansiorakenne

```
mippi-site/
├── index.html              ← Etusivu
├── vercel.json             ← Vercelin asetukset
├── css/
│   └── styles.css          ← Kaikki tyylit (brändivärit, fontit, komponentit)
├── js/
│   ├── shared.js           ← Navigaatio + footer (jaettu kaikille sivuille)
│   └── nav.js              ← Mobiilivalikko + lomakkeet
└── pages/
    ├── psykedeeli.html     ← Integraatioterapia
    ├── hollanti.html       ← Fasilitointi Hollannissa
    ├── grof.html           ← Grof Breathwork -työpajat
    ├── transpersonaalinen.html
    ├── kurssit.html        ← Verkkokurssit
    ├── luennot.html
    ├── yksiloterapia.html
    ├── ihmissuhdeterapia.html
    ├── yrityksille.html
    ├── minusta.html
    ├── blogi.html
    ├── mediassa.html
    └── yhteydenotto.html
```

## Julkaisu Verceliin (5 askelta)

1. Mene osoitteeseen **vercel.com** ja luo ilmainen tili (kirjaudu GitHubilla)
2. Klikkaa **"Add New Project"**
3. Valitse **"Deploy from existing code"** → vedä `mippi-site`-kansio suoraan
4. Klikkaa **Deploy** — valmista!
5. Domain: Vercel-asetuksista **"Domains"** → lisää `mippivuorikoski.com`

## Domain Squarespacesta Verceliin

Squarespace-hallintapaneelissa:
- Asetukset → Domains → mippivuorikoski.com → DNS Settings
- Muuta A Record osoittamaan: `76.76.21.21`
- Lisää CNAME: `www` → `cname.vercel-dns.com`
- Odota 10–30 min (DNS päivittyy)

## Sähköpostilistan siirto

1. Squarespace → Settings → Audience → Export CSV
2. Kit (kit.com) → Subscribers → Import → lataa CSV
- Valmis!

## Lomakkeet (yhteydenotto)

Yhteydenottolomake menee **Formspree**-palvelun kautta:
1. Rekisteröidy osoitteessa formspree.io (ilmainen)
2. Luo uusi lomake → kopioi lomake-ID
3. Lisää `action="https://formspree.io/f/SINUN-ID"` yhteydenotto.html-lomakkeeseen

## Brändivärit (muokkaa styles.css:ssä)

| Muuttuja    | Arvo      | Käyttö                    |
|-------------|-----------|---------------------------|
| --orange    | #ffa546   | CTA-napit, korostukset    |
| --purple    | #d4a5e0   | Hover-tilat, aksentit     |
| --lav       | #f0dbf6   | Taustat, kortit           |
| --cream     | #fceed3   | Vaaleampi tausta          |
| --peach     | #f7bfa0   | Pilari-aksentit           |
| --blue      | #a6e1fa   | Pilari-aksentit           |
| --dark      | #222222   | Teksti, tummat taustat    |

## Fontit

- **Cormorant Garamond** — otsikot, lainaukset (Google Fonts)
- **DM Sans** — leipäteksti, napit, navigaatio (Google Fonts)
