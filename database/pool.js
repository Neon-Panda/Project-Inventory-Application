import pg from "pg";
const { Pool } = pg;
import "dotenv/config";

const pool = new Pool({
  connectionString: process.env.poolInformation,
});

export { pool };
