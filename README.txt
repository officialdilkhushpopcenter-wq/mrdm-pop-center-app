MR DM P.O.P CENTER — WEBSITE + INSTALLABLE APP (v1.1.0, 27 Nov 2026)
=====================================================================

FILES (sab ek hi folder mein rehne chahiye)
  index.html            -> app / website ka main page
  styles.css            -> design
  app.js                -> kaam (edit mode, gallery filter, ID card, admin)
  manifest.json         -> app ki settings (naam, icon, colour)
  sw.js                 -> offline support (internet band ho to bhi chalti hai)
  icons/                -> app icons (192, 512, maskable, apple, favicon)
  README.txt            -> yeh file

ISKO APP KI TARAH INSTALL KARNA (Android / iPhone)
  1. Files ko kisi hosting par upload karein — GitHub Pages, Netlify,
     Hostinger, GoDaddy (koi bhi). Zaroori: https:// link ho.
  2. Us link ko phone ke Chrome mein kholein.
  3. Header mein gold colour ka download icon dabaiye
     (ya Chrome menu (⋮) -> "Install app" / "Add to Home screen").
  4. Home screen par "MRDM P.O.P" icon aa jayega. Usse khulne par
     browser bar nahi dikhti — poora app jaisa chalta hai.
  5. Ek baar khulne ke baad internet ke bina bhi khulti hai (offline).
  iPhone (Safari): Share button -> "Add to Home Screen".

  Note: file:// se seedha kholne par app install nahi hoti (browser rule),
  website normal chalti hai. Install ke liye hosting/HTTPS chahiye.

EDIT MODE (text aur photo badalne ke liye)
  - Header mein pencil (✏) icon dabaiye -> Edit mode ON.
  - Kisi bhi text par click karke type karein — saare 11 section editable hain.
  - Photo ke corner ke "Upload" button se photo badlein (phone se bhi).
  - Header logo: Edit mode mein logo par "Logo" button.
  - Neeche black bar: Done / Backup / Restore / Reset.
  - Data isi device ke browser mein save hota hai (localStorage).
    Backup se JSON download karein, doosre phone par Restore se wapas.

ADMIN SECTION (10)
  - ADMIN menu normal visitors ko dikhta hi nahi.
  - Header ke lock (🔒) icon par PIN daalein: 1122
    (badalna ho to app.js mein  pin: "1122"  line edit karein).
  - Andar: Admin IDs, Work History, Footprint audit log, Permission Matrix.

EMPLOYEE ID CARD
  - Employee section -> "View ID Card" -> Print / Save PDF.
  - Photo, QR aur company stamp Edit mode mein card ke andar se upload hote hain.

GALLERY
  - Tabs: A All, B False Ceiling, C Wall Molding, D Minus Plus,
    E Jali Plaster, F Cornice & Detailing, G Site Execution.
  - Us tab ko kholein -> Edit mode -> "Add photo to ..." button.

UPDATE KAISE KAREIN
  - Naya version aane par index.html, styles.css, app.js upload karein aur
    sw.js mein CACHE ka naam badal dein (jaise mrdm-pop-v1.1.1).
    Isse phone purani copy ki jagah naya version le lega.
  - Page ke footer mein version likha rehta hai (jaise v1.1.0) — usse pata
    chalega ki naya version chalu hai ya purana.

DEMO DATA
  - Payment history, employee naam, numbers, UPI ID sab sample hain.
    Edit mode se apna asli data daal dein.
  - Reset button se sab sample data wapas aa jata hai.
