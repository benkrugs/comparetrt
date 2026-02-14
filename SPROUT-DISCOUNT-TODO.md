# Sprout Health Discount CTAs - Remaining Pages

## Status
✅ **DONE:** `/reviews/sprout-health/cost/` - Full discount treatment applied
⏳ **TODO:** Apply same treatment to:
- `/reviews/sprout-health/coupons/`
- `/reviews/sprout-health/discounts/`  
- `/reviews/sprout-health/legit/`

## Discount Details
- **Amount:** $150 off first month
- **Code:** SPROUT150
- **Regular price:** $199-$299
- **Discounted first month:** $49
- **Affiliate link:** Already in providers.ts

## Components to Add to Each Page

### 1. Discount Data (after `const { provider } = Astro.props;`)
```typescript
// Discount data per provider
const discounts = {
  'sprout-health': {
    amount: 150,
    description: '$150 off your first month',
    code: 'SPROUT150',
    validThrough: '2026-12-31'
  }
};

const currentDiscount = discounts[provider.slug];
```

### 2. Add to CSS (in <style> block)
Copy from cost.astro lines 75-240:
- `.discount-banner` styles (orange gradient)
- `.inline-cta` styles (green buttons)
- `.sticky-cta` styles (bottom bar)
- Mobile responsive styles

### 3. Discount Banner HTML (after article-header, before content div)
```astro
{currentDiscount && provider.affiliateLink && (
  <div class="discount-banner">
    <div class="discount-banner-content">
      <div class="discount-text">
        <div class="discount-badge">💰 ${currentDiscount.amount} OFF</div>
        <div class="discount-description">{currentDiscount.description}</div>
        <div class="discount-code">Use code: {currentDiscount.code}</div>
      </div>
      <div class="discount-cta">
        <a href={provider.affiliateLink} target="_blank" rel="noopener" class="discount-btn">
          Claim Discount →
        </a>
      </div>
    </div>
  </div>
)}
```

### 4. Inline CTA (add 2-3 per page after key sections)
```astro
{currentDiscount && provider.affiliateLink && (
  <div style="text-align: center; margin: 32px 0;">
    <a href={provider.affiliateLink} target="_blank" rel="noopener" class="inline-cta">
      💰 Claim $150 Off Now →
    </a>
  </div>
)}
```

### 5. Sticky Bottom CTA (before closing </BaseLayout>)
```astro
{currentDiscount && provider.affiliateLink && (
  <div class="sticky-cta" id="stickyCta">
    <div class="sticky-cta-inner">
      <div class="sticky-cta-text">
        <div class="sticky-cta-title">💰 Save $150 off your first month</div>
        <div class="sticky-cta-subtitle">Limited time offer for new {provider.name} customers</div>
      </div>
      <a href={provider.affiliateLink} target="_blank" rel="noopener" class="sticky-cta-btn">
        Claim Discount
      </a>
    </div>
  </div>
)}
```

### 6. Sticky CTA JavaScript (before closing </BaseLayout>)
```astro
<script>
  const stickyCta = document.getElementById('stickyCta');
  if (stickyCta) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        stickyCta.classList.add('show');
      } else {
        stickyCta.classList.remove('show');
      }
    });
  }
</script>
```

## Page-Specific Additions

### coupons.astro
- Update hero text: "💰 Save $150 with exclusive Sprout Health coupon codes"
- Update FAQs to mention $150 discount
- Add CTA after "How to Use Coupon Codes" section
- Add CTA in "Current Offer" box (replace existing)

### discounts.astro  
- Update hero: "💰 Get $150 off Sprout Health with verified discounts"
- Mention discount prominently in intro paragraph
- Add CTA after discount types section
- Update comparison section with discounted price

### legit.astro
- Keep professional tone (legitimacy page)
- Mention discount as evidence of company credibility
- Add ONE subtle inline CTA mid-page
- Keep sticky bottom bar (always visible for conversions)

## Next Brand Discounts to Add

Once Sprout pages are complete, apply similar treatment to:

1. **Medvi** - Get discount amount from Ben
2. **Remedy Meds** - Get discount amount from Ben  
3. **Ro** - Get discount amount from Ben
4. **Others** - As provided

## Testing Checklist

For each updated page:
- [ ] Discount banner appears at top (orange)
- [ ] Discount code visible (SPROUT150)
- [ ] Inline CTAs link to affiliate URL
- [ ] Sticky bottom bar appears after scrolling
- [ ] Mobile responsive (banner stacks, sticky works)
- [ ] All CTAs open in new tab
- [ ] Build succeeds without errors

## Conversion Psychology Applied

✅ Urgency: "Limited time offer"
✅ Value: "$150 OFF" (75% discount)
✅ Social proof: Mentions in FAQs and content
✅ Multiple touchpoints: Banner + inline + sticky
✅ Ease: Code visible, multiple click opportunities
✅ Scarcity: "Valid through 2026-12-31"

## Estimated Conversion Lift

Based on typical SaaS conversion optimization:
- Baseline: ~2-3% conversion rate
- With discount CTAs: ~5-8% conversion rate
- **Expected lift: 2-3x conversions** 🚀

High-intent traffic (cost/coupon/discount pages) converts even better:
- Baseline: ~5-7% conversion
- With discount CTAs: ~12-18% conversion  
- **Expected lift: 2.5x conversions** 💰
