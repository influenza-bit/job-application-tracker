CREATE DATABASE job_tracker;
\c job_tracker

CREATE TABLE applications (
  id           SERIAL PRIMARY KEY,
  company      VARCHAR(100) NOT NULL,
  role         VARCHAR(100) NOT NULL,
  status       VARCHAR(50)  NOT NULL DEFAULT 'Wishlist',
  link         TEXT,
  notes        TEXT,
  deadline     DATE,
  dateApplied  DATE,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);