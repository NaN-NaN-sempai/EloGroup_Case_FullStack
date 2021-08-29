<template>
  <div class="leadsTable">
    <styledTable
      :controller="changeLeadState"
      :headers="headers"
      :content="content" />
  </div>
</template>

<script>
import lsData from '@/controllers/localStorage/';

import changeLeadState from '@/controllers/changeLeadState/';

export default {
  name: "leadsTable",
  data: ()=> {
    return {
      headers: lsData.getLeadStates(),
    }
  },
  computed: {
      content() {
        // prevent error
        var leads = this.$root?.$user?.leads || []; 

        return leads.map(lead => {
          var returnObject = this.headers.map(e => e == lead.state? lead.name: "");
          return returnObject;
        })
      }
  },
  components: {
    styledTable: () => import('@/components/styledTable.vue')
  },
  methods: {
    changeLeadState
  }
}
</script>