# Gunakan image Node.js sebagai base image
FROM node:21


# Buat direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file dari proyek lokal ke direktori kerja di dalam container
COPY . .

# Ekspos port yang digunakan oleh Expo
EXPOSE 19000 19001 19002

# Perintah default yang dijalankan saat container dijalankan
CMD ["npx", "expo", "start", "--tunnel"]

