/**
 * Loader Lab - 30 Pure CSS Loading Animations
 * Clean, production-ready definitions without boilerplate or external dependencies.
 */

const loaders = [
  // -------------------------------------------------------------
  // Group 1: 10 Progress Bars
  // -------------------------------------------------------------
  {
    id: 'pb-linear',
    name: 'Linear Flow',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Indeterminate linear progress bar with dual-speed traveling fill.',
    defaultSize: '240px',
    defaultColor: '#3b82f6',
    html: `<div class="pb-linear" role="progressbar" aria-label="Loading content" aria-valuemin="0" aria-valuemax="100">
  <div class="pb-linear-bar"></div>
</div>`,
    css: `.pb-linear {
  --size: 240px;
  --color: #3b82f6;
  --track: rgba(255, 255, 255, 0.08);
  --height: 6px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background: var(--track);
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
  background: var(--color);
  border-radius: 9999px;
  transform-origin: left center;
  animation: pbLinear 1.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

@keyframes pbLinear {
  0% { transform: translateX(-100%) scaleX(0.2); }
  50% { transform: translateX(25%) scaleX(0.65); }
  100% { transform: translateX(200%) scaleX(0.2); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-linear-bar {
    animation: none;
    transform: translateX(0) scaleX(0.6);
  }
}`
  },
  {
    id: 'pb-striped',
    name: 'Striped Stream',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Continuous diagonal barber-pole stripes gliding indefinitely.',
    defaultSize: '240px',
    defaultColor: '#10b981',
    html: `<div class="pb-striped" role="progressbar" aria-label="Processing request">
  <div class="pb-striped-track"></div>
</div>`,
    css: `.pb-striped {
  --size: 240px;
  --color: #10b981;
  --track: rgba(255, 255, 255, 0.08);
  --height: 12px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
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
    var(--color) 10px,
    rgba(255, 255, 255, 0.22) 10px,
    rgba(255, 255, 255, 0.22) 20px
  );
  animation: pbStriped 1.1s linear infinite;
}

@keyframes pbStriped {
  0% { transform: translateX(0); }
  100% { transform: translateX(-28px); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-striped-track {
    animation: none;
  }
}`
  },
  {
    id: 'pb-segmented',
    name: 'Segmented LED',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Hardware-style digital LED segments with sequenced pulse.',
    defaultSize: '240px',
    defaultColor: '#f59e0b',
    html: `<div class="pb-segmented" role="progressbar" aria-label="Loading progress">
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
  --color: #f59e0b;
  --height: 10px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  display: flex;
  gap: 4px;
}

.pb-segmented .seg {
  flex: 1;
  height: 100%;
  background: var(--color);
  border-radius: 2px;
  opacity: 0.15;
  animation: pbSegment 1.4s ease-in-out infinite;
}

.pb-segmented .seg:nth-child(1) { animation-delay: 0.0s; }
.pb-segmented .seg:nth-child(2) { animation-delay: 0.12s; }
.pb-segmented .seg:nth-child(3) { animation-delay: 0.24s; }
.pb-segmented .seg:nth-child(4) { animation-delay: 0.36s; }
.pb-segmented .seg:nth-child(5) { animation-delay: 0.48s; }
.pb-segmented .seg:nth-child(6) { animation-delay: 0.60s; }
.pb-segmented .seg:nth-child(7) { animation-delay: 0.72s; }
.pb-segmented .seg:nth-child(8) { animation-delay: 0.84s; }

@keyframes pbSegment {
  0%, 100% { opacity: 0.15; transform: scaleY(0.8); }
  50% { opacity: 1; transform: scaleY(1); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-segmented .seg {
    animation: none;
    opacity: 0.7;
    transform: none;
  }
}`
  },
  {
    id: 'pb-gradient-shimmer',
    name: 'Gradient Shimmer',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Smooth gradient bar with specular highlight sweep.',
    defaultSize: '240px',
    defaultColor: '#6366f1',
    html: `<div class="pb-gradient-shimmer" role="progressbar" aria-label="Loading buffer">
  <div class="pb-shimmer-fill"></div>
</div>`,
    css: `.pb-gradient-shimmer {
  --size: 240px;
  --color: #6366f1;
  --track: rgba(255, 255, 255, 0.08);
  --height: 8px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
}

.pb-shimmer-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--color) 0%, #818cf8 50%, var(--color) 100%);
  border-radius: 9999px;
  overflow: hidden;
}

.pb-shimmer-fill::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%);
  animation: pbShimmerSweep 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes pbShimmerSweep {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-shimmer-fill::after {
    animation: none;
    opacity: 0.2;
    transform: none;
  }
}`
  },
  {
    id: 'pb-step-nodes',
    name: 'Step Checkpoints',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Numbered milestone nodes linked by a filling path track.',
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
  --track: rgba(255, 255, 255, 0.1);
  --node-size: 24px;
  width: var(--size);
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 4px 0;
}

.pb-step-line {
  position: absolute;
  left: calc(var(--node-size) / 2);
  right: calc(var(--node-size) / 2);
  top: 50%;
  height: 3px;
  background: var(--track);
  transform: translateY(-50%);
  z-index: 1;
  overflow: hidden;
  border-radius: 9999px;
}

.pb-step-line-fill {
  width: 100%;
  height: 100%;
  background: var(--color);
  transform-origin: left center;
  animation: pbStepLine 2.2s ease-in-out infinite;
}

.pb-step-nodes .pb-node {
  width: var(--node-size);
  height: var(--node-size);
  border-radius: 50%;
  background: var(--track);
  color: #94a3b8;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
}

.pb-step-nodes .pb-node.active {
  background: var(--color);
  color: #ffffff;
}

.pb-step-nodes .pb-node.pulsing {
  background: var(--color);
  color: #ffffff;
  animation: pbNodePulse 1.2s ease-in-out infinite;
}

@keyframes pbStepLine {
  0% { transform: scaleX(0.2); }
  50% { transform: scaleX(0.75); }
  100% { transform: scaleX(0.2); }
}

@keyframes pbNodePulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(2, 132, 199, 0.4); }
  50% { transform: scale(1.12); box-shadow: 0 0 0 5px rgba(2, 132, 199, 0); }
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
    name: 'Circular Gauge',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Radial ring indicator with continuous rotating sweep.',
    defaultSize: '54px',
    defaultColor: '#06b6d4',
    html: `<div class="pb-circular-ring" role="progressbar" aria-label="Circular progress">
  <div class="pb-circle-track"></div>
  <div class="pb-circle-runner"></div>
</div>`,
    css: `.pb-circular-ring {
  --size: 54px;
  --color: #06b6d4;
  --track: rgba(255, 255, 255, 0.08);
  --thickness: 4px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  animation: pbCircleSpin 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

@keyframes pbCircleSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-circle-runner {
    animation: none;
    transform: rotate(45deg);
  }
}`
  },
  {
    id: 'pb-liquid-wave',
    name: 'Liquid Tank',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Fluid reservoir with dual sinusoidal wave ripples.',
    defaultSize: '240px',
    defaultColor: '#0284c7',
    html: `<div class="pb-liquid-wave" role="progressbar" aria-label="Liquid capacity">
  <div class="pb-liquid-body">
    <div class="pb-wave wave1"></div>
    <div class="pb-wave wave2"></div>
  </div>
</div>`,
    css: `.pb-liquid-wave {
  --size: 240px;
  --color: #0284c7;
  --track: rgba(255, 255, 255, 0.08);
  --height: 16px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
}

.pb-liquid-body {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: var(--color);
  border-radius: 9999px;
  overflow: hidden;
}

.pb-wave {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -120%;
  left: -50%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 40%;
  animation: pbWave 3s linear infinite;
}

.pb-wave.wave2 {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 36%;
  animation: pbWave 4.5s linear infinite reverse;
}

@keyframes pbWave {
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
    name: 'Laser Beam',
    group: 'Progress Bars',
    category: 'progress',
    description: 'High-contrast neon laser pulse oscillating inside a track.',
    defaultSize: '240px',
    defaultColor: '#ec4899',
    html: `<div class="pb-laser-runner" role="progressbar" aria-label="Laser sync">
  <div class="pb-laser-beam"></div>
</div>`,
    css: `.pb-laser-runner {
  --size: 240px;
  --color: #ec4899;
  --track: rgba(255, 255, 255, 0.08);
  --height: 4px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
}

.pb-laser-beam {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30%;
  background: linear-gradient(90deg, transparent 0%, var(--color) 60%, #ffffff 100%);
  border-radius: 9999px;
  box-shadow: 0 0 8px var(--color);
  animation: pbLaser 1.5s ease-in-out infinite alternate;
}

@keyframes pbLaser {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(var(--size) - 72px)); }
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
    name: 'Buffer Stream',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Media player style bar showing buffer preload and active playback stream.',
    defaultSize: '240px',
    defaultColor: '#e11d48',
    html: `<div class="pb-buffered-stream" role="progressbar" aria-label="Media buffering">
  <div class="pb-buf-preload"></div>
  <div class="pb-buf-play"></div>
</div>`,
    css: `.pb-buffered-stream {
  --size: 240px;
  --color: #e11d48;
  --track: rgba(255, 255, 255, 0.08);
  --buf-color: rgba(225, 29, 72, 0.3);
  --height: 5px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background: var(--track);
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
}

.pb-buf-preload {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 75%;
  background: var(--buf-color);
  border-radius: 9999px;
  transform-origin: left center;
  animation: pbPreload 2s ease-in-out infinite;
}

.pb-buf-play {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 40%;
  background: var(--color);
  border-radius: 9999px;
  transform-origin: left center;
  animation: pbPlayhead 2.4s linear infinite;
}

@keyframes pbPreload {
  0%, 100% { opacity: 0.4; transform: scaleX(0.7); }
  50% { opacity: 0.8; transform: scaleX(0.85); }
}

@keyframes pbPlayhead {
  0% { transform: scaleX(0.1); }
  50% { transform: scaleX(0.45); }
  100% { transform: scaleX(0.8); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-buf-preload,
  .pb-buf-play {
    animation: none;
    transform: scaleX(0.5);
  }
}`
  },
  {
    id: 'pb-magnetic-pill',
    name: 'Magnetic Pill',
    group: 'Progress Bars',
    category: 'progress',
    description: 'Rounded slider where a magnetic indicator bead glides with inertia.',
    defaultSize: '240px',
    defaultColor: '#10b981',
    html: `<div class="pb-magnetic-pill" role="progressbar" aria-label="Magnetic slider">
  <div class="pb-mag-dot"></div>
</div>`,
    css: `.pb-magnetic-pill {
  --size: 240px;
  --color: #10b981;
  --track: rgba(255, 255, 255, 0.08);
  --height: 12px;
  width: var(--size);
  max-width: 100%;
  height: var(--height);
  background: var(--track);
  border-radius: 9999px;
  position: relative;
  padding: 2px;
  box-sizing: border-box;
}

.pb-mag-dot {
  width: 20px;
  height: 8px;
  background: var(--color);
  border-radius: 9999px;
  box-shadow: 0 0 6px rgba(16, 185, 129, 0.4);
  animation: pbMagnetic 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite alternate;
}

@keyframes pbMagnetic {
  0% { transform: translateX(0) scaleX(0.9); }
  50% { transform: translateX(calc(var(--size) / 2 - 12px)) scaleX(1.25); }
  100% { transform: translateX(calc(var(--size) - 24px)) scaleX(0.9); }
}

@media (prefers-reduced-motion: reduce) {
  .pb-mag-dot {
    animation: none;
    transform: translateX(calc(var(--size) / 2 - 12px));
  }
}`
  },

  // -------------------------------------------------------------
  // Group 2: 10 Spinners
  // -------------------------------------------------------------
  {
    id: 'sp-dots',
    name: 'Dot Ring',
    group: 'Spinners',
    category: 'spinner',
    description: '8 circular dots arranged in a ring with sequential opacity falloff.',
    defaultSize: '44px',
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
  --size: 44px;
  --color: #3b82f6;
  width: var(--size);
  height: var(--size);
  position: relative;
}

.sp-dots .dot {
  position: absolute;
  top: 0;
  left: calc(50% - 2.5px);
  width: 5px;
  height: 5px;
  background: var(--color);
  border-radius: 50%;
  transform-origin: 2.5px calc(var(--size) / 2);
  animation: spDotsFade 1.2s infinite ease-in-out;
}

.sp-dots .dot:nth-child(1) { transform: rotate(0deg); animation-delay: -1.05s; }
.sp-dots .dot:nth-child(2) { transform: rotate(45deg); animation-delay: -0.90s; }
.sp-dots .dot:nth-child(3) { transform: rotate(90deg); animation-delay: -0.75s; }
.sp-dots .dot:nth-child(4) { transform: rotate(135deg); animation-delay: -0.60s; }
.sp-dots .dot:nth-child(5) { transform: rotate(180deg); animation-delay: -0.45s; }
.sp-dots .dot:nth-child(6) { transform: rotate(225deg); animation-delay: -0.30s; }
.sp-dots .dot:nth-child(7) { transform: rotate(270deg); animation-delay: -0.15s; }
.sp-dots .dot:nth-child(8) { transform: rotate(315deg); animation-delay: 0s; }

@keyframes spDotsFade {
  0%, 100% { opacity: 0.15; transform: scale(0.75); }
  50% { opacity: 1; transform: scale(1.1); }
}

@media (prefers-reduced-motion: reduce) {
  .sp-dots .dot {
    animation: none;
    opacity: 0.6;
    transform: none;
  }
}`
  },
  {
    id: 'sp-orbit',
    name: 'Orbital Core',
    group: 'Spinners',
    category: 'spinner',
    description: 'Pulsing central core sphere circled by a high-speed satellite beacon.',
    defaultSize: '46px',
    defaultColor: '#8b5cf6',
    html: `<div class="sp-orbit" role="status" aria-label="Loading">
  <div class="sp-orbit-core"></div>
  <div class="sp-orbit-ring">
    <div class="sp-orbit-satellite"></div>
  </div>
</div>`,
    css: `.sp-orbit {
  --size: 46px;
  --color: #8b5cf6;
  width: var(--size);
  height: var(--size);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sp-orbit-core {
  width: 12px;
  height: 12px;
  background: var(--color);
  border-radius: 50%;
  animation: spCorePulse 1.8s ease-in-out infinite;
}

.sp-orbit-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1.5px dashed rgba(139, 92, 246, 0.3);
  animation: spOrbitSpin 1.6s linear infinite;
}

.sp-orbit-satellite {
  position: absolute;
  top: -4px;
  left: calc(50% - 4px);
  width: 8px;
  height: 8px;
  background: var(--color);
  border-radius: 50%;
  box-shadow: 0 0 6px var(--color);
}

@keyframes spOrbitSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spCorePulse {
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
    name: 'Morphing Shape',
    group: 'Spinners',
    category: 'spinner',
    description: 'Polygonal shape morphing smoothly between rounded square and circle.',
    defaultSize: '40px',
    defaultColor: '#f59e0b',
    html: `<div class="sp-morph" role="status" aria-label="Loading"></div>`,
    css: `.sp-morph {
  --size: 40px;
  --color: #f59e0b;
  width: var(--size);
  height: var(--size);
  background: var(--color);
  border-radius: 6px;
  animation: spMorph 2.2s ease-in-out infinite;
}

@keyframes spMorph {
  0% { transform: rotate(0deg) scale(1); border-radius: 6px; }
  25% { transform: rotate(90deg) scale(0.7); border-radius: 50%; }
  50% { transform: rotate(180deg) scale(1); border-radius: 6px; }
  75% { transform: rotate(270deg) scale(0.7); border-radius: 50%; }
  100% { transform: rotate(360deg) scale(1); border-radius: 6px; }
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
    name: 'Sonar Pulse',
    group: 'Spinners',
    category: 'spinner',
    description: 'Concentric acoustic ripple rings expanding with progressive fade.',
    defaultSize: '46px',
    defaultColor: '#10b981',
    html: `<div class="sp-pulse" role="status" aria-label="Loading">
  <div class="sp-pulse-ring"></div>
  <div class="sp-pulse-ring"></div>
  <div class="sp-pulse-ring"></div>
</div>`,
    css: `.sp-pulse {
  --size: 46px;
  --color: #10b981;
  width: var(--size);
  height: var(--size);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sp-pulse-ring {
  position: absolute;
  inset: 0;
  border: 2px solid var(--color);
  border-radius: 50%;
  opacity: 0;
  animation: spPulse 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
}

.sp-pulse-ring:nth-child(2) { animation-delay: 0.6s; }
.sp-pulse-ring:nth-child(3) { animation-delay: 1.2s; }

@keyframes spPulse {
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
    name: 'Dual Rings',
    group: 'Spinners',
    category: 'spinner',
    description: 'Counter-rotating concentric broken rings with smooth orbital spin.',
    defaultSize: '48px',
    defaultColor: '#06b6d4',
    html: `<div class="sp-dual-rings" role="status" aria-label="Loading">
  <div class="sp-dual-outer"></div>
  <div class="sp-dual-inner"></div>
</div>`,
    css: `.sp-dual-rings {
  --size: 48px;
  --color: #06b6d4;
  --accent: #3b82f6;
  width: var(--size);
  height: var(--size);
  position: relative;
}

.sp-dual-outer {
  position: absolute;
  inset: 0;
  border: 2.5px solid transparent;
  border-top-color: var(--color);
  border-bottom-color: var(--color);
  border-radius: 50%;
  animation: spRotateRight 1.2s linear infinite;
}

.sp-dual-inner {
  position: absolute;
  inset: 8px;
  border: 2.5px solid transparent;
  border-left-color: var(--accent);
  border-right-color: var(--accent);
  border-radius: 50%;
  animation: spRotateLeft 0.8s linear infinite;
}

@keyframes spRotateRight {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spRotateLeft {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
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
    name: 'Hourglass',
    group: 'Spinners',
    category: 'spinner',
    description: 'Minimal sandglass flipping cleanly through 360-degree inversion cycles.',
    defaultSize: '40px',
    defaultColor: '#f97316',
    html: `<div class="sp-hourglass" role="status" aria-label="Loading"></div>`,
    css: `.sp-hourglass {
  --size: 40px;
  --color: #f97316;
  width: var(--size);
  height: var(--size);
  position: relative;
  animation: spHourglass 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
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

@keyframes spHourglass {
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
    name: 'Infinity Loop',
    group: 'Spinners',
    category: 'spinner',
    description: 'Interlocked dual infinity nodes pulsing in harmonic resonance.',
    defaultSize: '50px',
    defaultColor: '#ec4899',
    html: `<div class="sp-infinity" role="status" aria-label="Loading">
  <div class="sp-infinity-node"></div>
  <div class="sp-infinity-node"></div>
</div>`,
    css: `.sp-infinity {
  --size: 50px;
  --color: #ec4899;
  width: var(--size);
  height: calc(var(--size) * 0.55);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sp-infinity-node {
  width: calc(var(--size) * 0.45);
  height: calc(var(--size) * 0.45);
  border: 3.5px solid var(--color);
  border-radius: 50%;
  box-sizing: border-box;
  animation: spInfinity 1.4s ease-in-out infinite alternate;
}

.sp-infinity-node:last-child {
  animation-delay: -0.7s;
}

@keyframes spInfinity {
  0% { transform: scale(0.85); opacity: 0.5; }
  100% { transform: scale(1.15); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .sp-infinity-node {
    animation: none;
    transform: none;
    opacity: 0.8;
  }
}`
  },
  {
    id: 'sp-helix',
    name: 'DNA Helix',
    group: 'Spinners',
    category: 'spinner',
    description: 'Alternating vertical oscillation bars simulating a twisting DNA wave.',
    defaultSize: '46px',
    defaultColor: '#6366f1',
    html: `<div class="sp-helix" role="status" aria-label="Loading">
  <span class="sp-helix-bar"></span>
  <span class="sp-helix-bar"></span>
  <span class="sp-helix-bar"></span>
  <span class="sp-helix-bar"></span>
  <span class="sp-helix-bar"></span>
</div>`,
    css: `.sp-helix {
  --size: 46px;
  --color: #6366f1;
  width: var(--size);
  height: calc(var(--size) * 0.65);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sp-helix-bar {
  width: 4px;
  height: 100%;
  background: var(--color);
  border-radius: 9999px;
  animation: spHelix 1.2s ease-in-out infinite;
}

.sp-helix-bar:nth-child(1) { animation-delay: 0.0s; }
.sp-helix-bar:nth-child(2) { animation-delay: 0.15s; }
.sp-helix-bar:nth-child(3) { animation-delay: 0.30s; }
.sp-helix-bar:nth-child(4) { animation-delay: 0.45s; }
.sp-helix-bar:nth-child(5) { animation-delay: 0.60s; }

@keyframes spHelix {
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
    name: 'Radar Scanner',
    group: 'Spinners',
    category: 'spinner',
    description: 'Sonar scanner with 360-degree rotating gradient sweep and target blip.',
    defaultSize: '48px',
    defaultColor: '#14b8a6',
    html: `<div class="sp-radar" role="status" aria-label="Scanning">
  <div class="sp-radar-blip"></div>
</div>`,
    css: `.sp-radar {
  --size: 48px;
  --color: #14b8a6;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 1.5px solid rgba(20, 184, 166, 0.3);
  position: relative;
  overflow: hidden;
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
    rgba(20, 184, 166, 0.5) 360deg
  );
  animation: spRadar 1.5s linear infinite;
}

.sp-radar-blip {
  position: absolute;
  top: 25%;
  right: 25%;
  width: 4px;
  height: 4px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 5px var(--color);
  animation: spBlip 1.5s ease-in-out infinite;
}

@keyframes spRadar {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spBlip {
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
    name: 'Vortex Arms',
    group: 'Spinners',
    category: 'spinner',
    description: 'Centrifugal spiral arms spinning with accelerated momentum.',
    defaultSize: '46px',
    defaultColor: '#a855f7',
    html: `<div class="sp-vortex" role="status" aria-label="Loading">
  <div class="sp-vortex-arm"></div>
  <div class="sp-vortex-arm"></div>
  <div class="sp-vortex-arm"></div>
</div>`,
    css: `.sp-vortex {
  --size: 46px;
  --color: #a855f7;
  width: var(--size);
  height: var(--size);
  position: relative;
  animation: spVortex 1s cubic-bezier(0.5, 0.1, 0.5, 0.9) infinite;
}

.sp-vortex-arm {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2.5px solid transparent;
  border-top-color: var(--color);
  border-left-color: rgba(168, 85, 247, 0.35);
}

.sp-vortex-arm:nth-child(2) { transform: rotate(60deg) scale(0.8); }
.sp-vortex-arm:nth-child(3) { transform: rotate(120deg) scale(0.6); }

@keyframes spVortex {
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
    name: 'Card Skeleton',
    group: 'Skeleton Screens',
    category: 'skeleton',
    description: 'Media box, badge, title lines, and action button placeholder.',
    defaultSize: '260px',
    defaultColor: 'rgba(255, 255, 255, 0.08)',
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
  background: var(--color, rgba(255, 255, 255, 0.08));
}

.sk-shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);
  animation: skShimmer 1.6s infinite;
}

@keyframes skShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sk-card {
  --size: 260px;
  --color: rgba(255, 255, 255, 0.08);
  width: var(--size);
  max-width: 100%;
  padding: 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-sizing: border-box;
}

.sk-card-image { width: 100%; height: 96px; border-radius: 6px; margin-bottom: 12px; }
.sk-card-badge { width: 50px; height: 10px; border-radius: 9999px; margin-bottom: 8px; }
.sk-card-title { width: 85%; height: 14px; border-radius: 4px; margin-bottom: 8px; }
.sk-card-text { width: 60%; height: 10px; border-radius: 4px; margin-bottom: 14px; }
.sk-card-footer { display: flex; justify-content: space-between; align-items: center; }
.sk-card-price { width: 40px; height: 14px; border-radius: 4px; }
.sk-card-btn { width: 64px; height: 22px; border-radius: 4px; }

@media (prefers-reduced-motion: reduce) {
  .sk-shimmer::after { animation: none; opacity: 0.1; }
}`
  },
  {
    id: 'sk-list',
    name: 'Feed List Skeleton',
    group: 'Skeleton Screens',
    category: 'skeleton',
    description: 'Notification or feed item list with avatar thumbnail and line placeholders.',
    defaultSize: '260px',
    defaultColor: 'rgba(255, 255, 255, 0.08)',
    html: `<div class="sk-list" role="status" aria-label="Loading list">
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
  background: var(--color, rgba(255, 255, 255, 0.08));
}

.sk-shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);
  animation: skShimmer 1.6s infinite;
}

@keyframes skShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sk-list {
  --size: 260px;
  --color: rgba(255, 255, 255, 0.08);
  width: var(--size);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
}

.sk-list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
}

.sk-list-avatar { width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0; }
.sk-list-content { flex: 1; display: flex; flex-direction: column; gap: 5px; }
.sk-list-line-primary { width: 80%; height: 11px; border-radius: 3px; }
.sk-list-line-secondary { width: 50%; height: 9px; border-radius: 3px; }

@media (prefers-reduced-motion: reduce) {
  .sk-shimmer::after { animation: none; opacity: 0.1; }
}`
  },
  {
    id: 'sk-profile',
    name: 'Profile Skeleton',
    group: 'Skeleton Screens',
    category: 'skeleton',
    description: 'User profile card with avatar, bio, stats, and button.',
    defaultSize: '260px',
    defaultColor: 'rgba(255, 255, 255, 0.08)',
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
  background: var(--color, rgba(255, 255, 255, 0.08));
}

.sk-shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);
  animation: skShimmer 1.6s infinite;
}

@keyframes skShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sk-profile {
  --size: 260px;
  --color: rgba(255, 255, 255, 0.08);
  width: var(--size);
  max-width: 100%;
  padding: 16px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.sk-profile-avatar { width: 48px; height: 48px; border-radius: 50%; margin-bottom: 10px; }
.sk-profile-name { width: 100px; height: 14px; border-radius: 4px; margin-bottom: 6px; }
.sk-profile-handle { width: 64px; height: 9px; border-radius: 4px; margin-bottom: 12px; }
.sk-profile-stats { width: 100%; display: flex; justify-content: space-around; margin-bottom: 12px; }
.sk-profile-stat-box { width: 32px; height: 20px; border-radius: 3px; }
.sk-profile-btn { width: 100%; height: 26px; border-radius: 5px; }

@media (prefers-reduced-motion: reduce) {
  .sk-shimmer::after { animation: none; opacity: 0.1; }
}`
  },
  {
    id: 'sk-table',
    name: 'Table Skeleton',
    group: 'Skeleton Screens',
    category: 'skeleton',
    description: 'Header row and multiple zebra data rows of cell placeholders.',
    defaultSize: '260px',
    defaultColor: 'rgba(255, 255, 255, 0.08)',
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
  background: var(--color, rgba(255, 255, 255, 0.08));
}

.sk-shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);
  animation: skShimmer 1.6s infinite;
}

@keyframes skShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sk-table {
  --size: 260px;
  --color: rgba(255, 255, 255, 0.08);
  width: var(--size);
  max-width: 100%;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-sizing: border-box;
}

.sk-table-row {
  display: flex;
  gap: 10px;
  padding: 8px 10px;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.sk-table-row.header {
  background: rgba(255, 255, 255, 0.04);
}

.sk-table-cell { height: 10px; border-radius: 2px; }
.sk-table-cell.col-1 { flex: 2; }
.sk-table-cell.col-2 { flex: 3; }
.sk-table-cell.col-3 { flex: 1.5; }

@media (prefers-reduced-motion: reduce) {
  .sk-shimmer::after { animation: none; opacity: 0.1; }
}`
  },
  {
    id: 'sk-article',
    name: 'Article Skeleton',
    group: 'Skeleton Screens',
    category: 'skeleton',
    description: 'Editorial article layout with badge, title, byline, and paragraph lines.',
    defaultSize: '260px',
    defaultColor: 'rgba(255, 255, 255, 0.08)',
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
  background: var(--color, rgba(255, 255, 255, 0.08));
}

.sk-shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);
  animation: skShimmer 1.6s infinite;
}

@keyframes skShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.sk-article {
  --size: 260px;
  --color: rgba(255, 255, 255, 0.08);
  width: var(--size);
  max-width: 100%;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sk-art-badge { width: 44px; height: 9px; border-radius: 9999px; }
.sk-art-title { width: 88%; height: 15px; border-radius: 3px; }
.sk-art-meta { display: flex; gap: 6px; align-items: center; margin-bottom: 2px; }
.sk-art-avatar { width: 16px; height: 16px; border-radius: 50%; }
.sk-art-byline { width: 75px; height: 9px; border-radius: 2px; }
.sk-art-p1 { width: 100%; height: 8px; border-radius: 2px; }
.sk-art-p2 { width: 92%; height: 8px; border-radius: 2px; }
.sk-art-p3 { width: 68%; height: 8px; border-radius: 2px; }

@media (prefers-reduced-motion: reduce) {
  .sk-shimmer::after { animation: none; opacity: 0.1; }
}`
  },

  // -------------------------------------------------------------
  // Group 4: 5 Fun Loaders
  // -------------------------------------------------------------
  {
    id: 'fun-typing',
    name: 'Typing Bubble',
    group: 'Fun Loaders',
    category: 'fun',
    description: 'Chat bubble with 3 elastic wave dots.',
    defaultSize: '58px',
    defaultColor: '#3b82f6',
    html: `<div class="fun-typing" role="status" aria-label="Typing message">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>`,
    css: `.fun-typing {
  --size: 58px;
  --color: #3b82f6;
  width: var(--size);
  height: calc(var(--size) * 0.55);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px 14px 14px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.fun-typing .dot {
  width: 5px;
  height: 5px;
  background: var(--color);
  border-radius: 50%;
  animation: funTyping 1.2s ease-in-out infinite;
}

.fun-typing .dot:nth-child(1) { animation-delay: 0s; }
.fun-typing .dot:nth-child(2) { animation-delay: 0.18s; }
.fun-typing .dot:nth-child(3) { animation-delay: 0.36s; }

@keyframes funTyping {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.35; }
  30% { transform: translateY(-6px); opacity: 1; }
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
    name: 'Bouncing Ball',
    group: 'Fun Loaders',
    category: 'fun',
    description: 'Physics bounce with squash, stretch, and contact floor shadow.',
    defaultSize: '46px',
    defaultColor: '#ef4444',
    html: `<div class="fun-bouncing-ball" role="status" aria-label="Bouncing ball">
  <div class="fun-ball"></div>
  <div class="fun-shadow"></div>
</div>`,
    css: `.fun-bouncing-ball {
  --size: 46px;
  --color: #ef4444;
  width: var(--size);
  height: calc(var(--size) * 1.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}

.fun-ball {
  width: 20px;
  height: 20px;
  background: radial-gradient(circle at 35% 35%, #fca5a5 0%, var(--color) 70%);
  border-radius: 50%;
  animation: funBounce 0.85s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate;
}

.fun-shadow {
  width: 22px;
  height: 4px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  margin-top: 4px;
  animation: funShadow 0.85s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate;
}

@keyframes funBounce {
  0% { transform: translateY(-34px) scale(0.9, 1.1); }
  85% { transform: translateY(0) scale(1, 1); }
  100% { transform: translateY(2px) scale(1.3, 0.65); }
}

@keyframes funShadow {
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
    name: 'Wave Text',
    group: 'Fun Loaders',
    category: 'fun',
    description: 'Minimal typographical loader where letters wave with rhythmic float.',
    defaultSize: '14px',
    defaultColor: '#a855f7',
    html: `<div class="fun-wave-text" role="status" aria-label="Loading">
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
  --size: 14px;
  --color: #a855f7;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: var(--size);
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--color);
  display: flex;
  align-items: center;
}

.fun-wave-text span {
  display: inline-block;
  animation: funLetter 1.4s ease-in-out infinite;
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

@keyframes funLetter {
  0%, 100% { transform: translateY(0); opacity: 0.4; }
  50% { transform: translateY(-6px); opacity: 1; text-shadow: 0 0 6px var(--color); }
}

@media (prefers-reduced-motion: reduce) {
  .fun-wave-text span {
    animation: none;
    transform: none;
    opacity: 0.85;
  }
}`
  },
  {
    id: 'fun-battery',
    name: 'Battery Cell',
    group: 'Fun Loaders',
    category: 'fun',
    description: 'Hardware battery indicator with stepped cycling energy charge bars.',
    defaultSize: '54px',
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
  --size: 54px;
  --color: #10b981;
  width: var(--size);
  height: calc(var(--size) * 0.45);
  display: flex;
  align-items: center;
}

.fun-battery-body {
  flex: 1;
  height: 100%;
  border: 2px solid var(--color);
  border-radius: 5px;
  padding: 2.5px;
  display: flex;
  gap: 2.5px;
  box-sizing: border-box;
}

.fun-battery-tip {
  width: 3.5px;
  height: 40%;
  background: var(--color);
  border-radius: 0 2px 2px 0;
  margin-left: 2px;
}

.fun-battery-cell {
  flex: 1;
  height: 100%;
  background: var(--color);
  border-radius: 1.5px;
  opacity: 0.15;
  animation: funBattery 1.6s ease-in-out infinite;
}

.fun-battery-cell:nth-child(1) { animation-delay: 0s; }
.fun-battery-cell:nth-child(2) { animation-delay: 0.3s; }
.fun-battery-cell:nth-child(3) { animation-delay: 0.6s; }
.fun-battery-cell:nth-child(4) { animation-delay: 0.9s; }

@keyframes funBattery {
  0%, 100% { opacity: 0.15; transform: scaleY(0.9); }
  50% { opacity: 1; transform: scaleY(1); }
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
    name: 'Pure CSS Rocket',
    group: 'Fun Loaders',
    category: 'fun',
    description: 'Crafted rocket in 100% pure CSS geometry with thruster flame & exhaust puffs.',
    defaultSize: '54px',
    defaultColor: '#f97316',
    html: `<div class="fun-rocket" role="status" aria-label="Launching rocket">
  <div class="fun-rocket-body">
    <div class="fun-rocket-fuselage">
      <div class="fun-rocket-window"></div>
    </div>
    <div class="fun-rocket-fin left"></div>
    <div class="fun-rocket-fin right"></div>
    <div class="fun-rocket-flame"></div>
  </div>
  <div class="fun-rocket-smoke">
    <span class="smoke-puff"></span>
    <span class="smoke-puff"></span>
  </div>
</div>`,
    css: `.fun-rocket {
  --size: 54px;
  --color: #f97316;
  width: var(--size);
  height: calc(var(--size) * 1.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.fun-rocket-body {
  position: relative;
  width: 18px;
  height: 38px;
  animation: funRocketHover 1.5s ease-in-out infinite alternate;
}

.fun-rocket-fuselage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 28px;
  background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%);
  border-radius: 50% 50% 20% 20% / 70% 70% 20% 20%;
  box-shadow: inset -2px 0 3px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.fun-rocket-window {
  width: 6px;
  height: 6px;
  background: #0284c7;
  border-radius: 50%;
  border: 1px solid #94a3b8;
  margin-top: -4px;
}

.fun-rocket-fin {
  position: absolute;
  bottom: 10px;
  width: 6px;
  height: 12px;
  background: var(--color);
  z-index: 1;
}

.fun-rocket-fin.left {
  left: -5px;
  border-radius: 8px 0 0 2px;
  transform: skewY(-25deg);
}

.fun-rocket-fin.right {
  right: -5px;
  border-radius: 0 8px 2px 0;
  transform: skewY(25deg);
}

.fun-rocket-flame {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 8px;
  height: 12px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #fef08a 0%, var(--color) 70%, transparent 100%);
  border-radius: 50% 50% 20% 20%;
  animation: funFlame 0.25s ease-in-out infinite alternate;
  z-index: 1;
}

.fun-rocket-smoke {
  display: flex;
  gap: 4px;
  margin-top: 2px;
}

.smoke-puff {
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  animation: funSmoke 0.8s ease-out infinite;
}

.smoke-puff:nth-child(2) {
  animation-delay: 0.35s;
}

@keyframes funRocketHover {
  0% { transform: translateY(0) rotate(-2deg); }
  100% { transform: translateY(-6px) rotate(2deg); }
}

@keyframes funFlame {
  0% { transform: translateX(-50%) scaleY(0.75) scaleX(0.85); opacity: 0.8; }
  100% { transform: translateX(-50%) scaleY(1.3) scaleX(1.15); opacity: 1; }
}

@keyframes funSmoke {
  0% { transform: translateY(0) scale(0.6); opacity: 0.7; }
  100% { transform: translateY(10px) scale(1.6); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .fun-rocket-body,
  .fun-rocket-flame,
  .smoke-puff {
    animation: none;
    transform: none;
  }
}`
  }
];

module.exports = loaders;
