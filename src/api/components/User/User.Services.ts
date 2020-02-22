import pool from '../../../utils/db-connection';
import { QueryResult } from 'pg';


const QueryPromise = (query: string): Promise<QueryResult> =>
new Promise((resolve,reject) => {
    console.log(query)
    pool.query(query,
        (error,results) => {
            if(error) {
                reject(error);
            }
            resolve(results)
        });
})



export const getUsers = (name: string): Promise<QueryResult> =>
QueryPromise(`
    SELECT * FROM users
    ${name?`WHERE name LIKE '%${name}%'`:''};
`);


export const addUser = (name: string, email: string): Promise<QueryResult>  => 
QueryPromise(`
    INSERT INTO users (name, email)
        VALUES ('${name}', '${email}');
`);