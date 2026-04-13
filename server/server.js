import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Contact from './models/Contact.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not set in .env file');
  process.exit(1);
}

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://labishbardiya.com',
    'https://www.labishbardiya.com',
    'https://my-portfolio-hvqh.onrender.com',
    /\.vercel\.app$/,
  ],
}));
app.use(express.json());

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

// contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message, timestamp } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const contact = new Contact({
      name,
      email,
      message,
      timestamp: timestamp || new Date().toISOString(),
    });

    const saved = await contact.save();

    return res.status(200).json({
      message: 'Message saved successfully',
      id: saved._id,
    });
  } catch (error) {
    console.error('MongoDB error:', error);
    return res.status(500).json({ message: 'Failed to save message' });
  }
});

// serve CV files
app.get('/api/resume/:format', (req, res) => {
  const { format } = req.params;
  const resumeDir = path.join(__dirname, 'resume');

  const files = {
    pdf: { filename: 'LabishBardiya_CV.pdf', contentType: 'application/pdf' },
    docx: { filename: 'LabishBardiya_CV.docx', contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
  };

  const file = files[format];
  if (!file) {
    return res.status(400).json({ message: 'Invalid format. Use pdf or docx.' });
  }

  const filePath = path.join(resumeDir, file.filename);
  res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
  res.setHeader('Content-Type', file.contentType);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('File send error:', err);
      res.status(404).json({ message: `${format.toUpperCase()} resume not found` });
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
