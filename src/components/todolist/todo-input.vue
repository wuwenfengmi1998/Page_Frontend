<script>
name : "todoinput"
export default{
name:"todoinput",
emits:['add'],
data(){
    return{
        taskname:'',
        
    }
},
methods:{
    onforsubmit(){
        if(!this.taskname){return alert('任务名不能空')}
        this.$emit('add',this.taskname)
        this.taskname=''
    }
}
}
</script>

<style>

</style>

<template>
<form @submit.prevent="onforsubmit">
  <div class="form-row align-items-center">
    <div class="col-auto">
      <div class="input-group mb-2">     
        <div class="input-group-text">添加任务</div>    
        <input type="text" class="form-control" placeholder="Task.." v-model.trim="taskname">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
    <div class="col-auto">
      
    </div>
  </div>
</form>
</template>