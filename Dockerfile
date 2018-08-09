FROM node:8.11.3-alpine
WORKDIR /app
ADD ./nuxt /app
RUN npm install
ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm","run","dev"]
