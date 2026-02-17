#!/bin/bash

# vs-traditional-trt.astro - has inline grid style
python3 << 'PYTHON_EOF'
import re

# Read vs-traditional-trt.astro
with open('vs-traditional-trt.astro', 'r') as f:
    content = f.read()

# Find and replace provider grid section
old_pattern = r'<div style="display: grid; grid-template-columns: repeat\(auto-fit, minmax\(250px, 1fr\)\); gap: 20px; margin: 32px 0;">.*?<div style="background: var\(--surface\); border: 2px solid var\(--accent\).*?Hims TRT.*?</div>\s*<div style="background: var\(--surface\); border: 2px solid var\(--accent\).*?Fridays TRT.*?</div>\s*<div style="background: var\(--surface\); border: 2px solid var\(--accent\).*?Titan TRT.*?</div>\s*</div>'

new_grid = '''<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 32px 0;">
  <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: var(--r); padding: 24px; text-align: center;">
    <div style="background: #f59e0b; color: white; display: inline-block; padding: 4px 12px; border-radius: 100px; font-size: 0.75rem; font-weight: 700; margin-bottom: 12px;">🏆 BEST VALUE</div>
    <h3 style="margin-top: 0;">Titan TRT</h3>
    <p style="font-size: 2rem; font-weight: 700; color: #f59e0b; margin: 8px 0;">$159/mo</p>
    <p style="font-size: 0.9rem; color: var(--text-sec); margin-bottom: 16px;">TRT Bundle: meds, blood test, analysis, clinician care</p>
    <a href="https://jointitan.com/?toclid=TO-2RbC8WhCGKBLFQ2J90aUB9&utm_source=theoffer&utm_campaign=94" target="_blank" rel="noopener" style="display: block; background: #f59e0b; color: white; padding: 12px; border-radius: 8px; font-weight: 700; text-decoration: none;">Get Started →</a>
  </div>

  <div style="background: var(--surface); border: 2px solid var(--accent); border-radius: var(--r); padding: 24px; text-align: center;">
    <h3 style="margin-top: 0;">Hims TRT</h3>
    <p style="font-size: 2rem; font-weight: 700; color: var(--accent); margin: 8px 0;">$79-199/mo</p>
    <p style="font-size: 0.9rem; color: var(--text-sec); margin-bottom: 16px;">Both enclomiphene + traditional TRT</p>
    <a href="https://track.revoffers.com/aff_c?offer_id=1075&aff_id=9953&url_id=10995" target="_blank" rel="noopener" style="display: block; background: var(--accent); color: white; padding: 12px; border-radius: 8px; font-weight: 700; text-decoration: none;">Get Started →</a>
  </div>

  <div style="background: var(--surface); border: 2px solid var(--accent); border-radius: var(--r); padding: 24px; text-align: center;">
    <h3 style="margin-top: 0;">Fridays TRT</h3>
    <p style="font-size: 2rem; font-weight: 700; color: var(--accent); margin: 8px 0;">$149-249/mo</p>
    <p style="font-size: 0.9rem; color: var(--text-sec); margin-bottom: 16px;">Personalized protocols</p>
    <a href="https://track.revoffers.com/aff_c?offer_id=1284&aff_id=9953&url_id=11752" target="_blank" rel="noopener" style="display: block; background: var(--accent); color: white; padding: 12px; border-radius: 8px; font-weight: 700; text-decoration: none;">Get Started →</a>
  </div>
</div>'''

# Replace using simpler search
if 'Hims TRT</h3>' in content and 'Fridays TRT</h3>' in content and 'Titan TRT</h3>' in content:
    # Find the grid div containing all three providers
    start_marker = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 32px 0;">'
    if start_marker in content:
        start_idx = content.find(start_marker)
        # Find the closing </div> for this grid (should be after all 3 providers)
        search_from = start_idx + len(start_marker)
        provider_count = 0
        current_pos = search_from
        
        while provider_count < 3:
            next_div_end = content.find('</div>', current_pos)
            if next_div_end == -1:
                break
            current_pos = next_div_end + 6
            # Check if this closes a provider card
            if 'Get Started' in content[search_from:current_pos]:
                provider_count += 1
        
        # Now find the final closing </div> for the grid
        end_idx = content.find('</div>', current_pos)
        
        if end_idx != -1:
            content = content[:start_idx] + new_grid + content[end_idx+6:]

# Write back
with open('vs-traditional-trt.astro', 'w') as f:
    f.write(content)

print("✅ Updated vs-traditional-trt.astro")

# Also update the final CTA
content = content.replace(
    'Start with Hims TRT →',
    'Start with Titan ($159/mo) →'
).replace(
    'https://track.revoffers.com/aff_c?offer_id=1075&aff_id=9953&url_id=10995" target="_blank" rel="noopener" style="display: inline-block; background: white; color: #d97706',
    'https://jointitan.com/?toclid=TO-2RbC8WhCGKBLFQ2J90aUB9&utm_source=theoffer&utm_campaign=94" target="_blank" rel="noopener" style="display: inline-block; background: white; color: #d97706'
)

with open('vs-traditional-trt.astro', 'w') as f:
    f.write(content)

print("✅ Updated final CTA in vs-traditional-trt.astro")

PYTHON_EOF

