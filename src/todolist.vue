<script>

import todolist from './components/todolist/todo-list.vue'
import todoinput from './components/todolist/todo-input.vue'
export default{
    name:"todolistapp",
    data(){
        return{
            thelist:[
                {id:1,task:"123",done:false},
                {id:2,task:"456",done:false},
                {id:3,task:"789",done:false},
                {id:4,task:"121",done:false},
            ]
        }
    },
    components:{
        todolist,todoinput,
    }
}

</script>

<template>
    <div>todo</div>
    <todoinput></todoinput>
    <todolist :list="thelist"></todolist>
    
</template>

