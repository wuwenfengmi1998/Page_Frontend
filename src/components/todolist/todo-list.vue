<script>

export default{
    name:"todolist",
    props:{
        list:{
            type: Array,
            required: true,
            default: []
        }
    }
}

</script>

<template>

<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
        </label>
    </div>
    <span class="badge bg-primary rounded-pill">未完成</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
        <label class="form-check-label" for="flexCheckDefault2">
            Default checkbox
        </label>
    </div>
    <span class="badge bg-primary rounded-pill">未完成</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
        <label class="form-check-label" for="flexCheckDefault3">
            Default checkbox
        </label>
    </div>
    <span class="badge bg-primary rounded-pill">未完成</span>
  </li>
</ul>

</template>

