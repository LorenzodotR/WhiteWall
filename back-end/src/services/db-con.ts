import { Pool, PoolConfig } from 'pg';

const poolConfig: PoolConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432, // Default PostgreSQL port
};

const pool = new Pool(poolConfig);

pool.connect();
console.log('Connected to PostgreSQL');