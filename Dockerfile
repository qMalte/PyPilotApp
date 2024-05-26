FROM nginx:latest

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY ./dist/browser/. /usr/share/nginx/html

EXPOSE 80
