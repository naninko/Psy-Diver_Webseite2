# Website Upload für Hetzner Hosting

## Hetzner-spezifische Anleitung für www.psy-diver.de

---

## Schritt 1: Hetzner-Zugang prüfen

Hetzner bietet verschiedene Hosting-Typen. Prüfen Sie, was Sie haben:

### A) **Webhosting-Paket** (konsoleH)
- Sie loggen sich ein unter: https://www.hetzner.com/konsoleH
- Meist mit Plesk Control Panel
- FTP-Zugang vorhanden

### B) **Managed Server / Root-Server**
- SSH-Zugang vorhanden
- Mehr technische Kontrolle
- Oft mit Plesk oder direkter Server-Zugriff

**→ Welchen Typ haben Sie?** Die weiteren Schritte hängen davon ab.

---

## Option 1: Hetzner Webhosting mit Plesk (am häufigsten)

### 1.1 Plesk Login

1. Gehen Sie zu: **https://www.hetzner.com/konsoleH**
2. Melden Sie sich mit Ihren Hetzner-Zugangsdaten an
3. Wählen Sie Ihr Webhosting-Paket aus
4. Klicken Sie auf "Plesk öffnen" oder "Control Panel"

### 1.2 FTP-Zugangsdaten finden

In Plesk:
1. Klicken Sie links auf **"Websites & Domains"**
2. Finden Sie **psy-diver.de**
3. Klicken Sie auf **"FTP-Zugang"** oder **"Hosting-Einstellungen"**
4. Notieren Sie sich:
   - **FTP-Server:** Meistens `psy-diver.de` oder eine IP-Adresse
   - **Benutzername:** Oft die Domain oder ein spezieller FTP-User
   - **Passwort:** Setzen Sie ggf. ein neues Passwort

### 1.3 FileZilla Setup für Hetzner

**FTP-Verbindung einrichten:**

```
Host: psy-diver.de
(oder die IP-Adresse aus Plesk)

Protokoll: SFTP - SSH File Transfer Protocol
(sicherer als normales FTP!)

Port: 22

Benutzername: [Ihr FTP-Benutzername]
Passwort: [Ihr FTP-Passwort]
```

**In FileZilla:**
1. Öffnen Sie FileZilla
2. Gehen Sie zu: **Datei** → **Servermanager**
3. Klicken Sie auf **"Neuer Server"**
4. Name: "Hetzner - PSY-DIVER"
5. Geben Sie die obigen Daten ein
6. Klicken Sie auf **"Verbinden"**

### 1.4 Upload-Verzeichnis bei Hetzner

Nach der Verbindung navigieren Sie zum **Web-Root**:

**Typische Hetzner-Pfade:**
- `/httpdocs/` ← **Dies ist bei Hetzner/Plesk das richtige Verzeichnis!**
- oder `/httpdocs/psy-diver.de/`

**WICHTIG:** Bei Hetzner heißt das Verzeichnis meist `httpdocs`, NICHT `public_html`!

### 1.5 Dateien hochladen

1. **Links in FileZilla:** Navigieren Sie zu:
   ```
   /Users/anastaninska/Documents/Ana/Courses/AI_Tools/Claude/psy-diver-website/dist/
   ```

2. **Rechts in FileZilla:** Navigieren Sie zu:
   ```
   /httpdocs/
   ```

3. **Alle Dateien auswählen:**
   - Markieren Sie ALLE Dateien und Ordner im `dist/` Verzeichnis
   - Drag & Drop nach rechts auf den Server
   - Oder: Rechtsklick → "Hochladen"

4. **Upload-Dauer:** ca. 1-2 Minuten

### 1.6 SSL-Zertifikat in Plesk aktivieren

**Let's Encrypt kostenlos einrichten:**

1. In Plesk, gehen Sie zu **"Websites & Domains"**
2. Wählen Sie **psy-diver.de**
3. Klicken Sie auf **"SSL/TLS-Zertifikate"**
4. Klicken Sie auf **"Let's Encrypt"** (grünes Schloss-Symbol)
5. Aktivieren Sie:
   - ☑ Domain sichern: psy-diver.de
   - ☑ www.psy-diver.de auch sichern
   - ☑ Zertifikat automatisch erneuern
6. Klicken Sie auf **"Kostenlos nutzen"** oder **"Installieren"**

**HTTPS erzwingen:**
1. Zurück zu "Websites & Domains"
2. Klicken Sie auf **"Hosting-Einstellungen"**
3. Aktivieren Sie: **"Permanente, SEO-sichere Umleitung von HTTP auf HTTPS"**
4. Speichern

---

## Option 2: Hetzner Server mit SSH-Zugang

Falls Sie einen Hetzner Server oder VPS mit SSH-Zugang haben:

### 2.1 SSH-Verbindung

**Von Ihrem Mac Terminal aus:**

```bash
ssh username@psy-diver.de
# oder
ssh username@[Server-IP-Adresse]
```

Geben Sie Ihr Passwort ein (oder nutzen Sie SSH-Keys falls eingerichtet)

### 2.2 Upload via SCP

**Vom psy-diver-website Ordner aus:**

```bash
cd /Users/anastaninska/Documents/Ana/Courses/AI_Tools/Claude/psy-diver-website/

# Upload aller Dateien
scp -r dist/* username@psy-diver.de:/var/www/html/
```

**Oder mit rsync (empfohlen):**

```bash
rsync -avz --delete dist/ username@psy-diver.de:/var/www/html/
```

### 2.3 Berechtigungen setzen

**Nach dem Upload auf dem Server:**

```bash
# Mit SSH verbunden, auf dem Server ausführen:
cd /var/www/html/

# Berechtigungen setzen
chmod -R 755 .
chown -R www-data:www-data .

# Falls Apache
sudo systemctl restart apache2

# Falls Nginx
sudo systemctl restart nginx
```

### 2.4 SSL mit Certbot (Let's Encrypt)

```bash
# Certbot installieren (falls nicht vorhanden)
sudo apt update
sudo apt install certbot python3-certbot-apache

# SSL-Zertifikat einrichten
sudo certbot --apache -d psy-diver.de -d www.psy-diver.de

# Automatische Erneuerung testen
sudo certbot renew --dry-run
```

---

## DNS-Einstellungen bei Hetzner

Falls die Domain auch bei Hetzner registriert ist:

### In der Hetzner DNS-Verwaltung:

1. Login: https://dns.hetzner.com/
2. Wählen Sie Ihre Zone: **psy-diver.de**
3. Fügen Sie folgende Records hinzu:

**A-Record (Root-Domain):**
```
Name: @
Type: A
Value: [IP-Adresse Ihres Hetzner Servers]
TTL: 3600
```

**A-Record (www):**
```
Name: www
Type: A
Value: [IP-Adresse Ihres Hetzner Servers]
TTL: 3600
```

**Alternativ CNAME für www:**
```
Name: www
Type: CNAME
Value: psy-diver.de
TTL: 3600
```

### IP-Adresse herausfinden:

**In Plesk:**
- Websites & Domains → Ihre Domain → Hosting-Einstellungen
- Oder in der konsoleH unter "Server-Details"

**Via SSH:**
```bash
curl ifconfig.me
```

---

## Hetzner Robot (Falls Sie Server-Zugang haben)

Falls Sie den Hetzner Robot verwenden:

1. Login: https://robot.hetzner.com/
2. Wählen Sie Ihren Server
3. Notieren Sie die IP-Adresse
4. Prüfen Sie die Firewall-Einstellungen:
   - Port 80 (HTTP) muss offen sein
   - Port 443 (HTTPS) muss offen sein

---

## Apache .htaccess Konfiguration

Die `.htaccess` Datei wurde bereits erstellt und ist im `dist/` Ordner enthalten.

**Falls Apache mod_rewrite nicht aktiv ist:**

```bash
# Via SSH auf dem Server
sudo a2enmod rewrite
sudo systemctl restart apache2
```

**Virtual Host Konfiguration prüfen:**

```bash
sudo nano /etc/apache2/sites-available/psy-diver.de.conf
```

Stellen Sie sicher, dass `AllowOverride All` gesetzt ist:

```apache
<Directory /var/www/html>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

---

## Nginx Konfiguration (Falls Sie Nginx nutzen)

**Nginx unterstützt .htaccess NICHT!**

Falls Ihr Server Nginx verwendet, brauchen Sie diese Konfiguration:

```nginx
server {
    listen 80;
    server_name psy-diver.de www.psy-diver.de;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Konfiguration aktivieren:**

```bash
sudo nano /etc/nginx/sites-available/psy-diver.de
# Fügen Sie obige Konfiguration ein

sudo ln -s /etc/nginx/sites-available/psy-diver.de /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## Troubleshooting - Hetzner-spezifisch

### Problem: "403 Forbidden"

**Lösung:** Berechtigungen prüfen

```bash
# Via SSH
cd /var/www/html/
ls -la

# Sollte sein: drwxr-xr-x (755 für Ordner, 644 für Dateien)
sudo chmod -R 755 .
sudo chown -R www-data:www-data .
```

### Problem: ".htaccess wird ignoriert"

**Lösung:** AllowOverride aktivieren

```bash
sudo nano /etc/apache2/sites-available/psy-diver.de.conf

# Ändern Sie:
AllowOverride None
# Zu:
AllowOverride All

sudo systemctl restart apache2
```

### Problem: "Seite lädt, aber kein HTTPS"

**Lösung 1 (Plesk):**
- Plesk → SSL/TLS-Zertifikate → Let's Encrypt installieren

**Lösung 2 (SSH):**
```bash
sudo certbot --apache -d psy-diver.de -d www.psy-diver.de
```

### Problem: "Connection refused" bei SFTP

**Lösung:** Prüfen Sie, ob SSH aktiv ist

```bash
# Port 22 muss offen sein
telnet psy-diver.de 22

# Falls nicht, in Hetzner Robot/Firewall Port 22 freigeben
```

---

## Hetzner Support kontaktieren

Falls Sie Hilfe benötigen:

**E-Mail:** support@hetzner.com
**Telefon:** +49 (0)9831 505-0
**Support-Portal:** https://docs.hetzner.com/de/

**Hilfreich zu fragen:**
- "Wo ist mein Web-Root-Verzeichnis für psy-diver.de?"
- "Wie aktiviere ich Let's Encrypt SSL für meine Domain?"
- "Meine FTP/SFTP-Zugangsdaten funktionieren nicht"

---

## Quick Start - Zusammenfassung für Hetzner

1. **Plesk öffnen:** https://www.hetzner.com/konsoleH
2. **FTP-Daten holen:** Websites & Domains → FTP-Zugang
3. **FileZilla verbinden:** SFTP, Port 22
4. **Upload nach:** `/httpdocs/`
5. **SSL aktivieren:** Plesk → SSL/TLS → Let's Encrypt
6. **Testen:** https://www.psy-diver.de

---

## Checkliste für Hetzner-Upload

- [ ] Hetzner konsoleH Login funktioniert
- [ ] Plesk Control Panel geöffnet
- [ ] FTP/SFTP-Zugangsdaten notiert
- [ ] FileZilla installiert und verbunden
- [ ] Navigiert zu `/httpdocs/` Verzeichnis
- [ ] Alle Dateien aus `dist/` hochgeladen
- [ ] `.htaccess` Datei ist auf dem Server vorhanden
- [ ] Let's Encrypt SSL-Zertifikat installiert
- [ ] HTTPS-Redirect aktiviert
- [ ] Website getestet: https://www.psy-diver.de
- [ ] Mobile Version getestet

**Viel Erfolg! 🚀**

Bei Fragen melden Sie sich gerne!
