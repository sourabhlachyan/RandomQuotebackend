const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');

const app = express();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const QuoteSchema = new mongoose.Schema({
  text: String
});
const Quote = mongoose.model('Quote', QuoteSchema);

app.use(cors());

app.get('/quotes', async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
