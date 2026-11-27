/* ============================================================
   MR DM P.O.P CENTER — app logic
   All content lives in one state object, saved in localStorage.
   ============================================================ */
(function () {
  "use strict";

  var STORE = "mrdm-pop-center-v1";
  var SA_KEY = "mrdm-pop-superadmin";
  var VERSION = "v1.1.0";
  var BUILT = "27 Nov 2026";

  /* ---------------- default content ---------------- */
  var DEFAULTS = {
    pin: "1122",
    brand: {
      name: "MR DM P.O.P CENTER",
      tagline: "Plaster of Paris & Interior Finishing",
      logo: ""
    },
    home: {
      companyName: "MR DM P.O.P CENTER",
      tagline: "Precision Plaster of Paris (P.O.P) Craftsmanship",
      description:
        "Precision Plaster of Paris (P.O.P) craftsmanship and interior finishing for homes, offices, and commercial spaces — built for clean lines, durability, and timely site execution.\n\nFalse ceiling, wall molding, minus plus work, jali plaster, cornice detailing and complete interior finishing under one team.",
      images: ["", "", "", "", ""]
    },
    dashboard: {
      payments: [
        { date: "2026-11-02", client: "A. Sharma — Living Room", project: "False Ceiling", amount: "45000", method: "UPI", status: "Paid" },
        { date: "2026-11-08", client: "Green Valley Office", project: "Minus Plus Work", amount: "82000", method: "Bank Transfer", status: "Paid" },
        { date: "2026-11-14", client: "S. Verma — Bedroom", project: "Cornice & Border", amount: "18000", method: "UPI", status: "Advance" },
        { date: "2026-11-21", client: "R. Khan — Hall", project: "Wall Molding", amount: "26000", method: "Cash", status: "Pending" }
      ],
      exEmployees: [
        { name: "Ajay Pal", role: "Helper", left: "Mar 2026" },
        { name: "Nitin Rao", role: "Craftsman", left: "Aug 2026" }
      ],
      presentEmployees: [
        { name: "Imran Khan", role: "Manager", since: "Jan 2024" },
        { name: "Suresh Yadav", role: "Craftsman", since: "Jun 2023" },
        { name: "Ravi Kumar", role: "Helper", since: "Feb 2025" }
      ]
    },
    services: {
      heading: "SERVICES",
      subheading:
        "SPECIALIST IN — Precision Plaster of Paris (P.O.P) craftsmanship and interior finishing for homes, offices, and commercial spaces—built for clean lines, durability, and timely site execution.",
      items: [
        {
          title: "False Ceiling",
          desc: "Modern ceiling layouts, cove lighting pockets, and smooth level finishing for living rooms, bedrooms, and halls.",
          photo: "",
          cta: "Call / WhatsApp"
        },
        {
          title: "Wall Molding",
          desc: "Clean borders, wall panels, and classic or modern accent framing that elevate plain walls.",
          photo: "",
          cta: "Request Quote"
        },
        {
          title: "Minus Plus Work",
          desc: "Layered ceiling designs, sharp geometric depth, and stylish lighting grooves for contemporary interiors.",
          photo: "",
          cta: "View Samples"
        },
        {
          title: "Jali Plaster",
          desc: "Detailed decorative jali patterns, partitions, and custom ornamental accents crafted with care.",
          photo: "",
          cta: "Inquire Now"
        },
        {
          title: "Cornice & Border Work",
          desc: "Neat ceiling-to-wall transitions, crown moldings, and crisp edge detailing across rooms.",
          photo: "",
          cta: "Call Now"
        },
        {
          title: "Complete Interior Finishing",
          desc: "Coordinated work from measurement and design alignment to final touch-ups and site handover.",
          photo: "",
          cta: "Book Site Visit"
        }
      ]
    },
    portfolio: {
      heading: "PORTFOLIO",
      subheading:
        "Selected Plaster of Paris (P.O.P) and interior finishing work across homes, halls, offices, and commercial spaces—showcasing clean finish, sharp detailing, and reliable execution.",
      items: [
        {
          title: "Living Room Cove Ceiling",
          category: "False Ceiling",
          desc: "Smooth ceiling level with recessed lighting groove for a clean, warm hall look.",
          photo: "",
          area: "420 Sq. Ft. — City Area",
          cta: "Inquire Similar Work"
        },
        {
          title: "Classic Wall Molding Panels",
          category: "Wall Molding",
          desc: "Structured border and panel framing on main wall and TV unit backdrop.",
          photo: "",
          area: "180 Sq. Ft. — City Area",
          cta: "Get Estimate"
        },
        {
          title: "Geometric Minus Plus Ceiling",
          category: "Minus Plus Work",
          desc: "Layered ceiling depth and crisp lines designed for modern living spaces.",
          photo: "",
          area: "300 Sq. Ft. — City Area",
          cta: "Call / WhatsApp"
        },
        {
          title: "Decorative Jali Partition & Accent",
          category: "Jali Plaster",
          desc: "Custom jali pattern work adding light flow and traditional-modern character.",
          photo: "",
          area: "90 Sq. Ft. — City Area",
          cta: "Request Details"
        },
        {
          title: "Bedroom Cornice & Border Finish",
          category: "Cornice & Border",
          desc: "Clean ceiling-to-wall edge finish and subtle border detailing for a neat bedroom look.",
          photo: "",
          area: "140 Sq. Ft. — City Area",
          cta: "Book Site Visit"
        },
        {
          title: "Commercial / Office Ceiling Work",
          category: "Complete Finishing",
          desc: "Neat, uniform ceiling and interior detailing suited for offices and showrooms.",
          photo: "",
          area: "950 Sq. Ft. — City Area",
          cta: "Ask for Quote"
        }
      ]
    },
    gallery: {
      heading: "GALLERY",
      subheading:
        "Browse completed Plaster of Paris (P.O.P) and interior work photos by category—tap any tab below to view specific work.",
      tabs: [
        { letter: "A", name: "All", rule: "All Work" },
        { letter: "B", name: "False Ceiling", rule: "False Ceiling" },
        { letter: "C", name: "Wall Molding", rule: "Wall Molding" },
        { letter: "D", name: "Minus Plus Work", rule: "Minus Plus Work" },
        { letter: "E", name: "Jali Plaster", rule: "Jali Plaster" },
        { letter: "F", name: "Cornice & Detailing", rule: "Cornice & Detailing" },
        { letter: "G", name: "Site Execution", rule: "Site Execution" }
      ],
      photos: []
    },
    employee: {
      heading: "TEAM & EMPLOYEE DIRECTORY",
      subheading:
        "Verified team members, roles, ID numbers, and employee ID card details for MR DM P.O.P CENTER.",
      searchPlaceholder: "Search by Name, ID No (e.g., MRDM-0001), Role, or Area...",
      companyFixed: "MR DM P.O.P CENTER",
      idPrefix: "MRDM",
      items: [
        {
          name: "MDM BOSS",
          idNum: "0001",
          govId: "GOV-ID-0001",
          blood: "O+",
          role: "Organizer",
          area: "Main Office / Local Site",
          contact: "2345678921",
          photo: "",
          qr: "",
          stamp: "",
          signature: "MDM BOSS"
        },
        {
          name: "Imran Khan",
          idNum: "0002",
          govId: "GOV-ID-0002",
          blood: "B+",
          role: "Manager",
          area: "Site Zone / 8 km",
          contact: "2345678922",
          photo: "",
          qr: "",
          stamp: "",
          signature: "MDM BOSS"
        },
        {
          name: "Suresh Yadav",
          idNum: "0003",
          govId: "GOV-ID-0003",
          blood: "A+",
          role: "Craftsman",
          area: "Site Zone / 15 km",
          contact: "2345678923",
          photo: "",
          qr: "",
          stamp: "",
          signature: "MDM BOSS"
        }
      ]
    },
    payment: {
      heading: "PAYMENT METHOD",
      subheading:
        "Convenient and transparent payment options for booking, material advances, and project milestones.",
      upiId: "yourname@upi",
      qr: "",
      whatsapp: "1234567890",
      confirmNote:
        "Please share your transaction details or screenshot on WhatsApp after payment.",
      billingNote:
        "Advance booking and work milestone payments are confirmed with proper record keeping.",
      bankNote: "Bank details / invoice can be shared on request for larger project milestones."
    },
    contacts: {
      heading: "CONTACTS",
      subheading:
        "Reach out directly by call, WhatsApp, email, or Instagram for inquiries, site visits, and project details.",
      calls: [
        { label: "Call A", number: "1234567890" },
        { label: "Call B", number: "1234567890" },
        { label: "Call C", number: "1234567890" },
        { label: "Call E", number: "1234567890" }
      ],
      whatsapps: [
        { label: "WhatsApp A", number: "1234567890" },
        { label: "WhatsApp B", number: "1234567890" },
        { label: "WhatsApp C", number: "1234567890" },
        { label: "WhatsApp E", number: "1234567890" }
      ],
      emails: [
        { label: "Email A", email: "popcenter@gmail.com" },
        { label: "Email B", email: "popcenter@gmail.com" }
      ],
      instas: [
        { label: "Instagram A", user: "pop_center" },
        { label: "Instagram B", user: "pop_center" }
      ]
    },
    profile: {
      heading: "SELF-PROFILE",
      subheading:
        "Owner & organizer profile, role details, office address, admin access controls, and personal ID card.",
      company: "MR DM P.O.P CENTER",
      photo: "",
      name: "MDM BOSS",
      role: "BOSS",
      bio:
        "Leading MR DM P.O.P CENTER with focus on false ceiling, wall molding, minus plus work, jali plaster, and reliable interior execution.",
      address: "Office Address, Area, City, Pin Code",
      maps: "https://maps.google.com/?q=Office+Address",
      adminAccess: true
    },
    admin: {
      heading: "ADMIN",
      searchPlaceholder: "Search by Admin name, Admin ID, email, or role...",
      admins: [
        { id: "ADM-101", name: "MDM BOSS", role: "Super Admin", email: "officialdilkhushpopcenter@gmail.com", active: true },
        { id: "ADM-102", name: "Imran Khan", role: "Manager", email: "manager@popcenter.in", active: true },
        { id: "ADM-103", name: "Suresh Yadav", role: "Craftsman", email: "site@popcenter.in", active: false }
      ],
      history: [
        { adminId: "ADM-101", time: "27 Nov 2026, 10:12", action: "Updated Services card photo" },
        { adminId: "ADM-102", time: "26 Nov 2026, 18:40", action: "Added gallery photos — False Ceiling" },
        { adminId: "ADM-101", time: "25 Nov 2026, 09:05", action: "Changed payment UPI ID" }
      ],
      footprint: [
        { adminId: "ADM-101", event: "Login", time: "27 Nov 2026, 09:58", ip: "103.21.x.x · Mobile" },
        { adminId: "ADM-101", event: "Page visit — Gallery", time: "27 Nov 2026, 10:02", ip: "103.21.x.x · Mobile" },
        { adminId: "ADM-102", event: "Logout", time: "26 Nov 2026, 19:15", ip: "49.36.x.x · Desktop" }
      ],
      permissions: {
        roles: ["Super Admin", "Manager", "Craftsman"],
        modules: ["view_admins", "manage_permissions", "view_work_history", "view_footprint", "edit_content", "edit_payments"],
        matrix: {
          "view_admins": { "Super Admin": true, "Manager": false, "Craftsman": false },
          "manage_permissions": { "Super Admin": true, "Manager": false, "Craftsman": false },
          "view_work_history": { "Super Admin": true, "Manager": true, "Craftsman": false },
          "view_footprint": { "Super Admin": true, "Manager": false, "Craftsman": false },
          "edit_content": { "Super Admin": true, "Manager": true, "Craftsman": false },
          "edit_payments": { "Super Admin": true, "Manager": false, "Craftsman": false }
        }
      }
    },
    about: {
      heading: "ABOUT MR DM P.O.P CENTER",
      subheading:
        "Our identity, specialties, working process, client value, privacy policy, and clear terms & conditions.",
      items: [
        {
          code: "A",
          title: "Who We Are",
          body: "MR DM P.O.P CENTER delivers clean, durable, and well-finished Plaster of Paris (P.O.P) and interior work for homes, offices, and commercial spaces."
        },
        {
          code: "B",
          title: "What We Specialize In",
          body: "False Ceiling • Wall Molding • Minus Plus Work • Jali Plaster • Cornice & Detailing • Complete Interior Finishing"
        },
        {
          code: "C",
          title: "How We Work",
          body: "1. Measurement & Scope — site check and work planning.\n2. Execution — skilled team work and clean finishing.\n3. Handover — final review and tidy completion."
        },
        {
          code: "D",
          title: "Why Clients Choose Us",
          body: "Clean finishing, sharp details, coordinated team work, clear communication, and dependable execution across projects."
        },
        {
          code: "E",
          title: "Privacy & Policy",
          body: "Information shared for inquiries, site visits, or project coordination (such as name, phone number, address, or payment details) is used only for business communication and service delivery. We do not sell personal client data to third parties."
        },
        {
          code: "F",
          title: "Terms & Condition",
          body: "• Scope & Additional Work: Any work discussed or agreed initially applies to that decided scope. Once work starts, if the work area, design, or total work increases beyond what was agreed, the payment will also increase accordingly based on the additional work/rate.\n• Booking & Milestones: Advance and stage-wise payments follow the mutually agreed work terms.\n• Site Readiness: Proper site access and agreed work conditions are expected during execution."
        }
      ]
    }
  };

  /* ---------------- state ---------------- */
  var S = load();

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function load() {
    var base = clone(DEFAULTS);
    try {
      var raw = localStorage.getItem(STORE);
      if (!raw) return base;
      var saved = JSON.parse(raw);
      return merge(base, saved);
    } catch (e) {
      return base;
    }
  }

  function merge(base, saved) {
    if (Array.isArray(base)) {
      return Array.isArray(saved) ? saved : base;
    }
    if (base && typeof base === "object") {
      if (!saved || typeof saved !== "object") return base;
      var out = {};
      Object.keys(base).forEach(function (k) {
        out[k] = k in saved ? merge(base[k], saved[k]) : base[k];
      });
      Object.keys(saved).forEach(function (k) {
        if (!(k in out)) out[k] = saved[k];
      });
      return out;
    }
    return saved === undefined || saved === null ? base : saved;
  }

  var saveTimer = null;
  function save(now) {
    clearTimeout(saveTimer);
    var run = function () {
      try {
        localStorage.setItem(STORE, JSON.stringify(S));
      } catch (e) {
        toast("Storage full — remove a few photos and try again");
      }
    };
    if (now) run();
    else saveTimer = setTimeout(run, 350);
  }

  function getPath(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur === null || cur === undefined) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function setPath(obj, path, val) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length - 1; i++) {
      if (cur[parts[i]] === undefined) cur[parts[i]] = /^\d+$/.test(parts[i + 1]) ? [] : {};
      cur = cur[parts[i]];
    }
    cur[parts[parts.length - 1]] = val;
  }

  /* ---------------- helpers ---------------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(s) {
    return String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function digits(n) { return String(n || "").replace(/\D/g, ""); }

  function telHref(n) { return "tel:" + digits(n); }

  function waHref(n) {
    var d = digits(n);
    if (d.length === 10) d = "91" + d;
    return "https://wa.me/" + d;
  }

  function mailHref(e) { return "mailto:" + String(e || "").trim(); }

  function instaHref(u) { return "https://instagram.com/" + String(u || "").replace(/^@/, "").trim(); }

  function money(v) {
    var n = Number(String(v).replace(/[^\d.-]/g, ""));
    if (!isFinite(n) || n === 0) return "—";
    return "₹" + n.toLocaleString("en-IN");
  }

  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._t);
    t._t = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  function copyText(text, okMsg) {
    var done = function () { toast(okMsg || "Copied"); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Copy failed — select and copy manually"); }
      document.body.removeChild(ta);
    }
  }

  function isSuperAdmin() {
    try { return sessionStorage.getItem(SA_KEY) === "1"; } catch (e) { return false; }
  }

  /* ---------------- icons ---------------- */
  var ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    dashboard: '<rect x="3" y="3" width="7" height="8" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="11" width="7" height="10" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
    services: '<path d="M14.7 6.3a4 4 0 0 0 5 5l-8.4 8.4a2.8 2.8 0 0 1-4-4z"/><path d="M6 6l3 3"/>',
    portfolio: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    gallery: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m4 17 5-5 4 4 3-3 4 4"/>',
    employee: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17.5" cy="9.5" r="2.4"/><path d="M15 20a4.6 4.6 0 0 1 6 0"/>',
    payment: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19"/>',
    contacts: '<path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
    profile: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    admin: '<path d="M12 3 4 6v6c0 5 3.4 8.2 8 9 4.6-.8 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    about: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.8" r="1"/>',
    lock: '<rect x="4.5" y="10" width="15" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    unlock: '<rect x="4.5" y="10" width="15" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.5-2"/>',
    edit: '<path d="M4 20h4l10-10-4-4L4 16z"/><path d="m14.5 5.5 4 4"/>',
    upload: '<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 17h12v4H6z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    download: '<path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M4 20h16"/>',
    trash: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
    install: '<path d="M12 3v10"/><path d="m8 9 4 4 4-4"/><path d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"/>'
  };

  function svg(name, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------------- sections ---------------- */
  var SECTIONS = [
    { id: "home", n: "01", label: "Home", icon: "home" },
    { id: "dashboard", n: "02", label: "Dashboard", icon: "dashboard" },
    { id: "services", n: "03", label: "Services", icon: "services" },
    { id: "portfolio", n: "04", label: "Portfolio", icon: "portfolio" },
    { id: "gallery", n: "05", label: "Gallery", icon: "gallery" },
    { id: "employee", n: "06", label: "Employee", icon: "employee" },
    { id: "payment", n: "07", label: "Payment Method", icon: "payment" },
    { id: "contacts", n: "08", label: "Contacts", icon: "contacts" },
    { id: "profile", n: "09", label: "Self-Profile", icon: "profile" },
    { id: "admin", n: "10", label: "Admin", icon: "admin", superOnly: true },
    { id: "about", n: "11", label: "About", icon: "about" }
  ];

  /* ---------------- nav ---------------- */
  function renderNav() {
    var nav = $("#nav");
    var html = "";
    SECTIONS.forEach(function (s) {
      if (s.superOnly && !isSuperAdmin()) return;
      html += '<a href="#' + s.id + '" data-nav="' + s.id + '">' + svg(s.icon) +
        '<span class="num">' + s.n + "</span>" + esc(s.label) + "</a>";
    });
    nav.innerHTML = html;
    var lock = $("#adminLock");
    lock.innerHTML = svg(isSuperAdmin() ? "unlock" : "lock");
    lock.classList.toggle("on", isSuperAdmin());
    lock.title = isSuperAdmin() ? "Admin unlocked — click to lock" : "Unlock Admin (PIN)";
  }

  /* ---------------- bindings ---------------- */
  function applyBindings(root) {
    $$("[data-bind]", root || document).forEach(function (el) {
      if (document.activeElement === el) return;
      var v = getPath(S, el.dataset.bind);
      if (v === undefined || v === null) v = "";
      if (el.innerText !== String(v)) el.innerText = String(v);
      el.setAttribute("contenteditable", document.body.classList.contains("edit-mode") ? "true" : "false");
    });
    $$("[data-img-src]", root || document).forEach(function (img) {
      var v = getPath(S, img.dataset.imgSrc);
      if (v) { img.src = v; img.style.display = ""; img.dataset.has = "1"; }
      else { img.removeAttribute("src"); img.style.display = "none"; delete img.dataset.has; }
    });
  }

  function imgSlot(path, label, cls) {
    var src = getPath(S, path) || "";
    return '<div class="img-slot ' + (cls || "") + '">' +
      (src ? '<img src="' + esc(src) + '" alt="' + esc(label) + '">' : "") +
      '<div class="ph"' + (src ? ' style="display:none"' : "") + '>' + esc(label) + "</div>" +
      '<button type="button" class="up" data-upload="' + path + '">' + svg("upload") + "Upload</button>" +
      "</div>";
  }

  function refreshImgSlots(root) {
    $$("[data-upload]", root || document).forEach(function (btn) {
      var slot = btn.closest(".img-slot");
      if (!slot) return;
      var src = getPath(S, btn.dataset.upload) || "";
      var img = slot.querySelector("img");
      var ph = slot.querySelector(".ph");
      if (src) {
        if (!img) { img = document.createElement("img"); slot.insertBefore(img, ph); }
        img.src = src; img.style.display = "";
        if (ph) ph.style.display = "none";
      } else {
        if (img) img.remove();
        if (ph) ph.style.display = "";
      }
    });
  }

  /* ---------------- brand ---------------- */
  function initials(name) {
    var parts = String(name || "").replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
    if (!parts.length) return "MD";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  function renderBrand() {
    var wrap = $("#brandLogo");
    var mono = $("#brandMono");
    if (!wrap || !mono) return;
    var logo = S.brand.logo;
    var img = wrap.querySelector("img");
    if (logo) {
      if (!img) { img = document.createElement("img"); wrap.insertBefore(img, mono); }
      img.src = logo;
      img.alt = S.brand.name;
      mono.style.display = "none";
    } else {
      if (img) img.remove();
      mono.style.display = "";
      mono.textContent = initials(S.brand.name);
    }
  }

  /* ---------------- HOME ---------------- */
  function renderHome() {
    $("#homeImgs").innerHTML = S.home.images.map(function (_, i) {
      return imgSlot("home.images." + i, "Photo " + (i + 1) + " — upload interior / ceiling work", "shot");
    }).join("");
  }

  /* ---------------- DASHBOARD ---------------- */
  function renderDashboard() {
    var rows = S.dashboard.payments.map(function (p, i) {
      var st = (p.status || "").toLowerCase();
      var cls = st === "paid" ? "ok" : st === "pending" ? "warn" : "mute";
      return "<tr>" +
        '<td data-bind="dashboard.payments.' + i + '.date">' + esc(p.date) + "</td>" +
        '<td data-bind="dashboard.payments.' + i + '.client">' + esc(p.client) + "</td>" +
        '<td data-bind="dashboard.payments.' + i + '.project">' + esc(p.project) + "</td>" +
        '<td data-bind="dashboard.payments.' + i + '.amount">' + esc(p.amount) + "</td>" +
        '<td data-bind="dashboard.payments.' + i + '.method">' + esc(p.method) + "</td>" +
        '<td><span class="badge ' + cls + '" data-bind="dashboard.payments.' + i + '.status">' + esc(p.status) + "</span></td>" +
        '<td><button class="row-del edit-only" data-del-row="dashboard.payments" data-i="' + i + '">Delete</button></td>' +
        "</tr>";
    }).join("");
    $("#payTable tbody").innerHTML = rows || '<tr><td colspan="7" style="color:#8d8676">No payments yet — add one in Edit mode.</td></tr>';

    $("#exEmp").innerHTML = S.dashboard.exEmployees.map(function (e, i) {
      return '<span class="chip"><b data-bind="dashboard.exEmployees.' + i + '.name">' + esc(e.name) + "</b>" +
        '<i data-bind="dashboard.exEmployees.' + i + '.role">' + esc(e.role) + "</i>" +
        '<i data-bind="dashboard.exEmployees.' + i + '.left">' + esc(e.left) + "</i></span>";
    }).join("") || '<span class="chip">No ex-employees recorded</span>';

    $("#presentEmp").innerHTML = S.dashboard.presentEmployees.map(function (e, i) {
      return '<span class="chip"><b data-bind="dashboard.presentEmployees.' + i + '.name">' + esc(e.name) + "</b>" +
        '<i data-bind="dashboard.presentEmployees.' + i + '.role">' + esc(e.role) + "</i>" +
        '<i data-bind="dashboard.presentEmployees.' + i + '.since">' + esc(e.since) + "</i></span>";
    }).join("") || '<span class="chip">No present employees recorded</span>';

    renderStats();
  }

  function renderStats() {
    var total = 0, paid = 0, pending = 0, adv = 0;
    S.dashboard.payments.forEach(function (p) {
      var n = Number(String(p.amount).replace(/[^\d.-]/g, "")) || 0;
      total += n;
      var st = (p.status || "").toLowerCase();
      if (st === "paid") paid += n;
      else if (st === "pending") pending += n;
      else adv += n;
    });
    $("#statTotal").textContent = money(total);
    $("#statPaid").textContent = money(paid);
    $("#statPending").textContent = money(pending);
    $("#statCount").textContent = S.dashboard.payments.length;
  }

  /* ---------------- SERVICES / PORTFOLIO ---------------- */
  function ctaHref(label) {
    var l = String(label || "").toLowerCase();
    if (l.indexOf("call") > -1 || l.indexOf("whatsapp") > -1) return waHref(S.contacts.whatsapps[0].number);
    return "#contacts";
  }

  function renderServices() {
    $("#servicesGrid").innerHTML = S.services.items.map(function (s, i) {
      return '<article class="card">' +
        imgSlot("services.items." + i + ".photo", "Upload " + esc(s.title) + " photo", "thumb") +
        '<div class="body">' +
        '<span class="pill">P.O.P</span>' +
        '<h3 data-bind="services.items.' + i + '.title">' + esc(s.title) + "</h3>" +
        '<p data-bind="services.items.' + i + '.desc">' + esc(s.desc) + "</p>" +
        '<div class="foot">' +
        '<a class="btn btn-primary btn-sm" href="' + esc(ctaHref(s.cta)) + '">' +
        '<span data-bind="services.items.' + i + '.cta">' + esc(s.cta) + "</span></a>" +
        "</div></div></article>";
    }).join("");
  }

  function renderPortfolio() {
    $("#portfolioGrid").innerHTML = S.portfolio.items.map(function (p, i) {
      return '<article class="card">' +
        imgSlot("portfolio.items." + i + ".photo", "Upload project photo", "thumb") +
        '<div class="body">' +
        '<span class="pill" data-bind="portfolio.items.' + i + '.category">' + esc(p.category) + "</span>" +
        '<h3 data-bind="portfolio.items.' + i + '.title">' + esc(p.title) + "</h3>" +
        '<p data-bind="portfolio.items.' + i + '.desc">' + esc(p.desc) + "</p>" +
        '<div class="meta-row"><span>Area / Location</span>' +
        '<b data-bind="portfolio.items.' + i + '.area">' + esc(p.area) + "</b></div>" +
        '<div class="foot"><a class="btn btn-gold btn-sm" href="' + esc(ctaHref(p.cta)) + '">' +
        '<span data-bind="portfolio.items.' + i + '.cta">' + esc(p.cta) + "</span></a></div>" +
        "</div></article>";
    }).join("");
  }

  /* ---------------- GALLERY ---------------- */
  var activeTab = "All";

  function renderGallery() {
    $("#galTabs").innerHTML = S.gallery.tabs.map(function (t) {
      return '<button type="button" class="tab' + (t.name === activeTab ? " active" : "") + '" data-tab="' + esc(t.name) + '">' +
        '<span class="k">' + esc(t.letter) + "</span>" + esc(t.name) + "</button>";
    }).join("");

    var list = S.gallery.photos.filter(function (p) {
      return activeTab === "All" || p.cat === activeTab;
    });

    if (!list.length) {
      var hint = activeTab === "All"
        ? "No photos yet. Turn on Edit mode and upload photos in any category tab."
        : "No photos in “" + activeTab + "” yet. Turn on Edit mode and upload.";
      $("#galGrid").innerHTML = '<div class="gal-item solo"><div class="empty">' + esc(hint) + "</div></div>";
    } else {
      $("#galGrid").innerHTML = list.map(function (p) {
        var idx = S.gallery.photos.indexOf(p);
        return '<div class="gal-item">' +
          (p.src ? '<img src="' + esc(p.src) + '" alt="' + esc(p.cat) + '">' : '<div class="empty">Photo slot</div>') +
          '<div class="cap"><span data-bind="gallery.photos.' + idx + '.cat">' + esc(p.cat) + "</span>" +
          ' <button class="row-del edit-only" data-del-row="gallery.photos" data-i="' + idx + '">×</button></div>' +
          "</div>";
      }).join("");
    }

    var canAdd = activeTab !== "All";
    $("#galTools").innerHTML = (canAdd
      ? '<button class="btn btn-ghost btn-sm edit-only" data-add-photo="' + esc(activeTab) + '">' + svg("plus") + "Add photo to " + esc(activeTab) + "</button>"
      : '<span class="copy-note">“All” shows every category together. Open a category tab to upload photos.</span>');
  }

  /* ---------------- EMPLOYEE ---------------- */
  var empQuery = "";

  function empId(e) { return S.employee.idPrefix + "-" + e.idNum; }

  function renderEmployees() {
    var q = empQuery.trim().toLowerCase();
    var list = S.employee.items.map(function (e, i) { return { e: e, i: i }; }).filter(function (o) {
      if (!q) return true;
      var e = o.e;
      return (e.name + " " + empId(e) + " " + e.role + " " + e.area + " " + e.govId).toLowerCase().indexOf(q) > -1;
    });

    if (!list.length) {
      $("#empGrid").innerHTML = '<div class="locked" style="grid-column:1/-1">' + svg("search") +
        "<p>No employee matched “" + esc(empQuery) + "”. Try a name, ID (MRDM-0001), role, or area.</p></div>";
      return;
    }

    $("#empGrid").innerHTML = list.map(function (o) {
      var e = o.e, i = o.i;
      return '<article class="emp-card">' +
        '<div class="emp-top">' +
        '<div class="emp-photo">' + (e.photo ? '<img src="' + esc(e.photo) + '" alt="">' : "") + "</div>" +
        "<div><h4 data-bind=\"employee.items." + i + ".name\">" + esc(e.name) + "</h4>" +
        '<div class="role" data-bind="employee.items.' + i + '.role">' + esc(e.role) + "</div>" +
        '<div class="id-no">' + esc(empId(e)) + "</div></div>" +
        "</div>" +
        '<div class="emp-body">' +
        "<div><span>Gov ID</span><b data-bind=\"employee.items." + i + ".govId\">" + esc(e.govId) + "</b> " +
        '<span class="badge ok" style="margin-top:4px">Auto-Verified</span></div>' +
        "<div><span>Blood Group</span><b data-bind=\"employee.items." + i + ".blood\">" + esc(e.blood) + "</b></div>" +
        "<div><span>Area / Distance</span><b data-bind=\"employee.items." + i + ".area\">" + esc(e.area) + "</b></div>" +
        "<div><span>Contact</span><b data-bind=\"employee.items." + i + ".contact\">" + esc(e.contact) + "</b></div>" +
        "</div>" +
        '<div class="emp-foot">' +
        '<button class="btn btn-primary btn-sm" data-idcard="' + i + '">View ID Card</button>' +
        '<a class="btn btn-ghost btn-sm" href="' + esc(waHref(e.contact)) + '" target="_blank" rel="noopener">WhatsApp</a>' +
        '<button class="row-del edit-only" data-del-row="employee.items" data-i="' + i + '">Delete</button>' +
        "</div></article>";
    }).join("");
  }

  function openIdCard(i) {
    var e = S.employee.items[i];
    if (!e) return;
    var body = $("#modalBody");
    body.innerHTML = idCardHTML(e, i);
    $("#modalTitle").textContent = "Employee ID Card — " + empId(e);
    $("#modal").classList.add("open");
    body.dataset.idx = i;
  }

  function idCardHTML(e, i) {
    var logo = S.brand.logo;
    return '<div class="id-card" id="printCard">' +
      '<div class="id-card-head">' +
      '<div class="lg">' + (logo ? '<img src="' + esc(logo) + '" alt="">' : "MD") + "</div>" +
      "<div><b data-bind=\"employee.companyFixed\">" + esc(S.employee.companyFixed) + "</b>" +
      "<small>Employee ID Card</small></div></div>" +
      '<div class="id-card-body">' +
      '<div class="id-photo">' + (e.photo ? '<img src="' + esc(e.photo) + '" alt="">' : "Photo") + "</div>" +
      '<div class="id-fields">' +
      '<div class="wide"><span>ID No</span><b class="id-no">' + esc(empId(e)) + "</b></div>" +
      "<div class=\"wide\"><span>Name</span><b data-bind=\"employee.items." + i + ".name\">" + esc(e.name) + "</b></div>" +
      "<div><span>Role</span><b data-bind=\"employee.items." + i + ".role\">" + esc(e.role) + "</b></div>" +
      "<div><span>Blood Group</span><b data-bind=\"employee.items." + i + ".blood\">" + esc(e.blood) + "</b></div>" +
      "<div class=\"wide\"><span>Government ID</span><b data-bind=\"employee.items." + i + ".govId\">" + esc(e.govId) + "</b> " +
      '<span class="badge ok">Auto-Verified</span></div>' +
      "<div class=\"wide\"><span>Area / Distance</span><b data-bind=\"employee.items." + i + ".area\">" + esc(e.area) + "</b></div>" +
      "<div class=\"wide\"><span>Contact</span><b data-bind=\"employee.items." + i + ".contact\">" + esc(e.contact) + "</b></div>" +
      "</div></div>" +
      '<div class="id-card-foot">' +
      '<div class="qr-box">' + (e.qr ? '<img src="' + esc(e.qr) + '" alt="QR">' : "QR") + "</div>" +
      '<div class="sign"><b data-bind="employee.items.' + i + '.signature">' + esc(e.signature) + "</b>Authorized By</div>" +
      '<div class="stamp-box">' + (e.stamp ? '<img src="' + esc(e.stamp) + '" alt="Stamp">' : "Company<br>Stamp") + "</div>" +
      "</div></div>" +
      '<div class="gal-tools">' +
      '<button class="btn btn-ghost btn-sm edit-only" data-upload="employee.items.' + i + '.photo">' + svg("upload") + "Photo</button>" +
      '<button class="btn btn-ghost btn-sm edit-only" data-upload="employee.items.' + i + '.qr">' + svg("upload") + "QR Code</button>" +
      '<button class="btn btn-ghost btn-sm edit-only" data-upload="employee.items.' + i + '.stamp">' + svg("upload") + "Stamp</button>" +
      '<button class="btn btn-primary btn-sm" onclick="window.print()">' + svg("print") + "Print / Save PDF</button>" +
      "</div>";
  }

  /* ---------------- PAYMENT ---------------- */
  function renderPayment() {
    $("#payQr").innerHTML = imgSlot("payment.qr", "Upload UPI QR image / PDF screenshot");
    $("#payWa").href = waHref(S.payment.whatsapp);
    $("#payCall").href = telHref(S.payment.whatsapp);
    var block = "MR DM P.O.P CENTER — PAYMENT METHOD\n\n" +
      "UPI / QR Payment: Scan the QR code or pay via UPI ID: " + S.payment.upiId + "\n\n" +
      "Payment Confirmation: " + S.payment.confirmNote + " (" + S.payment.whatsapp + ")\n\n" +
      "Billing & Receipts: " + S.payment.billingNote;
    $("#payBlock").textContent = block;
  }

  /* ---------------- CONTACTS ---------------- */
  function contactRow(label, value, href, path) {
    return '<div class="contact-row">' +
      '<span class="lbl">' + esc(label) + "</span>" +
      '<span class="val" data-bind="' + path + '">' + esc(value) + "</span>" +
      '<span class="sp"></span>' +
      '<a class="btn btn-ghost btn-sm" href="' + esc(href) + '" target="_blank" rel="noopener">Open</a>' +
      "</div>";
  }

  function renderContacts() {
    var c = S.contacts;
    $("#callList").innerHTML = c.calls.map(function (x, i) {
      return '<div class="contact-row"><span class="lbl">' + esc(x.label.replace("Call ", "")) + "</span>" +
        '<span class="val" data-bind="contacts.calls.' + i + '.number">' + esc(x.number) + "</span>" +
        '<span class="sp"></span><a class="btn btn-primary btn-sm" href="' + esc(telHref(x.number)) + '">' + svg("contacts") + "Call</a></div>";
    }).join("");

    $("#waList").innerHTML = c.whatsapps.map(function (x, i) {
      return '<div class="contact-row"><span class="lbl">' + esc(x.label.replace("WhatsApp ", "")) + "</span>" +
        '<span class="val" data-bind="contacts.whatsapps.' + i + '.number">' + esc(x.number) + "</span>" +
        '<span class="sp"></span><a class="btn btn-gold btn-sm" href="' + esc(waHref(x.number)) + '" target="_blank" rel="noopener">WhatsApp</a></div>';
    }).join("");

    $("#mailList").innerHTML = c.emails.map(function (x, i) {
      return '<div class="contact-row"><span class="lbl">' + esc(x.label.replace("Email ", "")) + "</span>" +
        '<span class="val" data-bind="contacts.emails.' + i + '.email">' + esc(x.email) + "</span>" +
        '<span class="sp"></span><a class="btn btn-ghost btn-sm" href="' + esc(mailHref(x.email)) + '">Mail</a></div>';
    }).join("");

    $("#instaList").innerHTML = c.instas.map(function (x, i) {
      return '<div class="contact-row"><span class="lbl">' + esc(x.label.replace("Instagram ", "")) + "</span>" +
        '<span class="val" data-bind="contacts.instas.' + i + '.user">@' + esc(String(x.user).replace(/^@/, "")) + "</span>" +
        '<span class="sp"></span><a class="btn btn-ghost btn-sm" href="' + esc(instaHref(x.user)) + '" target="_blank" rel="noopener">Profile</a></div>';
    }).join("");

    var block = "MR DM P.O.P CENTER — CONTACT DETAILS\n\n" +
      "Call: " + c.calls.map(function (x) { return x.label.replace("Call ", "") + ": " + x.number; }).join(" • ") + "\n" +
      "WhatsApp: " + c.whatsapps.map(function (x) { return x.label.replace("WhatsApp ", "") + ": " + x.number; }).join(" • ") + "\n" +
      "Email: " + c.emails.map(function (x) { return x.label.replace("Email ", "") + ": " + x.email; }).join(" • ") + "\n" +
      "Instagram: " + c.instas.map(function (x) { return x.label.replace("Instagram ", "") + ": @" + String(x.user).replace(/^@/, ""); }).join(" • ");
    $("#contactBlock").textContent = block;
  }

  /* ---------------- SELF PROFILE ---------------- */
  function renderProfile() {
    $("#profilePhoto").innerHTML = imgSlot("profile.photo", "Upload photo / logo");
    $("#profilePhotoSmall").innerHTML = S.profile.photo
      ? '<img src="' + esc(S.profile.photo) + '" alt="">'
      : "Logo";
    $("#profileMaps").href = S.profile.maps || "#";
    var sw = $("#adminAccessSwitch");
    sw.checked = !!S.profile.adminAccess;
    $("#adminAccessLabel").textContent = S.profile.adminAccess ? "Admin Access: Enabled" : "Admin Access: Restricted";
  }

  /* ---------------- ADMIN ---------------- */
  var adminQuery = "";

  function renderAdmin() {
    var gate = $("#adminGate");
    var content = $("#adminContent");
    if (!isSuperAdmin()) {
      gate.style.display = "";
      content.style.display = "none";
      return;
    }
    gate.style.display = "none";
    content.style.display = "";

    var q = adminQuery.trim().toLowerCase();
    var rows = S.admin.admins.map(function (a, i) { return { a: a, i: i }; }).filter(function (o) {
      if (!q) return true;
      return (o.a.id + " " + o.a.name + " " + o.a.role + " " + o.a.email).toLowerCase().indexOf(q) > -1;
    });

    $("#adminTable tbody").innerHTML = rows.map(function (o) {
      var a = o.a, i = o.i;
      return "<tr>" +
        '<td class="id-no" data-bind="admin.admins.' + i + '.id">' + esc(a.id) + "</td>" +
        '<td data-bind="admin.admins.' + i + '.name">' + esc(a.name) + "</td>" +
        '<td data-bind="admin.admins.' + i + '.role">' + esc(a.role) + "</td>" +
        '<td data-bind="admin.admins.' + i + '.email">' + esc(a.email) + "</td>" +
        '<td><label class="switch"><input type="checkbox" data-admin-active="' + i + '"' + (a.active ? " checked" : "") + ">" +
        '<span data-bind="admin.admins.' + i + '.status">' + (a.active ? "Active" : "Inactive") + "</span></label></td>" +
        "</tr>";
    }).join("") || '<tr><td colspan="5" style="color:#8d8676">No admin matched.</td></tr>';

    $("#adminHistory tbody").innerHTML = S.admin.history.map(function (h, i) {
      return "<tr>" +
        '<td class="id-no" data-bind="admin.history.' + i + '.adminId">' + esc(h.adminId) + "</td>" +
        '<td data-bind="admin.history.' + i + '.time">' + esc(h.time) + "</td>" +
        '<td data-bind="admin.history.' + i + '.action">' + esc(h.action) + "</td>" +
        "</tr>";
    }).join("") || '<tr><td colspan="3" style="color:#8d8676">No work history yet.</td></tr>';

    $("#adminFoot tbody").innerHTML = S.admin.footprint.map(function (f, i) {
      return "<tr>" +
        '<td class="id-no" data-bind="admin.footprint.' + i + '.adminId">' + esc(f.adminId) + "</td>" +
        '<td data-bind="admin.footprint.' + i + '.event">' + esc(f.event) + "</td>" +
        '<td data-bind="admin.footprint.' + i + '.time">' + esc(f.time) + "</td>" +
        '<td data-bind="admin.footprint.' + i + '.ip">' + esc(f.ip) + "</td>" +
        "</tr>";
    }).join("") || '<tr><td colspan="4" style="color:#8d8676">No footprint records.</td></tr>';

    var roles = S.admin.permissions.roles;
    var head = "<tr><th>Module / Action</th>" + roles.map(function (r) { return "<th>" + esc(r) + "</th>"; }).join("") + "</tr>";
    var body = S.admin.permissions.modules.map(function (m) {
      var cells = roles.map(function (r) {
        var on = !!(S.admin.permissions.matrix[m] && S.admin.permissions.matrix[m][r]);
        return '<td><input type="checkbox" data-perm-module="' + esc(m) + '" data-perm-role="' + esc(r) + '"' + (on ? " checked" : "") + "></td>";
      }).join("");
      return '<tr><td><b>' + esc(m) + "</b></td>" + cells + "</tr>";
    }).join("");
    $("#permTable thead").innerHTML = head;
    $("#permTable tbody").innerHTML = body;
  }

  function logFootprint(event) {
    var now = new Date();
    var stamp = now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) + ", " +
      now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
    S.admin.footprint.unshift({ adminId: "ADM-101", event: event, time: stamp, ip: "this device" });
    if (S.admin.footprint.length > 40) S.admin.footprint.length = 40;
    save(true);
  }

  function toggleAdmin() {
    if (isSuperAdmin()) {
      try { sessionStorage.removeItem(SA_KEY); } catch (e) {}
      logFootprint("Admin logout");
      renderNav(); renderAdmin();
      toast("Admin locked");
      return;
    }
    var pin = window.prompt("Enter Admin PIN to unlock the ADMIN section:");
    if (pin === null) return;
    if (String(pin).trim() !== String(S.pin)) { toast("Wrong PIN"); return; }
    try { sessionStorage.setItem(SA_KEY, "1"); } catch (e) {}
    logFootprint("Admin login (unlocked)");
    renderNav(); renderAdmin();
    toast("Admin unlocked");
  }

  /* ---------------- ABOUT ---------------- */
  function renderAbout() {
    $("#aboutGrid").innerHTML = S.about.items.map(function (a, i) {
      var wide = a.code === "F" ? " wide" : "";
      return '<article class="about-card' + wide + '">' +
        '<span class="code" data-bind="about.items.' + i + '.code">' + esc(a.code) + "</span>" +
        '<h3 data-bind="about.items.' + i + '.title">' + esc(a.title) + "</h3>" +
        '<p data-bind="about.items.' + i + '.body">' + esc(a.body) + "</p></article>";
    }).join("");

    var block = "ABOUT — MR DM P.O.P CENTER\n\n" + S.about.items.map(function (a) {
      return a.code + ". " + a.title + "\n" + a.body;
    }).join("\n\n");
    $("#aboutBlock").textContent = block;
  }

  /* ---------------- footer ---------------- */
  function renderFooter() {
    $("#footNav").innerHTML = SECTIONS.filter(function (s) { return !s.superOnly || isSuperAdmin(); })
      .map(function (s) { return '<a href="#' + s.id + '">' + s.n + " · " + esc(s.label) + "</a>"; }).join("");
    $("#footContact").innerHTML =
      '<a href="' + esc(telHref(S.contacts.calls[0].number)) + '">Call: ' + esc(S.contacts.calls[0].number) + "</a>" +
      '<a href="' + esc(waHref(S.contacts.whatsapps[0].number)) + '" target="_blank" rel="noopener">WhatsApp: ' + esc(S.contacts.whatsapps[0].number) + "</a>" +
      '<a href="' + esc(mailHref(S.contacts.emails[0].email)) + '">' + esc(S.contacts.emails[0].email) + "</a>" +
      '<a href="' + esc(instaHref(S.contacts.instas[0].user)) + '" target="_blank" rel="noopener">@' + esc(String(S.contacts.instas[0].user).replace(/^@/, "")) + "</a>";
    $("#footBrand").textContent = S.brand.name;
    $("#footTag").textContent = S.brand.tagline;
    $("#buildStamp").textContent = VERSION + " · built " + BUILT;
  }

  /* ---------------- render all ---------------- */
  function renderAll() {
    renderBrand();
    renderNav();
    renderHome();
    renderDashboard();
    renderServices();
    renderPortfolio();
    renderGallery();
    renderEmployees();
    renderPayment();
    renderContacts();
    renderProfile();
    renderAdmin();
    renderAbout();
    renderFooter();
    applyBindings();
  }

  /* ---------------- image upload ---------------- */
  function pickFile(accept, cb) {
    var inp = document.createElement("input");
    inp.type = "file";
    inp.accept = accept;
    inp.onchange = function () {
      var f = inp.files && inp.files[0];
      if (!f) return;
      if (f.size > 8 * 1024 * 1024) { toast("File too large — use an image under 8 MB"); return; }
      var r = new FileReader();
      r.onload = function () { cb(r.result, f); };
      r.readAsDataURL(f);
    };
    inp.click();
  }

  function shrink(dataUrl, max, type) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onload = function () {
        var w = img.width, h = img.height;
        var s = Math.min(1, max / Math.max(w, h));
        var c = document.createElement("canvas");
        c.width = Math.round(w * s);
        c.height = Math.round(h * s);
        var ctx = c.getContext("2d");
        if (type === "image/jpeg") { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height); }
        ctx.drawImage(img, 0, 0, c.width, c.height);
        try { resolve(c.toDataURL(type, 0.85)); } catch (e) { resolve(dataUrl); }
      };
      img.onerror = function () { resolve(dataUrl); };
      img.src = dataUrl;
    });
  }

  function uploadTo(path, kind) {
    var isCode = kind === "code";
    pickFile(isCode ? "image/*" : "image/*", function (dataUrl) {
      shrink(dataUrl, isCode ? 600 : 1280, isCode ? "image/png" : "image/jpeg").then(function (out) {
        setPath(S, path, out);
        save(true);
        refreshImgSlots();
        renderBrand();
        applyBindings();
        if (path.indexOf("employee.") === 0) {
          var idx = Number(path.split(".")[2]);
          if ($("#modal").classList.contains("open") && Number($("#modalBody").dataset.idx) === idx) openIdCard(idx);
        }
        if (path === "profile.photo") renderProfile();
        if (path === "brand.logo") renderBrand();
        toast("Image saved");
      });
    });
  }

  /* ---------------- edit mode ---------------- */
  function setEditMode(on) {
    document.body.classList.toggle("edit-mode", on);
    $("#editToggle").classList.toggle("on", on);
    $$("[data-bind]").forEach(function (el) {
      el.setAttribute("contenteditable", on ? "true" : "false");
    });
    toast(on ? "Edit mode ON — click any text or photo to change it" : "Edit mode OFF — changes saved");
    save(true);
  }

  /* ---------------- backup / restore ---------------- */
  function backup() {
    var blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "mrdm-pop-center-backup.json";
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
    toast("Backup downloaded");
  }

  function restore() {
    pickFile("application/json,.json", function (dataUrl) {
      try {
        var txt = atob(String(dataUrl).split(",")[1]);
        var obj = JSON.parse(decodeURIComponent(escape(txt)));
        S = merge(clone(DEFAULTS), obj);
        save(true);
        renderAll();
        toast("Backup restored");
      } catch (e) {
        toast("That file could not be read");
      }
    });
  }

  /* ---------------- events ---------------- */
  function wire() {
    document.addEventListener("click", function (ev) {
      var t = ev.target;

      var navLink = t.closest("[data-nav]");
      if (navLink) { $("#nav").classList.remove("open"); }

      var tab = t.closest("[data-tab]");
      if (tab) { activeTab = tab.dataset.tab; renderGallery(); applyBindings(); return; }

      var up = t.closest("[data-upload]");
      if (up && document.body.classList.contains("edit-mode")) {
        var p = up.dataset.upload;
        var code = /\.(qr|stamp)$/.test(p) || /brand\.logo$/.test(p) || /profile\.photo$/.test(p);
        uploadTo(p, code ? "code" : "photo");
        return;
      }

      var del = t.closest("[data-del-row]");
      if (del && document.body.classList.contains("edit-mode")) {
        var arr = getPath(S, del.dataset.delRow);
        var i = Number(del.dataset.i);
        if (Array.isArray(arr) && confirm("Delete this row?")) {
          arr.splice(i, 1);
          save(true);
          renderAll();
        }
        return;
      }

      var addPhoto = t.closest("[data-add-photo]");
      if (addPhoto) {
        pickFile("image/*", function (dataUrl) {
          shrink(dataUrl, 1280, "image/jpeg").then(function (out) {
            S.gallery.photos.unshift({ src: out, cat: addPhoto.dataset.addPhoto });
            save(true);
            renderGallery();
            toast("Photo added");
          });
        });
        return;
      }

      var card = t.closest("[data-idcard]");
      if (card) { openIdCard(Number(card.dataset.idcard)); return; }

      var copyBtn = t.closest("[data-copy]");
      if (copyBtn) {
        var src = copyBtn.dataset.copy;
        var text = src === "upi" ? S.payment.upiId : (src === "block" ? ($("#payBlock").textContent) : (src === "contacts" ? $("#contactBlock").textContent : $("#aboutBlock").textContent));
        copyText(text, "Copied");
        return;
      }

      var closeBtn = t.closest("[data-close-modal]");
      if (closeBtn) { $("#modal").classList.remove("open"); return; }
      if (t.id === "modal") { $("#modal").classList.remove("open"); return; }

      var addRow = t.closest("[data-add-row]");
      if (addRow) {
        var which = addRow.dataset.addRow;
        if (which === "payments") S.dashboard.payments.push({ date: new Date().toISOString().slice(0, 10), client: "New client", project: "Work", amount: "0", method: "UPI", status: "Pending" });
        if (which === "history") S.admin.history.unshift({ adminId: "ADM-101", time: "now", action: "New action" });
        save(true); renderAll();
        return;
      }
    });

    document.addEventListener("input", function (ev) {
      var el = ev.target.closest("[data-bind]");
      if (el && document.body.classList.contains("edit-mode")) {
        setPath(S, el.dataset.bind, el.innerText);
        save();
        return;
      }
      var s = ev.target.closest("#empSearch");
      if (s) { empQuery = s.value; renderEmployees(); applyBindings(); return; }
      var a = ev.target.closest("#adminSearch");
      if (a) { adminQuery = a.value; renderAdmin(); applyBindings(); return; }
    });

    document.addEventListener("focusout", function (ev) {
      var el = ev.target.closest("[data-bind]");
      if (!el) return;
      // refresh derived values (totals, links, copy blocks)
      renderStats();
      renderPayment();
      renderContacts();
      renderFooter();
      applyBindings();
    });

    document.addEventListener("paste", function (ev) {
      var el = ev.target.closest("[data-bind]");
      if (!el) return;
      ev.preventDefault();
      var text = (ev.clipboardData || window.clipboardData).getData("text");
      document.execCommand("insertText", false, text);
    });

    document.addEventListener("change", function (ev) {
      var perm = ev.target.closest("[data-perm-module]");
      if (perm) {
        var m = perm.dataset.permModule, r = perm.dataset.permRole;
        S.admin.permissions.matrix[m] = S.admin.permissions.matrix[m] || {};
        S.admin.permissions.matrix[m][r] = perm.checked;
        save(true);
        toast("Permission updated — " + m + " / " + r);
        return;
      }
      var act = ev.target.closest("[data-admin-active]");
      if (act) {
        var i = Number(act.dataset.adminActive);
        S.admin.admins[i].active = act.checked;
        save(true);
        renderAdmin();
        applyBindings();
        toast("Status updated");
        return;
      }
      var sw = ev.target.closest("#adminAccessSwitch");
      if (sw) {
        S.profile.adminAccess = sw.checked;
        save(true);
        $("#adminAccessLabel").textContent = sw.checked ? "Admin Access: Enabled" : "Admin Access: Restricted";
        return;
      }
    });

    $("#adminLock").addEventListener("click", toggleAdmin);
    $("#menuBtn").addEventListener("click", function () { $("#nav").classList.toggle("open"); });
    $("#editToggle").addEventListener("click", function () {
      setEditMode(!document.body.classList.contains("edit-mode"));
    });
    $("#editDone").addEventListener("click", function () { setEditMode(false); });
    $("#btnBackup").addEventListener("click", backup);
    $("#btnRestore").addEventListener("click", restore);
    $("#btnReset").addEventListener("click", function () {
      if (confirm("Reset all content back to the original template? Your edits and photos will be removed.")) {
        S = clone(DEFAULTS);
        save(true);
        renderAll();
        toast("Reset done");
      }
    });
    $("#btnAddPay").addEventListener("click", function () {
      S.dashboard.payments.push({ date: new Date().toISOString().slice(0, 10), client: "New client", project: "Work", amount: "0", method: "UPI", status: "Pending" });
      save(true); renderDashboard(); applyBindings();
    });
    $("#btnAddHistory").addEventListener("click", function () {
      var now = new Date();
      S.admin.history.unshift({
        adminId: "ADM-101",
        time: now.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
        action: "New action"
      });
      save(true); renderAdmin(); applyBindings();
    });

    // scroll spy
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        $$("[data-nav]").forEach(function (a) { a.classList.toggle("active", a.dataset.nav === en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    SECTIONS.forEach(function (s) { var el = document.getElementById(s.id); if (el) obs.observe(el); });
  }

  /* ---------------- boot ---------------- */
  function boot() {
    $("#editToggle").innerHTML = svg("edit");
    $("#menuBtn").innerHTML = svg("menu");
    if ($("#installBtn")) $("#installBtn").innerHTML = svg("install");
    window.__toast = toast;
    renderAll();
    wire();
    $("#editToggle").classList.remove("on");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
