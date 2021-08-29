<template>
  <div class="leads">
    <appContainerHeader :title="title" />   
    
    <router-link to="/addLead">
      <styledButton 
        :innerText="confirmButtonText" />
    </router-link>
    
    <leadsTable />
  </div>
</template>

<script>
export default {
  name: 'leads', 
  mixins: [{
    mounted(){
      /* if user is not logged, return to register */
      if(!this.$root.$user){
        this.$router.push("/").catch(()=>{});
      }
    }
  }],
  data: ()=> {
    return {
      title: "Painel de Leads",
      confirmButtonText: "Novo Lead (+)"
    }
  },
  components: {
    appContainerHeader: () => import('@/components/appContainerHeader.vue'),
    styledButton: () => import('@/components/styledButton.vue'),
    leadsTable: () => import('@/components/leadsTable.vue')
  }
}
</script>

<style scoped>
.styledButton {
  margin-bottom: 10px;
  width: 33.5%;
}
</style>