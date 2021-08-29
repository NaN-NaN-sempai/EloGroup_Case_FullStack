<template>
  <div class="addLead">
    <appContainerHeader :title="title" />
    <div class="subContainer">
      <div class="leadInfos">
        <floatTextInput
          @click.native="removeInputError"
          :id="nameId"
          :floatingText="name" />

        <floatTextInput
          @click.native="removeInputError"
          :id="telId"
          :floatingText="tel" />

        <floatTextInput
          @click.native="removeInputError"
          :id="emailId"
          :floatingText="email" />
      </div>

      <div class="opportunities"
        @click="removeTableError(opportunitiesId)"
        :id="opportunitiesId">
        <span> {{ opportunitiesText }} </span>
        <opportunitiesTable
          :opportunities="opportunities"/>

        <styledButton 
          :mClick="saveNewLead"
          :innerText="confirmButtonText" />

        <commonButton  
          :mClick="goToLeads"
          :innerText="goBakcButton" />
      </div>
    </div> 
  </div>
</template>

<script>
import lsData from '@/controllers/localStorage/';
import saveNewLead from '@/controllers/saveNewLead/';
import removeInputError from '@/controllers/removeInputError/'; 
import removeTableError from '@/controllers/removeTableError/'; 

export default {
  name: 'addLead', 
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
      title: "Novo Lead",
      confirmButtonText: "Salvar ",
      goBakcButton: "Voltar",

      nameId: "leadInfosName",
      name: "Nome *",

      telId: "leadInfosTel",
      tel: "Telefone *",

      emailId: "leadInfosEmail",
      email: "Email *",

      opportunitiesText: "Oportunidades *",
      
      opportunitiesId: "opportunitiesId",

      opportunities: lsData.getOpportunities()
    }
  },
  components: {
    appContainerHeader: () => import('@/components/appContainerHeader.vue'),
    floatTextInput: () => import('@/components/floatTextInput.vue'),
    opportunitiesTable: () => import('@/components/opportunitiesTable.vue'),
    commonButton: () => import('@/components/commonButton.vue'),
    styledButton: () => import('@/components/styledButton.vue')
  },
  methods: {
    saveNewLead,
    removeInputError,
    removeTableError,
    goToLeads: function(event) {
      event.stopPropagation();
      this.$router.push("/leads").catch(()=>{});
    }
  }
}
</script>

<style>
.subContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.leadInfos {
  width: 200px;
  margin-bottom: 50px;
}
.leadInfos .floatTextInput {
  margin-bottom: 20px;
}
.opportunities {
  margin-left: 50px;
  margin-right: 50px;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
span { 
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 5px;
}
.opportunities span {
  margin-top: 5px;
}
.styledButton, .commonButton{
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}
.opportunities.error span{
  color: var(--errorColor);
}
.opportunities.error table {
  border-color: var(--errorColor) !important;
}
.opportunities.error td, .opportunities.error th {
  border-color: var(--errorColor) !important;
}
.opportunitiesTable {
  margin-top: 5px;
}
</style>