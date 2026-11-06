/**
 * Loader Lab - Application Logic
 * Pure vanilla JavaScript for theme toggle, filtering, search, copy-to-clipboard,
 * and live interactive modal inspector.
 */

document.addEventListener('DOMContentLoaded', () => {
  const loaders = window.LOADERS_DATA || [];

  // DOM Elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIconSun = document.getElementById('themeIconSun');
  const themeIconMoon = document.getElementById('themeIconMoon');
  const gridContainer = document.getElementById('loadersGrid');
  const filterTabs = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('searchInput');
  const matchCountText = document.getElementById('matchCountText');
  const globalColorInput = document.getElementById('globalColorInput');
  const resetColorBtn = document.getElementById('resetColorBtn');
  const motionToggle = document.getElementById('motionToggle');
  const toast = document.getElementById('toastNotification');

  // Modal Elements
  const inspectorModal = document.getElementById('inspectorModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalPreviewStage = document.getElementById('modalPreviewStage');
  const modalColorPicker = document.getElementById('modalColorPicker');
  const modalSizeInput = document.getElementById('modalSizeInput');
  const modalResetTweakBtn = document.getElementById('modalResetTweakBtn');
  const modalStandaloneLink = document.getElementById('modalStandaloneLink');
  const modalCodeDisplay = document.getElementById('modalCodeDisplay');
  const modalCopyCodeBtn = document.getElementById('modalCopyCodeBtn');
  const codeTabBtns = document.querySelectorAll('.code-tab-btn');

  let currentFilter = 'all';
  let searchQuery = '';
  let activeModalLoader = null;
  let activeCodeTab = 'html';
  let toastTimeout = null;

  // -------------------------------------------------------------
  // 1. Theme Management (Dark / Light)
  // -------------------------------------------------------------
  const savedTheme = localStorage.getItem('loader-lab-theme');
  const initialTheme = savedTheme || 'dark';

  setTheme(initialTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('loader-lab-theme', theme);
    if (theme === 'dark') {
      themeIconSun.style.display = 'block';
      themeIconMoon.style.display = 'none';
      themeToggleBtn.setAttribute('title', 'Switch to light mode');
    } else {
      themeIconSun.style.display = 'none';
      themeIconMoon.style.display = 'block';
      themeToggleBtn.setAttribute('title', 'Switch to dark mode');
    }
  }

  // -------------------------------------------------------------
  // 2. Render Loaders Grid
  // -------------------------------------------------------------
  function renderGrid() {
    gridContainer.innerHTML = '';

    const filtered = loaders.filter(item => {
      const matchesFilter = (currentFilter === 'all') || (item.category === currentFilter);
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        item.name.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });

    matchCountText.textContent = `Showing ${filtered.length} of ${loaders.length}`;

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: var(--text-secondary);">
          <p style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">No loaders matched your search.</p>
          <p style="font-size: 13px;">Try another keyword or reset the filter.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(loader => {
      const card = document.createElement('article');
      card.className = 'loader-card';
      card.setAttribute('data-id', loader.id);
      card.setAttribute('data-category', loader.category);

      const categoryClass = `cat-${loader.category}`;

      card.innerHTML = `
        <div class="card-header">
          <div class="card-info">
            <h3 class="card-title">${escapeHtml(loader.name)}</h3>
            <span class="card-category ${categoryClass}">${escapeHtml(loader.group)}</span>
          </div>
          <button class="btn btn-sm inspect-btn" aria-label="Inspect ${escapeHtml(loader.name)} loader" title="Inspect & Customize">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Inspect
          </button>
        </div>

        <div class="card-stage" id="stage-${loader.id}" aria-label="${escapeHtml(loader.name)} preview">
          ${loader.html}
        </div>

        <div class="card-footer">
          <span style="font-size: 11px; color: var(--text-muted); font-family: monospace;">${loader.id}</span>
          <div class="action-group">
            <button class="btn btn-sm copy-html-btn" title="Copy HTML Snippet">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              HTML
            </button>
            <button class="btn btn-sm copy-css-btn" title="Copy CSS Snippet">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              CSS
            </button>
          </div>
        </div>
      `;

      // Event listeners for card buttons
      const inspectBtn = card.querySelector('.inspect-btn');
      inspectBtn.addEventListener('click', () => openModal(loader));

      const copyHtmlBtn = card.querySelector('.copy-html-btn');
      copyHtmlBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(loader.html, `HTML for "${loader.name}" copied!`);
      });

      const copyCssBtn = card.querySelector('.copy-css-btn');
      copyCssBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(loader.css, `CSS for "${loader.name}" copied!`);
      });

      gridContainer.appendChild(card);
    });

    // Apply global color tint if set
    applyGlobalTint();
  }

  // -------------------------------------------------------------
  // 3. Filtering and Search
  // -------------------------------------------------------------
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentFilter = tab.getAttribute('data-filter');
      renderGrid();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderGrid();
  });

  // -------------------------------------------------------------
  // 4. Global Color Tint & Motion Preference Simulation
  // -------------------------------------------------------------
  globalColorInput.addEventListener('input', () => {
    applyGlobalTint();
  });

  resetColorBtn.addEventListener('click', () => {
    globalColorInput.value = '#3b82f6';
    // Clear inline styles on loader elements
    document.querySelectorAll('.card-stage > *').forEach(el => {
      el.style.removeProperty('--color');
    });
    showToast('Reset colors to default');
  });

  function applyGlobalTint() {
    const color = globalColorInput.value;
    if (!color) return;
    document.querySelectorAll('.card-stage > *').forEach(el => {
      el.style.setProperty('--color', color);
    });
  }

  motionToggle.addEventListener('change', (e) => {
    if (e.target.value === 'reduced') {
      document.body.classList.add('simulate-reduced-motion');
      // Inject reduced motion override style tag if needed
      let styleEl = document.getElementById('simulated-reduced-style');
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'simulated-reduced-style';
        styleEl.textContent = `
          .simulate-reduced-motion *,
          .simulate-reduced-motion *::before,
          .simulate-reduced-motion *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        `;
        document.head.appendChild(styleEl);
      }
      showToast('Simulating prefers-reduced-motion');
    } else {
      document.body.classList.remove('simulate-reduced-motion');
      const styleEl = document.getElementById('simulated-reduced-style');
      if (styleEl) styleEl.remove();
      showToast('Restored standard motion');
    }
  });

  // -------------------------------------------------------------
  // 5. Toast Notification System
  // -------------------------------------------------------------
  function showToast(message) {
    if (toastTimeout) clearTimeout(toastTimeout);
    toast.textContent = message;
    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  function copyToClipboard(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (err) {
      showToast('Copy failed, please select and copy manually.');
    }
    document.body.removeChild(textArea);
  }

  // -------------------------------------------------------------
  // 6. Modal Inspector
  // -------------------------------------------------------------
  function openModal(loader) {
    activeModalLoader = loader;
    activeCodeTab = 'html';

    modalTitle.textContent = `${loader.name} (${loader.group})`;
    modalPreviewStage.innerHTML = loader.html;

    // Reset controls
    modalColorPicker.value = (loader.defaultColor && loader.defaultColor.startsWith('#'))
      ? loader.defaultColor
      : '#3b82f6';
    modalSizeInput.value = loader.defaultSize || '48px';

    modalStandaloneLink.href = `loaders/${loader.id}.html`;

    updateModalCodeDisplay();

    // Code tabs setup
    codeTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === activeCodeTab);
    });

    inspectorModal.style.display = 'flex';
    // Trigger transition next tick
    setTimeout(() => {
      inspectorModal.classList.add('open');
    }, 10);
  }

  function closeModal() {
    inspectorModal.classList.remove('open');
    setTimeout(() => {
      inspectorModal.style.display = 'none';
      modalPreviewStage.innerHTML = '';
      activeModalLoader = null;
    }, 200);
  }

  modalCloseBtn.addEventListener('click', closeModal);
  inspectorModal.addEventListener('click', (e) => {
    if (e.target === inspectorModal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && inspectorModal.classList.contains('open')) {
      closeModal();
    }
  });

  // Modal Live Customization
  modalColorPicker.addEventListener('input', (e) => {
    const el = modalPreviewStage.firstElementChild;
    if (el) {
      el.style.setProperty('--color', e.target.value);
    }
  });

  modalSizeInput.addEventListener('input', (e) => {
    const el = modalPreviewStage.firstElementChild;
    if (el) {
      el.style.setProperty('--size', e.target.value);
    }
  });

  modalResetTweakBtn.addEventListener('click', () => {
    if (!activeModalLoader) return;
    modalPreviewStage.innerHTML = activeModalLoader.html;
    modalColorPicker.value = (activeModalLoader.defaultColor && activeModalLoader.defaultColor.startsWith('#'))
      ? activeModalLoader.defaultColor
      : '#3b82f6';
    modalSizeInput.value = activeModalLoader.defaultSize || '48px';
  });

  // Code Tab switching
  codeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      codeTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCodeTab = btn.getAttribute('data-tab');
      updateModalCodeDisplay();
    });
  });

  function updateModalCodeDisplay() {
    if (!activeModalLoader) return;
    const modalCodeLang = document.getElementById('modalCodeLang');
    if (activeCodeTab === 'html') {
      modalCodeDisplay.textContent = activeModalLoader.html;
      if (modalCodeLang) modalCodeLang.textContent = 'HTML';
      modalCopyCodeBtn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        Copy HTML
      `;
    } else {
      modalCodeDisplay.textContent = activeModalLoader.css;
      if (modalCodeLang) modalCodeLang.textContent = 'CSS';
      modalCopyCodeBtn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        Copy CSS
      `;
    }
  }

  modalCopyCodeBtn.addEventListener('click', () => {
    if (!activeModalLoader) return;
    const content = activeCodeTab === 'html' ? activeModalLoader.html : activeModalLoader.css;
    copyToClipboard(content, `Copied ${activeCodeTab.toUpperCase()} to clipboard!`);
  });

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Grid Render
  renderGrid();
});
