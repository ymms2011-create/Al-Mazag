// ================= i18n =================
const I18N = {
  ar: {
    title:'المزاج | برجر مشوي على الفحم', brand:'المزاج', lang_btn:'EN', currency:'ج',
    nav_menu:'المنيو', nav_offers:'العروض', nav_story:'قصتنا', nav_reviews:'التقييمات', nav_contact:'تواصل',
    hero_p:'برجر مشوي على الفحم، طازج كل يوم، على مزاجك بالضبط.', hero_cta:'شوف المنيو',
    menu_h:'المنيو', menu_sub:'كل برجر مشوي على الفحم لحظة ما تطلبه',
    add:'أضف للطلب', added:'أضيف ✓', free_tag:'كومبو ببلاش', price_tbd:'السعر حسب الساندوتش', bestseller:'الأكثر مبيعًا',
    off_h:'عروض المزاج', off_sub:'عروض حالية على الكومبوهات',
    o1_t:'عرض الكومبو', o1_d:'ساندوتش المزاج (سنجل او دابل او تريبل) + فرايز وكولا بسعر 200 جنيه.',
    o2_t:'عرض الدويتو 1', o2_d:'كلاسيك المزاج + تشيكن المزاج + 2 فرايز',
    o3_t:'عرض الدويتو 2', o3_d:'2 كلاسيك المزاج + 2 فرايز',
    o4_t:'عرض المزاج', o4_d:'ساندوتش مزاج + فرايز + كولا',
    story_h:'على مزاجك',
    story_p:'بدأنا المزاج من فكرة بسيطة: البرجر لازم يكون مشوي على فحم حقيقي، ولحم طازج يوصل كل يوم. مو مطعم وجبات سريعة، إحنا مكان تجي له لما يجيك مزاج برجر حقيقي.',
    rev_h:'آراء العملاء', rev_none:'لسه مفيش تقييمات', rev_avg:'{a} من ٥ ({c} تقييم)',
    rev_name_ph:'اسمك', rev_comment_ph:'اكتب رأيك في الأكل والخدمة...', rev_post:'نشر التقييم',
    br1_t:'الفرع الأول', br1_d:'ميدان الرصافة، محرم بيه، بجانب محمصة طأطأ',
    br2_t:'الفرع الثاني', br2_d:'سموحة، شارع حاتم، بجانب مسجد فتح الله',
    foot_orders:'للطلبات:', foot_wa:'واتساب:',
    cart_title:'سلتك', cart_empty:'السلة فاضية لسه، ضيف من المنيو.', cart_total:'الإجمالي',
    f_name:'الاسم بالكامل', f_phone:'رقم التواصل', f_addr:'العنوان بالتفصيل',
    f_name_ph:'مثال: أحمد محمد علي', f_addr_ph:'المحافظة، الحي، الشارع، رقم العمارة والدور',
    order_wa:'اطلب على واتساب', close:'اغلاق', cart_aria:'السلة', wa_aria:'تواصل عبر واتساب',
    toast_added:'{n} اتضاف للسلة', toast_first:'ضيف صنف الأول من المنيو',
    toast_invalid:'لازم تكتب الاسم والعنوان بالتفصيل ورقم التواصل عشان تقدر تطلب',
    toast_rev_invalid:'اكتب اسمك واختار تقييم واكتب تعليق قبل النشر', toast_thanks:'شكراً على تقييمك!',
    wa_hello:'أهلاً، عايز أطلب من المزاج:', wa_total:'الإجمالي', wa_name:'الاسم', wa_phone:'رقم التواصل', wa_addr:'العنوان'
  },
  en: {
    title:'Al Mazaj | Charcoal-Grilled Burgers', brand:'Al Mazaj', lang_btn:'عربي', currency:'EGP',
    nav_menu:'Menu', nav_offers:'Offers', nav_story:'Our Story', nav_reviews:'Reviews', nav_contact:'Contact',
    hero_p:'Charcoal-grilled burgers, fresh every day, made exactly the way you like them.', hero_cta:'View Menu',
    menu_h:'Menu', menu_sub:'Every burger is grilled over charcoal the moment you order',
    add:'Add to order', added:'Added ✓', free_tag:'Free combo', price_tbd:'Price depends on sandwich', bestseller:'Best Seller',
    off_h:'Al Mazaj Offers', off_sub:'Current combo deals',
    o1_t:'Combo Offer', o1_d:'Al Mazaj sandwich (single, double or triple) + fries and cola for 200 EGP.',
    o2_t:'Duo Offer 1', o2_d:'Classic Mazaj + Chicken Mazaj + 2 fries',
    o3_t:'Duo Offer 2', o3_d:'2 Classic Mazaj + 2 fries',
    o4_t:'Al Mazaj Offer', o4_d:'Mazaj sandwich + fries + cola',
    story_h:'Your Mood, Your Way',
    story_p:"Al Mazaj started from a simple idea: a burger has to be grilled over real charcoal, with fresh beef delivered every day. We're not fast food. We're where you come when you're truly in the mood for a real burger.",
    rev_h:'Customer Reviews', rev_none:'No reviews yet', rev_avg:'{a} out of 5 ({c} reviews)',
    rev_name_ph:'Your name', rev_comment_ph:'Tell us about the food and service...', rev_post:'Post review',
    br1_t:'First Branch', br1_d:'Al-Rasafa Square, Moharram Bek, next to Tata Roastery',
    br2_t:'Second Branch', br2_d:'Smouha, Hatem Street, next to Fathallah Mosque',
    foot_orders:'Orders:', foot_wa:'WhatsApp:',
    cart_title:'Your Cart', cart_empty:'Your cart is empty. Add something from the menu.', cart_total:'Total',
    f_name:'Full name', f_phone:'Phone number', f_addr:'Detailed address',
    f_name_ph:'e.g. Ahmed Mohamed Ali', f_addr_ph:'Governorate, district, street, building number and floor',
    order_wa:'Order on WhatsApp', close:'Close', cart_aria:'Cart', wa_aria:'Chat on WhatsApp',
    toast_added:'{n} added to cart', toast_first:'Add an item from the menu first',
    toast_invalid:'Please enter your full name, phone number and detailed address to place an order',
    toast_rev_invalid:'Enter your name, pick a rating and write a comment before posting', toast_thanks:'Thanks for your review!',
    wa_hello:"Hello, I'd like to order from Al Mazaj:", wa_total:'Total', wa_name:'Name', wa_phone:'Phone', wa_addr:'Address'
  }
};

let lang = 'ar';
try{ const s = localStorage.getItem('mazaj_lang'); if(s === 'en' || s === 'ar') lang = s; }catch(err){}

const t = k => I18N[lang][k];
const num = n => lang === 'ar' ? Number(n).toLocaleString('ar-EG') : String(n);
const money = n => num(n) + ' ' + t('currency');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));



// ================= Best-seller tracking (counts adds on this device) =================
const COUNTS_KEY = 'mazaj_item_counts';
let itemCounts = {};
try{ itemCounts = JSON.parse(localStorage.getItem(COUNTS_KEY) || '{}'); }catch(err){ itemCounts = {}; }

function baseId(id){ return id.split(':')[0]; }

function trackAdd(id, qty){
  const bid = baseId(id);
  itemCounts[bid] = (itemCounts[bid] || 0) + qty;
  try{ localStorage.setItem(COUNTS_KEY, JSON.stringify(itemCounts)); }catch(err){}
}

function bestSellerId(){
  let top = null, max = 0;
  Object.entries(itemCounts).forEach(([id, n])=>{
    if(n > max){ max = n; top = id; }
  });
  return max > 0 ? top : null;
}

// ================= Menu data (from the real printed menu) =================
const SIZE_LABEL = {
  single:{ar:'سنجل', en:'Single'}, double:{ar:'دبل', en:'Double'}, triple:{ar:'تريبل', en:'Triple'}
};
const MENU = [
  { title:{ar:'البرجر', en:'Burgers'}, type:'burger', items:[
    { id:'mazaj', img:'images/mazaj.jpg', name:{ar:'برجر المزاج', en:'Al Mazaj Burger'},
      desc:{ar:'قطعة لحم بقري 170 جرام محشوة بالجبنة ومغطاة بصوص الشيدر والكاتشب والبسطرمة والبيج تيستي والخيار والطماطم والخس والبصل.',
            en:'170g beef patty stuffed with cheese, topped with cheddar sauce, ketchup, pastrami, Big Tasty sauce, pickles, tomato, lettuce and onion.'},
      sizes:[['single',145],['double',210],['triple',265]] },
    { id:'chicken', img:'images/chicken.jpg', name:{ar:'تشيكن برجر', en:'Chicken Burger'},
      desc:{ar:'قطعة صدور فراخ مغطاة بصوص الشيدر والرانش والكاتشب والخيار والطماطم مع الرومي المدخن والخس والبصل.',
            en:'Chicken breast fillet topped with cheddar and ranch sauces, ketchup, pickles and tomato, with smoked turkey, lettuce and onion.'},
      sizes:[['single',140],['double',190]] },
    { id:'smash', img:'images/smash.jpg', name:{ar:'سماش برجر', en:'Smash Burger'},
      desc:{ar:'قطعة لحم سماش 100 جرام مغطاة بصوص الشيدر والبيج تيستي والكاتشب مع الخيار والبصل المكرمل.',
            en:'100g smash beef patty topped with cheddar sauce, Big Tasty sauce and ketchup, with pickles and caramelized onions.'},
      sizes:[['single',120],['double',155],['triple',185]] },
    { id:'classic', img:'images/classic.jpg', name:{ar:'كلاسيك برجر', en:'Classic Burger'},
      desc:{ar:'قطعة بقري 70 جرام مغطاة بصوص الشيدر والكاتشب والبيج تيستي مع الطماطم والخيار والخس والبصل.',
            en:'70g beef patty topped with cheddar sauce, ketchup and Big Tasty sauce, with tomato, pickles, lettuce and onion.'},
      sizes:[['single',80],['double',120]] }
  ]},
  { title:{ar:'البطاطس والكومبو', en:'Fries & Combo'}, type:'card', items:[
    { id:'fries_plain',  img:'images/fries-plain.jpg', name:{ar:'بطاطس سادة',   en:'Plain Fries'},  price:30 },
    { id:'fries_cheese', img:'images/fries-cheese.jpg', name:{ar:'بطاطس جبنة',   en:'Cheese Fries'}, price:45 },
    { id:'fries_ranch',  img:'images/fries-ranch.jpg', name:{ar:'بطاطس رانش',   en:'Ranch Fries'},  price:40 },
    { id:'fries_spicy',  img:'images/fries-spicy.jpg', name:{ar:'بطاطس سبايسي', en:'Spicy Fries'},  price:40 },
    { id:'fries_combo',  img:'images/fries-combo.jpg', name:{ar:'كومبو', en:'Combo'}, desc:{ar:'باكت بطاطس + كولا', en:'Fries pack + cola'}, price:35 }
  ]},
  { title:{ar:'مقبلات', en:'Extras'}, type:'mini', items:[
    { id:'extra_fries',   icon:'🍟', name:{ar:'إضافة بطاطس',      en:'Extra fries'},      price:15 },
    { id:'mushroom',      icon:'🍄', name:{ar:'مشروم',            en:'Mushrooms'},        price:30 },
    { id:'pastrami',      icon:'🥩', name:{ar:'بسطرمة',           en:'Pastrami'},         price:30 },
    { id:'sauce_cheddar', icon:'🧀', name:{ar:'صوص شيدر',         en:'Cheddar sauce'},    price:20 },
    { id:'sauce_ranch',   icon:'🥣', name:{ar:'صوص رانش',         en:'Ranch sauce'},      price:20 },
    { id:'sauce_bigtasty',icon:'🥫', name:{ar:'صوص بيج تيستي',    en:'Big Tasty sauce'},  price:20 },
    { id:'sauce_hot',     icon:'🌶️', name:{ar:'صوص حار',          en:'Hot sauce'},        price:20 }
  ]},
  { title:{ar:'مشروبات', en:'Drinks'}, type:'mini', items:[
    { id:'water', icon:'💧', name:{ar:'مياه',  en:'Water'}, price:10 },
    { id:'cola',  img:'images/cola.jpg', name:{ar:'كولا',  en:'Cola'},  price:25 }
  ]}
];
const MENU_BY_ID = Object.fromEntries(MENU.flatMap(g => g.items.map(i => [i.id, i])));
const menuRoot = document.getElementById('menuRoot');
const sel = {}; // chosen size per burger

function renderMenu(){
  menuRoot.innerHTML = MENU.map(g => {
    const body = g.items.map(it => {
      const nm = esc(it.name[lang]);
      if(g.type === 'mini'){
        return `<div class="mini">${it.img ? `<img class="mthumb" src="${it.img}" alt="">` : `<span class="mi">${it.icon}</span>`}<span class="mn">${nm}</span><span class="price">${money(it.price)}</span>` +
               `<button class="add-btn mini-add" data-id="${it.id}" data-price="${it.price}" aria-label="${t('add')}">+</button></div>`;
      }
      if(it.sizes){
        const cur = sel[it.id] || it.sizes[0][0];
        const pills = it.sizes.map(([k,p]) =>
          `<button class="size-btn${k === cur ? ' active' : ''}" data-item="${it.id}" data-size="${k}"><span>${SIZE_LABEL[k][lang]}</span><b>${money(p)}</b></button>`).join('');
        const badge = it.id === bestSellerId() ? `<span class="bestseller-badge">${t('bestseller')}</span>` : '';
        return `<div class="card">${badge}<img class="thumb" src="${it.img}" alt="${nm}" loading="lazy">` +
               `<h3>${nm}</h3><p>${esc(it.desc[lang])}</p><div class="sizes">${pills}</div>` +
               `<button class="add-btn wide" data-id="${it.id}">${t('add')}</button></div>`;
      }
      const badge2 = it.id === bestSellerId() ? `<span class="bestseller-badge">${t('bestseller')}</span>` : '';
      return `<div class="card">${badge2}${it.img ? `<img class="thumb" src="${it.img}" alt="${nm}" loading="lazy">` : `<span class="icon">${it.icon}</span>`}<h3>${nm}</h3>` +
             (it.desc ? `<p>${esc(it.desc[lang])}</p>` : '') +
             `<div class="row"><span class="price">${money(it.price)}</span>` +
             `<button class="add-btn" data-id="${it.id}" data-price="${it.price}">${t('add')}</button></div></div>`;
    }).join('');
    return `<h3 class="cat">${g.title[lang]}</h3><div class="${g.type === 'mini' ? 'mini-grid' : 'grid'}">${body}</div>`;
  }).join('');
}

// ================= Brand click -> top =================
document.getElementById('brandHome').addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ================= Hero embers =================
const emberBox = document.getElementById('embers');
const count = window.innerWidth < 600 ? 45 : 90;
for(let i=0;i<count;i++){
  const e = document.createElement('div');
  e.className = 'ember';
  const size = 2 + Math.random()*6;
  e.style.width = size+'px';
  e.style.height = size+'px';
  e.style.left = (Math.random()*100)+'%';
  e.style.setProperty('--drift', (Math.random()*90-45)+'px');
  e.style.animationDuration = (3.5+Math.random()*5)+'s';
  e.style.animationDelay = (Math.random()*8)+'s';
  emberBox.appendChild(e);
}

// ================= Toast =================
const toast = document.getElementById('toast');
let toastTimer;
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toast.classList.remove('show'), 2200);
}

// ================= Cart =================
let cart = []; // [{ id, price, qty }]
const cartCountEl = document.getElementById('cartCount');
const cartCountFloatEl = document.getElementById('cartCountFloat');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const WHATSAPP_NUMBER = '201010157407';
const itemName = id => {
  const [base, size] = id.split(':');
  if(/^o\d$/.test(base)) return t(base + '_t') + (size ? ' — ' + SIZE_LABEL[size][lang] : '');
  return MENU_BY_ID[base].name[lang] + (size ? ' — ' + SIZE_LABEL[size][lang] : '');
};
const hasTbd = () => cart.some(i => i.price == null);
const totalStr = n => money(n) + (hasTbd() ? ' +' : '');

function addToCart(id, price, btn){
  const existing = cart.find(i => i.id === id);
  if(existing){ existing.qty++; } else { cart.push({ id, price, qty: 1 }); }
  trackAdd(id, 1);
  bumpCartIcons();
  btn.classList.add('added');
  const mini = btn.classList.contains('mini-add');
  btn.textContent = mini ? '✓' : t('added');
  setTimeout(()=>{ btn.classList.remove('added'); btn.textContent = mini ? '+' : t('add'); }, 1200);
  showToast(t('toast_added').replace('{n}', itemName(id)));
  renderCart();
  renderMenu();
}

function changeQty(id, delta){
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){ cart = cart.filter(i => i.id !== id); }
  renderCart();
}

function renderCart(){
  const totalQty = cart.reduce((s,i)=> s+i.qty, 0);
  const totalPrice = cart.reduce((s,i)=> s + i.qty*i.price, 0);
  cartCountEl.textContent = totalQty;
  cartCountFloatEl.textContent = totalQty;
  cartTotalEl.textContent = totalStr(totalPrice);

  if(cart.length === 0){
    cartItemsEl.innerHTML = `<p class="cart-empty">${t('cart_empty')}</p>`;
    return;
  }
  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-line">
      <div>
        <div class="name">${itemName(item.id)}</div>
        <div class="sub">${item.price != null ? money(item.price) + ' × ' + num(item.qty) : t('price_tbd') + ' × ' + num(item.qty)}</div>
      </div>
      <div class="qty-ctrl">
        <button data-action="dec" data-id="${item.id}">−</button>
        <span>${num(item.qty)}</span>
        <button data-action="inc" data-id="${item.id}">+</button>
      </div>
    </div>`).join('');

  cartItemsEl.querySelectorAll('button').forEach(b=>{
    b.addEventListener('click', ()=> changeQty(b.dataset.id, b.dataset.action === 'inc' ? 1 : -1));
  });
}


function bumpCartIcons(){
  [document.getElementById('cartBtn'), document.getElementById('cartFloat')].forEach(el=>{
    el.classList.remove('bump');
    void el.offsetWidth; // restart animation
    el.classList.add('bump');
  });
}

function openCart(){ cartDrawer.classList.add('open'); cartOverlay.classList.add('show'); }
function closeCart(){ cartDrawer.classList.remove('open'); cartOverlay.classList.remove('show'); }

document.addEventListener('click', (e)=>{
  const sz = e.target.closest('.size-btn');
  if(sz){
    if(sz.dataset.offer){
      sel['offer:' + sz.dataset.offer] = sz.dataset.size;
    } else {
      sel[sz.dataset.item] = sz.dataset.size;
    }
    sz.parentElement.querySelectorAll('.size-btn').forEach(b=> b.classList.toggle('active', b === sz));
    return;
  }
  const b = e.target.closest('.add-btn');
  if(!b) return;
  let id = b.dataset.id, price = Number(b.dataset.price);
  const it = MENU_BY_ID[id];
  if(b.dataset.offer === 'o1'){
    const k = sel['offer:o1'] || 'single';
    id = id + ':' + k;
    price = 200;
  } else if(it && it.sizes){
    const k = sel[id] || it.sizes[0][0];
    id = id + ':' + k;
    price = it.sizes.find(x => x[0] === k)[1];
  }
  addToCart(id, price, b);
});
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartFloat').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// ================= Order via WhatsApp (required fields) =================
const whatsappOrderBtn = document.getElementById('whatsappOrderBtn');
const custName = document.getElementById('custName');
const custPhone = document.getElementById('custPhone');
const custAddress = document.getElementById('custAddress');

[custName, custPhone, custAddress].forEach(el=>{
  el.addEventListener('input', ()=> el.classList.remove('invalid'));
});
const digits = s => s.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/\D/g,'');

whatsappOrderBtn.addEventListener('click', (e)=>{
  if(cart.length === 0){
    e.preventDefault();
    showToast(t('toast_first'));
    return;
  }
  const name = custName.value.trim();
  const phone = custPhone.value.trim();
  const address = custAddress.value.trim();
  let firstInvalid = null;
  const check = (el, ok) => { el.classList.toggle('invalid', !ok); if(!ok && !firstInvalid) firstInvalid = el; };
  check(custName, name.length >= 3);
  check(custPhone, digits(phone).length >= 10);
  check(custAddress, address.length >= 8);

  if(firstInvalid){
    e.preventDefault();
    firstInvalid.focus();
    showToast(t('toast_invalid'));
    return;
  }

  const total = cart.reduce((s,i)=> s + i.qty*i.price, 0);
  let msg = t('wa_hello') + '\n\n';
  cart.forEach(i=>{ msg += i.price != null ? `- ${itemName(i.id)} × ${num(i.qty)} = ${money(i.qty*i.price)}\n` : `- ${itemName(i.id)} × ${num(i.qty)} (${t('price_tbd')})\n`; });
  msg += `\n${t('wa_total')}: ${totalStr(total)}\n\n`;
  msg += `${t('wa_name')}: ${name}\n${t('wa_phone')}: ${phone}\n${t('wa_addr')}: ${address}`;
  whatsappOrderBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
});

// ================= Reviews (stored per-device in localStorage) =================
const REVIEWS_KEY = 'mazaj_reviews';
let reviews = [];
try{ reviews = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '[]'); }catch(err){ reviews = []; }

const starPicker = document.getElementById('starPicker');
const reviewForm = document.getElementById('reviewForm');
const revName = document.getElementById('revName');
const revComment = document.getElementById('revComment');
const reviewList = document.getElementById('reviewList');
const avgStars = document.getElementById('avgStars');
const avgText = document.getElementById('avgText');
let selectedStars = 0;

starPicker.querySelectorAll('span').forEach(s=>{
  s.addEventListener('click', ()=>{
    selectedStars = Number(s.dataset.v);
    starPicker.querySelectorAll('span').forEach(x=> x.classList.toggle('active', Number(x.dataset.v) <= selectedStars));
  });
});

const starString = n => '★★★★★☆☆☆☆☆'.slice(5-n, 10-n);
const fmtDate = r => r.ts ? new Date(r.ts).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB') : (r.date || '');

function renderReviews(){
  if(reviews.length === 0){
    reviewList.innerHTML = '';
    avgStars.textContent = '☆☆☆☆☆';
    avgText.textContent = t('rev_none');
    return;
  }
  const avg = reviews.reduce((s,r)=> s+r.stars, 0) / reviews.length;
  avgStars.textContent = starString(Math.round(avg));
  avgText.textContent = t('rev_avg').replace('{a}', num(avg.toFixed(1))).replace('{c}', num(reviews.length));
  reviewList.innerHTML = reviews.slice().reverse().map(r => `
    <div class="review-card">
      <div class="rline"><span class="rname">${esc(r.name)}</span><span class="rstars">${starString(r.stars)}</span></div>
      <p class="rcomment">${esc(r.comment)}</p>
      <div class="rdate">${fmtDate(r)}</div>
    </div>`).join('');
}

reviewForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = revName.value.trim();
  const comment = revComment.value.trim();
  if(name.length < 2 || selectedStars === 0 || comment.length < 2){
    showToast(t('toast_rev_invalid'));
    return;
  }
  reviews.push({ name, stars: selectedStars, comment, ts: Date.now() });
  try{ localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews)); }catch(err){}
  revName.value = ''; revComment.value = ''; selectedStars = 0;
  starPicker.querySelectorAll('span').forEach(x=> x.classList.remove('active'));
  renderReviews();
  showToast(t('toast_thanks'));
});

// ================= Apply language =================
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const langLabel = document.getElementById('langLabel');

function setLangMenu(open){
  langMenu.classList.toggle('open', open);
  langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach(el=> el.textContent = t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-ph]').forEach(el=> el.placeholder = t(el.dataset.i18nPh));
  document.querySelectorAll('[data-i18n-aria]').forEach(el=> el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  document.querySelectorAll('.js-price').forEach(el=> el.textContent = money(el.dataset.price));
  langLabel.textContent = lang === 'ar' ? 'العربية' : 'English';
  langMenu.querySelectorAll('button').forEach(b=> b.classList.toggle('active', b.dataset.lang === lang));
  renderMenu();
  renderCart();
  renderReviews();
}

langBtn.addEventListener('click', (e)=>{
  e.stopPropagation();
  setLangMenu(!langMenu.classList.contains('open'));
});
langMenu.querySelectorAll('button').forEach(b=>{
  b.addEventListener('click', ()=>{
    lang = b.dataset.lang;
    try{ localStorage.setItem('mazaj_lang', lang); }catch(err){}
    applyLang();
    setLangMenu(false);
  });
});
document.addEventListener('click', ()=> setLangMenu(false));
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') setLangMenu(false); });
applyLang();

// ================= Slow-spinning cartoon burgers behind plain sections =================
const burgerBg = document.getElementById('burgerBg');
const plainZone = document.getElementById('plainZone');
function spawnBurgers(){
  burgerBg.innerHTML = '';
  const n = Math.max(24, Math.round(plainZone.offsetHeight / 100));
  const bands = [[2,30],[36,64],[70,96]];
  for(let i=0;i<n;i++){
    const size = 14 + Math.random()*14;
    const b = bands[i % 3];
    const d = document.createElement('div');
    d.className = 'bg-burger';
    d.style.width = d.style.height = size + 'px';
    d.style.top = ((i + 0.15 + Math.random()*0.7) / n * 100) + '%';
    d.style.left = (b[0] + Math.random()*(b[1]-b[0])) + '%';
    d.style.animationDuration = (12 + Math.random()*14) + 's';
    d.style.animationDirection = Math.random() < 0.5 ? 'normal' : 'reverse';
    d.style.animationDelay = (-Math.random()*20) + 's';
    d.innerHTML = '<svg viewBox="0 0 64 64"><use href="#burgerIcon"/></svg>';
    burgerBg.appendChild(d);
  }
}
spawnBurgers();
window.addEventListener('load', spawnBurgers);
