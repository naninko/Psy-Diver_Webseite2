# Website Deployment auf www.psy-diver.de

## Übersicht

Sie haben zwei Hauptoptionen, um Ihre Website auf www.psy-diver.de zu hosten:

## Option 1: GitHub Pages mit Custom Domain (Empfohlen)

Dies ist die einfachste Lösung, da Ihre Website bereits auf GitHub Pages läuft.

### Schritte:

1. **GitHub Repository Settings öffnen**
   - Gehen Sie zu: https://github.com/naninko/psy-diver-website
   - Klicken Sie auf "Settings" → "Pages"

2. **Custom Domain einrichten**
   - Unter "Custom domain" geben Sie ein: `www.psy-diver.de`
   - Klicken Sie auf "Save"

3. **DNS-Einstellungen bei Ihrem Domain-Provider anpassen**

   Bei Ihrem Domain-Registrar (z.B. IONOS, Strato, 1&1, etc.) müssen Sie folgende DNS-Einträge erstellen:

   **Für www.psy-diver.de:**
   ```
   Type: CNAME
   Host: www
   Value: naninko.github.io
   TTL: 3600 (oder Standard)
   ```

   **Für psy-diver.de (Root Domain):**
   ```
   Type: A
   Host: @
   Value: 185.199.108.153

   Type: A
   Host: @
   Value: 185.199.109.153

   Type: A
   Host: @
   Value: 185.199.110.153

   Type: A
   Host: @
   Value: 185.199.111.153
   ```

4. **Warten auf DNS-Propagierung**
   - DNS-Änderungen können 24-48 Stunden dauern
   - Normalerweise funktioniert es innerhalb von 1-2 Stunden

5. **HTTPS aktivieren**
   - Nach erfolgreicher DNS-Konfiguration: zurück zu GitHub Pages Settings
   - Aktivieren Sie "Enforce HTTPS"

### Vorteil:
- Kostenlos
- Automatische Updates bei jedem `npm run deploy`
- Kostenloses SSL-Zertifikat
- Keine Server-Verwaltung nötig

---

## Option 2: Traditioneller Webserver/Hosting

Falls Sie einen eigenen Webserver oder Hosting-Paket haben (z.B. bei IONOS, Strato, etc.)

### Schritte:

1. **Vite-Konfiguration für Root-Domain anpassen**

   Bearbeiten Sie `vite.config.js` und ändern Sie `base`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/',  // Ändern von '/psy-diver-website/' zu '/'
     server: {
       host: true,
       port: 5173
     }
   })
   ```

2. **Production Build erstellen**
   ```bash
   npm run build
   ```
   Dies erstellt einen `dist/` Ordner mit allen Website-Dateien.

3. **Dateien auf den Server hochladen**

   **Via FTP/SFTP:**
   - Verwenden Sie einen FTP-Client (z.B. FileZilla, Cyberduck)
   - Verbinden Sie sich mit Ihrem Webserver
   - Laden Sie alle Dateien aus dem `dist/` Ordner in das Root-Verzeichnis hoch
     (normalerweise `/public_html/` oder `/htdocs/`)

   **Via SSH (falls verfügbar):**
   ```bash
   scp -r dist/* username@psy-diver.de:/var/www/html/
   ```

4. **DNS-Einstellungen**

   Bei Ihrem Hosting-Provider muss die Domain auf Ihren Webserver zeigen:
   ```
   Type: A
   Host: @
   Value: [IP-Adresse Ihres Webservers]

   Type: CNAME
   Host: www
   Value: psy-diver.de
   ```

5. **.htaccess für React Router erstellen** (bei Apache)

   Erstellen Sie eine `.htaccess` Datei im Root-Verzeichnis:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Vorteil:
- Volle Kontrolle über den Server
- Kann mit Backend-Services kombiniert werden

### Nachteil:
- Manuelle Updates erforderlich (nach jeder Änderung `npm run build` und Upload)
- Server-Verwaltung nötig
- SSL-Zertifikat muss selbst eingerichtet werden (Let's Encrypt empfohlen)

---

## Empfehlung

**Für Ihr Projekt empfehle ich Option 1 (GitHub Pages mit Custom Domain)**, weil:
1. Sie bereits GitHub Pages verwenden
2. Automatische Deployments mit `npm run deploy`
3. Kostenlos und wartungsarm
4. Professionelles SSL-Zertifikat inklusive
5. Gute Performance durch GitHub's CDN

---

## Nächste Schritte

Sagen Sie mir, welche Option Sie bevorzugen, und ich helfe Ihnen bei der Umsetzung!

**Wichtige Frage:**
- Wo haben Sie die Domain www.psy-diver.de registriert? (z.B. IONOS, Strato, GoDaddy)
- Haben Sie bereits Webhosting oder möchten Sie GitHub Pages nutzen?
