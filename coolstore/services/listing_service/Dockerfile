# --- deps: cài node_modules (có cả devDependencies để build)
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# --- build: biên dịch TS -> JS vào dist/
FROM deps AS build
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# --- runtime: chỉ chạy dist
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
# chỉ cần node_modules production
COPY package*.json ./
RUN npm ci --omit=dev
# copy mã đã build
COPY --from=build /app/dist ./dist
# (tùy chọn) copy file .env nếu bạn không dùng env_file trong compose
# COPY .env ./.env
EXPOSE 4001
CMD ["node", "dist/index.js"]
