import pool from '../../../utils/db-connection';
import { QueryResult } from 'pg';


const QueryPromise = (query: string): Promise<QueryResult['rows']> =>
new Promise((resolve,reject) => {
    pool.query(query,
        (error,results) => {
            if(error) {
                reject(error);
            }
            resolve(results.rows)
        });
})



export const getUsers = (name: string): Promise<QueryResult['rows']> =>
QueryPromise(`
    SELECT id,name,email FROM users
    ${name?`WHERE name LIKE '%${name}%'`:''};
`);


export const addUser = (name: string, email: string, password: string): Promise<QueryResult['rows']>  => 
QueryPromise(`
    INSERT INTO users (name, email, password)
        VALUES ('${name}', '${email}', '${password}');
`);


export const getUser = (email: string): Promise<QueryResult['rows']> =>
QueryPromise(`
    SELECT * FROM users
    WHERE email = '${email}';
`);