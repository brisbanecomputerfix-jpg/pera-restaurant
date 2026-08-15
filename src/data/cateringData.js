export const cateringPackages = [
  {
    id: 'sultan-banquet',
    name: "The Sultan's Imperial Banquet",
    tagline: 'The Full Royal Experience for Grand Celebrations',
    pricePerPerson: 65,
    minGuests: 15,
    includes: [
      '4 Cold Mezes & Wood-Fired Bread',
      '3 Hot Finger Foods',
      '2 Hot Main Courses & Fragrant Pilaf',
      '2 Fresh Anatolian Salads',
      '2 Palace Desserts (Baklava & Trileçe)',
      'Dedicated Buffet Setup & Heating Chafing Dishes'
    ],
    popular: true
  },
  {
    id: 'ottoman-feast',
    name: 'Ottoman Classic Feast',
    tagline: 'Perfect for Corporate, Weddings & Birthdays',
    pricePerPerson: 48,
    minGuests: 10,
    includes: [
      '3 Cold Mezes & Lavash Bread',
      '2 Hot Finger Foods',
      '1 Signature Hot Main (Slow Lamb or Spiced Chicken)',
      '1 Gourmet Salad',
      '1 Dessert Selection',
      'Biodegradable Luxury Cutlery & Platters'
    ],
    popular: false
  },
  {
    id: 'finger-food-cocktail',
    name: 'Anatolia Cocktail & Grazing Party',
    tagline: 'Ideal for Stand-Up Receptions & Cocktail Parties',
    pricePerPerson: 38,
    minGuests: 15,
    includes: [
      'Lavash Roll Bites Assortment',
      'Open Baguette Canapés',
      '4 Hot Finger Foods (Börek, Mucver, Arancini, Skewers)',
      'Mini Dessert Tartlets & Baklava Bites',
      'Gourmet Dip Cups with Crudités'
    ],
    popular: false
  },
  {
    id: 'custom-builder',
    name: 'Custom A-la-Carte Builder',
    tagline: 'Build Your Exact Menu Item by Item',
    pricePerPerson: 0, // dynamic based on selections
    minGuests: 10,
    includes: [
      'Select exactly what you want from all 8 categories below',
      'Real-time cost calculator with live guest scaling',
      'Custom dietary allocations (GF, Vegan, Halal, Nut-Free)'
    ],
    popular: false
  }
];

export const cateringCategories = [
  {
    id: 'cold-meze',
    title: 'Cold Meze Selection',
    desc: 'Served with freshly baked stone breads',
    basePrice: 4.5,
    items: [
      { id: 'cm-hummus', name: 'Classic Silk Hummus', tags: ['GF', 'VG', 'DF'] },
      { id: 'cm-carrot', name: 'Carrot Tarator with Walnuts & Garlic Labneh', tags: ['GF', 'V'] },
      { id: 'cm-capsicum', name: 'Capsicum Chili Muhammara', tags: ['GF', 'VG', 'DF'] },
      { id: 'cm-beetroot', name: 'Purple Velvet Beetroot Labneh', tags: ['GF', 'V'] },
      { id: 'cm-babaganoush', name: 'Smoky Fire-Roasted Baba Ganoush', tags: ['GF', 'V'] },
      { id: 'cm-spinach', name: 'Spinach & Roasted Garlic Labneh', tags: ['GF', 'V'] },
      { id: 'cm-pumpkin', name: 'Roasted Spiced Pumpkin Dip', tags: ['GF', 'VG'] },
      { id: 'cm-olivefeta', name: 'Crushed Kalamata Olive & Persian Feta', tags: ['GF', 'V'] },
      { id: 'cm-fetabasil', name: 'Feta & Garden Basil Pesto', tags: ['GF', 'V'] }
    ]
  },
  {
    id: 'lavash-rolls',
    title: 'Lavash Rolls & Canapés',
    desc: 'Hand-rolled gourmet pinwheels',
    basePrice: 5.0,
    items: [
      { id: 'lr-salmon', name: 'Smoked Salmon, Dill Cream Cheese & Caviar', tags: ['Premium'] },
      { id: 'lr-tuna', name: 'Tuna, Poached Egg, Beetroot & Herbed Aioli', tags: ['Popular'] },
      {
        id: 'lr-spicybeef',
        name: 'Spicy Ottoman Beef, Ripe Tomato & Chili Chutney',
        tags: ['Halal']
      },
      { id: 'lr-eggplant', name: 'Charred Eggplant, Basil Pesto & Mozzarella', tags: ['V'] },
      { id: 'lr-meatlovers', name: 'Meat Lovers Pastrami & Roasted Pepper Roll', tags: ['Halal'] }
    ]
  },
  {
    id: 'baguettes',
    title: 'Open Baguette Canapés',
    desc: 'Artisanal crusty bites with rich toppings',
    basePrice: 5.5,
    items: [
      { id: 'bg-chicken', name: 'Walnut Chicken & Herbed Mayo', tags: ['Popular'] },
      { id: 'bg-feta', name: 'Persian Feta, Kalamata Olive & Tomato Chutney', tags: ['V'] },
      { id: 'bg-veggie', name: 'Anatolia Roasted Garden Veggie & Hummus', tags: ['VG'] },
      { id: 'bg-tuna', name: 'Mediterranean Tuna & Capers Baguette', tags: ['Seafood'] },
      { id: 'bg-turkey', name: 'Smoked Turkey & Cranberry Slaw', tags: ['Halal'] },
      { id: 'bg-anchovy', name: 'Black Sea Anchovy & Carrot Tarator', tags: ['Heritage'] }
    ]
  },
  {
    id: 'hot-finger-food',
    title: 'Hot Finger Foods & Bites',
    desc: 'Crisp and savory warm finger delights',
    basePrice: 6.0,
    items: [
      { id: 'hff-fritter', name: 'Crispy Sweet Corn & Herb Fritters', tags: ['V', 'GF'] },
      { id: 'hff-arancini', name: 'Broccoli, Rice & Parmesan Turkish Arancini', tags: ['V'] },
      { id: 'hff-zucchini', name: 'Mücver Zucchini & Dill Fritters with Garlic Dip', tags: ['V'] },
      { id: 'hff-manti', name: 'Mini Crispy Turkish Beef Manti Cups', tags: ['Halal'] },
      {
        id: 'hff-sigara',
        name: 'Finger Pastry Sigara Börek (Feta & Spinach)',
        tags: ['V', 'Popular']
      },
      { id: 'hff-pachanga', name: 'Mozzarella & Pastrami Paçanga Börek', tags: ['Signature'] },
      { id: 'hff-lamb-burger', name: 'Mini Spiced Lamb Slider with Mint Labneh', tags: ['Halal'] },
      {
        id: 'hff-chicken-burger',
        name: 'Mini Crispy Chicken Slider with Harissa Mayo',
        tags: ['Halal']
      },
      { id: 'hff-falafel', name: 'Trio Green Herb Falafel with Tahini Drizzle', tags: ['VG', 'GF'] }
    ]
  },
  {
    id: 'hot-mains',
    title: 'Hot Main Dishes',
    desc: 'Hearty Ottoman palace mains with saffron rice',
    basePrice: 16.0,
    items: [
      {
        id: 'hm-lamb',
        name: '12-Hour Slow-Cooked Kuzu Tandır Lamb',
        tags: ['Signature', 'GF', 'Halal']
      },
      {
        id: 'hm-kofte',
        name: 'Grilled Sultan Ahmet Köfte Platter with Charred Peppers',
        tags: ['Halal', 'GF-Opt']
      },
      {
        id: 'hm-chicken',
        name: 'Anatolia Spiced Chicken Supreme with Apricots & Almonds',
        tags: ['Halal', 'GF']
      },
      {
        id: 'hm-karniyarik',
        name: 'İmam Bayıldı Fire-Roasted Stuffed Eggplant',
        tags: ['VG', 'GF']
      },
      {
        id: 'hm-shank',
        name: 'Braised Lamb Shank in Tomato Cinnamon Broth',
        tags: ['Halal', 'GF']
      },
      { id: 'hm-parm', name: 'Turkish Style Spiced Chicken Parmigiana', tags: ['Halal'] },
      { id: 'hm-fish', name: 'Pan-Seared Barramundi with Garlic Lemon Herb Butter', tags: ['GF'] }
    ]
  },
  {
    id: 'olive-oil',
    title: 'Olive Oil Dishes (Zeytinyağlı)',
    desc: 'Traditional cold & room temp slow-braised delicacies',
    basePrice: 6.5,
    items: [
      {
        id: 'oo-beans',
        name: 'Yeşil Fasulye (Green Beans in Cold-Pressed Olive Oil)',
        tags: ['VG', 'GF']
      },
      {
        id: 'oo-barbunya',
        name: 'Barbunya Pilaki (Borlotti Beans, Carrots & Parsley)',
        tags: ['VG', 'GF']
      },
      { id: 'oo-midye', name: 'Midye Pilavı (Aromatic Cinnamon Currant Rice)', tags: ['VG', 'GF'] },
      {
        id: 'oo-celery',
        name: 'Celery Root & Carrot Medallions in Orange Olive Oil',
        tags: ['VG', 'GF']
      },
      {
        id: 'oo-dolma',
        name: 'Imperial Stuffed Vine Leaf Dolma with Pine Nuts',
        tags: ['VG', 'GF']
      }
    ]
  },
  {
    id: 'salads',
    title: 'Artisanal Fresh Salads',
    desc: 'Crisp seasonal produce with Mediterranean dressings',
    basePrice: 5.5,
    items: [
      {
        id: 'sl-chickpea',
        name: 'Spiced Chickpea, Cucumber & Persian Feta Salad',
        tags: ['V', 'GF']
      },
      { id: 'sl-beetroot', name: 'Roasted Beetroot & Pumpkin Pearl Couscous', tags: ['VG'] },
      { id: 'sl-kisir', name: 'Anatolia Style Kısır Bulgur Salad with Pomegranate', tags: ['VG'] },
      {
        id: 'sl-coban',
        name: "Çoban Shepherd's Salad with Sumac & Lemon Dressing",
        tags: ['VG', 'GF']
      },
      { id: 'sl-quinoa', name: 'Golden Quinoa, Dried Figs & Pistachio Salad', tags: ['VG', 'GF'] }
    ]
  },
  {
    id: 'desserts',
    title: 'Palace Sweets & Desserts',
    desc: 'Handcrafted authentic Turkish dessert bites',
    basePrice: 5.5,
    items: [
      { id: 'ds-baklava', name: 'Pistachio Imperial Baklava Squares', tags: ['V', 'Signature'] },
      { id: 'ds-trilece', name: 'Caramel Trileçe Three-Milk Sponge Cake', tags: ['V'] },
      { id: 'ds-revani', name: 'Citrus Semolina Revani Cake with Pistachios', tags: ['V'] },
      {
        id: 'ds-yoghurt',
        name: 'Strained Yoghurt Delight with Honey & Walnuts',
        tags: ['V', 'GF']
      },
      { id: 'ds-brownie', name: 'Belgian Chocolate Walnut Fudge Brownie Bites', tags: ['V'] }
    ]
  },
  {
    id: 'grazing-boxes',
    title: 'Grazing Boxes & Grand Platters',
    desc: 'Stunning presentation boards for 10-20 guests',
    basePrice: 95.0, // per board
    isPlatter: true,
    items: [
      {
        id: 'gb-vegan',
        name: 'Grand Vegan Anatolian Grazing Box (Serves 10-15)',
        tags: ['VG', 'Serves 15']
      },
      {
        id: 'gb-cheese',
        name: 'Artisanal Mediterranean Cheese & Charcuterie Platter',
        tags: ['Serves 15']
      },
      {
        id: 'gb-fondue',
        name: 'Sweet Baklava & Warm Chocolate Fondue Board',
        tags: ['Sweet', 'Serves 15']
      }
    ]
  }
];
