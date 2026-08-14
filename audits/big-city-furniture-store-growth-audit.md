# Big City Furniture — Growth Audit

**Website:** [www.bigcityfurniturestore.com](https://www.bigcityfurniturestore.com/)  
**Business:** Physical furniture store + Shopify ecommerce  
**Location listed:** 3010 Two Notch Road, Columbia, SC 29204  
**Phone:** 803-500-0101  
**Email:** cs@BigCityFurnitureStore.com  
**Legal entity (Terms):** Big City Furniture is a division of Glory Movement LLC  
**Date:** August 14, 2026  
**Catalog snapshot:** ~6,628 live products · 123 collections · Shopify theme with Shop Pay / Synchrony financing

---

## Executive summary

Big City Furniture has a real commercial foundation: a Columbia, SC showroom on Two Notch Road, a large wholesale catalog (ACME, Foagroup, Sealy, Tempur-Pedic), Synchrony financing, and Shop Pay. That combination can win **store visits, financed tickets, and shipped orders**.

The site is not converting that foundation. It currently reads like a **manufacturer catalog uploaded to Shopify**, not like a trusted local furniture retailer. Shoppers cannot quickly tell who you are, where you are, why they should buy here, what delivery costs, whether they can sit on the sofa in-store, or what happens if the piece does not fit.

The biggest leaks, in order of revenue impact:

1. **Trust is thin and, in places, actively damaged.** Homepage testimonials look generic. The Contact page still shows Shopify placeholder copy. Product pages have leftover theme text (“Describe your recently viewed products here”). There is no review app, no Google rating on-site, and almost no local proof.
2. **The physical store is invisible online.** The homepage never leads with Columbia / Two Notch / “visit the showroom.” There is no map, no store photos, no “see it in person” CTA, and no `LocalBusiness` schema. Local search cannot rank a site that barely claims a location.
3. **Product pages cannot close a furniture sale.** Titles are SKUs (`Safi Sofa LV00216`). Many descriptions are wholesale bullets (`Foam Density: D28`). Dimensions, delivery method, financing, warranty, and related pieces are missing on core SKUs. Shipping is “calculated at checkout.”
4. **Catalog architecture is messy.** `/collections/all` has **0 products**. Duplicate and “Copy” collections are live. The Sofas collection includes sofa *tables*. 122 of 123 collections have empty SEO descriptions.
5. **Policies will abort checkout.** Returns must be started within **2 days of delivery**, with a **15–20% restocking fee**. Mattresses are non-returnable. Hours conflict (10am–7pm vs 10am–8pm). Financing copy tells approved customers to **visit the store**, which blocks online use of the same offer.
6. **Paid media will waste money until the feed and tracking are cleaned.** Shopping ads on 6,600 SKU-titled ACME products will get poor quality scores and likely Merchant Center issues. Meta catalog ads will look the same.

**Primary growth thesis:** Stop trying to be a national Wayfair clone with a raw wholesale catalog. Win Columbia–Midlands first (showroom + local delivery + financing + Sealy/Tempur), then scale ecommerce on a **cleaned, merchandised subset** of best sellers with real photography, dimensions, and delivery promises.

---

## Business snapshot (what we verified on the live site)

| Item | Finding |
|---|---|
| Platform | Shopify (Shop ID path `/76172230873`) |
| Payments advertised | Visa, Mastercard, Amex, Discover, PayPal, Apple Pay, Google Pay, Shop Pay |
| Financing | Synchrony (`synchrony.com` apply link in announcement bar) |
| Brands claimed | ACME Furniture, Foagroup, Tempur-Pedic, Sealy, Big City Furniture collection |
| Catalog mix sampled | Heavy ACME + Foagroup; Sealy mattresses present |
| Hours (homepage bar) | Mon–Sat 10am–7pm |
| Hours (policies / some pages) | Mon–Sat 10:00 AM–8:00 PM |
| Sunday | Closed (not stated clearly on homepage) |
| Shipping claim (FAQ) | Most in-stock items ship 3–7 business days |
| Shipping claim (policy) | Standard delivery 7–14 business days after 1–3 day processing |
| White glove | Mentioned on `/pages/shipping-policy` only — not on product pages |
| Blog | `/blogs/news` is empty |
| Social in schema | Facebook + Instagram URLs present; other `sameAs` fields are blank |
| Directory conflict | Third-party listing for “Big City Furniture LLC” at **9005 Two Notch Rd #0184** with different hours |

---

## 1. First impression & homepage CRO audit

### 1.1 Brand trust and credibility

**Verdict: weak for a high-ticket furniture purchase.**

A first-time visitor sees a modern Shopify storefront, a financing strip, and category tiles. They do **not** see:

- A Columbia, SC showroom
- Years in business (About Us claims 40 years in retail / 30+ in furniture — unused on the homepage)
- A Google / BBB / “as seen in” rating
- Real customer photos
- Staff, delivery trucks, or the storefront
- A clear reason to choose Big City over Ashley, Rooms To Go, Havertys, or Wayfair

What they *do* see that reduces trust:

- **Contact page still contains Shopify’s default line:** “Share information about your brand with your customers…” This is a conversion killer. It signals an unfinished store.
- **About Us grammar error:** “Thank you for allowing you to serve you!”
- **About Us layout repeats phone/email many times**, which looks broken rather than professional.
- **Footer English is awkward:** “Fast and reliable shipping on all US order.” / “PAYMENT SECURE” / “Ensure secure payment processing through trusted gateways.”
- **Homepage reviews are first-name + last-initial only** (Sarah M., James T, Amina K., David R., Priya N., Michael B.) with generic furniture praise and no product, date, photo, or Google link. Sophisticated shoppers treat this as unverified copy. If these are not tied to real orders, they should come down immediately.

Ashley’s Harbison store, Rooms To Go Columbia, and even smaller locals like RM Storehouse lead with **place + people + proof**. Big City currently leads with slogans.

### 1.2 Above the fold

Current fold is essentially:

1. Announcement: “Shop Now Pay over Time” + hours  
2. Hero slideshow: “Trendy & Modern” / “Upgrade Your Home Today” / “Elevate Your Living Space”

**Problems:**

- The value proposition is interchangeable with any furniture URL on the internet.
- No city, no showroom, no offer, no phone, no “Shop living rooms” primary button tied to a benefit.
- Slideshow copy is repetitive (three slides saying trendy/modern/upgrade).
- There is no urgency and no commercial offer (no free local delivery, no 0% months, no weekend event, no mattress bundle).
- “Shop Now Pay over Time” is the strongest element on the page and it is visually secondary.

**Recommended above-the-fold structure:**

> **Columbia’s furniture showroom — shop in-store or delivered.**  
> Sofas, bedroom sets, dining, mattresses (Sealy & Tempur-Pedic). Synchrony financing. White-glove delivery available.  
> **[Shop living rooms] [Get pre-qualified] [Get directions — 3010 Two Notch Rd]**

Keep hours in the bar. Add the phone number as a click-to-call on mobile.

### 1.3 Value proposition clarity

The site never answers the three questions furniture shoppers ask in the first five seconds:

1. **Is this a real store I can visit?** (Yes — but you hide it.)
2. **Do you deliver / assemble / finance?** (Partly — scattered across FAQ and a second shipping page.)
3. **Why not Ashley or Wayfair?** (30+ years, local showroom, brand mattresses, Synchrony, white glove — none of this is packaged.)

“Modern • Stylish • Built to Last” and “Top-tier quality” are not a proposition. They are adjectives.

**Positioning we recommend testing:**

- Primary: *Midlands furniture showroom with nationwide shipping*  
- Proof: Sealy / Tempur-Pedic authorized assortment, ACME/Foagroup breadth, Synchrony, local white-glove  
- Offer: *Free local delivery over $X* or *as low as $XX/month* on qualifying purchases

### 1.4 CTA placement

| Location | Current CTA | Issue |
|---|---|---|
| Announcement bar | Shop Now / Pay over Time | “Shop Now” is vague; financing is the better CTA |
| Hero | Weak / slogan-led | Needs two CTAs: Shop + Visit / Finance |
| Category tiles | Implicit click | Good — keep, but fix “Dinning” typo |
| Product cards | Add to cart | Dangerous on $2,000+ items with no config/dimensions |
| PDP sticky | Add to cart | No financing, no call, no “see in store” |
| FAQ | Phone / email | Good, but duplicated |
| Footer | Phone only | No map, no hours, no review stars |

**Add these CTAs sitewide:**

- Sticky mobile: **Call 803-500-0101** | **Get directions**
- PDP: **Add to cart** + **Check monthly payment** + **See it in our Columbia showroom**
- Cart: **Shop Pay** + **Apply for Synchrony** + estimated delivery

### 1.5 Promotions / offers

There is **no current merchandising offer** on the homepage: no sale event, no delivery threshold, no 0% financing term, no mattress promo, no “this weekend only.”

Furniture conversion is offer-driven. Ashley, Rooms To Go, and Havertys always have a reason to buy this week. Big City asks people to “Upgrade Your Home Today” with no incentive.

**Offers that fit this catalog and market:**

1. Free local delivery (Richland / Lexington County) over $999 or $1,499  
2. Synchrony: 0% for 6/12 months on $999+ (only advertise terms you actually have)  
3. Mattress bundle: free foundation or free local delivery with Sealy/Tempur  
4. Showroom-only: extra % off in-stock floor samples  
5. Youth/bunk week (you have 217 bunk beds — a real assortment advantage)

Until a real offer exists, the announcement bar should at least state the financing benefit in numbers, not “Pay over Time.”

### 1.6 Trust badges, reviews, guarantees

Footer badges are generic and poorly written. They do not show:

- Shop Pay / SSL / payment logos (you accept them — display them)
- Synchrony logo
- Sealy / Tempur-Pedic authorized dealer marks (if true — confirm dealer status before using)
- Google rating
- White-glove delivery
- Warranty (Sealy PDPs mention 10-year warranty; sofa PDPs mention none)

**Do not keep unverified “Loved by Customers” quotes as the primary social proof.** Replace with:

- Google Business Profile embed / review rating
- Product reviews from a Shopify app (Judge.me, Loox, or Stamped)
- Photos of the Two Notch showroom
- Delivery photos / staff names

### 1.7 Navigation and UX

**What works:** Room-based mega menu (Bedroom, Living, Dining, Youth, Home Decor, Outdoor, Office, Mattress) is the right model for furniture.

**What is broken or sloppy:**

- **Typo in a top-level category: “Dinning.”** Fix immediately.
- Youth submenu uses leftover handles: `/collections/dresser-1233`, `/collections/mirror-1-old`, `/collections/nightstand-old`. Customers do not see the handle, but Google does, and staff will keep duplicating collections.
- Home Decor includes “Curios & Display Cabinets” as a homepage style tile — odd merchandising.
- Two FAQ blocks on the homepage cover the same questions in different words. Duplicate content and scroll fatigue.
- Brand FAQ is pasted twice: “Do you carry name brands?” appears back-to-back.
- “Shop by Style” is a good idea (Modern / Contemporary / Traditional / Luxury) but collection quality behind it is uneven (`luxury-bedroom` has 0 products).
- Homepage “Our Top Living collections” immediately shows **sofa tables** next to sofas. That is a merchandising error, not a design preference.
- Price rendering shows a stray slash: `$3,112.50 /` — looks like a broken unit or incomplete money format.
- Empty `/collections/all` means any “view all” or default catalog path can dead-end.

---

## 2. Customer journey analysis

### 2.1 How easy is it to find products?

**For a browser who knows the room: fair.**  
**For a shopper with a specific need: poor.**  
**For a local customer who wants to visit: very poor.**

Happy path that exists today:

Homepage → Living → Sofas → product → add to cart.

Unhappy paths that are more common:

- Search “sofa” → **1,000 results** (Shopify cap) including irrelevant items.
- Click Sofas collection → sofa **tables** mixed in because products are tagged `Sofa`.
- Click `/collections/all` → **“0 products / No products found.”**
- Click Bed Frames → **0 products.**
- Click Luxury Bedroom → **0 products.**
- Land on Contact → placeholder copy, no address, no map, no hours on that page.
- Want dimensions / fabric / delivery price → not on the PDP → bounce.

### 2.2 Category structure

Live catalog: **123 collections**.

Issues found:

| Issue | Examples | Why it hurts |
|---|---|---|
| Empty collections | All (0), Bed Frames (0), Luxury Bedroom (0), Stationary Sets (0), Chairs (Copy) (0) | Dead ends, wasted crawl budget, bad ads landing pages |
| Duplicate titles | Benches, Chairs, Desks, Home Decor (2 each) | Split ranking, confused merchandising |
| Leftover “Copy” collections | `chairs-copy`, `counter-ht-table-copy` (End Tables), `living-room-set-copy` | Looks unfinished; duplicate URLs |
| Dirty handles | `dresser-1233`, `mirror-1-old`, `nightstand-old`, `dalyn-impact` (Rugs) | Internal debt; poor SEO URLs |
| Tag contamination | Sofas collection includes Zander / Zasir / Uchenna **Sofa Tables** | Shoppers lose trust in category quality |
| SEO empty | **122/123 collections have no description**; 73 have no image | Cannot rank “leather sofas Columbia SC” or even “leather sofas” |
| Oversized catch-alls | All Products 6,628 · Upholstery 1,792 · Contemporary 1,355 · Chairs 959 | Unshoppable without serious filters |

**Target architecture (keep it this simple):**

```
Living Room
  Sofas · Sectionals · Loveseats · Recliners · Chairs · Occasional Tables · TV Consoles
Bedroom
  Bedroom Sets · Beds (by size) · Dressers · Nightstands · Chests · Mattresses
Dining
  Dining Sets (by piece count) · Tables · Chairs · Counter Height · Bar
Youth
  Bunk Beds · Kids Beds · Daybeds · Dressers · Desks
Outdoor · Office · Home Decor · Lighting · Sale / In-Stock
Shop by style: Modern · Traditional · Glam · Farmhouse (only if tagged accurately)
```

Unpublish every empty, copy, and duplicate collection this month.

Room landing pages (`/pages/bedroom`, `/pages/living`, etc.) are the right idea but several are empty or thin in the CMS (`dining`, `living`, `outdoor`, `youth`, `financing` body fields came through empty or theme-only). Treat these as **SEO + merchandising hubs**, not pretty headers over a few tiles.

### 2.3 Search experience

- Predictive search does return products.
- Result quality is catalog-dump quality: titles like `SANDBACH - Sofa - FM6013LG-SF-M`.
- Filters on search: **Availability + Price only.** Missing: color, material, seating capacity, bed size, style, brand, “in stock for local pickup.”
- 1,000-result cap on “sofa” means Google-like search is not actually helping; it is a browse dump.
- No synonym control visible (e.g., couch → sofa, chesterfield, settee).

**Install / configure Shopify Search & Discovery** (or Algolia if budget allows) with:

- Synonyms: couch/sofa, TV stand/console, nightstand/bedside table
- Hide sofa tables from sofa search
- Boost: in-stock, has lifestyle image, has reviews, has dimensions
- Filters: size, color, material, brand, price, style

### 2.4 Product discovery

Missing discovery modules that furniture sites live on:

- “Complete the set” is hardcoded empty: **“No related products available.”** Bedroom sets and dining sets should auto-link.
- Recently viewed shows theme placeholder copy.
- No “customers also bought.”
- No “available to see on our Columbia floor.”
- No shop-the-look / room scenes.
- Homepage mattress merchandising is stronger than sofas (brand names, size ranges) — copy that pattern to living and bedroom.

You already have Compare on collection cards. Keep it, but it is a power-user tool, not a discovery engine.

### 2.5 Mobile experience

Not a full device-lab test, but the live template has a mobile menu, announcement bar, search, and cart — standard Shopify. Furniture-specific mobile risks on this theme:

- Hero slideshow + announcement + hours consumes the first screen with **no offer and no store CTA**.
- Add to cart on collection cards for $2,000+ items is easy to tap accidentally.
- Sticky PDP add-to-cart exists (good) but financing/call are not in that sticky bar.
- Click-to-call is not treated as a primary conversion (it should be — many furniture tickets still close on the phone).
- Mega menu depth (Bedroom has ~10 children) needs large tap targets and a “View all bedroom” landing.

**Mobile conversion goals to track separately:** calls, direction clicks, Shop Pay, add to cart.

### 2.6 Friction points likely reducing conversions

1. Unknown shipping cost on expensive items  
2. No dimensions / “will it fit” guidance  
3. SKU-heavy titles that do not match how people search  
4. 2-day return window + restocking fee (once they open the policy)  
5. Hours and delivery-time contradictions  
6. Financing appears in-store-only after approval  
7. Empty related products / placeholders  
8. Contact page looks unfinished  
9. No local pickup path  
10. Reviews cannot be verified  
11. `/collections/all` zero-product dead end  
12. Mattress price shown as a range on the homepage that does not match the PDP ($899–$1,399 vs $999 Queen on Paterson II)

---

## 3. Product page CRO review

We reviewed representative PDPs including **Safi Sofa LV00216** ($2,350, ACME), living-room upholstery, and **Paterson II Tight Top Ultra Firm** (Sealy).

### 3.1 Product images

Typical ACME items have 4–10 images. That is enough *quantity* and not enough *selling*.

What is missing versus stores that convert furniture online:

- Lifestyle / in-room photography  
- Scale reference (sofa next to a 8-foot wall, person seated)  
- Fabric close-ups and true color  
- Back / side / underside / fill  
- Dimension overlay graphics  
- Video (360 or 15-second walkaround)  
- Floor-sample photos from the Columbia showroom  
- “On display now” badge

Mattress pages are closer to usable because Sealy provides marketing copy and feature blocks. Upholstery pages look like a dealer portal.

**90-day photo plan:** shoot the actual showroom vignettes (20 rooms) and attach those images to the matching SKUs. Even 50 SKUs with real photos will outperform 6,000 white-background SKUs in ads and on-site conversion.

### 3.2 Product descriptions

**Safi Sofa** description, in full: “Foam Density: D28.”  
That is also the **meta description** Google will show.

Other ACME examples are wholesale spec dumps:

- “Tight Seat & Back Cushion · Full Foam · Wooden Inner Frame · Plastic Legs · Pillows Included · Kd Legs”
- “Cultured Marble Top · Stainless Steel Frame · Table Top Thickness: 18mm”

These do not sell. They also fail SEO.

**PDP copy template for every hero SKU:**

1. 2-sentence shopper intro (who it’s for, style, where it fits)  
2. Spec table: overall W × D × H, seat height, seat depth, weight, materials, color, assembly  
3. “Fits a ___ room” guidance  
4. Care / warranty  
5. Delivery: parcel vs LTL vs white glove  
6. Financing line: “From $X/mo with Synchrony (subject to credit)”  
7. Showroom: “See this collection at 3010 Two Notch Road”

Do not put the SKU in the H1. Use: **Safi Leather Sofa** — keep `LV00216` as SKU/MPN.

### 3.3 Pricing presentation

- Many prices end in **.50** (`$3,112.50`, `$822.50`, `$587.50`). That pattern looks like a markup formula, not a retail price. Round hero SKUs to $X9 or $X99.
- Collection cards show `$150.00 – $1,617.00` on sets (e.g. FARSUND 4-pc). That range is confusing and will suppress clicks. Show “Starting at” with the complete-set price emphasized.
- Mattress homepage range did not match the PDP default price.
- No compare-at / “was” pricing on sampled ACME items, so there is no sale psychology even when you want it. Do not fake MAP violations — only show compare-at when true.
- No monthly-payment display next to the price. For a $2,350 sofa this is mandatory.

### 3.4 Financing / payment options

Announcement bar and FAQ promote Synchrony. The Financing page then says:

> If approved, you’ll receive a temporary account number that you can **use to shop in-store**.

That is a serious ecommerce leak. Online shoppers who pre-qualify are told to drive to Columbia. If Synchrony / Shopify can take the card online, say so and put **Buy now, pay over time** on the PDP. If they cannot, then:

- Use Shop Pay Installments / PayPal Pay in 4 for online  
- Use Synchrony as the **showroom closer**  
- Make that split explicit so people do not feel baited

Shop Pay is present on PDPs — good. Make the wallet buttons unmistakable above the fold on mobile.

### 3.5 Reviews and social proof

- No Judge.me / Stamped / Loox / Yotpo / Okendo detected on the sofa PDP.  
- Product schema has **no aggregateRating**.  
- Homepage quotes are not tied to SKUs.  
- PDP FAQ is generic site FAQ, not product FAQ.

Furniture conversion without reviews is possible in a showroom. It is very hard online at $1,000–$4,000.

**Action:** install a review app, auto-request reviews 10–14 days after delivery, and pipe Google reviews onto the homepage. Never buy fake reviews.

### 3.6 Delivery / shipping information

PDP line today: **“Shipping calculated at checkout.”**

For furniture, that sentence is a bounce. Shoppers assume a $400 freight surprise.

You actually have a more complete story on `/pages/shipping-policy` (white glove vs LTL vs parcel, processing 1–3 days, 7–14 day delivery). It is not on the PDP. A second policy at `/policies/shipping-policy` is shorter and **does not mention white glove**. Two policies, two timelines (FAQ 3–7 days vs policy 7–14).

**Put a delivery module on every PDP:**

- Local (Columbia / Lexington / Irmo / West Columbia): white glove, estimated $X or free over $Y, typical 3–7 days  
- Statewide SC  
- National freight: calculated, typical 7–14 days after processing  
- “Measure your space” link  
- “Someone 18+ must be present” (you already require this in policy)

### 3.7 Add-to-cart experience

- Quantity selector on a sofa is unnecessary; hide it or default to 1 with a note to call for multiples.  
- Variant is `Default Title` on many ACME items — hide the selector when there is only one option.  
- Sealy mattress has sizes (good) but the label is **“SIze”** (typo).  
- Sticky ATC bar repeats price (good) but not delivery or financing.  
- No inventory honesty (“ships in 3–7 days” vs “special order 4–8 weeks”).  
- No “call to order” for custom/oversize.  
- Related products empty, so AOV add-ons (ottoman, pillows, protection plan) never appear.

### 3.8 Missing elements that would improve sales

Priority add-ons for this catalog:

1. Dimensions + fit guide  
2. Delivery estimator by ZIP  
3. Monthly payment  
4. Reviews  
5. Related / complete-the-set  
6. “On display in Columbia” badge  
7. Warranty + what to do if damaged (FAQ says 48 hours; policy says “as soon as possible” — pick one and print it on the box insert too)  
8. Fabric/color accuracy disclaimer  
9. Protection plan (if you sell one)  
10. Video or showroom photo  
11. Breadcrumbs that match the room IA  
12. Remove leftover theme strings

---

## 4. Checkout & conversion optimization

Shopify checkout itself is usually fine (Shop Pay, Apple Pay, Google Pay). The leaks are **before** checkout and **in the policies adjacent to it**.

### 4.1 Checkout process issues

- Shipping cost and method appear too late.  
- No pickup-in-store option surfaced (huge for a Two Notch showroom).  
- Financing is not a checkout payment method based on the Financing page copy.  
- Cart page is generic; we did not see a strong trust stack (guarantee, delivery promise, phone).  
- High-ticket carts with “quantity 1 sofa” still feel like a fashion checkout, not a furniture order (no delivery appointment, no staircase/access questions).  
- If you use Shopify’s standard checkout, add order notes: gate code, floor, appointment window.

### 4.2 Likely cart abandonment reasons (specific to this site)

1. Freight shock at checkout  
2. “Can I return this?” → 2 days + 15–20% restocking  
3. “Is this leather / what size is it?” unanswered  
4. Unsure if the store is real  
5. Want to finance and cannot finish online  
6. Delivery date unknown  
7. Mattress non-returnable with no trial  
8. Phone hours conflict; Sunday closed and not obvious  
9. Need spouse approval — no email-cart / SMS reminder (no Klaviyo detected)  
10. Comparing to Ashley/RTG who show monthly price and free delivery thresholds

Industry furniture ecommerce abandonment is already high (often 70–85%). This site adds extra, avoidable reasons.

### 4.3 Trust concerns at the point of purchase

- Legal name in terms (Glory Movement LLC) does not match the storefront brand. That is normal, but the About page should explain it in one line so charge descriptors and checks do not scare people.  
- Terms still say customers visit “BigCityFurniture.com” — **wrong domain**. The live domain is `bigcityfurniturestore.com`. Fix every legal URL.  
- Return window is far outside US furniture norms (typically 14–30 days for stocked, non-custom items; mattresses often 100-night trial at national competitors).  
- Damage policy is stricter in the FAQ (48 hours + photos) than the refund policy. Align them.  
- Unverified testimonials next to “Shop with confidence.”  
- NAP inconsistency in the wider web (3010 vs 9005 Two Notch listings).

### 4.4 Recommended checkout / policy improvements

**Do now (copy and settings, not a rebuild):**

- Cart drawer: estimated shipping by ZIP, delivery method, Synchrony/Shop Pay, click-to-call.  
- Enable local pickup for in-stock showroom pieces.  
- Show payment icons and “Secure checkout — Shopify Payments / Shop Pay.”  
- Order confirmation: delivery window, damage-inspection instructions, phone.  
- Klaviyo (or Shopify Email): abandoned checkout, abandoned cart, browse abandonment for PDPs > $500.

**Policy changes to discuss with ownership (these are commercial decisions):**

- Stocked furniture: **14-day** return request window, restocking only on oversized return-freight items, free return if you shipped the wrong/damaged item.  
- Mattresses: if you cannot offer a sleep trial, say so **before** add-to-cart, and compete on price + local delivery + Sealy/Tempur brand — not by surprising people in the policy footer.  
- Publish one shipping policy. Delete or 301 the duplicate.  
- One hours line everywhere: pick 7pm or 8pm. Add Sunday Closed.

---

## 5. Local SEO / Google Business Profile strategy

Columbia is a competitive furniture market. Within a short drive:

- **Ashley** — Harbison (recently renovated ~44,000 sq ft + outlet + sleep shop), plus Forest Drive and Forum Drive  
- **Rooms To Go** — Harbison and Forum Drive  
- **Havertys** — Harbison / Columbiana  
- **Kimbrell’s** — West Columbia, in-house financing  
- **RM Storehouse** — Broad River Rd, local-curated positioning  
- **Furniture Barn, Wes Bolick Bedrooms, Casual Living, Buddy’s, Atlantic Bedding** — including others on **Two Notch Road**

You will not out-brand Ashley on “furniture store Columbia SC” in 30 days. You *can* win **Two Notch / Northeast Columbia / Forest Acres / Dentsville** and high-intent long tails (“bunk beds Columbia SC”, “Tempur-Pedic Columbia”, “furniture financing Two Notch”).

### 5.1 How to improve visibility for local furniture searches

Google’s local pack is driven by **relevance, distance, prominence**.

Right now the website barely supports relevance:

- Homepage title: `Big City Furniture` — no city, no category  
- Homepage meta description: **missing**  
- OG description: `Big City Furniture`  
- Schema: `Organization` + `WebSite` only — **no `LocalBusiness` / `FurnitureStore`**  
- Address is on About and policies, not in the footer or homepage H1  
- No embedded map, no parking notes, no “serving Columbia, Lexington, Irmo…”  
- Empty blog  
- Citation conflict at 9005 Two Notch Rd #0184

**Website local fixes:**

1. Footer NAP on every page (name, 3010 Two Notch Road, Columbia, SC 29204, 803-500-0101, hours).  
2. `FurnitureStore` JSON-LD with geo, hours, phone, sameAs (GBP, Facebook, Instagram).  
3. Homepage H1 that includes Columbia, SC.  
4. Unique store page: `/pages/columbia-sc-showroom` with photos, map, parking, brands, financing, directions from I-20 / Two Notch / Fort Jackson.  
5. City/service pages listed below.  
6. Fix domain references and hours.  
7. Ask Google to recrawl after NAP is consistent.

### 5.2 Keyword opportunities

**Local (GBP + site + Google Ads geo):**

| Keyword type | Examples |
|---|---|
| Core | furniture store Columbia SC, furniture stores near me, furniture Columbia SC |
| Corridor | furniture store Two Notch Road, furniture Northeast Columbia, furniture Dentsville |
| Product + city | sofas Columbia SC, sectional sofa Columbia, bedroom sets Columbia SC, dining room sets Columbia, bunk beds Columbia SC, mattress store Columbia SC |
| Brand + city | Tempur-Pedic Columbia, Sealy mattress Columbia SC, ACME furniture Columbia |
| Intent | furniture financing Columbia SC, furniture delivery Columbia SC, white glove furniture delivery Columbia |
| Nearby cities | furniture Lexington SC, furniture Irmo, furniture West Columbia, furniture Blythewood, furniture Elgin SC |

**National ecommerce (only after titles/feed cleanup):**

sectional sofa, leather sofa, queen bedroom set, 7-piece dining set, bunk bed with storage, power recliner, outdoor dining set, memory foam mattress queen.

Do not target “cheap furniture” if the assortment is $800–$3,000 ACME glam. Match the catalog: **glam / chrome / marble / youth bunks / complete dining sets**.

### 5.3 Local landing page ideas

Create unique pages (500–800 words, real photos, FAQ, product modules, map):

1. Columbia, SC Furniture Showroom (hub)  
2. Sofas & Sectionals in Columbia  
3. Bedroom Furniture Columbia SC  
4. Mattresses — Sealy & Tempur-Pedic in Columbia  
5. Bunk Beds & Youth Furniture (you have unusual depth: 217 bunks)  
6. Dining Sets Columbia SC  
7. Furniture Financing in Columbia (Synchrony)  
8. Furniture Delivery & White Glove — Midlands  
9. Neighborhood/city pages: Lexington, Irmo, West Columbia, Cayce, Forest Acres, Elgin, Blythewood  
10. Fort Jackson / PCS incoming families — “furnish your home fast” (local military demand is real)

Each page should end with **Get directions** and **Shop this category**.

### 5.4 Google Business Profile optimization

If the profile is unverified, incomplete, or sitting on the wrong address (9005 vs 3010), this is the highest-ROI local action in the first 14 days.

**GBP checklist:**

- Verify at **3010 Two Notch Road, Columbia, SC 29204** (confirm this is the public showroom before submitting documents)  
- Primary category: **Furniture store**  
- Secondary: Mattress store, Interior store (only if accurate)  
- Hours matching the site (including Sunday Closed)  
- Phone 803-500-0101  
- Website URL + appointment/financing link  
- Description: Columbia showroom, rooms carried, Sealy/Tempur, Synchrony, delivery area  
- Products: 10+ with photos and prices (sofas, bedroom, mattress, dining, bunk)  
- 15+ real showroom photos, 5 exterior, 5 team/delivery, 5 product close-ups  
- Cover photo: storefront with readable signage  
- Attributes: wheelchair accessible, in-store pickup, delivery, Wi-Fi, etc. as true  
- Weekly Google Posts: new floor sample, financing, weekend hours, mattress promo  
- Q&A: seed 8 real answers (parking, financing, delivery radius, mattress return, Sunday hours)  
- Messaging: on, with a 1-hour reply SLA during store hours  
- UTM on the website link: `?utm_source=google&utm_medium=organic&utm_campaign=gbp`

**Citation cleanup:** Yelp, Apple Maps, Bing Places, Facebook, BBB, Data Axle, Chamber, FurnitureStoresUSA. Suppress or correct the 9005 Two Notch listing if it is not you.

### 5.5 Review generation strategy

You need **Google reviews more than on-site testimonials.** Local pack competitors will have dozens to thousands of reviews.

**In-store process:**

1. After delivery or at pickup, text a short link (Google review URL).  
2. Counter QR code: “How did we do?”  
3. Staff ask only when the customer is happy; never incentive-for-star.  
4. Goal: **8–12 new Google reviews per month** until you pass 50, then maintain 4+/month.  
5. Reply to every review in 48 hours. Mention the room purchased when possible.

**Post-delivery email (Klaviyo):** Day 10 “How’s the new sofa?” → review request. Day 45 → accessories / protection plan.

**Do not** keep generic homepage reviews that cannot be traced. If they are real, add last names (with permission), city (Columbia, Lexington), and a product.

### 5.6 Local competitor opportunities

| Competitor | Their strength | Your opening |
|---|---|---|
| Ashley Harbison | Scale, renovation, mattress wall, ads | Personal showroom help, less chaotic, youth/bunk depth, independent feel |
| Rooms To Go | Packages, financing, TV ads | Mix-and-match ACME glam / marble chrome looks RTG does not own |
| Havertys | Quality perception, design help | Price ladder below Havertys with similar “complete room” merchandising |
| Kimbrell’s | In-house / no-credit financing | If Synchrony declines, you lose this shopper — consider a second lender |
| RM Storehouse | Curated local brand | You win on assortment breadth and mattress brands |
| Two Notch independents | Convenience | Become *the* Two Notch destination with GBP photos + “on display today” |

**Military / Fort Jackson:** create a PCS landing page and GBP posts around move-in season. National chains are slow; a local store that can deliver this week wins.

---

## 6. Google Ads strategy

Do **not** turn on a full-catalog Shopping campaign tomorrow. The feed would advertise titles like `Chateau De Ville Sofa W/5 Pillows (Same LV01588) 58265` with description `Foam Density: D28`. That burns budget and can trigger Merchant Center policy issues (poor unique descriptions, missing GTIN/MPN quality, mismatched images).

### 6.1 High-intent keywords (phased)

**Phase 1 — Local, high intent (geo: 25–35 miles around Columbia):**

- furniture store Columbia SC  
- sofa store Columbia SC / sectional sofa Columbia  
- mattress store Columbia SC / Tempur-Pedic Columbia / Sealy Columbia  
- bedroom furniture Columbia SC  
- dining room sets Columbia SC  
- bunk beds Columbia SC  
- furniture financing Columbia SC  
- [brand] furniture near me  

**Phase 2 — Ecommerce (national or SC+NC+GA), only for SKUs with dimensions, 4+ images, clean titles:**

- leather sofa / velvet sofa / power reclining sofa  
- queen bedroom set / 4 piece bedroom set  
- 7 piece dining set / counter height dining set  
- twin bunk bed with storage  
- outdoor conversation set  

**Always-on brand:** big city furniture, big city furniture Columbia, big city furniture store.

**Negatives:** jobs, hiring, DIY plans, used, craigslist, rental, rent-to-own (unless you want those), wholesale, free, “how to build,” Wayfair coupon (unless competitive), office cubicles, commercial office furniture.

### 6.2 Campaign structure

```
A. Brand Search
B. Local Search — Store visits (call + directions + “Columbia showroom”)
C. Local Search — Product categories (Sofas, Bedroom, Dining, Mattress, Youth)
D. Shopping — Priority SKUs only (first 150–300 cleaned products)
E. Performance Max — after 30+ conversions / month, feed approved
F. Remarketing Display / Demand Gen — site visitors 30–90 days
G. Competitor conquest (optional, small): Ashley Columbia, Rooms To Go Columbia
   (expect high CPC; use only with a strong offer)
```

Use **location bid modifiers**: Columbia, Lexington, Irmo, West Columbia, Blythewood. Exclude far-away accidental traffic if you cannot profitably freight those orders.

### 6.3 Shopping ads

**Merchant Center work before spend:**

- Title formula: `Brand + Product Type + Material/Color + Size`  
  Example: `ACME Safi Leather Sofa – Dark Brown`  
- Description: 500–1,000 unique characters, not foam-density only  
- GTIN if ACME/Sealy provide them; otherwise MPN = SKU, identifier_exists = false only when true  
- Product_type: `Furniture > Living Room > Sofas`  
- Custom labels: `margin_high`, `in_stock_showroom`, `mattress`, `youth`, `price_bucket`  
- Exclude: empty image, no dimensions, duplicate copies, $150–$1,617 nonsense variants until fixed  
- Price must match the PDP exactly  

Start Shopping on **mattresses, bunks, complete dining sets, and 50 showroom sofas** — not 6,628 SKUs.

### 6.4 Remarketing

Furniture consideration cycles are 7–45 days.

- Audience lists: all visitors, PDP viewers, cart, checkout, purchasers (exclude 180 days)  
- Creative: the exact product + “still thinking about it?” + financing + free local delivery  
- YouTube/Demand Gen: showroom walkthrough (even iPhone footage)  
- Customer Match: if email list exists  

Without Klaviyo + Google tag events, this cannot run properly.

### 6.5 Conversion tracking improvements

Implement Google Ads + GA4 with enhanced conversions:

| Event | Why |
|---|---|
| `purchase` (value, tax, shipping) | Primary ecommerce |
| `begin_checkout` | Funnel |
| `add_to_cart` | Optimization (secondary) |
| `generate_lead` | Financing application, contact form |
| `phone_call` (call tracking or Google forwarding on ads) | Store is phone-heavy |
| `directions` / GBP actions | Import GBP metrics |
| `view_item` with item_category | Feed PMax later |

Call tracking is non-optional. A $3,000 sofa often closes on 803-500-0101, not Shop Pay.

Set primary conversion for **local campaigns** to calls + direction clicks + purchases, not add-to-cart.

### 6.6 Budget allocation (starting point)

Assuming a test budget in the **$3,000–$6,000 / month** range (adjust to actual comfort):

| Campaign | Share | Role |
|---|---|---|
| Local Search (categories + store) | 35% | Visits + calls |
| Shopping (cleaned SKUs) | 25% | Ecommerce |
| Brand | 10% | Defend name |
| Remarketing | 15% | Close long cycles |
| Experiment (PMax or Demand Gen) | 15% | Only after tracking is clean |

If the showroom is the profit center, **skew harder to local search + GBP** until online conversion rate is measured. Do not fund national Shopping until PDP conversion is no longer “catalog dump” quality.

CPCs in furniture often run roughly **$1.50–$8+** on generic sofas/mattresses; local “furniture store Columbia SC” can be cheaper but still competitive against Ashley. Bid to CPA based on true AOV (likely $800–$2,500).

---

## 7. Meta Ads (Facebook / Instagram) strategy

Schema already points to:

- [facebook.com/bigcityfurniturestore](https://www.facebook.com/bigcityfurniturestore/)  
- [instagram.com/bigcityfurniturestore](https://www.instagram.com/bigcityfurniturestore/)

Use those as the official profiles. Post **showroom and delivery content**, not only catalog PNGs.

### 7.1 Campaign ideas

1. **Local awareness / traffic** — “Visit our Two Notch showroom this weekend.”  
2. **Catalog sales** — Advantage+ Shopping or catalog retargeting on cleaned SKUs.  
3. **Lead gen** — Synchrony pre-qualify / “get your monthly payment.”  
4. **Mattress** — Sealy/Tempur education + local delivery.  
5. **Life-event** — new home / PCS / first apartment youth bundles.  
6. **Room makeover UGC** — customer photos (with permission) or staff Reels walking the floor.

### 7.2 Audience targeting

**Geo:** 15–25 miles around Columbia first (zip clusters: 29204, 29223, 29229, 29212, 29072, 29063, 29169, 29016, 29045).

**Prospecting interests / broad:** home furnishings, interior design, moving, real estate, parenting (youth), homeowners 25–54.

**Advantage+ broad** often beats stacked interests now — but only with a working pixel and 50+ weekly events. Until then, keep geo tight.

**Exclusions:** recent buyers (180 days), job seekers.

**Lookalikes:** purchasers and high-AOV customers once you have 200+ events.

### 7.3 Creative recommendations

What will not work: ACME white-background carousel of 20 sofas with SKU titles.

What will:

- iPhone Reel: walk in the front door on Two Notch, sit on 3 sofas, end on financing  
- Before/after of a Columbia customer living room  
- “$2,350 sofa · from $X/month” text overlay  
- Unboxing / white-glove delivery timelapse  
- Mattress: person lying down in the sleep shop (if you have one)  
- Bunk bed assembly / kids room (parents share this)  
- Staff expert: “3 sofas under $1,200 in the showroom today”  
- UGC-style: “We drove from Lexington…”  

Shoot 10 assets in one morning at the store. That content also feeds GBP and the homepage.

### 7.4 Retargeting funnel

```
Day 0–3   Viewed PDP     → that product + Shop Pay / “still in stock”
Day 3–14  Viewed 2+ pages → category + financing
Day 7–21  Added to cart   → shipping/delivery reassurance + code only if needed
Day 14–45 Viewed showroom page but no visit → “directions / this weekend hours”
Purchasers → complementary items (pillows, nightstands) at 21–45 days
```

Frequency cap remarketing so you do not stalk people with a $3,000 sofa for 90 days.

### 7.5 Offers that work for furniture customers

- Free local delivery over a threshold  
- 0% for X months (legal-compliant Synchrony terms)  
- Floor-sample weekend (unique to the physical store — national sites cannot copy this)  
- Mattress: free foundation or free removal of old mattress  
- Dining: “table + 6 chairs packaged price”  
- Youth: bunk + mattress bundle  
- “Hold with $X deposit” for showroom shoppers who need spouse approval  

Avoid sitewide 40% off on a catalog that already has .50 pricing — it trains discount seeking and can break MAP on Sealy/Tempur.

---

## 8. Competitor & market opportunities

### 8.1 Gaps vs successful furniture ecommerce

| Capability | Wayfair / Article / Living Spaces | Ashley / RTG | Big City today |
|---|---|---|---|
| Lifestyle photography | Strong | Strong | Catalog only |
| Filters (color, size, material) | Strong | Strong | Price / availability |
| Delivery promise on PDP | Strong | Strong | “Calculated at checkout” |
| Reviews on product | Strong | Strong | None |
| Room packages | Strong | Core business | Broken related products |
| Financing displayed as $/mo | Common | Core | Hidden on financing page |
| Local pickup | N/A or limited | Yes | Not surfaced |
| Store pages / GBP | N/A | Excellent | Weak |
| SEO landing pages | Thousands | Store pages | Thin / empty |
| Email/SMS | Mature | Mature | No Klaviyo detected |
| Return policy | Clear, often 30 days | Clear | 2 days + restocking |
| Title hygiene | Shopper language | Shopper language | SKU + vendor code |

### 8.2 Advantages you can actually own

1. **Showroom on Two Notch** — sit, feel fabric, take it home or schedule white glove. Wayfair cannot do this.  
2. **Assortment depth** — 6,628 SKUs, 217 bunks, 627 dining sets, Sealy + Tempur. Most independents cannot publish this.  
3. **Glam / marble / chrome ACME looks** that national “mid-century beige” brands under-serve in Columbia.  
4. **Independence** — design help without Harbison mall energy, if you staff it that way.  
5. **Military / Midlands delivery** — faster than national freight for local ZIPs.

### 8.3 Competitive advantage plan

**12-month brand idea:**  
“The Two Notch furniture showroom with the big catalog — try it in Columbia, finance it today, deliver it right.”

Operationally that means:

- 150 hero SKUs merchandised like a DTC brand  
- The rest of the catalog available but not dumped on the homepage  
- Inventory flags: **On display / Ship from warehouse / Special order**  
- A mattress sleep story that does not pretend to be a 100-night trial if you cannot honor one  
- Review volume that makes the Google pack possible  
- Ads that send **nearby** shoppers to the store and **distant** shoppers to cleaned PDPs only

---

## 9. Prioritized action plan

### Quick wins (0–30 days)

These are mostly Shopify admin, copy, and GBP. No theme rebuild required.

**Trust and hygiene**

1. Rewrite Contact page; remove Shopify placeholder. Add map, hours, address, click-to-call, form.  
2. Fix About Us copy (“allowing you to serve you”), stop repeating email/phone blocks.  
3. Fix typos: **Dinning → Dining**, **SIze → Size**.  
4. Remove “Describe your recently viewed products here.”  
5. Remove or rewrite unverified homepage testimonials; embed Google rating if available.  
6. One hours policy: homepage, About, shipping, refund, GBP, Facebook.  
7. Fix Terms domain (`BigCityFurniture.com` → `bigcityfurniturestore.com`).  
8. Footer NAP + payment icons + Synchrony + “Serving Columbia, SC since [year].”

**IA / SEO**

9. Point “All products” to `/collections/all-products` (6,628 items). Fix or unpublish `/collections/all` (0 items).  
10. Unpublish empty and Copy collections.  
11. Add homepage title + meta: e.g. `Furniture Store in Columbia, SC | Sofas, Bedroom, Mattresses | Big City Furniture`.  
12. Add `FurnitureStore` schema with address and hours.  
13. Write 150-word descriptions for the top 15 collections (Sofas, Sectionals, Bedroom, Dining Sets, Mattresses, Bunk Beds, etc.).

**Conversion**

14. PDP module: dimensions (even a spreadsheet upload for top 100 SKUs), delivery explainer, financing CTA.  
15. Hide quantity / `Default Title` when not needed.  
16. Related products: at least beds ↔ nightstands, sofas ↔ loveseats/ottomans, mattresses ↔ foundations.  
17. Announcement bar: real offer (free local delivery threshold or Synchrony term).  
18. Cart: ZIP estimate + call link.  
19. Enable local pickup if inventory allows.  
20. Install Klaviyo (or native Shopify Email) + Google/Meta pixels with purchase, ATC, begin_checkout, call click.

**Local**

21. Claim/verify GBP at the correct address.  
22. Upload 20 showroom photos.  
23. Launch review QR + post-purchase text.  
24. Reply to any existing reviews; seed GBP Q&A.  
25. Consistent NAP on major citations; flag the 9005 Two Notch listing if inaccurate.

### Medium-term (30–90 days)

26. **Merchandising cleanup:** retag products so Sofas ≠ sofa tables; split Living vs Accent.  
27. **Search & Discovery filters:** size, color, material, brand, style, in-stock.  
28. **Hero catalog of 150 SKUs:** human titles, 150+ word unique copy, spec tables, compare-at only if true, rounded prices.  
29. **Photo shoot:** 20 vignettes in the showroom; apply to PDPs, GBP, Meta.  
30. **Room landing pages** with local copy (see §5.3).  
31. **Single shipping policy** + PDP delivery app (ShipperHQ, Qikify, or Shopify delivery profiles by ZIP).  
32. **Review app** on PDPs; ask every delivered customer.  
33. **Return policy** revised to something you can defend in ads.  
34. **Financing:** online path or honest “in-store financing / online Shop Pay” split; monthly price on PDPs.  
35. **Google Merchant Center** feed for 150–300 SKUs; launch Shopping + local search.  
36. **Meta catalog** + local Reels; $30–50/day test in the Columbia geo.  
37. **Staff playbook:** every ticket gets a review ask; every floor sample tagged “on display.”  
38. **Mattress PDPs:** align prices, add sleep-trial honesty, link foundations, Sealy/Tempur logos.  
39. **Call tracking** numbers for Ads vs Organic vs GBP.

### Long-term growth strategy (90 days+)

40. **Operate two storefronts in one:**  
    - Local mode: showroom, pickup, white glove Midlands, financing, mattresses.  
    - National mode: only SKUs with freight economics, dimensions, and photos.  
41. Build 50+ SEO pages (rooms × cities × buying guides: “How to measure for a sectional”).  
42. Email/SMS lifecycle: welcome, abandoned cart, post-delivery review, replenishment (pillows, protection, matching pieces).  
43. YouTube / Reels library: weekly floor-walk. This is also remarketing creative.  
44. Inventory sync: hide or badge long-lead special orders.  
45. Trade / staging / property-manager program (Columbia rentals and Airbnb furnishing).  
46. Second lender or in-house option if Synchrony decline rate is high (Kimbrell’s wins those households today).  
47. Reputation target: 100+ Google reviews, 4.6★+.  
48. PMax / national Shopping only after local CPA is stable and feed quality is high.  
49. Consider a 3D/AR viewer on top sofas (expensive; do after photography and reviews).  
50. Expand Midlands delivery marketing to Lexington, Irmo, Sumter, Orangeburg with dedicated landing pages — not a national brand play first.

---

## 90-day KPI scorecard

| KPI | Why it matters | Direction |
|---|---|---|
| Google Business Profile views, calls, direction clicks | Local store growth | Up |
| Google review count / rating | Local pack | 50+ reviews |
| Homepage → collection CTR | Hero/nav clarity | Up |
| Search exit rate / % of searches with 0 results | IA and search | Down |
| PDP add-to-cart rate on hero 150 SKUs | PDP quality | Up |
| Checkout start → purchase | Shipping/policy friction | Up |
| Average order value | Related products + financing | Up |
| % of orders with shipping shown before checkout | Transparency | 100% |
| Phone calls from site + ads | Furniture closing path | Tracked |
| Google Ads CPA (local) vs showroom close rate | Paid efficiency | Measure, then scale |
| Email captured | Remarketing | Klaviyo list growth |
| Refund/chargeback rate | Policy + description accuracy | Watch as you loosen returns |

---

## Implementation note for the Shopify team

Highest-leverage theme/admin tickets, in order:

1. Contact + About + placeholder removal  
2. Footer NAP + LocalBusiness schema + homepage SEO fields  
3. Unpublish bad collections; fix All  
4. PDP template: specs table, delivery, financing, hide Default Title  
5. Related products + recently viewed  
6. Cart ZIP / pickup  
7. Search & Discovery filters  
8. Pixel + Klaviyo  
9. Merchant Center feed columns (title, description, MPN, product_type, custom labels)

Photography, GBP, reviews, and policy decisions need the store owner — they cannot be theme-only.

---

## Appendix A — Pages audited (live)

- `/` homepage  
- `/pages/about-us`, `/pages/about-us-1` (empty duplicate)  
- `/pages/contact` (placeholder)  
- `/pages/financing`  
- `/pages/bedroom`, `/pages/living`, `/pages/shipping-policy`  
- `/policies/shipping-policy`, `/policies/refund-policy`  
- `/pages/terms-and-conditions`  
- `/collections/all` (0 products), `/collections/all-products` (~6,619–6,628), `/collections/sofa` (263, contaminated with tables)  
- `/products/safi-sofa-lv00216`, `/products/paterson-ii-tight-top-ultra-firm`  
- `/search?q=sofa` (1,000 results)  
- `/blogs/news` (empty)  
- `robots.txt` / `sitemap.xml` (11 child sitemaps; ~6,625 product URLs across product sitemaps)

## Appendix B — Collection debt (fix or unpublish)

Empty: All, Bed Frames, Chairs (Copy), Luxury Bedroom, Stationary Sets  
Copy leftovers: `chairs-copy`, `counter-ht-table-copy`, `living-room-set-copy`  
Duplicate titles: Benches, Chairs, Desks, Home Decor  
Dirty URLs: `dresser-1233`, `mirror-1-old`, `nightstand-old`, `dalyn-impact`

---

*This audit is based on the public website, Shopify storefront JSON, on-page schema, and publicly available local-market information as of August 14, 2026. It does not include Shopify admin analytics, Merchant Center diagnostics, or GBP backend access. Connecting GA4, Ads, and GBP would refine budget and priority inside the same plan.*
