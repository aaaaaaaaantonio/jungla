// Genera index.html (español) y en/index.html (inglés) a partir de data/carta.json.
// Uso: node build.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const carta = JSON.parse(readFileSync(new URL("./data/carta.json", import.meta.url), "utf8"));

const WA = "584165027741";
const MAPS = "https://maps.app.goo.gl/dBsyvLY2KjqjJxrk9";
const IG = "https://www.instagram.com/la__jungla/";
const SITE = "https://aaaaaaaaantonio.github.io/jungla/";
const NB = " ";

const T = {
  es: {
    title: "La Jungla Gastro Bar, dónde comer en Puerto Ayacucho",
    description: "Gastro-bar en la Av. Perimetral de Puerto Ayacucho, Amazonas: cocina clásica, asiática y mexicana, rolls y cócteles. Reservas y delivery por WhatsApp.",
    skip: "Saltar al contenido",
    address: "Av. Perimetral, Puerto Ayacucho, Amazonas",
    hoursDefault: "Martes a domingo, de 11:30 a. m. a 11:30 p. m.",
    navLabel: "Principal",
    home: "La Jungla Gastro Bar, inicio",
    nav: [["#carta", "Carta"], ["#cocteles", "Cócteles"], ["#horario", "Horario"], ["#reservar", "Reservar"]],
    other: { href: "en/", label: "English", lang: "en" },
    h1: "¿Dónde cenar en Puerto Ayacucho?",
    lead: "En La Jungla, Av. Perimetral: cocina clásica, asiática, mexicana y cócteles.",
    book: "Reservar por WhatsApp",
    seeMenu: "Ver la carta",
    waBook: "Hola, quiero reservar una mesa en La Jungla.",
    waDelivery: "Hola, quiero pedir delivery de La Jungla.",
    indexLabel: "La carta por cocina",
    index: [
      { name: "Clásica", dishes: "Lomito, pulpo al grill, parrillas", ids: ["clasica"], href: "#carta-clasica" },
      { name: "Asiática", dishes: "Rolls, pad thai, yakimeshi", ids: ["asiatica", "rolls"], href: "#carta-asiatica" },
      { name: "Mexicana", dishes: "Tacos, tostadas, burritos", ids: ["mexicana"], href: "#carta-mexicana" },
      { name: "Pastas y hamburguesas", dishes: "Tortellini, linguini, carne ahumada", ids: ["pastas"], href: "#carta-pastas" },
      { name: "Cócteles", dishes: "Unuma, Marahuaca, Salvaje", ids: ["cocteles"], href: "#cocteles" },
    ],
    platosLabel: "Platos de La Jungla",
    platos: [
      ["mesa-amigas", "Tres amigas comen hamburguesas con papas en una mesa de La Jungla", "Gente comiendo en una mesa de La Jungla, de noche", 923, 1000],
      ["pasta-amatriciana", "Pasta amatriciana con tocineta y parmesano", "Un plato de la carta, de cerca", 923, 750],
      ["hamburguesa-brioche", "Hamburguesa con tocineta, cheddar y lechuga en pan brioche", "Un plato de la carta, de cerca y sobre fondo oscuro", 923, 875],
    ],
    cartaH: "¿Qué hay en la carta?",
    cartaLead: "Precios en dólares. Toca un plato para ver qué lleva.",
    tabsLabel: "Cocinas",
    ask: "Consultar",
    tragosH: "¿Y para tomar?",
    tragosLead: "Cócteles de la casa con ron, tequila, vodka y frutas.",
    figLabel: "el Salvaje o el mojito eléctrico, los cócteles más económicos de la casa.",
    horarioH: "¿Cuándo abren y dónde están?",
    horarioLead: "Av. Perimetral, Puerto Ayacucho, estado Amazonas, Venezuela.",
    maps: "Abrir en Google Maps",
    ig: "Instagram",
    weekCaption: "Horario de la semana",
    days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    closed: "Cerrado",
    hours: "11:30 a. m. a 11:30 p. m.",
    reservarH: "¿Cómo reservo una mesa?",
    reservarLead: "Elige personas, día y hora: el mensaje sale listo en WhatsApp.",
    fPersonas: "Personas", fDia: "Día", fHora: "Hora", fNombre: "Tu nombre",
    more10: "Más de 10",
    fallbackDays: ["El martes", "El miércoles", "El jueves", "El viernes", "El sábado", "El domingo"],
    deliveryQ: "¿Prefieres delivery?",
    deliveryA: "Pídelo por WhatsApp",
    cierreAlt: "La barra de La Jungla de noche, con las botellas iluminadas",
    cierreImgAlt: "Una clienta come en una mesa de La Jungla, con la barra y sus botellas iluminadas detrás",
    barText: "Mesa o delivery, por WhatsApp.",
    barDelivery: "Pedir delivery",
    barBook: "Reservar mesa",
    colophon: `La Jungla Gastro Bar, Av. Perimetral, Puerto Ayacucho, estado Amazonas, Venezuela. Abierto de martes a domingo. Reservas y delivery por WhatsApp al <a href="https://wa.me/${WA}">+58${NB}416${NB}502${NB}7741</a>; en Instagram, <a href="${IG}">@la__jungla</a>. RIF J-401829481.`,
    credits: "Fotografías de La Jungla, tomadas de su Instagram.",
  },
  en: {
    title: "La Jungla Gastro Bar, where to eat in Puerto Ayacucho",
    description: "A gastro-bar on Av. Perimetral in Puerto Ayacucho, Amazonas, Venezuela: classic, Asian and Mexican food, sushi rolls and cocktails. Book or order delivery on WhatsApp.",
    skip: "Skip to content",
    address: "Av. Perimetral, Puerto Ayacucho, Amazonas",
    hoursDefault: "Tuesday to Sunday, 11:30 am to 11:30 pm",
    navLabel: "Main",
    home: "La Jungla Gastro Bar, home",
    nav: [["#carta", "Menu"], ["#cocteles", "Cocktails"], ["#horario", "Hours"], ["#reservar", "Book"]],
    other: { href: "../", label: "Español", lang: "es" },
    h1: "Where to eat in Puerto Ayacucho?",
    lead: "La Jungla, on Av. Perimetral: classic, Asian and Mexican food, and cocktails.",
    book: "Book on WhatsApp",
    seeMenu: "See the menu",
    waBook: "Hi, I’d like to book a table at La Jungla.",
    waDelivery: "Hi, I’d like to order delivery from La Jungla.",
    indexLabel: "The menu by kitchen",
    index: [
      { name: "Classic", dishes: "Tenderloin, grilled octopus, grills", ids: ["clasica"], href: "#carta-clasica" },
      { name: "Asian", dishes: "Sushi rolls, pad thai, yakimeshi", ids: ["asiatica", "rolls"], href: "#carta-asiatica" },
      { name: "Mexican", dishes: "Tacos, tostadas, burritos", ids: ["mexicana"], href: "#carta-mexicana" },
      { name: "Pasta and burgers", dishes: "Tortellini, linguini, smoked beef", ids: ["pastas"], href: "#carta-pastas" },
      { name: "Cocktails", dishes: "Unuma, Marahuaca, Salvaje", ids: ["cocteles"], href: "#cocteles" },
    ],
    platosLabel: "Dishes at La Jungla",
    platos: [
      ["mesa-amigas", "Three friends eating burgers and fries at a table in La Jungla", "People eating at a table in La Jungla, at night", 923, 1000],
      ["pasta-amatriciana", "Pasta amatriciana with bacon and parmesan", "A dish from the menu, close up", 923, 750],
      ["hamburguesa-brioche", "A burger with bacon, cheddar and lettuce on a brioche bun", "A dish from the menu, close up on a dark ground", 923, 875],
    ],
    cartaH: "What’s on the menu?",
    cartaLead: "Prices in US dollars. Tap a dish to see what’s in it.",
    tabsLabel: "Kitchens",
    ask: "Ask",
    tragosH: "And to drink?",
    tragosLead: "House cocktails made with rum, tequila, vodka and fruit.",
    figLabel: "a Salvaje or an electric mojito, the lowest-priced cocktails in the house.",
    horarioH: "When are you open, and where?",
    horarioLead: "Av. Perimetral, Puerto Ayacucho, Amazonas state, Venezuela.",
    maps: "Open in Google Maps",
    ig: "Instagram",
    weekCaption: "Opening hours",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    closed: "Closed",
    hours: "11:30 am to 11:30 pm",
    reservarH: "How do I book a table?",
    reservarLead: "Pick party size, day and time: the message opens ready in WhatsApp.",
    fPersonas: "People", fDia: "Day", fHora: "Time", fNombre: "Your name",
    more10: "More than 10",
    fallbackDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    deliveryQ: "Rather have it delivered?",
    deliveryA: "Order on WhatsApp",
    cierreAlt: "La Jungla’s bar at night, the bottles lit",
    cierreImgAlt: "A guest eating at a table in La Jungla, the bar and its lit bottles behind her",
    barText: "A table or delivery, on WhatsApp.",
    barDelivery: "Order delivery",
    barBook: "Book a table",
    colophon: `La Jungla Gastro Bar, Av. Perimetral, Puerto Ayacucho, Amazonas state, Venezuela. Open Tuesday to Sunday. Bookings and delivery on WhatsApp at <a href="https://wa.me/${WA}">+58${NB}416${NB}502${NB}7741</a>; on Instagram, <a href="${IG}">@la__jungla</a>. RIF J-401829481.`,
    credits: "Photographs by La Jungla, from its Instagram.",
  },
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const wa = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

function money(n, lang) {
  if (n == null) return null;
  const s = Number.isInteger(n) ? String(n) : n.toFixed(2);
  return lang === "es" ? s.replace(".", ",") : s;
}
function withCurrency(n, lang) {
  return lang === "es" ? `${money(n, lang)}${NB}$` : `$${money(n, lang)}`;
}
function range(lo, hi, lang) {
  if (lo === hi) return withCurrency(lo, lang);
  return lang === "es" ? `${money(lo, lang)} a ${money(hi, lang)}${NB}$` : `$${money(lo, lang)} to $${money(hi, lang)}`;
}
function pricesOf(plato) {
  if (plato.variantes) return plato.variantes.map((v) => v.precio);
  return plato.precio == null ? [] : [plato.precio];
}
function spanOf(ids) {
  const all = [];
  for (const id of ids) {
    if (id === "cocteles") carta.cocteles.forEach((c) => all.push(c.precio));
    const k = carta.cocinas.find((c) => c.id === id);
    if (k) k.grupos.forEach((g) => g.platos.forEach((p) => all.push(...pricesOf(p))));
  }
  return [Math.min(...all), Math.max(...all)];
}

const PLUS = `<svg class="dish__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`;

function dish(p, lang) {
  const t = T[lang];
  const ps = pricesOf(p);
  const price = ps.length === 0 ? `<span class="dish__price dish__price--ask">${t.ask}</span>`
    : `<span class="dish__price">${ps.length > 1 && Math.min(...ps) !== Math.max(...ps) ? (lang === "es" ? `${money(Math.min(...ps), lang)} a ${money(Math.max(...ps), lang)}` : `${money(Math.min(...ps), lang)} to ${money(Math.max(...ps), lang)}`) : money(ps[0], lang)}</span>`;
  const name = `<span class="dish__name">${esc(p.nombre[lang])}</span>`;
  if (!p.desc && !p.variantes) return `<li><div class="dish dish--plain">${name}${price}</div></li>`;
  const variants = p.variantes
    ? `<dl class="variants">${p.variantes.map((v) => `<div><dt>${esc(v.nombre[lang])}</dt><dd>${money(v.precio, lang)}</dd></div>`).join("")}</dl>`
    : "";
  const desc = p.desc ? `<p>${esc(p.desc[lang])}</p>` : "";
  return `<li><details class="dish"><summary>${name}${price}${PLUS}</summary><div class="dish__more">${desc}${variants}</div></details></li>`;
}

function panel(k, lang, i) {
  const t = T[lang];
  const groups = k.grupos.map((g) => `
          <div class="group">
            <h4 class="group__title">${esc(g.nombre[lang])}</h4>
            <ul class="dishes" role="list">${g.platos.map((p) => dish(p, lang)).join("")}</ul>${g.nota ? `
            <p class="group__note">${esc(g.nota[lang])}</p>` : ""}
          </div>`).join("");
  return `
        <section class="panel${k.grupos.length === 1 ? " panel--one" : ""}" role="tabpanel" id="carta-${k.id}" aria-labelledby="tab-${k.id}" tabindex="0"${i === 0 ? "" : " data-start-hidden"}>
          <h3 class="panel__title">${esc(k.nombre[lang])}</h3>
          <div class="panel__cols">${groups}
          </div>
        </section>`;
}

function page(lang) {
  const t = T[lang];
  const root = lang === "es" ? "" : "../";
  const fig = Math.min(...carta.cocteles.map((c) => c.precio));
  const timeOpts = [];
  for (let m = 11 * 60 + 30; m <= 22 * 60 + 30; m += 30) {
    const h = Math.floor(m / 60), mm = String(m % 60).padStart(2, "0");
    const h12 = ((h + 11) % 12) + 1;
    const label = lang === "es" ? `${h12}:${mm} ${h < 12 ? "a. m." : "p. m."}` : `${h12}:${mm} ${h < 12 ? "am" : "pm"}`;
    timeOpts.push(`<option value="${String(h).padStart(2, "0")}:${mm}"${m === 20 * 60 ? " selected" : ""}>${label}</option>`);
  }
  const people = Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}"${i === 1 ? " selected" : ""}>${i + 1}</option>`).join("") + `<option value="10+">${t.more10}</option>`;
  const fallbackDays = t.fallbackDays.map((d) => `<option>${d}</option>`).join("");

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.title)}</title>
<meta name="description" content="${esc(t.description)}">
<link rel="canonical" href="${SITE}${lang === "es" ? "" : "en/"}">
<link rel="alternate" hreflang="es" href="${SITE}">
<link rel="alternate" hreflang="en" href="${SITE}en/">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Young+Serif&family=Instrument+Sans:wght@400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${root}assets/css/site.css">
<script>document.documentElement.classList.add('js');</script>
</head>
<body>
<a class="skip" href="#main">${t.skip}</a>

<div class="banner">
  <div class="container banner__in">
    <p>${t.address}</p>
    <p role="status" data-today>${t.hoursDefault}</p>
  </div>
</div>

<nav class="bar" aria-label="${t.navLabel}" data-bar>
  <div class="container bar__in">
    <a class="wordmark" href="./" aria-label="${t.home}"><img src="${root}assets/img/logo-la-jungla.png" width="500" height="480" alt=""></a>
    <ul class="bar__links" role="list">
      ${t.nav.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("\n      ")}
    </ul>
    <a class="bar__lang" href="${t.other.href}" hreflang="${t.other.lang}" lang="${t.other.lang}">${t.other.label}</a>
  </div>
</nav>

<main id="main">
  <section class="hero" aria-labelledby="hero-h">
    <div class="container hero__grid">
      <div class="hero__text">
        <h1 id="hero-h">${t.h1}</h1>
        <p class="lead">${t.lead}</p>
        <div class="actions">
          <a class="btn btn--primary" href="${wa(t.waBook)}" target="_blank" rel="noopener">${t.book}</a>
          <a class="btn btn--secondary" href="#carta">${t.seeMenu}</a>
        </div>
      </div>
      <nav class="index" aria-label="${t.indexLabel}">
        <ul role="list">
          ${t.index.map((r) => { const [lo, hi] = spanOf(r.ids); return `<li><a href="${r.href}" data-tab="${r.ids[0]}"><span class="index__name">${r.name}</span><span class="index__dishes">${r.dishes}</span><span class="index__price">${range(lo, hi, lang)}</span></a></li>`; }).join("\n          ")}
        </ul>
      </nav>
    </div>
  </section>

  <section class="platos" aria-label="${t.platosLabel}">
    <div class="container platos__grid">
      ${t.platos.map(([f, alt, slot, w, h], i) => `<figure class="photo ${i === 0 ? "photo--lead" : "photo--side"}" data-slot="${f}" data-alt="${esc(slot)}"><img src="${root}assets/img/${f}.jpg" width="${w}" height="${h}" alt="${esc(alt)}" loading="lazy"></figure>`).join("\n      ")}
    </div>
  </section>

  <section class="carta" id="carta" aria-labelledby="carta-h">
    <div class="container">
      <div class="head">
        <h2 id="carta-h">${t.cartaH}</h2>
        <p class="lead">${t.cartaLead}</p>
      </div>
      <div class="switch" data-switch>
        <div class="tabs" role="tablist" aria-label="${t.tabsLabel}">
          ${carta.cocinas.map((k, i) => `<button type="button" class="tab" role="tab" id="tab-${k.id}" aria-controls="carta-${k.id}" aria-selected="${i === 0}"${i === 0 ? "" : ' tabindex="-1"'}>${esc(k.nombre[lang])}</button>`).join("\n          ")}
        </div>${carta.cocinas.map((k, i) => panel(k, lang, i)).join("")}
      </div>
    </div>
  </section>

  <section class="tragos" id="cocteles" aria-labelledby="tragos-h">
    <div class="container tragos__grid">
      <div class="tragos__fig well grained">
        <p class="figure">${withCurrency(fig, lang)}</p>
        <p class="figure__label">${t.figLabel}</p>
      </div>
      <div class="tragos__list">
        <h2 id="tragos-h">${t.tragosH}</h2>
        <p class="lead">${t.tragosLead}</p>
        <ul class="dishes" role="list">${carta.cocteles.map((c) => dish(c, lang)).join("")}</ul>
      </div>
    </div>
  </section>

  <section class="horario" id="horario" aria-labelledby="horario-h">
    <div class="container horario__grid">
      <div class="horario__head">
        <h2 id="horario-h">${t.horarioH}</h2>
        <p class="lead">${t.horarioLead}</p>
        <p class="links"><a href="${MAPS}" target="_blank" rel="noopener">${t.maps}</a><a href="${IG}" target="_blank" rel="noopener">${t.ig}</a></p>
      </div>
      <table class="week">
        <caption class="visually-hidden">${t.weekCaption}</caption>
        <tbody>
          ${t.days.map((d, i) => `<tr data-day="${(i + 1) % 7}"${i === 0 ? ' class="is-closed"' : ""}><th scope="row">${d}</th><td>${i === 0 ? t.closed : t.hours}</td></tr>`).join("\n          ")}
        </tbody>
      </table>
    </div>
  </section>

  <section class="reservar grained" id="reservar" aria-labelledby="reservar-h">
    <div class="container reservar__grid">
      <div class="reservar__text">
        <h2 id="reservar-h">${t.reservarH}</h2>
        <p class="lead">${t.reservarLead}</p>
        <form class="booking" action="https://wa.me/${WA}" method="get" target="_blank" data-booking>
          <input type="hidden" name="text" value="${esc(t.waBook)}">
          <div class="fields">
            <div class="field"><label for="b-personas">${t.fPersonas}</label><select id="b-personas" data-k="personas">${people}</select></div>
            <div class="field field--day"><label for="b-dia">${t.fDia}</label><select id="b-dia" data-k="dia">${fallbackDays}</select></div>
            <div class="field"><label for="b-hora">${t.fHora}</label><select id="b-hora" data-k="hora">${timeOpts.join("")}</select></div>
            <div class="field field--name"><label for="b-nombre">${t.fNombre}</label><input id="b-nombre" type="text" autocomplete="name" data-k="nombre"></div>
          </div>
          <button class="btn btn--primary" type="submit">${t.book}</button>
        </form>
        <p class="delivery">${t.deliveryQ} <a href="${wa(t.waDelivery)}" target="_blank" rel="noopener">${t.deliveryA}</a>.</p>
      </div>
      <figure class="photo photo--cierre" data-slot="cierre" data-alt="${esc(t.cierreAlt)}"><img src="${root}assets/img/barra.jpg" width="800" height="1000" alt="${esc(t.cierreImgAlt)}" style="object-position: 50% 40%" loading="lazy"></figure>
    </div>
  </section>
</main>

<div class="bookbar" data-bookbar>
  <div class="container bookbar__in">
    <p>${t.barText}</p>
    <div class="actions">
      <a class="btn btn--secondary" href="${wa(t.waDelivery)}" target="_blank" rel="noopener">${t.barDelivery}</a>
      <a class="btn btn--primary" href="#reservar">${t.barBook}</a>
    </div>
  </div>
</div>

<footer class="colophon">
  <div class="container colophon__in">
    <p class="colophon__mark"><img src="${root}assets/img/logo-la-jungla.png" width="500" height="480" alt="La Jungla Gastro Bar"></p>
    <div class="colophon__text">
      <p>${t.colophon}</p>
      <p class="colophon__credits" data-credits>${t.credits}</p>
    </div>
  </div>
</footer>

<script src="${root}assets/js/site.js" defer></script>
<script>window.hallmarkSlots = (m) => { for (const [k, v] of Object.entries(m)) { const s = document.querySelector(\`[data-slot="\${k}"]\`); if (!s) continue; const im = new Image(); im.src = typeof v === 'string' ? v : v.src; im.alt = (typeof v === 'object' && v.alt) || s.dataset.alt || ''; s.querySelectorAll(':scope > img').forEach((o) => o.remove()); s.prepend(im); } };
document.querySelectorAll('[data-slot] img').forEach((i) => { if (i.complete && !i.naturalWidth) i.remove(); else i.addEventListener('error', () => i.remove(), { once: true }); });</script>
</body>
</html>
`;
}

writeFileSync(new URL("./index.html", import.meta.url), page("es"));
mkdirSync(new URL("./en/", import.meta.url), { recursive: true });
writeFileSync(new URL("./en/index.html", import.meta.url), page("en"));
console.log("index.html y en/index.html generados.");
