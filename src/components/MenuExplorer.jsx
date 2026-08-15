import React, { useState, useMemo } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import {
  UtensilsCrossed,
  Sparkles,
  Flame,
  Crown,
  Wine,
  Leaf,
  HeartHandshake,
  Coffee,
  Search,
  Filter,
  Check
} from 'lucide-react';

const iconMap = {
  UtensilsCrossed,
  Sparkles,
  Flame,
  Crown,
  Wine,
  Leaf,
  HeartHandshake,
  Coffee
};

export default function MenuExplorer({ initialCategory = 'all', openBookingModal }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedDietary, setSelectedDietary] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const dietaryOptions = [
    { id: 'all', label: 'All Diets' },
    { id: 'gf', label: 'Gluten-Free (GF)' },
    { id: 'v', label: 'Vegan (V)' },
    { id: 'vg', label: 'Vegetarian (VG)' },
    { id: 'df', label: 'Dairy-Free (DF)' }
  ];

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category match
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;

      // Dietary match
      const matchDietary =
        selectedDietary === 'all' ||
        item.dietary.some((d) => d.toLowerCase().includes(selectedDietary.toLowerCase()));

      // Search match
      const matchSearch =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.century.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchDietary && matchSearch;
    });
  }, [activeCategory, selectedDietary, searchQuery]);

  return (
    <section id="menu" style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Crown size={14} />
            <span>Imperial Ottoman Menu</span>
          </div>
          <h2 className="section-title">Centuries of Royal Dining</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            From 13th-century Seljuk lamb braises to 16th-century Topkapı Palace feasts. Prepared
            fresh daily with Australian premium produce and hand-selected Anatolian spices.
          </p>
        </div>

        {/* Search & Quick Controls Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem'
          }}
        >
          {/* Search Input */}
          <div style={{ position: 'relative', flex: '1', minWidth: '260px', maxWidth: '420px' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }}
            />
            <input
              type="text"
              placeholder="Search dishes (e.g. Kuzu Tandır, Künefe, Hummus)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.75rem', borderRadius: 'var(--radius-full)' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem'
                }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Dietary Filter Pills */}
          <div className="dietary-filters" style={{ margin: 0 }}>
            {dietaryOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedDietary(opt.id)}
                className={`dietary-chip ${selectedDietary === opt.id ? 'active' : ''}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="menu-nav-tabs">
          {menuCategories.map((cat) => {
            const IconComp = iconMap[cat.icon] || Sparkles;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`menu-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <IconComp size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <article key={item.id} className="menu-card">
                <div>
                  <div className="menu-card-header">
                    <div>
                      <h3 className="menu-dish-title">{item.name}</h3>
                      <div className="menu-dish-century">{item.century}</div>
                    </div>
                    <div className="menu-dish-price">
                      {typeof item.price === 'number' ? `$${item.price}` : item.price}
                    </div>
                  </div>

                  <p className="menu-dish-desc">{item.description}</p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid rgba(255,255,255,0.06)'
                  }}
                >
                  <div>
                    {item.dietary.map((d, i) => (
                      <span
                        key={i}
                        className={`dietary-badge ${d.toLowerCase().replace(/[^a-z]/g, '')}`}
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  {item.tags && item.tags.length > 0 && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--gold-primary)',
                        fontWeight: '600'
                      }}
                    >
                      {item.tags[0]}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--border-subtle)'
            }}
          >
            <UtensilsCrossed size={40} color="var(--gold-dark)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', color: '#FFF', marginBottom: '0.5rem' }}>
              No dishes found
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Try clearing your dietary filter or search keyword.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedDietary('all');
                setSearchQuery('');
              }}
              className="btn-secondary"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Locksmith's Feast / Raki Quote Banner */}
        <div
          className="gold-card"
          style={{
            marginTop: '4rem',
            padding: '2.5rem',
            textAlign: 'center',
            border: '1px solid var(--border-gold-bright)'
          }}
        >
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div
              style={{
                fontStyle: 'italic',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                color: 'var(--gold-light)',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}
            >
              “Wine is for those that live, but Rakı is for those whose stories are only half told.
              Friends, let us gather around a Çilingir Table!”
            </div>
            <div
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                marginBottom: '1.75rem'
              }}
            >
              Experience the ancient Istanbul Meyhane banquet ritual with cold mezes, ironbark
              charcoal meats, and traditional Yeni Rakı.
            </div>
            <button onClick={openBookingModal} className="btn-primary">
              <Wine size={17} />
              <span>Reserve a Çilingir Banquet Table</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
