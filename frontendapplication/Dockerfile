# Build stage
FROM node:18 as builder
# original was built with Node 14, need the following to fix build error
ENV NODE_OPTIONS="--openssl-legacy-provider"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Web server / production stage
FROM nginx:mainline
LABEL org.opencontainers.image.authors=jeffrey.a.bray@gmail.com
LABEL org.opencontainers.image.title="Springboard Web Frontend"
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
#ENTRYPOINT ["nginx", "-g", "daemon off;"]