FROM node:10.8.0-alpine
COPY ./nuxt /app
WORKDIR /app
RUN npm install
ENV NODE_ENV development
ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm","run","dev"]
