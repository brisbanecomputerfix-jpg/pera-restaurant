export const menuCategories = [
  { id: 'all', name: 'Full Menu', icon: 'UtensilsCrossed' },
  { id: 'mezze', name: 'Mezze (Cold Dips)', icon: 'Sparkles' },
  { id: 'cold-appetisers', name: 'Cold Appetisers', icon: 'Leaf' },
  { id: 'hot-appetisers', name: 'Hot Appetisers', icon: 'Flame' },
  { id: 'mains', name: 'Main Course', icon: 'Crown' },
  { id: 'banquet', name: "Locksmith's Table", icon: 'Wine' },
  { id: 'vegetarian', name: 'Vegetarian & Vegan', icon: 'HeartHandshake' },
  { id: 'desserts', name: 'Palace Desserts', icon: 'Sparkles' },
  { id: 'drinks', name: 'Beverages & Raki', icon: 'Coffee' }
];

export const menuItems = [
  // --- MEZZE (COLD DIPS) ---
  {
    id: 'mezze-platter-2',
    category: 'mezze',
    name: 'Mezze Mixed Platter for 2 people',
    century: 'Ottoman Sharing Tradition',
    price: 39,
    dietary: ['v', 'vg', 'gf-opt'],
    description: 'Generous platter featuring 4 authentic house-made dips. Served with 1 fresh bread.',
    popular: true,
    tags: ['Signature Platter', 'Sharing for 2']
  },
  {
    id: 'mezze-platter-4',
    category: 'mezze',
    name: 'Mezze Mixed Platter for 4 people',
    century: 'Grand Feast Tradition',
    price: 49,
    dietary: ['v', 'vg', 'gf-opt'],
    description: 'Grand assorted meze platter featuring a rich selection of authentic dips. Served with 2 fresh breads.',
    popular: true,
    tags: ['Grand Banquet', 'Sharing for 4']
  },
  {
    id: 'hummus',
    category: 'mezze',
    name: 'Hummus',
    century: '14th Century Heritage',
    price: 18,
    dietary: ['gf', 'df', 'v'],
    description: 'Mashed chickpeas, blended with sesame paste (tahini), garlic, lemon juice, roasted nuts, and paprika. Served with bread.',
    popular: true,
    tags: ['Gluten-Free', 'Dairy-Free', 'Vegan']
  },
  {
    id: 'baba-ganoush',
    category: 'mezze',
    name: 'Baba Ganoush',
    century: 'Levant Heritage',
    price: 18,
    dietary: ['gf', 'vg'],
    description: 'Wood fire cooked eggplant, mashed with black tahini, garlic, strained yoghurt, and blue poppy seeds. Served with bread.',
    popular: true,
    tags: ['Charcoal Smoked', 'Gluten-Free', 'Vegetarian']
  },
  {
    id: 'purple-velvet',
    category: 'mezze',
    name: 'Purple Velvet',
    century: 'Anatolian Specialty',
    price: 18,
    dietary: ['gf', 'vg'],
    description: 'Baked beetroot, mixed with garlic, sesame paste, olive oil, grand bazaar spices, and lemon strained yoghurt, topped with mix seeds. Served with bread.',
    popular: true,
    tags: ['House Signature', 'Gluten-Free', 'Vegetarian']
  },
  {
    id: 'haydari',
    category: 'mezze',
    name: 'Haydari {Mint Mezze}',
    century: 'Traditional Turkish',
    price: 18,
    dietary: ['gf', 'vg'],
    description: 'Strained yoghurt with Turkish mint, garlic and oil, topped with currants and sultanas. Served with bread.',
    popular: false,
    tags: ['Gluten-Free', 'Vegetarian']
  },
  {
    id: 'walnut-capsicum',
    category: 'mezze',
    name: 'Walnut Capsicum',
    century: 'Aleppo & Anatolian Heritage',
    price: 18,
    dietary: ['gf', 'df', 'vg'],
    description: 'Roasted walnuts and capsicum with hot chili, olive oil with yoghurt and mixed nuts. Served with bread.',
    popular: true,
    tags: ['Gluten-Free', 'Dairy-Free Option', 'Vegetarian']
  },
  {
    id: 'fresh-bread',
    category: 'mezze',
    name: 'Extra Freshly Baked Bread',
    century: 'Wood-Fired Daily',
    price: 6,
    dietary: ['v', 'vg'],
    description: 'Warm, fluffy Turkish bread freshly baked in-house.',
    popular: false,
    tags: ['Fresh Daily', 'Vegetarian']
  },

  // --- COLD APPETISERS ---
  {
    id: 'vegan-kofte',
    category: 'cold-appetisers',
    name: 'Vegan Köfte {Street Food of Istanbul}',
    century: 'Historic Street Heritage',
    price: 20,
    dietary: ['v', 'vg', 'df'],
    description: 'Made with bulgur (cracked wheat) mixed with onion, garlic, capsicum, and hot chilli. Served with wrapped flat bread and sour cherry sauce.',
    popular: true,
    tags: ['Street Food Classic', 'Vegan', 'Dairy-Free']
  },
  {
    id: 'girit-ezme',
    category: 'cold-appetisers',
    name: 'Girit Ezme Peynir {Cretan Style Nuts & Mashed Cheese}',
    century: 'Cretan-Ottoman Tradition',
    price: 22,
    dietary: ['vg', 'gf-opt'],
    description: 'Mashed cheese, wild herbs, roasted nuts and garlic, served with cold pressed olive oil and hot Turkish bread.',
    popular: true,
    tags: ['Artisanal Cheese', 'Vegetarian', 'GF Option']
  },
  {
    id: 'fried-seasonal-veg',
    category: 'cold-appetisers',
    name: 'Fried Seasonal Vegetables',
    century: 'Aegean Summer Recipe',
    price: 22,
    dietary: ['vg', 'gf-opt'],
    description: 'Golden fried seasonal vegetables served with flamed tomato, garlic yoghurt, and fresh bread.',
    popular: false,
    tags: ['Vegetarian', 'GF Option']
  },
  {
    id: 'olive-salad',
    category: 'cold-appetisers',
    name: 'Olive Salad',
    century: 'Mediterranean Coast',
    price: 22,
    dietary: ['vg'],
    description: 'Curated olives with roasted walnuts, sun-dried tomatoes, feta cheese, fresh herbs, garlic, and citrus dressing. Served with bread.',
    popular: false,
    tags: ['Vegetarian', 'Fresh Herbs']
  },

  // --- HOT APPETISERS ---
  {
    id: 'finger-borek',
    category: 'hot-appetisers',
    name: 'Finger Börek',
    century: 'Palace Classic',
    price: 22,
    dietary: ['vg'],
    description: 'Pan-fried homemade pastry filled with cheese and parsley, served with house sour cherry sauce.',
    popular: true,
    tags: ['Crispy Pastry', 'Vegetarian']
  },
  {
    id: 'pachanga-borek',
    category: 'hot-appetisers',
    name: 'Paçanga Börek {15th Century}',
    century: '15th Century Imperial Palace',
    price: 24,
    dietary: [],
    description: 'Homemade pastry filled with melted mozzarella, parsley, and air-cured Turkish pastrami (pastırma), served with fragrant basil pesto.',
    popular: true,
    tags: ['Imperial Specialty', 'Pastırma']
  },
  {
    id: 'grilled-halloumi',
    category: 'hot-appetisers',
    name: 'Grilled Halloumi',
    century: 'Mediterranean Tradition',
    price: 24,
    dietary: ['gf', 'vg'],
    description: 'Golden pan-seared halloumi served with artisanal sweet fruit paste.',
    popular: false,
    tags: ['Gluten-Free', 'Vegetarian']
  },
  {
    id: 'meat-dolma',
    category: 'hot-appetisers',
    name: 'Meat Dolma',
    century: '16th Century Ottoman Recipe',
    price: 24,
    dietary: ['gf'],
    description: 'Seasonal vegetables stuffed with rice, tender lamb mince, fresh herbs, onion, and garlic, served with creamy yoghurt.',
    popular: true,
    tags: ['Traditional Lamb', 'Gluten-Free']
  },
  {
    id: 'edirne-liver',
    category: 'hot-appetisers',
    name: 'Edirne Style Liver',
    century: 'Thracian Heritage',
    price: 28,
    dietary: ['gf-opt'],
    description: 'Thinly sliced beef liver pan fried with dried chili and served with onion yogurt and soft lavash bread.',
    popular: false,
    tags: ['Authentic Delicacy', 'GF Option']
  },
  {
    id: 'manti',
    category: 'hot-appetisers',
    name: 'Mantı',
    century: '13th Century Silk Road Heritage',
    price: 22,
    dietary: [],
    description: 'Extraordinary dish from Turkey: tiny handcrafted ravioli stuffed with a mixture of lamb mince, herbs, onions, and garlic. Topped with burnt butter, paprika, and garlic yogurt.',
    popular: true,
    tags: ['Customer Favorite', 'Handmade Ravioli']
  },
  {
    id: 'prawns-guvec',
    category: 'hot-appetisers',
    name: 'Prawns Güveç (Clay Pot)',
    century: 'Aegean Coastal Tradition',
    price: 28,
    dietary: ['gf-opt'],
    description: 'Baked tiger prawns with capsicum and eggplant, sauteed in a savory paste with butter, garlic, and cream. Served with Turkish bread.',
    popular: true,
    tags: ['Sizzling Clay Pot', 'GF Option']
  },

  // --- MAIN COURSE ---
  {
    id: 'sultan-ahmet-kofte',
    category: 'mains',
    name: 'Sultan Ahmet Köfte',
    century: 'Historical Istanbul Recipe',
    price: 34,
    dietary: [],
    description: 'Historical Istanbul spiced meatball, grilled over charcoal and served with red cabbage bean salad, layered on a mashed eggplant polenta creamy base.',
    popular: true,
    tags: ['Charcoal Grilled', 'Historic Recipe']
  },
  {
    id: 'ottoman-bundle',
    category: 'mains',
    name: 'Ottoman Bundle {Kuzu Tandır 13th Century}',
    century: '13th Century Royal Palace',
    price: 42,
    dietary: ['df'],
    description: '12-hour slow-cooked tender lamb, served with Palace rice (infused with dried fruit and toasted pine nuts), Grand Bazaar spices, and apricot-grape compote.',
    popular: true,
    tags: ['Signature Palace Dish', 'Best Seller', 'Dairy-Free']
  },
  {
    id: 'chicken-mahmudiyye',
    category: 'mains',
    name: 'Chicken Mahmûdiyye {16th Century}',
    century: '16th Century Süleyman the Magnificent',
    price: 36,
    dietary: ['df', 'gf-opt'],
    description: 'Tender chicken braised with sultanas, nuts, and Grand Bazaar spices. Served with aromatic saffron rice.',
    popular: true,
    tags: ['Imperial Court Recipe', 'Dairy-Free', 'GF Option']
  },
  {
    id: 'peras-angel',
    category: 'mains',
    name: "Pera's Angel",
    century: 'Chef Signature Specialty',
    price: 38,
    dietary: ['gf'],
    description: 'Succulent chicken tenderloin flavoured with herbs, rested in olive oil covered with sunflower seeds, layered on a bed of creamy spinach, pumpkin, and caramelized onion with cream.',
    popular: true,
    tags: ["Chef's Creation", 'Gluten-Free']
  },
  {
    id: 'summer-breeze',
    category: 'mains',
    name: 'Summer Breeze',
    century: 'Aegean Seafood Heritage',
    price: 38,
    dietary: ['gf'],
    description: 'Pan-fried fresh seasonal fish, served with mashed creamy cheese cauliflower.',
    popular: false,
    tags: ['Catch of the Season', 'Gluten-Free']
  },
  {
    id: 'ali-nazik',
    category: 'mains',
    name: 'Ali Nazik Kebabı',
    century: 'Gaziantep Culinary Heritage',
    price: 38,
    dietary: ['gf'],
    description: 'Chargrilled ground lamb skewers served over velvety smoked eggplant puree with garlic yoghurt, topped with rich foaming butter sauce.',
    popular: true,
    tags: ['Gaziantep Legend', 'Gluten-Free']
  },
  {
    id: 'mutancana',
    category: 'mains',
    name: 'Mutancana Palace Dish',
    century: '15th Century Fatih Sultan Mehmed',
    price: 42,
    dietary: [],
    description: 'Slow braised beef ribs served on carrot tarator and couscous base with rich spiced red plum sauce.',
    popular: true,
    tags: ['Imperial Masterpiece', 'Slow Braised Ribs']
  },
  {
    id: 'seasonal-salad',
    category: 'mains',
    name: 'Seasonal Salad',
    century: 'Garden Fresh Daily',
    price: 18,
    dietary: ['gf', 'v', 'vg'],
    description: 'Fresh crisp seasonal greens, garden vegetables, sumac, and pomegranate olive oil dressing.',
    popular: false,
    tags: ['Gluten-Free', 'Vegan']
  },

  // --- LOCKSMITH'S TABLE (RAKI ÇİLİNGİR SOFRASI) ---
  {
    id: 'locksmiths-feast',
    category: 'banquet',
    name: 'Pera Meyhane Fixed Menu {Çilingir Sofrası}',
    century: 'Centuries-Old Meyhane Ritual',
    price: 89,
    dietary: ['Per Person', 'First Drink Included'],
    description:
      'The authentic Locksmith’s Feast designed for sharing with Rakı or Wine. Includes Cold Appetisers (Chili Meze, Haydari, Girit Ezme, Çiğ Köfte & Fried Vegetables), Hot Appetisers (Paçanga Börek, Dolma, Liver or Prawns Güveç), and Main Course (Signature Mixed Charcoal Grill). First drink included.',
    popular: true,
    tags: ['Complete Feast', 'First Drink Included', 'Locksmith Table']
  },

  // --- VEGETARIAN & VEGAN ---
  {
    id: 'karniyarik-veg',
    category: 'vegetarian',
    name: 'Karnıyarık {Turkish Fire-Roasted Stuffed Eggplant}',
    century: 'Classic Ottoman Vegetarian',
    price: 29,
    dietary: ['v', 'vg', 'df'],
    description: 'Fire-roasted eggplant stuffed with plant-based mince, capsicum, onion, garlic, tomato, and fresh herbs. Served with rice.',
    popular: true,
    tags: ['100% Plant-Based', 'Vegan', 'Dairy-Free']
  },
  {
    id: 'sultan-favourite-veg',
    category: 'vegetarian',
    name: "Sultan Favourite {Mini Plant-Based Meatballs}",
    century: 'Royal Palace Vegetarian',
    price: 32,
    dietary: ['vg', 'v-opt'],
    description: 'Creamy fire-roasted eggplant puree topped with tender plant-based meatballs and finished with warm spiced tomato sauce.',
    popular: true,
    tags: ['Plant-Based', 'Vegetarian']
  },
  {
    id: 'veg-moussaka',
    category: 'vegetarian',
    name: 'Vegetarian Ottoman Moussaka',
    century: 'Aegean Heritage Recipe',
    price: 32,
    dietary: ['vg'],
    description: 'Layered eggplant, capsicum, onion, and plant-based mince in rich tomato sauce, topped with creamy béchamel, oven-baked to perfection and served with rice.',
    popular: true,
    tags: ['Baked to Order', 'Vegetarian']
  },
  {
    id: 'vegan-kofte-veg-tab',
    category: 'vegetarian',
    name: 'Vegan Köfte {Street Food of Istanbul}',
    century: 'Historic Street Heritage',
    price: 20,
    dietary: ['v', 'vg', 'df'],
    description: 'Handcrafted cracked wheat bulgur with onion, garlic, capsicum, and hot chilli. Served with wrapped flat bread and sour cherry sauce.',
    popular: false,
    tags: ['Vegan', 'Dairy-Free']
  },
  {
    id: 'fried-veg-tab',
    category: 'vegetarian',
    name: 'Fried Seasonal Vegetables',
    century: 'Aegean Summer Recipe',
    price: 22,
    dietary: ['vg', 'gf-opt'],
    description: 'Golden fried seasonal vegetables served with flamed tomato, garlic yoghurt, and bread.',
    popular: false,
    tags: ['Vegetarian', 'GF Option']
  },

  // --- PALACE DESSERTS ---
  {
    id: 'holy-mud',
    category: 'desserts',
    name: 'Holy Mud Pistachio',
    century: 'Chef Signature Dessert',
    price: 18,
    dietary: ['vg'],
    description: 'Finely shredded phyllo pastry filled with premium Antep pistachio, baked with naturally sweet syrup. Served with rich vanilla ice cream.',
    popular: true,
    tags: ['Antep Pistachio', 'Chef Signature']
  },
  {
    id: 'kunefe',
    category: 'desserts',
    name: 'Künefe',
    century: 'Hatay Heritage Recipe',
    price: 20,
    dietary: ['vg'],
    description: 'A traditional Turkish dessert made with shredded phyllo pastry, melting sweet stretch cheese, and aromatic syrup, garnished with vibrant crushed pistachios.',
    popular: true,
    tags: ['Baked Hot to Order', 'Turkish Classic']
  },
  {
    id: 'candied-pumpkin',
    category: 'desserts',
    name: 'Candied Pumpkin & Ice Cream {Kabak Tatlısı}',
    century: 'Ottoman Court Confection',
    price: 15,
    dietary: ['gf', 'v-opt', 'vg'],
    description: 'Caramelized candied spiced pumpkin glazed in raw syrup, served with creamy ice cream.',
    popular: false,
    tags: ['Gluten-Free', 'Vegan Option']
  },
  {
    id: 'chefs-special-dessert',
    category: 'desserts',
    name: "Chef's Special Dessert",
    century: 'Daily Palace Surprise',
    price: 15,
    dietary: ['vg'],
    description: "Daily seasonal dessert creation handcrafted by our executive pastry chef. Ask our team for today's special.",
    popular: true,
    tags: ['Daily Special', 'Ask Our Team']
  },

  // --- BEVERAGES & RAKI ---
  {
    id: 'turkish-coffee',
    category: 'drinks',
    name: 'Traditional Turkish Sand-Brewed Coffee',
    century: 'UNESCO Intangible Heritage',
    price: 7,
    dietary: ['v', 'vg', 'gf'],
    description: 'Slowly brewed in copper cezve over hot sand, served with handcrafted rose Turkish delight and sparkling water.',
    popular: true,
    tags: ['Sand Brewed', 'Authentic Ritual']
  },
  {
    id: 'turkish-tea',
    category: 'drinks',
    name: 'Rize Black Sea Tea (Çay)',
    century: 'Daily Tradition',
    price: 5,
    dietary: ['v', 'vg', 'gf'],
    description: 'Double-pot steeped organic black tea from the misty mountains of Rize, served in a traditional tulip crystal glass.',
    popular: false,
    tags: ['Steeped Fresh']
  },
  {
    id: 'yeniraki',
    category: 'drinks',
    name: "Yeni Rakı / Lion's Milk",
    century: 'Spirit of Anatolia',
    price: 14,
    dietary: ['vg', 'gf'],
    description: "Traditional Turkish anise-flavored spirit distilled from fresh grapes. Turns into cloudy 'Lion's Milk' when mixed with chilled water.",
    popular: true,
    tags: ['National Spirit']
  },
  {
    id: 'pera-cocktails',
    category: 'drinks',
    name: 'Ottoman Palace Signature Cocktails',
    century: 'Mixology Collection',
    price: 22,
    dietary: ['vg'],
    description: 'Handcrafted cocktails featuring Turkish pomegranate, rosewater, mastic liqueur, Aegean fig infusions, and premium spirits.',
    popular: true,
    tags: ['House Cocktails']
  }
];
