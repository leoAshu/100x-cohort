import dotenv from 'dotenv'
dotenv.config()

import { Client } from 'pg'

const client = new Client({
    connectionString: process.env.DB_URL
})

const connectClient = async () => {
    try {
        await client.connect()
        console.log('Connected to DB')
    } catch (err) {
        console.log(err)
    }
}

const createUsersTable = async () => {
    await connectClient()

    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

createUsersTable()
