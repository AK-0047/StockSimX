const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/trade', require('./routes/trade'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
