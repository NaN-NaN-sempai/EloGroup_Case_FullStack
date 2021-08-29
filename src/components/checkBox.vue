<template>
  <div class="checkBox">
    <input
      type="checkbox"
      @click="inputClick"
      :id="id" />
  </div>
</template>

<script>
export default {
  name: 'checkBox',
  props: {
    id: {
        type: String,
        default: () => ""
    },
    inputClick:{
      type: Function,
      default: () => ()=>{}
    }
  }
}
</script>
