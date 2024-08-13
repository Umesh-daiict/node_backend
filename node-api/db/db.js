// const {Pool}  =  require("pg")
import pkg from "pg";
const Pool = pkg.Pool;
// todo save secret
export default new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "users",
});
