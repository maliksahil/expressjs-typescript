import Vue from "vue";
import * as BO from '../../BO';

// // tslint:disable no-unused-expression
new Vue({ // eslint-disable-line no-new
    computed: {
    },
    data() {
        return {
            todos: []
        }
    },
    el: "#app",
    methods: {

    },
    mounted() {
        let todos: BO.Todo[] = [
            { "Id": 1, "title": "Integrate Vue.js", "isDone": true },
            { "id": 2, "title": "Refactor this later", "isDone": false },
            { "id": 3, "title": "Write an API", "isDone": false },
            { "id": 4, "title": "Get data from a database", "isDone": false }
        ];
        (<BO.Todo[]>this.todos) = todos;
    }
});
