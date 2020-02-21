import { database } from './global-config.json';
import { Pool } from 'pg';

const pool = new Pool(database);

export default pool;