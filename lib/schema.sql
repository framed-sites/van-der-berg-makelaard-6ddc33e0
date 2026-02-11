-- Auto-generated database schema
-- Run this file to initialize the database tables

CREATE TABLE IF NOT EXISTS propertys (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS neighborhoods (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS teammembers (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blogposts (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS valuationrequests (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contactmessages (
  id SERIAL PRIMARY KEY,
,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
