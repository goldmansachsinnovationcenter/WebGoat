import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the React build
app.use(express.static(path.join(__dirname, 'dist')));

// Handle API requests or proxy them to the backend
// Example proxy setup (commented out for now)
/*
import { createProxyMiddleware } from 'http-proxy-middleware';
app.use('/WebGoat/service', createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true,
}));
*/

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
