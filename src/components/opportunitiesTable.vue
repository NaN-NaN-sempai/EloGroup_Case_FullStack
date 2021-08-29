<template>
  <div class="opportunitiesTable">
    <styledTable
      :tableClick="handleErrorClassTable"
      :id="id"
      :headers="headers"
      :content="content"
      :inputClick="checkBoxMarkAll" />
  </div>
</template>

<script>
import checkBoxMarkAll from '@/controllers/checkBoxMarkAll/';
import handleErrorClassTable from '@/controllers/handleErrorClassTable/';

export default {
  name: "opportunitiesTable",
  data: ()=> {
    return {
      headers: ["insertCheckBox", ""]
    }
  },
  props: {
    opportunities: {
      type: Array,
      default: ()=>[]
    },
    id: {
      type: String
    }
  },
  computed: {
      content() {
        return this.opportunities.map(opportunitie => {
          var returnObject = ["insertCheckBox="+opportunitie.toLowerCase().replaceAll(" ", "_"), opportunitie];
          return returnObject;
        })
      }
  },
  components: {
    styledTable: () => import('@/components/styledTable.vue')
  },
  methods: {
    checkBoxMarkAll,
    handleErrorClassTable
  }
}
</script>

<style>
.opportunitiesTable p {
  margin-left: 10px;
}

.opportunitiesTable td, .opportunitiesTable th {;
  text-align: left !important;
  height: 10px !important;
}
 
.opportunitiesTable th:nth-child(1), .opportunitiesTable td:nth-child(1) {
  text-align: center !important;
  width: 10%;
}
</style>