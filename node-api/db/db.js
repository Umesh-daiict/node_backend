import dotenv from "dotenv";

dotenv.config({ debug: true, path:`.env.${process.env.NODE_ENV}`});
import pkg from "pg";
const Pool = pkg.Pool;
export default new Pool({
  user: process.env.db_user,
  host: process.env.db_host,
  port: process.env.db_port,
  database: process.env.db_database,
  password: process.env.db_password,
});
