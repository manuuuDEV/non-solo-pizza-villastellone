(() => {
  "use strict";

  const WHATSAPP_NUMBER = "393388899972";
  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE_POINTER = window.matchMedia("(pointer: fine) and (min-width: 1025px)").matches;

  const CATEGORY_LABELS = {
    golose: "Pizze Golose",
    classiche: "Pizze Classiche",
    speciali: "Speciali & Calzoni",
    farinate: "Farinate & Focacce",
    panuozzi: "Panuozzi, Teglie & Dolci"
  };

  const MENU_ITEMS = [
    // PIZZE GOLOSE
    { id: "non-solo-pizza", name: "Non Solo Pizz@", price: 9.0, cat: "golose", desc: "Mozzarella di bufala, bresaola, rucola, scaglie di parmigiano.", tags: ["signature", "bufala"] },
    { id: "preziosa", name: "Preziosa", price: 9.0, cat: "golose", desc: "Pomodoro fresco, mozzarella di bufala, scaglie di grana, crudo, rucola.", tags: ["bufala"] },
    { id: "estiva", name: "Estiva", price: 8.0, cat: "golose", desc: "Pomodoro fresco, mozzarella di bufala, scaglie di grana, rucola.", tags: ["veg", "bufala"] },
    { id: "regina", name: "Regina", price: 8.0, cat: "golose", desc: "Pomodoro, mozzarella, gorgonzola, prosciutto crudo.", tags: [] },
    { id: "golosa", name: "Golosa", price: 8.0, cat: "golose", desc: "Pomodoro, mozzarella, gorgonzola, prosciutto crudo, uovo.", tags: [] },
    { id: "ricca", name: "Ricca", price: 8.0, cat: "golose", desc: "Mozzarella di bufala, pomodorini, misto salumi.", tags: ["bufala"] },
    { id: "gustosa", name: "Gustosa", price: 8.0, cat: "golose", desc: "Pomodoro, mozzarella, gorgonzola, cotto, uovo.", tags: [] },
    { id: "super-diavola", name: "Super Diavola", price: 7.5, cat: "golose", desc: "Pomodoro, mozzarella, salame piccante, gorgonzola, cipolla.", tags: ["spicy"] },
    { id: "cleopatra", name: "Cleopatra", price: 7.5, cat: "golose", desc: "Pomodoro, mozzarella, pomodorini, scaglie di grana, speck, rucola.", tags: [] },
    { id: "carbonara", name: "Carbonara", price: 7.0, cat: "golose", desc: "Pomodoro, mozzarella, pancetta, uovo, grana.", tags: [] },
    { id: "allegria", name: "Allegria", price: 7.0, cat: "golose", desc: "Pomodoro, mozzarella, pomodoro fresco, cotto, würstel.", tags: [] },
    { id: "piccante", name: "Piccante", price: 6.5, cat: "golose", desc: "Pomodoro, mozzarella, salame piccante, cipolla, olive nere.", tags: ["spicy"] },
    { id: "romana", name: "Romana", price: 6.5, cat: "golose", desc: "Pomodoro, mozzarella, olive, capperi, acciughe, origano.", tags: [] },

    // PIZZE CLASSICHE
    { id: "marinara", name: "Marinara", price: 3.5, cat: "classiche", desc: "Pomodoro, aglio, origano.", tags: ["veg", "no-dairy"] },
    { id: "margherita", name: "Margherita", price: 4.0, cat: "classiche", desc: "Pomodoro, mozzarella, basilico.", tags: ["veg"] },
    { id: "margherita-rucola", name: "Margherita e Rucola", price: 4.5, cat: "classiche", desc: "Pomodoro, mozzarella, basilico, rucola.", tags: ["veg"] },
    { id: "margherita-grana", name: "Margherita e Scaglie di Grana", price: 5.0, cat: "classiche", desc: "Pomodoro, mozzarella, basilico, scaglie di grana.", tags: ["veg"] },
    { id: "greca", name: "Greca", price: 5.0, cat: "classiche", desc: "Pomodoro, mozzarella, olive.", tags: ["veg"] },
    { id: "napoli", name: "Napoli", price: 5.0, cat: "classiche", desc: "Pomodoro, mozzarella, acciughe.", tags: [] },
    { id: "napoli-capperi", name: "Napoli e Capperi", price: 5.5, cat: "classiche", desc: "Pomodoro, mozzarella, acciughe, capperi.", tags: [] },
    { id: "prosciutto", name: "Prosciutto", price: 5.0, cat: "classiche", desc: "Pomodoro, mozzarella, prosciutto cotto.", tags: [] },
    { id: "funghi", name: "Funghi", price: 5.0, cat: "classiche", desc: "Pomodoro, mozzarella, funghi.", tags: ["veg"] },
    { id: "diavola", name: "Diavola", price: 5.0, cat: "classiche", desc: "Pomodoro, mozzarella, salamino piccante.", tags: ["spicy"] },
    { id: "prosciutto-funghi", name: "Prosciutto e Funghi", price: 6.0, cat: "classiche", desc: "Pomodoro, mozzarella, prosciutto, funghi.", tags: [] },
    { id: "bismark", name: "Bismark", price: 6.0, cat: "classiche", desc: "Pomodoro, mozzarella, prosciutto e uovo.", tags: [] },
    { id: "4-stagioni", name: "4 Stagioni", price: 6.0, cat: "classiche", desc: "Pomodoro, mozzarella, prosciutto, funghi, olive e carciofini.", tags: [] },
    { id: "4-formaggi", name: "4 Formaggi", price: 6.0, cat: "classiche", desc: "Pomodoro, mozzarella, fontina, gorgonzola.", tags: ["veg"] },
    { id: "bianca", name: "Bianca", price: 5.5, cat: "classiche", desc: "Mozzarella, stracchino e rucola.", tags: ["veg"] },
    { id: "bacio", name: "Bacio", price: 6.5, cat: "classiche", desc: "Pomodoro, mozzarella, gorgonzola e cipolle di Tropea.", tags: ["veg"] },
    { id: "bufala", name: "Bufala", price: 6.5, cat: "classiche", desc: "Pomodoro, mozzarella di bufala campana.", tags: ["veg", "bufala"] },
    { id: "primavera", name: "Primavera", price: 6.5, cat: "classiche", desc: "Pomodoro fresco, mozzarella, rucola e scaglie di parmigiano.", tags: ["veg"] },
    { id: "crudo", name: "Crudo", price: 6.0, cat: "classiche", desc: "Pomodoro, mozzarella, prosciutto crudo.", tags: [] },
    { id: "verdure", name: "Verdure", price: 6.0, cat: "classiche", desc: "Pomodoro, mozzarella, zucchine, melanzane e peperoni grigliati.", tags: ["veg"] },
    { id: "parmigiana", name: "Parmigiana", price: 6.0, cat: "classiche", desc: "Pomodoro, mozzarella, melanzane e scaglie di parmigiano.", tags: ["veg"] },
    { id: "capricciosa", name: "Capricciosa", price: 6.5, cat: "classiche", desc: "Pomodoro, mozzarella, prosciutto, funghi, carciofini, olive, peperoni.", tags: [] },
    { id: "tedesca", name: "Tedesca", price: 5.0, cat: "classiche", desc: "Pomodoro, mozzarella, würstel.", tags: [] },
    { id: "tonno", name: "Tonno", price: 5.0, cat: "classiche", desc: "Pomodoro, mozzarella, tonno.", tags: [] },
    { id: "tonno-cipolla", name: "Tonno e Cipolla", price: 5.5, cat: "classiche", desc: "Pomodoro, mozzarella, tonno e cipolla.", tags: [] },
    { id: "salsiccia-wurstel", name: "Salsiccia e Würstel", price: 6.5, cat: "classiche", desc: "Pomodoro, mozzarella, salsiccia e würstel.", tags: [] },
    { id: "speck-brie", name: "Speck e Brie", price: 6.0, cat: "classiche", desc: "Pomodoro, mozzarella, speck e brie.", tags: [] },
    { id: "speck-gorgo", name: "Speck e Gorgo", price: 7.0, cat: "classiche", desc: "Pomodoro, mozzarella, speck e gorgonzola.", tags: [] },
    { id: "gorgonzola", name: "Gorgonzola", price: 6.0, cat: "classiche", desc: "Pomodoro, mozzarella e gorgonzola.", tags: ["veg"] },
    { id: "valdostana", name: "Valdostana", price: 6.0, cat: "classiche", desc: "Pomodoro, mozzarella, fontina, prosciutto.", tags: [] },
    { id: "salsiccia-peperoni", name: "Salsiccia e Peperoni", price: 6.5, cat: "classiche", desc: "Pomodoro, mozzarella, salsiccia e peperoni.", tags: [] },
    { id: "salsiccia-friarielli", name: "Salsiccia e Friarielli", price: 7.5, cat: "classiche", desc: "Pomodoro, mozzarella, salsiccia e friarielli.", tags: [] },
    { id: "salsiccia-gorgonzola", name: "Salsiccia e Gorgonzola", price: 7.5, cat: "classiche", desc: "Pomodoro, mozzarella, salsiccia, gorgonzola.", tags: [] },

    // PIZZE SPECIALI & CALZONI
    { id: "cinzia", name: "Cinzia", price: 6.5, cat: "speciali", desc: "Pomodoro, mozzarella, peperoni e acciughe.", tags: ["signature"] },
    { id: "disco-volante", name: "Disco Volante (Doppia Pizza)", price: 10.0, cat: "speciali", desc: "Pomodoro, mozzarella, prosciutto, carciofini, olive e salame piccante.", tags: ["signature", "spicy"] },
    { id: "calzone-super-giorgia", name: "Calzone Super Giorgia", price: 8.0, cat: "speciali", desc: "Uovo, parmigiano, mozzarella — dopo cottura salamino piccante, prosciutto e pomodoro.", tags: ["signature", "spicy"] },
    { id: "affumicata", name: "Affumicata", price: 8.0, cat: "speciali", desc: "Pomodoro fresco, mozzarella, asparagi, scamorza affumicata, salsiccia.", tags: [] },
    { id: "pepita", name: "Pepita", price: 8.0, cat: "speciali", desc: "Pomodoro, mozzarella, gorgonzola, pere e noci.", tags: ["veg"] },
    { id: "diego", name: "Diego", price: 8.0, cat: "speciali", desc: "Fantasia del pizzaiolo con gli ingredienti freschi del giorno.", tags: ["signature"] },
    { id: "atomica", name: "Atomica", price: 7.5, cat: "speciali", desc: "Pomodoro, mozzarella, prosciutto, funghi, carciofini, olive, salame piccante e peperoni.", tags: ["spicy"] },
    { id: "fantasia", name: "Fantasia", price: 7.5, cat: "speciali", desc: "Pomodoro, peperoni, mozzarella, salsiccia, panna.", tags: [] },
    { id: "riccardo", name: "Riccardo", price: 7.5, cat: "speciali", desc: "Pomodoro fresco, mozzarella, salsiccia, rucola e scaglie di grana.", tags: [] },
    { id: "gorgonzola-pere", name: "Gorgonzola e Pere", price: 7.0, cat: "speciali", desc: "Pomodoro, mozzarella, gorgonzola e pere.", tags: ["veg"] },
    { id: "nduja", name: "'Nduja", price: 7.0, cat: "speciali", desc: "Pomodoro, mozzarella e 'nduja calabra.", tags: ["spicy"] },
    { id: "asparagi", name: "Asparagi", price: 7.0, cat: "speciali", desc: "Pomodoro, mozzarella, asparagi e scaglie di parmigiano.", tags: ["veg"] },
    { id: "federico", name: "Federico", price: 7.0, cat: "speciali", desc: "Pomodoro, mozzarella, fontina, gorgonzola e speck.", tags: [] },
    { id: "tricolore", name: "Tricolore", price: 6.5, cat: "speciali", desc: "Mozzarella, fontina, gorgonzola, pomodoro fresco e rucola.", tags: ["veg"] },
    { id: "calzone-prosciutto", name: "Calzone Prosciutto", price: 6.5, cat: "speciali", desc: "Pomodoro, prosciutto e mozzarella.", tags: [] },
    { id: "calzone-prosciutto-funghi", name: "Calzone Prosciutto e Funghi", price: 7.0, cat: "speciali", desc: "Pomodoro, prosciutto, funghi e mozzarella.", tags: [] },

    // FARINATE & FOCACCE
    { id: "farinata-normale", name: "Farinata Normale", price: 3.0, cat: "farinate", desc: "Farinata di ceci tradizionale, sottile, dorata e croccante.", tags: ["signature", "veg", "no-dairy"] },
    { id: "farinata-farcita", name: "Farinata Farcita", price: 5.0, cat: "farinate", desc: "Farinata di ceci calda con farcitura a scelta.", tags: ["veg"] },
    { id: "focaccia-origano", name: "Focaccia all'Origano", price: 3.5, cat: "farinate", desc: "Impasto leggero con olio extravergine d'oliva e origano.", tags: ["veg", "no-dairy"] },
    { id: "focaccia-rosmarino", name: "Focaccia al Rosmarino", price: 3.5, cat: "farinate", desc: "Focaccia calda profumata al rosmarino fresco e olio EVO.", tags: ["veg", "no-dairy"] },
    { id: "focaccia-speck", name: "Focaccia allo Speck", price: 5.0, cat: "farinate", desc: "Focaccia fragrante servita con speck.", tags: ["no-dairy"] },
    { id: "focaccia-lardo", name: "Focaccia al Lardo", price: 6.0, cat: "farinate", desc: "Focaccia calda con lardo saporito a fette sottili.", tags: ["no-dairy"] },
    { id: "focaccia-crudo", name: "Focaccia al Crudo", price: 6.0, cat: "farinate", desc: "Focaccia dorata con prosciutto crudo.", tags: ["no-dairy"] },

    // PANUOZZI, TEGLIE & DOLCI
    { id: "panuozzo", name: "Panuozzo Napoletano", price: 5.0, cat: "panuozzi", desc: "Pane da pizza cotto al forno e farcito al momento.", tags: ["signature"] },
    { id: "gigante-margherita", name: "Pizza Gigante Margherita", price: 8.0, cat: "panuozzi", desc: "Formato gigante con pomodoro, mozzarella e basilico.", tags: ["veg"] },
    { id: "gigante-farcita", name: "Pizza Gigante Farcita", price: 12.0, cat: "panuozzi", desc: "Formato gigante con farcitura a scelta, ideale da condividere.", tags: [] },
    { id: "teglia-margherita", name: "Teglia di Margherita", price: 12.0, cat: "panuozzi", desc: "Teglia intera con pomodoro e mozzarella per feste e famiglie.", tags: ["veg"] },
    { id: "teglia-mista", name: "Teglia Mista", price: 15.0, cat: "panuozzi", desc: "Teglia assortita con più gusti per serate tra amici e ricorrenze.", tags: ["signature"] },
    { id: "pizza-nutella", name: "Pizza alla Nutella", price: 5.0, cat: "panuozzi", desc: "Base calda e soffice ricoperta di cremosa Nutella.", tags: ["veg"] }
  ];

  const BADGE_META = {
    signature: { label: "Della Casa", cls: "badge--signature" },
    veg: { label: "Vegetariana", cls: "badge--veg" },
    spicy: { label: "Piccante", cls: "badge--spicy" },
    "no-dairy": { label: "Senza Latticini", cls: "badge--nodairy" },
    bufala: { label: "Bufala", cls: "badge--bufala" }
  };

  const state = {
    category: "golose",
    search: "",
    filters: new Set(),
    cart: new Map()
  };

  const els = {
    brandIntro: document.getElementById("brand-intro"),
    menuGrid: document.getElementById("menu-grid"),
    menuEmpty: document.getElementById("menu-empty"),
    menuCountLabel: document.getElementById("menu-count-label"),
    resetFiltersBtn: document.getElementById("reset-filters-btn"),
    emptyResetBtn: document.getElementById("empty-reset-btn"),
    searchInput: document.getElementById("menu-search"),
    tabs: Array.from(document.querySelectorAll(".tab-btn")),
    chips: Array.from(document.querySelectorAll(".chip-btn")),
    headerCartCount: document.getElementById("header-cart-count"),
    cartDock: document.getElementById("cart-dock"),
    dockCount: document.getElementById("dock-count"),
    dockTotal: document.getElementById("dock-total"),
    orderModal: document.getElementById("order-modal"),
    cartItemsList: document.getElementById("cart-items-list"),
    cartEmptyState: document.getElementById("cart-empty-state"),
    orderForm: document.getElementById("order-form"),
    orderMode: document.getElementById("order-mode"),
    addressRow: document.getElementById("address-row"),
    modalTotal: document.getElementById("modal-total"),
    qrModal: document.getElementById("qr-modal"),
    qrImage: document.getElementById("qr-image"),
    mobileToggle: document.getElementById("mobile-menu-toggle"),
    mobilePanel: document.getElementById("mobile-nav-panel"),
    liveDot: document.getElementById("live-status-dot"),
    liveText: document.getElementById("live-status-text")
  };

  function formatEuro(val) {
    return "€ " + val.toFixed(2).replace(".", ",");
  }

  // 1. OPENING BRAND INTRO REVEAL (Original Company Logo)
  function initBrandIntro() {
    if (!els.brandIntro) return;
    const hideIntro = () => {
      els.brandIntro.classList.add("is-done");
      setTimeout(() => {
        if (els.brandIntro) els.brandIntro.style.display = "none";
      }, 700);
    };
    if (REDUCED_MOTION) {
      hideIntro();
      return;
    }
    setTimeout(hideIntro, 950);
  }

  // 2. LIVE OPEN/CLOSED HOURS
  function updateLiveHours() {
    try {
      const now = new Date();
      const parts = new Intl.DateTimeFormat("it-IT", {
        timeZone: "Europe/Rome",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).formatToParts(now);

      const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
      const h = parseInt(map.hour, 10);
      const m = parseInt(map.minute, 10);
      const mins = h * 60 + m;

      const dayNames = { dom: 0, lun: 1, mar: 2, mer: 3, gio: 4, ven: 5, sab: 6 };
      const wkKey = (map.weekday || "").toLowerCase().slice(0, 3);
      const dayIdx = wkKey in dayNames ? dayNames[wkKey] : now.getDay();

      document.querySelectorAll(".hours-row").forEach((row) => {
        if (parseInt(row.dataset.day, 10) === dayIdx) {
          row.classList.add("is-today");
        }
      });

      const isTuesday = dayIdx === 2;
      const inLunch = mins >= 10 * 60 && mins < 13 * 60 + 30;
      const inDinner = mins >= 16 * 60 && mins < 23 * 60 + 30;

      if (!isTuesday && (inLunch || inDinner)) {
        els.liveDot.classList.add("is-open");
        els.liveText.textContent = inLunch
          ? "Aperto ora · Pranzo fino alle 13:30"
          : "Aperto ora · Cena fino alle 23:30";
      } else if (isTuesday) {
        els.liveDot.classList.add("is-closed");
        els.liveText.textContent = "Oggi chiuso (martedì riposo) · Riapre domani alle 10:00";
      } else if (mins < 10 * 60) {
        els.liveDot.classList.add("is-closed");
        els.liveText.textContent = "Apre oggi alle 10:00";
      } else if (mins < 16 * 60) {
        els.liveDot.classList.add("is-closed");
        els.liveText.textContent = "Pausa pomeridiana · Riapre alle 16:00";
      } else {
        els.liveDot.classList.add("is-closed");
        els.liveText.textContent = "Chiuso ora · Domani aperto dalle 10:00";
      }
    } catch (_) {
      els.liveText.textContent = "Aperto 6 giorni su 7 · Chiuso il martedì";
    }
  }

  // 3. INTERACTIVE MENU & CART
  function getFilteredItems() {
    const q = state.search.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      if (state.category !== "all" && item.cat !== state.category) return false;
      for (const f of state.filters) {
        if (!item.tags.includes(f)) return false;
      }
      if (q) {
        const hay = `${item.name} ${item.desc} ${CATEGORY_LABELS[item.cat]}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function renderMenu() {
    const items = getFilteredItems();
    const hasFilters = state.category !== "all" || state.search.trim() !== "" || state.filters.size > 0;
    els.resetFiltersBtn.hidden = !hasFilters;

    if (items.length === 0) {
      els.menuGrid.innerHTML = "";
      els.menuEmpty.hidden = false;
      els.menuCountLabel.textContent = "0 proposte trovate";
      return;
    }

    els.menuEmpty.hidden = true;
    els.menuCountLabel.textContent =
      items.length === MENU_ITEMS.length
        ? `Tutte le ${items.length} proposte del menù`
        : `${items.length} proposte mostrate su ${MENU_ITEMS.length}`;

    const frag = document.createDocumentFragment();
    items.forEach((item) => {
      const qty = state.cart.get(item.id) || 0;
      const card = document.createElement("article");
      card.className = "menu-card tilt-3d";
      card.dataset.tiltMax = "4";

      const badgesHtml = item.tags
        .map((t) => {
          const meta = BADGE_META[t];
          return meta ? `<span class="badge ${meta.cls}">${meta.label}</span>` : "";
        })
        .join("");

      const actionHtml =
        qty > 0
          ? `<div class="qty-control">
               <button type="button" class="qty-btn" data-dec="${item.id}" aria-label="Rimuovi una ${item.name}">−</button>
               <span class="qty-value">${qty}</span>
               <button type="button" class="qty-btn" data-inc="${item.id}" aria-label="Aggiungi una ${item.name}">+</button>
             </div>`
          : `<button type="button" class="add-btn" data-inc="${item.id}">+ Aggiungi</button>`;

      card.innerHTML = `
        <div>
          <div class="menu-card__top">
            <h3 class="menu-card__title">${item.name}</h3>
            <span class="menu-card__price">${formatEuro(item.price)}</span>
          </div>
          <p class="menu-card__desc">${item.desc}</p>
          ${badgesHtml ? `<div class="menu-card__badges">${badgesHtml}</div>` : ""}
        </div>
        <div class="menu-card__footer">
          <span class="menu-card__cat">${CATEGORY_LABELS[item.cat]}</span>
          ${actionHtml}
        </div>
        <span class="tilt-glare" aria-hidden="true"></span>
      `;
      frag.appendChild(card);
    });

    els.menuGrid.innerHTML = "";
    els.menuGrid.appendChild(frag);
    bind3DTiltCards(els.menuGrid.querySelectorAll(".tilt-3d"));
  }

  function computeCartTotals() {
    let count = 0;
    let total = 0;
    const lines = [];
    for (const [id, qty] of state.cart.entries()) {
      const item = MENU_ITEMS.find((m) => m.id === id);
      if (item && qty > 0) {
        count += qty;
        total += item.price * qty;
        lines.push({ item, qty });
      }
    }
    return { count, total, lines };
  }

  function syncCartUI() {
    const { count, total, lines } = computeCartTotals();
    els.headerCartCount.textContent = String(count);

    if (count > 0) {
      els.cartDock.hidden = false;
      document.body.classList.add("has-cart-dock");
      els.dockCount.textContent = count === 1 ? "1 articolo selezionato" : `${count} articoli selezionati`;
      els.dockTotal.textContent = `Totale indicativo: ${formatEuro(total)}`;
    } else {
      els.cartDock.hidden = true;
      document.body.classList.remove("has-cart-dock");
    }

    els.modalTotal.textContent = formatEuro(total);

    if (lines.length === 0) {
      els.cartItemsList.innerHTML = "";
      els.cartEmptyState.hidden = false;
      els.orderForm.hidden = true;
    } else {
      els.cartEmptyState.hidden = true;
      els.orderForm.hidden = false;
      els.cartItemsList.innerHTML = lines
        .map(
          ({ item, qty }) => `
            <div class="cart-line">
              <div class="cart-line__info">
                <span class="cart-line__name">${item.name}</span>
                <span class="cart-line__sub">${qty} × ${formatEuro(item.price)} = ${formatEuro(item.price * qty)}</span>
              </div>
              <div class="qty-control">
                <button type="button" class="qty-btn" data-dec="${item.id}" aria-label="Rimuovi ${item.name}">−</button>
                <span class="qty-value">${qty}</span>
                <button type="button" class="qty-btn" data-inc="${item.id}" aria-label="Aggiungi ${item.name}">+</button>
              </div>
            </div>
          `
        )
        .join("");
    }
  }

  function changeQty(id, delta) {
    const next = (state.cart.get(id) || 0) + delta;
    if (next <= 0) state.cart.delete(id);
    else state.cart.set(id, next);
    renderMenu();
    syncCartUI();
  }

  function openModal(modal) {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function resetFilters() {
    state.category = "all";
    state.search = "";
    state.filters.clear();
    els.searchInput.value = "";
    els.tabs.forEach((b) => {
      const active = b.dataset.cat === "all";
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", String(active));
    });
    els.chips.forEach((c) => c.classList.remove("is-active"));
    renderMenu();
  }

  // 4. INTERACTIVE 3D TILT + SPECULAR GLARE
  function bind3DTiltCards(nodeList) {
    if (REDUCED_MOTION || !FINE_POINTER) return;
    nodeList.forEach((card) => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = "1";
      const maxDeg = parseFloat(card.dataset.tiltMax || "6");

      card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotY = (px - 0.5) * maxDeg * 2;
        const rotX = (0.5 - py) * maxDeg * 2;
        card.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
        card.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
        card.classList.add("is-tilting");
        card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(6px)`;
      });

      card.addEventListener("pointerleave", () => {
        card.classList.remove("is-tilting");
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      });
    });
  }

  // 5. CUSTOM SPRING CURSOR, MAGNETIC BUTTONS & SPOTLIGHT
  let pointerNormX = 0;
  let pointerNormY = 0;

  function initCursorSystem() {
    if (REDUCED_MOTION || !FINE_POINTER) return;
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    let targetX = -100, targetY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener("pointermove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      pointerNormX = (e.clientX / window.innerWidth) * 2 - 1;
      pointerNormY = -(e.clientY / window.innerHeight) * 2 + 1;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    }, { passive: true });

    window.addEventListener("pointerdown", () => ring.classList.add("is-pressed"));
    window.addEventListener("pointerup", () => ring.classList.remove("is-pressed"));

    document.addEventListener("pointerover", (e) => {
      if (e.target.closest("a, button, input, select, .menu-card, .feature-card, .media-frame")) {
        ring.classList.add("is-hovering");
      }
    });
    document.addEventListener("pointerout", (e) => {
      if (e.target.closest("a, button, input, select, .menu-card, .feature-card, .media-frame")) {
        ring.classList.remove("is-hovering");
      }
    });

    function animateRing() {
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px, 0)`;
      requestAnimationFrame(animateRing);
    }
    requestAnimationFrame(animateRing);

    // Magnetic buttons (subtle <= 7px pull so elements never collide)
    document.querySelectorAll(".magnetic").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const dx = ((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * 6;
        const dy = ((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * 5;
        btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.transform = "translate3d(0, 0, 0)";
      });
    });

    // Cursor-reactive ambient spotlights on dark photo stages
    [
      { host: document.getElementById("hero-stage"), light: document.getElementById("hero-spotlight") },
      { host: document.getElementById("piazza"), light: document.getElementById("piazza-spotlight") }
    ].forEach(({ host, light }) => {
      if (!host || !light) return;
      host.addEventListener("pointermove", (e) => {
        const r = host.getBoundingClientRect();
        light.style.setProperty("--mx", `${(e.clientX - r.left).toFixed(0)}px`);
        light.style.setProperty("--my", `${(e.clientY - r.top).toFixed(0)}px`);
        light.classList.add("is-active");
      }, { passive: true });
      host.addEventListener("pointerleave", () => light.classList.remove("is-active"));
    });
  }

  // 6. THREE.JS 3D WEBGL FLOATING GOLDEN EMBER DEPTH FIELD
  function initHero3DEmbers() {
    if (REDUCED_MOTION || typeof window.THREE === "undefined") return;
    const canvas = document.getElementById("hero-3d-canvas");
    const host = document.getElementById("hero-stage");
    if (!canvas || !host) return;

    try {
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
      camera.position.z = 16;

      // Create soft circular radial particle texture
      const texCanvas = document.createElement("canvas");
      texCanvas.width = 64;
      texCanvas.height = 64;
      const ctx = texCanvas.getContext("2d");
      const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
      grad.addColorStop(0, "rgba(255, 232, 165, 1)");
      grad.addColorStop(0.35, "rgba(244, 170, 62, 0.72)");
      grad.addColorStop(0.75, "rgba(194, 60, 34, 0.22)");
      grad.addColorStop(1, "rgba(194, 60, 34, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const spriteTex = new THREE.CanvasTexture(texCanvas);

      const count = 90;
      const positions = new Float32Array(count * 3);
      const speeds = new Float32Array(count);
      const phases = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 32;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
        speeds[i] = 0.008 + Math.random() * 0.018;
        phases[i] = Math.random() * Math.PI * 2;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size: 0.42,
        map: spriteTex,
        transparent: true,
        opacity: 0.78,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      const embers = new THREE.Points(geometry, material);
      scene.add(embers);

      function resize() {
        const w = host.clientWidth || window.innerWidth;
        const h = host.clientHeight || 720;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
      resize();
      window.addEventListener("resize", resize);

      let t = 0;
      function loop() {
        t += 0.012;
        const pos = geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
          pos[i * 3 + 1] += speeds[i];
          pos[i * 3] += Math.sin(t + phases[i]) * 0.006;
          if (pos[i * 3 + 1] > 9.5) {
            pos[i * 3 + 1] = -9.5;
            pos[i * 3] = (Math.random() - 0.5) * 32;
          }
        }
        geometry.attributes.position.needsUpdate = true;

        // Smooth 3D camera parallax following cursor movement
        camera.position.x += (pointerNormX * 1.35 - camera.position.x) * 0.04;
        camera.position.y += (pointerNormY * 0.85 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        embers.rotation.y = t * 0.04;
        renderer.render(scene, camera);
        requestAnimationFrame(loop);
      }
      requestAnimationFrame(loop);
    } catch (_) {
      // Graceful fallback if WebGL unavailable
    }
  }

  // 7. GSAP + SCROLLTRIGGER + LENIS SMOOTH MOTION
  function initCinematicMotion() {
    if (REDUCED_MOTION || typeof window.gsap === "undefined") return;

    if (typeof window.ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Lenis momentum smooth scrolling synced with GSAP ticker
    if (typeof window.Lenis !== "undefined") {
      const lenis = new Lenis({
        duration: 1.05,
        easing: (x) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
        smoothWheel: true
      });
      if (typeof window.ScrollTrigger !== "undefined") {
        lenis.on("scroll", ScrollTrigger.update);
      }
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      // Anchor links smooth scroll via Lenis
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          const href = anchor.getAttribute("href");
          if (href && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              lenis.scrollTo(target, { offset: -84 });
            }
          }
        });
      });
    }

    // Hero staggered 3D perspective entrance
    gsap.from(".reveal-3d", {
      y: 28,
      rotateX: 10,
      opacity: 0,
      duration: 0.95,
      stagger: 0.1,
      delay: 0.85,
      ease: "power4.out",
      clearProps: "transform,opacity"
    });

    if (typeof window.ScrollTrigger !== "undefined") {
      // Real-photo backgrounds subtle scroll parallax
      [
        { el: "#hero-parallax-bg", trigger: "#hero-stage", y: 60 },
        { el: "#oven-parallax-bg", trigger: ".oven-band", y: 55 },
        { el: "#piazza-parallax-bg", trigger: "#piazza", y: 65 }
      ].forEach(({ el, trigger, y }) => {
        const node = document.querySelector(el);
        if (!node) return;
        gsap.to(node, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6
          }
        });
      });

      // Scroll-triggered 3D reveals for sections & cards
      gsap.utils.toArray(".scroll-reveal").forEach((elem) => {
        gsap.from(elem, {
          y: 34,
          rotateX: 7,
          opacity: 0,
          duration: 0.85,
          ease: "power4.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: elem,
            start: "top 88%",
            once: true
          }
        });
      });
    }
  }

  // Event listeners
  els.tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.cat;
      els.tabs.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", String(active));
      });
      renderMenu();
    });
  });

  els.chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const f = chip.dataset.filter;
      if (state.filters.has(f)) {
        state.filters.delete(f);
        chip.classList.remove("is-active");
      } else {
        state.filters.add(f);
        chip.classList.add("is-active");
      }
      renderMenu();
    });
  });

  els.searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderMenu();
  });

  els.resetFiltersBtn.addEventListener("click", resetFilters);
  els.emptyResetBtn.addEventListener("click", resetFilters);

  document.addEventListener("click", (e) => {
    const incBtn = e.target.closest("[data-inc]");
    if (incBtn) {
      changeQty(incBtn.dataset.inc, 1);
      return;
    }
    const decBtn = e.target.closest("[data-dec]");
    if (decBtn) {
      changeQty(decBtn.dataset.dec, -1);
    }
  });

  document.getElementById("header-order-btn").addEventListener("click", () => {
    syncCartUI();
    openModal(els.orderModal);
  });

  document.getElementById("dock-open-btn").addEventListener("click", () => {
    syncCartUI();
    openModal(els.orderModal);
  });

  document.getElementById("close-order-modal").addEventListener("click", () => closeModal(els.orderModal));
  document.getElementById("go-to-menu-btn").addEventListener("click", () => {
    closeModal(els.orderModal);
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  });

  els.orderModal.addEventListener("click", (e) => {
    if (e.target === els.orderModal) closeModal(els.orderModal);
  });

  els.orderMode.addEventListener("change", () => {
    els.addressRow.hidden = !els.orderMode.value.toLowerCase().includes("domicilio");
  });

  els.orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const { lines, total } = computeCartTotals();
    if (!lines.length) return;

    const mode = els.orderMode.value;
    const name = document.getElementById("order-name").value.trim();
    const time = document.getElementById("order-time").value.trim();
    const addr = document.getElementById("order-address").value.trim();
    const notes = document.getElementById("order-notes").value.trim();

    const msgLines = [
      "Buonasera Non Solo Pizz@.It, vorrei inviare questo ordine:",
      "",
      ...lines.map(({ item, qty }) => `- ${qty}x ${item.name} (${formatEuro(item.price * qty)})`),
      "",
      `Totale indicativo: ${formatEuro(total)}`,
      `Modalità: ${mode}`
    ];
    if (name) msgLines.push(`Nome: ${name}`);
    if (time) msgLines.push(`Orario desiderato: ${time}`);
    if (!els.addressRow.hidden && addr) msgLines.push(`Indirizzo: ${addr}`);
    if (notes) msgLines.push(`Note: ${notes}`);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msgLines.join("\n"))}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  });

  // QR Modal
  function openQrModal() {
    const targetUrl = (window.location.origin && window.location.origin !== "null"
      ? window.location.origin + window.location.pathname
      : "https://manuuudev.github.io/non-solo-pizza-villastellone/") + "#menu";
    els.qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=6&color=231A15&bgcolor=FFFFFF&data=${encodeURIComponent(targetUrl)}`;
    openModal(els.qrModal);
  }

  document.getElementById("open-qr-btn").addEventListener("click", openQrModal);
  const mobileQrBtn = document.getElementById("mobile-qr-btn");
  if (mobileQrBtn) {
    mobileQrBtn.addEventListener("click", () => {
      els.mobilePanel.hidden = true;
      els.mobileToggle.setAttribute("aria-expanded", "false");
      openQrModal();
    });
  }

  document.getElementById("close-qr-modal").addEventListener("click", () => closeModal(els.qrModal));
  els.qrModal.addEventListener("click", (e) => {
    if (e.target === els.qrModal) closeModal(els.qrModal);
  });

  // Mobile Menu
  els.mobileToggle.addEventListener("click", () => {
    const isHidden = els.mobilePanel.hidden;
    els.mobilePanel.hidden = !isHidden;
    els.mobileToggle.setAttribute("aria-expanded", String(isHidden));
  });

  els.mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      els.mobilePanel.hidden = true;
      els.mobileToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!els.orderModal.hidden) closeModal(els.orderModal);
      if (!els.qrModal.hidden) closeModal(els.qrModal);
    }
  });

  // Init
  initBrandIntro();
  updateLiveHours();
  renderMenu();
  syncCartUI();
  bind3DTiltCards(document.querySelectorAll(".tilt-3d"));
  initCursorSystem();
  initHero3DEmbers();
  initCinematicMotion();
})();
