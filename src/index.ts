import express, { Application } from 'express';
import imagesRouter from './routes/api/images';
import morgan from 'morgan';

const app: Application = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('API is running');
});
//middle ware
app.use(morgan('dev'));
app.use('/api/images', imagesRouter); // ADD THIS

// used npm run dev to check if the server is up => the server is running on port 3000
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
