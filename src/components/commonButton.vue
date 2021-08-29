<template>
  <div class="commonButton">
    <button
      @click="mClick">{{ innerText }}</button>
  </div>
</template>

<script>
export default {
  name: 'commonButton',
  props: {
    innerText: {
      type: String,
      default: () => "Botão"
    },
    mClick: {
      type: Function,
      default: () => ()=>{}
    }
  }
}
</script>

<style>
.commonButton button { 
  border: solid 1px var(--mainColor);
  margin-top: 5px;
  padding: 3px 10px;
  width: 100%;
  height: 35px;
  background: var(--containersBackground);
  transition:
    background var(--transitionTime),
    color var(--transitionTime),
    border var(--transitionTime);
}

.commonButton button:hover {
  cursor: pointer;
  background: var(--mainColor);
  color: var(--containersBackground);
}

.commonButton button:active {
  color: var(--mainColor);
  background: var(--containersBackground); 
}
</style>

