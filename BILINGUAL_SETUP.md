# PSY-DIVER Website - Bilingual Setup Guide

## Current Status

✅ **Completed:**
- i18next and react-i18next libraries installed
- Translation configuration created (`src/i18n/config.js`)
- Complete German translations file (`src/i18n/translations.js`)
- Language switcher component created
- Header navigation is now bilingual (DE/EN)
- Default language set to German (DE)

## Language Switcher

The language switcher is located in the top navigation menu. Users can click **DE** or **EN** to switch between German and English.

## Translation Structure

All translations are stored in `src/i18n/translations.js` with the following structure:

```javascript
{
  en: {
    translation: {
      nav: { home: "Home", about: "About", ... },
      home: { title: "PSY-DIVER", ... },
      footer: { ... },
      // etc.
    }
  },
  de: {
    translation: {
      nav: { home: "Startseite", about: "Über uns", ... },
      home: { title: "PSY-DIVER", ... },
      footer: { ... },
      // etc.
    }
  }
}
```

## How to Make Pages Bilingual

To make each page bilingual, you need to:

### 1. Import useTranslation hook

```javascript
import { useTranslation } from 'react-i18next';
```

### 2. Use the hook in your component

```javascript
function YourPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
    </div>
  );
}
```

### 3. Replace hardcoded text with translation keys

**Before:**
```javascript
<h1>PSY-DIVER</h1>
<p>Gender and Diversity-Related Factors...</p>
```

**After:**
```javascript
<h1>{t('home.title')}</h1>
<p>{t('home.subtitle')}</p>
```

## Example: Making Home.jsx Bilingual

Here's how to update the Home page:

```javascript
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{t('home.title')}</h1>
              <p className="hero-subtitle">{t('home.subtitle')}</p>
              <p className="hero-description">{t('home.description')}</p>
              <div className="hero-buttons">
                <Link to="/about" className="btn btn-primary">
                  {t('common.learnMore')}
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  {t('common.getInTouch')}
                </Link>
              </div>
            </div>
            {/* ... */}
          </div>
        </div>
      </section>
      {/* More sections... */}
    </div>
  );
}
```

## Pages to Update

To complete the bilingual implementation, update these files:

1. ✅ `src/components/Header.jsx` - **DONE**
2. ⏳ `src/components/Footer.jsx`
3. ⏳ `src/pages/Home.jsx`
4. ⏳ `src/pages/About.jsx`
5. ⏳ `src/pages/Partners.jsx`
6. ⏳ `src/pages/News.jsx`
7. ⏳ `src/pages/Contact.jsx`

## Footer Example

```javascript
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('home.title')}</h3>
            <p>{t('footer.description')}</p>
            <p className="funding-info">
              {t('footer.fundedBy')}<br />
              {t('footer.fundingId')}
            </p>
          </div>
          {/* More sections with t() calls... */}
        </div>
      </div>
    </footer>
  );
}
```

## All Available Translation Keys

The complete translation keys are available in `src/i18n/translations.js`. Main categories:

- `nav.*` - Navigation menu items
- `common.*` - Common phrases (Learn More, Contact Us, etc.)
- `home.*` - Home page content
- `about.*` - About page content
- `partners.*` - Partners page content
- `news.*` - News page content
- `contact.*` - Contact page content
- `footer.*` - Footer content

## Testing

1. Start the development server: `npm run dev`
2. Open http://localhost:5173/
3. Click the **DE/EN** switcher in the top navigation
4. Verify that the navigation menu changes language
5. After updating pages, verify all content switches correctly

## Tips

- Always test both languages after making changes
- Use descriptive translation keys (e.g., `home.highlights.goals.title`)
- Keep the structure consistent between `en` and `de` translations
- For dynamic content (like dates), use JavaScript formatting libraries that support localization

## Adding New Translations

To add new translations:

1. Open `src/i18n/translations.js`
2. Add the key to both `en.translation` and `de.translation`
3. Use the key in your component with `t('yourKey')`

Example:
```javascript
// In translations.js
en: {
  translation: {
    myNewSection: {
      title: "My New Title"
    }
  }
},
de: {
  translation: {
    myNewSection: {
      title: "Mein neuer Titel"
    }
  }
}

// In your component
<h2>{t('myNewSection.title')}</h2>
```

## Current Implementation

Right now, only the **Header navigation** is bilingual. When you click DE/EN in the navigation:
- ✅ Navigation menu items change language
- ⏳ Page content remains in English (needs manual update per instructions above)

All translations are ready in `src/i18n/translations.js` - you just need to replace hardcoded text with `t()` calls following the examples above.
