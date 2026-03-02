const chapterDiagrams = {

1: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)} .box{stroke:var(--border);stroke-width:1.5;rx:6} .label{font-size:9px;fill:var(--dim)} .title{font-size:11px;font-weight:600} .arrow{stroke:var(--accent);stroke-width:1.5;marker-end:url(#arrowA)}</style>
  <defs>
    <marker id="arrowA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)"/></marker>
  </defs>
  <!-- Center: Industry Rivalry -->
  <rect class="box" x="175" y="95" width="150" height="60" fill="var(--code-bg)"/>
  <text class="title" x="250" y="122" text-anchor="middle">Industry Rivalry</text>
  <text class="label" x="250" y="140" text-anchor="middle">Among existing competitors</text>
  <!-- Top: New Entrants -->
  <rect class="box" x="185" y="8" width="130" height="50" fill="var(--code-bg)"/>
  <text class="title" x="250" y="30" text-anchor="middle">New Entrants</text>
  <text class="label" x="250" y="45" text-anchor="middle">Threat of entry</text>
  <line class="arrow" x1="250" y1="58" x2="250" y2="95"/>
  <!-- Bottom: Substitutes -->
  <rect class="box" x="185" y="192" width="130" height="50" fill="var(--code-bg)"/>
  <text class="title" x="250" y="214" text-anchor="middle">Substitutes</text>
  <text class="label" x="250" y="229" text-anchor="middle">Threat of substitution</text>
  <line class="arrow" x1="250" y1="192" x2="250" y2="155"/>
  <!-- Left: Suppliers -->
  <rect class="box" x="10" y="95" width="130" height="60" fill="var(--code-bg)"/>
  <text class="title" x="75" y="122" text-anchor="middle">Suppliers</text>
  <text class="label" x="75" y="140" text-anchor="middle">Bargaining power</text>
  <line class="arrow" x1="140" y1="125" x2="175" y2="125"/>
  <!-- Right: Buyers -->
  <rect class="box" x="360" y="95" width="130" height="60" fill="var(--code-bg)"/>
  <text class="title" x="425" y="122" text-anchor="middle">Buyers</text>
  <text class="label" x="425" y="140" text-anchor="middle">Bargaining power</text>
  <line class="arrow" x1="360" y1="125" x2="325" y2="125"/>
</svg>`,

2: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)} .box{stroke:var(--border);stroke-width:1.5;rx:6} .label{font-size:8px;fill:var(--dim)} .title{font-size:10px;font-weight:600} .arrow{stroke:var(--accent);stroke-width:1.5;marker-end:url(#arrowB)} .margin{font-size:8px;fill:var(--green);font-weight:600}</style>
  <defs>
    <marker id="arrowB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)"/></marker>
  </defs>
  <!-- Header -->
  <text x="250" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text)">Oil &amp; Gas Value Chain</text>
  <!-- Upstream -->
  <rect class="box" x="10" y="50" width="85" height="70" fill="var(--code-bg)"/>
  <text class="title" x="52" y="72" text-anchor="middle">Upstream</text>
  <text class="label" x="52" y="86" text-anchor="middle">Exploration</text>
  <text class="label" x="52" y="98" text-anchor="middle">&amp; Production</text>
  <text class="margin" x="52" y="140" text-anchor="middle">Margin: High</text>
  <line class="arrow" x1="95" y1="85" x2="112" y2="85"/>
  <!-- Midstream -->
  <rect class="box" x="112" y="50" width="85" height="70" fill="var(--code-bg)"/>
  <text class="title" x="154" y="72" text-anchor="middle">Midstream</text>
  <text class="label" x="154" y="86" text-anchor="middle">Transport</text>
  <text class="label" x="154" y="98" text-anchor="middle">&amp; Storage</text>
  <text class="margin" x="154" y="140" text-anchor="middle">Margin: Stable</text>
  <line class="arrow" x1="197" y1="85" x2="214" y2="85"/>
  <!-- Downstream -->
  <rect class="box" x="214" y="50" width="85" height="70" fill="var(--code-bg)"/>
  <text class="title" x="256" y="72" text-anchor="middle">Downstream</text>
  <text class="label" x="256" y="86" text-anchor="middle">Refining</text>
  <text class="label" x="256" y="98" text-anchor="middle">&amp; Processing</text>
  <text class="margin" x="256" y="140" text-anchor="middle">Margin: Cyclical</text>
  <line class="arrow" x1="299" y1="85" x2="316" y2="85"/>
  <!-- Petrochemicals -->
  <rect class="box" x="316" y="50" width="85" height="70" fill="var(--code-bg)"/>
  <text class="title" x="358" y="72" text-anchor="middle">Petrochem</text>
  <text class="label" x="358" y="86" text-anchor="middle">Chemicals</text>
  <text class="label" x="358" y="98" text-anchor="middle">&amp; Polymers</text>
  <text class="margin" x="358" y="140" text-anchor="middle">Margin: Growing</text>
  <line class="arrow" x1="401" y1="85" x2="418" y2="85"/>
  <!-- Retail -->
  <rect class="box" x="418" y="50" width="72" height="70" fill="var(--code-bg)"/>
  <text class="title" x="454" y="72" text-anchor="middle">Retail</text>
  <text class="label" x="454" y="86" text-anchor="middle">Marketing</text>
  <text class="label" x="454" y="98" text-anchor="middle">&amp; Sales</text>
  <text class="margin" x="454" y="140" text-anchor="middle">Margin: Low</text>
  <!-- Gradient bar -->
  <rect x="10" y="165" width="480" height="14" rx="7" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <rect x="10" y="165" width="480" height="14" rx="7" fill="url(#valGrad)" opacity="0.3"/>
  <defs>
    <linearGradient id="valGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="var(--green)"/>
      <stop offset="50%" stop-color="var(--gold)"/>
      <stop offset="100%" stop-color="var(--red)"/>
    </linearGradient>
  </defs>
  <text x="20" y="200" font-size="8" fill="var(--dim)">High risk, high reward</text>
  <text x="400" y="200" font-size="8" fill="var(--dim)">Low risk, low reward</text>
</svg>`,

3: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)} .box{stroke:var(--border);stroke-width:1.5;rx:6} .label{font-size:8px;fill:var(--dim)} .title{font-size:10px;font-weight:600} .axis{stroke:var(--dim);stroke-width:1} .co{font-size:8px;font-weight:600}</style>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text)">Porter's Generic Strategies</text>
  <!-- Axes -->
  <line class="axis" x1="100" y1="38" x2="100" y2="245" />
  <line class="axis" x1="100" y1="245" x2="485" y2="245" />
  <!-- Y-axis label -->
  <text x="16" y="100" font-size="9" fill="var(--dim)" transform="rotate(-90,16,100)">COMPETITIVE SCOPE</text>
  <text x="60" y="100" font-size="8" fill="var(--dim)" text-anchor="middle">Broad</text>
  <text x="60" y="210" font-size="8" fill="var(--dim)" text-anchor="middle">Narrow</text>
  <!-- X-axis label -->
  <text x="292" y="258" text-anchor="middle" font-size="9" fill="var(--dim)">COMPETITIVE ADVANTAGE</text>
  <text x="200" y="245" font-size="8" fill="var(--dim)" text-anchor="middle" dy="12">Lower Cost</text>
  <text x="390" y="245" font-size="8" fill="var(--dim)" text-anchor="middle" dy="12">Differentiation</text>
  <!-- Q1: Cost Leadership -->
  <rect class="box" x="110" y="45" width="175" height="80" fill="var(--code-bg)"/>
  <text class="title" x="197" y="68" text-anchor="middle" fill="var(--cyan)">Cost Leadership</text>
  <text class="co" x="197" y="86" text-anchor="middle" fill="var(--cyan)">Saudi Aramco</text>
  <text class="label" x="197" y="100" text-anchor="middle">Lowest lifting costs globally</text>
  <text class="label" x="197" y="112" text-anchor="middle">~$3/bbl production cost</text>
  <!-- Q2: Differentiation -->
  <rect class="box" x="295" y="45" width="180" height="80" fill="var(--code-bg)"/>
  <text class="title" x="385" y="68" text-anchor="middle" fill="var(--accent)">Differentiation</text>
  <text class="co" x="385" y="86" text-anchor="middle" fill="var(--accent)">Shell (LNG leader)</text>
  <text class="label" x="385" y="100" text-anchor="middle">Technology &amp; brand premium</text>
  <text class="label" x="385" y="112" text-anchor="middle">Integrated energy solutions</text>
  <!-- Q3: Cost Focus -->
  <rect class="box" x="110" y="135" width="175" height="80" fill="var(--code-bg)"/>
  <text class="title" x="197" y="158" text-anchor="middle" fill="var(--green)">Cost Focus</text>
  <text class="co" x="197" y="176" text-anchor="middle" fill="var(--green)">ONGC (India focus)</text>
  <text class="label" x="197" y="190" text-anchor="middle">Low-cost domestic producer</text>
  <text class="label" x="197" y="202" text-anchor="middle">Niche geographic advantage</text>
  <!-- Q4: Differentiation Focus -->
  <rect class="box" x="295" y="135" width="180" height="80" fill="var(--code-bg)"/>
  <text class="title" x="385" y="158" text-anchor="middle" fill="var(--gold)">Differentiation Focus</text>
  <text class="co" x="385" y="176" text-anchor="middle" fill="var(--gold)">Reliance (Jamnagar)</text>
  <text class="label" x="385" y="190" text-anchor="middle">World's largest refinery complex</text>
  <text class="label" x="385" y="202" text-anchor="middle">Superior complexity &amp; yield</text>
</svg>`,

4: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)} .cell{stroke:var(--border);stroke-width:1.5;rx:6} .hdr{font-size:11px;font-weight:700} .item{font-size:8px} .cattag{font-size:9px;font-weight:600}</style>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text)">SWOT Analysis — Oil &amp; Gas Sector</text>
  <!-- Column headers -->
  <text x="165" y="44" text-anchor="middle" font-size="9" fill="var(--dim)">HELPFUL</text>
  <text x="375" y="44" text-anchor="middle" font-size="9" fill="var(--dim)">HARMFUL</text>
  <!-- Row labels -->
  <text x="24" y="110" font-size="9" fill="var(--dim)" transform="rotate(-90,24,110)">INTERNAL</text>
  <text x="24" y="220" font-size="9" fill="var(--dim)" transform="rotate(-90,24,220)">EXTERNAL</text>
  <!-- Strengths -->
  <rect class="cell" x="45" y="55" width="200" height="95" fill="var(--code-bg)"/>
  <rect x="45" y="55" width="200" height="22" rx="6" fill="var(--green)" opacity="0.15"/>
  <text class="cattag" x="145" y="71" text-anchor="middle" fill="var(--green)">Strengths</text>
  <text class="item" x="55" y="90" fill="var(--text)">&#8226; Massive refining capacity (1.4M bpd)</text>
  <text class="item" x="55" y="103" fill="var(--text)">&#8226; Integrated value chain</text>
  <text class="item" x="55" y="116" fill="var(--text)">&#8226; Strong cash flow generation</text>
  <text class="item" x="55" y="129" fill="var(--text)">&#8226; World-class Nelson Complexity</text>
  <!-- Weaknesses -->
  <rect class="cell" x="255" y="55" width="235" height="95" fill="var(--code-bg)"/>
  <rect x="255" y="55" width="235" height="22" rx="6" fill="var(--red)" opacity="0.15"/>
  <text class="cattag" x="372" y="71" text-anchor="middle" fill="var(--red)">Weaknesses</text>
  <text class="item" x="265" y="90" fill="var(--text)">&#8226; Crude import dependency (~85%)</text>
  <text class="item" x="265" y="103" fill="var(--text)">&#8226; Government pricing intervention</text>
  <text class="item" x="265" y="116" fill="var(--text)">&#8226; High debt from expansion capex</text>
  <text class="item" x="265" y="129" fill="var(--text)">&#8226; Aging upstream assets</text>
  <!-- Opportunities -->
  <rect class="cell" x="45" y="160" width="200" height="95" fill="var(--code-bg)"/>
  <rect x="45" y="160" width="200" height="22" rx="6" fill="var(--cyan)" opacity="0.15"/>
  <text class="cattag" x="145" y="176" text-anchor="middle" fill="var(--cyan)">Opportunities</text>
  <text class="item" x="55" y="195" fill="var(--text)">&#8226; Petrochemical demand growth</text>
  <text class="item" x="55" y="208" fill="var(--text)">&#8226; Green hydrogen &amp; renewables</text>
  <text class="item" x="55" y="221" fill="var(--text)">&#8226; India's rising fuel demand</text>
  <text class="item" x="55" y="234" fill="var(--text)">&#8226; CBG &amp; biofuel mandates</text>
  <!-- Threats -->
  <rect class="cell" x="255" y="160" width="235" height="95" fill="var(--code-bg)"/>
  <rect x="255" y="160" width="235" height="22" rx="6" fill="var(--gold)" opacity="0.15"/>
  <text class="cattag" x="372" y="176" text-anchor="middle" fill="var(--gold)">Threats</text>
  <text class="item" x="265" y="195" fill="var(--text)">&#8226; EV adoption reducing fuel demand</text>
  <text class="item" x="265" y="208" fill="var(--text)">&#8226; Crude price volatility</text>
  <text class="item" x="265" y="221" fill="var(--text)">&#8226; Carbon regulations (CBAM)</text>
  <text class="item" x="265" y="234" fill="var(--text)">&#8226; Geopolitical supply disruptions</text>
</svg>`,

5: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)} .cell{stroke:var(--border);stroke-width:1.5;rx:6} .hdr{font-size:11px;font-weight:700} .sub{font-size:8px;fill:var(--dim)} .cattag{font-size:10px;font-weight:600} .example{font-size:8px;font-style:italic}</style>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text)">Ansoff Growth Matrix — Oil &amp; Gas</text>
  <!-- Axis labels -->
  <text x="175" y="42" text-anchor="middle" font-size="9" fill="var(--dim)">EXISTING Products</text>
  <text x="375" y="42" text-anchor="middle" font-size="9" fill="var(--dim)">NEW Products</text>
  <text x="28" y="120" font-size="9" fill="var(--dim)" transform="rotate(-90,28,120)">EXISTING Markets</text>
  <text x="28" y="225" font-size="9" fill="var(--dim)" transform="rotate(-90,28,225)">NEW Markets</text>
  <!-- Market Penetration -->
  <rect class="cell" x="50" y="52" width="195" height="90" fill="var(--code-bg)"/>
  <rect x="50" y="52" width="195" height="20" rx="6" fill="var(--green)" opacity="0.15"/>
  <text class="cattag" x="147" y="67" text-anchor="middle" fill="var(--green)">Market Penetration</text>
  <text class="sub" x="147" y="85" text-anchor="middle">Low risk | Grow share in existing markets</text>
  <text class="example" x="60" y="102" fill="var(--green)">&#8226; Expand fuel retail outlets in India</text>
  <text class="example" x="60" y="115" fill="var(--green)">&#8226; Increase refinery utilization rates</text>
  <text class="example" x="60" y="128" fill="var(--green)">&#8226; Loyalty programs for B2C customers</text>
  <!-- Product Development -->
  <rect class="cell" x="255" y="52" width="235" height="90" fill="var(--code-bg)"/>
  <rect x="255" y="52" width="235" height="20" rx="6" fill="var(--cyan)" opacity="0.15"/>
  <text class="cattag" x="372" y="67" text-anchor="middle" fill="var(--cyan)">Product Development</text>
  <text class="sub" x="372" y="85" text-anchor="middle">Medium risk | New products to existing markets</text>
  <text class="example" x="265" y="102" fill="var(--cyan)">&#8226; Specialty chemicals &amp; polymers</text>
  <text class="example" x="265" y="115" fill="var(--cyan)">&#8226; EV charging at existing fuel stations</text>
  <text class="example" x="265" y="128" fill="var(--cyan)">&#8226; Green hydrogen blending</text>
  <!-- Market Development -->
  <rect class="cell" x="50" y="152" width="195" height="90" fill="var(--code-bg)"/>
  <rect x="50" y="152" width="195" height="20" rx="6" fill="var(--gold)" opacity="0.15"/>
  <text class="cattag" x="147" y="167" text-anchor="middle" fill="var(--gold)">Market Development</text>
  <text class="sub" x="147" y="185" text-anchor="middle">Medium risk | Existing products, new markets</text>
  <text class="example" x="60" y="202" fill="var(--gold)">&#8226; Export refined products to Africa</text>
  <text class="example" x="60" y="215" fill="var(--gold)">&#8226; Enter LNG bunkering market</text>
  <text class="example" x="60" y="228" fill="var(--gold)">&#8226; Aviation fuel supply agreements</text>
  <!-- Diversification -->
  <rect class="cell" x="255" y="152" width="235" height="90" fill="var(--code-bg)"/>
  <rect x="255" y="152" width="235" height="20" rx="6" fill="var(--red)" opacity="0.15"/>
  <text class="cattag" x="372" y="167" text-anchor="middle" fill="var(--red)">Diversification</text>
  <text class="sub" x="372" y="185" text-anchor="middle">High risk | New products &amp; new markets</text>
  <text class="example" x="265" y="202" fill="var(--red)">&#8226; Telecom (Jio) &amp; Retail ventures</text>
  <text class="example" x="265" y="215" fill="var(--red)">&#8226; Carbon capture &amp; storage</text>
  <text class="example" x="265" y="228" fill="var(--red)">&#8226; Battery giga-factories</text>
</svg>`,

6: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)} .label{font-size:9px;font-weight:600} .sub{font-size:7px;fill:var(--dim)} .dot{r:5} .milestone{stroke:var(--border);stroke-width:1.5;rx:6}</style>
  <defs>
    <linearGradient id="transGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="var(--red)"/>
      <stop offset="30%" stop-color="var(--gold)"/>
      <stop offset="60%" stop-color="var(--cyan)"/>
      <stop offset="100%" stop-color="var(--green)"/>
    </linearGradient>
    <marker id="arrowC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--green)"/></marker>
  </defs>
  <!-- Title -->
  <text x="250" y="20" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text)">Energy Transition Timeline</text>
  <!-- Main timeline arrow -->
  <line x1="30" y1="110" x2="480" y2="110" stroke="url(#transGrad)" stroke-width="4" marker-end="url(#arrowC)"/>
  <!-- Phase markers -->
  <!-- Oil -->
  <circle cx="60" cy="110" r="8" fill="var(--red)" opacity="0.8"/>
  <text class="label" x="60" y="90" text-anchor="middle" fill="var(--red)">Oil</text>
  <text class="sub" x="60" y="135" text-anchor="middle">1950s-2020</text>
  <rect class="milestone" x="20" y="148" width="80" height="36" fill="var(--code-bg)"/>
  <text class="sub" x="60" y="163" text-anchor="middle" fill="var(--text)">Saudi Aramco</text>
  <text class="sub" x="60" y="175" text-anchor="middle">Core upstream</text>
  <!-- Gas -->
  <circle cx="160" cy="110" r="8" fill="var(--gold)" opacity="0.8"/>
  <text class="label" x="160" y="90" text-anchor="middle" fill="var(--gold)">Gas</text>
  <text class="sub" x="160" y="135" text-anchor="middle">2000-2030</text>
  <rect class="milestone" x="120" y="148" width="80" height="36" fill="var(--code-bg)"/>
  <text class="sub" x="160" y="163" text-anchor="middle" fill="var(--text)">Shell / QatarE</text>
  <text class="sub" x="160" y="175" text-anchor="middle">LNG expansion</text>
  <!-- Renewables -->
  <circle cx="270" cy="110" r="8" fill="var(--cyan)" opacity="0.8"/>
  <text class="label" x="270" y="90" text-anchor="middle" fill="var(--cyan)">Renewables</text>
  <text class="sub" x="270" y="135" text-anchor="middle">2015-2040</text>
  <rect class="milestone" x="230" y="148" width="80" height="36" fill="var(--code-bg)"/>
  <text class="sub" x="270" y="163" text-anchor="middle" fill="var(--text)">BP / TotalEnergies</text>
  <text class="sub" x="270" y="175" text-anchor="middle">Solar &amp; Wind</text>
  <!-- Hydrogen -->
  <circle cx="370" cy="110" r="8" fill="var(--accent)" opacity="0.8"/>
  <text class="label" x="370" y="90" text-anchor="middle" fill="var(--accent)">Hydrogen</text>
  <text class="sub" x="370" y="135" text-anchor="middle">2025-2050</text>
  <rect class="milestone" x="330" y="148" width="80" height="36" fill="var(--code-bg)"/>
  <text class="sub" x="370" y="163" text-anchor="middle" fill="var(--text)">Reliance / ADNOC</text>
  <text class="sub" x="370" y="175" text-anchor="middle">Green H2 hubs</text>
  <!-- Net Zero -->
  <circle cx="460" cy="110" r="8" fill="var(--green)" opacity="0.8"/>
  <text class="label" x="460" y="90" text-anchor="middle" fill="var(--green)">Net Zero</text>
  <text class="sub" x="460" y="135" text-anchor="middle">2050+</text>
  <rect class="milestone" x="422" y="148" width="76" height="36" fill="var(--code-bg)"/>
  <text class="sub" x="460" y="163" text-anchor="middle" fill="var(--text)">Industry Goal</text>
  <text class="sub" x="460" y="175" text-anchor="middle">Carbon neutral</text>
  <!-- Bottom note -->
  <text x="250" y="215" text-anchor="middle" font-size="8" fill="var(--dim)">Companies increasingly diversifying portfolios along this transition path</text>
</svg>`,

7: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)} .box{stroke:var(--border);stroke-width:1.5;rx:6} .label{font-size:8px;fill:var(--dim)} .title{font-size:10px;font-weight:600} .val{font-size:9px;font-weight:600} .line{stroke:var(--border);stroke-width:1.5} .yes{stroke:var(--green);stroke-width:1.5} .no{stroke:var(--red);stroke-width:1.5}</style>
  <defs>
    <marker id="arrowG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--green)"/></marker>
    <marker id="arrowR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--red)"/></marker>
    <marker id="arrowD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--border)"/></marker>
  </defs>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text)">Capital Allocation Decision Tree</text>
  <!-- Step 1: Investment Proposal -->
  <rect class="box" x="170" y="30" width="160" height="40" fill="var(--code-bg)"/>
  <text class="title" x="250" y="50" text-anchor="middle">Investment Proposal</text>
  <text class="label" x="250" y="62" text-anchor="middle">New project or acquisition</text>
  <line class="line" x1="250" y1="70" x2="250" y2="92" marker-end="url(#arrowD)"/>
  <!-- Step 2: NPV / IRR -->
  <rect class="box" x="155" y="92" width="190" height="46" fill="var(--code-bg)"/>
  <text class="title" x="250" y="112" text-anchor="middle">NPV &amp; IRR Analysis</text>
  <text class="label" x="250" y="126" text-anchor="middle">Hurdle rate: 12% WACC | Payback &lt; 7 yrs</text>
  <!-- Branch lines -->
  <line class="line" x1="250" y1="138" x2="250" y2="155" marker-end="url(#arrowD)"/>
  <!-- Decision diamond -->
  <polygon points="250,155 305,180 250,205 195,180" stroke="var(--accent)" stroke-width="1.5" fill="var(--code-bg)"/>
  <text x="250" y="183" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">IRR &gt; 12%?</text>
  <!-- Yes branch -->
  <line class="yes" x1="305" y1="180" x2="400" y2="180" marker-end="url(#arrowG)"/>
  <text x="345" y="174" font-size="8" fill="var(--green)" font-weight="600">YES</text>
  <rect x="400" y="160" width="90" height="40" rx="6" stroke="var(--green)" stroke-width="1.5" fill="var(--code-bg)"/>
  <text x="445" y="178" text-anchor="middle" font-size="10" font-weight="700" fill="var(--green)">APPROVE</text>
  <text x="445" y="192" text-anchor="middle" font-size="7" fill="var(--dim)">Allocate capital</text>
  <!-- No branch -->
  <line class="no" x1="195" y1="180" x2="100" y2="180" marker-end="url(#arrowR)"/>
  <text x="155" y="174" font-size="8" fill="var(--red)" font-weight="600">NO</text>
  <rect x="10" y="160" width="90" height="40" rx="6" stroke="var(--red)" stroke-width="1.5" fill="var(--code-bg)"/>
  <text x="55" y="178" text-anchor="middle" font-size="10" font-weight="700" fill="var(--red)">REJECT</text>
  <text x="55" y="192" text-anchor="middle" font-size="7" fill="var(--dim)">Return to shareholders</text>
  <!-- Post-approval flow -->
  <line class="yes" x1="445" y1="200" x2="445" y2="218" marker-end="url(#arrowG)"/>
  <rect class="box" x="370" y="218" width="150" height="38" fill="var(--code-bg)"/>
  <text class="title" x="445" y="234" text-anchor="middle" fill="var(--green)">Post-Investment Review</text>
  <text class="label" x="445" y="248" text-anchor="middle">Track actual vs projected IRR</text>
  <!-- Metrics row -->
  <rect class="box" x="60" y="222" width="100" height="34" fill="var(--code-bg)"/>
  <text class="val" x="110" y="237" text-anchor="middle" fill="var(--gold)">NPV &gt; 0</text>
  <text class="label" x="110" y="249" text-anchor="middle">Value creation</text>
  <rect class="box" x="170" y="222" width="100" height="34" fill="var(--code-bg)"/>
  <text class="val" x="220" y="237" text-anchor="middle" fill="var(--gold)">IRR &gt; WACC</text>
  <text class="label" x="220" y="249" text-anchor="middle">Exceeds hurdle</text>
  <rect class="box" x="280" y="222" width="80" height="34" fill="var(--code-bg)"/>
  <text class="val" x="320" y="237" text-anchor="middle" fill="var(--gold)">ROIC</text>
  <text class="label" x="320" y="249" text-anchor="middle">Capital efficiency</text>
</svg>`,

8: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)} .node{stroke-width:1.5;rx:6} .link{stroke-width:1.5;stroke-dasharray:4,3} .label{font-size:8px;fill:var(--dim)} .title{font-size:10px;font-weight:600} .deal{font-size:8px;font-weight:600}</style>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text)">Reliance Strategic Partnership Network</text>
  <!-- Center: Reliance -->
  <circle cx="250" cy="150" r="38" stroke="var(--accent)" stroke-width="2" fill="var(--code-bg)"/>
  <text x="250" y="146" text-anchor="middle" font-size="11" font-weight="700" fill="var(--accent)">Reliance</text>
  <text x="250" y="160" text-anchor="middle" font-size="7" fill="var(--dim)">Industries Ltd</text>
  <!-- Saudi Aramco (top) -->
  <rect class="node" x="190" y="28" width="120" height="44" fill="var(--code-bg)" stroke="var(--gold)"/>
  <text class="title" x="250" y="48" text-anchor="middle" fill="var(--gold)">Saudi Aramco</text>
  <text class="deal" x="250" y="62" text-anchor="middle" fill="var(--gold)">$15B | 20% O2C stake</text>
  <line class="link" x1="250" y1="72" x2="250" y2="112" stroke="var(--gold)"/>
  <!-- BP (right) -->
  <rect class="node" x="370" y="100" width="120" height="44" fill="var(--code-bg)" stroke="var(--green)"/>
  <text class="title" x="430" y="120" text-anchor="middle" fill="var(--green)">BP plc</text>
  <text class="deal" x="430" y="134" text-anchor="middle" fill="var(--green)">$1B | Fuel retail JV</text>
  <line class="link" x1="370" y1="128" x2="288" y2="145" stroke="var(--green)"/>
  <!-- ADNOC (left) -->
  <rect class="node" x="10" y="100" width="120" height="44" fill="var(--code-bg)" stroke="var(--cyan)"/>
  <text class="title" x="70" y="120" text-anchor="middle" fill="var(--cyan)">ADNOC</text>
  <text class="deal" x="70" y="134" text-anchor="middle" fill="var(--cyan)">$2B | Ethylene JV</text>
  <line class="link" x1="130" y1="128" x2="212" y2="145" stroke="var(--cyan)"/>
  <!-- Siemens (bottom-right) -->
  <rect class="node" x="355" y="200" width="130" height="44" fill="var(--code-bg)" stroke="var(--pink)"/>
  <text class="title" x="420" y="220" text-anchor="middle" fill="var(--pink)">Siemens</text>
  <text class="deal" x="420" y="234" text-anchor="middle" fill="var(--pink)">Digital twin partnership</text>
  <line class="link" x1="355" y1="216" x2="284" y2="168" stroke="var(--pink)"/>
  <!-- Nokia / digital (bottom-left) -->
  <rect class="node" x="15" y="200" width="130" height="44" fill="var(--code-bg)" stroke="var(--accent)"/>
  <text class="title" x="80" y="220" text-anchor="middle" fill="var(--accent)">SABIC / Others</text>
  <text class="deal" x="80" y="234" text-anchor="middle" fill="var(--accent)">Petrochem feedstock</text>
  <line class="link" x1="145" y1="216" x2="216" y2="168" stroke="var(--accent)"/>
  <!-- Legend -->
  <text x="250" y="270" text-anchor="middle" font-size="7" fill="var(--dim)">Dashed lines indicate strategic partnerships &amp; joint ventures</text>
</svg>`,

9: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)} .step{stroke:var(--border);stroke-width:1.5;rx:6} .label{font-size:8px;fill:var(--dim)} .title{font-size:9px;font-weight:600} .lvl{font-size:10px;font-weight:700}</style>
  <defs>
    <linearGradient id="matGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="var(--red)" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="var(--green)" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text)">Digital Maturity Staircase — Oil &amp; Gas</text>
  <!-- Background gradient -->
  <rect x="20" y="30" width="460" height="195" rx="8" fill="url(#matGrad)"/>
  <!-- Staircase steps (bottom-left to top-right) -->
  <!-- Level 1 -->
  <rect class="step" x="28" y="168" width="82" height="50" fill="var(--code-bg)"/>
  <text class="lvl" x="69" y="186" text-anchor="middle" fill="var(--red)">L1</text>
  <text class="title" x="69" y="198" text-anchor="middle">Basic IT</text>
  <text class="label" x="69" y="210" text-anchor="middle">ERP &amp; email</text>
  <!-- Connector -->
  <line x1="110" y1="190" x2="120" y2="170" stroke="var(--border)" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Level 2 -->
  <rect class="step" x="120" y="138" width="82" height="50" fill="var(--code-bg)"/>
  <text class="lvl" x="161" y="156" text-anchor="middle" fill="var(--gold)">L2</text>
  <text class="title" x="161" y="168" text-anchor="middle">Connected</text>
  <text class="label" x="161" y="180" text-anchor="middle">IoT &amp; SCADA</text>
  <!-- Connector -->
  <line x1="202" y1="160" x2="212" y2="140" stroke="var(--border)" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Level 3 -->
  <rect class="step" x="212" y="108" width="82" height="50" fill="var(--code-bg)"/>
  <text class="lvl" x="253" y="126" text-anchor="middle" fill="var(--cyan)">L3</text>
  <text class="title" x="253" y="138" text-anchor="middle">Analytics</text>
  <text class="label" x="253" y="150" text-anchor="middle">Data-driven ops</text>
  <!-- Connector -->
  <line x1="294" y1="130" x2="304" y2="110" stroke="var(--border)" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Level 4 -->
  <rect class="step" x="304" y="78" width="82" height="50" fill="var(--code-bg)"/>
  <text class="lvl" x="345" y="96" text-anchor="middle" fill="var(--accent)">L4</text>
  <text class="title" x="345" y="108" text-anchor="middle">Predictive</text>
  <text class="label" x="345" y="120" text-anchor="middle">ML &amp; AI models</text>
  <!-- Connector -->
  <line x1="386" y1="100" x2="396" y2="80" stroke="var(--border)" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Level 5 -->
  <rect class="step" x="396" y="42" width="82" height="56" fill="var(--code-bg)"/>
  <text class="lvl" x="437" y="62" text-anchor="middle" fill="var(--green)">L5</text>
  <text class="title" x="437" y="74" text-anchor="middle">Autonomous</text>
  <text class="label" x="437" y="86" text-anchor="middle">Self-optimizing</text>
  <text class="label" x="437" y="95" text-anchor="middle">refinery</text>
  <!-- Arrow along bottom -->
  <line x1="28" y1="232" x2="470" y2="232" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowMat)"/>
  <defs><marker id="arrowMat" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)"/></marker></defs>
  <text x="250" y="248" text-anchor="middle" font-size="8" fill="var(--dim)">Digital maturity progression &#8594; increasing autonomy &amp; value</text>
</svg>`,

10: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)} .label{font-size:8px;fill:var(--dim)} .price{font-size:9px;font-weight:600} .strat{font-size:7px;font-weight:500} .gridline{stroke:var(--border);stroke-width:0.5;stroke-dasharray:3,3}</style>
  <!-- Title -->
  <text x="250" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text)">Oil Price Cycle &amp; Strategic Response</text>
  <!-- Y-axis -->
  <line x1="50" y1="35" x2="50" y2="230" stroke="var(--dim)" stroke-width="1"/>
  <text x="15" y="130" font-size="8" fill="var(--dim)" transform="rotate(-90,15,130)">Oil Price ($/bbl)</text>
  <!-- Price grid lines -->
  <line class="gridline" x1="50" y1="55" x2="480" y2="55"/>
  <text class="price" x="42" y="58" text-anchor="end" fill="var(--red)">$100</text>
  <line class="gridline" x1="50" y1="99" x2="480" y2="99"/>
  <text class="price" x="42" y="102" text-anchor="end" fill="var(--gold)">$80</text>
  <line class="gridline" x1="50" y1="143" x2="480" y2="143"/>
  <text class="price" x="42" y="146" text-anchor="end" fill="var(--cyan)">$60</text>
  <line class="gridline" x1="50" y1="187" x2="480" y2="187"/>
  <text class="price" x="42" y="190" text-anchor="end" fill="var(--green)">$40</text>
  <!-- X-axis -->
  <line x1="50" y1="230" x2="480" y2="230" stroke="var(--dim)" stroke-width="1"/>
  <text x="265" y="248" text-anchor="middle" font-size="8" fill="var(--dim)">Business Cycle</text>
  <!-- Wave path (oil price cycle) -->
  <path d="M60,143 Q110,187 150,180 Q190,170 220,99 Q250,50 280,55 Q310,60 340,99 Q370,150 400,187 Q430,200 460,165" stroke="var(--accent)" stroke-width="2.5" fill="none"/>
  <!-- Cycle labels on X-axis -->
  <text x="100" y="242" text-anchor="middle" font-size="7" fill="var(--dim)">Downturn</text>
  <text x="200" y="242" text-anchor="middle" font-size="7" fill="var(--dim)">Recovery</text>
  <text x="290" y="242" text-anchor="middle" font-size="7" fill="var(--dim)">Boom</text>
  <text x="380" y="242" text-anchor="middle" font-size="7" fill="var(--dim)">Correction</text>
  <text x="460" y="242" text-anchor="middle" font-size="7" fill="var(--dim)">Reset</text>
  <!-- Strategy overlays -->
  <!-- At $40 - Survival -->
  <rect x="84" y="170" width="100" height="30" rx="4" fill="var(--code-bg)" stroke="var(--green)" stroke-width="1"/>
  <text class="strat" x="134" y="182" text-anchor="middle" fill="var(--green)">SURVIVE: Cut capex,</text>
  <text class="strat" x="134" y="192" text-anchor="middle" fill="var(--green)">reduce costs, divest</text>
  <!-- At $60 - Optimize -->
  <rect x="175" y="108" width="100" height="30" rx="4" fill="var(--code-bg)" stroke="var(--cyan)" stroke-width="1"/>
  <text class="strat" x="225" y="120" text-anchor="middle" fill="var(--cyan)">OPTIMIZE: Efficiency,</text>
  <text class="strat" x="225" y="130" text-anchor="middle" fill="var(--cyan)">selective investment</text>
  <!-- At $100 - Expand -->
  <rect x="250" y="32" width="100" height="30" rx="4" fill="var(--code-bg)" stroke="var(--red)" stroke-width="1"/>
  <text class="strat" x="300" y="44" text-anchor="middle" fill="var(--red)">EXPAND: M&amp;A, new</text>
  <text class="strat" x="300" y="54" text-anchor="middle" fill="var(--red)">projects, exploration</text>
  <!-- At $80 - Sustain -->
  <rect x="345" y="80" width="108" height="30" rx="4" fill="var(--code-bg)" stroke="var(--gold)" stroke-width="1"/>
  <text class="strat" x="399" y="92" text-anchor="middle" fill="var(--gold)">SUSTAIN: Dividends,</text>
  <text class="strat" x="399" y="102" text-anchor="middle" fill="var(--gold)">buybacks, hedge risk</text>
  <!-- Resilience note -->
  <rect x="100" y="258" width="300" height="16" rx="4" fill="var(--code-bg)" stroke="var(--border)" stroke-width="0.5"/>
  <text x="250" y="270" text-anchor="middle" font-size="7" fill="var(--accent)">Resilient companies prepare counter-cyclical strategies at every price point</text>
</svg>`

};
