<template>
  <div class="login"> 
        <picture>
          <source media="(min-width:300px)" srcset="@/assets/logo.png">
          <source srcset="@/assets/logo_minimized.png">
          <img class="navLogo" alt="EloGroup logo">
        </picture>

        <div class="loginInputContainer">
          <floatTextInput
            @click.native="registerInput"
            :autocomplete="autocomplete"
            :id="inputUserId"
            :floatingText="inputUserText" />

          <floatTextInput
            @click.native="registerInput"
            :type="inputPasswordIdType"
            :id="inputPasswordId"
            :floatingText="inputPassword" />

          <commonButton
            :mClick="loginButton"
            :innerText="loginButtonText"/>

          <p class="secondButtonTitle">Ainda não tem uma conta?</p>

          <router-link to="/">
            <commonButton
              :innerText="confirmButtonText"/>
          </router-link>
        </div>
  </div>
</template>

<script>
import registerInput from '@/controllers/removeInputError/'; 
import loginButton from '@/controllers/loginButton/'; 

export default {
  name: 'login', 
  mixins: [{
    mounted(){
      /* if user logged, go to leads */
      if(this.$root.$user){
        this.$router.push("leads").catch(()=>{});
      }
    }
  }],
  data: ()=> {
    return {
      autocomplete: "on",

      inputUserText: "Usuário *",
      inputUserId: "loginUserInput",

      inputPassword: "Password *",
      inputPasswordId: "loginPassword",
      inputPasswordIdType: "password",

      confirmButtonText: "Registrar",

      loginButtonText: "Login"
    }
  },
  components: {
    floatTextInput: () => import('@/components/floatTextInput.vue'),
    commonButton: () => import('@/components/commonButton.vue') 
  },
  methods: {
    loginButton,
    registerInput
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loginInputContainer {
  margin-top: 30px;
  margin-bottom: 30px;
}
.floatTextInput {
  margin-bottom: 20px;
}
.secondButtonTitle {
  margin-top: 30px;
}
</style>