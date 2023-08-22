<script>

export default{
    name:"todobuttn",
    emits:['btnindex'],
    props:{
        active:{
            type:Number,
            required:true,
            default:0
        }
    },
    methods:{
        onbtnclick(index){
            this.$emit('btnindex',index)
        }
    },
}

</script>

<style>
.btn-container{

    text-align: center;
}
</style>

<template>

<div class="mt-3 btn-container">
    <div class="btn-group">
        <button type="button" class="btn" :class="active===0?'btn-primary':'btn-secondary'" @click="onbtnclick(0)">全部</button>
        <button type="button" class="btn" :class="active===1?'btn-primary':'btn-secondary'" @click="onbtnclick(1)">已完成</button>
        <button type="button" class="btn" :class="active===2?'btn-primary':'btn-secondary'" @click="onbtnclick(2)">未完成</button>
    </div>
</div>

</template>