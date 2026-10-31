import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 5050;

import swaggerUi from 'swagger-ui-express';
import authRouter from './routes/auth.routes.js';
import applicationsRouter from './routes/applications.routes.js';
import YAML from 'yamljs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createEvent, deleteEvent, editEvent, getEvents } from './calendar.js';
import {
  getApplied,
  getOnlineAssessments,
  getInterviews,
  getBehaviouralInterviews,
  getTechnicalInterviews,
  getOffers,
  getDeclined,
  getRejections,
  getCompanies,
  getRoles,
  getCompanyTypes,
  getResponseTime,
  getApplicationsByDay,
} from './analytics.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = YAML.load(
  path.join(__dirname, 'swagger.yaml')
);

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.get('/', (req, res) => {
  res.send('Job Tracker backend is running!');
});

// APPLICATIONS /////////////////////////////////////////////////////////////////
app.use('/applications', applicationsRouter);

// AUTH ROUTES /////////////////////////////////////////////////////////////////
app.use('/auth', authRouter);

// CALENDAR ////////////////////////////////////////////////////////////////////
app.get('/calendar/events', getEvents);
app.post('/calendar/create-event', createEvent);
app.delete('/calendar/delete-event/:id', deleteEvent);
app.patch('/calendar/edit-event/:id', editEvent);


// ANALYTICS ///////////////////////////////////////////////////////////////////
app.get('/analytics/applied', getApplied);
app.get('/analytics/oa', getOnlineAssessments);
app.get('/analytics/interviews', getInterviews);
app.get('/analytics/interviews/behavioural', getBehaviouralInterviews);
app.get('/analytics/interviews/technical', getTechnicalInterviews);
app.get('/analytics/offers', getOffers);
app.get('/analytics/declined', getDeclined);
app.get('/analytics/rejections', getRejections);
app.get('/analytics/companies', getCompanies);
app.get('/analytics/roles', getRoles);
app.get('/analytics/company-types', getCompanyTypes);
app.get('/analytics/response-time/:id', getResponseTime);
app.get('/analytics/applications-by-day', getApplicationsByDay);


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message,
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (error) => {
  console.error('SERVER ERROR:', error);
});