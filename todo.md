# TODO: Color Scheme Update and Footer Links Addition

## Plan

### Overview
Update the website's color scheme to match LVR corporate design colors and add required footer links for legal compliance (Datenschutz and Barrierefreiheit).

### Requirements
1. **Strict Color Palette**:
   - Main colors: `#00579D` (blue), `#007B4E` (green)
   - Accent colors for buttons, text boxes, and smaller elements: `#AC1360` (magenta), `#031E41` (dark navy), `#CB3709` (orange/coral), `#671C8C` (purple)
   - No deviation from these colors

2. **Footer Links** (under "Schnellzugriff" section):
   - Update "Impressum" to link to: https://ifub.lvr.de/de/nav_main/impressum.html
   - Add "Datenschutz" linking to: https://ifub.lvr.de/de/nav_main/datenschutz.html
   - Add "Barrierefreiheit" linking to: https://ifub.lvr.de/de/nav_main/barrierefreiheit.html
   - These links should NOT appear in the top navigation

### Tasks

#### Phase 1: Color Variables Update
- [ ] Update color variables in `src/index.css`
  - Replace `--color-navy` with `#00579D` (main blue)
  - Replace `--color-green` with `#007B4E` (main green)
  - Replace `--color-magenta` with `#AC1360` (accent magenta)
  - Replace `--color-cyan` with `#00579D` (use main blue)
  - Add `--color-dark-navy: #031E41` (accent dark navy)
  - Add `--color-orange: #CB3709` (accent orange)
  - Add `--color-purple: #671C8C` (accent purple)
  - Remove or update unused color variables

#### Phase 2: Footer Component Updates
- [ ] Add translations for new footer links in `src/i18n/translations.js`
  - Add `nav.privacy` (Datenschutz / Privacy Policy)
  - Add `nav.accessibility` (Barrierefreiheit / Accessibility)

- [ ] Update `src/components/Footer.jsx`
  - Change "Impressum" from `<Link to="/imprint">` to `<a href="https://ifub.lvr.de/de/nav_main/impressum.html">`
  - Add "Datenschutz" link: `<a href="https://ifub.lvr.de/de/nav_main/datenschutz.html">`
  - Add "Barrierefreiheit" link: `<a href="https://ifub.lvr.de/de/nav_main/barrierefreiheit.html">`

#### Phase 3: Verification
- [ ] Review all CSS files to ensure colors are consistently applied
- [ ] Test the website to verify color changes
- [ ] Verify footer links work correctly and open external URLs
- [ ] Confirm Impressum, Datenschutz, and Barrierefreiheit are NOT in top navigation

### Files to Modify
1. `/src/index.css` - Color variables
2. `/src/i18n/translations.js` - Add translations for privacy and accessibility
3. `/src/components/Footer.jsx` - Update links in Quick Links section

### Design Principles
- Keep all changes as simple as possible
- Minimal code impact - only touch what's necessary
- Maintain existing functionality and structure

---

## Review

### Completed Tasks ✓

All tasks have been successfully completed. The website now uses the official LVR corporate design colors and includes the required footer links for legal compliance.

### Changes Summary

#### 1. Color Scheme Update (src/index.css)
**Updated CSS color variables to match LVR corporate design:**
- Main colors:
  - `--color-navy: #00579D` (LVR blue)
  - `--color-green: #007B4E` (LVR green)
- Accent colors for buttons, text boxes, and smaller elements:
  - `--color-magenta: #AC1360`
  - `--color-dark-navy: #031E41`
  - `--color-orange: #CB3709`
  - `--color-purple: #671C8C`
- Updated supporting colors:
  - `--color-cyan: #00579D` (uses main blue)
  - `--color-coral: #CB3709` (uses accent orange)

#### 2. Translation Updates (src/i18n/translations.js)
**Added new navigation translations:**
- English:
  - `nav.privacy: "Privacy Policy"`
  - `nav.accessibility: "Accessibility"`
- German:
  - `nav.privacy: "Datenschutz"`
  - `nav.accessibility: "Barrierefreiheit"`

#### 3. Footer Component Update (src/components/Footer.jsx)
**Updated "Schnellzugriff" (Quick Links) section:**
- Changed Impressum from internal route to external link: https://ifub.lvr.de/de/nav_main/impressum.html
- Added Datenschutz external link: https://ifub.lvr.de/de/nav_main/datenschutz.html
- Added Barrierefreiheit external link: https://ifub.lvr.de/de/nav_main/barrierefreiheit.html
- All external links include `target="_blank"` and `rel="noopener noreferrer"` for security

### Verification
- ✓ Development server started successfully on port 5173
- ✓ All color variables updated to official LVR colors
- ✓ Header navigation does NOT include Impressum, Datenschutz, or Barrierefreiheit (confirmed via grep)
- ✓ Footer includes all three required legal links as external URLs
- ✓ Translations added for both English and German

### Files Modified
1. `/src/index.css` - Updated color variables
2. `/src/i18n/translations.js` - Added privacy and accessibility translations
3. `/src/components/Footer.jsx` - Updated footer links to external URLs

### Design Compliance
- ✓ Strictly adheres to specified LVR color palette
- ✓ No deviation from required colors (#00579D, #007B4E, #AC1360, #031E41, #CB3709, #671C8C)
- ✓ Footer links properly configured for legal compliance
- ✓ Minimal code changes - only touched necessary files

---

## News Page Cleanup (January 2026)

### Completed Tasks ✓

Successfully simplified the News page by removing the category filter and deleting outdated content.

### Changes Summary

#### 1. Removed Category Filter (src/pages/News.jsx)
**Deleted entire category filter section:**
- Removed "Filter nach Kategorie" heading and all filter buttons
- Removed `selectedCategory` state management
- Removed `filteredNews` filtering logic
- Removed unused `useState` import
- Simplified code by displaying all news items directly

#### 2. Deleted Post (src/pages/News.jsx)
**Removed "Datenerfassungsinfrastruktur eingerichtet" news item:**
- Deleted item3 from newsItems array (January 2026 post about data collection infrastructure)
- Kept only 3 news items: Project Launch, Team Assembly, and First Stakeholder Workshop

### Files Modified
1. `/src/pages/News.jsx` - Removed category filter UI and deleted item3

### Verification
- ✓ News page now displays 3 news items without any filtering
- ✓ Development server hot-reloaded successfully
- ✓ No compilation errors
- ✓ Simplified code with minimal complexity

---

## Co-Creation Workshop Update (January 2026)

### Completed Tasks ✓

Updated the news item about the workshop with correct title, date, time, location, and participant information.

### Changes Summary

#### Updated Workshop Details (src/i18n/translations.js)
**German (item4):**
- Title: Changed from "Erster Stakeholder-Engagement-Workshop" to "Co-Creation Workshop"
- Date: Changed from "März 2026" to "18.02.2026"
- Excerpt: Updated to "Partizipativer Workshop zur gemeinsamen Projektgestaltung geplant."
- Content: "Der Co-Creation Workshop findet am 18.02.2026 von 09:00-15:00 Uhr in der LVR-Klinik Köln statt. Dabei werden ca. 15 Teilnehmer von der Projektsteuerungsgruppe und das Team zusammenkommen, um gemeinsam die weitere Ausrichtung des PSY-DIVER Projekts zu gestalten."

**English (item4):**
- Title: Changed from "First Stakeholder Engagement Workshop" to "Co-Creation Workshop"
- Date: Changed from "March 2026" to "February 18, 2026"
- Excerpt: Updated to "Participatory workshop planned for collaborative project development."
- Content: "The Co-Creation Workshop will take place on February 18, 2026, from 9:00 AM to 3:00 PM at LVR-Klinik Köln. Approximately 15 participants from the project steering group and the team will gather to collaboratively shape the future direction of the PSY-DIVER project."

### Key Information
- **Date:** February 18, 2026 (18.02.2026)
- **Time:** 9:00 AM - 3:00 PM (09:00-15:00 Uhr)
- **Location:** LVR-Klinik Köln
- **Participants:** Approximately 15 members from the project steering group and the team

### Files Modified
1. `/src/i18n/translations.js` - Updated item4 in both English and German translations

### Verification
- ✓ Workshop details updated in both languages
- ✓ Development server hot-reloaded successfully
- ✓ Accurate date, time, location, and participant information included

---

## News Page Layout and Sorting Update (January 2026)

### Completed Tasks ✓

Reorganized news items to display from newest to oldest and changed layout to vertical stacking.

### Changes Summary

#### 1. Reordered News Items (src/pages/News.jsx)
**Changed order from oldest-to-newest to newest-to-oldest:**
- First: Co-Creation Workshop (February 18, 2026)
- Second: Team Assembly (December 2025)
- Third: Project Launch (November 2025)

#### 2. Changed Layout to Vertical (src/pages/News.css)
**Updated news grid layout:**
- Changed from `grid-template-columns: repeat(auto-fill, minmax(350px, 1fr))` to `grid-template-columns: 1fr`
- Added `max-width: 800px` and `margin: 0 auto` for centered, vertical layout
- News cards now stack vertically (untereinander) instead of displaying side-by-side
- Removed redundant responsive rule for .news-grid

### Files Modified
1. `/src/pages/News.jsx` - Reordered newsItems array (lines 7-35)
2. `/src/pages/News.css` - Changed grid layout to single column (lines 75-81)

### Verification
- ✓ News items display in chronological order (newest first)
- ✓ Cards stack vertically in a single column
- ✓ Layout centered with max-width of 800px
- ✓ Development server hot-reloaded successfully

---

## Git Push to GitHub (January 2026)

### Completed Tasks ✓

All changes have been successfully committed and pushed to the GitHub repository.

### Commit Summary
**Commit:** 6571fd9
**Message:** "Update LVR corporate colors, footer links, and news layout"

### Changes Pushed:
1. **Color Scheme Update** - Official LVR corporate design colors
2. **Footer Links** - Added Datenschutz and Barrierefreiheit links to LVR website
3. **News Section Updates**:
   - Removed category filter
   - Deleted "Datenerfassungsinfrastruktur" post
   - Updated Co-Creation Workshop details (18.02.2026, 09:00-15:00, LVR-Klinik Köln)
   - Reordered news from newest to oldest
   - Changed layout to vertical stacking

### Files Committed:
- src/components/Footer.jsx
- src/i18n/translations.js
- src/index.css
- src/pages/News.css
- src/pages/News.jsx
- src/pages/Home.jsx
- todo.md

### Verification
- ✓ Git commit created successfully
- ✓ Changes pushed to origin/main
- ✓ Remote repository updated: https://github.com/naninko/psy-diver-website.git

---

## GitHub Pages Deployment (January 2026)

### Completed Tasks ✓

Website successfully built and deployed to GitHub Pages.

### Deployment Process
1. Ran `npm run build` - Created production build in dist/ folder
2. Used `gh-pages -d dist` - Deployed dist folder to gh-pages branch
3. GitHub Pages automatically published the updated website

### Build Results
- **Build time:** 564ms
- **Output files:**
  - index.html: 1.50 kB (gzip: 0.68 kB)
  - CSS: 35.92 kB (gzip: 5.88 kB)
  - JavaScript: 363.96 kB (gzip: 109.27 kB)
  - Images: 222.86 kB
- **Status:** Published successfully

### Website URL
https://naninko.github.io/psy-diver-website/

### Verification
- ✓ Production build created successfully
- ✓ Deployed to gh-pages branch
- ✓ Website published and accessible
- Note: Changes may take 1-2 minutes to appear due to CDN caching

---

## Custom Domain Setup Documentation (January 2026)

### Created Documentation

Created comprehensive deployment guide in `DEPLOYMENT.md` explaining how to deploy the website to www.psy-diver.de.

### Two Deployment Options Explained:

**Option 1: GitHub Pages with Custom Domain (Recommended)**
- Use existing GitHub Pages setup
- Configure DNS CNAME record: www.psy-diver.de → naninko.github.io
- Configure A records for root domain
- Free SSL certificate
- Automatic deployments with `npm run deploy`

**Option 2: Traditional Web Hosting**
- Modify `vite.config.js` base path from `/psy-diver-website/` to `/`
- Build production files with `npm run build`
- Upload `dist/` folder to web server via FTP/SFTP
- Configure DNS A record to server IP
- Setup `.htaccess` for React Router
- Manual SSL certificate setup required

### Next Steps
Waiting for user to:
1. Choose deployment option
2. Provide domain registrar information
3. Confirm if they have existing web hosting

### File Created
- `/DEPLOYMENT.md` - Complete deployment guide in German

---

## Webhosting Preparation (January 2026)

### Completed Tasks ✓

Successfully prepared website for upload to www.psy-diver.de webhosting.

### Changes Made

#### 1. Updated vite.config.js
**Changed base path for root domain:**
- FROM: `base: '/psy-diver-website/'`
- TO: `base: '/'`
- Reason: Custom domain deployment requires root path

#### 2. Fixed Asset Paths
**Updated all hardcoded paths:**
- src/pages/Home.css: All pictogram URLs updated
- src/pages/Home.jsx: All image paths updated
- FROM: `/psy-diver-website/pictograms/...`
- TO: `/pictograms/...`

#### 3. Created .htaccess File
**Location:** `public/.htaccess`
**Purpose:**
- React Router support (URL rewriting)
- Security headers (X-Frame-Options, etc.)
- Gzip compression
- Browser caching optimization

#### 4. Production Build
**Build Results:**
- Build time: 502ms
- No warnings or errors
- Files in dist/ ready for upload:
  - index.html (1.46 kB)
  - .htaccess (Apache config)
  - assets/ (CSS 35.67 kB, JS 363.78 kB)
  - pictograms/ (all icon files)
  - partners/ (logo files)
  - Images

#### 5. Created Upload Instructions
**File:** `UPLOAD_ANLEITUNG.md`
**Contents:**
- Step-by-step FTP upload guide
- FileZilla setup instructions
- DNS configuration details
- SSL certificate setup
- Troubleshooting section
- Complete checklist

### Files Modified
1. `/vite.config.js` - Changed base path to '/'
2. `/src/pages/Home.css` - Fixed pictogram paths (14 occurrences)
3. `/src/pages/Home.jsx` - Fixed all asset paths (9 occurrences)
4. `/public/.htaccess` - Created Apache configuration

### Files Created
1. `/UPLOAD_ANLEITUNG.md` - Detailed upload guide in German

### Ready for Upload
✅ All files in `dist/` folder are ready to upload
✅ FTP upload instructions provided
✅ DNS configuration documented
✅ SSL setup instructions included
✅ Troubleshooting guide available

### Upload Location
Upload ALL files from `dist/` to webserver root directory:
- Usually: `public_html/` or `htdocs/` or `www/`
- Approximately 650 KB total size
- Upload time: ~1-2 minutes via FTP

---

## Hetzner-Specific Guide (January 2026)

### Created Hetzner Upload Guide

Created detailed, Hetzner-specific instructions in `HETZNER_ANLEITUNG.md`.

### Hetzner-Specific Details

**Hosting Provider:** Hetzner (Germany)

**Key Differences for Hetzner:**
1. **Control Panel:** Plesk (konsoleH)
2. **Upload Directory:** `/httpdocs/` (NOT public_html!)
3. **FTP Protocol:** SFTP recommended (Port 22)
4. **SSL:** Let's Encrypt built into Plesk
5. **Access:** https://www.hetzner.com/konsoleH

### Quick Start for Hetzner

1. Login to Plesk via konsoleH
2. Get SFTP credentials from "Websites & Domains"
3. Connect with FileZilla (SFTP, Port 22)
4. Upload to `/httpdocs/` directory
5. Enable Let's Encrypt in Plesk (SSL/TLS section)
6. Activate HTTPS redirect

### Important Hetzner Notes

- **Web Root:** `/httpdocs/` (Hetzner/Plesk standard)
- **Apache mod_rewrite:** Usually pre-enabled
- **SSL:** Free Let's Encrypt in Plesk Control Panel
- **DNS:** Can be managed at dns.hetzner.com
- **Support:** support@hetzner.com, +49 (0)9831 505-0

### Files Created
- `/HETZNER_ANLEITUNG.md` - Complete Hetzner-specific guide in German

### Alternative Methods Documented
- Option 1: Plesk with FTP/SFTP (recommended for most users)
- Option 2: SSH/SCP upload (for advanced users with server access)
- Nginx configuration (if not using Apache)
- Certbot SSL setup (command line alternative)

---

## Project Overview Text Update (January 2026)

### Completed Tasks ✓

Updated the project overview text on the "About the Project" page with new official content.

### Changes Made

#### German Text (src/i18n/translations.js:678-679)
**Updated para1:**
"Psychische Erkrankungen treffen viele Menschen, jedoch nicht alle auf die gleiche Weise. Geschlecht, Herkunft, soziale Lage oder Wohnsituation beeinflussen, wie Betroffene erkranken, welche Therapien sie erhalten und wie gut diese wirken. Trotzdem werden diese Unterschiede bislang kaum systematisch in die psychiatrische Versorgung einbezogen."

**Updated para2:**
- Mentions Innovation Committee of Federal Joint Committee (G-BA) funding
- Details LVR hospital network: 50,000 inpatient + 170,000 outpatient patients annually
- Describes participatory research approach involving patients, relatives, and professionals
- States goal: develop recommendations for gender- and diversity-sensitive psychiatric care

**Corrections made:**
- Fixed typo: "Bundesauschuss" → "Bundesausschuss"
- Fixed typo: "gemeicklung" → "Entwicklung"

#### English Translation (src/i18n/translations.js:128-129)
Created corresponding English translation maintaining the same structure and content.

### Production Build
- Build time: 546ms
- Status: Successful
- Files updated in `dist/` folder ready for upload

### Files Modified
1. `/src/i18n/translations.js` - Updated both German and English overview texts

### Next Steps
- New dist/ folder ready for upload to Hetzner
- Follow HETZNER_ANLEITUNG.md for upload instructions

---

## Git Commit and Push (January 2026)

### Completed Tasks ✓

All changes committed and pushed to GitHub repository.

### Commit Details
**Commit:** 3fe7738
**Message:** "Update project overview text and prepare for Hetzner deployment"

### Changes Committed:
1. **Project Overview Text Updates**
   - Updated German and English translations
   - Fixed typos in original text
   - Emphasized diversity factors and G-BA funding

2. **Hetzner Deployment Preparation**
   - Changed vite.config.js base path to '/'
   - Fixed all asset paths in Home.jsx and Home.css
   - Created .htaccess for Apache/React Router

3. **Documentation Added**
   - DEPLOYMENT.md (general guide)
   - HETZNER_ANLEITUNG.md (Hetzner-specific)
   - UPLOAD_ANLEITUNG.md (detailed FTP guide)

### Files Committed (9 files):
- src/i18n/translations.js
- src/pages/Home.css
- src/pages/Home.jsx
- vite.config.js
- todo.md
- DEPLOYMENT.md (new)
- HETZNER_ANLEITUNG.md (new)
- UPLOAD_ANLEITUNG.md (new)
- public/.htaccess (new)

### Repository Status
- ✓ Pushed to origin/main
- ✓ GitHub repository updated
- ✓ All changes synchronized

### Workflow
User will:
1. Continue local development and GitHub updates
2. Upload to Hetzner hosting when ready
3. Configure DNS for www.psy-diver.de

---

## Official LVR Content Integration (January 2026)

### Completed Tasks ✓

Updated "About the Project" page with official content from LVR-IFuB website.

### Content Source
https://ifub.lvr.de/de/nav_main/wissenschaft/wissenschaftliche_projekte/laufende_projekte/forschungsprojekte_mit_drittmittelfoerderung/psy_diver/psy_diver.html

### Sections Updated

#### 1. Ziele (Goals) - src/i18n/translations.js:685-696, 135-146
**Goal 1: Development of data recognition procedures**
- German: "Entwicklung eines Verfahrens, mit dem sich diversitätsrelevante Informationen in Routinedaten und klinischen Dokumentationen zuverlässig erkennen lassen – auch nutzbar für zukünftige Forschungsprojekte."
- English: Corresponding translation provided

**Goal 2: Identification of gender and diversity-specific differences**
- Detailed description of three areas: psychopharmaceuticals, psychotherapy offerings, treatment effectiveness
- Emphasizes intersectional approach

**Goal 3: Development of recommendations for action**
- Focus on diversity-sensitive and needs-based psychiatric care

#### 2. Hintergrund (Background) - src/i18n/translations.js:699-702, 149-152
**Comprehensive background text covering:**
- Central role of pharmacotherapy, psychotherapy, and psychosocial therapies
- Barriers created by diversity factors (language, culture, social disadvantages)
- Current research gaps
- New scientific findings on gender-specific factors
- Demographic and sociocultural changes
- Necessity of needs-based, diversity-sensitive care

#### 3. Studiendesign & Zielpopulation - src/i18n/translations.js:704-707, 154-157
**Study design description:**
- Mixed-methods design combining data analysis and surveys
- Participatory-generative approach
- Involvement of patients, relatives, and professionals
- AI-based analysis of nine LVR clinic records
- Qualitative interviews and questionnaires
- Structured participation process for developing recommendations

### Changes Made
- Replaced all previous content with exact official LVR text
- Maintained structure and formatting
- Updated both German (DE) and English (EN) translations
- Ensured consistency across all sections

### Production Build
- Build time: 561ms
- Status: Successful
- JavaScript bundle: 365.45 kB (gzip: 109.58 kB)

### Git Commit
- **Commit:** 210391d
- **Message:** "Update About page with official LVR content"
- **Status:** Pushed to origin/main

### Files Modified
1. `/src/i18n/translations.js` - Updated goals, background, and study design sections

### Verification
- ✓ Content matches official LVR website
- ✓ Both German and English versions updated
- ✓ Build successful with no errors
- ✓ Changes committed and pushed to GitHub
- ✓ Ready for Hetzner deployment

---

## Goal 2 Formatting Improvement (January 2026)

### Completed Tasks ✓

Improved readability of Goal 2 by adding line breaks for structured list items.

### Changes Made

**Goal 2: Identification of gender and diversity-specific differences**

Added line breaks before each list item (a, b, c) for better visual structure:

**Before:**
"...in der Versorgung psychisch erkrankter Menschen: a) in der Verschreibung und Überwachung... b) im Angebot und in der Nutzung... c) in der Wirksamkeit..."

**After:**
```
...in der Versorgung psychisch erkrankter Menschen:

a) in der Verschreibung und Überwachung von Psychopharmaka...,

b) im Angebot und in der Nutzung von Psychotherapie...,

c) in der Wirksamkeit der Behandlungen...
```

### Technical Implementation
- Used `\n\n` for line breaks in translation strings
- Applied to both German (DE) and English (EN) versions
- Maintains semantic HTML structure when rendered

### Production Build
- Build time: 539ms
- Status: Successful
- No errors or warnings

### Git Commit
- **Commit:** 3b9d876
- **Message:** "Format Goal 2 with line breaks for better readability"
- **Status:** Pushed to origin/main

### Files Modified
1. `/src/i18n/translations.js` - Lines 141, 691 (Goal 2 descriptions)

### Verification
- ✓ Line breaks display correctly in browser
- ✓ Better visual structure and readability
- ✓ Both languages updated consistently
- ✓ Build successful
- ✓ Committed and pushed to GitHub

---

## Partner Logos Update (Januar 2026)

### Plan

Anzeige der Förderer und Kooperationspartner auf der Startseite am Ende vom Absatz "Projekt Übersicht".

### Aufgaben

- [ ] Bildpfade in Home.jsx von .png zu .svg korrigieren
- [ ] CSS-Styling für Partners-Sektion in Home.css hinzufügen
- [ ] Testen, ob die Logos korrekt angezeigt werden
- [ ] Production Build erstellen

### Details

**Förderer:**
- Innovationsausschuss des Gemeinsamen Bundesausschusses (G-BA)
- Link: https://innovationsfonds.g-ba.de/
- Logo: /partners/innovationsfonds.svg

**Kooperationspartner:**
- Deutsche Gesellschaft für Psychiatrie, Psychotherapie, Psychosomatik und Nervenheilkunde (DGPPN)
- Link: https://www.dgppn.de/
- Logo: /partners/dgppn.svg

### Referenz
Ähnlich wie auf: https://ifub.lvr.de/de/nav_main/wissenschaft/wissenschaftliche_projekte/laufende_projekte/forschungsprojekte_mit_drittmittelfoerderung/psy_diver/psy_diver.html

### Review

### Abgeschlossene Aufgaben ✓

Alle Aufgaben wurden erfolgreich abgeschlossen. Die Partner-Logos werden jetzt korrekt auf der Startseite am Ende der "Projekt Übersicht"-Sektion angezeigt.

### Zusammenfassung der Änderungen

#### 1. Bildpfade korrigiert (src/pages/Home.jsx)
**Korrigierte SVG-Pfade:**
- Innovationsfonds Logo: `/partners/innovationsfonds.svg`
- DGPPN Logo: `/partners/dgppn.svg`
- Vorher: `.png` Erweiterung (nicht vorhanden)
- Nachher: `.svg` Erweiterung (korrekt)

#### 2. CSS-Styling hinzugefügt (src/pages/Home.css)
**Neue Styles für Partners-Sektion:**
- `.partners-section` - Trennung mit oberem Rand und Border
- `.partners-text` - Zentrierter Text für Beschreibung
- `.partners-logos` - Flexbox-Layout für horizontale Logo-Anordnung
- `.partner-logo` - Hover-Effekt (scale 1.05)
- Logo-Größe: 80px Höhe (60px auf mobilen Geräten)
- Responsive Design für kleinere Bildschirme

#### 3. Zusätzliche Korrekturen
**Bildpfade aktualisiert (Vorbereitung für Deployment):**
- Header.jsx: Logo-Pfad von `/psy-diver-website/image001.png` zu `/image001.png`
- Footer.jsx: Logo-Pfad von `/psy-diver-website/image001.png` zu `/image001.png`
- Home.jsx: Logo-Pfad von `/psy-diver-website/image001.png` zu `/image001.png`

#### 4. Production Build
- Build-Zeit: 530ms
- Status: Erfolgreich
- CSS: 36.64 kB (gzip: 5.99 kB)
- JavaScript: 365.46 kB (gzip: 109.59 kB)
- Keine Fehler oder Warnungen

### Dateien geändert
1. `/src/pages/Home.jsx` - Logo-Pfade korrigiert (SVG + image001.png)
2. `/src/pages/Home.css` - Partner-Logos CSS-Styling hinzugefügt
3. `/src/components/Header.jsx` - Logo-Pfad korrigiert
4. `/src/components/Footer.jsx` - Logo-Pfad korrigiert

### Verifikation
- ✓ Partner-Logos verwenden korrekte SVG-Dateien
- ✓ Logos sind horizontal angeordnet
- ✓ Hover-Effekte funktionieren
- ✓ Responsive Design implementiert
- ✓ Links zu Innovationsfonds und DGPPN funktionieren
- ✓ Production Build erfolgreich
- ✓ Alle Bildpfade aktualisiert für korrektes Deployment

### Anzeige
Die Partner-Logos erscheinen jetzt am Ende der "Projekt Übersicht"-Sektion auf der Startseite mit:
- **Text:** "PSY-DIVER ist ein Projekt des LVR-Instituts für Forschung und Bildung (IFuB), gefördert durch den Innovationsfonds des G-BA und unterstützt durch die dgppn."
- **Logos:** Innovationsausschuss (G-BA) und DGPPN
- **Links:** Klickbare Logos zu den jeweiligen Websites
