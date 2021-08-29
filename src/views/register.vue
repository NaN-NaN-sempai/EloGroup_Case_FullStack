<template>
  <div class="register"> 
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

          <floatTextInput
            @click.native="registerInput"
            :type="inputConfirmPasswordType"
            :id="inputConfirmPasswordId"
            :floatingText="inputConfirmPassword" />

          <commonButton
            :mClick="buttonRegister"
            :innerText="confirmButtonText"/>

          <p class="secondButtonTitle">Já tem uma conta?</p>

          <router-link to="/login">
            <commonButton
              :innerText="loginButtonText"/>
          </router-link>
        </div>
  </div>
</template>

<script>
import registerInput from '@/controllers/removeInputError/'; 
import buttonRegister from '@/controllers/registerButton/'; 

export default {
  name: 'register', 
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

      inputConfirmPassword: "Confirmação Password *",
      inputConfirmPasswordId: "loginConfirmPassword",
      inputConfirmPasswordType: "password",

      confirmButtonText: "Registrar",

      loginButtonText: "Login"
    }
  },
  components: {
    floatTextInput: () => import('@/components/floatTextInput.vue'),
    commonButton: () => import('@/components/commonButton.vue') 
  },
  methods: {
    buttonRegister,
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