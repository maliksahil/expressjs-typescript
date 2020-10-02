import dotenv from "dotenv";
import { Client } from "pg";

const init = async () => {
    // read environment variables
    dotenv.config();
    // create an instance of the PostgreSQL client
    const client = new Client();
    await client.connect();
    let result = await client.query( "Select * from Todo" );
    await client.end();
};