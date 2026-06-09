<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Codes Dommage — GEA Garantie</title>
<style>
:root{
  --bleu:#003a70; --bleu2:#005baa; --accent:#009de0;
  --bg:#f0f4f8; --bord:#d0d8e4; --txt:#1a2233;
  --blanc:#fff; --vert:#00875a;
  --ombre:0 2px 16px rgba(0,58,112,.10);
}
*{box-sizing:border-box;margin:0;padding:0;}
body{font-family:'Segoe UI',Arial,sans-serif;background:var(--bg);color:var(--txt);min-height:100vh;}

/* HEADER */
header{background:var(--bleu);color:#fff;padding:0 24px;height:58px;display:flex;align-items:center;gap:12px;box-shadow:0 2px 8px rgba(0,0,0,.2);}
.logo{font-size:18px;font-weight:700;}
.logo span{color:var(--accent);}
.sub{font-size:12px;opacity:.55;margin-left:auto;}

/* LAYOUT */
main{max-width:860px;margin:30px auto;padding:0 16px;display:flex;flex-direction:column;gap:18px;}
.card{background:var(--blanc);border-radius:13px;box-shadow:var(--ombre);padding:26px 28px;}
.card-title{font-size:14px;font-weight:700;color:var(--bleu);margin-bottom:22px;display:flex;align-items:center;gap:8px;}
.card-title::before{content:"";width:4px;height:17px;background:var(--accent);border-radius:3px;display:inline-block;}

.flabel{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--bleu);margin-bottom:6px;display:block;}
.fsection{margin-bottom:20px;}

/* PILLS */
.pills{display:flex;flex-wrap:wrap;gap:8px;}
.pill{
  display:inline-flex;align-items:center;gap:5px;
  padding:7px 14px;border:1.5px solid var(--bord);border-radius:20px;
  background:#fafbfd;color:#555;font-size:13px;font-weight:600;
  cursor:pointer;transition:all .15s;white-space:nowrap;user-select:none;
}
.pill:hover{border-color:var(--accent);color:var(--accent);background:#f0faff;}
.pill.active{background:var(--bleu);color:#fff;border-color:var(--bleu);}

/* INSTRUCTION BANNER */
.instruction{
  background:#f0f7ff;
  border:1.5px solid var(--accent);
  border-radius:10px;
  padding:14px 18px;
  font-size:14px;
  color:var(--bleu);
  margin-bottom:22px;
  display:flex;
  align-items:center;
  gap:10px;
}
.instruction .ico{font-size:20px;flex-shrink:0;}
.instruction strong{display:block;font-size:13px;margin-bottom:2px;}
.instruction span{font-size:13px;color:#556;font-weight:400;}

/* SEARCHABLE SELECT */
.ss-wrap{position:relative;}
.ss-input{
  width:100%;padding:11px 36px 11px 12px;
  border:1.5px solid var(--bord);border-radius:9px;
  font-size:14px;color:var(--txt);background:#fafbfd;
  cursor:pointer;outline:none;
  transition:border-color .18s,box-shadow .18s;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='7'%3E%3Cpath fill='%23003a70' d='M0 0l5.5 7L11 0z'/%3E%3C/svg%3E");
  background-repeat:no-repeat;background-position:right 11px center;
}
.ss-input::placeholder{color:#aaa;}
.ss-wrap.open .ss-input{
  border-color:var(--accent);
  box-shadow:0 0 0 3px rgba(0,157,224,.13);
  border-radius:9px 9px 0 0;
}
.ss-input.selected{color:var(--bleu);font-weight:600;}

.ss-drop{
  display:none;position:absolute;top:100%;left:0;right:0;
  background:#fff;border:1.5px solid var(--accent);border-top:none;
  border-radius:0 0 10px 10px;z-index:400;
  box-shadow:0 8px 24px rgba(0,58,112,.13);
}
.ss-wrap.open .ss-drop{display:block;}

.ss-search{
  width:100%;padding:10px 12px;border:none;
  border-bottom:1.5px solid #eef1f7;
  font-size:14px;outline:none;background:#f7f9fc;
}
.ss-search::placeholder{color:#aaa;}
.ss-count{
  padding:5px 12px;font-size:11px;color:#aaa;
  background:#f7f9fc;border-bottom:1px solid #eef1f7;
}
.ss-opts{max-height:240px;overflow-y:auto;}
.ss-opt{
  padding:11px 14px;cursor:pointer;font-size:13.5px;
  border-bottom:1px solid #f0f3f8;transition:background .1s;
  display:flex;align-items:center;gap:10px;
}
.ss-opt:last-child{border-bottom:none;}
.ss-opt:hover,.ss-opt.hi{background:#e6f4fb;}
.ss-opt .opt-code{
  font-weight:800;color:var(--bleu);
  min-width:42px;font-size:13px;flex-shrink:0;
}
.ss-opt .opt-label{color:#333;flex:1;}
.ss-opt .opt-rub{color:#aaa;font-size:11px;margin-top:1px;}
.ss-opt mark{background:#ffe680;border-radius:2px;padding:0 1px;}
.ss-no-result{padding:16px;text-align:center;color:#aaa;font-size:13px;}

/* Clear link */
.ss-clear{display:none;font-size:11px;color:#999;cursor:pointer;text-align:right;margin-top:4px;text-decoration:underline;}
.ss-clear.on{display:block;}

/* CODE RESULT */
.code-idle{
  display:flex;align-items:center;gap:10px;
  padding:14px 18px;
  background:#f4f6f9;border:1.5px dashed var(--bord);
  border-radius:10px;color:#aaa;font-size:14px;margin-top:4px;
}
.code-box{
  display:none;
  align-items:center;gap:16px;
  padding:16px 20px;
  background:linear-gradient(135deg,#003a70,#005baa);
  border-radius:10px;color:#fff;margin-top:4px;
}
.code-box.show{display:flex;}
.cb-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;opacity:.7;}
.cb-code{font-size:36px;font-weight:800;letter-spacing:1px;line-height:1.1;}
.cb-info{flex:1;}
.cb-lib{font-size:14px;opacity:.9;font-weight:600;}
.cb-rub{font-size:11px;opacity:.55;margin-top:3px;}
.cb-cat{font-size:11px;opacity:.55;}
.cb-copy{
  background:rgba(255,255,255,.18);border:1.5px solid rgba(255,255,255,.3);
  color:#fff;padding:9px 18px;border-radius:8px;
  font-size:13px;font-weight:700;cursor:pointer;transition:all .15s;white-space:nowrap;
}
.cb-copy:hover{background:rgba(255,255,255,.32);}
.cb-copy.ok{background:var(--vert);border-color:var(--vert);}

/* RESET */
.reset-btn{
  padding:8px 14px;border:1.5px solid var(--bord);
  border-radius:8px;background:#fff;color:var(--bleu);
  font-size:13px;font-weight:600;cursor:pointer;transition:all .15s;
}
.reset-btn:hover{border-color:var(--bleu);background:#f0f4f9;}

/* FICHE CARD */
.fiche-card{background:var(--blanc);border-radius:13px;box-shadow:var(--ombre);padding:24px 28px;border-left:5px solid var(--accent);display:none;}
.fiche-card.show{display:block;}
.fiche-title{font-size:12px;font-weight:700;color:var(--bleu);text-transform:uppercase;letter-spacing:.5px;margin-bottom:14px;}
.fmt{
  display:flex;align-items:stretch;flex-wrap:wrap;
  margin-bottom:16px;font-family:'Courier New',monospace;
  font-size:15px;font-weight:700;border-radius:8px;
  overflow:hidden;border:1.5px solid #dde4f0;
}
.fs{padding:9px 13px;display:flex;align-items:center;white-space:nowrap;}
.fs-m{background:#ffd700;color:#222;}
.fs-d{background:#e8ecf4;color:#bbb;font-weight:400;padding:9px 5px;}
.fs-c{background:#00c0a0;color:#fff;}
.fs-r{background:#dce4f0;color:#556;font-size:12px;flex:1;}
.copy-fmt-btn{
  display:inline-flex;align-items:center;gap:6px;margin-bottom:16px;
  padding:9px 17px;background:var(--bleu);color:#fff;
  border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;transition:background .15s;
}
.copy-fmt-btn:hover{background:var(--bleu2);}
.copy-fmt-btn.ok{background:var(--vert);}
.info-box{
  background:#f0f6ff;border:1px solid #c5d8f5;
  border-radius:9px;padding:13px 15px;font-size:13px;color:#334;line-height:1.7;
}
.info-box strong{color:var(--bleu);}
.gbs-btn{
  display:inline-block;margin-top:10px;padding:7px 15px;
  background:var(--bleu);color:#fff;border-radius:7px;
  text-decoration:none;font-size:13px;font-weight:700;
}
.gbs-btn:hover{background:var(--bleu2);}

/* TOAST */
.toast{
  position:fixed;bottom:22px;right:22px;
  background:var(--vert);color:#fff;padding:9px 17px;
  border-radius:9px;font-size:13px;font-weight:600;
  box-shadow:0 4px 16px rgba(0,0,0,.2);
  opacity:0;transform:translateY(8px);
  transition:all .22s;pointer-events:none;z-index:999;
}
.toast.show{opacity:1;transform:none;}
</style>
</head>
<body>

<header>
  <div class="logo">GEA <span>Garantie</span></div>
  <div class="sub">Codes Dommage SAGA/2 · 2 264 références</div>
</header>

<main>
<div class="card">
  <div class="card-title">Recherche de code dommage</div>

  <!-- INSTRUCTION -->
  <div class="instruction">
    <div class="ico">💡</div>
    <div>
      <strong>Comment utiliser cette app ?</strong>
      <span>Saisissez la <b>désignation pièce</b> dans le champ ci-dessous pour obtenir son <b>code dommage</b>.<br>
      Vous pouvez aussi filtrer par marque et/ou catégorie pour affiner les résultats.</span>
    </div>
  </div>

  <!-- MARQUE PILLS -->
  <div class="fsection">
    <span class="flabel">Marque <span style="font-size:10px;font-weight:400;color:#999;text-transform:none;">(optionnel)</span></span>
    <div class="pills" id="marquePills">
      <button class="pill" data-val="VW">VW</button>
      <button class="pill" data-val="Audi">Audi</button>
      <button class="pill" data-val="SEAT">SEAT</button>
      <button class="pill" data-val="SKODA">SKODA</button>
      <button class="pill" data-val="VU">VU</button>
    </div>
  </div>

  <!-- CATÉGORIE PILLS -->
  <div class="fsection">
    <span class="flabel">Catégorie <span style="font-size:10px;font-weight:400;color:#999;text-transform:none;">(optionnel)</span></span>
    <div class="pills" id="catPills"></div>
  </div>

  <!-- DÉSIGNATION PIÈCE -->
  <div class="fsection">
    <span class="flabel">Désignation pièce <span style="color:#e53e3e;">*</span></span>
    <div class="ss-wrap" id="lib-wrap">
      <input type="text" class="ss-input" id="lib-input"
        placeholder="🔍 Saisissez la désignation pièce pour avoir le code dommage…"
        readonly
        onclick="openDrop()"
        autocomplete="off">
      <div class="ss-drop" id="lib-drop">
        <input type="text" class="ss-search" id="lib-search"
          placeholder="Tapez pour filtrer…"
          oninput="filterDrop()"
          onclick="event.stopPropagation()">
        <div class="ss-count" id="lib-count"></div>
        <div class="ss-opts" id="lib-opts"></div>
      </div>
    </div>
    <span class="ss-clear" id="lib-clear" onclick="clearLib()">✕ Effacer la sélection</span>
  </div>

  <!-- CODE DOMMAGE RESULT -->
  <div class="fsection" style="margin-bottom:0;">
    <span class="flabel">Code dommage</span>
    <div class="code-idle" id="codeIdle">
      <span style="font-size:18px;">🔍</span>
      <span>Saisissez la désignation pièce pour avoir le code dommage</span>
    </div>
    <div class="code-box" id="codeBox">
      <div>
        <div class="cb-label">Code dommage</div>
        <div class="cb-code" id="cbCode"></div>
      </div>
      <div class="cb-info">
        <div class="cb-lib" id="cbLib"></div>
        <div class="cb-rub" id="cbRub"></div>
        <div class="cb-cat" id="cbCat"></div>
      </div>
      <button class="cb-copy" id="cbCopy" onclick="copyCode()">⎘ Copier</button>
    </div>
  </div>

  <div style="margin-top:16px;">
    <button class="reset-btn" id="resetBtn">↺ Réinitialiser</button>
  </div>

</div>

<!-- FICHE PÉDAGOGIQUE -->
<div class="fiche-card" id="ficheCard">
  <div class="fiche-title">📋 Fiche pédagogique — Début du nom de fichier</div>
  <div class="fmt" id="fmtDisplay"></div>
  <button class="copy-fmt-btn" id="copyFmtBtn">⎘ Copier le début du nom</button>
  <div class="info-box">
    <strong>Comment retrouver la fiche ?</strong><br>
    Le nom des fiches suit toujours ce format :<br><br>
    <span style="font-family:monospace;font-size:12px;">
      <span style="background:#ffd700;color:#222;padding:2px 5px;border-radius:3px;">MARQUE</span>-<span
      style="background:#00c0a0;color:#fff;padding:2px 5px;border-radius:3px;">CODE DOMMAGE</span>-<span
      style="background:#dce4f0;color:#556;padding:2px 5px;border-radius:3px;">MODELE-MOTEUR-AVARIE-CODE RÉP.-EMPLACEMENT-TPI-N°BOITE</span>
    </span>
    <br><br>Copiez le début du nom puis cherchez sur GBS Garantie en triant par nom.
    <br><a href="https://www.gbs-garantie.fr/worksheets" target="_blank" class="gbs-btn">🔗 Ouvrir GBS Garantie</a>
  </div>
</div>
</main>

<div class="toast" id="toast"></div>

<script src="data.js"></script>
<script>
// ── Helpers ───────────────────────────────────────────────────────────────────
function norm(s){ return String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""); }
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function hl(text, q){
  if(!q) return esc(text);
  const nt=norm(text), nq=norm(q);
  let r="", i=0;
  while(i < text.length){
    const idx = nt.indexOf(nq, i);
    if(idx < 0){ r += esc(text.slice(i)); break; }
    r += esc(text.slice(i, idx)) + "<mark>" + esc(text.slice(idx, idx+q.length)) + "</mark>";
    i = idx + q.length;
  }
  return r;
}

// ── Catégories pills ──────────────────────────────────────────────────────────
const CAT_META = {
  'Ensemble motopropulseur':          {ico:'⚙️', short:'Motopropulseur'},
  'Transmission':                     {ico:'🔧', short:'Transmission'},
  'Trains roulants':                  {ico:'🛞', short:'Trains roulants'},
  'Carrosserie':                      {ico:'🚗', short:'Carrosserie'},
  'Chauffage-Ventilation-Climatiseur':{ico:'❄️', short:'Chauffage / Clim'},
  'Equipement electrique':            {ico:'⚡', short:'Équip. électrique'},
};

const allCats = [...new Set(DOMMAGES.map(r=>r.Categorie))];
const catPillsEl = document.getElementById("catPills");
allCats.forEach(cat => {
  const m = CAT_META[cat] || {ico:"•", short:cat};
  const btn = document.createElement("button");
  btn.className = "pill";
  btn.dataset.val = cat;
  btn.innerHTML = `<span>${m.ico}</span>${m.short}`;
  btn.onclick = () => togglePill("cat", cat);
  catPillsEl.appendChild(btn);
});

// ── État ──────────────────────────────────────────────────────────────────────
let selMarque = "", selCat = "", selLib = "", selCode = null, selRub = "", selCatResult = "";

// ── Pills toggle ──────────────────────────────────────────────────────────────
document.querySelectorAll("#marquePills .pill").forEach(btn => {
  btn.onclick = () => togglePill("marque", btn.dataset.val);
});

function togglePill(type, val){
  const groupId = type === "marque" ? "#marquePills" : "#catPills";
  const current = type === "marque" ? selMarque : selCat;
  document.querySelectorAll(groupId + " .pill").forEach(p => p.classList.remove("active"));
  if(current === val){
    if(type === "marque") selMarque = "";
    else selCat = "";
  } else {
    document.querySelector(`${groupId} .pill[data-val="${CSS.escape(val)}"]`).classList.add("active");
    if(type === "marque"){ selMarque = val; updateFiche(); }
    else selCat = val;
  }
}

// ── Fermer dropdown si clic ailleurs ─────────────────────────────────────────
document.addEventListener("click", e => {
  if(!e.target.closest(".ss-wrap")){
    document.getElementById("lib-wrap").classList.remove("open");
  }
});

// ── Ouvrir dropdown ───────────────────────────────────────────────────────────
function openDrop(){
  const wrap = document.getElementById("lib-wrap");
  const wasOpen = wrap.classList.contains("open");
  if(wasOpen){ wrap.classList.remove("open"); return; }
  wrap.classList.add("open");
  const search = document.getElementById("lib-search");
  search.value = "";
  setTimeout(() => search.focus(), 30);
  buildOpts("");
}

function filterDrop(){
  buildOpts(document.getElementById("lib-search").value);
}

// ── Construire les options (filtre sur Libelle uniquement) ────────────────────
function buildOpts(q){
  const opts  = document.getElementById("lib-opts");
  const count = document.getElementById("lib-count");
  const nq    = norm(q);

  // Filtre par catégorie si sélectionnée
  let pool = selCat ? DOMMAGES.filter(r => r.Categorie === selCat) : DOMMAGES;

  // Filtre par libellé (recherche uniquement sur Libelle)
  let list = nq.length >= 1 ? pool.filter(r => norm(r.Libelle).includes(nq)) : pool;

  // Dédoublonner sur Libelle (garder premier)
  const seen = new Set();
  const unique = [];
  list.forEach(r => {
    if(!seen.has(r.Libelle)){ seen.add(r.Libelle); unique.push(r); }
  });

  const total = unique.length;
  count.textContent = total + " désignation" + (total !== 1 ? "s" : "");

  if(total === 0){
    opts.innerHTML = '<div class="ss-no-result">Aucune désignation trouvée pour ce libellé.</div>';
    return;
  }

  opts.innerHTML = unique.slice(0, 80).map(r => `
    <div class="ss-opt" onclick="selectLib(${r.Dommage}, ${JSON.stringify(r.Libelle)}, ${JSON.stringify(r.Rubrique)}, ${JSON.stringify(r.Categorie)})">
      <span class="opt-code">${r.Dommage}</span>
      <span class="opt-label">
        <div>${hl(r.Libelle, q)}</div>
        <div class="opt-rub">${esc(r.Rubrique)}</div>
      </span>
    </div>
  `).join("") + (total > 80 ? `<div class="ss-no-result" style="color:#aaa;">… et ${total-80} autres — affinez votre recherche</div>` : "");
}

// ── Sélection désignation ─────────────────────────────────────────────────────
function selectLib(code, libelle, rubrique, categorie){
  selLib  = libelle;
  selCode = code;
  selRub  = rubrique;
  selCatResult = categorie;

  const inp = document.getElementById("lib-input");
  inp.value = libelle;
  inp.classList.add("selected");
  document.getElementById("lib-wrap").classList.remove("open");
  document.getElementById("lib-clear").classList.add("on");

  // Auto-highlight catégorie si pas encore sélectionnée
  if(!selCat){
    document.querySelectorAll("#catPills .pill").forEach(p => {
      p.classList.toggle("active", p.dataset.val === categorie);
    });
  }

  showCode();
}

function clearLib(){
  selLib = ""; selCode = null; selRub = ""; selCatResult = "";
  const inp = document.getElementById("lib-input");
  inp.value = ""; inp.classList.remove("selected");
  document.getElementById("lib-clear").classList.remove("on");
  document.getElementById("codeBox").classList.remove("show");
  document.getElementById("codeIdle").style.display = "";
  document.getElementById("ficheCard").classList.remove("show");
}

// ── Afficher le code ──────────────────────────────────────────────────────────
function showCode(){
  document.getElementById("codeIdle").style.display = "none";
  document.getElementById("cbCode").textContent = selCode;
  document.getElementById("cbLib").textContent   = selLib;
  document.getElementById("cbRub").textContent   = selRub;
  document.getElementById("cbCat").textContent   = selCatResult;
  document.getElementById("codeBox").classList.add("show");
  document.getElementById("cbCopy").textContent = "⎘ Copier";
  document.getElementById("cbCopy").classList.remove("ok");
  updateFiche();
  setTimeout(() => document.getElementById("ficheCard").scrollIntoView({behavior:"smooth",block:"nearest"}), 100);
}

function copyCode(){
  navigator.clipboard.writeText(String(selCode)).then(() => {
    document.getElementById("cbCopy").textContent = "✓ Copié !";
    document.getElementById("cbCopy").classList.add("ok");
    showToast("✓ Code " + selCode + " copié !");
    setTimeout(() => {
      document.getElementById("cbCopy").textContent = "⎘ Copier";
      document.getElementById("cbCopy").classList.remove("ok");
    }, 2000);
  });
}

// ── Fiche pédagogique ─────────────────────────────────────────────────────────
function updateFiche(){
  const fc = document.getElementById("ficheCard");
  if(!selCode){ fc.classList.remove("show"); return; }
  fc.classList.add("show");
  const m = selMarque || "???";
  const c = selCode;
  const prefix = m + "-" + c + "-";
  document.getElementById("fmtDisplay").innerHTML =
    `<span class="fs fs-m">${esc(m)}</span>` +
    `<span class="fs fs-d">-</span>` +
    `<span class="fs fs-c">${esc(String(c))}</span>` +
    `<span class="fs fs-d">-</span>` +
    `<span class="fs fs-r">MODELE — MOTEUR — AVARIE — CODE RÉP. — EMPLACEMENT — TPI — N°BOITE</span>`;
  const cb = document.getElementById("copyFmtBtn");
  cb.innerHTML = "⎘ Copier le début du nom";
  cb.classList.remove("ok");
  cb.onclick = () => {
    navigator.clipboard.writeText(prefix).then(() => {
      cb.textContent = "✓ Copié !"; cb.classList.add("ok");
      showToast("✓ Copié : " + prefix);
      setTimeout(() => { cb.innerHTML = "⎘ Copier le début du nom"; cb.classList.remove("ok"); }, 2000);
    });
  };
}

// ── Reset ─────────────────────────────────────────────────────────────────────
document.getElementById("resetBtn").addEventListener("click", () => {
  selMarque = ""; selCat = "";
  document.querySelectorAll(".pill.active").forEach(p => p.classList.remove("active"));
  clearLib();
});

// ── Toast ─────────────────────────────────────────────────────────────────────
const toastEl = document.getElementById("toast");
function showToast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2500);
}
</script>
</body>
</html>
