import Vue from "vue";
import axios from "axios";
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
        axios.get('/api/todos').then(response => {
            this.todos = response.data;
        })
    }
});
