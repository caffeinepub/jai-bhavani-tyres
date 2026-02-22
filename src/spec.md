# Specification

## Summary
**Goal:** Fix the landing page product card “Order on WhatsApp” CTA so the WhatsApp link reliably opens when clicked.

**Planned changes:**
- Update the “Order on WhatsApp” CTA to be a proper anchor (`<a>`) with the existing WhatsApp URL placed directly in `href`, ensuring no nested/overlaid elements block navigation.
- Verify and correct link markup so the `href` is well-formed and clicking is not prevented by component structure or styling.
- Preserve the exact existing deep links for Bike Tyres (`https://wa.me/91XXXXXXXXXX`) and Car Tyres (`https://wa.me/919242253234`) and keep user-facing text in English.

**User-visible outcome:** On the landing page, clicking “Order on WhatsApp” for Bike Tyres or Car Tyres consistently opens the correct WhatsApp link.
