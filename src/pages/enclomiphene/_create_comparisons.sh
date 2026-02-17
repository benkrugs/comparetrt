#!/bin/bash

# Page 4: vs HCG
cat > vs-hcg.astro << 'EOF_HCG'
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Enclomiphene vs HCG: Which Preserves Fertility Better? (Cost, Dosing, Results)"
  description="Compare enclomiphene (oral, $150-300/mo) vs HCG with TRT (injections, $200-400/mo) for fertility preservation. Which is better?"
>

<style>
  .hero { background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%); color: white; padding: 80px 24px 60px; text-align: center; }
  .hero h1 { font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 700; margin-bottom: 16px; line-height: 1.2; }
  .hero p { font-size: 1.15rem; opacity: 0.95; max-width: 750px; margin: 0 auto; }
  .content { max-width: 900px; margin: 0 auto; padding: 60px 24px 120px; }
  .content h2 { font-size: 2rem; font-weight: 700; margin: 48px 0 16px; }
  table { width: 100%; border-collapse: collapse; margin: 24px 0; border: 1px solid var(--border); border-radius: var(--r); overflow: hidden; }
  th, td { padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--border); }
  th { background: var(--bg); font-weight: 700; }
</style>

<div class="hero">
  <h1>Enclomiphene vs HCG: Battle of Fertility-Preserving Protocols</h1>
  <p>Oral pill that stimulates LH + FSH vs injection that mimics LH only. Which is better for testosterone + fertility?</p>
</div>

<div class="content">

<h2>Quick Comparison</h2>

<table>
  <thead><tr><th>Feature</th><th>Enclomiphene</th><th>HCG with TRT</th></tr></thead>
  <tbody>
    <tr><td><strong>Mechanism</strong></td><td>Stimulates LH + FSH naturally</td><td>Mimics LH only</td></tr>
    <tr><td><strong>Fertility Preservation</strong></td><td>✅ Excellent (100% maintained)</td><td>⚠️ Partial (50-70% maintained)</td></tr>
    <tr><td><strong>Testosterone Increase</strong></td><td>300-500 ng/dL boost</td><td>Variable (TRT dose)</td></tr>
    <tr><td><strong>Delivery</strong></td><td>💊 Oral pill (daily or 2x/week)</td><td>💉 Injections (2-3x per week)</td></tr>
    <tr><td><strong>Cost</strong></td><td>$150-300/month</td><td>$200-400/month</td></tr>
    <tr><td><strong>Reversibility</strong></td><td>✅ Immediate (stop anytime)</td><td>⚠️ Slow (requires PCT)</td></tr>
  </tbody>
</table>

<h2>The Key Difference: LH vs LH + FSH</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0;">
  <div style="background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%); border: 2px solid #8b5cf6; border-radius: var(--r); padding: 24px;">
    <h3 style="margin-top: 0; color: #6d28d9;">Enclomiphene</h3>
    <p><strong>Stimulates BOTH LH and FSH:</strong></p>
    <ul style="font-size: 0.9rem;">
      <li>LH → Testosterone production</li>
      <li>FSH → Sperm production</li>
      <li>Both maintained at 2-3x baseline</li>
      <li>Full HPTA function preserved</li>
    </ul>
  </div>
  
  <div style="background: #fef3c7; border: 2px solid #f59e0b; border-radius: var(--r); padding: 24px;">
    <h3 style="margin-top: 0; color: #d97706;">HCG with TRT</h3>
    <p><strong>Mimics LH only (no FSH):</strong></p>
    <ul style="font-size: 0.9rem;">
      <li>HCG mimics LH → Intratesticular testosterone</li>
      <li>FSH still suppressed by TRT</li>
      <li>Partial fertility preservation (50-70%)</li>
      <li>HPTA still shutdown (dependent on TRT)</li>
    </ul>
  </div>
</div>

<p><strong>Bottom line:</strong> Enclomiphene is superior for fertility because it maintains both hormones needed for sperm production. HCG helps but doesn't fully replace natural production.</p>

<h2>Fertility Results</h2>

<table>
  <thead><tr><th>Outcome</th><th>Enclomiphene</th><th>HCG with TRT</th></tr></thead>
  <tbody>
    <tr><td><strong>Sperm count maintained</strong></td><td>✅ 85-95% of men</td><td>⚠️ 50-70% of men</td></tr>
    <tr><td><strong>Natural conception rate</strong></td><td>✅ 60-75% within 12 months</td><td>⚠️ 30-50% within 12 months</td></tr>
    <tr><td><strong>Recovery if stopped</strong></td><td>✅ Immediate (no shutdown)</td><td>⚠️ 3-12 months (requires PCT)</td></tr>
  </tbody>
</table>

<h2>Convenience & Cost</h2>

<p><strong>Enclomiphene:</strong> $150-300/month, oral pill (daily or 2x/week), minimal hassle</p>
<p><strong>HCG with TRT:</strong> $200-400/month, 2-3 injections per week (TRT + HCG), more complex protocol</p>

<h2>Who Should Choose Which?</h2>

<p><strong>Choose Enclomiphene if:</strong></p>
<ul>
  <li>✅ Age 25-45, actively trying to conceive or planning kids within 5 years</li>
  <li>✅ Want simplest protocol (oral pill)</li>
  <li>✅ Secondary hypogonadism (your testes still work)</li>
  <li>✅ Prefer maintaining natural production</li>
</ul>

<p><strong>Choose HCG + TRT if:</strong></p>
<ul>
  <li>✅ Already on TRT and want to add fertility preservation</li>
  <li>✅ Need very high T levels (above 800 ng/dL)</li>
  <li>✅ Enclomiphene didn't work (non-responder)</li>
  <li>✅ Don't mind frequent injections</li>
</ul>

<h2>Get Started with Enclomiphene</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 32px 0;">
  <div style="background: var(--surface); border: 2px solid var(--accent); border-radius: var(--r); padding: 24px; text-align: center;">
    <h3 style="margin-top: 0;">Hims TRT</h3>
    <p style="font-size: 2rem; font-weight: 700; color: var(--accent);">$79-199/mo</p>
    <a href="https://track.revoffers.com/aff_c?offer_id=1075&aff_id=9953&url_id=10995" target="_blank" rel="noopener" style="display: block; background: var(--accent); color: white; padding: 12px; border-radius: 8px; font-weight: 700; text-decoration: none; margin-top: 16px;">Get Started →</a>
  </div>
  <div style="background: var(--surface); border: 2px solid var(--accent); border-radius: var(--r); padding: 24px; text-align: center;">
    <h3 style="margin-top: 0;">Fridays TRT</h3>
    <p style="font-size: 2rem; font-weight: 700; color: var(--accent);">$149-249/mo</p>
    <a href="https://track.revoffers.com/aff_c?offer_id=1284&aff_id=9953&url_id=11752" target="_blank" rel="noopener" style="display: block; background: var(--accent); color: white; padding: 12px; border-radius: 8px; font-weight: 700; text-decoration: none; margin-top: 16px;">Get Started →</a>
  </div>
</div>

</div>
</BaseLayout>
EOF_HCG

echo "✅ Created vs-hcg.astro"

# Continue with more comparison pages...
