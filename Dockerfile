FROM node:18.6.0

RUN npm install -g serve

RUN mkdir ./build
COPY ./build ./build

ENTRYPOINT ["serve", "-s", "build"]