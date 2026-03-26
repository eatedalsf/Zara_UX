// ============================================================
// SCREEN ROUTING
// ============================================================
let bagCount = 0;

function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
  updateFlowIndicator(screenId);
}

function updateFlowIndicator(screenId) {
  const map = {
    'screen-home':     'flow-home',
    'screen-category': 'flow-cat',
    'screen-product':  'flow-pdp',
    'screen-cart':     'flow-cart',
  };
  document.querySelectorAll('.flow-step').forEach(s => {
    s.classList.remove('current','done');
  });
  const order = ['flow-home','flow-nav','flow-cat','flow-pdp','flow-cart'];
  const current = map[screenId];
  if (!current) return;
  const ci = order.indexOf(current);
  order.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (i === ci) el.classList.add('current');
    else if (i < ci) el.classList.add('done');
  });
}

// ============================================================
// NAV OVERLAY
// ============================================================
function openNav() {
  document.getElementById('nav-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  // update flow indicator
  document.querySelectorAll('.flow-step').forEach(s => s.classList.remove('current'));
  document.getElementById('flow-nav').classList.add('current');
}
function closeNav() {
  document.getElementById('nav-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// FILTER & SORT PANELS
// ============================================================
function openFilter() {
  document.getElementById('filter-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeFilter(e) {
  if (!e || e.target === document.getElementById('filter-overlay')) {
    document.getElementById('filter-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}
function openSort() {
  document.getElementById('sort-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSort(e) {
  if (!e || e.target === document.getElementById('sort-overlay')) {
    document.getElementById('sort-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}
function selectSort(el) {
  document.querySelectorAll('.sort-option').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  setTimeout(() => closeSort(), 200);
}

// ============================================================
// GRID DENSITY
// ============================================================
function setDensity(n) {
  const grid = document.getElementById('product-grid');
  grid.className = 'product-grid density-' + n;
  document.querySelectorAll('.density-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === (n - 1));
  });
}

// ============================================================
// PRODUCT PAGE — SIZE & ADD LOGIC
// ============================================================
function selectSize(btn) {
  document.querySelectorAll('.size-btn:not(.unavailable)').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  // UX Fix: enable Add button only after size is selected
  const addBtn = document.getElementById('pdp-add-btn');
  addBtn.disabled = false;
  document.getElementById('size-hint').textContent = 'Size ' + btn.textContent.trim() + ' selected';
  document.getElementById('size-hint').style.color = 'var(--text-muted)';
}
function selectColor(dot, colorName) {
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
  // reset size on color change
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('pdp-add-btn').disabled = true;
  document.getElementById('size-hint').textContent = 'Please select a size to continue';
}
function addToBag() {
  bagCount++;
  document.querySelectorAll('.nav-bag-count').forEach(el => el.textContent = bagCount);
  showToast('Added to bag');
  setTimeout(() => goTo('screen-cart'), 700);
}

// ============================================================
// CART — REMOVE ITEM
// ============================================================
function removeItem(itemId) {
  const item = document.getElementById(itemId);
  if (item) {
    item.style.opacity = '0';
    item.style.transition = 'opacity 0.25s';
    setTimeout(() => {
      item.remove();
      bagCount = Math.max(0, bagCount - 1);
      document.querySelectorAll('.nav-bag-count').forEach(el => el.textContent = bagCount);
      document.getElementById('cart-empty').style.display = 'block';
      document.querySelector('.cart-item-count').textContent = '0 items';
      document.querySelector('.summary-total-price').textContent = '$0.00';
    }, 250);
  }
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function cartQtyUp(qtyId) {
  const el = document.getElementById(qtyId);
  el.textContent = parseInt(el.textContent) + 1;
}
function cartQtyDown(itemId, qtyId) {
  const el = document.getElementById(qtyId);
  const current = parseInt(el.textContent);
  if (current <= 1) { removeItem(itemId); }
  else { el.textContent = current - 1; }
}
function showToast(msg) {
  const toast = document.getElementById('confirm-toast');
  toast.textContent = msg;
  toast.className = 'show';
  setTimeout(() => { toast.className = ''; }, 1800);
}

// ============================================================
// INIT
// ============================================================
updateFlowIndicator('screen-home');