<template>
  <div class="styledButton">
    <commonButton 
      :mClick="mClick"
      :innerText="innerText" />
  </div>
</template>

<script>
export default {
  name: 'styledButton',
  props: {
    innerText: {
      type: String
    },
    mClick: {
      type: Function
    }
  },
  components: {
    commonButton: () => import('@/components/commonButton.vue')
  }
}
</script>

<style>
:root {
  --blueColor: rgb(40, 148, 244);
  --blueHoverColor: rgb(26, 71, 111);
}
.styledButton button { 
  border: none !important;
  color: var(--containersBackground);
  background: var(--blueColor) !important;
}

.styledButton button:hover {
  background: var(--blueHoverColor) !important;
  color: var(--containersBackground);
}

.styledButton button:active {
  border: solid 1px var(--mainColor) !important;
  color: var(--mainColor);
  background: var(--containersBackground) !important; 
}
</style>