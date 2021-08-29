<template>
  <div class="floatTextInput">
    <span> {{ floatingText }} </span>
    <input
      :id="id"
      :type="type"
      :autocomplete="autocomplete" />
  </div>
</template>

<script>
export default {
  name: "floatTextInput",
  props: {
    floatingText: {
      type: String,
      default: "input"
    },
    type: {
      type: String
    },
    id: {
      type: String
    },
    autocomplete: {
      type: String,
      default: "off"
    }
  }
}
</script>

<style scoped>
.floatTextInput {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.error input{
  border-color: var(--errorColor);
  color: var(--errorColor);
}
.error span{
  color: var(--errorColor);
}
input {
  border: solid 1px var(--mainColor);
  margin-top: 5px;
  padding: 3px 10px;
  box-sizing: border-box;
  width: 100%;
}
span { 
  font-size: 13px;
  margin-left: 10px;
}
</style>
