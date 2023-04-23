FROM nginx:latest
WORKDIR /var/www/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./default.conf /etc/nginx/conf.d/
COPY . .
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt update && apt -y install nodejs curl vim
RUN npm install && npm rebuild && npx tailwindcss -i ./assets/css/main.css -o ./assets/css/style.css --watch
