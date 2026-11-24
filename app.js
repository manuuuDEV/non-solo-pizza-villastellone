(() => {
  "use strict";

  const WHATSAPP_NUMBER = "393388899972";

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
      card.className = "menu-card";

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
      `;
      frag.appendChild(card);
    });

    els.menuGrid.innerHTML = "";
    els.menuGrid.appendChild(frag);
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
    if (next <= 0) {
      state.cart.delete(id);
    } else {
      state.cart.set(id, next);
    }
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
  updateLiveHours();
  renderMenu();
  syncCartUI();
})();
