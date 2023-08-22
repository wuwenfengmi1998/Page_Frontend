<script>
name : "todoinput"
export default{
name:"todoinput",
emits:['add'],
data(){
    return{
        taskname:'',
        placeholder:'Task..',
    }
},
methods:{
    onforsubmit(){
        if(!this.taskname){
          this.placeholder="输入不能为空"
        }else{
          this.$emit('add',this.taskname)
          this.placeholder='Task..'
          this.taskname=''
        }
        
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
        <input type="text" class="form-control" :placeholder="placeholder" v-model.trim="taskname">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
    <div class="col-auto">
      
    </div>
  </div>
</form>
</template>