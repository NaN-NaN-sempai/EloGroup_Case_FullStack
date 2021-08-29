<template>
  <div class="registerSuccess">
    <h1>Registro feito com sucesso!</h1>
    <p>Bem-vindo, <b>{{ userName }}</b>!</p>
    <router-link to="/leads">
      <commonButton :innerText="continueText" />
    </router-link>
  </div>
</template>

<script scoped>
import commonButton from '@/components/commonButton.vue';

export default {
  name: "registerSuccess",
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
  },
  computed: {
      userName() {
        return this.$user?.username
      }
  }
}
</script>

<style scoped>
p {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>