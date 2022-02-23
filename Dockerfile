FROM node:alpine

ARG NUXT_HOST="localhost"
ARG NUXT_PORT="3000"
ARG NODE_OPTIONS=--openssl-legacy-provider

ENV NUXT_HOST=${NUXT_HOST}
ENV NUXT_PORT=${NUXT_PORT}

WORKDIR '/app/'

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000

# RUN ["chmod", "+x", "entrypoint.sh"]

# ENTRYPOINT [ "./entrypoint.sh" ]
ENTRYPOINT ["tail", "-f", "/dev/null"]
