import dotenv from "dotenv";
import { Client } from "pg";
import * as BO from "../BO";

export class DataService {
    static async getTodos(): Promise<BO.Todo[]> {
        dotenv.config();
        const client = new Client();
        try {
            await client.connect();
            const sql = "SELECT id, title, isDone FROM TODO";
            const results = await client.query(sql);
//            return results.rows;
            const toReturn: BO.Todo[] = [];
            results.rows.forEach(row => {
                toReturn.push(new BO.Todo(row));
            })
            return toReturn;
        } catch (err) {
            throw err;
        } finally {
            await client.end();
        }
    }
}