/* ============================================================
   ✏️  EDIT YOUR DETAILS HERE — everything on the page comes
   from this object. Content comes from your CV and LinkedIn.
   ============================================================ */
const ME = {
  name: "Aneeb Afzal",
  handle: "aneeb",
  status: "SecOps Engineer @ LiverX",
  roles: ["SecOps Engineer", "SOC Operations Specialist", "Threat Hunter", "Incident Responder", "SIEM Engineer"],
  tagline: "I build the pipelines that feed the SOC, hunt for what the alerts miss, and help enterprises run security operations on Google Cloud.",
  email: "aneebafzal30@gmail.com",
  cv: "",                            // ← link to a public CV PDF, e.g. "cv.pdf"
  location: "Doha, Qatar",

  about: [
    "I'm a <strong>cybersecurity professional</strong> based in Doha with <strong>5+ years</strong> across security operations, working with financial, law enforcement, power and government organizations. My background spans SecOps, cloud security, threat hunting, incident response, SIEM engineering and SOC leadership.",
    "Today I engineer <strong>Google SecOps</strong> at LiverX: building log ingestion pipelines, hunting with YARA-L and Google Threat Intelligence, and hardening GCP. Before that I worked my way from L1 to L2 SOC analyst at Barikat Cyber Security, and led a 24/7 SOC at Rewterz. I also enjoy mentoring and training the next generation of analysts.",
  ],
  stats: [
    { n: 5,  s: "+", l: "Years in security" },
    { n: 11, s: "",  l: "Certifications" },
    { n: 20, s: "%", l: "Fewer false positives" },
    { n: 4,  s: "",  l: "Sectors protected" },
  ],

  skills: [
    { ico: "📊", cat: "SIEM & SOAR", items: ["Google SecOps (Chronicle)", "LogRhythm administration", "IBM QRadar · Splunk · Elastic", "Microsoft Sentinel", "Cortex XSOAR · SIRP SOAR"] },
    { ico: "☁️", cat: "Cloud security", items: ["GCP Security Command Center", "GCP IAM & service-account governance", "CIS GCP Benchmarks", "Bindplane log collection", "Log ingestion & parsing"] },
    { ico: "🎯", cat: "Threat hunting & intel", items: ["MITRE ATT&CK · Cyber Kill Chain", "YARA-L rules & UDM queries", "APT detection", "Google Threat Intelligence", "CTM360 · StrikeReady"] },
    { ico: "🛡️", cat: "EDR & incident response", items: ["CrowdStrike", "Microsoft Defender ATP", "Trend Micro Vision One", "FireEye HX", "Velociraptor · Binalyze"] },
  ],
  tools: ["Palo Alto", "Fortinet", "Sophos", "Cisco Firepower", "F5 BIG-IP", "Nessus", "Nexpose", "Burp Suite", "Trend Micro Apex Central", "Cisco AMP", "Symantec", "IDS/IPS", "SOAR automation", "SOC leadership", "Mentoring & training"],

  // kind: "blue" (detection) | "tool" (engineering) | "red" (leadership)
  projects: [
    { emoji: "🔌", kind: "tool", title: "Google SecOps log ingestion", desc: "Architected end-to-end ingestion into Google SecOps (Chronicle) covering Cloud Audit, DNS, VPC Flow, Windows Event, Linux Syslog and on-prem sources, with custom schemas, parsers and feeds to normalize everything.", stack: ["Google SecOps", "Bindplane", "Parsers"], code: "", demo: "" },
    { emoji: "🎯", kind: "blue", title: "Threat hunting with YARA-L", desc: "Structured hunts in Google SecOps using YARA-L rules and UDM queries, backed by Google Threat Intelligence, producing intel reports and IOC packages that feed detection rules.", stack: ["YARA-L", "UDM", "GTI"], code: "", demo: "" },
    { emoji: "🧱", kind: "blue", title: "GCP hardening & IAM governance", desc: "Triaged and remediated misconfigurations and CVEs from Security Command Center, hardened workloads against CIS GCP Benchmarks and enforced least-privilege IAM with periodic access reviews.", stack: ["GCP SCC", "IAM", "CIS"], code: "", demo: "" },
    { emoji: "🏗️", kind: "tool", title: "LogRhythm migration & DR failover", desc: "Migrated log sources between collectors and appliances to a new data center with zero disruption to monitoring, and personally executed the primary-to-DR failover with zero downtime.", stack: ["LogRhythm", "DR", "SIEM"], code: "", demo: "" },
    { emoji: "📉", kind: "blue", title: "Detection tuning: −20% false positives", desc: "Developed and fine-tuned SIEM detection rules and use cases aligned with MITRE ATT&CK, cutting false positives by 20% and making incident response faster.", stack: ["MITRE ATT&CK", "Use cases", "SIEM"], code: "", demo: "" },
    { emoji: "🤖", kind: "tool", title: "SOAR playbooks & automation", desc: "Designed SOAR playbooks and automation workflows across two SOCs to streamline triage and reduce mean-time-to-respond (MTTR).", stack: ["Cortex XSOAR", "SIRP", "Automation"], code: "", demo: "" },
    { emoji: "🧭", kind: "red", title: "Leading a 24/7 SOC", desc: "Led and managed a round-the-clock Security Operations Centre at Rewterz, defining scope, workflows, KPIs and SOPs, and later ran SOC roster management at Barikat.", stack: ["SOC leadership", "KPIs", "SOPs"], code: "", demo: "" },
    { emoji: "🎓", kind: "red", title: "Analyst training programs", desc: "Designed and delivered structured training for junior analysts and interns in cloud security, SIEM operations and threat intelligence workflows.", stack: ["Mentoring", "Enablement"], code: "", demo: "" },
  ],

  certs: [
    { short: "PSOE", name: "Professional Security Operations Engineer", by: "Google Cloud · 2026", done: true },
    { short: "CySA+", name: "Cybersecurity Analyst (CySA+)", by: "CompTIA · 2024", done: true },
    { short: "ECIH", name: "Certified Incident Handler", by: "EC-Council · 2023", done: true },
    { short: "SC-200", name: "Security Operations Analyst Associate", by: "Microsoft · 2023", done: true },
    { short: "CEH", name: "Certified Ethical Hacker", by: "EC-Council · 2021", done: true },
    { short: "CP4S", name: "Cloud Pak for Security Analyst", by: "IBM · 2022", done: true },
    { short: "MAL", name: "Malware Analysis & Assembly", by: "IBM · 2023", done: true },
    { short: "CTI", name: "Threat Intelligence Lifecycle", by: "IBM · 2023", done: true },
    { short: "ISO", name: "ISO 27001 Foundation", by: "SkillFront · 2022", done: true },
    { short: "RANS", name: "Ransomware: Identify to Recover", by: "ISC2 · 2021", done: true },
    { short: "NSE 2", name: "Network Security Associate", by: "Fortinet", done: true },
  ],

  timeline: [
    { when: "Mar 2026 — Present", title: "SecOps Engineer", where: "LiverX · Doha, Qatar", pts: ["Built Google SecOps ingestion pipelines for cloud, endpoint and on-prem sources, with custom parsers and feeds", "Deployed Bindplane as a centralized collector for hybrid and multi-cloud telemetry", "Hardened GCP against CIS Benchmarks and governed IAM with least-privilege access reviews", "Threat hunting with YARA-L, UDM and Google Threat Intelligence; delivered intel reports and IOC packages", "Security advisory, onboarding and analyst training for enterprise clients"] },
    { when: "Sep 2024 — Apr 2026", title: "SOC Analyst L2", where: "Barikat Cyber Security · Doha, Qatar", pts: ["APT-focused threat hunts using MITRE ATT&CK, Cyber Kill Chain and UBA", "Tuned detection rules and use cases, cutting false positives by 20%", "Migrated LogRhythm log sources to a new data center and executed DR failover with zero downtime", "Led SOC roster management for 24/7 coverage and built SOAR playbooks to improve MTTR"] },
    { when: "May 2023 — Aug 2024", title: "SOC Analyst L1", where: "Barikat Cyber Security · Doha, Qatar", pts: ["Monitored IDS/IPS and security tooling, escalating events for advanced investigation", "Recommended MITRE ATT&CK-aligned SIEM optimizations to reduce false positives", "Wrote processes and procedures for the SIEM and SOC team while meeting client SLAs"] },
    { when: "Nov 2022 — May 2023", title: "Senior Information Security Analyst", where: "Rewterz · Karachi, Pakistan", pts: ["Led and managed a 24/7 SOC, defining scope, workflows, KPIs and SOPs", "Root cause analysis across SIEM and EDR (Microsoft Defender ATP, Trend Micro)", "Built SOAR playbooks, custom use cases and dashboards; owned threat intel ingestion", "Trained and mentored the team"] },
    { when: "Dec 2020 — Nov 2022", title: "Information Security Analyst", where: "Rewterz · Karachi, Pakistan", pts: ["Incident handling and reporting on SOAR platforms across the IR lifecycle", "Investigated phishing emails, domains and IPs; monitored firewall traffic", "Built MTTD / MTTR / MTTM metrics reports and executive dashboards"] },
    { when: "2017 — 2021", title: "BS, Software Engineering", where: "Sir Syed University of Engineering & Technology · Karachi", pts: [] },
  ],

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/aneebafzal" },
  ],
};
/* ======================= end of edit area ======================= */

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
// only allow https:, mailto: and relative links (blocks javascript:, data:, etc.)
const safeUrl = u => /^(https:\/\/|mailto:|#|\.?\/|[\w-]+\.(pdf|html)$)/i.test(String(u).trim()) ? esc(u) : "#";

/* ---------- render ---------- */
document.title = `${ME.name} — Cyber Security`;
$("#logoName").textContent = ME.handle;
$("#heroName").textContent = ME.name.split(" ")[0];
$("#heroName").dataset.text = ME.name.split(" ")[0];
$("#status").textContent = ME.status;
$("#tagline").textContent = ME.tagline;
$("#aboutText").innerHTML = ME.about.map(p => `<p>${p}</p>`).join("");
$("#stats").innerHTML = ME.stats.map(s => `<div class="card stat"><div class="n" data-n="${s.n}" data-s="${esc(s.s)}">0</div><div class="l">${esc(s.l)}</div></div>`).join("");
$("#skillsGrid").innerHTML = ME.skills.map(c => `
  <div class="card skill-cat reveal"><h3><span class="ico">${c.ico}</span>${esc(c.cat)}</h3>
  <ul class="skill-list">${c.items.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
  </div>`).join("");
$("#tools").innerHTML = ME.tools.map(t => `<span class="chip">${esc(t)}</span>`).join("");
const kindLabel = { red: "leadership", blue: "detection", tool: "engineering" };
$("#projGrid").innerHTML = ME.projects.map(p => `
  <article class="card proj reveal" data-k="${p.kind}">
    <div class="top"><span class="emoji">${p.emoji}</span><span class="kind ${p.kind}">${kindLabel[p.kind]}</span></div>
    <h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
    <div class="stack">${p.stack.map(s => `<span>#${esc(s)}</span>`).join("")}</div>
    <div class="plinks">${p.code ? `<a href="${safeUrl(p.code)}" target="_blank" rel="noopener noreferrer">&lt;/&gt; code</a>` : ""}${p.demo ? `<a href="${safeUrl(p.demo)}" target="_blank" rel="noopener noreferrer">↗ view</a>` : ""}</div>
  </article>`).join("");
$("#certGrid").innerHTML = ME.certs.map(c => `
  <div class="card cert reveal ${c.done ? "" : "pending"}"><div class="badge">${esc(c.short)}</div><h4>${esc(c.name)}</h4><small>${esc(c.by)}</small></div>`).join("");
$("#timeline").innerHTML = ME.timeline.map(t => `
  <div class="card tl reveal"><div class="when">${esc(t.when)}</div><h3>${esc(t.title)}</h3><div class="where">${esc(t.where)}</div>
  ${t.pts.length ? `<ul>${t.pts.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}</div>`).join("");
$("#socials").innerHTML = ME.socials.map(s => `<a href="${safeUrl(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)} ↗</a>`).join("");
$("#foot").textContent = `© ${new Date().getFullYear()} ${ME.name} · built with caffeine & curiosity · stay patched`;
if (ME.cv) { $("#cvBtn").setAttribute("href", safeUrl(ME.cv)); $("#cvBtn").download = ""; } else { $("#cvBtn").remove(); }

/* ---------- toast ---------- */
let tt;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 2200); }
$("#emailBtn").onclick = async () => {
  try { await navigator.clipboard.writeText(ME.email); toast(`✓ copied ${ME.email}`); }
  catch { location.href = `mailto:${ME.email}`; }
};

/* ---------- theme & menu ---------- */
const root = document.documentElement;
function setTheme(t) { root.dataset.theme = t; $("#themeBtn").textContent = t === "light" ? "☾" : "☀"; try { localStorage.setItem("theme", t); } catch {} }
let saved = null; try { saved = localStorage.getItem("theme"); } catch {}
setTheme(saved || "dark");
$("#themeBtn").onclick = () => setTheme(root.dataset.theme === "light" ? "dark" : "light");
$("#menuBtn").onclick = () => $("#links").classList.toggle("open");
document.querySelectorAll("#links a").forEach(a => a.onclick = () => $("#links").classList.remove("open"));

/* ---------- typing effect ---------- */
(function type() {
  const el = $("#typed"); let r = 0, i = 0, del = false;
  (function tick() {
    const word = ME.roles[r];
    el.textContent = word.slice(0, i);
    if (!del && i === word.length) { del = true; return setTimeout(tick, 1600); }
    if (del && i === 0) { del = false; r = (r + 1) % ME.roles.length; }
    i += del ? -1 : 1;
    setTimeout(tick, del ? 35 : 75);
  })();
})();

/* ---------- scroll reveal, bars, counters ---------- */
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target;
  el.classList.add("in");
  el.querySelectorAll(".fill").forEach(f => f.style.width = f.dataset.w + "%");
  el.querySelectorAll("[data-n]").forEach(n => {
    const target = +n.dataset.n, start = performance.now();
    (function step(t) {
      const k = Math.min(1, (t - start) / 1400), v = Math.round(target * (1 - Math.pow(1 - k, 3)));
      n.textContent = v + n.dataset.s;
      if (k < 1) requestAnimationFrame(step);
    })(start);
  });
  io.unobserve(el);
}), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- project filters ---------- */
$("#filters").onclick = e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.classList.toggle("on", x === b));
  document.querySelectorAll(".proj").forEach(p => p.classList.toggle("hide", b.dataset.f !== "all" && p.dataset.k !== b.dataset.f));
};

/* ---------- 3D tilt on project cards ---------- */
if (matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".proj").forEach(c => {
    c.addEventListener("mousemove", e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      c.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    });
    c.addEventListener("mouseleave", () => c.style.transform = "");
  });
}

/* ---------- network background ---------- */
(function net() {
  const cv = $("#net"), ctx = cv.getContext("2d");
  let W, H, pts = [], mouse = { x: -999, y: -999 };
  function size() {
    W = cv.width = document.documentElement.clientWidth; H = cv.height = innerHeight;
    const n = Math.min(90, Math.floor(W * H / 16000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4 }));
  }
  addEventListener("resize", size); size();
  addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function draw() {
    const col = getComputedStyle(root).getPropertyValue("--green").trim();
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      if (!reduce) { p.x += p.vx; p.y += p.vy; }
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (dm < 140) { p.x += (p.x - mouse.x) / dm; p.y += (p.y - mouse.y) / dm; }
    }
    ctx.strokeStyle = col; ctx.fillStyle = col;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 130) { ctx.globalAlpha = (1 - d / 130) * .25; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
      }
      ctx.globalAlpha = .6; ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, 1.6, 0, 7); ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ---------- interactive terminal ---------- */
(function terminal() {
  const out = $("#termOut"), inp = $("#termIn"), body = $("#termBody");
  const host = `${ME.handle}@sec-lab`;
  $("#prompt").textContent = `${host}:~$`;
  $("#termTitle").textContent = `${host} — bash`;
  const hist = []; let hi = 0;
  const line = (html, cls = "") => { const d = document.createElement("div"); d.className = "ln " + cls; d.innerHTML = html; out.appendChild(d); body.scrollTop = body.scrollHeight; };
  const cmds = {
    help: () => line(`<span class="c">available commands:</span>
  whoami       who is this
  skills       list skill areas
  projects     list key work
  experience   career history
  certs        list certifications
  contact      how to reach me
  nmap         scan this portfolio
  sudo         try it
  theme        toggle light/dark
  clear        clear the screen`),
    whoami: () => line(`${esc(ME.name)} — ${esc(ME.roles[0])}\n<span class="m">${esc(ME.location)}</span>`),
    skills: () => ME.skills.forEach(s => line(`<span class="c">[${esc(s.cat)}]</span> ${s.items.map(esc).join(", ")}`)),
    projects: () => ME.projects.forEach((p, i) => line(`<span class="p">${String(i + 1).padStart(2, "0")}</span> ${esc(p.title)} <span class="m">(${kindLabel[p.kind]})</span>`)),
    certs: () => ME.certs.forEach(c => line(`${c.done ? '<span class="p">✔</span>' : '<span class="e">…</span>'} ${esc(c.name)} <span class="m">${esc(c.by)}</span>`)),
    contact: () => { line(`email: <span class="c">${esc(ME.email)}</span>`); ME.socials.forEach(s => line(`${esc(s.label.toLowerCase())}: <span class="c">${esc(s.url)}</span>`)); },
    nmap: async () => {
      line(`<span class="m">Starting Nmap 7.95 against ${ME.handle}.portfolio ...</span>`);
      const ports = [["22/tcp", "open", "ssh-into-my-brain"], ["80/tcp", "open", "http-curiosity"], ["443/tcp", "open", "https-hire-me"], ["1337/tcp", "open", "elite-skills"], ["3389/tcp", "filtered", "rdp-nice-try"]];
      for (const [p, s, n] of ports) { await new Promise(r => setTimeout(r, 280)); line(`${p.padEnd(10)}<span class="${s === "open" ? "p" : "e"}">${s.padEnd(10)}</span>${n}`); }
      line(`<span class="m">Nmap done: 1 host up — recommendation: contact immediately.</span>`);
    },
    experience: () => ME.timeline.forEach(t => line(`<span class="p">${esc(t.when)}</span> ${esc(t.title)} <span class="m">@ ${esc(t.where)}</span>`)),
    sudo: () => line(`<span class="e">${esc(ME.handle)} is not in the sudoers file. This incident will be reported. 🚨</span>`),
    theme: () => { $("#themeBtn").click(); line("theme toggled"); },
    clear: () => out.innerHTML = "",
    ls: () => line("about.txt  skills/  projects/  certs/  secrets.txt"),
    "cat secrets.txt": () => line(`<span class="e">Permission denied.</span> <span class="m">nice try though 😉</span>`),
    "rm -rf /": () => line(`<span class="e">blocked by EDR.</span> <span class="m">we see you.</span>`),
  };
  line(`<span class="p">Welcome to ${esc(ME.name)}'s security lab.</span> Type <span class="c">help</span> to begin.`);
  inp.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") { if (hi > 0) inp.value = hist[--hi]; e.preventDefault(); return; }
    if (e.key === "ArrowDown") { inp.value = hi < hist.length - 1 ? hist[++hi] : (hi = hist.length, ""); e.preventDefault(); return; }
    if (e.key !== "Enter") return;
    const v = inp.value.trim(); inp.value = "";
    line(`<span class="p">${host}:~$</span> ${esc(v)}`);
    if (!v) return;
    hist.push(v); hi = hist.length;
    const fn = cmds[v.toLowerCase()];
    fn ? fn() : line(`<span class="e">command not found:</span> ${esc(v)} <span class="m">— try 'help'</span>`);
  });
  body.addEventListener("click", () => inp.focus({ preventScroll: true }));
})();
