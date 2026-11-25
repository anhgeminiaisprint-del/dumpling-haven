// ==========================================
// DỮ LIỆU THỰC ĐƠN NHÀ HÀNG VIỆT NAM (18+ MÓN)
// ==========================================
const menuData = [
  // --- KHAI VỊ & CUỐN ---
  {
    id: "kv-1",
    name: "Gỏi Cuốn Tôm Thịt",
    category: "khai-vi",
    price: 55000,
    emoji: "🥢",
    badge: "Bán Chạy ⭐",
    badgeType: "sig",
    desc: "Tôm sú tươi luộc bóc vỏ, thịt ba chỉ thái mỏng, bún tươi và rau húng quế cuộn bánh tráng dẻo. Chấm cùng tương đậu phộng béo bùi.",
    tags: ["Tươi mát", "Tôm sú", "Tương đậu phộng"]
  },
  {
    id: "kv-2",
    name: "Nem Rán Hà Nội (Chả Giò)",
    category: "khai-vi",
    price: 69000,
    emoji: "🥟",
    badge: "Đặc Sản Hà Nội",
    badgeType: "chef",
    desc: "Vỏ ram giòn rụm bọc nhân thịt nạc vai xay, miến dong, mộc nhĩ, nấm hương, cà rốt và trứng gà. Ăn kèm nước chấm chua ngọt tỏi ớt.",
    tags: ["Giòn rụm", "Thịt băm & mộc nhĩ", "Nước mắm tỏi ớt"]
  },
  {
    id: "kv-3",
    name: "Nộm Ngó Sen Tôm Thịt",
    category: "khai-vi",
    price: 79000,
    emoji: "🥗",
    badge: "Thanh Vị",
    badgeType: "veg",
    desc: "Ngó sen Đồng Tháp trắng giòn trộn tôm thẻ, thịt thăn heo, cà rốt bào sợi, rau răm và đậu phộng rang giã dập, nước cốt chanh thanh tao.",
    tags: ["Ngó sen tươi", "Chua ngọt", "Rau răm"]
  },
  {
    id: "kv-4",
    name: "Chạo Tôm Bọc Mía Nướng",
    category: "khai-vi",
    price: 85000,
    emoji: "🍡",
    badge: "Món Huế",
    badgeType: "chef",
    desc: "Chả tôm quết dẻo mịn bọc quanh thân mía lau ngọt lịm, nướng vàng ươm trên than hoa, thơm nức mũi và ngọt thịt.",
    tags: ["Mía lau", "Tôm quết", "Nướng than"]
  },

  // --- PHỞ & MÓN NƯỚC ---
  {
    id: "mn-1",
    name: "Phở Bò Tái Lăn Hà Nội",
    category: "mon-nuoc",
    price: 89000,
    emoji: "🍜",
    badge: "Món Chữ Ký 🏆",
    badgeType: "sig",
    desc: "Bánh phở mềm mướt, thịt bò tươi xào lăn lửa lớn với tỏi và gừng già, ngập tràn cọng hành hoa xanh mướt trong nước dùng ninh xương ống bò 24h.",
    tags: ["Bò tái lăn", "Nước dùng 24h", "Hành lá chẻ"]
  },
  {
    id: "mn-2",
    name: "Bún Chả Hà Nội Nướng Than",
    category: "mon-nuoc",
    price: 79000,
    emoji: "🍲",
    badge: "Huyền Thoại",
    badgeType: "sig",
    desc: "Chả miếng ba chỉ nướng vàng xém cạnh và chả băm viên nướng kẹp que tre than hoa, thả trong bát nước mắm ấm chua ngọt kèm đu đủ giòn.",
    tags: ["Nướng que tre", "Thịt ba chỉ", "Rau sống kinh giới"]
  },
  {
    id: "mn-3",
    name: "Bún Bò Huế Cố Đô Đầy Đủ",
    category: "mon-nuoc",
    price: 85000,
    emoji: "🍜",
    badge: "Đậm Đà Cay Nồng",
    badgeType: "chef",
    desc: "Sợi bún to tròn đặc trưng hòa cùng bắp bò hoa giòn, chả cua Huế, giò heo mềm và nước lèo dậy mùi sả thơm, mắm ruốc thanh tao.",
    tags: ["Bắp bò hoa", "Mắm ruốc Huế", "Chả cua"]
  },
  {
    id: "mn-4",
    name: "Bún Riêu Cua Đồng Bắp Bò",
    category: "mon-nuoc",
    price: 75000,
    emoji: "🥣",
    badge: "Dân Dã Quê Nhà",
    badgeType: "veg",
    desc: "Riêu cua đồng thơm ngọt tự nhiên đóng tảng chắc nịch, cà chua đỏ mọng, đậu hũ chiên phồng ngấm vị giấm bỗng chua dịu đầu lưỡi.",
    tags: ["Cua đồng tươi", "Giấm bỗng nếp", "Đậu mơ chiên"]
  },

  // --- BÁNH & ĐIỂM TÂM VIỆT ---
  {
    id: "bt-1",
    name: "Bánh Xèo Miền Tây Giòn Rụm",
    category: "banh-truyen-thong",
    price: 89000,
    emoji: "🥞",
    badge: "Giòn Rụm",
    badgeType: "sig",
    desc: "Vỏ bánh nghệ vàng tươi siêu mỏng giòn rụm bên chảo gang, ngập nhân tôm sông, thịt ba rọi, giá đỗ. Cuốn cùng cải bẹ xanh và chấm mắm ớt.",
    tags: ["Vỏ nghệ giòn", "Cải bẹ xanh", "Tôm & thịt ba chỉ"]
  },
  {
    id: "bt-2",
    name: "Bánh Mì Sài Gòn Đặc Biệt",
    category: "banh-truyen-thong",
    price: 45000,
    emoji: "🥖",
    badge: "Di Sản Thế Giới",
    badgeType: "sig",
    desc: "Bánh mì nóng giòn đặc ruột trét bơ tươi, pate gan béo ngậy, chả lụa thủ công, thịt xá xíu, đồ chua dưa leo ngò rí và sốt tương ớt đậm đà.",
    tags: ["Pate gan béo", "Chả lụa", "Đồ chua giòn"]
  },
  {
    id: "bt-3",
    name: "Bánh Bột Lọc Tôm Thịt Xứ Huế",
    category: "banh-truyen-thong",
    price: 55000,
    emoji: "🥟",
    badge: "Bánh Lá Chuối",
    badgeType: "chef",
    desc: "Vỏ bột năng trong suốt dẻo dai bọc lấy con tôm đỏ au rim đậm mặn ngọt cùng thịt ba chỉ. Chấm nước mắm nguyên chất ớt xiêm xanh cay tê.",
    tags: ["Bột năng trong", "Tôm rim đậm", "Mắm ớt xiêm"]
  },
  {
    id: "bt-4",
    name: "Bánh Cuốn Nóng Tráng Nồi Hơi",
    category: "banh-truyen-thong",
    price: 55000,
    emoji: "🥢",
    badge: "Tráng Tay Nóng Hổi",
    badgeType: "chef",
    desc: "Lớp bánh mỏng tang tráng bằng hơi nước bọc mộc nhĩ thịt băm, rắc hành phi vàng giòn rụm, chả quế thơm lừng và nước mắm cà cuống dịu ấm.",
    tags: ["Tráng nồi hơi", "Hành phi nhà làm", "Chả quế"]
  },

  // --- CƠM & MÓN CHÍNH ---
  {
    id: "mc-1",
    name: "Cơm Tấm Sườn Bì Chả Trứng",
    category: "com-chinh",
    price: 79000,
    emoji: "🍛",
    badge: "Vua Cơm Tấm",
    badgeType: "sig",
    desc: "Gạo tấm nở xốp dẻo thơm, sườn heo ướp sả mật ong nướng than hoa mềm mọng, bì heo trộn thính thơm lừng, chả trứng hấp mềm và mỡ hành.",
    tags: ["Sườn nướng mật ong", "Chả trứng hấp", "Mỡ hành tóp mỡ"]
  },
  {
    id: "mc-2",
    name: "Cá Kho Tộ Đất Nung Miền Tây",
    category: "com-chinh",
    price: 95000,
    emoji: "🥘",
    badge: "Cơm Nhà Ấm Áp",
    badgeType: "chef",
    desc: "Cá bông lau béo ngậy kho trong nồi đất nung với nước hàng dừa xiêm, tiêu sọ Phú Quốc và ớt sừng, keo sền sệt đưa cơm vô cùng.",
    tags: ["Kho tộ đất", "Tiêu sọ Phú Quốc", "Nước dừa xiêm"]
  },
  {
    id: "mc-3",
    name: "Bò Lúc Lắc Chảo Gang Khoai Giòn",
    category: "com-chinh",
    price: 125000,
    emoji: "🥩",
    badge: "Bò Mềm Mọng",
    badgeType: "sig",
    desc: "Thăn bò thượng hạng cắt quân cờ xào đảo nhanh trên chảo gang rực lửa cùng ớt chuông, hành tây, chấm muối tiêu chanh thơm phức.",
    tags: ["Bò thăn mềm", "Ớt chuông đỏ xanh", "Muối tiêu chanh"]
  },
  {
    id: "mc-4",
    name: "Rau Muống Xào Tỏi Lửa Lớn",
    category: "com-chinh",
    price: 45000,
    emoji: "🥬",
    badge: "Xanh Mướt",
    badgeType: "veg",
    desc: "Đọt rau muống non giòn sần sật xào nhanh với tỏi đập dập thơm lừng trên chảo gang nhiệt cao, giữ trọn màu xanh mướt mát.",
    tags: ["Xanh giòn", "Tỏi phi thơm", "Dân dã"]
  },

  // --- THỨC UỐNG & TRÁNG MIỆNG ---
  {
    id: "tm-1",
    name: "Cà Phê Trứng Hà Nội",
    category: "trang-mieng",
    price: 45000,
    emoji: "☕",
    badge: "Đặc Sản Thủ Đô",
    badgeType: "sig",
    desc: "Lớp kem trứng đánh bông mịn như mây béo ngậy phủ trên nền cà phê Robusta đen đậm đà nguyên chất, uống nóng trong chén nước ấm.",
    tags: ["Kem trứng mịn", "Robusta nguyên chất", "Uống nóng"]
  },
  {
    id: "tm-2",
    name: "Cà Phê Sữa Đá Sài Gòn",
    category: "trang-mieng",
    price: 35000,
    emoji: "🧊",
    badge: "Quen Thuộc",
    badgeType: "sig",
    desc: "Hạt cà phê Đắk Lắk pha phin truyền thống hòa quyện cùng sữa đặc béo ngọt và đá viên tinh khiết. Tỉnh táo và đậm chất phố phường.",
    tags: ["Pha phin", "Sữa đặc béo", "Đá viên mát lạnh"]
  },
  {
    id: "tm-3",
    name: "Chè Hạt Sen Long Nhãn Cố Đô",
    category: "trang-mieng",
    price: 40000,
    emoji: "🥣",
    badge: "Thanh Mát Bổ Dưỡng",
    badgeType: "veg",
    desc: "Hạt sen Huế bở bùi lồng khéo léo vào từng múi long nhãn Hưng Yên mọng nước, nấu cùng đường phèn thanh tao giải nhiệt tuyệt đối.",
    tags: ["Sen Huế bở bùi", "Long nhãn giòn ngọt", "Đường phèn"]
  },
  {
    id: "tm-4",
    name: "Nước Mía Tắc Bạc Hà Ép Tươi",
    category: "trang-mieng",
    price: 25000,
    emoji: "🥤",
    badge: "Giải Nhiệt Tức Thì",
    badgeType: "veg",
    desc: "Mía tím ép tươi cùng trái tắc (quất) thơm mát và nhánh lá bạc hà tự nhiên, vị ngọt thanh mát xua tan mọi mỏi mệt.",
    tags: ["Mía ép tươi", "Trái tắc thơm", "Không đường hóa học"]
  }
];

// ==========================================
// DỮ LIỆU CÁC LOẠI BÁNH GÓI & DUMPLINGS
// ==========================================
const varietiesData = [
  {
    name: "Bánh Bột Lọc",
    nativeName: "Bánh Lọc Xứ Huế",
    origin: "Việt Nam",
    category: "vietnam",
    emoji: "🥟",
    desc: "Bánh bột lọc trong veo bọc tôm rim và thịt ba chỉ mỡ màng, gói lá chuối hấp chín hoặc luộc trần chấm nước mắm ớt xiêm xanh trứ danh.",
    tags: ["Hấp lá chuối", "Bột năng trong", "Tôm thịt rim"]
  },
  {
    name: "Bánh Nậm",
    nativeName: "Bánh Nậm Huế",
    origin: "Việt Nam",
    category: "vietnam",
    emoji: "🥟",
    desc: "Bột gạo dẻo mịn dàn mỏng trên lá chuối, phủ nhân tôm thịt xào hành tím màu gạch tôm bắt mắt. Bánh tan mềm ngay trong miệng.",
    tags: ["Bột gạo mềm", "Lá chuối", "Nhân tôm băm"]
  },
  {
    name: "Bánh Giò Hà Nội",
    nativeName: "Bánh Giò Nóng",
    origin: "Việt Nam",
    category: "vietnam",
    emoji: "🥟",
    desc: "Chiếc bánh hình kim tự tháp bọc lá chuối xanh, bột gạo tẻ dẻo bùi ôm trọn nhân thịt băm mộc nhĩ nêm tiêu đen và trứng cút bùi béo.",
    tags: ["Bột gạo tẻ", "Thịt băm tiêu đen", "Ăn kèm giò lụa"]
  },
  {
    name: "Bánh Bao Xá Xíu",
    nativeName: "Bánh Bao Hấp",
    origin: "Việt Nam / Chợ Lớn",
    category: "vietnam",
    emoji: "🥟",
    desc: "Vỏ bánh xốp trắng như bông tuyết ôm trọn nhân xá xíu đậm đà, trứng cút và lạp xưởng nướng thơm phức.",
    tags: ["Vỏ bột xốp", "Xá xíu thơm", "Lạp xưởng"]
  },
  {
    name: "Sủi Cảo Tôm Thịt",
    nativeName: "Sủi Cảo Hà Tôn Quyền",
    origin: "Chợ Lớn, Việt Nam",
    category: "vietnam",
    emoji: "🥢",
    desc: "Biểu tượng ẩm thực người Hoa tại Sài Gòn, mỗi viên cảo bọc nguyên một con tôm tươi giòn ngọt cùng nước dùng cải ngọt và mực ngâm tro.",
    tags: ["Tôm nguyên con", "Nước dùng cải", "Chợ Lớn"]
  },
  {
    name: "Xiao Long Bao",
    nativeName: "小笼包",
    origin: "Thượng Hải, Trung Quốc",
    category: "east-asia",
    emoji: "🥟",
    desc: "Bánh bao súp trứ danh với lớp vỏ mỏng xếp nếp tinh xảo, cắn nhẹ ngập tràn nước súp thịt heo nóng hổi và đậm đà.",
    tags: ["Hấp xửng", "Bánh bao súp", "Giấm gừng"]
  },
  {
    name: "Gyoza Nhật Bản",
    nativeName: "餃子",
    origin: "Nhật Bản",
    category: "east-asia",
    emoji: "🥟",
    desc: "Vỏ mỏng áp chảo tạo lớp chân đăng ten giòn rụm bên dưới, nhân thịt heo băm tỏi hẹ mọng nước bên trong.",
    tags: ["Áp chảo", "Đáy giòn rụm", "Chấm xì dầu giấm"]
  },
  {
    name: "Pierogi Ba Lan",
    nativeName: "Pierogi",
    origin: "Ba Lan",
    category: "europe",
    emoji: "🥟",
    desc: "Bánh xếp nửa vầng trăng nhân khoai tây nghiền phô mai hoặc bắp cải chua, luộc rồi xào bơ hành tây caramel thơm béo.",
    tags: ["Khoai tây & phô mai", "Bơ hành tây", "Kem chua"]
  },
  {
    name: "Momo Tây Tạng",
    nativeName: "मम:",
    origin: "Tây Tạng & Nepal",
    category: "central-asia",
    emoji: "🥟",
    desc: "Túi bánh xếp nhân thịt và rau củ thơm nức hạt tiêu Tứ Xuyên và thì là, chấm nước sốt cà chua achar cay nồng.",
    tags: ["Gia vị cay", "Sốt achar", "Ẩm thực Himalaya"]
  }
];

// ==========================================
// CÔNG THỨC PHA NƯỚC CHẤM CHUẨN VỊ
// ==========================================
const sauceFormulas = {
  nuocmam: {
    title: "Nước Mắm Chua Ngọt Tỏi Ớt",
    ingredients: [
      { name: "Nước mắm truyền thống", unit: "thìa canh", base: 1.5 },
      { name: "Nước cốt chanh tươi", unit: "thìa canh", base: 1 },
      { name: "Đường cát trắng/vàng", unit: "thìa canh", base: 1.5 },
      { name: "Nước lọc ấm", unit: "thìa canh", base: 3 },
      { name: "Tỏi tươi băm nhuyễn", unit: "tép", base: 1 },
      { name: "Ớt hiểm băm nhỏ", unit: "trái", base: 0.5 }
    ]
  },
  classic: {
    title: "Xì Dầu Tỏi Ớt Giấm Tiêu",
    ingredients: [
      { name: "Xì dầu (nước tương ngon)", unit: "thìa canh", base: 2 },
      { name: "Giấm gạo lên men", unit: "thìa canh", base: 1 },
      { name: "Dầu mè thơm", unit: "thìa cà phê", base: 0.5 },
      { name: "Tiêu sọ xay nhuyễn", unit: "nhúm", base: 1 },
      { name: "Gừng non thái sợi", unit: "thìa cà phê", base: 1 },
      { name: "Ớt tươi thái lát", unit: "trái", base: 0.5 }
    ]
  },
  tuongdau: {
    title: "Tương Đậu Phộng Chấm Cuốn",
    ingredients: [
      { name: "Tương đen (Hoisin sauce)", unit: "thìa canh", base: 2 },
      { name: "Bơ đậu phộng mịn", unit: "thìa canh", base: 1 },
      { name: "Nước cốt dừa béo", unit: "thìa canh", base: 1 },
      { name: "Nước luộc thịt/nước ấm", unit: "thìa canh", base: 1.5 },
      { name: "Đậu phộng rang giã dập", unit: "thìa canh", base: 1 },
      { name: "Ớt băm phi thơm", unit: "thìa cà phê", base: 0.5 }
    ]
  }
};

// ==========================================
// TRẠNG THÁI GIỎ HÀNG (SHOPPING CART STATE)
// ==========================================
let cart = [];
let currentSauceStyle = "nuocmam";
let currentServings = 2;

// Định dạng tiền tệ VND: 89000 -> "89.000 ₫"
function formatVND(amount) {
  return new Intl.NumberFormat("vi-VN").format(amount) + " ₫";
}

// Hiển thị thông báo Toast
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Render Menu nhà hàng
function renderMenu(category = "all") {
  const container = document.getElementById("menu-items-container");
  if (!container) return;

  const filtered = category === "all" 
    ? menuData 
    : menuData.filter(item => item.category === category);

  container.innerHTML = filtered.map(item => {
    const badgeClass = item.badgeType === "sig" ? "badge-sig" : item.badgeType === "chef" ? "badge-chef" : "badge-veg";
    return `
      <article class="menu-item-card" data-id="${item.id}">
        <div class="item-top">
          <div class="item-emoji">${item.emoji}</div>
          <div class="item-badge-wrap">
            <span class="item-badge ${badgeClass}">${item.badge}</span>
          </div>
        </div>
        <div class="item-body">
          <div class="item-header-title">
            <h3 class="item-name">${item.name}</h3>
            <span class="item-price">${formatVND(item.price)}</span>
          </div>
          <p class="item-desc">${item.desc}</p>
          <div class="item-footer">
            <div class="item-tags">
              ${item.tags.map(t => `<span class="item-tag">${t}</span>`).join("")}
            </div>
            <button class="btn-add-item" onclick="addToCart('${item.id}')">
              <span>+ Chọn Món</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Render Bánh & Điểm tâm
function renderVarieties(filter = "all") {
  const container = document.getElementById("varieties-container");
  if (!container) return;

  const filtered = filter === "all" 
    ? varietiesData 
    : varietiesData.filter(d => d.category === filter);

  container.innerHTML = filtered.map(item => `
    <article class="variety-card">
      <div class="variety-header">
        <span class="variety-origin">${item.origin}</span>
        <span class="variety-emoji">${item.emoji}</span>
      </div>
      <div class="variety-body">
        <h3 class="variety-title">${item.name} <small style="font-size: 0.82em; font-weight: normal; color: #888;">${item.nativeName}</small></h3>
        <p class="variety-desc">${item.desc}</p>
        <div class="variety-tags">
          ${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

// Cập nhật công thức nước chấm
function updateSauceCalculator() {
  const formula = sauceFormulas[currentSauceStyle];
  const listEl = document.getElementById("ingredient-list");
  const yieldEl = document.getElementById("recipe-yield");
  const servingsDisplay = document.getElementById("servings-display");

  if (!listEl || !formula) return;

  servingsDisplay.textContent = `${currentServings} người`;
  yieldEl.textContent = `Khẩu phần: ${currentServings} người (${formula.title})`;

  listEl.innerHTML = formula.ingredients.map(ing => {
    let totalQty = ing.base * currentServings;
    let formattedQty = (totalQty % 1 === 0) ? totalQty : totalQty.toFixed(1);

    return `
      <li class="ingredient-item">
        <span class="ingredient-name"><span>🥣</span> ${ing.name}</span>
        <span class="ingredient-qty">${formattedQty} ${ing.unit}</span>
      </li>
    `;
  }).join("");
}

// ==========================================
// CÁC HÀM XỬ LÝ ĐƠN MÓN / GIỎ HÀNG
// ==========================================
window.addToCart = function(itemId) {
  const item = menuData.find(m => m.id === itemId);
  if (!item) return;

  const existing = cart.find(ci => ci.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1
    });
  }

  updateCartUI();
  showToast(`✨ Đã thêm "${item.name}" vào đơn món!`);
};

window.changeCartQty = function(itemId, delta) {
  const item = cart.find(ci => ci.id === itemId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(ci => ci.id !== itemId);
  }

  updateCartUI();
};

window.removeFromCart = function(itemId) {
  cart = cart.filter(ci => ci.id !== itemId);
  updateCartUI();
};

function updateCartUI() {
  const countBadge = document.getElementById("cart-count-badge");
  const emptyState = document.getElementById("cart-empty-state");
  const listEl = document.getElementById("cart-items-list");
  const subtotalEl = document.getElementById("cart-subtotal");
  const totalEl = document.getElementById("cart-total");

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (countBadge) countBadge.textContent = totalCount;
  if (subtotalEl) subtotalEl.textContent = formatVND(totalPrice);
  if (totalEl) totalEl.textContent = formatVND(totalPrice);

  if (totalCount === 0) {
    if (emptyState) emptyState.style.display = "block";
    if (listEl) listEl.innerHTML = "";
  } else {
    if (emptyState) emptyState.style.display = "none";
    if (listEl) {
      listEl.innerHTML = cart.map(item => `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${formatVND(item.price * item.qty)}</div>
          </div>
          <div class="cart-item-qty-ctrl">
            <button class="qty-btn" onclick="changeCartQty('${item.id}', -1)" aria-label="Giảm">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartQty('${item.id}', 1)" aria-label="Tăng">+</button>
          </div>
          <button class="cart-item-del" onclick="removeFromCart('${item.id}')" title="Xóa món">&times;</button>
        </div>
      `).join("");
    }
  }
}

// Khởi tạo các sự kiện khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  // 1. Render ban đầu
  renderMenu("all");
  renderVarieties("all");
  updateSauceCalculator();
  updateCartUI();

  // 2. Chuyển Tab danh mục món ăn Việt Nam
  const menuTabs = document.querySelectorAll(".menu-tab");
  menuTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      menuTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-category");
      renderMenu(category);
    });
  });

  // 3. Chuyển Tab loại bánh gói (Varieties)
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderVarieties(category);
    });
  });

  // 4. Mở / Đóng giỏ hàng
  const cartDrawer = document.getElementById("cart-drawer");
  const cartBackdrop = document.getElementById("cart-backdrop");
  const cartToggleBtn = document.getElementById("cart-toggle-btn");
  const cartCloseBtn = document.getElementById("cart-close-btn");

  function openCart() {
    if (cartDrawer) cartDrawer.classList.add("open");
    if (cartBackdrop) cartBackdrop.classList.add("open");
  }

  function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove("open");
    if (cartBackdrop) cartBackdrop.classList.remove("open");
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener("click", openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);

  // 5. Xóa toàn bộ giỏ hàng
  const clearBtn = document.getElementById("cart-clear-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      cart = [];
      updateCartUI();
      showToast("Đã xóa tất cả món trong đơn.");
    });
  }

  // 6. Nút Đặt món / Đặt bàn
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        alert("Quý khách vui lòng chọn ít nhất 1 món ăn trong thực đơn trước khi đặt nhé!");
        return;
      }
      const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
      alert(`🎉 Cảm ơn quý khách! Đơn đặt món của bạn với tổng giá trị ${formatVND(total)} đã được ghi nhận. Nhà hàng Bếp Việt sẽ chuẩn bị và phục vụ quý khách chu đáo nhất!`);
      cart = [];
      updateCartUI();
      closeCart();
    });
  }

  // 7. Slider khẩu phần nước chấm
  const slider = document.getElementById("servings-slider");
  if (slider) {
    slider.addEventListener("input", (e) => {
      currentServings = parseInt(e.target.value, 10);
      updateSauceCalculator();
    });
  }

  // 8. Đổi kiểu nước chấm
  const styleBtns = document.querySelectorAll(".style-btn");
  styleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      styleBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSauceStyle = btn.getAttribute("data-style");
      updateSauceCalculator();
    });
  });
});
