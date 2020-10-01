import * as BO from "../BO";

export class DataService {
    static async getTodos(): Promise<BO.Todo[]> {
        const toReturn = [
            { "id": 1, "title": "Integrate Vue.js", "isDone": true },
            { "id": 2, "title": "Refactor this later", "isDone": true },
            { "id": 3, "title": "Write an API", "isDone": true },
            { "id": 4, "title": "Get data from a database", "isDone": false }
        ];
        return toReturn;
    }
}