const { drizzle } = require('drizzle-orm/node-postgres');
const { Pool } = require('pg');

// NOTE: Hardcoded credentials are used here for simplicity in this lab.
// In a real project, always use environment variables (e.g. process.env.DB_PASSWORD).
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'nodejs_course_admin',
  password: 'my_password',
  database: 'nodejs_course_database',
});

const db = drizzle(pool);

module.exports = { db };
