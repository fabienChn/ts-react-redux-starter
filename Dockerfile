# Stage 1 - the build process
FROM node:8-alpine as base
WORKDIR /app
ADD . .
ARG PORT
ENV PORT=${PORT} \
    NODE_PATH=/node_modules \
    PATH=$PATH:/node_modules/.bin
RUN yarn install

FROM base as builder
RUN yarn build

EXPOSE 80
