import { DATABASE } from './global-config.json';
import { Pool } from 'pg';

const pool = new Pool(DATABASE);

export default pool;