#!/bin/bash

# For index.astro - reorder providers to put Titan first
cat > index_new_providers.html << 'PROVIDERS_EOF'
<div class="provider-grid">
  <div class="provider-card" style="border-color: #f59e0b; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);">
    <div style="background: #f59e0b; color: white; display: inline-block; padding: 4px 12px; border-radius: 100px; font-size: 0.75rem; font-weight: 700; margin-bottom: 12px;">🏆 BEST VALUE</div>
    <h3>Titan TRT</h3>
    <div class="price">$159/mo</div>
    <p style="font-size: 0.9rem; color: var(--text-sec); margin-bottom: 16px;">TRT Bundle: meds, blood test, analysis, clinician care</p>
    <ul>
      <li>Complete TRT bundle</li>
      <li>Comprehensive lab testing</li>
      <li>Expert clinician support</li>
    </ul>
    <a href="https://jointitan.com/?toclid=TO-2RbC8WhCGKBLFQ2J90aUB9&utm_source=theoffer&utm_campaign=94" target="_blank" rel="noopener">Get Started →</a>
  </div>

  <div class="provider-card">
    <h3>Hims TRT</h3>
    <div class="price">$79-199/mo</div>
    <p style="font-size: 0.9rem; color: var(--text-sec); margin-bottom: 16px;">Traditional TRT + enclomiphene options</p>
    <ul>
      <li>Medical consultation</li>
      <li>Lab testing included</li>
      <li>Ships to all 50 states</li>
    </ul>
    <a href="https://track.revoffers.com/aff_c?offer_id=1075&aff_id=9953&url_id=10995" target="_blank" rel="noopener">Get Started →</a>
  </div>

  <div class="provider-card">
    <h3>Fridays TRT</h3>
    <div class="price">$149-249/mo</div>
    <p style="font-size: 0.9rem; color: var(--text-sec); margin-bottom: 16px;">Personalized TRT protocols</p>
    <ul>
      <li>Enclomiphene available</li>
      <li>Monthly doctor check-ins</li>
      <li>Fast turnaround</li>
    </ul>
    <a href="https://track.revoffers.com/aff_c?offer_id=1284&aff_id=9953&url_id=11752" target="_blank" rel="noopener">Get Started →</a>
  </div>
</div>
PROVIDERS_EOF

echo "Created new provider grid HTML"

