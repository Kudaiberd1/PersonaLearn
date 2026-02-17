FROM node:20-alpine

WORKDIR /app

# Копируем только файлы зависимостей для кеширования установки
COPY package*.json ./

# Устанавливаем зависимости (используем npm ci, если есть package-lock.json)
RUN npm ci || npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем продакшен-бандл Vite
RUN npm run build

# Vite preview по умолчанию слушает порт 4173
EXPOSE 4173

# Запускаем Vite preview, доступен снаружи контейнера
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
