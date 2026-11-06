# Etapa 1: Construcción de React con Vite
FROM node:20-alpine AS build

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY . .

# Compilar aplicación
RUN npm run build

# Etapa 2: Preparar archivos para Nginx
FROM alpine:3.20

WORKDIR /app

COPY --from=build /app/dist /app/dist

CMD ["sh", "-c", "rm -rf /output/* && cp -a /app/dist/. /output/"]