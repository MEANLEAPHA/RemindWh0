require('dotenv').config();
const { Pool } = require('pg');
const dbConfig = new Pool({
  host: process.env.PG_DB_HOST,
  user: process.env.postgres.vdfsdzsyouzthauqukau,                          
  password: process.env.PG_DB_PASSWORD,       
  database: process.env.DB_NAME,                        
  port: process.env.DB_PORT,                                
  max: process.env.DB_LIMIT,                                  
  idleTimeoutMillis: process.env.idleTimeoutMillis,
  ssl: { rejectUnauthorized: false }  
});

dbConfig.on('error', (err) => {
  console.error("❌ Unexpected error on DBCONFIG:", err);
});
module.exports = dbConfig;
