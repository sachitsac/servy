FROM node:14.16.0

WORKDIR /usr/src
ENV NODE_ENV production

RUN chmod useradd -m app_user

USER app_user

