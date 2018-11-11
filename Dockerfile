FROM node:8

WORKDIR /var/www
COPY . /var/www

RUN yarn install --pure-lockfile
RUN yarn cache clean
RUN yarn prod
RUN yarn server

CMD ["yarn", "start"]
