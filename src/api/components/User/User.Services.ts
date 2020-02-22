import pool from '../../../utils/db-connection';
import { QueryResult } from 'pg';


const QueryPromise = (query: string,parameters?: Array<string>): Promise<QueryResult['rows']> =>
new Promise((resolve,reject) => {
    pool.query(query, parameters,
        (error,results) => {
            if(error) {
                console.log(error)
                reject(error);
            }
            resolve(results.rows)
        });
})



export const getUsers = (name: string): Promise<QueryResult['rows']> =>
QueryPromise(`
    SELECT id,name,email FROM users
    ${name?`WHERE name LIKE '%%' || $1 || '%%'`:''};
`, name?[name]:[]
);


export const addUser = (name: string, email: string, password: string): Promise<QueryResult['rows']>  => 
QueryPromise(`
    INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3);
`, [name, email, password]
);


export const getUser = (email: string): Promise<QueryResult['rows']> =>
QueryPromise(`
    SELECT * FROM users
    WHERE email = $1;
`, [email]
);