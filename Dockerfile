FROM node:8

WORKDIR /var/www
COPY . /var/www

RUN yarn install --pure-lockfile \
    && yarn build \
    && yarn cache clean

EXPOSE 8888