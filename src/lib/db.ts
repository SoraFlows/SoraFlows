import mysql from 'mysql2/promise';

// 创建连接池
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

export async function query(sql: string, params: string) {
    const [rows, fields] = await pool.execute(sql, params);

    return rows;
}
