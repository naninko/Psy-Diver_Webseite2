# PSY-DIVER Website - Entwickler-Anleitung

## Inhaltsverzeichnis
1. [Projektübersicht](#projektübersicht)
2. [Technologie-Stack](#technologie-stack)
3. [Projektstruktur](#projektstruktur)
4. [Lokale Entwicklung](#lokale-entwicklung)
5. [Seiten/Reiter erstellen und bearbeiten](#seitenreiter-erstellen-und-bearbeiten)
6. [Übersetzungen verwalten](#übersetzungen-verwalten)
7. [Styling und CSS](#styling-und-css)
8. [Bilder und Assets](#bilder-und-assets)
9. [Routing und Navigation](#routing-und-navigation)
10. [Deployment](#deployment)
11. [Häufige Aufgaben](#häufige-aufgaben)

---

## 1. Projektübersicht

Diese Website ist eine **Single Page Application (SPA)** gebaut mit:
- **React** - JavaScript-Framework für UI-Komponenten
- **Vite** - Build-Tool und Development-Server
- **React Router** - Für Navigation zwischen Seiten
- **i18next** - Für Deutsch/Englisch Übersetzungen

---

## 2. Technologie-Stack

### React (UI-Framework)
- **Was ist React?** Eine JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen
- **Komponenten**: Wiederverwendbare UI-Elemente (z.B. Header, Footer, Seiten)
- **JSX**: HTML-ähnliche Syntax in JavaScript-Dateien

### Vite (Build-Tool)
- **Schneller Development-Server**: Hot Module Replacement (Änderungen sofort sichtbar)
- **Build-Prozess**: Optimiert Code für Produktion

### React Router (Navigation)
- **Client-Side Routing**: Navigation ohne Seiten-Reload
- **URLs**: Jeder Reiter hat seine eigene URL

### i18next (Internationalisierung)
- **Mehrsprachigkeit**: Deutsch und Englisch
- **Übersetzungsschlüssel**: `t('key.name')` ruft Übersetzungen ab

---

## 3. Projektstruktur

```
psy-diver-website/
├── public/                          # Statische Dateien (werden direkt kopiert)
│   ├── 7_Dimensionen.png           # Bilder
│   ├── image001.png                # LVR Logo
│   ├── partners/                   # Partner-Logos
│   │   ├── innovationsfonds.svg
│   │   └── dgppn.svg
│   └── pictograms/                 # Piktogramme für Icons
│       ├── person.png
│       ├── family.png
│       └── ...
│
├── src/                            # Quellcode
│   ├── main.jsx                    # Einstiegspunkt der App
│   ├── App.jsx                     # Haupt-App-Komponente
│   ├── App.css                     # Globale Styles
│   │
│   ├── components/                 # Wiederverwendbare Komponenten
│   │   ├── Header.jsx              # Navigation/Menü
│   │   ├── Header.css
│   │   ├── Footer.jsx              # Footer
│   │   └── Footer.css
│   │
│   ├── pages/                      # Seiten/Reiter
│   │   ├── Home.jsx                # Startseite
│   │   ├── Home.css
│   │   ├── About.jsx               # "Über das Projekt"
│   │   ├── About.css
│   │   ├── Team.jsx                # "Über Uns"
│   │   ├── Team.css
│   │   ├── Partners.jsx            # "Partner"
│   │   ├── Partners.css
│   │   ├── News.jsx                # "Neuigkeiten"
│   │   ├── News.css
│   │   ├── Contact.jsx             # "Kontakt"
│   │   ├── Contact.css
│   │   ├── ForPatients.jsx         # "Für Betroffene"
│   │   ├── ForRelatives.jsx        # "Für Angehörige"
│   │   ├── ForProfessionals.jsx    # "Für klinische Professionelle"
│   │   ├── ForAudience.css         # Gemeinsame Styles für "Für..." Seiten
│   │   └── Imprint.jsx             # "Impressum"
│   │
│   └── i18n/                       # Übersetzungen
│       ├── i18n.js                 # i18next Konfiguration
│       └── translations.js         # ALLE Texte (Deutsch & Englisch)
│
├── dist/                           # Build-Output (generiert)
├── node_modules/                   # Dependencies (npm install)
├── package.json                    # Projekt-Konfiguration
├── vite.config.js                  # Vite-Konfiguration
└── index.html                      # HTML-Template
```

---

## 4. Lokale Entwicklung

### Erstmalige Einrichtung

```bash
# 1. Node.js installieren (falls noch nicht vorhanden)
# Herunterladen von: https://nodejs.org/

# 2. In das Projektverzeichnis wechseln
cd /Users/anastaninska/Documents/Ana/Courses/AI_Tools/Claude/psy-diver-website

# 3. Dependencies installieren
npm install
```

### Lokale Website starten

```bash
# Development-Server starten
npm run dev
```

**Ergebnis:**
```
  VITE v7.2.4  ready in 234 ms

  ➜  Local:   http://localhost:5173/psy-diver-website/
  ➜  Network: http://192.168.1.x:5173/psy-diver-website/
```

**Wichtig:**
- Öffnen Sie: `http://localhost:5173/psy-diver-website/`
- Änderungen werden automatisch im Browser aktualisiert (Hot Reload)
- Drücken Sie `Ctrl+C` im Terminal, um den Server zu stoppen

### Build für Produktion

```bash
# Production-Build erstellen
npm run build

# Build lokal testen
npm run preview
```

---

## 5. Seiten/Reiter erstellen und bearbeiten

### Wo finde ich den Code für jeden Reiter?

| Reiter | Datei | Beschreibung |
|--------|-------|--------------|
| **Startseite** | `src/pages/Home.jsx` | Hauptseite mit Hero-Section |
| **Über das Projekt** | `src/pages/About.jsx` | Projektübersicht, Ziele, Hintergrund |
| **Für Betroffene** | `src/pages/ForPatients.jsx` | Info für Patienten |
| **Für Angehörige** | `src/pages/ForRelatives.jsx` | Info für Angehörige |
| **Für klinische Prof.** | `src/pages/ForProfessionals.jsx` | Info für Fachpersonal |
| **Über Uns** | `src/pages/Team.jsx` | Team-Mitglieder |
| **Partner** | `src/pages/Partners.jsx` | Partner-Informationen |
| **Neuigkeiten** | `src/pages/News.jsx` | News und Timeline |
| **Kontakt** | `src/pages/Contact.jsx` | Kontaktformular |
| **Impressum** | `src/pages/Imprint.jsx` | Legal Notice |

### Eine neue Seite erstellen

**Schritt 1: Komponente erstellen**

Erstellen Sie `src/pages/MeineSeite.jsx`:

```jsx
import { useTranslation } from 'react-i18next';
import './MeineSeite.css';

function MeineSeite() {
  const { t } = useTranslation();

  return (
    <div className="meine-seite">
      {/* Header Section */}
      <section className="page-header">
        <div className="container">
          <h1>{t('meineSeite.title')}</h1>
          <p className="page-subtitle">{t('meineSeite.subtitle')}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          <p>{t('meineSeite.description')}</p>
        </div>
      </section>
    </div>
  );
}

export default MeineSeite;
```

**Schritt 2: CSS-Datei erstellen**

Erstellen Sie `src/pages/MeineSeite.css`:

```css
.meine-seite {
  /* Ihre Styles hier */
}
```

**Schritt 3: Route hinzufügen**

In `src/App.jsx`, fügen Sie hinzu:

```jsx
// Import am Anfang der Datei
import MeineSeite from './pages/MeineSeite';

// In der Routes-Section
<Route path="/meine-seite" element={<MeineSeite />} />
```

**Schritt 4: Navigation hinzufügen**

In `src/components/Header.jsx`, fügen Sie einen Link hinzu:

```jsx
<Link to="/meine-seite" className="nav-link">
  {t('nav.meineSeite')}
</Link>
```

**Schritt 5: Übersetzungen hinzufügen**

In `src/i18n/translations.js`:

```javascript
// Deutsch
de: {
  translation: {
    nav: {
      meineSeite: "Meine Seite",
      // ...
    },
    meineSeite: {
      title: "Titel auf Deutsch",
      subtitle: "Untertitel",
      description: "Beschreibung..."
    }
  }
},

// Englisch
en: {
  translation: {
    nav: {
      meineSeite: "My Page",
      // ...
    },
    meineSeite: {
      title: "Title in English",
      subtitle: "Subtitle",
      description: "Description..."
    }
  }
}
```

---

## 6. Übersetzungen verwalten

### Alle Texte befinden sich in einer Datei!

**Datei:** `src/i18n/translations.js`

### Struktur

```javascript
export const translations = {
  en: {
    translation: {
      // Englische Übersetzungen
      nav: { home: "Home", about: "About" },
      home: { title: "PSY-DIVER" }
    }
  },
  de: {
    translation: {
      // Deutsche Übersetzungen
      nav: { home: "Startseite", about: "Über" },
      home: { title: "PSY-DIVER" }
    }
  }
};
```

### Übersetzung verwenden

In einer Komponente:

```jsx
import { useTranslation } from 'react-i18next';

function MeineKomponente() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
    </div>
  );
}
```

### HTML in Übersetzungen

Wenn Übersetzungen HTML enthalten (z.B. `<strong>`, `<a>`):

```jsx
<p dangerouslySetInnerHTML={{ __html: t('home.description') }}></p>
```

### Sprache wechseln

Der Sprachwechsel-Button ist im Header:

```jsx
// In Header.jsx
const { i18n } = useTranslation();

const toggleLanguage = () => {
  const newLang = i18n.language === 'de' ? 'en' : 'de';
  i18n.changeLanguage(newLang);
};
```

---

## 7. Styling und CSS

### CSS-Variablen (Farben, Abstände)

**Datei:** `src/App.css`

```css
:root {
  /* Farben */
  --color-navy: #1a2e4a;
  --color-cyan: #00d4aa;
  --color-magenta: #e91e8c;
  --color-green: #00a67e;
  --color-yellow: #ffd000;
  --color-coral: #ff6b6b;

  /* Abstände */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-xxl: 4rem;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Schatten */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.1);
  --shadow-lg: 0 8px 16px rgba(0,0,0,0.15);
}
```

### Farben ändern

Um die Hauptfarbe zu ändern, bearbeiten Sie in `src/App.css`:

```css
:root {
  --color-cyan: #00d4aa;  /* Alte Farbe */
  --color-cyan: #0099ff;  /* Neue Farbe */
}
```

### Textgröße ändern

In den jeweiligen CSS-Dateien (z.B. `src/pages/About.css`):

```css
.overview-content p {
  font-size: 1.2rem;  /* Standard-Textgröße */
  line-height: 1.8;
}
```

### Responsive Design

Breakpoints für mobile Geräte:

```css
/* Tablet */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }
}
```

---

## 8. Bilder und Assets

### Wo befinden sich die Bilder?

**Verzeichnis:** `public/`

```
public/
├── 7_Dimensionen.png
├── image001.png
├── partners/
│   ├── innovationsfonds.svg
│   └── dgppn.svg
└── pictograms/
    ├── person.png
    ├── family.png
    └── ...
```

### Bilder verwenden

In JSX:

```jsx
<img src="/psy-diver-website/image001.png" alt="LVR Logo" />
```

**Wichtig:** Der Pfad beginnt mit `/psy-diver-website/` (base path aus `vite.config.js`)

### Neues Bild hinzufügen

1. Kopieren Sie das Bild nach `public/`
2. Verwenden Sie es im Code:

```jsx
<img src="/psy-diver-website/mein-bild.png" alt="Beschreibung" />
```

---

## 9. Routing und Navigation

### Alle Routen definiert in: `src/App.jsx`

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/team" element={<Team />} />
  {/* ... weitere Routen */}
</Routes>
```

### Links erstellen

Verwenden Sie **niemals** `<a href="...">`! Verwenden Sie stattdessen:

```jsx
import { Link } from 'react-router-dom';

<Link to="/about">Über das Projekt</Link>
```

**Warum?** `Link` verhindert einen Seiten-Reload und sorgt für schnelle Navigation.

### Navigation im Header

**Datei:** `src/components/Header.jsx`

```jsx
<nav className="nav-links">
  <Link to="/" className="nav-link">{t('nav.home')}</Link>
  <Link to="/about" className="nav-link">{t('nav.about')}</Link>
  <Link to="/team" className="nav-link">{t('nav.team')}</Link>
  {/* ... */}
</nav>
```

---

## 10. Deployment

### GitHub Pages Deployment

**Automatisches Deployment:**

```bash
npm run deploy
```

Das macht folgendes:
1. Baut die Produktionsversion (`npm run build`)
2. Pusht den `dist/` Ordner zum `gh-pages` Branch
3. GitHub Pages hosted automatisch von diesem Branch

### Manuelle Schritte

```bash
# 1. Änderungen committen
git add .
git commit -m "Beschreibung der Änderungen"

# 2. Zu GitHub pushen
git push origin main

# 3. Deployen
npm run deploy
```

### GitHub Pages URL

Nach dem Deployment ist die Website verfügbar unter:

```
https://naninko.github.io/psy-diver-website/
```

### Base Path Konfiguration

**Datei:** `vite.config.js`

```javascript
export default defineConfig({
  base: '/psy-diver-website/',  // GitHub Pages Repository-Name
  // ...
})
```

**Wichtig:** Dieser Pfad muss mit Ihrem GitHub-Repository-Namen übereinstimmen!

---

## 11. Häufige Aufgaben

### Text ändern

1. Öffnen Sie `src/i18n/translations.js`
2. Suchen Sie den entsprechenden Schlüssel
3. Ändern Sie den Text in Deutsch (`de`) und Englisch (`en`)
4. Speichern Sie die Datei
5. Die Änderung ist sofort im Browser sichtbar (Hot Reload)

**Beispiel:**

```javascript
// Vorher
home: {
  title: "PSY-DIVER"
}

// Nachher
home: {
  title: "PSY-DIVER Forschungsprojekt"
}
```

### Farbe ändern

1. Öffnen Sie `src/App.css`
2. Ändern Sie die CSS-Variable unter `:root`
3. Speichern Sie die Datei

**Beispiel:**

```css
:root {
  --color-cyan: #00d4aa;  /* Alt */
  --color-cyan: #00b8d4;  /* Neu */
}
```

### Neuen Team-Member hinzufügen

**In `src/i18n/translations.js`:**

```javascript
team: {
  members: {
    member1: { name: "...", role: "..." },
    member2: { name: "...", role: "..." },
    // Neu:
    member9: {
      name: "Dr. Max Mustermann (er/ihm)",
      role: "Forschungsassistent"
    }
  }
}
```

**In `src/pages/Team.jsx`:**

```javascript
const teamMembers = [
  { id: 1, name: t('team.members.member1.name'), ... },
  { id: 2, name: t('team.members.member2.name'), ... },
  // Neu:
  {
    id: 9,
    name: t('team.members.member9.name'),
    role: t('team.members.member9.role'),
    image: null
  }
];
```

### News-Item hinzufügen

**In `src/i18n/translations.js`:**

```javascript
news: {
  items: {
    item1: { date: "...", title: "...", ... },
    // Neu:
    item5: {
      date: "März 2026",
      title: "Neuer Meilenstein erreicht",
      excerpt: "Kurzbeschreibung...",
      content: "Vollständiger Text..."
    }
  }
}
```

**In `src/pages/News.jsx`:**

```javascript
const newsItems = [
  { id: 4, dateKey: 'news.items.item4.date', ... },
  // Neu:
  {
    id: 5,
    dateKey: 'news.items.item5.date',
    titleKey: 'news.items.item5.title',
    categoryKey: 'projectUpdate',
    excerptKey: 'news.items.item5.excerpt',
    contentKey: 'news.items.item5.content',
    color: 'var(--color-cyan)'
  }
];
```

### Section auskommentieren (verstecken)

**In JSX-Dateien:**

```jsx
{/* Kommentar in JSX */}
{/*
<section className="timeline-section">
  ...ausgeblendeter Code...
</section>
*/}
```

### Section linksbündig ausrichten

**In CSS-Dateien:**

```css
.meine-section {
  text-align: left;  /* Links ausrichten */
}
```

---

## Nützliche Befehle

```bash
# Development-Server starten
npm run dev

# Production-Build erstellen
npm run build

# Production-Build lokal testen
npm run preview

# Zu GitHub Pages deployen
npm run deploy

# Alle Dependencies installieren
npm install

# Neue Dependency hinzufügen
npm install paketname

# Git-Änderungen committen
git add .
git commit -m "Beschreibung"
git push origin main
```

---

## Ordnerstruktur Quick Reference

```
src/
├── main.jsx              → App-Einstiegspunkt
├── App.jsx               → Haupt-App + Routing
├── App.css               → Globale Styles, CSS-Variablen
├── components/           → Header, Footer
├── pages/                → Alle Seiten (Home, About, etc.)
└── i18n/
    ├── i18n.js           → i18next Setup
    └── translations.js   → ALLE Texte (DE/EN)
```

---

## Hilfreiche Ressourcen

- **React Dokumentation**: https://react.dev/
- **React Router**: https://reactrouter.com/
- **Vite Dokumentation**: https://vitejs.dev/
- **i18next**: https://www.i18next.com/
- **CSS Tricks**: https://css-tricks.com/

---

## Häufige Fehler und Lösungen

### Fehler: "Cannot find module"

**Lösung:**
```bash
npm install
```

### Fehler: Port 5173 bereits belegt

**Lösung:**
```bash
# Stoppen Sie den laufenden Server mit Ctrl+C
# Oder ändern Sie den Port in vite.config.js
```

### Änderungen nicht sichtbar

**Lösung:**
1. Hard Refresh im Browser: `Cmd+Shift+R` (Mac) oder `Ctrl+F5` (Windows)
2. Browser-Cache leeren
3. Development-Server neu starten

### GitHub Pages zeigt alte Version

**Lösung:**
1. Warten Sie 2-5 Minuten nach dem Deployment
2. Hard Refresh im Browser
3. Prüfen Sie: https://github.com/naninko/psy-diver-website/settings/pages

---

## Kontakt & Support

Bei Fragen zur Website-Entwicklung:
- Repository: https://github.com/naninko/psy-diver-website
- Issues: https://github.com/naninko/psy-diver-website/issues

Viel Erfolg beim Entwickeln! 🚀
