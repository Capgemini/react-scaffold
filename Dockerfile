FROM mhart/alpine-node:0.10

MAINTAINER Graham Taylor <gtayzlor@gmail.com>

RUN apk-install make gcc g++ python
RUN npm install -g gulp

WORKDIR /src
ADD . .

RUN npm install

EXPOSE 3000
CMD ["gulp", "serve"]
