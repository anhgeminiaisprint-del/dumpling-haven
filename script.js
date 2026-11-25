// Dumpling database with categories, origins, and descriptions
const dumplingsData = [
  {
    name: "Jiaozi",
    nativeName: "饺子",
    origin: "China",
    category: "east-asia",
    emoji: "🥟",
    desc: "The archetype of all dumplings. Crescent-folded wheat dough with seasoned minced pork, ginger, chives, and cabbage.",
    tags: ["Boiled", "Steamed", "Pan-Fried", "New Year Tradition"]
  },
  {
    name: "Xiao Long Bao",
    nativeName: "小笼包",
    origin: "Shanghai, China",
    category: "east-asia",
    emoji: "🥢",
    desc: "Delicate pleated soup buns holding savory pork and steaming, rich broth created by melted gelatinized pork broth.",
    tags: ["Steamed", "Soup Dumpling", "Ginger Vinegar Dip"]
  },
  {
    name: "Gyoza",
    nativeName: "餃子",
    origin: "Japan",
    category: "east-asia",
    emoji: "🥟",
    desc: "Thin-skinned dumplings known for their crispy pan-fried bottoms ('hanetsuki' lace skirts) and minced garlic-garlic chive pork.",
    tags: ["Pan-Fried", "Thin Skin", "Crispy Skirt"]
  },
  {
    name: "Pierogi",
    nativeName: "Pierogi",
    origin: "Poland",
    category: "europe",
    emoji: "🥟",
    desc: "Half-moon stuffed dumplings filled with mashed potatoes, farmers cheese, sauerkraut, or sweet summer berries. Finished with caramelized onions.",
    tags: ["Boiled then Sautéed", "Sour Cream", "Butter & Onion"]
  },
  {
    name: "Momo",
    nativeName: "मम:",
    origin: "Tibet & Nepal",
    category: "central-asia",
    emoji: "🥟",
    desc: "Plump, pleated parcels filled with spiced yak, chicken, or vegetables flavored with cumin, coriander, and served with spicy tomato achar.",
    tags: ["Steamed", "Spiced Achar", "Street Food Star"]
  },
  {
    name: "Mandu",
    nativeName: "만두",
    origin: "Korea",
    category: "east-asia",
    emoji: "🥟",
    desc: "Generously filled with minced beef or pork, crushed tofu, glass noodles, and pungent aged kimchi for an addictive kick.",
    tags: ["Steamed or Fried", "Kimchi", "Tofu & Pork"]
  },
  {
    name: "Pelmeni",
    nativeName: "Пельмени",
    origin: "Russia / Siberia",
    category: "europe",
    emoji: "🥟",
    desc: "Small button-shaped dumplings filled with minced beef, pork, or lamb, gently boiled and served with plenty of butter, dill, and smetana.",
    tags: ["Boiled", "Butter & Dill", "Freezer Staple"]
  },
  {
    name: "Manti",
    nativeName: "Mantı",
    origin: "Turkey & Central Asia",
    category: "central-asia",
    emoji: "🥟",
    desc: "Tiny handmade pasta pockets filled with spiced minced lamb, bathed in rich garlicky yogurt and drizzled with warm paprika-infused butter.",
    tags: ["Boiled", "Garlic Yogurt", "Spiced Butter"]
  }
];

// Dipping Sauce Recipes & Formulas (Base values for 1 person = ~12 dumplings)
const sauceFormulas = {
  classic: {
    title: "Classic Tangy Dipping Sauce",
    ingredients: [
      { name: "Light Soy Sauce", unit: "tbsp", base: 1.5 },
      { name: "Chinkiang Black Vinegar", unit: "tbsp", base: 1 },
      { name: "Chili Oil / Crisp", unit: "tsp", base: 1 },
      { name: "Toasted Sesame Oil", unit: "tsp", base: 0.5 },
      { name: "Minced Garlic", unit: "clove", base: 0.5 },
      { name: "Chopped Scallions", unit: "tbsp", base: 1 }
    ]
  },
  spicy: {
    title: "Sichuan Fiery Red Oil Dip",
    ingredients: [
      { name: "Sichuan Chili Oil with Crisp", unit: "tbsp", base: 2 },
      { name: "Sweet Soy Sauce", unit: "tbsp", base: 1 },
      { name: "Black Vinegar", unit: "tsp", base: 1 },
      { name: "Crushed Roasted Peanuts", unit: "tbsp", base: 1 },
      { name: "Ground Sichuan Peppercorn", unit: "pinch", base: 1 },
      { name: "Fresh Garlic Paste", unit: "clove", base: 1 }
    ]
  },
  garlic: {
    title: "Garlic Ginger Aroma Boost",
    ingredients: [
      { name: "Finely Grated Ginger", unit: "tsp", base: 1.5 },
      { name: "Grated Fresh Garlic", unit: "clove", base: 1 },
      { name: "Soy Sauce", unit: "tbsp", base: 1.5 },
      { name: "Rice Vinegar", unit: "tbsp", base: 1 },
      { name: "Pure Sesame Oil", unit: "tsp", base: 1 },
      { name: "Toasted White Sesame Seeds", unit: "tsp", base: 1 }
    ]
  }
};

let currentSauceStyle = "classic";
let currentServings = 2;

// Render Varieties based on active filter
function renderVarieties(filter = "all") {
  const container = document.getElementById("varieties-container");
  if (!container) return;

  const filtered = filter === "all" 
    ? dumplingsData 
    : dumplingsData.filter(d => d.category === filter);

  container.innerHTML = filtered.map(item => `
    <article class="variety-card">
      <div class="variety-header">
        <span class="variety-origin">${item.origin}</span>
        <span class="variety-emoji">${item.emoji}</span>
      </div>
      <div class="variety-body">
        <h3 class="variety-title">${item.name} <small style="font-size: 0.85em; font-weight: normal; color: #888;">${item.nativeName}</small></h3>
        <p class="variety-desc">${item.desc}</p>
        <div class="variety-tags">
          ${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

// Update the Sauce Calculator based on slider and style
function updateSauceCalculator() {
  const formula = sauceFormulas[currentSauceStyle];
  const listEl = document.getElementById("ingredient-list");
  const yieldEl = document.getElementById("recipe-yield");
  const servingsDisplay = document.getElementById("servings-display");

  if (!listEl || !formula) return;

  servingsDisplay.textContent = `${currentServings} ${currentServings === 1 ? "person" : "people"}`;
  yieldEl.textContent = `Serves: ${currentServings} (approx. ${currentServings * 12} dumplings)`;

  listEl.innerHTML = formula.ingredients.map(ing => {
    let totalQty = ing.base * currentServings;
    let formattedQty = (totalQty % 1 === 0) ? totalQty : totalQty.toFixed(1);

    return `
      <li class="ingredient-item">
        <span class="ingredient-name"><span>🥄</span> ${ing.name}</span>
        <span class="ingredient-qty">${formattedQty} ${ing.unit}</span>
      </li>
    `;
  }).join("");
}

// Initialize Interactive Events
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Render
  renderVarieties("all");
  updateSauceCalculator();

  // 2. Category Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      renderVarieties(category);
    });
  });

  // 3. Servings Slider
  const slider = document.getElementById("servings-slider");
  if (slider) {
    slider.addEventListener("input", (e) => {
      currentServings = parseInt(e.target.value, 10);
      updateSauceCalculator();
    });
  }

  // 4. Sauce Style Buttons
  const styleBtns = document.querySelectorAll(".style-btn");
  styleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      styleBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSauceStyle = btn.getAttribute("data-style");
      updateSauceCalculator();
    });
  });

  // 5. Accordion FAQ
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // Close all
      faqItems.forEach(i => i.classList.remove("open"));
      // Toggle current
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
});
