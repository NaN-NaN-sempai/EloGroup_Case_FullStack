<template>
  <div class="appContainerHeader">
      <picture>
        <source media="(min-width:660px)" srcset="@/assets/logo.png">
        <source srcset="@/assets/logo_minimized.png">
        <img class="navLogo" alt="EloGroup logo">
      </picture>
      <p class="appContainerHeaderTitle">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'appContainerHeader',
  props: {
    title: String 
  }
}
</script>

<style scoped>
.appContainerHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.navLogo {
  margin: 0;
}
.appContainerHeaderTitle {
  flex-grow: 1;
}
</style>