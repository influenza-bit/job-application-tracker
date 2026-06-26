const express = require('express');
const cors = require('cors');
require('dotenv').config();

const applicationsRouter = require('./routes/applications');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/applications', applicationsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
