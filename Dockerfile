FROM webdevops/php-nginx-dev:8.5-alpine

# Instala Node.js e npm
RUN apk add --no-cache nodejs npm

WORKDIR /var/www/html

ENV WEB_DOCUMENT_ROOT=/var/www/html/public

EXPOSE 80
