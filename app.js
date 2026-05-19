// ============ DATA ============
const BRANDS = [
  {
    id:'invisalign', name:'Invisalign', initials:'IN', color:'#0ea5e9',
    parent:'Align Technology', site:'invisalign.co.uk',
    summary:'The only aligner brand with mass UK consumer recognition. The demand-capture engine of the category.',
    tags:[{label:'Demand: Very High', cls:'good'}, {label:'In-practice', cls:''}, {label:'Partner', cls:''}],
    positioning:'Patient education content, large doctor-finder network, and a multi-tier provider grading system (Bronze → Silver → Gold → Platinum → Diamond) that creates procurement-style competition between dentists.',
    treatment:'In-practice, dentist-led. Patient consultations and intraoral scans happen at certified provider clinics. Some providers integrate Dental Monitoring for remote progress checks. The brand does not sell direct to consumers.',
    pricing:['Typical range: <b>£2,500–£5,500</b>', 'Average: £3,500–£4,000', 'Invisalign i7 (minor): £1,200–£2,000', 'London average: £3,000–£5,500', 'Birmingham (lowest UK city): ~£2,004 vs London £2,771', 'Finance: typically "from £52/month" at provider clinics'],
    network:'<b>MiSmile Network</b> is the largest UK Invisalign provider group — members have collectively delivered 100,000+ cases. <b>Treeline is a member.</b> Provider tiers create a clear marketing hierarchy on the official locator.',
    trust:'Invisalign UK Trustpilot page has 127 reviews — small relative to brand size because most patient reviews flow to individual provider clinics. Complaint themes: tray fitting / remake delays; shipping delays of 1–2 weeks pushing total treatment by 1–2 months; difficulty contacting Align directly.',
    strategic:'<b>Invisalign is the demand-capture engine.</b> The strategic question is not "should we offer it" but "how do we win the local Invisalign search query and convert it under our own clinical brand." Treeline\'s MiSmile membership is a real asset — credentialing and case-volume credibility smaller competitors cannot match.'
  },
  {
    id:'spark', name:'Spark Aligners', initials:'SP', color:'#7c3aed',
    parent:'Ormco (Envista group)', site:'ormco.uk/spark',
    summary:'Clinician-channel brand positioned on material science. Patients rarely ask for it by name.',
    tags:[{label:'Demand: Very Low', cls:''}, {label:'In-practice', cls:''}, {label:'Clinical option', cls:''}],
    positioning:'TruGEN / TruGEN XR proprietary plastic. Ormco claim "19% better contact surface area than the leading aligner brand" with greater sustained force retention. Polished scalloped tray edges marketed for patient comfort.',
    treatment:'In-practice only. Treatment planning runs through proprietary Spark Approver Software, giving clinicians more direct case control than the Invisalign workflow.',
    pricing:['Not publicly disclosed by brand. Set entirely at clinic level.', 'Spark cases at UK provider clinics generally price comparably to Invisalign.'],
    network:'Active UK presence via Ormco UK. Notable East Midlands user: <b>East Midlands Orthodontics (Nottingham)</b> offers Spark alongside Invisalign and Damon clear braces.',
    trust:'Limited UK public data. Not a consumer-facing brand.',
    strategic:'<b>Clinical-differentiation tool, not a consumer brand.</b> Useful in messaging as "we choose the right aligner for the case" or "for complex cases we use Spark." Not a competitive threat in its own right.'
  },
  {
    id:'clearcorrect', name:'ClearCorrect', initials:'CC', color:'#0891b2',
    parent:'Straumann Group', site:'straumann.com/clearcorrect/gb',
    summary:'Workflow-integration play within the Straumann ecosystem. Strong on operational story, invisible to consumers.',
    tags:[{label:'Demand: Very Low', cls:''}, {label:'In-practice', cls:''}, {label:'Workflow option', cls:''}],
    positioning:'Acquired by Straumann Group in 2017. Positioned around ClearQuartz trilayer plastic — elastomeric inner between two resilient outer shells. Manufacturer claim: "retains 10x more of its initial force than other aligners." Strong emphasis on integrated digital workflow within Straumann ecosystem (scanning, implant planning, lab).',
    treatment:'In-practice. UK-based clinical support team. Strong focus on dental professional training (ClearCorrect Level 1 Accreditation Course is a notable UK programme).',
    pricing:['Not disclosed publicly. Provider-set.'],
    network:'Available through the Straumann UK distribution network. Patient-facing brand recognition is minimal.',
    trust:'Limited UK public data. Not a consumer-facing brand.',
    strategic:'<b>Operational-story brand.</b> For multi-site groups already invested in Straumann scanners and implant systems, ClearCorrect offers workflow integration benefits. From a consumer-marketing point of view, invisible. Track as a procurement option, not a competitor.'
  },
  {
    id:'angel', name:'Angel Aligner', initials:'AA', color:'#ea580c',
    parent:'Angelalign Technology', site:'angelaligner.com/en-gb',
    summary:'Fastest-growing major aligner brand globally. Most likely to become the next consumer-named UK brand.',
    tags:[{label:'Demand: Rising', cls:'warn'}, {label:'In-practice', cls:''}, {label:'2–3 yr watch', cls:'warn'}],
    positioning:'Founded 2003. Claims 20-year track record across child, teen and adult cases. UK marketing leans into the "7+3" dual aligner system — flexible aligner for 7 days (continuous gentle force), then firmer aligner for 3 days (precise pressure) per stage. Marketed as faster and more efficient than single-tray systems.',
    treatment:'In-practice, orthodontist-led. Strong UK clinical-channel growth in 2024–2026.',
    pricing:['Not disclosed publicly. Provider-set.'],
    network:'Manchester (BeClear Ortho), Colchester (Colchester Orthodontic Centre), London (Origin — Marylebone, Mill Hill), Farnham, Newcastle/Northumberland (NEO Orthodontics), Leicester, Birmingham/Solihull.',
    trust:'Parent company Angelalign reported <b>359,400 cases in 2024, up 46.7% YoY</b> — fastest-growing major aligner brand globally. Align Technology grew Q1 2025 cases just 6.2% YoY for comparison.',
    strategic:'<b>The brand most likely to gain real UK consumer recognition over the next 2–3 years.</b> Currently still clinician-led adoption, but the parent has the budget and trajectory to push consumer awareness. Quarterly review recommended.'
  },
  {
    id:'impress', name:'Impress', initials:'IM', color:'#ec4899',
    parent:'smile2impress.com', site:'smile2impress.com/uk',
    summary:'The only true national consumer-facing clinic chain. Direct competitor for clinic-led groups.',
    tags:[{label:'Demand: Moderate, rising', cls:'warn'}, {label:'Hybrid (clinic + app)', cls:''}, {label:'Direct competitor', cls:'bad'}],
    positioning:'Recent repositioning to "Europe\'s N°1 Invisalign® provider" — Impress has pivoted from selling its own aligner brand to operating as a multi-clinic Invisalign delivery group. Significant change from earlier "Impress aligners" positioning.',
    treatment:'Hybrid. Free in-clinic consultation (3D scan, GDC-registered dentist diagnosis), then a mix of in-clinic check-ups and Impress App-based remote monitoring during active treatment. Final fitting in-clinic.',
    pricing:['<b>Impress Light</b>: £1,850 one-time / £51.34 monthly', '<b>Impress Moderate</b>: £2,890 / £80.20 monthly', '<b>Impress Complex</b>: £3,890 / £107.95 monthly', 'Homepage headline: "as little as £55.22/month" (60-month plan)', '"Best Invisalign® price guaranteed"', 'All-inclusive — no extra charges for visits or refinements'],
    network:'8 UK clinics: Birmingham · Bristol · Cardiff · Leeds · Liverpool · London · Manchester · Sheffield. <b>No East Midlands clinic — Sheffield is closest.</b>',
    trust:'~8,950 Trustpilot reviews — largest of any UK aligner provider. Mixed sentiment: <br>• <b>Complaints:</b> aligners arriving late (10 weeks vs promised 5–8); payments taken without delivery; refund disputes; communication breakdown after consultation; retainer fit issues; repeated scans. <br>• <b>Positives:</b> helpful in-clinic staff; clear initial consultation; visible progress for committed patients. <br>• Multiple reviews allege name changes and removal of negative reviews — unverified but recurring.',
    strategic:'<b>The single most important competitor for clinic-led groups to watch.</b> Aggressive paid acquisition, fixed-price packaging that beats most clinic pricing on entry tier, hybrid model lets them serve patients without a physical clinic. Vulnerability: service consistency — the complaint volume creates the exact opening for clinic-led "we are accountable, local and consistent" positioning.'
  }
];

const COMPLAINT_THEMES = [
  {text:'Tray fit and remake delays', severity:'High', bar:95},
  {text:'Shipping / manufacturing delays extending treatment 4–8 weeks', severity:'High', bar:88},
  {text:'Communication breakdown after payment', severity:'High', bar:85},
  {text:'Refund disputes after cancellation', severity:'High', bar:78},
  {text:'Retainer quality and fit issues', severity:'Medium', bar:65},
  {text:'Difficulty contacting brand directly', severity:'Medium', bar:58},
  {text:'Outcome falling short of marketing promises', severity:'Medium', bar:52}
];

const COMPETITORS = [
  {you:true, name:'Treeline Dental Care', badge:'YOU', locs:'Lincoln · Nottingham · Sheffield · Sleaford', systems:'Invisalign (MiSmile Network)', pos:'Full Invisalign range for adults, teens, children. Largest UK Invisalign network membership.'},
  {you:false, name:'East Midlands Orthodontics', locs:'Nottingham (Derby, Mansfield, Newark, Grantham, Leicester reach)', systems:'Invisalign, Spark, Damon', pos:'40+ years, family-owned, specialist orthodontist-led. Multi-system positioning.'},
  {you:false, name:'The Dental Suite', locs:'Nottingham, Leicester, Loughborough', systems:'Invisalign', pos:'4.7 Google review average. Multi-site cosmetic group.'},
  {you:false, name:'The Campbell Clinic', locs:'Nottingham', systems:'Invisalign', pos:'Digital planning emphasis. Boutique cosmetic positioning.'}
];

const OPPORTUNITIES = [
  {n:1, title:'Own the "Invisalign + [city]" search query', effort:'Low', time:'3–6 months SEO; immediate paid', timeFilter:'med', desc:'Dedicated landing pages for Invisalign Lincoln / Nottingham / Sheffield / Sleaford with local proof, finance calculator, MiSmile credentials.', why:'Highest-intent demand pool in the category. Local competitors are underweight on dedicated city pages.'},
  {n:2, title:'Publish "safer alternative" trust positioning', effort:'Low', time:'1–3 months', timeFilter:'fast', desc:'Written + video covering: GDC registration, in-person clinical exam, same dentist throughout, named complaint pathway, what to do if a remote provider fails (SmileDirectClub reference).', why:'Highest-leverage trust message in the category — currently under-used by clinic-led players.'},
  {n:3, title:'Aligners as gateway treatment', effort:'Medium', time:'6–12 months for measurable LTV', timeFilter:'slow', desc:'Structured consultation pathway mapping the full smile journey (alignment → whitening → bonding → veneers → implants → retainers). Track LTV per aligner case, not aligner revenue per case.', why:'BOS data shows pre-restorative motivation is a top-five driver. Largest under-exploited revenue lever.'},
  {n:4, title:'Match Impress on price transparency', effort:'Low', time:'Immediate on conversion rate', timeFilter:'fast', desc:'Publish "from" / typical case price tiers with finance examples. Does not require matching their prices — requires matching their clarity.', why:'Impress\'s £1,850 / £2,890 / £3,890 tiers set patient expectation. Pages without price disclosure increasingly drop out of consideration.'},
  {n:5, title:'Teen + parent campaign window', effort:'Medium', time:'6–12 months', timeFilter:'slow', desc:'School holiday timing, parent-facing education content, BOS 2023 protocol reference, "teen confidence" angle handled carefully.', why:'Fastest-growing UK segment, currently under-served by national brand marketing which still skews adult-aesthetic.'},
  {n:6, title:'Track Angel Aligner adoption', effort:'Low', time:'12–24 month horizon', timeFilter:'slow', desc:'Quarterly review of UK clinical adoption and consumer search volume. Decide whether to add it as a clinical option before it gains consumer pull.', why:'Fastest-growing aligner brand globally (+46.7% case volume 2024). Likely the next consumer-named brand after Invisalign.'}
];

// ============ PROVIDER DENSITY DATA ============
const DENSITY = [
  {city:'Sleaford', region:'East Midlands', providers:7, treeline:true, signal:'Near-monopoly opportunity', score:'★★★★★'},
  {city:'Lincoln', region:'East Midlands', providers:17, treeline:true, signal:'Strong defensible position', score:'★★★★☆'},
  {city:'Derby', region:'East Midlands', providers:41, treeline:false, signal:'Mid-density, no Treeline clinic', score:'★★★☆☆'},
  {city:'Nottingham', region:'East Midlands', providers:89, treeline:true, signal:'High-competition urban catchment', score:'★★☆☆☆'},
  {city:'Leicester', region:'East Midlands', providers:89, treeline:false, signal:'High-competition, no Treeline clinic', score:'★★☆☆☆'},
  {city:'Sheffield', region:'Yorkshire & Humber', providers:90, treeline:true, signal:'High-competition urban catchment', score:'★★☆☆☆'}
];

const DENSITY_NATIONAL = [
  {city:'Sleaford', region:'East Midlands', providers:7, signal:'Rural town — lowest competitive density'},
  {city:'Lincoln', region:'East Midlands', providers:17, signal:'Mid-size city, manageable competition'},
  {city:'Derby', region:'East Midlands', providers:41, signal:'Established urban catchment'},
  {city:'Nottingham', region:'East Midlands', providers:89, signal:'Major urban — high density'},
  {city:'Leicester', region:'East Midlands', providers:89, signal:'Major urban — high density'},
  {city:'Sheffield', region:'Yorkshire & Humber', providers:90, signal:'Major urban — high density'},
  {city:'London (all zones)', region:'Greater London', providers:'1,000+', signal:'Most concentrated UK market; split across 7 zones'},
  {city:'Manchester', region:'North West', providers:'200+', signal:'Top 3 UK Invisalign market'},
  {city:'Birmingham', region:'West Midlands', providers:'200+', signal:'Top 3 UK Invisalign market; lowest UK pricing'}
];

// ============ KEYWORD DATA ============
const KW_NATIONAL = [
  {kw:'Invisalign dentist near me', vol:'3,600', intent:'High — ready to book'},
  {kw:'Invisalign cost UK', vol:'2,500', intent:'High — price research stage'},
  {kw:'Invisalign before and after photos', vol:'1,800', intent:'Medium — consideration'},
  {kw:'Private orthodontist near me', vol:'1,600', intent:'High — adjacent intent'},
  {kw:'Invisalign consultation Birmingham', vol:'1,400', intent:'Very high — city + action'},
  {kw:'Invisalign Sheffield (related terms)', vol:'2,400', intent:'High — city-led'},
  {kw:'Invisalign Nottingham', vol:'1,240', intent:'Very high — verified Treeline catchment'},
  {kw:'Clear braces Nottingham', vol:'890', intent:'High — alternative consideration'},
  {kw:'Clear aligners (UK)', vol:'+66% growth', intent:'Generic, fast-growing'},
  {kw:'Invisalign (UK national)', vol:'+45% YoY', intent:'Brand demand growing'}
];

const KW_LOCAL = [
  {city:'Lincoln', kw:'"Invisalign Lincoln"', vol:'<b>500</b> <span style="color:var(--success);">GKP verified</span>', density:'17 providers', score:'<span style="color:var(--success); font-weight:600;">★★★★☆ Strong (caveat: may include Lincoln, NE)</span>'},
  {city:'Lincoln', kw:'"Clear aligners Lincoln"', vol:'<b>50</b> <span style="color:var(--success);">GKP verified</span>', density:'17 providers', score:'<span style="color:var(--warning);">★★★☆☆ Low generic intent</span>'},
  {city:'Nottingham', kw:'"Invisalign Nottingham"', vol:'<b>1,240</b> industry est.', density:'89 providers', score:'<span style="color:var(--warning); font-weight:600;">★★★☆☆ Competitive — brand premium</span>'},
  {city:'Nottingham', kw:'"Clear aligners Nottingham"', vol:'<b>50</b> <span style="color:var(--success);">GKP verified</span>', density:'89 providers', score:'<span style="color:var(--success);">★★★★☆ Low ad comp (26) — arbitrage</span>'},
  {city:'Nottingham', kw:'"Clear braces Nottingham"', vol:'<b>50</b> <span style="color:var(--success);">GKP verified</span>', density:'89 providers', score:'<span style="color:var(--success); font-weight:600;">★★★★★ Very low ad comp (11)</span>'},
  {city:'Sheffield', kw:'"Invisalign Sheffield" + variants', vol:'<b>2,400</b> industry est.', density:'90 providers', score:'<span style="color:var(--warning); font-weight:600;">★★★☆☆ Competitive</span>'},
  {city:'Sheffield', kw:'"Clear aligners Sheffield"', vol:'<span style="color:var(--muted);">No GKP data — re-pull needed</span>', density:'90 providers', score:'<span style="color:var(--muted);">TBC — add "Invisalign Sheffield" to next pull</span>'},
  {city:'Sleaford', kw:'"Clear aligners Sleaford"', vol:'<span style="color:var(--muted);">No GKP data (&lt;10/mo)</span>', density:'7 providers', score:'<span style="color:var(--muted);">Too low for paid search — win via local SEO only</span>'}
];

// ============ NAVIGATION ============
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-'+pageId).classList.add('active');
  document.querySelectorAll('.nav-item[data-page="'+pageId+'"]').forEach(n => n.classList.add('active'));
  const titles = {
    dashboard:'Dashboard', market:'Market Sizing', demand:'Demand & Demographics',
    brands:'Brand Profiles', density:'Provider Density', keywords:'Search Demand',
    regulation:'Regulatory Landscape', trust:'Trust & Complaints',
    competitive:'East Midlands Map', opportunities:'Opportunity Matrix',
    intelligence:'Ongoing Intel System', sources:'Sources & Method'
  };
  document.getElementById('crumbs').innerHTML = 'Intelligence Report / <span>'+titles[pageId]+'</span>';
  document.querySelector('.main').scrollTop = 0;
  if (pageId === 'market' && !window._chartDone) renderChart();
  if (pageId === 'density' && !window._densityChartDone) renderDensityChart();
}

document.querySelectorAll('.nav-item').forEach(n => {
  n.addEventListener('click', () => navigate(n.dataset.page));
});

// ============ BRAND CARDS ============
function renderBrands() {
  const grid = document.getElementById('brandGrid');
  grid.innerHTML = BRANDS.map(b => `
    <div class="brand-card" style="--brand-color:${b.color}" onclick="openDrawer('${b.id}')">
      <div class="logo-block">
        <div class="logo-mark">${b.initials}</div>
        <div>
          <div class="name">${b.name}</div>
          <div class="sub">${b.parent}</div>
        </div>
      </div>
      <div class="desc">${b.summary}</div>
      <div class="tags">${b.tags.map(t => `<span class="tag ${t.cls||''}">${t.label}</span>`).join('')}</div>
      <div class="footer-row">View full profile <span class="arrow">→</span></div>
    </div>
  `).join('');
}

// ============ DRAWER ============
function openDrawer(brandId) {
  const b = BRANDS.find(x => x.id === brandId);
  if (!b) return;
  document.getElementById('drawerEyebrow').textContent = `Brand Profile · ${b.parent}`;
  document.getElementById('drawerTitle').textContent = b.name;
  document.getElementById('drawerSub').innerHTML = `<a href="https://${b.site}" target="_blank" style="color:rgba(255,255,255,.85);">${b.site} ↗</a>`;
  document.getElementById('drawerBody').innerHTML = `
    <h4>Positioning</h4>
    <p>${b.positioning}</p>
    <h4>Treatment model</h4>
    <p>${b.treatment}</p>
    <h4>Pricing</h4>
    <ul>${b.pricing.map(p => `<li>${p}</li>`).join('')}</ul>
    <h4>Network / UK availability</h4>
    <p>${b.network}</p>
    <h4>Trust signals</h4>
    <p>${b.trust}</p>
    <div class="strategic">
      <strong>Strategic read.</strong> ${b.strategic.replace('<b>','<strong>').replace('</b>','</strong>')}
    </div>
  `;
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
}
document.getElementById('drawerClose').addEventListener('click', closeDrawer);
document.getElementById('drawerOverlay').addEventListener('click', closeDrawer);
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
}

// ============ THEMES ============
function renderThemes() {
  const list = document.getElementById('themeList');
  list.innerHTML = COMPLAINT_THEMES.map((t, i) => `
    <div class="theme-item">
      <div class="rank">#${i+1}</div>
      <div class="text">${t.text}</div>
      <div class="bar-wrap"><div class="bar" style="width:${t.bar}%"></div></div>
      <div class="severity">${t.severity}</div>
    </div>
  `).join('');
}

// ============ COMPETITORS ============
function renderCompetitors() {
  const c = document.getElementById('compList');
  c.innerHTML = COMPETITORS.map(comp => `
    <div class="comp-card ${comp.you ? 'you' : ''}">
      <div class="name"><b>${comp.name}</b>${comp.badge ? `<span class="badge">${comp.badge}</span>` : ''}</div>
      <div class="small">${comp.locs}</div>
      <div class="small">${comp.systems}</div>
      <div class="small">${comp.pos}</div>
    </div>
  `).join('');
}

// ============ OPPORTUNITIES ============
let oppFilters = { effort:'all', time:'all' };
function renderOpps() {
  const list = document.getElementById('oppList');
  const filtered = OPPORTUNITIES.filter(o =>
    (oppFilters.effort === 'all' || o.effort === oppFilters.effort) &&
    (oppFilters.time === 'all' || o.timeFilter === oppFilters.time)
  );
  if (filtered.length === 0) {
    list.innerHTML = '<div class="card" style="text-align:center; color:var(--muted);">No opportunities match these filters.</div>';
    return;
  }
  list.innerHTML = filtered.map(o => `
    <div class="opp-card">
      <div class="num">${o.n}</div>
      <div class="body">
        <h4>${o.title}</h4>
        <p>${o.desc}</p>
        <div class="why">↳ ${o.why}</div>
      </div>
      <div class="meta-col">
        <div class="meta-row"><b>Effort:</b> ${o.effort}</div>
        <div class="meta-row"><b>Time:</b> ${o.time}</div>
      </div>
    </div>
  `).join('');
}
document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('click', () => {
    const filter = c.dataset.filter, value = c.dataset.value;
    document.querySelectorAll(`.chip[data-filter="${filter}"]`).forEach(x => x.classList.remove('active'));
    c.classList.add('active');
    oppFilters[filter] = value;
    renderOpps();
  });
});

// ============ CHART ============
function renderChart() {
  const ctx = document.getElementById('growthChart');
  if (!ctx || window._chartDone) return;
  // Years from 2025 to 2033 with a CAGR-style curve from 367.7 to 2330.5
  const years = [2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033];
  const start = 367.7, end = 2330.5, n = years.length - 1;
  const cagr = Math.pow(end/start, 1/n);
  const data = years.map((_, i) => +(start * Math.pow(cagr, i)).toFixed(1));
  new Chart(ctx, {
    type:'line',
    data:{
      labels: years,
      datasets:[{
        label:'UK Clear Aligner Market (USD millions)',
        data: data,
        borderColor:'#0f3a5f', backgroundColor:'rgba(15,58,95,.08)',
        tension:.35, fill:true, borderWidth:2, pointRadius:4, pointBackgroundColor:'#14b8a6'
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:true, position:'bottom' }, tooltip:{ callbacks:{ label:(c)=>`$${c.parsed.y}m` }}},
      scales:{
        y:{ beginAtZero:true, ticks:{ callback:(v)=>`$${v}m` }, grid:{ color:'#e2e8f0' }},
        x:{ grid:{ display:false }}
      }
    }
  });
  window._chartDone = true;
}

// ============ DENSITY RENDERERS ============
function renderDensity() {
  const list = document.getElementById('densityList');
  if (!list) return;
  list.innerHTML = DENSITY.map(d => `
    <div class="comp-card ${d.treeline ? 'you' : ''}" style="grid-template-columns:1fr 1fr 100px 1.2fr 100px;">
      <div class="name"><b>${d.city}</b>${d.treeline ? '<span class="badge">TREELINE</span>' : ''}</div>
      <div class="small">${d.region}</div>
      <div class="small" style="font-size:18px; font-weight:700; color:var(--navy);">${d.providers}</div>
      <div class="small">${d.signal}</div>
      <div class="small" style="color:var(--teal); font-weight:600; letter-spacing:1px;">${d.score}</div>
    </div>
  `).join('');

  const compTbl = document.getElementById('densityCompTable');
  if (compTbl) {
    compTbl.innerHTML = DENSITY_NATIONAL.map(d => `
      <tr>
        <td><b>${d.city}</b></td>
        <td>${d.region}</td>
        <td style="font-weight:600; color:var(--navy);">${d.providers}</td>
        <td style="color:var(--muted); font-size:12px;">${d.signal}</td>
      </tr>
    `).join('');
  }
}

function renderDensityChart() {
  const ctx = document.getElementById('densityChart');
  if (!ctx || window._densityChartDone) return;
  new Chart(ctx, {
    type:'bar',
    data:{
      labels:['Sleaford','Lincoln','Derby','Nottingham','Leicester','Sheffield'],
      datasets:[{
        label:'Invisalign providers (alignerlocal.co.uk)',
        data:[7, 17, 41, 89, 89, 90],
        backgroundColor:['#14b8a6','#14b8a6','#94a3b8','#0f3a5f','#94a3b8','#0f3a5f'],
        borderRadius:6
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false, indexAxis:'y',
      plugins:{ legend:{ display:false }, tooltip:{ callbacks:{ label:(c)=>`${c.parsed.x} providers` }}},
      scales:{
        x:{ beginAtZero:true, grid:{ color:'#e2e8f0' }, ticks:{ stepSize:20 }},
        y:{ grid:{ display:false }}
      }
    }
  });
  window._densityChartDone = true;
}

// ============ KEYWORD RENDERERS ============
function renderKeywords() {
  const nat = document.getElementById('kwNational');
  if (nat) {
    nat.innerHTML = KW_NATIONAL.map(k => `
      <tr>
        <td>${k.kw}</td>
        <td style="font-weight:600; color:var(--navy);">${k.vol}</td>
        <td style="color:var(--muted); font-size:12px;">${k.intent}</td>
      </tr>
    `).join('');
  }
  const local = document.getElementById('kwLocal');
  if (local) {
    local.innerHTML = KW_LOCAL.map(k => `
      <tr>
        <td><b>${k.city}</b></td>
        <td>${k.kw}</td>
        <td>${k.vol}</td>
        <td style="color:var(--muted); font-size:12px;">${k.density}</td>
        <td>${k.score}</td>
      </tr>
    `).join('');
  }
}

// ============ INIT ============
renderBrands();
renderThemes();
renderCompetitors();
renderOpps();
renderDensity();
renderKeywords();

// keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
});
