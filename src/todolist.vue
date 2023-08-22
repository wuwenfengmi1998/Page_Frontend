<script>

import todolist from './components/todolist/todo-list.vue'
import todoinput from './components/todolist/todo-input.vue'
import todobutton from './components/todolist/todo-button.vue'
export default{
    name:"todolistapp",
    data(){
        return{
            thelist:[

            ],
            next_id:1,
            activebtnindex:0,
        }
    },
    methods:{
        onaddnewtask(taskname){
            console.log(taskname)
            this.thelist.push({
                id:this.next_id,
                task:taskname,
                done:false,
            })
            this.next_id+=1
        },

        changebtnindex(index)
        {
            this.activebtnindex=index
        }
    },
    computed:{
        tasklist(){
            switch(this.activebtnindex)
            {
                case 0:
                    return this.thelist
                    break;
                case 1:
                    return this.thelist.filter(x=>x.done===true)
                    break;
                case 2:
                    return this.thelist.filter(x=>x.done!==true)
                    break;
            }
        }
    },
    components:{
        todolist,todoinput,todobutton,
    }
}

</script>

<template>
    <div>todo</div>
    <todoinput @add="onaddnewtask"></todoinput>
    <todolist :list="tasklist"></todolist>
    <todobutton @btnindex="changebtnindex" :active="activebtnindex"></todobutton>
</template>

