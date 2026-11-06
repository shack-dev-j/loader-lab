# 🧪 Loader Lab

> **30 High-Performance, Pure CSS Loading Animations**  
> Zero external dependencies, GPU-accelerated with `transform` and `opacity`, accessible, and instantly customizable via CSS variables.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Pure CSS](https://img.shields.io/badge/CSS-Pure%20HTML%20%2B%20CSS-green.svg)](#)
[![Zero JS Loaders](https://img.shields.io/badge/JS-Zero%20Dependencies-orange.svg)](#)
[![60 FPS](https://img.shields.io/badge/FPS-60%2B%20GPU%20Accelerated-brightgreen.svg)](#)

---

## 📸 Showcase Previews

### Desktop Showcase (Dark & Light)
| Dark Mode (Default) | Light Mode |
|---|---|
| ![Desktop Dark Showcase](screenshots/showcase-desktop-dark.png) | ![Desktop Light Showcase](screenshots/showcase-desktop-light.png) |

### Mobile Showcase & Code Inspector Modal
| Mobile Responsive View | Modal Code Inspector & Variable Tweak |
|---|---|
| ![Mobile Showcase View](screenshots/showcase-mobile-dark.png) | ![Modal Code Inspector](screenshots/modal-inspector.png) |

---

## ✨ Features & Design Rules

- **Pure HTML + CSS**: Every loader is exactly **one HTML block + one CSS block**. Zero JavaScript dependencies for animations.
- **Two CSS Variables**: Every loader is controlled by `--size` (dimensions) and `--color` (accent tint) at the top of its CSS rule.
- **60+ FPS on Cheap Phones**: Animations strictly manipulate `transform` and `opacity` to avoid expensive layout reflows and paint cycles.
- **Accessible & Motion Sensitive**: Full `@media (prefers-reduced-motion: reduce)` fallbacks across all 30 loaders.
- **Responsive from 320px**: Scales seamlessly across small smartphones, tablets, laptops, and ultra-wide desktop monitors.
- **High Contrast & Distinct Palettes**: Designed with purpose-driven color accents (electric cyan, amber, emerald, coral, indigo, neon pink) rather than generic gradients.
- **Self-Contained Files**: Available both in a unified bundle (`dist/loaders.css`) and as 30 individual standalone HTML files in [`loaders/`](loaders/).

---

## 🚀 How to Use

### 1. Copy-Paste a Single Loader
Each design is 100% self-contained. Open any file in the [`loaders/`](loaders/) directory (or click **Copy HTML** / **Copy CSS** on the demo page) and drop it into your project:

```html
<!-- HTML -->
<div class="pb-linear" role="progressbar" aria-label="Loading content" aria-valuemin="0" aria-valuemax="100">
  <div class="pb-linear-bar"></div>
</div>
```

```css
/* CSS */
.pb-linear {
  --size: 240px;      /* Change size in seconds */
  --color: #2563eb;   /* Change primary color */
  --track: rgba(37, 99, 235, 0.15);
  --height: 8px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background-color: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
}

.pb-linear-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color);
  border-radius: 9999px;
  transform-origin: left center;
  animation: pbLinearAnim 1.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

@keyframes pbLinearAnim {
  0% { transform: translateX(-100%) scaleX(0.2); opacity: 0.8; }
  50% { transform: translateX(25%) scaleX(0.6); opacity: 1; }
  100% { transform: translateX(200%) scaleX(0.2); opacity: 0.8; }
}

@media (prefers-reduced-motion: reduce) {
  .pb-linear-bar {
    animation: none;
    transform: translateX(0) scaleX(0.6);
    opacity: 0.9;
  }
}
```

### 2. Use the Consolidated Stylesheet
Link `dist/loaders.css` in your HTML `<head>` to have access to all 30 loader classes at once:

```html
<link rel="stylesheet" href="dist/loaders.css">

<!-- Example 1: Use a spinner with custom size & color -->
<div class="sp-orbit" style="--size: 64px; --color: #10b981;" role="status" aria-label="Loading">
  <div class="sp-orbit-core"></div>
  <div class="sp-orbit-ring">
    <div class="sp-orbit-satellite"></div>
  </div>
</div>

<!-- Example 2: Use a skeleton card placeholder -->
<div class="sk-card" style="--size: 300px;">
  <div class="sk-shimmer sk-card-image"></div>
  <div class="sk-shimmer sk-card-badge"></div>
  <div class="sk-shimmer sk-card-title"></div>
  <div class="sk-shimmer sk-card-text"></div>
  <div class="sk-card-footer">
    <div class="sk-shimmer sk-card-price"></div>
    <div class="sk-shimmer sk-card-btn"></div>
  </div>
</div>
```

---

## 🎨 Gallery of All 30 Designs

### Group 1: 10 Progress Bars

| ID & Name | Preview | Variables & Details |
|---|:---:|---|
| **`pb-linear`**<br>Linear Pulse Flow | ![Linear Pulse Flow](screenshots/loaders/pb-linear.png) | **Variables**: `--size: 240px; --color: #2563eb;`<br>**Description**: Dual-phase traveling wave with smooth indeterminate acceleration.<br>[View File](loaders/pb-linear.html) |
| **`pb-striped`**<br>Barber Stripe Stream | ![Barber Stripe Stream](screenshots/loaders/pb-striped.png) | **Variables**: `--size: 240px; --color: #059669;`<br>**Description**: Continuous diagonal barber stripes gliding seamlessly.<br>[View File](loaders/pb-striped.html) |
| **`pb-segmented`**<br>Digital Segmented LED | ![Digital Segmented LED](screenshots/loaders/pb-segmented.png) | **Variables**: `--size: 240px; --color: #d97706;`<br>**Description**: 8 retro-futuristic digital LED bars with cascading glow.<br>[View File](loaders/pb-segmented.html) |
| **`pb-gradient-shimmer`**<br>Gradient Shimmer Wave | ![Gradient Shimmer Wave](screenshots/loaders/pb-gradient-shimmer.png) | **Variables**: `--size: 240px; --color: #7c3aed;`<br>**Description**: High-gloss gradient bar swept by specular light reflection.<br>[View File](loaders/pb-gradient-shimmer.html) |
| **`pb-step-nodes`**<br>Step Progress Nodes | ![Step Progress Nodes](screenshots/loaders/pb-step-nodes.png) | **Variables**: `--size: 260px; --color: #0284c7;`<br>**Description**: Numbered milestone nodes linked by an animated connecting track.<br>[View File](loaders/pb-step-nodes.html) |
| **`pb-circular-ring`**<br>Circular Radial Gauge | ![Circular Radial Gauge](screenshots/loaders/pb-circular-ring.png) | **Variables**: `--size: 56px; --color: #06b6d4;`<br>**Description**: Circular radial ring gauge with spinning glowing perimeter.<br>[View File](loaders/pb-circular-ring.html) |
| **`pb-liquid-wave`**<br>Hydro Wave Tank | ![Hydro Wave Tank](screenshots/loaders/pb-liquid-wave.png) | **Variables**: `--size: 240px; --color: #0ea5e9;`<br>**Description**: Encapsulated fluid reservoir with dual undulating sine ripples.<br>[View File](loaders/pb-liquid-wave.html) |
| **`pb-laser-runner`**<br>Cyber Neon Runner | ![Cyber Neon Runner](screenshots/loaders/pb-laser-runner.png) | **Variables**: `--size: 240px; --color: #ec4899;`<br>**Description**: Cyberpunk neon laser beam gliding across an internal track.<br>[View File](loaders/pb-laser-runner.html) |
| **`pb-buffered-stream`**<br>Media Buffer Stream | ![Media Buffer Stream](screenshots/loaders/pb-buffered-stream.png) | **Variables**: `--size: 240px; --color: #e11d48;`<br>**Description**: Video streaming bar with secondary preload buffer & playhead.<br>[View File](loaders/pb-buffered-stream.html) |
| **`pb-magnetic-pill`**<br>Magnetic Pill Slider | ![Magnetic Pill Slider](screenshots/loaders/pb-magnetic-pill.png) | **Variables**: `--size: 240px; --color: #10b981;`<br>**Description**: Capsule slider where a magnetic glowing bead bounces with inertia.<br>[View File](loaders/pb-magnetic-pill.html) |

---

### Group 2: 10 Spinners

| ID & Name | Preview | Variables & Details |
|---|:---:|---|
| **`sp-dots`**<br>Clockwork Fading Dots | ![Clockwork Fading Dots](screenshots/loaders/sp-dots.png) | **Variables**: `--size: 48px; --color: #3b82f6;`<br>**Description**: 8 circular dots orbiting with cascading opacity fade.<br>[View File](loaders/sp-dots.html) |
| **`sp-orbit`**<br>Planetary Core & Orbit | ![Planetary Core & Orbit](screenshots/loaders/sp-orbit.png) | **Variables**: `--size: 48px; --color: #8b5cf6;`<br>**Description**: Pulsing central core orbited by a 3D tilted planetary satellite.<br>[View File](loaders/sp-orbit.html) |
| **`sp-morph`**<br>Morphing Geometric Shapes | ![Morphing Geometric Shapes](screenshots/loaders/sp-morph.png) | **Variables**: `--size: 42px; --color: #f59e0b;`<br>**Description**: Smooth polygonal morph between rounded square and circle.<br>[View File](loaders/sp-morph.html) |
| **`sp-pulse`**<br>Acoustic Ripple Pulse | ![Acoustic Ripple Pulse](screenshots/loaders/sp-pulse.png) | **Variables**: `--size: 48px; --color: #10b981;`<br>**Description**: Concentric acoustic sonar rings expanding and dissipating.<br>[View File](loaders/sp-pulse.html) |
| **`sp-dual-rings`**<br>Nested Counter-Rings | ![Nested Counter-Rings](screenshots/loaders/sp-dual-rings.png) | **Variables**: `--size: 50px; --color: #06b6d4;`<br>**Description**: Outer clockwise and inner counter-clockwise nested rings.<br>[View File](loaders/sp-dual-rings.html) |
| **`sp-hourglass`**<br>Faceted 3D Hourglass | ![Faceted 3D Hourglass](screenshots/loaders/sp-hourglass.png) | **Variables**: `--size: 44px; --color: #f97316;`<br>**Description**: Isometric faceted sandglass flipping through 360-degree cycles.<br>[View File](loaders/sp-hourglass.html) |
| **`sp-infinity`**<br>Infinity Ribbon Loop | ![Infinity Ribbon Loop](screenshots/loaders/sp-infinity.png) | **Variables**: `--size: 52px; --color: #ec4899;`<br>**Description**: Interlocked figure-eight infinity nodes pulsing in harmonic balance.<br>[View File](loaders/sp-infinity.html) |
| **`sp-helix`**<br>DNA Oscillating Helix | ![DNA Oscillating Helix](screenshots/loaders/sp-helix.png) | **Variables**: `--size: 48px; --color: #6366f1;`<br>**Description**: Alternating vertical oscillation bars simulating a twisting DNA helix.<br>[View File](loaders/sp-helix.html) |
| **`sp-radar`**<br>Tactical Radar Scanner | ![Tactical Radar Scanner](screenshots/loaders/sp-radar.png) | **Variables**: `--size: 50px; --color: #14b8a6;`<br>**Description**: Sonar scanner with rotating 360-degree sweep beam and target blip.<br>[View File](loaders/sp-radar.html) |
| **`sp-vortex`**<br>Spiral Galaxy Vortex | ![Spiral Galaxy Vortex](screenshots/loaders/sp-vortex.png) | **Variables**: `--size: 48px; --color: #a855f7;`<br>**Description**: Centrifugal spiral vortex arms spinning with motion blur tails.<br>[View File](loaders/sp-vortex.html) |

---

### Group 3: 5 Skeleton Screens

| ID & Name | Preview | Variables & Details |
|---|:---:|---|
| **`sk-card`**<br>Skeleton Card | ![Skeleton Card](screenshots/loaders/sk-card.png) | **Variables**: `--size: 260px; --color: rgba(148, 163, 184, 0.22);`<br>**Description**: Media box, pill badge, title lines, and action button placeholder.<br>[View File](loaders/sk-card.html) |
| **`sk-list`**<br>Skeleton Feed List | ![Skeleton Feed List](screenshots/loaders/sk-list.png) | **Variables**: `--size: 260px; --color: rgba(148, 163, 184, 0.22);`<br>**Description**: Feed items with circular avatar thumbnail and staggered message lines.<br>[View File](loaders/sk-list.html) |
| **`sk-profile`**<br>Skeleton User Profile | ![Skeleton User Profile](screenshots/loaders/sk-profile.png) | **Variables**: `--size: 260px; --color: rgba(148, 163, 184, 0.22);`<br>**Description**: User profile card with centered avatar, bio, 3 stat counters, and follow CTA.<br>[View File](loaders/sk-profile.html) |
| **`sk-table`**<br>Skeleton Data Table | ![Skeleton Data Table](screenshots/loaders/sk-table.png) | **Variables**: `--size: 260px; --color: rgba(148, 163, 184, 0.22);`<br>**Description**: Data table header and 3 data rows with varying column cell widths.<br>[View File](loaders/sk-table.html) |
| **`sk-article`**<br>Skeleton Editorial Article | ![Skeleton Editorial Article](screenshots/loaders/sk-article.png) | **Variables**: `--size: 260px; --color: rgba(148, 163, 184, 0.22);`<br>**Description**: Headline, author avatar with byline, and 3 paragraph text blocks.<br>[View File](loaders/sk-article.html) |

---

### Group 4: 5 Fun Loaders

| ID & Name | Preview | Variables & Details |
|---|:---:|---|
| **`fun-typing`**<br>Typing Chat Bubble | ![Typing Chat Bubble](screenshots/loaders/fun-typing.png) | **Variables**: `--size: 64px; --color: #3b82f6;`<br>**Description**: Chat speech bubble with 3 elastic jumping wave dots.<br>[View File](loaders/fun-typing.html) |
| **`fun-bouncing-ball`**<br>Squash & Stretch Ball | ![Squash & Stretch Ball](screenshots/loaders/fun-bouncing-ball.png) | **Variables**: `--size: 50px; --color: #ef4444;`<br>**Description**: Physics-inspired bouncing ball with squash, stretch, and contact shadow.<br>[View File](loaders/fun-bouncing-ball.html) |
| **`fun-wave-text`**<br>Kinetic Wave Text | ![Kinetic Wave Text](screenshots/loaders/fun-wave-text.png) | **Variables**: `--size: 16px; --color: #8b5cf6;`<br>**Description**: Typographical loader where each letter dances in a kinetic wave.<br>[View File](loaders/fun-wave-text.html) |
| **`fun-battery`**<br>Charging Power Cell | ![Charging Power Cell](screenshots/loaders/fun-battery.png) | **Variables**: `--size: 60px; --color: #10b981;`<br>**Description**: Battery shell with cathode tip and 4 cycling energy charge blocks.<br>[View File](loaders/fun-battery.html) |
| **`fun-rocket`**<br>Blastoff Space Rocket | ![Blastoff Space Rocket](screenshots/loaders/fun-rocket.png) | **Variables**: `--size: 54px; --color: #f97316;`<br>**Description**: Stylized spaceship with ascent wobble, thruster flame, and smoke puffs.<br>[View File](loaders/fun-rocket.html) |

---

## ⚙️ Customization Guide

All loaders honor CSS Custom Properties declared at the root of their selector:

```css
/* Customize on an element level */
.my-custom-spinner {
  --size: 72px;
  --color: #f43f5e;
}

/* Or dynamically customize via inline style */
<div class="sp-dots" style="--size: 32px; --color: #10b981;">
  ...
</div>
```

| Variable | Description | Default Values |
|---|---|---|
| `--size` | Primary outer bounding box or width | `48px` - `64px` (spinners/fun), `240px` - `260px` (bars/skeletons) |
| `--color` | Primary accent color | Hex or RGB color (e.g. `#3b82f6`, `#10b981`) |
| `--track` | Track or background opacity tint | Defaults to `rgba(..., 0.15)` |
| `--height` | Height for linear progress bars | `4px` - `18px` |

---

## ♿ Accessibility & Performance

1. **Reduced Motion**: Every loader has an explicit `@media (prefers-reduced-motion: reduce)` rule that cancels high-frequency movement while preserving clear static state indication.
2. **GPU Acceleration**: We avoid animating layout properties like `width`, `height`, `left`, or `margin`. Everything runs strictly on the compositor thread via `transform` (`translate3d`, `scale`, `rotate`) and `opacity`.
3. **ARIA Semantics**: Loaders include appropriate semantic roles (`role="progressbar"`, `role="status"`), `aria-label` tags, and `aria-valuemin`/`aria-valuemax` attributes.

---

## 🧪 Testing & Automated Screenshots

You can re-run the Playwright screenshot pipeline anytime:

```bash
# Install dependencies
npm install

# Run automated Playwright screenshot capture
node scripts/capture-screenshots.js
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute in both personal and commercial applications.
