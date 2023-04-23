# MetaDAP Landing Page

### Install lib
```npm install```
### Run tailwindcss
```npx tailwindcss -i ./assets/css/main.css -o ./assets/css/style.css --watch```
##### if permission denied, run this line before:
```npm rebuild ```

### Deploy to host by nginx in ubuntu
1. pull repository to host, recommended setup in /var/www/
``` 
cd /var/www
git pull origin main
# rename file if need
mv metadap_landing_page new_name 
```
2. go to folder /etc/nginx 
```
cd /etc/nginx/ 
```
3. create file in sites-available with name by hostname.endpoint eg:
```nano metadap.com ```
4. setup host, eg:
```
server {
    listen 80;
    listen [::]:80;
    server_name metapdap.com www.metadap.com;
    root /var/www/metadap.com;
    index index.php index.html index.htm index.nginx-debian.html;
    client_max_body_size 100M;
    location / {
        try_files $uri $uri/ =404;
    }
}
```
5. link file to sites-enabled
```sudo ln -s /etc/nginx/sites-available/metadap.com /etc/nginx/sites-enabled/```
6. set up host ip link with domain
7. run certbot to setup ssl, more info in https://certbot.eff.org/pages/help
```certbot```
8. restart nginx
```sudo systemctl restart nginx```