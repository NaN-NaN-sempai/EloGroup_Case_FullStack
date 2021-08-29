<template>
  <div class="loginSuccess">
    <h1>Lead Adicionada!</h1>
    <p>Sua nova Lead agora aparecerá no Painel de Leads!</p>
    <router-link to="/leads">
      <commonButton :innerText="continueText" />
    </router-link>
  </div>
</template>

<script scoped>
import commonButton from '@/components/commonButton.vue'; 

export default {
  name: "loginSuccess",
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
      continueText: "Continuar"
    }
  },
  components: {
    commonButton
  }
}
</script>

<style scoped>
p {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>