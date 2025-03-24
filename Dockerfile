# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy application code
COPY . .

# Build the React application
RUN npm run build

# Expose port for the application
EXPOSE 3000

# Start the Express server
CMD ["node", "server.js"]
