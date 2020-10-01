export class Todo {
    id: number;
    title: string;
    isDone: boolean;

    constructor(props: Todo){
        Object.assign(this, props)
    }
}