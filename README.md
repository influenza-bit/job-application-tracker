# Job Application Tracker

A full-stack web application designed to help job seekers organise, manage and track their job applications throughout the recruitment process.

**[Live Demo](https://job-application-tracker-theta-taupe.vercel.app/)**

---

## Overview

Managing multiple job applications across different companies, roles and recruitment stages can quickly become overwhelming. Job Application Tracker provides a centralised dashboard to organise applications, monitor progress, track interviews and visualise job-search activity.

Built with React, TypeScript and Node.js, the application combines application management, analytics and calendar functionality in one place.

## Features

### Authentication & Account Management
- User registration and login.
- JWT-based authentication.
- Protected application data and user-specific access controls.
- Password management and account functionality.

### Application Management
- Add, edit and delete job applications.
- Track application details, including company, role, application date and recruitment status.
- Search, filter and organise applications.
- Manage recruitment stages, from wishlist and application submission through interviews and offers.

### Dashboard & Analytics
- Centralised dashboard for an overview of application activity.
- Interactive charts and visualisations using Chart.js.
- Track application statuses, interview progress and recruitment outcomes.
- Analyse application trends and response times.

### Calendar
- Create, edit and delete calendar events.
- Keep track of interviews, assessments and important recruitment dates.
- View upcoming events in one place.

---

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React, TypeScript, Vite |
| Styling | Tailwind CSS, CSS |
| Backend | Node.js, Express.js |
| Database | Firebase Firestore |
| Authentication | JSON Web Tokens (JWT) |
| Data Visualisation | Chart.js |
| API Communication | REST APIs |
| Deployment | Vercel (Frontend), Render (Backend) |
| Version Control | Git, GitHub |

---

## Deployment

The application is deployed using:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** Firebase Firestore

The frontend uses the `VITE_API_URL` environment variable to communicate with the deployed backend.

For production deployment, configure the environment variables in the respective hosting platforms. Backend credentials and secrets should never be committed to the repository.

---

## Security Considerations

- JWT-based authentication for protected routes.
- Server-side authentication and authorisation checks.
- User ownership validation to prevent unauthorised access to other users' application records.
- Environment variables used to manage sensitive backend configuration.

---

## Future Improvements

- Advanced application filtering and sorting.
- Email notifications for upcoming interviews and application deadlines.
- Enhanced analytics and recruitment insights.
- Additional dashboard customisation.
- Improved application reminders and follow-up tracking.

---

*Built to make the job application process more organised, manageable and measurable.*