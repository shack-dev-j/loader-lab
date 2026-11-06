/**
 * Complete metadata and definitions for all 30 loaders in Loader Lab
 */

const loaders = [
  // -------------------------------------------------------------
  // Group 1: 10 Progress Bars
  // -------------------------------------------------------------
  {
    id: 'pb-linear',
    name: 'Linear Pulse Flow',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Smooth indeterminate progress track with dual-phase wave translation.',
    defaultSize: '240px',
    defaultColor: '#2563eb',
    html: `<div class="pb-linear" role="progressbar" aria-label="Loading content" aria-valuemin="0" aria-valuemax="100">
  <div class="pb-linear-bar"></div>
</div>`,
    css: `.pb-linear {
  --size: 240px;
  --color: #2563eb;
  --track: rgba(37, 99, 235, 0.15);
  --height: 8px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background-color: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
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
}`
  },
  {
    id: 'pb-striped',
    name: 'Barber Stripe Stream',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Continuous diagonal candy-cane barber stripes gliding infinitely.',
    defaultSize: '240px',
    defaultColor: '#059669',
    html: `<div class="pb-striped" role="progressbar" aria-label="Processing request">
  <div class="pb-striped-track"></div>
</div>`,
    css: `.pb-striped {
  --size: 240px;
  --color: #059669;
  --track: rgba(5, 150, 105, 0.18);
  --height: 14px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background-color: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.pb-striped-track {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 40px);
  height: 100%;
  background-image: repeating-linear-gradient(
    -45deg,
    var(--color),
    var(--color) 12px,
    rgba(255, 255, 255, 0.3) 12px,
    rgba(255, 255, 255, 0.3) 24px
  );
  animation: pbStripedAnim 1s linear infinite;
}

@keyframes pbStripedAnim {
  0% { transform: translateX(0); }
  100% { transform: translateX(-34px); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-striped-track {
    animation: none;
  }
}`
  },
  {
    id: 'pb-segmented',
    name: 'Digital Segmented LED',
    group: 'Progress Bars',
    category: 'progress',
    description: '8 retro-futuristic digital LED segments with cascading glow.',
    defaultSize: '240px',
    defaultColor: '#d97706',
    html: `<div class="pb-segmented" role="progressbar" aria-label="Segmented progress">
  <span class="seg"></span>
  <span class="seg"></span>
  <span class="seg"></span>
  <span class="seg"></span>
  <span class="seg"></span>
  <span class="seg"></span>
  <span class="seg"></span>
  <span class="seg"></span>
</div>`,
    css: `.pb-segmented {
  --size: 240px;
  --color: #d97706;
  --track: rgba(217, 119, 6, 0.15);
  --height: 12px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  display: flex;
  gap: 5px;
  align-items: center;
  box-sizing: border-box;
}

.pb-segmented .seg {
  flex: 1;
  height: 100%;
  background-color: var(--color);
  border-radius: 3px;
  opacity: 0.18;
  animation: pbSegmentedAnim 1.4s ease-in-out infinite;
}

.pb-segmented .seg:nth-child(1) { animation-delay: 0.0s; }
.pb-segmented .seg:nth-child(2) { animation-delay: 0.12s; }
.pb-segmented .seg:nth-child(3) { animation-delay: 0.24s; }
.pb-segmented .seg:nth-child(4) { animation-delay: 0.36s; }
.pb-segmented .seg:nth-child(5) { animation-delay: 0.48s; }
.pb-segmented .seg:nth-child(6) { animation-delay: 0.60s; }
.pb-segmented .seg:nth-child(7) { animation-delay: 0.72s; }
.pb-segmented .seg:nth-child(8) { animation-delay: 0.84s; }

@keyframes pbSegmentedAnim {
  0%, 100% { opacity: 0.18; transform: scaleY(0.85); }
  50% { opacity: 1; transform: scaleY(1); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-segmented .seg {
    animation: none;
    opacity: 0.75;
    transform: none;
  }
}`
  },
  {
    id: 'pb-gradient-shimmer',
    name: 'Gradient Shimmer Wave',
    group: 'Progress Bars',
    category: 'progress',
    description: 'High-gloss metallic gradient bar with sweeping specular reflection beam.',
    defaultSize: '240px',
    defaultColor: '#7c3aed',
    html: `<div class="pb-gradient-shimmer" role="progressbar" aria-label="Loading buffer">
  <div class="pb-shimmer-fill"></div>
</div>`,
    css: `.pb-gradient-shimmer {
  --size: 240px;
  --color: #7c3aed;
  --track: rgba(124, 58, 237, 0.16);
  --height: 10px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background-color: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.pb-shimmer-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--color) 0%, #c084fc 50%, var(--color) 100%);
  border-radius: 9999px;
  overflow: hidden;
}

.pb-shimmer-fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.8) 50%,
    transparent 100%
  );
  animation: pbShimmerSweep 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes pbShimmerSweep {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-shimmer-fill::after {
    animation: none;
    opacity: 0.3;
    transform: translateX(0);
  }
}`
  },
  {
    id: 'pb-step-nodes',
    name: 'Step Progress Nodes',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Connected milestone step nodes with animated track line and pulse indicator.',
    defaultSize: '260px',
    defaultColor: '#0284c7',
    html: `<div class="pb-step-nodes" role="progressbar" aria-label="Step progress">
  <div class="pb-step-line">
    <div class="pb-step-line-fill"></div>
  </div>
  <div class="pb-node active">1</div>
  <div class="pb-node active">2</div>
  <div class="pb-node pulsing">3</div>
  <div class="pb-node">4</div>
</div>`,
    css: `.pb-step-nodes {
  --size: 260px;
  --color: #0284c7;
  --track: rgba(2, 132, 199, 0.18);
  --node-size: 26px;
  width: var(--size);
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  padding: 6px 0;
}

.pb-step-line {
  position: absolute;
  left: calc(var(--node-size) / 2);
  right: calc(var(--node-size) / 2);
  top: 50%;
  height: 4px;
  background-color: var(--track);
  transform: translateY(-50%);
  z-index: 1;
  overflow: hidden;
  border-radius: 9999px;
}

.pb-step-line-fill {
  width: 100%;
  height: 100%;
  background-color: var(--color);
  transform-origin: left center;
  animation: pbStepLineAnim 2.4s ease-in-out infinite;
}

.pb-step-nodes .pb-node {
  width: var(--node-size);
  height: var(--node-size);
  border-radius: 50%;
  background-color: var(--track);
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
}

.pb-step-nodes .pb-node.active {
  background-color: var(--color);
  color: #ffffff;
}

.pb-step-nodes .pb-node.pulsing {
  background-color: var(--color);
  color: #ffffff;
  animation: pbNodePulse 1.2s ease-in-out infinite;
}

@keyframes pbStepLineAnim {
  0% { transform: scaleX(0.2); }
  50% { transform: scaleX(0.75); }
  100% { transform: scaleX(0.2); }
}

@keyframes pbNodePulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(2, 132, 199, 0.4);
  }
  50% {
    transform: scale(1.15);
    box-shadow: 0 0 0 6px rgba(2, 132, 199, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pb-step-line-fill,
  .pb-step-nodes .pb-node.pulsing {
    animation: none;
    transform: none;
    box-shadow: none;
  }
}`
  },
  {
    id: 'pb-circular-ring',
    name: 'Circular Radial Gauge',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Circular ring progress bar with spinning glowing sweep perimeter.',
    defaultSize: '56px',
    defaultColor: '#06b6d4',
    html: `<div class="pb-circular-ring" role="progressbar" aria-label="Circular progress">
  <div class="pb-circle-track"></div>
  <div class="pb-circle-runner"></div>
</div>`,
    css: `.pb-circular-ring {
  --size: 56px;
  --color: #06b6d4;
  --track: rgba(6, 182, 212, 0.15);
  --thickness: 5px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.pb-circle-track {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: var(--thickness) solid var(--track);
}

.pb-circle-runner {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: var(--thickness) solid transparent;
  border-top-color: var(--color);
  border-right-color: var(--color);
  animation: pbCircleSpin 1.1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

@keyframes pbCircleSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-circle-runner {
    animation: none;
    transform: rotate(45deg);
    opacity: 0.85;
  }
}`
  },
  {
    id: 'pb-liquid-wave',
    name: 'Hydro Wave Tank',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Encapsulated liquid reservoir with dual undulating sinusoidal ripples.',
    defaultSize: '240px',
    defaultColor: '#0ea5e9',
    html: `<div class="pb-liquid-wave" role="progressbar" aria-label="Liquid capacity">
  <div class="pb-liquid-body">
    <div class="pb-wave wave1"></div>
    <div class="pb-wave wave2"></div>
  </div>
</div>`,
    css: `.pb-liquid-wave {
  --size: 240px;
  --color: #0ea5e9;
  --track: rgba(14, 165, 233, 0.16);
  --height: 18px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background-color: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.pb-liquid-body {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(14, 165, 233, 0.5) 0%, var(--color) 100%);
  border-radius: 9999px;
  overflow: hidden;
}

.pb-wave {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -120%;
  left: -50%;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 40%;
  animation: pbWaveRotate 3s linear infinite;
}

.pb-wave.wave2 {
  background-color: rgba(255, 255, 255, 0.18);
  border-radius: 36%;
  animation: pbWaveRotate 4.5s linear infinite reverse;
}

@keyframes pbWaveRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-wave {
    animation: none;
    transform: rotate(20deg);
  }
}`
  },
  {
    id: 'pb-laser-runner',
    name: 'Cyber Neon Runner',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Cyberpunk neon laser beam gliding across a high-contrast groove.',
    defaultSize: '240px',
    defaultColor: '#ec4899',
    html: `<div class="pb-laser-runner" role="progressbar" aria-label="Laser sync">
  <div class="pb-laser-beam"></div>
</div>`,
    css: `.pb-laser-runner {
  --size: 240px;
  --color: #ec4899;
  --track: rgba(236, 72, 153, 0.15);
  --height: 4px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background-color: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.pb-laser-beam {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 35%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--color) 50%,
    #f472b6 90%,
    #ffffff 100%
  );
  border-radius: 9999px;
  box-shadow: 0 0 10px var(--color), 0 0 4px #f472b6;
  animation: pbLaserSlide 1.5s ease-in-out infinite alternate;
}

@keyframes pbLaserSlide {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(var(--size) - 80px)); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-laser-beam {
    animation: none;
    transform: translateX(calc(var(--size) / 3));
  }
}`
  },
  {
    id: 'pb-buffered-stream',
    name: 'Media Buffer Stream',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Video player streaming bar with preload buffer line and active playback pulse.',
    defaultSize: '240px',
    defaultColor: '#e11d48',
    html: `<div class="pb-buffered-stream" role="progressbar" aria-label="Media buffering">
  <div class="pb-buf-preload"></div>
  <div class="pb-buf-play"></div>
</div>`,
    css: `.pb-buffered-stream {
  --size: 240px;
  --color: #e11d48;
  --track: rgba(225, 29, 72, 0.15);
  --buf-color: rgba(225, 29, 72, 0.35);
  --height: 6px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background-color: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.pb-buf-preload {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 80%;
  background-color: var(--buf-color);
  border-radius: 9999px;
  transform-origin: left center;
  animation: pbBufPulse 2s ease-in-out infinite;
}

.pb-buf-play {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 45%;
  background-color: var(--color);
  border-radius: 9999px;
  transform-origin: left center;
  animation: pbPlayStream 2.6s linear infinite;
}

@keyframes pbBufPulse {
  0%, 100% { opacity: 0.5; transform: scaleX(0.7); }
  50% { opacity: 0.9; transform: scaleX(0.85); }
}

@keyframes pbPlayStream {
  0% { transform: scaleX(0.1); }
  60% { transform: scaleX(0.5); }
  100% { transform: scaleX(0.8); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-buf-preload,
  .pb-buf-play {
    animation: none;
    transform: scaleX(0.6);
  }
}`
  },
  {
    id: 'pb-magnetic-pill',
    name: 'Magnetic Pill Slider',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Sleek rounded capsule where a glowing magnetic bead bounces with inertia.',
    defaultSize: '240px',
    defaultColor: '#10b981',
    html: `<div class="pb-magnetic-pill" role="progressbar" aria-label="Magnetic slider">
  <div class="pb-mag-dot"></div>
</div>`,
    css: `.pb-magnetic-pill {
  --size: 240px;
  --color: #10b981;
  --track: rgba(16, 185, 129, 0.18);
  --height: 14px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background-color: var(--track);
  border-radius: 9999px;
  position: relative;
  padding: 2px;
  box-sizing: border-box;
}

.pb-mag-dot {
  width: 24px;
  height: 10px;
  background-color: var(--color);
  border-radius: 9999px;
  box-shadow: 0 0 6px rgba(16, 185, 129, 0.5);
  animation: pbMagneticAnim 1.6s cubic-bezier(0.77, 0, 0.175, 1) infinite alternate;
}

@keyframes pbMagneticAnim {
  0% { transform: translateX(0) scaleX(0.9); }
  50% { transform: translateX(calc(var(--size) / 2 - 14px)) scaleX(1.3); }
  100% { transform: translateX(calc(var(--size) - 28px)) scaleX(0.9); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-mag-dot {
    animation: none;
    transform: translateX(calc(var(--size) / 2 - 14px));
  }
}`
  },

  // -------------------------------------------------------------
  // Group 2: 10 Spinners
  // -------------------------------------------------------------
  {
    id: 'sp-dots',
    name: 'Clockwork Fading Dots',
    group: 'Spinners',
    category: 'spinner',
    description: '8 circular dots arranged along a clock ring with cascading opacity wave.',
    defaultSize: '48px',
    defaultColor: '#3b82f6',
    html: `<div class="sp-dots" role="status" aria-label="Loading">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>`,
    css: `.sp-dots {
  --size: 48px;
  --color: #3b82f6;
  width: var(--size);
  height: var(--size);
  position: relative;
  box-sizing: border-box;
}

.sp-dots .dot {
  position: absolute;
  top: 0;
  left: calc(50% - 3px);
  width: 6px;
  height: 6px;
  background-color: var(--color);
  border-radius: 50%;
  transform-origin: 3px calc(var(--size) / 2);
  animation: spDotsFade 1.2s infinite ease-in-out;
}

.sp-dots .dot:nth-child(1) { transform: rotate(0deg); animation-delay: -1.05s; }
.sp-dots .dot:nth-child(2) { transform: rotate(45deg); animation-delay: -0.9s; }
.sp-dots .dot:nth-child(3) { transform: rotate(90deg); animation-delay: -0.75s; }
.sp-dots .dot:nth-child(4) { transform: rotate(135deg); animation-delay: -0.6s; }
.sp-dots .dot:nth-child(5) { transform: rotate(180deg); animation-delay: -0.45s; }
.sp-dots .dot:nth-child(6) { transform: rotate(225deg); animation-delay: -0.3s; }
.sp-dots .dot:nth-child(7) { transform: rotate(270deg); animation-delay: -0.15s; }
.sp-dots .dot:nth-child(8) { transform: rotate(315deg); animation-delay: 0s; }

@keyframes spDotsFade {
  0%, 100% { opacity: 0.15; transform: scale(0.75); }
  50% { opacity: 1; transform: scale(1.15); }
}

@media (prefers-reduced-motion: reduce) {
  .sp-dots .dot {
    animation: none;
    opacity: 0.6;
    transform: scale(1);
  }
}`
  },
  {
    id: 'sp-orbit',
    name: 'Planetary Core & Orbit',
    group: 'Spinners',
    category: 'spinner',
    description: 'Pulsing central core sphere circled by a rapid orbiting satellite beacon.',
    defaultSize: '48px',
    defaultColor: '#8b5cf6',
    html: `<div class="sp-orbit" role="status" aria-label="Loading">
  <div class="sp-orbit-core"></div>
  <div class="sp-orbit-ring">
    <div class="sp-orbit-satellite"></div>
  </div>
</div>`,
    css: `.sp-orbit {
  --size: 48px;
  --color: #8b5cf6;
  width: var(--size);
  height: var(--size);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.sp-orbit-core {
  width: 14px;
  height: 14px;
  background-color: var(--color);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.6);
  animation: spOrbitPulse 1.8s ease-in-out infinite;
}

.sp-orbit-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px dashed rgba(139, 92, 246, 0.35);
  animation: spOrbitSpin 1.8s linear infinite;
}

.sp-orbit-satellite {
  position: absolute;
  top: -4px;
  left: calc(50% - 4px);
  width: 8px;
  height: 8px;
  background-color: var(--color);
  border-radius: 50%;
  box-shadow: 0 0 6px #c4b5fd;
}

@keyframes spOrbitSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spOrbitPulse {
  0%, 100% { transform: scale(0.85); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .sp-orbit-ring,
  .sp-orbit-core {
    animation: none;
    transform: none;
  }
}`
  },
  {
    id: 'sp-morph',
    name: 'Morphing Geometric Shapes',
    group: 'Spinners',
    category: 'spinner',
    description: 'Polygonal element that dynamically morphs between rounded square and circle.',
    defaultSize: '42px',
    defaultColor: '#f59e0b',
    html: `<div class="sp-morph" role="status" aria-label="Loading"></div>`,
    css: `.sp-morph {
  --size: 42px;
  --color: #f59e0b;
  width: var(--size);
  height: var(--size);
  background-color: var(--color);
  border-radius: 8px;
  animation: spMorphSequence 2.4s ease-in-out infinite;
  box-sizing: border-box;
}

@keyframes spMorphSequence {
  0% { transform: rotate(0deg) scale(1); border-radius: 8px; }
  25% { transform: rotate(90deg) scale(0.7); border-radius: 50%; }
  50% { transform: rotate(180deg) scale(1); border-radius: 8px; }
  75% { transform: rotate(270deg) scale(0.7); border-radius: 50%; }
  100% { transform: rotate(360deg) scale(1); border-radius: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .sp-morph {
    animation: none;
    transform: none;
  }
}`
  },
  {
    id: 'sp-pulse',
    name: 'Acoustic Ripple Pulse',
    group: 'Spinners',
    category: 'spinner',
    description: 'Concentric acoustic sonar waves expanding in harmonic sequence.',
    defaultSize: '48px',
    defaultColor: '#10b981',
    html: `<div class="sp-pulse" role="status" aria-label="Loading">
  <div class="sp-pulse-ring"></div>
  <div class="sp-pulse-ring"></div>
  <div class="sp-pulse-ring"></div>
</div>`,
    css: `.sp-pulse {
  --size: 48px;
  --color: #10b981;
  width: var(--size);
  height: var(--size);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.sp-pulse-ring {
  position: absolute;
  inset: 0;
  border: 3px solid var(--color);
  border-radius: 50%;
  opacity: 0;
  animation: spPulseAnim 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
}

.sp-pulse-ring:nth-child(2) { animation-delay: 0.6s; }
.sp-pulse-ring:nth-child(3) { animation-delay: 1.2s; }

@keyframes spPulseAnim {
  0% { transform: scale(0.1); opacity: 1; }
  70% { opacity: 0.5; }
  100% { transform: scale(1.15); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .sp-pulse-ring {
    animation: none;
    transform: scale(0.85);
    opacity: 0.4;
  }
}`
  },
  {
    id: 'sp-dual-rings',
    name: 'Nested Counter-Rings',
    group: 'Spinners',
    category: 'spinner',
    description: 'Precision dual nested rings rotating in opposing directions.',
    defaultSize: '50px',
    defaultColor: '#06b6d4',
    html: `<div class="sp-dual-rings" role="status" aria-label="Loading">
  <div class="sp-dual-outer"></div>
  <div class="sp-dual-inner"></div>
</div>`,
    css: `.sp-dual-rings {
  --size: 50px;
  --color: #06b6d4;
  --accent: #3b82f6;
  width: var(--size);
  height: var(--size);
  position: relative;
  box-sizing: border-box;
}

.sp-dual-outer {
  position: absolute;
  inset: 0;
  border: 3px solid transparent;
  border-top-color: var(--color);
  border-bottom-color: var(--color);
  border-radius: 50%;
  animation: spSpinClockwise 1.2s linear infinite;
}

.sp-dual-inner {
  position: absolute;
  inset: 8px;
  border: 3px solid transparent;
  border-left-color: var(--accent);
  border-right-color: var(--accent);
  border-radius: 50%;
  animation: spSpinCounter 0.8s linear infinite reverse;
}

@keyframes spSpinClockwise {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spSpinCounter {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .sp-dual-outer,
  .sp-dual-inner {
    animation: none;
    transform: rotate(45deg);
  }
}`
  },
  {
    id: 'sp-hourglass',
    name: 'Faceted 3D Hourglass',
    group: 'Spinners',
    category: 'spinner',
    description: 'Isometric sandglass flipping cleanly through 360-degree cycles.',
    defaultSize: '44px',
    defaultColor: '#f97316',
    html: `<div class="sp-hourglass" role="status" aria-label="Loading"></div>`,
    css: `.sp-hourglass {
  --size: 44px;
  --color: #f97316;
  width: var(--size);
  height: var(--size);
  position: relative;
  box-sizing: border-box;
  animation: spHourglassFlip 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}

.sp-hourglass::before,
.sp-hourglass::after {
  content: "";
  position: absolute;
  left: 50%;
  width: 0;
  height: 0;
  transform: translateX(-50%);
  border-left: calc(var(--size) * 0.35) solid transparent;
  border-right: calc(var(--size) * 0.35) solid transparent;
}

.sp-hourglass::before {
  top: 0;
  border-top: calc(var(--size) * 0.45) solid var(--color);
}

.sp-hourglass::after {
  bottom: 0;
  border-bottom: calc(var(--size) * 0.45) solid var(--color);
}

@keyframes spHourglassFlip {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(0.9); }
  100% { transform: rotate(360deg) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .sp-hourglass {
    animation: none;
    transform: rotate(45deg);
  }
}`
  },
  {
    id: 'sp-infinity',
    name: 'Infinity Ribbon Loop',
    group: 'Spinners',
    category: 'spinner',
    description: 'Interlocked dual infinity nodes pulsing in harmonic balance.',
    defaultSize: '52px',
    defaultColor: '#ec4899',
    html: `<div class="sp-infinity" role="status" aria-label="Loading">
  <div class="sp-infinity-node"></div>
  <div class="sp-infinity-node"></div>
</div>`,
    css: `.sp-infinity {
  --size: 52px;
  --color: #ec4899;
  width: var(--size);
  height: calc(var(--size) * 0.55);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

.sp-infinity-node {
  width: calc(var(--size) * 0.45);
  height: calc(var(--size) * 0.45);
  border: 4px solid var(--color);
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  animation: spInfinityPulse 1.4s ease-in-out infinite alternate;
}

.sp-infinity-node:last-child {
  animation-delay: -0.7s;
}

@keyframes spInfinityPulse {
  0% { transform: scale(0.85); opacity: 0.5; }
  100% { transform: scale(1.15); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .sp-infinity-node {
    animation: none;
    transform: scale(1);
    opacity: 0.8;
  }
}`
  },
  {
    id: 'sp-helix',
    name: 'DNA Oscillating Helix',
    group: 'Spinners',
    category: 'spinner',
    description: 'Alternating vertical oscillation bars simulating a twisting DNA helix.',
    defaultSize: '48px',
    defaultColor: '#6366f1',
    html: `<div class="sp-helix" role="status" aria-label="Loading">
  <span class="sp-helix-bar"></span>
  <span class="sp-helix-bar"></span>
  <span class="sp-helix-bar"></span>
  <span class="sp-helix-bar"></span>
  <span class="sp-helix-bar"></span>
</div>`,
    css: `.sp-helix {
  --size: 48px;
  --color: #6366f1;
  width: var(--size);
  height: calc(var(--size) * 0.65);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

.sp-helix-bar {
  width: 4px;
  height: 100%;
  background-color: var(--color);
  border-radius: 9999px;
  animation: spHelixOscillate 1.2s ease-in-out infinite;
}

.sp-helix-bar:nth-child(1) { animation-delay: 0.0s; }
.sp-helix-bar:nth-child(2) { animation-delay: 0.15s; }
.sp-helix-bar:nth-child(3) { animation-delay: 0.3s; }
.sp-helix-bar:nth-child(4) { animation-delay: 0.45s; }
.sp-helix-bar:nth-child(5) { animation-delay: 0.6s; }

@keyframes spHelixOscillate {
  0%, 100% { transform: scaleY(0.25); opacity: 0.35; }
  50% { transform: scaleY(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .sp-helix-bar {
    animation: none;
    transform: scaleY(0.7);
    opacity: 0.8;
  }
}`
  },
  {
    id: 'sp-radar',
    name: 'Tactical Radar Scanner',
    group: 'Spinners',
    category: 'spinner',
    description: 'Circular radar grid with rotating sweep beam and blinking target blip.',
    defaultSize: '50px',
    defaultColor: '#14b8a6',
    html: `<div class="sp-radar" role="status" aria-label="Scanning">
  <div class="sp-radar-blip"></div>
</div>`,
    css: `.sp-radar {
  --size: 50px;
  --color: #14b8a6;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 2px solid rgba(20, 184, 166, 0.35);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.sp-radar::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    transparent 280deg,
    rgba(20, 184, 166, 0.6) 360deg
  );
  animation: spRadarRotate 1.5s linear infinite;
}

.sp-radar-blip {
  position: absolute;
  top: 25%;
  right: 25%;
  width: 5px;
  height: 5px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 6px var(--color);
  animation: spRadarBlip 1.5s ease-in-out infinite;
}

@keyframes spRadarRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spRadarBlip {
  0%, 100% { opacity: 0; transform: scale(0.5); }
  40% { opacity: 1; transform: scale(1.3); }
  60% { opacity: 0.2; transform: scale(0.8); }
}

@media (prefers-reduced-motion: reduce) {
  .sp-radar::before,
  .sp-radar-blip {
    animation: none;
    opacity: 0.5;
  }
}`
  },
  {
    id: 'sp-vortex',
    name: 'Spiral Galaxy Vortex',
    group: 'Spinners',
    category: 'spinner',
    description: 'Swirling spiral vortex arms rotating with centrifugal acceleration.',
    defaultSize: '48px',
    defaultColor: '#a855f7',
    html: `<div class="sp-vortex" role="status" aria-label="Loading">
  <div class="sp-vortex-arm"></div>
  <div class="sp-vortex-arm"></div>
  <div class="sp-vortex-arm"></div>
</div>`,
    css: `.sp-vortex {
  --size: 48px;
  --color: #a855f7;
  width: var(--size);
  height: var(--size);
  position: relative;
  box-sizing: border-box;
  animation: spVortexSpin 1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite;
}

.sp-vortex-arm {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--color);
  border-left-color: rgba(168, 85, 247, 0.4);
}

.sp-vortex-arm:nth-child(2) { transform: rotate(60deg) scale(0.8); }
.sp-vortex-arm:nth-child(3) { transform: rotate(120deg) scale(0.6); }

@keyframes spVortexSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .sp-vortex {
    animation: none;
    transform: rotate(30deg);
  }
}`
  },

  // -------------------------------------------------------------
  // Group 3: 5 Skeleton Screens
  // -------------------------------------------------------------
  {
    id: 'sk-card',
    name: 'Skeleton Card',
    group: 'Skeleton Screens',
    category: 'skeleton',
    description: 'E-commerce card with 16:9 media box, pill badge, title lines, and action button.',
    defaultSize: '260px',
    defaultColor: 'rgba(148, 163, 184, 0.22)',
    html: `<div class="sk-card" role="status" aria-label="Loading card placeholder">
  <div class="sk-shimmer sk-card-image"></div>
  <div class="sk-shimmer sk-card-badge"></div>
  <div class="sk-shimmer sk-card-title"></div>
  <div class="sk-shimmer sk-card-text"></div>
  <div class="sk-card-footer">
    <div class="sk-shimmer sk-card-price"></div>
    <div class="sk-shimmer sk-card-btn"></div>
  </div>
</div>`,
    css: `.sk-shimmer {
  position: relative;
  overflow: hidden;
  background-color: var(--color, rgba(148, 163, 184, 0.22));
}

.sk-shimmer::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%);
  animation: skShimmerTranslate 1.6s infinite;
}

@keyframes skShimmerTranslate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sk-card {
  --size: 260px;
  --color: rgba(148, 163, 184, 0.22);
  width: var(--size);
  max-width: 100%;
  padding: 14px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.15);
  box-sizing: border-box;
}

.sk-card-image { width: 100%; height: 100px; border-radius: 8px; margin-bottom: 12px; }
.sk-card-badge { width: 60px; height: 12px; border-radius: 9999px; margin-bottom: 10px; }
.sk-card-title { width: 85%; height: 16px; border-radius: 4px; margin-bottom: 8px; }
.sk-card-text { width: 60%; height: 12px; border-radius: 4px; margin-bottom: 14px; }
.sk-card-footer { display: flex; justify-content: space-between; align-items: center; }
.sk-card-price { width: 45px; height: 16px; border-radius: 4px; }
.sk-card-btn { width: 70px; height: 24px; border-radius: 6px; }

@media (prefers-reduced-motion: reduce) {
  .sk-shimmer::after { animation: none; opacity: 0.1; }
}`
  },
  {
    id: 'sk-list',
    name: 'Skeleton Feed List',
    group: 'Skeleton Screens',
    category: 'skeleton',
    description: 'Notification or message feed with circular avatars and staggered text lines.',
    defaultSize: '260px',
    defaultColor: 'rgba(148, 163, 184, 0.22)',
    html: `<div class="sk-list" role="status" aria-label="Loading feed list">
  <div class="sk-list-item">
    <div class="sk-shimmer sk-list-avatar"></div>
    <div class="sk-list-content">
      <div class="sk-shimmer sk-list-line-primary"></div>
      <div class="sk-shimmer sk-list-line-secondary"></div>
    </div>
  </div>
  <div class="sk-list-item">
    <div class="sk-shimmer sk-list-avatar"></div>
    <div class="sk-list-content">
      <div class="sk-shimmer sk-list-line-primary"></div>
      <div class="sk-shimmer sk-list-line-secondary"></div>
    </div>
  </div>
</div>`,
    css: `.sk-shimmer {
  position: relative;
  overflow: hidden;
  background-color: var(--color, rgba(148, 163, 184, 0.22));
}

.sk-shimmer::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%);
  animation: skShimmerTranslate 1.6s infinite;
}

@keyframes skShimmerTranslate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sk-list {
  --size: 260px;
  --color: rgba(148, 163, 184, 0.22);
  width: var(--size);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
}

.sk-list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.03);
}

.sk-list-avatar { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; }
.sk-list-content { flex: 1; display: flex; flex-direction: column; gap: 6px; }
.sk-list-line-primary { width: 80%; height: 12px; border-radius: 4px; }
.sk-list-line-secondary { width: 50%; height: 10px; border-radius: 4px; }

@media (prefers-reduced-motion: reduce) {
  .sk-shimmer::after { animation: none; opacity: 0.1; }
}`
  },
  {
    id: 'sk-profile',
    name: 'Skeleton User Profile',
    group: 'Skeleton Screens',
    category: 'skeleton',
    description: 'User profile card with centered avatar, bio, 3 metrics counters, and follow CTA.',
    defaultSize: '260px',
    defaultColor: 'rgba(148, 163, 184, 0.22)',
    html: `<div class="sk-profile" role="status" aria-label="Loading profile">
  <div class="sk-shimmer sk-profile-avatar"></div>
  <div class="sk-shimmer sk-profile-name"></div>
  <div class="sk-shimmer sk-profile-handle"></div>
  <div class="sk-profile-stats">
    <div class="sk-shimmer sk-profile-stat-box"></div>
    <div class="sk-shimmer sk-profile-stat-box"></div>
    <div class="sk-shimmer sk-profile-stat-box"></div>
  </div>
  <div class="sk-shimmer sk-profile-btn"></div>
</div>`,
    css: `.sk-shimmer {
  position: relative;
  overflow: hidden;
  background-color: var(--color, rgba(148, 163, 184, 0.22));
}

.sk-shimmer::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%);
  animation: skShimmerTranslate 1.6s infinite;
}

@keyframes skShimmerTranslate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sk-profile {
  --size: 260px;
  --color: rgba(148, 163, 184, 0.22);
  width: var(--size);
  max-width: 100%;
  padding: 16px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.sk-profile-avatar { width: 52px; height: 52px; border-radius: 50%; margin-bottom: 12px; }
.sk-profile-name { width: 110px; height: 14px; border-radius: 4px; margin-bottom: 6px; }
.sk-profile-handle { width: 70px; height: 10px; border-radius: 4px; margin-bottom: 14px; }
.sk-profile-stats { width: 100%; display: flex; justify-content: space-around; margin-bottom: 14px; }
.sk-profile-stat-box { width: 36px; height: 22px; border-radius: 4px; }
.sk-profile-btn { width: 100%; height: 28px; border-radius: 6px; }

@media (prefers-reduced-motion: reduce) {
  .sk-shimmer::after { animation: none; opacity: 0.1; }
}`
  },
  {
    id: 'sk-table',
    name: 'Skeleton Data Table',
    group: 'Skeleton Screens',
    category: 'skeleton',
    description: 'Data grid with header block and 3 simulated zebra rows of cell placeholders.',
    defaultSize: '260px',
    defaultColor: 'rgba(148, 163, 184, 0.22)',
    html: `<div class="sk-table" role="status" aria-label="Loading data table">
  <div class="sk-table-row header">
    <div class="sk-shimmer sk-table-cell col-1"></div>
    <div class="sk-shimmer sk-table-cell col-2"></div>
    <div class="sk-shimmer sk-table-cell col-3"></div>
  </div>
  <div class="sk-table-row">
    <div class="sk-shimmer sk-table-cell col-1"></div>
    <div class="sk-shimmer sk-table-cell col-2"></div>
    <div class="sk-shimmer sk-table-cell col-3"></div>
  </div>
  <div class="sk-table-row">
    <div class="sk-shimmer sk-table-cell col-1"></div>
    <div class="sk-shimmer sk-table-cell col-2"></div>
    <div class="sk-shimmer sk-table-cell col-3"></div>
  </div>
</div>`,
    css: `.sk-shimmer {
  position: relative;
  overflow: hidden;
  background-color: var(--color, rgba(148, 163, 184, 0.22));
}

.sk-shimmer::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%);
  animation: skShimmerTranslate 1.6s infinite;
}

@keyframes skShimmerTranslate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sk-table {
  --size: 260px;
  --color: rgba(148, 163, 184, 0.22);
  width: var(--size);
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.15);
  box-sizing: border-box;
}

.sk-table-row {
  display: flex;
  gap: 10px;
  padding: 9px 12px;
  align-items: center;
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
}

.sk-table-row.header {
  background-color: rgba(255, 255, 255, 0.06);
}

.sk-table-cell { height: 11px; border-radius: 3px; }
.sk-table-cell.col-1 { flex: 2; }
.sk-table-cell.col-2 { flex: 3; }
.sk-table-cell.col-3 { flex: 1.5; }

@media (prefers-reduced-motion: reduce) {
  .sk-shimmer::after { animation: none; opacity: 0.1; }
}`
  },
  {
    id: 'sk-article',
    name: 'Skeleton Editorial Article',
    group: 'Skeleton Screens',
    category: 'skeleton',
    description: 'Publishing article with badge, headline, author byline, and paragraph blocks.',
    defaultSize: '260px',
    defaultColor: 'rgba(148, 163, 184, 0.22)',
    html: `<div class="sk-article" role="status" aria-label="Loading article">
  <div class="sk-shimmer sk-art-badge"></div>
  <div class="sk-shimmer sk-art-title"></div>
  <div class="sk-art-meta">
    <div class="sk-shimmer sk-art-avatar"></div>
    <div class="sk-shimmer sk-art-byline"></div>
  </div>
  <div class="sk-shimmer sk-art-p1"></div>
  <div class="sk-shimmer sk-art-p2"></div>
  <div class="sk-shimmer sk-art-p3"></div>
</div>`,
    css: `.sk-shimmer {
  position: relative;
  overflow: hidden;
  background-color: var(--color, rgba(148, 163, 184, 0.22));
}

.sk-shimmer::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%);
  animation: skShimmerTranslate 1.6s infinite;
}

@keyframes skShimmerTranslate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sk-article {
  --size: 260px;
  --color: rgba(148, 163, 184, 0.22);
  width: var(--size);
  max-width: 100%;
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sk-art-badge { width: 50px; height: 10px; border-radius: 9999px; }
.sk-art-title { width: 90%; height: 16px; border-radius: 4px; }
.sk-art-meta { display: flex; gap: 8px; align-items: center; margin-bottom: 2px; }
.sk-art-avatar { width: 18px; height: 18px; border-radius: 50%; }
.sk-art-byline { width: 85px; height: 10px; border-radius: 3px; }
.sk-art-p1 { width: 100%; height: 9px; border-radius: 3px; }
.sk-art-p2 { width: 95%; height: 9px; border-radius: 3px; }
.sk-art-p3 { width: 70%; height: 9px; border-radius: 3px; }

@media (prefers-reduced-motion: reduce) {
  .sk-shimmer::after { animation: none; opacity: 0.1; }
}`
  },

  // -------------------------------------------------------------
  // Group 4: 5 Fun Loaders
  // -------------------------------------------------------------
  {
    id: 'fun-typing',
    name: 'Typing Chat Bubble',
    group: 'Fun Loaders',
    category: 'fun',
    description: 'Chat speech bubble with 3 elastic jumping wave dots.',
    defaultSize: '64px',
    defaultColor: '#3b82f6',
    html: `<div class="fun-typing" role="status" aria-label="Typing message">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>`,
    css: `.fun-typing {
  --size: 64px;
  --color: #3b82f6;
  width: var(--size);
  height: calc(var(--size) * 0.58);
  background-color: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 18px 18px 18px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
  position: relative;
}

.fun-typing .dot {
  width: 6px;
  height: 6px;
  background-color: var(--color);
  border-radius: 50%;
  animation: funTypingBounce 1.2s ease-in-out infinite;
}

.fun-typing .dot:nth-child(1) { animation-delay: 0s; }
.fun-typing .dot:nth-child(2) { animation-delay: 0.18s; }
.fun-typing .dot:nth-child(3) { animation-delay: 0.36s; }

@keyframes funTypingBounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-7px); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .fun-typing .dot {
    animation: none;
    transform: none;
    opacity: 0.8;
  }
}`
  },
  {
    id: 'fun-bouncing-ball',
    name: 'Squash & Stretch Ball',
    group: 'Fun Loaders',
    category: 'fun',
    description: 'Physics-inspired bouncing ball with realistic squash, stretch, and floor shadow.',
    defaultSize: '50px',
    defaultColor: '#ef4444',
    html: `<div class="fun-bouncing-ball" role="status" aria-label="Bouncing ball">
  <div class="fun-ball"></div>
  <div class="fun-shadow"></div>
</div>`,
    css: `.fun-bouncing-ball {
  --size: 50px;
  --color: #ef4444;
  width: var(--size);
  height: calc(var(--size) * 1.3);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
}

.fun-ball {
  width: 22px;
  height: 22px;
  background: radial-gradient(circle at 35% 35%, #fca5a5 0%, var(--color) 70%);
  border-radius: 50%;
  animation: funBallBounce 0.9s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate;
}

.fun-shadow {
  width: 24px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-top: 4px;
  animation: funShadowScale 0.9s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate;
}

@keyframes funBallBounce {
  0% { transform: translateY(-36px) scale(0.9, 1.1); }
  85% { transform: translateY(0) scale(1, 1); }
  100% { transform: translateY(2px) scale(1.35, 0.65); }
}

@keyframes funShadowScale {
  0% { transform: scale(0.4); opacity: 0.15; }
  100% { transform: scale(1.1); opacity: 0.45; }
}

@media (prefers-reduced-motion: reduce) {
  .fun-ball,
  .fun-shadow {
    animation: none;
    transform: none;
  }
}`
  },
  {
    id: 'fun-wave-text',
    name: 'Kinetic Wave Text',
    group: 'Fun Loaders',
    category: 'fun',
    description: 'Kinetic typographical loader where each character cascades in a floating sine wave.',
    defaultSize: '16px',
    defaultColor: '#8b5cf6',
    html: `<div class="fun-wave-text" role="status" aria-label="Loading text">
  <span>L</span>
  <span>O</span>
  <span>A</span>
  <span>D</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
  <span>.</span>
  <span>.</span>
  <span>.</span>
</div>`,
    css: `.fun-wave-text {
  --size: 16px;
  --color: #8b5cf6;
  font-family: inherit;
  font-size: var(--size);
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--color);
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.fun-wave-text span {
  display: inline-block;
  animation: funLetterWave 1.4s ease-in-out infinite;
}

.fun-wave-text span:nth-child(1) { animation-delay: 0.0s; }
.fun-wave-text span:nth-child(2) { animation-delay: 0.1s; }
.fun-wave-text span:nth-child(3) { animation-delay: 0.2s; }
.fun-wave-text span:nth-child(4) { animation-delay: 0.3s; }
.fun-wave-text span:nth-child(5) { animation-delay: 0.4s; }
.fun-wave-text span:nth-child(6) { animation-delay: 0.5s; }
.fun-wave-text span:nth-child(7) { animation-delay: 0.6s; }
.fun-wave-text span:nth-child(8) { animation-delay: 0.7s; }
.fun-wave-text span:nth-child(9) { animation-delay: 0.8s; }
.fun-wave-text span:nth-child(10) { animation-delay: 0.9s; }

@keyframes funLetterWave {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-8px);
    opacity: 1;
    text-shadow: 0 4px 8px rgba(139, 92, 246, 0.4);
  }
}

@media (prefers-reduced-motion: reduce) {
  .fun-wave-text span {
    animation: none;
    transform: none;
    opacity: 0.9;
  }
}`
  },
  {
    id: 'fun-battery',
    name: 'Charging Power Cell',
    group: 'Fun Loaders',
    category: 'fun',
    description: 'Smartphone battery shell with cathode terminal and 4 cycling energy bars.',
    defaultSize: '60px',
    defaultColor: '#10b981',
    html: `<div class="fun-battery" role="status" aria-label="Charging battery">
  <div class="fun-battery-body">
    <div class="fun-battery-cell"></div>
    <div class="fun-battery-cell"></div>
    <div class="fun-battery-cell"></div>
    <div class="fun-battery-cell"></div>
  </div>
  <div class="fun-battery-tip"></div>
</div>`,
    css: `.fun-battery {
  --size: 60px;
  --color: #10b981;
  width: var(--size);
  height: calc(var(--size) * 0.45);
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
}

.fun-battery-body {
  flex: 1;
  height: 100%;
  border: 3px solid var(--color);
  border-radius: 6px;
  padding: 3px;
  display: flex;
  gap: 3px;
  box-sizing: border-box;
}

.fun-battery-tip {
  width: 4px;
  height: 45%;
  background-color: var(--color);
  border-radius: 0 3px 3px 0;
  margin-left: 2px;
}

.fun-battery-cell {
  flex: 1;
  height: 100%;
  background-color: var(--color);
  border-radius: 2px;
  opacity: 0.15;
  animation: funBatteryCharge 1.6s ease-in-out infinite;
}

.fun-battery-cell:nth-child(1) { animation-delay: 0s; }
.fun-battery-cell:nth-child(2) { animation-delay: 0.3s; }
.fun-battery-cell:nth-child(3) { animation-delay: 0.6s; }
.fun-battery-cell:nth-child(4) { animation-delay: 0.9s; }

@keyframes funBatteryCharge {
  0%, 100% { opacity: 0.15; transform: scaleY(0.9); }
  50% { opacity: 1; transform: scaleY(1); box-shadow: 0 0 6px var(--color); }
}

@media (prefers-reduced-motion: reduce) {
  .fun-battery-cell {
    animation: none;
    opacity: 0.85;
    transform: none;
  }
}`
  },
  {
    id: 'fun-rocket',
    name: 'Blastoff Space Rocket',
    group: 'Fun Loaders',
    category: 'fun',
    description: 'Stylized space rocket wobbling during ascent with flickering thruster flame and smoke.',
    defaultSize: '54px',
    defaultColor: '#f97316',
    html: `<div class="fun-rocket" role="status" aria-label="Launching rocket">
  <div class="fun-rocket-ship">🚀</div>
  <div class="fun-rocket-flame"></div>
  <div class="fun-rocket-smoke">
    <div class="fun-rocket-puff"></div>
    <div class="fun-rocket-puff"></div>
  </div>
</div>`,
    css: `.fun-rocket {
  --size: 54px;
  --color: #f97316;
  width: var(--size);
  height: calc(var(--size) * 1.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;
}

.fun-rocket-ship {
  font-size: 26px;
  line-height: 1;
  animation: funRocketHover 1.5s ease-in-out infinite alternate;
  display: inline-block;
  transform-origin: center bottom;
}

.fun-rocket-flame {
  width: 10px;
  height: 16px;
  background: linear-gradient(180deg, #fef08a 0%, var(--color) 70%, transparent 100%);
  border-radius: 50% 50% 20% 20%;
  animation: funFlameFlicker 0.25s ease-in-out infinite alternate;
  margin-top: -2px;
}

.fun-rocket-smoke {
  display: flex;
  gap: 4px;
  margin-top: 2px;
}

.fun-rocket-puff {
  width: 6px;
  height: 6px;
  background-color: rgba(148, 163, 184, 0.4);
  border-radius: 50%;
  animation: funSmokePuff 0.8s ease-out infinite;
}

.fun-rocket-puff:nth-child(2) {
  animation-delay: 0.3s;
}

@keyframes funRocketHover {
  0% { transform: translateY(0) rotate(-2deg); }
  100% { transform: translateY(-8px) rotate(2deg); }
}

@keyframes funFlameFlicker {
  0% { transform: scaleY(0.75) scaleX(0.85); opacity: 0.8; }
  100% { transform: scaleY(1.3) scaleX(1.15); opacity: 1; }
}

@keyframes funSmokePuff {
  0% { transform: translateY(0) scale(0.6); opacity: 0.8; }
  100% { transform: translateY(12px) scale(1.6); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .fun-rocket-ship,
  .fun-rocket-flame,
  .fun-rocket-puff {
    animation: none;
    transform: none;
  }
}`
  }
];

module.exports = loaders;
