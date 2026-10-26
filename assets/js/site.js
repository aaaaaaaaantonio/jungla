// La Jungla: pestañas de la carta, estado de hoy, reserva por WhatsApp y barras fijas.
(() => {
  const lang = document.documentElement.lang === "en" ? "en" : "es";
  const WA = "584165027741";
  const OPEN = 11 * 60 + 30;   // 11:30
  const CLOSE = 23 * 60 + 30;  // 23:30
  const LAST = 22 * 60 + 30;   // última hora que ofrece el formulario
  const isOpenDay = (wd) => wd !== 1; // cerrado los lunes

  const S = {
    es: {
      openNow: "Abierto ahora, hasta las 11:30 p. m.",
      opensToday: "Hoy abrimos a las 11:30 a. m.",
      closedTomorrow: "Cerrado ahora. Abrimos mañana a las 11:30 a. m.",
      closedTuesday: "Cerrado ahora. Abrimos el martes a las 11:30 a. m.",
      today: "Hoy", tomorrow: "Mañana",
      locale: "es-VE",
      message: (p, d, h, n) => `Hola, quiero reservar una mesa en La Jungla para ${p} el ${d} a las ${h.replace(/\.$/, "")}.${n ? ` Mi nombre es ${n}.` : ""}`,
      people: (v) => (v === "10+" ? "más de 10 personas" : v === "1" ? "1 persona" : `${v} personas`),
      dayText: (date) => {
        const wd = date.toLocaleDateString("es-VE", { weekday: "long" });
        const mo = date.toLocaleDateString("es-VE", { month: "long" });
        return `${wd} ${date.getDate()} de ${mo}`;
      },
    },
    en: {
      openNow: "Open now, until 11:30 pm",
      opensToday: "Opening today at 11:30 am",
      closedTomorrow: "Closed now. We open tomorrow at 11:30 am",
      closedTuesday: "Closed now. We open on Tuesday at 11:30 am",
      today: "Today", tomorrow: "Tomorrow",
      locale: "en-GB",
      message: (p, d, h, n) => `Hi, I’d like to book a table at La Jungla for ${p} on ${d} at ${h}.${n ? ` My name is ${n}.` : ""}`,
      people: (v) => (v === "10+" ? "more than 10 people" : v === "1" ? "1 person" : `${v} people`),
      dayText: (date) => date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }),
    },
  }[lang];

  // La hora de Puerto Ayacucho, sin importar dónde esté el visitante.
  function nowCaracas() {
    const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Caracas", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", hourCycle: "h23",
    }).formatToParts(new Date()).map((p) => [p.type, p.value]));
    return new Date(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute);
  }
  const now = nowCaracas();
  const minutes = now.getHours() * 60 + now.getMinutes();

  // ---------- estado de hoy y horario ----------
  const status = document.querySelector("[data-today]");
  if (status) {
    const wd = now.getDay();
    if (isOpenDay(wd) && minutes >= OPEN && minutes < CLOSE) status.textContent = S.openNow;
    else if (isOpenDay(wd) && minutes < OPEN) status.textContent = S.opensToday;
    else status.textContent = isOpenDay((wd + 1) % 7) ? S.closedTomorrow : S.closedTuesday;
  }
  const todayRow = document.querySelector(`.week tr[data-day="${now.getDay()}"]`);
  if (todayRow) {
    todayRow.classList.add("is-today");
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = S.today;
    todayRow.querySelector("th").append(chip);
  }

  // ---------- animaciones: todo se dibuja como la línea del logo ----------
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const show = (el) => el.classList.add("is-in");
  function replay(el) {
    if (still) return show(el);
    el.classList.remove("is-in");
    void el.offsetWidth; // reinicia la transición
    show(el);
  }
  document.querySelectorAll('[data-anim="lines"]').forEach((list) => {
    [...list.querySelectorAll(":scope > li, tr")].forEach((row, i) => row.style.setProperty("--i", i));
  });
  document.querySelectorAll(".rail .photo").forEach((ph, i) => ph.style.setProperty("--i", i));
  document.querySelectorAll(".platos .photo").forEach((ph, i) => ph.style.setProperty("--i", i));
  const animated = document.querySelectorAll("[data-anim]");
  if (still || !("IntersectionObserver" in window)) animated.forEach(show);
  else {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const img = e.target.dataset.anim === "photo" && e.target.querySelector("img");
      if (img && !img.complete) {
        img.addEventListener("load", () => show(e.target), { once: true });
        img.addEventListener("error", () => show(e.target), { once: true });
      } else show(e.target);
    }), { rootMargin: "0px 0px -8% 0px", threshold: 0.01 });
    animated.forEach((el) => io.observe(el));
  }

  // El logo de la barra aparece cuando el logo grande del inicio sale de la pantalla.
  const heroLogo = document.querySelector("[data-hero-logo]");
  const navBar = document.querySelector("[data-bar]");
  if (heroLogo && navBar && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => navBar.classList.toggle("show-logo", !e.isIntersecting)).observe(heroLogo);
  } else if (navBar) navBar.classList.add("show-logo");

  // ---------- pestañas de la carta ----------
  const sw = document.querySelector("[data-switch]");
  const tabs = sw ? [...sw.querySelectorAll('[role="tab"]')] : [];
  const panels = tabs.map((t) => document.getElementById(t.getAttribute("aria-controls")));
  function select(i, focus, redraw = true) {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      panels[j].hidden = !on;
      if (on && redraw) panels[j].querySelectorAll('[data-anim="lines"]').forEach(replay);
    });
    if (focus) tabs[i].focus();
  }
  if (tabs.length) {
    select(0, false, false);
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(i));
      t.addEventListener("keydown", (e) => {
        const k = { ArrowRight: 1, ArrowLeft: -1, Home: "first", End: "last" }[e.key];
        if (k === undefined) return;
        e.preventDefault();
        const n = k === "first" ? 0 : k === "last" ? tabs.length - 1 : (i + k + tabs.length) % tabs.length;
        select(n, true);
      });
    });
    const openFromHash = (hash) => {
      const i = panels.findIndex((p) => "#" + p.id === hash);
      if (i < 0) return false;
      select(i);
      document.getElementById("carta").scrollIntoView();
      return true;
    };
    document.querySelectorAll('a[href^="#carta-"]').forEach((a) => a.addEventListener("click", (e) => {
      if (openFromHash(a.getAttribute("href"))) { e.preventDefault(); history.replaceState(null, "", a.getAttribute("href")); }
    }));
    if (location.hash) openFromHash(location.hash);
  }

  // ---------- reserva por WhatsApp ----------
  const form = document.querySelector("[data-booking]");
  if (form) {
    const daySel = form.querySelector('[data-k="dia"]');
    const timeSel = form.querySelector('[data-k="hora"]');
    daySel.textContent = "";
    for (let add = 0, count = 0; count < 14 && add < 21; add++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + add);
      if (!isOpenDay(d.getDay())) continue;
      if (add === 0 && minutes >= LAST) continue;
      const text = S.dayText(d);
      const prefix = add === 0 ? S.today + ", " : add === 1 ? S.tomorrow + ", " : "";
      const label = prefix ? prefix + text : text.charAt(0).toUpperCase() + text.slice(1);
      const o = new Option(label, text);
      o.dataset.today = String(add === 0);
      daySel.add(o);
      count++;
    }
    const syncTimes = () => {
      const isToday = daySel.selectedOptions[0]?.dataset.today === "true";
      [...timeSel.options].forEach((o) => {
        const [h, m] = o.value.split(":").map(Number);
        o.disabled = isToday && h * 60 + m < minutes + 30;
      });
      if (timeSel.selectedOptions[0]?.disabled) {
        const first = [...timeSel.options].find((o) => !o.disabled);
        if (first) timeSel.value = first.value;
      }
    };
    daySel.addEventListener("change", syncTimes);
    syncTimes();
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const p = S.people(form.querySelector('[data-k="personas"]').value);
      const d = daySel.value;
      const h = timeSel.selectedOptions[0].textContent;
      const n = form.querySelector('[data-k="nombre"]').value.trim();
      const url = `https://wa.me/${WA}?text=${encodeURIComponent(S.message(p, d, h, n))}`;
      const w = window.open(url, "_blank");
      if (w) w.opener = null; else location.href = url;
    });
  }

  // ---------- la barra se esconde al bajar y vuelve al subir ----------
  const bar = document.querySelector("[data-bar]");
  if (bar) {
    let last = scrollY, ticking = false;
    addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = scrollY;
        if (y > last && y > 240) bar.classList.add("is-up");
        else if (y < last) bar.classList.remove("is-up");
        last = y;
        ticking = false;
      });
    }, { passive: true });
    bar.addEventListener("focusin", () => bar.classList.remove("is-up"));
  }

  // ---------- barra de reserva: aparece después del inicio, se va en la reserva ----------
  const bookbar = document.querySelector("[data-bookbar]");
  const hero = document.querySelector(".hero");
  const close = document.getElementById("reservar");
  if (bookbar && hero && close && "IntersectionObserver" in window) {
    const seen = new Map();
    const sync = () => bookbar.classList.toggle("is-on", seen.get(hero) === false && seen.get(close) === false);
    const io = new IntersectionObserver((es) => { es.forEach((e) => seen.set(e.target, e.isIntersecting)); sync(); });
    io.observe(hero);
    io.observe(close);
  }
})();
