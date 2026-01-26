# Upload-Anleitung für www.psy-diver.de

## ✅ Vorbereitung abgeschlossen!

Die Website wurde erfolgreich für Ihr Webhosting vorbereitet. Alle Dateien befinden sich im **`dist/`** Ordner.

---

## 📦 Was wurde vorbereitet?

✅ **vite.config.js** - Angepasst für Root-Domain
✅ **Pfade korrigiert** - Alle Bild- und Asset-Pfade aktualisiert
✅ **.htaccess** - Für React Router und Sicherheit
✅ **Production Build** - Optimiert und komprimiert (502ms Build-Zeit)

**Dateien im dist/ Ordner:**
- index.html (1.46 kB)
- .htaccess (Apache-Konfiguration)
- assets/ (CSS und JavaScript)
- pictograms/ (Alle Piktogramme)
- partners/ (Partner-Logos)
- Bilder (image001.png, etc.)

---

## 🚀 Upload-Schritte

### Option 1: FTP/SFTP Upload (Empfohlen)

#### 1. FTP-Client installieren

Empfohlene Programme:
- **FileZilla** (kostenlos): https://filezilla-project.org/
- **Cyberduck** (kostenlos): https://cyberduck.io/
- **WinSCP** (Windows): https://winscp.net/

#### 2. FTP-Zugangsdaten vom Hosting-Provider holen

Sie benötigen:
- **Server/Host:** z.B. `ftp.psy-diver.de` oder IP-Adresse
- **Benutzername:** Ihr FTP-Benutzername
- **Passwort:** Ihr FTP-Passwort
- **Port:** 21 (FTP) oder 22 (SFTP)

*Diese Daten finden Sie normalerweise im Kundenbereich Ihres Hosting-Providers (z.B. IONOS, Strato, 1&1, etc.)*

#### 3. Mit FTP verbinden

In FileZilla:
1. Öffnen Sie FileZilla
2. Geben Sie oben ein:
   - Host: `ftp.psy-diver.de`
   - Benutzername: Ihr FTP-User
   - Passwort: Ihr FTP-Passwort
   - Port: 21
3. Klicken Sie auf "Verbinden"

#### 4. Zum richtigen Verzeichnis navigieren

Nach der Verbindung:
- Links sehen Sie Ihren Computer
- Rechts sehen Sie den Server

Navigieren Sie auf dem Server zum **Web-Root-Verzeichnis**:
- Häufige Namen: `public_html/`, `htdocs/`, `www/`, oder `html/`
- Bei manchen Hostern auch direkt das Hauptverzeichnis

#### 5. Alte Dateien löschen (falls vorhanden)

⚠️ **WICHTIG:** Sichern Sie alte Dateien falls vorhanden!

Löschen Sie alte Website-Dateien (aber NICHT Datenbanken oder E-Mail-Ordner!)

#### 6. Neue Dateien hochladen

1. **Auf Ihrem Computer (links):**
   - Navigieren Sie zum Ordner:
     ```
     /Users/anastaninska/Documents/Ana/Courses/AI_Tools/Claude/psy-diver-website/dist/
     ```

2. **ALLE Dateien und Ordner auswählen:**
   - `.htaccess` (wichtig!)
   - `index.html`
   - `assets/` Ordner
   - `pictograms/` Ordner
   - `partners/` Ordner
   - Alle Bilder

3. **Drag & Drop:**
   - Ziehen Sie ALLE ausgewählten Dateien von links nach rechts
   - Oder: Rechtsklick → "Hochladen"

4. **Warten:**
   - Der Upload dauert ca. 1-2 Minuten
   - Fortschrittsbalken unten zeigt den Status

#### 7. Upload überprüfen

Stellen Sie sicher, dass auf dem Server vorhanden sind:
```
/public_html/
  ├── .htaccess          (sehr wichtig!)
  ├── index.html
  ├── vite.svg
  ├── image001.png
  ├── Bunte_Piktogramme.png
  ├── assets/
  │   ├── index-[hash].css
  │   ├── index-[hash].js
  │   └── image001-[hash].png
  ├── pictograms/
  │   ├── person.png
  │   ├── family.png
  │   └── ... (weitere Dateien)
  └── partners/
      ├── innovationsfonds.png
      └── dgppn.png
```

---

### Option 2: Webhosting Control Panel (z.B. Plesk, cPanel)

Falls Ihr Hoster ein Control Panel hat:

1. Melden Sie sich im Control Panel an
2. Suchen Sie "Dateimanager" oder "File Manager"
3. Navigieren Sie zu `public_html/` oder `htdocs/`
4. Klicken Sie auf "Upload" oder "Hochladen"
5. Wählen Sie ALLE Dateien aus dem `dist/` Ordner
6. Laden Sie sie hoch

---

### Option 3: SSH/Terminal (Fortgeschritten)

Falls Sie SSH-Zugang haben:

```bash
# Vom psy-diver-website Ordner aus
cd /Users/anastaninska/Documents/Ana/Courses/AI_Tools/Claude/psy-diver-website/

# Upload via SCP
scp -r dist/* username@psy-diver.de:/var/www/html/

# Oder via rsync (empfohlen)
rsync -avz --delete dist/ username@psy-diver.de:/var/www/html/
```

---

## 🌐 DNS-Einstellungen prüfen

Stellen Sie sicher, dass die Domain auf Ihren Webserver zeigt:

### Bei Ihrem Domain-Provider (DNS-Verwaltung):

**A-Record für Root-Domain:**
```
Type: A
Name: @ (oder leer)
Value: [IP-Adresse Ihres Webservers]
TTL: 3600
```

**CNAME für www:**
```
Type: CNAME
Name: www
Value: psy-diver.de
TTL: 3600
```

*Die IP-Adresse erhalten Sie von Ihrem Hosting-Provider.*

---

## 🔒 SSL-Zertifikat einrichten

Nach dem Upload sollten Sie ein SSL-Zertifikat installieren:

### Mit Let's Encrypt (kostenlos):

Die meisten Hoster bieten Let's Encrypt im Control Panel:
1. Anmelden im Control Panel (Plesk/cPanel)
2. "SSL/TLS" oder "Let's Encrypt" suchen
3. Für `psy-diver.de` und `www.psy-diver.de` aktivieren
4. Automatische Erneuerung aktivieren

### Oder beim Hosting-Support anfragen:
"Ich möchte ein kostenloses SSL-Zertifikat (Let's Encrypt) für www.psy-diver.de installieren."

---

## ✅ Website testen

Nach dem Upload:

1. **Website öffnen:** https://www.psy-diver.de
2. **Alle Seiten testen:**
   - Startseite
   - Über das Projekt
   - Team
   - Neuigkeiten
   - Kontakt
3. **Navigation prüfen:** Alle Links sollten funktionieren
4. **Bilder prüfen:** Alle Bilder und Piktogramme sollten laden
5. **Mobile Version:** Auf Smartphone testen

---

## 🔧 Häufige Probleme und Lösungen

### Problem: "404 Not Found" beim Klicken auf Links

**Lösung:** `.htaccess` Datei fehlt oder wurde nicht hochgeladen
- Stellen Sie sicher, dass `.htaccess` im Root-Verzeichnis liegt
- Prüfen Sie: Zeigt Ihr FTP-Client versteckte Dateien an? (beginnen mit `.`)

### Problem: Seite lädt, aber Bilder fehlen

**Lösung:** Ordner nicht vollständig hochgeladen
- Prüfen Sie, ob `pictograms/` und `partners/` Ordner vorhanden sind
- Laden Sie diese Ordner erneut hoch

### Problem: "500 Internal Server Error"

**Lösung:** Problem mit `.htaccess`
- Löschen Sie `.htaccess` temporär
- Funktioniert die Seite dann? → .htaccess ist das Problem
- Kontaktieren Sie Ihren Hosting-Support

### Problem: CSS/Styling fehlt

**Lösung:** `assets/` Ordner fehlt
- Stellen Sie sicher, dass der gesamte `assets/` Ordner hochgeladen wurde
- Inkl. aller CSS- und JS-Dateien

---

## 📞 Hilfe benötigt?

Falls Probleme auftreten:

1. **Hosting-Provider Support kontaktieren:**
   - Fragen Sie nach FTP-Zugangsdaten
   - Fragen Sie nach dem korrekten Upload-Verzeichnis
   - Fragen Sie nach SSL-Zertifikat-Installation

2. **Mir Bescheid geben:**
   - Welche Fehlermeldung erscheint?
   - Was haben Sie bereits versucht?
   - Screenshots helfen!

---

## 📋 Checkliste

- [ ] FTP-Zugangsdaten vom Hoster erhalten
- [ ] FTP-Client installiert (z.B. FileZilla)
- [ ] Mit FTP verbunden
- [ ] Richtiges Verzeichnis gefunden (public_html/ etc.)
- [ ] Alte Dateien gesichert (falls vorhanden)
- [ ] Alle Dateien aus `dist/` hochgeladen
- [ ] `.htaccess` Datei ist auf dem Server
- [ ] DNS zeigt auf den richtigen Server
- [ ] SSL-Zertifikat installiert
- [ ] Website getestet: www.psy-diver.de

---

**Viel Erfolg beim Upload! 🚀**
