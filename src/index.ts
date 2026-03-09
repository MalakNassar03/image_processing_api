import express, { Application } from 'express';
import imagesRouter from './routes/api/images';

const app: Application = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('API is running');
});
//middle ware
app.use('/api/images', imagesRouter); // ADD THIS

// used npm run dev to check if the server is up => the server is running on port 3000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
